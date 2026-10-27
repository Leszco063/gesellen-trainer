"""
Airbag (Instandhaltungstechnik II – Sicherheitssysteme): Aufgabensatz „Airbag-Kontrollleuchte nach
Sitzausbau“ und Einzelfragen zu Aufbau, Funktion, Diagnose, Sicherheitsregeln und Recht.
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
}

_SATZ = "airbag-sitz"

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
              "Sie leuchtet kurz auf und erlischt; Dauerleuchten heißt: Wartungsintervall der Airbags fällig, Schutz bleibt voll erhalten"],
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
              "Zwischen den beiden Zündkreisleitungen besteht ein Kurzschluss",
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
     "opts": ["Die Zündpille ist durch den Prüfstrom des Steuergeräts noch heiß; erst nach dem Abkühlen kann sie nicht mehr zünden",
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
              "Die Steckverbindung auf Korrosion und Verrastung sichtprüfen",
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
              "Stecker unter dem Sitz prüfen; Zündkreis bei eingesteckter Airbag-Einheit mit der Prüflampe prüfen",
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
              "Beim Abziehen des Steckers legt sie die Zündkreisleitung an Masse, damit das Steuergerät den offenen Stecker erkennt",
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
              "Sobald ein einzelner Sensor eine Verzögerung meldet",
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
              "Batterie ersetzen, weil der Zündstrom sie tiefentladen hat",
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
              "Im Altmetall-Container der Werkstatt",
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
              "Sitzausbau die Codierung löscht; Fehlerspeicher auslesen und löschen; Kontrollleuchte kontrollieren"],
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
              "einstufig: eine Ladung; zweistufig: zwei Ladungen, die immer gleichzeitig zünden, damit der Airbag schneller voll ist",
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
              "Das Gas wird ausschließlich von einer elektrischen Pumpe erzeugt",
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
              "kann er dauerhaft aus bleiben, Erwachsene schützt der Gurt",
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
              "für vollen Lenkeinschlag; bei Fehler blockiert das Lenkschloss und der Motor startet nicht"],
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
              "Sie verriegelt sich beim Unfall, damit keine Teile herausfliegen"],
     "correct": 0,
     "explain": "Sensoren im Stoßfänger erkennen den Fußgängeraufprall, Aktuatoren (oft pyrotechnisch) heben die Haube an. "
                "Der Kopf des Fußgängers trifft dann auf eine nachgiebige Fläche.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 4,
     "q": "Wie erfassen Upfront-Sensoren und Seitenaufprallsensoren einen Aufprall, und wie nutzt das Steuergerät die Signale?",
     "opts": ["Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, "
              "Drucksensoren in der Tür den Druckanstieg; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
              "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, "
              "Drucksensoren in der Tür den Druckanstieg; das Steuergerät löst aus, sobald ein einzelner Sensor anspricht",
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
              "Die Batterie 24 Stunden abgeklemmt lassen",
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
     "opts": ["24 A", "0,17 A", "6 A", "0,6 A"],
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
              "Rückrufe nicht nötig, da sie verjährt sind",
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
              "Kraft erreicht ist; der Insasse wird starr gehalten",
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
              "Normal – Airbags lösen nur bei einem Seitenaufprall aus"],
     "correct": 0,
     "explain": "Frontairbags lösen erst bei einem deutlichen Aufprall aus (Richtwert: ab etwa 30 km/h, je nach Fahrzeug "
                "und Hindernis). Bei leichten Remplern würde der Airbag mehr schaden als nützen.",
     "src": "Netz: Recherche 3.6 (kfz-tech.de)"},
    {"cat": "Airbag", "level": 2, "typ": "mc", "pkt": 2,
     "q": "Nach einem Lenkradausbau funktionieren Hupe und Lenkradtasten nicht mehr und die Airbag-Leuchte ist an. "
          "Welches Bauteil ist am wahrscheinlichsten beschädigt?",
     "opts": ["Wickelfeder (Kontakteinheit)", "Upfront-Sensor", "Gurtstraffer", "Seitenaufprallsensor"],
     "correct": 0,
     "explain": "Über die Wickelfeder laufen Fahrerairbag, Hupe und Lenkradtasten. Fallen alle zugleich aus, ist meist das "
                "Flachbandkabel gerissen – oft, weil das Lenkrad bei abgenommener Wickelfeder verdreht wurde.",
     "src": "Netz: Recherche 3.4, FW"},
    {"cat": "Airbag", "level": 3, "typ": "mc", "pkt": 3,
     "q": "Bei einer Inspektion fällt Ihnen auf, dass die Airbag-Kontrollleuchte beim Einschalten der Zündung gar nicht "
          "aufleuchtet. Wie ist der Befund zu beurteilen, und wie gehen Sie weiter vor?",
     "opts": ["In Ordnung: Ein fehlerfreies System zeigt keinen Selbsttest an; die Leuchte geht nur bei einem Fehler an; "
              "kein weiteres Vorgehen nötig",
              "Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde nicht gemeldet; Fehlerspeicher von "
              "Airbag-Steuergerät und Kombiinstrument auslesen; Kunden über den Sicherheitsmangel informieren",
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
]
