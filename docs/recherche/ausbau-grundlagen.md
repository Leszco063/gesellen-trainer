# Recherche Ausbau Grundlagen (Schaltpläne, Messen, Signale, Bus)

Stand 28.10.2026. Bereich „Grundlagen“ ist kein eigener Prüfungsblock, aber Baustein in allen Diagnose-Blöcken (Diesel, Klima, Bremse, Airbag). Lehrplan-Bezug: Jgst. 11 Bordnetz/Antriebsmanagement („Signalbilder, systematische Prüfschritte“) und Jgst. 12/13 „Vernetzte Systeme diagnostizieren“ („Bussysteme, Spannungspegel, Netzwerkpläne, Sensoren/Aktoren prüfen“), siehe `2026-10-26-gp2-winter-2026-27.md` Abschnitt 2.

## Was neu dazukam (Themen der neuen Fragen)
- **Schaltplan lesen:** Relaisschaltung mit Klemmen 30/85/86/87, Sicherung, Schalter, Masse; Steuer- und Laststromkreis unterscheiden; Kennbuchstaben (A, B, F, K, M, R, S, Y, H, X); Strompfad verfolgen; aufgelöste vs. zusammenhängende Darstellung; Leitungsfarben-Kurzzeichen (Beispielwerte im Bild).
- **Messen:** Spannungsfall an Plus- und Masseseite unter Last, Fehlerort aus Messwerten (Unterbrechung, Übergangswiderstand, Kurzschluss), Durchgang nur stromlos, Strommessung (Reihe, Zange), Ruhestrom (Schlafmodus abwarten), Isolationsprüfung (Leitung gegen Masse).
- **Sensoren:** 3-poliger Sensor (5 V, Signal, Masse), NTC am Pull-up (Spannungsteiler), Fehlerbilder Unterbrechung → Signal ≈ 5 V, Kurzschluss gegen Masse → ≈ 0 V; Potentiometer; Hall/induktiv (schon vorhanden).
- **Aktoren:** plus- und masseseitige Ansteuerung, PWM, Tastverhältnis, Frequenz, Lesen des Oszillogramms (masseseitig: unteres Niveau = bestromt).
- **CAN/LIN:** Topologie mit zwei 120-Ω-Abschlüssen, 60 Ω gesamt, Messung stromlos, Pegel High-Speed-CAN, Fehlerbilder (0 Ω, 120 Ω, ∞), LIN Ein-Draht, Master/Slave.

## Sichere Werte (✅ darf als Zahl in die Fragen)
| Wert | Quelle |
|---|---|
| CAN-Abschluss je 120 Ω, zwei parallel = 60 Ω; Messung stromlos (Batterie ab / Zündung aus) | [mvwautotechniek CAN](https://www.mvwautotechniek.nl/en/measure-on-can-bus/), [kfz-dietrich CAN](https://kfz-dietrich.com/blog/can-bus-fehler-diagnose-fahrzeugelektronik/), vorhandene Frage |
| ≈ 120 Ω → ein Abschluss/Zweig fehlt; ≈ 0 Ω → Kurzschluss H–L; ∞ → beide Zweige unterbrochen | dieselben |
| High-Speed-CAN: rezessiv beide ≈ 2,5 V; dominant High ≈ 3,5 V, Low ≈ 1,5 V; Differenz ≈ 2 V bzw. ≈ 0 V | [kfz-tech CAN](https://kfz-tech.de/Engl/Biblio/Digitaltechnik/CAN-BusF1.htm), [kfz-dietrich Oszi](https://kfz-dietrich.com/blog/can-bus-stoerung-fehlersuche-oszilloskop/) |
| OBD-Buchse: CAN-High Pin 6, CAN-Low Pin 14 | [youcanic](https://www.youcanic.com/glossary/termination-resistor/) |
| LIN: eine Leitung, ein Master, mehrere Slaves; rezessiv ≈ Bordspannung, dominant ≈ Masse | [kfz-tech LIN](https://kfz-tech.de/Engl/Biblio/Digitaltechnik/LIN-Bus.htm), [kvaser LIN](https://kvaser.com/about-can/can-standards/linbus/), [kfz-dietrich LIN](https://kfz-dietrich.com/blog/lin-bus-komfortelektronik-werkstatt/) |
| Klemmen 30, 15, 31, 50, 85/86 (Spule), 30/87 (Arbeitskontakt), 87a (Ruhekontakt) | [Hella Klemmenbezeichnung](https://www.hella.com/tibi/ti/fr/electrics/ti_fr_elektrik_Klemmenbezeichnung.pdf), [kfz-dietrich Klemme 30/87](https://kfz-dietrich.com/blog/klemme-30-klemme-87-bordnetz-grundlagen/), Tabellenbuch |
| NTC an Pull-up: Unterbrechung → Signal ≈ Versorgung (5 V), Kurzschluss gegen Masse → ≈ 0 V | [kfz-dietrich P0118](https://kfz-dietrich.com/blog/fehlercode-p0118-kuehlmitteltemperatur-signal-hoch/), [mvwautotechniek Temperatursensor](https://www.mvwautotechniek.nl/en/temperature-sensor) |
| Spannungsfall nur unter Last messen; Durchgangsprüfer zeigt Übergangswiderstände oft nicht | [kfz-dietrich Spannungsabfall](https://kfz-dietrich.com/blog/spannungsabfall-messen-bordnetz-werkstatt/), [Hella Masse 31 Fehlersuche](https://hella.com/techworld/de/ti/pdf/masse-31-fehlersuche/masse__31____fehlersuche.pdf) |
| Ruhestrom erst nach dem Einschlafen aller Steuergeräte messen; zu frühe Messung zeigt zu hohe Werte | [kfz-dietrich Ruhestrom](https://kfz-dietrich.com/blog/fahrzeugelektronik-ruhestrom-diagnose/), [autoservicepraxis](https://www.autoservicepraxis.de/downloadfile/1700477/main.9996758.pdf) |
| Stromlaufplan aufgelöst: Strompfade senkrecht nebeneinander, Plus oben, Masse unten, nach Strompfaden nummeriert; zusammenhängend: Bauteile als Ganzes | [voltimum Schaltpläne](https://content.voltimum.com/de/127002/221532_seiten_254-257_schaltplaene.pdf), [krafthand Leseprobe](https://krafthand-shop.de/wp-content/uploads/2023/04/Grundlagen_der_Fahrzeugelektrik_II_Leseprobe.pdf) |
| Ohm, Leistung, Reihe/Parallel, Tastverhältnis = t_ein ÷ T, f = 1 ÷ T | Physik/FW |

## Zu prüfen (⚠️ nur ohne feste Zahl oder „laut Herstellerangabe“)
- **Grenzwerte Spannungsfall:** Quellen nennen für Masse 0,1 V bis 0,3 V, für Plus bis 0,5 V (Starter höher). → In Fragen nur „wenige Zehntel Volt“ bzw. Werte im Bild als „Sollwert laut Herstellerangabe“. In den Bildfragen die Messwerte so wählen, dass die Bewertung eindeutig ist (z. B. 0,05 V vs. 3,8 V).
- **Ruhestrom-Grenzwert:** Quellen 20–80 mA, Wartezeit bis Schlafmodus 5–90 min → nur „laut Herstellerangabe“.
- **Leitungsfarben:** DIN 72551-7 (2014) ist die Norm; Farbbedeutungen (z. B. braun = Masse) herstellerabhängig ([kohl24 Leitungen](https://kohl24.de/media/files_public/Leitungen_in_KFZ.pdf)) → nur die Kurzzeichen (sw, rt, br, ws, gn, ge, bl, gr) als Farben abfragen, keine Funktion daraus ableiten.
- **Relaisklemme 85/86 Polung** (welche Seite Plus): je nach Relais/Hersteller, bei Relais mit Diode wichtig → nicht abfragen.
- **40 Ω am CAN** (dritter Widerstand) nur eine Quelle → nicht abfragen.
- **Pull-up-Wert** im Steuergerät (1–3 kΩ) → nur als Beispielwert im Bild.

## Spickzettel-Vorschlag „Schaltpläne lesen“
- **Darstellung:** aufgelöster Stromlaufplan = Strompfade senkrecht, oben Plus (30/15), unten Masse (31), Strompfad-Nummern am Rand; Bauteile können auf mehrere Pfade verteilt sein (Relaisspule in Pfad 3, Kontakt in Pfad 5) → Querverweis beachten.
- **Klemmen (DIN 72552):** 30 Dauerplus · 15 Zündungsplus · 31 Masse · 50 Starter · 85/86 Relaisspule · 30 → 87 Arbeitskontakt (Schließer) · 87a Ruhekontakt · 58 Standlicht.
- **Kennbuchstaben:** A Steuergerät · B Sensor · F Sicherung · H Leuchte · K Relais · M Motor · R Widerstand · S Schalter · X Stecker · Y Ventil/Aktor.
- **Schaltzeichen (DIN EN 60617):** Widerstand = Rechteck · Sicherung = Rechteck mit Längsstrich · Lampe = Kreis mit Kreuz · Motor = Kreis mit M · Relais = Rechteck (Spule) + Kontakt, gestrichelt verbunden · Masse = Querstriche.
- **Leitungsangabe:** z. B. „1,5 sw/rt“ = 1,5 mm², Grundfarbe schwarz, Kennfarbe rot. Kurzzeichen: sw schwarz, rt rot, br braun, ws weiß, gn grün, ge gelb, bl blau, gr grau.
- **Steuerstromkreis vs. Laststromkreis:** kleiner Strom über Schalter/Steuergerät → Spule (85/86); großer Strom über Sicherung → 30 → 87 → Verbraucher → Masse.
- **Lesen in 4 Schritten:** Verbraucher finden → nach oben bis zur Sicherung/Plus verfolgen → nach unten bis zur Masse → Schalter/Relais/Steuergerät im Pfad markieren → Messpunkte festlegen.

## Spickzettel-Vorschlag „Messen im Stromkreis“
- Spannung parallel, Strom in Reihe (oder Zange), Widerstand/Durchgang nur stromlos und Bauteil abgesteckt.
- Spannungsfall unter Last: über intakter Leitung/Schalter ≈ 0 V, über dem Verbraucher ≈ Bordspannung. Steht die ganze Spannung über einem Leitungsstück → dort Unterbrechung; einige Volt → Übergangswiderstand.
- Offener Kreis: hinter der Unterbrechung 0 V gegen Masse, davor volle Spannung. Masseseitige Unterbrechung: am Verbraucher beidseitig ≈ 12 V gegen Masse.
- Kurzschluss gegen Masse hinter der Sicherung → Sicherung löst aus; Isolationsprüfung Leitung gegen Masse (beidseitig abgesteckt) → ≈ 0 Ω = Kurzschluss.
- Ruhestrom: Zange/Amperemeter, Schlafmodus abwarten, Sicherungen einzeln ziehen, Grenzwert laut Hersteller.

## Spickzettel-Vorschlag „Sensor- und Bus-Werte“
- 3-poliger Sensor: 5 V Versorgung, Signal (Raildruck 0,5–4,5 V), Masse über das Steuergerät.
- NTC am Pull-up: kalt → hohe Signalspannung, warm → niedrig; Unterbrechung ≈ 5 V; Kurzschluss gegen Masse ≈ 0 V.
- CAN: 2 × 120 Ω parallel = 60 Ω (stromlos messen) · 120 Ω = ein Abschluss fehlt · ≈ 0 Ω = H und L kurzgeschlossen · Pegel 2,5 V Ruhe, 3,5/1,5 V dominant.
- LIN: eine Leitung, Ruhe ≈ Bordspannung, dominant ≈ 0 V.
- Oszi: Periodendauer T ablesen → f = 1 ÷ T; Tastverhältnis = t_ein ÷ T; bei masseseitiger Ansteuerung ist der untere Teil die Einschaltzeit.

## Quellen
[mvwautotechniek – Measuring on CAN bus](https://www.mvwautotechniek.nl/en/measure-on-can-bus/) · [kfz-dietrich – CAN-Bus-Fehler](https://kfz-dietrich.com/blog/can-bus-fehler-diagnose-fahrzeugelektronik/) · [kfz-dietrich – CAN Oszilloskop](https://kfz-dietrich.com/blog/can-bus-stoerung-fehlersuche-oszilloskop/) · [kfz-tech – CAN-Bus](https://kfz-tech.de/Engl/Biblio/Digitaltechnik/CAN-BusF1.htm) · [youcanic – termination resistor](https://www.youcanic.com/glossary/termination-resistor/) · [kfz-tech – LIN-Bus](https://kfz-tech.de/Engl/Biblio/Digitaltechnik/LIN-Bus.htm) · [kvaser – LIN](https://kvaser.com/about-can/can-standards/linbus/) · [kfz-dietrich – LIN-Bus](https://kfz-dietrich.com/blog/lin-bus-komfortelektronik-werkstatt/) · [Hella – Klemmenbezeichnung](https://www.hella.com/tibi/ti/fr/electrics/ti_fr_elektrik_Klemmenbezeichnung.pdf) · [kfz-dietrich – Klemme 30/87](https://kfz-dietrich.com/blog/klemme-30-klemme-87-bordnetz-grundlagen/) · [DIN 72552 (Wikipedia)](https://EN.wikipedia.com/wiki/DIN_72552) · [kfz-dietrich – Spannungsabfall messen](https://kfz-dietrich.com/blog/spannungsabfall-messen-bordnetz-werkstatt/) · [kfz-dietrich – Massefehler](https://kfz-dietrich.com/blog/fahrzeugelektronik-massefehler-diagnose/) · [Hella – Masse 31 Fehlersuche](https://hella.com/techworld/de/ti/pdf/masse-31-fehlersuche/masse__31____fehlersuche.pdf) · [kfz-dietrich – Ruhestrom](https://kfz-dietrich.com/blog/fahrzeugelektronik-ruhestrom-diagnose/) · [autoservicepraxis – Ruhestrom](https://www.autoservicepraxis.de/downloadfile/1700477/main.9996758.pdf) · [voltimum – Schaltpläne](https://content.voltimum.com/de/127002/221532_seiten_254-257_schaltplaene.pdf) · [krafthand – Fahrzeugelektrik II Leseprobe](https://krafthand-shop.de/wp-content/uploads/2023/04/Grundlagen_der_Fahrzeugelektrik_II_Leseprobe.pdf) · [kohl24 – Leitungen im Kfz](https://kohl24.de/media/files_public/Leitungen_in_KFZ.pdf) · [DIN 72551-7](https://www.dinmedia.de/de/norm/din-72551-7/220988632) · [kfz-dietrich – P0118](https://kfz-dietrich.com/blog/fehlercode-p0118-kuehlmitteltemperatur-signal-hoch/) · [mvwautotechniek – temperature sensor](https://www.mvwautotechniek.nl/en/temperature-sensor)
