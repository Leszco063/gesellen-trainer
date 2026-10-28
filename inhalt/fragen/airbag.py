"""
Airbag (Instandhaltungstechnik II – Sicherheitssysteme): Aufgabensätze „Airbag-Kontrollleuchte nach
Sitzausbau“ (Opel) und „Airbag-Leuchte und Hupe nach Lenkradtausch“ (Skoda, Wickelfeder) sowie Einzelfragen zu
Aufbau, Funktion, Diagnose, Sicherheitsregeln und Recht. Eigene Bilder: airbag-*.svg. Recherche: docs/recherche/ausbau-airbag.md.
Format siehe docs/superpowers/specs (Abschnitt 5 und 15). Nach Änderungen:  python tools/export.py

Regeln aus der Recherche (3.6): Wartezeit nach dem Abklemmen der Batterie immer „nach Herstellerangabe“,
nie als feste Zahl. Crash-Zeiten nur als Richtwerte. Alles in eigenen Worten.
"""

SITUATIONEN = {
    "airbag-sitz": {
        "titel": "Kundenauftrag: Airbag-Kontrollleuchte nach Sitzausbau",
        "text": "Opel Astra K, Baujahr 2018, Front-, Seiten- und Kopfairbags, Gurtstraffer vorn.\n"
                "Kunde beanstandet: „Seit ihr den Fahrersitz für die Teppichreinigung ausgebaut habt, "
                "leuchtet die Airbag-Leuchte.“\n"
                "Fehlerspeicher: Zündkreis Seitenairbag Fahrer – Widerstand zu hoch.",
        "cat": "Airbag",
    },
    "airbag-wickelfeder": {
        "titel": "Kundenauftrag: Airbag-Leuchte an und Hupe ohne Funktion nach Lenkradtausch",
        "text": "Skoda Octavia III Combi, Baujahr 2016, Multifunktionslenkrad, Fahrerairbag zweistufig, Beifahrer-, "
                "Seiten- und Kopfairbags, Gurtstraffer vorn.\n"
                "Kunde beanstandet: „Seit eine andere Werkstatt mein Lenkrad gegen ein Original-Lederlenkrad getauscht hat, "
                "leuchtet die Airbag-Leuchte, die Hupe geht nicht und die Radiotasten am Lenkrad sind ohne Funktion.“\n"
                "Fehlerspeicher: Zündkreis Fahrerairbag Stufe 1 – Widerstand zu hoch; Zündkreis Fahrerairbag Stufe 2 – "
                "Widerstand zu hoch.\nSchaltplan-Auszug: siehe Bild (Pinbelegung als Beispiel).",
        "cat": "Airbag",
    },
}

_SATZ = "airbag-sitz"
_SATZ2 = "airbag-wickelfeder"
_PLAN = "airbag-zuendkreise-schaltplan.svg"
_STECKER = "airbag-stecker-kurzschlussbruecke.svg"
_CRASH = "airbag-crashablauf.svg"

QUESTIONS = [
    # ---------------------------------------------------------------- Aufgabensatz airbag-sitz
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 8, "situation": _SATZ, "nr": 1, "bild": "airbag-system.svg",
     "q": "Verschaffen Sie sich zuerst einen Überblick über das Rückhaltesystem. Ordnen Sie den Nummern im Bild die Bauteile zu.",
     "paare": [["①", "Airbag-Steuergerät"], ["②", "Upfront-Sensor"], ["③", "Seitenaufprallsensor"],
               ["④", "Fahrerairbag"], ["⑤", "Wickelfeder (Kontakteinheit)"], ["⑥", "Beifahrerairbag"],
               ["⑦", "Gurtstraffer"], ["⑧", "Airbag-Kontrollleuchte"]],
     "ablenker": ["Klopfsensor", "Raddrehzahlsensor"],
     "explain": "Das Steuergerät sitzt geschützt in der Fahrzeugmitte auf dem Mitteltunnel. Die Upfront-Sensoren sitzen ganz vorn, "
                "die Seitenaufprallsensoren in Tür bzw. B-Säule – dort kommt der Aufprall zuerst an. Die Wickelfeder liegt "
                "direkt hinter dem Lenkrad und verbindet den Fahrerairbag elektrisch mit dem Bordnetz.",
     "src": "FW, Format Prüfung Schule"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 2,
     "q": "Wie verhält sich die Airbag-Kontrollleuchte bei einem fehlerfreien System nach dem Einschalten der Zündung, "
          "und was bedeutet Dauerleuchten?",
     "opts": ["Sie bleibt beim Einschalten dunkel; Dauerleuchten heißt: Beifahrerairbag ist abgeschaltet, sonst alles in Ordnung",
              "Sie leuchtet beim Einschalten kurz auf (Selbsttest) und erlischt nach wenigen Sekunden; Dauerleuchten heißt: Fehler erkannt, Schutz eingeschränkt",
              "Sie leuchtet während der ganzen Fahrt als Betriebsanzeige; Erlöschen heißt: Fehler erkannt, Schutz eingeschränkt",
              "Sie leuchtet beim Einschalten kurz auf und erlischt; Dauerleuchten heißt: Wartungsintervall der Airbags fällig, Schutz bleibt bis dahin voll erhalten"],
     "correct": 1,
     "explain": "Die Leuchte geht beim Einschalten an (Selbsttest, Lampentest) und erlischt nach wenigen Sekunden, wenn kein "
                "Fehler erkannt wurde. Dauerleuchten (oder Blinken) heißt: Fehler erkannt, Teile ggf. abgeschaltet. "
                "Beim Einschalten prüft das Steuergerät Zündkreise, Sensoren und Energiereserve. Bleibt die Leuchte an, "
                "ist ein Fehler gespeichert – das Fahrzeug ist nicht mehr voll geschützt und muss diagnostiziert werden.",
     "src": "Netz: Recherche 3.6 (kfz-tech.de), FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "situation": _SATZ, "nr": 3,
     "q": "Was bedeutet der Fehlereintrag „Zündkreis Seitenairbag Fahrer – Widerstand zu hoch“?",
     "opts": ["Im Zündkreis liegt eine Unterbrechung oder ein erhöhter Übergangswiderstand vor",
              "Der Seitenairbag hat ausgelöst und muss ersetzt werden",
              "Zwischen den beiden Zündkreisleitungen besteht ein Kurzschluss, z. B. durch eine eingeklemmte Leitung",
              "Die Bordnetzspannung ist zu hoch"],
     "correct": 0,
     "explain": "Das Steuergerät überwacht den Widerstand jedes Zündkreises ständig mit einem sehr kleinen Prüfstrom. "
                "„Zu hoch“ deutet auf eine Unterbrechung, einen lockeren Stecker oder korrodierte Kontakte hin. "
                "Ein Kurzschluss zwischen den Leitungen würde als „Widerstand zu niedrig“ gemeldet.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 5, "situation": _SATZ, "nr": 4,
     "q": "Bevor Sie an der Steckverbindung des Seitenairbags arbeiten, müssen Sie das System sicher machen. "
          "Bringen Sie die Sicherheitsschritte in die richtige Reihenfolge.",
     "schritte": ["Zündung ausschalten und Schlüssel aus dem Fahrzeug bzw. aus der Funkreichweite bringen",
                  "Batterie-Minuspol abklemmen und gegen Wiederanklemmen sichern",
                  "Wartezeit nach Herstellerangabe abwarten",
                  "Sich elektrostatisch entladen (z. B. Fahrzeugmasse berühren)",
                  "Steckverbindung des Airbag-Bauteils trennen",
                  "Ausgebaute Airbag-Einheit mit der Polsterseite nach oben ablegen"],
     "explain": "Erst stromlos machen, dann warten, bis die Energiereserve im Steuergerät entladen ist. Die Wartezeit ist je "
                "nach Fahrzeug sehr verschieden – sie steht im Reparaturleitfaden. Die elektrostatische Entladung schützt "
                "die Zündpille vor einem Funken über den Körper.",
     "src": "Netz: Recherche 3.4/3.6, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 5,
     "q": "Warum dürfen Sie nach dem Abklemmen der Batterie nicht sofort am Airbag-System arbeiten?",
     "opts": ["Die Zündpille ist durch den Prüfstrom des Steuergeräts noch heiß; erst nach dem Abkühlen auf Raumtemperatur kann sie beim Abstecken nicht mehr zünden",
              "Das Steuergerät speichert noch die Crashdaten dauerhaft ab; vorher gehen sie beim Arbeiten verloren",
              "Die Energiereserve (Kondensator) im Steuergerät kann die Zündpille noch bestromen; erst nach der Wartezeit nach Herstellerangabe ist sie entladen",
              "Der Fehlerspeicher löscht sich erst nach einer Wartezeit; sonst wird beim Wiederanklemmen ein Fehler eingetragen"],
     "correct": 2,
     "explain": "Das Steuergerät besitzt eine Energiereserve (Kondensator), die die Zündpille auch ohne Batterie noch "
                "bestromen kann – der Airbag könnte auslösen. Erst nach der vom Hersteller angegebenen Wartezeit ist sie "
                "entladen. Die Energiereserve ist gewollt: Reißt bei einem Unfall die Batterieleitung ab, kann das Steuergerät trotzdem "
                "noch zünden. Bei Arbeiten in der Werkstatt ist genau das die Gefahr.",
     "src": "Netz: Recherche 3.6 (kfz-tech.de)"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2, "situation": _SATZ, "nr": 6,
     "q": "Welche Prüfung an der Airbag-Einheit ist verboten?",
     "opts": ["Den Widerstand der Zündpille direkt mit dem Multimeter messen",
              "Den Fehlerspeicher mit dem Diagnosetester auslesen",
              "Die Steckverbindung auf Korrosion und richtige Verrastung sichtprüfen",
              "Die Zündkreis-Messwerte im Diagnosetester ablesen"],
     "correct": 0,
     "explain": "Ein Multimeter schickt beim Widerstandsmessen einen Prüfstrom durch das Bauteil. Der kann die Zündpille "
                "auslösen. Den Zündkreiswiderstand liest man deshalb über den Tester aus oder misst mit Prüfadapter "
                "bzw. Ersatzwiderstand.",
     "src": "Netz: Recherche 3.4 (kfz-tech.de)"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4, "situation": _SATZ, "nr": 7,
     "q": "Welche Antwort nennt vier fachgerechte Schritte bzw. Hilfsmittel, um den Zündkreis des Seitenairbags zu prüfen?",
     "opts": ["Messwerte mit dem Diagnosetester auslesen; Widerstand der Zündpille direkt mit dem Multimeter messen; "
              "Stecker unter dem Sitz prüfen; Leitung bei abgesteckten Bauteilen auf Durchgang prüfen",
              "Messwerte mit dem Diagnosetester auslesen; Prüfadapter bzw. Ersatzwiderstand anschließen; "
              "Stecker unter dem Sitz prüfen; Zündkreis bei eingesteckter Airbag-Einheit kurz mit der Prüflampe auf Durchgang und Spannung prüfen",
              "Fehlerspeicher löschen und abwarten, ob der Fehler wiederkommt; Prüfadapter anschließen; "
              "Stecker unter dem Sitz prüfen; Leitung bei angeschlossener Airbag-Einheit auf Durchgang messen",
              "Messwerte mit dem Diagnosetester auslesen; Prüfadapter bzw. Ersatzwiderstand anschließen; "
              "Stecker unter dem Sitz prüfen; Leitung bei abgesteckter Airbag-Einheit und Steuergerät auf Durchgang und Kurzschluss prüfen"],
     "correct": 3,
     "explain": "Fehlerspeicher und Zündkreiswiderstand liest man mit dem Diagnosetester aus. Am Stecker unter dem Sitz "
                "prüft man Verrastung, Kontakte, Korrosion und Kurzschlussbrücke. Mit dem Ersatzwiderstand lässt sich eingrenzen: Verschwindet der Fehler, liegt er an der Airbag-Einheit "
                "oder ihrem Stecker, bleibt er, an Leitung oder Steuergerät. Leitungen nur prüfen, wenn keine Zündpille "
                "angeschlossen ist.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 8,
     "q": "Statt der Airbag-Einheit schließen Sie einen Ersatzwiderstand von 2,2 Ω an. Die zwei Steckverbindungen haben je "
          "0,1 Ω Übergangswiderstand, die Leitung hat insgesamt 0,3 Ω. Wie groß ist der Gesamtwiderstand des Zündkreises?",
     "opts": ["2,6 Ω", "0,04 Ω", "2,7 Ω", "2,5 Ω"],
     "correct": 2,
     "explain": "Alle Widerstände liegen in Reihe: R = 2,2 Ω + 2 × 0,1 Ω + 0,3 Ω = 2,7 Ω. Ein lockerer Stecker erhöht den "
                "Übergangswiderstand – deshalb meldet das Steuergerät dann „Widerstand zu hoch“.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 9,
     "q": "Im Stecker der Airbag-Einheit sitzt eine Kurzschlussbrücke. Welche Beschreibung ihrer Aufgabe ist richtig?",
     "opts": ["Sie schließt im eingesteckten Zustand die Zündpille kurz, damit der Prüfstrom des Steuergeräts nicht durch sie fließt",
              "Beim Abziehen des Steckers verbindet eine Federbrücke die beiden Anschlüsse der Zündpille; Fremdspannung kann keinen Zündstrom treiben",
              "Beim Abziehen des Steckers legt sie die Zündkreisleitung an Masse, damit das Steuergerät den offenen Stecker sofort erkennt und die Kontrollleuchte einschaltet",
              "Sie überbrückt bei einem Unfall einen beschädigten Stecker, damit der Airbag trotzdem zünden kann"],
     "correct": 1,
     "explain": "Beim Abziehen des Steckers schließt eine Federbrücke die beiden Anschlüsse der Zündpille kurz. Fremdspannung "
                "oder statische Aufladung kann dann keinen Zündstrom durch die Zündpille treiben – keine ungewollte Auslösung. "
                "Sobald der Stecker wieder richtig eingerastet ist, drückt er die Brücke auf. Rastet er nicht ein, kann die "
                "Brücke teilweise anliegen oder der Kontakt wackeln – ein Grund für unplausible Zündkreiswerte.",
     "src": "Netz: Recherche 3.6, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 10,
     "q": "Warum ist die Steckverbindung unter dem Sitz eine typische Fehlerquelle – besonders nach einem Sitzausbau?",
     "opts": ["Stecker wird beim Einbau oft nicht richtig verriegelt; Leitung wird bei jeder Sitzverstellung bewegt; "
              "beim Sitzausbau verliert das Steuergerät seine Codierung",
              "Der Zündkreis bekommt seine Masse über die Sitzschienen, die beim Ausbau verschmutzen; Leitung wird bei jeder "
              "Sitzverstellung bewegt; Feuchtigkeit führt zu Korrosion",
              "Stecker wird beim Einbau oft nicht richtig verriegelt; die Zündpille altert durch jedes Abstecken; "
              "Feuchtigkeit führt zu Korrosion an den Kontakten",
              "Stecker wird beim Einbau oft nicht richtig verriegelt; Leitung wird bei jeder Sitzverstellung bewegt; "
              "Feuchtigkeit und Schmutz am Boden führen zu Korrosion"],
     "correct": 3,
     "explain": "Der Stecker wird beim Ausbau getrennt und beim Einbau oft nicht richtig eingerastet. Die Leitung wird bei "
                "jeder Sitzverstellung bewegt (Zug, Knicken, Scheuern), und Feuchtigkeit und Schmutz am Fahrzeugboden "
                "(z. B. nach Teppichreinigung) lassen die Kontakte korrodieren. Im vorliegenden Fall ist der Stecker nach dem Sitzeinbau nicht eingerastet: Der Übergangswiderstand ist "
                "zu hoch, das Steuergerät erkennt das beim Selbsttest und schaltet die Kontrollleuchte ein.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "zuordnung", "pkt": 5, "situation": _SATZ, "nr": 11,
     "q": "Ordnen Sie den Bauteilen des Rückhaltesystems ihre Schutzwirkung zu.",
     "paare": [["Gurtstraffer", "Zieht das lose Gurtband straff, bevor der Insasse nach vorn geht"],
               ["Gurtkraftbegrenzer", "Begrenzt die Gurtkraft auf den Brustkorb"],
               ["Seitenairbag", "Schützt Brustkorb und Becken beim Seitenaufprall"],
               ["Kopfairbag (Vorhang)", "Schützt den Kopf vor Seitenscheibe und Säulen"],
               ["Knieairbag", "Schützt die Knie und verhindert das Durchrutschen unter dem Gurt"]],
     "ablenker": ["Verhindert das Blockieren der Räder"],
     "explain": "Gurt und Airbags wirken zusammen: Der Gurtstraffer holt die Gurtlose heraus, der Kraftbegrenzer gibt danach "
                "kontrolliert nach, damit der Insasse weich in den Airbag eintaucht.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "situation": _SATZ, "nr": 12,
     "q": "Unter welcher Bedingung löst das Airbag-Steuergerät einen Airbag aus?",
     "opts": ["Wenn mindestens zwei Sensorsignale den Aufprall übereinstimmend (plausibel) melden",
              "Sobald ein beliebiger einzelner Sensor eine Verzögerung über der Auslöseschwelle meldet",
              "Bei jeder Vollbremsung mit ABS-Eingriff",
              "Wenn die Airbag-Kontrollleuchte leuchtet"],
     "correct": 0,
     "explain": "Das Steuergerät vergleicht das Signal seines eigenen Beschleunigungssensors mit dem eines Satelliten "
                "(Upfront- oder Seitensensor). Erst wenn beide einen Aufprall bestätigen, wird gezündet – so führt ein "
                "einzelner defekter Sensor oder ein Schlag gegen das Steuergerät nicht zur Auslösung.",
     "src": "Netz: Recherche 3.6"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 4, "situation": _SATZ, "nr": 13,
     "q": "Falls die Airbag-Einheit ausgebaut werden muss: Welche Antwort nennt vier richtige Regeln für Ablage, Transport und Lagerung?",
     "opts": ["Mit der Polsterseite nach unten ablegen; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, "
              "keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern",
              "Mit der Polsterseite nach oben ablegen; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, "
              "keine Fette; offen im Teilelager bei den übrigen Ersatzteilen lagern",
              "Mit der Polsterseite nach oben ablegen, Polster beim Tragen vom Körper weg; nicht an Leitung oder Stecker tragen; "
              "keine Wärme über ca. 100 °C, keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern",
              "Mit der Polsterseite nach oben ablegen, Polster beim Tragen zum Körper hin; nicht an Leitung oder Stecker tragen; "
              "keine Wärme über ca. 100 °C, keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern"],
     "correct": 2,
     "explain": "Regeln: Polsterseite nach oben ablegen und das Polster beim Tragen vom Körper weg halten; nicht an Leitung "
                "oder Stecker tragen; keine Wärme über ca. 100 °C, kein offenes Feuer, keine Fette oder Reinigungsmittel; "
                "gesichert in einem abschließbaren Raum bzw. Behälter lagern (Mengengrenzen nach Lagerrichtlinie LR 240). "
                "Liegt das Polster unten und die Einheit löst aus, wird sie wie ein Geschoss hochgeschleudert. Mit dem Polster "
                "nach oben entfaltet sich der Sack frei nach oben. Für den Transport möglichst die Originalverpackung nutzen.",
     "src": "Netz: Recherche 3.4/3.6 (kfz-tech.de, TÜV SÜD)"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 14,
     "q": "Welche Antwort nennt die rechtlichen Voraussetzungen, damit Ihr Betrieb Airbag- und Gurtstraffereinheiten aus- und einbauen darf?",
     "opts": ["Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau darf jede Fachkraft ohne "
              "zusätzliche Schulung; Tätigkeit vorher bei der zuständigen Behörde anzeigen",
              "Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; "
              "Tätigkeit vor Aufnahme bei der zuständigen Behörde anzeigen",
              "Feuerwerkskörper der Kategorie F2 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; "
              "Tätigkeit vor Aufnahme bei der zuständigen Behörde anzeigen",
              "Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; "
              "keine Anzeige nötig, nur jährliche Meldung der verbauten Stückzahl"],
     "correct": 1,
     "explain": "Airbag- und Gurtstraffereinheiten sind pyrotechnische Gegenstände der Kategorie P1. Ein- und Ausbau nur mit "
                "entsprechender (eingeschränkter) Fachkunde bzw. Schulung, und die Tätigkeit muss vor Aufnahme bei der "
                "zuständigen Behörde angezeigt werden. Dazu kommen die Regeln zur Lagerung (LR 240) und zur Entsorgung. Wer ohne Schulung an Airbags arbeitet, "
                "gefährdet sich und andere und handelt gegen das Sprengstoffrecht.",
     "src": "Netz: Recherche 3.4 (TÜV SÜD, Behördenportale, autoservicepraxis)"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "situation": _SATZ, "nr": 15,
     "q": "Der Kunde fragt nebenbei, was bei seinem Zweitwagen nach einem Unfall mit ausgelösten Frontairbags zu ersetzen ist. "
          "Welche Antwort ist richtig?",
     "opts": ["Luftsäcke neu falten und Gasgeneratoren nachfüllen lassen; Steuergerät nach Herstellerangabe ersetzen; "
              "Sensoren, Wickelfeder und Gurte prüfen",
              "Ausgelöste Airbag-Einheiten ersetzen, Gurtstraffer weiterverwenden; Steuergerät nach Herstellerangabe ersetzen; "
              "Sensoren, Wickelfeder und Gurte prüfen",
              "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; "
              "Batterie ersetzen, weil der hohe Zündstrom sie beim Crash tiefentladen hat",
              "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; "
              "Sensoren, Wickelfeder, Gurte und Halterungen prüfen bzw. ersetzen"],
     "correct": 3,
     "explain": "Alle ausgelösten Airbag-Einheiten und Gurtstraffer werden ersetzt; betroffene Sensoren, Wickelfeder, Gurte "
                "und Halterungen nach Herstellervorgabe prüfen bzw. ersetzen. Ausgelöste pyrotechnische Teile sind verbraucht. Das Steuergerät hat den Crash gespeichert und ist nach "
                "Herstellervorgabe zu tauschen; danach wird das neue Gerät codiert.",
     "src": "Netz: Recherche 3.6, FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2, "situation": _SATZ, "nr": 16,
     "q": "Wie wird eine nicht ausgelöste, defekte Airbag-Einheit entsorgt?",
     "opts": ["Nicht über den Hausmüll – Rückgabe über den Hersteller/Entsorger bzw. fachgerecht auslösen lassen",
              "Im Restmüll, wenn der Stecker abgezogen ist",
              "Im Altmetall-Container der Werkstatt, weil Gehäuse und Gasgenerator größtenteils aus Metall bestehen",
              "In Wasser einweichen und danach in den Hausmüll"],
     "correct": 0,
     "explain": "Eine nicht ausgelöste Einheit enthält noch die Treibladung und bleibt ein pyrotechnischer Gegenstand. "
                "Vor der Verschrottung eines Fahrzeugs werden die Einheiten fachgerecht ausgelöst.",
     "src": "Netz: Recherche 3.4/3.6"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4, "situation": _SATZ, "nr": 17,
     "q": "Sie haben den Stecker unter dem Sitz als Fehlerursache gefunden. Welche Antwort nennt vier richtige Abschlussarbeiten?",
     "opts": ["Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie anklemmen und dabei vom "
              "Fahrersitz aus die Kontrollleuchte beobachten; Fehlerspeicher auslesen und löschen; Messwerte kontrollieren",
              "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie nach Herstellervorgabe anklemmen; "
              "Fehlerspeicher auslesen und löschen; Zündkreiswiderstand am Stecker mit dem Multimeter nachmessen",
              "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie nach Herstellervorgabe anklemmen, "
              "niemand im Fahrzeug; Fehlerspeicher auslesen und löschen; Kontrollleuchte und Messwerte kontrollieren",
              "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Steuergerät neu codieren, weil der "
              "Sitzausbau die gespeicherte Codierung löscht; Fehlerspeicher auslesen und löschen; Kontrollleuchte kontrollieren"],
     "correct": 2,
     "explain": "Beim Anklemmen der Batterie hält sich niemand im Fahrzeug auf. Danach Fehlerspeicher auslesen und löschen, "
                "Kontrollleuchte (Selbsttest, geht aus) und Zündkreis-Messwerte im Tester kontrollieren. Erst wenn die Leuchte nach dem Selbsttest erlischt und kein Fehler mehr gespeichert ist, ist das System "
                "wieder voll einsatzbereit. Die Arbeit wird im Auftrag dokumentiert.",
     "src": "FW"},
    {"cat": "Airbag", "level": 3, "typ": "zuordnung", "pkt": 4, "situation": _SATZ, "nr": 18,
     "q": "Zum Schluss erklären Sie dem Kunden den Ablauf eines Frontaufpralls. Ordnen Sie den Zeitpunkten nach Aufprallbeginn "
          "(Richtwerte) das Ereignis zu.",
     "paare": [["ca. 10–20 ms", "Steuergerät entscheidet über die Auslösung und bestromt die Zündpille"],
               ["ca. 30–40 ms", "Airbag ist voll aufgeblasen"],
               ["ca. 60–80 ms", "Insasse taucht in den Airbag ein, Gas entweicht über Ausströmöffnungen"],
               ["ca. 100–150 ms", "Airbag ist weitgehend entleert, die Sicht ist wieder frei"]],
     "explain": "Die Zeiten sind Richtwerte und hängen von Fahrzeug, Aufprallart und System ab. Wichtig ist die Reihenfolge: "
                "Entscheidung in wenigen Millisekunden, Airbag voll, bevor der Insasse ankommt, danach Entleerung.",
     "src": "Netz: Recherche 3.6 (Aufblasen ca. 30–50 ms), FW (Richtwerte)"},

    # ---------------------------------------------------------------- Einzelfragen
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Welche Beschreibung von Aufbau und einstufiger bzw. zweistufiger Ausführung eines pyrotechnischen Gasgenerators ist richtig?",
     "opts": ["Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; "
              "einstufig: eine Ladung; zweistufig: zwei Ladungen, die immer gleichzeitig zünden, damit der Airbag bei jedem Unfall schneller voll ist",
              "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; "
              "einstufig: eine Ladung; zweistufig: zwei getrennt zündbare Ladungen, je nach Unfallschwere nur Stufe 1 oder beide zeitversetzt",
              "Gehäuse mit Druckluftflasche und Magnetventil; das Steuergerät öffnet das Ventil, die Luft strömt in den Luftsack; "
              "einstufig: ein Ventil; zweistufig: zwei Ventile, je nach Unfallschwere eines oder beide",
              "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; "
              "einstufig: eine Ladung; zweistufig: die zweite Ladung füllt den Airbag nach dem Entleeren für einen Folgeaufprall neu"],
     "correct": 1,
     "explain": "Aufbau: Gehäuse mit Zündpille, Treibladung (fester Treibstoff) und Filter bzw. Kühlsieb. Die bestromte Zündpille "
                "zündet die Treibladung, das Gas strömt in den Luftsack. Einstufig: eine Treibladung, immer gleiche Aufblaswirkung. "
                "Zweistufig: zwei getrennt zündbare Ladungen – je nach Unfallschwere und Gurtstatus zündet nur Stufe 1 oder "
                "beide zeitversetzt. Mit zwei Stufen kann das Steuergerät den Airbag weicher oder härter füllen. Auch eine nicht gezündete "
                "zweite Stufe ist nach einem Unfall noch scharf – Einheit trotzdem als pyrotechnischen Gegenstand behandeln.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Was kennzeichnet einen Hybrid-Gasgenerator?",
     "opts": ["Ein unter hohem Druck gespeichertes Gas wird durch eine pyrotechnische Ladung freigegeben und erwärmt",
              "Das Gas wird ausschließlich von einer elektrischen Pumpe erzeugt, die von der Energiereserve gespeist wird",
              "Er nutzt Druckluft aus dem Bremssystem",
              "Er kann nach der Auslösung wieder befüllt werden"],
     "correct": 0,
     "explain": "Der Hybrid-Gasgenerator kombiniert einen Druckgasspeicher mit einer kleinen pyrotechnischen Ladung. "
                "Er wird oft bei großen Airbags wie dem Kopfairbag eingesetzt. Auch er ist ein pyrotechnischer Gegenstand.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie die Eigenschaften der passenden Gurtstraffer-Bauart zu.",
     "paare": [["Wird durch eine Treibladung ausgelöst", "pyrotechnischer Gurtstraffer"],
               ["Muss nach der Auslösung ersetzt werden", "pyrotechnischer Gurtstraffer"],
               ["Ein Elektromotor strafft den Gurt, z. B. bei Notbremsung oder Schleudern", "reversibler elektrischer Gurtstraffer"],
               ["Kann mehrfach wirken und gibt den Gurt danach wieder frei", "reversibler elektrischer Gurtstraffer"],
               ["Unterliegt dem Sprengstoffrecht (Kategorie P1)", "pyrotechnischer Gurtstraffer"]],
     "explain": "Der reversible Straffer arbeitet vorbeugend schon vor einem möglichen Aufprall. Der pyrotechnische Straffer "
                "zündet erst beim Crash und ist danach verbraucht.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Welche Antwort beschreibt die Aufgabe der Sitzbelegungserkennung am Beifahrersitz und zwei Auswirkungen auf das "
          "Rückhaltesystem richtig?",
     "opts": ["Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz löst bei einem Unfall kein Airbag "
              "im ganzen Fahrzeug aus; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung",
              "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz wird der Beifahrerairbag mit "
              "beiden Stufen gezündet; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung",
              "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz lösen Beifahrerairbag bzw. "
              "Gurtstraffer nicht unnötig aus; bei belegtem Sitz ohne Gurt wird der Beifahrerairbag abgeschaltet",
              "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz lösen Beifahrerairbag bzw. "
              "Gurtstraffer nicht unnötig aus; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung"],
     "correct": 3,
     "explain": "Die Sitzbelegungserkennung (z. B. Sensormatte im Sitzpolster) erkennt, ob der Sitz belegt ist. Bei unbelegtem "
                "Sitz werden Beifahrerairbag bzw. Gurtstraffer nicht unnötig ausgelöst, bei belegtem Sitz ohne Gurt kommt "
                "die Gurtwarnung. Unnötige Auslösungen verursachen hohe Reparaturkosten. Nach Arbeiten am Sitz muss die Sensormatte richtig "
                "angeschlossen sein, sonst erscheint ein Fehler.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 3,
     "q": "Eine Kundin möchte eine rückwärtsgerichtete Babyschale auf dem Beifahrersitz befestigen. Was müssen Sie ihr erklären?",
     "opts": ["Beifahrerairbag eingeschaltet lassen, weil er die Babyschale zusätzlich abpolstert; den Sitz ganz nach "
              "hinten schieben genügt",
              "Beifahrerairbag abschalten, weil der sich entfaltende Airbag die Babyschale mit großer Wucht trifft; danach "
              "kann er dauerhaft aus bleiben, Erwachsene schützt dann der Gurt allein ausreichend",
              "Beifahrerairbag nach Herstellerangabe abschalten, weil er die Babyschale mit großer Wucht trifft; Anzeige "
              "„Beifahrerairbag aus“ kontrollieren und danach wieder einschalten",
              "Beifahrerairbag abschalten, das geht nur in der Werkstatt durch Abziehen des Airbag-Steckers; danach "
              "wieder anstecken lassen"],
     "correct": 2,
     "explain": "Der Beifahrerairbag muss abgeschaltet sein (Schlüsselschalter bzw. Menü nach Herstellerangabe), weil der "
                "sich entfaltende Airbag die Babyschale mit großer Wucht trifft. Anzeige „Beifahrerairbag aus“ kontrollieren "
                "und nach dem Entfernen der Babyschale wieder einschalten. Die Babyschale sitzt sehr nah an der Instrumententafel. Wird der Airbag danach nicht wieder eingeschaltet, "
                "fehlt einem erwachsenen Beifahrer der Schutz.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Beim Einbau einer neuen Wickelfeder müssen die Räder geradeaus stehen und die Wickelfeder in Mittelstellung sein. "
          "Welche Begründung und welche Folge eines Fehlers sind richtig?",
     "opts": ["Die Wickelfeder ist die Rückstellfeder des Lenkrads; nur aus der Mittelstellung läuft das Lenkrad nach "
              "Kurven zurück; bei Fehler zieht das Fahrzeug einseitig",
              "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es "
              "für vollen Lenkeinschlag; bei Fehler reißt das Band – Fahrerairbag, Hupe und Lenkradtasten ohne Funktion",
              "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es "
              "für vollen Lenkeinschlag; bei Fehler löst der Fahrerairbag beim Lenken aus",
              "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es "
              "für vollen Lenkeinschlag; bei Fehler blockiert das elektrische Lenkschloss und der Motor startet nicht mehr"],
     "correct": 1,
     "explain": "Die Wickelfeder ist ein aufgewickeltes Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen. "
                "Nur aus der Mittelstellung reicht die Länge für vollen Lenkeinschlag nach links und rechts. Bei falschem "
                "Einbau reißt das Band beim Lenken – Zündkreis Fahrerairbag unterbrochen, Hupe und Lenkradtasten ohne "
                "Funktion. Neue Wickelfedern sind meist mit einer Transportsicherung in Mittelstellung fixiert. Die Sicherung erst nach "
                "dem Einbau entfernen und die Wickelfeder bei abgenommenem Lenkrad nicht verdrehen.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 4,
     "q": "Bei einem Unfall sendet das Airbag-Steuergerät ein Crashsignal über den Datenbus. Ordnen Sie den Systemen ihre Reaktion zu.",
     "paare": [["Zentralverriegelung", "Türen entriegeln"], ["Warnblinkanlage", "einschalten"],
               ["Kraftstoffpumpe", "abschalten"], ["eCall-Notrufsystem", "Notruf mit Fahrzeugposition absetzen"]],
     "ablenker": ["Motorleistung erhöhen"],
     "explain": "Das Crashsignal hilft Rettern (Türen offen, Notruf), warnt den Verkehr und senkt die Brandgefahr, "
                "weil kein Kraftstoff mehr gefördert wird.",
     "src": "Netz: Recherche 3.4"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Manche Fahrzeuge haben am Batterie-Pluskabel einen pyrotechnischen Batterietrennschalter. Welche Beschreibung "
          "von Aufgabe und Folgen der Auslösung ist richtig?",
     "opts": ["Trennt bei einem schweren Unfall die Hauptleitung zu Starter und Generator; verhindert Kurzschluss und Brand; "
              "danach über einen Reset-Knopf wieder einschalten und weiterverwenden",
              "Trennt bei jedem Abstellen des Motors die Batterie vom Bordnetz; verhindert eine Tiefentladung; "
              "wird beim nächsten Start automatisch wieder geschlossen",
              "Trennt bei einem Unfall die Leitung zum Airbag-Steuergerät, damit keine weiteren Airbags auslösen; "
              "danach muss das Bauteil ersetzt werden",
              "Trennt bei einem schweren Unfall die Hauptleitung zu Starter und Generator; verhindert Kurzschluss und Brand; "
              "danach ersetzen, wichtige Verbraucher bleiben meist versorgt"],
     "correct": 3,
     "explain": "Der Trennschalter trennt bei einem schweren Unfall die Hauptleitung von der Batterie zu Starter und Generator "
                "und verhindert so Kurzschluss und Brand durch eine beschädigte, nicht abgesicherte Plusleitung. Nach der "
                "Auslösung muss er ersetzt werden; wichtige Verbraucher (z. B. Warnblinker) bleiben meist versorgt. "
                "Besonders wichtig, wenn die Batterie im Heck sitzt und die Plusleitung durch das ganze Fahrzeug läuft. "
                "Der Trennschalter ist ebenfalls ein pyrotechnisches Bauteil.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Wozu dient eine aktive Motorhaube?",
     "opts": ["Sie hebt sich bei einem erkannten Fußgängeraufprall hinten an, damit mehr Abstand zu harten Motorteilen entsteht",
              "Sie öffnet sich bei Überhitzung des Motors",
              "Sie senkt den Luftwiderstand bei hoher Geschwindigkeit",
              "Sie verriegelt sich bei einem Frontaufprall zusätzlich, damit keine Motorteile in den Innenraum oder auf die Straße fliegen"],
     "correct": 0,
     "explain": "Sensoren im Stoßfänger erkennen den Fußgängeraufprall, Aktuatoren (oft pyrotechnisch) heben die Haube an. "
                "Der Kopf des Fußgängers trifft dann auf eine nachgiebige Fläche.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Wie erfassen Upfront-Sensoren und Seitenaufprallsensoren einen Aufprall, und wie nutzt das Steuergerät die Signale?",
     "opts": ["Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, "
              "Drucksensoren in der Tür den Druckanstieg; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
              "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, "
              "Drucksensoren in der Tür den Druckanstieg; das Steuergerät löst aus, sobald ein einzelner dieser Sensoren anspricht, um Zeit zu sparen",
              "Upfront-Sensoren messen per Radar den Abstand zum Hindernis; Seitensensoren in B-Säule bzw. Schweller die "
              "Querbeschleunigung; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
              "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren messen die Längsverzögerung, Drucksensoren den "
              "Gasdruck im Seitenairbag; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität"],
     "correct": 0,
     "explain": "Upfront-Sensoren vorn messen die Verzögerung mit einem Beschleunigungssensor und melden einen Frontaufprall "
                "sehr früh. Seitenaufprallsensoren in B-Säule bzw. Schweller messen die Querbeschleunigung, Drucksensoren in "
                "der Tür den schnellen Druckanstieg, wenn die Tür eingedrückt wird. Das Steuergerät vergleicht die Signale "
                "mit seinem eigenen Beschleunigungssensor (Plausibilität), bevor es auslöst. Beim Seitenaufprall ist die Knautschzone sehr kurz – deshalb sitzen die Sensoren direkt in der Seite, "
                "damit das Steuergerät schnell genug entscheiden kann.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Sie bauen ein neues Airbag-Steuergerät ein. Was ist danach notwendig?",
     "opts": ["Es mit dem Diagnosetester auf die Fahrzeugausstattung codieren bzw. anlernen",
              "Nichts – es erkennt alle Airbags selbst",
              "Die Batterie 24 Stunden abgeklemmt lassen, damit es sich selbst auf die Ausstattung einstellt",
              "Jeden Zündkreis mit dem Multimeter anlernen"],
     "correct": 0,
     "explain": "Das Steuergerät muss wissen, welche Airbags, Gurtstraffer und Sensoren verbaut sind. Danach Fehlerspeicher "
                "auslesen und die Kontrollleuchte prüfen.",
     "src": "Netz: Recherche 3.4"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Für den Tausch der Wickelfeder muss das Lenkrad ab. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
     "schritte": ["Räder in Geradeausstellung bringen",
                  "Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
                  "Fahrerairbag ausbauen, Stecker trennen und mit der Polsterseite nach oben ablegen",
                  "Stellung des Lenkrads zur Lenksäule markieren",
                  "Lenkradschraube lösen und Lenkrad abnehmen"],
     "explain": "Die Geradeausstellung und die Markierung sorgen dafür, dass Lenkrad und Wickelfeder später wieder in "
                "Mittelstellung sitzen. Die Lenkradschraube nach Herstellerangabe ersetzen und mit Drehmoment anziehen.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "In einer Übungsschaltung im Labor werden zwei Widerstände mit 3,3 Ω und 6,8 Ω parallel geschaltet. "
          "Wie groß ist der Gesamtwiderstand?",
     "opts": ["10,1 Ω", "0,45 Ω", "22,44 Ω", "2,22 Ω"],
     "correct": 3,
     "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (3,3 Ω × 6,8 Ω) ÷ 10,1 Ω ≈ 2,22 Ω. Der Gesamtwiderstand "
                "ist immer kleiner als der kleinste Einzelwiderstand.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie groß ist der Strom, der durch eine Zündpille mit 2 Ω fließen würde, wenn versehentlich die Bordnetzspannung "
          "von 12 V anliegt?",
     "opts": ["24 A", "0,17 A", "6,0 A", "0,6 A"],
     "correct": 2,
     "explain": "I = U ÷ R = 12 V ÷ 2 Ω = 6 A. Zum Zünden reicht schon ein deutlich kleinerer Strom. Deshalb darf an einer "
                "Zündpille nie eine Spannung oder ein Messgerät angelegt werden – auch der Prüfstrom eines Multimeters ist gefährlich.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Zu welcher Kategorie pyrotechnischer Gegenstände gehören Airbag- und Gurtstraffereinheiten nach Sprengstoffrecht?",
     "opts": ["P1", "P2", "F4", "T2"],
     "correct": 0,
     "explain": "Kategorie P1 = pyrotechnische Gegenstände mit geringer Gefahr, z. B. Airbag- und Gurtstraffereinheiten. "
                "Für Ein- und Ausbau braucht man trotzdem Fachkunde bzw. Schulung, und die Tätigkeit muss angezeigt werden.",
     "src": "Netz: Recherche 3.4 (TÜV SÜD, Behördenportale)"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie lange müssen Sie nach dem Abklemmen der Batterie warten, bevor Sie an Airbag-Bauteilen arbeiten?",
     "opts": ["So lange, wie der Fahrzeughersteller es vorgibt",
              "Gar nicht – nach dem Abklemmen ist das System sofort spannungsfrei",
              "Immer genau 10 Sekunden",
              "Bis die Airbag-Kontrollleuchte erlischt"],
     "correct": 0,
     "explain": "Die Wartezeit hängt vom System ab und ist je nach Fahrzeug sehr unterschiedlich. Sie steht im "
                "Reparaturleitfaden des Herstellers. Grund ist die Energiereserve im Steuergerät.",
     "src": "Netz: Recherche 3.6 (Wartezeit nur nach Herstellerangabe)"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Sie prüfen im Innenraum bei eingeschalteter Zündung, die Airbag-Anlage ist also aktiv. Welche Antwort nennt drei "
          "richtige Verhaltensregeln?",
     "opts": ["Nicht im Entfaltungsbereich aufhalten; keine Werkzeuge auf oder vor Airbag-Abdeckungen legen; "
              "keine Spannung und kein Messgerät an Airbag-Stecker oder Zündkreis – nur mit Tester prüfen",
              "Nicht im Entfaltungsbereich aufhalten; Werkzeuge auf der Airbag-Abdeckung ablegen, dort verrutschen sie nicht; "
              "keine Spannung und kein Messgerät an Airbag-Stecker oder Zündkreis – nur mit Tester prüfen",
              "Nicht im Entfaltungsbereich aufhalten; keine Werkzeuge auf oder vor Airbag-Abdeckungen legen; "
              "Zündkreis zur Kontrolle kurz mit der Prüflampe auf Spannung prüfen",
              "Direkt vor dem Lenkrad arbeiten, um die Kontrollleuchte im Blick zu haben; keine Werkzeuge auf oder vor "
              "Airbag-Abdeckungen legen; nur mit Tester prüfen"],
     "correct": 0,
     "explain": "Nicht im Entfaltungsbereich der Airbags aufhalten (nicht vor Lenkrad oder Instrumententafel beugen), keine "
                "Gegenstände auf oder vor Airbag-Abdeckungen legen und keine Spannung oder Messgeräte an den Zündkreis "
                "anlegen. Löst ein Airbag ungewollt aus, ist der Bereich direkt vor der Abdeckung am gefährlichsten. "
                "Gegenstände würden dabei weggeschleudert.",
     "src": "FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Ein Kunde fragt, ob die Airbags in seinem 15 Jahre alten Fahrzeug wegen des Alters getauscht werden müssen. "
          "Wie gehen Sie vor?",
     "opts": ["Airbags nach der gesetzlichen Altersgrenze von 10 Jahren grundsätzlich tauschen; Fehlerspeicher auslesen; "
              "Rückrufe nicht abfragen, da sie nach so langer Zeit ohnehin verjährt sind",
              "Herstellerangaben bzw. Serviceplan auf ein Tausch- oder Prüfintervall prüfen; Selbsttest der Kontrollleuchte "
              "und Fehlerspeicher prüfen; offene Rückrufe des Herstellers abfragen",
              "Zündkreise mit dem Multimeter auf Zündfähigkeit messen; Selbsttest der Kontrollleuchte prüfen; "
              "bei ausreichendem Widerstand ist kein Tausch nötig",
              "Kein Handlungsbedarf, solange die Kontrollleuchte aus ist; Rückrufe betreffen nur Fahrzeuge in der "
              "Herstellergarantie"],
     "correct": 1,
     "explain": "Herstellerangaben bzw. Serviceplan auf ein Tausch- oder Prüfintervall prüfen: Ältere Systeme hatten teils "
                "feste Tauschintervalle, neuere gelten meist über die Lebensdauer als wartungsfrei. Funktion über Selbsttest "
                "und Fehlerspeicher prüfen, offene Rückrufe abfragen. Eine pauschale Altersgrenze gibt es nicht – maßgeblich ist der Hersteller. Rückrufaktionen wegen "
                "fehlerhafter Gasgeneratoren hat es schon gegeben, deshalb die Fahrgestellnummer prüfen.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Bauteilen des Airbag-Systems ihre Aufgabe zu.",
     "paare": [["Airbag-Steuergerät", "Wertet die Crashsignale aus und entscheidet über die Auslösung"],
               ["Zündpille", "Wird vom Zündstrom erhitzt und zündet die Treibladung"],
               ["Gasgenerator", "Erzeugt in Millisekunden das Gas für den Luftsack"],
               ["Wickelfeder", "Stellt die elektrische Verbindung zum drehbaren Lenkrad her"],
               ["Satellitensensor (Upfront/Seite)", "Meldet die Verzögerung frühzeitig vom Aufprallort an das Steuergerät"]],
     "ablenker": ["Regelt den Kraftstoffdruck im Rail"],
     "explain": "Steuergerät und Satelliten liefern die Signale, die Zündpille ist das Bindeglied zwischen Elektrik und "
                "Pyrotechnik, der Gasgenerator füllt den Luftsack.",
     "src": "Netz: Recherche 3.4"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Airbag-Arten ihren üblichen Einbauort zu.",
     "paare": [["Fahrerairbag", "Prallplatte des Lenkrads"],
               ["Beifahrerairbag", "Instrumententafel auf der Beifahrerseite"],
               ["Seitenairbag", "Sitzlehne außen oder Türverkleidung"],
               ["Kopfairbag (Vorhang)", "Dachrahmen über den Seitenscheiben"],
               ["Knieairbag", "Unter der Instrumententafel bzw. Lenksäulenverkleidung"]],
     "ablenker": ["Kofferraumboden"],
     "explain": "Wo ein Airbag sitzt, ist auf der Abdeckung meist mit „AIRBAG“ gekennzeichnet. Bei Arbeiten an Sitzen, "
                "Türverkleidungen oder Dachhimmel immer an die Airbags in diesen Bauteilen denken.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Welche Beschreibung von Aufgabe und Wirkungsweise des Gurtkraftbegrenzers ist richtig?",
     "opts": ["Zieht beim Aufprall das lose Gurtband straff; arbeitet mit einer Treibladung im Gurtschloss; "
              "muss nach der Auslösung ersetzt werden",
              "Begrenzt die Gurtkraft auf den Brustkorb; blockiert dazu das Gurtband vollständig, sobald eine bestimmte "
              "Kraft erreicht ist; der Insasse wird starr im Sitz gehalten und berührt den Airbag nicht",
              "Begrenzt die Geschwindigkeit, mit der der Gurt beim Anlegen ausgezogen wird; arbeitet mit einer "
              "Fliehkraftsperre; verhindert ein Einklemmen des Gurts",
              "Begrenzt die Gurtkraft auf den Brustkorb; gibt ab einer bestimmten Kraft kontrolliert Gurtband frei "
              "(z. B. Torsionsstab); der Insasse taucht kontrolliert in den Airbag ein"],
     "correct": 3,
     "explain": "Der Gurtkraftbegrenzer begrenzt die Kraft auf den Brustkorb (z. B. gegen Rippenbrüche). Ab einer bestimmten "
                "Gurtkraft gibt er kontrolliert Gurtband frei (z. B. Torsionsstab im Gurtaufroller), sodass der Insasse "
                "kontrolliert in den Airbag eintaucht. Ohne Kraftbegrenzer würde der gestraffte Gurt den Oberkörper sehr hart abfangen. Zusammen mit dem Airbag "
                "wird die Verzögerung auf einen längeren Weg verteilt.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 4,
     "q": "Welche Antwort nennt vier Dinge, die Sie bei Arbeiten in der Nähe ein- oder ausgebauter Airbag-Einheiten vermeiden müssen?",
     "opts": ["Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; "
              "Ablegen der Einheit mit der Polsterseite nach oben",
              "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; "
              "elektrostatisches Entladen am Fahrzeug vor dem Abstecken",
              "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; "
              "Prüfspannung oder Messgerät direkt an der Zündpille",
              "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; "
              "Auslesen der Zündkreis-Messwerte mit dem Diagnosetester"],
     "correct": 2,
     "explain": "Zu vermeiden: Wärme über ca. 100 °C, offene Flamme und Schweißen in der Nähe (Herstellervorgaben beachten); "
                "Fette, Reinigungs- oder Lösungsmittel auf der Abdeckung; Schläge und Stöße – heruntergefallene Einheiten "
                "nicht mehr einbauen; Prüfspannung oder Messgerät an der Zündpille. Wärme kann die Treibladung zünden, Lösungsmittel greifen Abdeckung und Sollbruchstelle an, und ein Sturz "
                "kann den Gasgenerator innen beschädigen.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Fehlereinträgen eines Zündkreises die wahrscheinliche Ursache zu.",
     "paare": [["Widerstand zu hoch", "Unterbrechung oder Übergangswiderstand am Stecker"],
               ["Widerstand zu niedrig", "Kurzschluss zwischen den beiden Zündkreisleitungen"],
               ["Kurzschluss nach Plus", "Zündkreisleitung scheuert an einer spannungsführenden Leitung"],
               ["Kurzschluss nach Masse", "Zündkreisleitung scheuert an der Karosserie"]],
     "ablenker": ["Batterie zu schwach geladen"],
     "explain": "Das Steuergerät misst den Zündkreis ständig mit sehr kleinem Prüfstrom und erkennt so Abweichungen vom "
                "Sollbereich. Die Ursache wird dann mit Prüfadapter und Leitungsprüfung nach Herstellervorgabe eingegrenzt.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Bringen Sie die Funktionskette bei einem Frontaufprall in die richtige Reihenfolge.",
     "schritte": ["Beschleunigungssensoren erfassen die starke Verzögerung",
                  "Steuergerät vergleicht die Signale (Plausibilität) und entscheidet über die Auslösung",
                  "Steuergerät bestromt die Zündpille",
                  "Zündpille zündet die Treibladung im Gasgenerator",
                  "Gas strömt in den Luftsack, die Abdeckung reißt an der Sollbruchstelle auf",
                  "Insasse taucht in den gefüllten Airbag ein, Gas entweicht über Ausströmöffnungen"],
     "explain": "Die ganze Kette läuft in wenigen Millisekunden ab. Der Airbag muss voll sein, bevor der Insasse ihn erreicht – "
                "und sich danach entleeren, damit er abfedert statt zurückzuschleudern.",
     "src": "Netz: Recherche 3.6, FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Ein Kunde ist beim Einparken langsam gegen einen Poller gefahren. Die Airbags haben nicht ausgelöst. "
          "Wie beurteilen Sie das?",
     "opts": ["Normal – die Verzögerung lag unter der Auslöseschwelle, der Gurt reicht als Schutz",
              "Fehler – Airbags müssen bei jedem Aufprall auslösen",
              "Fehler – die Airbags sind sicher dauerhaft abgeschaltet",
              "Normal – Airbags lösen nur bei einem Seitenaufprall oder Überschlag aus, nie bei Frontaufprall"],
     "correct": 0,
     "explain": "Frontairbags lösen erst bei einem deutlichen Aufprall aus (Richtwert: ab etwa 30 km/h, je nach Fahrzeug "
                "und Hindernis). Bei leichten Remplern würde der Airbag mehr schaden als nützen.",
     "src": "Netz: Recherche 3.6 (kfz-tech.de)"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Nach einem Lenkradausbau funktionieren Hupe und Lenkradtasten nicht mehr und die Airbag-Leuchte ist an. "
          "Welches Bauteil ist am wahrscheinlichsten beschädigt?",
     "opts": ["Wickelfeder (Kontakteinheit)", "Upfront-Sensor", "Gurtstraffer", "Seitenaufprallsensor Fahrertür"],
     "correct": 0,
     "explain": "Über die Wickelfeder laufen Fahrerairbag, Hupe und Lenkradtasten. Fallen alle zugleich aus, ist meist das "
                "Flachbandkabel gerissen – oft, weil das Lenkrad bei abgenommener Wickelfeder verdreht wurde.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Bei einer Inspektion fällt Ihnen auf, dass die Airbag-Kontrollleuchte beim Einschalten der Zündung gar nicht "
          "aufleuchtet. Wie ist der Befund zu beurteilen, und wie gehen Sie weiter vor?",
     "opts": ["In Ordnung: Ein fehlerfreies System zeigt keinen Selbsttest an; die Leuchte geht nur bei einem Fehler an; "
              "kein weiteres Vorgehen nötig, Kunden nur auf die nächste Inspektion hinweisen",
              "Fehler: Ohne Selbsttest würde auch ein Systemfehler nicht gemeldet; Fehlerspeicher von "
              "Airbag-Steuergerät und Kombiinstrument auslesen; Kunden informieren",
              "In Ordnung, wenn der Beifahrerairbag abgeschaltet ist; nur die Anzeige „Beifahrerairbag aus“ kontrollieren; "
              "Kunden nicht weiter informieren",
              "Fehler, aber ohne Einfluss auf die Sicherheit; die Airbags funktionieren trotzdem; Leuchte bei der "
              "nächsten Inspektion tauschen"],
     "correct": 1,
     "explain": "Der Befund ist ein Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde dem Fahrer nicht "
                "gemeldet. Mögliche Ursachen sind Leuchte bzw. Anzeige im Kombiinstrument, Datenbus/Ansteuerung oder ein "
                "Steuergerät ohne Versorgung oder manipuliert. Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument "
                "auslesen und den Kunden informieren. Die Kontrollleuchte ist Teil der Sicherheitsfunktion. Leuchtet sie nie, kann der Fahrer einen Ausfall des "
                "Airbag-Systems nicht erkennen – das ist auch bei der Hauptuntersuchung ein Mangel.",
     "src": "FW"},

    # ---------------------------------------------------------------- Aufgabensatz airbag-wickelfeder
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 1,
     "q": "Lesen Sie den Auftrag. Warum spricht das gleichzeitige Auftreten aller drei Beanstandungen für eine gemeinsame Fehlerstelle?",
     "opts": ["Fahrerairbag, Hupe und Lenkradtasten sind alle über das drehbare Lenkrad und damit über die Wickelfeder angeschlossen",
              "Fahrerairbag, Hupe und Lenkradtasten werden alle vom Airbag-Steuergerät versorgt und bei einem Fehler gemeinsam abgeschaltet",
              "Das neue Lenkrad ist noch nicht codiert; eine fehlende Codierung meldet das Steuergerät als „Widerstand zu hoch“",
              "Hupe und Lenkradtasten fallen absichtlich aus, damit der Fahrer den Airbag-Fehler bemerkt und die Werkstatt aufsucht"],
     "correct": 0,
     "explain": "Alle drei Funktionen müssen vom feststehenden Kabelbaum in das drehbare Lenkrad. Diese Verbindung stellt die "
                "Wickelfeder (Flachbandkabel) her. Fallen alle drei nach Arbeiten am Lenkrad gleichzeitig aus, ist sie die "
                "wahrscheinlichste gemeinsame Ursache. Das Airbag-Steuergerät schaltet Hupe und Tasten nicht ab, und eine "
                "fehlende Codierung wird nicht als Zündkreiswiderstand gemeldet.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 6, "situation": _SATZ2, "nr": 2, "bild": _PLAN,
     "q": "Verschaffen Sie sich einen Überblick über den Schaltplan-Auszug. Ordnen Sie den Nummern im Bild die Bauteile zu.",
     "paare": [["①", "Wickelfeder (Kontakteinheit)"], ["②", "Steckverbindung unter dem Sitz"],
               ["③", "Sicherung des Steuergeräts"], ["④", "Airbag-Kontrollleuchte"],
               ["⑤", "Upfront-Sensor"], ["⑥", "Seitenaufprallsensor"]],
     "ablenker": ["Hupenrelais", "Energiereserve (Kondensator)"],
     "explain": "Die Wickelfeder ① liegt zwischen den Trennstellen A und B im Zündkreis des Fahrerairbags. Die Steckverbindung ② "
                "wird beim Sitzausbau getrennt. Die Sicherung ③ (F12) schützt die Versorgung über Klemme 15, die Kontrollleuchte ④ "
                "(H1) schaltet das Steuergerät über Pin 13. Die Satelliten ⑤ (vorn) und ⑥ (Tür) melden die Verzögerung.",
     "src": "Eigener Schaltplan"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 3, "bild": _PLAN,
     "q": "An welchen Pins des Airbag-Steuergeräts A1 liegen laut Schaltplan die beiden Zündkreise, die im Fehlerspeicher stehen?",
     "opts": ["Pin 1/2 (Stufe 1) und Pin 5/6 (Stufe 2)",
              "Pin 3/4 (Stufe 1) und Pin 9/10 (Stufe 2)",
              "Pin 1/2 (Stufe 1) und Pin 3/4 (Stufe 2)",
              "Pin 11/12 (Stufe 1) und Pin 13/14 (Stufe 2)"],
     "correct": 2,
     "explain": "Beide Stufen des Fahrerairbags laufen über die Wickelfeder ①: Stufe 1 an Pin 1 und 2, Stufe 2 an Pin 3 und 4. "
                "Pin 5/6 ist der Beifahrerairbag, Pin 9/10 der Seitenairbag, Pin 11/12 die Versorgung (Klemme 15 und Masse).",
     "src": "Eigener Schaltplan"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 4,
     "q": "Warum hat der Fahrerairbag dieses Fahrzeugs zwei getrennte Zündkreise?",
     "opts": ["Ein Zündkreis zündet den Airbag, der zweite dient als Reserve, falls die erste Zündpille beim Unfall versagt",
              "Ein Zündkreis gehört zum Fahrerairbag, der zweite zum Knieairbag unter der Lenksäulenverkleidung",
              "Ein Zündkreis zündet den Airbag, über den zweiten misst das Steuergerät den Gasdruck im Luftsack",
              "Der Gasgenerator hat zwei Ladungen; je nach Unfallschwere zündet nur Stufe 1 oder zeitversetzt auch Stufe 2"],
     "correct": 3,
     "explain": "Der zweistufige Gasgenerator hat zwei getrennt zündbare Treibladungen mit je einer Zündpille. Bei leichterem "
                "Aufprall zündet nur Stufe 1 (weichere Füllung), bei schwerem zusätzlich zeitversetzt Stufe 2. Eine "
                "Reserve-Zündpille gibt es nicht, und ein Knieairbag wäre ein eigenes Bauteil mit eigenem Zündkreis.",
     "src": "Netz: Patent US 6199903, FW"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 5, "situation": _SATZ2, "nr": 5,
     "q": "Sie wollen den Fehler mit einem Prüfadapter (Ersatzwiderstand) eingrenzen. Bringen Sie die Arbeitsschritte in die "
          "richtige Reihenfolge.",
     "schritte": ["Fehlerspeicher auslesen und Messwerte der Zündkreise notieren",
                  "Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
                  "Fahrerairbag ausbauen, Stecker an Trennstelle A trennen, Airbag mit der Polsterseite nach oben ablegen",
                  "Prüfadapter an Trennstelle A anstelle des Fahrerairbags anschließen",
                  "Batterie anklemmen (niemand im Fahrzeug), Zündung einschalten",
                  "Fehlerspeicher löschen, erneut auslesen und das Ergebnis bewerten"],
     "explain": "Erst den Ist-Zustand sichern, dann das System stromlos machen und die Energiereserve entladen lassen. Der "
                "Prüfadapter ersetzt die Zündpille, so kann gefahrlos weiter geprüft werden. Erst wenn er angeschlossen ist, "
                "kommt wieder Spannung aufs System; das erneute Auslesen zeigt, ob der Fehler bleibt.",
     "src": "Netz: Recherche ausbau-airbag, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 4, "situation": _SATZ2, "nr": 6,
     "q": "Messwertblock im Diagnosetester: Fahrer Stufe 1 über 10 Ω (Messbereich überschritten), Fahrer Stufe 2 über 10 Ω, "
          "Beifahrer 2,3 Ω, Gurtstraffer Fahrer 2,1 Ω, Seitenairbag Fahrer 2,4 Ω – die letzten drei liegen im Sollbereich "
          "laut Herstellerangabe. Wie beurteilen Sie die Werte?",
     "opts": ["Beide Fahrer-Zündkreise haben einen Kurzschluss; die übrigen sind in Ordnung – der Fehler liegt im gemeinsamen Weg zum Fahrerairbag",
              "Beide Fahrer-Zündkreise sind unterbrochen; die übrigen sind in Ordnung – der Fehler liegt im gemeinsamen Weg zum Fahrerairbag",
              "Beide Fahrer-Zündkreise sind unterbrochen; weil auch die anderen Werte leicht schwanken, ist das Steuergerät defekt",
              "Die Fahrer-Zündkreise sind in Ordnung, weil das Steuergerät bei zweistufigen Airbags immer so hohe Werte anzeigt"],
     "correct": 1,
     "explain": "Ein Widerstand über dem Messbereich bedeutet Unterbrechung oder sehr hohen Übergangswiderstand. Da beide Stufen "
                "gleichzeitig betroffen sind und die übrigen Zündkreise stimmen, liegt der Fehler auf der Strecke, die beide "
                "gemeinsam haben: Stecker, Wickelfeder, Leitung oder Airbag-Einheit. Ein Kurzschluss würde einen zu "
                "niedrigen Widerstand ergeben.",
     "src": "FW (Messwerte als Beispiel)"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4, "situation": _SATZ2, "nr": 7, "bild": _PLAN,
     "q": "Mit dem Prüfadapter an Trennstelle A (anstelle des Fahrerairbags) meldet der Tester für beide Stufen weiterhin "
          "„Widerstand zu hoch“. Welche Schlussfolgerung ist richtig?",
     "opts": ["Der Fahrerairbag ist defekt, weil der Fehler mit dem Prüfadapter unverändert bleibt; er muss ersetzt werden",
              "Der Prüfadapter ist sicher falsch angeschlossen, weil ein Ersatzwiderstand jeden Zündkreisfehler verschwinden lässt",
              "Nicht der Fahrerairbag; der Fehler liegt zwischen A und Steuergerät (Wickelfeder, Stecker B, Leitung, Steuergerät)",
              "Der Fehler liegt im Seitenairbag-Zündkreis, weil das Steuergerät die Fehler der Zündkreise vertauscht anzeigt"],
     "correct": 2,
     "explain": "Der Prüfadapter ersetzt die Zündpille durch einen passenden Widerstand. Bleibt der Fehler, ist der Airbag selbst "
                "nicht schuld – die Unterbrechung liegt davor, also zwischen Trennstelle A und Steuergerät. Wäre der Fehler mit "
                "Adapter verschwunden, läge er in der Airbag-Einheit oder ihrem Stecker.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4, "situation": _SATZ2, "nr": 8, "bild": _PLAN,
     "q": "Nun schließen Sie den Prüfadapter an Trennstelle B an (unterhalb der Wickelfeder, Lenksäulenseite). Der Tester zeigt "
          "für beide Stufen 2,3 Ω im Sollbereich. Wo liegt der Fehler?",
     "opts": ["Im Steuergerät A1, denn mit dem Adapter an B misst es nur noch seinen eigenen internen Prüfwiderstand",
              "In der Leitung von B zum Steuergerät, denn auf diesem Abschnitt laufen beide Stufen gemeinsam",
              "In der Airbag-Einheit, denn der Fehler verschwindet erst, wenn der Adapter weiter unten an B steckt",
              "In der Wickelfeder ① samt ihren Anschlüssen, denn ab Trennstelle B zum Steuergerät ist alles in Ordnung"],
     "correct": 3,
     "explain": "Adapter an A: Fehler bleibt → Fehler zwischen A und Steuergerät. Adapter an B: Werte in Ordnung → Leitung B–"
                "Steuergerät und Steuergerät sind in Ordnung. Übrig bleibt der Abschnitt zwischen B und A, also die Wickelfeder. "
                "Dieses schrittweise Eingrenzen mit dem Ersatzwiderstand ersetzt das verbotene Messen an der Zündpille.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "situation": _SATZ2, "nr": 9,
     "q": "Die ausgebaute Wickelfeder soll zusätzlich mit dem Ohmmeter auf Durchgang geprüft werden. Wann ist das zulässig?",
     "opts": ["Nur bei eingestecktem Fahrerairbag, weil sonst die offene Kurzschlussbrücke jede Messung verfälscht",
              "Ausgebaut und ohne angeschlossenen Airbag bzw. Steuergerät – sie enthält selbst keine Pyrotechnik",
              "Nie, weil die Wickelfeder selbst eine kleine Treibladung enthält und beim Messen auslösen kann",
              "Nur bei eingeschalteter Zündung, damit das Steuergerät den Prüfstrom des Ohmmeters überwacht"],
     "correct": 1,
     "explain": "Die Wickelfeder ist ein aufgewickeltes Flachbandkabel ohne Treibladung. Ausgebaut und ohne angeschlossene "
                "Zündpille dürfen die einzelnen Bahnen nach Herstellerangabe auf Durchgang geprüft werden. Gefährlich wäre "
                "die Messung nur, wenn der Prüfstrom durch eine angeschlossene Zündpille fließen könnte.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 10,
     "q": "Bei der Sichtprüfung ist das Flachbandkabel in der Wickelfeder abgerissen. Was ist die wahrscheinlichste Ursache?",
     "opts": ["Der Prüfstrom beim Selbsttest hat das Flachbandkabel überlastet, weil das neue Lenkrad mehr Strom zieht",
              "Die Wickelfeder wurde beim Tausch nicht in Mittelstellung eingebaut oder bei abgenommenem Lenkrad verdreht",
              "Das neue Lenkrad ist schwerer; das Flachbandkabel reißt durch die höhere Fliehkraft beim schnellen Lenken",
              "Die Batterie wurde beim Lenkradtausch nicht abgeklemmt, dadurch ist das Flachbandkabel durchgebrannt"],
     "correct": 1,
     "explain": "Das Flachbandkabel reicht nur für eine bestimmte Zahl Lenkradumdrehungen nach links und rechts. Wird die "
                "Wickelfeder außermittig eingebaut oder bei abgenommenem Lenkrad verdreht, reicht die Länge zu einer Seite "
                "nicht, und das Band reißt beim vollen Lenkeinschlag. Der Prüfstrom des Steuergeräts ist viel zu klein, um das "
                "Kabel zu beschädigen.",
     "src": "Netz: kfz-dietrich (Wickelfeder nach Lenkradausbau), FW"},
    {"cat": "Airbag", "level": 2, "typ": "zuordnung", "pkt": 5, "situation": _SATZ2, "nr": 11,
     "q": "Ordnen Sie zu, über welchen Weg die Bauteile mit dem Kabelbaum des Fahrzeugs verbunden sind.",
     "paare": [["Zündkreis Fahrerairbag Stufe 1", "über die Wickelfeder"],
               ["Hupentaster im Lenkrad", "über die Wickelfeder"],
               ["Multifunktionstasten im Lenkrad", "über die Wickelfeder"],
               ["Zündkreis Seitenairbag in der Sitzlehne", "über die Steckverbindung unter dem Sitz"],
               ["Zündkreis Beifahrerairbag", "fest über den Kabelbaum der Instrumententafel"]],
     "ablenker": ["über die Kurzschlussbrücke"],
     "explain": "Alles, was im drehbaren Lenkrad sitzt, braucht die Wickelfeder als Verbindung – deshalb fallen bei einem Riss "
                "Airbag, Hupe und Tasten gemeinsam aus. Der Seitenairbag im Sitz hat eine Trennstelle unter dem Sitz, der "
                "Beifahrerairbag sitzt fest in der Instrumententafel.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 5, "situation": _SATZ2, "nr": 12,
     "q": "Bringen Sie die Schritte für den Einbau der neuen Wickelfeder in die richtige Reihenfolge "
          "(das System ist stromlos, die Wartezeit ist abgelaufen).",
     "schritte": ["Prüfen, ob die Räder in Geradeausstellung stehen",
                  "Neue Wickelfeder mit Transportsicherung (Mittelstellung) aufsetzen und befestigen",
                  "Transportsicherung entfernen",
                  "Lenkrad nach Markierung aufsetzen, neue Lenkradschraube mit Drehmoment nach Herstellerangabe anziehen",
                  "Stecker des Fahrerairbags hörbar einrasten lassen und Airbag einbauen",
                  "Batterie anklemmen, dabei hält sich niemand im Fahrzeug auf"],
     "explain": "Die Transportsicherung hält die neue Wickelfeder in Mittelstellung und kommt erst ab, wenn sie befestigt ist. "
                "Das Lenkrad nach Markierung aufsetzen, damit es bei Geradeausfahrt gerade steht. Der Airbag wird als Letztes "
                "eingesteckt, erst danach kommt die Batterie wieder dran.",
     "src": "FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 13,
     "q": "In diesem Fahrzeug ist der Lenkwinkelsensor mit der Wickelfeder zu einer Baueinheit zusammengefasst. "
          "Was ist nach dem Tausch zusätzlich nötig?",
     "opts": ["Nichts – der Lenkwinkelsensor liefert nur dem Radio ein Signal und braucht keinen Abgleich",
              "Achsvermessung mit Einstellung der Spur, weil sich durch den Tausch die Spurstangen verstellt haben",
              "Neucodierung des Airbag-Steuergeräts, weil der Lenkwinkelsensor die Airbags im Lenkrad auslöst",
              "Grundeinstellung (Nullabgleich) des Lenkwinkelsensors mit dem Diagnosetester nach Herstellerangabe"],
     "correct": 3,
     "explain": "Der Lenkwinkelsensor meldet dem ESP den Lenkwinkel. Nach dem Tausch kennt er die Geradeausstellung nicht; ohne "
                "Grundeinstellung mit dem Tester leuchtet die ESP-Leuchte, oder das ESP greift falsch ein. Die Spur ändert sich "
                "durch den Tausch der Wickelfeder nicht.",
     "src": "Netz: Recherche 3.6 (Lenkwinkelsensor anlernen), FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 4, "situation": _SATZ2, "nr": 14,
     "q": "Welche Antwort nennt vier passende Abschlussprüfungen nach dem Tausch der Wickelfeder?",
     "opts": ["Fehlerspeicher auslesen und löschen; Selbsttest der Kontrollleuchte; Zündkreis Fahrerairbag am Stecker mit dem "
              "Multimeter nachmessen; Probefahrt",
              "Fehlerspeicher auslesen und löschen; Hupe und Lenkradtasten prüfen; Airbag-Kontrollleuchte mit dem Tester "
              "dauerhaft ausschalten; Probefahrt",
              "Fehlerspeicher auslesen, aber nicht löschen, damit der Kunde den Fehler sieht; Hupe und Lenkradtasten prüfen; "
              "Selbsttest der Kontrollleuchte; Probefahrt",
              "Fehlerspeicher auslesen und löschen; Selbsttest der Kontrollleuchte; Hupe und Lenkradtasten prüfen; Probefahrt – "
              "Lenkrad steht bei Geradeausfahrt gerade"],
     "correct": 3,
     "explain": "Erst wenn der Fehlerspeicher leer bleibt und die Kontrollleuchte nach dem Selbsttest erlischt, ist der Airbag "
                "wieder einsatzbereit. Hupe und Tasten zeigen, dass alle Bahnen der Wickelfeder leiten. Bei der Probefahrt muss "
                "das Lenkrad gerade stehen, sonst stimmt die Mittelstellung nicht. Mit dem Multimeter wird am Zündkreis nie gemessen.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "situation": _SATZ2, "nr": 15,
     "q": "Der Kunde fragt, ob die andere Werkstatt den Fahrerairbag überhaupt ausbauen durfte. Welche Voraussetzung gilt "
          "nach Sprengstoffrecht?",
     "opts": ["Mitarbeiter mit Lehrgang zur eingeschränkten Fachkunde; der Betrieb zeigt die Tätigkeit mindestens zwei Wochen "
              "vorher bei der Behörde an",
              "Mitarbeiter mit Lehrgang zur eingeschränkten Fachkunde; der Betrieb meldet jeden einzelnen Airbag-Ausbau spätestens "
              "am Folgetag der Behörde",
              "Keine besondere Voraussetzung, weil P1-Gegenstände frei verkäuflich sind und jeder sie ein- und ausbauen darf",
              "Eine Sprengberechtigung wie für Steinbrüche und eine jährliche Prüfung der Werkstatt durch den TÜV"],
     "correct": 0,
     "explain": "Für den Umgang mit Airbag- und Gurtstraffereinheiten der Kategorie P1 genügt eine eingeschränkte Fachkunde "
                "(Lehrgang von etwa sechs Stunden). Der Arbeitgeber muss die Tätigkeit nach § 14 Sprengstoffgesetz schriftlich "
                "anzeigen – mindestens zwei Wochen bevor die Arbeiten beginnen. Eine Meldung jedes einzelnen Ausbaus ist nicht "
                "vorgesehen.",
     "src": "Netz: service.bremen.de (Anzeige § 14 SprengG)"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "situation": _SATZ2, "nr": 16,
     "q": "Wie wird die alte, defekte Wickelfeder entsorgt?",
     "opts": ["Wie eine Airbag-Einheit als pyrotechnischer Gegenstand, weil sie zum Airbag-System gehört",
              "Über den Hausmüll des Kunden, weil Kleinteile unter einem Kilogramm nicht getrennt entsorgt werden",
              "Über den Elektronikschrott der Werkstatt, denn sie enthält keine Treibladung",
              "Sie muss vor der Entsorgung mit dem Diagnosetester ausgelöst werden, damit sie ungefährlich ist"],
     "correct": 2,
     "explain": "Die Wickelfeder ist ein Leitungsbauteil ohne Pyrotechnik. Sie wird wie andere elektrische Altteile über den "
                "Elektronikschrott bzw. das Altteile-Recycling der Werkstatt entsorgt. Nur Airbag- und Gurtstraffereinheiten "
                "und andere pyrotechnische Teile fallen unter das Sprengstoffrecht.",
     "src": "FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4, "situation": _SATZ2, "nr": 17,
     "q": "Bei der Übergabe erklären Sie dem Kunden das Ergebnis. Welche Erklärung ist fachlich richtig und kundengerecht?",
     "opts": ["Ihr Fahrerairbag war defekt und wurde ersetzt; dass Hupe und Tasten jetzt gehen, ist ein Zufall, der mit dem "
              "Airbag nichts zu tun hat",
              "Beim Lenkradtausch ist die Wickelfeder, die Kabelverbindung ins Lenkrad, gerissen; sie ist ersetzt, Airbag, Hupe "
              "und Tasten gehen wieder",
              "Das Airbag-Steuergerät hatte nach dem Lenkradtausch die Codierung verloren; es wurde neu codiert, eine Reparatur "
              "war nicht nötig",
              "Die Wickelfeder ist gerissen und wurde ersetzt; der Airbag ist jetzt aber für 24 Stunden gesperrt und darf erst "
              "morgen benutzt werden"],
     "correct": 1,
     "explain": "Die Erklärung nennt Ursache (Wickelfeder beim Lenkradtausch gerissen), Maßnahme (ersetzt) und Ergebnis (alles "
                "funktioniert wieder) in einfachen Worten. Falsche Angaben wie eine Sperrzeit oder ein angeblicher Codierfehler "
                "verunsichern den Kunden. Über die andere Werkstatt äußert man sich sachlich und ohne Schuldzuweisung.",
     "src": "FW"},

    # ---------------------------------------------------------------- Einzelfragen: Schaltplan Zündkreise
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "bild": _PLAN,
     "q": "Für den Zündkreis an Pin 5 und 6 meldet das Steuergerät „Widerstand zu niedrig“. Welches Bauteil ist laut "
          "Schaltplan betroffen, und welche Fehlerart liegt vor?",
     "opts": ["Beifahrerairbag; eine Zündkreisleitung ist unterbrochen oder der Stecker hat Übergangswiderstand",
              "Beifahrerairbag; die beiden Zündkreisleitungen sind miteinander verbunden (Kurzschluss untereinander)",
              "Gurtstraffer Fahrer; die beiden Zündkreisleitungen sind miteinander verbunden (Kurzschluss untereinander)",
              "Seitenairbag; eine der Leitungen hat Verbindung zur Fahrzeugmasse, z. B. durch eine Scheuerstelle"],
     "correct": 1,
     "explain": "Laut Plan gehören Pin 5 und 6 zum Beifahrerairbag. „Zu niedrig“ heißt: Der Prüfstrom findet einen Weg an der "
                "Zündpille vorbei, z. B. über gequetschte Leitungen oder eine Kurzschlussbrücke, die bei gestecktem Stecker nicht "
                "abhebt. Eine Unterbrechung würde als „zu hoch“, eine Verbindung zur Karosserie als „Kurzschluss nach Masse“ gemeldet.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2, "bild": _PLAN,
     "q": "Nach dem Ausbau des Fahrersitzes meldet das Steuergerät einen Fehler im Zündkreis an Pin 9 und 10. Wo prüfen Sie "
          "laut Schaltplan zuerst?",
     "opts": ["An der Sicherung ③, weil sie den Seitenairbag-Zündkreis direkt mit Spannung versorgt",
              "An der Wickelfeder ①, weil alle Zündkreise des Fahrers über sie laufen",
              "An der Steckverbindung ② unter dem Sitz, die beim Sitzausbau getrennt wurde",
              "Am Seitenaufprallsensor ⑥, weil er im selben Zündkreis wie der Seitenairbag liegt"],
     "correct": 2,
     "explain": "Pin 9/10 ist der Zündkreis des Seitenairbags, der über die Steckverbindung ② unter dem Sitz läuft. Sie wird beim "
                "Sitzausbau getrennt und danach oft nicht richtig verriegelt. Über die Wickelfeder laufen nur die Bauteile im "
                "Lenkrad, und der Sensor ⑥ hat eigene Pins (16/17).",
     "src": "Eigener Schaltplan"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "bild": _PLAN,
     "q": "Für den Zündkreis an Pin 7 und 8 meldet das Steuergerät „Kurzschluss nach Plus“. Was bedeutet das, und wie gehen "
          "Sie vor?",
     "opts": ["Die Zündpille des Gurtstraffers hat gezündet; den Gurtstraffer ohne weitere Prüfung ersetzen",
              "Eine Leitung des Gurtstraffer-Zündkreises hat Verbindung zur Karosserie; alle Masseverbindungen der B-Säule "
              "reinigen und nachziehen",
              "Eine Gurtstraffer-Leitung hat Verbindung zu einer Plus führenden Leitung; Leitungen bei abgesteckten Bauteilen prüfen",
              "Die Sicherung ③ liefert zu viel Spannung; die Sicherung gegen eine mit höherer Stromstärke tauschen"],
     "correct": 2,
     "explain": "Pin 7/8 ist der Gurtstraffer. „Kurzschluss nach Plus“ heißt: An einer Zündkreisleitung liegt Fremdspannung, z. B. "
                "weil sie an einer Plusleitung durchgescheuert ist – gefährlich, weil so Strom durch die Zündpille fließen könnte. "
                "Gesucht wird nach Herstellerangabe bei abgesteckter Gurtstraffer-Einheit und abgestecktem Steuergerät. Eine "
                "Verbindung zur Karosserie würde als „Kurzschluss nach Masse“ gemeldet.",
     "src": "Eigener Schaltplan, FW"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 4, "bild": _PLAN,
     "q": "Ordnen Sie den Pins des Steuergeräts A1 im Schaltplan ihre Funktion zu.",
     "paare": [["Pin 11", "Versorgung Klemme 15 über Sicherung F12"], ["Pin 12", "Masse (Klemme 31)"],
               ["Pin 13", "Ansteuerung der Kontrollleuchte H1"], ["Pin 14/15", "Upfront-Sensor"],
               ["Pin 18/19", "CAN-Bus (Datenleitung)"]],
     "ablenker": ["Zündkreis Fahrerairbag Stufe 2"],
     "explain": "Pin 11 bekommt Klemme 15 (Zündung ein) über die Sicherung F12, Pin 12 liegt an Masse 31. Die Kontrollleuchte H1 "
                "hängt an Klemme 15 und wird vom Steuergerät über Pin 13 nach Masse geschaltet. Über CAN-H/CAN-L (Pin 18/19) "
                "tauscht das Steuergerät Daten aus, z. B. das Crashsignal und den Fehlerspeicher für den Tester.",
     "src": "Eigener Schaltplan"},

    # ---------------------------------------------------------------- Einzelfragen: Stecker mit Kurzschlussbrücke
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 5, "bild": _STECKER,
     "q": "Ordnen Sie den Nummern im Bild der Airbag-Steckverbindung die Bauteile zu.",
     "paare": [["①", "Zündpille im Gasgenerator"], ["②", "Kontaktstift"], ["③", "Kurzschlussbrücke"],
               ["④", "Stecker der Leitungsseite mit Steg"], ["⑤", "Verriegelung (Rastnase)"],
               ["⑥", "Leitung zum Airbag-Steuergerät"]],
     "ablenker": ["Prüfadapter (Ersatzwiderstand)"],
     "explain": "In Bild B liegt die Kurzschlussbrücke ③ an beiden Kontaktstiften ② an und schließt die Zündpille ① kurz. In Bild A "
                "drückt der Steg am Stecker ④ die Brücke weg, die Verriegelung ⑤ hält den Stecker fest, und über die Leitung ⑥ "
                "kann das Steuergerät die Zündpille prüfen und im Ernstfall bestromen.",
     "src": "Eigene Zeichnung"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "bild": _STECKER,
     "q": "In welchem Zustand im Bild ist die Zündpille kurzgeschlossen, und welchen Zweck hat das?",
     "opts": ["In A; so fließt der Prüfstrom des Steuergeräts an der Zündpille vorbei und kann sie nicht erwärmen",
              "In B; Fremdspannung oder statische Aufladung an den offenen Kontakten kann keinen Zündstrom erzeugen",
              "In B; das Steuergerät erkennt über die Brücke sofort, dass der Stecker abgezogen wurde",
              "In A und B; die Brücke liegt immer an und wird erst beim Auslösen durch den steigenden Gasdruck geöffnet"],
     "correct": 1,
     "explain": "Bei abgezogenem Stecker (B) verbindet die Federbrücke ③ beide Kontaktstifte. Beide Anschlüsse der Zündpille liegen "
                "dann auf gleichem Potenzial – Fremdspannung oder ein Funke an den Kontakten treibt keinen Strom durch die Zündpille. "
                "Im gesteckten Zustand (A) hebt der Steg die Brücke ab, sonst könnte das Steuergerät weder prüfen noch zünden. "
                "Einen abgezogenen Stecker erkennt das Steuergerät an der Unterbrechung, nicht über die Brücke.",
     "src": "Eigene Zeichnung, Netz: Recherche 3.6"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "bild": _STECKER,
     "q": "Der Stecker ist eingesteckt, aber der Steg am Stecker ④ ist abgebrochen, sodass die Kurzschlussbrücke ③ an den "
          "Kontaktstiften anliegen bleibt. Was meldet das Steuergerät?",
     "opts": ["„Widerstand zu hoch“, weil die Brücke den Stromweg zur Zündpille unterbricht",
              "„Kurzschluss nach Masse“, weil die Brücke den Zündkreis mit dem Gasgenerator-Gehäuse verbindet",
              "Keinen Fehler, weil die Zündpille trotz anliegender Brücke im Sollbereich gemessen wird",
              "„Widerstand zu niedrig“, weil es nur noch die Brücke statt der Zündpille misst"],
     "correct": 3,
     "explain": "Die Brücke liegt parallel zur Zündpille und hat fast keinen Widerstand. Der Prüfstrom fließt über die Brücke, das "
                "Steuergerät misst deutlich weniger als den Sollwert und meldet „zu niedrig“. Im Ernstfall würde auch der "
                "Zündstrom über die Brücke fließen – der Airbag würde nicht auslösen. Der Stecker ist nach Herstellerangabe "
                "instand zu setzen bzw. zu ersetzen.",
     "src": "Eigene Zeichnung, FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "bild": _STECKER,
     "q": "Warum muss die Verriegelung ⑤ nach dem Einstecken hörbar einrasten?",
     "opts": ["Damit die Kurzschlussbrücke dauerhaft an den Kontaktstiften anliegt",
              "Damit sich der Stecker durch Vibration oder Zug an der Leitung nicht löst",
              "Damit das Steuergerät nach dem Einrasten den Fehlerspeicher selbst löscht",
              "Damit die Zündpille über die Rastnase zusätzlich mit Masse verbunden ist"],
     "correct": 1,
     "explain": "Nur ein verriegelter Stecker sitzt sicher. Löst er sich teilweise, steigt der Übergangswiderstand (Fehler „zu hoch“), "
                "oder die Brücke legt sich wieder an (Fehler „zu niedrig“). Beides schaltet die Kontrollleuchte ein und kann im "
                "Ernstfall die Auslösung verhindern. Viele Stecker haben zusätzlich eine zweite Sicherung (Sekundärverriegelung).",
     "src": "Eigene Zeichnung, FW"},

    # ---------------------------------------------------------------- Einzelfragen: Crashablauf
    {"cat": "Airbag", "level": 2, "typ": "zuordnung", "pkt": 6, "bild": _CRASH,
     "q": "Das Diagramm zeigt den Ablauf eines Frontaufpralls ohne Zeitmaßstab. Ordnen Sie den Zeitpunkten ① bis ⑥ das "
          "Ereignis zu.",
     "paare": [["①", "Aufprall beginnt, die Sensoren erfassen die Verzögerung"],
               ["②", "Steuergerät entscheidet; Gurtstraffer und Airbag Stufe 1 werden gezündet"],
               ["③", "Bei schwerem Aufprall zündet zeitversetzt Stufe 2"],
               ["④", "Airbag ist voll aufgeblasen"],
               ["⑤", "Insasse taucht ein, Gas strömt über Ausströmöffnungen ab"],
               ["⑥", "Airbag ist weitgehend entleert"]],
     "ablenker": ["Kontrollleuchte führt den Selbsttest durch"],
     "explain": "Bis ② steigt die Füllkurve nicht: Erst nach der Plausibilitätsprüfung wird gezündet. Der Airbag muss voll sein (④), "
                "bevor die Vorverlagerung des Insassen ihn erreicht (⑤). Danach fällt die Füllung, weil Gas abströmt – der Insasse "
                "wird weich abgefangen, und die Sicht wird wieder frei (⑥). Genaue Zeiten hängen vom Fahrzeug ab.",
     "src": "Eigenes Diagramm, Netz: Recherche ausbau-airbag (nur Reihenfolge)"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3, "bild": _CRASH,
     "q": "Warum muss im Diagramm Zeitpunkt ④ vor Zeitpunkt ⑤ liegen?",
     "opts": ["Der Airbag muss voll sein, bevor der Insasse ankommt; sonst trifft ihn der noch aufgehende Airbag mit Wucht",
              "Der Insasse muss den Airbag erst berühren, damit der Gasgenerator über den Druck den zweiten Zündkreis freigibt",
              "Das Steuergerät braucht die Zeit zwischen ④ und ⑤, um die Crashdaten im Fehlerspeicher abzulegen",
              "Der Gurtstraffer darf erst zünden, wenn der Airbag voll ist, sonst reißt das Gurtband am Airbag ein"],
     "correct": 0,
     "explain": "Ein Airbag, der sich noch entfaltet, wenn der Insasse ihn erreicht, schlägt mit hoher Geschwindigkeit gegen Kopf und "
                "Brust. Deshalb muss die Füllkurve ihr Maximum erreichen, bevor die Vorverlagerung des Insassen ihn trifft. Auch "
                "darum ist der richtige Sitzabstand zum Lenkrad wichtig.",
     "src": "Eigenes Diagramm, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3, "bild": _CRASH,
     "q": "Zeitpunkt ③ tritt nicht bei jedem Aufprall auf. Wovon hängt es ab, ob dort etwas gezündet wird?",
     "opts": ["Von der Außentemperatur, weil der Gasgenerator bei Kälte grundsätzlich beide Stufen gleichzeitig braucht",
              "Von der Unfallschwere und – je nach System – vom Gurtstatus bzw. der Sitzposition; dann zündet Stufe 2",
              "Davon, ob die Kontrollleuchte beim letzten Selbsttest geleuchtet hat und ein Fehler gespeichert ist",
              "Davon, ob der Beifahrersitz belegt ist; ohne Beifahrer zündet beim Fahrerairbag immer nur Stufe 2"],
     "correct": 1,
     "explain": "③ ist die zeitversetzte Zündung der zweiten Stufe eines zweistufigen Gasgenerators. Das Steuergerät entscheidet "
                "anhand der Unfallschwere und – je nach System – weiterer Informationen wie Gurtschloss-Status oder Sitzposition. "
                "Bei leichterem Aufprall bleibt Stufe 2 ungezündet; sie ist danach noch scharf und bei der Entsorgung zu beachten.",
     "src": "Eigenes Diagramm, Netz: Patent US 6199903"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2, "bild": _CRASH,
     "q": "Nach Zeitpunkt ⑤ fällt die Füllkurve deutlich ab. Was ist der Grund?",
     "opts": ["Der Luftsack ist beim Eintauchen des Insassen geplatzt, weil der Gasdruck im Sack zu hoch war",
              "Das Steuergerät saugt das Gas über die Zündkreisleitungen zurück in den Gasgenerator",
              "Das Gas kühlt in kurzer Zeit ab und wird dabei flüssig, deshalb sinkt das Volumen",
              "Das Gas strömt gezielt über Ausströmöffnungen ab, damit der Insasse weich abgefangen wird"],
     "correct": 3,
     "explain": "Der Airbag ist kein Luftkissen, das den Insassen zurückfedert, sondern ein Dämpfer: Über Ausströmöffnungen (teils "
                "auch durch das Gewebe) entweicht das Gas, während der Insasse eintaucht. So wird die Bewegungsenergie gleichmäßig "
                "abgebaut. Ein geplatzter Sack würde den Insassen nicht mehr abfangen.",
     "src": "Eigenes Diagramm, FW"},

    # ---------------------------------------------------------------- Einzelfragen: Recht, Lagerung, Transport
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Welche Aussage zur eingeschränkten Fachkunde für Airbag- und Gurtstraffereinheiten (Kategorie P1) ist richtig?",
     "opts": ["Sie berechtigt dazu, ausgebaute Einheiten in der Werkstatt zu zerlegen und die Treibladung getrennt zu entsorgen",
              "Ein Lehrgang von einigen Stunden berechtigt zum Ein- und Ausbau und zum Auslösen im eingebauten Zustand",
              "Sie gilt nur für Gurtstraffer; für Airbags ist zusätzlich eine Erlaubnis als Sprengmeister nötig",
              "Sie wird automatisch mit dem Gesellenbrief erworben und braucht deshalb keinen eigenen Nachweis"],
     "correct": 1,
     "explain": "Die eingeschränkte Fachkunde erwirbt man in einem Lehrgang (rund sechs Stunden) mit Recht, Aufbau, Gefahren, "
                "Lagerung, Transport, Entsorgung und Praxisteil. Sie berechtigt zum Ein- und Ausbau von P1-Einheiten und zu ihrer "
                "Entsorgung durch Auslösen im eingebauten Zustand. Zerlegen ist verboten, und der Nachweis wird eigens geführt.",
     "src": "Netz: service.bremen.de (eingeschränkte Fachkunde)"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Wonach richtet sich, wie viele Airbag- und Gurtstraffereinheiten eine Werkstatt im Arbeitsraum bzw. im Lagerraum "
          "ohne Lagergenehmigung aufbewahren darf?",
     "opts": ["Nach der Stückzahl: höchstens ein Airbag je Mitarbeiter mit eingeschränkter Fachkunde im Betrieb",
              "Nach der Netto-Explosivstoffmasse (NEM) der Einheiten laut Sprengstofflager-Richtlinie",
              "Nach dem Gesamtgewicht der Einheiten einschließlich Verpackung und Lenkrad",
              "Nach der Zahl der Fahrzeuge, die gerade in der Werkstatt stehen"],
     "correct": 1,
     "explain": "Maßgeblich ist die Netto-Explosivstoffmasse, also die Masse der Treibladungen – nicht Stückzahl oder Gesamtgewicht. "
                "Behörden nennen ohne Lagergenehmigung bis 10 kg NEM im Arbeitsraum (in einem geeigneten Schrank) und bis 100 kg "
                "NEM in einem Lagerraum. Einzelheiten regeln die Sprengstofflager-Richtlinie (LR 240) und die zuständige Behörde.",
     "src": "Netz: service.bremen.de, KomNet NRW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Eine nicht ausgelöste Airbag-Einheit soll als Gewährleistungsteil an den Hersteller zurückgehen. Wie wird sie versandt?",
     "opts": ["Lose im Karton mit anderen Altteilen, weil eine nicht ausgelöste Einheit ungefährlich ist",
              "In der Verpackung des Neuteils bzw. zugelassener Verpackung, gekennzeichnet als Gefahrgut",
              "Erst nach dem Auslösen in der Werkstatt, weil scharfe Einheiten nicht versandt werden dürfen",
              "Nur mit eingestecktem Prüfadapter, damit die Zündpille unterwegs kurzgeschlossen ist"],
     "correct": 1,
     "explain": "Nicht ausgelöste Einheiten sind Gefahrgut. Man nutzt die Verpackung des Neuteils bzw. eine zugelassene Verpackung "
                "und sichert und kennzeichnet sie nach Gefahrgutrecht und Herstellervorgabe. Für die Gewährleistung muss das Teil "
                "unausgelöst und unbeschädigt ankommen; ein Prüfadapter gehört nicht an die Einheit.",
     "src": "Netz: Recherche 3.4, FW"},

    # ---------------------------------------------------------------- Einzelfragen: Vernetzung, Funktion, Diagnose
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Was macht das eCall-System nach einem schweren Unfall?",
     "opts": ["Es sperrt den Motorstart, bis die Werkstatt den Crash-Eintrag im Airbag-Steuergerät gelöscht hat",
              "Es setzt automatisch einen Notruf an die 112 ab und übermittelt dabei unter anderem den Standort",
              "Es meldet den Unfall automatisch an die Versicherung und den Fahrzeughersteller, nicht an Retter",
              "Es löst die Airbags aus, wenn das Airbag-Steuergerät beim Aufprall keinen Strom mehr hat"],
     "correct": 1,
     "explain": "eCall wählt bei einem schweren Unfall (erkannt z. B. über die Airbag-Auslösung) automatisch die 112, sendet einen "
                "Datensatz mit Standort, Fahrtrichtung und Zeitpunkt und baut eine Sprechverbindung auf. Man kann den Notruf auch "
                "per Taste auslösen. Mit dem Zünden der Airbags hat eCall nichts zu tun.",
     "src": "Netz: VO (EU) 2015/758, ptolemus"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Für welche Fahrzeuge ist eCall in der EU vorgeschrieben?",
     "opts": ["Für alle zugelassenen Pkw; ältere Fahrzeuge mussten bis 2020 nachgerüstet werden",
              "Nur für Fahrzeuge mit mehr als sechs Airbags, unabhängig vom Baujahr",
              "Nur für Elektro- und Hybridfahrzeuge wegen der Hochvolt-Gefahr für Retter",
              "Für Pkw und leichte Nutzfahrzeuge mit neuer Typgenehmigung ab dem 31.03.2018"],
     "correct": 3,
     "explain": "Seit dem 31. März 2018 brauchen neu typgenehmigte Pkw (M1) und leichte Nutzfahrzeuge (N1) eCall (Verordnung (EU) "
                "2015/758). Fahrzeugtypen, die vorher genehmigt wurden, müssen nicht nachgerüstet werden.",
     "src": "Netz: VO (EU) 2015/758, eurotransport"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Nach einer Notbremsung ohne Unfall berichtet ein Kunde, der Gurt habe sich kurz stark gestrafft und danach wieder "
          "gelockert. Was ist zu tun?",
     "opts": ["Gurtstraffer ersetzen, weil sich die Treibladung bei der Notbremsung verbraucht hat",
              "Airbag-Steuergerät ersetzen, weil es einen Crash gespeichert hat und gesperrt ist",
              "Nichts, sofern kein Fehler gespeichert ist – ein reversibler Gurtstraffer hat gewirkt",
              "Gurt und Gurtschloss ersetzen, weil der Gurtkraftbegrenzer das Gurtband gedehnt hat"],
     "correct": 2,
     "explain": "Reversible Gurtstraffer ziehen den Gurt mit einem Elektromotor straff, wenn das System eine kritische Fahrsituation "
                "erkennt (Notbremsung, Schleudern). Kommt es nicht zum Unfall, geben sie das Gurtband wieder frei und sind sofort "
                "wieder einsatzbereit. Der pyrotechnische Straffer hat nicht gezündet.",
     "src": "Netz: Euro NCAP PRE-SAFE, Polestar-Handbuch"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Nach dem Wechsel des Beifahrersitzbezugs leuchtet die Anzeige „Beifahrerairbag aus“, obwohl ein Erwachsener auf dem "
          "Sitz sitzt. Wie gehen Sie vor?",
     "opts": ["Fehlerspeicher auslesen; Sensormatte und Stecker der Sitzbelegungserkennung prüfen; ggf. nach Herstellerangabe abgleichen",
              "Beifahrerairbag-Stecker bei eingeschalteter Zündung abziehen und wieder aufstecken, damit das Steuergerät ihn neu erkennt",
              "Nichts tun, die Anzeige zeigt nur, dass der Beifahrerairbag funktionsbereit ist; Kunden darüber informieren",
              "Fehlerspeicher auslesen; Beifahrerairbag ersetzen, weil er beim Bezugwechsel einen Schlag abbekommen hat"],
     "correct": 0,
     "explain": "Die Sitzbelegungserkennung (meist eine Sensormatte unter dem Bezug) meldet, ob und wie der Sitz belegt ist. Wurde "
                "sie beim Bezugwechsel geknickt, verschoben oder nicht angesteckt, erkennt das System keinen Erwachsenen und "
                "schaltet den Beifahrerairbag ab. Manche Systeme müssen nach Arbeiten am Sitz mit dem Tester abgeglichen werden. "
                "Airbag-Stecker nie bei eingeschalteter Zündung trennen.",
     "src": "Netz: kfz-dietrich (Sitzbelegungsmatte), FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Nach einem Unfall mit ausgelösten Airbags meldet das Steuergerät einen gespeicherten Crash. Wie ist damit umzugehen?",
     "opts": ["Den Eintrag einfach mit dem Diagnosetester löschen, danach ist das Steuergerät wieder voll einsatzbereit",
              "Die Batterie für mindestens eine Stunde abklemmen, dann löscht sich der Crash-Eintrag selbst",
              "Crashdaten sind dauerhaft gespeichert; das Steuergerät nach Herstellerangabe ersetzen und codieren",
              "Das Steuergerät weiterverwenden und nur die Kontrollleuchte im Kombiinstrument abklemmen"],
     "correct": 2,
     "explain": "Nach einer Auslösung speichert das Steuergerät die Crashdaten so, dass sie sich mit dem Tester nicht löschen lassen. "
                "Es ist nach Herstellerangabe zu ersetzen und das neue Gerät zu codieren. Eine abgeklemmte Kontrollleuchte wäre "
                "eine gefährliche Manipulation und ein Mangel bei der Hauptuntersuchung.",
     "src": "Netz: kfz-dietrich (Crashdaten), FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 3,
     "q": "Nach einem leichten Parkrempler vorn ohne Auslösung leuchtet die Airbag-Leuchte. Fehlerspeicher: „Upfront-Sensor "
          "links – Signal unplausibel“. Was ist zu tun?",
     "opts": ["Fehler löschen; ein Satellitensensor kann nur durch Feuchtigkeit ausfallen, nie durch einen Aufprall",
              "Alle Frontairbags vorsorglich ersetzen, weil ein Teil der Treibladung gezündet haben kann",
              "Sensor, Halter und Leitung vorn prüfen; beschädigte Teile ersetzen, ggf. anlernen, Fehler löschen",
              "Airbag-Steuergerät ersetzen, weil der Upfront-Sensor im Steuergerät eingebaut ist"],
     "correct": 2,
     "explain": "Upfront-Sensoren sitzen ganz vorn im Knautschbereich und können schon bei leichten Remplern verschoben oder "
                "beschädigt werden; ein verbogener Halter verfälscht das Signal. Sensor, Halter und Leitung prüfen, Defektes "
                "ersetzen, nach Herstellerangabe anlernen und den Fehlerspeicher kontrollieren. Die Airbags haben nicht gezündet.",
     "src": "Netz: kfz-dietrich (Crashsensor nach Rempler), FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Die Airbag-Kontrollleuchte eines Kundenfahrzeugs leuchtet dauernd. Was bedeutet das für die Hauptuntersuchung?",
     "opts": ["Nichts, die HU prüft nur Bremsen, Licht, Lenkung, Fahrwerk und Abgase, nicht die Airbags",
              "Es ist nur ein Hinweis, weil die Airbags trotz Fehler sicher auslösen",
              "Es ist ein Mangel, weil die Funktion des Rückhaltesystems nicht sichergestellt ist",
              "Es ist erst ein Mangel, wenn zusätzlich auch die Gurtwarnung im Kombiinstrument ausgefallen ist"],
     "correct": 2,
     "explain": "Eine dauernd leuchtende Airbag-Leuchte zeigt einen erkannten Fehler – Teile des Rückhaltesystems können ausfallen. "
                "Bei der HU wird die Kontrollleuchte geprüft; leuchtet sie dauernd oder beim Selbsttest gar nicht, ist das ein Mangel.",
     "src": "Netz: kfz-dietrich (HU-Mangel)"},
    {"cat": "Airbag", "level": 2, "typ": "zuordnung", "pkt": 5,
     "q": "Ordnen Sie den Sensoren und Schaltern des Rückhaltesystems ihre Messgröße bzw. Aufgabe zu.",
     "paare": [["Beschleunigungssensor im Steuergerät", "Eigene Verzögerungsmessung zur Plausibilitätsprüfung"],
               ["Upfront-Sensor", "Frühe Erkennung eines Frontaufpralls im Knautschbereich"],
               ["Drucksensor in der Tür", "Schneller Druckanstieg im Türhohlraum beim Seitenaufprall"],
               ["Sitzbelegungsmatte", "Belegung des Beifahrersitzes"],
               ["Gurtschlossschalter", "Gurt angelegt oder nicht"]],
     "ablenker": ["Abstand zum vorausfahrenden Fahrzeug"],
     "explain": "Das Steuergerät löst nur aus, wenn sein eigener Sensor die Meldung eines Satelliten bestätigt. Upfront- und "
                "Türdrucksensoren melden den Aufprall früh vom Ort des Geschehens. Sitzbelegung und Gurtstatus beeinflussen, ob "
                "und mit welcher Stufe gezündet wird. Den Abstand misst das Radar der Fahrerassistenz, nicht das Airbag-System.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 1, "typ": "zuordnung", "pkt": 4,
     "q": "Im Schaltplan stehen Kennbuchstaben vor den Bauteilnummern (z. B. A1, F12, H1). Ordnen Sie die Kennbuchstaben zu.",
     "paare": [["A", "Steuergerät"], ["B", "Sensor"], ["F", "Sicherung"], ["H", "Leuchte"], ["X", "Steckverbindung"]],
     "ablenker": ["Motor"],
     "explain": "Kennbuchstaben nach Norm: A Baugruppe bzw. Steuergerät, B Sensor (Messwandler), F Schutzeinrichtung bzw. Sicherung, "
                "H Meldeeinrichtung bzw. Leuchte, X Steckverbindung oder Klemme. M steht für Motor. Im Airbag-Schaltplan sind das "
                "z. B. A1 (Steuergerät), F12 (Sicherung) und H1 (Kontrollleuchte).",
     "src": "FW (Bauteilkennzeichnung)"},
    {"cat": "Airbag", "level": 3, "typ": "zuordnung", "pkt": 4,
     "q": "Sie grenzen einen Zündkreisfehler mit dem Prüfadapter (Ersatzwiderstand) am Bauteilstecker ein. Ordnen Sie dem "
          "Befund die richtige Schlussfolgerung zu.",
     "paare": [["Fehler verschwindet mit Prüfadapter", "Ursache in der Airbag-Einheit bzw. ihrem Stecker"],
               ["Fehler bleibt mit Prüfadapter", "Ursache in Leitung, Zwischenstecker oder Steuergerät"],
               ["Fehler tritt nur beim Lenken auf", "Wickelfeder prüfen"],
               ["Fehler tritt nur beim Verstellen des Sitzes auf", "Leitung und Stecker unter dem Sitz prüfen"]],
     "ablenker": ["Batterie laden und Fehler ignorieren"],
     "explain": "Der Prüfadapter ersetzt die Zündpille durch einen passenden Widerstand. Ändert sich das Ergebnis, lag es am ersetzten "
                "Teil; bleibt es, liegt der Fehler davor. Fehler, die nur bei Bewegung auftreten, deuten auf bewegte Leitungen hin – "
                "im Lenkrad die Wickelfeder, am Sitz die Leitung zum Sitzstecker.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "reihenfolge", "pkt": 5,
     "q": "Nach einem Frontaufprall mit ausgelösten Frontairbags und Gurtstraffern soll das Rückhaltesystem instand gesetzt "
          "werden. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
     "schritte": ["Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
                  "Ausgelöste Airbag-Einheiten, Gurtstraffer und Steuergerät nach Herstellerangabe ausbauen",
                  "Neue Teile einbauen, alle Stecker einrasten und verriegeln",
                  "Batterie anklemmen, dabei hält sich niemand im Fahrzeug auf",
                  "Neues Steuergerät mit dem Diagnosetester codieren",
                  "Fehlerspeicher auslesen und löschen, Selbsttest der Kontrollleuchte prüfen"],
     "explain": "Auch beim Ausbau ausgelöster Teile wird erst stromlos gemacht und gewartet – nicht gezündete Stufen oder andere "
                "Einheiten können noch scharf sein. Codieren geht nur mit Spannung, also nach dem Anklemmen. Zum Schluss zeigen "
                "Fehlerspeicher und Selbsttest, dass das System alle Teile erkennt.",
     "src": "Netz: Recherche 3.6, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Eine Kurzschlussbrücke mit 0,05 Ω liegt fälschlich parallel zu einer Zündpille mit 2,0 Ω. Welchen "
          "Gesamtwiderstand misst das Steuergerät?",
     "opts": ["2,050 Ω", "1,025 Ω", "0,049 Ω", "0,100 Ω"],
     "correct": 2,
     "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (2,0 Ω × 0,05 Ω) ÷ 2,05 Ω ≈ 0,049 Ω. Der Gesamtwiderstand ist "
                "kleiner als der kleinste Einzelwiderstand – das Steuergerät meldet „Widerstand zu niedrig“. 2,050 Ω wäre die "
                "Reihenschaltung, 1,025 Ω der Mittelwert und 0,100 Ω nur das Produkt ohne Division.",
     "src": "FW"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Manche Fahrzeuge haben einen Center-Airbag zwischen den Vordersitzen. Wovor schützt er?",
     "opts": ["Dass die Knie beim Frontaufprall gegen die Mittelkonsole und den Wählhebel schlagen",
              "Dass Gegenstände aus der Mittelkonsole bei einem Frontaufprall nach vorn fliegen",
              "Dass die Fondpassagiere beim Frontaufprall gegen die Vordersitzlehnen prallen",
              "Dass Fahrer und Beifahrer beim Seitenaufprall seitlich gegeneinander prallen"],
     "correct": 3,
     "explain": "Der Center-Airbag entfaltet sich zwischen den Vordersitzen. Er hält bei einem Seitenaufprall – besonders von der "
                "anderen Fahrzeugseite – den Insassen auf seinem Platz und verhindert, dass Fahrer und Beifahrer zusammenstoßen. "
                "Wie alle Airbags ist er ein pyrotechnischer Gegenstand der Kategorie P1.",
     "src": "FW"},
    {"cat": "Airbag", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Warum werden Airbags auch als „Zusatz-Rückhaltesystem“ (SRS) bezeichnet?",
     "opts": ["Weil sie den Sicherheitsgurt ersetzen, wenn der Insasse nicht angeschnallt ist",
              "Weil sie nur zusammen mit dem angelegten Gurt richtig schützen und ihn ergänzen",
              "Weil sie zusätzlich zur Knautschzone eingebaut werden müssen, wenn diese zu kurz ist",
              "Weil sie nach einem Unfall zusätzlich die Türen entriegeln und den Notruf absetzen"],
     "correct": 1,
     "explain": "Der Gurt hält den Insassen in Position, der Airbag fängt Kopf und Oberkörper zusätzlich ab. Ohne Gurt fliegt der "
                "Insasse zu früh und zu schnell in den sich noch entfaltenden Airbag – das kann schwere Verletzungen verursachen. "
                "Deshalb heißt er Zusatz-Rückhaltesystem.",
     "src": "FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Bei einer Unfallinstandsetzung soll an der B-Säule geschweißt werden. Welche Antwort nennt richtige Schutzmaßnahmen "
          "für das Airbag-System?",
     "opts": ["Batterie angeklemmt lassen, damit das Steuergerät den Zündkreis überwacht; Masseklemme nah an der Schweißstelle; "
              "Airbag-Einheiten mit nassem Tuch abdecken",
              "Batterie abklemmen; Masseklemme am Airbag-Steuergerät anbringen, weil es gut geerdet ist; Airbag- und "
              "Gurtstraffereinheiten in der Nähe ausbauen",
              "Batterie abklemmen; Steuergeräte nach Herstellerangabe abstecken; Masseklemme nah an der Schweißstelle; "
              "Airbag- und Gurtstraffereinheiten in der Nähe ausbauen",
              "Batterie abklemmen; Steuergeräte nach Herstellerangabe abstecken; Masseklemme nah an der Schweißstelle; "
              "Gurtstraffer in der B-Säule mit Fett gegen Funken schützen"],
     "correct": 2,
     "explain": "Schweißströme und Hitze können Zündpillen auslösen und Steuergeräte zerstören. Deshalb Batterie ab, Steuergeräte "
                "nach Herstellerangabe trennen, die Masseklemme nah an der Schweißstelle setzen (kurzer Stromweg) und pyrotechnische "
                "Teile in der Nähe – hier Gurtstraffer, Seiten- und Kopfairbag – vorher ausbauen. Fett und nasse Tücher schützen "
                "nicht; eine Masseklemme am Steuergerät würde den Schweißstrom gerade durch die Elektronik leiten.",
     "src": "Netz: Recherche 3.4 (Hitze, Schweißen), FW"},
]
