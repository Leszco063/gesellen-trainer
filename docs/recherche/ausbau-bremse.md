# Recherche Ausbau Bremse (EPB & ESP) – Stand 28.10.2026

Für `inhalt/fragen/bremse.py` (Ausbau von 43 auf ca. 100 Fragen, zweiter Aufgabensatz `esp-octavia`).
Ergänzt Rechercheakte `2026-10-26-gp2-winter-2026-27.md` Abschnitt 3.2 und 3.6. Lokale Notizen in `material/` wurden nur gelesen, nichts daraus übernommen.

## 1. Was neu dazukam (Themen der neuen Fragen)

- **EPB:** Schaltplan lesen (Taster mit mehreren Kontakten = Redundanz, Stellmotoren mit Polwendung über H-Brücke im Steuergerät, eigene Sicherungen, Kl. 30/15/31), dynamische Notbremsung (über ESP-Hydraulik, Rückfallebene: Stellmotoren hinten in Intervallen), Auto-Hold (gemeinsame Funktion EPB + ESP: Druck halten über ESP-Ventile, nach längerer Zeit Übergabe an die EPB), Servicemodus auch über Bordmenü/Tastenkombination möglich, Grundeinstellung/Anlernen nach Arbeiten.
- **ABS/ESP-Hydraulik:** je Rad Einlassventil (stromlos offen) + Auslassventil (stromlos geschlossen); je Bremskreis Umschalt-/Trennventil (stromlos offen) + Ansaug-/Hochdruckventil (stromlos geschlossen), Niederdruckspeicher, Rückförderpumpe (ein Motor für beide Kreise). Insgesamt 12 Magnetventile bei Bosch-ESP (4 Einlass, 4 Auslass, 2 + 2 für ASR/ESP) – bestätigt durch Saab-WIS (Bosch-Aggregat).
- **Regelphasen beim aktiven ESP-/ASR-Eingriff:** Umschaltventil schließt (trennt HBZ vom Kreis), Ansaugventil öffnet (Pumpe saugt aus dem HBZ/Behälter), Pumpe fördert über das offene Einlassventil zur Radbremse; die anderen Räder des Kreises werden über ihre geschlossenen Einlassventile gesperrt. Druckabbau beim aktiven Eingriff: Umschaltventil öffnet wieder (Flüssigkeit zurück zum HBZ) bzw. Auslassventil.
- **Raddrehzahlsensoren:** aktiv (Hall/MR, 2-Leiter, Stromsignal mit zwei Pegeln, Versorgung vom Steuergerät), passiv (induktiv, Dauermagnet + Spule, Sinus, Amplitude und Frequenz steigen mit der Drehzahl). Aktive Sensoren **nicht mit Ohmmeter oder Prüflampe** prüfen (Elektronik kann Schaden nehmen) – nur Spannung, Strom bzw. Oszilloskop. Passive: Widerstand der Spule laut Herstellerangabe, Signal mit Oszi.
- **Frequenz am Impulsring:** f = z × n ÷ 60 (z = Zähne bzw. Polpaare, n in 1/min). Raddrehzahl aus Geschwindigkeit: n = v ÷ (π × d).
- **Fehlerbilder:** Lücke im Signal einmal pro Radumdrehung = beschädigter Impuls-/Magnetring; Signal fehlt ganz = Leitung/Stecker/Sensor; Amplitude klein (passiv) = Luftspalt zu groß; Leitung auf Masse = Kurzschluss.
- **Lenkwinkelsensor:** Grundeinstellung nach Achsvermessung (✅ schon in der Akte), Gierratensensor/Querbeschleunigung: Nullabgleich nach Tausch bzw. laut Hersteller.
- **Bremsflüssigkeit, Prüfstand, HU:** wie Akte 3.6 – Grenzwerte nur „laut Tabellenbuch“.

## 2. Sichere Werte (dürfen als Zahl in Fragen)

| Wert | Quelle |
|---|---|
| Aktiver Sensor (2-Leiter): Strompegel ca. 7 mA (Low) und 14 mA (High) | Werkstatt-Handbuch Mini R50 (Bosch-System), mikrocontroller.net – **in Fragen nur als „Beispielwert im Bild“** verwendet |
| Hall-Sensoren vertragen nur kleine Ströme (bis ca. 30 mA) → keine Glühlampen-Prüflampe | autoservicepraxis.de (Fachartikel Sensoren) |
| Aktive Sensoren nur per Spannung/Oszilloskop prüfen, nicht per Widerstand | VEMO Tech-Info, Hella TI |
| Passiver Sensor: Widerstand „ca. 800–1200 Ω je nach Sollwert“ | Hella TI – **in Fragen nur „laut Herstellerangabe“** |
| f = z × n ÷ 60 | Physik (FW) |
| 12 Magnetventile im ESP-Aggregat (4 EV, 4 AV, 2 + 2 ESP/ASR) | Saab WIS (Bosch-Aggregat) |
| DOT-Siedepunkte | TB (wie bisher) |
| Dauerhaft leuchtende ABS-/ESP-Kontrollleuchte = erheblicher Mangel bei der HU | kfz-dietrich.com (beruft sich auf TÜV/DEKRA), EU-RL 2014/45 Anhang I – **Sekundärquelle, Wortlaut der HU-Richtlinie noch prüfen** |
| Mängelhaftung Werkvertrag: zuerst Nacherfüllung durch die ausführende Werkstatt (Fristsetzung), sonst kann Kostenersatz entfallen | BGB §§ 634, 635, 637 (FW) |

## 3. Unsicher / zu prüfen (nur ohne Zahl bzw. „laut Herstellerangabe/Tabellenbuch“)

- Luftspalt Raddrehzahlsensor (Quellen nennen 0,2–1 mm, herstellerabhängig) → **nicht abfragen**.
- Widerstand passiver Sensor (Hella 800–1200 Ω, andere Quellen bis 2,5 kΩ) → nur „Sollwert laut Herstellerangabe“, im Aufgabensatz steht der Sollwert im Fragetext.
- Versorgungsspannung aktiver Sensor (je nach System Bordnetz oder geregelt ca. 8–12 V) → im Fragetext als Beispielwert nennen.
- Zeit, nach der Auto-Hold an die EPB übergibt (herstellerabhängig) → nicht als Zahl.
- Ob die dynamische Notbremsung immer mit Warnblinker kommt (herstellerabhängig) → nicht abfragen.
- Lüftspiel EPB, Drehmomente Sattel → nur „laut Herstellerangabe“.
- Prüfstand-Grenzwerte (Mindestabbremsung, Feststellbremse, Ungleichmäßigkeit) → weiter **nur Tabellenbuch** (Akte 3.6 ⚠️).
- HU-Bewertung der leuchtenden ABS-/ESP-Leuchte (erheblicher Mangel) nur aus Sekundärquelle → mit HU-Richtlinie abgleichen.
- Rückfallebene der dynamischen Notbremsung (Stellmotoren hinten in Intervallen) ist herstellerabhängig → in der Frage mit „bei vielen Systemen“ formuliert.
- Bezeichnungen der Ventile unterscheiden sich je Hersteller (Umschaltventil = Trennventil = Druckabbauventil; Ansaugventil = Hochdruckventil = Druckaufbauventil). In den Fragen steht deshalb die Bezeichnung aus dem eigenen Bild.
- 📖 Hydroaggregat und Regelphasen im Fachkundebuch nachlesen (Netzquellen nur Saab-WIS).

## 3a. Umsetzung in `bremse.py` (Stand 28.10.2026)

- 101 Fragen (vorher 43): 80 mc, 17 Zuordnung, 4 Reihenfolge; Level 1/2/3 = 26/49/26.
- Neuer Aufgabensatz `esp-focus` (Ford Focus 2019, ABS-/ESP-Leuchte nach Radlagerwechsel, beschädigter Magnetring vorn rechts): 18 Aufgaben, 75 Punkte.
- Neue Bilder: `bremse-epb-schaltplan.svg`, `bremse-esp-hydraulik.svg`, `bremse-oszi-raddrehzahl.svg`, `bremse-esp-sensoren.svg` (Pins, Sicherungen, 7/14 mA und alle Messwerte sind Beispielwerte und stehen im Bild bzw. Fragetext).
- Antwortlängen der alten Fragen ausgeglichen (vorher richtige = längste 58 %, jetzt 10 %).

## 4. Quellen

- [Hella TI Raddrehzahlsensoren](https://www.hella.com/tibi/ti/de/electronics/ti_d_electronics_raddrehzahlsensoren1.pdf)
- [Hella Kurzinfo 1884 Raddrehzahlsensoren](https://hella.com/partnerworld/assets/documents/1884_KI_Raddrehzahlsensoren_HELLA_DE.pdf)
- [VEMO Tech-Info Raddrehzahlsensor](https://image.vierol-shop.de/downloads/verkaufsunterlagen_vemo/sensoren/de/vemo_21502_tech-info_sensor_raddrehanzahl_de_20180806.pdf)
- [autoservicepraxis – Sensoren prüfen (PDF)](https://www.autoservicepraxis.de/downloadfile/1700896/main.9998628.pdf)
- [mikrocontroller.net – 2-Draht-Hallgeber 7/14 mA](https://www.mikrocontroller.net/topic/234577)
- [Mini R50 Repair Manual – Wheel Speed Sensor Testing](https://manuals.autorepairshq.com/Mini/2002/Cooper%20%28R50%29%20L4-1.6L%20%28W10%29/Repair%20and%20Diagnosis/Brakes%20and%20Traction%20Control/Antilock%20Brakes%20%2F%20Traction%20Control%20Systems/Wheel%20Speed%20Sensor/Testing%20and%20Inspection)
- [Saab WIS – ESP-Regelung und Bremseingriff](https://saabwisonline.com/9-5-9600/2003/5-brakes/stabiliser-system-esp/technical-description/esp-regulation-and-brake-application)
- [Saab WIS – Hydraulic unit (Bosch)](https://saabwisonline.com/9-5-9600/2002/5-brakes/stabiliser-system-esp/technical-data/hydraulic-unit)
- [auto-motor-und-sport – Feststellbremse/Notbremsung](https://www.auto-motor-und-sport.de/tech-zukunft/geheimnisse-der-feststellbremse-dieser-knopf-kann-leben-retten/)
- [leasingmarkt.de – elektrische Handbremse](https://www.leasingmarkt.de/magazin/technik/elektrische-handbremse)
- [mein-autolexikon – EPB (PDF)](https://www.mein-autolexikon.de/bremse/elektrische-parkbremse-handbremse.pdf)
- [kfz-dietrich.com – EPB-Belagwechsel](https://kfz-dietrich.com/blog/bremsbelagwechsel-elektrische-parkbremse-anleitung/), [Lenkwinkelsensor](https://kfz-dietrich.com/blog/lenkwinkel-sensor-kalibrieren-werkstatt/) (schon in der Akte)
- [kfz-dietrich.com – ABS-Warnleuchte (Quellen)](https://kfz-dietrich.com/quellen/auto-abs-warnleuchte-ursachen-werkstatt/)
- [umwelt-online – HU-Bremsenrichtlinie](https://umwelt-online.de/recht/gefahr.gut/strasse/stvzo/hubremsrl_in.htm) (schon in der Akte)

## 5. Spickzettel-Vorschlag (Lernkarten)

1. **ABS-Regelphasen:** Einlass stromlos offen, Auslass stromlos geschlossen – Aufbauen (EV auf/AV zu), Halten (EV zu/AV zu), Abbauen (EV zu/AV auf, Pumpe fördert zurück).
2. **ESP-Druckaufbau ohne Pedal:** Umschaltventil zu, Ansaugventil auf, Pumpe an, Einlass am Zielrad offen, an den anderen Rädern zu.
3. **Raddrehzahlsensor aktiv vs. passiv:** Rechteck/zwei Strompegel, Versorgung, bis Stillstand – vs. Sinus, keine Versorgung, Amplitude steigt mit Drehzahl. Aktiv nie mit Ohmmeter/Prüflampe.
4. **Signal lesen:** f = z × n ÷ 60; Lücke einmal pro Umdrehung = Impulsring defekt; kleine Amplitude = Luftspalt.
5. **EPB-Werkstatt:** Servicemodus → Arbeiten → Grundeinstellung; Notlösen: sichern, Spannung herstellen, sonst mechanische Notentriegelung.
6. **ESP-Eingriff:** Übersteuern → außen vorn bremsen; Untersteuern → innen hinten bremsen.
7. **Nach Achsvermessung:** Lenkwinkelsensor-Grundeinstellung, Räder geradeaus.
