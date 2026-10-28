# Regeln: Ausbau auf über 500 Fragen mit eigenen Schaltplänen

Stand 28.10.2026, vom User freigegeben. Gilt für alle, die Fragen für diesen Trainer schreiben (auch Helfer-Agenten). Ergänzt `docs/superpowers/specs/…-design.md` Abschnitt 5, 15, 16 und `docs/mc-umbau-regeln.md`.

## Ziel je Bereich

| Datei | bisher | Ziel | zweiter Aufgabensatz (Vorschlag) | Bilder neu (mind.) | Fragen mit Bild (mind., gesamt) |
|---|---|---|---|---|---|
| `diesel.py` | 50 | ≈ 100 | AdBlue/SCR: Warnung „Start in … km nicht möglich“ | 3 | 10 |
| `bremse.py` | 43 | ≈ 100 | ESP/ABS: Raddrehzahlsensor, ABS-/ESP-Leuchte | 3 | 8 |
| `klima.py` | 43 | ≈ 92 | Elektrik: Verdichter regelt nicht / Lüfter / Drucksensor | 3 | 8 |
| `airbag.py` | 45 | ≈ 92 | Lenkrad-Wickelfeder oder Unfallinstandsetzung mit Gurtstraffer | 3 | 8 |
| `wiso.py` | 55 | ≈ 95 | Wahl & Konjunktur (z. B. Betriebsversammlung, Kommunal-/Landtagswahl Bayern) | 1 | 3 |
| `grundlagen.py` | 20 | ≈ 50 | – (kein Satz) | 3 | 8 |

Untergrenzen (Test `tools/tests/inhalt.test.js`): Diesel/Bremse 95, Klima/Airbag 88, WiSo 90, Grundlagen 45 Fragen; 2 Aufgabensätze je Prüfungsbereich.

## Fragen
- Nur `mc` (4 Antworten), `zuordnung`, `reihenfolge`. Pro Bereich ≥ 15 % Zuordnungen und ≥ 1 Reihenfolge; Ziel-Mix etwa 70 % mc, 22 % Zuordnung, 8 % Reihenfolge.
- Level-Mix etwa 25 % Level 1, 45 % Level 2, 30 % Level 3. Diagnose-Blöcke (Diesel, Klima): Schwerpunkt Fehlersuche, Messwerte, Signale, Schaltpläne.
- **Eigene Worte.** Fragen aus dem Netz, Büchern oder Prüfungen nie wörtlich oder fast wörtlich übernehmen – nur das Thema. Keine Bilder aus dem Netz, nur selbst gezeichnete SVGs.
- Keine Doppelungen: vorher die vorhandenen Fragen der Datei lesen. Ähnliches Thema ist ok, wenn eine andere Seite gefragt wird.
- Feste Zahlenwerte nur, wenn sie sicher sind (Rechercheakte Abschnitt 3.6). Sonst „laut Herstellerangabe“ / „laut Tabellenbuch“. Tabellenbuch-Aufgaben bekommen `"tb": True`.
- `src`: Quelle kurz, z. B. `"FK 339"`, `"TB 277"`, `"FW"` (Fachwissen), `"Netz: <Seite>"`, `"Eigener Schaltplan"`.
- Rechenaufgaben bekommen `"formel"`: die allgemeine Formel in Tabellenbuch-Schreibweise (`·`, `/`, Index mit `_`, z. B. `"s_B = v² / (2 · a)\nv in m/s = v in km/h / 3,6"`), nie das Ergebnis. Siehe `docs/recherche/formeln.md`.
- `explain` erklärt, **warum** die richtige Antwort stimmt und was an der typischen falschen Antwort falsch ist (2–4 Sätze). Das ist der Lernstoff.

## Antwortlängen (wichtig!)
Bisher war die richtige Antwort in über der Hälfte der Fragen die längste – man konnte raten. Ab jetzt je Datei:
- richtige Antwort ist die eindeutig längste: **höchstens 35 %** der mc-Fragen,
- richtige Antwort ist die eindeutig kürzeste: **höchstens 35 %**.
- Alle vier Antworten ähnlich lang und im selben Stil. Ablenker lieber mit plausibler Begründung verlängern („…, weil …“), statt die richtige Antwort mit Zusätzen auszuschmücken.
- Bestehende Fragen dürfen dafür angepasst werden (Antworten kürzen/verlängern). Die Frage bekommt dadurch eine neue ID – das ist in Ordnung. Fachlich nichts verschlechtern, `pkt`/`nr`/`situation` behalten.

## Aufgabensatz (Kundenauftrag)
- `SITUATIONEN["<id>"] = {"titel": "Kundenauftrag: …", "text": "Fahrzeug, Baujahr, Ausstattung.\nKunde beanstandet: „…“", "cat": "<Bereich>"}`.
- 15–21 Aufgaben, zusammen 60–100 Punkte (`pkt` je Aufgabe 1–10), `nr` 1… fortlaufend, Ablauf wie eine echte Fehlersuche: Auftrag verstehen → Funktion/Aufbau → Diagnose/Messen (mit Schaltplan und Messwerten) → Fehler bestimmen → Instandsetzen → Sicherheit/Umwelt/Recht → Kundengespräch/Übergabe.
- Andere Marke, anderes Fahrzeug und anderer Fehler als im ersten Satz der Datei.

## Eigene Schaltpläne und Diagramme (`inhalt/bilder/`)
- Dateiname mit Bereich vorn: `diesel-…svg`, `bremse-…svg`, `klima-…svg`, `airbag-…svg`, `wiso-…svg`, `grundlagen-…svg`. Vorhandene Bilder nicht ändern (andere Fragen hängen daran).
- Gültiges SVG mit `xmlns`, `viewBox="0 0 640 H"` (H 360–480), weißer Hintergrund-Rechteck, `font-family="Arial, sans-serif"`, **Schrift mind. 15** (wird auf dem Handy klein), Linien `#1a1a1a`, 2 px; höchstens eine Akzentfarbe (z. B. `#c0392b` für einen Messpunkt). Ein `<title>` mit Kurzbeschreibung. Keine Bilder/Fonts von außen, kein Script.
- **Selbst gezeichnet**, nicht von Herstellerplänen oder Buchseiten abgepaust. Steuergeräte-Pinnummern, Sicherungsnummern und Leitungsfarben sind **Beispiele** und stehen im Bild – die Frage darf nur nach dem fragen, was im Bild steht.
- Schaltzeichen sinngemäß nach DIN EN 60617: Widerstand = Rechteck, Motor = Kreis mit „M“, Lampe = Kreis mit Kreuz, Sicherung = Rechteck mit Längsstrich, Relais = Spulen-Rechteck + Schaltkontakt, Schalter, Masse-Symbol, Magnetventil = Spule mit Ventil-Zeichen, Sensor = Rechteck mit Pfeil/Kennbuchstaben, Steuergerät = großer Rahmen mit nummerierten Pins.
- Klemmen nach DIN 72552: 30 (Dauerplus), 15 (Zündung), 31 (Masse), 50 (Starter), 85/86 (Relaisspule), 30/87/87a (Relaiskontakt), 58 (Licht).
- Bauteilkennzeichnung: A = Steuergerät, B = Sensor, F = Sicherung, K = Relais, M = Motor, R = Widerstand, S = Schalter, Y = Ventil/Aktor, H = Leuchte, X = Steckverbindung.
- Oszillogramme: Raster mit Beschriftung „1 Kästchen = … V / … ms“, Null-Linie markiert, damit man Spannung, Periodendauer, Tastverhältnis oder Frequenz ablesen **und nachrechnen** kann.
- Nummern ①②③ oder Messpunkte A, B, C deutlich (Kreis mit Zahl), damit Zuordnungen gehen.
- **Jedes neue Bild in mindestens 3 Fragen verwenden** (`"bild": "<datei>.svg"`), z. B.: Bauteile zuordnen, welcher Pin/welche Sicherung, wo messen (Messpunkt), welcher Messwert ist richtig/falsch, Fehlerort aus Messwerten bestimmen, Signal auswerten (Tastverhältnis, Frequenz), Strompfad verfolgen.
- Prüfen, ob das Bild stimmt: Strompfad geschlossen? Masse vorhanden? Passt die Frage zum Bild? SVG im Browser oder mit `py -c "import xml.etree.ElementTree as E; E.parse('inhalt/bilder/<datei>.svg')"` öffnen.

## Recherche
- Pro Bereich im Netz nachsehen, was prüfungsrelevant ist (Lehrplan Bayern Kfz, IHK/HWK-Prüfungsvorbereitung als Themenliste, Hersteller-/Zulieferer-Technikinfos, Fachzeitschriften wie autoservicepraxis/kfz-betrieb, Behörden für Recht/Werte). Ergebnis in `docs/recherche/ausbau-<bereich>.md` mit Quellen-Links: was neu dazukam, welche Werte sicher sind, was unsicher ist („zu prüfen“).
- Lokale Notizen in `material/notizen/` dürfen gelesen werden, aber **nie** ins Repo kopiert oder zitiert werden (Bücher-/Prüfungsinhalte). `material/` bleibt außerhalb von Git.

## Wer darf was ändern
- Helfer ändern **nur** ihre eigene Fragendatei, legen nur Bilder mit ihrem Bereichs-Präfix und ihre eigene Recherche-Datei an.
- Nicht anfassen: `inhalt/fragen.js` (erzeugt), `sw.js`, `inhalt/lernkarten.js`, `kern/`, `tools/`, Tests, andere Fragendateien. Nichts committen.
- Vorschläge für Spickzettel (Lernkarten) als Abschnitt „Spickzettel-Vorschlag“ in die eigene Recherche-Datei.

## Prüfen (schreibt nichts)
```
py tools/pruefe_datei.py inhalt/fragen/<datei>.py --laenge
```
Muss mit „OK“ enden; beide Längen-Zeilen „OK“; Aufgabensätze 15–21 Aufgaben und 60–100 Punkte. Unter Windows bei Umlaut-Fehlern vorher `set PYTHONIOENCODING=utf-8` (PowerShell: `$env:PYTHONIOENCODING="utf-8"`).
