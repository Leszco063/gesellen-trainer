# Regeln: offene und Rechenaufgaben zu Multiple Choice umbauen

Stand 27.10.2026. Wunsch des Users: In der App soll man **nichts mehr eintippen**. Alle Aufgaben vom Typ `offen` und `zahl` in `inhalt/fragen/*.py` werden zu `mc`. `zuordnung` und `reihenfolge` bleiben unverändert.

## Format
- `"typ": "mc"` (oder `typ` weglassen), `"opts": [...]` mit **4 Antworten** (Ausnahme: 3 sind ok, wenn es fachlich nur 3 sinnvolle gibt), `"correct": <Index>`.
- Felder `punkte`, `loesung`, `einheit`, `toleranz` entfernen.
- **Unverändert lassen:** `cat`, `level`, `pkt`, `situation`, `nr`, `bild`, `tb`, `src`. Die Erklärung `explain` bleibt inhaltlich gleich; bei offenen Aufgaben die bisherigen Stichpunkte der Musterlösung in die Erklärung übernehmen, falls sie dort noch fehlen (die Erklärung ist jetzt der Lernstoff).
- Die richtige Antwort nicht immer an dieselbe Stelle: `correct` über die Fragen verteilen (die App mischt zwar, aber die Datei soll lesbar bleiben).

## Offene Aufgaben → MC
- Fragetext umformulieren, z. B. „Nennen Sie drei Prüfungen …“ → „Welche Antwort nennt drei geeignete Prüfungen …?“, „Beschreiben Sie …“ → „Welche Beschreibung ist richtig?“, „Beurteilen Sie das Messergebnis“ → „Wie ist das Messergebnis zu beurteilen?“.
- **Richtige Antwort** = die Stichpunkte der Musterlösung, knapp zusammengefasst (bei mehreren Punkten mit „;“ getrennt).
- **Falsche Antworten** (Ablenker): fachlich plausibel, ähnlich lang und im selben Stil; typischerweise ist ein Punkt der richtigen Antwort durch einen falschen ersetzt oder es steckt ein typischer Denkfehler drin. Keine „Alle Antworten sind richtig“/„Keine der Antworten“, keine Spaßantworten, keine Antwort, die durch ihre Länge auffällt.
- Jede falsche Antwort muss **eindeutig falsch** sein – kein Ablenker, der in der Praxis auch stimmen könnte.

## Rechenaufgaben → MC
- Fragetext bleibt (ggf. „Wie groß ist …?“ statt „Berechnen Sie …“).
- Richtige Antwort = Ergebnis im deutschen Zahlformat mit Einheit, z. B. „15.354 N“, „2,5 V“, „288,30 €“.
- Ablenker = Ergebnisse **typischer Fehler**: falsche Formel (z. B. Verhältnis statt Quadrat), Einheit verwechselt (bar/MPa, mm²/cm²), Kehrwert, Komma verrutscht, Teilergebnis statt Endergebnis. Alle vier Werte verschieden.
- In `explain` den Rechenweg lassen.

## Typ-Mix danach
- `offen` = 0 und `zahl` = 0 in jeder Datei.
- `zuordnung` und `reihenfolge` bleiben wie sie sind.
- Aufgabensätze behalten 15–21 Aufgaben und ihre Punkte (`pkt`).

## Prüfen (schreibt nichts)
```
py -c "import sys,collections; sys.path.insert(0,'tools'); import export, importlib.util as u; s=u.spec_from_file_location('m','inhalt/fragen/<datei>.py'); m=u.module_from_spec(s); s.loader.exec_module(m); e=export.validate(m.QUESTIONS, getattr(m,'SITUATIONEN',{})); print(len(m.QUESTIONS), collections.Counter(q.get('typ','mc') for q in m.QUESTIONS)); print(e or 'OK')"
```
Muss „OK“ ausgeben, und im Counter dürfen `offen` und `zahl` nicht mehr vorkommen. Die Anzahl der Fragen bleibt gleich.
