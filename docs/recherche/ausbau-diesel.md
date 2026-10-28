# Recherche Ausbau Diesel (Diagnosetechnik I – Common-Rail & AdBlue)

Stand 28.10.2026. Ergänzt `2026-10-26-gp2-winter-2026-27.md` Abschnitt 3.1 und 3.6. Alles in eigenen Worten, nur Themen und Werte – keine Texte übernommen.

## 1. Was neu in die Fragenbank kommt

| Thema | Inhalt der neuen Fragen |
|---|---|
| Schaltplan Motorsteuerung | eigener Plan `diesel-motorsteuerung-schaltplan.svg`: Hauptrelais K1 (Kl. 30/87/85/86), Sicherungen F1–F3, Motorsteuergerät A1 mit Pins, Raildrucksensor B1 (5 V / Signal / Masse), KW-Geber B2 (induktiv, 2-polig), Zumesseinheit Y1 und Druckregelventil Y2 (Plus über Sicherung, Masse PWM vom SG), Injektoren Y3/Y4 (beidseitig vom SG). Fragen: welcher Pin, welche Sicherung, wo messen, Fehlerort aus Messwerten |
| Oszillogramm Injektor | eigenes Bild `diesel-oszi-injektorstrom.svg`: Stromverlauf Magnetventil-Injektor mit Anzug (ca. 20 A) und getaktetem Halten (ca. 12 A), Raster 5 A / 0,1 ms. Fragen: Anzugs-/Haltestrom ablesen, Ansteuerdauer, Fehlerbilder |
| SCR-Anlage | eigenes Bild `diesel-scr-anlage.svg` mit Nummern 1–10 (Tank mit Fördermodul und Heizung, Füllstand-/Qualitätsgeber, Leitung mit Heizung, Oxi-Kat, DPF, Abgastemperatursensor, NOx-Sensor 1, Dosierventil, SCR-Kat, NOx-Sensor 2) |
| SCR-Schaltplan | eigener Plan `diesel-scr-schaltplan.svg`: F4/F5, Heizrelais K2, Tankheizung R1, Leitungsheizung R2, Drucksensor B3, Dosierventil Y5 (PWM masseseitig), Förderpumpe M1, Steuergerät A2, Messpunkte A–C |
| Zweiter Aufgabensatz `scr-peugeot` | Peugeot 308 1.5 BlueHDi (2021), Meldung sinngemäß „AdBlue-Störung – Start in 600 km nicht möglich“ trotz Nachfüllen; Ursache: Dosierventil durch Harnstoffkristalle verengt (Kurzstrecke); Messwerte Refraktometer, NOx 1/2, Förderdruck, Dosiermengentest, Y5 elektrisch; 19 Aufgaben, 68 Punkte |
| Sensoren | KW-Geber induktiv (Wechselspannung, Frequenz ∝ Drehzahl, Bezugsmarke/Zahnlücke) vs. Hall (Rechteck), NW-Geber für Zylindererkennung, HFM (Frequenzsignal), Ladedrucksensor, Fahrpedalgeber mit 2 Gebern |
| DPF/AGR | Differenzdrucksensor (Beladung), Abgastemperatursensoren, passive/aktive Regeneration, verstopfte Messschläuche, Asche nicht verbrennbar, Adaption nach DPF-Tausch |
| AdBlue-Diagnose | Refraktometer (Soll ca. 32,5 %), NOx vor/nach Kat vergleichen (Wirkungsgrad), Dosiermenge Soll/Ist, Druckaufbau Fördermodul, Heizkreis-Widerstand nach Herstellerangabe, Kristallisation, Spülen/Leersaugen, Codierung/Adaption nach Tausch |

## 2. Sichere Werte (dürfen fest abgefragt werden)

- AdBlue: 32,5 % Harnstoff + 67,5 % demineralisiertes Wasser (ISO 22241) – Hengst-Datenblatt, Fachkundebuch.
- Gefrierpunkt ca. −11 °C (auch −11,5 °C genannt → nicht gegeneinander stellen).
- Gefrierendes AdBlue dehnt sich aus → Leitungen und Dosierventil werden nach dem Abstellen leergesaugt.
- Reaktion im SCR-Kat: NOx + NH₃ → N₂ + H₂O; aus Harnstoff entsteht in der Hydrolysestrecke NH₃ (und CO₂).
- Dosierventil sitzt vor dem SCR-Kat, NOx-Sensor 1 davor, NOx-Sensor 2 nach dem SCR-Kat; Wirkungsgrad = Vergleich beider Sensoren.
- NOx-Sensoren kommunizieren bei vielen Fahrzeugen über CAN (eigenes Elektronikmodul am Kabel) – IKA.
- Warnstufen: Hinweis bei Restreichweite um 2400 km, weitere Stufen herstellerabhängig, bei 0 km kein Neustart nach dem Abstellen (Euro 5/6, mehrere Betriebsanleitungen; Bilstein).
- Nach dem Nachfüllen erlischt die Warnung oft erst nach einer Mindestfüllmenge / Fahrt bzw. nach Freigabe mit dem Tester (herstellerabhängig).
- Refraktometer zur Qualitätsprüfung, Sollwert ca. 32,5 %.
- DPF: Differenzdrucksensor misst Druck vor/nach Filter → Beladung; verstopfte/gerissene Schläuche verfälschen den Wert; Asche verbrennt nicht.
- Raildrucksensor 5 V / 0,5–4,5 V, < 0,25 V bzw. > 4,75 V = Defekt; MV-Injektor Anzug ca. 20 A mit 70–100 V, Halten ca. 10–13 A; Piezo 110–150 V (Fachkundebuch, siehe 3.6).
- Induktiver KW-Geber: Wechselspannung, Amplitude und Frequenz steigen mit der Drehzahl; Zahnlücke als Bezugsmarke. Hallgeber: Rechtecksignal, braucht Versorgung.

## 3. Zu prüfen (nur ohne feste Zahl oder „laut Herstellerangabe“)

- ⚠️ AdBlue-Förderdruck im Pkw: Quellen nennen keine einheitliche Zahl → nur „Solldruck laut Herstellerangabe“.
- ⚠️ Widerstand der AdBlue-Heizkreise (ein Blog nennt 3–8 Ω) → nur „laut Herstellerangabe“, in Fragen nur Vergleich mit einem in der Frage genannten Sollwert.
- ⚠️ Verbrauch AdBlue: 1–6 % je nach Quelle → nur „wenige Prozent“.
- ⚠️ NOx-Werte vor/nach Kat (Blog: 200–800 ppm vor, < 50 ppm nach) → nur als Beispielwerte in der Aufgabe, Beurteilung über das Verhältnis.
- ⚠️ Mindest-Nachfüllmenge für Neustart (Blog: 3–5 l) → „Mindestmenge laut Betriebsanleitung“.
- ⚠️ Differenzdruck DPF (wenige mbar Leerlauf, 100–200 mbar voll) → nicht als Zahl abfragen.
- ⚠️ Rechtsgrundlage Startsperre: VO (EG) 715/2007 bzw. Durchführungsverordnungen – Artikel nicht verifiziert → nur „gesetzlich vorgeschrieben (Euro 6)“.
- ⚠️ Oszi-Formen (Stromeinbruch beim Ankeranzug) im Netz nicht belegt → im eigenen Bild nur Anzug/Halten/Abschalten, kein „Ankerknick“ abfragen.
- 📖 Fachkundebuch-Seiten zu SCR-Diagnose fehlen weiterhin.

## 4. Spickzettel-Vorschlag (Lernkarten)

1. **Strompfad lesen im Motor-Schaltplan** – Kl. 30 → Sicherung → Hauptrelais 87 → Aktor → SG schaltet Masse (PWM); unterer Pegel = bestromt.
2. **Raildrucksensor 3-polig** – 5 V Versorgung, Signal 0,5–4,5 V, Masse < 0,1 V Spannungsfall; < 0,25 V / > 4,75 V = Defekt.
3. **Injektorstrom ablesen** – Anzug ca. 20 A, Halten ca. 12 A getaktet, Ansteuerdauer = Beginn bis Stromabfall.
4. **SCR-Anlage in Strömungsrichtung** – Oxi-Kat → DPF → T-Sensor + NOx 1 → Dosierventil → Mischer/Hydrolyse → SCR-Kat → NOx 2 → Sperrkat.
5. **AdBlue-Warnung trotz vollem Tank** – Fehlerspeicher (Herstellertester), Qualität (Refraktometer), Druckaufbau Soll/Ist, Dosierventil auf Kristalle, Heizung, NOx 1/2 vergleichen.
6. **NOx-Wirkungsgrad** – (NOx vor − NOx nach) ÷ NOx vor × 100 %.
7. **KW-Geber induktiv vs. Hall** – Sinus mit Lücke, Spannung steigt mit Drehzahl, 2 Leitungen / Rechteck, 3 Leitungen mit Versorgung.

## Quellen

- [Hengst AdBlue-Datenblatt](https://www.hengst.com/Produkte/Datenbl%C3%A4tter/Schmierstoffe/PS_SDS_DE_Sonstige/AdBlue_PDS_DE.pdf)
- [IKA/GEBE – NOx-Sensoren: Ausfallursachen und Diagnose](https://www.ika-germany.de/en/spare-parts-exhaust-system/nox-sensors-failure-causes-fault-diagnosis/)
- [kfz-dietrich.com – AdBlue-System Fehler](https://kfz-dietrich.com/blog/adblue-system-fehler-nachfuellen-reparatur/) (Werkstatt-Blog, nur Hinweis)
- [kfz-dietrich.com – Restreichweite null, Motorstart blockiert](https://kfz-dietrich.com/blog/adblue-restreichweite-null-motorstart-blockiert/) (Werkstatt-Blog)
- [Bilstein/febi FTEC019 – AdBlue-Technik](https://cdn.partsfinder.bilsteingroup.com/pf-document/FTEC019_GB.PDF)
- [Opel Insignia Betriebsanleitung (manualslib) – Warnstufen AdBlue](https://www.manualslib.com/manual/1054371/Opel-Insignia.html?page=165)
- [Renault Clio Betriebsanleitung (manualslib) – Reagent Tank](https://www.manualslib.com/manual/3244570/Renault-Clio.html?page=135)
- [Bosch Denoxtronic Broschüre Pkw/LCV](https://www.boschaftermarket.com/xrm/media/images/services/downloads/parts_14/denoxtronic_brochure_pc_lcv_de_89300-1.pdf)
- [Bosch – Differenzdrucksensor Zusammenfassung](https://www.bosch-mobility.com/media/global/solutions/passenger-cars-and-light-commercial-vehicles/powertrain-solutions/denoxtronic/differential-pressure-sensor/zusammenfassung_differenzdrucksensor.pdf)
- [Delphi – DPF Differential Pressure Sensor](https://delphiautoparts.com/resource-center/article/making-sense-of-your-sensors-dpf-differential-pressure-sensor)
- [Delphi – Elektrische Prüfung Common-Rail-Injektor](https://delphiautoparts.com/en-gb/mom/how-to/how-to-check-the-electrical-status-of-a-common-rail-injector)
- [autoservicepraxis – FabuCar-Fall 2025/29](https://www.autoservicepraxis.de/downloadfile/3716697/90007_2025_29_10_I_042_n40_FabuCar-Fall_134043_print.pdf)
