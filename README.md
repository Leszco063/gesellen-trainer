# Gesellenprüfung Kfz – Trainer

Lern-App für die Gesellenprüfung Teil 2 Kfz-Mechatroniker (Pkw, Kfz-Innung Oberfranken, Winter 2026/27).
Läuft im Browser, lässt sich aufs iPhone installieren (Safari → Teilen → „Zum Home-Bildschirm“) und funktioniert offline.

**Live:** https://leszco063.github.io/gesellen-trainer/

## Was drin ist
- Übung mit fünf Aufgabentypen wie in der echten Prüfung: Multiple Choice, offene Aufgaben mit Musterlösung zum Abhaken, Rechenaufgaben, Reihenfolgen, Zuordnen/Beschriften
- Prüfungssimulation wie am Prüfungstag: 5 Blöcke à 60 Minuten mit Pausen, jeder Block ein Kundenauftrag, Note nach dem 100-Punkte-Schlüssel und Check der Bestehensregel
- Leitner-Wiederholung, Spickzettel, Statistik, Tagesziel, „Frage melden“

## Fragen ändern oder ergänzen
1. Datei in `inhalt/fragen/` bearbeiten (Format: siehe Kopf von `inhalt/fragen/grundlagen.py` und `docs/superpowers/specs/`).
2. `python tools/export.py` (Windows: `py tools/export.py`) – prüft alles und schreibt `inhalt/fragen.js`.
3. `node tools/tests.js` – alle Tests grün?
4. Commit + Push → GitHub Actions prüft, GitHub Pages aktualisiert die App.

## Als Vorlage für einen neuen Trainer
Auf GitHub „Use this template“, dann nur `inhalt/` austauschen: `trainer.js` (Name, Termine, Prüfungsplan),
`fragen/*.py`, `lernkarten.js`, `gen/` (optional), `bilder/`. Icons: `python tools/icons.py "#Farbe" "KÜRZEL"`.
`kern/` und `tools/` bleiben gleich.

## Urheberrecht
Alle Fragen sind eigene Formulierungen, alle Schaubilder selbst gezeichnet. Fotos aus Büchern und Prüfungen
liegen nur lokal in `material/` und werden nicht hochgeladen.
