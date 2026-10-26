"""
Prüft die Fragenbank (inhalt/fragen/*.py) und schreibt sie als JavaScript-Modul nach inhalt/fragen.js.

    python tools/export.py           # prüfen + exportieren
    python tools/export.py --check   # nur prüfen, ob inhalt/fragen.js aktuell ist (GitHub Actions)
    python tools/export.py --stats   # Anzahl je Bereich und Fragetyp anzeigen

Jede Datei in inhalt/fragen/ definiert QUESTIONS = [...] und optional SITUATIONEN = {...}.
Die Fragen-ID entsteht aus Bereich, Fragetext und den Kerndaten des Fragetyps. Wer eine Frage
inhaltlich ändert, bekommt eine neue ID – der Lernfortschritt dieser Frage beginnt dann neu.
"""

import collections
import glob
import hashlib
import importlib.util
import json
import os
import sys

TOOLS_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(TOOLS_DIR)
FRAGEN_DIR = os.path.join(ROOT_DIR, "inhalt", "fragen")
BILDER_DIR = os.path.join(ROOT_DIR, "inhalt", "bilder")
OUT_FILE = os.path.join(ROOT_DIR, "inhalt", "fragen.js")
TYPEN = ("mc", "offen", "zahl", "reihenfolge", "zuordnung")


def typ_von(q):
    return q.get("typ", "mc")


def kern_daten(q):
    typ = typ_von(q)
    if typ == "mc":
        return list(q.get("opts", []))
    if typ == "offen":
        return list(q.get("punkte", []))
    if typ == "reihenfolge":
        return list(q.get("schritte", []))
    if typ == "zuordnung":
        return ["=".join(map(str, p)) for p in q.get("paare", [])]
    if typ == "zahl":
        return [repr(q.get("loesung")), q.get("einheit", "")]
    return []


def question_id(q):
    raw = q.get("cat", "") + "|" + q.get("q", "") + "|" + "|".join(str(x) for x in kern_daten(q))
    return hashlib.md5(raw.encode("utf-8")).hexdigest()[:12]


def _text(x):
    return isinstance(x, str) and x.strip() != ""


def _ganzzahl(x):
    return isinstance(x, int) and not isinstance(x, bool)


def _zahl(x):
    return isinstance(x, (int, float)) and not isinstance(x, bool)


def _texte(x, mini, maxi):
    return isinstance(x, list) and mini <= len(x) <= maxi and all(_text(s) for s in x) and len(set(x)) == len(x)


def _pruefe_typ(q, typ, where, errors):
    if typ == "mc":
        opts = q.get("opts")
        if not _texte(opts, 2, 6):
            errors.append(f"{where}: opts braucht 2–6 verschiedene Antworten")
        elif not _ganzzahl(q.get("correct")) or not 0 <= q["correct"] < len(opts):
            errors.append(f"{where}: 'correct' zeigt auf keine Antwort")
    elif typ == "offen":
        if not _texte(q.get("punkte"), 2, 6):
            errors.append(f"{where}: punkte braucht 2–6 verschiedene Stichpunkte")
    elif typ == "reihenfolge":
        if not _texte(q.get("schritte"), 3, 8):
            errors.append(f"{where}: schritte braucht 3–8 verschiedene Schritte")
    elif typ == "zahl":
        if not _zahl(q.get("loesung")):
            errors.append(f"{where}: loesung muss eine Zahl sein")
        if not isinstance(q.get("einheit", ""), str):
            errors.append(f"{where}: einheit muss Text sein")
        tol = q.get("toleranz", 0.02)
        if not _zahl(tol) or not 0 < tol < 0.5:
            errors.append(f"{where}: toleranz muss zwischen 0 und 0,5 liegen")
    elif typ == "zuordnung":
        paare = q.get("paare")
        gueltig = isinstance(paare, list) and 2 <= len(paare) <= 12 and all(
            isinstance(p, (list, tuple)) and len(p) == 2 and _text(p[0]) and _text(p[1]) for p in paare)
        if not gueltig:
            errors.append(f"{where}: paare braucht 2–12 Paare [links, rechts]")
        elif len({p[0] for p in paare}) != len(paare):
            errors.append(f"{where}: linke Einträge doppelt")
        abl = q.get("ablenker", [])
        if not isinstance(abl, list) or not all(_text(a) for a in abl):
            errors.append(f"{where}: ablenker muss eine Liste von Texten sein")


def validate(questions, situationen, bilder_dir=BILDER_DIR):
    errors = []
    for sid, s in situationen.items():
        if not isinstance(s, dict) or not all(_text(s.get(k)) for k in ("titel", "text", "cat")):
            errors.append(f"Situation '{sid}': braucht titel, text und cat")
    nummern = collections.defaultdict(list)
    for i, q in enumerate(questions):
        where = f"Frage {i + 1} ({q.get('cat', '?')}: {str(q.get('q', ''))[:50]})"
        for key in ("cat", "q", "explain", "src"):
            if not _text(q.get(key)):
                errors.append(f"{where}: Feld '{key}' fehlt")
        if q.get("level") not in (1, 2, 3):
            errors.append(f"{where}: level muss 1, 2 oder 3 sein")
        if "pkt" in q and (not _ganzzahl(q["pkt"]) or not 1 <= q["pkt"] <= 10):
            errors.append(f"{where}: pkt muss eine ganze Zahl von 1 bis 10 sein")
        typ = typ_von(q)
        if typ not in TYPEN:
            errors.append(f"{where}: unbekannter typ '{typ}'")
        else:
            _pruefe_typ(q, typ, where, errors)
        if "bild" in q and not os.path.isfile(os.path.join(bilder_dir, str(q["bild"]))):
            errors.append(f"{where}: Bild '{q['bild']}' fehlt in inhalt/bilder/")
        if "situation" in q:
            s = situationen.get(q["situation"])
            if s is None:
                errors.append(f"{where}: Situation '{q['situation']}' gibt es nicht")
            elif isinstance(s, dict) and s.get("cat") != q.get("cat"):
                errors.append(f"{where}: Bereich passt nicht zur Situation '{q['situation']}'")
            if not _ganzzahl(q.get("nr")) or q["nr"] < 1:
                errors.append(f"{where}: Aufgabe in einem Aufgabensatz braucht nr ≥ 1")
            else:
                nummern[q["situation"]].append(q["nr"])
    for sid, nrs in nummern.items():
        if len(set(nrs)) != len(nrs):
            errors.append(f"Aufgabensatz '{sid}': nr doppelt vergeben")
    for qid, n in collections.Counter(question_id(q) for q in questions).items():
        if n > 1:
            errors.append(f"Doppelte Frage (ID {qid}) kommt {n}-mal vor")
    return errors


def load_all(fragen_dir=FRAGEN_DIR):
    questions, situationen, errors = [], {}, []
    for path in sorted(glob.glob(os.path.join(fragen_dir, "*.py"))):
        name = os.path.splitext(os.path.basename(path))[0]
        if name.startswith("_"):
            continue
        spec = importlib.util.spec_from_file_location(f"fragen_{name}", path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        questions.extend(getattr(mod, "QUESTIONS", []))
        for sid, s in getattr(mod, "SITUATIONEN", {}).items():
            if sid in situationen:
                errors.append(f"Situation '{sid}' ist doppelt definiert ({name}.py)")
            situationen[sid] = s
    return questions, situationen, errors


def build_js(questions, situationen):
    data = []
    for q in questions:
        entry = {"id": question_id(q)}
        entry.update(q)
        data.append(entry)
    return (
        "// Automatisch erzeugt von tools/export.py aus inhalt/fragen/*.py – nicht von Hand bearbeiten!\n"
        f"export const QUESTIONS = {json.dumps(data, ensure_ascii=False, indent=1)};\n"
        f"export const SITUATIONEN = {json.dumps(situationen, ensure_ascii=False, indent=1)};\n"
    )


def print_stats(questions, situationen):
    zaehler = collections.defaultdict(collections.Counter)
    for q in questions:
        zaehler[q["cat"]][typ_von(q)] += 1
    print(f"{'Bereich':<12}" + "".join(f"{t:>12}" for t in TYPEN) + f"{'gesamt':>9}")
    for cat in sorted(zaehler):
        c = zaehler[cat]
        print(f"{cat:<12}" + "".join(f"{c[t]:>12}" for t in TYPEN) + f"{sum(c.values()):>9}")
    for sid, s in situationen.items():
        n = sum(1 for q in questions if q.get("situation") == sid)
        print(f"Aufgabensatz {sid} ({s.get('cat')}): {n} Aufgaben")


def main():
    questions, situationen, errors = load_all()
    errors += validate(questions, situationen)
    if errors:
        print(f"{len(errors)} Fehler in der Fragenbank:")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    content = build_js(questions, situationen)
    if "--check" in sys.argv:
        current = open(OUT_FILE, encoding="utf-8").read() if os.path.exists(OUT_FILE) else ""
        if current != content:
            print("inhalt/fragen.js ist nicht aktuell – bitte 'python tools/export.py' ausführen.")
            sys.exit(1)
        print(f"OK: {len(questions)} Fragen gültig, inhalt/fragen.js ist aktuell.")
        return
    if "--stats" in sys.argv:
        print_stats(questions, situationen)
        return
    with open(OUT_FILE, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print(f"{len(questions)} Fragen exportiert nach inhalt/fragen.js")
    print_stats(questions, situationen)


if __name__ == "__main__":
    main()
