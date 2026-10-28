# Recherche Ausbau Klima (Diagnosetechnik II – Klimaanlage)

Stand 28.10.2026. Ergänzt `2026-10-26-gp2-winter-2026-27.md` Abschnitt 3.3 und 3.6. Quellen sind überwiegend Zulieferer-/Werkstatt-Infos und IHK-Seiten; Herstellerwerte (Drücke, Pinbelegung, Sollwerte) gelten immer nur für das jeweilige Fahrzeug.

## 1. Was neu in die Fragen kam

- **Extern geregelter Verdichter:** Regelventil im Verdichter, vom Steuergerät per PWM angesteuert; Hub (Taumelscheibe) und damit Fördermenge stufenlos. Häufig ohne Magnetkupplung (Riemenscheibe mit Überlastschutz/Sollbruchstelle). Diagnose: Messwertblock (Soll-Ansteuerung/Strom), Stellglieddiagnose, PWM am Verdichterstecker mit Oszilloskop, Spulenwiderstand. Kältemittelmangel vorher ausschließen; Schmutz im Kreislauf kann das Regelventil zusetzen. [Hella Techtips, Robinair EVDC100, DENSO Bulletin]
- **Hochdrucksensor (3-polig, analog):** 5-V-Versorgung vom Steuergerät, Masse über das Steuergerät, Signal ungefähr proportional zum Druck (typisch etwa 0,5 … 4,5 V). Signal am Anschlag unten/oben (Unterbrechung, Kurzschluss nach Masse bzw. Plus) → Fehlerspeicher, Verdichter wird abgeschaltet. Plausibilität: Live-Wert mit Manometer am Serviceanschluss vergleichen. [kfz-dietrich P0532/P0533, Saab WIS]
- **Lüfteransteuerung:** meist stufenlos per PWM über Lüftersteuergerät am Lüfter (Leistung über eigene Sicherung Klemme 30); ältere Anlagen über Relais/Vorwiderstand. Diagnose: Ansteuerung in % im Messwertblock, Stellglieddiagnose, Sicherung, Versorgung/Masse, Stromaufnahme. Läuft der Lüfter bei 0 % Anforderung dauernd → Endstufe/Relais hängt. [kfz-dietrich Kühlerlüfter, P0480]
- **Verdampfertemperatursensor (NTC):** Regelung hält Verdampfer knapp über 0 °C (Vereisungsschutz).
- **Überhitzung / Unterkühlung** als Rechenaufgabe: Temperatur aus Druck-Temperatur-Tabelle (Werte im Aufgabentext vorgegeben) minus/plus gemessene Rohrtemperatur, Ergebnis in K.
- **Verstopfter Trockner/Filtersieb:** spürbarer Temperaturabfall über dem Bauteil, ggf. Bereifung am Ausgang (Drosselstelle) – qualitativ.
- **R744 (CO₂):** sehr viel höhere Drücke als R134a/R1234yf (Größenordnung bis zehnfach), statt Kondensator ein **Gaskühler** (überkritischer Betrieb), innerer Wärmeübertrager, nicht brennbar, ungiftig, aber schwerer als Luft (Erstickung). Eigene Servicegeräte; Ablassen über kontrollierte Ableitung (CO₂ ist natürlich, GWP 1). [ARCTick, Umweltbundesamt, Robinair/Texa Prospekte]
- **Recht:** EU-F-Gase-VO (EU) 2024/573, in Deutschland umgesetzt durch die **neue ChemKlimaschutzV (in Kraft 17.04.2026)**: Sachkundepflicht auch für alternative Kältemittel (Propan, CO₂, NH₃, HFO – R1234yf ist ein HFO). Bisherige Bescheinigungen gelten **bis 12.03.2029**, danach anerkannter Auffrischungskurs. Alte Kategorien I–IV → neue A1 … D. [IHK Karlsruhe, IHK Koblenz]
- MAC-Richtlinie 2006/40/EG: In neuen Pkw (EU) nur Kältemittel mit GWP < 150 (deshalb R1234yf bzw. R744 statt R134a). [FW, bekannt]

## 2. Sichere Werte (dürfen als Zahl in Fragen)

| Wert | Quelle |
|---|---|
| R1234yf: GWP < 150, Sicherheitsklasse A2L | Recherche 3.6 |
| R744: GWP 1, nicht brennbar, schwerer als Luft | ARCTick, UBA |
| ChemKlimaschutzV in Kraft 17.04.2026, alte Sachkunde gilt bis 12.03.2029 | IHK Karlsruhe, IHK Koblenz |
| Absolutdruck = Überdruck + Luftdruck | FW |
| Hochdrucksensor-Versorgung ca. 5 V (Saab-WIS: 4,8–5,2 V) | Saab WIS, kfz-dietrich |
| PWM: f = 1/T, Tastverhältnis = Einschaltzeit/Periodendauer | FW |

## 3. Zu prüfen / unsicher (nicht als feste Zahl abfragen)

- ⚠️ **Klimadrücke ND/HD**: hängen von Außentemperatur, Drehzahl, Kältemittel ab → nur qualitativ oder mit Werten im Aufgabentext.
- ⚠️ **Signalbereich Drucksensor** 0,5–4,5 V ist typisch, aber herstellerabhängig (französische Quelle nennt andere Kennlinie) → Kennlinie in der Aufgabe vorgeben.
- ⚠️ **PWM-Frequenz und Strom des Regelventils**: keine verlässliche allgemeine Angabe gefunden → Werte nur aus eigenem Oszi-Bild (Beispiel).
- ⚠️ **Richtung „mehr Tastverhältnis = mehr Hub“**: gilt für viele Verdichter, nicht für alle → in Aufgaben als „laut Werkstattinformation“ vorgeben.
- ⚠️ Lüfter-Stromaufnahme 5–25 A (nur Werkstatt-Blog) → nicht abfragen.
- ⚠️ R744-Höchstdruck (Quellen nennen bis ca. 170 bar) → nur „sehr viel höher“ abfragen.
- ⚠️ Genaue Sachkunde-Kategorie für Fahrzeugklimaanlagen nach neuer ChemKlimaschutzV (Pkw-Klima-Lehrgang) → nur Grundsatz „Sachkunde nötig“ abfragen.
- 📖 Fachkundebuch-Seiten Klima fehlen weiterhin → Fragen mit `src` „FW“ später gegen Buch prüfen.

## 4. Eigene Bilder (Beispielwerte, nicht von Herstellerplänen)

- `klima-schaltplan.svg`: Klima-Steuergerät A1 mit Pins, Hochdrucksensor B1 (3-polig), Verdampfertemperatursensor B2, Regelventil Y1 (masseseitig per PWM), Lüftersteuergerät A2 mit Lüfter M1, Sicherungen F1–F3, Klemmen 30/15/31.
- `klima-oszi-regelventil.svg`: PWM-Signal an A1 Pin 11 (1 Kästchen = 2 V / 0,5 ms) → 400 Hz, 60 % bestromt.
- `klima-messpunkte.svg`: Kältekreis mit Serviceanschlüssen HD/ND und Temperatur-Messpunkten A–F.

## 5. Spickzettel-Vorschlag

1. **Drucksensor 3-polig prüfen** – 5 V / Masse / Signal; Signal am Anschlag = Leitungsfehler; Live-Wert gegen Manometer.
2. **PWM auswerten** – f = 1/T, Tastverhältnis = t_ein/T; masseseitig geschaltet: unteres Niveau = bestromt.
3. **Überhitzung und Unterkühlung** – Überhitzung = Rohrtemp. Verdampferausgang − Verdampfungstemp.; Unterkühlung = Kondensationstemp. − Rohrtemp. Flüssigkeitsleitung; Einheit K.
4. **Druckbilder qualitativ** – Unterfüllung, Überfüllung, Kondensator/Lüfter, Expansionsventil zu, Verdichter fördert nicht, Trockner verstopft.
5. **Spannungsfall-Messung** – unter Last messen; mehr als wenige Zehntel Volt über Leitung/Stecker = Übergangswiderstand.
6. **R744 kurz** – Gaskühler, sehr hohe Drücke, GWP 1, eigene Geräte.
7. **Recht 2026** – ChemKlimaschutzV 17.04.2026, Sachkunde auch für HFO/CO₂, alte Nachweise bis 12.03.2029, Ablassverbot, Dokumentation.

## Quellen

- [Hella Techtips – Klimakompressoren ohne Magnetkupplung (PDF)](https://www.techtips.ie/Hella-Ireland/aircon-compressors-without-magnetic-clutches.pdf)
- [Hella TechWorld – Hochvolt-Klimakompressoren (PDF)](https://hella.com/techworld/de/bi/pdf/klima-hochvolt-kompressoren/klima_hochvolt_kompressoren.pdf)
- [Robinair EVDC100 – Prüfgerät für extern geregelte Verdichter (PDF)](https://de.robinair.com/sites/default/files/EVDC100_Flyer_DE_94369.pdf)
- [DENSO – AC Compressor Failure Bulletin (PDF)](https://assets.denso-am.eu/production/attachments/AC-Compressor-Failure-Bulletin-German.pdf)
- [kfz-dietrich – Fehlercode P0532/P0533 Klimadrucksensor](https://kfz-dietrich.com/blog/fehlercode-p0532-vs-p0533-klimadrucksensor-vergleich/) (Werkstatt-Blog)
- [Saab WIS – DTC P0532/P0533](https://saabwisonline.com/docs/9650/2011/doc66695.htm)
- [kfz-dietrich – Kühlerlüfter Nachlauf](https://kfz-dietrich.com/blog/kuehlerluefter-nachlauf-motor-stop/), [P0480 Lüfterrelais](https://kfz-dietrich.com/blog/fehlercode-p0480-luefterrelais-stromkreis/) (Werkstatt-Blog)
- [ARCTick – R744 (CO₂)](https://arctick.org/information/autogas/r744-co2-carbon-dioxide/)
- [Umweltbundesamt – Markteinführung Pkw-Klimaanlagen mit CO₂ (PDF)](https://www.umweltbundesamt.de/sites/default/files/medien/378/publikationen/texte_64_2011_unterstuetzung_der_markteinfuehrung_von_pkw_klimaanlagen.pdf)
- [IHK Karlsruhe – neue ChemKlimaschutzV](https://www.ihk.de/karlsruhe/fachthemen/umwelt/chemikalien/chemikalien-klimaschutzverordnung/chemklimaschutzv-neue-chemikalien-7039104)
- [IHK Koblenz – neue ChemKlimaschutzV](https://www.ihk.de/koblenz/unternehmensservice/umwelt-nachhaltigkeit/aktuelles-und-termine/aktuelles/neue-chemikalien-klimaschutzverordnung-7049190)
- [LfU Bayern – ChemKlimaschutzV](https://www.lfu.bayern.de/analytik_stoffe/verordnungen/chemklimaschutzv/index.htm)
