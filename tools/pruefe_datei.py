"""
Prüft eine einzelne Fragendatei, ohne etwas zu schreiben – praktisch beim Schreiben neuer Fragen.

    py tools/pruefe_datei.py inhalt/fragen/diesel.py
    py tools/pruefe_datei.py inhalt/fragen/diesel.py --laenge   # zusätzlich alle Fragen mit auffälliger Antwortlänge

Zeigt Fehler, Anzahl je Fragetyp, Aufgabensätze (Aufgaben/Punkte), Fragen mit Bild und wie oft
die richtige Multiple-Choice-Antwort die längste bzw. kürzeste ist (Ziel: jeweils höchstens 35 %).
"""

import collections
import importlib.util
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import export  # noqa: E402

GRENZE = 0.35
PUNKTE = {"mc": 2, "zahl": 3, "reihenfolge": 4, "offen": 4, "zuordnung": 4}


def laengen_auffaellig(q):
    """'lang' bzw. 'kurz', wenn die richtige Antwort eindeutig die längste bzw. kürzeste ist."""
    laengen = [len(o) for o in q["opts"]]
    richtig = laengen[q["correct"]]
    andere = laengen[:q["correct"]] + laengen[q["correct"] + 1:]
    if richtig > max(andere):
        return "lang"
    if richtig < min(andere):
        return "kurz"
    return None


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    pfad = sys.argv[1]
    spec = importlib.util.spec_from_file_location("datei", pfad)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    qs = mod.QUESTIONS
    sits = getattr(mod, "SITUATIONEN", {})
    fehler = export.validate(qs, sits)
    print(f"{len(qs)} Fragen, Typen: {dict(collections.Counter(export.typ_von(q) for q in qs))}")
    for sid in sits:
        satz = [q for q in qs if q.get("situation") == sid]
        pkt = sum(q.get("pkt", PUNKTE[export.typ_von(q)]) for q in satz)
        print(f"Aufgabensatz {sid}: {len(satz)} Aufgaben (15–21), {pkt} Punkte (60–100)")
    bilder = collections.Counter(q["bild"] for q in qs if "bild" in q)
    print(f"Fragen mit Bild: {sum(bilder.values())} – {dict(bilder)}")
    mc = [q for q in qs if export.typ_von(q) == "mc" and isinstance(q.get("opts"), list) and len(q["opts"]) > 1
          and isinstance(q.get("correct"), int) and 0 <= q["correct"] < len(q["opts"])]
    art = [laengen_auffaellig(q) for q in mc]
    for wort in ("lang", "kurz"):
        n = art.count(wort)
        anteil = n / len(mc) if mc else 0
        marke = "OK" if anteil <= GRENZE else "ZU OFT"
        print(f"Richtige Antwort ist die {'längste' if wort == 'lang' else 'kürzeste'}: {n}/{len(mc)} = {anteil:.0%} ({marke})")
    if "--laenge" in sys.argv:
        for q, a in zip(mc, art):
            if a:
                print(f"  [{a}] {q['q'][:90]}")
    if fehler:
        print(f"{len(fehler)} Fehler:")
        for e in fehler:
            print("  -", e)
        sys.exit(1)
    print("OK")


if __name__ == "__main__":
    main()
