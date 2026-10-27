"""
WiSo (Wirtschafts- und Sozialkunde): Tarifvertrag, Sozialversicherungen (u. a. Rente),
Wahlen (u. a. Kommunalwahl Bayern), Konjunktur und Wirtschaftspolitik.
Format siehe docs/superpowers/specs (Abschnitt 5 und 15). Faktenbasis:
docs/recherche/2026-10-26-gp2-winter-2026-27.md (Abschnitt 2, 3.5, 3.6).
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
}

S = "wiso-geselle"

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
              "Gewerkschaften und Arbeitgeberverbände verhandeln die Löhne; der Abschluss gilt aber erst, wenn das Arbeitsministerium ihn genehmigt"],
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
              "Der Betriebsrat darf keine Betriebsversammlung einberufen",
              "Arbeitnehmer dürfen während der Laufzeit nicht kündigen",
              "Die Gewerkschaft darf erst nach einer Schlichtung verhandeln"],
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
              "Höhere Leitzinsen senken die Inflation und kurbeln zugleich Investitionen und Beschäftigung an; so werden beide Ziele gleichzeitig erreicht",
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
              "Er kürzt seine Ausgaben und erhöht die Steuern",
              "Er senkt den Leitzins",
              "Er hält sich vollständig aus der Wirtschaft heraus"],
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
              "30 Tage, weil der Tarifvertrag immer Vorrang hat",
              "24 Tage, weil das Bundesurlaubsgesetz gilt",
              "31 Tage als Mittelwert beider Regelungen"],
     "correct": 0,
     "explain": "Günstigkeitsprinzip (§ 4 Abs. 3 Tarifvertragsgesetz): Der Tarifvertrag ist ein Mindeststandard. Schlechter als der Tarif "
                "darf der Arbeitsvertrag nicht sein, besser schon.",
     "src": "FW"},
    {"cat": "WiSo", "level": 3, "typ": "mc", "pkt": 2,
     "q": "Was bedeutet es, wenn ein Tarifvertrag für allgemeinverbindlich erklärt wird?",
     "opts": ["Er gilt für alle Arbeitgeber und Arbeitnehmer der Branche im Geltungsbereich, auch ohne Verbandsmitgliedschaft",
              "Er gilt nur für Gewerkschaftsmitglieder",
              "Er kann während der Laufzeit nicht mehr gekündigt werden",
              "Er gilt automatisch für alle Branchen in Deutschland"],
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
              "Arbeitnehmer und Arbeitgeber je zur Hälfte",
              "Der Arbeitgeber allein",
              "Die Pflegekasse aus Steuermitteln"],
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
              "Jeder kann ab 63 Jahren ohne Abschläge in Rente gehen",
              "Der Staat zahlt jedem Kind monatlich in ein Vorsorgedepot ein",
              "Rentner müssen bis 70 Jahre mindestens in Teilzeit arbeiten"],
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
              "Sie bekommt keinen einzigen Sitz, weil sie unter 5 % liegt",
              "Nur die drei Wahlkreissieger ziehen ein",
              "Sie bekommt automatisch 5 % der Sitze"],
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
              "A ist gewählt, weil sie die meisten Stimmen hat",
              "Die Wahl wird mit allen drei Bewerbern wiederholt",
              "Der Gemeinderat wählt den Bürgermeister aus A und B"],
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
              "Es ist um 2,0 % geschrumpft",
              "Es ist um 3,5 % gewachsen",
              "Es ist das dritte Jahr in Folge geschrumpft"],
     "correct": 0,
     "explain": "Nach Rückgängen 2023 und 2024 wuchs das reale BIP 2025 laut erster Schätzung des Statistischen Bundesamts leicht um 0,2 %. "
                "Für 2026 wurde ein etwas stärkeres Wachstum erwartet.",
     "src": "Netz: Destatis, Pressemitteilung 017/2026 (15.01.2026)"},
    {"cat": "WiSo", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Welches Ziel verfolgt die Europäische Zentralbank (EZB) mit ihrer Geldpolitik (Stand 2026)?",
     "opts": ["Eine Inflationsrate von mittelfristig 2 % im Euroraum",
              "Eine Arbeitslosenquote von 0 %",
              "Eine Inflationsrate von genau 0 %",
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
]
