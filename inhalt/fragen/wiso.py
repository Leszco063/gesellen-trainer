"""
WiSo (Wirtschafts- und Sozialkunde): Tarifvertrag, Sozialversicherungen (u. a. Rente),
Wahlen (u. a. Kommunalwahl Bayern), Konjunktur und Wirtschaftspolitik.
Format siehe docs/superpowers/specs (Abschnitt 5 und 15). Faktenbasis:
docs/recherche/2026-10-26-gp2-winter-2026-27.md (Abschnitt 2, 3.5, 3.6) und docs/recherche/ausbau-wiso.md.
Aktuelle Zahlen stehen immer mit Jahr im Fragetext – sie veralten. Nach Änderungen:  python tools/export.py
"""

SITUATIONEN = {
    "wiso-geselle": {
        "titel": "Situation: Start als Geselle",
        "text": "Du hast deine Gesellenprüfung bestanden und wirst von deinem Ausbildungsbetrieb, einem Autohaus "
                "in Bayreuth (Mitglied der Kfz-Innung, tarifgebunden), als Kfz-Mechatroniker übernommen. "
                "Im März 2026 waren Kommunalwahlen in Bayern.",
        "cat": "WiSo",
    },
    "wiso-betrieb": {
        "titel": "Situation: Betriebsversammlung im Autohaus",
        "text": "Sie arbeiten als Kfz-Mechatroniker in einem Autohaus mit Werkstatt in Kulmbach (60 Beschäftigte, "
                "tarifgebunden). Im Frühjahr 2026 wurde der Betriebsrat neu gewählt. Auf der Betriebsversammlung im "
                "Oktober 2026 berichtet die Geschäftsführung: Der Neuwagenverkauf ist schwach, die Werkstatt ist gut "
                "ausgelastet, Energie und Kraftstoff sind deutlich teurer geworden.\n"
                "In der Pause diskutieren die Kollegen über Inflation, die nächste Landtagswahl und ein Volksbegehren.",
        "cat": "WiSo",
    },
}

S = "wiso-geselle"
B = "wiso-betrieb"
KONJ = "wiso-konjunkturzyklus.svg"
LOHN = "wiso-lohnabrechnung.svg"

QUESTIONS = [
    # ------------------------------------------------------------------
    # Aufgabensatz „Start als Geselle“ (20 Aufgaben, 67 Punkte)
    # ------------------------------------------------------------------
    # 1 Tarifautonomie
    {"cat": "WiSo", "situation": S, "nr": 1, "level": 1, "typ": "mc", "pkt": 3,
     "q": "Ihr Lohn als Geselle richtet sich nach dem Tarifvertrag. Welche Erklärung des Begriffs Tarifautonomie ist richtig?",
     "opts": ["Der Staat legt Löhne und Arbeitsbedingungen per Gesetz fest; Gewerkschaften und Arbeitgeberverbände werden dazu nur angehört",
              "Betriebsrat und Arbeitgeber handeln die Löhne im einzelnen Betrieb selbstständig aus; Grundlage ist das Betriebsverfassungsgesetz",
              "Gewerkschaften und Arbeitgeberverbände handeln Löhne und Arbeitsbedingungen selbstständig aus; Grundlage ist Art. 9 Abs. 3 GG; der Staat mischt sich nicht ein",
              "Gewerkschaften und Arbeitgeberverbände verhandeln die Löhne selbstständig; der Abschluss gilt aber erst, wenn das Bundesarbeitsministerium ihn genehmigt hat"],
     "correct": 2,
     "explain": "Tarifautonomie heißt: Die Tarifpartner regeln Lohn, Arbeitszeit und Urlaub eigenverantwortlich. Grundlage ist die "
                "Koalitionsfreiheit nach Art. 9 Abs. 3 Grundgesetz; in die Verhandlungen mischt sich der Staat nicht ein. "
                "Er gibt nur den gesetzlichen Rahmen vor (z. B. Arbeitszeitgesetz, Bundesurlaubsgesetz, Mindestlohngesetz).",
     "src": "FW"},
    # 2 Tarifpartner
    {"cat": "WiSo", "situation": S, "nr": 2, "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Beschreibungen die passende Organisation im bayerischen Kfz-Handwerk zu.",
     "paare": [["Vertritt die Beschäftigten bei den Tarifverhandlungen", "IG Metall"],
               ["Vertritt die Kfz-Betriebe als Arbeitgeber bei den Tarifverhandlungen",
                "Landesinnungsverband des Kfz-Gewerbes Bayern (Arbeitgeberseite)"],
               ["Führt die Handwerksrolle und überwacht die Ausbildung, verhandelt aber keine Löhne", "Handwerkskammer"],
               ["Vermittelt als neutrale Stelle, wenn die Verhandlungen gescheitert sind", "Schlichter"]],
     "ablenker": ["Betriebsrat", "Bundesagentur für Arbeit"],
     "explain": "Tarifpartner sind Gewerkschaft (Kfz-Handwerk: IG Metall) und Arbeitgeberseite (Landesverband bzw. "
                "Landesinnungsverband des Kfz-Gewerbes, in dem die Innungsbetriebe organisiert sind). Die Handwerkskammer "
                "ist für Handwerksrolle und Ausbildung zuständig. Der Betriebsrat schließt nur Betriebsvereinbarungen, keine Tarifverträge.",
     "src": "FW (Verbandsname mit Innung abgleichen)"},
    # 3 Tarifvertragsarten
    {"cat": "WiSo", "situation": S, "nr": 3, "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Regelungen der Tarifvertragsart zu, in der sie üblicherweise stehen.",
     "paare": [["Anzahl der Urlaubstage pro Jahr", "Manteltarifvertrag"],
               ["Wöchentliche Arbeitszeit und Kündigungsfristen", "Manteltarifvertrag"],
               ["Höhe des Stundenlohns und der Ausbildungsvergütung", "Entgelttarifvertrag"],
               ["Einstufung eines Gesellen in eine Entgeltgruppe nach seiner Tätigkeit", "Entgeltrahmentarifvertrag"]],
     "ablenker": ["Ausbildungsvertrag", "Betriebsvereinbarung"],
     "explain": "Manteltarif (Rahmen-/Manteltarif): allgemeine Arbeitsbedingungen, lange Laufzeit. Entgelttarif: die Euro-Beträge, "
                "kurze Laufzeit (meist 1–2 Jahre). Entgeltrahmentarif: beschreibt die Entgeltgruppen und wer in welche Gruppe kommt.",
     "src": "FW"},
    # 4 Ablauf Tarifkonflikt
    {"cat": "WiSo", "situation": S, "nr": 4, "level": 2, "typ": "reihenfolge", "pkt": 5,
     "q": "Bringen Sie den Ablauf einer Tarifauseinandersetzung mit Streik in die richtige Reihenfolge.",
     "schritte": ["Kündigung des alten Entgelttarifvertrags",
                  "Tarifverhandlungen zwischen Gewerkschaft und Arbeitgeberverband",
                  "Verhandlungen werden für gescheitert erklärt",
                  "Schlichtungsverfahren ohne Einigung",
                  "Urabstimmung: in der Regel mindestens 75 % der Mitglieder für Streik",
                  "Streik (Arbeitgeber können mit Aussperrung reagieren)",
                  "Neue Verhandlungen mit Verhandlungsergebnis",
                  "Zweite Urabstimmung: in der Regel reichen 25 % Zustimmung zur Annahme"],
     "explain": "Erst nach Ablauf bzw. Kündigung des Tarifvertrags endet die Friedenspflicht. Die Quoten 75 % / 25 % stehen in der "
                "Satzung der Gewerkschaft (z. B. IG Metall) – nicht im Gesetz.",
     "src": "FW"},
    # 5 Friedenspflicht
    {"cat": "WiSo", "situation": S, "nr": 5, "level": 1, "typ": "mc", "pkt": 2,
     "q": "Was bedeutet die Friedenspflicht während der Laufzeit eines Tarifvertrags?",
     "opts": ["Zu Themen, die im Tarifvertrag geregelt sind, darf nicht gestreikt oder ausgesperrt werden",
              "Der Betriebsrat darf während der Laufzeit keine Betriebsversammlung einberufen",
              "Arbeitnehmer dürfen ihr Arbeitsverhältnis während der Laufzeit nicht kündigen",
              "Die Gewerkschaft darf erst nach einer gescheiterten Schlichtung wieder verhandeln, auch zu neuen Themen"],
     "correct": 0,
     "explain": "Die Friedenspflicht schützt den Abschluss: Solange er gilt, sind Arbeitskämpfe über die geregelten Inhalte unzulässig. "
                "Warnstreiks sind erst nach Ende der Laufzeit erlaubt.",
     "src": "FW"},
    # 6 Tariferhöhung 2026
    {"cat": "WiSo", "situation": S, "nr": 6, "level": 1, "typ": "mc", "pkt": 3,
     "q": "Im Juli 2026 verdienen Sie 3.000 € brutto im Monat. Nach dem Tarifabschluss 2025 im bayerischen Kfz-Handwerk "
          "steigen die Entgelte ab August 2026 um 3,3 %. Wie hoch ist Ihr neuer Monatslohn?",
     "opts": ["3.009,90 €", "3.099,00 €", "3.168,00 €", "2.901,00 €"],
     "correct": 1,
     "explain": "Erhöhung: 3.000 € × 3,3 % = 99 € → neuer Lohn 3.000 € + 99 € = 3.099 €. "
                "(Abschluss 2025: +2,3 % ab Juli 2025, +3,3 % ab August 2026, Laufzeit bis Ende Mai 2027.)",
     "src": "Netz: IG Metall Bayern, Tarifnachrichten Kfz 06/2025"},
    # 7 Träger der Sozialversicherung
    {"cat": "WiSo", "situation": S, "nr": 7, "level": 1, "typ": "zuordnung", "pkt": 5,
     "q": "Als Geselle sind Sie in allen Zweigen der Sozialversicherung versichert. Ordnen Sie jedem Zweig seinen Träger zu.",
     "paare": [["Rentenversicherung", "Deutsche Rentenversicherung"],
               ["Krankenversicherung", "Krankenkasse (z. B. AOK, Ersatzkasse)"],
               ["Pflegeversicherung", "Pflegekasse (bei der Krankenkasse)"],
               ["Arbeitslosenversicherung", "Bundesagentur für Arbeit"],
               ["Unfallversicherung", "Berufsgenossenschaft"]],
     "ablenker": ["Finanzamt", "Handwerkskammer"],
     "explain": "Die Pflegekassen sind organisatorisch an die Krankenkassen angegliedert. Für Kfz-Betriebe ist in der Regel die "
                "Berufsgenossenschaft Holz und Metall (BGHM) zuständig.",
     "src": "FW"},
    # 8 Unfallversicherung
    {"cat": "WiSo", "situation": S, "nr": 8, "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wer bezahlt die Beiträge zur gesetzlichen Unfallversicherung?",
     "opts": ["Allein der Arbeitgeber", "Arbeitnehmer und Arbeitgeber je zur Hälfte",
              "Allein der Arbeitnehmer", "Der Staat aus Steuermitteln"],
     "correct": 0,
     "explain": "Die Unfallversicherung (Berufsgenossenschaft) übernimmt die Haftung des Arbeitgebers für Arbeits- und Wegeunfälle. "
                "Deshalb zahlt er den Beitrag allein, abhängig von Lohnsumme und Gefahrklasse.",
     "src": "FW"},
    # 9 RV-Beitrag 2026
    {"cat": "WiSo", "situation": S, "nr": 9, "level": 2, "typ": "mc", "pkt": 3,
     "q": "Mit einer Zulage verdienen Sie 3.100 € brutto im Monat. Der Beitragssatz zur Rentenversicherung beträgt 2026 18,6 %. "
          "Wie hoch ist Ihr Arbeitnehmeranteil?",
     "opts": ["576,60 €", "28,83 €", "2.811,70 €", "288,30 €"],
     "correct": 3,
     "explain": "Arbeitnehmer und Arbeitgeber zahlen je die Hälfte: 18,6 % ÷ 2 = 9,3 %. 3.100 € × 9,3 % = 288,30 €.",
     "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"},
    # 10 Generationenvertrag
    {"cat": "WiSo", "situation": S, "nr": 10, "level": 3, "typ": "mc", "pkt": 4,
     "q": "Ihr Rentenbeitrag wird nicht für Sie angespart. Welche Aussage beschreibt das Umlageverfahren (Generationenvertrag) und "
          "das Problem durch den demografischen Wandel richtig?",
     "opts": ["Ihre Beiträge werden auf einem persönlichen Konto angelegt und verzinst; weil weniger Kinder geboren werden, sinken die Zinsen und damit die Rente",
              "Die heutigen Beiträge zahlen direkt die heutigen Renten, Ihre Rente zahlt später die nächste Generation; durch weniger Geburten und längeres Leben kommen immer weniger Beitragszahler auf einen Rentner",
              "Die heutigen Renten werden vollständig aus Steuern bezahlt; durch den demografischen Wandel muss deshalb vor allem die Mehrwertsteuer steigen",
              "Die heutigen Beiträge zahlen direkt die heutigen Renten; weil die geburtenstarken Jahrgänge jetzt erst ins Berufsleben starten, kommen künftig mehr Beitragszahler auf einen Rentner"],
     "correct": 1,
     "explain": "Beim Umlageverfahren gibt es keinen Kapitalstock: Die Beiträge der heutigen Beschäftigten bezahlen direkt die heutigen Renten, "
                "dafür erwerben die Beitragszahler einen Anspruch, den später die nächste Generation finanziert. Demografischer Wandel: "
                "weniger Geburten, höhere Lebenserwartung, die Babyboomer gehen in Rente. Folge: weniger Beitragszahler pro Rentner → "
                "steigende Beiträge, sinkendes Rentenniveau oder höhere Steuerzuschüsse.",
     "src": "FW"},
    # 11 Drei-Säulen-Modell
    {"cat": "WiSo", "situation": S, "nr": 11, "level": 1, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort nennt die drei Säulen der Altersvorsorge mit je einem passenden Beispiel?",
     "opts": ["Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); gesetzliche Pflegeversicherung (Pflegegeld); private Vorsorge (Riester-Vertrag, Sparplan)",
              "Gesetzliche Unfallversicherung (Verletztenrente); betriebliche Altersvorsorge (Entgeltumwandlung); private Vorsorge (Riester-Vertrag, Sparplan)",
              "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); betriebliche Altersvorsorge (Entgeltumwandlung); private Vorsorge (Riester-Vertrag, Sparplan)",
              "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); betriebliche Altersvorsorge (Entgeltumwandlung); Grundsicherung im Alter (Sozialamt)"],
     "correct": 2,
     "explain": "Die drei Säulen: gesetzliche Rentenversicherung, betriebliche Altersvorsorge (z. B. Entgeltumwandlung über den Arbeitgeber) "
                "und private Vorsorge (z. B. private Rentenversicherung, Riester-Vertrag, Sparplan). Die Grundsicherung im Alter ist keine "
                "Vorsorge, sondern Fürsorge aus Steuern. Die gesetzliche Rente allein sichert den Lebensstandard meist nicht. Betriebliche und private Vorsorge "
                "werden vom Staat teils gefördert (Zulagen, Steuer- und Beitragsvorteile).",
     "src": "FW"},
    # 12 Rentenpaket 2025
    {"cat": "WiSo", "situation": S, "nr": 12, "level": 2, "typ": "mc", "pkt": 2,
     "q": "Der Bundestag hat im Dezember 2025 das Rentenpaket 2025 beschlossen (in Kraft seit 01.01.2026). Was regelt die darin verlängerte Haltelinie?",
     "opts": ["Das Rentenniveau soll bis 2031 nicht unter 48 % sinken",
              "Jede Rente beträgt bis 2031 mindestens 48 % des letzten Bruttolohns",
              "Der Rentenbeitragssatz wird bis 2031 auf 48 % begrenzt",
              "Die Regelaltersgrenze sinkt bis 2031 auf 63 Jahre"],
     "correct": 0,
     "explain": "Das Rentenniveau vergleicht eine Standardrente (45 Beitragsjahre mit Durchschnittsverdienst) mit dem Durchschnittsverdienst. "
                "Es ist keine Garantie für die eigene Rente. Die Haltelinie von 48 % gilt laut Rentenpaket 2025 bis 2031.",
     "src": "Netz: Bundesregierung, Rentenpaket 2025 (12/2025)"},
    # 13 Wahlgrundsätze
    {"cat": "WiSo", "situation": S, "nr": 13, "level": 1, "typ": "zuordnung", "pkt": 5,
     "q": "Bei der Kommunalwahl im März 2026 galten dieselben Wahlgrundsätze wie bei der Bundestagswahl. Ordnen Sie jedem Grundsatz seine Bedeutung zu.",
     "paare": [["allgemein", "Alle Wahlberechtigten dürfen wählen, unabhängig von Geschlecht, Einkommen oder Religion"],
               ["unmittelbar", "Die Bürger wählen die Bewerber direkt, ohne Wahlmänner dazwischen"],
               ["frei", "Niemand darf zur Wahl gezwungen oder in seiner Entscheidung unter Druck gesetzt werden"],
               ["gleich", "Jede Stimme zählt gleich viel"],
               ["geheim", "Niemand darf erfahren, wie jemand abgestimmt hat"]],
     "ablenker": ["Nur wer Steuern zahlt, darf wählen"],
     "explain": "Die fünf Wahlgrundsätze stehen für den Bundestag in Art. 38 GG und gelten über Art. 28 GG auch für Gemeinde- und Kreiswahlen.",
     "src": "FW"},
    # 14 Kumulieren und Panaschieren
    {"cat": "WiSo", "situation": S, "nr": 14, "level": 2, "typ": "mc", "pkt": 3,
     "q": "Bei der Wahl des Stadtrats in Bayern durften Sie kumulieren und panaschieren. Welche Erklärung beider Begriffe ist richtig?",
     "opts": ["Kumulieren: Stimmen auf Bewerber verschiedener Listen verteilen; Panaschieren: einem Bewerber bis zu 3 Stimmen geben; insgesamt so viele Stimmen, wie Sitze zu vergeben sind",
              "Kumulieren: einem Bewerber bis zu 5 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt so viele Stimmen, wie Sitze zu vergeben sind",
              "Kumulieren: einem Bewerber bis zu 3 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt genau 3 Stimmen, egal wie viele Sitze zu vergeben sind",
              "Kumulieren: einem Bewerber bis zu 3 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt so viele Stimmen, wie Sitze zu vergeben sind"],
     "correct": 3,
     "explain": "Kumulieren = „häufeln“: einem Bewerber mehrere Stimmen geben, in Bayern höchstens 3. Panaschieren = „mischen“: Stimmen auf "
                "Bewerber verschiedener Listen (Parteien/Wählergruppen) verteilen. Man hat so viele Stimmen, wie Gemeinde- bzw. "
                "Stadtratsmitglieder zu wählen sind. Zusätzlich gibt es das Listenkreuz: Dann bekommt jeder Bewerber "
                "der Liste der Reihe nach eine Stimme. Wer zu viele Stimmen vergibt, macht den Stimmzettel ungültig bzw. teilweise ungültig.",
     "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"},
    # 15 Amtszeit und Wahlalter
    {"cat": "WiSo", "situation": S, "nr": 15, "level": 1, "typ": "mc", "pkt": 2,
     "q": "Welche Aussage zur Kommunalwahl in Bayern am 08.03.2026 ist richtig?",
     "opts": ["Gewählt wird für 6 Jahre, wählen darf man ab 18 Jahren",
              "Gewählt wird für 5 Jahre, wählen darf man ab 16 Jahren",
              "Gewählt wird für 4 Jahre, wählen darf man ab 18 Jahren",
              "Gewählt wird für 6 Jahre, wählen darf man ab 16 Jahren"],
     "correct": 0,
     "explain": "Gemeinderat, Bürgermeister, Kreistag und Landrat werden in Bayern für 6 Jahre gewählt. Anders als in einigen anderen "
                "Bundesländern gibt es in Bayern kein Kommunalwahlrecht ab 16 – aktives Wahlrecht ab 18.",
     "src": "Netz: sonntagsblatt.de / Gemeinde-Infoblätter Kommunalwahl 2026"},
    # 16 Gemeindeaufgaben
    {"cat": "WiSo", "situation": S, "nr": 16, "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Der neu gewählte Stadtrat berät über die Aufgaben der Gemeinde. Ordnen Sie die Aufgaben der richtigen Art zu.",
     "paare": [["Versorgung mit Trinkwasser", "Pflichtaufgabe (eigener Wirkungskreis)"],
               ["Bau und Unterhalt der Grundschulgebäude", "Pflichtaufgabe (eigener Wirkungskreis)"],
               ["Betrieb eines Hallenbads", "Freiwillige Aufgabe"],
               ["Einrichtung eines Jugendzentrums", "Freiwillige Aufgabe"],
               ["Ausstellen von Personalausweisen und Reisepässen", "Übertragene Aufgabe (vom Staat)"],
               ["Führen des Melderegisters", "Übertragene Aufgabe (vom Staat)"]],
     "explain": "Pflichtaufgaben muss die Gemeinde erfüllen, über das „Wie“ entscheidet sie selbst. Freiwillige Aufgaben übernimmt sie, "
                "wenn Geld da ist. Übertragene Aufgaben erledigt sie im Auftrag des Staates nach dessen Weisung.",
     "src": "FW"},
    # 17 Konjunkturphasen
    {"cat": "WiSo", "situation": S, "nr": 17, "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ihr Chef erklärt, dass der Autoverkauf stark von der Konjunktur abhängt. Ordnen Sie den Phasen das typische Merkmal zu.",
     "paare": [["Aufschwung (Expansion)", "Nachfrage und Produktion steigen, die Arbeitslosigkeit beginnt zu sinken"],
               ["Hochkonjunktur (Boom)", "Kapazitäten voll ausgelastet, Preise und Löhne steigen stark"],
               ["Abschwung (Rezession)", "Nachfrage und Investitionen gehen zurück, Kurzarbeit nimmt zu"],
               ["Tiefstand (Depression)", "Hohe Arbeitslosigkeit, kaum Investitionen, pessimistische Stimmung"]],
     "ablenker": ["Die Preise sinken, während die Produktion stark wächst"],
     "explain": "Die Konjunktur schwankt wellenförmig um den langfristigen Wachstumstrend. Ein Zyklus hat vier Phasen.",
     "src": "FW"},
    # 18 Magisches Viereck
    {"cat": "WiSo", "situation": S, "nr": 18, "level": 1, "typ": "mc", "pkt": 4,
     "q": "Welche Antwort nennt die vier Ziele des magischen Vierecks nach dem Stabilitäts- und Wachstumsgesetz von 1967?",
     "opts": ["Stabilität des Preisniveaus; hoher Beschäftigungsstand; außenwirtschaftliches Gleichgewicht; stetiges und angemessenes Wirtschaftswachstum",
              "Stabilität des Preisniveaus; hoher Beschäftigungsstand; ausgeglichener Staatshaushalt; stetiges und angemessenes Wirtschaftswachstum",
              "Stabilität des Preisniveaus; hoher Beschäftigungsstand; möglichst hoher Exportüberschuss; stetiges und angemessenes Wirtschaftswachstum",
              "Stabilität des Preisniveaus; hoher Beschäftigungsstand; außenwirtschaftliches Gleichgewicht; Schutz der Umwelt"],
     "correct": 0,
     "explain": "Die vier Ziele nach StabG 1967: Stabilität des Preisniveaus, hoher Beschäftigungsstand, außenwirtschaftliches "
                "Gleichgewicht (kein dauerhaft hoher Export- oder Importüberschuss), stetiges und angemessenes Wirtschaftswachstum. "
                "„Magisch“, weil sich nie alle vier Ziele gleichzeitig voll erreichen lassen. Erweitert zum magischen Sechseck/Vieleck um "
                "Umweltschutz und gerechte Einkommens- und Vermögensverteilung.",
     "src": "FW"},
    # 19 Zielkonflikt
    {"cat": "WiSo", "situation": S, "nr": 19, "level": 3, "typ": "mc", "pkt": 3,
     "q": "Welches Beispiel beschreibt einen Zielkonflikt zwischen zwei Zielen des magischen Vierecks richtig?",
     "opts": ["Mehr Beschäftigung bringt mehr Einkommen und Konsum, dadurch wächst die Wirtschaft stärker; beide Ziele fördern sich gegenseitig",
              "Höhere Leitzinsen senken die Inflation und kurbeln zugleich Investitionen und Beschäftigung an, weil Sparen attraktiver wird; so werden beide Ziele gleichzeitig erreicht",
              "Hohe Nachfrage und volle Auslastung sichern Wachstum und Beschäftigung, lassen aber Preise und Löhne steigen; höhere Zinsen gegen die Inflation bremsen dann Wachstum und Beschäftigung",
              "Sinkende Arbeitslosigkeit drückt die Löhne und damit die Preise; so sorgt ein hoher Beschäftigungsstand automatisch für stabile Preise"],
     "correct": 2,
     "explain": "Beispiel: Wirtschaftswachstum/hoher Beschäftigungsstand gegen Preisniveaustabilität. Hohe Nachfrage und volle Auslastung "
                "führen zu steigenden Preisen und Löhnen (Inflation); Maßnahmen dagegen (z. B. höhere Zinsen) bremsen Investitionen, "
                "Wachstum und Beschäftigung. Fördern sich zwei Ziele gegenseitig, spricht man von Zielharmonie. Ein Zielkonflikt liegt vor, wenn die Förderung eines Ziels ein anderes verschlechtert. Weiteres Beispiel: Wachstum gegen Umweltschutz.",
     "src": "FW"},
    # 20 Antizyklische Fiskalpolitik
    {"cat": "WiSo", "situation": S, "nr": 20, "level": 2, "typ": "mc", "pkt": 2,
     "q": "Wie verhält sich der Staat in einer Rezession nach der antizyklischen (nachfrageorientierten) Fiskalpolitik?",
     "opts": ["Er erhöht seine Ausgaben und senkt Steuern, notfalls mit neuen Schulden",
              "Er kürzt seine Ausgaben und erhöht die Steuern, damit der Haushalt ausgeglichen bleibt",
              "Er senkt den Leitzins, damit Kredite für Betriebe und Verbraucher billiger werden",
              "Er hält sich ganz heraus, weil sich der Markt von selbst wieder erholt"],
     "correct": 0,
     "explain": "Antizyklisch = gegen den Konjunkturverlauf: In der Krise die fehlende Nachfrage ersetzen (Deficit Spending), im Boom "
                "Ausgaben kürzen und Rücklagen bilden. Den Leitzins bestimmt nicht der Staat, sondern die unabhängige EZB.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Einzelfragen – Tarifvertrag
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Angenommen, der Manteltarifvertrag sieht 30 Urlaubstage vor, in Ihrem Arbeitsvertrag stehen 32. Was gilt?",
     "opts": ["32 Tage, weil vom Tarifvertrag zugunsten des Arbeitnehmers abgewichen werden darf",
              "30 Tage, weil der Tarifvertrag immer Vorrang vor dem einzelnen Arbeitsvertrag hat",
              "24 Tage, weil das Bundesurlaubsgesetz als höheres Recht den Tarifvertrag verdrängt",
              "31 Tage, weil bei widersprüchlichen Regelungen der Mittelwert beider Verträge gilt"],
     "correct": 0,
     "explain": "Günstigkeitsprinzip (§ 4 Abs. 3 Tarifvertragsgesetz): Der Tarifvertrag ist ein Mindeststandard. Schlechter als der Tarif "
                "darf der Arbeitsvertrag nicht sein, besser schon.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Was bedeutet es, wenn ein Tarifvertrag für allgemeinverbindlich erklärt wird?",
     "opts": ["Er gilt für alle Arbeitgeber und Arbeitnehmer der Branche im Geltungsbereich, auch ohne Verbandsmitgliedschaft",
              "Er gilt dann nur noch für Gewerkschaftsmitglieder, weil nur sie ihn über ihre Beiträge mitfinanzieren",
              "Er kann während der Laufzeit von keiner Seite mehr gekündigt oder geändert werden, auch nicht in gegenseitigem Einvernehmen",
              "Er gilt automatisch für alle Branchen in Deutschland, also z. B. auch für Bäckereien und Banken"],
     "correct": 0,
     "explain": "Die Allgemeinverbindlicherklärung spricht das Arbeitsministerium auf Antrag der Tarifpartner aus, wenn sie im "
                "öffentlichen Interesse liegt (§ 5 TVG). Damit sind auch nicht tarifgebundene Betriebe erfasst.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort nennt drei Möglichkeiten, wie ein Tarifvertrag für Ihr Arbeitsverhältnis verbindlich werden kann?",
     "opts": ["Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Allgemeinverbindlicherklärung; Eintragung des Betriebs in die Handwerksrolle",
              "Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Allgemeinverbindlicherklärung; Verweis im Arbeitsvertrag (Bezugnahmeklausel)",
              "Gewerkschaftsmitgliedschaft des Arbeitnehmers, auch wenn der Betrieb nicht im Arbeitgeberverband ist; Allgemeinverbindlicherklärung; Verweis im Arbeitsvertrag",
              "Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Beschluss der Betriebsversammlung; Verweis im Arbeitsvertrag (Bezugnahmeklausel)"],
     "correct": 1,
     "explain": "Drei Wege: beiderseitige Tarifbindung (Sie sind Gewerkschaftsmitglied und Ihr Betrieb ist Mitglied im Arbeitgeberverband), "
                "Allgemeinverbindlicherklärung oder ein Verweis im Arbeitsvertrag (Bezugnahmeklausel). Nach § 3 TVG sind die Mitglieder der Tarifparteien tarifgebunden. Tarifgebundene Betriebe wenden den Tarif in der Praxis "
                "meist über den Arbeitsvertrag auch für Nicht-Gewerkschaftsmitglieder an.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Wie unterscheiden sich Flächentarifvertrag und Haustarifvertrag?",
     "opts": ["Flächentarif: zwischen Gewerkschaft und einem einzelnen Unternehmen; Haustarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region",
              "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region; Haustarif: zwischen Betriebsrat und Arbeitgeber eines Unternehmens",
              "Flächentarif: zwischen Gewerkschaft und Staat, gilt bundesweit für alle Branchen; Haustarif: zwischen Gewerkschaft und einem einzelnen Unternehmen",
              "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region; Haustarif: zwischen Gewerkschaft und einem einzelnen Unternehmen"],
     "correct": 3,
     "explain": "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband, gilt für eine Branche in einer Region (z. B. Kfz-Handwerk Bayern). "
                "Haustarif (Firmentarif): zwischen Gewerkschaft und einem einzelnen Unternehmen. Betriebsrat und Arbeitgeber schließen keine "
                "Tarifverträge, sondern Betriebsvereinbarungen. Kleine und mittlere Kfz-Betriebe sind meist über ihren Verband an den Flächentarif gebunden. Große Konzerne haben teils eigene Haustarife.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Begriffen aus dem Arbeitskampf die richtige Beschreibung zu.",
     "paare": [["Warnstreik", "Kurze Arbeitsniederlegung während laufender Verhandlungen nach Ende der Friedenspflicht"],
               ["Urabstimmung", "Die Gewerkschaftsmitglieder stimmen geheim über einen unbefristeten Streik ab"],
               ["Aussperrung", "Der Arbeitgeber schließt Beschäftigte von der Arbeit aus und zahlt keinen Lohn"],
               ["Wilder Streik", "Arbeitsniederlegung ohne Aufruf einer Gewerkschaft – rechtswidrig"],
               ["Streikgeld", "Unterstützung der Gewerkschaft für ihre streikenden Mitglieder"]],
     "ablenker": ["Lohnfortzahlung durch die Krankenkasse"],
     "explain": "Während Streik und Aussperrung zahlt der Arbeitgeber keinen Lohn. Gewerkschaftsmitglieder erhalten Streikgeld, "
                "Nichtmitglieder gehen leer aus.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Einzelfragen – Sozialversicherungen und Rente
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Zweigen der Sozialversicherung den Beitragssatz für das Jahr 2026 zu.",
     "paare": [["Rentenversicherung", "18,6 %"],
               ["Krankenversicherung (allgemeiner Satz)", "14,6 %"],
               ["Durchschnittlicher Zusatzbeitrag der Krankenkassen", "2,9 %"],
               ["Pflegeversicherung (mit Kind)", "3,6 %"],
               ["Arbeitslosenversicherung", "2,6 %"],
               ["Unfallversicherung", "Abhängig vom Gefahrtarif der Berufsgenossenschaft"]],
     "ablenker": ["19,9 %", "1,2 %"],
     "explain": "Werte 2026: RV 18,6 %, KV 14,6 % + Zusatzbeitrag der Kasse (Durchschnitt 2,9 %), PV 3,6 % (kinderlos ab 23 Jahren "
                "+0,6 % für den Arbeitnehmer), AV 2,6 %. Bis auf den PV-Zuschlag und die UV tragen AN und AG je die Hälfte.",
     "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Sie sind 25 Jahre alt, kinderlos und verdienen 2026 3.100 € brutto. Beitragssätze 2026: RV 18,6 %, KV 14,6 % plus 2,9 % "
          "Zusatzbeitrag Ihrer Kasse, PV 3,6 % plus 0,6 % Kinderlosenzuschlag, AV 2,6 %. Wie hoch ist Ihr gesamter "
          "Arbeitnehmeranteil zur Sozialversicherung?",
     "opts": ["655,65 €", "629,30 €", "674,25 €", "1.329,90 €"],
     "correct": 2,
     "explain": "AN-Anteile: RV 9,3 % + KV (14,6 % + 2,9 %) ÷ 2 = 8,75 % + PV 1,8 % + 0,6 % = 2,4 % + AV 1,3 % = 21,75 %. "
                "3.100 € × 21,75 % = 674,25 € (RV 288,30 € + KV 271,25 € + PV 74,40 € + AV 40,30 €).",
     "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Die Beitragsbemessungsgrenze der Rentenversicherung liegt 2026 bei 8.450 € im Monat. Was bedeutet das?",
     "opts": ["Vom Einkommen über 8.450 € werden keine Rentenbeiträge mehr erhoben",
              "Wer mehr als 8.450 € verdient, ist von der Rentenversicherung befreit",
              "Die höchste Monatsrente beträgt 8.450 €",
              "Ab 8.450 € Monatslohn zahlt der Arbeitgeber den Beitrag allein"],
     "correct": 0,
     "explain": "Die Beitragsbemessungsgrenze deckelt das beitragspflichtige Einkommen. 2026: RV/AV 8.450 €, KV/PV 5.812,50 € im Monat. "
                "Nicht verwechseln mit der Versicherungspflichtgrenze der Krankenversicherung.",
     "src": "Netz: krankenkassen.de, Rechengrößen 2026"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wer trägt 2026 den Kinderlosenzuschlag von 0,6 % in der Pflegeversicherung?",
     "opts": ["Der kinderlose Arbeitnehmer ab 23 Jahren allein",
              "Arbeitnehmer und Arbeitgeber je zur Hälfte, also je 0,3 %",
              "Der Arbeitgeber allein, zusätzlich zu seinem Anteil",
              "Die Pflegekasse aus Steuermitteln des Bundes"],
     "correct": 0,
     "explain": "Der Grundbeitrag 3,6 % wird geteilt (je 1,8 %). Kinderlose ab 23 zahlen 0,6 % zusätzlich allein → 2,4 % Arbeitnehmeranteil. "
                "Eltern mit mehreren Kindern unter 25 zahlen weniger.",
     "src": "Netz: lohn-info.de, Sozialversicherungsbeiträge 2026"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Bis zu welchem Monatsverdienst ist im Jahr 2026 ein Minijob möglich?",
     "opts": ["603 €", "556 €", "538 €", "450 €"],
     "correct": 0,
     "explain": "Die Minijob-Grenze ist an den Mindestlohn gekoppelt (10 Stunden pro Woche zum Mindestlohn). Mit dem Mindestlohn 2026 "
                "von 13,90 € ergibt das 603 € im Monat (13,90 € × 130 ÷ 3, aufgerundet). Frühere Grenzen: 2025 556 €, 2024 538 €, bis 09/2022 450 €.",
     "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"},
    {"cat": "WiSo", "level": 3, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Grundprinzipien der sozialen Sicherung die richtige Beschreibung zu.",
     "paare": [["Solidaritätsprinzip", "Beitrag nach Einkommen, Leistung nach Bedarf – Gesunde tragen die Kosten der Kranken mit"],
               ["Subsidiaritätsprinzip", "Zuerst hilft man sich selbst oder die Familie, der Staat hilft erst, wenn das nicht reicht"],
               ["Versicherungsprinzip", "Leistungen erhält, wer vorher Beiträge gezahlt hat (z. B. Rente)"],
               ["Versorgungsprinzip", "Leistungen aus Steuern für besondere Dienste oder Opfer für den Staat (z. B. Beamtenpension)"],
               ["Fürsorgeprinzip", "Hilfe aus Steuermitteln nach Prüfung der Bedürftigkeit (z. B. Sozialhilfe)"]],
     "explain": "Die Sozialversicherung beruht auf Versicherungs- und Solidaritätsprinzip. Versorgung und Fürsorge werden aus Steuern bezahlt.",
     "src": "FW (Lehrplan Politik und Gesellschaft 10.3.1)"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Seit 01.01.2026 gibt es die sogenannte Aktivrente. Was regelt sie?",
     "opts": ["Wer nach Erreichen der Regelaltersgrenze sozialversicherungspflichtig weiterarbeitet, kann bis zu 2.000 € im Monat steuerfrei verdienen",
              "Jeder kann ab 63 Jahren ohne Abschläge in Rente gehen, wenn er mindestens 35 Beitragsjahre hat",
              "Wer nach Erreichen der Regelaltersgrenze weiterarbeitet, bekommt zusätzlich zum Lohn automatisch 2.000 € Rente im Monat ausbezahlt",
              "Rentner müssen bis zum 70. Lebensjahr mindestens in Teilzeit weiterarbeiten, sonst wird die Rente gekürzt"],
     "correct": 0,
     "explain": "Aktivrente (Stand 2026): Steuerfreibetrag von bis zu 2.000 € monatlich für Arbeitslohn nach Erreichen der Regelaltersgrenze. "
                "Nicht für Minijobs, Selbstständige oder Frührentner vor der Regelaltersgrenze.",
     "src": "Netz: Bundesregierung / test.de, Aktivrente 2026"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Mit welchem Alter erreichen Sie (Geburtsjahrgang 2006) nach heutigem Recht (Stand 2026) die Regelaltersgrenze der Rentenversicherung?",
     "opts": ["65 Jahre", "67 Jahre", "63 Jahre", "68 Jahre"],
     "correct": 1,
     "explain": "Die Regelaltersgrenze wurde schrittweise angehoben und liegt für alle ab Jahrgang 1964 bei 67 Jahren.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Fällen die passende Leistung der gesetzlichen Rentenversicherung zu.",
     "paare": [["Ein Geselle kann nach einem Freizeitunfall dauerhaft nur noch 2 Stunden täglich arbeiten", "Rente wegen voller Erwerbsminderung"],
               ["Der Ehepartner eines Versicherten stirbt", "Witwen- bzw. Witwerrente"],
               ["Ein Kind verliert einen Elternteil", "Waisenrente"],
               ["Ein Mitarbeiter soll nach einer Bandscheiben-OP wieder arbeitsfähig werden", "Medizinische Rehabilitation"]],
     "ablenker": ["Arbeitslosengeld", "Verletztenrente der Berufsgenossenschaft"],
     "explain": "Volle Erwerbsminderung: weniger als 3 Stunden Arbeit täglich möglich. Bei einem Freizeitunfall ist nicht die "
                "Berufsgenossenschaft, sondern die Renten- bzw. Krankenversicherung zuständig. Grundsatz: Reha vor Rente.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 4,
     "q": "Sie stürzen auf dem direkten Weg zur Werkstatt mit dem Fahrrad und brechen sich das Handgelenk. Welche Antwort nennt die "
          "zuständige Versicherung und ihre Leistungen richtig?",
     "opts": ["Gesetzliche Krankenversicherung, weil der Unfall nicht im Betrieb passiert ist; Behandlung beim Hausarzt; Krankengeld nach der Lohnfortzahlung; Reha über die Rentenversicherung",
              "Gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist; Heilbehandlung beim Durchgangsarzt; Arbeitslosengeld nach der Lohnfortzahlung; Reha und ggf. Verletztenrente",
              "Gesetzliche Rentenversicherung, weil Ihre Erwerbsfähigkeit gefährdet ist; Heilbehandlung beim Hausarzt; Übergangsgeld ab dem ersten Tag; bei bleibenden Schäden Erwerbsminderungsrente",
              "Gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist; Heilbehandlung beim Durchgangsarzt; Verletztengeld nach der Lohnfortzahlung; Reha und ggf. Verletztenrente"],
     "correct": 3,
     "explain": "Zuständig ist die gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist. Leistungen: "
                "Heilbehandlung (Durchgangsarzt, Klinik, Medikamente), Verletztengeld nach Ende der Lohnfortzahlung, Rehabilitation und "
                "Umschulung, bei bleibenden Schäden Verletztenrente. Versichert sind Arbeitsunfälle, Wegeunfälle (direkter Weg) und Berufskrankheiten. Den Unfall muss der Betrieb der BG melden. "
                "Weitere Aufgabe der BG: Prävention durch Unfallverhütungsvorschriften.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort nennt drei Leistungen der Arbeitslosenversicherung?",
     "opts": ["Arbeitslosengeld; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Förderung von Weiterbildung und Umschulung",
              "Arbeitslosengeld; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Krankengeld bei längerer Krankheit",
              "Arbeitsvermittlung und Berufsberatung; Sozialhilfe für dauerhaft Erwerbsunfähige; Förderung von Weiterbildung und Umschulung",
              "Arbeitsvermittlung und Berufsberatung; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Erwerbsminderungsrente"],
     "correct": 0,
     "explain": "Leistungen: Arbeitslosengeld (60 % bzw. mit Kind 67 % des pauschalierten Nettoentgelts), Arbeitsvermittlung und "
                "Berufsberatung, Förderung von Weiterbildung und Umschulung, Kurzarbeitergeld. Krankengeld zahlt die Krankenkasse, "
                "Erwerbsminderungsrente die Rentenversicherung, Sozialhilfe das Sozialamt. Träger ist die Bundesagentur für Arbeit mit den Agenturen für Arbeit vor Ort. Auch Insolvenzgeld gehört zu den Leistungen.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Einzelfragen – Wahlen
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Welche Beschreibung des Wahlsystems der Bundestagswahl seit der Wahlrechtsreform 2023 (erstmals angewendet am 23.02.2025) ist richtig?",
     "opts": ["Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; mindestens 598 Sitze, Überhangmandate werden ausgeglichen; jeder Wahlkreissieger zieht ein",
              "Erststimme entscheidet über die Sitzverteilung; Zweitstimme für einen Wahlkreisbewerber; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; Wahlkreissieger nur mit Zweitstimmendeckung",
              "Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; Wahlkreissieger nur mit Zweitstimmendeckung",
              "Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; jeder Wahlkreissieger zieht sicher ein"],
     "correct": 2,
     "explain": "Mit der Erststimme wählt man einen Wahlkreisbewerber, die Zweitstimme für eine Landesliste entscheidet über die Sitzverteilung "
                "der Parteien. Der Bundestag hat fest 630 Sitze, Überhang- und Ausgleichsmandate gibt es nicht mehr (früher: mindestens 598 Sitze "
                "plus Überhang- und Ausgleichsmandate). Zweitstimmendeckung: Gewinnt eine Partei mehr Wahlkreise, als ihr Sitze nach Zweitstimmen zustehen, gehen die Wahlkreissieger mit den "
                "schwächsten Ergebnissen leer aus.",
     "src": "Netz: Bundestag, Urteil BVerfG 30.07.2024 zur Wahlrechtsreform 2023"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Eine Partei erhält bei der Bundestagswahl 4,2 % der Zweitstimmen und gewinnt 3 Wahlkreise direkt. Was gilt nach dem Stand 2026?",
     "opts": ["Sie zieht entsprechend ihrem Zweitstimmenanteil in den Bundestag ein (Grundmandatsklausel)",
              "Sie bekommt keinen einzigen Sitz, weil sie unter der 5-%-Hürde liegt und es keine Ausnahmen mehr gibt",
              "Nur die drei Wahlkreissieger ziehen ein, weitere Sitze bekommt die Partei nicht",
              "Sie bekommt automatisch 5 % der Sitze, weil sie die Hürde über Direktmandate erreicht"],
     "correct": 0,
     "explain": "Das Bundesverfassungsgericht hat am 30.07.2024 den geplanten Wegfall der Grundmandatsklausel für verfassungswidrig erklärt. "
                "Bis zu einer Neuregelung gilt: Mit mindestens 3 Direktmandaten zählt die Partei trotz weniger als 5 % bei der Sitzverteilung mit.",
     "src": "Netz: Bundestag, Urteil BVerfG 30.07.2024"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 4,
     "q": "Welche Aussage zur 5-%-Sperrklausel bei der Bundestagswahl ist richtig – zu Inhalt, Zweck, Nachteil und Geltung "
          "bei der Kommunalwahl in Bayern?",
     "opts": ["Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt auch bei der Kommunalwahl in Bayern",
              "Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt nicht bei der Kommunalwahl in Bayern",
              "Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: kleinen Parteien den Einzug erleichtern; Nachteil: das Parlament zersplittert; gilt nicht bei der Kommunalwahl in Bayern",
              "Sitze nur ab 5 % der Wahlberechtigten, Ausnahmen gibt es keine; Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt nicht bei der Kommunalwahl in Bayern"],
     "correct": 1,
     "explain": "Nur Parteien mit mindestens 5 % der Zweitstimmen erhalten Sitze (Ausnahme Grundmandatsklausel). Zweck: Zersplitterung des "
                "Parlaments verhindern, stabile Mehrheiten und Regierungen ermöglichen. Nachteil: Stimmen für kleine Parteien wirken sich "
                "nicht aus, die Wahlgleichheit wird eingeschränkt. Bei der Kommunalwahl in Bayern gibt es keine Sperrklausel. Die Sperrklausel ist eine Lehre aus der Weimarer Republik. Für den Bayerischen Landtag gilt ebenfalls eine 5-%-Hürde, "
                "für Gemeinderäte und Kreistage in Bayern nicht.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Bei der Bürgermeisterwahl am 08.03.2026 erhält Bewerberin A 44 %, Bewerber B 38 % und Bewerber C 18 % der gültigen Stimmen. Wie geht es weiter?",
     "opts": ["Zwei Wochen später findet eine Stichwahl zwischen A und B statt",
              "A ist gewählt, weil bei der Bürgermeisterwahl die einfache Mehrheit reicht",
              "Die Wahl wird nach vier Wochen mit allen drei Bewerbern wiederholt",
              "Der neue Gemeinderat wählt den Bürgermeister aus A und B"],
     "correct": 0,
     "explain": "Gewählt ist, wer mehr als die Hälfte der gültigen Stimmen erhält. Sonst folgt eine Stichwahl der beiden Bewerber mit den "
                "meisten Stimmen – 2026 am 22.03., also zwei Wochen nach der Hauptwahl.",
     "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Bei der Kommunalwahl in Ihrer Gemeinde sind 20 Gemeinderatsmitglieder zu wählen. Sie möchten kumulieren. Wie vielen "
          "Bewerbern können Sie höchstens die volle Stimmenzahl von je 3 Stimmen geben?",
     "opts": ["6 Bewerbern", "7 Bewerbern", "18 Bewerbern", "20 Bewerbern"],
     "correct": 0,
     "explain": "Sie haben 20 Stimmen (= Zahl der Sitze). Pro Bewerber höchstens 3: 20 ÷ 3 = 6 Rest 2 → 6 Bewerber mit je 3 Stimmen "
                "(18 Stimmen), die übrigen 2 Stimmen können Sie anderen Bewerbern geben.",
     "src": "FW"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 4,
     "q": "Sie wohnen in einer kreisangehörigen Gemeinde im Landkreis Bayreuth. Wen bzw. was haben Sie bei der bayerischen "
          "Kommunalwahl 2026 in der Regel gewählt?",
     "opts": ["Den Stadtrat und den Oberbürgermeister",
              "Den Gemeinderat, den Ersten Bürgermeister, den Bezirkstag und den Landtag",
              "Den Gemeinderat, den Ersten Bürgermeister, den Kreistag und den Regierungspräsidenten",
              "Den Gemeinderat, den Ersten Bürgermeister, den Kreistag und den Landrat"],
     "correct": 3,
     "explain": "In einer kreisangehörigen Gemeinde wählt man Gemeinderat, Ersten Bürgermeister, Kreistag und Landrat. Bezirkstag und "
                "Landtag werden gemeinsam zu einem anderen Termin gewählt, der Regierungspräsident wird ernannt. In einer kreisfreien Stadt wie der Stadt Bayreuth wählt man dagegen nur den Stadtrat und den Oberbürgermeister. "
                "„In der Regel“, weil Bürgermeister nach einer vorzeitigen Neuwahl teils zu anderen Terminen gewählt werden.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 4,
     "q": "Welche Antwort nennt die Voraussetzungen, um bei der Kommunalwahl in Bayern 2026 wählen zu dürfen?",
     "opts": ["Mindestens 16 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
              "Mindestens 18 Jahre; ausschließlich deutsche Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
              "Mindestens 18 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
              "Mindestens 18 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Jahren Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen"],
     "correct": 2,
     "explain": "Voraussetzungen: am Wahltag mindestens 18 Jahre alt, deutsche Staatsangehörigkeit oder die eines anderen EU-Staats, seit "
                "mindestens zwei Monaten Wohnsitz bzw. Lebensmittelpunkt im Wahlkreis (Gemeinde bzw. Landkreis), nicht vom Wahlrecht "
                "ausgeschlossen. EU-Bürger dürfen bei Kommunalwahlen mitwählen, bei Bundestags- und Landtagswahlen nicht. Wer im Wählerverzeichnis "
                "steht, bekommt eine Wahlbenachrichtigung und kann auch Briefwahl beantragen.",
     "src": "Netz: Gemeinde-Infoblätter / Europäisches Parlament München, Kommunalwahl 2026"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Der Freistaat Bayern überträgt den Gemeinden eine neue Aufgabe. Was verlangt das Konnexitätsprinzip dabei?",
     "opts": ["Die Gemeinden müssen die Aufgabe aus ihren eigenen Steuereinnahmen bezahlen, weil sie zur Selbstverwaltung gehört",
              "Der Freistaat muss für die Finanzierung sorgen und den Gemeinden die Mehrkosten ausgleichen („Wer bestellt, bezahlt“)",
              "Der Freistaat darf die Aufgabe erst übertragen, wenn die Bürger der Gemeinde in einem Bürgerentscheid zugestimmt haben",
              "Die Gemeinden müssen die Aufgabe übernehmen, dürfen dafür aber eine eigene Sondersteuer bei ihren Bürgern erheben"],
     "correct": 1,
     "explain": "Konnexität: Wer eine Aufgabe überträgt, muss auch für die Finanzierung sorgen („Wer bestellt, bezahlt“). Der Freistaat muss "
                "die Mehrkosten der Gemeinden ausgleichen (Bayerische Verfassung, Art. 83 Abs. 3). Das Konnexitätsprinzip schützt die kommunale Selbstverwaltung davor, dass ihr der Staat Aufgaben ohne Geld aufbürdet.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Funktionen von Wahlen die passende Beschreibung zu.",
     "paare": [["Legitimation", "Parlament und Regierung erhalten ihre Macht auf Zeit vom Volk"],
               ["Kontrolle", "Die Wähler können eine Regierung oder einen Bürgermeister abwählen"],
               ["Repräsentation", "Die Meinungen der Bevölkerung werden im Parlament abgebildet"],
               ["Integration", "Durch die Teilnahme fühlen sich die Bürger als Teil des Gemeinwesens"],
               ["Auswahl (Rekrutierung)", "Es wird bestimmt, welche Personen politische Ämter übernehmen"]],
     "explain": "Wahlen sind in der Demokratie das wichtigste Mittel der Bürger, Einfluss auf die Politik zu nehmen.",
     "src": "FW (Lehrplan Politik und Gesellschaft 11.3.1)"},

    # ------------------------------------------------------------------
    # Einzelfragen – Konjunktur und Wirtschaftspolitik
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 3,
     "q": "Welche Erklärung des Bruttoinlandsprodukts (BIP) und des Unterschieds zwischen nominalem und realem BIP ist richtig?",
     "opts": ["Wert aller in einem Jahr im Inland hergestellten Waren und Dienstleistungen (Endprodukte); nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation",
              "Wert aller in einem Jahr im Inland hergestellten Waren und Dienstleistungen (Endprodukte); nominal: preisbereinigt, ohne Inflation; real: zu aktuellen Preisen",
              "Wert aller in einem Jahr von Deutschen weltweit hergestellten Waren und Dienstleistungen; nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation",
              "Summe aller Umsätze der Unternehmen im Inland in einem Jahr, einschließlich Vorleistungen; nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation"],
     "correct": 0,
     "explain": "BIP: Wert aller Waren und Dienstleistungen (Endprodukte), die in einem Jahr im Inland hergestellt werden – Vorleistungen "
                "werden nicht doppelt gezählt. Nominales BIP: mit den aktuellen Preisen des Jahres. Reales BIP: preisbereinigt, zeigt das "
                "tatsächliche Wachstum ohne Inflation. Steigt das nominale BIP um 3 % bei 2 % Inflation, ist die Wirtschaft real nur um etwa 1 % gewachsen.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Ein Auffahrunfall mit anschließender Reparatur in Ihrer Werkstatt erhöht das BIP. Welche Antwort nennt richtige Kritikpunkte "
          "am BIP als Maß für Wohlstand und eine passende alternative Messgröße?",
     "opts": ["Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Verbraucherpreisindex",
              "Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; Hausarbeit und Ehrenamt werden doppelt gezählt; die Verteilung ist nicht erkennbar; Alternative: Human Development Index",
              "Reparaturen von Schäden werden aus dem BIP herausgerechnet; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Human Development Index",
              "Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Human Development Index"],
     "correct": 3,
     "explain": "Kritik: Reparaturen von Schäden (Unfälle, Umweltschäden) erhöhen das BIP, obwohl kein Wohlstand entsteht. Unbezahlte Arbeit "
                "(Hausarbeit, Pflege in der Familie, Ehrenamt) wird nicht erfasst. Die Verteilung von Einkommen und Vermögen ist nicht "
                "erkennbar. Alternativen: z. B. Human Development Index (HDI), Nationaler Wohlfahrtsindex oder OECD Better Life Index. "
                "Der Verbraucherpreisindex misst dagegen nur die Inflation. Das BIP misst nur Marktleistungen. Alternative Messgrößen beziehen z. B. Bildung, Gesundheit, Lebenserwartung oder Umwelt mit ein.",
     "src": "FW (Lehrplan Politik und Gesellschaft 12.1.8)"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie die Konjunkturindikatoren der richtigen Art zu.",
     "paare": [["ifo-Geschäftsklimaindex", "Frühindikator"],
               ["Auftragseingänge in der Industrie", "Frühindikator"],
               ["Industrieproduktion", "Präsenzindikator"],
               ["Veränderung des realen BIP", "Präsenzindikator"],
               ["Arbeitslosenquote", "Spätindikator"],
               ["Entwicklung der Verbraucherpreise", "Spätindikator"]],
     "explain": "Frühindikatoren zeigen die Entwicklung im Voraus (Erwartungen, Aufträge). Präsenzindikatoren beschreiben die aktuelle Lage. "
                "Spätindikatoren reagieren erst mit Verzögerung – Betriebe stellen erst ein, wenn der Aufschwung sicher ist.",
     "src": "FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Wie hat sich das reale Bruttoinlandsprodukt in Deutschland im Jahr 2025 entwickelt (Destatis, Januar 2026)?",
     "opts": ["Es ist um 0,2 % gewachsen, nach zwei Jahren mit Rückgang",
              "Es ist um 2,0 % geschrumpft, vor allem wegen der schwachen Industrie",
              "Es ist um 3,5 % gewachsen, so stark wie seit 2010 nicht mehr",
              "Es ist das dritte Jahr in Folge geschrumpft"],
     "correct": 0,
     "explain": "Nach Rückgängen 2023 und 2024 wuchs das reale BIP 2025 laut erster Schätzung des Statistischen Bundesamts leicht um 0,2 %. "
                "Für 2026 wurde ein etwas stärkeres Wachstum erwartet.",
     "src": "Netz: Destatis, Pressemitteilung 017/2026 (15.01.2026)"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Welches Ziel verfolgt die Europäische Zentralbank (EZB) mit ihrer Geldpolitik (Stand 2026)?",
     "opts": ["Eine Inflationsrate von mittelfristig 2 % im Euroraum",
              "Eine Arbeitslosenquote von unter 3 % im Euroraum",
              "Eine Inflationsrate von genau 0 %, also völlig stabile Preise",
              "Ein jährliches Wirtschaftswachstum von 5 %"],
     "correct": 0,
     "explain": "Vorrangiges Ziel der EZB ist die Preisniveaustabilität. Sie strebt eine Inflationsrate von 2 % auf mittlere Sicht an. "
                "Ihr wichtigstes Mittel ist der Leitzins.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "reihenfolge", "pkt": 4,
     "q": "Bringen Sie die Wirkungskette einer Leitzinssenkung der EZB in die richtige Reihenfolge.",
     "schritte": ["Die EZB senkt den Leitzins",
                  "Geschäftsbanken können sich günstiger Geld bei der Zentralbank leihen",
                  "Die Zinsen für Kredite sinken (z. B. Autofinanzierung, Investitionskredite)",
                  "Unternehmen und Haushalte nehmen mehr Kredite auf und investieren bzw. kaufen mehr",
                  "Die Nachfrage steigt, Produktion und Beschäftigung nehmen zu"],
     "explain": "Niedrige Zinsen beleben die Wirtschaft, können aber die Inflation anheizen. Gegen hohe Inflation erhöht die EZB deshalb den Leitzins.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie die Maßnahmen der nachfrageorientierten oder der angebotsorientierten Wirtschaftspolitik zu.",
     "paare": [["Der Staat baut in der Krise zusätzlich Straßen und Schulen", "Nachfrageorientiert"],
               ["Prämie beim Kauf eines Neuwagens gegen Verschrottung des Altwagens (wie 2009)", "Nachfrageorientiert"],
               ["Senkung der Unternehmenssteuern", "Angebotsorientiert"],
               ["Abbau von Bürokratie und Vorschriften für Betriebe", "Angebotsorientiert"],
               ["Senkung der Lohnnebenkosten", "Angebotsorientiert"]],
     "explain": "Nachfrageorientiert (Keynes): Der Staat stärkt die Nachfrage, vor allem antizyklisch in der Krise. Angebotsorientiert: "
                "bessere Bedingungen für Unternehmen (Kosten, Steuern, Regeln), damit sie investieren und Arbeitsplätze schaffen.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Zielen des magischen Vielecks die Größe zu, mit der man sie misst.",
     "paare": [["Stabilität des Preisniveaus", "Veränderung des Verbraucherpreisindex (Inflationsrate)"],
               ["Hoher Beschäftigungsstand", "Arbeitslosenquote"],
               ["Außenwirtschaftliches Gleichgewicht", "Außenbeitrag (Exporte minus Importe)"],
               ["Stetiges und angemessenes Wachstum", "Veränderung des realen BIP"],
               ["Schutz der Umwelt", "Ausstoß von Treibhausgasen (CO₂)"]],
     "ablenker": ["Höhe des Leitzinses"],
     "explain": "Die vier klassischen Ziele stehen im Stabilitäts- und Wachstumsgesetz von 1967. Umweltschutz und gerechte Verteilung "
                "kamen später als Erweiterung zum Vieleck dazu.",
     "src": "FW"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort nennt drei typische Auswirkungen einer Rezession auf ein Autohaus mit Werkstatt?",
     "opts": ["Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; die Preise steigen und Rabatte fallen weg",
              "Mehr Neuwagenverkäufe, weil Kunden in der Krise in Sachwerte investieren; Kunden schieben Wartung auf; Kurzarbeit",
              "Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; Kurzarbeit und weniger Neueinstellungen",
              "Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; mehr Neueinstellungen und Überstunden"],
     "correct": 2,
     "explain": "Typische Folgen: weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf, die Werkstatt hat "
                "weniger Aufträge; Kurzarbeit, weniger Neueinstellungen oder Ausbildungsplätze; stärkerer Preisdruck, mehr Rabatte. Autos sind langlebige Gebrauchsgüter: Ihr Kauf wird in unsicheren Zeiten zuerst verschoben. Deshalb reagiert der Kfz-Handel stark auf die Konjunktur.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Ihr Lohn steigt im August 2026 um 3,3 %. Die Inflationsrate beträgt im gleichen Zeitraum angenommen 2,0 %. Um wie viel "
          "Prozent steigt Ihr Reallohn ungefähr?",
     "opts": ["5,3 %", "1,3 %", "1,65 %", "−1,3 %"],
     "correct": 1,
     "explain": "Näherung: Reallohnveränderung ≈ Nominallohnveränderung − Inflationsrate = 3,3 % − 2,0 % = 1,3 %. "
                "Genau: 1,033 ÷ 1,020 − 1 ≈ 1,27 %.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Aufgabensatz „Betriebsversammlung im Autohaus“ (18 Aufgaben, 62 Punkte)
    # Schwerpunkt Wahl (Betrieb, Land, Gemeinde) und Konjunktur
    # ------------------------------------------------------------------
    # 1 Betriebsratswahl
    {"cat": "WiSo", "situation": B, "nr": 1, "level": 1, "typ": "mc", "pkt": 3,
     "q": "Im Frühjahr 2026 wurde in Ihrem Autohaus der Betriebsrat gewählt. In welchem Rhythmus und Zeitraum finden die "
          "regelmäßigen Betriebsratswahlen statt?",
     "opts": ["Alle 2 Jahre in der Zeit vom 1. Oktober bis 30. November, zuletzt im Herbst 2026",
              "Alle 5 Jahre gemeinsam mit der Landtagswahl, zuletzt im Herbst 2023",
              "Alle 4 Jahre in der Zeit vom 1. März bis 31. Mai, zuletzt im Frühjahr 2026",
              "Alle 6 Jahre gemeinsam mit der Kommunalwahl, zuletzt im März 2026"],
     "correct": 2,
     "explain": "Nach § 13 Betriebsverfassungsgesetz (BetrVG) finden die regelmäßigen Betriebsratswahlen alle vier Jahre zwischen "
                "1. März und 31. Mai statt (2022, 2026, nächste 2030); die Amtszeit beträgt vier Jahre. Alle zwei Jahre im Herbst "
                "wird die Jugend- und Auszubildendenvertretung gewählt. Mit Landtags- oder Kommunalwahlen haben Betriebsratswahlen nichts zu tun.",
     "src": "FW (BetrVG §§ 13, 21)"},
    # 2 Wahlrecht Betriebsrat
    {"cat": "WiSo", "situation": B, "nr": 2, "level": 2, "typ": "mc", "pkt": 4,
     "q": "Wer durfte im Autohaus den Betriebsrat wählen, und wer konnte selbst in den Betriebsrat gewählt werden?",
     "opts": ["Wählen: alle Arbeitnehmer ab 18 Jahren; gewählt werden: alle Arbeitnehmer ab 18 Jahren, die Mitglied einer Gewerkschaft sind",
              "Wählen: alle Arbeitnehmer ab 16 Jahren, auch Azubis; gewählt werden: Wahlberechtigte ab 18, die mindestens 6 Monate im Betrieb sind",
              "Wählen: alle Arbeitnehmer ab 16 Jahren, auch Azubis; gewählt werden: alle Wahlberechtigten ab 16 Jahren ohne Wartezeit",
              "Wählen: nur Gesellen und Angestellte, keine Auszubildenden; gewählt werden: Wahlberechtigte ab 18, die mindestens 6 Monate im Betrieb sind"],
     "correct": 1,
     "explain": "Wahlberechtigt sind alle Arbeitnehmer ab 16 Jahren, auch Auszubildende (§ 7 BetrVG, seit 2021). Wählbar sind "
                "Wahlberechtigte ab 18 Jahren, die dem Betrieb seit mindestens sechs Monaten angehören (§ 8). Eine Gewerkschafts"
                "mitgliedschaft ist nicht nötig. Einen Betriebsrat gibt es ab 5 ständigen Arbeitnehmern; bei 51–100 Wahlberechtigten "
                "hat er 5 Mitglieder.",
     "src": "FW (BetrVG §§ 1, 7, 8, 9)"},
    # 3 Wer regelt was
    {"cat": "WiSo", "situation": B, "nr": 3, "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Auf der Betriebsversammlung geht es um verschiedene Regelungen. Ordnen Sie zu, wo sie üblicherweise festgelegt sind.",
     "paare": [["Höhe der Stundenlöhne in den tarifgebundenen Kfz-Betrieben Bayerns", "Tarifvertrag (Gewerkschaft und Arbeitgeberverband)"],
               ["Beginn und Ende der täglichen Arbeitszeit und Pausen im Autohaus", "Betriebsvereinbarung (Betriebsrat und Arbeitgeber)"],
               ["Ihre persönliche Zulage über Tarif und Ihr Firmenwagen", "Arbeitsvertrag (Sie und der Arbeitgeber)"],
               ["Mindesturlaub von 24 Werktagen pro Jahr", "Gesetz (Bundesurlaubsgesetz)"]],
     "ablenker": ["Satzung der Handwerkskammer"],
     "explain": "Löhne vereinbaren die Tarifpartner. Der Betriebsrat darf Löhne, die üblicherweise im Tarif geregelt sind, nicht per "
                "Betriebsvereinbarung festlegen (Tarifvorbehalt, § 77 Abs. 3 BetrVG) – außer der Tarifvertrag erlaubt es mit einer "
                "Öffnungsklausel. Bei der Lage der Arbeitszeit hat der Betriebsrat dagegen ein Mitbestimmungsrecht (§ 87 BetrVG). "
                "Das Bundesurlaubsgesetz garantiert 24 Werktage (Mo–Sa), also 20 Arbeitstage bei der 5-Tage-Woche.",
     "src": "FW (BetrVG §§ 77, 87; BUrlG)"},
    # 4 JAV
    {"cat": "WiSo", "situation": B, "nr": 4, "level": 1, "typ": "mc", "pkt": 2,
     "q": "Im Herbst 2026 wird im Autohaus auch die Jugend- und Auszubildendenvertretung (JAV) gewählt. Wer darf sie wählen?",
     "opts": ["Nur Auszubildende, die bereits volljährig sind, weil Minderjährige nicht wählen dürfen",
              "Alle Arbeitnehmer unter 18 Jahren und alle Auszubildenden unter 25 Jahren im Betrieb",
              "Alle Beschäftigten des Betriebs, weil die JAV ein Ausschuss des Betriebsrats ist",
              "Nur Mitglieder der Gewerkschaftsjugend, weil die IG Metall die JAV-Mitglieder stellt"],
     "correct": 1,
     "explain": "Wahlberechtigt sind alle Arbeitnehmer unter 18 Jahren und alle Auszubildenden unter 25 Jahren (§§ 60, 61 BetrVG). "
                "Die JAV wird für zwei Jahre gewählt, regelmäßig vom 1. Oktober bis 30. November (2024, 2026). Sie ist kein Teil des "
                "Betriebsrats, arbeitet aber eng mit ihm zusammen und setzt sich z. B. für die Qualität der Ausbildung ein.",
     "src": "FW (BetrVG §§ 60–64)"},
    # 5 Konjunkturphasen im Bild
    {"cat": "WiSo", "situation": B, "nr": 5, "level": 1, "typ": "zuordnung", "pkt": 4, "bild": KONJ,
     "q": "Die Geschäftsführung zeigt ein Schaubild zum Konjunkturverlauf. Ordnen Sie den Nummern ① bis ④ die Konjunkturphase zu.",
     "paare": [["Phase ①", "Aufschwung (Expansion)"],
               ["Phase ②", "Hochkonjunktur (Boom)"],
               ["Phase ③", "Abschwung (Rezession)"],
               ["Phase ④", "Tiefstand (Depression)"]],
     "ablenker": ["Stagnation am Trend"],
     "explain": "Nach dem unteren Wendepunkt A steigt die Wirtschaftsleistung wieder (Aufschwung ①). Um den oberen Wendepunkt B liegt "
                "die Hochkonjunktur ②, danach sinkt die Leistung (Abschwung ③) bis zum Tiefstand ④. Die gestrichelte Linie ist der "
                "langfristige Wachstumstrend, um den die tatsächliche Entwicklung schwankt.",
     "src": "Eigenes Diagramm"},
    # 6 Lage aus Indikatoren bestimmen
    {"cat": "WiSo", "situation": B, "nr": 6, "level": 3, "typ": "mc", "pkt": 4, "bild": KONJ,
     "q": "Der Verkaufsleiter berichtet: „Die Auftragseingänge für Neuwagen gehen seit Monaten zurück, die Hersteller produzieren "
          "aber noch auf hohem Niveau, und Kurzarbeit gibt es bisher nicht.“ Wo im Schaubild befindet sich die Wirtschaft am ehesten?",
     "opts": ["Kurz nach Punkt A am Beginn von Phase ①: Die Aufträge fallen, weil die Kunden auf noch niedrigere Preise warten",
              "Mitten in Phase ④: Sinkende Aufträge zeigen, dass der Tiefstand erreicht ist und die Kurzarbeit gerade endet",
              "Genau bei Punkt A: Sinkende Aufträge bei noch hoher Produktion sind das Kennzeichen des unteren Wendepunkts",
              "Kurz nach Punkt B am Beginn von Phase ③: Der Frühindikator fällt schon, Präsenz- und Spätindikatoren noch nicht"],
     "correct": 3,
     "explain": "Auftragseingänge sind ein Frühindikator, die Produktion ist ein Präsenzindikator, Arbeitsmarkt und Kurzarbeit sind "
                "Spätindikatoren. Wenn nur der Frühindikator nachgibt, ist der obere Wendepunkt B gerade überschritten – der Abschwung ③ "
                "beginnt. Am Punkt A wären Produktion und Beschäftigung niedrig, nicht hoch.",
     "src": "Eigenes Diagramm / FW"},
    # 7 Werkstatt trotz Flaute ausgelastet
    {"cat": "WiSo", "situation": B, "nr": 7, "level": 2, "typ": "mc", "pkt": 3,
     "q": "Obwohl der Neuwagenverkauf schwach ist, ist die Werkstatt gut ausgelastet. Welche Erklärung ist am wahrscheinlichsten?",
     "opts": ["Kunden verschieben den Neukauf und lassen stattdessen ihr älteres Auto warten und reparieren",
              "Im Abschwung steigen die Werkstattpreise stark, deshalb erledigen Kunden Reparaturen vor der nächsten Erhöhung",
              "Weil weniger Neuwagen verkauft werden, schreibt der Staat seit 2026 häufigere Hauptuntersuchungen vor",
              "Neuwagen haben im Abschwung mehr Mängel, weil die Hersteller sparen, und kommen deshalb öfter in die Werkstatt"],
     "correct": 0,
     "explain": "Autos sind langlebige Gebrauchsgüter: Ihren Kauf kann man verschieben, wenn die Zukunft unsicher ist. Die Kunden fahren "
                "ihr Auto länger, der Fahrzeugbestand wird älter, und Wartung und Verschleißreparaturen nehmen zu. Deshalb ist das "
                "Werkstattgeschäft weniger konjunkturabhängig als der Verkauf und stabilisiert das Autohaus im Abschwung.",
     "src": "FW"},
    # 8 Art der Inflation 2026
    {"cat": "WiSo", "situation": B, "nr": 8, "level": 2, "typ": "mc", "pkt": 3,
     "q": "Laut Statistischem Bundesamt lag die Inflationsrate im September 2026 bei 3,3 %, vor allem weil Energie und Kraftstoffe "
          "deutlich teurer wurden. Um welche Art von Inflation handelt es sich in erster Linie?",
     "opts": ["Nachfrageinflation: Die Verbraucher kaufen so viel, dass die Betriebe mit der Produktion nicht nachkommen und die Preise erhöhen",
              "Kosteninflation: Teurere Energie verteuert Produktion und Transport, die Betriebe geben die Kosten über die Preise weiter",
              "Importierte Deflation: Billige Waren aus dem Ausland drücken das Preisniveau, deshalb steigt die Inflationsrate",
              "Geldmengeninflation: Der Staat lässt mehr Bargeld drucken, um die gestiegenen Energiepreise selbst zu bezahlen"],
     "correct": 1,
     "explain": "Im September 2026 waren Energieprodukte 14,9 % und Kraftstoffe 37,1 % teurer als ein Jahr zuvor, die Kerninflation "
                "(ohne Energie und Nahrungsmittel) lag nur bei 2,4 %. Das spricht für eine Kosteninflation (Angebotsschock): Höhere "
                "Kosten werden über die Preise weitergegeben. Bei einer Nachfrageinflation würden die Preise auf breiter Front wegen zu "
                "hoher Nachfrage steigen. Geld „druckt“ nicht der Staat – über die Geldpolitik entscheidet die EZB.",
     "src": "Netz: Destatis, Pressemitteilung 364/2026 (13.10.2026)"},
    # 9 Reallohn
    {"cat": "WiSo", "situation": B, "nr": 9, "level": 3, "typ": "mc", "pkt": 3,
     "q": "Ihr Tariflohn liegt seit August 2026 um 3,3 % höher als ein Jahr zuvor. Die Inflationsrate betrug im September 2026 "
          "ebenfalls 3,3 % (gegenüber dem Vorjahresmonat). Wie hat sich Ihr Reallohn im Vergleich zum Vorjahr ungefähr entwickelt?",
     "opts": ["Er ist um etwa 6,6 % gestiegen, weil Lohnerhöhung und Inflationsrate zusammengezählt werden",
              "Er ist etwa gleich geblieben: Die Lohnerhöhung gleicht den Preisanstieg aus, die Kaufkraft steigt nicht",
              "Er ist um etwa 3,3 % gesunken, weil die Inflation die Lohnerhöhung und zusätzlich einen Teil des Lohns auffrisst",
              "Er ist um 3,3 % gestiegen, weil der Reallohn nur vom Tarifvertrag abhängt und nicht von den Preisen"],
     "correct": 1,
     "explain": "Reallohnveränderung ≈ Nominallohnveränderung − Inflationsrate = 3,3 % − 3,3 % ≈ 0 %. Sie bekommen zwar mehr Euro, "
                "können sich davon aber nicht mehr kaufen als ein Jahr zuvor. Der Reallohn misst die Kaufkraft des Lohns.",
     "src": "FW / Netz: Destatis PM 364/2026, IG Metall Kfz-Tarif 2025"},
    # 10 Leitzinserhöhung
    {"cat": "WiSo", "situation": B, "nr": 10, "level": 2, "typ": "mc", "pkt": 4,
     "q": "Wegen der steigenden Inflation wird über die Europäische Zentralbank (EZB) diskutiert. Wie wirkt eine Leitzinserhöhung "
          "typischerweise auf das Autohaus?",
     "opts": ["Autokredite werden billiger, weil die Banken mehr Geld von der EZB bekommen; der Neuwagenverkauf zieht deshalb sofort deutlich an",
              "Die EZB legt mit dem Leitzins direkt die Listenpreise für Neuwagen fest; das Autohaus muss seine Preise deshalb senken",
              "Autokredite und Leasing werden teurer, weniger Kunden finanzieren einen Kauf; die Nachfrage sinkt, der Preisanstieg wird gebremst",
              "Die Leitzinserhöhung senkt sofort die Kraftstoffpreise, weil die EZB die Energiepreise für den ganzen Euroraum festlegt"],
     "correct": 2,
     "explain": "Steigt der Leitzins, leihen sich die Banken teurer Geld bei der Zentralbank und verlangen höhere Kreditzinsen. Kredit"
                "finanzierte Käufe und Investitionen gehen zurück, die Nachfrage sinkt, der Preisauftrieb lässt nach. Nachteil "
                "(Zielkonflikt): Das bremst auch Wachstum und Beschäftigung – der Autohandel spürt das stark. Weltmarktpreise für "
                "Energie legt die EZB nicht fest; gegen eine Kosteninflation wirkt Zinspolitik deshalb nur langsam.",
     "src": "FW"},
    # 11 Kurzarbeit
    {"cat": "WiSo", "situation": B, "nr": 11, "level": 2, "typ": "mc", "pkt": 3,
     "q": "Die Geschäftsführung erwägt Kurzarbeit im Verkauf, falls der Absatz weiter einbricht. Welche Aussage zum Kurzarbeitergeld ist richtig?",
     "opts": ["Die Krankenkasse zahlt den vollen Bruttolohn für die ausgefallenen Stunden, damit kein Beschäftigter Einbußen hat",
              "Der Arbeitgeber zahlt den ausgefallenen Lohn allein weiter und bekommt ihn später vom Finanzamt als Steuergutschrift vollständig erstattet",
              "Die Beschäftigten werden vorübergehend entlassen und bekommen Arbeitslosengeld, bis die Aufträge wieder steigen",
              "Die Agentur für Arbeit ersetzt einen Teil des ausgefallenen Nettolohns (60 %, mit Kind 67 %); die Arbeitsplätze bleiben erhalten"],
     "correct": 3,
     "explain": "Kurzarbeitergeld ist eine Leistung der Arbeitslosenversicherung (Bundesagentur für Arbeit) bei vorübergehendem, "
                "erheblichem Arbeitsausfall: 60 % bzw. mit Kind 67 % der Nettoentgeltdifferenz. Ziel ist, Fachkräfte zu halten "
                "statt zu entlassen. Der Arbeitgeber zeigt die Kurzarbeit bei der Agentur für Arbeit an; gibt es einen Betriebsrat, "
                "muss er zustimmen (Mitbestimmung nach § 87 BetrVG).",
     "src": "FW"},
    # 12 Kaufprämie
    {"cat": "WiSo", "situation": B, "nr": 12, "level": 3, "typ": "mc", "pkt": 3,
     "q": "Ein Kollege fordert, der Staat solle wie 2009 eine Prämie für den Kauf von Neuwagen zahlen. Welche Einordnung ist richtig?",
     "opts": ["Angebotsorientierte Politik: Die Prämie senkt die Produktionskosten der Hersteller; Nachteil: Die Tariflöhne der Branche sinken",
              "Nachfrageorientierte, antizyklische Politik: Sie belebt die Nachfrage; Nachteile: Mitnahme- und Vorzieheffekte, Kosten für den Staat",
              "Geldpolitik der EZB: Die Prämie erhöht die Geldmenge im Euroraum; Nachteil: Sie gilt nur für Fahrzeuge aus dem Euroraum",
              "Prozyklische Politik: Die Prämie verstärkt den Abschwung bewusst, damit schwache Betriebe schneller und endgültig vom Markt verschwinden"],
     "correct": 1,
     "explain": "Die Umweltprämie („Abwrackprämie“) 2009 war ein staatlicher Nachfrageimpuls in der Rezession (Keynes, antizyklisch). "
                "Mitnahmeeffekt: Kunden, die ohnehin gekauft hätten, kassieren die Prämie. Vorzieheffekt: Käufe werden nur vorgezogen und "
                "fehlen danach. Bezahlt wird sie aus Steuern oder neuen Schulden.",
     "src": "FW"},
    # 13 Landtagswahlrecht Bayern
    {"cat": "WiSo", "situation": B, "nr": 13, "level": 2, "typ": "mc", "pkt": 4,
     "q": "In der Pause geht es um die nächste Landtagswahl in Bayern (regulär 2028). Welche Aussage zum bayerischen Landtagswahlrecht ist richtig?",
     "opts": ["Wie bei der Bundestagswahl entscheidet allein die Zweitstimme über die Sitzverteilung; die Erststimme wählt nur den Abgeordneten im eigenen Stimmkreis",
              "Erst- und Zweitstimme werden zu Gesamtstimmen addiert, die über die Sitzverteilung entscheiden; mit der Zweitstimme wählt man eine Person der Liste",
              "Es gibt nur eine Stimme für eine Partei; die Abgeordneten bestimmt danach der Landtagspräsident aus den Parteilisten",
              "Erst- und Zweitstimme werden zu Gesamtstimmen addiert; eine Sperrklausel gibt es aber wie bei der Kommunalwahl in Bayern nicht, jede Stimme zählt"],
     "correct": 1,
     "explain": "Mit der Erststimme wählt man einen Bewerber im Stimmkreis (91 Stimmkreise), mit der Zweitstimme einen Bewerber auf der "
                "Liste des Wahlkreises (7 Wahlkreise = Regierungsbezirke) – so kann man die Reihenfolge der Liste verändern. Beide Stimmen "
                "zählen zusammen als Gesamtstimmen für die Sitzverteilung. Es gilt eine 5-%-Hürde auf die Gesamtstimmen. Wahlperiode: 5 Jahre.",
     "src": "Netz: bpb, Fakten zur Landtagswahl in Bayern 2023"},
    # 14 203 Abgeordnete
    {"cat": "WiSo", "situation": B, "nr": 14, "level": 3, "typ": "mc", "pkt": 2,
     "q": "Laut Bayerischer Verfassung hat der Landtag 180 Abgeordnete. Nach der Wahl 2023 sind es aber 203. Woran liegt das?",
     "opts": ["Die 23 zusätzlichen Sitze gehen an Vertreter der sieben Bezirkstage, die automatisch auch Mitglied im Landtag sind",
              "Im bayerischen Landtagswahlrecht gibt es – anders als im Bund – weiterhin Überhang- und Ausgleichsmandate",
              "Seit der Wahlrechtsreform 2023 hat der Landtag wie der Bundestag eine feste, größere Sitzzahl",
              "Parteien unter 5 % erhalten in Bayern zusätzliche Sitze, damit auch kleine Parteien vertreten sind"],
     "correct": 1,
     "explain": "Gewinnt eine Partei mehr Stimmkreise direkt, als ihr nach Gesamtstimmen Sitze zustehen, behält sie diese Überhangmandate; "
                "die anderen Parteien erhalten dafür Ausgleichsmandate. 2023 ergab das 203 statt 180 Abgeordnete. Im Bundestag gibt es "
                "seit der Reform 2023 keine Überhang- und Ausgleichsmandate mehr (fest 630 Sitze).",
     "src": "Netz: Bayerischer Landtag, Volkshandbuch 19. Wahlperiode"},
    # 15 Volksgesetzgebung Bayern
    {"cat": "WiSo", "situation": B, "nr": 15, "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Kollegen wollen ein Volksbegehren in Bayern unterstützen. Bringen Sie die Stufen der Volksgesetzgebung in die richtige Reihenfolge.",
     "schritte": ["Antrag auf Zulassung mit mindestens 25.000 Unterschriften von Stimmberechtigten",
                  "Prüfung und Zulassung durch das Innenministerium (im Streitfall entscheidet der Verfassungsgerichtshof)",
                  "Volksbegehren: Mindestens 10 % der Stimmberechtigten tragen sich innerhalb von 14 Tagen im Rathaus ein",
                  "Der Landtag berät den Gesetzentwurf und kann ihn annehmen oder einen eigenen Entwurf dagegenstellen",
                  "Volksentscheid: Alle Stimmberechtigten stimmen ab, wenn der Landtag den Entwurf nicht unverändert annimmt"],
     "explain": "Die Bayerische Verfassung (Art. 74) erlaubt Gesetzgebung durch das Volk. Nach dem erfolgreichen Volksbegehren muss sich "
                "der Landtag mit dem Entwurf befassen. Lehnt er ihn ab, entscheiden die Bürger im Volksentscheid. In der Gemeinde "
                "heißt das Gegenstück Bürgerbegehren und Bürgerentscheid.",
     "src": "Netz: Bayerische Verfassung Art. 74 / Landeswahlgesetz"},
    # 16 Bürgerentscheid
    {"cat": "WiSo", "situation": B, "nr": 16, "level": 2, "typ": "mc", "pkt": 3,
     "q": "In Ihrer Stadt soll über eine Umgehungsstraße am Gewerbegebiet entschieden werden. Bürger sammeln Unterschriften für "
          "einen Bürgerentscheid. Welche Aussage ist richtig?",
     "opts": ["Das Bürgerbegehren beantragt die Abstimmung; beim Bürgerentscheid stimmen die Bürger ab, das Ergebnis wirkt wie ein Stadtratsbeschluss",
              "Beim Bürgerentscheid stimmen die Bürger ab; das Ergebnis ist aber nur eine unverbindliche Empfehlung, die der Stadtrat jederzeit übergehen kann",
              "Das Bürgerbegehren muss zuerst vom Bayerischen Landtag genehmigt werden; danach stimmen alle Bürger Bayerns darüber ab",
              "Beim Bürgerentscheid stimmt nur der Stadtrat ab; die Bürger dürfen vorher in einer Bürgerversammlung ihre Meinung sagen"],
     "correct": 0,
     "explain": "Bayerische Gemeindeordnung (Art. 18a): Mit dem Bürgerbegehren (Unterschriften) beantragen Bürger einen Bürgerentscheid. "
                "Beim Bürgerentscheid entscheidet die Mehrheit, wenn sie einen Mindestanteil der Stimmberechtigten erreicht (abhängig "
                "von der Gemeindegröße). Das Ergebnis hat die Wirkung eines Gemeinderatsbeschlusses und kann ein Jahr lang nur durch "
                "einen neuen Bürgerentscheid geändert werden.",
     "src": "FW (Gemeindeordnung Bayern Art. 18a)"},
    # 17 Wahlen vergleichen
    {"cat": "WiSo", "situation": B, "nr": 17, "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie die Merkmale der passenden Wahl zu (Stand 2026).",
     "paare": [["Man darf einem Bewerber bis zu 3 Stimmen geben", "Kommunalwahl in Bayern"],
               ["Erst- und Zweitstimme zählen zusammen für die Sitzverteilung", "Landtagswahl in Bayern"],
               ["Fest 630 Sitze, keine Überhang- und Ausgleichsmandate", "Bundestagswahl"],
               ["Amtszeit 6 Jahre, keine Sperrklausel", "Kommunalwahl in Bayern"],
               ["Wahlperiode 5 Jahre, 5-%-Hürde auf die Gesamtstimmen", "Landtagswahl in Bayern"]],
     "ablenker": ["Europawahl"],
     "explain": "Kommunalwahl Bayern: Kumulieren (bis 3 Stimmen) und Panaschieren, 6 Jahre, keine Sperrklausel, auch EU-Bürger wählen mit. "
                "Landtagswahl Bayern: Gesamtstimmen aus Erst- und Zweitstimme, 5-%-Hürde, 5 Jahre. Bundestagswahl: nur die Zweitstimme "
                "verteilt die Sitze, fest 630 Sitze seit der Reform 2023, Wahlperiode 4 Jahre.",
     "src": "FW / Netz: bpb, Bundestag"},
    # 18 Gewerbesteuer
    {"cat": "WiSo", "situation": B, "nr": 18, "level": 3, "typ": "mc", "pkt": 4,
     "q": "Im Abschwung klagen viele Gemeinden über Löcher im Haushalt. Welche Steuer ist für Gemeinden die wichtigste eigene "
          "Einnahme und schwankt stark mit der Konjunktur?",
     "opts": ["Die Grundsteuer, weil sie bei jedem Abschwung neu auf die Hausbesitzer umgelegt wird",
              "Die Kfz-Steuer, weil sie an die Zahl der in der Stadt verkauften Neuwagen gekoppelt ist",
              "Die Gewerbesteuer, weil sie vom Ertrag der Betriebe in der Gemeinde abhängt",
              "Die Umsatzsteuer, weil die Gemeinde ihren Satz selbst festlegt und sie vollständig behält"],
     "correct": 2,
     "explain": "Die Gewerbesteuer hängt vom Gewerbeertrag der Betriebe ab; den Hebesatz legt die Gemeinde selbst fest. Im Abschwung "
                "sinken die Gewinne und damit die Einnahmen stark. Die Grundsteuer ist dagegen stabil, die Kfz-Steuer steht dem Bund zu, "
                "von der Umsatzsteuer bekommen die Gemeinden nur einen kleinen Anteil zu einem bundesweit festen Satz. Folge: Gemeinden "
                "sparen im Abschwung oft bei freiwilligen Aufgaben – das wirkt prozyklisch.",
     "src": "FW"},

    # ------------------------------------------------------------------
    # Weitere Einzelfragen – Tarifvertrag (Ausbau 10/2026)
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 1, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Funktionen des Tarifvertrags die passende Beschreibung zu.",
     "paare": [["Schutzfunktion", "Der einzelne Arbeitnehmer wird vor einseitig diktierten, schlechten Arbeitsbedingungen geschützt"],
               ["Ordnungsfunktion", "Einheitliche Regeln für viele Betriebe erleichtern Kalkulation und Verwaltung"],
               ["Friedensfunktion", "Während der Laufzeit sind Streiks und Aussperrungen über geregelte Inhalte ausgeschlossen"],
               ["Verteilungsfunktion", "Die Beschäftigten werden am wirtschaftlichen Erfolg und am Produktivitätsfortschritt beteiligt"]],
     "ablenker": ["Der Staat legt über den Tarifvertrag die Steuersätze fest"],
     "explain": "Allein wäre der einzelne Arbeitnehmer dem Arbeitgeber meist unterlegen – der Tarifvertrag schützt ihn. Für die Betriebe "
                "schafft er gleiche Wettbewerbsbedingungen und Planungssicherheit, für beide Seiten Ruhe während der Laufzeit. "
                "Über Lohnerhöhungen werden die Beschäftigten am Erfolg beteiligt.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Ein Manteltarifvertrag ist abgelaufen, ein neuer ist noch nicht abgeschlossen. Was gilt bis dahin für die bestehenden Arbeitsverhältnisse?",
     "opts": ["Es gilt nur noch das Gesetz, also z. B. 24 Werktage Urlaub, bis ein neuer Tarifvertrag in Kraft tritt",
              "Die bisherigen Regelungen gelten weiter (Nachwirkung), bis sie durch eine neue Abmachung ersetzt werden",
              "Der Arbeitgeber darf die Arbeitsbedingungen bis zum neuen Abschluss einseitig per Aushang festlegen",
              "Alle Arbeitsverhältnisse ruhen ohne Lohn, bis sich die Tarifpartner auf einen neuen Vertrag geeinigt haben"],
     "correct": 1,
     "explain": "Nach § 4 Abs. 5 Tarifvertragsgesetz wirken die Regelungen eines abgelaufenen Tarifvertrags nach, bis sie durch eine andere "
                "Abmachung (neuer Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag) ersetzt werden. Es entsteht also keine Lücke. "
                "Die Friedenspflicht endet aber mit dem Ablauf.",
     "src": "FW (TVG § 4 Abs. 5)"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Der Entgelttarifvertrag im bayerischen Kfz-Handwerk läuft laut Abschluss 2025 bis Ende Mai 2027. Was ändert sich danach?",
     "opts": ["Die Löhne fallen automatisch auf den gesetzlichen Mindestlohn zurück, bis ein neuer Vertrag gilt",
              "Der Vertrag verlängert sich automatisch um zwei Jahre, neue Verhandlungen sind erst 2029 möglich",
              "Die Handwerkskammer legt die Löhne fest, bis sich die Tarifpartner wieder geeinigt haben",
              "Die Friedenspflicht für die Entgelte endet; die IG Metall darf dann zu Warnstreiks aufrufen, um Druck zu machen"],
     "correct": 3,
     "explain": "Mit dem Ende der Laufzeit endet die Friedenspflicht – Warnstreiks während der neuen Verhandlungen sind dann zulässig. "
                "Die bisherigen Entgelte gelten weiter (Nachwirkung), sie fallen nicht auf den Mindestlohn zurück. Die Handwerkskammer "
                "verhandelt keine Löhne.",
     "src": "Netz: IG Metall / DGB-Tarifmeldung Kfz-Handwerk 2025"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Eine Auszubildende im bayerischen Kfz-Handwerk bekam vor Juli 2025 eine Ausbildungsvergütung von 1.000 € (Beispielwert). "
          "Laut Tarifabschluss 2025 stieg sie ab Juli 2025 um 80 € und ab August 2026 um weitere 3,3 %. Wie hoch ist sie ab August 2026?",
     "opts": ["1.113,00 €", "1.115,64 €", "1.033,00 €", "1.080,00 €"],
     "correct": 1,
     "explain": "Stufe 1: 1.000 € + 80 € = 1.080 €. Stufe 2: 1.080 € × 1,033 = 1.115,64 €. Wer zuerst 3,3 % auf 1.000 € rechnet und dann "
                "80 € addiert, kommt auf 1.113 € – die Prozentstufe gilt aber für den bereits erhöhten Betrag.",
     "src": "Netz: IG Metall / DGB-Tarifmeldung Kfz-Handwerk 2025"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Der gesetzliche Mindestlohn beträgt 2026 13,90 € pro Stunde und steigt zum 01.01.2027 auf 14,60 €. Wie kommt seine Höhe zustande?",
     "opts": ["Die Mindestlohnkommission (Arbeitgeber- und Gewerkschaftsseite) schlägt sie vor, die Bundesregierung setzt sie per Verordnung fest",
              "Die IG Metall legt sie in ihrem Tarifvertrag fest, danach gilt sie automatisch für alle Branchen in Deutschland",
              "Der Bundestag beschließt jedes Jahr ein neues Mindestlohngesetz mit dem Betrag, den die Bundesagentur für Arbeit vorschlägt",
              "Jedes Bundesland legt einen eigenen Mindestlohn fest; Bayern orientiert sich dabei am Tariflohn im Handwerk"],
     "correct": 0,
     "explain": "Nach dem Mindestlohngesetz beschließt die Mindestlohnkommission (stimmberechtigt: Vertreter der Arbeitgeber und der "
                "Gewerkschaften, dazu beratende Wissenschaftler) die Anpassung, die Bundesregierung macht sie per Rechtsverordnung "
                "verbindlich. Der Mindestlohn ist eine Untergrenze; Tariflöhne liegen meist darüber. Mit ihm steigt auch die Minijob-Grenze.",
     "src": "Netz: Mindestlohnkommission, Beschluss 06/2025"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Ein Arbeitgeber sagt im Vorstellungsgespräch, er stelle nur Bewerber ein, die nicht in einer Gewerkschaft sind. Wie ist das zu beurteilen?",
     "opts": ["Zulässig: In Handwerksbetrieben mit weniger als 100 Beschäftigten gilt die Koalitionsfreiheit nicht",
              "Zulässig: Der Arbeitgeber darf sich seine Mitarbeiter frei aussuchen, auch nach der Gewerkschaftszugehörigkeit",
              "Unzulässig: Art. 9 Abs. 3 GG schützt das Recht, einer Gewerkschaft beizutreten; Abreden dagegen sind nichtig",
              "Unzulässig nur dann, wenn der Betrieb Mitglied im Arbeitgeberverband ist; sonst ist es ausdrücklich erlaubt"],
     "correct": 2,
     "explain": "Art. 9 Abs. 3 Grundgesetz: Abreden, die die Koalitionsfreiheit einschränken oder behindern, sind nichtig, darauf "
                "gerichtete Maßnahmen rechtswidrig – das gilt ausdrücklich auch zwischen Arbeitgeber und Arbeitnehmer. Umgekehrt darf "
                "auch niemand zum Beitritt gezwungen werden (negative Koalitionsfreiheit).",
     "src": "FW (GG Art. 9 Abs. 3)"},
    {"cat": "WiSo", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Bringen Sie die Rechtsgrundlagen eines Arbeitsverhältnisses in die richtige Rangfolge – von der höchsten zur niedrigsten.",
     "schritte": ["Grundgesetz (z. B. Koalitionsfreiheit)",
                  "Gesetze (z. B. Bundesurlaubsgesetz, Arbeitszeitgesetz)",
                  "Tarifvertrag",
                  "Betriebsvereinbarung",
                  "Arbeitsvertrag"],
     "explain": "Eine niedrigere Stufe darf die höhere nicht zum Nachteil des Arbeitnehmers unterschreiten. Abweichungen zugunsten des "
                "Arbeitnehmers sind erlaubt (Günstigkeitsprinzip). Die Betriebsvereinbarung steht unter dem Tarifvertrag (Tarifvorbehalt).",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Ein Tarifvertrag enthält eine Öffnungsklausel. Was bedeutet das?",
     "opts": ["Der Tarifvertrag kann jederzeit von jeder Seite ohne Frist gekündigt werden, wenn sich die Wirtschaftslage ändert",
              "Der Tarifvertrag gilt auch für Betriebe anderer Branchen, die ihm freiwillig beitreten möchten",
              "Gewerkschaftsmitglieder dürfen auch während der Laufzeit streiken, wenn ihr Betrieb besonders hohe Gewinne macht",
              "Betriebe dürfen in den genannten Fällen per Betriebsvereinbarung vom Tarif abweichen, z. B. um Arbeitsplätze zu sichern"],
     "correct": 3,
     "explain": "§ 4 Abs. 3 TVG erlaubt Abweichungen vom Tarif nur, wenn der Tarifvertrag sie gestattet (Öffnungsklausel) oder wenn sie "
                "für den Arbeitnehmer günstiger sind. Öffnungsklauseln erlauben z. B. in einer Krise, eine Tariferhöhung zu verschieben "
                "oder die Arbeitszeit befristet zu senken. Die Friedenspflicht bleibt davon unberührt.",
     "src": "FW (TVG § 4 Abs. 3)"},

    # ------------------------------------------------------------------
    # Weitere Einzelfragen – Sozialversicherung und Rente (Ausbau 10/2026)
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 3, "bild": LOHN,
     "q": "Die Abbildung zeigt eine vereinfachte Entgeltabrechnung für Oktober 2026. Wie hoch ist der Auszahlungsbetrag in Zeile H?",
     "opts": ["2.504,00 €", "2.832,80 €", "2.136,80 €", "2.156,00 €"],
     "correct": 2,
     "explain": "Steuern: B + C = 340,00 € + 27,20 € = 367,20 €. Sozialversicherung (Arbeitnehmeranteil): D + E + F + G = 297,60 € + 280,00 € "
                "+ 76,80 € + 41,60 € = 696,00 € (21,75 % von 3.200 €). Abzüge gesamt 1.063,20 € → Netto 3.200 € − 1.063,20 € = 2.136,80 €. "
                "2.504 € bzw. 2.832,80 € entstehen, wenn man die Steuern bzw. die Sozialversicherung vergisst.",
     "src": "Eigenes Diagramm (Beitragssätze 2026)"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 3, "bild": LOHN,
     "q": "Wie viel zahlt der Arbeitgeber zur Abrechnung in der Abbildung zusätzlich zum Bruttoentgelt als Arbeitgeberanteil für die "
          "Zweige in den Zeilen D bis G?",
     "opts": ["696,00 €", "1.372,80 €", "1.063,20 €", "676,80 €"],
     "correct": 3,
     "explain": "Renten-, Kranken- (einschließlich Zusatzbeitrag), Pflege- und Arbeitslosenversicherung werden je zur Hälfte getragen – "
                "aber den Kinderlosenzuschlag von 0,6 % (19,20 €) zahlt der Arbeitnehmer allein. Arbeitgeberanteil: 297,60 € + 280,00 € "
                "+ 57,60 € + 41,60 € = 676,80 €. Steuern zahlt der Arbeitgeber nicht, er führt sie nur ab. Dazu kommen für ihn noch "
                "die Unfallversicherung (Berufsgenossenschaft) und Umlagen.",
     "src": "Eigenes Diagramm (Beitragssätze 2026)"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 4, "bild": LOHN,
     "q": "Ordnen Sie den Zeilen der Entgeltabrechnung in der Abbildung zu, wem das Geld letztlich zusteht.",
     "paare": [["Zeile B (Lohnsteuer)", "Bund, Ländern und Gemeinden – eingezogen über das Finanzamt"],
               ["Zeile C (Kirchensteuer)", "Der Religionsgemeinschaft – eingezogen über das Finanzamt"],
               ["Zeile D (Rentenversicherung)", "Deutsche Rentenversicherung"],
               ["Zeile G (Arbeitslosenversicherung)", "Bundesagentur für Arbeit"]],
     "ablenker": ["Berufsgenossenschaft", "Handwerkskammer"],
     "explain": "Lohn- und Kirchensteuer führt der Arbeitgeber an das Finanzamt ab. Die Sozialversicherungsbeiträge D bis G zahlt er als "
                "Gesamtsozialversicherungsbeitrag an die Krankenkasse des Arbeitnehmers (Einzugsstelle), die sie an Rentenversicherung, "
                "Bundesagentur und Pflegekasse weiterleitet. Die Berufsgenossenschaft bekommt nur den Unfallversicherungsbeitrag, den "
                "der Arbeitgeber allein zahlt – er taucht in der Abrechnung des Arbeitnehmers nicht auf.",
     "src": "Eigenes Diagramm / FW"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2, "bild": LOHN,
     "q": "Der Arbeitnehmer aus der Abbildung bekommt ein Kind. Welcher Sozialversicherungsbeitrag ändert sich dadurch, und wie?",
     "opts": ["Zeile F sinkt auf 67,20 €, weil nur der Arbeitgeberanteil am Zuschlag wegfällt",
              "Zeile F sinkt auf 57,60 €, weil der Kinderlosenzuschlag von 0,6 % wegfällt",
              "Zeile E sinkt auf 233,60 €, weil Eltern keinen Zusatzbeitrag zur Krankenkasse zahlen",
              "Zeile D sinkt auf 281,60 €, weil Eltern einen geringeren Rentenbeitrag zahlen"],
     "correct": 1,
     "explain": "Der Zuschlag von 0,6 % in der Pflegeversicherung gilt nur für Kinderlose ab 23 Jahren und wird vom Arbeitnehmer allein "
                "getragen. Mit Kind zahlt er nur noch 1,8 %: 3.200 € × 1,8 % = 57,60 €. Ab dem zweiten Kind unter 25 sinkt der Beitrag "
                "weiter. Renten- und Krankenversicherungsbeiträge hängen nicht von Kindern ab.",
     "src": "Eigenes Diagramm (Beitragssätze 2026)"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Sie sind wegen eines Bandscheibenvorfalls (kein Arbeitsunfall, keine Berufskrankheit) zehn Wochen arbeitsunfähig. Wer zahlt was?",
     "opts": ["Der Arbeitgeber zahlt 6 Wochen den vollen Lohn, danach zahlt die Krankenkasse Krankengeld (70 % vom Brutto, höchstens 90 % vom Netto)",
              "Die Krankenkasse zahlt vom ersten Tag an Krankengeld in Höhe von 70 % des Bruttolohns, der Arbeitgeber zahlt gar nichts",
              "Der Arbeitgeber zahlt 6 Wochen den vollen Lohn, danach zahlt die Berufsgenossenschaft Verletztengeld bis zur Genesung",
              "Der Arbeitgeber zahlt alle 10 Wochen den vollen Lohn weiter, weil die Erkrankung durch die Arbeit in der Werkstatt entstanden sein könnte"],
     "correct": 0,
     "explain": "Entgeltfortzahlungsgesetz: Der Arbeitgeber zahlt bei Krankheit bis zu 6 Wochen den vollen Lohn. Danach zahlt die "
                "Krankenkasse Krankengeld: 70 % des Bruttoentgelts, höchstens 90 % des Nettoentgelts, für dieselbe Krankheit bis zu "
                "78 Wochen innerhalb von 3 Jahren. Verletztengeld der Berufsgenossenschaft gibt es nur nach Arbeitsunfall oder Berufskrankheit.",
     "src": "FW (EFZG § 3, SGB V §§ 47, 48)"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Zum 01.07.2026 stiegen die gesetzlichen Renten um 4,24 %. Ihr Großvater bekam vorher 1.250 € Rente (brutto). Wie hoch ist sie danach?",
     "opts": ["1.255,30 €", "1.292,40 €", "1.303,00 €", "1.197,00 €"],
     "correct": 2,
     "explain": "1.250 € × 4,24 % = 53 € → 1.250 € + 53 € = 1.303 €. Die Rentenanpassung folgt der Lohnentwicklung; die Haltelinie "
                "sorgt dafür, dass das Rentenniveau bis 2031 nicht unter 48 % sinkt. Der aktuelle Rentenwert stieg "
                "dabei von 40,79 € auf 42,52 € je Entgeltpunkt.",
     "src": "Netz: Deutsche Rentenversicherung, Rentenanpassung 2026"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Neben der Sozialversicherung gibt es private Versicherungen (Individualversicherungen). Ordnen Sie dem Schaden die "
          "Versicherung zu, die ihn übernimmt.",
     "paare": [["Sie beschädigen mit Ihrem Auto beim Ausparken ein fremdes Fahrzeug", "Kfz-Haftpflichtversicherung (Pflichtversicherung)"],
               ["Sie stoßen in der Wohnung eines Freundes versehentlich dessen Fernseher um", "Private Haftpflichtversicherung"],
               ["Sie können wegen eines Rückenleidens dauerhaft nicht mehr als Mechatroniker arbeiten", "Berufsunfähigkeitsversicherung"],
               ["In Ihre Wohnung wird eingebrochen und Ihr Laptop gestohlen", "Hausratversicherung"]],
     "ablenker": ["Gesetzliche Unfallversicherung", "Teilkaskoversicherung"],
     "explain": "Individualversicherungen sind freiwillig – außer der Kfz-Haftpflicht, die für jedes zugelassene Fahrzeug Pflicht ist. "
                "Der Beitrag richtet sich nach dem Risiko, nicht nach dem Einkommen. Die gesetzliche Unfallversicherung zahlt nur bei "
                "Arbeits- und Wegeunfällen; die Teilkasko ersetzt Schäden am eigenen Auto (z. B. Diebstahl des Fahrzeugs).",
     "src": "FW (Lehrplan Politik und Gesellschaft 10.3.2)"},

    # ------------------------------------------------------------------
    # Weitere Einzelfragen – Wahlen und Staat (Ausbau 10/2026)
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie kommt die Bundeskanzlerin bzw. der Bundeskanzler ins Amt?",
     "opts": ["Das Volk wählt sie bzw. ihn bei der Bundestagswahl direkt mit einer eigenen dritten Stimme",
              "Der Bundespräsident ernennt die Vorsitzende bzw. den Vorsitzenden der stärksten Partei ohne Wahl",
              "Der Bundestag wählt sie bzw. ihn auf Vorschlag des Bundespräsidenten mit der Mehrheit seiner Mitglieder",
              "Die Bundesversammlung wählt sie bzw. ihn gemeinsam mit dem Bundespräsidenten für 5 Jahre"],
     "correct": 2,
     "explain": "Art. 63 GG: Der Bundestag wählt den Kanzler ohne Aussprache auf Vorschlag des Bundespräsidenten; nötig ist die "
                "Mehrheit der Mitglieder (Kanzlermehrheit). Die Bürger bestimmen den Kanzler also nur indirekt über die Bundestagswahl. "
                "Die Bundesversammlung wählt nur den Bundespräsidenten.",
     "src": "FW (GG Art. 63)"},
    {"cat": "WiSo", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie zu, wer das jeweilige Amt wählt.",
     "paare": [["Bundespräsident", "Bundesversammlung"],
               ["Bundeskanzler", "Bundestag"],
               ["Bayerischer Ministerpräsident", "Bayerischer Landtag"],
               ["Erster Bürgermeister einer Gemeinde", "Die wahlberechtigten Bürger der Gemeinde direkt"],
               ["Landrat", "Die wahlberechtigten Bürger des Landkreises direkt"]],
     "ablenker": ["Bundesrat"],
     "explain": "Auf Bundes- und Landesebene werden Regierungschefs vom Parlament gewählt (parlamentarisches Regierungssystem). In Bayern "
                "werden Bürgermeister und Landräte dagegen direkt von den Bürgern gewählt, für 6 Jahre. Die Bundesversammlung besteht aus "
                "den Bundestagsabgeordneten und ebenso vielen Vertretern der Länder.",
     "src": "FW"},
    {"cat": "WiSo", "level": 1, "typ": "reihenfolge", "pkt": 4,
     "q": "Sie sind am Wahltag auf Montage und wählen per Brief. Bringen Sie die Schritte der Briefwahl in die richtige Reihenfolge.",
     "schritte": ["Wahlbenachrichtigung erhalten: Sie stehen im Wählerverzeichnis",
                  "Wahlschein mit Briefwahlunterlagen bei der Gemeinde beantragen",
                  "Unterlagen (Wahlschein, Stimmzettel, Umschläge) per Post oder im Rathaus erhalten",
                  "Stimmzettel allein ausfüllen, in den Stimmzettelumschlag stecken und die Versicherung an Eides statt unterschreiben",
                  "Wahlbrief so rechtzeitig abschicken, dass er spätestens am Wahltag um 18 Uhr bei der angegebenen Stelle ist",
                  "Am Wahltag prüft der Briefwahlvorstand die Wahlbriefe und zählt die Stimmen aus"],
     "explain": "Die Briefwahl muss beantragt werden, ein Grund ist nicht nötig. Mit der Versicherung an Eides statt auf dem Wahlschein "
                "bestätigen Sie, dass Sie den Stimmzettel persönlich (geheim) ausgefüllt haben. Kommt der Wahlbrief nach 18 Uhr an, "
                "zählt die Stimme nicht.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Bei der Gemeinderatswahl in Bayern sind 20 Sitze zu vergeben, jede Liste hat 20 Bewerber. Sie kreuzen Liste A an und geben "
          "zusätzlich zwei Bewerbern der Liste B je 3 Stimmen. Was geschieht mit Ihren übrigen Stimmen?",
     "opts": ["Der Stimmzettel ist ungültig, weil man ein Listenkreuz nicht mit Einzelstimmen kombinieren darf",
              "Die übrigen 14 Stimmen verfallen, weil das Listenkreuz neben Einzelstimmen nicht mehr zählt",
              "Die übrigen 14 Stimmen erhalten die Bewerber der Liste A der Reihe nach von oben, je eine Stimme",
              "Alle 20 Stimmen gehen an Liste A, die Einzelstimmen für Liste B werden nicht gewertet"],
     "correct": 2,
     "explain": "Listenkreuz und Einzelstimmen dürfen kombiniert werden. Die Einzelstimmen (2 × 3 = 6) zählen zuerst; die restlichen "
                "20 − 6 = 14 Stimmen gehen an die Bewerber der angekreuzten Liste A in der Reihenfolge des Stimmzettels, je eine Stimme. "
                "Ungültig wird der Stimmzettel z. B., wenn man mehr Stimmen vergibt, als Sitze zu vergeben sind.",
     "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Welche Aufgaben hat der Erste Bürgermeister in einer bayerischen Gemeinde?",
     "opts": ["Er beschließt allein den Haushalt und die Bebauungspläne der Gemeinde, der Gemeinderat darf dazu nur beraten",
              "Er leitet die Sitzungen des Gemeinderats, vollzieht dessen Beschlüsse und vertritt die Gemeinde nach außen",
              "Er wird vom Landrat ernannt und überwacht als Beamter des Freistaats die Arbeit des Gemeinderats",
              "Er ist nur Ehrenvorsitzender ohne Stimmrecht und darf an den Sitzungen des Gemeinderats nur zuhören"],
     "correct": 1,
     "explain": "Nach der Bayerischen Gemeindeordnung sind Gemeinderat und Erster Bürgermeister die Hauptorgane. Der Gemeinderat beschließt "
                "(z. B. Haushalt, Bebauungspläne). Der direkt gewählte Bürgermeister leitet die Sitzungen mit eigenem Stimmrecht, führt "
                "die Beschlüsse aus, erledigt die laufenden Geschäfte, leitet die Verwaltung und vertritt die Gemeinde nach außen.",
     "src": "FW (Gemeindeordnung Bayern)"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Welche Aussage beschreibt das Subsidiaritätsprinzip im Staatsaufbau (Gemeinde – Land – Bund – EU) richtig?",
     "opts": ["Aufgaben soll möglichst der Bund erledigen, weil einheitliche Regeln für alle Bürger gerechter sind als örtliche Lösungen",
              "Wer einer Gemeinde eine Aufgabe überträgt, muss ihr auch das nötige Geld dafür zur Verfügung stellen",
              "Gemeinden dürfen nur Aufgaben übernehmen, die ihnen der Freistaat vorher ausdrücklich per Gesetz zugewiesen hat",
              "Aufgaben soll möglichst die kleinste, bürgernahe Ebene erledigen; die höhere Ebene hilft erst, wenn die untere überfordert ist"],
     "correct": 3,
     "explain": "Subsidiarität heißt: Was die kleinere Einheit (Familie, Gemeinde, Land) selbst leisten kann, soll sie selbst regeln; "
                "die größere Einheit greift nur unterstützend ein. Das stärkt die kommunale Selbstverwaltung. „Wer bestellt, bezahlt“ "
                "ist dagegen das Konnexitätsprinzip.",
     "src": "FW (Lehrplan Politik und Gesellschaft 11.2.1)"},

    # ------------------------------------------------------------------
    # Weitere Einzelfragen – Konjunktur (Ausbau 10/2026)
    # ------------------------------------------------------------------
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2, "bild": KONJ,
     "q": "Was zeigen in der Abbildung die gestrichelte Linie und die Punkte A und B?",
     "opts": ["Gestrichelt: Inflationsrate; A: Beginn der Hochkonjunktur; B: Beginn des Aufschwungs",
              "Gestrichelt: Arbeitslosenquote; A: oberer Wendepunkt; B: unterer Wendepunkt",
              "Gestrichelt: langfristiger Wachstumstrend; A: oberer Wendepunkt; B: unterer Wendepunkt",
              "Gestrichelt: langfristiger Wachstumstrend; A: unterer Wendepunkt; B: oberer Wendepunkt"],
     "correct": 3,
     "explain": "Die Trendlinie zeigt das durchschnittliche, langfristige Wachstum. Die tatsächliche Entwicklung schwankt darum. "
                "A ist der Tiefpunkt (unterer Wendepunkt), ab dem es wieder aufwärts geht; B ist der Höhepunkt (oberer Wendepunkt), "
                "ab dem der Abschwung beginnt.",
     "src": "Eigenes Diagramm"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Wie ermittelt das Statistische Bundesamt die Inflationsrate?",
     "opts": ["Es vergleicht die Preise eines festen Warenkorbs typischer Waren und Dienstleistungen mit dem Vorjahreszeitraum",
              "Es teilt die umlaufende Bargeldmenge durch die Zahl der Einwohner und vergleicht das Ergebnis mit dem Vorjahr",
              "Es erfasst nur die Preise für Kraftstoff, Strom und Heizöl, weil diese für alle Haushalte am wichtigsten sind",
              "Es übernimmt den Leitzins der EZB, weil die Inflationsrate per Definition immer genau dem Leitzins entspricht"],
     "correct": 0,
     "explain": "Grundlage ist der Verbraucherpreisindex (VPI): Mehrere hundert Waren und Dienstleistungen werden nach ihrem Anteil an den "
                "Ausgaben der Haushalte gewichtet (Wägungsschema). Die Inflationsrate ist die Veränderung des VPI gegenüber dem "
                "Vorjahresmonat bzw. Vorjahr. Die „gefühlte“ Inflation kann abweichen – Pendler spüren z. B. Kraftstoffpreise stärker.",
     "src": "FW / Netz: Destatis"},
    {"cat": "WiSo", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Die Bundesregierung hat im Oktober 2026 ihre Herbstprojektion vorgelegt. Welche Erwartung für das reale BIP 2026 nennt sie?",
     "opts": ["Einen Rückgang um etwa 1,3 %, das dritte Minusjahr in Folge",
              "Ein Wachstum von etwa 1,3 %, nach nur 0,2 % im Jahr 2025",
              "Ein Wachstum von etwa 4 %, so stark wie seit 1990 nicht mehr",
              "Eine Stagnation bei 0,0 %, weil die Inflation alles aufzehrt"],
     "correct": 1,
     "explain": "Laut Herbstprojektion vom 08.10.2026 soll das reale BIP 2026 um etwa 1,3 % wachsen – deutlich mehr als im Frühjahr "
                "erwartet und nach +0,2 % im Jahr 2025. Eine Projektion ist eine Prognose, kein endgültiges Ergebnis; die Ist-Zahl für "
                "2026 veröffentlicht das Statistische Bundesamt im Januar 2027.",
     "src": "Netz: Bundesregierung, Herbstprojektion 2026 (08.10.2026)"},
]
