"""
Klima (Diagnosetechnik II): Kältekreislauf, Kältemittel und Öle, Klimaservice, Druckdiagnose, Vorschriften.
Aufgabensätze „klima-bmw“ (Unterfüllung durch Leck am Kondensator) und „klima-skoda“ (elektrischer Fehler:
Signalleitung Hochdrucksensor unterbrochen, mit eigenem Schaltplan/Oszillogramm/Messpunkt-Bild) + Einzelfragen.
Format siehe docs/superpowers/specs (Abschnitt 5 und 15). Nach Änderungen:  python tools/export.py
Konkrete Drücke (ND/HD in bar) werden nur qualitativ oder „laut Tabellenbuch“ abgefragt (Recherche 3.6 ⚠️).
"""

SITUATIONEN = {
    "klima-bmw": {
        "titel": "Kundenauftrag: Klimaanlage kühlt kaum",
        "text": "BMW 320d, Baujahr 2019, Kältemittel R1234yf, extern geregelter Verdichter.\n"
                "Kunde beanstandet: „Die Klimaanlage bläst nur noch lauwarm, und manchmal riecht es muffig.“\n"
                "Außentemperatur 25 °C.",
        "cat": "Klima",
    },
    "klima-skoda": {
        "titel": "Kundenauftrag: Klimaanlage bläst nur warm (Elektrik)",
        "text": "Škoda Octavia Combi 1.5 TSI, Baujahr 2020, Kältemittel R1234yf, extern geregelter Verdichter ohne Magnetkupplung, Klimaautomatik.\n"
                "Kunde beanstandet: „Seit ein paar Tagen kommt nur noch warme Luft aus den Düsen, obwohl AC eingeschaltet ist.“\n"
                "Außentemperatur 20 °C. Schaltplan-Auszug, Messwerte und Oszillogramm stehen in den Aufgaben (Pinbelegung = Beispiel).",
        "cat": "Klima",
    },
}

QUESTIONS = [
    # ------------------------------------------------------------------
    # Aufgabensatz klima-bmw (18 Aufgaben, 67 Punkte)
    # ------------------------------------------------------------------
    {"cat": "Klima", "level": 1, "typ": "zuordnung", "pkt": 8, "situation": "klima-bmw", "nr": 1,
     "bild": "klimakreislauf.svg",
     "q": "Zur Vorbereitung sehen Sie sich das Schema des Kältekreislaufs an. Ordnen Sie den Nummern die Bauteile zu.",
     "paare": [["①", "Verdichter mit Regelventil"], ["②", "Kondensator mit Lüfter"], ["③", "Trockner/Sammler"],
               ["④", "Expansionsventil"], ["⑤", "Verdampfer mit Gebläse"],
               ["⑥", "Druck-/Temperatursensor Hochdruck"], ["⑦", "Service-Anschluss Hochdruck"],
               ["⑧", "Service-Anschluss Niederdruck"]],
     "ablenker": ["Drosselrohr", "Akkumulator"],
     "explain": "Der Verdichter drückt das Kältemittel zum Kondensator. Von dort fließt es flüssig durch den Trockner zum "
                "Expansionsventil. Hinter dem Expansionsventil beginnt die Niederdruckseite (gestrichelt): Verdampfer und "
                "Saugleitung zurück zum Verdichter. Sensor und Hochdruck-Serviceanschluss sitzen in der Flüssigkeitsleitung, "
                "der Niederdruck-Serviceanschluss in der Saugleitung.",
     "src": "FW, Format Prüfung Schule"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 5, "situation": "klima-bmw", "nr": 2,
     "q": "In welchem Zustand kommt das Kältemittel am Eingang des jeweiligen Bauteils an? Ordnen Sie Aggregatzustand und Druckseite zu.",
     "paare": [["Verdichter", "gasförmig, Niederdruck"], ["Kondensator", "gasförmig, Hochdruck"],
               ["Trockner/Sammler", "flüssig, Hochdruck"], ["Expansionsventil", "flüssig, Hochdruck"],
               ["Verdampfer", "flüssig-gasförmig (Nassdampf), Niederdruck"]],
     "explain": "Der Verdichter saugt nur Dampf an (Flüssigkeit würde ihn beschädigen). Im Kondensator wird der heiße Dampf "
                "verflüssigt, Trockner und Expansionsventil bekommen deshalb Flüssigkeit unter Hochdruck. Hinter dem "
                "Expansionsventil fällt der Druck, ein Teil verdampft schon – in den Verdampfer strömt ein Gemisch aus "
                "Flüssigkeit und Dampf.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 3,
     "q": "Das Fahrzeug ist mit R1234yf befüllt. Welche Antwort nennt drei zutreffende Eigenschaften bzw. Besonderheiten dieses Kältemittels?",
     "opts": ["Geringes Treibhauspotenzial (GWP unter 150); nicht brennbar (Sicherheitsklasse A1); eigene Serviceanschlüsse und eigenes Servicegerät",
              "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); darf mit R134a gemischt werden, weil beide denselben Kreislauf und dieselben Serviceanschlüsse nutzen",
              "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); nicht mit R134a mischen, eigene Serviceanschlüsse und eigenes Servicegerät",
              "Hohes Treibhauspotenzial, deshalb in Neufahrzeugen verboten; schwer entflammbar (Sicherheitsklasse A2L); eigene Serviceanschlüsse und eigenes Servicegerät"],
     "correct": 2,
     "explain": "Merkmale von R1234yf: GWP unter 150, Sicherheitsklasse A2L (schwer entflammbar), nicht mit R134a mischen – "
                "eigene Serviceanschlüsse und eigenes Servicegerät. R1234yf ersetzt in Neufahrzeugen R134a, weil es das Klima viel weniger belastet. Dafür ist es schwach "
                "brennbar. Der Kreislauf ist gleich aufgebaut, Anschlüsse und Geräte sind aber verschieden, damit nichts "
                "verwechselt wird.",
     "src": "Recherche 3.3/3.6, FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 4,
     "q": "Bevor Sie den Kältekreis öffnen: Welche Antwort nennt drei Voraussetzungen, damit Sie an dieser Anlage arbeiten dürfen?",
     "opts": ["Kein eigener Sachkundenachweis nötig, wenn ein Kollege mit Nachweis im Betrieb ist; zugelassenes Klimaservicegerät für R1234yf; gut belüfteter Arbeitsplatz",
              "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; zugelassenes Klimaservicegerät für R1234yf; gut belüfteter Arbeitsplatz, nicht über einer Arbeitsgrube",
              "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; vorhandenes R134a-Servicegerät genügt; gut belüfteter Arbeitsplatz, nicht über einer Arbeitsgrube",
              "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; zugelassenes Klimaservicegerät für R1234yf; geschlossener Raum ohne Lüftung, damit kein Kältemittel entweicht"],
     "correct": 1,
     "explain": "Wer Kältemittel absaugt oder einfüllt, braucht eine Sachkundebescheinigung. Für R1234yf ist ein eigenes "
                "Servicegerät vorgeschrieben. Weil das Kältemittel schwerer als Luft ist, sammelt es sich in Gruben.",
     "src": "Recherche 3.3/3.6, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 4, "situation": "klima-bmw", "nr": 5,
     "q": "Welche Antwort nennt vier Vorprüfungen, die Sie ohne Klimaservicegerät durchführen können?",
     "opts": ["Sichtprüfung auf Ölspuren und Beschädigungen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Vakuum-Haltetest durchführen",
              "Sichtprüfung auf Ölspuren und Beschädigungen; Innenraumfilter und Kondenswasserablauf prüfen; Kältemittel absaugen und wiegen; Ausströmtemperatur messen",
              "Vakuum-Haltetest durchführen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Innenraumfilter und Kondenswasserablauf prüfen",
              "Sichtprüfung auf Ölspuren und Beschädigungen; Verdichteransteuerung im Tester prüfen; Kondensatorlüfter und Gebläse prüfen; Ausströmtemperatur messen"],
     "correct": 3,
     "explain": "Ohne Servicegerät möglich: Sichtprüfung auf Undichtheit (Ölspuren, Beschädigungen z. B. am Kondensator), "
                "Verdichteransteuerung (Messwerte Regelventil im Tester), Kondensatorlüfter und Innenraumgebläse, Innenraumfilter "
                "und Kondenswasserablauf, Ausströmtemperatur an der Mitteldüse, Fehlerspeicher von Klima- und Motorsteuergerät. "
                "Kältemittel absaugen und wiegen sowie der Vakuumtest gehen nur mit dem Servicegerät. Viele Fehler findet man schon ohne Manometer: Ölspuren zeigen Lecks (das Kältemittel trägt Öl mit), "
                "ein ausgefallener Lüfter oder ein zugesetzter Filter mindern die Kühlleistung.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2, "situation": "klima-bmw", "nr": 6,
     "q": "Sie messen an der Mitteldüse 18 °C (Umluft, höchste Kühlstufe, Gebläse mittel). Welcher Wert wäre bei einer intakten Anlage und 25 °C Außentemperatur ungefähr zu erwarten?",
     "opts": ["ca. 4 bis 8 °C", "ca. 15 bis 20 °C", "ca. −15 bis −10 °C", "ca. 22 bis 25 °C"], "correct": 0,
     "explain": "Eine intakte Anlage bläst deutlich kühle Luft knapp über dem Gefrierpunkt aus (den genauen Sollwert liefert "
                "die Prüftabelle des Herstellers). Unter 0 °C darf es nicht gehen, sonst vereist der Verdampfer. 18 °C sind "
                "hier also deutlich zu warm.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4, "situation": "klima-bmw", "nr": 7,
     "q": "Am Servicegerät lesen Sie bei laufendem Motor ab: Niederdruck und Hochdruck liegen beide deutlich unter den Sollwerten aus dem Tabellenbuch. Wie ist das Messergebnis zu beurteilen?",
     "opts": ["Überfüllung: zu viel Kältemittel im Kreislauf; überschüssiges Kältemittel absaugen und nach Gewicht neu befüllen",
              "Kondensator verschmutzt oder Lüfter ausgefallen; Kondensator reinigen und Lüfteransteuerung prüfen",
              "Unterfüllung: der Verdampfer wird nicht ausreichend versorgt; Kältemittel verbraucht sich nicht, also Leck suchen statt nachfüllen",
              "Unterfüllung durch normalen Kältemittelverbrauch über die Jahre; nur die fehlende Menge nachfüllen, eine Lecksuche ist dabei nicht nötig"],
     "correct": 2,
     "explain": "Beide Drücke zu niedrig deuten auf Unterfüllung: Der Verdampfer wird nicht ausreichend mit Kältemittel versorgt "
                "→ geringe Kühlleistung. Nächster Schritt: Leck suchen, nicht einfach nachfüllen. Fehlt Kältemittel, kann der Verdichter auf der Hochdruckseite keinen normalen Druck aufbauen, und auch der "
                "Saugdruck sinkt. Da der Kreislauf geschlossen ist, bedeutet Kältemittelverlust immer eine Undichtheit.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 4, "situation": "klima-bmw", "nr": 8,
     "q": "Zum Vergleich: Ordnen Sie den Fehlerbildern die typische Druckanzeige am Servicegerät zu.",
     "paare": [["Unterfüllung", "ND und HD beide zu niedrig"],
               ["Kondensator verschmutzt oder Lüfter ausgefallen", "HD deutlich zu hoch, ND leicht erhöht"],
               ["Expansionsventil klemmt geschlossen", "ND sehr niedrig (bis Unterdruck), HD niedrig, Leitung nach dem Ventil bereift"],
               ["Überfüllung", "ND und HD beide zu hoch"]],
     "ablenker": ["ND zu hoch, HD zu niedrig"],
     "explain": "Kann der Kondensator die Wärme nicht abgeben, steigt vor allem der Hochdruck. Lässt das Expansionsventil "
                "kaum Kältemittel durch, saugt der Verdichter die Niederdruckseite leer. Bei Überfüllung steigen beide Drücke. "
                "(Der Ablenker „ND hoch, HD niedrig“ passt eher zu einem Verdichter, der nicht fördert.)",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 9,
     "q": "Welche Antwort nennt drei Verfahren, mit denen Sie das Leck suchen können?",
     "opts": ["UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Vakuum-Haltetest zur Ortung der Leckstelle",
              "UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Formiergas mit Wasserstoff-Lecksucher",
              "UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Formiergas einfüllen und mit der UV-Lampe suchen",
              "Elektronischer Lecksucher; Formiergas mit Wasserstoff-Lecksucher; Ausströmtemperatur an der Mitteldüse messen"],
     "correct": 1,
     "explain": "Verfahren: UV-Kontrastmittel im Öl und UV-Lampe (mit Brille), elektronischer Lecksucher (spricht auf Kältemittel "
                "in der Luft an), Formiergas (Stickstoff-Wasserstoff-Gemisch) mit Wasserstoff-Lecksucher. Hier zeigt die UV-Lampe Kontrastmittel am Kondensator hinter einem Steinschlag. Formiergas eignet sich, "
                "wenn kein Kältemittel mehr im Kreislauf ist. Ein Vakuumtest zeigt nur, dass es undicht ist, nicht wo.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "reihenfolge", "pkt": 6, "situation": "klima-bmw", "nr": 10,
     "q": "Der Kondensator ist durch Steinschlag undicht und wird ersetzt. Bringen Sie die Arbeitsschritte am Klimaservicegerät in die richtige Reihenfolge.",
     "schritte": ["Restliches Kältemittel absaugen und recyceln",
                  "Menge des abgeschiedenen Altöls ablesen",
                  "Kondensator und Trockner ersetzen, neue Dichtringe einsetzen",
                  "Kreislauf evakuieren (Dauer nach Herstellerangabe)",
                  "Vakuum halten und beobachten (Dichtheitsprüfung)",
                  "Frisches Öl in der abgeschiedenen Menge und ggf. UV-Kontrastmittel ergänzen",
                  "Kältemittel nach Gewicht laut Typschild einfüllen"],
     "explain": "Erst muss der Kreislauf leer sein, bevor man ihn öffnet. Die abgesaugte Ölmenge wird später ersetzt. "
                "Nach dem Einbau wird evakuiert (meist mindestens 20–30 Minuten, genaue Zeit nach Hersteller). Steigt der "
                "Druck beim Halten nicht an, ist der Kreislauf dicht – erst dann wird Öl und Kältemittel eingefüllt.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2, "situation": "klima-bmw", "nr": 11,
     "q": "Wozu wird der Kältekreislauf vor dem Befüllen evakuiert?",
     "opts": ["Um Luft und Feuchtigkeit zu entfernen und die Dichtheit zu prüfen",
              "Um das Kältemittelöl vollständig aus dem Verdichter zu saugen",
              "Um den Trockner zu regenerieren, damit er nicht getauscht werden muss",
              "Um den Kreislauf auf Betriebstemperatur zu bringen"], "correct": 0,
     "explain": "Im Vakuum siedet Wasser schon bei Raumtemperatur und wird abgesaugt. Luft würde den Hochdruck erhöhen. "
                "Hält das Vakuum, ist die Anlage dicht.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 12,
     "q": "Warum muss der Trockner erneuert werden, wenn der Kreislauf geöffnet wurde? Welche Begründung ist richtig?",
     "opts": ["Der Trockner speichert das Kältemittelöl für den Verdichter; nach dem Öffnen ist er leergelaufen und muss mit frischem Öl getauscht werden",
              "Das Filtersieb ist durch Abrieb verstopft; die Feuchtigkeit aus der Luft spielt für den Trockner keine Rolle",
              "Beim Evakuieren wird das Trockenmittel durch den Unterdruck zerstört, deshalb ist der Trockner ein Einwegteil",
              "Das Trockenmittel hat Feuchtigkeit aus der Luft aufgenommen und ist gesättigt; Wasser bildet Säure und kann am Expansionsventil gefrieren"],
     "correct": 3,
     "explain": "Das Trockenmittel ist nach dem Öffnen mit Feuchtigkeit gesättigt. Feuchtigkeit bildet mit Kältemittel und Öl "
                "Säure → Korrosion im Kreislauf; freies Wasser kann am Expansionsventil gefrieren und den Durchfluss sperren. "
                "Der Trockner kann nur eine begrenzte Menge Wasser binden. Ist der Kreislauf offen, ist er schnell voll. "
                "Ein neuer Trockner schützt Verdichter und Expansionsventil.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4, "situation": "klima-bmw", "nr": 13,
     "q": "Für das Ergänzen des Öls stehen in der Werkstatt mehrere Kältemittelöle. Ordnen Sie den Ölen den richtigen Einsatz zu.",
     "paare": [["PAG-Öl (ohne YF)", "nur für R134a-Anlagen"],
               ["PAG-Öl YF", "für R1234yf- und R134a-Anlagen"],
               ["POE-Öl", "für elektrische Verdichter (Hybrid/E-Fahrzeug)"],
               ["PAO-Öl", "Universalöl für R134a, mischt sich nicht mit PAG"]],
     "ablenker": ["für Motoren mit Partikelfilter"],
     "explain": "Für den BMW mit R1234yf kommt nur PAG-Öl YF (bzw. das Öl nach Herstellervorgabe) in Frage. PAG ohne YF "
                "darf nicht in R1234yf-Anlagen. POE ist nicht leitend und deshalb für elektrische Verdichter da. "
                "Grundsätzlich: Typ, Viskosität und Menge nach Hersteller, Öle nicht mischen.",
     "src": "TB Betriebsstoffe (Kompressoröle)"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 14,
     "q": "Ein Kollege will das übrige Öl später in einem Hybridfahrzeug mit elektrischem Verdichter verwenden. Warum ist dort POE-Öl vorgeschrieben?",
     "opts": ["Der HV-Elektromotor im Verdichter wird von Kältemittel und Öl umströmt; POE ist nicht leitend und erhält den Isolationswiderstand",
              "POE ist besonders hygroskopisch und bindet dadurch die Feuchtigkeit im Kreislauf besser als PAG-Öl",
              "POE schmiert die hohen Drehzahlen des Elektroverdichters besser als PAG; die elektrischen Eigenschaften des Öls spielen dabei keine Rolle",
              "POE ist elektrisch leitend und leitet Fehlerströme des HV-Motors sicher zur Fahrzeugmasse ab"],
     "correct": 0,
     "explain": "Im elektrischen Verdichter wird der Hochvolt-Elektromotor von Kältemittel und Öl umströmt. POE-Öl ist nicht "
                "elektrisch leitend und hält die Isolation aufrecht; leitendes Öl verschlechtert den Isolationswiderstand → "
                "HV-Fehler bzw. Gefahr. POE ist außerdem wasserabweisend und darf nicht mit anderen Ölen gemischt werden. Schon Reste von PAG im "
                "Servicegerät können bei E-Verdichtern schaden – das Gerät muss dafür geeignet sein.",
     "src": "TB Betriebsstoffe (Kompressoröle), FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2, "situation": "klima-bmw", "nr": 15,
     "q": "Laut Typschild beträgt die Füllmenge 590 g R1234yf. Das Servicegerät hat 340 g abgesaugt. Wie viel Prozent der Füllmenge haben gefehlt?",
     "opts": ["57,6 %", "42,4 %", "73,5 %", "4,2 %"], "correct": 1,
     "explain": "Fehlmenge = 590 g − 340 g = 250 g. Anteil = 250 g ÷ 590 g × 100 % ≈ 42,4 %.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-bmw", "nr": 16,
     "q": "Der Kunde klagt auch über muffigen Geruch. Welche Antwort nennt die Ursache und zwei geeignete Maßnahmen zur Abhilfe?",
     "opts": ["Ursache: Kältemittel tritt am Verdampfer aus; Kältemittel absaugen und neu befüllen, Innenraumfilter erneuern",
              "Ursache: verbranntes Kältemittelöl im Verdichter; Kältemittelöl wechseln und den Verdichter spülen",
              "Ursache: Bakterien und Pilze am feuchten Verdampfer; Verdampfer reinigen bzw. desinfizieren, Innenraumfilter erneuern und Ablauf prüfen",
              "Ursache: Bakterien und Pilze am feuchten Verdampfer; Kondenswasserablauf verschließen, damit kein Schmutz eindringt, und Duftstoff in die Düsen sprühen"],
     "correct": 2,
     "explain": "Ursache sind Bakterien und Pilze am feuchten Verdampfer. Abhilfe: Verdampfer reinigen bzw. desinfizieren, "
                "Innenraumfilter erneuern und Kondenswasserablauf auf Durchgang prüfen. Am Verdampfer schlägt sich Feuchtigkeit nieder – im Dunkeln wachsen dort Keime. Ein verstopfter Ablauf "
                "lässt Wasser im Gehäuse stehen. Tipp für den Kunden: vor dem Abstellen kurz ohne Klima weiterlüften.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 4, "situation": "klima-bmw", "nr": 17,
     "q": "Welche Antwort nennt vier richtige Sicherheitsregeln beim Arbeiten am Kältekreis?",
     "opts": ["Schutzbrille tragen; Schutzhandschuhe gegen Erfrierungen tragen; nicht in der Arbeitsgrube arbeiten; keine offene Flamme, nicht rauchen",
              "Schutzbrille tragen; Schutzhandschuhe tragen; in der Arbeitsgrube arbeiten, weil Kältemittel nach oben steigt; keine offene Flamme",
              "Schutzbrille tragen; nicht in der Arbeitsgrube arbeiten; keine offene Flamme; Restkältemittel vor dem Öffnen in die Hallenluft ablassen",
              "Schutzbrille tragen; Schutzhandschuhe tragen; nicht in der Arbeitsgrube arbeiten; Tore schließen, damit kein Kältemittel ins Freie gelangt"],
     "correct": 0,
     "explain": "Regeln: Schutzbrille (flüssiges Kältemittel verletzt die Augen), Schutzhandschuhe (Erfrierungen), nicht in "
                "der Arbeitsgrube arbeiten (Kältemittel schwerer als Luft, verdrängt den Sauerstoff), keine offene Flamme und "
                "nicht rauchen (R1234yf brennbar, giftige Zersetzungsprodukte), Arbeitsplatz gut belüften. Beim Verdampfen entzieht das Kältemittel der Umgebung sehr viel Wärme – auf der Haut gibt es Erfrierungen. "
                "In der Grube kann man ersticken, ohne es zu merken.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 4, "situation": "klima-bmw", "nr": 18,
     "q": "Welche Antwort nennt vier richtige Abschlussarbeiten, bevor Sie das Fahrzeug an den Kunden übergeben?",
     "opts": ["Dichtheit der neuen Verbindungen prüfen; Leistungstest; Fehlerspeicher löschen; als Reserve gegen spätere Verluste 10 % mehr Kältemittel als laut Typschild einfüllen",
              "Dichtheit der neuen Verbindungen prüfen; Fehlerspeicher löschen; Füllmenge dokumentieren; Leistungstest entfällt, da nach Gewicht befüllt wurde",
              "Leistungstest; Fehlerspeicher auslesen und löschen; Füllmenge dokumentieren; zur Dichtheitsprüfung etwas Kältemittel an den Verbindungen ablassen",
              "Dichtheit der neuen Verbindungen prüfen; Leistungstest (Ausströmtemperatur, Drücke); Fehlerspeicher auslesen und löschen; Kältemittelart und Füllmenge dokumentieren"],
     "correct": 3,
     "explain": "Abschlussarbeiten: Dichtheit der neuen Verbindungen prüfen (z. B. elektronischer Lecksucher), Leistungstest "
                "(Ausströmtemperatur und Drücke), Fehlerspeicher auslesen und löschen, Kältemittelart und Füllmenge "
                "dokumentieren (abgesaugt / eingefüllt), Serviceaufkleber bzw. Hinweis im Motorraum aktualisieren. Die Dokumentation von Kältemittel und Menge ist vorgeschrieben. Der Leistungstest beweist, dass die "
                "Beanstandung „bläst lauwarm“ behoben ist.",
     "src": "Recherche 3.3, FW"},

    # ------------------------------------------------------------------
    # Aufgabensatz klima-skoda (18 Aufgaben, 72 Punkte): elektrischer Fehler am Hochdrucksensor
    # Bilder: klima-schaltplan.svg, klima-oszi-regelventil.svg, klima-messpunkte.svg (eigene Zeichnungen, Pins = Beispiel)
    # ------------------------------------------------------------------
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 4, "situation": "klima-skoda", "nr": 1,
     "q": "Zu Beginn der Fehlersuche: Welche Antwort nennt drei sinnvolle erste Schritte?",
     "opts": ["Kältemittel absaugen und nach Gewicht neu befüllen; danach Fehlerspeicher löschen und Probefahrt machen, weil meist Kältemittel fehlt",
              "Beanstandung nachvollziehen (AC ein, Ausströmtemperatur messen); Fehlerspeicher aller Steuergeräte auslesen; Messwerte zu Drucksensor und Regelventil ansehen",
              "Beanstandung nachvollziehen (AC ein, Ausströmtemperatur messen); Verdichter vorsorglich ersetzen; danach Fehlerspeicher aller Steuergeräte löschen",
              "Fehlerspeicher löschen und abwarten, ob der Fehler wiederkommt; Innenraumfilter erneuern; Kältemittel mit UV-Kontrastmittel auffüllen, damit nichts fehlt"],
     "correct": 1,
     "explain": "Zuerst wird die Beanstandung nachvollzogen und der Fehlerspeicher aller beteiligten Steuergeräte ausgelesen. "
                "Messwertblöcke zeigen, ob Drucksignal und Ansteuerung des Regelventils plausibel sind. Teile tauschen oder "
                "Kältemittel wechseln „auf Verdacht“ kostet Geld und findet die Ursache nicht; gelöscht wird erst nach der Reparatur.",
     "src": "FW, Format Prüfung Schule"},
    {"cat": "Klima", "level": 1, "typ": "zuordnung", "pkt": 6, "situation": "klima-skoda", "nr": 2,
     "bild": "klima-schaltplan.svg",
     "q": "Im Schaltplan-Auszug sind die Bauteile nur mit Kennzeichen eingetragen. Ordnen Sie den Kennzeichen die Bauteile zu.",
     "paare": [["B1", "Hochdrucksensor (Kältemitteldruck)"], ["B2", "Verdampfertemperatursensor"],
               ["Y1", "Regelventil im Verdichter"], ["A2", "Lüftersteuergerät"],
               ["M1", "Motor des Kühlerlüfters"], ["F1", "Sicherung für den Lüfter (Klemme 30)"]],
     "ablenker": ["Magnetkupplung des Verdichters", "Relais für den Kühlerlüfter"],
     "explain": "Kennbuchstaben: A Steuergerät, B Sensor, F Sicherung, M Motor, Y Ventil/Aktor. B1 trägt das Zeichen p (Druck) "
                "und hat drei Anschlüsse (5 V, Signal, Masse), B2 das Zeichen T (Temperatur) mit zwei Anschlüssen. Y1 ist eine "
                "Spule mit Ventilzeichen. Eine Magnetkupplung hat dieser Verdichter nicht, und der Lüfter hängt an einem "
                "Lüftersteuergerät statt an einem Relais.",
     "src": "Eigener Schaltplan"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 3,
     "q": "Im Fehlerspeicher des Klima-Steuergeräts steht: „Geber für Kältemitteldruck – Signal zu klein (unterer Grenzwert unterschritten)“. Was sagt dieser Eintrag aus?",
     "opts": ["Der Kältemitteldruck ist sicher zu niedrig; die Anlage hat ein Leck und muss sofort abgesaugt und neu befüllt werden",
              "Der Sensor meldet einen zu hohen Druck; der Kondensator ist wahrscheinlich verschmutzt oder der Lüfter ausgefallen",
              "Die Signalspannung am Steuergerät liegt unter dem gültigen Bereich; Ursache kann Leitung, Stecker oder Sensor sein",
              "Das Regelventil im Verdichter wird zu schwach angesteuert; die Endstufe im Steuergerät ist defekt und muss ersetzt werden"],
     "correct": 2,
     "explain": "„Signal zu klein“ heißt nur: Die Spannung am Signaleingang liegt unter dem Bereich, den ein intakter Sensor liefern "
                "kann. Ursache kann eine Unterbrechung, ein Kurzschluss nach Masse, ein Steckerfehler oder der Sensor sein. Ob "
                "wirklich Kältemittel fehlt, zeigt erst der Vergleich mit dem Manometer – also nicht gleich am Kältekreis arbeiten.",
     "src": "Netz: kfz-dietrich (P0532/P0533), FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 4,
     "q": "Warum stellt das Steuergerät den Verdichter ab, solange das Drucksignal unplausibel ist? Welche Begründung ist richtig?",
     "opts": ["Ohne gültigen Druckwert kann es weder Überdruck noch Kältemittelmangel erkennen; es schaltet zum Schutz der Anlage ab",
              "Der Verdichter braucht das Drucksignal als Spannungsversorgung für das Regelventil; ohne Signal fehlt der Spulenstrom",
              "Das Steuergerät will Kraftstoff sparen; bei jedem Fehler im Klimasystem werden alle Verbraucher abgeschaltet, auch das Gebläse",
              "Der Verdichter würde ohne Signal rückwärts laufen; das Abschalten verhindert, dass Öl in den Verdampfer gedrückt wird"],
     "correct": 0,
     "explain": "Das Drucksignal schützt die Anlage: Zu hoher Druck gefährdet Leitungen und Verdichter, zu niedriger Druck "
                "(Kältemittelmangel) bedeutet auch zu wenig Öl für den Verdichter. Ist der Wert unplausibel, kann das Steuergerät "
                "beides nicht überwachen und schaltet sicherheitshalber ab. Deshalb bläst die Anlage warm, obwohl der Kältekreis "
                "in Ordnung sein kann.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 4, "situation": "klima-skoda", "nr": 5,
     "bild": "klima-schaltplan.svg",
     "q": "Welche Pins des Steuergeräts A1 gehören laut Schaltplan zum Hochdrucksensor B1, und welche Aufgabe hat jeder?",
     "opts": ["Pin 1: Versorgung Klemme 15; Pin 4: Signal; Pin 2: Masse des Steuergeräts",
              "Pin 3: Signal; Pin 4: 5-V-Versorgung; Pin 5: Masse über das Steuergerät",
              "Pin 7: 5-V-Versorgung; Pin 8: Masse; Pin 11: Signal zum Regelventil",
              "Pin 3: 5-V-Versorgung; Pin 4: Signal; Pin 5: Masse über das Steuergerät"],
     "correct": 3,
     "explain": "B1 hat drei Anschlüsse: Pin 1 bekommt von A1 Pin 3 die stabilisierte 5-V-Versorgung, Pin 2 liefert das "
                "Drucksignal an A1 Pin 4, Pin 3 liegt über A1 Pin 5 an Masse. Pin 1 und 2 von A1 versorgen das Steuergerät "
                "selbst, Pin 7/8 gehören zu B2 und Pin 11 zum Regelventil Y1.",
     "src": "Eigener Schaltplan"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 6,
     "q": "Motor aus, das Fahrzeug stand über Nacht bei 20 °C. Am Servicegerät zeigen Hoch- und Niederdruckmanometer beide ca. 5 bar; laut Druck-Temperatur-Tabelle passt das zu 20 °C. Im Messwertblock zeigt der Hochdrucksensor 0,0 bar. Wie beurteilen Sie das?",
     "opts": ["Die Anlage ist fast leer, weil der Sensor 0,0 bar misst; das Manometer zeigt nur den Druck im Schlauch des Servicegeräts",
              "Kältemittel ist vorhanden; der Wert im Messwertblock ist unplausibel, der Fehler liegt im elektrischen Sensorkreis",
              "Beide Werte sind in Ordnung, weil der Sensor bei stehendem Motor grundsätzlich 0,0 bar anzeigt und erst im Betrieb misst",
              "Die Anlage ist überfüllt, weil beide Manometer den gleichen Druck zeigen; absaugen und nach Gewicht neu befüllen"],
     "correct": 1,
     "explain": "Im Stillstand gleichen sich Hoch- und Niederdruck an. Solange noch flüssiges Kältemittel im Kreislauf ist, hängt "
                "dieser Ruhedruck fast nur von der Temperatur ab – er zeigt also, dass Kältemittel da ist (nicht aber, ob die "
                "Menge stimmt). Ein Sensorwert von 0,0 bar ist dann unplausibel. Gleiche Drücke im Stillstand sind normal und "
                "kein Zeichen für Überfüllung.",
     "src": "FW, Recherche ausbau-klima"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 6, "situation": "klima-skoda", "nr": 7,
     "bild": "klima-schaltplan.svg",
     "q": "Zündung ein, alle Stecker gesteckt. Sie messen rückseitig an den Steckern gegen Fahrzeugmasse: B1 Pin 1 = 5,0 V, B1 Pin 2 = 1,2 V, B1 Pin 3 = 0,0 V; A1 Pin 3 = 5,0 V, A1 Pin 4 = 0,0 V, A1 Pin 5 = 0,0 V. Wo liegt der Fehler?",
     "opts": ["Sensor B1 ist defekt, weil er kein Signal liefert; Sensor ersetzen",
              "Versorgungsleitung A1 Pin 3 – B1 Pin 1 ist unterbrochen",
              "Signalleitung B1 Pin 2 – A1 Pin 4 ist unterbrochen oder hochohmig",
              "Masseleitung B1 Pin 3 – A1 Pin 5 ist unterbrochen"],
     "correct": 2,
     "explain": "Am Sensor kommen 5 V und Masse an, und er liefert 1,2 V – B1 arbeitet also. Am Steuergerät kommen davon 0 V an. "
                "Die Spannung geht auf der Signalleitung zwischen B1 Pin 2 und A1 Pin 4 verloren: Unterbrechung oder sehr hoher "
                "Übergangswiderstand, z. B. Korrosion im Stecker. Ein neuer Sensor würde nichts ändern.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 4, "situation": "klima-skoda", "nr": 8,
     "q": "Sie wollen die Unterbrechung mit dem Ohmmeter bestätigen. Welche Antwort beschreibt Messbedingung, Messpunkte und das bestätigende Ergebnis richtig?",
     "opts": ["Zündung ein, Stecker gesteckt lassen; zwischen B1 Pin 2 und A1 Pin 4 messen; ein Wert unter 1 Ω bestätigt die Unterbrechung",
              "Zündung aus, Stecker an B1 und A1 abziehen; zwischen B1 Pin 2 und Fahrzeugmasse messen; Anzeige „OL“ zeigt die Unterbrechung",
              "Zündung aus, Stecker abziehen; zwischen B1 Pin 2 und A1 Pin 4 messen; ein Wert unter 1 Ω bestätigt, dass die Leitung unterbrochen ist",
              "Zündung aus, Stecker an B1 und A1 abziehen; zwischen B1 Pin 2 und A1 Pin 4 messen; Anzeige „OL“ bestätigt die Unterbrechung"],
     "correct": 3,
     "explain": "Widerstand misst man nur stromlos und an abgezogenen Steckern – sonst verfälschen Spannung und Steuergeräte-Eingänge "
                "den Wert. Eine intakte Leitung hat nahezu 0 Ω; „OL“ (Überlauf, unendlich) zwischen beiden Leitungsenden bedeutet "
                "Unterbrechung. Gegen Masse gemessen prüft man nur auf Masseschluss, nicht auf Durchgang.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 9,
     "q": "Laut Werkstattinformation liefert B1 bei 0 bar 0,5 V und bei 30 bar 4,5 V (Kennlinie linear). Welchem Druck entsprechen die 1,2 V, die Sie direkt an B1 Pin 2 gemessen haben?",
     "opts": ["9,0 bar", "5,25 bar", "8,0 bar", "0,53 bar"],
     "correct": 1,
     "explain": "Steigung = 30 bar ÷ (4,5 V − 0,5 V) = 7,5 bar/V. Druck = (1,2 V − 0,5 V) × 7,5 bar/V = 5,25 bar. Das passt zum "
                "Ruhedruck am Manometer (ca. 5 bar) – der Sensor misst richtig. Typischer Fehler: den Nullpunkt 0,5 V nicht "
                "abziehen (1,2 V × 7,5 bar/V = 9,0 bar) oder zusätzlich die Steigung mit 30 bar ÷ 4,5 V statt ÷ 4 V "
                "bilden (1,2 V × 6,67 bar/V = 8,0 bar).",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4, "situation": "klima-skoda", "nr": 10,
     "bild": "klima-schaltplan.svg",
     "q": "Ordnen Sie den Prüfaufgaben im Schaltplan das passende Messgerät mit Messpunkten und Bedingung zu.",
     "paare": [["Versorgungsspannung des Sensors B1", "Voltmeter zwischen B1 Pin 1 und B1 Pin 3, Zündung ein"],
               ["Durchgang der Signalleitung", "Ohmmeter zwischen B1 Pin 2 und A1 Pin 4, Stecker abgezogen"],
               ["Ansteuerung des Regelventils Y1", "Oszilloskop an A1 Pin 11 gegen Masse, Motor läuft"],
               ["Übergangswiderstand der Masse von A2", "Voltmeter zwischen A2 Klemme 31 und Batterie-Minus, Lüfter läuft"]],
     "ablenker": ["Amperemeter parallel zu B1 Pin 1 und Pin 3, Zündung ein"],
     "explain": "Spannungen misst man im Betrieb parallel zum Messobjekt, Widerstände nur stromlos. Ein PWM-Signal lässt sich nur "
                "mit dem Oszilloskop sinnvoll beurteilen, ein Multimeter zeigt höchstens einen Mittelwert. Übergangswiderstände "
                "findet man als Spannungsfall unter Last. Ein Amperemeter parallel zu schalten, wäre ein Kurzschluss.",
     "src": "Eigener Schaltplan, Format Prüfung Schule"},
    {"cat": "Klima", "level": 2, "typ": "reihenfolge", "pkt": 6, "situation": "klima-skoda", "nr": 11,
     "q": "Am Stecker von B1 ist der Kontakt der Signalleitung korrodiert, die Leitung dahinter gebrochen. Bringen Sie die Instandsetzung in die richtige Reihenfolge.",
     "schritte": ["Zündung aus, Fahrzeug gegen Einschalten sichern",
                  "Schadstelle freilegen und Umfang des Schadens feststellen",
                  "Kontakt bzw. Leitungsstück mit zugelassenem Reparatursatz ersetzen (Crimpverbinder mit Schrumpfschlauch)",
                  "Leitung befestigen und gegen Scheuern und Feuchtigkeit schützen",
                  "Durchgang der reparierten Leitung nachmessen",
                  "Fehlerspeicher löschen, Messwertblock prüfen und Funktionsprobe machen"],
     "explain": "Gearbeitet wird spannungsfrei. Erst wenn der Schaden ganz freigelegt ist, wählt man den passenden Reparatursatz; "
                "nach Herstellervorgabe meist abgedichtete Crimpverbinder statt Verdrillen oder Isolierband. Vor dem Löschen "
                "des Fehlerspeichers wird nachgemessen, danach beweist die Funktionsprobe den Erfolg.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 5, "situation": "klima-skoda", "nr": 12,
     "bild": "klima-oszi-regelventil.svg",
     "q": "Nach der Reparatur prüfen Sie die Ansteuerung des Regelventils (Oszillogramm). Welche Frequenz hat das Signal, und wie groß ist der bestromte Anteil (Tastverhältnis)?",
     "opts": ["400 Hz; 40 % bestromt", "200 Hz; 60 % bestromt", "400 Hz; 60 % bestromt", "2,5 kHz; 60 % bestromt"],
     "correct": 2,
     "explain": "Eine Periode (von einer fallenden bis zur nächsten fallenden Flanke) ist 5 Kästchen × 0,5 ms = 2,5 ms lang → "
                "f = 1 ÷ 2,5 ms = 400 Hz. Bestromt ist Y1, wenn A1 nach Masse schaltet, also im unteren Abschnitt: 3 Kästchen = "
                "1,5 ms → 1,5 ms ÷ 2,5 ms = 60 %. Wer den oberen Abschnitt nimmt, kommt fälschlich auf 40 %.",
     "src": "Eigenes Oszillogramm, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 13,
     "bild": "klima-oszi-regelventil.svg",
     "q": "In welchem Abschnitt des Oszillogramms schaltet A1 die Spule von Y1 ein (bestromt), und warum?",
     "opts": ["Abschnitt 1, weil dort die hohe Spannung anliegt und die Spule deshalb Strom bekommt",
              "In beiden Abschnitten gleich, weil eine Spule den Strom auch in der Pause unverändert weiterleitet",
              "Abschnitt 1, weil A1 die Spule über Pin 11 mit Plus versorgt und Y1 an Masse liegt",
              "Abschnitt 2, weil A1 dann nach Masse schaltet und Strom von Klemme 15 über F2 und Y1 fließt"],
     "correct": 3,
     "explain": "Y1 liegt über F2 dauernd an Klemme 15; A1 schaltet die Masseseite. Ist der Transistor in A1 leitend, liegt Pin 11 "
                "fast auf 0 V, und Strom fließt durch die Spule (Abschnitt 2). Sperrt er, fließt kein Strom, und am Pin misst man "
                "über die Spule die volle Bordspannung (Abschnitt 1). Masseseitig angesteuert heißt: unterer Pegel = bestromt.",
     "src": "Eigenes Oszillogramm, Eigener Schaltplan"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 14,
     "bild": "klima-oszi-regelventil.svg",
     "q": "Laut Werkstattinformation gilt bei diesem Verdichter: größerer bestromter Anteil = größerer Hub. Wie ändert sich das Signal, wenn der Innenraum abgekühlt ist und weniger Kälteleistung gebraucht wird?",
     "opts": ["Abschnitt 2 wird kürzer, Abschnitt 1 länger; Hub und Fördermenge sinken",
              "Abschnitt 2 wird länger, Abschnitt 1 kürzer; der Verdichter fördert mehr, um nachzukühlen",
              "Die Frequenz sinkt auf die Hälfte; das Tastverhältnis bleibt gleich, und der Hub sinkt",
              "Die Spannung in Abschnitt 1 sinkt auf etwa 6 V; die Fördermenge sinkt auf die Hälfte"],
     "correct": 0,
     "explain": "Die Leistung wird über das Tastverhältnis gestellt, nicht über Frequenz oder Spannungshöhe. Weniger Bedarf → kürzere "
                "bestromte Zeit (Abschnitt 2) bei gleicher Periodendauer → kleinerer mittlerer Spulenstrom → kleinerer Hub. Die "
                "Spannung in Abschnitt 1 ist einfach die Bordnetzspannung.",
     "src": "Eigenes Oszillogramm, Netz: Hella Techtips"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4, "situation": "klima-skoda", "nr": 15,
     "bild": "klima-schaltplan.svg",
     "q": "Bei der Funktionsprobe fällt auf, dass der Lüfter M1 nur langsam läuft. Bei laufendem Lüfter messen Sie zwischen A2 Klemme 31 und Batterie-Minus 1,6 V, zwischen F1 (Ausgang) und A2 Klemme 30 nur 0,1 V. Wie beurteilen Sie das?",
     "opts": ["Plus- und Masseseite sind in Ordnung; der Lüftermotor M1 ist schwergängig und muss ersetzt werden",
              "Übergangswiderstand in der Plusleitung zwischen F1 und A2; Leitung und Stecker an Klemme 30 instand setzen",
              "Zu hoher Übergangswiderstand in der Masseleitung von A2; Masseverbindung reinigen bzw. instand setzen",
              "A1 fordert zu wenig an; das PWM-Signal an Pin 13 muss im Messwertblock einfach erhöht werden"],
     "correct": 2,
     "explain": "Spannungsfall misst man unter Last über einer Leitung bzw. Verbindung. 0,1 V auf der Plusseite sind unauffällig, "
                "1,6 V auf der Masseseite viel zu viel (Grenzwerte laut Hersteller bzw. Tabellenbuch) – dort sitzt ein "
                "Übergangswiderstand, z. B. eine korrodierte Masseschraube. Diese Spannung fehlt dem Lüfter, er läuft langsam. "
                "Ein neuer Motor würde nichts ändern.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 16,
     "bild": "klima-messpunkte.svg",
     "q": "Zur Leistungsprüfung wollen Sie die Überhitzung bestimmen. An welchem Messpunkt messen Sie dazu die Rohrtemperatur?",
     "opts": ["A – Druckleitung nach dem Verdichter", "C – Flüssigkeitsleitung vor dem Expansionsventil",
              "E – Saugleitung am Verdampferausgang", "D – Leitung zwischen Expansionsventil und Verdampfer"],
     "correct": 2,
     "explain": "Überhitzung = Temperatur des Dampfes am Verdampferausgang minus Verdampfungstemperatur (aus Niederdruck und "
                "Druck-Temperatur-Tabelle). Gemessen wird deshalb an der Saugleitung direkt hinter dem Verdampfer (E). An D ist "
                "das Kältemittel noch Nassdampf, an A und C liegt Hochdruck an.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 5, "situation": "klima-skoda", "nr": 17,
     "bild": "klima-messpunkte.svg",
     "q": "Laut Druck-Temperatur-Tabelle entspricht der gemessene Hochdruck einer Kondensationstemperatur von 52 °C. An Messpunkt C messen Sie 45 °C. Wie groß ist die Unterkühlung?",
     "opts": ["97 K", "−7 K", "7 K", "45 K"],
     "correct": 2,
     "explain": "Unterkühlung = Kondensationstemperatur − gemessene Flüssigkeitstemperatur = 52 °C − 45 °C = 7 K. "
                "Temperaturdifferenzen gibt man in Kelvin an. Die Unterkühlung zeigt, dass am Expansionsventil reine Flüssigkeit "
                "ankommt; ob der Wert passt, steht in der Herstellerangabe.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3, "situation": "klima-skoda", "nr": 18,
     "q": "Bei der Fahrzeugübergabe fragt der Kunde, was defekt war. Welche Erklärung ist fachlich richtig und kundengerecht?",
     "opts": ["Der Kältemitteldruck war zu niedrig; wir haben Kältemittel nachgefüllt, und deshalb misst der Drucksensor jetzt wieder richtig",
              "Eine Leitung zum Drucksensor war am Stecker korrodiert, deshalb schaltete die Anlage ab; Leitung repariert, Kühlung geprüft",
              "Der Klimakompressor hat nicht mehr hochgeregelt; wir haben ihn vorsorglich ersetzt und die Anlage neu befüllt",
              "Es war ein Softwarefehler im Steuergerät; wir haben den Fehlerspeicher gelöscht, damit ist die Sache erledigt"],
     "correct": 1,
     "explain": "Der Kunde soll verstehen, was die Ursache war und was gemacht wurde – verständlich, aber wahr. Der Kältekreis war in "
                "Ordnung, repariert wurde nur die Sensorleitung (und die Masse des Lüfters). Aussagen wie „vorsorglich ersetzt“ "
                "oder „nur gelöscht“ wären falsch und kosten Vertrauen.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Einzelfragen (ohne Situation)
    # ------------------------------------------------------------------
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Ein Kunde bittet Sie, die Klimaanlage vor der Reparatur einfach „abzulassen“. Wie müssen Sie stattdessen vorgehen?",
     "opts": ["Ablassen ist bei R1234yf erlaubt, weil das Treibhauspotenzial gering ist; nur Art und Menge des Kältemittels dokumentieren",
              "Nicht ablassen (verboten); mit dem Servicegerät absaugen und recyceln bzw. entsorgen; Art und Menge dokumentieren; nur mit Sachkundenachweis",
              "Kältemittel im Freien langsam über den Niederdruckanschluss ablassen, damit es sich verteilt; Art und Menge dokumentieren; nur mit Sachkundenachweis",
              "Mit dem Servicegerät absaugen und danach über die Hallenabsaugung ins Freie leiten; Art und Menge dokumentieren"],
     "correct": 1,
     "explain": "Kältemittel darf nicht in die Atmosphäre abgelassen werden. Es wird mit dem Servicegerät abgesaugt und recycelt "
                "bzw. als Abfall entsorgt, Art und Menge werden dokumentiert, und arbeiten dürfen nur Personen mit "
                "Sachkundenachweis. Fluorierte Kältemittel schädigen das Klima. Deshalb gilt ein Ablassverbot, und jede Menge, die ab- oder "
                "eingefüllt wird, wird aufgeschrieben.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Seit dem 17.04.2026 gilt in Deutschland eine neue Chemikalien-Klimaschutzverordnung (ChemKlimaschutzV). Welche Aussage trifft zu?",
     "opts": ["Die Sachkundepflicht gilt jetzt auch für alternative Kältemittel wie R1234yf; ältere Bescheinigungen gelten bis 12.03.2029 und müssen danach aufgefrischt werden.",
              "Für R1234yf ist seit 2026 keine Sachkunde mehr nötig, weil es nur ein geringes Treibhauspotenzial hat; die Bescheinigung bleibt nur für R134a-Anlagen Pflicht.",
              "Alle bisherigen Sachkundebescheinigungen sind seit dem 17.04.2026 ungültig; wer weiter an Klimaanlagen arbeitet, muss sofort neu geprüft werden.",
              "Kleinmengen bis 100 g dürfen seit 2026 in die Luft abgelassen werden, wenn Art und Menge im Serviceprotokoll stehen."], "correct": 0,
     "explain": "Die neue Verordnung setzt die EU-F-Gase-Verordnung 2024/573 um. R1234yf ist ein HFO-Kältemittel und fällt "
                "jetzt ausdrücklich unter die Sachkundepflicht. Alte Nachweise bleiben bis 12.03.2029 gültig. Das "
                "Ablassverbot gilt weiter.",
     "src": "Netz: IHK Koblenz, autoservicepraxis 2026"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Merkmale dem Expansionsventil oder dem Drosselrohr zu.",
     "paare": [["Regelt die Kältemittelmenge abhängig von der Temperatur am Verdampferausgang", "Expansionsventil"],
               ["Fester Querschnitt, keine Regelung", "Drosselrohr"],
               ["Wird mit einem Akkumulator auf der Niederdruckseite kombiniert", "Drosselrohr"],
               ["Wird mit Trockner/Sammler auf der Hochdruckseite kombiniert", "Expansionsventil"]],
     "explain": "Beide trennen Hoch- und Niederdruckseite. Das Drosselrohr kann nicht regeln, deshalb fängt der Akkumulator "
                "hinter dem Verdampfer flüssiges Kältemittel ab, bevor es zum Verdichter kommt.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Eine Anlage arbeitet mit Drosselrohr und Akkumulator. Wo ist der Akkumulator eingebaut?",
     "opts": ["Auf der Niederdruckseite zwischen Verdampfer und Verdichter",
              "Auf der Hochdruckseite zwischen Kondensator und Drosselrohr",
              "Direkt am Druckausgang des Verdichters",
              "Zwischen Drosselrohr und Verdampfer"], "correct": 0,
     "explain": "Der Akkumulator sammelt hinter dem Verdampfer flüssiges Kältemittel und bindet Feuchtigkeit. So bekommt der "
                "Verdichter nur Dampf. Der Sammler (Trockner) einer Anlage mit Expansionsventil sitzt dagegen auf der "
                "Hochdruckseite.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Wie passt ein extern geregelter Verdichter seine Förderleistung an? Welche Beschreibung ist richtig?",
     "opts": ["Eine Magnetkupplung schaltet den Verdichter je nach Kältebedarf ein und aus; der Hub der Kolben bleibt dabei immer gleich",
              "Ein Regelventil verstellt den Hub; es wird rein mechanisch vom Saugdruck gesteuert, ohne Signal vom Steuergerät",
              "Ein Regelventil verstellt den Hub (Schrägstellung der Taumelscheibe); das Steuergerät steuert es per PWM an; die Leistung passt sich stufenlos an",
              "Das Steuergerät verändert die Drehzahl des Verdichters stufenlos über eine verstellbare Riemenscheibe; der Hub der Kolben bleibt dabei immer gleich"],
     "correct": 2,
     "explain": "Die Fördermenge wird über den Hub (Schrägstellung der Taumelscheibe) verändert. Ein Regelventil am Verdichter "
                "verstellt den Hub, das Steuergerät steuert es mit einem PWM-Signal an. Die Leistung passt sich stufenlos dem "
                "Kältebedarf an; oft ohne Magnetkupplung, bei „Klima aus“ minimaler Hub. (Rein vom Saugdruck geregelt = intern "
                "geregelter Verdichter.) Statt ständig ein- und auszuschalten wie bei einer Magnetkupplung, läuft der Verdichter mit und fördert nur so "
                "viel wie nötig. Das ist leiser, gleichmäßiger und spart Kraftstoff.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Wie reagiert die Motorsteuerung auf den Betrieb der Klimaanlage? Welche Beschreibung ist richtig?",
     "opts": ["Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird Drehmoment bzw. Leerlaufdrehzahl angehoben; bei Volllast oder zu heißem Motor wird der Verdichter abgeregelt",
              "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird die Drehzahl abgesenkt, um Kraftstoff zu sparen; bei Volllast läuft der Verdichter mit voller Leistung",
              "Das Motorsteuergerät erhält keine Information; der Leerlaufregler reagiert erst, wenn die Drehzahl gefallen ist; bei Volllast bleibt der Verdichter unverändert",
              "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird das Drehmoment angehoben; bei zu hoher Kühlmitteltemperatur fördert der Verdichter mehr, um den Motor mitzukühlen"],
     "correct": 0,
     "explain": "Das Klimasteuergerät meldet die Verdichterlast (z. B. über CAN) an das Motorsteuergerät. Im Leerlauf erhöht das "
                "Motorsteuergerät vorsorglich Drehmoment bzw. Leerlaufdrehzahl, damit der Motor nicht abstirbt. Bei Volllast/"
                "Beschleunigen oder zu hoher Kühlmitteltemperatur wird der Verdichter abgeregelt oder abgeschaltet. Der Verdichter braucht spürbar Motorleistung. Deshalb tauschen Klima- und Motorsteuergerät Informationen aus "
                "und stimmen Last und Kühlbedarf ab.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Der Druck-/Temperatursensor auf der Hochdruckseite ist ausgefallen. Welche Antwort beschreibt Aufgabe, Folgen des Ausfalls und Prüfung richtig?",
     "opts": ["Misst die Ausströmtemperatur an der Mitteldüse; bei Ausfall läuft der Verdichter mit voller Leistung weiter; prüfen: Sensor ausbauen und durchblasen",
              "Überwacht den Hochdruck nur zur Anzeige im Kombiinstrument; bei Ausfall läuft der Verdichter ungeregelt mit voller Leistung weiter; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
              "Überwacht nur die Füllmenge beim Befüllen am Servicegerät; bei Ausfall Verdichter ab, Fehlerspeichereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
              "Überwacht den Hochdruck, beeinflusst Verdichter und Lüfter; bei Ausfall Verdichter ab bzw. heruntergeregelt, Fehlereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen"],
     "correct": 3,
     "explain": "Aufgabe: Hochdruck überwachen (Schutz vor zu hohem und zu niedrigem Druck); das Signal steuert Verdichter und "
                "Kondensatorlüfter. Bei Ausfall schaltet das Steuergerät den Verdichter ab bzw. regelt ihn herunter → keine "
                "Kühlung, Fehlerspeichereintrag. Prüfen: Fehlerspeicher, Messwert mit Manometeranzeige vergleichen, Versorgung, "
                "Signal und Masse nach Schaltplan messen. Ohne gültiges Drucksignal kann das Steuergerät nicht erkennen, ob der Druck gefährlich hoch ist – es schützt "
                "die Anlage, indem es den Verdichter stilllegt.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Begriffen die passende Beschreibung zu.",
     "paare": [["Überhitzung", "Der Dampf am Verdampferausgang ist wärmer als die Verdampfungstemperatur"],
               ["Unterkühlung", "Die Flüssigkeit nach dem Kondensator ist kälter als die Kondensationstemperatur"],
               ["Verdampfungstemperatur", "Siedetemperatur des Kältemittels im Verdampfer, hängt vom Niederdruck ab"],
               ["Kondensationstemperatur", "Temperatur, bei der das Kältemittel im Kondensator flüssig wird, hängt vom Hochdruck ab"]],
     "explain": "Überhitzung sorgt dafür, dass nur Dampf zum Verdichter kommt; Unterkühlung sorgt dafür, dass am "
                "Expansionsventil nur Flüssigkeit ankommt. Die Druck-Temperatur-Zuordnung steht im Tabellenbuch.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Das Hochdruckmanometer zeigt einen Überdruck von 14 bar. Der Luftdruck beträgt 1 bar. Wie groß ist der Absolutdruck?",
     "opts": ["13 bar", "14 bar", "1,5 bar", "15 bar"], "correct": 3,
     "explain": "Manometer zeigen den Überdruck gegenüber der Umgebung. Absolutdruck = Überdruck + Luftdruck = 14 bar + 1 bar = 15 bar.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Warum dürfen Sie beim Umgang mit Kältemittel nicht in einer Arbeitsgrube arbeiten?",
     "opts": ["Kältemitteldampf ist schwerer als Luft, sammelt sich am Boden und verdrängt den Sauerstoff",
              "Kältemitteldampf ist leichter als Luft, steigt aus dem Motorraum auf und sammelt sich unter dem Hallendach",
              "In der Grube ist es zu warm, das Kältemittel explodiert",
              "In der Grube kann das Servicegerät die Füllmenge nicht wiegen"], "correct": 0,
     "explain": "Kältemittel ist geruchlos und schwerer als Luft. In einer Grube kann der Sauerstoffanteil unbemerkt sinken – "
                "Erstickungsgefahr.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie ist abgeschiedenes, altes Kältemittelöl zu entsorgen?",
     "opts": ["Als gefährlicher Abfall getrennt sammeln und entsorgen",
              "Zusammen mit dem Motoraltöl über den Ölabscheider ablassen",
              "Wieder in den Kreislauf einfüllen, um Öl zu sparen",
              "Im Restmüll entsorgen, da es nur geringe Mengen sind"], "correct": 0,
     "explain": "Kältemittelöl gilt als gefährlicher Abfall. Altes Öl wird nie wiederverwendet – nachgefüllt wird immer frisches "
                "Öl in der abgeschiedenen Menge.",
     "src": "TB Betriebsstoffe, FK Werkstatthinweise"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Auf einem Kältemittelöl steht zusätzlich „UV“. Was bedeutet das?",
     "opts": ["Das Öl enthält ein UV-Kontrastmittel, mit dem man Lecks unter einer UV-Lampe sieht",
              "Das Öl ist für Fahrzeuge mit UV-Schutzverglasung freigegeben",
              "Das Öl ist nur für R134a zugelassen",
              "Das Öl muss vor Sonnenlicht geschützt gelagert werden, weil es sich sonst zersetzt und unbrauchbar wird"], "correct": 0,
     "explain": "Das Kontrastmittel tritt an Lecks mit dem Öl aus und leuchtet unter UV-Licht. So findet man auch kleine "
                "Undichtheiten.",
     "src": "TB Betriebsstoffe, FK Werkstatthinweise"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Warum haben R134a- und R1234yf-Anlagen unterschiedliche Serviceanschlüsse?",
     "opts": ["Damit die Kältemittel nicht verwechselt oder gemischt werden und nur das passende Servicegerät angeschlossen werden kann",
              "Weil R1234yf mit deutlich höherem Druck arbeitet und deshalb dickere Leitungen und größere Ventile in den Anschlüssen braucht",
              "Damit R1234yf-Anlagen ohne Sachkunde befüllt werden können",
              "Weil bei R1234yf nur der Niederdruckanschluss genutzt wird"], "correct": 0,
     "explain": "Der Kreislauf ist bei beiden Kältemitteln gleich aufgebaut. Die verschiedenen Anschlüsse verhindern, dass "
                "falsches Kältemittel eingefüllt wird.",
     "src": "Recherche 3.6"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort nennt die Aufgabe des Innenraumfilters und zwei Folgen, wenn er zugesetzt ist?",
     "opts": ["Bindet Feuchtigkeit im Kältemittel; zugesetzt: Säurebildung im Kreislauf und Vereisung am Expansionsventil",
              "Filtert Staub und Pollen aus der Frischluft; zugesetzt: weniger Luftdurchsatz mit geringerer Kühl- und Heizleistung, Scheiben beschlagen leichter",
              "Filtert Staub und Pollen aus der Frischluft; zugesetzt: der Hochdruck steigt stark an, weil der Kondensator weniger Luft bekommt, und der Lüfter fällt aus",
              "Filtert die Ansaugluft des Motors; zugesetzt: Leistungsverlust des Motors und erhöhter Kraftstoffverbrauch"],
     "correct": 1,
     "explain": "Der Innenraumfilter filtert Staub und Pollen aus der Frischluft (mit Aktivkohle auch Gerüche und Schadgase). "
                "Ist er zugesetzt, sinkt der Luftdurchsatz → geringere Kühl- und Heizleistung; Scheiben beschlagen leichter, "
                "muffiger Geruch ist möglich. Der Filter wird nach Wartungsplan gewechselt. Auf die Einbaurichtung achten (Pfeil zur Luftrichtung).",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Welche Beschreibung der Besonderheiten eines elektrischen Klimakompressors in Hybrid- und Elektrofahrzeugen ist richtig?",
     "opts": ["Antrieb über Riemen und Magnetkupplung vom Verbrennungsmotor; keine Standklimatisierung möglich; Klimasachkunde genügt; PAG-Öl wie beim Riemenverdichter",
              "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; PAG-Öl YF verwenden",
              "Antrieb aus dem HV-Netz, unabhängig vom Verbrenner; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; nur POE-Öl",
              "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; Arbeiten unter Spannung erlaubt, da der Kältekreis vom HV-Netz getrennt ist; nur POE-Öl"],
     "correct": 2,
     "explain": "Der elektrische Kompressor wird von einem Elektromotor aus dem Hochvoltnetz angetrieben, unabhängig vom "
                "Verbrennungsmotor – das ermöglicht Standklimatisierung und Kühlung der HV-Batterie. Arbeiten nur mit "
                "HV-Qualifikation, System vorher spannungsfrei schalten. Nur nicht leitendes POE-Öl verwenden, das Servicegerät "
                "muss für E-Verdichter geeignet sein. Der Elektromotor sitzt im Kältemittelstrom. Leitendes Öl würde die Isolation verschlechtern – deshalb POE "
                "und keine PAG-Reste.",
     "src": "Recherche 3.3, TB Betriebsstoffe, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Wie wird der Kondensatorlüfter angesteuert und was passiert bei einem Ausfall? Welche Beschreibung ist richtig?",
     "opts": ["Abhängig von Hochdruck (Drucksensor) und Kühlmitteltemperatur, meist stufenlos per PWM; bei Ausfall steigt der Hochdruck stark, vor allem im Stand, der Verdichter wird abgeschaltet",
              "Nur abhängig von der Fahrgeschwindigkeit, ohne Drucksignal; bei Ausfall sinkt der Hochdruck, und die Kühlleistung wird sogar besser",
              "Abhängig von Hochdruck und Kühlmitteltemperatur per PWM; bei Ausfall fällt die Kühlung vor allem bei schneller Autobahnfahrt aus, im Stand und im Stadtverkehr bleibt sie dagegen unverändert",
              "Abhängig vom Niederdruck am Verdampfer; bei Ausfall sinkt der Niederdruck stark und der Verdampfer vereist"],
     "correct": 0,
     "explain": "Das Steuergerät steuert den Lüfter abhängig vom Hochdruck (Drucksensor) und der Kühlmitteltemperatur an, meist "
                "stufenlos (PWM, Lüftersteuergerät). Bei Ausfall steigt der Hochdruck stark, vor allem im Stand → schlechte "
                "Kühlung, der Verdichter wird abgeschaltet. Im Stand fehlt der Fahrtwind, dann muss der Lüfter die Wärme am Kondensator abführen. Fällt er aus, schützt "
                "das Steuergerät die Anlage vor Überdruck.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Nach längerer Fahrt lässt die Kühlleistung nach und aus den Düsen kommt kaum noch Luft. Nach einer Pause geht es wieder. Wie ist das Fehlerbild zu beurteilen und welche Ursachen kommen in Frage?",
     "opts": ["Hochdruckabschaltung durch Überhitzung des Kondensators; Ursachen: Kondensatorlüfter defekt, Kondensator verschmutzt",
              "Unterfüllung durch ein Leck; Ursachen: undichter Kondensator nach Steinschlag, poröse Kältemittelschläuche",
              "Verdampfer vereist; Ursachen: Überfüllung, zu großer Luftdurchsatz durch einen neuen Innenraumfilter, Verdichter regelt zu stark ab",
              "Verdampfer vereist; Ursachen: Verdampfertemperatursensor bzw. Regelung defekt, zu wenig Luftdurchsatz, Feuchtigkeit im Kreislauf"],
     "correct": 3,
     "explain": "Der Verdampfer vereist: Kondenswasser gefriert an den Lamellen, Luft kommt nicht mehr durch. Ursachen: "
                "Verdampfertemperatursensor bzw. Regelung defekt (Verdichter regelt nicht ab), zu wenig Luftdurchsatz "
                "(Innenraumfilter zugesetzt, Gebläse schwach), Feuchtigkeit im Kreislauf vereist am Expansionsventil. Die Anlage soll den Verdampfer knapp über 0 °C halten. Taut das Eis in der Pause, funktioniert alles wieder – "
                "ein typisches Zeichen für Vereisung.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Ein Kreislauf ist vollständig leer. Bringen Sie die Schritte der Lecksuche mit Formiergas in die richtige Reihenfolge.",
     "schritte": ["Prüfen, dass kein Kältemittel mehr im Kreislauf ist (ggf. Rest absaugen)",
                  "Formiergas über den Serviceanschluss bis zum Prüfdruck nach Herstellerangabe einfüllen",
                  "Mit dem Wasserstoff-Lecksucher alle Bauteile und Verbindungen abtasten",
                  "Undichte Stelle markieren und Formiergas ablassen",
                  "Undichtes Bauteil ersetzen bzw. instand setzen",
                  "Evakuieren und nach Gewicht befüllen"],
     "explain": "Formiergas (Stickstoff mit wenig Wasserstoff) ist ungefährlich und darf abgelassen werden. Der kleine "
                "Wasserstoffanteil wird vom Lecksucher erkannt.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 1, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Bauteilen des Kältekreislaufs ihre Aufgabe zu.",
     "paare": [["Verdichter", "saugt Kältemitteldampf an und verdichtet ihn, Druck und Temperatur steigen"],
               ["Kondensator", "gibt Wärme an die Außenluft ab, das Kältemittel wird flüssig"],
               ["Trockner/Sammler", "bindet Feuchtigkeit, filtert und speichert flüssiges Kältemittel"],
               ["Expansionsventil", "senkt den Druck und dosiert das Kältemittel in den Verdampfer"],
               ["Verdampfer", "nimmt Wärme aus der Innenraumluft auf, das Kältemittel verdampft"]],
     "ablenker": ["verdichtet flüssiges Kältemittel und kühlt es dabei ab"],
     "explain": "Wärme wird im Verdampfer aus dem Innenraum aufgenommen und im Kondensator nach außen abgegeben. Der "
                "Verdichter ist die Pumpe, das Expansionsventil die Trennstelle zwischen Hoch- und Niederdruck.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2, "tb": True,
     "q": "Ein Kältemittelöl trägt die Bezeichnung „PAG-Öl ISO 46“. Welche kinematische Viskosität in mm²/s bei 40 °C hat es?",
     "opts": ["4,6 mm²/s", "460 mm²/s", "46 mm²/s", "0,46 mm²/s"], "correct": 2,
     "explain": "Die ISO-Viskositätsklasse gibt die kinematische Viskosität bei 40 °C an: ISO 46 = 46 mm²/s.",
     "src": "TB Betriebsstoffe (Kompressoröle)"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Beim Evakuieren zeigt das Servicegerät einen Überdruck von −0,95 bar an (Luftdruck 1,0 bar). Wie groß ist der Absolutdruck im Kreislauf in mbar?",
     "opts": ["50 mbar", "950 mbar", "1.950 mbar", "5 mbar"], "correct": 0,
     "explain": "Absolutdruck = Luftdruck + Überdruck = 1,0 bar + (−0,95 bar) = 0,05 bar. 1 bar = 1000 mbar → 0,05 bar = 50 mbar.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Merkmale dem Kältemittel R134a oder R1234yf zu.",
     "paare": [["Treibhauspotenzial (GWP) unter 150", "R1234yf"],
               ["Sicherheitsklasse A2L (schwer entflammbar)", "R1234yf"],
               ["In der EU für neue Pkw nicht mehr zulässig (hohes Treibhauspotenzial)", "R134a"],
               ["PAG-Öl ohne YF-Kennzeichnung ist zulässig", "R134a"]],
     "explain": "R134a ist nicht brennbar, belastet das Klima aber stark – deshalb wird es in Neufahrzeugen der EU nicht mehr "
                "eingesetzt. R1234yf hat ein sehr geringes Treibhauspotenzial, ist dafür schwach brennbar. PAG ohne YF "
                "nur bei R134a.",
     "src": "Recherche 3.3/3.6, TB Betriebsstoffe, FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 3,
     "q": "PAG-Öl ist stark hygroskopisch. Welche Antwort erklärt den Begriff richtig und nennt zwei richtige Regeln für den Umgang mit dem Öl?",
     "opts": ["Weist Feuchtigkeit ab; Gebinde kann offen stehen bleiben; Öle verschiedener Hersteller und Typen dürfen gemischt werden",
              "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Gebinde sofort wieder verschließen; nur Öl nach Herstellervorgabe, nicht mit anderen Ölen mischen",
              "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Öl vor dem Einfüllen einige Zeit offen stehen lassen, damit es entgast; nur Öl nach Herstellervorgabe",
              "Löst sich vollständig im Kältemittel; Gebinde sofort wieder verschließen; bei Bedarf PAO-Öl nachfüllen, wenn PAG vorgeschrieben ist"],
     "correct": 1,
     "explain": "Hygroskopisch heißt: nimmt Feuchtigkeit aus der Umgebungsluft auf. Deshalb Gebinde nach der Entnahme sofort "
                "wieder verschließen und nur Öl nach Herstellervorgabe (Typ, Viskosität, Menge) verwenden, nicht mit anderen "
                "Ölen mischen. Feuchtes Öl bringt Wasser in den Kreislauf – mit den Folgen Säurebildung und Vereisung. Geschlossene Gebinde "
                "sind begrenzt lagerfähig.",
     "src": "TB Betriebsstoffe (Kompressoröle), FK Werkstatthinweise"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Warum wird eine Klimaanlage nach Gewicht und nicht nach Druckanzeige befüllt? Welche Begründung ist richtig?",
     "opts": ["Die Manometer des Servicegeräts sind nur für R134a geeicht; bei R1234yf ist eine Druckmessung nicht zulässig",
              "Die Füllmenge ist in Gramm vorgegeben; der Druck steigt genau proportional zur Füllmenge und dient nur zur Kontrolle; eine leichte Überfüllung verbessert sogar die Kühlleistung",
              "Die Füllmenge ist in Gramm vorgegeben (Typschild); der Druck hängt stark von der Temperatur ab; Unter- oder Überfüllung mindert die Kühlleistung oder schädigt die Anlage",
              "Die Füllmenge ist in Gramm vorgegeben; nach Gewicht geht das Befüllen schneller; die genaue Menge spielt für die Kühlleistung kaum eine Rolle"],
     "correct": 2,
     "explain": "Die Füllmenge ist vom Hersteller in Gramm vorgegeben (Typschild im Motorraum). Der Druck hängt stark von der "
                "Temperatur ab und sagt wenig über die Menge aus. Unter- oder Überfüllung mindert die Kühlleistung bzw. kann "
                "Verdichter und Anlage schädigen. Das Servicegerät wiegt das Kältemittel beim Befüllen ab. Druckwerte dienen nur zur Diagnose bei laufender "
                "Anlage.",
     "src": "Recherche 3.3, FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Verfahren zur Dichtheitsprüfung ihr Prinzip zu.",
     "paare": [["UV-Lecksuche", "Kontrastmittel im Öl leuchtet an der Leckstelle unter UV-Licht"],
               ["Elektronischer Lecksucher", "Sensor erkennt Kältemittel in der Umgebungsluft"],
               ["Formiergas", "Kreislauf mit Stickstoff-Wasserstoff-Gemisch füllen, Sensor erkennt Wasserstoff"],
               ["Vakuum-Haltetest", "Druckanstieg im evakuierten Kreislauf zeigt eine Undichtheit, aber nicht den Ort"]],
     "explain": "Nur der Vakuumtest sagt nichts über die Lage des Lecks. Formiergas nutzt man, wenn kein Kältemittel mehr "
                "drin ist.",
     "src": "Recherche 3.3, FW"},

    # ------------------------------------------------------------------
    # Einzelfragen Ausbau 10/2026: Elektrik, Messpunkte, Druckbilder, Service, R744, Recht
    # ------------------------------------------------------------------
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Merkmale dem Druckschalter oder dem Drucksensor zu.",
     "paare": [["Liefert ein stetiges Spannungssignal, das mit dem Druck steigt", "Drucksensor"],
               ["Öffnet oder schließt einen Kontakt bei festen Schaltdrücken", "Druckschalter"],
               ["Braucht eine 5-V-Versorgung vom Steuergerät", "Drucksensor"],
               ["Kann nur „Grenzwert erreicht“ oder „nicht erreicht“ melden, keine Zwischenwerte", "Druckschalter"]],
     "explain": "Ein Druckschalter kennt nur zwei Zustände und schaltet bei festen Grenzdrücken. Ein Drucksensor misst stufenlos – "
                "damit kann das Steuergerät Verdichter und Lüfter fein regeln und Fehler wie „Signal unplausibel“ erkennen. "
                "Moderne Anlagen nutzen deshalb meist Sensoren.",
     "src": "FW, Recherche ausbau-klima"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 4, "bild": "klima-schaltplan.svg",
     "q": "Bei angeforderter Kühlung wird an A1 Pin 11 (Schaltplan) mit dem Oszilloskop gemessen. Ordnen Sie dem Messbild die wahrscheinliche Ursache zu.",
     "paare": [["Rechteck zwischen ca. 0 V und Bordspannung", "Ansteuerung von Y1 in Ordnung"],
               ["Dauernd Bordspannung, keine Pulse", "A1 schaltet nicht nach Masse (keine Anforderung, Endstufe defekt) oder Kurzschluss nach Plus"],
               ["Dauernd ca. 0 V, keine Pulse", "Kein Plus über Y1 (F2 defekt, Spule oder Leitung unterbrochen) oder Endstufe dauernd leitend"]],
     "ablenker": ["Verdichter mechanisch blockiert"],
     "explain": "Y1 bekommt Plus über F2, A1 schaltet nach Masse. Spannung an Pin 11 kann nur über F2 und die Spule ankommen. "
                "Liegt dauernd Bordspannung an, sind F2 und Spule durchgängig, aber A1 schaltet nicht. Liegt dauernd 0 V an, fehlt "
                "das Plus über die Spule – oder A1 schaltet ständig durch. Ein mechanischer Verdichterschaden ist im Signal nicht zu sehen.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 5, "bild": "klima-messpunkte.svg",
     "q": "Ordnen Sie den Messpunkten im Bild den Zustand des Kältemittels bzw. das Messmedium bei laufender Anlage zu.",
     "paare": [["A", "heißer Dampf, Hochdruck"], ["B", "Flüssigkeit, Hochdruck"],
               ["D", "Nassdampf (Flüssigkeit und Dampf), Niederdruck"], ["E", "überhitzter Dampf, Niederdruck"],
               ["F", "abgekühlte Luft für den Innenraum"]],
     "ablenker": ["Flüssigkeit, Niederdruck"],
     "explain": "Der Verdichter drückt heißen Dampf (A) in den Kondensator; dort wird das Kältemittel flüssig (B). Hinter dem "
                "Expansionsventil fällt der Druck, ein Teil verdampft sofort (Nassdampf, D). Am Verdampferausgang ist alles "
                "verdampft und etwas überhitzt (E). F misst keine Leitung, sondern die Luft am Ausströmer.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Merkmale dem passenden Kältemittel zu.",
     "paare": [["Natürliches Kältemittel mit GWP 1", "R744 (CO₂)"],
               ["Gibt die Wärme in einem Gaskühler statt in einem Kondensator ab", "R744 (CO₂)"],
               ["HFO-Kältemittel, schwer entflammbar (A2L)", "R1234yf"],
               ["In neuen Pkw der EU wegen hohem GWP nicht mehr zulässig", "R134a"]],
     "explain": "R744 ist Kohlendioxid: GWP 1, nicht brennbar, aber mit sehr viel höheren Drücken und oft überkritischem Betrieb – "
                "deshalb Gaskühler statt Kondensator. R1234yf ist ein HFO mit GWP unter 150 und schwach brennbar. R134a hat ein "
                "hohes GWP und ist für neue Pkw-Typen in der EU nicht mehr erlaubt.",
     "src": "Netz: ARCTick, UBA; Recherche 3.6"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Fehlern das typische Anzeichen bei laufender Anlage zu.",
     "paare": [["Verdichter fördert nicht (Regelmechanik defekt)", "ND und HD bleiben fast gleich, auch bei höherer Drehzahl"],
               ["Trockner bzw. Filtersieb verstopft", "ND sehr niedrig; Trockner am Ausgang deutlich kälter als am Eingang"],
               ["Feuchtigkeit im Kreislauf", "Kühlung setzt zeitweise aus, ND fällt dabei stark ab (Eis am Expansionsventil)"],
               ["Expansionsventil klemmt offen", "ND zu hoch, Saugleitung bis zum Verdichter sehr kalt bzw. bereift"]],
     "ablenker": ["HD stark erhöht, Kondensator sehr heiß"],
     "explain": "Fördert der Verdichter nicht, entsteht kein Druckunterschied. Ein verstopfter Trockner wirkt wie eine zweite "
                "Drosselstelle: Dahinter wird es kalt, dem Verdampfer fehlt Kältemittel. Feuchtigkeit gefriert zeitweise am "
                "Expansionsventil. Ein offenes Ventil lässt zu viel Kältemittel durch – der Verdampfer läuft über. Der Ablenker "
                "passt zu verschmutztem Kondensator oder ausgefallenem Lüfter.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "zuordnung", "pkt": 4,
     "q": "Ältere Anlagen schalten den Kühlerlüfter über ein Relais. Ordnen Sie den Relaisklemmen (DIN 72552) ihre Funktion zu.",
     "paare": [["30", "Eingang Arbeitsstromkreis (Dauerplus)"], ["87", "Ausgang zum Verbraucher (Schließer)"],
               ["86", "Spulenanfang (Eingang Steuerstrom)"], ["85", "Spulenende (meist zur Masse bzw. Endstufe)"],
               ["87a", "Ruhekontakt (Öffner)"]],
     "ablenker": ["Zündungsplus vom Zündschloss"],
     "explain": "Über 85/86 fließt der kleine Steuerstrom durch die Spule. Zieht das Relais an, verbindet es 30 mit 87, und der "
                "Lüfter läuft; 87a ist nur im Ruhezustand mit 30 verbunden. Zündungsplus heißt Klemme 15 und ist keine Relaisklemme.",
     "src": "TB Klemmenbezeichnungen DIN 72552"},
    {"cat": "Klima", "level": 3, "typ": "zuordnung", "pkt": 3, "bild": "klima-schaltplan.svg",
     "q": "B2 ist ein NTC-Sensor, A1 versorgt ihn über einen Pull-up-Widerstand. Ordnen Sie den Anzeigen im Messwertblock die wahrscheinliche Ursache zu.",
     "paare": [["Konstant ca. −40 °C (unterer Endwert)", "Unterbrechung im Sensorkreis (Signal- oder Masseleitung)"],
               ["Konstant sehr hoher Wert (oberer Endwert)", "Kurzschluss der Signalleitung nach Masse"],
               ["Knapp über 0 °C bei laufender Kühlung", "Plausibler Wert, Sensorkreis in Ordnung"]],
     "ablenker": ["Kältemittel überfüllt"],
     "explain": "Ein NTC hat bei Kälte einen hohen, bei Wärme einen kleinen Widerstand. Ist der Kreis unterbrochen, sieht A1 einen "
                "unendlichen Widerstand und rechnet auf die tiefste Temperatur. Ein Masseschluss bedeutet 0 Ω, also höchste "
                "Temperatur. Im Betrieb hält die Regelung den Verdampfer knapp über 0 °C.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Klima", "level": 1, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Arbeiten die richtige Voraussetzung bzw. Regel zu.",
     "paare": [["Kältemittel absaugen und befüllen", "Sachkundebescheinigung für Fahrzeugklimaanlagen"],
               ["Elektrischen HV-Klimaverdichter aus- und einbauen", "zusätzlich HV-Qualifikation, System spannungsfrei geschaltet"],
               ["Innenraumfilter wechseln", "keine besondere Bescheinigung nötig"],
               ["Kältemittel in die Umgebung ablassen", "verboten – immer absaugen und recyceln"]],
     "explain": "Wer Kältemittel ab- oder einfüllt, braucht die Sachkunde (seit der ChemKlimaschutzV 2026 auch für HFO-Kältemittel "
                "wie R1234yf). Am HV-Verdichter kommt die Hochvolt-Qualifikation dazu. Ablassen ist immer verboten; der "
                "Filterwechsel ist eine normale Wartungsarbeit.",
     "src": "Recherche 3.6, Netz: IHK Karlsruhe"},
    {"cat": "Klima", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Die Klimaanlage meldet einen elektrischen Fehler. Bringen Sie die Schritte einer systematischen Fehlersuche in die richtige Reihenfolge.",
     "schritte": ["Beanstandung nachvollziehen",
                  "Fehlerspeicher auslesen und Messwertblöcke ansehen",
                  "Stellglieddiagnose bzw. geführte Fehlersuche durchführen",
                  "Im Schaltplan Messpunkte festlegen und messen",
                  "Fehlerursache beheben",
                  "Fehlerspeicher löschen und Funktion prüfen"],
     "explain": "Erst prüfen, ob der Fehler da ist, dann die Informationen des Steuergeräts nutzen. Die Stellglieddiagnose zeigt, ob "
                "ein Aktor reagiert. Gemessen wird gezielt nach Schaltplan. Gelöscht wird erst nach der Reparatur, die "
                "Funktionsprobe beweist den Erfolg.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "reihenfolge", "pkt": 5,
     "q": "Der Verdichter hat einen inneren Schaden, im abgeschiedenen Öl sind Metallspäne. Bringen Sie die Instandsetzung in die richtige Reihenfolge.",
     "schritte": ["Kältemittel absaugen und abgeschiedene Ölmenge ablesen",
                  "Verdichter, Trockner und Expansionsventil ausbauen",
                  "Leitungen und Wärmetauscher nach Herstellervorgabe spülen oder ersetzen",
                  "Neue Bauteile mit neuen Dichtringen einbauen, Ölfüllung nach Herstellerangabe",
                  "Evakuieren und Vakuum halten",
                  "Nach Gewicht befüllen und Verdichter nach Vorschrift einlaufen lassen"],
     "explain": "Späne verteilen sich im ganzen Kreislauf und würden den neuen Verdichter zerstören. Deshalb werden Trockner und "
                "Expansionsventil mit ersetzt und der Rest gespült oder – wenn der Hersteller Spülen nicht zulässt – ersetzt. "
                "Erst nach Dichtheitsprüfung im Vakuum wird befüllt.",
     "src": "Netz: DENSO Bulletin, FW"},
    {"cat": "Klima", "level": 1, "typ": "reihenfolge", "pkt": 4,
     "q": "Bringen Sie die Schritte eines Leistungstests der Klimaanlage in die richtige Reihenfolge.",
     "schritte": ["Prüfbedingungen herstellen: Türen und Fenster zu, Thermometer in die Mitteldüse",
                  "Motor starten, Klima auf maximale Kühlung und Umluft stellen",
                  "Prüfdrehzahl halten, bis sich die Werte stabilisiert haben",
                  "Ausströmtemperatur ablesen und Umgebungstemperatur notieren",
                  "Werte mit der Prüftabelle des Herstellers vergleichen"],
     "explain": "Vergleichbar sind die Werte nur unter den Bedingungen der Prüftabelle. Die Anlage braucht einige Minuten, bis "
                "Drücke und Temperaturen stabil sind. Die Ausströmtemperatur allein sagt wenig – sie wird immer zusammen mit "
                "der Umgebungstemperatur bewertet.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Ein Fahrzeug unbekannter Herkunft kommt zum Klimaservice. Bringen Sie die ersten Schritte in die richtige Reihenfolge.",
     "schritte": ["Kältemittelart am Typschild und an den Serviceanschlüssen prüfen",
                  "Kältemittel mit dem Identifiziergerät auf Art und Reinheit prüfen",
                  "Passendes Servicegerät anschließen",
                  "Kältemittel absaugen und Menge ablesen",
                  "Abgeschiedene Ölmenge ablesen und notieren"],
     "explain": "Erst wenn klar ist, welches Kältemittel und wie rein es ist, darf das Servicegerät angeschlossen werden – sonst "
                "verunreinigt fremdes Kältemittel den Vorrat im Gerät. Abgesaugte Menge und Ölmenge braucht man für Diagnose "
                "und Befüllung.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "bild": "klima-schaltplan.svg",
     "q": "Im Schaltplan ist die Sicherung F2 durchgebrannt. Welche Folge hat das? (Bei diesem Verdichter gilt: Regelventil unbestromt = kleinster Hub.)",
     "opts": ["Das ganze Steuergerät A1 fällt aus, weil es über F2 versorgt wird; auch die Sensoren B1 und B2 sind dann ohne Spannung",
              "Y1 bekommt keine Spannung; der Verdichter läuft mit kleinstem Hub, die Anlage kühlt nicht; Lüfter und Sensoren arbeiten weiter",
              "Der Lüfter M1 bleibt stehen, weil A2 über F2 von Klemme 15 versorgt wird; der Verdichter regelt dagegen normal weiter",
              "Y1 wird dauernd bestromt, weil die Sicherung den Strom nicht mehr begrenzt; der Verdichter fördert ständig mit vollem Hub"],
     "correct": 1,
     "explain": "Laut Schaltplan versorgt F2 nur das Regelventil Y1 mit Plus von Klemme 15. A1 hängt an F3, A2 an F1 (Klemme 30). "
                "Ohne Plus kann A1 die Spule nicht bestromen – der Verdichter bleibt auf kleinstem Hub, eine Magnetkupplung gibt "
                "es nicht. Eine durchgebrannte Sicherung unterbricht den Strom immer, sie lässt ihn nie ungebremst fließen.",
     "src": "Eigener Schaltplan"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3, "bild": "klima-schaltplan.svg",
     "q": "Der Messwertblock zeigt für B2 dauerhaft −40 °C, obwohl die Klimaanlage länger aus war und es 25 °C warm ist. Wie reagiert A1, und wo liegt der Fehler wahrscheinlich?",
     "opts": ["A1 erhöht die Verdichterleistung, um die Kälte auszugleichen; wahrscheinlich ist das Kältemittel überfüllt",
              "A1 schaltet den Lüfter M1 auf volle Drehzahl; wahrscheinlich hat die Signalleitung von B2 einen Kurzschluss nach Masse",
              "A1 reagiert gar nicht, weil B2 nur zur Anzeige im Bedienteil dient; wahrscheinlich ist der Sensor B1 falsch angeschlossen",
              "A1 nimmt Vereisungsgefahr an und regelt den Verdichter ab; wahrscheinlich ist der Sensorkreis von B2 unterbrochen"],
     "correct": 3,
     "explain": "B2 schützt den Verdampfer vor Vereisung: Meldet er sehr tiefe Temperatur, regelt A1 den Verdichter zurück oder ab – "
                "die Anlage kühlt nicht. −40 °C ist der Endwert eines NTC bei unendlichem Widerstand, also Unterbrechung von Sensor "
                "oder Leitung (A1 Pin 7/8). Ein Kurzschluss nach Masse würde dagegen einen sehr hohen Wert ergeben.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3, "bild": "klima-oszi-regelventil.svg",
     "q": "Bei angeforderter Kühlung zeigt das Oszilloskop an A1 Pin 11 nicht das abgebildete Signal, sondern dauernd die volle Bordspannung ohne Pulse. Was lässt sich daraus schließen?",
     "opts": ["F2 und die Spule von Y1 sind durchgängig; A1 schaltet die Masseseite nicht – Anforderung bzw. Endstufe prüfen",
              "Die Sicherung F2 ist durchgebrannt; deshalb liegt an Pin 11 die volle Spannung an, und Y1 bleibt stromlos",
              "Die Spule von Y1 ist unterbrochen; die Spannung staut sich an Pin 11, deshalb zeigt das Oszilloskop Bordspannung",
              "Y1 wird dauernd bestromt, und der Verdichter fördert mit vollem Hub; das ist bei hoher Kühlanforderung normal"],
     "correct": 0,
     "explain": "Spannung an Pin 11 kann nur über F2 und die Spule von Y1 dorthin kommen – beide sind also in Ordnung. Fehlen die "
                "Pulse nach Masse, schaltet A1 nicht: Es gibt keine Anforderung (z. B. wegen eines anderen Fehlers wie "
                "„Drucksignal unplausibel“) oder die Endstufe ist defekt. Wäre F2 oder die Spule unterbrochen, läge an Pin 11 "
                "keine Spannung an. Dauernd bestromt hieße dauernd 0 V.",
     "src": "Eigenes Oszillogramm, Eigener Schaltplan"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4, "bild": "klima-messpunkte.svg",
     "q": "Die Anlage kühlt schlecht, der Niederdruck ist sehr niedrig. Bei laufender Klima messen Sie an B 50 °C und an C 10 °C; der Trockner ist an der Ausgangsseite beschlagen. Wo liegt der Fehler wahrscheinlich?",
     "opts": ["Der Kondensator ist verschmutzt; die Temperatur zwischen B und C fällt deshalb besonders stark ab",
              "Das Expansionsventil klemmt offen; deshalb ist das Kältemittel schon vor dem Ventil abgekühlt",
              "Trockner bzw. Filtersieb ist verstopft und wirkt wie eine Drosselstelle; Trockner ersetzen",
              "Die Anlage ist überfüllt; zu viel flüssiges Kältemittel kühlt den Trockner von innen ab"],
     "correct": 2,
     "explain": "Zwischen B und C liegt nur der Trockner; in einer freien Flüssigkeitsleitung ändert sich die Temperatur kaum. Ein "
                "großer Temperaturabfall mit Beschlag zeigt, dass der Druck schon im Trockner fällt und Kältemittel dort verdampft "
                "– eine Verstopfung wirkt wie eine Drosselstelle. Dem Verdampfer fehlt dann Kältemittel, der Niederdruck sinkt.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3, "bild": "klima-messpunkte.svg",
     "q": "Laut Druck-Temperatur-Tabelle entspricht der Niederdruck einer Verdampfungstemperatur von 2 °C. An Messpunkt E messen Sie 8 °C. Wie groß ist die Überhitzung?",
     "opts": ["10 K", "4 K", "−6 K", "6 K"],
     "correct": 3,
     "explain": "Überhitzung = gemessene Temperatur am Verdampferausgang − Verdampfungstemperatur = 8 °C − 2 °C = 6 K. Wer addiert, "
                "kommt auf 10 K, wer dividiert auf 4. Eine Überhitzung stellt sicher, dass nur Dampf zum Verdichter gelangt; der "
                "Sollbereich steht in den Herstellerunterlagen.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2, "bild": "klima-messpunkte.svg",
     "q": "An welchem Messpunkt ist die Temperatur bei laufender Anlage am höchsten?",
     "opts": ["B – nach dem Kondensator", "A – direkt nach dem Verdichter", "D – nach dem Expansionsventil", "E – am Verdampferausgang"],
     "correct": 1,
     "explain": "Beim Verdichten steigen Druck und Temperatur stark an; das heiße Gas gibt seine Wärme erst im Kondensator ab. "
                "Deshalb ist die Druckleitung direkt hinter dem Verdichter (A) die heißeste Stelle. Hinter dem Expansionsventil (D) "
                "ist es am kältesten.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Ein extern geregelter Verdichter ohne Magnetkupplung hat in der Riemenscheibe eine Überlastsicherung. Wozu dient sie?",
     "opts": ["Sie schaltet den Verdichter bei ausgeschalteter Klimaanlage ab, weil er sonst ständig mit vollem Hub fördern würde",
              "Sie begrenzt den Hochdruck, indem sie bei zu hohem Druck Kältemittel über ein Ventil in der Riemenscheibe ablässt",
              "Sie dämpft nur Drehschwingungen des Riemens; ein blockierter Verdichter bringt deshalb den Motor zum Stillstand",
              "Blockiert der Verdichter, trennt sie ihn vom Antrieb, damit der Riementrieb mit den anderen Aggregaten weiterläuft"],
     "correct": 3,
     "explain": "Ohne Magnetkupplung dreht der Verdichter immer mit; bei „Klima aus“ stellt das Regelventil nur den kleinsten Hub "
                "ein. Frisst der Verdichter fest, würde der Riemen reißen oder durchrutschen – dann fallen auch andere Aggregate "
                "am selben Riemen (z. B. Generator) aus. Die Überlastsicherung (Sollbruchstelle bzw. Rutschkupplung) trennt den "
                "Verdichter rechtzeitig ab.",
     "src": "Netz: Hella Techtips, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Klima ein, Motor läuft: Nieder- und Hochdruck bleiben fast gleich und ändern sich auch bei höherer Drehzahl kaum. Messwertblock und Oszilloskop zeigen eine plausible Ansteuerung des Regelventils, die Spule hat den Sollwiderstand. Welche Ursache ist am wahrscheinlichsten?",
     "opts": ["Die Anlage ist überfüllt; zu viel Kältemittel gleicht Hoch- und Niederdruck auch bei höherer Drehzahl an",
              "Der Verdichter fördert trotz Ansteuerung nicht (Regelmechanik oder Triebwerk defekt)",
              "Der Kondensatorlüfter ist ausgefallen; dadurch steigt der Niederdruck auf den Wert des Hochdrucks",
              "Das Expansionsventil klemmt geschlossen; deshalb bleiben beide Drücke gleich hoch"],
     "correct": 1,
     "explain": "Gleiche Drücke bei laufendem Motor bedeuten: Es wird kein Druckunterschied aufgebaut, der Verdichter fördert nicht. "
                "Da die elektrische Ansteuerung nachweislich stimmt, liegt der Fehler im Verdichter selbst (Regelmechanik, "
                "Taumelscheibe, Ventile). Überfüllung erhöht beide Drücke, ein geschlossenes Expansionsventil senkt den "
                "Niederdruck stark, ein ausgefallener Lüfter erhöht vor allem den Hochdruck.",
     "src": "Netz: Robinair EVDC100, FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "In einer Anlage wurde Feuchtigkeit im Kreislauf festgestellt. Welche Abhilfe ist richtig?",
     "opts": ["Nur Innenraumfilter und Kondenswasserablauf prüfen, weil die Feuchtigkeit von außen in den Innenraum kommt",
              "Kältemittel absaugen; Trockner weiterverwenden, weil er die Feuchtigkeit ja bindet; kurz evakuieren und befüllen",
              "Kältemittel absaugen; Trockner erneuern; ausreichend lange evakuieren, damit das Wasser verdampft; nach Gewicht befüllen",
              "Etwas mehr Kältemittelöl einfüllen, weil das Öl die Feuchtigkeit aufnimmt und die Anlage so wieder trocken wird"],
     "correct": 2,
     "explain": "Wasser im Kreislauf bildet Säure und kann am Expansionsventil gefrieren. Der Trockner ist dann gesättigt und muss "
                "erneuert werden. Im Vakuum siedet das Wasser schon bei Raumtemperatur und wird abgesaugt – das braucht Zeit, "
                "also lange genug evakuieren (Dauer nach Hersteller). Mehr Öl einzufüllen schadet nur.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Nach einer Reparatur wurde nur sehr kurz evakuiert. Jetzt ist der Hochdruck im Betrieb deutlich zu hoch, obwohl Füllmenge, Lüfter und Kondensator in Ordnung sind. Was ist die wahrscheinliche Ursache?",
     "opts": ["Zu viel Kältemittelöl im Kreislauf; das Öl verdampft im Kondensator und erhöht dadurch den Hochdruck",
              "Das kurze Evakuieren hat den Trockner zerstört; seine Körner verstopfen das Expansionsventil vollständig",
              "Luft (nicht kondensierbares Gas) im Kreislauf; sie sammelt sich im Kondensator und erhöht den Hochdruck",
              "Der Unterdruck beim Evakuieren hat den Drucksensor verstellt; er zeigt jetzt dauernd einen zu hohen Wert"],
     "correct": 2,
     "explain": "Wird zu kurz evakuiert, bleibt Luft im Kreislauf. Luft lässt sich im Kondensator nicht verflüssigen, nimmt dort "
                "Platz weg und erhöht den Hochdruck – die Kühlleistung sinkt. Mit der Luft kommt außerdem Feuchtigkeit hinein. "
                "Abhilfe: absaugen, ausreichend evakuieren, nach Gewicht neu befüllen.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Nach dem Tausch des Kondensators soll Öl ergänzt werden. Wie viel Öl wird eingefüllt?",
     "opts": ["Immer die komplette Ölfüllmenge der Anlage, weil beim Absaugen das ganze Öl mit herauskommt",
              "Die beim Absaugen abgeschiedene Menge plus die Herstellerangabe für den neuen Kondensator",
              "Gar kein Öl, weil ein neuer Kondensator ab Werk mit der vollen Ölmenge der Anlage befüllt ist",
              "So viel, bis das Hochdruckmanometer im Stillstand den Sollwert für den Ruhedruck anzeigt"],
     "correct": 1,
     "explain": "Beim Absaugen wird nur ein Teil des Öls abgeschieden – diese Menge wird ersetzt. Im ausgebauten Bauteil bleibt "
                "zusätzlich Öl zurück; wie viel dafür nachgefüllt wird, gibt der Hersteller je Bauteil an. Zu viel Öl "
                "verschlechtert den Wärmeübergang, zu wenig schadet dem Verdichter. Der Druck sagt nichts über die Ölmenge.",
     "src": "FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Nach dem Evakuieren wird die Vakuumpumpe abgeschaltet. In der Haltezeit steigt der Druck langsam an. Wie gehen Sie vor?",
     "opts": ["Trotzdem befüllen, weil ein leichter Anstieg beim Haltetest normal ist und das Kältemittel kleine Lecks abdichtet",
              "Mit UV-Kontrastmittel in der Haltezeit nach dem Leck suchen, weil das Vakuum das Mittel an die Leckstelle zieht",
              "Nicht befüllen; Dichtheit prüfen (z. B. Formiergas) und, wenn dicht, weiter evakuieren, weil Restfeuchte verdampft",
              "Kältemittel einfüllen und danach die doppelte Ölmenge ergänzen, weil durch das Vakuum Öl verloren gegangen ist"],
     "correct": 2,
     "explain": "Steigt der Druck, kommt etwas in den Kreislauf: Luft durch ein Leck oder Dampf aus Restfeuchtigkeit. Steigt er bis "
                "zum Umgebungsdruck, ist es eher ein Leck; bleibt er auf niedrigem Niveau stehen, eher Feuchtigkeit. Befüllt wird "
                "erst, wenn das Vakuum hält. UV-Kontrastmittel braucht umlaufendes Öl unter Druck und hilft hier nicht.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Warum prüfen viele Werkstätten das Kältemittel vor dem Absaugen mit einem Identifiziergerät?",
     "opts": ["Weil das Servicegerät sonst die Füllmenge laut Typschild nicht berechnen kann",
              "Weil R1234yf ohne vorherige Identifizierung gesetzlich nicht abgesaugt werden darf und das Gerät sonst sperrt",
              "Damit kein fremdes oder verunreinigtes Kältemittel in das Servicegerät und dessen Vorrat gelangt",
              "Damit man feststellt, wie viel Öl im Kreislauf ist, bevor es zusammen mit dem Kältemittel abgesaugt wird"],
     "correct": 2,
     "explain": "Wurde eine Anlage mit falschem oder gemischtem Kältemittel befüllt, würde das Absaugen den ganzen Vorrat im "
                "Servicegerät verunreinigen. Das Identifiziergerät zeigt Art und Reinheit; verunreinigtes Kältemittel wird mit "
                "einem eigenen Gerät abgesaugt und entsorgt.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie führen Sie die Sonde eines elektronischen Lecksuchers richtig?",
     "opts": ["Schnell und im Abstand von etwa einem Meter über den ganzen Motorraum hinweg",
              "Langsam und dicht an Leitungen und Verbindungen, vor allem an deren Unterseite",
              "Nur an der Oberseite der Bauteile, weil das Kältemittel nach oben steigt",
              "Bei laufendem Motorlüfter, damit das austretende Kältemittel zur Sonde geweht wird"],
     "correct": 1,
     "explain": "Kältemittel ist schwerer als Luft und sinkt nach unten. Die Sonde wird deshalb langsam und dicht unter Leitungen "
                "und Verbindungen geführt. Luftzug verdünnt austretendes Kältemittel – Motor und Lüfter bleiben aus.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Ein Kunde wundert sich über eine Wasserpfütze unter seinem Auto nach einer Fahrt mit Klimaanlage. Was sagen Sie ihm?",
     "opts": ["Das ist Kältemittel, das sich beim Austreten verflüssigt; die Anlage muss sofort auf Dichtheit geprüft werden",
              "Das ist Kühlmittel aus dem Motor; der Klimakondensator hat ein Leck zum Kühler und muss ersetzt werden",
              "Das ist Kondenswasser aus dem Auspuff; mit der Klimaanlage hat es nichts zu tun, es entsteht nur im Winter",
              "Das ist normal: Am kalten Verdampfer kondensiert Feuchtigkeit aus der Luft und läuft unter dem Fahrzeug ab"],
     "correct": 3,
     "explain": "Der Verdampfer kühlt die Luft unter ihren Taupunkt; die Feuchtigkeit schlägt sich als Wasser nieder und läuft über "
                "den Kondenswasserablauf ins Freie. Klares, geruchloses Wasser ist also ein gutes Zeichen. Austretendes "
                "Kältemittel verdampft sofort. Bedenklich wäre Wasser im Fußraum – dann ist der Ablauf verstopft.",
     "src": "FW"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Warum hilft es, im Winter bei beschlagenen Scheiben die Klimaanlage einzuschalten?",
     "opts": ["Die Klimaanlage heizt im Winter stärker als die normale Heizung, weil der Verdichter die Luft zusätzlich erwärmt",
              "Der Verdampfer trocknet die Luft; danach wird sie erwärmt und nimmt die Feuchtigkeit von den Scheiben auf",
              "Der Kondensator bläst warme Luft direkt auf die Frontscheibe, wodurch das Wasser schnell verdunstet",
              "Die Klimaanlage saugt die feuchte Luft über die Serviceanschlüsse aus dem Innenraum ab"],
     "correct": 1,
     "explain": "Am kalten Verdampfer kondensiert die Feuchtigkeit der Luft. Die getrocknete Luft wird danach im Heizungswärmetauscher "
                "erwärmt und kann die Feuchtigkeit von den Scheiben aufnehmen. Bei sehr tiefen Außentemperaturen schaltet der "
                "Verdichter allerdings zum Schutz ab.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Welche Aussage über Pkw-Klimaanlagen mit R744 (CO₂) ist richtig?",
     "opts": ["R744 arbeitet mit niedrigeren Drücken als R1234yf und darf deshalb mit demselben Servicegerät befüllt werden",
              "R744 ist ein HFO-Kältemittel wie R1234yf; der Kreislauf ist identisch, nur die Serviceanschlüsse sind anders",
              "R744 arbeitet mit sehr viel höheren Drücken; statt eines Kondensators gibt ein Gaskühler die Wärme ab; GWP 1",
              "R744 ist giftig und brennbar; deshalb darf es nur in Fahrzeugen ohne Verbrennungsmotor eingesetzt werden"],
     "correct": 2,
     "explain": "CO₂ hat GWP 1, ist nicht brennbar und ungiftig, verdrängt aber wie alle Kältemittel den Sauerstoff (schwerer als "
                "Luft). Es arbeitet mit vielfach höheren Drücken, oft überkritisch – die Wärme gibt deshalb ein Gaskühler ab, "
                "ohne dass das Gas dabei flüssig wird. Leitungen, Bauteile und Servicegeräte sind eigens dafür ausgelegt.",
     "src": "Netz: ARCTick, UBA"},
    {"cat": "Klima", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Was gibt der GWP-Wert eines Kältemittels an?",
     "opts": ["Wie viel Gramm Kältemittel die Anlage je Kilowatt Kühlleistung mindestens benötigt",
              "Wie leicht das Kältemittel entflammbar ist (Sicherheitsklasse)",
              "Wie stark es im Vergleich zur gleichen Masse CO₂ zum Treibhauseffekt beiträgt",
              "Bei welchem Druck das Kältemittel bei 20 °C verdampft"],
     "correct": 2,
     "explain": "GWP (Global Warming Potential) vergleicht die Treibhauswirkung eines Stoffes mit der von CO₂ (GWP = 1), meist über "
                "100 Jahre. R134a liegt weit über 1000, R1234yf unter 150 – deshalb dürfen neue Pkw in der EU nur noch "
                "Kältemittel mit GWP unter 150 haben. Die Brennbarkeit gibt die Sicherheitsklasse an (z. B. A2L).",
     "src": "Recherche 3.6, FW"},
    {"cat": "Klima", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Bei einer Leistungsprüfung ergibt sich eine Unterkühlung von fast 0 K und eine sehr große Überhitzung. Welche Ursache passt?",
     "opts": ["Überfüllung: Zu viel Kältemittel staut sich im Kondensator, dadurch steigt die Überhitzung am Verdampfer",
              "Unterfüllung: Es fehlt Kältemittel, der Kondensator ist nicht voll Flüssigkeit, der Verdampfer wird zu wenig versorgt",
              "Der Kondensatorlüfter läuft dauernd mit voller Drehzahl; dadurch wird das Kältemittel zu stark unterkühlt",
              "Das Expansionsventil klemmt offen; zu viel Kältemittel gelangt in den Verdampfer und wird dort überhitzt"],
     "correct": 1,
     "explain": "Fehlt Kältemittel, gibt es nach dem Kondensator kaum reine Flüssigkeit, die weiter abkühlen könnte → Unterkühlung "
                "nahe 0 K. Im Verdampfer ist das wenige Kältemittel früh verdampft, der Dampf erwärmt sich danach stark → große "
                "Überhitzung. Überfüllung ergibt eher große Unterkühlung, ein offenes Expansionsventil kleine Überhitzung.",
     "src": "FW"},
    {"cat": "Klima", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Nach dem Abstellen des Motors läuft der Kühlerlüfter noch einige Minuten nach. Wie ist das zu beurteilen?",
     "opts": ["Das ist immer ein Fehler: Ein Lüfter darf nur bei laufendem Motor laufen, also ist die Endstufe defekt",
              "Das zeigt eine Überfüllung der Klimaanlage an; der Lüfter muss den zu hohen Ruhedruck abbauen",
              "Das kann normal sein: Das Steuergerät lässt den Lüfter nachlaufen, um Motorraum und Kühler abzukühlen",
              "Das ist normal, weil der Lüfter nach dem Abstellen als Generator die Batterie wieder nachlädt"],
     "correct": 2,
     "explain": "Viele Fahrzeuge lassen den Lüfter abhängig von Kühlmittel- bzw. Motorraumtemperatur nachlaufen (Dauer nach "
                "Herstellerangabe). Ein Fehler liegt vor, wenn er nicht mehr abschaltet und die Batterie entleert – dann "
                "Ansteuerung, Endstufe bzw. Relais prüfen.",
     "src": "Netz: kfz-dietrich (Kühlerlüfter-Nachlauf), FW"},
]
