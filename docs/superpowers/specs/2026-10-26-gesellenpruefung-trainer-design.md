# Design: Gesellenprüfungs-Trainer Kfz (Teil 2, Pkw) als wiederverwendbare Lern-Trainer-Vorlage

Stand: 26.10.2026 · Status: freigegeben, ergänzt am 26.10. um das echte Aufgabenformat (Abschnitt 15, ebenfalls freigegeben)
Recherche: [docs/recherche/2026-10-26-gp2-winter-2026-27.md](../../recherche/2026-10-26-gp2-winter-2026-27.md)
Vorbild: Telekom Test-Trainer (`Desktop\Telekom\webapp`, Repo `Leszco063/test-trainer`)

## 1. Ziel

Der User besteht die **schriftliche Gesellenprüfung Teil 2** (Kfz-Innung Oberfranken, **Fr 27.11.2026**) sicher und ist danach auf den **Kundenauftrag mit Fachgespräch** (**29./30.01.2027**) vorbereitet.

**Erfolg heißt:**
- In der Simulation des Prüfungstags (5 × 60 min) liegt er in jedem Block bei mindestens 67 Punkten (befriedigend), Ziel sind 81 oder mehr (gut).
- Jedes Thema vom Themenblatt hat er mehrfach geübt, und es gibt keinen Aufgabentyp, den er am Prüfungstag zum ersten Mal sieht.
- Ab spätestens **So 01.11.2026** übt er täglich mit der App auf dem iPhone.

**Nebenziel:** Das Grundgerüst ist eine **Vorlage**. Ein neuer Trainer (z. B. AP1 Fachinformatiker) braucht nur einen neuen Ordner `inhalt/`.

## 2. Rahmen (aus der Recherche)

| Block | Zeit | Thema (Pkw, Winter 2026/27) |
|---|---|---|
| Diagnosetechnik I | 60 min | Dieselmotor (Common-Rail & AdBlue) |
| Instandhaltungstechnik I | 60 min | Bremsanlage (EPB & ESP) |
| Pause | 20 min | |
| Diagnosetechnik II | 60 min | Klimaanlage (Diagnose & Reparatur) |
| Instandhaltungstechnik II | 60 min | Sicherheitssysteme (Airbag) |
| Pause | 20 min | |
| WiSo | 60 min | Tarifvertrag · Sozialversicherungen (u. a. Rente) · Wahl (u. a. Kommunalwahl) · Konjunktur & Wirtschaftspolitik |

Hilfsmittel: Kfz-Tabellenbuch ohne eigene Einträge. Noch offen: Taschenrechner, Papier oder digital, Anteil Multiple Choice / offene Fragen.

## 3. Entscheidungen

| Frage | Entscheidung |
|---|---|
| Plattform | PWA wie der Telekom-Trainer: Vanilla-JS-Module, kein Build-Schritt, offline per Service Worker, aufs iPhone installierbar |
| Hosting | **Öffentliches** GitHub-Repo + GitHub Pages + GitHub Actions |
| Urheberrecht | Alle Fragen in **eigenen Worten**, im Stil der echten Prüfung. Schaltpläne und Diagramme **selbst gezeichnet** (SVG, DIN-Schaltzeichen). Fotos und Scans aus Büchern liegen nur lokal in `material/` (per `.gitignore` ausgeschlossen). |
| Struktur | Ein Repo mit **`kern/`** (generische App) und **`inhalt/`** (prüfungsspezifisch), auf GitHub als Template markiert |
| Telekom-Trainer | bleibt unverändert, Code wird nur kopiert und verallgemeinert |
| Reihenfolge | Theorie bis 27.11. hat Vorrang, die Praxis-Module kommen erst im Dezember |

## 4. Aufbau

```
index.html  manifest.webmanifest  sw.js  icon-*.png
css/app.css
kern/                     ← generisch, Teil der Vorlage
  main.js  ui.js  util.js  speicher.js  auswahl.js
  start.js  uebung.js  pruefung.js  statistik.js  lernen.js  meldungen.js
  fragenansicht.js        ← zeichnet eine Frage, delegiert an den Fragetyp
  typen/mc.js  typen/offen.js  typen/zahl.js  typen/reihenfolge.js
  bewertung.js            ← Punkte → Note (Notenschlüssel aus inhalt/trainer.js)
inhalt/                   ← austauschbar pro Trainer
  trainer.js              ← Name, Farben, Bereiche, Prüfungsplan, Notenschlüssel, Bestehensregel
  fragen.js               ← automatisch erzeugt aus fragen/*.py
  fragen/diesel.py  bremse.py  klima.py  airbag.py  wiso.py  grundlagen.py
  lernkarten.js           ← Spickzettel je Bereich
  gen/index.js + Generatoren (Fachrechnen)
  bilder/*.svg            ← eigene Schaltpläne, Oszillogramme, Diagramme
tools/                    ← generisch
  export.py               ← prüft inhalt/fragen/*.py, schreibt inhalt/fragen.js
  tests.js                ← Generatoren, Fragetypen, Bewertung, Offline-Liste
.github/workflows/pruefen.yml
docs/  material/ (lokal, ignoriert)
```

**Schnittstelle Kern ↔ Inhalt:** Der Kern importiert nur `inhalt/trainer.js`, `inhalt/fragen.js`, `inhalt/lernkarten.js` und `inhalt/gen/index.js` (exportiert `GENERATORS`, `hasGenerator`, `generate`). Mehr gibt es nicht. Fehlt ein optionaler Teil (z. B. Generatoren), läuft der Kern trotzdem.

**Speicher:** localStorage, eigener Schlüssel pro Trainer (`<trainer.id>.progress`), damit sich mehrere Trainer auf derselben Domain nicht in die Quere kommen. Export und Import funktionieren wie beim Telekom-Trainer.

## 5. Fragenformat (`inhalt/fragen/*.py`)

Jede Datei definiert `QUESTIONS = [...]` und optional `SITUATIONEN = {id: text}`.

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `cat` | ja | Bereich (= Prüfungsblock): `Diesel`, `Bremse`, `Klima`, `Airbag`, `WiSo`, `Grundlagen` |
| `level` | ja | 1 leicht · 2 mittel · 3 schwer |
| `typ` | nein | `mc` (Standard), `offen`, `zahl`, `reihenfolge` |
| `q` | ja | Fragetext |
| `explain` | ja | Erklärung bzw. Lösungsweg |
| `opts`, `correct` | bei `mc` | Antworten, Index der richtigen |
| `punkte` | bei `offen` | Musterlösung als Stichpunkte (2–6) |
| `loesung`, `einheit`, `toleranz` | bei `zahl` | Ergebnis, Einheit, erlaubte Abweichung (relativ, Standard 2 %) |
| `schritte` | bei `reihenfolge` | Arbeitsschritte in richtiger Reihenfolge (3–8) |
| `situation` | nein | Schlüssel in `SITUATIONEN`, Text wird über der Frage gezeigt (Kundenauftrag-Szenario) |
| `bild` | nein | Dateiname in `inhalt/bilder/` |
| `tb` | nein | `True` = Tabellenbuch-Frage (Hinweis „Nachschlagen erlaubt“) |
| `src` | ja | Herkunft: z. B. `"FK 342"`, `"TB 277"`, `"Netz: IHK"`, `"FW"` |

**ID:** md5 aus `cat | q | Kerndaten des Typs` (opts / punkte / schritte / loesung), 12 Zeichen, wie beim Telekom-Trainer. Wer eine Frage ändert, erzeugt eine neue ID. Das ist so gewollt, damit der Fortschritt bei falsch korrigierten Fragen neu startet.

**Prüfung in `export.py`:** Pflichtfelder pro Typ vorhanden, `correct` gültig, keine doppelten Optionen oder IDs, `bild` existiert, `situation` existiert, `src` gesetzt, Level 1–3. Bei einem Fehler bricht der Export ab (Exit-Code 1).

## 6. Fragetypen (`kern/typen/`)

Jeder Typ stellt dieselbe Schnittstelle bereit: `render(q, root)`, `auswerten(q, root) → { anteil: 0..1, antwortText }`, `loesungHtml(q, eingabe)`.

| Typ | Bedienung | Bewertung |
|---|---|---|
| `mc` | Antwort antippen (gemischt) | richtig 1, sonst 0 |
| `offen` | Antwort denken oder ins Textfeld tippen → „Lösung zeigen“ → Stichpunkte abhaken, die man hatte | Anteil der abgehakten Stichpunkte |
| `zahl` | Zahl eingeben (Komma oder Punkt), Einheit steht daneben | richtig, wenn innerhalb der Toleranz |
| `reihenfolge` | Schritte mit ↑/↓ verschieben (auf dem Handy bedienbar, kein Drag & Drop nötig) | Anteil der Schritte an der richtigen Position |

**Für Leitner und Statistik zählt eine Frage als „richtig“, wenn der Anteil ≥ 0,67 ist.**

## 7. Funktionen

**Übernommen aus dem Telekom-Trainer (verallgemeinert):**
- Übungsmodus mit Sofort-Erklärung, Bereichsauswahl, Level adaptiv, optionaler Timer
- Leitner-Wiederholung (Boxen 1–5, 0/1/3/7/16 Tage), neue Fragen zuerst, fällige eingestreut
- Spickzettel (Lernkarten je Bereich), nach falscher Antwort die passende Karte vorschlagen
- Statistik je Bereich, Trend, Box-Verteilung; Tagesziel und Serie
- Frage melden (lokal gesammelt, exportierbar) → Korrektur wie mit `/neue-fragen`
- Export/Import des Fortschritts, sichere Updates über den Service Worker

**Neu:**
- **Prüfungssimulation nach `trainer.pruefung`:** Blöcke mit eigener Zeit, Pausen zwischen den Blöcken, kein Zurückspringen innerhalb eines Blocks, Auswertung erst am Ende. Spielbar sind „Ganzer Prüfungstag“ (5 Blöcke + 2 Pausen, Pausen überspringbar) oder ein einzelner Block. Pro Block: Fragenmix nach Typen und Levels (25 % leicht / 45 % mittel / 30 % schwer), Punkte pro Frage nach Typ (`mc` 1, `zahl` 2, `reihenfolge` 2, `offen` 3). Offene Fragen werden am Ende des Blocks selbst bewertet. Startwert pro 60-min-Block: 18 `mc`, 2 `zahl`, 1 `reihenfolge`, 3 `offen` (= 33 Punkte). Das steht in `trainer.js` und wird angepasst, sobald das echte Aufgabenformat bekannt ist.
- **Bewertung:** Prozent → 100-Punkte-Schlüssel des Handwerks (92/81/67/50/30) → Note. Die Gesamtauswertung fasst zusammen: Diagnosetechnik = Diag I + II, Kfz- und Instandhaltungstechnik = IH I + II, WiSo. Dazu der Hinweis, ob die schriftlichen Bereiche die Bestehensregel aus § 9 erfüllen würden (mind. 2 von 3 ≥ 50, keiner < 30). Der Kundenauftrag ist nicht Teil der App, das steht so dabei.
- **Countdown** auf dem Startbildschirm: Tage bis 27.11. (und bis 29.01.)

**Weggelassen:** Figuren, Merkblatt, SJT, Persönlichkeit, Interessen, Interview-Trainer. Der Interview-Trainer dient im Dezember als Vorlage für den Fachgespräch-Trainer.

## 8. Generatoren (Fachrechnen), Phase 1

Erzeugen Aufgaben vom Typ `zahl` oder `mc` mit Lösungsweg. Die Werte sind zufällig, aber realistisch:

| Generator | Bereich | Beispiele |
|---|---|---|
| `elektrik` | Airbag, Diesel, Grundlagen | Ohm/Leistung, Reihen- und Parallelschaltung (Zündkreis mit Ersatzwiderstand), Sensorkennlinie (Raildrucksensor 0,5–4,5 V ↔ Druck linear) |
| `hydraulik` | Bremse, Diesel | p = F/A, hydraulische Übersetzung, Pedalübersetzung, Kraft am Kolben bei Raildruck |
| `sozialabgaben` | WiSo | AN-Anteile aus Brutto mit den Sätzen 2026 (Jahr steht in der Aufgabe) |

Phase 2: `bremse` (Abbremsung z, Werte aus Tabellenbuch), `klima` (Über-/Absolutdruck).

## 9. Inhalte für Phase 1

| Bereich | Fragen | Lernkarten | Mindestens dabei |
|---|---|---|---|
| Diesel (CR + AdBlue) | ca. 50 | 5 | Regelungsarten, ZME/DRV/DBV, Injektoren, Sensoren & Notlauf, Testerfunktionen, SCR, 1 Schaltplan-SVG |
| Bremse (EPB + ESP) | ca. 40 | 4 | Servicemodus, Hydraulik, ESP-Sensoren/Regelphasen, Prüfstand (`tb`) |
| Klima | ca. 40 | 4 | Kreislauf, Kältemittel, Service-Ablauf (`reihenfolge`), Druckdiagnose, Vorschriften |
| Airbag | ca. 40 | 4 | Komponenten, Ablauf, Sicherheitsregeln (`reihenfolge`), Diagnose, Recht |
| WiSo | ca. 50 | 4 | Alle 4 Themen; aktuelle Zahlen mit Jahr |
| Grundlagen | ca. 20 | 2 | Elektrik/Messtechnik/CAN, nur was die Themen brauchen |

Mix pro Bereich: ca. 70 % `mc`, 15 % `offen`, 10 % `reihenfolge`, 5 % `zahl` (dazu Generatoren). Jede Frage hat `src`. Fragen mit `src: "FW"` werden markiert und, sobald Buchseiten vorliegen, abgeglichen. Regeln aus der Recherche (Abschnitt 3.6): ✅ darf rein, ⚠️ nur ohne feste Zahl bzw. als Tabellenbuch-Frage.

## 10. Qualität und Tests

- `python tools/export.py` prüft die Fragenbank, `--check` in CI prüft, ob `inhalt/fragen.js` aktuell ist
- `node tools/tests.js`: Generatoren (je 1500 Läufe pro Level, keine NaN/Dubletten, Lösung innerhalb der Toleranz), Bewertung der Fragetypen mit festen Beispielen, Notenschlüssel-Grenzen, jede Datei in `kern/` und `inhalt/` steht in der Offline-Liste von `sw.js`
- GitHub Actions führt beides bei jedem Push aus
- Manuell: Durchklick auf dem iPhone (Übung pro Typ, ein Simulationsblock, Offline-Start)

## 11. Fehlerfälle

- localStorage voll oder gesperrt → Übung läuft weiter, Hinweis wie bisher
- Bild fehlt → wird schon beim Export erkannt
- Eingabe bei `zahl` nicht lesbar (z. B. leer) → zählt als falsch, mit Hinweis auf das Format
- Simulation unterbrochen (App geschlossen) → laufender Block wird im localStorage zwischengespeichert und kann fortgesetzt oder verworfen werden

## 12. Zeitplan

| Phase | bis | Inhalt |
|---|---|---|
| 1 | So 01.11. | Kern + Fragetypen + Simulation + Bewertung + 3 Generatoren + ca. 240 Fragen + Lernkarten, online |
| 2 | Fr 20.11. | Buchmaterial einarbeiten, [FW]-Fragen abgleichen, weitere SVGs, Generatoren `bremse`/`klima`, Fehler aus „Frage melden“ |
| Endspurt | 21.–26.11. | keine neuen Funktionen |
| 3 | Dez–Jan | Praxis: Fachgespräch-Trainer, Diagnose-Fälle, Abläufe, Messwerte (eigener Spec) |

## 13. Vorlage nutzen (für später)

Neuer Trainer = Repo per „Use this template“ anlegen, `inhalt/` leeren, `trainer.js` und `fragen/*.py` neu schreiben, `python tools/export.py`. Ein Skill `/neuer-trainer` kann das später automatisieren. Er ist nicht Teil dieses Projekts.

## 15. Änderung nach Auswertung einer echten Schulprüfung (26.10., freigegeben)

Der User hat eine alte Prüfung (Diagnosetechnik Diesel CR, VW Passat 2.0 TDI) fotografiert, die Auswertung steht lokal in `material/notizen/pruefungsformat-alte-pruefung.md`. Ein Block besteht aus **einem Kundenauftrag mit ca. 21 aufeinander aufbauenden Aufgaben**, jede Aufgabe hat **eigene Punkte (2–10, zusammen ca. 100)**, und nur etwa **15 % sind Multiple Choice**. **Diese Regeln ersetzen die betroffenen Stellen in Abschnitt 5–9:**

1. **Punkte pro Aufgabe:** neues optionales Feld `pkt` (1–10). Fehlt es, gilt der Standard pro Typ aus `trainer.js`: `mc` 2, `zahl` 3, `reihenfolge` 4, `offen` 4, `zuordnung` 4.
2. **Neuer Fragetyp `zuordnung`** (Begriffe zu Bildnummern, Bauteil → Aufgabe, Nieder-/Hochdruck einteilen). Felder: `paare` = Liste `[links, rechts]` (2–12 Paare), optional `ablenker` = zusätzliche falsche Antworten. Bedienung: zu jedem linken Eintrag eine Auswahlliste mit allen rechten Werten (gemischt, Duplikate einmal). Bewertung: Anteil richtig zugeordneter Einträge. Sind mehrere linke Einträge demselben rechten Wert zugeordnet (z. B. „Niederdruck“), ist das erlaubt.
3. **Aufgabensätze:** `SITUATIONEN` werden zu Aufgabensätzen: `{id: {"titel", "text", "cat"}}`. Fragen mit `situation` bekommen zusätzlich `nr` (Reihenfolge im Satz, 1, 2, 3 …). Die Simulation nimmt für einen Block **bevorzugt einen ganzen Aufgabensatz** des Bereichs (den, der am längsten nicht dran war) und spielt ihn in `nr`-Reihenfolge. Gibt es keinen, wird wie bisher gemischt.
4. **Mischung ohne Aufgabensatz** (`blockMix`): 4 `mc`, 2 `zahl`, 1 `reihenfolge`, 9 `offen`, 5 `zuordnung` (= 21 Aufgaben).
5. **Typ-Mix der Fragenbank** pro Bereich ungefähr: 15 % `mc`, 45 % `offen` (auch „Tabelle ergänzen“), 25 % `zuordnung`, 10 % `zahl`, 5 % `reihenfolge`.
6. **Inhalt Phase 1:** pro Prüfungsblock **1 Aufgabensatz (15–21 Aufgaben)** + ca. 25 Einzelfragen; Phase 2: zweiter Aufgabensatz pro Block. Einheiten wie im Original mischen (z. B. Raildruck in MPa und bar).
7. In der Simulation wird pro Block „erreicht / max“ in Punkten angezeigt, die Note kommt aus den Prozent.

## 16. Änderung 27.10.: nur noch Antippen (freigegeben)

Der User möchte in der App **nichts mehr eintippen**. Deshalb gilt ab jetzt (ersetzt die Typ-Regeln aus 15.2, 15.4, 15.5):
- In diesem Trainer sind nur `mc`, `zuordnung` und `reihenfolge` erlaubt (`TRAINER.erlaubteTypen`, ein Test prüft das). Alle bisherigen `offen`- und `zahl`-Aufgaben wurden zu `mc` umgebaut (Regeln: `docs/mc-umbau-regeln.md`). Die Typen `offen` und `zahl` bleiben im Kern für andere Trainer.
- Rechen-Generatoren liefern Multiple Choice mit 4 Antworten; die falschen Antworten sind Ergebnisse typischer Rechenfehler.
- Gemischter Simulationsblock: 15 `mc`, 5 `zuordnung`, 1 `reihenfolge`. Die Selbstbewertung entfällt mangels offener Aufgaben.
- Freunde des Users nutzen dieselbe Seite; jeder hat seinen eigenen Fortschritt auf dem eigenen Gerät (keine gemeinsame Rangliste).

## 14. Nicht Teil dieses Specs

Praxis-Module (eigener Spec im Dezember), KI-Bewertung offener Antworten, Login/Server, Migration des Telekom-Trainers auf den neuen Kern.
