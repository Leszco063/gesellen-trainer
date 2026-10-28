// Automatisch erzeugt von tools/export.py aus inhalt/fragen/*.py – nicht von Hand bearbeiten!
export const QUESTIONS = [
 {
  "id": "b6c41a2436c8",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 8,
  "situation": "airbag-sitz",
  "nr": 1,
  "bild": "airbag-system.svg",
  "q": "Verschaffen Sie sich zuerst einen Überblick über das Rückhaltesystem. Ordnen Sie den Nummern im Bild die Bauteile zu.",
  "paare": [
   [
    "①",
    "Airbag-Steuergerät"
   ],
   [
    "②",
    "Upfront-Sensor"
   ],
   [
    "③",
    "Seitenaufprallsensor"
   ],
   [
    "④",
    "Fahrerairbag"
   ],
   [
    "⑤",
    "Wickelfeder (Kontakteinheit)"
   ],
   [
    "⑥",
    "Beifahrerairbag"
   ],
   [
    "⑦",
    "Gurtstraffer"
   ],
   [
    "⑧",
    "Airbag-Kontrollleuchte"
   ]
  ],
  "ablenker": [
   "Klopfsensor",
   "Raddrehzahlsensor"
  ],
  "explain": "Das Steuergerät sitzt geschützt in der Fahrzeugmitte auf dem Mitteltunnel. Die Upfront-Sensoren sitzen ganz vorn, die Seitenaufprallsensoren in Tür bzw. B-Säule – dort kommt der Aufprall zuerst an. Die Wickelfeder liegt direkt hinter dem Lenkrad und verbindet den Fahrerairbag elektrisch mit dem Bordnetz.",
  "src": "FW, Format Prüfung Schule"
 },
 {
  "id": "edbd146d8d58",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 2,
  "q": "Wie verhält sich die Airbag-Kontrollleuchte bei einem fehlerfreien System nach dem Einschalten der Zündung, und was bedeutet Dauerleuchten?",
  "opts": [
   "Sie bleibt beim Einschalten dunkel; Dauerleuchten heißt: Beifahrerairbag ist abgeschaltet, sonst alles in Ordnung",
   "Sie leuchtet beim Einschalten kurz auf (Selbsttest) und erlischt nach wenigen Sekunden; Dauerleuchten heißt: Fehler erkannt, Schutz eingeschränkt",
   "Sie leuchtet während der ganzen Fahrt als Betriebsanzeige; Erlöschen heißt: Fehler erkannt, Schutz eingeschränkt",
   "Sie leuchtet beim Einschalten kurz auf und erlischt; Dauerleuchten heißt: Wartungsintervall der Airbags fällig, Schutz bleibt bis dahin voll erhalten"
  ],
  "correct": 1,
  "explain": "Die Leuchte geht beim Einschalten an (Selbsttest, Lampentest) und erlischt nach wenigen Sekunden, wenn kein Fehler erkannt wurde. Dauerleuchten (oder Blinken) heißt: Fehler erkannt, Teile ggf. abgeschaltet. Beim Einschalten prüft das Steuergerät Zündkreise, Sensoren und Energiereserve. Bleibt die Leuchte an, ist ein Fehler gespeichert – das Fahrzeug ist nicht mehr voll geschützt und muss diagnostiziert werden.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de), FW"
 },
 {
  "id": "117c8f3b7ea2",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-sitz",
  "nr": 3,
  "q": "Was bedeutet der Fehlereintrag „Zündkreis Seitenairbag Fahrer – Widerstand zu hoch“?",
  "opts": [
   "Im Zündkreis liegt eine Unterbrechung oder ein erhöhter Übergangswiderstand vor",
   "Der Seitenairbag hat ausgelöst und muss ersetzt werden",
   "Zwischen den beiden Zündkreisleitungen besteht ein Kurzschluss, z. B. durch eine eingeklemmte Leitung",
   "Die Bordnetzspannung ist zu hoch"
  ],
  "correct": 0,
  "explain": "Das Steuergerät überwacht den Widerstand jedes Zündkreises ständig mit einem sehr kleinen Prüfstrom. „Zu hoch“ deutet auf eine Unterbrechung, einen lockeren Stecker oder korrodierte Kontakte hin. Ein Kurzschluss zwischen den Leitungen würde als „Widerstand zu niedrig“ gemeldet.",
  "src": "FW"
 },
 {
  "id": "2fe39173717d",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "airbag-sitz",
  "nr": 4,
  "q": "Bevor Sie an der Steckverbindung des Seitenairbags arbeiten, müssen Sie das System sicher machen. Bringen Sie die Sicherheitsschritte in die richtige Reihenfolge.",
  "schritte": [
   "Zündung ausschalten und Schlüssel aus dem Fahrzeug bzw. aus der Funkreichweite bringen",
   "Batterie-Minuspol abklemmen und gegen Wiederanklemmen sichern",
   "Wartezeit nach Herstellerangabe abwarten",
   "Sich elektrostatisch entladen (z. B. Fahrzeugmasse berühren) und die Steckverbindung des Airbag-Bauteils trennen",
   "Ausgebaute Airbag-Einheit mit der Polsterseite nach oben ablegen"
  ],
  "explain": "Erst stromlos machen, dann warten, bis die Energiereserve im Steuergerät entladen ist. Die Wartezeit ist je nach Fahrzeug sehr verschieden – sie steht im Reparaturleitfaden. Die elektrostatische Entladung schützt die Zündpille vor einem Funken über den Körper.",
  "src": "Netz: Recherche 3.4/3.6, FW"
 },
 {
  "id": "3993913c0d6f",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 5,
  "q": "Warum dürfen Sie nach dem Abklemmen der Batterie nicht sofort am Airbag-System arbeiten?",
  "opts": [
   "Die Zündpille ist durch den Prüfstrom des Steuergeräts noch heiß; erst nach dem Abkühlen auf Raumtemperatur kann sie beim Abstecken nicht mehr zünden",
   "Das Steuergerät speichert noch die Crashdaten dauerhaft ab; vorher gehen sie beim Arbeiten verloren",
   "Die Energiereserve (Kondensator) im Steuergerät kann die Zündpille noch bestromen; erst nach der Wartezeit nach Herstellerangabe ist sie entladen",
   "Der Fehlerspeicher löscht sich erst nach einer Wartezeit; sonst wird beim Wiederanklemmen ein Fehler eingetragen"
  ],
  "correct": 2,
  "explain": "Das Steuergerät besitzt eine Energiereserve (Kondensator), die die Zündpille auch ohne Batterie noch bestromen kann – der Airbag könnte auslösen. Erst nach der vom Hersteller angegebenen Wartezeit ist sie entladen. Die Energiereserve ist gewollt: Reißt bei einem Unfall die Batterieleitung ab, kann das Steuergerät trotzdem noch zünden. Bei Arbeiten in der Werkstatt ist genau das die Gefahr.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de)"
 },
 {
  "id": "363ad96a0788",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-sitz",
  "nr": 6,
  "q": "Welche Prüfung an der Airbag-Einheit ist verboten?",
  "opts": [
   "Den Widerstand der Zündpille direkt mit dem Multimeter messen",
   "Den Fehlerspeicher mit dem Diagnosetester auslesen",
   "Die Steckverbindung auf Korrosion und richtige Verrastung sichtprüfen",
   "Die Zündkreis-Messwerte im Diagnosetester ablesen"
  ],
  "correct": 0,
  "explain": "Ein Multimeter schickt beim Widerstandsmessen einen Prüfstrom durch das Bauteil. Der kann die Zündpille auslösen. Den Zündkreiswiderstand liest man deshalb über den Tester aus oder misst mit Prüfadapter bzw. Ersatzwiderstand.",
  "src": "Netz: Recherche 3.4 (kfz-tech.de)"
 },
 {
  "id": "0c4293e0dcd5",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 7,
  "q": "Welche Antwort nennt vier fachgerechte Schritte bzw. Hilfsmittel, um den Zündkreis des Seitenairbags zu prüfen?",
  "opts": [
   "Messwerte mit dem Diagnosetester auslesen; Widerstand der Zündpille direkt mit dem Multimeter messen; Stecker unter dem Sitz prüfen; Leitung bei abgesteckten Bauteilen auf Durchgang prüfen",
   "Messwerte mit dem Diagnosetester auslesen; Prüfadapter bzw. Ersatzwiderstand anschließen; Stecker unter dem Sitz prüfen; Zündkreis bei eingesteckter Airbag-Einheit kurz mit der Prüflampe auf Durchgang und Spannung prüfen",
   "Fehlerspeicher löschen und abwarten, ob der Fehler wiederkommt; Prüfadapter anschließen; Stecker unter dem Sitz prüfen; Leitung bei angeschlossener Airbag-Einheit auf Durchgang messen",
   "Messwerte mit dem Diagnosetester auslesen; Prüfadapter bzw. Ersatzwiderstand anschließen; Stecker unter dem Sitz prüfen; Leitung bei abgesteckter Airbag-Einheit und Steuergerät auf Durchgang und Kurzschluss prüfen"
  ],
  "correct": 3,
  "explain": "Fehlerspeicher und Zündkreiswiderstand liest man mit dem Diagnosetester aus. Am Stecker unter dem Sitz prüft man Verrastung, Kontakte, Korrosion und Kurzschlussbrücke. Mit dem Ersatzwiderstand lässt sich eingrenzen: Verschwindet der Fehler, liegt er an der Airbag-Einheit oder ihrem Stecker, bleibt er, an Leitung oder Steuergerät. Leitungen nur prüfen, wenn keine Zündpille angeschlossen ist.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "d56a7beb109a",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 8,
  "q": "Statt der Airbag-Einheit schließen Sie einen Ersatzwiderstand von 2,2 Ω an. Die zwei Steckverbindungen haben je 0,1 Ω Übergangswiderstand, die Leitung hat insgesamt 0,3 Ω. Wie groß ist der Gesamtwiderstand des Zündkreises?",
  "opts": [
   "2,6 Ω",
   "0,04 Ω",
   "2,7 Ω",
   "2,5 Ω"
  ],
  "correct": 2,
  "formel": "Reihenschaltung: R_{ges} = R_1 + R_2 + R_3 + …\nJeder Übergangswiderstand zählt einzeln mit.",
  "explain": "Alle Widerstände liegen in Reihe: R = 2,2 Ω + 2 × 0,1 Ω + 0,3 Ω = 2,7 Ω. Ein lockerer Stecker erhöht den Übergangswiderstand – deshalb meldet das Steuergerät dann „Widerstand zu hoch“.",
  "src": "FW"
 },
 {
  "id": "f92d1724328f",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 9,
  "q": "Im Stecker der Airbag-Einheit sitzt eine Kurzschlussbrücke. Welche Beschreibung ihrer Aufgabe ist richtig?",
  "opts": [
   "Sie schließt im eingesteckten Zustand die Zündpille kurz, damit der Prüfstrom des Steuergeräts nicht durch sie fließt",
   "Beim Abziehen des Steckers verbindet eine Federbrücke die beiden Anschlüsse der Zündpille; Fremdspannung kann keinen Zündstrom treiben",
   "Beim Abziehen des Steckers legt sie die Zündkreisleitung an Masse, damit das Steuergerät den offenen Stecker sofort erkennt und die Kontrollleuchte einschaltet",
   "Sie überbrückt bei einem Unfall einen beschädigten Stecker, damit der Airbag trotzdem zünden kann"
  ],
  "correct": 1,
  "explain": "Beim Abziehen des Steckers schließt eine Federbrücke die beiden Anschlüsse der Zündpille kurz. Fremdspannung oder statische Aufladung kann dann keinen Zündstrom durch die Zündpille treiben – keine ungewollte Auslösung. Sobald der Stecker wieder richtig eingerastet ist, drückt er die Brücke auf. Rastet er nicht ein, kann die Brücke teilweise anliegen oder der Kontakt wackeln – ein Grund für unplausible Zündkreiswerte.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "9ef32b16e196",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 10,
  "q": "Warum ist die Steckverbindung unter dem Sitz eine typische Fehlerquelle – besonders nach einem Sitzausbau?",
  "opts": [
   "Stecker wird beim Einbau oft nicht richtig verriegelt; Leitung wird bei jeder Sitzverstellung bewegt; beim Sitzausbau verliert das Steuergerät seine Codierung",
   "Der Zündkreis bekommt seine Masse über die Sitzschienen, die beim Ausbau verschmutzen; Leitung wird bei jeder Sitzverstellung bewegt; Feuchtigkeit führt zu Korrosion",
   "Stecker wird beim Einbau oft nicht richtig verriegelt; die Zündpille altert durch jedes Abstecken; Feuchtigkeit führt zu Korrosion an den Kontakten",
   "Stecker wird beim Einbau oft nicht richtig verriegelt; Leitung wird bei jeder Sitzverstellung bewegt; Feuchtigkeit und Schmutz am Boden führen zu Korrosion"
  ],
  "correct": 3,
  "explain": "Der Stecker wird beim Ausbau getrennt und beim Einbau oft nicht richtig eingerastet. Die Leitung wird bei jeder Sitzverstellung bewegt (Zug, Knicken, Scheuern), und Feuchtigkeit und Schmutz am Fahrzeugboden (z. B. nach Teppichreinigung) lassen die Kontakte korrodieren. Im vorliegenden Fall ist der Stecker nach dem Sitzeinbau nicht eingerastet: Der Übergangswiderstand ist zu hoch, das Steuergerät erkennt das beim Selbsttest und schaltet die Kontrollleuchte ein.",
  "src": "FW"
 },
 {
  "id": "cb91af126292",
  "cat": "Airbag",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "airbag-sitz",
  "nr": 11,
  "q": "Ordnen Sie den Bauteilen des Rückhaltesystems ihre Schutzwirkung zu.",
  "paare": [
   [
    "Gurtstraffer",
    "Zieht das lose Gurtband straff, bevor der Insasse nach vorn geht"
   ],
   [
    "Gurtkraftbegrenzer",
    "Begrenzt die Gurtkraft auf den Brustkorb"
   ],
   [
    "Seitenairbag",
    "Schützt Brustkorb und Becken beim Seitenaufprall"
   ],
   [
    "Kopfairbag (Vorhang)",
    "Schützt den Kopf vor Seitenscheibe und Säulen"
   ],
   [
    "Knieairbag",
    "Schützt die Knie und verhindert das Durchrutschen unter dem Gurt"
   ]
  ],
  "ablenker": [
   "Verhindert das Blockieren der Räder"
  ],
  "explain": "Gurt und Airbags wirken zusammen: Der Gurtstraffer holt die Gurtlose heraus, der Kraftbegrenzer gibt danach kontrolliert nach, damit der Insasse weich in den Airbag eintaucht.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "2e969bf5769a",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-sitz",
  "nr": 12,
  "q": "Unter welcher Bedingung löst das Airbag-Steuergerät einen Airbag aus?",
  "opts": [
   "Wenn mindestens zwei Sensorsignale den Aufprall übereinstimmend (plausibel) melden",
   "Sobald ein beliebiger einzelner Sensor eine Verzögerung über der Auslöseschwelle meldet",
   "Bei jeder Vollbremsung mit ABS-Eingriff",
   "Wenn die Airbag-Kontrollleuchte leuchtet"
  ],
  "correct": 0,
  "explain": "Das Steuergerät vergleicht das Signal seines eigenen Beschleunigungssensors mit dem eines Satelliten (Upfront- oder Seitensensor). Erst wenn beide einen Aufprall bestätigen, wird gezündet – so führt ein einzelner defekter Sensor oder ein Schlag gegen das Steuergerät nicht zur Auslösung.",
  "src": "Netz: Recherche 3.6"
 },
 {
  "id": "6eb4c963fb80",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 13,
  "q": "Falls die Airbag-Einheit ausgebaut werden muss: Welche Antwort nennt vier richtige Regeln für Ablage, Transport und Lagerung?",
  "opts": [
   "Mit der Polsterseite nach unten ablegen; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern",
   "Mit der Polsterseite nach oben ablegen; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, keine Fette; offen im Teilelager bei den übrigen Ersatzteilen lagern",
   "Mit der Polsterseite nach oben ablegen, Polster beim Tragen vom Körper weg; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern",
   "Mit der Polsterseite nach oben ablegen, Polster beim Tragen zum Körper hin; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, keine Fette; gesichert in abschließbarem Raum bzw. Behälter lagern"
  ],
  "correct": 2,
  "explain": "Regeln: Polsterseite nach oben ablegen und das Polster beim Tragen vom Körper weg halten; nicht an Leitung oder Stecker tragen; keine Wärme über ca. 100 °C, kein offenes Feuer, keine Fette oder Reinigungsmittel; gesichert in einem abschließbaren Raum bzw. Behälter lagern (Mengengrenzen nach Lagerrichtlinie LR 240). Liegt das Polster unten und die Einheit löst aus, wird sie wie ein Geschoss hochgeschleudert. Mit dem Polster nach oben entfaltet sich der Sack frei nach oben. Für den Transport möglichst die Originalverpackung nutzen.",
  "src": "Netz: Recherche 3.4/3.6 (kfz-tech.de, TÜV SÜD)"
 },
 {
  "id": "3bf428bcbf5e",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 14,
  "q": "Welche Antwort nennt die rechtlichen Voraussetzungen, damit Ihr Betrieb Airbag- und Gurtstraffereinheiten aus- und einbauen darf?",
  "opts": [
   "Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau darf jede Fachkraft ohne zusätzliche Schulung; Tätigkeit vorher bei der zuständigen Behörde anzeigen",
   "Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; Tätigkeit vor Aufnahme bei der zuständigen Behörde anzeigen",
   "Feuerwerkskörper der Kategorie F2 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; Tätigkeit vor Aufnahme bei der zuständigen Behörde anzeigen",
   "Pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht); Ein- und Ausbau nur mit Fachkunde bzw. Schulung; keine Anzeige nötig, nur jährliche Meldung der verbauten Stückzahl"
  ],
  "correct": 1,
  "explain": "Airbag- und Gurtstraffereinheiten sind pyrotechnische Gegenstände der Kategorie P1. Ein- und Ausbau nur mit entsprechender (eingeschränkter) Fachkunde bzw. Schulung, und die Tätigkeit muss vor Aufnahme bei der zuständigen Behörde angezeigt werden. Dazu kommen die Regeln zur Lagerung (LR 240) und zur Entsorgung. Wer ohne Schulung an Airbags arbeitet, gefährdet sich und andere und handelt gegen das Sprengstoffrecht.",
  "src": "Netz: Recherche 3.4 (TÜV SÜD, Behördenportale, autoservicepraxis)"
 },
 {
  "id": "225201e46bed",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 15,
  "q": "Der Kunde fragt nebenbei, was bei seinem Zweitwagen nach einem Unfall mit ausgelösten Frontairbags zu ersetzen ist. Welche Antwort ist richtig?",
  "opts": [
   "Luftsäcke neu falten und Gasgeneratoren nachfüllen lassen; Steuergerät nach Herstellerangabe ersetzen; Sensoren, Wickelfeder und Gurte prüfen",
   "Ausgelöste Airbag-Einheiten ersetzen, Gurtstraffer weiterverwenden; Steuergerät nach Herstellerangabe ersetzen; Sensoren, Wickelfeder und Gurte prüfen",
   "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; Batterie ersetzen, weil der hohe Zündstrom sie beim Crash tiefentladen hat",
   "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; Sensoren, Wickelfeder, Gurte und Halterungen prüfen bzw. ersetzen"
  ],
  "correct": 3,
  "explain": "Alle ausgelösten Airbag-Einheiten und Gurtstraffer werden ersetzt; betroffene Sensoren, Wickelfeder, Gurte und Halterungen nach Herstellervorgabe prüfen bzw. ersetzen. Ausgelöste pyrotechnische Teile sind verbraucht. Das Steuergerät hat den Crash gespeichert und ist nach Herstellervorgabe zu tauschen; danach wird das neue Gerät codiert.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "6a56db3f86a9",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-sitz",
  "nr": 16,
  "q": "Wie wird eine nicht ausgelöste, defekte Airbag-Einheit entsorgt?",
  "opts": [
   "Nicht über den Hausmüll – Rückgabe über den Hersteller/Entsorger bzw. fachgerecht auslösen lassen",
   "Im Restmüll, wenn der Stecker abgezogen ist",
   "Im Altmetall-Container der Werkstatt, weil Gehäuse und Gasgenerator größtenteils aus Metall bestehen",
   "In Wasser einweichen und danach in den Hausmüll"
  ],
  "correct": 0,
  "explain": "Eine nicht ausgelöste Einheit enthält noch die Treibladung und bleibt ein pyrotechnischer Gegenstand. Vor der Verschrottung eines Fahrzeugs werden die Einheiten fachgerecht ausgelöst.",
  "src": "Netz: Recherche 3.4/3.6"
 },
 {
  "id": "0c1119069847",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 17,
  "q": "Sie haben den Stecker unter dem Sitz als Fehlerursache gefunden. Welche Antwort nennt vier richtige Abschlussarbeiten?",
  "opts": [
   "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie anklemmen und dabei vom Fahrersitz aus die Kontrollleuchte beobachten; Fehlerspeicher auslesen und löschen; Messwerte kontrollieren",
   "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie nach Herstellervorgabe anklemmen; Fehlerspeicher auslesen und löschen; Zündkreiswiderstand am Stecker mit dem Multimeter nachmessen",
   "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Batterie nach Herstellervorgabe anklemmen, niemand im Fahrzeug; Fehlerspeicher auslesen und löschen; Kontrollleuchte und Messwerte kontrollieren",
   "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Steuergerät neu codieren, weil der Sitzausbau die gespeicherte Codierung löscht; Fehlerspeicher auslesen und löschen; Kontrollleuchte kontrollieren"
  ],
  "correct": 2,
  "explain": "Beim Anklemmen der Batterie hält sich niemand im Fahrzeug auf. Danach Fehlerspeicher auslesen und löschen, Kontrollleuchte (Selbsttest, geht aus) und Zündkreis-Messwerte im Tester kontrollieren. Erst wenn die Leuchte nach dem Selbsttest erlischt und kein Fehler mehr gespeichert ist, ist das System wieder voll einsatzbereit. Die Arbeit wird im Auftrag dokumentiert.",
  "src": "FW"
 },
 {
  "id": "b2cd5195e291",
  "cat": "Airbag",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 18,
  "q": "Zum Schluss erklären Sie dem Kunden den Ablauf eines Frontaufpralls. Ordnen Sie den Zeitpunkten nach Aufprallbeginn (Richtwerte) das Ereignis zu.",
  "paare": [
   [
    "ca. 10–20 ms",
    "Steuergerät entscheidet über die Auslösung und bestromt die Zündpille"
   ],
   [
    "ca. 30–40 ms",
    "Airbag ist voll aufgeblasen"
   ],
   [
    "ca. 60–80 ms",
    "Insasse taucht in den Airbag ein, Gas entweicht über Ausströmöffnungen"
   ],
   [
    "ca. 100–150 ms",
    "Airbag ist weitgehend entleert, die Sicht ist wieder frei"
   ]
  ],
  "explain": "Die Zeiten sind Richtwerte und hängen von Fahrzeug, Aufprallart und System ab. Wichtig ist die Reihenfolge: Entscheidung in wenigen Millisekunden, Airbag voll, bevor der Insasse ankommt, danach Entleerung.",
  "src": "Netz: Recherche 3.6 (Aufblasen ca. 30–50 ms), FW (Richtwerte)"
 },
 {
  "id": "472310f28163",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung von Aufbau und einstufiger bzw. zweistufiger Ausführung eines pyrotechnischen Gasgenerators ist richtig?",
  "opts": [
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: zwei Ladungen, die immer gleichzeitig zünden, damit der Airbag bei jedem Unfall schneller voll ist",
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: zwei getrennt zündbare Ladungen, je nach Unfallschwere nur Stufe 1 oder beide zeitversetzt",
   "Gehäuse mit Druckluftflasche und Magnetventil; das Steuergerät öffnet das Ventil, die Luft strömt in den Luftsack; einstufig: ein Ventil; zweistufig: zwei Ventile, je nach Unfallschwere eines oder beide",
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: die zweite Ladung füllt den Airbag nach dem Entleeren für einen Folgeaufprall neu"
  ],
  "correct": 1,
  "explain": "Aufbau: Gehäuse mit Zündpille, Treibladung (fester Treibstoff) und Filter bzw. Kühlsieb. Die bestromte Zündpille zündet die Treibladung, das Gas strömt in den Luftsack. Einstufig: eine Treibladung, immer gleiche Aufblaswirkung. Zweistufig: zwei getrennt zündbare Ladungen – je nach Unfallschwere und Gurtstatus zündet nur Stufe 1 oder beide zeitversetzt. Mit zwei Stufen kann das Steuergerät den Airbag weicher oder härter füllen. Auch eine nicht gezündete zweite Stufe ist nach einem Unfall noch scharf – Einheit trotzdem als pyrotechnischen Gegenstand behandeln.",
  "src": "FW"
 },
 {
  "id": "e9e30586f47b",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Was kennzeichnet einen Hybrid-Gasgenerator?",
  "opts": [
   "Ein unter hohem Druck gespeichertes Gas wird durch eine pyrotechnische Ladung freigegeben und erwärmt",
   "Das Gas wird ausschließlich von einer elektrischen Pumpe erzeugt, die von der Energiereserve gespeist wird",
   "Er nutzt Druckluft aus dem Bremssystem",
   "Er kann nach der Auslösung wieder befüllt werden"
  ],
  "correct": 0,
  "explain": "Der Hybrid-Gasgenerator kombiniert einen Druckgasspeicher mit einer kleinen pyrotechnischen Ladung. Er wird oft bei großen Airbags wie dem Kopfairbag eingesetzt. Auch er ist ein pyrotechnischer Gegenstand.",
  "src": "FW"
 },
 {
  "id": "80b5256a2563",
  "cat": "Airbag",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie die Eigenschaften der passenden Gurtstraffer-Bauart zu.",
  "paare": [
   [
    "Wird durch eine Treibladung ausgelöst",
    "pyrotechnischer Gurtstraffer"
   ],
   [
    "Muss nach der Auslösung ersetzt werden",
    "pyrotechnischer Gurtstraffer"
   ],
   [
    "Ein Elektromotor strafft den Gurt, z. B. bei Notbremsung oder Schleudern",
    "reversibler elektrischer Gurtstraffer"
   ],
   [
    "Kann mehrfach wirken und gibt den Gurt danach wieder frei",
    "reversibler elektrischer Gurtstraffer"
   ],
   [
    "Unterliegt dem Sprengstoffrecht (Kategorie P1)",
    "pyrotechnischer Gurtstraffer"
   ]
  ],
  "explain": "Der reversible Straffer arbeitet vorbeugend schon vor einem möglichen Aufprall. Der pyrotechnische Straffer zündet erst beim Crash und ist danach verbraucht.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "b28c7f1f4c2a",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort beschreibt die Aufgabe der Sitzbelegungserkennung am Beifahrersitz und zwei Auswirkungen auf das Rückhaltesystem richtig?",
  "opts": [
   "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz löst bei einem Unfall kein Airbag im ganzen Fahrzeug aus; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung",
   "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz wird der Beifahrerairbag mit beiden Stufen gezündet; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung",
   "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz lösen Beifahrerairbag bzw. Gurtstraffer nicht unnötig aus; bei belegtem Sitz ohne Gurt wird der Beifahrerairbag abgeschaltet",
   "Erkennt über eine Sensormatte, ob der Sitz belegt ist; bei unbelegtem Sitz lösen Beifahrerairbag bzw. Gurtstraffer nicht unnötig aus; bei belegtem Sitz ohne Gurt kommt die Gurtwarnung"
  ],
  "correct": 3,
  "explain": "Die Sitzbelegungserkennung (z. B. Sensormatte im Sitzpolster) erkennt, ob der Sitz belegt ist. Bei unbelegtem Sitz werden Beifahrerairbag bzw. Gurtstraffer nicht unnötig ausgelöst, bei belegtem Sitz ohne Gurt kommt die Gurtwarnung. Unnötige Auslösungen verursachen hohe Reparaturkosten. Nach Arbeiten am Sitz muss die Sensormatte richtig angeschlossen sein, sonst erscheint ein Fehler.",
  "src": "FW"
 },
 {
  "id": "b804fa96f062",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine Kundin möchte eine rückwärtsgerichtete Babyschale auf dem Beifahrersitz befestigen. Was müssen Sie ihr erklären?",
  "opts": [
   "Beifahrerairbag eingeschaltet lassen, weil er die Babyschale zusätzlich abpolstert; den Sitz ganz nach hinten schieben genügt",
   "Beifahrerairbag abschalten, weil der sich entfaltende Airbag die Babyschale mit großer Wucht trifft; danach kann er dauerhaft aus bleiben, Erwachsene schützt dann der Gurt allein ausreichend",
   "Beifahrerairbag nach Herstellerangabe abschalten, weil er die Babyschale mit großer Wucht trifft; Anzeige „Beifahrerairbag aus“ kontrollieren und danach wieder einschalten",
   "Beifahrerairbag abschalten, das geht nur in der Werkstatt durch Abziehen des Airbag-Steckers; danach wieder anstecken lassen"
  ],
  "correct": 2,
  "explain": "Der Beifahrerairbag muss abgeschaltet sein (Schlüsselschalter bzw. Menü nach Herstellerangabe), weil der sich entfaltende Airbag die Babyschale mit großer Wucht trifft. Anzeige „Beifahrerairbag aus“ kontrollieren und nach dem Entfernen der Babyschale wieder einschalten. Die Babyschale sitzt sehr nah an der Instrumententafel. Wird der Airbag danach nicht wieder eingeschaltet, fehlt einem erwachsenen Beifahrer der Schutz.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "a01a92610bf2",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Beim Einbau einer neuen Wickelfeder müssen die Räder geradeaus stehen und die Wickelfeder in Mittelstellung sein. Welche Begründung und welche Folge eines Fehlers sind richtig?",
  "opts": [
   "Die Wickelfeder ist die Rückstellfeder des Lenkrads; nur aus der Mittelstellung läuft das Lenkrad nach Kurven zurück; bei Fehler zieht das Fahrzeug einseitig",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler reißt das Band – Fahrerairbag, Hupe und Lenkradtasten ohne Funktion",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler löst der Fahrerairbag beim Lenken aus",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler blockiert das elektrische Lenkschloss und der Motor startet nicht mehr"
  ],
  "correct": 1,
  "explain": "Die Wickelfeder ist ein aufgewickeltes Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen. Nur aus der Mittelstellung reicht die Länge für vollen Lenkeinschlag nach links und rechts. Bei falschem Einbau reißt das Band beim Lenken – Zündkreis Fahrerairbag unterbrochen, Hupe und Lenkradtasten ohne Funktion. Neue Wickelfedern sind meist mit einer Transportsicherung in Mittelstellung fixiert. Die Sicherung erst nach dem Einbau entfernen und die Wickelfeder bei abgenommenem Lenkrad nicht verdrehen.",
  "src": "FW"
 },
 {
  "id": "d08100c78900",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Bei einem Unfall sendet das Airbag-Steuergerät ein Crashsignal über den Datenbus. Ordnen Sie den Systemen ihre Reaktion zu.",
  "paare": [
   [
    "Zentralverriegelung",
    "Türen entriegeln"
   ],
   [
    "Warnblinkanlage",
    "einschalten"
   ],
   [
    "Kraftstoffpumpe",
    "abschalten"
   ],
   [
    "eCall-Notrufsystem",
    "Notruf mit Fahrzeugposition absetzen"
   ]
  ],
  "ablenker": [
   "Motorleistung erhöhen"
  ],
  "explain": "Das Crashsignal hilft Rettern (Türen offen, Notruf), warnt den Verkehr und senkt die Brandgefahr, weil kein Kraftstoff mehr gefördert wird.",
  "src": "Netz: Recherche 3.4"
 },
 {
  "id": "6995dfb14f4e",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Manche Fahrzeuge haben am Batterie-Pluskabel einen pyrotechnischen Batterietrennschalter. Welche Beschreibung von Aufgabe und Folgen der Auslösung ist richtig?",
  "opts": [
   "Trennt bei einem schweren Unfall die Hauptleitung zu Starter und Generator; verhindert Kurzschluss und Brand; danach über einen Reset-Knopf wieder einschalten und weiterverwenden",
   "Trennt bei jedem Abstellen des Motors die Batterie vom Bordnetz; verhindert eine Tiefentladung; wird beim nächsten Start automatisch wieder geschlossen",
   "Trennt bei einem Unfall die Leitung zum Airbag-Steuergerät, damit keine weiteren Airbags auslösen; danach muss das Bauteil ersetzt werden",
   "Trennt bei einem schweren Unfall die Hauptleitung zu Starter und Generator; verhindert Kurzschluss und Brand; danach ersetzen, wichtige Verbraucher bleiben meist versorgt"
  ],
  "correct": 3,
  "explain": "Der Trennschalter trennt bei einem schweren Unfall die Hauptleitung von der Batterie zu Starter und Generator und verhindert so Kurzschluss und Brand durch eine beschädigte, nicht abgesicherte Plusleitung. Nach der Auslösung muss er ersetzt werden; wichtige Verbraucher (z. B. Warnblinker) bleiben meist versorgt. Besonders wichtig, wenn die Batterie im Heck sitzt und die Plusleitung durch das ganze Fahrzeug läuft. Der Trennschalter ist ebenfalls ein pyrotechnisches Bauteil.",
  "src": "FW"
 },
 {
  "id": "e4e9fb734826",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wozu dient eine aktive Motorhaube?",
  "opts": [
   "Sie hebt sich bei einem erkannten Fußgängeraufprall hinten an, damit mehr Abstand zu harten Motorteilen entsteht",
   "Sie öffnet sich bei Überhitzung des Motors",
   "Sie senkt den Luftwiderstand bei hoher Geschwindigkeit",
   "Sie verriegelt sich bei einem Frontaufprall zusätzlich, damit keine Motorteile in den Innenraum oder auf die Straße fliegen"
  ],
  "correct": 0,
  "explain": "Sensoren im Stoßfänger erkennen den Fußgängeraufprall, Aktuatoren (oft pyrotechnisch) heben die Haube an. Der Kopf des Fußgängers trifft dann auf eine nachgiebige Fläche.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "efe430d213cf",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Wie erfassen Upfront-Sensoren und Seitenaufprallsensoren einen Aufprall, und wie nutzt das Steuergerät die Signale?",
  "opts": [
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, Drucksensoren in der Tür den Druckanstieg; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, Drucksensoren in der Tür den Druckanstieg; das Steuergerät löst aus, sobald ein einzelner dieser Sensoren anspricht, um Zeit zu sparen",
   "Upfront-Sensoren messen per Radar den Abstand zum Hindernis; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren messen die Längsverzögerung, Drucksensoren den Gasdruck im Seitenairbag; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität"
  ],
  "correct": 0,
  "explain": "Upfront-Sensoren vorn messen die Verzögerung mit einem Beschleunigungssensor und melden einen Frontaufprall sehr früh. Seitenaufprallsensoren in B-Säule bzw. Schweller messen die Querbeschleunigung, Drucksensoren in der Tür den schnellen Druckanstieg, wenn die Tür eingedrückt wird. Das Steuergerät vergleicht die Signale mit seinem eigenen Beschleunigungssensor (Plausibilität), bevor es auslöst. Beim Seitenaufprall ist die Knautschzone sehr kurz – deshalb sitzen die Sensoren direkt in der Seite, damit das Steuergerät schnell genug entscheiden kann.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "64c778dbec76",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Sie bauen ein neues Airbag-Steuergerät ein. Was ist danach notwendig?",
  "opts": [
   "Es mit dem Diagnosetester auf die Fahrzeugausstattung codieren bzw. anlernen",
   "Nichts – es erkennt alle Airbags selbst",
   "Die Batterie 24 Stunden abgeklemmt lassen, damit es sich selbst auf die Ausstattung einstellt",
   "Jeden Zündkreis mit dem Multimeter anlernen"
  ],
  "correct": 0,
  "explain": "Das Steuergerät muss wissen, welche Airbags, Gurtstraffer und Sensoren verbaut sind. Danach Fehlerspeicher auslesen und die Kontrollleuchte prüfen.",
  "src": "Netz: Recherche 3.4"
 },
 {
  "id": "2a54abbce03f",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Für den Tausch der Wickelfeder muss das Lenkrad ab. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
  "schritte": [
   "Räder in Geradeausstellung bringen, danach Zündung aus, Batterie abklemmen und die Wartezeit nach Herstellerangabe abwarten",
   "Fahrerairbag ausbauen, Stecker trennen und mit der Polsterseite nach oben ablegen",
   "Stellung des Lenkrads zur Lenksäule markieren",
   "Lenkradschraube lösen und Lenkrad abnehmen"
  ],
  "explain": "Die Geradeausstellung und die Markierung sorgen dafür, dass Lenkrad und Wickelfeder später wieder in Mittelstellung sitzen. Die Lenkradschraube nach Herstellerangabe ersetzen und mit Drehmoment anziehen.",
  "src": "FW"
 },
 {
  "id": "701757560a9c",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "In einer Übungsschaltung im Labor werden zwei Widerstände mit 3,3 Ω und 6,8 Ω parallel geschaltet. Wie groß ist der Gesamtwiderstand?",
  "opts": [
   "10,1 Ω",
   "0,45 Ω",
   "22,44 Ω",
   "2,22 Ω"
  ],
  "correct": 3,
  "formel": "Parallelschaltung: 1 / R_{ges} = 1 / R_1 + 1 / R_2 + …\nbei zwei Widerständen: R_{ges} = R_1 · R_2 / (R_1 + R_2)",
  "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (3,3 Ω × 6,8 Ω) ÷ 10,1 Ω ≈ 2,22 Ω. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
  "src": "FW"
 },
 {
  "id": "a37358d9f2e3",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie groß ist der Strom, der durch eine Zündpille mit 2 Ω fließen würde, wenn versehentlich die Bordnetzspannung von 12 V anliegt?",
  "opts": [
   "24 A",
   "0,17 A",
   "6,0 A",
   "0,6 A"
  ],
  "correct": 2,
  "formel": "I = U / R\nI in A, U in V, R in Ω",
  "explain": "I = U ÷ R = 12 V ÷ 2 Ω = 6 A. Zum Zünden reicht schon ein deutlich kleinerer Strom. Deshalb darf an einer Zündpille nie eine Spannung oder ein Messgerät angelegt werden – auch der Prüfstrom eines Multimeters ist gefährlich.",
  "src": "FW"
 },
 {
  "id": "138733a36dc2",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Zu welcher Kategorie pyrotechnischer Gegenstände gehören Airbag- und Gurtstraffereinheiten nach Sprengstoffrecht?",
  "opts": [
   "P1",
   "P2",
   "F4",
   "T2"
  ],
  "correct": 0,
  "explain": "Kategorie P1 = pyrotechnische Gegenstände mit geringer Gefahr, z. B. Airbag- und Gurtstraffereinheiten. Für Ein- und Ausbau braucht man trotzdem Fachkunde bzw. Schulung, und die Tätigkeit muss angezeigt werden.",
  "src": "Netz: Recherche 3.4 (TÜV SÜD, Behördenportale)"
 },
 {
  "id": "7990a91ab566",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie lange müssen Sie nach dem Abklemmen der Batterie warten, bevor Sie an Airbag-Bauteilen arbeiten?",
  "opts": [
   "So lange, wie der Fahrzeughersteller es vorgibt",
   "Gar nicht – nach dem Abklemmen ist das System sofort spannungsfrei",
   "Immer genau 10 Sekunden",
   "Bis die Airbag-Kontrollleuchte erlischt"
  ],
  "correct": 0,
  "explain": "Die Wartezeit hängt vom System ab und ist je nach Fahrzeug sehr unterschiedlich. Sie steht im Reparaturleitfaden des Herstellers. Grund ist die Energiereserve im Steuergerät.",
  "src": "Netz: Recherche 3.6 (Wartezeit nur nach Herstellerangabe)"
 },
 {
  "id": "b35e368a57df",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Sie prüfen im Innenraum bei eingeschalteter Zündung, die Airbag-Anlage ist also aktiv. Welche Antwort nennt drei richtige Verhaltensregeln?",
  "opts": [
   "Nicht im Entfaltungsbereich aufhalten; keine Werkzeuge auf oder vor Airbag-Abdeckungen legen; keine Spannung und kein Messgerät an Airbag-Stecker oder Zündkreis – nur mit Tester prüfen",
   "Nicht im Entfaltungsbereich aufhalten; Werkzeuge auf der Airbag-Abdeckung ablegen, dort verrutschen sie nicht; keine Spannung und kein Messgerät an Airbag-Stecker oder Zündkreis – nur mit Tester prüfen",
   "Nicht im Entfaltungsbereich aufhalten; keine Werkzeuge auf oder vor Airbag-Abdeckungen legen; Zündkreis zur Kontrolle kurz mit der Prüflampe auf Spannung prüfen",
   "Direkt vor dem Lenkrad arbeiten, um die Kontrollleuchte im Blick zu haben; keine Werkzeuge auf oder vor Airbag-Abdeckungen legen; nur mit Tester prüfen"
  ],
  "correct": 0,
  "explain": "Nicht im Entfaltungsbereich der Airbags aufhalten (nicht vor Lenkrad oder Instrumententafel beugen), keine Gegenstände auf oder vor Airbag-Abdeckungen legen und keine Spannung oder Messgeräte an den Zündkreis anlegen. Löst ein Airbag ungewollt aus, ist der Bereich direkt vor der Abdeckung am gefährlichsten. Gegenstände würden dabei weggeschleudert.",
  "src": "FW"
 },
 {
  "id": "f2daf705b7fa",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Kunde fragt, ob die Airbags in seinem 15 Jahre alten Fahrzeug wegen des Alters getauscht werden müssen. Wie gehen Sie vor?",
  "opts": [
   "Airbags nach der gesetzlichen Altersgrenze von 10 Jahren grundsätzlich tauschen; Fehlerspeicher auslesen; Rückrufe nicht abfragen, da sie nach so langer Zeit ohnehin verjährt sind",
   "Herstellerangaben bzw. Serviceplan auf ein Tausch- oder Prüfintervall prüfen; Selbsttest der Kontrollleuchte und Fehlerspeicher prüfen; offene Rückrufe des Herstellers abfragen",
   "Zündkreise mit dem Multimeter auf Zündfähigkeit messen; Selbsttest der Kontrollleuchte prüfen; bei ausreichendem Widerstand ist kein Tausch nötig",
   "Kein Handlungsbedarf, solange die Kontrollleuchte aus ist; Rückrufe betreffen nur Fahrzeuge in der Herstellergarantie"
  ],
  "correct": 1,
  "explain": "Herstellerangaben bzw. Serviceplan auf ein Tausch- oder Prüfintervall prüfen: Ältere Systeme hatten teils feste Tauschintervalle, neuere gelten meist über die Lebensdauer als wartungsfrei. Funktion über Selbsttest und Fehlerspeicher prüfen, offene Rückrufe abfragen. Eine pauschale Altersgrenze gibt es nicht – maßgeblich ist der Hersteller. Rückrufaktionen wegen fehlerhafter Gasgeneratoren hat es schon gegeben, deshalb die Fahrgestellnummer prüfen.",
  "src": "FW"
 },
 {
  "id": "06176137a4e4",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Bauteilen des Airbag-Systems ihre Aufgabe zu.",
  "paare": [
   [
    "Airbag-Steuergerät",
    "Wertet die Crashsignale aus und entscheidet über die Auslösung"
   ],
   [
    "Zündpille",
    "Wird vom Zündstrom erhitzt und zündet die Treibladung"
   ],
   [
    "Gasgenerator",
    "Erzeugt in Millisekunden das Gas für den Luftsack"
   ],
   [
    "Wickelfeder",
    "Stellt die elektrische Verbindung zum drehbaren Lenkrad her"
   ],
   [
    "Satellitensensor (Upfront/Seite)",
    "Meldet die Verzögerung frühzeitig vom Aufprallort an das Steuergerät"
   ]
  ],
  "ablenker": [
   "Regelt den Kraftstoffdruck im Rail"
  ],
  "explain": "Steuergerät und Satelliten liefern die Signale, die Zündpille ist das Bindeglied zwischen Elektrik und Pyrotechnik, der Gasgenerator füllt den Luftsack.",
  "src": "Netz: Recherche 3.4"
 },
 {
  "id": "7af62075290d",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Airbag-Arten ihren üblichen Einbauort zu.",
  "paare": [
   [
    "Fahrerairbag",
    "Prallplatte des Lenkrads"
   ],
   [
    "Beifahrerairbag",
    "Instrumententafel auf der Beifahrerseite"
   ],
   [
    "Seitenairbag",
    "Sitzlehne außen oder Türverkleidung"
   ],
   [
    "Kopfairbag (Vorhang)",
    "Dachrahmen über den Seitenscheiben"
   ],
   [
    "Knieairbag",
    "Unter der Instrumententafel bzw. Lenksäulenverkleidung"
   ]
  ],
  "ablenker": [
   "Kofferraumboden"
  ],
  "explain": "Wo ein Airbag sitzt, ist auf der Abdeckung meist mit „AIRBAG“ gekennzeichnet. Bei Arbeiten an Sitzen, Türverkleidungen oder Dachhimmel immer an die Airbags in diesen Bauteilen denken.",
  "src": "FW"
 },
 {
  "id": "847d75d018cf",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung von Aufgabe und Wirkungsweise des Gurtkraftbegrenzers ist richtig?",
  "opts": [
   "Zieht beim Aufprall das lose Gurtband straff; arbeitet mit einer Treibladung im Gurtschloss; muss nach der Auslösung ersetzt werden",
   "Begrenzt die Gurtkraft auf den Brustkorb; blockiert dazu das Gurtband vollständig, sobald eine bestimmte Kraft erreicht ist; der Insasse wird starr im Sitz gehalten und berührt den Airbag nicht",
   "Begrenzt die Geschwindigkeit, mit der der Gurt beim Anlegen ausgezogen wird; arbeitet mit einer Fliehkraftsperre; verhindert ein Einklemmen des Gurts",
   "Begrenzt die Gurtkraft auf den Brustkorb; gibt ab einer bestimmten Kraft kontrolliert Gurtband frei (z. B. Torsionsstab); der Insasse taucht kontrolliert in den Airbag ein"
  ],
  "correct": 3,
  "explain": "Der Gurtkraftbegrenzer begrenzt die Kraft auf den Brustkorb (z. B. gegen Rippenbrüche). Ab einer bestimmten Gurtkraft gibt er kontrolliert Gurtband frei (z. B. Torsionsstab im Gurtaufroller), sodass der Insasse kontrolliert in den Airbag eintaucht. Ohne Kraftbegrenzer würde der gestraffte Gurt den Oberkörper sehr hart abfangen. Zusammen mit dem Airbag wird die Verzögerung auf einen längeren Weg verteilt.",
  "src": "FW"
 },
 {
  "id": "f14934600db8",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt vier Dinge, die Sie bei Arbeiten in der Nähe ein- oder ausgebauter Airbag-Einheiten vermeiden müssen?",
  "opts": [
   "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; Ablegen der Einheit mit der Polsterseite nach oben",
   "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; elektrostatisches Entladen am Fahrzeug vor dem Abstecken",
   "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; Prüfspannung oder Messgerät direkt an der Zündpille",
   "Wärme über ca. 100 °C, Flamme und Schweißen; Fette oder Lösungsmittel auf der Abdeckung; Schläge und Stöße; Auslesen der Zündkreis-Messwerte mit dem Diagnosetester"
  ],
  "correct": 2,
  "explain": "Zu vermeiden: Wärme über ca. 100 °C, offene Flamme und Schweißen in der Nähe (Herstellervorgaben beachten); Fette, Reinigungs- oder Lösungsmittel auf der Abdeckung; Schläge und Stöße – heruntergefallene Einheiten nicht mehr einbauen; Prüfspannung oder Messgerät an der Zündpille. Wärme kann die Treibladung zünden, Lösungsmittel greifen Abdeckung und Sollbruchstelle an, und ein Sturz kann den Gasgenerator innen beschädigen.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "93c56ce2dcf4",
  "cat": "Airbag",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Fehlereinträgen eines Zündkreises die wahrscheinliche Ursache zu.",
  "paare": [
   [
    "Widerstand zu hoch",
    "Unterbrechung oder Übergangswiderstand am Stecker"
   ],
   [
    "Widerstand zu niedrig",
    "Kurzschluss zwischen den beiden Zündkreisleitungen"
   ],
   [
    "Kurzschluss nach Plus",
    "Zündkreisleitung scheuert an einer spannungsführenden Leitung"
   ],
   [
    "Kurzschluss nach Masse",
    "Zündkreisleitung scheuert an der Karosserie"
   ]
  ],
  "ablenker": [
   "Batterie zu schwach geladen"
  ],
  "explain": "Das Steuergerät misst den Zündkreis ständig mit sehr kleinem Prüfstrom und erkennt so Abweichungen vom Sollbereich. Die Ursache wird dann mit Prüfadapter und Leitungsprüfung nach Herstellervorgabe eingegrenzt.",
  "src": "FW"
 },
 {
  "id": "c49f40aa7237",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Funktionskette bei einem Frontaufprall in die richtige Reihenfolge.",
  "schritte": [
   "Beschleunigungssensoren erfassen die starke Verzögerung",
   "Steuergerät vergleicht die Signale (Plausibilität) und entscheidet über die Auslösung",
   "Steuergerät bestromt die Zündpille",
   "Zündpille zündet die Treibladung im Gasgenerator",
   "Gas strömt in den Luftsack, die Abdeckung reißt an der Sollbruchstelle auf",
   "Insasse taucht in den gefüllten Airbag ein, Gas entweicht über Ausströmöffnungen"
  ],
  "explain": "Die ganze Kette läuft in wenigen Millisekunden ab. Der Airbag muss voll sein, bevor der Insasse ihn erreicht – und sich danach entleeren, damit er abfedert statt zurückzuschleudern.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "853b8b94f8e5",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Kunde ist beim Einparken langsam gegen einen Poller gefahren. Die Airbags haben nicht ausgelöst. Wie beurteilen Sie das?",
  "opts": [
   "Normal – die Verzögerung lag unter der Auslöseschwelle, der Gurt reicht als Schutz",
   "Fehler – Airbags müssen bei jedem Aufprall auslösen",
   "Fehler – die Airbags sind sicher dauerhaft abgeschaltet",
   "Normal – Airbags lösen nur bei einem Seitenaufprall oder Überschlag aus, nie bei Frontaufprall"
  ],
  "correct": 0,
  "explain": "Frontairbags lösen erst bei einem deutlichen Aufprall aus (Richtwert: ab etwa 30 km/h, je nach Fahrzeug und Hindernis). Bei leichten Remplern würde der Airbag mehr schaden als nützen.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de)"
 },
 {
  "id": "e14741d5b73b",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach einem Lenkradausbau funktionieren Hupe und Lenkradtasten nicht mehr und die Airbag-Leuchte ist an. Welches Bauteil ist am wahrscheinlichsten beschädigt?",
  "opts": [
   "Wickelfeder (Kontakteinheit)",
   "Upfront-Sensor",
   "Gurtstraffer",
   "Seitenaufprallsensor Fahrertür"
  ],
  "correct": 0,
  "explain": "Über die Wickelfeder laufen Fahrerairbag, Hupe und Lenkradtasten. Fallen alle zugleich aus, ist meist das Flachbandkabel gerissen – oft, weil das Lenkrad bei abgenommener Wickelfeder verdreht wurde.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "1b5b5a88baf9",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei einer Inspektion fällt Ihnen auf, dass die Airbag-Kontrollleuchte beim Einschalten der Zündung gar nicht aufleuchtet. Wie ist der Befund zu beurteilen, und wie gehen Sie weiter vor?",
  "opts": [
   "In Ordnung: Ein fehlerfreies System zeigt keinen Selbsttest an; die Leuchte geht nur bei einem Fehler an; kein weiteres Vorgehen nötig, Kunden nur auf die nächste Inspektion hinweisen",
   "Fehler: Ohne Selbsttest würde auch ein Systemfehler nicht gemeldet; Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument auslesen; Kunden informieren",
   "In Ordnung, wenn der Beifahrerairbag abgeschaltet ist; nur die Anzeige „Beifahrerairbag aus“ kontrollieren; Kunden nicht weiter informieren",
   "Fehler, aber ohne Einfluss auf die Sicherheit; die Airbags funktionieren trotzdem; Leuchte bei der nächsten Inspektion tauschen"
  ],
  "correct": 1,
  "explain": "Der Befund ist ein Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde dem Fahrer nicht gemeldet. Mögliche Ursachen sind Leuchte bzw. Anzeige im Kombiinstrument, Datenbus/Ansteuerung oder ein Steuergerät ohne Versorgung oder manipuliert. Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument auslesen und den Kunden informieren. Die Kontrollleuchte ist Teil der Sicherheitsfunktion. Leuchtet sie nie, kann der Fahrer einen Ausfall des Airbag-Systems nicht erkennen – das ist auch bei der Hauptuntersuchung ein Mangel.",
  "src": "FW"
 },
 {
  "id": "3327f2c4a073",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 1,
  "q": "Lesen Sie den Auftrag. Warum spricht das gleichzeitige Auftreten aller drei Beanstandungen für eine gemeinsame Fehlerstelle?",
  "opts": [
   "Fahrerairbag, Hupe und Lenkradtasten sind alle über das drehbare Lenkrad und damit über die Wickelfeder angeschlossen",
   "Fahrerairbag, Hupe und Lenkradtasten werden alle vom Airbag-Steuergerät versorgt und bei einem Fehler gemeinsam abgeschaltet",
   "Das neue Lenkrad ist noch nicht codiert; eine fehlende Codierung meldet das Steuergerät als „Widerstand zu hoch“",
   "Hupe und Lenkradtasten fallen absichtlich aus, damit der Fahrer den Airbag-Fehler bemerkt und die Werkstatt aufsucht"
  ],
  "correct": 0,
  "explain": "Alle drei Funktionen müssen vom feststehenden Kabelbaum in das drehbare Lenkrad. Diese Verbindung stellt die Wickelfeder (Flachbandkabel) her. Fallen alle drei nach Arbeiten am Lenkrad gleichzeitig aus, ist sie die wahrscheinlichste gemeinsame Ursache. Das Airbag-Steuergerät schaltet Hupe und Tasten nicht ab, und eine fehlende Codierung wird nicht als Zündkreiswiderstand gemeldet.",
  "src": "FW"
 },
 {
  "id": "036fed5fa809",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 6,
  "situation": "airbag-wickelfeder",
  "nr": 2,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Verschaffen Sie sich einen Überblick über den Schaltplan-Auszug. Ordnen Sie den Nummern im Bild die Bauteile zu.",
  "paare": [
   [
    "①",
    "Wickelfeder (Kontakteinheit)"
   ],
   [
    "②",
    "Steckverbindung unter dem Sitz"
   ],
   [
    "③",
    "Sicherung des Steuergeräts"
   ],
   [
    "④",
    "Airbag-Kontrollleuchte"
   ],
   [
    "⑤",
    "Upfront-Sensor"
   ],
   [
    "⑥",
    "Seitenaufprallsensor"
   ]
  ],
  "ablenker": [
   "Hupenrelais",
   "Energiereserve (Kondensator)"
  ],
  "explain": "Die Wickelfeder ① liegt zwischen den Trennstellen A und B im Zündkreis des Fahrerairbags. Die Steckverbindung ② wird beim Sitzausbau getrennt. Die Sicherung ③ (F12) schützt die Versorgung über Klemme 15, die Kontrollleuchte ④ (H1) schaltet das Steuergerät über Pin 13. Die Satelliten ⑤ (vorn) und ⑥ (Tür) melden die Verzögerung.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "1447a88f7cbd",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 3,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "An welchen Pins des Airbag-Steuergeräts A1 liegen laut Schaltplan die beiden Zündkreise, die im Fehlerspeicher stehen?",
  "opts": [
   "Pin 1/2 (Stufe 1) und Pin 5/6 (Stufe 2)",
   "Pin 3/4 (Stufe 1) und Pin 9/10 (Stufe 2)",
   "Pin 1/2 (Stufe 1) und Pin 3/4 (Stufe 2)",
   "Pin 11/12 (Stufe 1) und Pin 13/14 (Stufe 2)"
  ],
  "correct": 2,
  "explain": "Beide Stufen des Fahrerairbags laufen über die Wickelfeder ①: Stufe 1 an Pin 1 und 2, Stufe 2 an Pin 3 und 4. Pin 5/6 ist der Beifahrerairbag, Pin 9/10 der Seitenairbag, Pin 11/12 die Versorgung (Klemme 15 und Masse).",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "baa2796614a8",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 4,
  "q": "Warum hat der Fahrerairbag dieses Fahrzeugs zwei getrennte Zündkreise?",
  "opts": [
   "Ein Zündkreis zündet den Airbag, der zweite dient als Reserve, falls die erste Zündpille beim Unfall versagt",
   "Ein Zündkreis gehört zum Fahrerairbag, der zweite zum Knieairbag unter der Lenksäulenverkleidung",
   "Ein Zündkreis zündet den Airbag, über den zweiten misst das Steuergerät den Gasdruck im Luftsack",
   "Der Gasgenerator hat zwei Ladungen; je nach Unfallschwere zündet nur Stufe 1 oder zeitversetzt auch Stufe 2"
  ],
  "correct": 3,
  "explain": "Der zweistufige Gasgenerator hat zwei getrennt zündbare Treibladungen mit je einer Zündpille. Bei leichterem Aufprall zündet nur Stufe 1 (weichere Füllung), bei schwerem zusätzlich zeitversetzt Stufe 2. Eine Reserve-Zündpille gibt es nicht, und ein Knieairbag wäre ein eigenes Bauteil mit eigenem Zündkreis.",
  "src": "Netz: Patent US 6199903, FW"
 },
 {
  "id": "9a8235955ef6",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "airbag-wickelfeder",
  "nr": 5,
  "q": "Sie wollen den Fehler mit einem Prüfadapter (Ersatzwiderstand) eingrenzen. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
  "schritte": [
   "Fehlerspeicher auslesen und Messwerte der Zündkreise notieren",
   "Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
   "Fahrerairbag ausbauen, Stecker an Trennstelle A trennen, Airbag mit der Polsterseite nach oben ablegen",
   "Prüfadapter an Trennstelle A anstelle des Fahrerairbags anschließen",
   "Batterie anklemmen (niemand im Fahrzeug), Zündung einschalten",
   "Fehlerspeicher löschen, erneut auslesen und das Ergebnis bewerten"
  ],
  "explain": "Erst den Ist-Zustand sichern, dann das System stromlos machen und die Energiereserve entladen lassen. Der Prüfadapter ersetzt die Zündpille, so kann gefahrlos weiter geprüft werden. Erst wenn er angeschlossen ist, kommt wieder Spannung aufs System; das erneute Auslesen zeigt, ob der Fehler bleibt.",
  "src": "Netz: Recherche ausbau-airbag, FW"
 },
 {
  "id": "db66ed225796",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-wickelfeder",
  "nr": 6,
  "q": "Messwertblock im Diagnosetester: Fahrer Stufe 1 über 10 Ω (Messbereich überschritten), Fahrer Stufe 2 über 10 Ω, Beifahrer 2,3 Ω, Gurtstraffer Fahrer 2,1 Ω, Seitenairbag Fahrer 2,4 Ω – die letzten drei liegen im Sollbereich laut Herstellerangabe. Wie beurteilen Sie die Werte?",
  "opts": [
   "Beide Fahrer-Zündkreise haben einen Kurzschluss; die übrigen sind in Ordnung – der Fehler liegt im gemeinsamen Weg zum Fahrerairbag",
   "Beide Fahrer-Zündkreise sind unterbrochen; die übrigen sind in Ordnung – der Fehler liegt im gemeinsamen Weg zum Fahrerairbag",
   "Beide Fahrer-Zündkreise sind unterbrochen; weil auch die anderen Werte leicht schwanken, ist das Steuergerät defekt",
   "Die Fahrer-Zündkreise sind in Ordnung, weil das Steuergerät bei zweistufigen Airbags immer so hohe Werte anzeigt"
  ],
  "correct": 1,
  "explain": "Ein Widerstand über dem Messbereich bedeutet Unterbrechung oder sehr hohen Übergangswiderstand. Da beide Stufen gleichzeitig betroffen sind und die übrigen Zündkreise stimmen, liegt der Fehler auf der Strecke, die beide gemeinsam haben: Stecker, Wickelfeder, Leitung oder Airbag-Einheit. Ein Kurzschluss würde einen zu niedrigen Widerstand ergeben.",
  "src": "FW (Messwerte als Beispiel)"
 },
 {
  "id": "231c85183783",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-wickelfeder",
  "nr": 7,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Mit dem Prüfadapter an Trennstelle A (anstelle des Fahrerairbags) meldet der Tester für beide Stufen weiterhin „Widerstand zu hoch“. Welche Schlussfolgerung ist richtig?",
  "opts": [
   "Der Fahrerairbag ist defekt, weil der Fehler mit dem Prüfadapter unverändert bleibt; er muss ersetzt werden",
   "Der Prüfadapter ist sicher falsch angeschlossen, weil ein Ersatzwiderstand jeden Zündkreisfehler verschwinden lässt",
   "Nicht der Fahrerairbag; der Fehler liegt zwischen A und Steuergerät (Wickelfeder, Stecker B, Leitung, Steuergerät)",
   "Der Fehler liegt im Seitenairbag-Zündkreis, weil das Steuergerät die Fehler der Zündkreise vertauscht anzeigt"
  ],
  "correct": 2,
  "explain": "Der Prüfadapter ersetzt die Zündpille durch einen passenden Widerstand. Bleibt der Fehler, ist der Airbag selbst nicht schuld – die Unterbrechung liegt davor, also zwischen Trennstelle A und Steuergerät. Wäre der Fehler mit Adapter verschwunden, läge er in der Airbag-Einheit oder ihrem Stecker.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "3d85aea6babb",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-wickelfeder",
  "nr": 8,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Nun schließen Sie den Prüfadapter an Trennstelle B an (unterhalb der Wickelfeder, Lenksäulenseite). Der Tester zeigt für beide Stufen 2,3 Ω im Sollbereich. Wo liegt der Fehler?",
  "opts": [
   "Im Steuergerät A1, denn mit dem Adapter an B misst es nur noch seinen eigenen internen Prüfwiderstand",
   "In der Leitung von B zum Steuergerät, denn auf diesem Abschnitt laufen beide Stufen gemeinsam",
   "In der Airbag-Einheit, denn der Fehler verschwindet erst, wenn der Adapter weiter unten an B steckt",
   "In der Wickelfeder ① samt ihren Anschlüssen, denn ab Trennstelle B zum Steuergerät ist alles in Ordnung"
  ],
  "correct": 3,
  "explain": "Adapter an A: Fehler bleibt → Fehler zwischen A und Steuergerät. Adapter an B: Werte in Ordnung → Leitung B–Steuergerät und Steuergerät sind in Ordnung. Übrig bleibt der Abschnitt zwischen B und A, also die Wickelfeder. Dieses schrittweise Eingrenzen mit dem Ersatzwiderstand ersetzt das verbotene Messen an der Zündpille.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "9e0bf9853d96",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-wickelfeder",
  "nr": 9,
  "q": "Die ausgebaute Wickelfeder soll zusätzlich mit dem Ohmmeter auf Durchgang geprüft werden. Wann ist das zulässig?",
  "opts": [
   "Nur bei eingestecktem Fahrerairbag, weil sonst die offene Kurzschlussbrücke jede Messung verfälscht",
   "Ausgebaut und ohne angeschlossenen Airbag bzw. Steuergerät – sie enthält selbst keine Pyrotechnik",
   "Nie, weil die Wickelfeder selbst eine kleine Treibladung enthält und beim Messen auslösen kann",
   "Nur bei eingeschalteter Zündung, damit das Steuergerät den Prüfstrom des Ohmmeters überwacht"
  ],
  "correct": 1,
  "explain": "Die Wickelfeder ist ein aufgewickeltes Flachbandkabel ohne Treibladung. Ausgebaut und ohne angeschlossene Zündpille dürfen die einzelnen Bahnen nach Herstellerangabe auf Durchgang geprüft werden. Gefährlich wäre die Messung nur, wenn der Prüfstrom durch eine angeschlossene Zündpille fließen könnte.",
  "src": "FW"
 },
 {
  "id": "e62af851b52d",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 10,
  "q": "Bei der Sichtprüfung ist das Flachbandkabel in der Wickelfeder abgerissen. Was ist die wahrscheinlichste Ursache?",
  "opts": [
   "Der Prüfstrom beim Selbsttest hat das Flachbandkabel überlastet, weil das neue Lenkrad mehr Strom zieht",
   "Die Wickelfeder wurde beim Tausch nicht in Mittelstellung eingebaut oder bei abgenommenem Lenkrad verdreht",
   "Das neue Lenkrad ist schwerer; das Flachbandkabel reißt durch die höhere Fliehkraft beim schnellen Lenken",
   "Die Batterie wurde beim Lenkradtausch nicht abgeklemmt, dadurch ist das Flachbandkabel durchgebrannt"
  ],
  "correct": 1,
  "explain": "Das Flachbandkabel reicht nur für eine bestimmte Zahl Lenkradumdrehungen nach links und rechts. Wird die Wickelfeder außermittig eingebaut oder bei abgenommenem Lenkrad verdreht, reicht die Länge zu einer Seite nicht, und das Band reißt beim vollen Lenkeinschlag. Der Prüfstrom des Steuergeräts ist viel zu klein, um das Kabel zu beschädigen.",
  "src": "Netz: kfz-dietrich (Wickelfeder nach Lenkradausbau), FW"
 },
 {
  "id": "7e9177548ecc",
  "cat": "Airbag",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "airbag-wickelfeder",
  "nr": 11,
  "q": "Ordnen Sie zu, über welchen Weg die Bauteile mit dem Kabelbaum des Fahrzeugs verbunden sind.",
  "paare": [
   [
    "Zündkreis Fahrerairbag Stufe 1",
    "über die Wickelfeder"
   ],
   [
    "Hupentaster im Lenkrad",
    "über die Wickelfeder"
   ],
   [
    "Multifunktionstasten im Lenkrad",
    "über die Wickelfeder"
   ],
   [
    "Zündkreis Seitenairbag in der Sitzlehne",
    "über die Steckverbindung unter dem Sitz"
   ],
   [
    "Zündkreis Beifahrerairbag",
    "fest über den Kabelbaum der Instrumententafel"
   ]
  ],
  "ablenker": [
   "über die Kurzschlussbrücke"
  ],
  "explain": "Alles, was im drehbaren Lenkrad sitzt, braucht die Wickelfeder als Verbindung – deshalb fallen bei einem Riss Airbag, Hupe und Tasten gemeinsam aus. Der Seitenairbag im Sitz hat eine Trennstelle unter dem Sitz, der Beifahrerairbag sitzt fest in der Instrumententafel.",
  "src": "FW"
 },
 {
  "id": "6a30eeed8e52",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "airbag-wickelfeder",
  "nr": 12,
  "q": "Bringen Sie die Schritte für den Einbau der neuen Wickelfeder in die richtige Reihenfolge (das System ist stromlos, die Wartezeit ist abgelaufen).",
  "schritte": [
   "Prüfen, ob die Räder in Geradeausstellung stehen",
   "Neue Wickelfeder mit Transportsicherung (Mittelstellung) aufsetzen und befestigen",
   "Transportsicherung entfernen",
   "Lenkrad nach Markierung aufsetzen, neue Lenkradschraube mit Drehmoment nach Herstellerangabe anziehen",
   "Stecker des Fahrerairbags hörbar einrasten lassen und Airbag einbauen",
   "Batterie anklemmen, dabei hält sich niemand im Fahrzeug auf"
  ],
  "explain": "Die Transportsicherung hält die neue Wickelfeder in Mittelstellung und kommt erst ab, wenn sie befestigt ist. Das Lenkrad nach Markierung aufsetzen, damit es bei Geradeausfahrt gerade steht. Der Airbag wird als Letztes eingesteckt, erst danach kommt die Batterie wieder dran.",
  "src": "FW"
 },
 {
  "id": "886f2d567e55",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 13,
  "q": "In diesem Fahrzeug ist der Lenkwinkelsensor mit der Wickelfeder zu einer Baueinheit zusammengefasst. Was ist nach dem Tausch zusätzlich nötig?",
  "opts": [
   "Nichts – der Lenkwinkelsensor liefert nur dem Radio ein Signal und braucht keinen Abgleich",
   "Achsvermessung mit Einstellung der Spur, weil sich durch den Tausch die Spurstangen verstellt haben",
   "Neucodierung des Airbag-Steuergeräts, weil der Lenkwinkelsensor die Airbags im Lenkrad auslöst",
   "Grundeinstellung (Nullabgleich) des Lenkwinkelsensors mit dem Diagnosetester nach Herstellerangabe"
  ],
  "correct": 3,
  "explain": "Der Lenkwinkelsensor meldet dem ESP den Lenkwinkel. Nach dem Tausch kennt er die Geradeausstellung nicht; ohne Grundeinstellung mit dem Tester leuchtet die ESP-Leuchte, oder das ESP greift falsch ein. Die Spur ändert sich durch den Tausch der Wickelfeder nicht.",
  "src": "Netz: Recherche 3.6 (Lenkwinkelsensor anlernen), FW"
 },
 {
  "id": "b2e51265748e",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-wickelfeder",
  "nr": 14,
  "q": "Welche Antwort nennt vier passende Abschlussprüfungen nach dem Tausch der Wickelfeder?",
  "opts": [
   "Fehlerspeicher auslesen und löschen; Selbsttest der Kontrollleuchte; Zündkreis Fahrerairbag am Stecker mit dem Multimeter nachmessen; Probefahrt",
   "Fehlerspeicher auslesen und löschen; Hupe und Lenkradtasten prüfen; Airbag-Kontrollleuchte mit dem Tester dauerhaft ausschalten; Probefahrt",
   "Fehlerspeicher auslesen, aber nicht löschen, damit der Kunde den Fehler sieht; Hupe und Lenkradtasten prüfen; Selbsttest der Kontrollleuchte; Probefahrt",
   "Fehlerspeicher auslesen und löschen; Selbsttest der Kontrollleuchte; Hupe und Lenkradtasten prüfen; Probefahrt – Lenkrad steht bei Geradeausfahrt gerade"
  ],
  "correct": 3,
  "explain": "Erst wenn der Fehlerspeicher leer bleibt und die Kontrollleuchte nach dem Selbsttest erlischt, ist der Airbag wieder einsatzbereit. Hupe und Tasten zeigen, dass alle Bahnen der Wickelfeder leiten. Bei der Probefahrt muss das Lenkrad gerade stehen, sonst stimmt die Mittelstellung nicht. Mit dem Multimeter wird am Zündkreis nie gemessen.",
  "src": "FW"
 },
 {
  "id": "015c3e575287",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-wickelfeder",
  "nr": 15,
  "q": "Der Kunde fragt, ob die andere Werkstatt den Fahrerairbag überhaupt ausbauen durfte. Welche Voraussetzung gilt nach Sprengstoffrecht?",
  "opts": [
   "Mitarbeiter mit Lehrgang zur eingeschränkten Fachkunde; der Betrieb zeigt die Tätigkeit mindestens zwei Wochen vorher bei der Behörde an",
   "Mitarbeiter mit Lehrgang zur eingeschränkten Fachkunde; der Betrieb meldet jeden einzelnen Airbag-Ausbau spätestens am Folgetag der Behörde",
   "Keine besondere Voraussetzung, weil P1-Gegenstände frei verkäuflich sind und jeder sie ein- und ausbauen darf",
   "Eine Sprengberechtigung wie für Steinbrüche und eine jährliche Prüfung der Werkstatt durch den TÜV"
  ],
  "correct": 0,
  "explain": "Für den Umgang mit Airbag- und Gurtstraffereinheiten der Kategorie P1 genügt eine eingeschränkte Fachkunde (Lehrgang von etwa sechs Stunden). Der Arbeitgeber muss die Tätigkeit nach § 14 Sprengstoffgesetz schriftlich anzeigen – mindestens zwei Wochen bevor die Arbeiten beginnen. Eine Meldung jedes einzelnen Ausbaus ist nicht vorgesehen.",
  "src": "Netz: service.bremen.de (Anzeige § 14 SprengG)"
 },
 {
  "id": "397292c4b189",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-wickelfeder",
  "nr": 16,
  "q": "Wie wird die alte, defekte Wickelfeder entsorgt?",
  "opts": [
   "Wie eine Airbag-Einheit als pyrotechnischer Gegenstand, weil sie zum Airbag-System gehört",
   "Über den Hausmüll des Kunden, weil Kleinteile unter einem Kilogramm nicht getrennt entsorgt werden",
   "Über den Elektronikschrott der Werkstatt, denn sie enthält keine Treibladung",
   "Sie muss vor der Entsorgung mit dem Diagnosetester ausgelöst werden, damit sie ungefährlich ist"
  ],
  "correct": 2,
  "explain": "Die Wickelfeder ist ein Leitungsbauteil ohne Pyrotechnik. Sie wird wie andere elektrische Altteile über den Elektronikschrott bzw. das Altteile-Recycling der Werkstatt entsorgt. Nur Airbag- und Gurtstraffereinheiten und andere pyrotechnische Teile fallen unter das Sprengstoffrecht.",
  "src": "FW"
 },
 {
  "id": "38c13c094cbc",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-wickelfeder",
  "nr": 17,
  "q": "Bei der Übergabe erklären Sie dem Kunden das Ergebnis. Welche Erklärung ist fachlich richtig und kundengerecht?",
  "opts": [
   "Ihr Fahrerairbag war defekt und wurde ersetzt; dass Hupe und Tasten jetzt gehen, ist ein Zufall, der mit dem Airbag nichts zu tun hat",
   "Beim Lenkradtausch ist die Wickelfeder, die Kabelverbindung ins Lenkrad, gerissen; sie ist ersetzt, Airbag, Hupe und Tasten gehen wieder",
   "Das Airbag-Steuergerät hatte nach dem Lenkradtausch die Codierung verloren; es wurde neu codiert, eine Reparatur war nicht nötig",
   "Die Wickelfeder ist gerissen und wurde ersetzt; der Airbag ist jetzt aber für 24 Stunden gesperrt und darf erst morgen benutzt werden"
  ],
  "correct": 1,
  "explain": "Die Erklärung nennt Ursache (Wickelfeder beim Lenkradtausch gerissen), Maßnahme (ersetzt) und Ergebnis (alles funktioniert wieder) in einfachen Worten. Falsche Angaben wie eine Sperrzeit oder ein angeblicher Codierfehler verunsichern den Kunden. Über die andere Werkstatt äußert man sich sachlich und ohne Schuldzuweisung.",
  "src": "FW"
 },
 {
  "id": "32f745993740",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Für den Zündkreis an Pin 5 und 6 meldet das Steuergerät „Widerstand zu niedrig“. Welches Bauteil ist laut Schaltplan betroffen, und welche Fehlerart liegt vor?",
  "opts": [
   "Beifahrerairbag; eine Zündkreisleitung ist unterbrochen oder der Stecker hat Übergangswiderstand",
   "Beifahrerairbag; die beiden Zündkreisleitungen sind miteinander verbunden (Kurzschluss untereinander)",
   "Gurtstraffer Fahrer; die beiden Zündkreisleitungen sind miteinander verbunden (Kurzschluss untereinander)",
   "Seitenairbag; eine der Leitungen hat Verbindung zur Fahrzeugmasse, z. B. durch eine Scheuerstelle"
  ],
  "correct": 1,
  "explain": "Laut Plan gehören Pin 5 und 6 zum Beifahrerairbag. „Zu niedrig“ heißt: Der Prüfstrom findet einen Weg an der Zündpille vorbei, z. B. über gequetschte Leitungen oder eine Kurzschlussbrücke, die bei gestecktem Stecker nicht abhebt. Eine Unterbrechung würde als „zu hoch“, eine Verbindung zur Karosserie als „Kurzschluss nach Masse“ gemeldet.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "0b64693bbbea",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Nach dem Ausbau des Fahrersitzes meldet das Steuergerät einen Fehler im Zündkreis an Pin 9 und 10. Wo prüfen Sie laut Schaltplan zuerst?",
  "opts": [
   "An der Sicherung ③, weil sie den Seitenairbag-Zündkreis direkt mit Spannung versorgt",
   "An der Wickelfeder ①, weil alle Zündkreise des Fahrers über sie laufen",
   "An der Steckverbindung ② unter dem Sitz, die beim Sitzausbau getrennt wurde",
   "Am Seitenaufprallsensor ⑥, weil er im selben Zündkreis wie der Seitenairbag liegt"
  ],
  "correct": 2,
  "explain": "Pin 9/10 ist der Zündkreis des Seitenairbags, der über die Steckverbindung ② unter dem Sitz läuft. Sie wird beim Sitzausbau getrennt und danach oft nicht richtig verriegelt. Über die Wickelfeder laufen nur die Bauteile im Lenkrad, und der Sensor ⑥ hat eigene Pins (16/17).",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "5f88c87a1fb1",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Für den Zündkreis an Pin 7 und 8 meldet das Steuergerät „Kurzschluss nach Plus“. Was bedeutet das, und wie gehen Sie vor?",
  "opts": [
   "Die Zündpille des Gurtstraffers hat gezündet; den Gurtstraffer ohne weitere Prüfung ersetzen",
   "Eine Leitung des Gurtstraffer-Zündkreises hat Verbindung zur Karosserie; alle Masseverbindungen der B-Säule reinigen und nachziehen",
   "Eine Gurtstraffer-Leitung hat Verbindung zu einer Plus führenden Leitung; Leitungen bei abgesteckten Bauteilen prüfen",
   "Die Sicherung ③ liefert zu viel Spannung; die Sicherung gegen eine mit höherer Stromstärke tauschen"
  ],
  "correct": 2,
  "explain": "Pin 7/8 ist der Gurtstraffer. „Kurzschluss nach Plus“ heißt: An einer Zündkreisleitung liegt Fremdspannung, z. B. weil sie an einer Plusleitung durchgescheuert ist – gefährlich, weil so Strom durch die Zündpille fließen könnte. Gesucht wird nach Herstellerangabe bei abgesteckter Gurtstraffer-Einheit und abgestecktem Steuergerät. Eine Verbindung zur Karosserie würde als „Kurzschluss nach Masse“ gemeldet.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "f888a0309062",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "airbag-zuendkreise-schaltplan.svg",
  "q": "Ordnen Sie den Pins des Steuergeräts A1 im Schaltplan ihre Funktion zu.",
  "paare": [
   [
    "Pin 11",
    "Versorgung Klemme 15 über Sicherung F12"
   ],
   [
    "Pin 12",
    "Masse (Klemme 31)"
   ],
   [
    "Pin 13",
    "Ansteuerung der Kontrollleuchte H1"
   ],
   [
    "Pin 14/15",
    "Upfront-Sensor"
   ],
   [
    "Pin 18/19",
    "CAN-Bus (Datenleitung)"
   ]
  ],
  "ablenker": [
   "Zündkreis Fahrerairbag Stufe 2"
  ],
  "explain": "Pin 11 bekommt Klemme 15 (Zündung ein) über die Sicherung F12, Pin 12 liegt an Masse 31. Die Kontrollleuchte H1 hängt an Klemme 15 und wird vom Steuergerät über Pin 13 nach Masse geschaltet. Über CAN-H/CAN-L (Pin 18/19) tauscht das Steuergerät Daten aus, z. B. das Crashsignal und den Fehlerspeicher für den Tester.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "eb30814707f2",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "airbag-stecker-kurzschlussbruecke.svg",
  "q": "Ordnen Sie den Nummern im Bild der Airbag-Steckverbindung die Bauteile zu.",
  "paare": [
   [
    "①",
    "Zündpille im Gasgenerator"
   ],
   [
    "②",
    "Kontaktstift"
   ],
   [
    "③",
    "Kurzschlussbrücke"
   ],
   [
    "④",
    "Stecker der Leitungsseite mit Steg"
   ],
   [
    "⑤",
    "Verriegelung (Rastnase)"
   ],
   [
    "⑥",
    "Leitung zum Airbag-Steuergerät"
   ]
  ],
  "ablenker": [
   "Prüfadapter (Ersatzwiderstand)"
  ],
  "explain": "In Bild B liegt die Kurzschlussbrücke ③ an beiden Kontaktstiften ② an und schließt die Zündpille ① kurz. In Bild A drückt der Steg am Stecker ④ die Brücke weg, die Verriegelung ⑤ hält den Stecker fest, und über die Leitung ⑥ kann das Steuergerät die Zündpille prüfen und im Ernstfall bestromen.",
  "src": "Eigene Zeichnung"
 },
 {
  "id": "3e9092991fa4",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-stecker-kurzschlussbruecke.svg",
  "q": "In welchem Zustand im Bild ist die Zündpille kurzgeschlossen, und welchen Zweck hat das?",
  "opts": [
   "In A; so fließt der Prüfstrom des Steuergeräts an der Zündpille vorbei und kann sie nicht erwärmen",
   "In B; Fremdspannung oder statische Aufladung an den offenen Kontakten kann keinen Zündstrom erzeugen",
   "In B; das Steuergerät erkennt über die Brücke sofort, dass der Stecker abgezogen wurde",
   "In A und B; die Brücke liegt immer an und wird erst beim Auslösen durch den steigenden Gasdruck geöffnet"
  ],
  "correct": 1,
  "explain": "Bei abgezogenem Stecker (B) verbindet die Federbrücke ③ beide Kontaktstifte. Beide Anschlüsse der Zündpille liegen dann auf gleichem Potenzial – Fremdspannung oder ein Funke an den Kontakten treibt keinen Strom durch die Zündpille. Im gesteckten Zustand (A) hebt der Steg die Brücke ab, sonst könnte das Steuergerät weder prüfen noch zünden. Einen abgezogenen Stecker erkennt das Steuergerät an der Unterbrechung, nicht über die Brücke.",
  "src": "Eigene Zeichnung, Netz: Recherche 3.6"
 },
 {
  "id": "d3ec8016084b",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-stecker-kurzschlussbruecke.svg",
  "q": "Der Stecker ist eingesteckt, aber der Steg am Stecker ④ ist abgebrochen, sodass die Kurzschlussbrücke ③ an den Kontaktstiften anliegen bleibt. Was meldet das Steuergerät?",
  "opts": [
   "„Widerstand zu hoch“, weil die Brücke den Stromweg zur Zündpille unterbricht",
   "„Kurzschluss nach Masse“, weil die Brücke den Zündkreis mit dem Gasgenerator-Gehäuse verbindet",
   "Keinen Fehler, weil die Zündpille trotz anliegender Brücke im Sollbereich gemessen wird",
   "„Widerstand zu niedrig“, weil es nur noch die Brücke statt der Zündpille misst"
  ],
  "correct": 3,
  "explain": "Die Brücke liegt parallel zur Zündpille und hat fast keinen Widerstand. Der Prüfstrom fließt über die Brücke, das Steuergerät misst deutlich weniger als den Sollwert und meldet „zu niedrig“. Im Ernstfall würde auch der Zündstrom über die Brücke fließen – der Airbag würde nicht auslösen. Der Stecker ist nach Herstellerangabe instand zu setzen bzw. zu ersetzen.",
  "src": "Eigene Zeichnung, FW"
 },
 {
  "id": "9a95bc54e898",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "airbag-stecker-kurzschlussbruecke.svg",
  "q": "Warum muss die Verriegelung ⑤ nach dem Einstecken hörbar einrasten?",
  "opts": [
   "Damit die Kurzschlussbrücke dauerhaft an den Kontaktstiften anliegt",
   "Damit sich der Stecker durch Vibration oder Zug an der Leitung nicht löst",
   "Damit das Steuergerät nach dem Einrasten den Fehlerspeicher selbst löscht",
   "Damit die Zündpille über die Rastnase zusätzlich mit Masse verbunden ist"
  ],
  "correct": 1,
  "explain": "Nur ein verriegelter Stecker sitzt sicher. Löst er sich teilweise, steigt der Übergangswiderstand (Fehler „zu hoch“), oder die Brücke legt sich wieder an (Fehler „zu niedrig“). Beides schaltet die Kontrollleuchte ein und kann im Ernstfall die Auslösung verhindern. Viele Stecker haben zusätzlich eine zweite Sicherung (Sekundärverriegelung).",
  "src": "Eigene Zeichnung, FW"
 },
 {
  "id": "da184add4bfe",
  "cat": "Airbag",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 6,
  "bild": "airbag-crashablauf.svg",
  "q": "Das Diagramm zeigt den Ablauf eines Frontaufpralls ohne Zeitmaßstab. Ordnen Sie den Zeitpunkten ① bis ⑥ das Ereignis zu.",
  "paare": [
   [
    "①",
    "Aufprall beginnt, die Sensoren erfassen die Verzögerung"
   ],
   [
    "②",
    "Steuergerät entscheidet; Gurtstraffer und Airbag Stufe 1 werden gezündet"
   ],
   [
    "③",
    "Bei schwerem Aufprall zündet zeitversetzt Stufe 2"
   ],
   [
    "④",
    "Airbag ist voll aufgeblasen"
   ],
   [
    "⑤",
    "Insasse taucht ein, Gas strömt über Ausströmöffnungen ab"
   ],
   [
    "⑥",
    "Airbag ist weitgehend entleert"
   ]
  ],
  "ablenker": [
   "Kontrollleuchte führt den Selbsttest durch"
  ],
  "explain": "Bis ② steigt die Füllkurve nicht: Erst nach der Plausibilitätsprüfung wird gezündet. Der Airbag muss voll sein (④), bevor die Vorverlagerung des Insassen ihn erreicht (⑤). Danach fällt die Füllung, weil Gas abströmt – der Insasse wird weich abgefangen, und die Sicht wird wieder frei (⑥). Genaue Zeiten hängen vom Fahrzeug ab.",
  "src": "Eigenes Diagramm, Netz: Recherche ausbau-airbag (nur Reihenfolge)"
 },
 {
  "id": "fd610d268458",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-crashablauf.svg",
  "q": "Warum muss im Diagramm Zeitpunkt ④ vor Zeitpunkt ⑤ liegen?",
  "opts": [
   "Der Airbag muss voll sein, bevor der Insasse ankommt; sonst trifft ihn der noch aufgehende Airbag mit Wucht",
   "Der Insasse muss den Airbag erst berühren, damit der Gasgenerator über den Druck den zweiten Zündkreis freigibt",
   "Das Steuergerät braucht die Zeit zwischen ④ und ⑤, um die Crashdaten im Fehlerspeicher abzulegen",
   "Der Gurtstraffer darf erst zünden, wenn der Airbag voll ist, sonst reißt das Gurtband am Airbag ein"
  ],
  "correct": 0,
  "explain": "Ein Airbag, der sich noch entfaltet, wenn der Insasse ihn erreicht, schlägt mit hoher Geschwindigkeit gegen Kopf und Brust. Deshalb muss die Füllkurve ihr Maximum erreichen, bevor die Vorverlagerung des Insassen ihn trifft. Auch darum ist der richtige Sitzabstand zum Lenkrad wichtig.",
  "src": "Eigenes Diagramm, FW"
 },
 {
  "id": "12a83bd08861",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "airbag-crashablauf.svg",
  "q": "Zeitpunkt ③ tritt nicht bei jedem Aufprall auf. Wovon hängt es ab, ob dort etwas gezündet wird?",
  "opts": [
   "Von der Außentemperatur, weil der Gasgenerator bei Kälte grundsätzlich beide Stufen gleichzeitig braucht",
   "Von der Unfallschwere und – je nach System – vom Gurtstatus bzw. der Sitzposition; dann zündet Stufe 2",
   "Davon, ob die Kontrollleuchte beim letzten Selbsttest geleuchtet hat und ein Fehler gespeichert ist",
   "Davon, ob der Beifahrersitz belegt ist; ohne Beifahrer zündet beim Fahrerairbag immer nur Stufe 2"
  ],
  "correct": 1,
  "explain": "③ ist die zeitversetzte Zündung der zweiten Stufe eines zweistufigen Gasgenerators. Das Steuergerät entscheidet anhand der Unfallschwere und – je nach System – weiterer Informationen wie Gurtschloss-Status oder Sitzposition. Bei leichterem Aufprall bleibt Stufe 2 ungezündet; sie ist danach noch scharf und bei der Entsorgung zu beachten.",
  "src": "Eigenes Diagramm, Netz: Patent US 6199903"
 },
 {
  "id": "f19b8cbc7a73",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "airbag-crashablauf.svg",
  "q": "Nach Zeitpunkt ⑤ fällt die Füllkurve deutlich ab. Was ist der Grund?",
  "opts": [
   "Der Luftsack ist beim Eintauchen des Insassen geplatzt, weil der Gasdruck im Sack zu hoch war",
   "Das Steuergerät saugt das Gas über die Zündkreisleitungen zurück in den Gasgenerator",
   "Das Gas kühlt in kurzer Zeit ab und wird dabei flüssig, deshalb sinkt das Volumen",
   "Das Gas strömt gezielt über Ausströmöffnungen ab, damit der Insasse weich abgefangen wird"
  ],
  "correct": 3,
  "explain": "Der Airbag ist kein Luftkissen, das den Insassen zurückfedert, sondern ein Dämpfer: Über Ausströmöffnungen (teils auch durch das Gewebe) entweicht das Gas, während der Insasse eintaucht. So wird die Bewegungsenergie gleichmäßig abgebaut. Ein geplatzter Sack würde den Insassen nicht mehr abfangen.",
  "src": "Eigenes Diagramm, FW"
 },
 {
  "id": "084407e5e8be",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Aussage zur eingeschränkten Fachkunde für Airbag- und Gurtstraffereinheiten (Kategorie P1) ist richtig?",
  "opts": [
   "Sie berechtigt dazu, ausgebaute Einheiten in der Werkstatt zu zerlegen und die Treibladung getrennt zu entsorgen",
   "Ein Lehrgang von einigen Stunden berechtigt zum Ein- und Ausbau und zum Auslösen im eingebauten Zustand",
   "Sie gilt nur für Gurtstraffer; für Airbags ist zusätzlich eine Erlaubnis als Sprengmeister nötig",
   "Sie wird automatisch mit dem Gesellenbrief erworben und braucht deshalb keinen eigenen Nachweis"
  ],
  "correct": 1,
  "explain": "Die eingeschränkte Fachkunde erwirbt man in einem Lehrgang (rund sechs Stunden) mit Recht, Aufbau, Gefahren, Lagerung, Transport, Entsorgung und Praxisteil. Sie berechtigt zum Ein- und Ausbau von P1-Einheiten und zu ihrer Entsorgung durch Auslösen im eingebauten Zustand. Zerlegen ist verboten, und der Nachweis wird eigens geführt.",
  "src": "Netz: service.bremen.de (eingeschränkte Fachkunde)"
 },
 {
  "id": "5cda3d019eb9",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Wonach richtet sich, wie viele Airbag- und Gurtstraffereinheiten eine Werkstatt im Arbeitsraum bzw. im Lagerraum ohne Lagergenehmigung aufbewahren darf?",
  "opts": [
   "Nach der Stückzahl: höchstens ein Airbag je Mitarbeiter mit eingeschränkter Fachkunde im Betrieb",
   "Nach der Netto-Explosivstoffmasse (NEM) der Einheiten laut Sprengstofflager-Richtlinie",
   "Nach dem Gesamtgewicht der Einheiten einschließlich Verpackung und Lenkrad",
   "Nach der Zahl der Fahrzeuge, die gerade in der Werkstatt stehen"
  ],
  "correct": 1,
  "explain": "Maßgeblich ist die Netto-Explosivstoffmasse, also die Masse der Treibladungen – nicht Stückzahl oder Gesamtgewicht. Behörden nennen ohne Lagergenehmigung bis 10 kg NEM im Arbeitsraum (in einem geeigneten Schrank) und bis 100 kg NEM in einem Lagerraum. Einzelheiten regeln die Sprengstofflager-Richtlinie (LR 240) und die zuständige Behörde.",
  "src": "Netz: service.bremen.de, KomNet NRW"
 },
 {
  "id": "780878b053ba",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine nicht ausgelöste Airbag-Einheit soll als Gewährleistungsteil an den Hersteller zurückgehen. Wie wird sie versandt?",
  "opts": [
   "Lose im Karton mit anderen Altteilen, weil eine nicht ausgelöste Einheit ungefährlich ist",
   "In der Verpackung des Neuteils bzw. zugelassener Verpackung, gekennzeichnet als Gefahrgut",
   "Erst nach dem Auslösen in der Werkstatt, weil scharfe Einheiten nicht versandt werden dürfen",
   "Nur mit eingestecktem Prüfadapter, damit die Zündpille unterwegs kurzgeschlossen ist"
  ],
  "correct": 1,
  "explain": "Nicht ausgelöste Einheiten sind Gefahrgut. Man nutzt die Verpackung des Neuteils bzw. eine zugelassene Verpackung und sichert und kennzeichnet sie nach Gefahrgutrecht und Herstellervorgabe. Für die Gewährleistung muss das Teil unausgelöst und unbeschädigt ankommen; ein Prüfadapter gehört nicht an die Einheit.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "3f40e6b9d878",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was macht das eCall-System nach einem schweren Unfall?",
  "opts": [
   "Es sperrt den Motorstart, bis die Werkstatt den Crash-Eintrag im Airbag-Steuergerät gelöscht hat",
   "Es setzt automatisch einen Notruf an die 112 ab und übermittelt dabei unter anderem den Standort",
   "Es meldet den Unfall automatisch an die Versicherung und den Fahrzeughersteller, nicht an Retter",
   "Es löst die Airbags aus, wenn das Airbag-Steuergerät beim Aufprall keinen Strom mehr hat"
  ],
  "correct": 1,
  "explain": "eCall wählt bei einem schweren Unfall (erkannt z. B. über die Airbag-Auslösung) automatisch die 112, sendet einen Datensatz mit Standort, Fahrtrichtung und Zeitpunkt und baut eine Sprechverbindung auf. Man kann den Notruf auch per Taste auslösen. Mit dem Zünden der Airbags hat eCall nichts zu tun.",
  "src": "Netz: VO (EU) 2015/758, ptolemus"
 },
 {
  "id": "280c7381176a",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Für welche Fahrzeuge ist eCall in der EU vorgeschrieben?",
  "opts": [
   "Für alle zugelassenen Pkw; ältere Fahrzeuge mussten bis 2020 nachgerüstet werden",
   "Nur für Fahrzeuge mit mehr als sechs Airbags, unabhängig vom Baujahr",
   "Nur für Elektro- und Hybridfahrzeuge wegen der Hochvolt-Gefahr für Retter",
   "Für Pkw und leichte Nutzfahrzeuge mit neuer Typgenehmigung ab dem 31.03.2018"
  ],
  "correct": 3,
  "explain": "Seit dem 31. März 2018 brauchen neu typgenehmigte Pkw (M1) und leichte Nutzfahrzeuge (N1) eCall (Verordnung (EU) 2015/758). Fahrzeugtypen, die vorher genehmigt wurden, müssen nicht nachgerüstet werden.",
  "src": "Netz: VO (EU) 2015/758, eurotransport"
 },
 {
  "id": "80cfaec869f3",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach einer Notbremsung ohne Unfall berichtet ein Kunde, der Gurt habe sich kurz stark gestrafft und danach wieder gelockert. Was ist zu tun?",
  "opts": [
   "Gurtstraffer ersetzen, weil sich die Treibladung bei der Notbremsung verbraucht hat",
   "Airbag-Steuergerät ersetzen, weil es einen Crash gespeichert hat und gesperrt ist",
   "Nichts, sofern kein Fehler gespeichert ist – ein reversibler Gurtstraffer hat gewirkt",
   "Gurt und Gurtschloss ersetzen, weil der Gurtkraftbegrenzer das Gurtband gedehnt hat"
  ],
  "correct": 2,
  "explain": "Reversible Gurtstraffer ziehen den Gurt mit einem Elektromotor straff, wenn das System eine kritische Fahrsituation erkennt (Notbremsung, Schleudern). Kommt es nicht zum Unfall, geben sie das Gurtband wieder frei und sind sofort wieder einsatzbereit. Der pyrotechnische Straffer hat nicht gezündet.",
  "src": "Netz: Euro NCAP PRE-SAFE, Polestar-Handbuch"
 },
 {
  "id": "48ae3a17ebe0",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach dem Wechsel des Beifahrersitzbezugs leuchtet die Anzeige „Beifahrerairbag aus“, obwohl ein Erwachsener auf dem Sitz sitzt. Wie gehen Sie vor?",
  "opts": [
   "Fehlerspeicher auslesen; Sensormatte und Stecker der Sitzbelegungserkennung prüfen; ggf. nach Herstellerangabe abgleichen",
   "Beifahrerairbag-Stecker bei eingeschalteter Zündung abziehen und wieder aufstecken, damit das Steuergerät ihn neu erkennt",
   "Nichts tun, die Anzeige zeigt nur, dass der Beifahrerairbag funktionsbereit ist; Kunden darüber informieren",
   "Fehlerspeicher auslesen; Beifahrerairbag ersetzen, weil er beim Bezugwechsel einen Schlag abbekommen hat"
  ],
  "correct": 0,
  "explain": "Die Sitzbelegungserkennung (meist eine Sensormatte unter dem Bezug) meldet, ob und wie der Sitz belegt ist. Wurde sie beim Bezugwechsel geknickt, verschoben oder nicht angesteckt, erkennt das System keinen Erwachsenen und schaltet den Beifahrerairbag ab. Manche Systeme müssen nach Arbeiten am Sitz mit dem Tester abgeglichen werden. Airbag-Stecker nie bei eingeschalteter Zündung trennen.",
  "src": "Netz: kfz-dietrich (Sitzbelegungsmatte), FW"
 },
 {
  "id": "125f810b1bf2",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach einem Unfall mit ausgelösten Airbags meldet das Steuergerät einen gespeicherten Crash. Wie ist damit umzugehen?",
  "opts": [
   "Den Eintrag einfach mit dem Diagnosetester löschen, danach ist das Steuergerät wieder voll einsatzbereit",
   "Die Batterie für mindestens eine Stunde abklemmen, dann löscht sich der Crash-Eintrag selbst",
   "Crashdaten sind dauerhaft gespeichert; das Steuergerät nach Herstellerangabe ersetzen und codieren",
   "Das Steuergerät weiterverwenden und nur die Kontrollleuchte im Kombiinstrument abklemmen"
  ],
  "correct": 2,
  "explain": "Nach einer Auslösung speichert das Steuergerät die Crashdaten so, dass sie sich mit dem Tester nicht löschen lassen. Es ist nach Herstellerangabe zu ersetzen und das neue Gerät zu codieren. Eine abgeklemmte Kontrollleuchte wäre eine gefährliche Manipulation und ein Mangel bei der Hauptuntersuchung.",
  "src": "Netz: kfz-dietrich (Crashdaten), FW"
 },
 {
  "id": "818ffe91da5e",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach einem leichten Parkrempler vorn ohne Auslösung leuchtet die Airbag-Leuchte. Fehlerspeicher: „Upfront-Sensor links – Signal unplausibel“. Was ist zu tun?",
  "opts": [
   "Fehler löschen; ein Satellitensensor kann nur durch Feuchtigkeit ausfallen, nie durch einen Aufprall",
   "Alle Frontairbags vorsorglich ersetzen, weil ein Teil der Treibladung gezündet haben kann",
   "Sensor, Halter und Leitung vorn prüfen; beschädigte Teile ersetzen, ggf. anlernen, Fehler löschen",
   "Airbag-Steuergerät ersetzen, weil der Upfront-Sensor im Steuergerät eingebaut ist"
  ],
  "correct": 2,
  "explain": "Upfront-Sensoren sitzen ganz vorn im Knautschbereich und können schon bei leichten Remplern verschoben oder beschädigt werden; ein verbogener Halter verfälscht das Signal. Sensor, Halter und Leitung prüfen, Defektes ersetzen, nach Herstellerangabe anlernen und den Fehlerspeicher kontrollieren. Die Airbags haben nicht gezündet.",
  "src": "Netz: kfz-dietrich (Crashsensor nach Rempler), FW"
 },
 {
  "id": "22ad510eba6c",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Airbag-Kontrollleuchte eines Kundenfahrzeugs leuchtet dauernd. Was bedeutet das für die Hauptuntersuchung?",
  "opts": [
   "Nichts, die HU prüft nur Bremsen, Licht, Lenkung, Fahrwerk und Abgase, nicht die Airbags",
   "Es ist nur ein Hinweis, weil die Airbags trotz Fehler sicher auslösen",
   "Es ist ein Mangel, weil die Funktion des Rückhaltesystems nicht sichergestellt ist",
   "Es ist erst ein Mangel, wenn zusätzlich auch die Gurtwarnung im Kombiinstrument ausgefallen ist"
  ],
  "correct": 2,
  "explain": "Eine dauernd leuchtende Airbag-Leuchte zeigt einen erkannten Fehler – Teile des Rückhaltesystems können ausfallen. Bei der HU wird die Kontrollleuchte geprüft; leuchtet sie dauernd oder beim Selbsttest gar nicht, ist das ein Mangel.",
  "src": "Netz: kfz-dietrich (HU-Mangel)"
 },
 {
  "id": "ff20fc086a4e",
  "cat": "Airbag",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Sensoren und Schaltern des Rückhaltesystems ihre Messgröße bzw. Aufgabe zu.",
  "paare": [
   [
    "Beschleunigungssensor im Steuergerät",
    "Eigene Verzögerungsmessung zur Plausibilitätsprüfung"
   ],
   [
    "Upfront-Sensor",
    "Frühe Erkennung eines Frontaufpralls im Knautschbereich"
   ],
   [
    "Drucksensor in der Tür",
    "Schneller Druckanstieg im Türhohlraum beim Seitenaufprall"
   ],
   [
    "Sitzbelegungsmatte",
    "Belegung des Beifahrersitzes"
   ],
   [
    "Gurtschlossschalter",
    "Gurt angelegt oder nicht"
   ]
  ],
  "ablenker": [
   "Abstand zum vorausfahrenden Fahrzeug"
  ],
  "explain": "Das Steuergerät löst nur aus, wenn sein eigener Sensor die Meldung eines Satelliten bestätigt. Upfront- und Türdrucksensoren melden den Aufprall früh vom Ort des Geschehens. Sitzbelegung und Gurtstatus beeinflussen, ob und mit welcher Stufe gezündet wird. Den Abstand misst das Radar der Fahrerassistenz, nicht das Airbag-System.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "9cbd711e3ae1",
  "cat": "Airbag",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Im Schaltplan stehen Kennbuchstaben vor den Bauteilnummern (z. B. A1, F12, H1). Ordnen Sie die Kennbuchstaben zu.",
  "paare": [
   [
    "A",
    "Steuergerät"
   ],
   [
    "B",
    "Sensor"
   ],
   [
    "F",
    "Sicherung"
   ],
   [
    "H",
    "Leuchte"
   ],
   [
    "X",
    "Steckverbindung"
   ]
  ],
  "ablenker": [
   "Motor"
  ],
  "explain": "Kennbuchstaben nach Norm: A Baugruppe bzw. Steuergerät, B Sensor (Messwandler), F Schutzeinrichtung bzw. Sicherung, H Meldeeinrichtung bzw. Leuchte, X Steckverbindung oder Klemme. M steht für Motor. Im Airbag-Schaltplan sind das z. B. A1 (Steuergerät), F12 (Sicherung) und H1 (Kontrollleuchte).",
  "src": "FW (Bauteilkennzeichnung)"
 },
 {
  "id": "447aead4f602",
  "cat": "Airbag",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Sie grenzen einen Zündkreisfehler mit dem Prüfadapter (Ersatzwiderstand) am Bauteilstecker ein. Ordnen Sie dem Befund die richtige Schlussfolgerung zu.",
  "paare": [
   [
    "Fehler verschwindet mit Prüfadapter",
    "Ursache in der Airbag-Einheit bzw. ihrem Stecker"
   ],
   [
    "Fehler bleibt mit Prüfadapter",
    "Ursache in Leitung, Zwischenstecker oder Steuergerät"
   ],
   [
    "Fehler tritt nur beim Lenken auf",
    "Wickelfeder prüfen"
   ],
   [
    "Fehler tritt nur beim Verstellen des Sitzes auf",
    "Leitung und Stecker unter dem Sitz prüfen"
   ]
  ],
  "ablenker": [
   "Batterie laden und Fehler ignorieren"
  ],
  "explain": "Der Prüfadapter ersetzt die Zündpille durch einen passenden Widerstand. Ändert sich das Ergebnis, lag es am ersetzten Teil; bleibt es, liegt der Fehler davor. Fehler, die nur bei Bewegung auftreten, deuten auf bewegte Leitungen hin – im Lenkrad die Wickelfeder, am Sitz die Leitung zum Sitzstecker.",
  "src": "FW"
 },
 {
  "id": "a1e6844e3244",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "q": "Nach einem Frontaufprall mit ausgelösten Frontairbags und Gurtstraffern soll das Rückhaltesystem instand gesetzt werden. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
  "schritte": [
   "Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
   "Ausgelöste Airbag-Einheiten, Gurtstraffer und Steuergerät nach Herstellerangabe ausbauen",
   "Neue Teile einbauen, alle Stecker einrasten und verriegeln",
   "Batterie anklemmen, dabei hält sich niemand im Fahrzeug auf",
   "Neues Steuergerät mit dem Diagnosetester codieren",
   "Fehlerspeicher auslesen und löschen, Selbsttest der Kontrollleuchte prüfen"
  ],
  "explain": "Auch beim Ausbau ausgelöster Teile wird erst stromlos gemacht und gewartet – nicht gezündete Stufen oder andere Einheiten können noch scharf sein. Codieren geht nur mit Spannung, also nach dem Anklemmen. Zum Schluss zeigen Fehlerspeicher und Selbsttest, dass das System alle Teile erkennt.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "721103f9b1c9",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine Kurzschlussbrücke mit 0,05 Ω liegt fälschlich parallel zu einer Zündpille mit 2,0 Ω. Welchen Gesamtwiderstand misst das Steuergerät?",
  "opts": [
   "2,050 Ω",
   "1,025 Ω",
   "0,049 Ω",
   "0,100 Ω"
  ],
  "correct": 2,
  "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (2,0 Ω × 0,05 Ω) ÷ 2,05 Ω ≈ 0,049 Ω. Der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand – das Steuergerät meldet „Widerstand zu niedrig“. 2,050 Ω wäre die Reihenschaltung, 1,025 Ω der Mittelwert und 0,100 Ω nur das Produkt ohne Division.",
  "src": "FW"
 },
 {
  "id": "928af021aa15",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Manche Fahrzeuge haben einen Center-Airbag zwischen den Vordersitzen. Wovor schützt er?",
  "opts": [
   "Dass die Knie beim Frontaufprall gegen die Mittelkonsole und den Wählhebel schlagen",
   "Dass Gegenstände aus der Mittelkonsole bei einem Frontaufprall nach vorn fliegen",
   "Dass die Fondpassagiere beim Frontaufprall gegen die Vordersitzlehnen prallen",
   "Dass Fahrer und Beifahrer beim Seitenaufprall seitlich gegeneinander prallen"
  ],
  "correct": 3,
  "explain": "Der Center-Airbag entfaltet sich zwischen den Vordersitzen. Er hält bei einem Seitenaufprall – besonders von der anderen Fahrzeugseite – den Insassen auf seinem Platz und verhindert, dass Fahrer und Beifahrer zusammenstoßen. Wie alle Airbags ist er ein pyrotechnischer Gegenstand der Kategorie P1.",
  "src": "FW"
 },
 {
  "id": "0755ceed3575",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum werden Airbags auch als „Zusatz-Rückhaltesystem“ (SRS) bezeichnet?",
  "opts": [
   "Weil sie den Sicherheitsgurt ersetzen, wenn der Insasse nicht angeschnallt ist",
   "Weil sie nur zusammen mit dem angelegten Gurt richtig schützen und ihn ergänzen",
   "Weil sie zusätzlich zur Knautschzone eingebaut werden müssen, wenn diese zu kurz ist",
   "Weil sie nach einem Unfall zusätzlich die Türen entriegeln und den Notruf absetzen"
  ],
  "correct": 1,
  "explain": "Der Gurt hält den Insassen in Position, der Airbag fängt Kopf und Oberkörper zusätzlich ab. Ohne Gurt fliegt der Insasse zu früh und zu schnell in den sich noch entfaltenden Airbag – das kann schwere Verletzungen verursachen. Deshalb heißt er Zusatz-Rückhaltesystem.",
  "src": "FW"
 },
 {
  "id": "ab6c7e879a19",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Bei einer Unfallinstandsetzung soll an der B-Säule geschweißt werden. Welche Antwort nennt richtige Schutzmaßnahmen für das Airbag-System?",
  "opts": [
   "Batterie angeklemmt lassen, damit das Steuergerät den Zündkreis überwacht; Masseklemme nah an der Schweißstelle; Airbag-Einheiten mit nassem Tuch abdecken",
   "Batterie abklemmen; Masseklemme am Airbag-Steuergerät anbringen, weil es gut geerdet ist; Airbag- und Gurtstraffereinheiten in der Nähe ausbauen",
   "Batterie abklemmen; Steuergeräte nach Herstellerangabe abstecken; Masseklemme nah an der Schweißstelle; Airbag- und Gurtstraffereinheiten in der Nähe ausbauen",
   "Batterie abklemmen; Steuergeräte nach Herstellerangabe abstecken; Masseklemme nah an der Schweißstelle; Gurtstraffer in der B-Säule mit Fett gegen Funken schützen"
  ],
  "correct": 2,
  "explain": "Schweißströme und Hitze können Zündpillen auslösen und Steuergeräte zerstören. Deshalb Batterie ab, Steuergeräte nach Herstellerangabe trennen, die Masseklemme nah an der Schweißstelle setzen (kurzer Stromweg) und pyrotechnische Teile in der Nähe – hier Gurtstraffer, Seiten- und Kopfairbag – vorher ausbauen. Fett und nasse Tücher schützen nicht; eine Masseklemme am Steuergerät würde den Schweißstrom gerade durch die Elektronik leiten.",
  "src": "Netz: Recherche 3.4 (Hitze, Schweißen), FW"
 },
 {
  "id": "6d988432edd5",
  "cat": "Bremse",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 7,
  "situation": "epb-golf",
  "nr": 1,
  "bild": "esp-system.svg",
  "q": "Das Bild zeigt die Bauteile von ESP und elektrischer Parkbremse im Fahrzeug. Ordnen Sie den Nummern die Bauteile zu.",
  "paare": [
   [
    "①",
    "Raddrehzahlsensor"
   ],
   [
    "②",
    "Hydroaggregat mit Steuergerät"
   ],
   [
    "③",
    "Lenkwinkelsensor"
   ],
   [
    "④",
    "Gierraten- und Querbeschleunigungssensor"
   ],
   [
    "⑤",
    "Bremsdrucksensor"
   ],
   [
    "⑥",
    "EPB-Stellmotor am Bremssattel"
   ],
   [
    "⑦",
    "EPB-Taster"
   ]
  ],
  "ablenker": [
   "Bremskraftverstärker",
   "Bremslichtschalter"
  ],
  "explain": "Die Raddrehzahlsensoren sitzen an allen vier Rädern, die EPB-Stellmotoren nur hinten. Der Bremsdrucksensor misst am Hauptbremszylinder, wie stark der Fahrer bremst. Gierrate und Querbeschleunigung werden möglichst nahe am Fahrzeugschwerpunkt gemessen.",
  "src": "FW, Format Prüfung Schule"
 },
 {
  "id": "9b1a4f1d4d21",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 2,
  "q": "Die elektrische Parkbremse kann mehr als nur das Fahrzeug im Stand festhalten. Welche Antwort nennt drei weitere Funktionen der EPB richtig?",
  "opts": [
   "Auto-Hold; Anfahrassistent, der die Parkbremse beim Anfahren löst; Bremskraftverteilung zwischen Vorder- und Hinterachse bei jeder Betriebsbremsung",
   "Anfahrassistent, der die Parkbremse beim Anfahren löst; Ersatz für den Bremskraftverstärker bei Unterdruckausfall; Auto-Hold",
   "Auto-Hold; Anfahrassistent, der die Parkbremse beim Anfahren selbsttätig löst; dynamische Notbremsung über das ESP an allen vier Rädern",
   "Dynamische Notbremsung über das ESP an allen vier Rädern; automatisches Nachstellen der Vorderradbremsen; Auto-Hold"
  ],
  "correct": 2,
  "explain": "Auto-Hold hält das Fahrzeug nach dem Anhalten, ohne dass der Fahrer auf dem Pedal bleibt. Der Anfahrassistent löst die Parkbremse beim Anfahren selbsttätig (auch am Berg). Dynamische Notbremsung: Wird der Taster während der Fahrt gezogen, bremst nicht der Stellmotor hinten allein, sondern das ESP-Hydroaggregat über alle Räder – so bleibt das Fahrzeug stabil. Die Stellmotoren sitzen nur hinten; die Bremskraftverteilung übernimmt das ESP.",
  "src": "Netz: kfz-dietrich.com, web.de (Recherche 3.6)"
 },
 {
  "id": "bf030fdc6363",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "epb-golf",
  "nr": 3,
  "q": "Warum muss vor dem Wechsel der hinteren Bremsbeläge der Servicemodus der EPB mit dem Tester aktiviert werden?",
  "opts": [
   "Der Kolben wird über Getriebe und Spindel gehalten – nur der Stellmotor kann ihn zurückfahren, Gewalt würde Spindel oder Getriebe beschädigen",
   "Im Servicemodus pumpt das ESP die Bremsflüssigkeit aus dem Sattel ab, damit beim Zurückdrücken des Kolbens nichts aus dem Ausgleichsbehälter überläuft",
   "Der Servicemodus schaltet nur die EPB-Kontrollleuchte und den Fehlereintrag ab, technisch wäre er für den Belagwechsel nicht nötig",
   "Ohne Servicemodus lassen sich Raddrehzahlsensor und Verschleißanzeige nicht abstecken, weil das Steuergerät sie unter Spannung hält"
  ],
  "correct": 0,
  "explain": "Beim Motor-on-Caliper-Sattel drückt eine Spindel auf den Kolben. Der Servicemodus dreht die Spindel ganz zurück. Erst dann lässt sich der Kolben für die dickeren neuen Beläge zurückdrücken.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "d8021867f1a2",
  "cat": "Bremse",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "epb-golf",
  "nr": 4,
  "q": "Bringen Sie die Arbeitsschritte für den Bremsbelagwechsel hinten am Fahrzeug mit EPB in die richtige Reihenfolge.",
  "schritte": [
   "Tester anschließen, Fehlerspeicher auslesen und Servicemodus der EPB aktivieren",
   "Fahrzeug anheben, Hinterrad abbauen, Bremssattel lösen und sicher ablegen (nicht am Bremsschlauch hängen lassen)",
   "Bremsscheibe prüfen, Beläge erneuern, Anlageflächen und Führungen reinigen",
   "Bremssattel montieren und Schrauben mit vorgeschriebenem Drehmoment anziehen",
   "Servicemodus beenden und Grundeinstellung der EPB durchführen",
   "Rad montieren, Fehlerspeicher erneut auslesen und Bremsprobe durchführen"
  ],
  "explain": "Der Servicemodus kommt vor dem ersten Handgriff am Sattel und wird erst nach der Montage beendet. Bei der Grundeinstellung fährt der Stellmotor die Spindel an die neuen Beläge heran und lernt die Position neu.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6), FW"
 },
 {
  "id": "2c4e2b81fa55",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 5,
  "q": "Vor dem Belagwechsel prüfen Sie die hinteren Bremsscheiben. Welche Antwort nennt vier geeignete Prüfungen bzw. Prüfmerkmale?",
  "opts": [
   "Scheibendicke an einer Stelle messen und mit der Neudicke vergleichen; Seitenschlag mit Messuhr; Dickenunterschied über den Umfang; Riefen, Risse, Rostrand",
   "Scheibendicke an mehreren Stellen messen und mit der Mindestdicke vergleichen; Unwucht auf der Radauswuchtmaschine; Dickenunterschied über den Umfang; Riefen, Risse, Rostrand",
   "Scheibendicke an mehreren Stellen messen und mit der Mindestdicke vergleichen; Seitenschlag von Hand nach Gehör; Dickenunterschied über den Umfang; Riefen, Risse, Rostrand",
   "Scheibendicke an mehreren Stellen messen und mit der Mindestdicke vergleichen; Seitenschlag mit Messuhr; Dickenunterschied über den Umfang; Riefen, Risse, Rostrand"
  ],
  "correct": 3,
  "explain": "Scheibendicke an mehreren Stellen mit der Bügelmessschraube messen und mit der Mindestdicke vergleichen, Seitenschlag mit der Messuhr prüfen, Dickentoleranz (Dickenunterschied über den Umfang) prüfen und die Oberfläche auf Riefen, Risse, Rostrand und Verfärbung sichtprüfen. Die Grenzwerte stehen in den Herstellerdaten (Werkstattinformation). Seitenschlag und Dickenunterschiede spürt der Fahrer als pulsierendes Bremspedal. Die Mindestdicke ist häufig zusätzlich auf der Scheibe eingeprägt.",
  "src": "FW"
 },
 {
  "id": "978ea4ddfe0b",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 6,
  "q": "Bremsflüssigkeit ist hygroskopisch. Welche Antwort erklärt den Begriff und die Folgen für die Bremsanlage richtig?",
  "opts": [
   "Sie nimmt Wasser aus der Luft auf; dadurch steigt der Siedepunkt; die Flüssigkeit wird zäh und das Pedal geht schwer",
   "Sie nimmt Wasser aus der Luft auf; dadurch sinkt der Siedepunkt; bei starker Erwärmung bilden sich Dampfblasen, das Pedal fällt durch",
   "Sie nimmt Luft aus der Umgebung auf; dadurch schäumt sie im Behälter; bei starker Erwärmung steigt der Bremsdruck dann unkontrolliert an",
   "Sie gibt Wasser an die Umgebung ab; dadurch dickt sie mit der Zeit ein; die Dichtungen quellen auf und die Kolben klemmen im Sattel"
  ],
  "correct": 1,
  "explain": "Hygroskopisch heißt: Die Flüssigkeit nimmt Wasser (Luftfeuchtigkeit) auf. Mit steigendem Wassergehalt sinkt der Siedepunkt. Bei starker Erwärmung bilden sich Dampfblasen – das Pedal fällt durch, die Bremswirkung kann ausfallen. Dampf lässt sich – anders als Flüssigkeit – zusammendrücken. Deshalb geht bei Dampfblasen der Pedalweg ins Leere. Darum wird die Flüssigkeit nach Herstellervorgabe regelmäßig gewechselt.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "aa73a3540f9a",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 7,
  "tb": true,
  "q": "Im Fahrzeug ist Bremsflüssigkeit DOT 4 eingefüllt. Wie hoch muss ihr Nass-Siedepunkt laut Tabellenbuch mindestens sein?",
  "opts": [
   "140 °C",
   "230 °C",
   "155 °C",
   "180 °C"
  ],
  "correct": 2,
  "explain": "Tabelle Bremsflüssigkeiten: DOT 4 – Siedepunkt mind. 230 °C, Nass-Siedepunkt mind. 155 °C. 140 °C ist der Nass-Siedepunkt von DOT 3, 180 °C der von DOT 5.1.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "4e08ca922e4a",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "epb-golf",
  "nr": 8,
  "q": "Das Prüfgerät zeigt bei der Bremsflüssigkeit 3,8 % Wasser an. Wie beurteilen Sie das Messergebnis?",
  "opts": [
   "Bremsflüssigkeit wechseln – der Wassergehalt liegt über ca. 3,5 %, der Siedepunkt ist unter den Nass-Siedepunkt gefallen",
   "In Ordnung – Bremsflüssigkeit muss erst ab ca. 10 % Wasser gewechselt werden, bis dahin bleibt der Siedepunkt hoch genug",
   "Es genügt, frische Flüssigkeit bis zur MAX-Marke nachzufüllen – dadurch sinkt der Wasseranteil wieder unter die Grenze",
   "Nur den Ausgleichsbehälter absaugen und neu füllen, die Flüssigkeit in Leitungen und Sätteln bleibt unverändert"
  ],
  "correct": 0,
  "explain": "Der Nass-Siedepunkt ist der Siedepunkt bei ca. 3,5 % Wasser. Mit 3,8 % liegt die Flüssigkeit darüber, die Siedetemperatur ist also schon unter diese Grenze gefallen → kompletter Wechsel.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "67b00e56a615",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 9,
  "q": "Beim Wechsel der Bremsflüssigkeit müssen Sie die Bremsanlage entlüften. Welche Antwort beschreibt die Besonderheiten bei einem Fahrzeug mit ESP richtig?",
  "opts": [
   "Mit Befüll- und Entlüftungsgerät unter vorgeschriebenem Druck arbeiten; Ventile in Herstellerreihenfolge öffnen; ist Luft im Hydroaggregat, Ventile und Rückförderpumpe mit dem Tester ansteuern",
   "Mit Befüll- und Entlüftungsgerät unter möglichst hohem Druck arbeiten, damit es schneller geht; alle Entlüfterventile gleichzeitig ganz öffnen; das Hydroaggregat muss dabei nicht beachtet werden",
   "Ausgleichsbehälter vorher ganz leer saugen; Ventile in Herstellerreihenfolge öffnen; Luft im Hydroaggregat entweicht bei der nächsten Fahrt von selbst",
   "Bremsleitungen am Hydroaggregat abschrauben und es separat mit Druckluft ausblasen; Ventile in Herstellerreihenfolge öffnen; Ausgleichsbehälter dabei ganz leer laufen lassen"
  ],
  "correct": 0,
  "explain": "Mit dem Befüll- und Entlüftungsgerät unter dem vorgeschriebenen Druck arbeiten und die Entlüfterventile in der Reihenfolge laut Hersteller öffnen. Ist Luft ins Hydroaggregat gelangt, Ventile und Rückförderpumpe mit dem Tester ansteuern (Entlüftungsroutine). Den Ausgleichsbehälter nie leer laufen lassen, damit keine Luft ins Hydroaggregat kommt. Im Hydroaggregat gibt es Kammern, die beim normalen Entlüften nicht durchströmt werden. Luft dort lässt sich nur mit der Tester-Routine herausspülen.",
  "src": "FW"
 },
 {
  "id": "3f4bb677c4be",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "epb-golf",
  "nr": 10,
  "q": "Ordnen Sie den ESP-Sensoren die Größe zu, die sie erfassen.",
  "paare": [
   [
    "Raddrehzahlsensor",
    "Drehzahl des einzelnen Rades"
   ],
   [
    "Lenkwinkelsensor",
    "Lenkradwinkel (Fahrerwunsch)"
   ],
   [
    "Gierratensensor",
    "Drehgeschwindigkeit um die Hochachse"
   ],
   [
    "Querbeschleunigungssensor",
    "Seitliche Beschleunigung in der Kurve"
   ],
   [
    "Bremsdrucksensor",
    "Druck im Hauptbremszylinder"
   ]
  ],
  "ablenker": [
   "Reifenfülldruck",
   "Motortemperatur"
  ],
  "explain": "Aus Lenkwinkel und Geschwindigkeit berechnet das Steuergerät, wie sich das Fahrzeug drehen soll. Gierrate und Querbeschleunigung zeigen, wie es sich tatsächlich bewegt.",
  "src": "FW"
 },
 {
  "id": "58c61c97230d",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 11,
  "q": "Welcher Vergleich zwischen aktivem und passivem Raddrehzahlsensor (Arbeitsprinzip, Versorgung, Signal) ist richtig?",
  "opts": [
   "Aktiv: induktiv, ohne Versorgung, sinusförmige Wechselspannung; passiv: Hall-Prinzip, mit Versorgungsspannung, Rechtecksignal bis fast zum Stillstand",
   "Aktiv: Hall-Prinzip, mit Versorgungsspannung, Rechtecksignal mit drehzahlabhängiger Amplitude; passiv: induktiv, ohne Versorgung, Sinus mit gleichbleibender Frequenz",
   "Aktiv: Hall-Prinzip, mit Versorgungsspannung, Rechtecksignal erst ab ca. 20 km/h auswertbar; passiv: induktiv, mit Versorgung vom Steuergerät, Sinussignal bis zum Stillstand",
   "Aktiv: Hall- oder MR-Prinzip, mit Versorgungsspannung, Rechtecksignal bis fast zum Stillstand; passiv: induktiv, ohne Versorgung, Sinus, Amplitude und Frequenz steigen"
  ],
  "correct": 3,
  "explain": "Aktiver Sensor: Hall- oder magnetoresistives Prinzip, braucht eine Versorgungsspannung vom Steuergerät, liefert ein Rechtecksignal und erkennt auch sehr kleine Drehzahlen bis fast zum Stillstand. Passiver Sensor: induktiv, braucht keine Versorgung, erzeugt eine sinusförmige Wechselspannung; Amplitude und Frequenz steigen mit der Drehzahl, bei sehr kleiner Drehzahl gibt es kein auswertbares Signal. Aktive Sensoren tasten meist einen Magnetring (Multipolring) im Radlager ab, passive ein Zahnrad aus Stahl.",
  "src": "FW"
 },
 {
  "id": "0b266a6d9967",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "epb-golf",
  "nr": 12,
  "q": "Im Golf sind aktive Raddrehzahlsensoren verbaut. Welches Signal zeigt das Oszilloskop bei steigender Fahrgeschwindigkeit?",
  "opts": [
   "Rechtecksignal mit gleichbleibenden Pegeln, die Frequenz steigt",
   "Sinussignal, Amplitude und Frequenz steigen",
   "Gleichspannung, die mit der Geschwindigkeit ansteigt",
   "Rechtecksignal, dessen Amplitude steigt, während die Frequenz gleich bleibt"
  ],
  "correct": 0,
  "explain": "Beim aktiven Sensor wechselt das Signal zwischen zwei festen Pegeln. Die Geschwindigkeit steckt nur in der Frequenz. Ein Sinus mit wachsender Amplitude ist typisch für den passiven, induktiven Sensor.",
  "src": "FW"
 },
 {
  "id": "e905aaa53719",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 13,
  "q": "Bei der Probefahrt bricht das Heck in einer Kurve aus (Übersteuern). Wie erkennt das ESP das, und wie greift es ein?",
  "opts": [
   "Ist-Gierrate kleiner als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurveninneres Hinterrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate größer als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurvenäußeres Vorderrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate größer als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurveninneres Vorderrad wird gebremst; Motormoment wird erhöht",
   "Hinterräder drehen schneller als die Vorderräder; beide Hinterräder werden gleich stark gebremst; Motormoment wird erhöht"
  ],
  "correct": 1,
  "explain": "Erkennung: Die Ist-Gierrate vom Sensor ist größer als die Soll-Gierrate, die das Steuergerät aus Lenkwinkel und Geschwindigkeit berechnet. Eingriff: Das kurvenäußere Vorderrad wird gezielt gebremst, dadurch entsteht ein Gegenmoment, das das Fahrzeug zurückdreht. Zusätzlich wird das Motormoment reduziert. Beim Untersteuern ist es umgekehrt: Das Fahrzeug dreht zu wenig, ESP bremst vor allem das kurveninnere Hinterrad.",
  "src": "FW"
 },
 {
  "id": "3d696870cfc0",
  "cat": "Bremse",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 14,
  "q": "Ordnen Sie den ABS-Regelphasen die Stellung von Einlass- und Auslassventil zu.",
  "paare": [
   [
    "Druck aufbauen",
    "Einlass offen, Auslass geschlossen"
   ],
   [
    "Druck halten",
    "Einlass geschlossen, Auslass geschlossen"
   ],
   [
    "Druck abbauen",
    "Einlass geschlossen, Auslass offen"
   ]
  ],
  "ablenker": [
   "Einlass offen, Auslass offen"
  ],
  "explain": "Das Einlassventil ist stromlos offen, das Auslassventil stromlos geschlossen. Ohne Ansteuerung bremst die Anlage also ganz normal.",
  "src": "FW"
 },
 {
  "id": "b7c8e0e6979f",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 15,
  "q": "Der Hauptbremszylinder hat 23 mm Kolbendurchmesser, der Kolben im Bremssattel 57 mm. Auf den Kolben des Hauptbremszylinders wirken 2500 N. Wie groß ist die Spannkraft am Sattelkolben?",
  "opts": [
   "6.196 N",
   "15.354 N",
   "407 N",
   "153.540 N"
  ],
  "correct": 1,
  "formel": "p = F_1 / A_1 = F_2 / A_2   (Druck überall gleich)\nF_2 = F_1 · A_2 / A_1 = F_1 · d_2² / d_1²",
  "explain": "Der Druck ist überall gleich, die Kräfte verhalten sich wie die Flächen: F₂ = F₁ × (d₂ ÷ d₁)² = 2500 N × (57 ÷ 23)² = 2500 N × 6,14 ≈ 15 354 N. Typische Fehler: nur mit dem Durchmesserverhältnis statt mit dem Quadrat rechnen (2500 N × 2,48 ≈ 6196 N), das Verhältnis umdrehen (≈ 407 N) oder das Komma verrutschen lassen.",
  "src": "FW"
 },
 {
  "id": "88fad280d942",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 16,
  "q": "Der Kunde erwähnt, dass im Frühjahr eine Achsvermessung gemacht wurde. Welche Antwort nennt drei Anlässe, nach denen der Lenkwinkelsensor neu kalibriert werden muss?",
  "opts": [
   "Nach einer Spur- bzw. Achseinstellung; nach Arbeiten an der Lenkung (z. B. Spurstange); je nach Hersteller nach Abklemmen der Batterie oder Tausch des Sensors",
   "Nach einer Spur- bzw. Achseinstellung; nach dem Wechsel von Bremsscheiben und Belägen an der Vorderachse; nach dem Tausch eines Raddrehzahlsensors oder Radlagers vorn",
   "Nach einem Reifenwechsel auf gleiche Größe; nach einem Bremsflüssigkeitswechsel; nach Arbeiten an der Lenkung (z. B. Spurstange)",
   "Nach einem Motorölwechsel mit Rücksetzen der Serviceanzeige; nach dem Tausch der Bremsbeläge; je nach Hersteller nach Abklemmen der Batterie"
  ],
  "correct": 0,
  "explain": "Neu kalibrieren nach einer Spur- bzw. Achseinstellung, nach Arbeiten an der Lenkung (z. B. Tausch von Lenkgetriebe oder Spurstange) und je nach Hersteller nach dem Abklemmen der Batterie bzw. Tausch des Sensors oder Steuergeräts. Steht die Nulllage des Sensors nicht auf Geradeausfahrt, rechnet das ESP mit einem falschen Fahrerwunsch und kann falsch eingreifen.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "f8bf0a08ae42",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 17,
  "tb": true,
  "q": "Nach der Reparatur prüfen Sie das Fahrzeug auf dem Rollenbremsprüfstand. Welche Antwort nennt richtig, was gemessen bzw. bewertet wird? Die Grenzwerte entnehmen Sie dem Tabellenbuch.",
  "opts": [
   "Bremskraft an jedem Rad; Ungleichmäßigkeit links/rechts je Achse; Bremsweg aus 100 km/h; Wirkung der Feststellbremse",
   "Bremskraft an jedem Rad; Belagdicke der Radbremsen; Abbremsung aus Bremskraftsumme und Masse; Wirkung der Feststellbremse",
   "Bremskraft an jedem Rad; Ungleichmäßigkeit links/rechts je Achse; Abbremsung aus Bremskraftsumme und Masse; Wirkung der Feststellbremse",
   "Bremskraft an jedem Rad; Ungleichmäßigkeit links/rechts je Achse; Siedepunkt der Bremsflüssigkeit über den Prüfstandsrechner; Wirkung der Feststellbremse"
  ],
  "correct": 2,
  "explain": "Gemessen bzw. bewertet werden die Bremskraft an jedem Rad, die Ungleichmäßigkeit der Bremskräfte links/rechts je Achse, die Abbremsung des Fahrzeugs aus der Summe der Bremskräfte und der Masse, die Wirkung der Feststellbremse (EPB) und die Bremskraftschwankung (Unrundheit) einer Radbremse. Bremsweg, Belagdicke oder Siedepunkt misst der Rollenprüfstand nicht. Die Grenzwerte für Mindestabbremsung, Ungleichmäßigkeit und Feststellbremse stehen im Tabellenbuch – dort nachschlagen, nicht aus dem Kopf.",
  "src": "FW, TB (Grenzwerte)"
 },
 {
  "id": "37421867fe52",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige Abschlussarbeiten, bevor Sie den Golf an den Kunden übergeben?",
  "opts": [
   "EPB mehrmals schließen und lösen; Fehlerspeicher auslesen und löschen; Bremsflüssigkeit als Reserve über MAX auffüllen; Probefahrt mit Bremsprobe",
   "Servicemodus der EPB für die ersten Kilometer aktiv lassen, damit sich die Beläge setzen; Fehlerspeicher auslesen und löschen; Wechselaufkleber anbringen; Probefahrt mit Bremsprobe",
   "EPB mehrmals schließen und lösen; Batterie kurz abklemmen, damit die EPB ihre Werte neu lernt; Wechselaufkleber anbringen; Probefahrt mit Bremsprobe",
   "EPB-Grundeinstellung prüfen, mehrmals schließen und lösen; Fehlerspeicher auslesen und löschen; Füllstand prüfen, Wechselaufkleber; Probefahrt, Beläge einbremsen"
  ],
  "correct": 3,
  "explain": "Abschlussarbeiten: Grundeinstellung der EPB kontrollieren und die EPB mehrmals schließen und lösen, Fehlerspeicher auslesen und löschen, Bremsflüssigkeitsstand prüfen und Wechselaufkleber anbringen, Probefahrt mit Bremsprobe und neue Beläge nach Herstellervorgabe einbremsen, Arbeiten und Messwerte im Auftrag dokumentieren. Neue Beläge erreichen ihre volle Wirkung erst nach dem Einbremsen. Darauf sollte auch der Kunde hingewiesen werden.",
  "src": "FW"
 },
 {
  "id": "e08f3ad431aa",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "situation": "esp-focus",
  "nr": 1,
  "q": "Der Kunde fragt, was die beiden dauerhaft leuchtenden Kontrollleuchten für ihn bedeuten. Welche Auskunft ist richtig?",
  "opts": [
   "Die ganze Bremsanlage ist ausgefallen; das Fahrzeug darf nur noch abgeschleppt werden, weil kein Bremsdruck mehr entsteht und das Pedal durchfällt",
   "ABS, ASR und ESP sind abgeschaltet; die normale Bremse wirkt weiter, aber die Räder können blockieren – vorsichtig fahren, bald reparieren",
   "Nur die Anzeige ist gestört; ABS und ESP regeln weiter wie gewohnt, die Leuchten gehen nach dem nächsten Motorstart wieder aus",
   "Nur das ABS ist abgeschaltet, das ESP regelt weiter; die normale Bremse wirkt weiter, man kann ohne jede Einschränkung fahren"
  ],
  "correct": 1,
  "explain": "Erkennt das Steuergerät einen Sensorfehler, schaltet es ABS, ASR und ESP ab und meldet das über die Leuchten. Die Grundbremse (Hauptbremszylinder, Leitungen, Radbremsen) arbeitet weiter, nur ohne Blockierschutz und Stabilitätsregelung. Das ESP braucht die Raddrehzahlen ebenfalls, deshalb fällt es mit aus. Leuchtet zusätzlich die rote Bremswarnleuchte, ist auch die Bremskraftverteilung gestört – dann nicht weiterfahren.",
  "src": "FW"
 },
 {
  "id": "b610d2f3c487",
  "cat": "Bremse",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 7,
  "situation": "esp-focus",
  "nr": 2,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Sie verschaffen sich einen Überblick über die ESP-Hydraulik eines Bremskreises. Ordnen Sie den Nummern im Bild die Bauteile zu.",
  "paare": [
   [
    "①",
    "Hauptbremszylinder mit Behälter"
   ],
   [
    "②",
    "Umschaltventil (Trennventil)"
   ],
   [
    "③",
    "Ansaugventil (Hochdruckventil)"
   ],
   [
    "④",
    "Rückförderpumpe"
   ],
   [
    "⑤",
    "Niederdruckspeicher"
   ],
   [
    "⑥",
    "Einlassventil vorn links"
   ],
   [
    "⑦",
    "Auslassventil vorn links"
   ]
  ],
  "ablenker": [
   "Bremskraftverstärker",
   "Einlassventil hinten rechts"
  ],
  "explain": "Jedes Rad hat ein Einlass- und ein Auslassventil (⑥/⑦ vorn links, ⑧/⑨ hinten rechts). Umschaltventil ② und Ansaugventil ③ gibt es einmal je Bremskreis – sie braucht das Aggregat, um ohne Pedal Druck aufzubauen (ESP, ASR). Die Pumpe ④ wird vom Motor M angetrieben, der Speicher ⑤ nimmt beim Druckabbau kurz Flüssigkeit auf. ⑫ ist der Drucksensor für den Fahrervordruck.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "82872215beaa",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 3,
  "q": "Im Fehlerspeicher steht: „Raddrehzahlsensor vorn rechts – Signal unplausibel, sporadisch“. Wie erkennt das Steuergerät einen solchen Fehler?",
  "opts": [
   "Es misst bei jedem Motorstart den Widerstand der Sensorspule und vergleicht ihn mit einem festen Sollwert im Speicher",
   "Es vergleicht die Raddrehzahl vorn rechts mit dem Lenkwinkel und meldet einen Fehler, sobald stärker gelenkt wird",
   "Es vergleicht die Drehzahlen aller vier Räder und prüft das Signal auf Sprünge und Aussetzer, die physikalisch nicht möglich sind",
   "Es erkennt ihn nur, wenn bei einer Vollbremsung ein Rad blockiert und der Bremsdruck an diesem Rad nicht mehr abgebaut werden kann"
  ],
  "correct": 2,
  "explain": "Das Steuergerät überwacht die Sensoren ständig: Ein Rad kann nicht schlagartig von 50 auf 0 km/h fallen, während die anderen drei gleich schnell bleiben. Solche Sprünge oder Aussetzer gelten als unplausibel. „Sporadisch“ heißt: Der Fehler ist im Moment nicht vorhanden, trat aber auf. Einen Spulenwiderstand gibt es beim aktiven Sensor nicht.",
  "src": "FW"
 },
 {
  "id": "7a494cc3f529",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "esp-focus",
  "nr": 4,
  "q": "Wie gehen Sie nach dem Auslesen des Fehlerspeichers sinnvoll weiter vor?",
  "opts": [
   "Den Sensor vorn rechts sofort ersetzen, weil der Fehlerspeicher ihn nennt; danach Fehlerspeicher löschen und übergeben",
   "Raddrehzahlen im Messwertblock bei einer Probefahrt beobachten; Sensor, Leitung, Stecker und Radlagerbereich sichtprüfen; dann gezielt messen",
   "Fehlerspeicher löschen und den Kunden wiederkommen lassen, wenn die Leuchte erneut angeht – sporadische Fehler kann man in der Werkstatt nicht prüfen",
   "Zuerst den Lenkwinkelsensor grundeinstellen, weil nach Arbeiten an der Vorderachse immer die Kalibrierung fehlt; dann löschen"
  ],
  "correct": 1,
  "explain": "Der Fehlerspeicher nennt den Stromkreis, nicht das defekte Teil. Deshalb zuerst den Fehler nachvollziehen (Messwertblock bei Probefahrt), dann Sichtprüfung (Leitung scheuert, Stecker korrodiert, Späne am Sensor) und erst danach messen. Blind getauschte Sensoren lösen das Problem oft nicht – der Fehler kann auch am Magnetring oder an der Leitung liegen.",
  "src": "FW"
 },
 {
  "id": "a1edc1028450",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 5,
  "q": "Bei der Probefahrt mit etwa 50 km/h zeigt der Messwertblock: VL 50 km/h, VR springt mehrmals kurz auf 0 km/h und zurück auf 50 km/h, HL 50 km/h, HR 49 km/h. Wie beurteilen Sie das?",
  "opts": [
   "HR ist mit 49 km/h defekt, weil alle vier Räder exakt gleich schnell drehen müssen; die Sprünge vorn rechts sind nur ein Anzeigefehler",
   "Alle Werte sind in Ordnung, weil der Mittelwert der vier Räder ungefähr der gefahrenen Geschwindigkeit entspricht",
   "Das Signal vorn rechts setzt kurz aus; Sensor, Leitung, Stecker und Magnetring vorn rechts prüfen; die übrigen Räder sind in Ordnung",
   "Das Signal vorn rechts setzt aus; Ursache ist sicher das ESP-Steuergerät, das ersetzt und neu codiert werden muss"
  ],
  "correct": 2,
  "explain": "Kleine Unterschiede (49 statt 50 km/h) sind normal, z. B. durch Kurvenfahrt oder Reifenabnutzung. Ein Rad, das kurz auf 0 km/h fällt, ist dagegen unmöglich – das Signal setzt aus. Ursache kann der Sensor, die Leitung bzw. der Stecker oder der Magnetring sein. Das Steuergerät ist selten defekt und wird erst nach allen anderen Prüfungen verdächtigt.",
  "src": "FW"
 },
 {
  "id": "a49e6e1b7de5",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 6,
  "bild": "bremse-esp-sensoren.svg",
  "q": "Welche Pins am Steuergerät A2 gehören laut Schaltplan zum Raddrehzahlsensor vorn rechts?",
  "opts": [
   "Pin 11 (Versorgung) und Pin 12 (Signal)",
   "Pin 13 (Versorgung) und Pin 14 (Signal)",
   "Pin 17 (Versorgung) und Pin 18 (Signal)",
   "Pin 14 (Versorgung) und Pin 13 (Signal)"
  ],
  "correct": 1,
  "explain": "B2 ist der Sensor vorn rechts. Seine Leitungen gehen über die Steckverbindung X1 zu Pin 13 (obere Leitung, Versorgung) und Pin 14 (untere Leitung, Signal). Pin 11/12 gehören zu B1 vorn links, Pin 17/18 zu B4 hinten rechts.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "bb69edecabdd",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 7,
  "bild": "bremse-esp-sensoren.svg",
  "q": "Sie wollen die Versorgungsspannung des Sensors vorn rechts prüfen. Wie messen Sie richtig?",
  "opts": [
   "X1 trennen, Zündung ein, Spannungsmesser zwischen Messpunkt A und Fahrzeugmasse",
   "X1 gesteckt lassen, Zündung aus, Ohmmeter zwischen Messpunkt A und Messpunkt B",
   "X1 trennen, Zündung ein, Spannungsmesser zwischen Messpunkt B und Fahrzeugmasse",
   "X1 trennen, Zündung aus, Spannungsmesser zwischen Messpunkt A und Pin 4 von A2"
  ],
  "correct": 0,
  "explain": "Die Versorgung kommt vom Steuergerät über Pin 13 und liegt an Messpunkt A (Kabelbaumseite von X1). Sie ist nur bei eingeschalteter Zündung vorhanden, deshalb Zündung ein und gegen Masse messen. B ist die Signalleitung, dort liegt keine Versorgung an. Mit dem Ohmmeter am gesteckten Sensor misst man Unsinn und kann die Sensorelektronik gefährden.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "af2bacd33ac5",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 5,
  "situation": "esp-focus",
  "nr": 8,
  "bild": "bremse-esp-sensoren.svg",
  "q": "Ihre Messungen (X1 getrennt): A gegen Masse bei Zündung ein 11,9 V (Batterie 12,3 V, Sollwert laut Werkstattinformation: annähernd Batteriespannung). Steuergerätestecker abgezogen: Leitung A → Pin 13 = 0,3 Ω, Leitung B → Pin 14 = 0,4 Ω, B gegen Masse = kein Durchgang. Wie beurteilen Sie die Messwerte?",
  "opts": [
   "Leitung B ist mit 0,4 Ω unterbrochen, weil eine intakte Leitung genau 0 Ω haben muss; den Kabelbaum vorn rechts komplett erneuern",
   "Die Versorgung ist mit 11,9 V zu niedrig, weil sie genau der Batteriespannung entsprechen muss; Sicherung F3 ersetzen",
   "Kein Durchgang zwischen B und Masse zeigt eine Unterbrechung der Signalleitung; Leitung zwischen X1 und A2 erneuern",
   "Versorgung und beide Leitungen sind in Ordnung, ein Masseschluss liegt nicht vor; Fehler liegt am Sensor oder am Magnetring"
  ],
  "correct": 3,
  "explain": "Wenige Zehntel Ohm sind für eine Leitung normal, eine Unterbrechung zeigt „kein Durchgang“ bzw. sehr hohen Widerstand. 11,9 V bei 12,3 V Batteriespannung ist ein kleiner, zulässiger Spannungsfall. „Kein Durchgang“ zwischen Signalleitung und Masse ist richtig – es gibt keinen Masseschluss. Damit bleiben Sensor oder Magnetring als Fehlerort.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "fb9ec25e9045",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "esp-focus",
  "nr": 9,
  "q": "Ein Kollege will den aktiven Sensor ausbauen und mit dem Ohmmeter oder einer Prüflampe prüfen. Warum ist das nicht sinnvoll?",
  "opts": [
   "Ein aktiver Sensor hat keinen Innenwiderstand; das Ohmmeter zeigt deshalb immer 0 Ω und man erkennt keinen Fehler",
   "Der Messstrom des Ohmmeters magnetisiert den Magnetring im Radlager um, sodass danach auch beim Drehen des Rades überhaupt kein Signal mehr kommt",
   "Ein aktiver Sensor enthält Elektronik; Prüflampe oder Messstrom können sie schädigen, ein Widerstandswert sagt nichts über die Funktion",
   "Das ist sinnvoll: Liegt der Widerstand bei ca. 1 kΩ, ist der aktive Sensor in Ordnung, sonst ist er defekt"
  ],
  "correct": 2,
  "explain": "Im aktiven Sensor sitzt ein Hall- oder MR-Element mit Auswerteschaltung. Die verträgt nur kleine Ströme – eine Glühlampen-Prüflampe kann sie zerstören. Einen „Sollwiderstand“ wie bei der Spule des passiven Sensors gibt es nicht. Geprüft wird über Versorgung, Leitungen und das Signal mit dem Oszilloskop bzw. im Messwertblock.",
  "src": "Netz: VEMO Tech-Info, autoservicepraxis.de"
 },
 {
  "id": "f71d6a6ee6fb",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "esp-focus",
  "nr": 10,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Zum Vergleich messen Sie bei der Probefahrt mit Messadapter zuerst den Sensor vorn links (Messung 1). Wie groß ist die Signalfrequenz?",
  "opts": [
   "250 Hz",
   "500 Hz",
   "1.000 Hz",
   "0,5 Hz"
  ],
  "correct": 1,
  "formel": "f = 1 / T\nf in Hz (1/s), T = Periodendauer in s (1 ms = 0,001 s)",
  "explain": "Eine Periode (einmal 14 mA und einmal 7 mA) ist 2 Kästchen lang, also T = 2 ms. f = 1 ÷ T = 1 ÷ 0,002 s = 500 Hz. Typische Fehler: nur die halbe Periode ablesen (1 ms → 1.000 Hz) oder Millisekunden nicht umrechnen (1 ÷ 2 = 0,5).",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "b8ece341037f",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 5,
  "situation": "esp-focus",
  "nr": 11,
  "q": "Der Magnetring hat laut Werkstattinformation 48 Polpaare (48 Signalperioden je Radumdrehung). Wie groß ist die Raddrehzahl bei Messung 1 (f = 500 Hz)?",
  "opts": [
   "10,4 1/min",
   "400 1/min",
   "625 1/min",
   "1.250 1/min"
  ],
  "correct": 2,
  "formel": "f = z · n / 60   →   n = f · 60 / z\nf in Hz, n in 1/min, z = Zähnezahl bzw. Polpaarzahl",
  "explain": "f = z × n ÷ 60 → n = f × 60 ÷ z = 500 1/s × 60 s/min ÷ 48 = 625 1/min. Typische Fehler: den Faktor 60 vergessen (≈ 10,4), z und 60 vertauschen (500 × 48 ÷ 60 = 400) oder mit 24 statt 48 rechnen (1.250).",
  "src": "FW"
 },
 {
  "id": "1065cdf75dcc",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 6,
  "situation": "esp-focus",
  "nr": 12,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Messung 2 zeigt den Sensor vorn rechts unter gleichen Bedingungen. Wie beurteilen Sie das Signal?",
  "opts": [
   "Der Strom fällt in der Lücke auf 0 mA; die Leitung ist dort kurz unterbrochen, deshalb ist der Kabelbaum zwischen X1 und Steuergerät zu ersetzen",
   "Pegel und Frequenz stimmen, in der Lücke bleibt der Strom bei 7 mA; Sensor ist versorgt, Leitung ganz – der Magnetring hat eine schadhafte Stelle",
   "Die Frequenz ist doppelt so hoch wie bei Messung 1; der Sensor ist für das falsche Rad bestellt und muss getauscht werden",
   "Der obere Pegel ist zu niedrig; die Versorgung bricht ein, Ursache ist eine schwache Batterie oder eine korrodierte Sicherung F3"
  ],
  "correct": 1,
  "explain": "Außerhalb der Lücke sieht Messung 2 aus wie Messung 1 (7/14 mA, 2 ms Periode). In der Lücke wechselt der Strom nicht, bleibt aber auf dem unteren Pegel – der Sensor ist also versorgt und die Leitung nicht unterbrochen (dann wären es 0 mA). Ihm fehlen dort die Polwechsel: Der Magnetring ist an dieser Stelle beschädigt, verschmutzt oder entmagnetisiert.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "bea02d723fbf",
  "cat": "Bremse",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "esp-focus",
  "nr": 13,
  "q": "Ordnen Sie den Signalbildern eines aktiven Raddrehzahlsensors (Rad dreht) die wahrscheinliche Ursache zu.",
  "paare": [
   [
    "Strom wechselt gleichmäßig zwischen 7 und 14 mA",
    "Sensor und Magnetring in Ordnung"
   ],
   [
    "Strom bleibt dauernd auf 7 mA, kein Wechsel",
    "Kein Magnetfeld am Sensor, z. B. Lager seitenverkehrt eingebaut"
   ],
   [
    "Strom ist dauernd 0 mA",
    "Versorgung fehlt oder Leitung unterbrochen"
   ],
   [
    "Gleichmäßige Wechsel mit einer Lücke je Radumdrehung",
    "Magnetring stellenweise beschädigt"
   ]
  ],
  "ablenker": [
   "Lenkwinkelsensor nicht kalibriert"
  ],
  "explain": "Der Sensor braucht Strom (sonst 0 mA) und wechselnde Magnetpole (sonst bleibt er auf einem Pegel). Ist das Lager seitenverkehrt eingebaut, zeigt die Stahlseite statt der Magnetspur zum Sensor – das Signal fehlt dauerhaft. Eine beschädigte Stelle am Ring erzeugt eine Lücke, die sich bei jeder Radumdrehung wiederholt.",
  "src": "FW"
 },
 {
  "id": "d85fdf30bab5",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "esp-focus",
  "nr": 14,
  "q": "Der Kunde fragt, ob die andere Werkstatt, die das Lager eingebaut hat, für den Fehler aufkommen muss. Was empfehlen Sie ihm vor der Reparatur?",
  "opts": [
   "Sofort hier reparieren und die Rechnung an die andere Werkstatt schicken – sie muss die Kosten in jedem Fall ohne weitere Nachfrage übernehmen",
   "Nichts unternehmen – nach zwei Wochen ist die Mängelhaftung für Werkstattarbeiten ohnehin schon abgelaufen",
   "Den Mangel bei der Kfz-Innung melden – die Innung lässt das Fahrzeug dann kostenlos in einer anderen Werkstatt reparieren",
   "Befund mit Messergebnissen dokumentieren; der anderen Werkstatt zuerst Gelegenheit zur Nachbesserung geben, sonst drohen Ansprüche zu entfallen"
  ],
  "correct": 3,
  "explain": "Bei einem Werkvertrag hat die Werkstatt, die mangelhaft gearbeitet hat, zunächst das Recht auf Nacherfüllung. Lässt der Kunde ohne Fristsetzung woanders reparieren, kann er seinen Anspruch auf Kostenersatz verlieren. Die Mängelhaftung läuft deutlich länger als zwei Wochen. Ein schriftlicher Befund mit Messwerten hilft dem Kunden als Nachweis; bei Streit vermittelt die Schiedsstelle der Innung.",
  "src": "FW, BGB Werkvertrag"
 },
 {
  "id": "4adf84e76823",
  "cat": "Bremse",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 6,
  "situation": "esp-focus",
  "nr": 15,
  "q": "Die andere Werkstatt übernimmt die Kosten, Sie sollen reparieren. Bringen Sie die Arbeitsschritte zum Ersetzen des Radlagers mit Magnetring vorn rechts in die richtige Reihenfolge.",
  "schritte": [
   "Fahrzeug anheben und Vorderrad abbauen",
   "Raddrehzahlsensor ausbauen, Bremssattel abbauen und aufhängen, Bremsscheibe abnehmen",
   "Radnabe und altes Radlager nach Herstellervorgabe auspressen",
   "Neues Lager über den Außenring einpressen, Magnetring zur Sensorseite",
   "Sensorbohrung reinigen, Sensor einbauen, Bremse und Rad mit Drehmoment montieren",
   "Fehlerspeicher löschen, Probefahrt mit Messwertblock der Raddrehzahlen"
  ],
  "explain": "Der Sensor kommt zuerst heraus, damit er beim Auspressen nicht beschädigt wird. Der Sattel wird nur abgebaut und aufgehängt – die Hydraulik bleibt geschlossen, Entlüften ist nicht nötig. Die Einbaurichtung des Lagers entscheidet, ob der Sensor die Magnetspur „sieht“.",
  "src": "FW"
 },
 {
  "id": "d67da4fdccc8",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 16,
  "q": "Worauf achten Sie beim Einbau des neuen Radlagers mit integriertem Magnetring besonders?",
  "opts": [
   "Magnetring zur Sensorseite einbauen; nicht mit Magneten oder magnetischem Werkzeug in Berührung bringen; Sensorsitz frei von Spänen und Rost",
   "Einbaurichtung ist egal, der Sensor erkennt beide Seiten; Lager über den Innenring einpressen; Sensorsitz mit Fett füllen",
   "Magnetring vor dem Einbau mit einem Dauermagneten nachmagnetisieren, damit das Signal stärker wird; Sensor einfetten; Luftspalt mit Beilagscheiben einstellen",
   "Magnetring zur Sensorseite einbauen; Lager mit dem Hammer über die Dichtscheibe eintreiben; Sensor auf der Magnetablage lagern"
  ],
  "correct": 0,
  "explain": "Die Magnetspur sitzt nur auf einer Seite des Lagers (oft farbig oder dunkel markiert) und muss zum Sensor zeigen. Fremde Magnete können die Spur stellenweise verändern – genau das erzeugt Lücken im Signal. Eingepresst wird nur über den Ring, der im Gehäuse sitzt, nie über Dichtung oder Magnetring. Späne am Sensor verfälschen das Magnetfeld.",
  "src": "FW, Netz: Hella TI"
 },
 {
  "id": "61bfa6740850",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "esp-focus",
  "nr": 17,
  "q": "Der Kunde erwähnt, dass bald die Hauptuntersuchung fällig ist. Wie wird eine dauerhaft leuchtende ABS-/ESP-Kontrollleuchte bei der HU bewertet?",
  "opts": [
   "Als geringer Mangel – die Plakette wird zugeteilt, der Mangel muss nur irgendwann behoben werden",
   "Als erheblicher Mangel – die Plakette gibt es erst nach Behebung und Nachprüfung",
   "Gar nicht – bei der HU zählt nur die Bremskraft, die der Rollenprüfstand misst",
   "Als gefährlicher Mangel – das Fahrzeug wird sofort stillgelegt und muss abgeschleppt werden"
  ],
  "correct": 1,
  "explain": "Eine Kontrollleuchte, die eine Störung eines Bremsregelsystems anzeigt, gilt bei der HU als erheblicher Mangel. Das Fahrzeug bekommt keine Plakette, bis der Fehler behoben und nachgeprüft ist. Ein gefährlicher Mangel oder „verkehrsunsicher“ liegt erst vor, wenn eine unmittelbare Gefahr besteht, z. B. bei Ausfall der Grundbremse.",
  "src": "Netz: kfz-dietrich.com, HU-Richtlinie (Recherche ausbau-bremse)"
 },
 {
  "id": "a399cc95edb0",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 5,
  "situation": "esp-focus",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige Abschlussarbeiten bzw. Hinweise, bevor Sie den Focus übergeben?",
  "opts": [
   "Fehlerspeicher löschen und erneut auslesen; Bremsflüssigkeit komplett wechseln, weil sie beim Lagertausch Luft gezogen hat; Leuchten aus; Befund dokumentieren",
   "Fehlerspeicher löschen und erneut auslesen; Probefahrt, alle vier Raddrehzahlen im Messwertblock gleich; Leuchten aus; Befund und Messwerte dokumentieren",
   "Kontrollleuchten durch Abklemmen der Batterie zurücksetzen; Probefahrt mit Messwertblock; ESP-Steuergerät neu codieren; Befund dokumentieren",
   "Fehlerspeicher löschen und erneut auslesen; ESP-Steuergerät neu codieren, weil ein Sensor getauscht wurde; Leuchten aus; Befund dokumentieren"
  ],
  "correct": 1,
  "explain": "Nach dem Löschen muss der Fehler bei einer Probefahrt wegbleiben; im Messwertblock müssen alle Räder gleich schnell laufen und die Leuchten aus sein. Befund und Messwerte gehören in die Dokumentation – hier auch als Nachweis für die andere Werkstatt. Die Hydraulik wurde nicht geöffnet, ein Bremsflüssigkeitswechsel ist deshalb nicht nötig, und ein Radlager braucht keine Codierung.",
  "src": "FW"
 },
 {
  "id": "024e051aee74",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Es gibt zwei Bauarten der elektrischen Parkbremse. Ordnen Sie die Merkmale der richtigen Bauart zu.",
  "paare": [
   [
    "Je ein Stellmotor mit Getriebe sitzt direkt am hinteren Bremssattel",
    "Motor-on-Caliper"
   ],
   [
    "Ein Spindeltrieb im Sattel drückt den Bremskolben",
    "Motor-on-Caliper"
   ],
   [
    "Ein zentraler Elektromotor spannt die Bremsseile",
    "Seilzug-Aktuator"
   ],
   [
    "Seilzüge zu den Hinterradbremsen bleiben erhalten",
    "Seilzug-Aktuator"
   ]
  ],
  "ablenker": [
   "Hydraulischer Druckspeicher"
  ],
  "explain": "Heute ist Motor-on-Caliper am verbreitetsten. Der Seilzug-Aktuator ersetzt nur den Handbremshebel, die Mechanik an den Rädern bleibt wie gewohnt.",
  "src": "Recherche 3.2, FW"
 },
 {
  "id": "29d97bb5c9c2",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Fahrzeug mit EPB soll abgeschleppt werden, die Batterie ist leer und die Parkbremse geschlossen. Wie gehen Sie richtig vor?",
  "opts": [
   "Fahrzeug mit geschlossener EPB langsam anschleppen – die Bremse löst sich durch die Zugkraft von selbst; danach die Batterie laden und prüfen",
   "Gegen Wegrollen sichern (Unterlegkeile); Spannung herstellen und EPB mit dem Taster lösen; sonst mechanische Notentriegelung nach Herstellerangabe",
   "Stecker der Stellmotoren abziehen – ohne Strom öffnet die Parkbremse durch Federkraft von selbst; das Fahrzeug dann ganz normal abschleppen",
   "Batterie ab- und wieder anklemmen, dadurch fährt die EPB von selbst in die offene Grundstellung; das Fahrzeug ohne weitere Sicherung gleich abschleppen"
  ],
  "correct": 1,
  "explain": "Zuerst das Fahrzeug gegen Wegrollen sichern (Unterlegkeile). Dann Spannung herstellen (Starthilfe, Ladegerät) und die EPB normal mit dem Taster lösen. Geht das nicht, die mechanische Notentriegelung nach Herstellerangabe nutzen. Ohne Strom lässt sich die EPB nicht mit dem Taster lösen. Die Notentriegelung ist je nach Hersteller unterschiedlich, deshalb immer die Reparaturanleitung beachten.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "1a3295c85a4c",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Kollege möchte den Kolben eines EPB-Sattels (Motor-on-Caliper) ohne Tester mit dem Rücksetzwerkzeug zurückdrehen. Wie beurteilen Sie das?",
  "opts": [
   "Nicht zulässig – ohne Servicemodus können Spindel, Getriebe oder Stellmotor Schaden nehmen",
   "Zulässig, wenn er dabei das Bremspedal gedrückt hält, weil dann die Spindel ganz entlastet ist",
   "Zulässig, wenn vorher die Zündung eingeschaltet wurde, weil der Stellmotor dann mitdreht",
   "Zulässig, denn die EPB stellt sich bei der nächsten Fahrt von selbst wieder richtig ein"
  ],
  "correct": 0,
  "explain": "Der Kolben hängt mechanisch an der Spindel des Stellmotors. Ohne Servicemodus arbeitet man gegen die gesperrte Mechanik.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "fcb8c78d7822",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aussage zu DOT 5 und DOT 5.1 ist richtig?",
  "opts": [
   "DOT 5 ist auf Silikonbasis und darf nicht mit DOT 5.1 gemischt werden",
   "DOT 5.1 ist auf Silikonbasis, DOT 5 auf Glykolbasis",
   "Beide sind Glykolflüssigkeiten und beliebig mischbar",
   "DOT 5 ist die Nachfolgerin von DOT 5.1 und hat den höheren Siedepunkt"
  ],
  "correct": 0,
  "explain": "DOT 3, DOT 4 und DOT 5.1 bestehen aus Glykolethern. DOT 5 ist Silikonöl. Gemischt würden sich die Flüssigkeiten nicht vertragen, deshalb nie mischen.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "47e04eea1e5c",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 6,
  "tb": true,
  "q": "Ordnen Sie mit dem Tabellenbuch den Bremsflüssigkeiten die Mindest-Siedepunkte zu.",
  "paare": [
   [
    "DOT 3 – Siedepunkt",
    "205 °C"
   ],
   [
    "DOT 3 – Nass-Siedepunkt",
    "140 °C"
   ],
   [
    "DOT 4 – Siedepunkt",
    "230 °C"
   ],
   [
    "DOT 4 – Nass-Siedepunkt",
    "155 °C"
   ],
   [
    "DOT 5.1 – Siedepunkt",
    "260 °C"
   ],
   [
    "DOT 5.1 – Nass-Siedepunkt",
    "180 °C"
   ]
  ],
  "ablenker": [
   "120 °C"
  ],
  "explain": "Je höher die DOT-Zahl (Glykolbasis), desto höher die Siedepunkte. Der Nass-Siedepunkt gilt bei ca. 3,5 % Wasser.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "ea0e37336e54",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt vier richtige Regeln für den Umgang mit Bremsflüssigkeit in der Werkstatt mit passender Begründung?",
  "opts": [
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer mit Bremsenreiniger abwischen – greift nur Kunststoff an; Gebinde sofort verschließen – hygroskopisch; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; abgelassene Flüssigkeit durch ein Sieb filtern und wiederverwenden – altert nicht; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; Gebinde sofort verschließen, Altflüssigkeit nicht wiederverwenden – hygroskopisch; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; Gebinde sofort verschließen – hygroskopisch; zusammen mit dem Altöl im selben Behälter sammeln – gleiche Entsorgungsart"
  ],
  "correct": 2,
  "explain": "Haut- und Augenkontakt vermeiden, Schutzbrille und Handschuhe tragen – sie ist gesundheitsschädlich. Spritzer auf dem Lack sofort mit Wasser abspülen – sie löst Lack. Gebinde sofort verschließen, alte oder abgelassene Flüssigkeit nicht wiederverwenden – sie ist hygroskopisch. Getrennt sammeln und als gefährlichen Abfall entsorgen. Gesundheitsschädlich, lacklösend und wasseranziehend – daraus ergeben sich alle Regeln.",
  "src": "TB Bremsflüssigkeit, FW"
 },
 {
  "id": "29d14e5aa9a3",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung von Aufgabe und Wirkungsweise eines Unterdruck-Bremskraftverstärkers ist richtig?",
  "opts": [
   "Verstärkt die Fußkraft; eine Membran trennt zwei Kammern, beim Bremsen wird in beide Kammern Unterdruck gelegt; Unterdruck kommt vom Saugrohr oder einer Vakuumpumpe",
   "Verstärkt die Fußkraft; eine Membran trennt zwei Kammern, beim Bremsen strömt Außenluft in eine Kammer; der nötige Überdruck kommt vom Abgasturbolader",
   "Speichert Bremsdruck für die ABS-Regelung; eine Membran trennt zwei Kammern, beim Bremsen strömt Außenluft in eine Kammer; Unterdruck kommt vom Saugrohr",
   "Verstärkt die Fußkraft; eine Membran trennt Unterdruck- und Arbeitskammer, in die beim Bremsen Außenluft strömt; Unterdruck vom Saugrohr oder einer Vakuumpumpe"
  ],
  "correct": 3,
  "explain": "Der Bremskraftverstärker verstärkt die Fußkraft des Fahrers, damit weniger Pedalkraft nötig ist. Eine Membran trennt eine Unterdruckkammer von einer Kammer, in die beim Bremsen Außenluft strömt – der Druckunterschied erzeugt die Hilfskraft. Der Unterdruck kommt vom Saugrohr oder von einer Vakuumpumpe (z. B. Diesel). Fällt der Bremskraftverstärker aus, bremst die Anlage weiter, aber der Fahrer muss deutlich stärker treten.",
  "src": "FW"
 },
 {
  "id": "3bc8e37a35fb",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Aussagen der Bremskreisaufteilung zu.",
  "paare": [
   [
    "Ein Kreis bremst die Vorderachse, der andere die Hinterachse",
    "II-Aufteilung"
   ],
   [
    "Jeder Kreis bremst ein Vorderrad und das diagonal gegenüberliegende Hinterrad",
    "X-Aufteilung"
   ],
   [
    "Fällt der Vorderachskreis aus, bleibt nur die schwächere Hinterachsbremse",
    "II-Aufteilung"
   ],
   [
    "Bei Ausfall eines Kreises bremst noch je ein Vorderrad – typisch bei Pkw mit Frontantrieb",
    "X-Aufteilung"
   ]
  ],
  "ablenker": [
   "Einkreisanlage"
  ],
  "explain": "Die Vorderachse übernimmt beim Bremsen den Großteil der Arbeit. Bei der X-Aufteilung bleibt bei Ausfall eines Kreises deshalb mehr Bremswirkung übrig.",
  "src": "FW"
 },
 {
  "id": "f2f001846ffa",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung der Funktion des Bremsassistenten ist richtig?",
  "opts": [
   "Erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung (Bremsdrucksensor); baut dann selbsttätig vollen Druck bis in die ABS-Regelung auf; Grund: viele treten zu zaghaft",
   "Erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung (Bremsdrucksensor); begrenzt dann den Bremsdruck, damit kein Rad blockiert; Grund: viele Fahrer treten zu stark",
   "Erkennt eine Notbremsung allein am Bremslichtschalter; schaltet dann das ABS ab, um den höchsten Bremsdruck zu erreichen; Grund: ABS verlängert den Bremsweg",
   "Erkennt eine Notbremsung am Gierratensensor; verstellt dann mechanisch die Pedalübersetzung am Bremspedal; Grund: der Bremskraftverstärker reicht bei einer Vollbremsung nicht aus"
  ],
  "correct": 0,
  "explain": "Der Bremsassistent erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung bzw. dem schnellen Druckanstieg (Bremsdrucksensor) und baut dann selbsttätig den vollen Bremsdruck bis in die ABS-Regelung auf. Grund: Viele Fahrer treten in der Notsituation zu zaghaft – so wird der Bremsweg kürzer. Den Druck erzeugt die Rückförderpumpe im ESP-Hydroaggregat, das Signal liefert der Bremsdrucksensor.",
  "src": "FW"
 },
 {
  "id": "edd189f173a5",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie erkennt die Antriebsschlupfregelung (ASR) ein durchdrehendes Antriebsrad, und mit welchen zwei Eingriffen reagiert sie?",
  "opts": [
   "Vergleich von Lenkwinkel und Gierrate; Bremseingriff am durchdrehenden Rad; Motormoment wird reduziert",
   "Vergleich der Raddrehzahlen von angetriebenen und nicht angetriebenen Rädern; Bremseingriff am nicht durchdrehenden Rad; Motormoment wird reduziert",
   "Vergleich der Raddrehzahlen von angetriebenen und nicht angetriebenen Rädern; Bremseingriff am durchdrehenden Rad; Motormoment wird reduziert",
   "Vergleich der Raddrehzahlen von angetriebenen und nicht angetriebenen Rädern; Bremseingriff an allen vier Rädern; Motormoment wird erhöht"
  ],
  "correct": 2,
  "explain": "Erkennung: Die Raddrehzahlen der Antriebsräder werden mit denen der nicht angetriebenen Räder verglichen. Eingriffe: Bremseingriff am durchdrehenden Rad (wirkt wie eine Differenzialsperre) und Eingriff in den Motor – das Antriebsmoment wird reduziert. Der Bremseingriff hilft vor allem auf einseitig glattem Untergrund. Drehen beide Räder durch, wird vor allem das Motormoment zurückgenommen.",
  "src": "FW"
 },
 {
  "id": "cdb829ba1f54",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Auf den Kolben eines Hauptbremszylinders (Kolbenfläche 4 cm²) wirkt eine Kraft von 1600 N. Wie groß ist der Druck in bar?",
  "opts": [
   "400 bar",
   "4 bar",
   "160 bar",
   "40 bar"
  ],
  "correct": 3,
  "formel": "p = F / A\n1 bar = 10 N/cm²",
  "explain": "p = F ÷ A = 1600 N ÷ 4 cm² = 400 N/cm². Da 1 bar = 10 N/cm² ist, sind das 40 bar. Typischer Fehler: N/cm² direkt als bar ablesen (400 bar).",
  "src": "FW"
 },
 {
  "id": "ca5c5abc6809",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Am Bremspedal greift die Fußkraft 280 mm vom Drehpunkt an, die Druckstange 70 mm vom Drehpunkt. Der Fahrer tritt mit 150 N. Welche Kraft wirkt auf die Druckstange (ohne Bremskraftverstärker)?",
  "opts": [
   "600 N",
   "37,5 N",
   "2.400 N",
   "450 N"
  ],
  "correct": 0,
  "formel": "Hebelgesetz: F_1 · l_1 = F_2 · l_2   →   F_2 = F_1 · l_1 / l_2\nl = Hebelarm (Abstand vom Drehpunkt)",
  "explain": "Hebelgesetz: Pedalübersetzung i = 280 mm ÷ 70 mm = 4. F = 150 N × 4 = 600 N.",
  "src": "FW"
 },
 {
  "id": "fcb530be4934",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "tb": true,
  "q": "Ein Pkw mit 1500 kg erreicht auf dem Bremsenprüfstand eine Summe aller Bremskräfte von 9000 N. Wie groß ist die Abbremsung z (g = 9,81 m/s²)?",
  "opts": [
   "163,5 %",
   "6,1 %",
   "61,2 %",
   "58,9 %"
  ],
  "correct": 2,
  "formel": "z = ΣF_B / (m · g) · 100 %\nΣF_B = Summe der Bremskräfte in N, m in kg, g = 9,81 m/s²",
  "explain": "z = ΣF ÷ (m × g) × 100 % = 9000 N ÷ (1500 kg × 9,81 m/s²) × 100 % = 9000 ÷ 14 715 × 100 % ≈ 61,2 %. Ob das reicht, beurteilen Sie mit der Mindestabbremsung aus dem Tabellenbuch.",
  "src": "FW, TB (Grenzwert)"
 },
 {
  "id": "ca69b4a655c9",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "tb": true,
  "q": "An der Vorderachse misst der Prüfstand links 2800 N und rechts 2300 N Bremskraft. Wie groß ist die Ungleichmäßigkeit, bezogen auf den größeren Wert?",
  "opts": [
   "21,7 %",
   "17,9 %",
   "82,1 %",
   "1,8 %"
  ],
  "correct": 1,
  "formel": "Ungleichmäßigkeit = (F_{B,max} − F_{B,min}) / F_{B,max} · 100 %\nbezogen auf die größere Bremskraft einer Achse",
  "explain": "Ungleichmäßigkeit = (2800 N − 2300 N) ÷ 2800 N × 100 % ≈ 17,9 %. Typischer Fehler: auf den kleineren Wert beziehen (500 N ÷ 2300 N ≈ 21,7 %). Den zulässigen Höchstwert entnehmen Sie dem Tabellenbuch.",
  "src": "FW, TB (Grenzwert)"
 },
 {
  "id": "2f12e4a14e9f",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Die ABS-Kontrollleuchte leuchtet, im Fehlerspeicher steht „Raddrehzahlsensor hinten links – Signal unplausibel“. Welche Antwort nennt vier mögliche Ursachen?",
  "opts": [
   "Impulsring verschmutzt oder beschädigt; Luftspalt zu groß (z. B. Radlagerspiel); Bremsflüssigkeitsstand im Ausgleichsbehälter zu niedrig; Sensor selbst defekt",
   "Impulsring verschmutzt oder beschädigt; Luftspalt zu groß (z. B. Radlagerspiel); Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt",
   "Impulsring verschmutzt oder beschädigt; Bremsbeläge hinten links verschlissen; Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt",
   "Lenkwinkelsensor nicht kalibriert; Luftspalt zu groß (z. B. Radlagerspiel); Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt"
  ],
  "correct": 1,
  "explain": "Mögliche Ursachen: Impuls- bzw. Magnetring verschmutzt oder beschädigt, Luftspalt zu groß (z. B. Sensor nicht richtig eingesetzt oder Radlagerspiel), Leitung oder Stecker beschädigt bzw. korrodiert, Sensor selbst defekt. Erst Sichtprüfung und Leitungsprüfung, dann das Signal mit dem Oszilloskop beim Drehen des Rades ansehen – erst danach den Sensor tauschen.",
  "src": "FW"
 },
 {
  "id": "dc7dbbb6396b",
  "cat": "Bremse",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte für den Bremsflüssigkeitswechsel mit Befüll- und Entlüftungsgerät in die richtige Reihenfolge.",
  "schritte": [
   "Alte Flüssigkeit im Ausgleichsbehälter absaugen und neue Bremsflüssigkeit nach Herstellerspezifikation einfüllen",
   "Entlüftungsgerät anschließen und mit vorgeschriebenem Druck einschalten",
   "Fahrzeug anheben, Entlüfterventile in der Reihenfolge laut Hersteller öffnen, bis klare, blasenfreie Flüssigkeit kommt, dann schließen",
   "Gerät abbauen und Flüssigkeitsstand auf MAX einstellen",
   "Druckpunkt am Pedal und Dichtheit prüfen, Wechselaufkleber anbringen, Bremsprobe"
  ],
  "explain": "Das Gerät hält den Druck im Ausgleichsbehälter, so kann keine Luft angesaugt werden. Die Reihenfolge der Räder gibt der Hersteller vor.",
  "src": "FW"
 },
 {
  "id": "e99d2a219914",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie arbeitet eine elektrische Bremsbelag-Verschleißanzeige meistens?",
  "opts": [
   "Eine Kontaktschleife im Belag wird an der Verschleißgrenze durchgeschliffen, die Unterbrechung lässt die Warnleuchte angehen",
   "Ein Ultraschallsensor im Bremssattel misst während der Fahrt ständig die Belagdicke und meldet den Wert an das Kombiinstrument",
   "Der Raddrehzahlsensor erkennt die abnehmende Belagdicke an der Veränderung seines Signals beim Bremsen",
   "Der Bremsdrucksensor meldet den Verschleiß, weil bei dünnen Belägen für dieselbe Verzögerung mehr Druck nötig ist"
  ],
  "correct": 0,
  "explain": "Die Kontaktschleife ist so tief in den Belag eingesetzt, dass sie erst bei der Verschleißgrenze die Scheibe berührt. Nach dem Auslösen wird sie mit den Belägen erneuert.",
  "src": "FW"
 },
 {
  "id": "1028849ffaa4",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach einer Achsvermessung beanstandet der Kunde, dass die ESP-Kontrollleuchte leuchtet. Welche Antwort nennt die wahrscheinliche Ursache und die richtige Abhilfe?",
  "opts": [
   "Lenkwinkelsensor bei der Vermessung beschädigt; Sensor ersetzen, eine Grundeinstellung ist danach nicht nötig; Fehlerspeicher löschen und Probefahrt",
   "Lenkwinkelsensor nicht neu kalibriert; Grundeinstellung bei voll eingeschlagener Lenkung durchführen; Fehlerspeicher löschen und Probefahrt",
   "Raddrehzahlsensoren bei der Vermessung verstellt; Luftspalt aller Sensoren nachstellen; Fehlerspeicher löschen und Probefahrt",
   "Lenkwinkelsensor nicht neu kalibriert; Grundeinstellung mit dem Tester bei geradeaus gestellten Rädern; Fehlerspeicher löschen und Probefahrt"
  ],
  "correct": 3,
  "explain": "Ursache: Der Lenkwinkelsensor wurde nach der Vermessung nicht neu kalibriert – die Nulllage passt nicht mehr zur Geradeausstellung. Abhilfe: Grundeinstellung des Lenkwinkelsensors mit dem Tester bei geradeaus gestellten Rädern durchführen, Fehlerspeicher löschen und mit einer Probefahrt prüfen. Das ESP vergleicht Lenkwinkel und Gierrate. Passt die Nulllage nicht, sind die Werte unplausibel und das System schaltet sich mit Warnung ab.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "790203d3067d",
  "cat": "Bremse",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Bauteilen des ESP-Hydroaggregats ihre Aufgabe zu.",
  "paare": [
   [
    "Einlassventil (stromlos offen)",
    "Lässt Druck vom Hauptbremszylinder zur Radbremse"
   ],
   [
    "Auslassventil (stromlos geschlossen)",
    "Baut den Druck an der Radbremse ab"
   ],
   [
    "Rückförderpumpe",
    "Fördert Bremsflüssigkeit zurück und erzeugt beim ESP-Eingriff aktiv Druck"
   ],
   [
    "Niederdruckspeicher",
    "Nimmt abgelassene Bremsflüssigkeit kurzzeitig auf"
   ],
   [
    "Umschaltventil",
    "Trennt beim aktiven Eingriff den Hauptbremszylinder vom Bremskreis"
   ]
  ],
  "ablenker": [
   "Misst die Gierrate"
  ],
  "explain": "ABS kommt mit Einlass-, Auslassventil und Rückförderpumpe aus. Für ESP und ASR muss das Aggregat ohne Pedal Druck aufbauen, dafür gibt es Umschalt- und Ansaugventil.",
  "src": "FW"
 },
 {
  "id": "76d819119102",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "In welcher Einheit wird die Gierrate angegeben?",
  "opts": [
   "°/s",
   "m/s²",
   "1/min",
   "bar"
  ],
  "correct": 0,
  "explain": "Die Gierrate ist eine Drehgeschwindigkeit um die Hochachse, also Grad pro Sekunde. m/s² ist die Einheit der Querbeschleunigung.",
  "src": "FW"
 },
 {
  "id": "23b8c85d3011",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum ist der Hauptbremszylinder als Tandem-Hauptbremszylinder gebaut?",
  "opts": [
   "Er versorgt zwei getrennte Bremskreise – fällt einer aus, bremst der andere Kreis weiter",
   "Die zwei Kolben hintereinander verdoppeln den Druck und damit die Bremskraft an jedem Rad",
   "Ein Kolben arbeitet für die Fußbremse, der andere für die Feststellbremse an der Hinterachse",
   "Der zweite Kolben dient nur als Reserve beim Entlüften und ist im Fahrbetrieb ohne Funktion"
  ],
  "correct": 0,
  "explain": "Zwei Kolben hintereinander erzeugen den Druck für zwei unabhängige Kreise. Das ist Vorschrift, damit bei einem Leck nicht die ganze Bremse ausfällt.",
  "src": "FW"
 },
 {
  "id": "c695912ab5e0",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was ist das Hauptziel des ABS bei einer Vollbremsung?",
  "opts": [
   "Die Räder blockieren nicht – das Fahrzeug bleibt lenkbar und stabil",
   "Die Bremskraft an allen Rädern wird verdoppelt",
   "Die Bremsbeläge verschleißen gleichmäßig",
   "Das Fahrzeug bremst immer auf dem kürzesten Weg, auch auf losem Schotter"
  ],
  "correct": 0,
  "explain": "Ein blockiertes Rad überträgt keine Seitenführungskraft mehr – das Fahrzeug lässt sich nicht mehr lenken. Auf losem Untergrund kann der Bremsweg mit ABS sogar länger sein.",
  "src": "FW"
 },
 {
  "id": "41910767a425",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ein Fahrzeug schiebt in einer Kurve über die Vorderräder nach außen (Untersteuern). Wie erkennt das ESP das, und wie greift es ein?",
  "opts": [
   "Ist-Gierrate kleiner als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurveninneres Hinterrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate größer als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurvenäußeres Vorderrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate kleiner als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurvenäußeres Hinterrad wird gebremst; Motormoment wird zur Unterstützung kurz erhöht",
   "Querbeschleunigung größer als berechnet; beide Vorderräder werden gleich stark gebremst; Motormoment wird erhöht"
  ],
  "correct": 0,
  "explain": "Erkennung: Die Ist-Gierrate ist kleiner als die Soll-Gierrate aus Lenkwinkel und Geschwindigkeit. Eingriff: Das kurveninnere Hinterrad wird gezielt gebremst, das erzeugt ein Drehmoment, das das Fahrzeug in die Kurve dreht. Zusätzlich wird das Motormoment reduziert. Merkhilfe: Untersteuern → innen hinten bremsen, Übersteuern → außen vorne bremsen.",
  "src": "FW"
 },
 {
  "id": "86425508f6f4",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort beschreibt zwei Verfahren zur Prüfung der Bremsflüssigkeit und ihre Aussagekraft richtig?",
  "opts": [
   "Siedepunkt-Messgerät: erhitzt eine Probe – nur eine Abschätzung; Wassergehalt-Tester (Leitfähigkeit): genaues Verfahren; Ergebnis mit dem Mindest-Nass-Siedepunkt vergleichen",
   "Siedepunkt-Messgerät: erhitzt eine Probe und misst den Siedepunkt – genau; Wassergehalt-Tester (Leitfähigkeit): nur eine Abschätzung; Ergebnis mit dem Mindest-Nass-Siedepunkt vergleichen",
   "Farbe im Ausgleichsbehälter: dunkel heißt sicher verbraucht, hell sicher in Ordnung – genau; Wassergehalt-Tester: nur eine Abschätzung; Ergebnis mit dem Mindest-Nass-Siedepunkt vergleichen",
   "Siedepunkt-Messgerät: erhitzt eine Probe und misst den Siedepunkt – genau; Füllstand im Ausgleichsbehälter: zeigt den Wasseranteil; Ergebnis mit dem Trocken-Siedepunkt vergleichen"
  ],
  "correct": 1,
  "explain": "Das Siedepunkt-Messgerät erhitzt eine Probe und misst den tatsächlichen Siedepunkt – ein genaues Verfahren. Der Wassergehalt-Tester (z. B. über die Leitfähigkeit) zeigt den Wasseranteil in Prozent – nur eine Abschätzung. Das Messergebnis wird mit dem Mindest-Nass-Siedepunkt bzw. der Herstellervorgabe verglichen. Der Siedepunkt ist die eigentliche Größe, auf die es ankommt. Der Wassergehalt ist nur ein Hinweis darauf.",
  "src": "FW"
 },
 {
  "id": "80ba47ffbf06",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie dem Fehlerbild an der Bremsanlage die wahrscheinlichste Ursache zu.",
  "paare": [
   [
    "Pedal weich und schwammig, Druckpunkt wandert",
    "Luft in der Bremsanlage"
   ],
   [
    "Pedal pulsiert bei normaler Bremsung (ohne ABS-Eingriff)",
    "Seitenschlag oder Dickenunterschied der Bremsscheibe"
   ],
   [
    "Fahrzeug zieht beim Bremsen zu einer Seite",
    "Festsitzender Sattelkolben oder Führung auf einer Seite"
   ],
   [
    "Pedal sinkt bei stehendem Fahrzeug langsam durch",
    "Hauptbremszylinder innen undicht"
   ]
  ],
  "ablenker": [
   "Bremslichtschalter defekt"
  ],
  "explain": "Pulsieren ohne ABS-Eingriff kommt fast immer von der Scheibe. Ein langsam durchsinkendes Pedal ohne sichtbares Leck deutet auf eine innere Undichtheit im Hauptbremszylinder.",
  "src": "FW"
 },
 {
  "id": "afd128532724",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Ordnen Sie im EPB-Schaltplan den Pins des Steuergeräts A1 ihre Aufgabe zu.",
  "paare": [
   [
    "Pin 2",
    "Dauerplus Kl. 30 über F2 für die Endstufe von M2"
   ],
   [
    "Pin 3",
    "Zündungsplus Kl. 15 über F3"
   ],
   [
    "Pin 4",
    "Masse Kl. 31"
   ],
   [
    "Pin 7 und 8",
    "Tasterkontakte „Lösen“"
   ],
   [
    "Pin 14 und 15",
    "CAN-Verbindung zum ESP-Steuergerät"
   ]
  ],
  "ablenker": [
   "Dauerplus Kl. 30 über F3",
   "Signal des Raddrehzahlsensors"
  ],
  "explain": "Die Stellmotoren brauchen viel Strom und hängen deshalb über eigene 30-A-Sicherungen an Kl. 30 (F1 für M1, F2 für M2). Über Kl. 15 (F3) erkennt das Steuergerät „Zündung ein“. Pin 9 ist die gemeinsame Leitung des Tasters, Pins 5/6 melden „Schließen“, 7/8 „Lösen“. Die Raddrehzahlen kommen nicht direkt, sondern über CAN vom ESP.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "2c13889605c5",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Die EPB schließt nur noch hinten links, M2 bleibt stumm. Das Steuergerät meldet „Versorgung Endstufe M2 fehlt“. Welche Sicherung prüfen Sie zuerst?",
  "opts": [
   "F1 (30 A), weil sie über Pin 1 die Endstufe von M2 versorgt",
   "F2 (30 A), weil sie über Pin 2 die Endstufe von M2 versorgt",
   "F3 (5 A), weil ohne Kl. 15 nur der rechte Motor abschaltet",
   "Keine, weil die Stellmotoren ohne Sicherung an Kl. 30 hängen"
  ],
  "correct": 1,
  "explain": "Laut Plan versorgt F2 über Pin 2 die Endstufe (H-Brücke) von M2. Fehlt F3 (Kl. 15), wacht das ganze Steuergerät nicht auf – dann würden beide Motoren nicht arbeiten. F1 gehört zu M1, der ja noch funktioniert.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "257cdace95a5",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Beim Schließen der EPB misst ein Kollege zwischen Messpunkt A (rote Messspitze) und Messpunkt B (schwarze Messspitze) +12,1 V. Welchen Wert erwarten Sie zwischen A und B beim Lösen?",
  "opts": [
   "+12,1 V – die Drehrichtung wird über ein Umschaltgetriebe im Stellmotor gewechselt",
   "0 V – beim Lösen drückt eine Feder den Kolben zurück, der Motor bleibt stromlos",
   "−12,1 V – die H-Brücke im Steuergerät polt den Motor um, damit er rückwärts dreht",
   "+6 V – zum Lösen reicht die halbe Spannung, weil keine Spannkraft gebraucht wird"
  ],
  "correct": 2,
  "explain": "Ein Gleichstrommotor ändert seine Drehrichtung, wenn man die Polarität umkehrt. Das erledigt die H-Brücke (Endstufe) im Steuergerät: Beim Schließen liegt Plus an Pin 10, beim Lösen an Pin 11. Das Messgerät zeigt deshalb beim Lösen ein Minuszeichen. Die Spindel ist selbsthemmend – eine Feder, die den Kolben zurückdrückt, gibt es nicht.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "c060a61bd9c9",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "M1 dreht beim Schließen nicht. Die Messpunkte A und B liegen direkt am Stecker von M1; bei gestecktem Motor messen Sie während der Betätigung 12,0 V. Wo liegt der Fehler?",
  "opts": [
   "Im Taster S1 – ohne gültiges Tastersignal schaltet das Steuergerät die Spannung nicht durch",
   "In der Sicherung F1 – sie ist durchgebrannt und liefert deshalb keinen Strom an die Endstufe",
   "Im Stellmotor M1 selbst (Motor oder Getriebe) – Ansteuerung und Leitungen sind in Ordnung",
   "In der Masseleitung an Pin 4 – ohne gute Masse bleibt immer nur ein Motor stehen"
  ],
  "correct": 2,
  "explain": "Am Motorstecker liegt unter Last die volle Spannung an – Taster, Sicherung, Steuergerät, Leitungen und Masse funktionieren also. Wenn der Motor trotzdem nicht dreht, ist er selbst (Wicklung, Bürsten) oder sein Getriebe defekt. Wäre F1 durchgebrannt oder fehlte das Tastersignal, läge an A und B keine Spannung an.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "e385bb574923",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Warum hat der Taster S1 für „Schließen“ und für „Lösen“ jeweils zwei Kontakte (Pins 5/6 und 7/8)?",
  "opts": [
   "Damit doppelt so viel Strom fließt, wie die beiden Stellmotoren zusammen zum Schließen brauchen",
   "Das Steuergerät vergleicht beide Signale und schaltet nur, wenn sie zusammenpassen – Fehler werden erkannt",
   "Ein Kontakt steuert den linken, der andere den rechten Stellmotor direkt und ohne Umweg über das Steuergerät an",
   "Der zweite Kontakt schaltet nur die Beleuchtung des Tasters bei Nacht ein und wieder aus"
  ],
  "correct": 1,
  "explain": "Die Parkbremse ist sicherheitsrelevant: Ein hängender oder kurzgeschlossener Kontakt darf die Bremse nicht ungewollt lösen oder schließen. Deshalb gibt es je Richtung zwei Kontakte, die das Steuergerät auf Plausibilität prüft. Über den Taster fließt nur ein kleiner Signalstrom – den Motorstrom schaltet die Endstufe im Steuergerät.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "df0d89cdc2a8",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Beim Schließen der EPB messen Sie zwischen Messpunkt D und dem Minuspol der Batterie 1,4 V. Wie beurteilen Sie das?",
  "opts": [
   "In Ordnung – an einer Masseleitung darf unter Last bis etwa zur halben Bordnetzspannung abfallen",
   "Zu hoher Spannungsfall an der Masseverbindung – Massepunkt und Leitung prüfen, reinigen bzw. instand setzen",
   "Die Batterie ist zu schwach – sie muss ersetzt werden, weil an der Masse 1,4 V Spannung fehlen",
   "Die Messung ist ungültig – einen Spannungsfall misst man nur bei ausgeschalteter Zündung ohne Strom"
  ],
  "correct": 1,
  "explain": "Eine gute Masseleitung hat fast keinen Widerstand; unter Last dürfen laut Herstellerangabe nur wenige Zehntel Volt abfallen. 1,4 V zeigen einen Übergangswiderstand (Korrosion, lockere Verschraubung). Den Spannungsfall misst man gerade unter Last – ohne Strom fällt an keinem Widerstand Spannung ab.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "570925b21679",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-epb-schaltplan.svg",
  "q": "Woher bekommt das EPB-Steuergerät A1 die Fahrgeschwindigkeit, die es z. B. für den Anfahrassistenten und die Notbremsfunktion braucht?",
  "opts": [
   "Von eigenen Raddrehzahlsensoren, die in den Stellmotoren M1 und M2 eingebaut sind",
   "Vom Taster S1, der die Geschwindigkeit aus der Dauer der Betätigung berechnet",
   "Über Pin 3 (Kl. 15), auf dem eine geschwindigkeitsabhängige Spannung liegt",
   "Über CAN (Pins 14/15) vom ESP-Steuergerät, das die Raddrehzahlen auswertet"
  ],
  "correct": 3,
  "explain": "Die Raddrehzahlsensoren sind am ESP-Steuergerät angeschlossen. Es berechnet daraus die Geschwindigkeit und schickt sie über den CAN-Bus an andere Steuergeräte, auch an die EPB. Kl. 15 meldet nur „Zündung ein“.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "f215d3cb2ce1",
  "cat": "Bremse",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Das ESP bremst beim Übersteuern in einer Rechtskurve gezielt das Rad vorn links, ohne dass der Fahrer bremst. Ordnen Sie den Bauteilen ihren Zustand zu.",
  "paare": [
   [
    "② Umschaltventil",
    "geschlossen (bestromt)"
   ],
   [
    "③ Ansaugventil",
    "offen (bestromt)"
   ],
   [
    "④ Rückförderpumpe",
    "läuft und fördert"
   ],
   [
    "⑥ Einlassventil VL",
    "offen (stromlos)"
   ],
   [
    "⑧ Einlassventil HR",
    "geschlossen (bestromt)"
   ]
  ],
  "ablenker": [
   "steht still"
  ],
  "explain": "In der Rechtskurve ist vorn links das kurvenäußere Vorderrad. Das Umschaltventil ② trennt den Kreis vom Hauptbremszylinder, damit der Druck nicht zurückfließt. Über das offene Ansaugventil ③ saugt die Pumpe ④ Flüssigkeit aus dem HBZ und drückt sie über das offene Einlassventil ⑥ in die Radbremse. Das Einlassventil ⑧ wird geschlossen, damit hinten rechts nicht mitgebremst wird.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "779980ea2d33",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Bei einer Vollbremsung neigt das Rad vorn links zum Blockieren, das ABS baut dort Druck ab. Welche Bauteile werden dabei angesteuert?",
  "opts": [
   "Nur ⑦ wird bestromt (offen), ⑥ bleibt offen; die Pumpe ④ steht still, damit kein Druck entsteht",
   "⑥ und ⑦ werden bestromt (⑥ zu, ⑦ offen), die Pumpe ④ läuft; ② und ③ bleiben stromlos",
   "② und ③ werden bestromt, die Pumpe ④ läuft; ⑥ und ⑦ bleiben in ihrer stromlosen Stellung",
   "⑥ wird bestromt (zu), ⑦ bleibt zu; die Pumpe ④ fördert die Flüssigkeit in den Speicher ⑤"
  ],
  "correct": 1,
  "explain": "Druckabbau: Das Einlassventil ⑥ schließt (kein weiterer Druck vom HBZ), das Auslassventil ⑦ öffnet, Flüssigkeit fließt in den Speicher ⑤. Die Pumpe ④ fördert sie über das offene Umschaltventil ② zurück zum Hauptbremszylinder – das spürt der Fahrer als Pulsieren im Pedal. ② und ③ werden nur für aktiven Druckaufbau (ESP, ASR) angesteuert.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "9b40d22613d2",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Welche Stellung haben die Ventile ⑥ und ⑦ in der ABS-Phase „Druck halten“ am Rad vorn links?",
  "opts": [
   "⑥ stromlos und offen, ⑦ stromlos und geschlossen",
   "⑥ bestromt und geschlossen, ⑦ bestromt und offen",
   "⑥ bestromt und geschlossen, ⑦ stromlos und geschlossen",
   "⑥ stromlos und offen, ⑦ bestromt und offen"
  ],
  "correct": 2,
  "explain": "Zum Halten werden beide Wege zugemacht: Das stromlos offene Einlassventil ⑥ muss dafür bestromt werden, das stromlos geschlossene Auslassventil ⑦ bleibt einfach stromlos. Antwort 1 ist die Grundstellung (Druck aufbauen), Antwort 2 der Druckabbau.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "9cce26ffe760",
  "cat": "Bremse",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Ordnen Sie den Ventilen im Bild ihre Grundstellung ohne Strom zu.",
  "paare": [
   [
    "② Umschaltventil",
    "stromlos offen"
   ],
   [
    "③ Ansaugventil",
    "stromlos geschlossen"
   ],
   [
    "⑥ Einlassventil VL",
    "stromlos offen"
   ],
   [
    "⑦ Auslassventil VL",
    "stromlos geschlossen"
   ],
   [
    "⑧ Einlassventil HR",
    "stromlos offen"
   ],
   [
    "⑨ Auslassventil HR",
    "stromlos geschlossen"
   ]
  ],
  "explain": "Die Grundstellung ist so gewählt, dass die Anlage ohne Strom ganz normal bremst: Vom Hauptbremszylinder führt ein offener Weg über ② und die Einlassventile zu den Radbremsen. Alle Wege, die Druck abbauen (Auslassventile) oder die Pumpe mit dem HBZ verbinden (Ansaugventil), sind stromlos zu. Fällt das Steuergerät aus, bleibt so die Grundbremse erhalten.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "2257d42accd9",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Ein Span hält das Einlassventil ⑥ dauerhaft geschlossen. Wie wirkt sich das beim normalen Bremsen aus?",
  "opts": [
   "Das Rad vorn links bremst dauernd mit, weil der Druck dort nicht mehr abgebaut werden kann",
   "Der ganze Bremskreis fällt aus, auch das Rad hinten rechts bekommt keinen Druck mehr",
   "Keine Auswirkung, weil der Druck dann über das Auslassventil ⑦ zur Radbremse gelangt",
   "Das Rad vorn links bremst nicht – das Fahrzeug zieht beim Bremsen nach rechts"
  ],
  "correct": 3,
  "explain": "Über ⑥ kommt der Druck vom Hauptbremszylinder zur Radbremse vorn links. Ist es zu, bleibt diese Radbremse drucklos. Das Rad hinten rechts wird über ⑧ weiter versorgt. Weil vorn rechts (anderer Kreis) normal bremst, zieht das Fahrzeug nach rechts. ⑦ führt nur zum Speicher, nicht vom HBZ zur Radbremse.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "4f043a60aad9",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-esp-hydraulik.svg",
  "q": "Wozu dient der Drucksensor ⑫ im Bild?",
  "opts": [
   "Er misst den Druck in der Radbremse vorn links, damit das Steuergerät die Belagdicke berechnen kann",
   "Er misst den Vordruck, den der Fahrer im Hauptbremszylinder erzeugt – also den Bremswunsch",
   "Er misst den Druck im Niederdruckspeicher und schaltet die Pumpe ab, sobald der Speicher voll ist",
   "Er misst den Unterdruck im Bremskraftverstärker und warnt bei zu wenig Unterdruck vom Motor"
  ],
  "correct": 1,
  "explain": "Der Drucksensor sitzt am Ausgang des Hauptbremszylinders und zeigt, wie stark der Fahrer bremst. Das ESP braucht diesen Wert, um bei einem Eingriff den Fahrerwunsch zu berücksichtigen, und der Bremsassistent erkennt daran eine Notbremsung (schneller Druckanstieg).",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "eaf1c2ffd0e9",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Messung 3 stammt von einem passiven Sensor. Wie groß sind Scheitelwert (Spitze gegen Null-Linie) und Frequenz?",
  "opts": [
   "4 V und 250 Hz",
   "2 V und 500 Hz",
   "2 V und 0,25 Hz",
   "2 V und 250 Hz"
  ],
  "correct": 3,
  "formel": "Û = Kästchen von der Null-Linie bis zur Spitze · V je Kästchen\nf = 1 / T   (T = eine volle Schwingung in s)",
  "explain": "Die Sinuskurve reicht 2 Kästchen über und unter die Null-Linie: Scheitelwert 2 × 1 V = 2 V (Spitze-Spitze wären 4 V). Eine volle Schwingung dauert 4 Kästchen = 4 ms, also f = 1 ÷ 0,004 s = 250 Hz. Wer nur bis zum nächsten Nulldurchgang zählt, liest die halbe Periode ab und kommt auf 500 Hz.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "fa3ef79491e5",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Wie ändert sich das Signal von Messung 3, wenn sich das Rad doppelt so schnell dreht?",
  "opts": [
   "Nur die Frequenz verdoppelt sich, die Amplitude bleibt gleich – genau wie beim aktiven Sensor",
   "Nur die Amplitude wird doppelt so groß, die Frequenz bleibt gleich, weil die Zähnezahl gleich bleibt",
   "Die Frequenz verdoppelt sich, und die Amplitude wird größer, weil sich das Magnetfeld schneller ändert",
   "Beides bleibt gleich, nur die Null-Linie verschiebt sich nach oben, weil die Spule wärmer wird"
  ],
  "correct": 2,
  "explain": "Beim induktiven Sensor hängt die erzeugte Spannung davon ab, wie schnell sich das Magnetfeld in der Spule ändert. Dreht das Zahnrad schneller, kommen die Zähne öfter (höhere Frequenz) und das Feld ändert sich rascher (höhere Spannung). Deshalb liefert ein passiver Sensor bei sehr kleiner Drehzahl kein auswertbares Signal.",
  "src": "FW"
 },
 {
  "id": "155b7f0c5cec",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Woran erkennen Sie, dass Messung 1 von einem aktiven und Messung 3 von einem passiven Sensor stammt?",
  "opts": [
   "Messung 1 hat die höhere Frequenz, weil aktive Sensoren grundsätzlich schneller arbeiten als passive",
   "Messung 1: Rechteck mit zwei festen Strompegeln; Messung 3: Sinus-Wechselspannung um die Null-Linie",
   "Messung 1: Sinus mit steigender Amplitude; Messung 3: Rechtecksignal mit zwei festen Pegeln",
   "Messung 3 hat negative Werte, weil der passive Sensor falsch herum angeschlossen wurde"
  ],
  "correct": 1,
  "explain": "Der aktive Sensor schaltet zwischen zwei festen Pegeln (hier 7 und 14 mA) – das gibt ein Rechteck. Der passive Sensor erzeugt selbst eine Wechselspannung, die abwechselnd positiv und negativ ist. Die Frequenz hängt von Drehzahl und Zähne- bzw. Polzahl ab, nicht von der Sensorart.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "73bbbb0b4ff6",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "bremse-oszi-raddrehzahl.svg",
  "q": "Wie groß ist bei Messung 1 das Tastverhältnis (Anteil des oberen Pegels an einer Periode)?",
  "opts": [
   "25 %",
   "50 %",
   "75 %",
   "100 %"
  ],
  "correct": 1,
  "formel": "Tastverhältnis = t_i / T · 100 %\nt_i = Impulsdauer (Einschaltzeit), T = Periodendauer (Flanke bis zur nächsten gleichen Flanke)",
  "explain": "Der obere Pegel (14 mA) dauert 1 Kästchen = 1 ms, eine ganze Periode 2 ms. Tastverhältnis = 1 ms ÷ 2 ms × 100 % = 50 %. Beim Raddrehzahlsensor steckt die Information in der Frequenz, das Tastverhältnis ist ungefähr gleich.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "c960e8551e1a",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie hält die Funktion Auto-Hold das Fahrzeug nach dem Anhalten, und wann übernimmt die elektrische Parkbremse?",
  "opts": [
   "Die EPB-Stellmotoren schließen bei jedem Halt sofort; das ESP greift nur ein, wenn die Batteriespannung sinkt",
   "Das ESP hält den Druck mit geschlossenen Ventilen; je nach Hersteller übergibt es z. B. bei längerem Halt oder Motor aus an die EPB",
   "Der Bremskraftverstärker hält das Pedal über eine Klinke mechanisch fest, bis der Fahrer Gas gibt; die EPB übernimmt dabei nie",
   "Das ESP hält den Druck mit dauernd laufender Pumpe, auch nach dem Abstellen des Motors über viele Stunden"
  ],
  "correct": 1,
  "explain": "Auto-Hold ist eine gemeinsame Funktion von ESP und EPB: Zuerst sperrt das ESP-Hydroaggregat den Druck in den Radbremsen ein (Ventile zu). Weil das nicht beliebig lange geht, übergibt es je nach Hersteller z. B. bei längerem Stillstand, ausgeschaltetem Motor oder geöffneter Fahrertür an die EPB, die mechanisch hält. Beim Gasgeben löst das System selbsttätig.",
  "src": "Netz: FISITA-Paper, leasingmarkt.de (Recherche ausbau-bremse)"
 },
 {
  "id": "38a7fbba1c13",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Während der Fahrt zieht der Fahrer dauerhaft am EPB-Taster, das ESP ist aber wegen eines Fehlers abgeschaltet. Wie bremst das Fahrzeug bei vielen Systemen?",
  "opts": [
   "Die Stellmotoren schließen sofort mit voller Kraft und halten die Hinterräder blockiert, bis das Fahrzeug steht",
   "Gar nicht – ohne ESP ist die elektrische Parkbremse während der Fahrt völlig ohne Funktion",
   "Das EPB-Steuergerät bremst über die Vorderräder, indem es den Bremskraftverstärker elektrisch ansteuert",
   "Die Stellmotoren hinten schließen und lösen im Wechsel, damit die Hinterräder nicht blockieren"
  ],
  "correct": 3,
  "explain": "Normalerweise bremst bei der dynamischen Notbremsung das ESP-Hydroaggregat an allen Rädern. Steht das ESP nicht zur Verfügung, bremsen viele Systeme als Rückfallebene nur mit den Stellmotoren hinten – und zwar in Intervallen, damit die Hinterräder nicht blockieren und das Heck nicht ausbricht. Das genaue Verhalten ist herstellerabhängig.",
  "src": "Netz: auto-motor-und-sport.de, FISITA-Paper (Recherche ausbau-bremse)"
 },
 {
  "id": "fe1014822fdf",
  "cat": "Bremse",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den ESP-Sensoren ihren üblichen Einbauort zu.",
  "paare": [
   [
    "Lenkwinkelsensor",
    "An der Lenksäule unter dem Lenkrad"
   ],
   [
    "Gierraten- und Querbeschleunigungssensor",
    "Nahe am Schwerpunkt, oft im Steuergerät integriert"
   ],
   [
    "Raddrehzahlsensor",
    "Am Achsschenkel bzw. Radlager"
   ],
   [
    "Bremsdrucksensor",
    "Am Hauptbremszylinder oder im Hydroaggregat"
   ]
  ],
  "ablenker": [
   "Im Ansaugrohr des Motors"
  ],
  "explain": "Gierrate und Querbeschleunigung sollen die Bewegung des ganzen Fahrzeugs messen – deshalb möglichst nahe am Schwerpunkt, bei neueren Systemen direkt im ESP-Steuergerät. Der Lenkwinkelsensor erfasst die Drehung der Lenksäule, der Raddrehzahlsensor tastet den Impuls- bzw. Magnetring am Rad ab.",
  "src": "FW"
 },
 {
  "id": "73f470cca1d2",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach dem Tausch des Gierratensensors leuchtet die ESP-Leuchte weiter, im Fehlerspeicher steht „Grundeinstellung fehlt“. Was ist zu tun?",
  "opts": [
   "Die Bremsanlage entlüften, weil beim Sensortausch Luft in das Hydroaggregat gelangt ist",
   "Den Nullabgleich mit dem Tester durchführen, Fahrzeug steht still auf ebener Fläche",
   "Die Bremsflüssigkeit wechseln, weil der neue Sensor mit der alten Flüssigkeit falsch misst",
   "Den Luftspalt aller vier Raddrehzahlsensoren messen und mit Beilagscheiben einstellen"
  ],
  "correct": 1,
  "explain": "Ein neuer Gierraten- bzw. Querbeschleunigungssensor muss dem Steuergerät seine Nulllage mitteilen. Dafür startet man mit dem Tester den Nullabgleich – das Fahrzeug muss stillstehen und waagerecht stehen, sonst lernt das System eine Schräglage als „null“. Die Hydraulik wird beim Sensortausch nicht geöffnet.",
  "src": "FW, Netz: kfz-dietrich.com"
 },
 {
  "id": "09795ad1d44e",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei Geradeausfahrt auf ebener Straße steht das Lenkrad gerade, der Messwertblock zeigt aber einen Lenkwinkel von +14°. Was ist zu tun?",
  "opts": [
   "Das Lenkrad auf der Lenksäule versetzen, bis der Messwertblock bei Geradeausfahrt 0° zeigt",
   "Nichts – Abweichungen bis etwa 20° gleicht das ESP-Steuergerät während der Fahrt selbst aus",
   "Den Gierratensensor ersetzen, weil er den Lenkwinkel falsch an das Steuergerät weitergibt",
   "Die Grundeinstellung des Lenkwinkelsensors bei geradeaus stehenden Rädern mit dem Tester ausführen"
  ],
  "correct": 3,
  "explain": "Steht das Lenkrad gerade und das Fahrzeug fährt geradeaus, muss der Sensor 0° melden. +14° heißt: Die Nulllage ist falsch, z. B. nach Achsvermessung oder Arbeiten an der Lenkung. Mit dem Tester wird die Nulllage neu gelernt. Das Lenkrad zu versetzen wäre falsch – dann stünde es bei Geradeausfahrt schief.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "afcca053e3ee",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Bremsscheibe vorn links misst an der dünnsten Stelle 20,6 mm, die Mindestdicke laut Hersteller ist 21,0 mm. Was ist zu tun?",
  "opts": [
   "Nur die linke Scheibe erneuern, weil die rechte noch über der Mindestdicke liegt",
   "Die Scheibe abdrehen lassen, damit die Oberfläche wieder plan und sauber ist",
   "Beide Bremsscheiben und die Beläge der Vorderachse gemeinsam erneuern",
   "Nichts – die Mindestdicke wird erst bei der nächsten Hauptuntersuchung geprüft"
  ],
  "correct": 2,
  "explain": "Unter der Mindestdicke kann die Scheibe die Wärme nicht mehr sicher aufnehmen und kann reißen. Erneuert wird immer achsweise, damit beide Seiten gleich bremsen; neue Scheiben bekommen neue Beläge. Abdrehen macht die Scheibe noch dünner – hier unzulässig.",
  "src": "FW"
 },
 {
  "id": "6994437ca7bb",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "An einer neuen, auf dem Fahrzeug montierten Bremsscheibe messen Sie mit der Messuhr einen Seitenschlag über dem Herstellerwert. Was ist die wahrscheinlichste Ursache, und was tun Sie zuerst?",
  "opts": [
   "Die neue Scheibe ist sicher fehlerhaft – sofort beim Lieferanten reklamieren, ohne die Nabe anzusehen",
   "Rost oder Schmutz zwischen Nabe und Scheibe – Anlageflächen reinigen, Scheibe neu montieren, erneut messen",
   "Der Seitenschlag ist bei neuen Scheiben normal und verschwindet beim Einbremsen nach wenigen Kilometern",
   "Die Bremsbeläge drücken die Scheibe schief – Beläge ausbauen und den Seitenschlag ohne Sattel messen"
  ],
  "correct": 1,
  "explain": "Schon ein kleiner Rostkrümel auf der Nabe kippt die Scheibe und erzeugt außen einen großen Ausschlag. Deshalb Nabe und Scheibe an der Anlagefläche blank reinigen und neu messen (Scheibe mit Radschrauben bzw. Distanzstücken fixiert). Erst wenn der Wert dann noch zu hoch ist, Nabe bzw. Radlager oder die Scheibe selbst prüfen. Seitenschlag führt später zu Dickenunterschieden und Pedalpulsieren.",
  "src": "FW"
 },
 {
  "id": "0006cc824c18",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum werden Bremsscheiben und Bremsbeläge immer achsweise (links und rechts zusammen) erneuert?",
  "opts": [
   "Weil die Hersteller die Teile nur im Doppelpack liefern; technisch wäre ein einzelner Tausch gleichwertig",
   "Damit beide Seiten gleich stark bremsen und das Fahrzeug beim Bremsen nicht zu einer Seite zieht",
   "Damit die Raddrehzahlsensoren links und rechts wieder genau das gleiche Signal an das ESP liefern",
   "Weil sonst die Bremsflüssigkeit auf der Seite mit den alten Teilen schneller altert und Wasser zieht"
  ],
  "correct": 1,
  "explain": "Neue und alte Beläge bzw. Scheiben haben unterschiedliche Reibwerte und Dicken. Ein Tausch nur auf einer Seite führt zu ungleichen Bremskräften – das Fahrzeug zieht schief, bei der HU fällt die Ungleichmäßigkeit auf dem Prüfstand auf.",
  "src": "FW"
 },
 {
  "id": "f7655df7d6bc",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welchen Hinweis geben Sie dem Kunden nach dem Einbau neuer Bremsscheiben und -beläge?",
  "opts": [
   "Neue Beläge haben sofort die volle Wirkung; Einbremsen ist nur bei Rennfahrzeugen nötig",
   "Die ersten 100 km möglichst nur mit der Parkbremse verzögern, damit sich die Beläge vorn setzen",
   "Nach etwa 500 km die Bremsflüssigkeit wechseln lassen, weil sie durch den Abrieb verschmutzt",
   "Beläge nach Herstellerangabe einbremsen, in den ersten Kilometern vorausschauend bremsen"
  ],
  "correct": 3,
  "explain": "Beläge und Scheiben müssen sich erst aneinander anpassen; bis dahin ist die Bremswirkung geringer. Deshalb nach Herstellerangabe einbremsen und den Kunden darauf hinweisen. Mit der Parkbremse zu verzögern wäre gefährlich und bringt den Vorderradbremsen nichts.",
  "src": "FW"
 },
 {
  "id": "dbe5cc3847f0",
  "cat": "Bremse",
  "level": 3,
  "typ": "reihenfolge",
  "pkt": 5,
  "q": "Beim Tausch des Hydroaggregats ist Luft in die Ventile gelangt. Bringen Sie die Schritte zum Entlüften mit Entlüftungsgerät und Tester in die richtige Reihenfolge.",
  "schritte": [
   "Befüll- und Entlüftungsgerät anschließen und mit vorgeschriebenem Druck einschalten",
   "Radbremsen in der Reihenfolge laut Hersteller entlüften (Grundentlüftung)",
   "Tester anschließen und die Entlüftungsroutine des Hydroaggregats starten",
   "Während der Routine die vom Tester angezeigten Entlüfterventile öffnen und schließen",
   "Radbremsen nochmals entlüften, bis die Flüssigkeit blasenfrei austritt",
   "Gerät abbauen, Füllstand einstellen, Pedal prüfen, Probefahrt mit ABS-Regelung"
  ],
  "explain": "Erst wird die Anlage normal gefüllt und entlüftet. Dann steuert der Tester Ventile und Rückförderpumpe an, damit auch die Kammern im Aggregat durchgespült werden, die beim normalen Bremsen keine Flüssigkeit sehen. Danach nochmals an den Rädern entlüften, weil die Routine Luft in die Radkreise schiebt.",
  "src": "FW"
 },
 {
  "id": "85d567d123b9",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Bei der Sichtprüfung finden Sie an einem Bremsschlauch Risse, und er wölbt sich beim Bremsen auf. Was tun Sie?",
  "opts": [
   "Den Schlauch erneuern, danach die Anlage entlüften und die Dichtheit prüfen",
   "Den Schlauch bis zur nächsten Inspektion lassen, weil das Gewebe innen noch hält",
   "Den Schlauch mit Silikonspray pflegen, damit der Gummi wieder geschmeidig wird",
   "Den Schlauch mit Gewebeband umwickeln, damit er sich nicht weiter aufwölben kann"
  ],
  "correct": 0,
  "explain": "Ein Schlauch, der sich aufwölbt, hat eine beschädigte Gewebeeinlage und kann platzen – die Bremse des Kreises fiele aus. Er wird sofort erneuert; weil dabei die Hydraulik geöffnet wird, muss anschließend entlüftet werden.",
  "src": "FW"
 },
 {
  "id": "f32548d7aa69",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ein Pkw fährt 100 km/h. Die Reaktionszeit beträgt 1 s, die mittlere Bremsverzögerung 8 m/s². Wie lang ist der Anhalteweg?",
  "opts": [
   "48,2 m",
   "76,0 m",
   "124,2 m",
   "652,8 m"
  ],
  "correct": 1,
  "formel": "v in m/s = v in km/h / 3,6\nReaktionsweg s_R = v · t_R\nBremsweg s_B = v² / (2 · a)\nAnhalteweg s = s_R + s_B",
  "explain": "v = 100 km/h ÷ 3,6 = 27,8 m/s. Reaktionsweg = v × t = 27,8 m. Bremsweg = v² ÷ (2 × a) = 771,6 ÷ 16 ≈ 48,2 m. Anhalteweg = 27,8 m + 48,2 m = 76,0 m. Typische Fehler: nur den Bremsweg angeben (48,2 m), die 2 im Nenner vergessen (124,2 m) oder km/h nicht umrechnen (652,8 m).",
  "src": "FW"
 },
 {
  "id": "9267d0293ba8",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Fahrzeug kommt aus 50 km/h auf 12 m Bremsweg zum Stehen. Wie groß war die mittlere Verzögerung?",
  "opts": [
   "1,2 m/s²",
   "16,1 m/s²",
   "8,0 m/s²",
   "104,2 m/s²"
  ],
  "correct": 2,
  "formel": "s_B = v² / (2 · a)   →   a = v² / (2 · s_B)\nv in m/s = v in km/h / 3,6",
  "explain": "v = 50 km/h ÷ 3,6 = 13,9 m/s. a = v² ÷ (2 × s) = 192,9 ÷ 24 ≈ 8,0 m/s². Typische Fehler: die 2 vergessen (16,1 m/s²), km/h nicht umrechnen (104,2 m/s²) oder v ÷ s rechnen (1,2).",
  "src": "FW"
 },
 {
  "id": "95fc6bc326b1",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein passiver Raddrehzahlsensor tastet ein Zahnrad mit 43 Zähnen ab. Das Rad dreht mit 600 1/min. Welche Frequenz hat das Sensorsignal?",
  "opts": [
   "10 Hz",
   "430 Hz",
   "25.800 Hz",
   "14 Hz"
  ],
  "correct": 1,
  "formel": "f = z · n / 60   →   n = f · 60 / z\nf in Hz, n in 1/min, z = Zähnezahl bzw. Polpaarzahl",
  "explain": "f = z × n ÷ 60 = 43 × 600 1/min ÷ 60 s/min = 430 Hz. Typische Fehler: Minuten nicht in Sekunden umrechnen (25.800), die Zähnezahl vergessen (10 Hz) oder Drehzahl durch Zähnezahl teilen (≈ 14).",
  "src": "FW"
 },
 {
  "id": "d04e4c9bebe7",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ein Faustsattel drückt die Beläge mit einer Spannkraft von je 8000 N an die Scheibe. Reibwert μ = 0,4, wirksamer Reibradius 120 mm. Wie groß ist das Bremsmoment an der Scheibe?",
  "opts": [
   "384 Nm",
   "1.920 Nm",
   "768.000 Nm",
   "768 Nm"
  ],
  "correct": 3,
  "formel": "F_R = μ · F_{Sp}   (je Belag; Scheibenbremse: 2 Beläge)\nM_{Br} = F_R · r   (r = wirksamer Reibradius in m)",
  "explain": "Beide Beläge reiben: F_R = 2 × μ × F_Sp = 2 × 0,4 × 8000 N = 6400 N. M = F_R × r = 6400 N × 0,12 m = 768 Nm. Typische Fehler: nur einen Belag rechnen (384 Nm), μ vergessen (1.920 Nm) oder mm nicht in m umrechnen (768.000).",
  "src": "FW"
 },
 {
  "id": "2f439faf73d9",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wann muss die Bremsflüssigkeit gewechselt werden?",
  "opts": [
   "Nie – im geschlossenen System altert sie nicht und nimmt kein Wasser auf",
   "Nur dann, wenn der Füllstand im Ausgleichsbehälter unter MIN gefallen ist",
   "Nach Herstellervorschrift, bei vielen Pkw alle zwei Jahre, auch ohne Auffälligkeit",
   "Bei jedem Motorölwechsel, weil beide Flüssigkeiten gleich schnell altern"
  ],
  "correct": 2,
  "explain": "Bremsflüssigkeit nimmt auch im geschlossenen System über Schläuche und die Belüftung des Behälters Wasser auf; der Siedepunkt sinkt. Deshalb gibt der Hersteller ein Zeitintervall vor, häufig zwei Jahre. Ein niedriger Füllstand deutet auf Belagverschleiß oder ein Leck hin, nicht auf gealterte Flüssigkeit.",
  "src": "TB Bremsflüssigkeit, FW"
 },
 {
  "id": "8f63dd722a7b",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "tb": true,
  "q": "Warum wird bei Fahrzeugen mit ABS/ESP oft DOT 5.1 statt DOT 4 empfohlen? Vergleichen Sie die Werte im Tabellenbuch.",
  "opts": [
   "DOT 5.1 ist auf Silikonbasis und nimmt deshalb überhaupt kein Wasser aus der Luft auf",
   "DOT 5.1 hat einen niedrigeren Siedepunkt, damit das ESP den Druck schneller abbauen kann",
   "DOT 5.1 ist bei Kälte deutlich dünnflüssiger und strömt schneller durch die Ventile",
   "DOT 5.1 altert nicht und muss deshalb während der Lebensdauer nie gewechselt werden"
  ],
  "correct": 2,
  "explain": "Laut Tabellenbuch hat DOT 5.1 bei −40 °C eine deutlich kleinere Viskosität als DOT 4 und dazu höhere Siedepunkte. Dünnflüssige Bremsflüssigkeit lässt die schnellen Ventil- und Pumpenzyklen im Hydroaggregat auch im Winter zu. DOT 5.1 ist eine Glykolflüssigkeit – Silikon ist DOT 5.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "574f0fc9f490",
  "cat": "Bremse",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Bauteilen der elektrischen Parkbremse (Motor-on-Caliper) ihre Aufgabe zu.",
  "paare": [
   [
    "EPB-Taster",
    "Meldet den Fahrerwunsch Schließen oder Lösen"
   ],
   [
    "EPB-Steuergerät",
    "Wertet Signale aus und steuert die Stellmotoren mit Polwendung an"
   ],
   [
    "Stellmotor",
    "Erzeugt die Drehbewegung"
   ],
   [
    "Getriebe und Spindel",
    "Wandeln die Drehung in die Längsbewegung des Kolbens und halten ihn fest"
   ]
  ],
  "ablenker": [
   "Erzeugt den hydraulischen Druck im Hauptbremszylinder"
  ],
  "explain": "Der kleine Elektromotor dreht schnell, das Getriebe untersetzt und die Spindel schiebt den Kolben mit großer Kraft gegen die Beläge. Die Spindel ist selbsthemmend – die Bremse bleibt auch ohne Strom geschlossen. Deshalb braucht man zum Zurückdrehen den Servicemodus.",
  "src": "FW, Recherche 3.2"
 },
 {
  "id": "595d0b295909",
  "cat": "Bremse",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Kontrollleuchten ihre Bedeutung zu.",
  "paare": [
   [
    "Gelbe ABS-Leuchte leuchtet dauernd",
    "ABS abgeschaltet, Grundbremse wirkt weiter"
   ],
   [
    "ESP-Leuchte blinkt kurz während der Fahrt",
    "ESP bzw. ASR regelt gerade"
   ],
   [
    "ESP-Leuchte leuchtet dauernd",
    "ESP gestört oder abgeschaltet"
   ],
   [
    "Rote Bremswarnleuchte zusammen mit ABS-Leuchte",
    "Auch die Bremskraftverteilung ist gestört – nicht weiterfahren"
   ],
   [
    "Rote EPB-Leuchte im Stand",
    "Parkbremse ist geschlossen"
   ]
  ],
  "ablenker": [
   "Neue Bremsbeläge wurden eingebaut"
  ],
  "explain": "Gelb heißt: Funktion eingeschränkt, vorsichtig weiterfahren und bald in die Werkstatt. Rot heißt: Sicherheit nicht gewährleistet bzw. Hinweis auf einen Zustand. Die rote Bremswarnleuchte allein kann auch einen zu niedrigen Flüssigkeitsstand melden. Blinkt die ESP-Leuchte, arbeitet das System gerade – das ist kein Fehler.",
  "src": "FW"
 },
 {
  "id": "180b5f4e579c",
  "cat": "Bremse",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie der Fahrsituation den passenden Eingriff von ABS, ASR bzw. ESP zu.",
  "paare": [
   [
    "Übersteuern in einer Linkskurve",
    "Rad vorn rechts gezielt bremsen"
   ],
   [
    "Untersteuern in einer Linkskurve",
    "Rad hinten links gezielt bremsen"
   ],
   [
    "Linkes Antriebsrad dreht beim Anfahren auf Eis durch",
    "Linkes Antriebsrad bremsen, Motormoment senken"
   ],
   [
    "Ein Vorderrad blockiert bei einer Vollbremsung",
    "Druck an diesem Rad halten bzw. abbauen"
   ]
  ],
  "ablenker": [
   "Alle vier Räder gleich stark bremsen"
  ],
  "explain": "Übersteuern: kurvenäußeres Vorderrad bremsen (Linkskurve → rechts vorn), das dreht das Fahrzeug zurück. Untersteuern: kurveninneres Hinterrad bremsen (Linkskurve → links hinten), das dreht es in die Kurve. ASR bremst das durchdrehende Rad und nimmt Motormoment weg, ABS regelt den Druck am blockierenden Rad.",
  "src": "FW"
 },
 {
  "id": "15a708a8870a",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie arbeitet die elektronische Bremskraftverteilung (EBV) in einem Fahrzeug mit ABS?",
  "opts": [
   "Sie verteilt die Bremskraft über einen mechanischen Druckminderer, der je nach Beladung umschaltet",
   "Sie vergleicht den Schlupf vorn und hinten und begrenzt über die Einlassventile den Druck hinten",
   "Sie erhöht beim Bremsen den Druck an den Hinterrädern, damit die Vorderachse entlastet wird",
   "Sie arbeitet nur bei ESP-Eingriffen und hat beim normalen Bremsen überhaupt keine Aufgabe"
  ],
  "correct": 1,
  "explain": "Beim Bremsen verlagert sich Gewicht nach vorn, die Hinterräder neigen früher zum Blockieren. Die EBV erkennt das an den Raddrehzahlen (Schlupf hinten größer als vorn) und hält den Druck hinten über die Einlassventile, bevor das ABS eingreifen müsste. Sie ersetzt den früheren mechanischen Bremskraftregler.",
  "src": "FW"
 },
 {
  "id": "b86949d12fd6",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie prüfen Sie in der Werkstatt einfach, ob der Unterdruck-Bremskraftverstärker arbeitet?",
  "opts": [
   "Motor laufen lassen und Pedal einmal treten – wird es dabei härter, ist der Verstärker in Ordnung",
   "Motor aus, Pedal mehrmals treten, Pedal halten und Motor starten – das Pedal gibt dann etwas nach",
   "Motor aus, Unterdruckschlauch abziehen und darauf hören, ob am Anschluss Luft angesaugt wird",
   "Bremsflüssigkeit absaugen und prüfen, ob das Pedal danach leichter oder schwerer zu treten ist"
  ],
  "correct": 1,
  "explain": "Durch mehrmaliges Treten bei stehendem Motor wird der Restunterdruck abgebaut, das Pedal wird hart. Startet man nun den Motor, entsteht Unterdruck, der Verstärker hilft mit – das Pedal sinkt spürbar etwas nach. Bleibt es hart, Unterdruckversorgung (Schlauch, Rückschlagventil, Vakuumpumpe) und Verstärker prüfen.",
  "src": "FW"
 },
 {
  "id": "4b76d1423951",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Bei stark abgefahrenen Belägen steht der Bremsflüssigkeitsstand kurz über MIN, die Anlage ist dicht. Was tun Sie?",
  "opts": [
   "Sofort bis MAX auffüllen, damit beim Belagwechsel genug Reserve im Ausgleichsbehälter ist",
   "Alle Leitungen erneuern, weil der Stand ohne Leck nie sinkt und die Anlage undicht sein muss",
   "Den Behälter absaugen, weil ein niedriger Stand immer einen zu hohen Wasseranteil bedeutet",
   "Nicht auffüllen – beim Zurückdrücken der Kolben für die neuen Beläge steigt der Stand wieder"
  ],
  "correct": 3,
  "explain": "Mit dem Belagverschleiß wandern die Kolben nach außen, in den Sätteln steht mehr Flüssigkeit – der Stand im Behälter sinkt, ohne dass etwas verloren geht. Werden für neue Beläge die Kolben zurückgedrückt, fließt die Flüssigkeit zurück. Wer vorher bis MAX auffüllt, bekommt einen überlaufenden Behälter (Lackschäden).",
  "src": "FW"
 },
 {
  "id": "59263947509b",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 1,
  "q": "Welche Art der Gemischbildung hat dieser Motor und was ist ihr wichtigstes Merkmal?",
  "opts": [
   "Common-Rail-Direkteinspritzung; der Einspritzdruck wird für jede Einspritzung erst im Injektor durch einen eigenen Nocken der Nockenwelle erzeugt (wie bei Pumpe-Düse)",
   "Common-Rail-Direkteinspritzung; Druckerzeugung (Hochdruckpumpe) und Einspritzung (Injektoren) sind getrennt, der Druck steht im Rail ständig bereit",
   "Indirekte Einspritzung in eine Vorkammer; Druckerzeugung und Einspritzung sind getrennt, der Druck steht im Rail ständig bereit",
   "Saugrohreinspritzung mit Hochdruck; die Pumpe fördert nur während der Einspritzung, das Rail verteilt den Kraftstoff drucklos"
  ],
  "correct": 1,
  "explain": "Common-Rail-Direkteinspritzung (Speichereinspritzung): Der Kraftstoff wird direkt in den Brennraum gespritzt. Druckerzeugung (Hochdruckpumpe) und Einspritzung (Injektoren) sind voneinander getrennt – der Druck steht im Rail ständig bereit. Weil das Rail den Hochdruck speichert, kann das Steuergerät Zeitpunkt, Menge und Anzahl der Einspritzungen unabhängig von Drehzahl und Kolbenstellung festlegen.",
  "src": "FK 339, Format Prüfung Schule"
 },
 {
  "id": "940a6450999f",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 6,
  "situation": "cr-octavia",
  "nr": 2,
  "bild": "cr-anlage.svg",
  "q": "Ordnen Sie den Nummern im Leitungsplan die Bauteile zu.",
  "paare": [
   [
    "①",
    "Vorförderpumpe"
   ],
   [
    "④",
    "Hochdruckpumpe"
   ],
   [
    "⑤",
    "Zumesseinheit"
   ],
   [
    "⑥",
    "Rail"
   ],
   [
    "⑦",
    "Raildrucksensor"
   ],
   [
    "⑧",
    "Druckregelventil"
   ]
  ],
  "ablenker": [
   "Lambdasonde"
  ],
  "explain": "Die Zumesseinheit sitzt am Zulauf der Hochdruckpumpe (saugseitig). Raildrucksensor und Druckregelventil sitzen an den Enden des Rails (hochdruckseitig).",
  "src": "FK 339–342, Format Prüfung Schule"
 },
 {
  "id": "df701028f682",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 6,
  "situation": "cr-octavia",
  "nr": 3,
  "q": "Ordnen Sie die Bauteile bzw. Leitungsabschnitte dem richtigen Druckbereich der Anlage zu.",
  "paare": [
   [
    "Vorförderpumpe",
    "Niederdruck"
   ],
   [
    "Kraftstofffilter",
    "Niederdruck"
   ],
   [
    "Ausgang der Hochdruckpumpe",
    "Hochdruck"
   ],
   [
    "Rail",
    "Hochdruck"
   ],
   [
    "Leckölleitung der Injektoren",
    "Rücklauf"
   ],
   [
    "Abfluss des Druckregelventils",
    "Rücklauf"
   ]
  ],
  "explain": "Bis zur Zumesseinheit herrscht Niederdruck (ca. 2,5–5 bar). Ab dem Pumpenausgang bis zu den Injektoren herrscht Hochdruck. Alles, was abgesteuert wird oder als Lecköl anfällt, fließt im Rücklauf zum Tank.",
  "src": "FK 339, Format Prüfung Schule"
 },
 {
  "id": "e5508958a8b4",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 4,
  "q": "Welche Aufgabe hat das Rail?",
  "opts": [
   "Es speichert den Kraftstoff unter Hochdruck und dämpft Druckschwankungen",
   "Es erzeugt den Hochdruck für die Injektoren, indem es den Kraftstoff verdichtet",
   "Es kühlt den zurückfließenden Kraftstoff",
   "Es filtert Wasser aus dem Kraftstoff"
  ],
  "correct": 0,
  "explain": "Den Druck erzeugt die Hochdruckpumpe. Das Rail ist der Speicher: Sein Volumen gleicht die Druckstöße von Pumpe und Einspritzungen aus.",
  "src": "FK 340–342"
 },
 {
  "id": "25ec76b87d71",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 6,
  "situation": "cr-octavia",
  "nr": 5,
  "q": "Welche Zuordnung „Bauteil → Aufgabe“ für Hochdruckpumpe, Zumesseinheit, Druckregelventil, Raildrucksensor, Injektor und Vorförderpumpe ist vollständig richtig?",
  "opts": [
   "Hochdruckpumpe: verdichtet auf Raildruck; Zumesseinheit: stellt hochdruckseitig den Raildruck ein, indem sie in den Rücklauf absteuert; Druckregelventil: lässt saugseitig nur die benötigte Menge in die Pumpe; Raildrucksensor: meldet den Ist-Druck an das Steuergerät; Injektor: spritzt die berechnete Menge zum berechneten Zeitpunkt ein; Vorförderpumpe: fördert aus dem Tank über den Filter zur Hochdruckpumpe",
   "Hochdruckpumpe: verdichtet auf Raildruck; Zumesseinheit: lässt saugseitig nur die benötigte Menge in die Pumpe; Druckregelventil: stellt den Raildruck ein, indem es in den Rücklauf absteuert; Raildrucksensor: öffnet bei Überdruck eine Bohrung zum Rücklauf; Injektor: spritzt die berechnete Menge zum berechneten Zeitpunkt ein; Vorförderpumpe: fördert aus dem Tank über den Filter zur Hochdruckpumpe",
   "Hochdruckpumpe: verdichtet auf Raildruck; Zumesseinheit: lässt saugseitig nur die benötigte Menge in die Pumpe; Druckregelventil: stellt den Raildruck ein, indem es in den Rücklauf absteuert; Raildrucksensor: meldet den Ist-Druck an das Steuergerät; Injektor: spritzt die berechnete Menge zum berechneten Zeitpunkt ein; Vorförderpumpe: fördert aus dem Tank über den Filter zur Hochdruckpumpe",
   "Hochdruckpumpe: speichert den Kraftstoff und dämpft Druckschwankungen; Zumesseinheit: lässt saugseitig nur die benötigte Menge in die Pumpe; Druckregelventil: stellt den Raildruck ein, indem es in den Rücklauf absteuert; Raildrucksensor: meldet den Ist-Druck an das Steuergerät; Injektor: spritzt die berechnete Menge zum berechneten Zeitpunkt ein; Vorförderpumpe: verdichtet den Kraftstoff auf Raildruck"
  ],
  "correct": 2,
  "explain": "Hochdruckpumpe: verdichtet den Kraftstoff auf Raildruck und fördert ihn ins Rail. Zumesseinheit: lässt saugseitig nur die benötigte Kraftstoffmenge in die Hochdruckpumpe (Bedarfsregelung). Druckregelventil: stellt hochdruckseitig den Raildruck ein, indem es Kraftstoff in den Rücklauf absteuert. Raildrucksensor: meldet den Ist-Raildruck als Spannungssignal an das Motorsteuergerät. Injektor: spritzt die vom Steuergerät berechnete Menge zum berechneten Zeitpunkt in den Brennraum. Vorförderpumpe: fördert Kraftstoff aus dem Tank über den Filter zur Hochdruckpumpe. Bei der Zweisteller-Regelung teilen sich Zumesseinheit (Menge vor der Pumpe) und Druckregelventil (Druck im Rail) die Raildruckregelung. Der Raildrucksensor liefert dafür den Istwert.",
  "src": "FK 339–342, Format Prüfung Schule"
 },
 {
  "id": "29d1b7389fb5",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 6,
  "q": "Sie schließen den Diagnosetester an. Welche Antwort nennt drei Funktionen der geführten Fehlersuche, die Ihnen bei dieser Beanstandung weiterhelfen?",
  "opts": [
   "Fehlerspeicher mit Umgebungsbedingungen auslesen; Messwertblöcke ansehen (z. B. Raildruck Soll/Ist); Serviceintervallanzeige zurücksetzen",
   "Fehlerspeicher sofort löschen, ohne ihn zu lesen; Messwertblöcke ansehen (z. B. Raildruck Soll/Ist); Mengenvergleich bzw. Leerlaufdrehzahlvergleich",
   "Fehlerspeicher mit Umgebungsbedingungen auslesen; Lenkwinkelsensor-Grundeinstellung; Mengenvergleich bzw. Leerlaufdrehzahlvergleich",
   "Fehlerspeicher mit Umgebungsbedingungen auslesen; Messwertblöcke ansehen (z. B. Raildruck Soll/Ist); Mengenvergleich bzw. Leerlaufdrehzahlvergleich"
  ],
  "correct": 3,
  "explain": "Hilfreich sind: Fehlerspeicher mit Umgebungsbedingungen (Drehzahl, Temperatur, Häufigkeit) auslesen, Messwertblöcke ansehen (z. B. Raildruck Soll/Ist) und Mengenvergleich bzw. Leerlaufdrehzahlvergleich (Laufruhe je Zylinder). Ruckeln im Leerlauf deutet auf einen einzelnen Zylinder. Die zylinderbezogenen Testerfunktionen zeigen, welcher Zylinder auffällt, bevor man Teile tauscht.",
  "src": "TB 277, FW"
 },
 {
  "id": "3c8fffb849f2",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 7,
  "q": "Bevor Sie den Hochdruckteil untersuchen, schließen Sie Fehler im Niederdruckkreis aus. Welche Antwort nennt zwei geeignete Messungen mit Messgerät und ungefährem Sollwert?",
  "opts": [
   "Vorförderdruck mit Manometer im Zulauf zur Hochdruckpumpe: ca. 2,5–5 bar; Saugdruck vor der Pumpe mit Unterdruckmanometer: ca. −0,2 bis −0,4 bar",
   "Vorförderdruck mit Manometer im Zulauf zur Hochdruckpumpe: ca. 250–500 bar; Saugdruck vor der Pumpe mit Unterdruckmanometer: ca. −0,2 bis −0,4 bar",
   "Vorförderdruck mit Manometer im Zulauf zur Hochdruckpumpe: ca. 2,5–5 bar; Raildruck mit Manometer direkt am Rail: ca. 1350 bar",
   "Vorförderdruck mit Multimeter am Raildrucksensor: ca. 0,5–4,5 V; Fördermenge mit Messbecher über eine festgelegte Zeit: laut Werkstattinformation"
  ],
  "correct": 0,
  "explain": "Vorförderdruck mit Manometer (Kraftstoffdruck-Prüfgerät) im Zulauf zur Hochdruckpumpe messen: Sollwert ca. 2,5–5 bar (Herstellerangabe). Zusätzlich die Fördermenge mit Messbecher über eine festgelegte Zeit (Sollwert laut Werkstattinformation) oder den Unterdruck vor der Pumpe messen: Saugdruck nur ca. −0,2 bis −0,4 bar, höherer Unterdruck = Filter verstopft. Der Raildruck gehört nicht zum Niederdruckkreis. Bekommt die Hochdruckpumpe zu wenig Kraftstoff, kann sie den Raildruck nicht halten – die Folge sieht aus wie ein Hochdruckfehler. Darum zuerst den Niederdruck prüfen.",
  "src": "FK 339, Format Prüfung Schule, FW"
 },
 {
  "id": "1582feb917ac",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 8,
  "bild": "raildruck-kennlinie.svg",
  "tb": true,
  "q": "Lesen Sie aus der Kennlinie des Raildrucksensors ab: Welche Signalspannung gibt der Sensor bei einem Raildruck von 100 MPa aus?",
  "opts": [
   "1,5 V",
   "2,0 V",
   "2,5 V",
   "2,75 V"
  ],
  "correct": 2,
  "explain": "Bei 100 MPa senkrecht nach oben bis zur Kennlinie, dann waagerecht zur Spannungsachse: 2,5 V. Rechnerisch: 0,5 V + 100 MPa × (4,0 V ÷ 200 MPa) = 2,5 V.",
  "src": "FK 340–342, Format Prüfung Schule"
 },
 {
  "id": "f57888f116d0",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 9,
  "q": "Im Messwertblock steht ein Raildruck von 1350 bar, die Werkstattinformation gibt die Sollwerte in MPa an. Wie viel MPa sind 1350 bar?",
  "opts": [
   "13,5 MPa",
   "135 MPa",
   "1,35 MPa",
   "13.500 MPa"
  ],
  "correct": 1,
  "formel": "1 MPa = 10 bar = 1 N/mm²\n1 bar = 10 N/cm² = 0,1 N/mm²",
  "explain": "1 MPa = 10 bar → 1350 bar ÷ 10 = 135 MPa.",
  "src": "FW"
 },
 {
  "id": "3c6e5f4dd6aa",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 5,
  "situation": "cr-octavia",
  "nr": 10,
  "q": "Wie prüfen Sie den Raildrucksensor am Steuergerätestecker richtig (Messgerät, Messpunkte, Sollwerte)?",
  "opts": [
   "Voltmeter über Prüfadapter, Stecker gesteckt; Versorgung Plus gegen Masse bei Zündung ein: ca. 12 V (Bordnetzspannung); Signal gegen Masse: ca. 0,5 V drucklos, mit steigendem Raildruck bis ca. 4,5 V; Masseleitung: Spannungsfall unter ca. 0,1 V",
   "Ohmmeter über Prüfadapter bei laufendem Motor, Stecker gesteckt; Versorgung Plus gegen Masse: ca. 5 Ω; Signal gegen Masse: ca. 0,5 Ω drucklos, mit steigendem Raildruck bis ca. 4,5 Ω; Masseleitung: Durchgang unter 0,5 Ω",
   "Voltmeter über Prüfadapter, Stecker gesteckt; Versorgung Plus gegen Masse bei Zündung ein: ca. 5 V; Signal gegen Masse: ca. 4,5 V drucklos, mit steigendem Raildruck fallend bis ca. 0,5 V; Masseleitung: Spannungsfall unter ca. 0,1 V",
   "Voltmeter über Prüfadapter, Stecker gesteckt; Versorgung Plus gegen Masse bei Zündung ein: ca. 5 V; Signal gegen Masse: ca. 0,5 V drucklos, mit steigendem Raildruck bis ca. 4,5 V; Masseleitung: Spannungsfall unter ca. 0,1 V"
  ],
  "correct": 3,
  "explain": "Messgerät: Voltmeter (Multimeter, Gleichspannung) über Prüfadapter, der Stecker bleibt gesteckt. Versorgungsspannung Plus gegen Masse bei Zündung ein: ca. 5 V. Signal gegen Masse: ca. 0,5 V bei drucklosem Rail, mit steigendem Raildruck bis ca. 4,5 V (siehe Kennlinie). Masseleitung: Spannungsfall unter ca. 0,1 V bzw. Durchgang unter 0,5 Ω (stromlos gemessen). Messwerte mit Kennlinie bzw. Raildruck im Messwertblock vergleichen. Erst Versorgung und Masse, dann das Signal prüfen. So erkennt man einen Leitungsfehler, bevor man einen funktionsfähigen Sensor tauscht.",
  "src": "FK 340–342, TB 278–279, Format Prüfung Schule"
 },
 {
  "id": "3714af4ca790",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 11,
  "q": "Wie reagiert das Motorsteuergerät, wenn das Signal des Raildrucksensors auf 0,1 V fällt?",
  "opts": [
   "Es erkennt einen Sensor- oder Leitungsfehler, speichert ihn und geht in den Notlauf bzw. schaltet den Motor ab",
   "Es erhöht den Raildruck kurzzeitig auf 2500 bar, um den vermeintlichen Druckverlust auszugleichen, und regelt dann normal weiter",
   "Es wertet 0,1 V als drucklosen Zustand und regelt normal weiter",
   "Es reagiert nicht, weil 0,1 V noch im gültigen Messbereich liegt"
  ],
  "correct": 0,
  "explain": "Der gültige Bereich liegt bei ca. 0,5–4,5 V. Unter ca. 0,25 V oder über ca. 4,75 V erkennt das Steuergerät einen Defekt (z. B. Kurzschluss nach Masse oder Unterbrechung).",
  "src": "TB 278–279"
 },
 {
  "id": "acaaab9b2834",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 12,
  "q": "Der Mengenvergleich im Leerlauf zeigt: Zyl. 1 −1,5 / Zyl. 2 −1,3 / Zyl. 3 +4,4 / Zyl. 4 −1,6 mm³/Hub. Wie ist das Ergebnis zu beurteilen und was ist der nächste Prüfschritt?",
  "opts": [
   "Zyl. 3 bringt zu wenig Drehmoment, das Steuergerät spritzt dort mehr ein; Ursache Injektor Zyl. 3 (z. B. innen undicht) oder zu wenig Kompression; nächster Schritt Rücklaufmengenmessung bzw. Kompressionstest",
   "Zyl. 3 bringt zu viel Drehmoment, das Steuergerät nimmt dort Menge zurück; Ursache Injektor Zyl. 3 spritzt zu viel ein (z. B. Düse ausgewaschen); nächster Schritt Injektor Zyl. 3 ohne weitere Prüfung ersetzen",
   "Zyl. 1, 2 und 4 sind zu schwach, weil ihre Werte negativ sind; Ursache verschlissene Injektoren; nächster Schritt die Injektoren von Zyl. 1, 2 und 4 ersetzen",
   "Zyl. 3 fällt auf; Ursache Raildrucksensor liefert für Zyl. 3 einen falschen Wert; nächster Schritt Raildrucksensor ersetzen und Mengenvergleich wiederholen"
  ],
  "correct": 0,
  "explain": "Zylinder 3 fällt mit einer deutlich positiven Korrektur auf. Positive Korrektur heißt: Zylinder 3 bringt zu wenig Drehmoment, das Steuergerät spritzt dort mehr ein. Mögliche Ursachen: Injektor Zyl. 3 (z. B. innen undicht) oder zu geringe Kompression in Zyl. 3. Nächster Schritt: Rücklaufmengenmessung der Injektoren bzw. Kompressionstest. Der Raildrucksensor misst den Druck für alle Zylinder gemeinsam und kann keinen einzelnen Zylinder auffällig machen. Der Mengenvergleich zeigt die Abweichung jedes Zylinders vom Mittelwert. Ein Zylinder mit großer positiver Korrektur arbeitet zu schwach – die Ursache muss mit weiteren Prüfungen eingegrenzt werden.",
  "src": "TB 277"
 },
 {
  "id": "fe1709232278",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 13,
  "q": "Bei der Rücklaufmengenmessung (gleiche Messzeit) ergeben sich: Zyl. 1 11 ml, Zyl. 2 13 ml, Zyl. 3 41 ml, Zyl. 4 12 ml. Wie groß ist das Verhältnis der größten zur kleinsten Rücklaufmenge?",
  "opts": [
   "0,27",
   "2,13",
   "3,42",
   "3,73"
  ],
  "correct": 3,
  "formel": "Verhältnis = V_{max} / V_{min}\nV = Rücklaufmenge",
  "explain": "Größte ÷ kleinste Menge = 41 ml ÷ 11 ml ≈ 3,73.",
  "src": "TB 277"
 },
 {
  "id": "59255f292ec8",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 14,
  "q": "Rücklaufmengenmessung: Zyl. 1 11 ml, Zyl. 2 13 ml, Zyl. 3 41 ml, Zyl. 4 12 ml. Die größte Rücklaufmenge darf höchstens das Dreifache der kleinsten betragen. Wie beurteilen Sie die Messung?",
  "opts": [
   "Grenze 3 × 11 ml = 33 ml wird von Zyl. 3 überschritten → Injektor Zyl. 3 ist innen undicht und wird ersetzt",
   "Alle Injektoren sind in Ordnung, weil keiner mehr als 50 ml zurückgibt und die Summe aller vier unter 100 ml liegt",
   "Der Injektor von Zyl. 1 wird ersetzt, weil er am wenigsten zurückgibt",
   "Alle vier Injektoren werden ersetzt, weil die Werte unterschiedlich sind"
  ],
  "correct": 0,
  "explain": "Ein innen undichter Injektor lässt zu viel Kraftstoff in den Rücklauf. Zusammen mit der positiven Mengenkorrektur ist der Fehler eindeutig Zylinder 3 zuzuordnen.",
  "src": "TB 277"
 },
 {
  "id": "f5848d0bc2cc",
  "cat": "Diesel",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 15,
  "q": "Bringen Sie die Arbeitsschritte beim Tausch des Injektors von Zylinder 3 in die richtige Reihenfolge.",
  "schritte": [
   "Fehlerspeicher auslesen und dokumentieren",
   "Motorabdeckung abbauen, Umgebung der Leitungsanschlüsse gründlich reinigen",
   "Rücklaufleitung und Hochdruckleitung lösen, offene Anschlüsse sofort verschließen",
   "Injektor ausbauen, Dichtung und Befestigungsteile ersetzen",
   "Neuen Injektor einbauen, Hochdruckleitung (nach Herstellervorgabe neu) mit vorgeschriebenem Drehmoment anziehen",
   "IMA-Code des neuen Injektors im Steuergerät codieren"
  ],
  "explain": "Schmutz ist der größte Feind des Hochdrucksystems: erst reinigen, dann öffnen und sofort verschließen. Ohne den IMA-Code kennt das Steuergerät die Toleranzen des neuen Injektors nicht.",
  "src": "TB 277, FW"
 },
 {
  "id": "655616b489d0",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 16,
  "q": "Warum muss nach dem Tausch der IMA-Code des neuen Injektors in das Steuergerät eingegeben werden?",
  "opts": [
   "Der IMA-Code ist eine Wegfahrsperre; ohne ihn gibt das Steuergerät den neuen Injektor nicht frei; der Motor springt erst nach der Eingabe wieder an",
   "Der IMA-Code enthält die fertigungsbedingten Mengentoleranzen des Injektors; damit berechnet das Steuergerät die Ansteuerdauer genauer; so bekommt jeder Zylinder die gleiche Einspritzmenge",
   "Der IMA-Code enthält einen eigenen Raildruck-Sollwert für den Injektor; damit stellt das Steuergerät für jeden Zylinder einen anderen Raildruck ein; so wird die Leistung aller Zylinder gleich groß",
   "Der IMA-Code setzt den Zähler für das Wechselintervall der Injektoren zurück; damit erlischt die Motorkontrollleuchte; ein Abgleich der Einspritzmenge findet nicht statt"
  ],
  "correct": 1,
  "explain": "Jeder Injektor hat fertigungsbedingte Mengentoleranzen, die im IMA-Code (Injektor-Mengen-Abgleich) stehen. Mit dem Code berechnet das Steuergerät die Ansteuerdauer für diesen Injektor genauer. Dadurch bekommt jeder Zylinder die gleiche Einspritzmenge (ruhiger Lauf, Abgaswerte). Der Raildruck ist für alle Injektoren gleich. Der mehrstellige Code ist auf dem Injektor aufgedruckt und wird im Tester z. B. unter „Injektoranpassung“ eingegeben.",
  "src": "TB 277, FK 339–349"
 },
 {
  "id": "bd4bf9991387",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 17,
  "q": "Wie steuert das Motorsteuergerät einen Magnetventil-Injektor an?",
  "opts": [
   "Mit einer Boosterspannung von ca. 70–100 V und einem Anzugsstrom von ca. 20 A, danach mit einem kleineren Haltestrom von ca. 10–13 A",
   "Mit Bordnetzspannung und einem gleichbleibenden Strom von ca. 2 A während der ganzen Einspritzung, damit die Spule nicht zu heiß wird",
   "Mit ca. 110–150 V wie ein Kondensator – ist er geladen, fließt kein Strom mehr",
   "Mit einer Referenzspannung von 5 V und einem Signalstrom von wenigen Milliampere"
  ],
  "correct": 0,
  "explain": "Für schnelles Öffnen braucht der Magnet kurz einen hohen Strom (Booster aus einem Kondensator im Steuergerät). Zum Offenhalten reicht ein kleinerer, getakteter Haltestrom. Die 110–150 V mit Kondensatorverhalten gehören zum Piezo-Injektor.",
  "src": "FK 339–349, Prüfung Schule (Format)"
 },
 {
  "id": "5be824ea94a1",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige abschließende Arbeiten nach dem Injektortausch?",
  "opts": [
   "Fehlerspeicher löschen; Mengenvergleich bzw. Laufruhe erneut prüfen; Hochdruckanschlüsse bei laufendem Motor sicherheitshalber nachziehen; Probefahrt und Fehlerspeicher erneut auslesen",
   "Fehlerspeicher löschen; IMA-Codes aller Injektoren auf null zurücksetzen; Hochdruckanschlüsse bei laufendem Motor auf Dichtheit sichtprüfen; Probefahrt und Fehlerspeicher erneut auslesen",
   "Fehlerspeicher löschen; Mengenvergleich bzw. Laufruhe erneut prüfen; Hochdruckanschlüsse bei laufendem Motor auf Dichtheit sichtprüfen; Probefahrt und Fehlerspeicher erneut auslesen",
   "Fehlerspeicher löschen; Mengenvergleich bzw. Laufruhe erneut prüfen; Hochdruckanschlüsse bei laufendem Motor auf Dichtheit sichtprüfen; Sicherung der Motorkontrollleuchte ziehen, falls sie wieder leuchtet"
  ],
  "correct": 2,
  "explain": "Abschließende Arbeiten: Fehlerspeicher löschen, Mengenvergleich bzw. Laufruhe im Leerlauf erneut prüfen, Hochdruckanschlüsse bei laufendem Motor auf Dichtheit sichtprüfen (bzw. Hochdrucktest), Probefahrt und danach Fehlerspeicher erneut auslesen. Leitungen unter Hochdruck nie lösen oder nachziehen. Erst wenn nach der Probefahrt kein neuer Fehler gespeichert ist und alle Zylinder gleichmäßig arbeiten, ist die Reparatur abgeschlossen. Danach Motorabdeckung montieren.",
  "src": "Format Prüfung Schule, FW"
 },
 {
  "id": "e375718daeda",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 19,
  "q": "Das Fahrzeug hat eine SCR-Anlage. Warum werden die AdBlue-Leitung und das Dosierventil nach dem Abstellen des Motors leergesaugt?",
  "opts": [
   "AdBlue gefriert bereits bei ca. −11 °C; gefrierendes AdBlue dehnt sich aus und kann Leitung und Dosierventil beschädigen oder verstopfen; das Fördermodul pumpt die Lösung deshalb in den Tank zurück",
   "AdBlue ist brennbar; das heiße Abgasrohr könnte das im Dosierventil stehende AdBlue nach dem Abstellen entzünden; das Fördermodul pumpt die Lösung deshalb in den Tank zurück",
   "AdBlue gefriert bereits bei ca. −11 °C; gefrierendes AdBlue zieht sich zusammen und saugt Luft in die Leitung; das Fördermodul pumpt die Lösung deshalb in den Tank zurück",
   "Der NOx-Sensor 1 muss sich beim nächsten Start ohne AdBlue kalibrieren; Reste im Dosierventil würden die Messung der Stickoxide verfälschen; das Fördermodul pumpt die Lösung deshalb in den Tank zurück"
  ],
  "correct": 0,
  "explain": "AdBlue gefriert bereits bei ca. −11 °C. Gefrierendes AdBlue dehnt sich aus bzw. kristallisiert und kann Leitung und Dosierventil beschädigen oder verstopfen. Das Fördermodul pumpt die Lösung deshalb über ein Umkehrventil in den Tank zurück (Tank und Modul sind zusätzlich beheizt). AdBlue ist nicht brennbar. Was im Tank einfriert, taut die Heizung nach dem Start wieder auf. In der dünnen Leitung und im Dosierventil darf dagegen nichts stehen bleiben.",
  "src": "FK 357"
 },
 {
  "id": "e74924279c5e",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "cr-octavia",
  "nr": 20,
  "q": "Ordnen Sie die Bauteile der Abgasanlage in Strömungsrichtung (Position 1 = motornah) zu.",
  "paare": [
   [
    "Position 1",
    "Oxidationskatalysator"
   ],
   [
    "Position 2",
    "Dieselpartikelfilter"
   ],
   [
    "Position 3",
    "AdBlue-Dosierventil"
   ],
   [
    "Position 4",
    "SCR-Katalysator"
   ],
   [
    "Position 5",
    "Sperrkatalysator"
   ]
  ],
  "ablenker": [
   "Ladeluftkühler"
  ],
  "explain": "Das AdBlue wird vor dem SCR-Kat eingespritzt, damit es sich auf dem Weg dorthin mit dem Abgas mischt und Ammoniak bildet. Der Sperrkat am Ende fängt überschüssiges Ammoniak ab.",
  "src": "FK 357"
 },
 {
  "id": "86eb62124b7f",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Bei einer Zweisteller-Regelung arbeiten Zumesseinheit (ZME) und Druckregelventil (DRV) je nach Betriebszustand. Ordnen Sie zu.",
  "paare": [
   [
    "Motorstart und Warmlauf",
    "nur DRV"
   ],
   [
    "Leerlauf, Schub, kleine Einspritzmengen",
    "ZME und DRV"
   ],
   [
    "Mittlere bis hohe Last",
    "nur ZME"
   ]
  ],
  "explain": "Beim Start sorgt das DRV für schnellen Druckaufbau (der Kraftstoff erwärmt sich dabei). Im Leerlauf regeln beide am genauesten. Bei hoher Last regelt nur die ZME – so bleibt die Pumpenleistung klein.",
  "src": "FK 340–341, TB 274"
 },
 {
  "id": "866b31875728",
  "cat": "Diesel",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Ordnen Sie den drei Arten der Raildruckregelung das passende Merkmal zu.",
  "paare": [
   [
    "Einsteller hochdruckseitig (nur Druckregelventil)",
    "Pumpe fördert immer die volle Menge, der Überschuss geht in den Rücklauf"
   ],
   [
    "Einsteller saugseitig (nur Zumesseinheit)",
    "Nur die benötigte Menge wird verdichtet, ein Druckbegrenzungsventil schützt bei Ausfall"
   ],
   [
    "Zweisteller (ZME und DRV)",
    "Je nach Betriebszustand regelt ein Stellglied allein oder beide zusammen"
   ]
  ],
  "ablenker": [
   "Der Raildruck wird nur über die Motordrehzahl bestimmt"
  ],
  "explain": "Die hochdruckseitige Regelung ist einfach, kostet aber viel Pumpenleistung und erwärmt den Kraftstoff. Die saugseitige Bedarfsregelung spart Leistung. Der Zweisteller verbindet beide Vorteile.",
  "src": "FK 340–341"
 },
 {
  "id": "f2c2c3c294e8",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "In welchem Zustand befindet sich die Zumesseinheit, wenn sie nicht angesteuert wird?",
  "opts": [
   "Stromlos offen – die Pumpe bekommt die volle Kraftstoffmenge",
   "Stromlos geschlossen – die Pumpe bekommt keinen Kraftstoff, der Motor geht aus",
   "Halb offen – das Steuergerät hält sie mechanisch fest",
   "Sie ist ohne Strom gar nicht im Kraftstoffweg"
  ],
  "correct": 0,
  "explain": "Die ZME ist stromlos offen. Fällt die Ansteuerung aus, fördert die Pumpe die volle Menge – deshalb braucht eine saugseitig geregelte Anlage ein Druckbegrenzungsventil.",
  "src": "FK 340–342"
 },
 {
  "id": "3d3ab2857496",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welcher Raildruck stellt sich ungefähr ein, wenn das Druckregelventil gar nicht angesteuert wird?",
  "opts": [
   "ca. 100 bar – nur die Federkraft hält das Ventil zu",
   "ca. 2500 bar – das Ventil bleibt ganz geschlossen",
   "ca. 5 bar – das Ventil öffnet ganz",
   "ca. 1000 bar – das Steuergerät hält einen Mittelwert"
  ],
  "correct": 0,
  "explain": "Im DRV drückt eine Feder das Ventil auf den Sitz und hält so etwa 100 bar. Erst die PWM-Ansteuerung erzeugt die zusätzliche Magnetkraft für höhere Drücke.",
  "src": "FK 340–342, TB 278–279"
 },
 {
  "id": "d7c7be75f8d8",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welcher Vergleich der Folgen eines Ausfalls des Druckregelventils mit denen eines Ausfalls des Raildrucksensors ist richtig?",
  "opts": [
   "Druckregelventil: Steuergerät steuert mit festem Ersatzwert weiter → Notlauf; Raildrucksensor: nur ca. 100 bar Federdruck → Motor läuft nicht; in beiden Fällen Fehlerspeichereintrag und Motorkontrollleuchte",
   "Druckregelventil: Raildruck steigt auf ca. 2500 bar, Motor läuft mit voller Leistung weiter; Raildrucksensor: festes Ersatzsignal → Notlauf; in beiden Fällen Fehlerspeichereintrag und Motorkontrollleuchte",
   "Druckregelventil: nur ca. 100 bar Federdruck → Motor läuft nicht; Raildrucksensor: keine Auswirkung, das Steuergerät berechnet den Druck aus Drehzahl und Einspritzmenge; nur beim Druckregelventil Motorkontrollleuchte",
   "Druckregelventil: nur ca. 100 bar Federdruck → Motor läuft nicht; Raildrucksensor: Druckregelventil wird mit festem Ersatzwert angesteuert → Notlauf; in beiden Fällen Fehlerspeichereintrag und Motorkontrollleuchte"
  ],
  "correct": 3,
  "explain": "Ausfall Druckregelventil: Der Raildruck lässt sich nicht mehr einstellen, nur ca. 100 bar Federdruck → Motor läuft nicht. Ausfall Raildrucksensor: Das Steuergerät kennt den Ist-Druck nicht mehr und steuert das Druckregelventil mit einem festen Ersatzwert an → Notlauf mit eingeschränkter Leistung bzw. bei unplausiblem Signal Motorabschaltung. In beiden Fällen: Fehlerspeichereintrag und Motorkontrollleuchte. Der Sensor liefert nur den Istwert – ohne ihn arbeitet das System gesteuert statt geregelt weiter. Ohne Stellglied kann dagegen gar kein ausreichender Druck aufgebaut werden.",
  "src": "FK 340–342, TB 278–279"
 },
 {
  "id": "3dface307ce2",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung von Aufgabe und Wirkungsweise eines Druckbegrenzungsventils am Rail (einstufige und zweistufige Ausführung) ist richtig?",
  "opts": [
   "Regelt im Normalbetrieb per PWM den Raildruck auf den Sollwert; wird vor allem bei saugseitiger Regelung gebraucht; einstufig: danach wird der Motor abgestellt; zweistufig: hält danach ca. 400 bar → eingeschränkte Weiterfahrt",
   "Schützt vor Überdruck: öffnet bei ca. 2500 bar eine Ablaufbohrung zum Rücklauf; wird vor allem bei saugseitiger Regelung gebraucht; einstufig: danach wird der Motor abgestellt; zweistufig: hält danach ca. 400 bar → eingeschränkte Weiterfahrt",
   "Schützt vor Überdruck: öffnet bei ca. 2500 bar eine Ablaufbohrung zum Rücklauf; wird vor allem bei saugseitiger Regelung gebraucht; einstufig: hält danach ca. 400 bar → eingeschränkte Weiterfahrt; zweistufig: danach wird der Motor abgestellt",
   "Schützt vor Unterdruck: öffnet beim Abstellen eine Bohrung zum Zulauf, damit das Rail nicht leerläuft; wird vor allem bei saugseitiger Regelung gebraucht; einstufig: danach wird der Motor abgestellt; zweistufig: hält danach ca. 400 bar"
  ],
  "correct": 1,
  "explain": "Das Druckbegrenzungsventil schützt das Hochdrucksystem vor Überdruck: Es öffnet bei zu hohem Druck (ca. 2500 bar) eine Ablaufbohrung zum Rücklauf. Gebraucht wird es vor allem bei saugseitiger Regelung, z. B. wenn die stromlos offene ZME ausfällt. Einstufig: Nach dem Ansprechen wird der Motor abgestellt. Zweistufig: Es hält danach einen niedrigeren Druck (z. B. ca. 400 bar) → eingeschränkte Weiterfahrt mit erhöhter Leerlaufdrehzahl. Das Druckbegrenzungsventil ist eine reine Sicherheitseinrichtung. Es regelt den Druck nicht, sondern begrenzt ihn nur nach oben.",
  "src": "FK 340–342"
 },
 {
  "id": "0b8cd0a4f008",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Die Werkstattinformation nennt für die Zumesseinheit: Leerlauf – Raildruck 22–35 MPa, Tastverhältnis 35–45 %; Volllast – Raildruck 135–200 MPa, Tastverhältnis 90–100 %. Wie ändern sich Raildruck und Tastverhältnis bei steigender Last, und warum?",
  "opts": [
   "Raildruck steigt von ca. 22–35 MPa auf bis zu 135–200 MPa; Tastverhältnis sinkt von ca. 40 % gegen 0 %; die Zumesseinheit schließt, damit sich der Druck im Rail aufstauen kann",
   "Raildruck sinkt von ca. 135–200 MPa auf ca. 22–35 MPa; Tastverhältnis steigt von ca. 40 % auf bis zu 100 %; bei hoher Last braucht der Motor weniger Einspritzdruck",
   "Raildruck steigt von ca. 22–35 MPa auf bis zu 135–200 MPa; Tastverhältnis steigt von ca. 40 % auf bis zu 100 %; das Steuergerät passt die Fördermenge der Pumpe dem höheren Bedarf an",
   "Raildruck steigt von ca. 22–35 MPa auf bis zu 135–200 MPa; Tastverhältnis steigt von ca. 40 % auf bis zu 100 %; bei Volllast steuert das Druckregelventil den gesamten Kraftstoff in den Rücklauf"
  ],
  "correct": 2,
  "explain": "Der Raildruck steigt mit der Last von ca. 22–35 MPa auf bis zu 135–200 MPa. Das angezeigte Tastverhältnis der Zumesseinheit steigt ebenfalls (von ca. 40 % auf bis zu 100 %). Das Steuergerät passt so die Fördermenge der Hochdruckpumpe dem höheren Bedarf an (mehr Einspritzmenge, höherer Druck). Wie der Tester das Tastverhältnis bezieht (bestromter oder unbestromter Anteil), ist herstellerabhängig. Beurteilen Sie Messwerte deshalb immer mit den Sollwerten der Werkstattinformation.",
  "src": "Prüfung Schule (Format), FW"
 },
 {
  "id": "45c795161d55",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei Vorteile der saugseitigen Regelung mit Zumesseinheit gegenüber der rein hochdruckseitigen Regelung?",
  "opts": [
   "Pumpe verdichtet nur die benötigte Menge → geringere Leistungsaufnahme; weniger Kraftstoff fließt unter Hochdruck in den Rücklauf; geringere Kraftstofftemperatur",
   "Pumpe verdichtet nur die benötigte Menge → geringere Leistungsaufnahme; weniger Kraftstoff fließt unter Hochdruck in den Rücklauf; kein Druckbegrenzungsventil nötig, weil die ZME stromlos schließt",
   "Pumpe fördert immer die volle Menge → höherer Raildruck möglich; weniger Kraftstoff fließt unter Hochdruck in den Rücklauf; geringere Kraftstofftemperatur",
   "Pumpe verdichtet nur die benötigte Menge → geringere Leistungsaufnahme; mehr Kraftstoff fließt zur Kühlung in den Rücklauf; der Kraftstoff wird stärker vorgewärmt"
  ],
  "correct": 0,
  "explain": "Vorteile: Die Hochdruckpumpe verdichtet nur die benötigte Menge → geringere Leistungsaufnahme. Weniger Kraftstoff fließt unter Hochdruck in den Rücklauf. Der Kraftstoff erwärmt sich weniger (geringere Kraftstofftemperatur). Weil die ZME stromlos offen ist, braucht die saugseitige Regelung ein Druckbegrenzungsventil. Jeder Liter, der erst auf Hochdruck gebracht und dann wieder abgesteuert wird, kostet Motorleistung und heizt den Kraftstoff auf.",
  "src": "FK 340–341"
 },
 {
  "id": "60f2cc00ca69",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Druckbereichen einer Pkw-Common-Rail-Anlage den typischen Druck zu.",
  "paare": [
   [
    "Saugdruck vor der Pumpe",
    "ca. −0,2 bis −0,4 bar"
   ],
   [
    "Vorförderdruck",
    "ca. 2,5 bis 5 bar"
   ],
   [
    "Rücklaufdruck am Koppler eines Piezo-Injektors",
    "ca. 10 bar"
   ],
   [
    "Höchster Raildruck (Pkw)",
    "ca. 2500 bar (250 MPa)"
   ]
  ],
  "ablenker": [
   "ca. 25 000 bar"
  ],
  "explain": "Der Hochdruck reicht bei Pkw von einigen hundert bar im Leerlauf bis ca. 2500 bar. Das Druckhalteventil des Piezo-Injektors hält im Rücklauf ca. 10 bar, damit der hydraulische Koppler gefüllt bleibt.",
  "src": "FK 339"
 },
 {
  "id": "0ec5a108235b",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 6,
  "q": "Prüfung der Zumesseinheit (Plus dauerhaft über Sicherung, Ansteuerung masseseitig vom Steuergerät): Welche Antwort nennt für Versorgung, Wicklungswiderstand und Ansteuerung jeweils das richtige Messgerät, die richtigen Messpunkte/Bedingungen und den richtigen Sollwert?",
  "opts": [
   "Versorgung: Voltmeter, Plus-Pin gegen Masse, Zündung ein, ca. 5 V; Widerstand: Ohmmeter an beiden Pins, Zündung aus und Stecker ab, wenige Ohm laut WI; Ansteuerung: Oszilloskop an der Steuerleitung gegen Masse, Motor läuft, PWM-Rechteck ca. 0 V bis Bordnetzspannung",
   "Versorgung: Voltmeter, Plus-Pin gegen Masse, Zündung ein, ca. 12 V; Widerstand: Ohmmeter an beiden Pins, Zündung aus und Stecker ab, wenige Ohm laut WI; Ansteuerung: Oszilloskop an der Steuerleitung gegen Masse, Motor läuft, PWM-Rechteck ca. 0 V bis Bordnetzspannung",
   "Versorgung: Voltmeter, Plus-Pin gegen Masse, Zündung ein, ca. 12 V; Widerstand: Ohmmeter an beiden Pins, Zündung ein und Stecker gesteckt, wenige Ohm laut WI; Ansteuerung: Oszilloskop an der Steuerleitung gegen Masse, Motor läuft, PWM-Rechteck ca. 0 V bis Bordnetzspannung",
   "Versorgung: Voltmeter, Plus-Pin gegen Masse, Zündung ein, ca. 12 V; Widerstand: Ohmmeter an beiden Pins, Zündung aus und Stecker ab, wenige Ohm laut WI; Ansteuerung: Voltmeter an der Steuerleitung gegen Masse, Motor läuft, konstante Gleichspannung ca. 12 V"
  ],
  "correct": 1,
  "explain": "Versorgung: Voltmeter, Plus-Pin der ZME gegen Fahrzeugmasse, Zündung ein – Sollwert Bordnetzspannung (ca. 12 V). Widerstand: Ohmmeter an beiden Pins der ZME, Zündung aus und Stecker abgezogen – Sollwert laut Werkstattinformation (wenige Ohm). Ansteuerung: Oszilloskop, Steuerleitung (Masseseite) gegen Fahrzeugmasse, Motor läuft – Sollbild Rechtecksignal (PWM) zwischen ca. 0 V und Bordnetzspannung, das Tastverhältnis ändert sich mit dem Lastzustand. Spannung und Ansteuerung werden im Betrieb gemessen, der Widerstand nur stromlos. Ein PWM-Signal lässt sich nur mit dem Oszilloskop sicher beurteilen.",
  "src": "Format Prüfung Schule, TB 278–279, FW"
 },
 {
  "id": "735eb5c0e960",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "An der abgezogenen Zumesseinheit messen Sie einen Wicklungswiderstand von 50 Ω. Die Werkstattinformation gibt 2–5 Ω vor. Wie ist das Messergebnis zu beurteilen und welche Folgen hat es?",
  "opts": [
   "Widerstand deutlich zu hoch; der Strom wird dadurch größer, die Spule überhitzt und die ZME bleibt ganz geschlossen; ZME sofort ohne weitere Messung ersetzen",
   "Widerstand in Ordnung, weil weder Kurzschluss (0 Ω) noch Unterbrechung (unendlich) vorliegt; keine Folgen für die Raildruckregelung, das Steuergerät gleicht den Wert aus; keine weitere Prüfung nötig",
   "Widerstand zu niedrig (Windungsschluss); der Strom wird zu groß, die ZME öffnet zu weit → Raildruck zu hoch; Steuergerät ersetzen",
   "Widerstand deutlich zu hoch (z. B. Teilunterbrechung, Korrosion); Strom zu klein, die ZME lässt sich nicht richtig verstellen → Raildruck gestört; Kontakte prüfen, ggf. ZME ersetzen"
  ],
  "correct": 3,
  "explain": "Der Widerstand ist deutlich zu hoch (Wicklung bzw. Kontakt hochohmig, z. B. Teilunterbrechung oder Korrosion). Folge: Der Strom ist zu klein, die Zumesseinheit lässt sich nicht mehr richtig verstellen → Raildruckregelung gestört. Messung direkt an den Pins wiederholen, Steckkontakte prüfen und bei bestätigtem Wert die Zumesseinheit ersetzen. Nach dem ohmschen Gesetz fließt bei zehnfachem Widerstand nur ein Zehntel des Stroms – die Magnetkraft reicht dann nicht mehr. Den Sollwert immer aus der Werkstattinformation des Fahrzeugs nehmen.",
  "src": "Format Prüfung Schule, FW"
 },
 {
  "id": "061f2b3984d4",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Zumesseinheit wird vom Steuergerät masseseitig per PWM angesteuert. Sie messen mit dem Oszilloskop an der Steuerleitung gegen Masse. Welcher Signalabschnitt bedeutet „Ventil bestromt“?",
  "opts": [
   "Der untere Pegel (ca. 0 V), weil das Steuergerät dann nach Masse durchschaltet",
   "Der obere Pegel (Bordnetzspannung), weil dann Spannung an der Spule anliegt und Strom fließt",
   "Nur die Spannungsspitze beim Abschalten",
   "Beide Pegel gleich, weil die Spule immer bestromt ist"
  ],
  "correct": 0,
  "explain": "Plus liegt dauerhaft an. Schaltet das Steuergerät nach Masse durch, fällt die Spannung an der Messstelle auf ca. 0 V und Strom fließt durch die Spule. Beim oberen Pegel ist der Stromkreis offen.",
  "src": "Format Prüfung Schule, TB 278–279"
 },
 {
  "id": "a859e02abf80",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Das Oszilloskop zeigt an der Zumesseinheit 4 ms Einschaltzeit bei einer Periodendauer von 10 ms. Wie groß ist das Tastverhältnis?",
  "opts": [
   "60 %",
   "4 %",
   "40 %",
   "250 %"
  ],
  "correct": 2,
  "formel": "Tastverhältnis = t_i / T · 100 %\nt_i = Impulsdauer (Einschaltzeit), T = Periodendauer (Flanke bis zur nächsten gleichen Flanke)",
  "explain": "Tastverhältnis = Einschaltzeit ÷ Periodendauer × 100 % = 4 ms ÷ 10 ms × 100 % = 40 %.",
  "src": "FW"
 },
 {
  "id": "24557598ca52",
  "cat": "Diesel",
  "level": 3,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie den Ablauf einer Einspritzung beim Magnetventil-Injektor in die richtige Reihenfolge.",
  "schritte": [
   "Steuergerät bestromt das Magnetventil mit hohem Anzugsstrom",
   "Der Anker hebt die Ventilkugel, die Abflussdrossel wird frei",
   "Aus dem Ventilsteuerraum fließt mehr Kraftstoff ab, als über die Zulaufdrossel nachkommt",
   "Der Druck im Ventilsteuerraum sinkt, der Raildruck an der Druckschulter hebt die Düsennadel",
   "Strom aus: Die Feder drückt die Ventilkugel zurück, die Abflussdrossel ist zu",
   "Der Druck im Ventilsteuerraum baut sich wieder auf, die Düsennadel schließt"
  ],
  "explain": "Die Magnetkraft allein könnte die Düsennadel gegen den Raildruck nicht bewegen. Der Magnet öffnet nur ein kleines Steuerventil – die eigentliche Arbeit macht der Kraftstoffdruck.",
  "src": "FK 339–349"
 },
 {
  "id": "4c186737bc9d",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie verhält sich ein Piezo-Injektor elektrisch bei der Ansteuerung?",
  "opts": [
   "Wie ein Kondensator: Er wird mit ca. 110–150 V geladen, danach fließt kein Strom mehr; zum Schließen wird er entladen",
   "Wie eine Glühlampe: Solange er offen ist, fließt ein gleichbleibend hoher Strom durch den Piezo-Stapel, der ihn offen hält",
   "Wie ein Hallgeber: Er gibt beim Öffnen ein Rechtecksignal an das Steuergerät zurück",
   "Wie ein NTC-Widerstand: Sein Widerstand sinkt mit steigender Temperatur"
  ],
  "correct": 0,
  "explain": "Der Piezo-Stapel dehnt sich aus, sobald er geladen ist, und bleibt ohne weiteren Strom so lange in dieser Lage, bis das Steuergerät ihn über einen Widerstand schnell entlädt.",
  "src": "FK 339–349"
 },
 {
  "id": "3870d0f26a2e",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt zwei richtige Regeln beim Umgang mit Piezo-Injektoren (mit Rücklauf) mit zutreffender Begründung?",
  "opts": [
   "Ausgebaute Injektoren stehend lagern, sonst läuft der hydraulische Koppler leer → Injektor unbrauchbar; Steckverbindung nie bei laufendem Motor trennen, sonst kann der Injektor offen bleiben → unkontrollierte Einspritzung",
   "Ausgebaute Injektoren liegend lagern, damit der hydraulische Koppler gleichmäßig gefüllt bleibt; Steckverbindung nie bei laufendem Motor trennen, sonst kann der Injektor offen bleiben → unkontrollierte Einspritzung",
   "Ausgebaute Injektoren stehend lagern, sonst läuft der hydraulische Koppler leer → Injektor unbrauchbar; Steckverbindung vor dem Abstellen bei laufendem Motor trennen, damit sich der Piezo-Stapel entlädt",
   "Ausgebaute Injektoren stehend lagern, sonst läuft der hydraulische Koppler leer → Injektor unbrauchbar; vor dem Einbau mit Druckluft durch den Rücklaufanschluss ausblasen, damit der Koppler frei ist"
  ],
  "correct": 0,
  "explain": "Ausgebaute Injektoren stehend lagern – sonst läuft der hydraulische Koppler leer und lässt sich nicht wieder befüllen → Injektor unbrauchbar. Steckverbindung nie bei laufendem Motor trennen – der Injektor kann offen stehen bleiben → unkontrollierte Einspritzung, Motorschaden. Beide Regeln stehen auch in den Werkstatthinweisen der Hersteller. Ein falsch gelagerter Piezo-Injektor ist ein teurer Fehler.",
  "src": "FK 339–349, TB 277"
 },
 {
  "id": "1edb3317de80",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Beim Mengenvergleich zeigt ein Zylinder eine Korrektur von −2,0 mm³/Hub. Was bedeutet das?",
  "opts": [
   "Der Zylinder liefert mehr Drehmoment als der Durchschnitt, das Steuergerät nimmt dort Einspritzmenge zurück",
   "Der Zylinder liefert zu wenig Drehmoment, das Steuergerät spritzt dort deshalb 2,0 mm³ je Hub mehr ein als bei den anderen",
   "Der Injektor dieses Zylinders spritzt gar nicht mehr ein",
   "Der Raildruck ist an diesem Zylinder um 2 bar zu niedrig"
  ],
  "correct": 0,
  "explain": "Positive Korrektur = Zylinder zu schwach, bekommt mehr. Negative Korrektur = Zylinder zu stark, bekommt weniger. Die Werte zeigen die Abweichung vom Mittelwert aller Zylinder.",
  "src": "TB 277"
 },
 {
  "id": "d79ab8a6b0c3",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei einer Rücklaufmengenmessung beträgt die kleinste Rücklaufmenge 9 ml. Wie groß darf die größte Rücklaufmenge höchstens sein?",
  "opts": [
   "3 ml",
   "12 ml",
   "18 ml",
   "27 ml"
  ],
  "correct": 3,
  "explain": "Die größte Rücklaufmenge darf höchstens das Dreifache der kleinsten betragen: 3 × 9 ml = 27 ml.",
  "src": "TB 277"
 },
 {
  "id": "e66adc31fe52",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Testerfunktionen ihren Zweck zu.",
  "paare": [
   [
    "Leerlaufdrehzahlvergleich",
    "Zeigt die Drehzahlanteile je Zylinder bei abgeschalteter Laufruheregelung"
   ],
   [
    "Mengenvergleich",
    "Zeigt die Korrekturmenge je Zylinder in mm³/Hub"
   ],
   [
    "Dynamischer Kompressionstest",
    "Vergleicht die Starterdrehzahl je Zylinder bei abgeschalteter Einspritzung"
   ],
   [
    "Hochdrucktest",
    "Prüft Förderleistung und Dichtheit des Hochdruckteils bei höchstem Systemdruck"
   ],
   [
    "Injektoranpassung",
    "Speichert den IMA-Code eines neuen Injektors im Steuergerät"
   ]
  ],
  "ablenker": [
   "Misst den Ladedruck bei Volllast"
  ],
  "explain": "Diese Funktionen grenzen ein, ob ein Problem an einem einzelnen Zylinder (Injektor, Kompression) oder am Hochdruckteil liegt.",
  "src": "TB 277"
 },
 {
  "id": "2f277511bba0",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Der dynamische Kompressionstest ergibt folgende Starterdrehzahlen: Zyl. 1 259, Zyl. 2 258, Zyl. 3 257, Zyl. 4 280 1/min. Wie ist das Ergebnis zu beurteilen?",
  "opts": [
   "Zyl. 4 dreht deutlich schneller, weil seine Kompression zu hoch ist (z. B. Ölkohle im Brennraum); nächster Schritt Zyl. 4 entkoken",
   "Zyl. 4 dreht deutlich schneller (über 20 1/min, zulässig ca. 7 1/min) → Kompression in Zyl. 4 zu gering, z. B. undichte Ventile, Kolbenringe, Zylinderkopfdichtung; nächster Schritt Kompressionsdruck messen bzw. Druckverlusttest",
   "Zyl. 3 hat die niedrigste Starterdrehzahl und damit die geringste Kompression; nächster Schritt Kompressionsdruck an Zyl. 3 messen",
   "Zyl. 4 dreht deutlich schneller, weil sein Injektor zu viel einspritzt und den Anlasser unterstützt; nächster Schritt Injektor Zyl. 4 ersetzen"
  ],
  "correct": 1,
  "explain": "Zyl. 4 dreht deutlich schneller (über 20 1/min Unterschied, zulässig sind nur ca. 7 1/min). Höhere Starterdrehzahl bedeutet: Der Kolben muss weniger verdichten → Kompression in Zyl. 4 zu gering. Mögliche Ursachen: undichte Ventile, verschlissene Kolbenringe, defekte Zylinderkopfdichtung. Nächster Schritt: Kompressionsdruck messen bzw. Druckverlusttest an Zyl. 4. Beim dynamischen Kompressionstest ist die Einspritzung abgeschaltet. Ein Zylinder mit wenig Kompression bremst den Anlasser weniger – deshalb steigt die Drehzahl in seinem Verdichtungstakt.",
  "src": "TB 277"
 },
 {
  "id": "8465904bec41",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung von Ablauf und Prüfumfang des Hochdrucktests mit dem Diagnosetester ist richtig?",
  "opts": [
   "Bei abgeschalteter Einspritzung wird mit dem Anlasser die Starterdrehzahl je Zylinder verglichen; geprüft wird die Kompression; geprüft wird die Dichtheit der Ventile",
   "Ein Manometer wird am Rail angeschraubt und der Druck mit einer Handpumpe auf 2500 bar gebracht; geprüft wird der Druckabfall; geprüft wird nur die äußere Dichtheit",
   "Das Steuergerät steuert ZME und Druckregelventil gezielt an und baut bei ca. 3500 1/min den höchsten Systemdruck auf; geprüft werden Förderleistung, Druckaufbau und Druckabbau; geprüft wird die innere und äußere Dichtheit",
   "Das Steuergerät baut im Leerlauf den niedrigsten Systemdruck auf; geprüft wird nur der Vorförderdruck der Vorförderpumpe; geprüft wird die Dichtheit des Kraftstofftanks"
  ],
  "correct": 2,
  "explain": "Das Steuergerät steuert ZME und Druckregelventil gezielt an und baut bei vorgegebener Drehzahl (ca. 3500 1/min) den höchsten Systemdruck auf. Geprüft werden die Förderleistung der Hochdruckpumpe sowie Druckaufbau und Druckabbau und die innere und äußere Dichtheit des Hochdruckteils. Der Vergleich der Starterdrehzahlen gehört zum dynamischen Kompressionstest. Erreicht die Anlage den Solldruck nicht oder fällt er zu schnell ab, liegt der Fehler bei Pumpe, Regelventilen oder Undichtheiten.",
  "src": "TB 277"
 },
 {
  "id": "928774097fb9",
  "cat": "Diesel",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Ordnen Sie dem ausgefallenen Sensor die typische Reaktion des Motorsteuergeräts zu.",
  "paare": [
   [
    "Fahrpedalgeber (ein Geber defekt)",
    "Erhöhte Leerlaufdrehzahl, nur eingeschränkt fahrbereit"
   ],
   [
    "Nockenwellensensor (Hallgeber)",
    "Motor läuft ggf. weiter, springt nach dem Abstellen aber nicht mehr an"
   ],
   [
    "Raildrucksensor (Signal unter 0,25 V)",
    "Defekt erkannt, Notlauf bzw. Motorabschaltung"
   ]
  ],
  "ablenker": [
   "Keine Auswirkung, der Fehler wird nur gespeichert"
  ],
  "explain": "Der Fahrpedalgeber hat zwei Geber zur Plausibilisierung. Ohne Nockenwellensignal fehlt beim Start die Zylinderzuordnung. Beim Raildrucksensor wird ein Wert außerhalb des gültigen Bereichs als Defekt gewertet.",
  "src": "TB 278–279"
 },
 {
  "id": "3be1062e50a2",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "raildruck-kennlinie.svg",
  "q": "Ein Raildrucksensor gibt 0,5 V bei 0 bar und 4,5 V bei 2000 bar aus (Kennlinie linear). Im Messwertblock lesen Sie 3,1 V. Welchem Raildruck in bar entspricht das?",
  "opts": [
   "1.300 bar",
   "1.378 bar",
   "1.550 bar",
   "1.800 bar"
  ],
  "correct": 0,
  "formel": "lineare Kennlinie: p = (U − U_0) / (U_{max} − U_0) · p_{max}\nU_0 = Spannung bei 0 bar, U_{max} = Spannung bei p_{max}",
  "explain": "Steigung: 4,0 V auf 2000 bar → 500 bar je Volt. (3,1 V − 0,5 V) × 500 bar/V = 2,6 × 500 bar = 1300 bar (= 130 MPa, im Bild ablesbar).",
  "src": "FK 340–342"
 },
 {
  "id": "e62fbd0031d6",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Eigenschaften von AdBlue den richtigen Wert zu.",
  "paare": [
   [
    "Harnstoffanteil",
    "32,5 %"
   ],
   [
    "Gefrierpunkt",
    "ca. −11 °C"
   ],
   [
    "Wassergefährdungsklasse",
    "WGK 1"
   ],
   [
    "Beginn der thermischen Zersetzung",
    "ab ca. 60 °C"
   ]
  ],
  "ablenker": [
   "67,5 %",
   "ca. 170 °C"
  ],
  "explain": "AdBlue besteht aus 32,5 % hochreinem Harnstoff und 67,5 % demineralisiertem Wasser. Ab ca. 170 °C Abgastemperatur beginnt die Stickoxid-Reduktion im SCR-Kat – das ist ein anderer Wert als die Zersetzung im Kanister.",
  "src": "FK 357, TB Betriebsstoffe"
 },
 {
  "id": "32305b2c4d34",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Reaktion läuft im SCR-Katalysator ab?",
  "opts": [
   "Ammoniak (NH₃) reagiert mit Stickoxiden (NOx) zu Stickstoff (N₂) und Wasser (H₂O)",
   "Harnstoff verbrennt den Ruß im Partikelfilter zu CO₂",
   "Stickoxide werden mit Sauerstoff zu Ozon umgewandelt",
   "Ammoniak bindet die Rußpartikel und wird mit ihnen bis zur nächsten DPF-Regeneration gespeichert"
  ],
  "correct": 0,
  "explain": "Aus dem eingespritzten AdBlue entsteht in der Hydrolysestrecke Ammoniak. Dieses wandelt im SCR-Kat die Stickoxide in die harmlosen Stoffe Stickstoff und Wasser um.",
  "src": "FK 357"
 },
 {
  "id": "5c61a50d2bee",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aufgaben hat der Sperrkatalysator hinter dem SCR-Katalysator?",
  "opts": [
   "Wandelt Stickoxide mit Ammoniak in Stickstoff und Wasser um; speichert Ruß bis zur nächsten Regeneration",
   "Verhindert, dass überschüssiges Ammoniak ins Freie gelangt; erzeugt aus dem Harnstoff das Ammoniak für den SCR-Kat",
   "Verhindert, dass überschüssiges Ammoniak ins Freie gelangt; wandelt bei der DPF-Regeneration entstehendes CO in CO₂ um",
   "Hält AdBlue-Tröpfchen vom NOx-Sensor 1 fern; senkt die Abgastemperatur vor dem Endschalldämpfer"
  ],
  "correct": 2,
  "explain": "Der Sperrkat verhindert, dass überschüssiges Ammoniak ins Freie gelangt (stechender Geruch, gesundheitsschädlich), und wandelt das bei der DPF-Regeneration entstehende Kohlenmonoxid (CO) in CO₂ um. Das Ammoniak entsteht vorher in der Hydrolysestrecke. Wird mehr AdBlue dosiert, als der SCR-Kat umsetzen kann, tritt Ammoniak aus („Ammoniakschlupf“). Der Sperrkat fängt das ab.",
  "src": "FK 357"
 },
 {
  "id": "89664c3d79d0",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine SCR-Anlage hat zwei NOx-Sensoren. Welche Beschreibung von Einbauort und Nutzung der Signale ist richtig?",
  "opts": [
   "NOx-Sensor 1 sitzt nach dem SCR-Kat und liefert die Grundlage für die Dosiermenge; NOx-Sensor 2 sitzt vor dem Oxidationskat und überwacht dessen Wirkungsgrad",
   "Beide Sensoren sitzen vor dem Dosierventil; das Steuergerät bildet aus beiden Signalen den Mittelwert für die Dosiermenge, einer dient als Reserve",
   "NOx-Sensor 1 sitzt vor dem Dosierventil und regelt das Kraftstoff-Luft-Verhältnis; NOx-Sensor 2 sitzt nach dem SCR-Kat und misst nur den Ammoniakgehalt",
   "NOx-Sensor 1 sitzt vor dem Dosierventil, misst die Stickoxide aus dem Motor → Dosiermenge; NOx-Sensor 2 sitzt nach dem SCR-Kat und überwacht die Reduktion (Wirkungsgrad, Korrektur)"
  ],
  "correct": 3,
  "explain": "NOx-Sensor 1 sitzt vor dem Dosierventil und misst die Stickoxide aus dem Motor. Daraus berechnet das Steuergerät die benötigte AdBlue-Dosiermenge. NOx-Sensor 2 sitzt nach dem SCR-Kat und überwacht, ob die Stickoxide ausreichend reduziert wurden (Wirkungsgrad, Korrektur der Dosierung). Zeigt Sensor 2 zu hohe Werte, ist der Wirkungsgrad zu schlecht – z. B. durch falsches AdBlue, Kristalle am Dosierventil oder einen gealterten Kat. Das Steuergerät speichert dann einen Fehler.",
  "src": "FK 357, FW"
 },
 {
  "id": "f6d7aea76556",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt vier richtige Regeln für den Umgang mit AdBlue in der Werkstatt?",
  "opts": [
   "Verschüttetes AdBlue sofort mit Wasser abwaschen; nie in den Kraftstofftank füllen; Kristalle mit Bremsenreiniger oder Diesel lösen; Kanister verschlossen und vor Hitze geschützt lagern",
   "Verschüttetes AdBlue sofort mit Wasser abwaschen; nie in den Kraftstofftank füllen; Kristalle mit warmem Wasser entfernen; nur saubere Behälter, Kanister verschlossen und vor Hitze geschützt lagern",
   "Verschüttetes AdBlue eintrocknen lassen, es greift nichts an; nie in den Kraftstofftank füllen; Kristalle mit warmem Wasser entfernen; Kanister verschlossen und vor Hitze geschützt lagern",
   "Verschüttetes AdBlue sofort mit Wasser abwaschen; nie in den Kraftstofftank füllen; Kristalle mit warmem Wasser entfernen; Kanister im Winter auf der Heizung lagern, Wärme schadet nicht"
  ],
  "correct": 1,
  "explain": "Regeln: Verschüttetes AdBlue sofort mit Wasser abwaschen – es greift Lack und manche Metalle an. AdBlue nie in den Kraftstofftank füllen (und keinen Diesel in den AdBlue-Tank). Weiße Kristalle an Einfüllstutzen, Leitungen oder Dosierventil mit warmem Wasser entfernen. Nur saubere Behälter verwenden, Kanister verschlossen und vor Hitze geschützt lagern (Zersetzung ab ca. 60 °C). AdBlue ist kein Gefahrstoff, aber sehr kriechfähig. Verunreinigtes oder zersetztes AdBlue kann den SCR-Kat und das Dosiersystem schädigen.",
  "src": "FK 357, TB Betriebsstoffe"
 },
 {
  "id": "b8b8e2db9faa",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Im Kombiinstrument erscheint „AdBlue nachfüllen – Motorstart in 800 km nicht mehr möglich“. Welche Erklärung für den Kunden einschließlich des weiteren Vorgehens ist richtig?",
  "opts": [
   "Ohne AdBlue würden die Abgasgrenzwerte überschritten, deshalb zählt das System eine Restreichweite herunter; bei 0 km ist nach dem Abstellen kein Neustart mehr möglich; AdBlue nachfüllen und prüfen, ob die Warnung erlischt",
   "Ohne AdBlue würden die Abgasgrenzwerte überschritten, deshalb zählt das System eine Restreichweite herunter; bei 0 km geht der Motor während der Fahrt sofort aus; nur ein Tausch des SCR-Kats setzt die Anzeige zurück",
   "Die Meldung ist nur ein Serviceintervall-Hinweis; bei 0 km läuft der Motor mit voller Leistung weiter; AdBlue beim nächsten Inspektionstermin nachfüllen lassen",
   "Ohne AdBlue würden die Abgasgrenzwerte überschritten, deshalb zählt das System eine Restreichweite herunter; bei 0 km ist kein Neustart mehr möglich; bis zur Werkstatt Leitungswasser in den AdBlue-Tank füllen"
  ],
  "correct": 0,
  "explain": "Ohne AdBlue würde das Fahrzeug die Abgasgrenzwerte überschreiten, deshalb zählt das System eine Restreichweite herunter. Bei 0 km ist nach dem Abstellen kein Neustart mehr möglich (Startsperre). AdBlue in ausreichender Menge nachfüllen (Herstellerangabe), danach prüfen, ob die Warnung erlischt. Wasser oder andere Flüssigkeiten schädigen das SCR-System. Die Startsperre ist gesetzlich vorgeschrieben. Bleibt die Warnung trotz vollem Tank, liegt ein Fehler im System vor (z. B. Füllstandsgeber, Kristalle im Fördermodul).",
  "src": "Netz: Hengst/kfz-dietrich (siehe Recherche 3.6), FW"
 },
 {
  "id": "b0b565fa35cd",
  "cat": "Diesel",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Bauteile einer Pkw-Abgasanlage mit SCR-System in Strömungsrichtung des Abgases in die richtige Reihenfolge.",
  "schritte": [
   "Oxidationskatalysator",
   "Dieselpartikelfilter",
   "NOx-Sensor 1",
   "AdBlue-Dosierventil",
   "Mischer und Hydrolysestrecke",
   "SCR-Katalysator",
   "NOx-Sensor 2",
   "Sperrkatalysator"
  ],
  "explain": "Der NOx-Sensor 1 misst vor der Dosierung, damit das Steuergerät die AdBlue-Menge berechnen kann. In der Hydrolysestrecke entsteht aus dem Harnstoff Ammoniak, bevor das Abgas den SCR-Kat erreicht.",
  "src": "FK 357"
 },
 {
  "id": "c15c7d35d63e",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "scr-peugeot",
  "nr": 1,
  "q": "Der Kunde hat AdBlue nachgefüllt, die Meldung „Start in 600 km nicht möglich“ bleibt aber. Was bedeutet das?",
  "opts": [
   "Das System hat einen Fehler in der Abgasreinigung erkannt; auch dann zählt die Restreichweite herunter, bei 0 km ist kein Neustart möglich",
   "Der Tank ist trotz Nachfüllen noch fast leer, weil das Steuergerät den Füllstand nur einmal im Monat neu einliest und bis dahin den alten Wert anzeigt",
   "Die Meldung ist nur ein Hinweis auf den nächsten Service; der Motor startet auch bei 0 km normal weiter",
   "Der Motor geht bei 0 km während der Fahrt sofort aus, deshalb muss das Fahrzeug abgeschleppt werden"
  ],
  "correct": 0,
  "explain": "Die Startsperre wird nicht nur bei leerem Tank aktiv, sondern auch, wenn das Steuergerät einen Fehler im SCR-System erkennt (z. B. zu geringe Dosierung oder schlechter Wirkungsgrad). Die Restreichweite zählt dann herunter; bei 0 km ist nach dem Abstellen kein Neustart mehr möglich. Der Motor geht während der Fahrt nicht aus. Bleibt die Meldung trotz vollem Tank, muss das System diagnostiziert werden.",
  "src": "Netz: kfz-dietrich, Betriebsanleitungen (siehe ausbau-diesel.md), FW"
 },
 {
  "id": "da7fcc62f94a",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 6,
  "situation": "scr-peugeot",
  "nr": 2,
  "bild": "diesel-scr-anlage.svg",
  "q": "Ordnen Sie den Nummern im Bild der SCR-Anlage die Bauteile zu.",
  "paare": [
   [
    "①",
    "Oxidationskatalysator"
   ],
   [
    "②",
    "Dieselpartikelfilter"
   ],
   [
    "③",
    "Abgastemperatursensor"
   ],
   [
    "④",
    "NOx-Sensor 1"
   ],
   [
    "⑤",
    "Dosierventil"
   ],
   [
    "⑥",
    "SCR-Katalysator"
   ]
  ],
  "ablenker": [
   "Ladeluftkühler",
   "Lambdasonde nach Kat"
  ],
  "explain": "In Strömungsrichtung: Oxi-Kat (①), Partikelfilter (②), danach Temperatursensor (③) und NOx-Sensor 1 (④) vor der Dosierstelle, Dosierventil (⑤) mit Mischer, SCR-Kat (⑥) und NOx-Sensor 2 (⑦) dahinter. Der NOx-Sensor 1 sitzt vor dem Dosierventil, damit er die Stickoxide aus dem Motor misst.",
  "src": "FK 357, Eigenes Bild"
 },
 {
  "id": "fe91f543de7e",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 3,
  "bild": "diesel-scr-anlage.svg",
  "q": "Welche Aussage zu den Bauteilen ⑧, ⑨ und ⑩ im Bild ist richtig?",
  "opts": [
   "⑧ fördert AdBlue unter Druck zum Dosierventil; ⑨ kühlt das AdBlue im Sommer, damit es sich nicht zersetzt; ⑩ ist die Rücklaufleitung",
   "⑧ fördert AdBlue unter Druck zum Dosierventil; ⑨ und ⑩ verhindern bei Kälte das Einfrieren von Tank und Leitung",
   "⑧ ist der Füllstandsgeber; ⑨ und ⑩ verdampfen das AdBlue, damit im Abgasrohr schon gasförmiges Ammoniak ankommt",
   "⑧ saugt AdBlue aus dem Abgasrohr zurück; ⑨ und ⑩ heizen den SCR-Kat schneller auf Betriebstemperatur auf"
  ],
  "correct": 1,
  "explain": "⑧ ist das Fördermodul mit Pumpe: Es baut den Förderdruck auf und fördert AdBlue über die Leitung ⑩ zum Dosierventil. ⑨ (Tankheizung) und der Heizdraht der Leitung ⑩ verhindern bzw. lösen das Einfrieren – AdBlue gefriert bei ca. −11 °C. Ammoniak entsteht erst im heißen Abgas (Hydrolyse), nicht im Tank.",
  "src": "FK 357, Eigenes Bild"
 },
 {
  "id": "6a01c21b8949",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 4,
  "bild": "diesel-scr-anlage.svg",
  "q": "Was geschieht mit dem AdBlue auf dem Weg vom Dosierventil ⑤ zum SCR-Kat ⑥?",
  "opts": [
   "Das AdBlue verbrennt im heißen Abgas vollständig zu CO₂ und Wasser, bevor es den Kat erreicht",
   "Das AdBlue kühlt das Abgas ab, damit der SCR-Kat nicht überhitzt; eine chemische Umwandlung findet erst im Sperrkat statt",
   "Der Mischer verteilt die Tröpfchen, in der heißen Strecke zerfällt der Harnstoff zu Ammoniak (NH₃) und CO₂",
   "Das AdBlue bindet die Rußteilchen, die der Partikelfilter durchgelassen hat, und trägt sie aus dem Auspuff"
  ],
  "correct": 2,
  "explain": "Zwischen Dosierventil und SCR-Kat liegen Mischer und Hydrolysestrecke. Der Mischer verteilt das AdBlue fein im Abgas, die Hitze zersetzt den Harnstoff zu Ammoniak und CO₂. Im SCR-Kat reagiert das Ammoniak mit den Stickoxiden zu Stickstoff und Wasser. Ist das Abgas zu kalt, zersetzt sich der Harnstoff nicht vollständig.",
  "src": "FK 357"
 },
 {
  "id": "874b0c71f552",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 5,
  "q": "Welche Antwort nennt drei Testerfunktionen, die Ihnen bei dieser Beanstandung weiterhelfen?",
  "opts": [
   "Fehlerspeicher aller Steuergeräte mit Umgebungsbedingungen; Istwerte NOx-Sensor 1 und 2 sowie Förderdruck Soll/Ist; Injektoranpassung (IMA-Code) für alle Zylinder",
   "Fehlerspeicher sofort löschen und Restreichweite zurückstellen; Istwerte NOx-Sensor 1 und 2 sowie Förderdruck Soll/Ist; Stellglieddiagnose Dosiermengentest",
   "Fehlerspeicher aller Steuergeräte mit Umgebungsbedingungen; dynamischer Kompressionstest aller Zylinder; Stellglieddiagnose Dosiermengentest",
   "Fehlerspeicher aller Steuergeräte mit Umgebungsbedingungen; Istwerte NOx-Sensor 1 und 2 sowie Förderdruck Soll/Ist; Stellglieddiagnose Dosiermengentest"
  ],
  "correct": 3,
  "explain": "Hilfreich sind der Fehlerspeicher (mit Herstellertester, alle Steuergeräte, mit Umgebungsbedingungen), die Istwerte der NOx-Sensoren und des Förderdrucks sowie die Stellglieddiagnose mit Dosiermengentest. Wer den Fehlerspeicher ungelesen löscht, verliert die Hinweise. IMA-Codierung und Kompressionstest gehören zur Einspritzanlage bzw. Mechanik und helfen bei einer SCR-Störung nicht weiter.",
  "src": "Netz: kfz-dietrich (AdBlue-Diagnose), FW"
 },
 {
  "id": "d5ea5237a04e",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 6,
  "q": "Sie prüfen das AdBlue im Tank mit dem Refraktometer und lesen 32,0 % ab. Die Werkstattinformation nennt 31,8–33,2 %. Wie beurteilen Sie das?",
  "opts": [
   "In Ordnung, der Wert liegt im Sollbereich; die Qualität des AdBlue ist nicht die Ursache, die Suche geht weiter",
   "Zu niedrig, weil der Sollwert genau 32,5 % beträgt; das AdBlue ist mit Wasser verdünnt und muss abgesaugt werden",
   "Zu hoch, weil AdBlue nur ca. 30 % Harnstoff enthalten darf; das AdBlue ist zu konzentriert und kristallisiert deshalb",
   "Nicht verwertbar, weil ein Refraktometer nur Frostschutz im Kühlmittel messen kann, nicht aber den Harnstoffgehalt"
  ],
  "correct": 0,
  "explain": "AdBlue besteht aus 32,5 % Harnstoff und demineralisiertem Wasser. 32,0 % liegt innerhalb des angegebenen Bereichs (31,8–33,2 %) → Qualität in Ordnung. Mit dem Refraktometer lässt sich der Harnstoffgehalt schnell prüfen (eigene AdBlue-Skala). Falsches oder verdünntes AdBlue wäre eine häufige Ursache für schlechten Wirkungsgrad – hier ist es ausgeschlossen.",
  "src": "Netz: IKA, kfz-dietrich; FK 357"
 },
 {
  "id": "82bb1be018cf",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "scr-peugeot",
  "nr": 7,
  "q": "Bei warmem Motor zeigt der Tester: NOx-Sensor 1 = 400 ppm, NOx-Sensor 2 = 360 ppm. Wie groß ist der Wirkungsgrad der Stickoxid-Minderung?",
  "opts": [
   "90 %",
   "10 %",
   "11 %",
   "40 %"
  ],
  "correct": 1,
  "formel": "η = (NOx_{vor} − NOx_{nach}) / NOx_{vor} · 100 %\nvor = vor dem SCR-Kat, nach = nach dem SCR-Kat",
  "explain": "Wirkungsgrad = (NOx vor Kat − NOx nach Kat) ÷ NOx vor Kat × 100 % = (400 − 360) ppm ÷ 400 ppm × 100 % = 10 %. Typischer Fehler: 360 ÷ 400 = 90 % ist der Anteil, der übrig bleibt, nicht der abgebaute Anteil. 40 ÷ 360 ≈ 11 % bezieht sich auf den falschen Grundwert.",
  "src": "FW"
 },
 {
  "id": "a1f3d45fd69a",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 8,
  "q": "Der Wirkungsgrad liegt bei nur ca. 10 %. Welche Schlussfolgerung ist richtig?",
  "opts": [
   "Der NOx-Sensor 1 misst zu hoch; er wird ohne weitere Prüfung ersetzt, damit die Werte wieder zusammenpassen",
   "Der Motor erzeugt zu viele Stickoxide; als Nächstes werden die Injektoren auf Rücklaufmenge geprüft",
   "Im SCR-Kat kommt kaum Ammoniak an; als Nächstes werden Förderdruck und Dosiermenge geprüft",
   "Der Wert ist normal, weil ein SCR-Kat immer nur ca. 10 % der Stickoxide umsetzt"
  ],
  "correct": 2,
  "explain": "Ein intakter SCR-Kat mindert die Stickoxide bei Betriebstemperatur sehr stark. Liegt NOx 2 fast so hoch wie NOx 1, fehlt meist das Ammoniak – also wird zu wenig AdBlue dosiert. Deshalb zuerst die Versorgung prüfen: Förderdruck und Dosiermenge. Erst wenn die Dosierung stimmt, kommen Kat oder Sensoren in Frage.",
  "src": "Netz: kfz-dietrich, IKA; FW"
 },
 {
  "id": "c5d492b25290",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 9,
  "bild": "diesel-scr-schaltplan.svg",
  "q": "Wie wird das Dosierventil Y5 laut Schaltplan versorgt und angesteuert?",
  "opts": [
   "Plus über F4 und das Heizrelais K2; Masse fest an Klemme 31; das Steuergerät schaltet nur K2",
   "Plus vom Steuergerät A2 über Pin 12; Masse über Pin 20, gemeinsam mit dem Drucksensor B3",
   "Plus über F5 (Klemme 30); Masse über Pin 10, über den auch die Förderpumpe M1 läuft",
   "Plus über F5 (Klemme 30); das Steuergerät A2 schaltet über Pin 12 die Masse getaktet (PWM)"
  ],
  "correct": 3,
  "explain": "Y5 hängt mit seinem oberen Anschluss an der Leitung hinter F5 (Klemme 30). Die andere Seite führt zu Pin 12 von A2: Das Steuergerät schaltet masseseitig und taktet (PWM), so bestimmt es Öffnungsdauer und Dosiermenge. F4/K2 versorgen nur die Heizungen R1 und R2, Pin 10 die Pumpe M1.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "0b8de9db6c8b",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 6,
  "situation": "scr-peugeot",
  "nr": 10,
  "bild": "diesel-scr-schaltplan.svg",
  "q": "Messwerte am Dosierventil Y5: Plus-Pin gegen Masse 12,4 V (Zündung ein); Wicklung 13 Ω (Soll laut WI 12–15 Ω, Stecker ab); Oszilloskop an Messpunkt A bei Dosierung: Rechteck 0 V / 12,4 V. Wie ist das Ergebnis zu beurteilen?",
  "opts": [
   "Elektrisch in Ordnung: Versorgung, Wicklung und Ansteuerung stimmen; die Ursache liegt hydraulisch, z. B. Ventil verstopft",
   "Versorgung fehlt, weil am Plus-Pin 14 V anliegen müssten; F5 prüfen und das Dosierventil vorerst nicht ausbauen",
   "Ansteuerung fehlerhaft, weil ein bestromtes Ventil am Messpunkt A dauerhaft 12,4 V zeigen müsste; Steuergerät A2 ersetzen und neu codieren",
   "Wicklung defekt, weil ein Magnetventil unter 1 Ω haben muss; das Dosierventil ist elektrisch unterbrochen"
  ],
  "correct": 0,
  "explain": "12,4 V Versorgung bei Zündung ein ist Bordnetzspannung, der Widerstand liegt im Sollbereich und am Messpunkt A erscheint das PWM-Rechteck. Bei masseseitiger Ansteuerung bedeutet der untere Pegel (0 V) „bestromt“. Damit ist der elektrische Teil in Ordnung – wenn trotzdem zu wenig dosiert wird, liegt der Fehler hydraulisch oder mechanisch (Druck, Leitung, verstopftes Ventil).",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "160ccb291eb5",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 5,
  "situation": "scr-peugeot",
  "nr": 11,
  "q": "Dosiermengentest (Ventil ausgebaut, sprüht in Messbecher): Soll laut WI 30 ml ± 10 %, gemessen 6 ml. Der Förderdruck erreicht dabei den Sollwert. Was ist die wahrscheinlichste Ursache?",
  "opts": [
   "Fördermodul defekt, weil die Pumpe zu wenig Druck aufbaut; das Fördermodul wird ersetzt",
   "Dosierventil verstopft, z. B. durch Harnstoffkristalle; der Druck steht an, aber es kommt kaum etwas durch",
   "NOx-Sensor 2 defekt, weil er dem Steuergerät eine zu kleine Dosiermenge vorgibt; der Sensor wird ersetzt und angelernt",
   "Tankheizung defekt, weil das AdBlue im Tank gefroren ist; die Heizung R1 wird ersetzt"
  ],
  "correct": 1,
  "explain": "Der Förderdruck stimmt – Pumpe, Tank und Leitung liefern also genug. Trotzdem kommt nur ein Fünftel der Sollmenge aus dem Ventil: Das Dosierventil selbst ist verengt, meist durch Harnstoffkristalle an der Düse. Gefrorenes AdBlue würde schon keinen Druck aufbauen. Die Dosiermenge beim Test gibt das Steuergerät fest vor, nicht der NOx-Sensor.",
  "src": "Netz: kfz-dietrich (Kristallisation), FW"
 },
 {
  "id": "f95dcad21761",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "situation": "scr-peugeot",
  "nr": 12,
  "q": "Ordnen Sie jedem Prüfergebnis die richtige Bewertung zu.",
  "paare": [
   [
    "Refraktometer zeigt 32,0 %",
    "AdBlue-Qualität in Ordnung"
   ],
   [
    "NOx 2 fast so hoch wie NOx 1",
    "Wirkungsgrad der SCR-Anlage zu gering"
   ],
   [
    "Förderdruck Ist = Soll",
    "Fördermodul arbeitet"
   ],
   [
    "Dosiermenge 6 ml statt 30 ml",
    "Dosierventil lässt zu wenig durch"
   ]
  ],
  "ablenker": [
   "Tankheizung unterbrochen"
  ],
  "explain": "Die Prüfungen grenzen den Fehler Schritt für Schritt ein: Qualität gut, Druck gut, aber Menge zu klein → Fehler am Dosierventil. Der schlechte Wirkungsgrad ist die Folge davon. Zur Heizung gibt es in diesen Messungen keinen Hinweis.",
  "src": "FW"
 },
 {
  "id": "4a713eeb11ba",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 13,
  "q": "Das Fahrzeug fährt laut Kunde fast nur Kurzstrecke. Warum begünstigt das Ablagerungen am Dosierventil und im Mischer?",
  "opts": [
   "Bei Kurzstrecke wird mehr AdBlue verbraucht, deshalb läuft der Tank leer und das Ventil trocknet aus",
   "Bei Kurzstrecke ist der Förderdruck höher, deshalb wird das AdBlue zu fein zerstäubt und bildet am kalten Rohr Eis",
   "Bei Kurzstrecke bleibt das Abgas kalt; der Harnstoff zersetzt sich nicht vollständig und setzt sich als Kristalle ab",
   "Bei Kurzstrecke wird der Partikelfilter nicht regeneriert, deshalb gelangt Ruß in das AdBlue im Tank"
  ],
  "correct": 2,
  "explain": "Für die Umwandlung braucht der Harnstoff ein heißes Abgas. Bei häufig kaltem Abgas zersetzt er sich nur teilweise; es bilden sich feste Ablagerungen (Kristalle) an Düse, Mischer und Rohr. Sie verengen das Dosierventil und stören die Verteilung. Auch AdBlue-Reste, die nach dem Abstellen eintrocknen, bilden Kristalle.",
  "src": "Netz: kfz-dietrich, FW"
 },
 {
  "id": "ebe7fb7aa8f1",
  "cat": "Diesel",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "scr-peugeot",
  "nr": 14,
  "q": "Bringen Sie die Arbeitsschritte beim Ersetzen des Dosierventils in die richtige Reihenfolge.",
  "schritte": [
   "Abgasanlage abkühlen lassen, Zündung aus",
   "Stecker abziehen, AdBlue-Leitung lösen und austretendes AdBlue auffangen",
   "Dosierventil ausbauen, Sitz im Abgasrohr von Kristallen befreien",
   "Neues Dosierventil mit neuer Dichtung einbauen und mit Drehmoment nach WI anziehen",
   "Leitung und Stecker anschließen, System mit dem Tester befüllen bzw. entlüften",
   "Adaption durchführen, Fehlerspeicher löschen und Probefahrt"
  ],
  "explain": "Am heißen Abgasrohr besteht Verbrennungsgefahr. Austretendes AdBlue wird aufgefangen, weil es Lack und Metalle angreift. Kristalle im Sitz würden das neue Ventil sofort wieder stören. Erst nach dem Befüllen kann das Steuergerät Druck und Menge wieder richtig regeln und die Adaption abschließen.",
  "src": "FW, Netz: kfz-dietrich"
 },
 {
  "id": "af927f3776c2",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 15,
  "q": "Welche Antwort nennt richtige Regeln zu Arbeitsschutz und Umwelt bei dieser Reparatur?",
  "opts": [
   "AdBlue auf der Haut mit Wasser abspülen; aufgefangenes AdBlue zurück in den Tank füllen, weil es noch sauber ist; Abgasanlage abkühlen lassen",
   "AdBlue auf der Haut mit Bremsenreiniger entfernen; aufgefangenes AdBlue fachgerecht entsorgen; Abgasanlage abkühlen lassen",
   "AdBlue auf der Haut mit Wasser abspülen; aufgefangenes AdBlue in den Abfluss gießen, weil es nur WGK 1 hat; Abgasanlage abkühlen lassen",
   "AdBlue auf der Haut mit Wasser abspülen; aufgefangenes AdBlue fachgerecht entsorgen; Abgasanlage abkühlen lassen"
  ],
  "correct": 3,
  "explain": "AdBlue mit viel Wasser von Haut und Lack abwaschen. Aufgefangenes AdBlue kann verschmutzt sein und darf nicht zurück in den Tank – schon kleine Verunreinigungen schädigen Dosierventil und Kat. Auch mit WGK 1 ist es wassergefährdend und gehört nicht in den Abfluss. Bremsenreiniger auf der Haut ist schädlich.",
  "src": "FK 357, FW"
 },
 {
  "id": "30d0282433a4",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 16,
  "q": "Nach dem Einbau zeigt das Display weiterhin „Start in 590 km nicht möglich“. Was ist zu tun?",
  "opts": [
   "Mit dem Tester Fehlerspeicher löschen bzw. Freigabe/Adaption nach WI durchführen und den Wirkungsgrad bei einer Probefahrt bestätigen lassen",
   "Nichts, die Meldung verschwindet nach weiteren 590 km von selbst, weil der Zähler dann abgelaufen ist",
   "Die Batterie für eine Stunde abklemmen, damit das Steuergerät alle Zähler auf null setzt und die Startsperre entfällt, so wie nach jedem Batteriewechsel",
   "Den NOx-Sensor 2 abstecken, damit das Steuergerät den Wirkungsgrad nicht mehr überwachen kann"
  ],
  "correct": 0,
  "explain": "Die Startsperre wird erst zurückgenommen, wenn der Fehler behoben und vom Steuergerät bestätigt ist: Fehlerspeicher löschen bzw. Freigabe oder Adaption mit dem Tester nach Herstellerangabe, danach Probefahrt, bei der das System den Wirkungsgrad wieder als gut erkennt. Ein abgesteckter Sensor oder ein Batterie-Reset beheben nichts und sind bei Abgasbauteilen unzulässig.",
  "src": "Netz: kfz-dietrich, FW"
 },
 {
  "id": "1771536c3a7b",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "scr-peugeot",
  "nr": 17,
  "q": "Bei der Probefahrt zeigt der Tester NOx-Sensor 1 = 380 ppm und NOx-Sensor 2 = 30 ppm. Wie ist das Ergebnis zu beurteilen?",
  "opts": [
   "Wirkungsgrad ca. 8 %; die SCR-Anlage arbeitet weiterhin nicht, der Kat muss ersetzt werden",
   "Wirkungsgrad ca. 92 %; die SCR-Anlage arbeitet wieder, die Reparatur war erfolgreich",
   "Wirkungsgrad ca. 92 %; zu hoch, es wird zu viel AdBlue dosiert und Ammoniak tritt aus",
   "Wirkungsgrad nicht bestimmbar, weil beide Sensoren gleichzeitig angezeigt werden müssten"
  ],
  "correct": 1,
  "formel": "η = (NOx_{vor} − NOx_{nach}) / NOx_{vor} · 100 %\nvor = vor dem SCR-Kat, nach = nach dem SCR-Kat",
  "explain": "(380 − 30) ppm ÷ 380 ppm × 100 % ≈ 92 %. Die Stickoxide werden wieder stark gemindert – die Reparatur hat gewirkt. Ein hoher Wirkungsgrad ist das Ziel; überschüssiges Ammoniak würde zusätzlich der Sperrkat abfangen. 8 % wäre der Rest, nicht die Minderung.",
  "src": "FW"
 },
 {
  "id": "46f69dec8aa0",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "scr-peugeot",
  "nr": 18,
  "q": "Welchen Hinweis geben Sie dem Kunden bei der Fahrzeugübergabe?",
  "opts": [
   "AdBlue bei Bedarf mit etwas Leitungswasser strecken, damit der Tank länger reicht",
   "Die AdBlue-Warnung künftig ignorieren, weil der Motor auch bei 0 km Restreichweite weiter anspringt",
   "Ab und zu längere Strecken fahren und nur AdBlue nach ISO 22241 aus sauberen Behältern nachfüllen",
   "Zur Sicherheit etwas AdBlue in den Dieseltank geben, damit sich keine Kristalle bilden"
  ],
  "correct": 2,
  "explain": "Längere Fahrten bringen die Abgasanlage auf Temperatur, dadurch zersetzt sich der Harnstoff vollständig und Ablagerungen werden seltener. Nur genormtes AdBlue (ISO 22241) verwenden, nie verdünnen, nie in den Kraftstofftank füllen. Bei 0 km Restreichweite ist kein Neustart möglich.",
  "src": "FW"
 },
 {
  "id": "9a7fa7603fb1",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "scr-peugeot",
  "nr": 19,
  "q": "Was ist beim Kostenvoranschlag bzw. Auftrag für diese Reparatur rechtlich wichtig?",
  "opts": [
   "Die Reparatur darf ohne Rückfrage ausgeführt werden, weil eine Startsperre droht; der Kunde muss jede Rechnung in voller Höhe bezahlen",
   "Eine Abschaltung der SCR-Anlage per Software ist erlaubt, wenn der Kunde schriftlich zustimmt und die Kosten trägt",
   "Der Kostenvoranschlag ist immer kostenlos und verbindlich, auch wenn sich bei der Reparatur weitere Schäden zeigen",
   "Zusätzliche Arbeiten über den Auftrag hinaus (z. B. Dosierventil ersetzen) vorher mit dem Kunden abstimmen und dokumentieren"
  ],
  "correct": 3,
  "explain": "Arbeiten, die über den erteilten Auftrag hinausgehen, müssen vorher mit dem Kunden abgesprochen werden (Auftragserweiterung) – sonst muss er sie nicht bezahlen. Das Abschalten oder Manipulieren der Abgasreinigung ist verboten, auch mit Zustimmung des Kunden (Betriebserlaubnis erlischt). Ob ein Kostenvoranschlag etwas kostet, muss vorher vereinbart werden.",
  "src": "FW (Kfz-Reparaturbedingungen)"
 },
 {
  "id": "87d92653cb6f",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Über welche Sicherung bekommen Zumesseinheit Y1 und Druckregelventil Y2 laut Schaltplan ihr Plus?",
  "opts": [
   "F2, hinter dem Hauptrelais K1 (Klemme 87)",
   "F1, direkt von Klemme 30, damit sie auch bei abgeschalteter Zündung versorgt sind",
   "F3, die auch das Motorsteuergerät über Pin 2 versorgt",
   "Gar keine, weil das Steuergerät beide Ventile über Pin 30 und 31 mit Plus versorgt"
  ],
  "correct": 0,
  "explain": "Von der Leitung 87 hinter K1 führt F2 zu einem Knoten, der Y1 und Y2 mit Plus versorgt. Die Pins 30 und 31 des Steuergeräts liegen auf der anderen Seite der Ventile – dort schaltet A1 die Masse. F1 versorgt Pin 1 (Dauerplus), F3 den Pin 2.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "15b2e0c6a753",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Über welchen Pin und auf welche Weise steuert das Motorsteuergerät A1 die Zumesseinheit Y1 an?",
  "opts": [
   "Über Pin 31; es legt dort dauerhaft 12 V an, solange der Motor läuft",
   "Über Pin 30; es schaltet die Masse getaktet (PWM)",
   "Über Pin 21; es gibt dort eine Spannung von 0,5–4,5 V aus, die der Raildruck-Sollwert ist",
   "Über Pin 4; es schaltet zuerst das Hauptrelais und damit direkt die Zumesseinheit"
  ],
  "correct": 1,
  "explain": "Y1 bekommt Plus über F2. Die zweite Leitung geht zu Pin 30 von A1. Das Steuergerät schaltet diese Seite nach Masse und taktet dabei (PWM) – das Tastverhältnis bestimmt die Öffnung der ZME. Pin 31 gehört zu Y2, Pin 21 ist das Signal des Raildrucksensors.",
  "src": "Eigener Schaltplan, FK 340–342"
 },
 {
  "id": "2d11d99dc6a6",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Ordnen Sie den Pins des Motorsteuergeräts A1 ihre Aufgabe laut Schaltplan zu.",
  "paare": [
   [
    "Pin 1",
    "Dauerplus über F1"
   ],
   [
    "Pin 3",
    "Masse des Steuergeräts"
   ],
   [
    "Pin 4",
    "Ansteuerung Hauptrelais K1 (Klemme 85)"
   ],
   [
    "Pin 20",
    "5-V-Versorgung Raildrucksensor"
   ],
   [
    "Pin 21",
    "Signal Raildrucksensor"
   ],
   [
    "Pin 22",
    "Masse Raildrucksensor"
   ]
  ],
  "ablenker": [
   "Signal Kurbelwellengeber",
   "Ansteuerung Druckregelventil"
  ],
  "explain": "Pin 1 hängt über F1 an Klemme 30, Pin 3 an Masse (31). Pin 4 führt zur Klemme 85 von K1 – das Steuergerät schaltet so die Relaisspule. Die Pins 20, 21 und 22 gehören zum dreipoligen Raildrucksensor B1. Der KW-Geber hängt an Pin 50/51, das Druckregelventil an Pin 31.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "5df5667bb363",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Sie messen bei Zündung ein und drucklosem Rail an Messpunkt A gegen Masse. Welcher Wert ist richtig?",
  "opts": [
   "ca. 0 V, weil ohne Druck kein Signal entsteht",
   "ca. 5 V, weil das die Versorgung des Sensors ist",
   "ca. 0,5 V",
   "ca. 12 V"
  ],
  "correct": 2,
  "explain": "Messpunkt A liegt auf der Signalleitung (B1 Pin 2 → A1 Pin 21). Bei drucklosem Rail gibt der Sensor ca. 0,5 V aus, mit steigendem Druck bis ca. 4,5 V. 0 V oder 5 V wären Fehlerbilder (Kurzschluss nach Masse bzw. nach Versorgung, Unterbrechung der Masse). Das Steuergerät wertet unter ca. 0,25 V und über ca. 4,75 V als Defekt.",
  "src": "Eigener Schaltplan, TB 278–279"
 },
 {
  "id": "6b38f5ce4a36",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Der Motor springt nicht an, Fehler „Zumesseinheit und Druckregelventil – Unterbrechung“. Bei Zündung ein messen Sie gegen Masse: Leitung 87 hinter K1 12,5 V, Messpunkt C 0 V. Wo liegt der Fehler?",
  "opts": [
   "Das Hauptrelais K1 schaltet nicht, weil an Leitung 87 sonst 0 V anliegen müssten",
   "Das Steuergerät schaltet an Pin 30 und 31 keine Masse, deshalb fehlt an Messpunkt C die Spannung",
   "Der Raildrucksensor meldet keinen Druck, deshalb schaltet das Steuergerät die Ventile ab",
   "Die Sicherung F2 ist durchgebrannt oder ihr Kontakt ist unterbrochen"
  ],
  "correct": 3,
  "explain": "Vor F2 (Leitung 87) liegen 12,5 V an – K1 hat also geschaltet. Hinter F2 an Messpunkt C liegen 0 V: Die Unterbrechung liegt in F2 bzw. ihrem Halter. Die Masseansteuerung über Pin 30/31 beeinflusst die Spannung an C nicht, denn C liegt auf der Plusseite vor den Ventilen.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "eb5e230c51a3",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "An Messpunkt A messen Sie bei stehendem und bei laufendem Motor gleichbleibend 4,9 V, an Pin 20 liegen 5,0 V. Wie ist das zu beurteilen?",
  "opts": [
   "Fehler: Über ca. 4,75 V erkennt A1 einen Defekt; z. B. Masse B1 (Pin 3 → Pin 22) unterbrochen oder Signal nach 5 V kurzgeschlossen",
   "Der Raildruck ist sehr hoch, aber in Ordnung; das Signal ändert sich nur bei Volllast, deshalb ist keine weitere Prüfung der Leitungen nötig",
   "Fehler: Der Sensor bekommt zu wenig Versorgung, weil 5,0 V zu gering sind; der Sensor braucht Bordnetzspannung",
   "In Ordnung, weil ein Sensorsignal immer knapp unter der Versorgungsspannung liegen muss"
  ],
  "correct": 0,
  "explain": "Ein Signal, das sich mit dem Druck nicht ändert und über ca. 4,75 V liegt, ist unplausibel – das Steuergerät setzt einen Fehler (Notlauf bzw. Abschaltung). Typische Ursachen: unterbrochene Sensormasse (dann zieht das Signal Richtung Versorgung) oder Kurzschluss der Signalleitung zur 5-V-Leitung. Als Nächstes Masseleitung und Signalleitung auf Durchgang und Kurzschluss prüfen. Die 5 V Versorgung sind richtig.",
  "src": "Eigener Schaltplan, TB 278–279"
 },
 {
  "id": "41cefd2a1b2c",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Wie wird der Injektor Y3 laut Schaltplan angeschlossen?",
  "opts": [
   "Plus über F2 wie Y1 und Y2, Masse über Pin 40",
   "Beide Anschlüsse gehen zum Steuergerät (Pin 40 und 41), A1 schaltet Plus- und Masseseite",
   "Plus über das Hauptrelais K1, Masse fest an Klemme 31",
   "Über Pin 50 und 51, weil der Injektor wie der KW-Geber ein Signal liefert"
  ],
  "correct": 1,
  "explain": "Injektoren werden vom Steuergerät auf beiden Seiten geschaltet: Die Plusseite bekommt im Anzug die hohe Boosterspannung aus dem Steuergerät, die Masseseite wählt den Zylinder aus. Deshalb führen beide Leitungen von Y3 zu A1 (Pin 40 und 41). Pin 50/51 gehören zum KW-Geber B2.",
  "src": "Eigener Schaltplan, FK 339–349"
 },
 {
  "id": "a581d8d8fec4",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Wie wird das Hauptrelais K1 laut Schaltplan eingeschaltet, und was versorgt es?",
  "opts": [
   "Klemme 30 liegt an 86, Klemme 15 an 85; K1 versorgt nur den Pin 1 des Steuergeräts",
   "Das Steuergerät legt über Pin 4 Plus an 85; der Kontakt 30/87 versorgt die Injektoren Y3 und Y4 direkt mit Bordnetzspannung",
   "Klemme 15 liegt an 86, A1 schaltet über Pin 4 die Klemme 85 nach Masse; der Kontakt 30/87 versorgt F2 und F3",
   "Klemme 15 liegt an 86, 85 hängt direkt an Masse; der Kontakt 30/87 versorgt F1 und den Pin 1"
  ],
  "correct": 2,
  "explain": "Die Spule liegt zwischen 86 (Klemme 15) und 85, die zu Pin 4 führt. Schaltet A1 Pin 4 nach Masse, zieht das Relais an und verbindet Klemme 30 mit 87. Von 87 werden über F2 die Ventile Y1/Y2 und über F3 der Pin 2 des Steuergeräts versorgt. F1 und Pin 1 hängen direkt an Klemme 30.",
  "src": "Eigener Schaltplan, DIN 72552"
 },
 {
  "id": "24d5f7756c7f",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-motorsteuerung-schaltplan.svg",
  "q": "Der Kurbelwellengeber B2 ist laut Schaltplan zweipolig (Pin 50/51) angeschlossen. Welche Aussage zu Geberart und Signal ist richtig?",
  "opts": [
   "Hallgeber; er braucht eine 5-V-Versorgung und liefert ein Rechtecksignal mit konstanter Höhe",
   "Induktivgeber; er liefert eine Gleichspannung, die mit der Drehzahl gleichmäßig von 0,5 auf 4,5 V steigt wie beim Raildrucksensor",
   "Hallgeber; er liefert bei stehendem Motor ein Signal, das die Kolbenstellung als Spannung anzeigt",
   "Induktivgeber; er erzeugt ohne Versorgung eine Wechselspannung, Höhe und Frequenz steigen mit der Drehzahl"
  ],
  "correct": 3,
  "explain": "Ein Induktivgeber braucht keine Versorgung, deshalb reichen zwei Leitungen. Die vorbeilaufenden Zähne induzieren eine Wechselspannung, deren Höhe und Frequenz mit der Drehzahl steigen; die Zahnlücke dient als Bezugsmarke. Ein Hallgeber hätte drei Anschlüsse (Versorgung, Signal, Masse) und ein Rechtecksignal.",
  "src": "Eigener Schaltplan, TB 278–279, FW"
 },
 {
  "id": "149f5e749b78",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 3,
  "bild": "diesel-oszi-injektorstrom.svg",
  "q": "Ordnen Sie den Abschnitten ①–③ im Oszillogramm den richtigen Vorgang zu.",
  "paare": [
   [
    "①",
    "Anzugsphase mit hohem Strom aus der Boosterspannung"
   ],
   [
    "②",
    "Haltephase mit getaktetem, kleinerem Strom"
   ],
   [
    "③",
    "Abschalten – Strom fällt auf null, die Düsennadel schließt"
   ]
  ],
  "ablenker": [
   "Laden des Piezo-Stapels wie ein Kondensator"
  ],
  "explain": "Zum schnellen Öffnen braucht der Magnet kurz einen hohen Strom (①). Zum Offenhalten genügt ein kleinerer Strom, der getaktet wird (②). Beim Abschalten (③) bricht der Strom zusammen und der Injektor schließt. Ein Piezo-Injektor verhält sich wie ein Kondensator – sein Strombild sieht anders aus.",
  "src": "Eigenes Oszillogramm, FK 339–349"
 },
 {
  "id": "577ab22a74ed",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-oszi-injektorstrom.svg",
  "q": "Lesen Sie aus dem Oszillogramm den Anzugsstrom und den mittleren Haltestrom ab.",
  "opts": [
   "ca. 20 A Anzug; ca. 12,5 A Halten",
   "ca. 25 A Anzug; ca. 12,5 A Halten",
   "ca. 4 A Anzug; ca. 2,5 A Halten",
   "ca. 20 A Anzug; ca. 10 A Halten"
  ],
  "correct": 0,
  "formel": "I = Kästchen ab der Null-Linie · A je Kästchen",
  "explain": "Die Spitze liegt 4 Kästchen über der Null-Linie: 4 × 5 A = 20 A. Der Haltestrom pendelt zwischen 10 A und 15 A (2 bis 3 Kästchen), im Mittel also ca. 12,5 A. Wer nur Kästchen zählt, ohne mit 5 A zu multiplizieren, kommt auf 4 bzw. 2,5. 10 A ist nur der untere Wert der Pendelung.",
  "src": "Eigenes Oszillogramm, FK 339–349"
 },
 {
  "id": "5e6b10d1cdcb",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-oszi-injektorstrom.svg",
  "q": "Wie lange wird der Injektor laut Oszillogramm angesteuert (Strombeginn bis Abschalten)?",
  "opts": [
   "0,7 ms",
   "0,6 ms",
   "6 ms",
   "0,45 ms"
  ],
  "correct": 1,
  "formel": "t = t_{Ende} − t_{Beginn} = Kästchen · Zeit je Kästchen",
  "explain": "Der Strom beginnt bei 0,1 ms und fällt bei 0,7 ms auf null: 0,7 ms − 0,1 ms = 0,6 ms (6 Kästchen × 0,1 ms). 0,7 ms ist der Endzeitpunkt, nicht die Dauer; 6 ms entsteht, wenn man das Kästchen mit 1 ms statt 0,1 ms rechnet.",
  "src": "Eigenes Oszillogramm"
 },
 {
  "id": "b0a69c8c90d5",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-oszi-injektorstrom.svg",
  "q": "Das Bild zeigt den Injektor von Zyl. 1. Am Injektor von Zyl. 2 bleibt der Strom trotz Ansteuerung dauerhaft bei 0 A. Was ist die wahrscheinlichste Ursache und der nächste Schritt?",
  "opts": [
   "Injektor Zyl. 2 ist innen undicht; als Nächstes die Rücklaufmenge messen, weil Lecköl im Magnetventil den Strom verhindert",
   "Der Raildruck ist zu niedrig; als Nächstes den Raildrucksensor ersetzen, weil ohne Druck kein Strom fließt",
   "Stromkreis von Injektor Zyl. 2 unterbrochen (Spule, Leitung, Stecker); Widerstand von Spule und Leitungen messen",
   "Der Injektor arbeitet richtig, weil ein Magnetventil nur beim Abschalten einen Strom zeigt"
  ],
  "correct": 2,
  "explain": "Fließt trotz Ansteuerung gar kein Strom, ist der Stromkreis unterbrochen – in der Spule, in einer der beiden Leitungen zum Steuergerät oder am Stecker. Deshalb stromlos Spulen- und Leitungswiderstand messen. Eine innere Undichtheit verändert die Menge, nicht den elektrischen Strom; der Raildruck hat keinen Einfluss darauf, ob Strom fließt.",
  "src": "Eigenes Oszillogramm, FW"
 },
 {
  "id": "87be249b4143",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-oszi-injektorstrom.svg",
  "q": "Warum fällt der Strom nach Abschnitt ① auf den kleineren Haltestrom ab?",
  "opts": [
   "Weil sich die Spule beim Öffnen so stark erwärmt, dass ihr Widerstand verdoppelt",
   "Weil der Raildruck während der Einspritzung abfällt und der Injektor deshalb weniger Strom aufnimmt als beim Öffnen gegen den vollen Druck",
   "Weil die Boosterspannung jetzt in die Rücklaufleitung abgeleitet wird",
   "Weil das Offenhalten weniger Kraft braucht als das Öffnen; der kleinere Strom spart Leistung und schont Spule und Steuergerät"
  ],
  "correct": 3,
  "explain": "Zum Abheben des Ankers braucht der Magnet viel Kraft, danach steht der Anker am Anschlag und der Luftspalt ist klein – ein kleinerer Strom hält ihn. Das senkt Verlustleistung und Erwärmung von Spule und Endstufe und das Ventil schließt nach dem Abschalten schneller.",
  "src": "FK 339–349, FW"
 },
 {
  "id": "845483df6be1",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-scr-anlage.svg",
  "q": "Welche Nummer im Bild ist der Sensor, aus dessen Signal das Steuergerät vor allem die benötigte AdBlue-Menge berechnet?",
  "opts": [
   "④",
   "③, weil die Abgastemperatur allein die Dosiermenge bestimmt",
   "⑦, weil er hinter dem SCR-Kat die Reststickoxide misst",
   "⑧"
  ],
  "correct": 0,
  "explain": "Der NOx-Sensor 1 (④) misst die Stickoxide aus dem Motor vor der Dosierstelle – danach richtet sich die Dosiermenge. Der Temperatursensor (③) gibt die Freigabe (Abgas warm genug). Der NOx-Sensor 2 (⑦) überwacht den Wirkungsgrad und korrigiert. ⑧ ist das Fördermodul.",
  "src": "FK 357, Eigenes Bild"
 },
 {
  "id": "6aac76313ecc",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-scr-anlage.svg",
  "q": "Warum braucht das Steuergerät für die AdBlue-Dosierung das Signal des Abgastemperatursensors ③?",
  "opts": [
   "Damit es das AdBlue im Tank auf Abgastemperatur vorwärmen kann",
   "Weil erst ab ausreichender Abgastemperatur (ca. 170 °C) dosiert werden darf; zu kaltes Abgas führt zu Ablagerungen",
   "Weil der Sensor bei zu heißem Abgas die Startsperre auslöst",
   "Weil der Sensor den Füllstand im AdBlue-Tank über die Temperatur des Fördermoduls ermittelt und an das Kombiinstrument meldet"
  ],
  "correct": 1,
  "explain": "Die Stickoxid-Minderung im SCR-Kat beginnt erst ab ca. 170 °C, und der Harnstoff zersetzt sich nur im heißen Abgas vollständig. Bei zu kaltem Abgas würde das AdBlue Ablagerungen bilden. Deshalb gibt das Steuergerät die Dosierung erst frei, wenn der Temperatursensor genug Wärme meldet.",
  "src": "FK 357"
 },
 {
  "id": "e3d203d4e799",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "diesel-scr-schaltplan.svg",
  "q": "Im Winter meldet das Steuergerät „Leitungsheizung – Unterbrechung“. Bei angesteuertem K2 messen Sie an Messpunkt B 12,4 V gegen Masse, am abgesteckten R2 ∞ Ω. Wo liegt der Fehler?",
  "opts": [
   "Sicherung F4 ist durchgebrannt, weil an Messpunkt B sonst 0 V anliegen müssten",
   "Das Relais K2 schaltet nicht, weil das Steuergerät Pin 7 nicht nach Masse schaltet",
   "Die Heizung R2 in der Leitung ist unterbrochen",
   "Die Tankheizung R1 ist kurzgeschlossen und zieht die Spannung von R2 ab"
  ],
  "correct": 2,
  "explain": "12,4 V an Messpunkt B zeigen: F4 ist in Ordnung und K2 hat geschaltet – die Spannung kommt bei R2 an. Der Widerstand ∞ Ω am abgesteckten R2 zeigt eine Unterbrechung des Heizdrahts. Ein Kurzschluss von R1 hätte F4 ausgelöst; dann läge an B keine Spannung an.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "4589d82be20e",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "diesel-scr-schaltplan.svg",
  "q": "Ordnen Sie den Anschlüssen des Steuergeräts A2 ihre Aufgabe laut Schaltplan zu.",
  "paare": [
   [
    "Pin 7",
    "Masse für die Spule des Heizrelais K2"
   ],
   [
    "Pin 10",
    "Versorgung der Förderpumpe M1"
   ],
   [
    "Pin 12",
    "Getaktete Masse des Dosierventils Y5"
   ],
   [
    "Pin 21",
    "Signal des Drucksensors B3"
   ]
  ],
  "ablenker": [
   "Plus für Tank- und Leitungsheizung"
  ],
  "explain": "Pin 7 führt zur Klemme 85 von K2 – A2 schaltet die Spule nach Masse. Pin 10 versorgt M1, Pin 12 schaltet Y5 masseseitig per PWM, Pin 21 ist der mittlere Anschluss des dreipoligen Drucksensors (Signal). Die Heizungen bekommen ihr Plus über F4 und den Kontakt von K2, nicht direkt vom Steuergerät.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "52fcda14b8f6",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "bild": "diesel-scr-schaltplan.svg",
  "q": "Sie wollen prüfen, ob das Steuergerät die Förderpumpe M1 überhaupt ansteuert. Wo und wie messen Sie?",
  "opts": [
   "An Messpunkt A mit dem Ohmmeter bei laufendem Motor",
   "An Messpunkt B gegen Masse mit dem Voltmeter bei Zündung aus",
   "An F5 mit dem Strommesser im Leitungsweg zum Dosierventil, bei abgestecktem M1 und laufendem Motor",
   "An Messpunkt C gegen Masse mit Voltmeter bzw. Oszilloskop, während die Pumpe angesteuert wird"
  ],
  "correct": 3,
  "explain": "Messpunkt C liegt auf der Leitung von A2 Pin 10 zur Pumpe M1. Liegt dort bei Ansteuerung Spannung an (oft getaktet, darum ggf. Oszilloskop), arbeitet das Steuergerät; läuft die Pumpe trotzdem nicht, ist M1 oder ihre Masse fehlerhaft. Messpunkt A gehört zum Dosierventil, B zur Leitungsheizung. Widerstände misst man nur stromlos.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "201d3f7b1f50",
  "cat": "Diesel",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Begriffen zur Drehzahl- und Positionserfassung die passende Beschreibung zu.",
  "paare": [
   [
    "Induktivgeber",
    "Wechselspannung, Höhe und Frequenz steigen mit der Drehzahl"
   ],
   [
    "Hallgeber",
    "Rechtecksignal gleicher Höhe, braucht eine Versorgungsspannung"
   ],
   [
    "Zahnlücke am Geberrad",
    "Bezugsmarke für die Kurbelwellenstellung"
   ],
   [
    "Nockenwellengeber",
    "Erkennt, welcher Zylinder im Verdichtungstakt ist"
   ]
  ],
  "ablenker": [
   "Misst den Kolbenhub in Millimetern"
  ],
  "explain": "Der Induktivgeber erzeugt seine Spannung selbst, deshalb hängt sie von der Drehzahl ab. Der Hallgeber braucht Versorgung und liefert ein Rechteck, auch bei sehr niedriger Drehzahl. Aus der Zahnlücke erkennt das Steuergerät die Kurbelwellenstellung, aus dem Nockenwellensignal die Zylinderzuordnung.",
  "src": "TB 278–279, FW"
 },
 {
  "id": "5bcc473de49d",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Ordnen Sie den Teileinspritzungen ihre Hauptaufgabe zu.",
  "paare": [
   [
    "Voreinspritzung",
    "Sanfterer Druckanstieg, leiseres Verbrennungsgeräusch"
   ],
   [
    "Haupteinspritzung",
    "Erzeugt das Drehmoment des Motors"
   ],
   [
    "Späte Nacheinspritzung",
    "Erhöht die Abgastemperatur, z. B. für die DPF-Regeneration"
   ]
  ],
  "ablenker": [
   "Wärmt die Ansaugluft vor dem Start vor"
  ],
  "explain": "Eine kleine Voreinspritzung lässt die Verbrennung weicher beginnen – der Motor nagelt weniger. Die Haupteinspritzung liefert die Arbeit. Eine späte Nacheinspritzung verbrennt nicht mehr im Zylinder zu Arbeit, sondern heizt Abgas und Oxi-Kat auf. Kalte Ansaugluft wärmt die Glühanlage, nicht die Einspritzung.",
  "src": "FK 339–349"
 },
 {
  "id": "8cc7240f1517",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum hat ein elektronischer Fahrpedalgeber zwei voneinander unabhängige Geber?",
  "opts": [
   "Das Steuergerät vergleicht beide Signale; passen sie nicht zusammen, erkennt es einen Fehler und geht in den Notlauf",
   "Ein Geber meldet das Gaspedal, der andere das Bremspedal, damit beide Pedale über einen Stecker laufen",
   "Der zweite Geber verdoppelt das Signal, damit der Motor schneller auf das Gaspedal reagiert und mehr Leistung abgibt",
   "Der zweite Geber ist nur eine Reserve; er wird erst nach dem Tausch des ersten Gebers mit dem Tester freigeschaltet"
  ],
  "correct": 0,
  "explain": "Das Gaspedal ist sicherheitsrelevant. Deshalb liefern zwei Geber zwei Signale, die das Steuergerät ständig auf Plausibilität vergleicht. Weicht ein Signal ab, speichert es einen Fehler und schaltet in den Notlauf (z. B. erhöhte Leerlaufdrehzahl, eingeschränkte Leistung).",
  "src": "TB 278–279"
 },
 {
  "id": "3e9937d52bd1",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Messwertblock bei Volllast: Ladedruck Soll 2,1 bar, Ist 1,5 bar (absolut); Luftmasse deutlich unter Soll. Was ist eine wahrscheinliche Ursache und der nächste Schritt?",
  "opts": [
   "Raildrucksensor defekt; den Sensor ersetzen, weil der Ladedruck aus dem Raildruck berechnet wird",
   "Ladeluftstrecke undicht oder Laderregelung klemmt; Schläuche prüfen, Strecke abdrücken, Stellglied testen",
   "AdBlue-Tank fast leer; AdBlue nachfüllen, weil das System bei niedrigem Füllstand den Ladedruck stufenweise senkt",
   "Kraftstofffilter verstopft; Filter ersetzen, weil zu wenig Kraftstoff den Ladedruck direkt verringert"
  ],
  "correct": 1,
  "explain": "Fehlen Ladedruck und Luftmasse gleichzeitig, kommt zu wenig Luft im Motor an: typisch ist ein undichter oder abgerutschter Ladeluftschlauch bzw. ein klemmender Ladedrucksteller. Deshalb Sichtprüfung, Abdrücken der Ladeluftstrecke und Stellglieddiagnose des Laders. Raildruck, AdBlue und Kraftstofffilter bestimmen den Ladedruck nicht.",
  "src": "FW"
 },
 {
  "id": "ab6459b01c41",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Folge hat ein AGR-Ventil, das im offenen Zustand hängen bleibt?",
  "opts": [
   "Mehr Frischluft im Zylinder, deshalb höhere Leistung und deutlich weniger Ruß",
   "Keine Folge, weil das Steuergerät die Abgasrückführung nur im Leerlauf benutzt und bei Last immer ganz abschaltet",
   "Weniger Frischluft im Zylinder: Leistungsmangel, Ruß bzw. schwarzer Rauch, Fehler wegen zu geringer Luftmasse",
   "Der Raildruck steigt auf den Höchstwert, weil das Abgas in die Hochdruckpumpe gedrückt wird"
  ],
  "correct": 2,
  "explain": "Über das offene AGR-Ventil strömt ständig Abgas in den Ansaugtrakt und verdrängt Frischluft. Der Luftmassenmesser misst weniger Luft, die Verbrennung wird luftarm: Leistungsmangel und Rußbildung, das Steuergerät setzt einen Fehler (Luftmasse/AGR-Regelung). Die AGR soll eigentlich nur gezielt die Stickoxide senken.",
  "src": "FW"
 },
 {
  "id": "fb3b2e165fc2",
  "cat": "Diesel",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Ordnen Sie den Arten der Partikelfilter-Regeneration die richtige Beschreibung zu.",
  "paare": [
   [
    "Passive Regeneration",
    "Läuft bei hoher Abgastemperatur von selbst, z. B. auf Autobahnfahrt"
   ],
   [
    "Aktive Regeneration",
    "Steuergerät erhöht gezielt die Abgastemperatur, z. B. per Nacheinspritzung"
   ],
   [
    "Serviceregeneration",
    "Wird in der Werkstatt mit dem Tester gestartet und überwacht"
   ]
  ],
  "ablenker": [
   "Filter wird mit Wasser ausgespült"
  ],
  "explain": "Bei hoher Last verbrennt der Ruß im Filter ohne Eingriff (passiv). Reicht das nicht, hebt das Steuergerät die Temperatur gezielt an (aktiv). Ist der Filter zu voll für eine Fahrt-Regeneration, startet die Werkstatt eine Serviceregeneration – wenn die Beladung das noch zulässt.",
  "src": "Netz: Bosch/kfz-dietrich DPF (siehe ausbau-diesel.md), FW"
 },
 {
  "id": "9d15b6f7e166",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Am Differenzdrucksensor des Partikelfilters ist der Messschlauch vor dem Filter abgerissen. Welche Folge ist zu erwarten?",
  "opts": [
   "Der Sensor misst den doppelten Druck, deshalb regeneriert das Steuergerät den Filter ständig, ohne einen Fehler zu speichern",
   "Keine Folge, weil das Steuergerät die Beladung nur aus der Laufleistung seit der letzten Regeneration berechnet",
   "Der Filter wird sofort undicht, weil der Abgasdruck jetzt über den Schlauch auf die Filterwand drückt",
   "Der Sensor misst kaum noch einen Druckunterschied; die Beladung wird falsch berechnet, ein Fehler wird gespeichert"
  ],
  "correct": 3,
  "explain": "Der Sensor vergleicht den Druck vor und nach dem Filter. Liegt die Seite vor dem Filter offen, sieht er dort nur Umgebungsdruck – der Unterschied wird fast null bzw. unplausibel. Das Steuergerät erkennt die Beladung nicht richtig und setzt einen Fehler. Deshalb bei DPF-Fehlern immer zuerst die Schläuche prüfen.",
  "src": "Netz: Bosch, Delphi (siehe ausbau-diesel.md)"
 },
 {
  "id": "a13ca1c45760",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum lässt sich ein Partikelfilter nach sehr hoher Laufleistung trotz erfolgreicher Regeneration nicht mehr ausreichend freibrennen?",
  "opts": [
   "Weil sich Asche aus Öl-Additiven einlagert, die nicht verbrennt",
   "Weil der Ruß mit der Zeit härter wird und nur noch mit AdBlue verbrennt",
   "Weil der Differenzdrucksensor nach einigen Jahren grundsätzlich ersetzt werden muss",
   "Weil das Steuergerät die Regeneration nach einer festen Zahl von Zyklen dauerhaft sperrt"
  ],
  "correct": 0,
  "explain": "Ruß verbrennt bei der Regeneration zu CO₂, Asche (aus Additiven von Motoröl und Kraftstoff) aber nicht. Sie bleibt im Filter und verringert nach und nach seine Aufnahmefähigkeit. Dann hilft nur eine Reinigung oder ein Tausch des Filters; danach den Lernwert (Adaption) nach WI zurücksetzen. Aschearmes Öl nach Herstellernorm verlangsamt das.",
  "src": "Netz: kfz-dietrich DPF (siehe ausbau-diesel.md), FW"
 },
 {
  "id": "7b0a14b971e6",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was ist zu beachten, bevor Sie eine Leitung des Hochdruckteils öffnen?",
  "opts": [
   "Motor im Leerlauf laufen lassen, damit Luft aus dem System gedrückt wird",
   "Motor abstellen und warten, bis der Raildruck abgebaut ist; Schutzbrille, Umgebung reinigen",
   "Nur die Batterie abklemmen; der Raildruck bleibt danach ungefährlich im Rail eingeschlossen",
   "Die Leitung zuerst unter Druck leicht anlösen, damit der Druck langsam entweichen kann"
  ],
  "correct": 1,
  "explain": "Unter Hochdruck austretender Diesel kann Haut durchdringen und Augen verletzen. Deshalb Motor aus, Druckabbau abwarten (Raildruck im Messwertblock bzw. Wartezeit nach WI), Schutzbrille tragen und die Umgebung vor dem Öffnen reinigen, damit kein Schmutz ins System gelangt. Leitungen nie unter Druck lösen.",
  "src": "FW"
 },
 {
  "id": "3b8e5795f4c3",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Raildruck von 1800 bar wirkt auf eine Fläche von 3 mm² an der Düsennadel. Wie groß ist die Kraft?",
  "opts": [
   "5.400 N",
   "54 N",
   "540 N",
   "600 N"
  ],
  "correct": 2,
  "formel": "F = p · A\n10 bar = 1 MPa = 1 N/mm²",
  "explain": "1800 bar = 180 MPa = 180 N/mm². F = p × A = 180 N/mm² × 3 mm² = 540 N. 5.400 N entsteht, wenn man 1800 bar als 1800 N/mm² rechnet; 600 N ist 1800 ÷ 3 (geteilt statt multipliziert).",
  "src": "FW"
 },
 {
  "id": "7f0d15196f8b",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "raildruck-kennlinie.svg",
  "tb": true,
  "q": "Der Raildrucksensor liefert 3,7 V. Welchen Raildruck lesen Sie aus der Kennlinie ab?",
  "opts": [
   "148 MPa",
   "185 MPa",
   "1.600 MPa",
   "160 MPa"
  ],
  "correct": 3,
  "explain": "Die Kennlinie steigt um 4,0 V auf 200 MPa, also 0,02 V je MPa, und beginnt bei 0,5 V. (3,7 V − 0,5 V) ÷ 0,02 V/MPa = 160 MPa (= 1600 bar). 185 MPa entsteht, wenn man den Nullpunkt von 0,5 V vergisst; 1.600 MPa verwechselt MPa und bar.",
  "src": "FK 340–342"
 },
 {
  "id": "b94c63b17232",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "cr-anlage.svg",
  "q": "Welche Nummer im Leitungsplan ist das Bauteil, das hochdruckseitig Kraftstoff aus dem Rail in den Rücklauf absteuert?",
  "opts": [
   "⑧",
   "⑤",
   "⑦",
   "⑪"
  ],
  "correct": 0,
  "explain": "⑧ ist das Druckregelventil am Ende des Rails, sein Ausgang führt in den Rücklauf. ⑤ ist die Zumesseinheit (saugseitig an der Pumpe), ⑦ der Raildrucksensor, ⑪ der Kraftstoffkühler im Rücklauf.",
  "src": "FK 339–342, Eigenes Bild"
 },
 {
  "id": "1658b1072387",
  "cat": "Diesel",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte einer Rücklaufmengenmessung an den Injektoren in die richtige Reihenfolge.",
  "schritte": [
   "Motorabdeckung abbauen, Bereich der Rücklaufanschlüsse reinigen",
   "Rücklaufleitungen von den Injektoren abziehen und verschließen",
   "Messschläuche mit Messgefäßen an die Injektoren anschließen",
   "Motor starten und die Prüfbedingung laut WI für die vorgegebene Zeit halten",
   "Motor abstellen, Mengen ablesen und miteinander vergleichen",
   "Rücklaufleitungen wieder anschließen und auf Dichtheit prüfen"
  ],
  "explain": "Erst reinigen, dann öffnen – Schmutz darf nicht in die Injektoren. Alle Injektoren werden unter gleichen Bedingungen gemessen, sonst sind die Mengen nicht vergleichbar. Beurteilung: Die größte Menge darf höchstens das Dreifache der kleinsten betragen.",
  "src": "TB 277, FW"
 },
 {
  "id": "d6dbee6a29d3",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "An einer Anlage mit saugender Zahnradpumpe messen Sie zwischen Filter und Pumpe −0,7 bar; laut WI sind bis −0,4 bar zulässig. Der Motor hat bei Kälte Leistungsmangel. Wie beurteilen Sie das?",
  "opts": [
   "Unterdruck zu gering; die Zahnradpumpe ist verschlissen und saugt nicht mehr richtig an",
   "Unterdruck zu hoch: Filter bzw. Zulauf verengt, z. B. Paraffin im Filter bei Kälte; Filter prüfen bzw. ersetzen",
   "Messwert in Ordnung, weil ein höherer Unterdruck nur zeigt, dass die Pumpe besonders kräftig und gleichmäßig fördert",
   "Unterdruck zu hoch: Raildrucksensor defekt, weil er den Saugdruck fehlerhaft an das Steuergerät meldet"
  ],
  "correct": 1,
  "explain": "−0,7 bar ist ein stärkerer Unterdruck als erlaubt (−0,4 bar). Die Pumpe muss gegen einen Widerstand saugen: Filter verstopft oder bei Kälte durch Paraffin verlegt, Leitung geknickt. Folge: zu wenig Kraftstoff an der Hochdruckpumpe → Raildruck bricht unter Last ein → Leistungsmangel. Der Raildrucksensor misst nur den Hochdruck.",
  "src": "FK 339, FW"
 },
 {
  "id": "beebd6a39943",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Was ist beim Ersetzen eines NOx-Sensors zu beachten?",
  "opts": [
   "Den Sensor bei laufendem Motor einschrauben, damit er sich sofort auf Abgastemperatur kalibriert",
   "Vor und nach Kat können beliebig getauscht werden, weil beide Sensoren baugleich sind und gleich programmiert werden",
   "Richtigen Sensor für den Einbauort (vor/nach Kat) wählen, Gewinde reinigen, Anpassung mit Tester nach WI",
   "Das Gewinde mit Dichtmasse abdichten und das Kabel am heißen Abgasrohr festbinden, damit es nicht scheuert"
  ],
  "correct": 2,
  "explain": "Teilenummer und Einbauort (NOx-Sensor 1 oder 2) müssen passen, viele Steuergeräte unterscheiden die Sensoren. Das Gewinde im Rohr reinigen, damit der Sensor dicht sitzt – Undichtheit verfälscht die Messung. Danach nach WI anlernen bzw. Adaptionswerte zurücksetzen. Kabel und Steuerelektronik nicht an heißen Teilen befestigen.",
  "src": "Netz: IKA (siehe ausbau-diesel.md)"
 },
 {
  "id": "4bccb7e974d0",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie groß ist der Strom, wenn an einem Widerstand von 6 Ω eine Spannung von 12 V anliegt?",
  "opts": [
   "2 A",
   "0,5 A",
   "72 A",
   "6 A"
  ],
  "correct": 0,
  "formel": "I = U / R\nI in A, U in V, R in Ω",
  "explain": "Ohmsches Gesetz: I = U ÷ R = 12 V ÷ 6 Ω = 2 A.",
  "src": "FW"
 },
 {
  "id": "a7f8c0351ad1",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei geeignete Prüfungen für einen Sensor mit drei Anschlüssen (Versorgung, Signal, Masse) am Steuergerätestecker?",
  "opts": [
   "Versorgungsspannung direkt an der Batterie statt am Stecker messen; Signalspannung gegen Masse messen; Isolationswiderstand der Signalleitung bei eingeschalteter Zündung messen",
   "Versorgungsspannung (ca. 5 V) gegen Masse messen; Signalspannung gegen Masse messen und mit dem Sollwert vergleichen; Masseleitung prüfen (Spannungsfall bzw. Durchgang < 0,5 Ω)",
   "Versorgungsspannung (ca. 5 V) gegen Masse messen; Signalspannung gegen Masse messen; Sensorwiderstand bei aufgestecktem Stecker und eingeschalteter Zündung messen",
   "12 V von der Batterie an den Signal-Pin anlegen und Reaktion prüfen; Signalspannung gegen Masse messen; Masseleitung auf Durchgang prüfen"
  ],
  "correct": 1,
  "explain": "Geeignet sind: Versorgungsspannung (ca. 5 V) gegen Masse messen, Signalspannung gegen Masse messen und mit dem Sollwert vergleichen, Masseleitung prüfen (Spannungsfall bzw. Durchgang < 0,5 Ω). Erst Versorgung und Masse, dann das Signal prüfen – so findet man Leitungsfehler, bevor man den Sensor tauscht. Widerstände nie im eingeschalteten Stromkreis messen und keine Batteriespannung an Signalleitungen legen.",
  "src": "Format Schulprüfung, FW"
 },
 {
  "id": "5606c83960eb",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Raildruck von 160 MPa entspricht wie viel bar?",
  "opts": [
   "1.600 bar",
   "16 bar",
   "16.000 bar",
   "1,6 bar"
  ],
  "correct": 0,
  "formel": "1 MPa = 10 bar = 1 N/mm²\n1 bar = 10 N/cm² = 0,1 N/mm²",
  "explain": "1 MPa = 10 bar → 160 MPa × 10 = 1600 bar.",
  "src": "FW"
 },
 {
  "id": "b64438846afa",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Messaufgaben das passende Messgerät zu.",
  "paare": [
   [
    "Spannung an einem Sensor",
    "Voltmeter"
   ],
   [
    "Widerstand einer Magnetspule",
    "Ohmmeter"
   ],
   [
    "PWM-Ansteuerung eines Ventils",
    "Oszilloskop"
   ],
   [
    "Stromaufnahme ohne Leitung aufzutrennen",
    "Strommesszange"
   ]
  ],
  "ablenker": [
   "Drehmomentschlüssel"
  ],
  "explain": "Widerstände nur stromlos messen (Stecker ab). Zeitabhängige Signale wie PWM zeigt nur das Oszilloskop richtig.",
  "src": "FW"
 },
 {
  "id": "c2724fa0fafa",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte einer Widerstandsmessung an einem Magnetventil in die richtige Reihenfolge.",
  "schritte": [
   "Zündung ausschalten",
   "Steckverbindung am Bauteil abziehen",
   "Messgerät auf Ohm stellen, Nullabgleich (Messleitungen kurzschließen) und an den Bauteilpins messen",
   "Messwert mit dem Sollwert vergleichen und dokumentieren"
  ],
  "explain": "Widerstände nur stromlos messen – sonst ist der Messwert falsch und das Messgerät kann Schaden nehmen. Erst Zündung aus, dann Stecker ab: Wer bei eingeschalteter Zündung absteckt, erzeugt unnötige Fehlereinträge im Steuergerät.",
  "src": "FW"
 },
 {
  "id": "caadf33b0971",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Magnetventil nimmt bei 14 V einen Strom von 1,5 A auf. Wie groß ist seine Leistung?",
  "opts": [
   "9,3 W",
   "18 W",
   "21 W",
   "0,11 W"
  ],
  "correct": 2,
  "formel": "P = U · I\nP in W, U in V, I in A",
  "explain": "P = U × I = 14 V × 1,5 A = 21 W.",
  "src": "FW"
 },
 {
  "id": "4d8789c810d2",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Zwei Glühkerzen mit je 0,8 Ω sind parallel geschaltet. Wie groß ist der Ersatzwiderstand?",
  "opts": [
   "1,6 Ω",
   "0,8 Ω",
   "0,64 Ω",
   "0,4 Ω"
  ],
  "correct": 3,
  "formel": "Parallelschaltung: 1 / R_{ges} = 1 / R_1 + 1 / R_2 + …\nbei zwei Widerständen: R_{ges} = R_1 · R_2 / (R_1 + R_2)",
  "explain": "Zwei gleiche Widerstände parallel: R = R1 ÷ 2 = 0,8 Ω ÷ 2 = 0,4 Ω (allgemein R = R1 × R2 ÷ (R1 + R2)).",
  "src": "FW"
 },
 {
  "id": "fe7f8b6e32a4",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Klemmenbezeichnungen ihre Bedeutung zu.",
  "paare": [
   [
    "Klemme 30",
    "Dauerplus von der Batterie"
   ],
   [
    "Klemme 15",
    "Plus bei eingeschalteter Zündung"
   ],
   [
    "Klemme 31",
    "Masse"
   ],
   [
    "Klemme 50",
    "Ansteuerung Starter"
   ],
   [
    "Klemme 87",
    "Ausgang des Relais-Arbeitskontakts"
   ]
  ],
  "ablenker": [
   "Blinker links"
  ],
  "explain": "30 = immer Plus, 15 = geschaltetes Zündungsplus, 31 = Masse, 50 = Starteransteuerung, 87 = Relaisausgang. 85/86 sind die Anschlüsse der Relaisspule.",
  "src": "FW (Klemmenbezeichnungen DIN 72552, mit Tabellenbuch abgleichen)",
  "tb": true
 },
 {
  "id": "7be8b33006d5",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Ein Relais für den Kühlerlüfter steht im Verdacht. Bringen Sie die Prüfschritte in eine sinnvolle Reihenfolge.",
  "schritte": [
   "Relais nach Schaltplan identifizieren (Anschlüsse 30, 85, 86, 87)",
   "Relais ausbauen und Spulenwiderstand zwischen 85 und 86 messen",
   "Spule mit Bordspannung ansteuern und dabei den Durchgang des Arbeitskontakts 30–87 messen",
   "Ergebnis mit dem Sollwert vergleichen und dokumentieren"
  ],
  "explain": "Erst die Spule stromlos messen (Steuerstromkreis): Eine kurzgeschlossene Spule würde beim Ansteuern einen zu hohen Strom ziehen. Dann im angesteuerten Zustand den Kontakt prüfen (Arbeitsstromkreis). Ein Relais, das klickt, kann trotzdem einen verbrannten Kontakt haben.",
  "src": "FW"
 },
 {
  "id": "f44d94574ef8",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie verhält sich der Widerstand eines NTC-Temperaturfühlers, wenn die Temperatur steigt?",
  "opts": [
   "Er sinkt",
   "Er steigt",
   "Er bleibt gleich",
   "Er springt auf unendlich"
  ],
  "correct": 0,
  "explain": "NTC = negativer Temperaturkoeffizient: warm → kleiner Widerstand. Beim PTC ist es umgekehrt.",
  "src": "FW"
 },
 {
  "id": "f78064e82e95",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Sie vermuten eine schlechte (hochohmige) Masseverbindung an einem Sensor. Wie prüfen Sie die Masseleitung richtig unter Last?",
  "opts": [
   "Spannungsfall mit dem Voltmeter zwischen Masse-Pin am Bauteil und Batterie-Minus messen; bei eingeschaltetem Stromkreis; Sollwert: nur wenige Zehntel Volt oder weniger",
   "Widerstand mit dem Ohmmeter zwischen Masse-Pin am Bauteil und Batterie-Minus messen; bei eingeschaltetem Stromkreis; Sollwert: unter 0,5 Ω",
   "Spannungsfall mit dem Voltmeter zwischen Masse-Pin am Bauteil und Batterie-Minus messen; bei ausgeschalteter Zündung, damit kein Strom fließt; Sollwert: wenige Zehntel Volt",
   "Spannung mit dem Voltmeter zwischen Masse-Pin am Bauteil und Batterie-Plus messen; bei eingeschaltetem Stromkreis; Sollwert: höchstens 0,5 V"
  ],
  "correct": 0,
  "explain": "Spannungsfall messen: Voltmeter zwischen Masse-Pin am Bauteil und Batterie-Minus bzw. Fahrzeugmasse, bei eingeschaltetem Stromkreis (unter Last), nicht im Leerlauf. Bei Sensoren sind nur wenige Zehntel Volt oder weniger erlaubt. Eine Durchgangsprüfung ohne Last zeigt Korrosion oft nicht. Der Spannungsfall unter Last verrät den Übergangswiderstand.",
  "src": "FW"
 },
 {
  "id": "49d04d022d65",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei geeignete Wege, eine Sicherung zu prüfen?",
  "opts": [
   "Sichtprüfung des Schmelzleiters; Widerstand der eingebauten Sicherung bei eingeschaltetem Stromkreis messen; Spannung an beiden Prüfkontakten gegen Masse messen",
   "Sichtprüfung des Schmelzleiters; Durchgang bei ausgebauter Sicherung messen; Sicherung probeweise durch eine mit höherer Nennstromstärke ersetzen",
   "Sichtprüfung des Schmelzleiters; Durchgang/Widerstand bei ausgebauter Sicherung messen; Spannung an beiden Prüfkontakten der eingebauten Sicherung gegen Masse messen",
   "Sichtprüfung des Schmelzleiters; Durchgang bei ausgebauter Sicherung messen; Spannung zwischen den beiden Prüfkontakten messen und 12 V als Gutwert werten"
  ],
  "correct": 2,
  "explain": "Richtig: Sichtprüfung des Schmelzleiters, Durchgang/Widerstand bei ausgebauter Sicherung messen, Spannung an beiden Prüfkontakten der eingebauten Sicherung gegen Masse messen (beide Seiten gleiche Spannung = Sicherung in Ordnung). Eine durchgebrannte Sicherung ist ein Symptom: Vor dem Tausch die Ursache (Kurzschluss, defekter Verbraucher) suchen. Nie eine stärkere Sicherung einsetzen.",
  "src": "FW"
 },
 {
  "id": "84e431abf171",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Ventil wird mit einem PWM-Signal angesteuert: 3 ms eingeschaltet, Periodendauer 8 ms. Wie groß ist das Tastverhältnis?",
  "opts": [
   "62,5 %",
   "37,5 %",
   "60 %",
   "0,375 %"
  ],
  "correct": 1,
  "formel": "Tastverhältnis = t_i / T · 100 %\nt_i = Impulsdauer (Einschaltzeit), T = Periodendauer (Flanke bis zur nächsten gleichen Flanke)",
  "explain": "Tastverhältnis = Einschaltzeit ÷ Periodendauer × 100 % = 3 ms ÷ 8 ms × 100 % = 37,5 %.",
  "src": "FW"
 },
 {
  "id": "3df1269d83a2",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 3,
  "q": "Ordnen Sie die Einstellungen am Oszilloskop ihrer Wirkung zu.",
  "paare": [
   [
    "V/DIV",
    "Spannung pro Kästchen (senkrecht)"
   ],
   [
    "ms/DIV",
    "Zeit pro Kästchen (waagerecht)"
   ],
   [
    "Trigger",
    "Startpunkt für ein stehendes Bild"
   ]
  ],
  "ablenker": [
   "Strom pro Kästchen"
  ],
  "explain": "Mit V/DIV und ms/DIV skaliert man das Bild, der Trigger sorgt dafür, dass sich ein periodisches Signal nicht über den Bildschirm „verschiebt“.",
  "src": "FW"
 },
 {
  "id": "3e19d44c1af0",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 2,
  "q": "Ordnen Sie den beiden Messprinzipien von Drehzahlgebern ihre Eigenschaft zu.",
  "paare": [
   [
    "Induktivgeber (passiv)",
    "Erzeugt selbst eine Wechselspannung, deren Amplitude mit der Drehzahl steigt – bei Stillstand kein Signal"
   ],
   [
    "Hallgeber (aktiv)",
    "Braucht eine Versorgungsspannung und liefert ein Rechtecksignal – auch bei sehr langsamer Drehung"
   ]
  ],
  "ablenker": [
   "Ändert seinen Widerstand mit der Temperatur"
  ],
  "explain": "Passive Raddrehzahlsensoren arbeiten nach dem Induktionsprinzip, aktive nach dem Hall- bzw. magnetoresistiven Prinzip. Deshalb erkennt nur der aktive Sensor sehr kleine Geschwindigkeiten zuverlässig.",
  "src": "FW"
 },
 {
  "id": "ab4361c085f9",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung des Unterschieds zwischen Messwertblock (Istwerte) und Stellglieddiagnose am Diagnosetester ist richtig?",
  "opts": [
   "Messwertblock zeigt, was das Steuergerät von Sensoren empfängt bzw. berechnet; Stellglieddiagnose liest die gespeicherten Fehlercodes der Aktoren aus; beides ersetzt die Messung an Leitung und Bauteil",
   "Messwertblock steuert die Sensoren gezielt an und zeigt ihre Sollwerte; Stellglieddiagnose zeigt die Istwerte der Aktoren an; beides grenzt den Fehler ein, ersetzt aber keine Messung",
   "Messwertblock zeigt, was das Steuergerät von Sensoren empfängt bzw. berechnet; Stellglieddiagnose steuert einen Aktor an; reagiert er, sind Leitung und Bauteil sicher fehlerfrei",
   "Messwertblock zeigt, was das Steuergerät von Sensoren empfängt bzw. berechnet; Stellglieddiagnose steuert einen Aktor gezielt an, um seine Reaktion zu prüfen; beides ersetzt keine Messung an Leitung und Bauteil"
  ],
  "correct": 3,
  "explain": "Der Messwertblock zeigt, was das Steuergerät von Sensoren empfängt bzw. berechnet (Istwerte). Bei der Stellglieddiagnose steuert der Tester einen Aktor gezielt an; man prüft durch Hören/Fühlen/Messen, ob er reagiert. Beides ersetzt keine Messung an Leitung und Bauteil, grenzt aber den Fehler ein. Beispiel: Raildruck Soll/Ist im Messwertblock vergleichen, dann die Zumesseinheit per Stellglieddiagnose ansteuern.",
  "src": "FW"
 },
 {
  "id": "9ee99fcc04d9",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Am CAN-Bus messen Sie bei abgeklemmter Batterie den Widerstand zwischen CAN-High und CAN-Low. Beide Abschlusswiderstände haben je 120 Ω. Welchen Wert erwarten Sie?",
  "opts": [
   "240 Ω",
   "120 Ω",
   "60 Ω",
   "30 Ω"
  ],
  "correct": 2,
  "explain": "Die zwei Abschlusswiderstände liegen parallel: 120 Ω × 120 Ω ÷ 240 Ω = 60 Ω. Misst man ca. 120 Ω, fehlt einer (Unterbrechung).",
  "src": "FW"
 },
 {
  "id": "0619447f50ed",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Warum sind die beiden Leitungen eines CAN-Busses miteinander verdrillt und warum überträgt man das Signal auf zwei Leitungen? Welche Erklärung ist richtig?",
  "opts": [
   "Störungen wirken auf beide Leitungen gleich; ausgewertet wird die Spannungsdifferenz zwischen CAN-High und CAN-Low; dadurch heben sich eingekoppelte Störungen auf",
   "Die zweite Leitung dient als Masse der Steuergeräte; ausgewertet wird die Spannung von CAN-High gegen Masse; die Verdrillung erhöht die Datenrate",
   "Auf beiden Leitungen wird dasselbe Signal doppelt gesendet; das Steuergerät vergleicht beide auf Gleichheit; die Verdrillung verhindert gegenseitige Störungen",
   "Störungen wirken nur auf eine der beiden Leitungen; ausgewertet wird die Summe der Spannungen von CAN-High und CAN-Low; dadurch werden Störungen gefiltert"
  ],
  "correct": 0,
  "explain": "Störungen wirken auf die verdrillten Leitungen gleich. Ausgewertet wird die Spannungsdifferenz zwischen CAN-High und CAN-Low, dadurch heben sich eingekoppelte Störungen auf – sichere Übertragung. Differenzielle Übertragung: CAN-High steigt, CAN-Low fällt. Eine Störung verschiebt beide gleich und ändert die Differenz kaum.",
  "src": "FW"
 },
 {
  "id": "ccd00b6d5386",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Am CAN-Bus messen Sie zwischen CAN-High und CAN-Low ca. 120 Ω statt 60 Ω. Was ist die wahrscheinlichste Ursache?",
  "opts": [
   "Ein Abschlusswiderstand bzw. dessen Leitung ist unterbrochen",
   "Kurzschluss zwischen CAN-High und CAN-Low",
   "Die Batterie ist zu schwach",
   "Alles in Ordnung"
  ],
  "correct": 0,
  "explain": "Mit nur einem Abschlusswiderstand misst man dessen 120 Ω. Ein Kurzschluss zwischen den Leitungen ergäbe nahezu 0 Ω.",
  "src": "FW"
 },
 {
  "id": "7dae5976cdec",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Bremsdruck von 120 bar entspricht wie viel MPa?",
  "opts": [
   "1.200 MPa",
   "1,2 MPa",
   "0,12 MPa",
   "12 MPa"
  ],
  "correct": 3,
  "formel": "1 MPa = 10 bar = 1 N/mm²\n1 bar = 10 N/cm² = 0,1 N/mm²",
  "explain": "10 bar = 1 MPa → 120 bar ÷ 10 = 12 MPa.",
  "src": "FW"
 },
 {
  "id": "57c2266edba2",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Ordnen Sie den Kennzeichnungen im Schaltplan das passende Bauteil zu.",
  "paare": [
   [
    "F2",
    "Sicherung im Laststromkreis"
   ],
   [
    "K1",
    "Relais (Spule und Arbeitskontakt)"
   ],
   [
    "S1",
    "Schalter im Steuerstromkreis"
   ],
   [
    "X1",
    "Steckverbindung"
   ],
   [
    "M1",
    "Elektromotor des Lüfters"
   ]
  ],
  "ablenker": [
   "Steuergerät",
   "Magnetventil"
  ],
  "explain": "Kennbuchstaben: F = Sicherung, K = Relais, S = Schalter, X = Stecker, M = Motor. Ein Steuergerät hätte den Buchstaben A, ein Ventil Y. Die Zahl dahinter nummeriert gleiche Bauteile im Plan durch.",
  "src": "Eigener Schaltplan, Kennbuchstaben nach Tabellenbuch",
  "tb": true
 },
 {
  "id": "a1f941eb3266",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Ordnen Sie den Anschlüssen des Relais K1 im Schaltplan ihre Aufgabe zu.",
  "paare": [
   [
    "86",
    "Spulenanschluss, bekommt über S1 Plus"
   ],
   [
    "85",
    "Spulenanschluss zur Masse"
   ],
   [
    "30",
    "Kontakteingang, bekommt über F2 Plus"
   ],
   [
    "87",
    "Kontaktausgang zum Lüfter"
   ]
  ],
  "ablenker": [
   "Ruhekontakt, bei stromloser Spule geschlossen"
  ],
  "explain": "85/86 sind die Spule (Steuerstromkreis), 30/87 der Arbeitskontakt (Laststromkreis). Fließt Strom durch die Spule, verbindet der Kontakt 30 mit 87. Ein Ruhekontakt hieße 87a – den hat dieses Relais nicht.",
  "src": "Eigener Schaltplan, DIN 72552"
 },
 {
  "id": "2ad36c5b635e",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Warum ist das Relais K1 im Schaltplan an zwei Stellen gezeichnet?",
  "opts": [
   "Es gibt zwei Relais K1, eines schaltet den Steuerstrom und eines den Laststrom des Lüfters",
   "Aufgelöster Plan: Spule in Strompfad 1, Kontakt in Strompfad 2, Strichlinie = Wirkverbindung",
   "Die Strichlinie zeigt eine Steckverbindung zwischen den beiden Relaishälften",
   "Zusammenhängender Plan: Das Relais ist dort gezeichnet, wo seine Teile im Fahrzeug eingebaut sind"
  ],
  "correct": 1,
  "explain": "Im aufgelösten Stromlaufplan wird jedes Bauteil auf die Strompfade verteilt, in denen es wirkt: die Spule im Steuerstromkreis, der Kontakt im Laststromkreis. Die gestrichelte Linie bedeutet „betätigt mechanisch“, sie ist keine Leitung. In der zusammenhängenden Darstellung wäre das Relais als ein Block gezeichnet.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "f52f3239eeba",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Was bedeutet die Leitungsangabe „2,5 rt/ws“ im Strompfad 2?",
  "opts": [
   "Querschnitt 2,5 mm², Grundfarbe rot, Kennfarbe (Streifen) weiß",
   "Länge 2,5 m, Grundfarbe rot, Kennfarbe (Streifen) weiß",
   "Querschnitt 2,5 mm², Grundfarbe weiß, Kennfarbe (Streifen) rot",
   "Belastbarkeit 2,5 A, Grundfarbe rot, Kennfarbe (Streifen) weiß"
  ],
  "correct": 0,
  "explain": "Die Zahl vor den Farben ist der Leiterquerschnitt in mm². Die erste Farbe ist die Grundfarbe, die zweite die Kennfarbe (Streifen). Die Belastbarkeit ergibt sich aus Querschnitt und Länge, sie steht nicht an der Leitung.",
  "src": "Eigener Schaltplan, FW (Leitungsfarben DIN 72551-7)"
 },
 {
  "id": "7cad848c3a27",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Welche Spannungsmessung zeigt bei eingeschaltetem, fehlerfreiem Lüfterstromkreis ungefähr 0 V?",
  "opts": [
   "Zwischen C und D, also über dem laufenden Lüftermotor",
   "Zwischen A und B, also über dem geschlossenen Relaiskontakt",
   "Zwischen A und Masse, also am Ausgang der Sicherung F2 im Laststromkreis",
   "Zwischen E und F, also über der angesteuerten Relaisspule"
  ],
  "correct": 1,
  "explain": "Über einem geschlossenen, intakten Kontakt fällt fast keine Spannung ab (Spannungsfall nahe 0 V). Die Bordspannung fällt fast vollständig an den Verbrauchern ab – am Motor (C–D) und an der Relaisspule (E–F). A gegen Masse zeigt die volle Bordspannung.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "13be5095543e",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "S1 ist geschlossen, K1 klickt hörbar, der Lüfter steht. Gegen Masse messen Sie: A = 12,6 V, B = 12,6 V, C = 0 V. Wo liegt der Fehler?",
  "opts": [
   "Unterbrechung zwischen B und C, also in der Leitung zum Stecker X1 oder im Stecker",
   "Arbeitskontakt 30/87 in K1 ist verbrannt und schaltet den Strom nicht zum Motor durch",
   "Masseverbindung des Motors bei D ist unterbrochen, deshalb fließt kein Strom",
   "Sicherung F2 ist durchgebrannt, deshalb fehlt die Spannung am Lüftermotor"
  ],
  "correct": 0,
  "explain": "Bis B (Ausgang 87) ist die Spannung da, an C nicht mehr – die Unterbrechung liegt dazwischen (Leitung oder Stecker X1). Ein verbrannter Kontakt ergäbe schon an B 0 V, eine defekte F2 schon an A. Bei unterbrochener Masse läge an C die volle Spannung an.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "6aa66fa7e544",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "S1 ist geschlossen, aber K1 klickt nicht. Gegen Masse messen Sie: E = 12,5 V und F = 12,5 V. Was ist die Ursache?",
  "opts": [
   "Relaisspule K1 ist unterbrochen, weil an E noch Spannung anliegt",
   "Schalter S1 schaltet nicht durch, deshalb erreicht die Spule keine Spannung",
   "Masseverbindung der Spule zwischen F und Klemme 31 ist unterbrochen",
   "Sicherung F1 ist durchgebrannt, weil der Steuerstrom zu hoch war"
  ],
  "correct": 2,
  "explain": "Liegt auf beiden Seiten der Spule dieselbe Spannung gegen Masse, fließt kein Strom – die Verbindung hinter der Spule zur Masse fehlt. Bei unterbrochener Spule wäre F über die Masseleitung auf 0 V gezogen. Ein offener S1 oder eine defekte F1 ergäbe schon an E 0 V.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "cebeb7b37167",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Der Lüfter dreht zu langsam. Bei laufendem Lüfter messen Sie zwischen D und dem Minuspol der Batterie 3,8 V. Wie ist das zu bewerten?",
  "opts": [
   "In Ordnung, weil an der Masseseite eines Motors immer einige Volt abfallen",
   "Windungsschluss im Motor, weil der Spannungsfall den hohen Motorstrom anzeigt",
   "Übergangswiderstand im Massepfad (Leitung, Massepunkt); Sollwert wenige Zehntel Volt",
   "Übergangswiderstand im Relaiskontakt, der sich auch auf der Masseseite bemerkbar macht"
  ],
  "correct": 2,
  "explain": "Gemessen wird der Spannungsfall der Masseverbindung unter Last. Eine intakte Leitung mit Massepunkt hat nur wenige Zehntel Volt oder weniger. 3,8 V fehlen dem Motor, deshalb dreht er langsam. Ein schlechter Relaiskontakt zeigt sich zwischen A und B, nicht auf der Masseseite.",
  "src": "Eigener Schaltplan, FW (Grenzwert laut Herstellerangabe)"
 },
 {
  "id": "9f2c9552793c",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "grundlagen-relais-schaltplan.svg",
  "q": "Die Sicherung F2 löst jedes Mal erst aus, wenn S1 geschlossen wird. Der Lüftermotor lässt sich von Hand leicht drehen. Wo liegt der Fehler am wahrscheinlichsten?",
  "opts": [
   "Kurzschluss gegen Masse zwischen F2 und Klemme 30 des Relais, z. B. durchgescheuerte Leitung",
   "Unterbrechung der Spulenmasse zwischen F und Klemme 31, wodurch der Strom zu hoch wird",
   "Übergangswiderstand am Massepunkt des Motors, der den Strom im Laststromkreis erhöht",
   "Kurzschluss gegen Masse zwischen Relaisausgang 87 und Motor, z. B. durchgescheuerte Leitung"
  ],
  "correct": 3,
  "explain": "Die Leitung hinter dem Relaiskontakt bekommt erst Spannung, wenn K1 schaltet – ein Masseschluss dort lässt F2 also genau dann auslösen. Ein Masseschluss vor Klemme 30 würde F2 sofort, auch ohne S1, auslösen. Übergangswiderstände und Unterbrechungen verkleinern den Strom, statt ihn zu erhöhen.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "1de6202d25cd",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-oszi-pwm.svg",
  "q": "Wie groß ist das Tastverhältnis (Anteil der Zeit, in der das Ventil bestromt ist, an der Periodendauer)?",
  "opts": [
   "60 %",
   "40 %",
   "67 %",
   "2,5 %"
  ],
  "correct": 1,
  "formel": "Tastverhältnis = t_i / T · 100 %\nt_i = Impulsdauer (Einschaltzeit), T = Periodendauer (Flanke bis zur nächsten gleichen Flanke)",
  "explain": "Masseseitig angesteuert: Das untere Niveau ist die Einschaltzeit = 2 Kästchen = 2 ms. Periodendauer von fallender zu fallender Flanke = 5 Kästchen = 5 ms. Tastverhältnis = 2 ms ÷ 5 ms × 100 % = 40 %. 60 % wäre der Anteil des oberen Niveaus, 67 % das Verhältnis Ein- zu Auszeit.",
  "src": "Eigenes Oszillogramm"
 },
 {
  "id": "6014a44b8fa2",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-oszi-pwm.svg",
  "q": "Mit welcher Frequenz wird das Ventil angesteuert?",
  "opts": [
   "500 Hz",
   "5 Hz",
   "200 Hz",
   "333 Hz"
  ],
  "correct": 2,
  "formel": "f = 1 / T\nf in Hz (1/s), T = Periodendauer in s (1 ms = 0,001 s)",
  "explain": "Periodendauer T = 5 Kästchen × 1 ms = 5 ms = 0,005 s. f = 1 ÷ T = 1 ÷ 0,005 s = 200 Hz. 500 Hz ergibt sich, wenn man nur die Einschaltzeit (2 ms) nimmt, 333 Hz bei der Auszeit (3 ms), 5 Hz bei vergessener Umrechnung ms → s.",
  "src": "Eigenes Oszillogramm"
 },
 {
  "id": "123f5df1f2e5",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-oszi-pwm.svg",
  "q": "In welchem Abschnitt des Oszillogramms fließt Strom durch die Ventilspule?",
  "opts": [
   "Auf dem oberen Niveau bei etwa 14 V, weil dort die Bordspannung an der Spule anliegt",
   "Nur während der Spannungsspitze, weil dort die höchste Spannung gemessen wird",
   "Auf beiden Niveaus gleich viel, weil sich nur die Polung an der Spule ändert",
   "Auf dem unteren Niveau bei etwa 0 V, weil das Steuergerät dann nach Masse schaltet"
  ],
  "correct": 3,
  "explain": "Gemessen wird die Steuerleitung zwischen Ventil und Steuergerät gegen Masse. Schaltet das Steuergerät nach Masse durch, wird die Leitung auf fast 0 V gezogen und Strom fließt. Sperrt es, liegt über die stromlose Spule die Bordspannung an der Leitung – kein Strom. Typischer Fehler: das obere Niveau für „ein“ halten.",
  "src": "Eigenes Oszillogramm"
 },
 {
  "id": "59a84ed3dccd",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-oszi-pwm.svg",
  "q": "Was verursacht die Spannungsspitze von etwa 35 V am Ende jeder Einschaltphase?",
  "opts": [
   "Selbstinduktion der Ventilspule, wenn der Strom abgeschaltet wird",
   "Überspannung des Generators, die der Regler kurz durchlässt",
   "Kurzschluss der Steuerleitung gegen Plus während der Ansteuerung",
   "Anschlag des Ventilankers, der eine Spannung in die Leitung drückt"
  ],
  "correct": 0,
  "explain": "Eine Spule will ihren Strom aufrechterhalten. Wird er schlagartig abgeschaltet, entsteht eine Induktionsspannung weit über Bordspannung. Die Spitze ist darum ein Zeichen für eine intakte Wicklung; fehlt sie, kann die Spule unterbrochen sein. Eine Generatorüberspannung käme nicht im Takt der Ansteuerung.",
  "src": "Eigenes Oszillogramm, FW"
 },
 {
  "id": "8595c7ee0fff",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-oszi-pwm.svg",
  "q": "Bei gleicher Ansteuerung zeigt das Oszilloskop an derselben Stelle nur noch eine gerade Linie bei 0 V. Was ist die wahrscheinlichste Ursache?",
  "opts": [
   "Das Steuergerät schaltet nicht mehr nach Masse durch, die Endstufe sperrt",
   "Das Steuergerät hat das Tastverhältnis auf 0 % gesenkt",
   "Die Plusversorgung des Ventils oder seine Spulenwicklung ist unterbrochen",
   "Die Zeitbasis am Oszilloskop ist viel zu klein eingestellt"
  ],
  "correct": 2,
  "explain": "Die 14 V auf dem oberen Niveau kommen über die Plusversorgung durch die Spule. Fehlt diese Spannung ganz, ist der Weg Plus → Spule unterbrochen. Sperrt die Endstufe dauernd (oder Tastverhältnis 0 %), sieht man eine gerade Linie bei 14 V. Die Zeitbasis ändert nur die Breite, nicht die Höhe des Signals.",
  "src": "Eigenes Oszillogramm, FW"
 },
 {
  "id": "aff0cb6280e7",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-can-bus.svg",
  "q": "Wo sitzen laut Bild die beiden Abschlusswiderstände und warum dort?",
  "opts": [
   "In A2 und A3 in der Mitte der Leitung, damit sich die Spannung gleichmäßig verteilt",
   "In der Diagnosebuchse X1, damit man den Bus dort jederzeit durchmessen kann",
   "In A1 und A4 an den beiden Enden der Leitung, damit keine Signalreflexionen entstehen",
   "In jedem Steuergerät einer, damit jedes Steuergerät auch allein senden kann"
  ],
  "correct": 2,
  "explain": "Die beiden 120-Ω-Widerstände schließen die Busleitung an ihren Enden ab (hier in A1 und A4). Ohne Abschluss würden die schnellen Signale am Leitungsende zurückgeworfen und die Daten verfälschen. Die übrigen Steuergeräte hängen nur mit kurzen Stichleitungen am Bus.",
  "src": "Eigener Plan, FW"
 },
 {
  "id": "e7ea69e8add8",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-can-bus.svg",
  "q": "Steuergerät A4 ist abgesteckt. Bei abgeklemmter Batterie messen Sie an X1 zwischen Pin 6 und Pin 14. Welchen Wert erwarten Sie?",
  "opts": [
   "60 Ω",
   "120 Ω",
   "240 Ω",
   "0 Ω"
  ],
  "correct": 1,
  "explain": "Mit A4 fehlt dessen Abschlusswiderstand; gemessen wird nur noch der 120-Ω-Widerstand in A1. Mit beiden Abschlüssen wären es 60 Ω (zwei mal 120 Ω parallel). 240 Ω ergäbe sich nur bei einer Reihenschaltung, 0 Ω bei einem Kurzschluss.",
  "src": "Eigener Plan, FW"
 },
 {
  "id": "c666394d5bde",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-can-bus.svg",
  "q": "Alle Steuergeräte sind angesteckt. Bei abgeklemmter Batterie messen Sie an X1 zwischen Pin 6 und Pin 14 etwa 1 Ω. Was ist die Ursache?",
  "opts": [
   "CAN-High und CAN-Low haben irgendwo im Netz Kontakt miteinander",
   "Ein Abschlusswiderstand ist unterbrochen, darum sinkt der Widerstand",
   "CAN-High hat Masseschluss, darum misst man den Widerstand zur Masse",
   "Alles in Ordnung, weil stromlose Steuergeräte den Bus überbrücken"
  ],
  "correct": 0,
  "explain": "Fast 0 Ω zwischen den beiden Busleitungen heißt: Sie berühren sich (gequetschte Leitung, Feuchtigkeit im Stecker, defekter Transceiver). Fehlt ein Abschluss, steigt der Wert auf 120 Ω, statt zu sinken. Ein Masseschluss einer Leitung ändert den Widerstand zwischen High und Low nicht. Eingrenzen: Steuergeräte nacheinander abstecken.",
  "src": "Eigener Plan, FW"
 },
 {
  "id": "f69d850aac76",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "grundlagen-can-bus.svg",
  "q": "Ordnen Sie mit Hilfe des Pegelbilds jedem Zustand die Spannung zu.",
  "paare": [
   [
    "CAN-High in Ruhe (rezessiv)",
    "2,5 V"
   ],
   [
    "CAN-High dominant",
    "3,5 V"
   ],
   [
    "CAN-Low dominant",
    "1,5 V"
   ],
   [
    "Differenz High − Low, dominant",
    "2 V"
   ],
   [
    "Differenz High − Low, rezessiv",
    "0 V"
   ]
  ],
  "ablenker": [
   "5 V",
   "12 V"
  ],
  "explain": "In Ruhe liegen beide Leitungen bei 2,5 V, die Differenz ist 0 V. Beim dominanten Bit steigt CAN-High um 1 V auf 3,5 V und CAN-Low fällt um 1 V auf 1,5 V – die Differenz von 2 V wertet der Empfänger aus. Im Bild: 1 Kästchen = 0,5 V.",
  "src": "Eigenes Pegelbild, Netz: kfz-tech.de CAN-Bus"
 },
 {
  "id": "60984bf2cd99",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-can-bus.svg",
  "q": "Das kürzeste dominante Stück im Pegelbild ist genau ein Bit lang. Wie groß ist die Übertragungsrate?",
  "opts": [
   "250 kbit/s",
   "2 Mbit/s",
   "50 kbit/s",
   "500 kbit/s"
  ],
  "correct": 3,
  "formel": "Bitrate = 1 / t_{Bit}\nt_{Bit} in s; 1 µs = 0,000 001 s",
  "explain": "Ein Bit dauert 1 Kästchen = 2 µs = 0,000002 s. Bitrate = 1 ÷ 0,000002 s = 500.000 bit/s = 500 kbit/s – ein üblicher Wert für den Antriebs-CAN. 250 kbit/s ergibt sich, wenn man zwei Kästchen als ein Bit liest, 2 Mbit/s bei 0,5 µs je Bit.",
  "src": "Eigenes Pegelbild, FW"
 },
 {
  "id": "70176ad8cfed",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "Zündung ein, alle Stecker gesteckt, Anlage fehlerfrei. Ordnen Sie den Messpunkten (gegen Masse) den zu erwartenden Wert zu.",
  "paare": [
   [
    "A (Pin 12)",
    "etwa 5 V, gleichbleibend"
   ],
   [
    "B (Pin 13)",
    "ändert sich mit dem Druck (typisch 0,5–4,5 V)"
   ],
   [
    "C (Pin 14)",
    "nahe 0 V"
   ],
   [
    "D (Pin 20)",
    "ändert sich mit der Temperatur (zwischen 0 V und 5 V)"
   ]
  ],
  "ablenker": [
   "etwa 12 V Bordspannung"
  ],
  "explain": "A ist die 5-V-Versorgung aus dem Steuergerät, B das Drucksignal, C die Sensormasse (über das Steuergerät, nahe 0 V; ebenso E). An D teilt der NTC mit R1 die 5 V – die Spannung hängt von der Temperatur ab. Bordspannung (12 V) kommt in diesen Sensorkreisen nicht vor.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "85d9e3718c4f",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "Der Stecker von B2 ist abgezogen, Zündung ein. Welche Spannung messen Sie am Kabelbaum an D (Leitung zu Pin 20) gegen Masse?",
  "opts": [
   "etwa 0 V",
   "etwa 2,5 V",
   "etwa 5 V",
   "etwa 12 V"
  ],
  "correct": 2,
  "explain": "Ohne NTC fließt durch R1 kein Strom, also fällt an R1 keine Spannung ab – an Pin 20 und damit an D stehen die vollen 5 V. Das ist ein guter Test: 5 V am offenen Stecker zeigen, dass Leitung, R1 und 5-V-Versorgung in Ordnung sind.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "2facb44714da",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "Wie ändert sich die Spannung an D, wenn der Motor warm wird?",
  "opts": [
   "Sie steigt, weil der NTC-Widerstand sinkt und mehr Strom fließt",
   "Sie sinkt, weil der NTC-Widerstand sinkt und an ihm weniger abfällt",
   "Sie bleibt bei 5 V, weil das Steuergerät die Spannung fest regelt",
   "Sie steigt, weil der NTC-Widerstand bei Wärme größer wird"
  ],
  "correct": 1,
  "explain": "R1 und NTC bilden einen Spannungsteiler. Warm → NTC-Widerstand klein → an ihm fällt nur ein kleiner Teil der 5 V ab, die Spannung an D sinkt. Der Strom steigt zwar, aber der größere Teil der Spannung fällt dann an R1 ab.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "d6f4486d53cd",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "B2 hat bei warmem Motor 500 Ω. Welche Spannung liegt an D? (Der Eingang U₂ belastet den Teiler nicht.)",
  "opts": [
   "2,50 V",
   "4,17 V",
   "1,00 V",
   "0,83 V"
  ],
  "correct": 3,
  "explain": "Spannungsteiler: U_D = 5 V × R_NTC ÷ (R1 + R_NTC) = 5 V × 500 Ω ÷ 3000 Ω ≈ 0,83 V. 4,17 V ist die Spannung an R1. 1,00 V entsteht, wenn man nur durch R1 statt durch die Summe teilt.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "fd7cdc95d87a",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "Der Messwertblock zeigt bei warmem Motor −40 °C Kühlmitteltemperatur. An D messen Sie 4,9 V. Wo liegt der Fehler?",
  "opts": [
   "Kurzschluss der Leitung zu Pin 20 gegen Masse, darum fehlt das Signal",
   "Unterbrechung im NTC-Kreis: Leitung zu Pin 20/21, Stecker oder B2",
   "Pull-up-Widerstand R1 ist unterbrochen, darum ist die Spannung hoch",
   "NTC hat Kurzschluss, darum zeigt das Steuergerät den kältesten Wert"
  ],
  "correct": 1,
  "explain": "Fast 5 V an D bedeuten: Durch R1 fließt (fast) kein Strom – der Kreis über B2 zur Masse ist offen. Das Steuergerät deutet die hohe Spannung als „sehr kalt“. Ein Kurzschluss gegen Masse (Leitung oder NTC) ergäbe nahe 0 V und eine sehr hohe Temperatur, ein offenes R1 ebenfalls nahe 0 V.",
  "src": "Eigener Schaltplan, Netz: kfz-dietrich.com P0118"
 },
 {
  "id": "4b50ec55aa02",
  "cat": "Grundlagen",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "grundlagen-sensor-schaltung.svg",
  "q": "B1 liefert kein Signal. Mit gestecktem Sensor messen Sie an A gegen Masse 0 V, direkt am Steuergerät an Pin 12 aber 5,0 V. Was folgt daraus?",
  "opts": [
   "Der 5-V-Regler im Steuergerät ist defekt und muss ersetzt werden",
   "Die Leitung zwischen Pin 12 und Messpunkt A ist unterbrochen",
   "Die Masseleitung von B1 zu Pin 14 ist unterbrochen",
   "Sensor B1 schließt die Versorgung kurz und ist defekt"
  ],
  "correct": 1,
  "explain": "Am Steuergerätepin sind die 5 V da, ein Stück weiter auf derselben Leitung nicht mehr – dazwischen ist die Leitung (oder ein Stecker) unterbrochen. Der Regler arbeitet also. Eine offene Masse an Pin 14 ändert die Spannung an A nicht, ein Kurzschluss im Sensor würde auch Pin 12 herunterziehen.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "db75ac97f79f",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Schaltzeichen (nach DIN EN 60617) das Bauteil zu.",
  "paare": [
   [
    "Rechteck mit durchgehendem Längsstrich",
    "Sicherung"
   ],
   [
    "Kreis mit Kreuz",
    "Glühlampe"
   ],
   [
    "Kreis mit dem Buchstaben M",
    "Elektromotor"
   ],
   [
    "Leeres Rechteck mit zwei Anschlüssen",
    "Widerstand"
   ],
   [
    "Rechteck mit schrägem Strich und „−ϑ“",
    "NTC-Temperaturfühler"
   ]
  ],
  "ablenker": [
   "Kondensator",
   "Diode"
  ],
  "explain": "Die Grundzeichen muss man im Schaltplan sofort erkennen: Sicherung = Rechteck mit Längsstrich, Lampe = Kreis mit Kreuz, Motor = Kreis mit M, Widerstand = Rechteck. Der schräge Strich bedeutet „veränderlich“, −ϑ „sinkt bei steigender Temperatur“ (NTC).",
  "src": "FW (Schaltzeichen mit Tabellenbuch abgleichen)",
  "tb": true
 },
 {
  "id": "9895ca37bc39",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Am CAN-Bus wird bei abgeklemmter Batterie zwischen CAN-High und CAN-Low gemessen. Ordnen Sie den Messwerten den Befund zu (zwei Abschlüsse zu je 120 Ω).",
  "paare": [
   [
    "ca. 60 Ω",
    "In Ordnung, beide Abschlüsse wirksam"
   ],
   [
    "ca. 120 Ω",
    "Ein Abschluss oder seine Leitung fehlt"
   ],
   [
    "ca. 0 Ω",
    "Kurzschluss zwischen CAN-High und CAN-Low"
   ],
   [
    "unendlich (offen)",
    "Messstelle ohne Verbindung zu beiden Abschlüssen"
   ]
  ],
  "ablenker": [
   "Batterie zu schwach"
  ],
  "explain": "Zwei 120-Ω-Widerstände parallel ergeben 60 Ω. Fehlt einer, bleibt 120 Ω. Berühren sich die Leitungen, misst man fast 0 Ω. Unendlich heißt: Von der Messstelle aus ist keiner der beiden Abschlüsse erreichbar (z. B. Stichleitung zur Buchse unterbrochen). Die Batterie spielt bei dieser stromlosen Messung keine Rolle.",
  "src": "Netz: mvwautotechniek.nl, kfz-dietrich.com"
 },
 {
  "id": "4c6b65c0648d",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte einer Spannungsfallmessung auf der Masseseite eines Verbrauchers in die richtige Reihenfolge.",
  "schritte": [
   "Im Schaltplan den Masseweg des Verbrauchers bis zum Massepunkt verfolgen",
   "Voltmeter zwischen Masseanschluss des Verbrauchers und Batterie-Minus anschließen, Verbraucher einschalten (Stromkreis unter Last)",
   "Spannungsfall ablesen und mit dem Sollwert vergleichen",
   "Bei zu hohem Wert abschnittsweise messen, um die Übergangsstelle einzugrenzen"
  ],
  "explain": "Ein Spannungsfall entsteht nur, wenn Strom fließt – darum unter Last messen. Erst den ganzen Masseweg messen, dann bei zu hohem Wert Stück für Stück (Leitung, Stecker, Massepunkt) eingrenzen. Sollwert laut Herstellerangabe, meist nur wenige Zehntel Volt.",
  "src": "FW, Netz: kfz-dietrich.com Spannungsabfall"
 },
 {
  "id": "6f9d9d8b2c73",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Eine Batterie wird über Nacht leer. Bringen Sie die Schritte der Ruhestrommessung in die richtige Reihenfolge.",
  "schritte": [
   "Zündung aus, Strommesszange nullen und um die Batterie-Minusleitung legen",
   "Fahrzeug verriegeln und warten, bis alle Steuergeräte eingeschlafen sind",
   "Ruhestrom ablesen und mit der Herstellerangabe vergleichen",
   "Bei zu hohem Wert Sicherungen einzeln ziehen und auf den Stromabfall achten"
  ],
  "explain": "Direkt nach dem Abschalten arbeiten viele Steuergeräte noch – wer zu früh misst, sieht einen zu hohen Wert. Mit der Zange muss die Leitung nicht getrennt werden (sonst wachen Steuergeräte wieder auf). Fällt beim Ziehen einer Sicherung der Strom deutlich, ist der Stromkreis mit dem Verbraucher gefunden.",
  "src": "Netz: kfz-dietrich.com Ruhestrom, autoservicepraxis"
 },
 {
  "id": "da5e14f5681d",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie wird ein Multimeter für eine Strommessung richtig angeschlossen?",
  "opts": [
   "Parallel zum Verbraucher, Messleitung in der A-Buchse",
   "In Reihe in den Stromkreis, Messleitung in der A-Buchse",
   "In Reihe in den Stromkreis, Messleitung in der V/Ω-Buchse",
   "Parallel zur Batterie, um den Gesamtstrom zu messen"
  ],
  "correct": 1,
  "explain": "Der Strom muss durch das Messgerät fließen – also Stromkreis auftrennen und das Gerät in Reihe einfügen, Messleitung in die Strombuchse. Parallel geschaltet ist ein Strommessgerät fast ein Kurzschluss: Die Sicherung im Gerät löst aus oder das Gerät wird zerstört. Ohne Auftrennen geht es nur mit der Strommesszange.",
  "src": "FW"
 },
 {
  "id": "a7b8778cbf69",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Sie wollen prüfen, ob eine Sensorleitung Masseschluss hat. Welches Vorgehen ist richtig?",
  "opts": [
   "Leitung an beiden Enden abstecken, Widerstand Leitung–Fahrzeugmasse messen; Soll: unendlich",
   "Leitung angesteckt lassen, Zündung ein, Widerstand Leitung–Fahrzeugmasse messen; Soll: unendlich",
   "Leitung an beiden Enden abstecken, Widerstand von Ende zu Ende messen; Soll: unter 1 Ω",
   "Leitung an beiden Enden abstecken, Widerstand Leitung–Fahrzeugmasse messen; Soll: unter 1 Ω"
  ],
  "correct": 0,
  "explain": "Für die Isolationsprüfung wird die Leitung beidseitig abgesteckt, sonst misst man über Sensor oder Steuergerät nach Masse. Eine intakte Leitung hat keine Verbindung zur Masse – das Messgerät zeigt „offen“. Die Messung von Ende zu Ende ist die Durchgangsprüfung und findet eine Unterbrechung, keinen Masseschluss.",
  "src": "FW"
 },
 {
  "id": "1f311518e742",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aussage zum LIN-Bus ist richtig?",
  "opts": [
   "Zweidrahtbus mit zwei 120-Ω-Abschlüssen; Ruhepegel 2,5 V auf beiden Leitungen",
   "Eindrahtbus, auf dem jedes Steuergerät gleichberechtigt senden darf; Ruhepegel 0 V",
   "Lichtwellenleiter-Ring für Multimedia; Daten werden als Lichtimpulse übertragen",
   "Eindrahtbus mit einem Master und mehreren Slaves; Ruhepegel nahe Bordspannung"
  ],
  "correct": 3,
  "explain": "LIN ist ein langsamer, günstiger Eindrahtbus für Komfortfunktionen (z. B. Fensterheber, Regensensor, Klimabedienteil). Der Master fragt die Slaves nacheinander ab. In Ruhe liegt die Leitung nahe Bordspannung, ein dominantes Bit zieht sie nach Masse. Zwei Leitungen mit 120-Ω-Abschlüssen gehören zum CAN.",
  "src": "Netz: kfz-tech.de LIN-Bus, kvaser.com"
 },
 {
  "id": "40bae58799c4",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine Plusleitung hat einen Widerstand von 0,05 Ω und führt 20 A. Wie groß ist der Spannungsfall auf der Leitung?",
  "opts": [
   "400 V",
   "1,0 V",
   "0,0025 V",
   "10 V"
  ],
  "correct": 1,
  "formel": "U = I · R\nU = Spannungsfall in V",
  "explain": "U = R × I = 0,05 Ω × 20 A = 1,0 V. Dieses Volt fehlt dem Verbraucher. 400 V ergibt I ÷ R, 0,0025 V ergibt R ÷ I – beides falsche Umstellungen des ohmschen Gesetzes.",
  "src": "FW"
 },
 {
  "id": "276b64e5fa90",
  "cat": "Klima",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 8,
  "situation": "klima-bmw",
  "nr": 1,
  "bild": "klimakreislauf.svg",
  "q": "Zur Vorbereitung sehen Sie sich das Schema des Kältekreislaufs an. Ordnen Sie den Nummern die Bauteile zu.",
  "paare": [
   [
    "①",
    "Verdichter mit Regelventil"
   ],
   [
    "②",
    "Kondensator mit Lüfter"
   ],
   [
    "③",
    "Trockner/Sammler"
   ],
   [
    "④",
    "Expansionsventil"
   ],
   [
    "⑤",
    "Verdampfer mit Gebläse"
   ],
   [
    "⑥",
    "Druck-/Temperatursensor Hochdruck"
   ],
   [
    "⑦",
    "Service-Anschluss Hochdruck"
   ],
   [
    "⑧",
    "Service-Anschluss Niederdruck"
   ]
  ],
  "ablenker": [
   "Drosselrohr",
   "Akkumulator"
  ],
  "explain": "Der Verdichter drückt das Kältemittel zum Kondensator. Von dort fließt es flüssig durch den Trockner zum Expansionsventil. Hinter dem Expansionsventil beginnt die Niederdruckseite (gestrichelt): Verdampfer und Saugleitung zurück zum Verdichter. Sensor und Hochdruck-Serviceanschluss sitzen in der Flüssigkeitsleitung, der Niederdruck-Serviceanschluss in der Saugleitung.",
  "src": "FW, Format Prüfung Schule"
 },
 {
  "id": "706251e5aafa",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "situation": "klima-bmw",
  "nr": 2,
  "q": "In welchem Zustand kommt das Kältemittel am Eingang des jeweiligen Bauteils an? Ordnen Sie Aggregatzustand und Druckseite zu.",
  "paare": [
   [
    "Verdichter",
    "gasförmig, Niederdruck"
   ],
   [
    "Kondensator",
    "gasförmig, Hochdruck"
   ],
   [
    "Trockner/Sammler",
    "flüssig, Hochdruck"
   ],
   [
    "Expansionsventil",
    "flüssig, Hochdruck"
   ],
   [
    "Verdampfer",
    "flüssig-gasförmig (Nassdampf), Niederdruck"
   ]
  ],
  "explain": "Der Verdichter saugt nur Dampf an (Flüssigkeit würde ihn beschädigen). Im Kondensator wird der heiße Dampf verflüssigt, Trockner und Expansionsventil bekommen deshalb Flüssigkeit unter Hochdruck. Hinter dem Expansionsventil fällt der Druck, ein Teil verdampft schon – in den Verdampfer strömt ein Gemisch aus Flüssigkeit und Dampf.",
  "src": "FW"
 },
 {
  "id": "1a70e481591a",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 3,
  "q": "Das Fahrzeug ist mit R1234yf befüllt. Welche Antwort nennt drei zutreffende Eigenschaften bzw. Besonderheiten dieses Kältemittels?",
  "opts": [
   "Geringes Treibhauspotenzial (GWP unter 150); nicht brennbar (Sicherheitsklasse A1); eigene Serviceanschlüsse und eigenes Servicegerät",
   "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); darf mit R134a gemischt werden, weil beide denselben Kreislauf und dieselben Serviceanschlüsse nutzen",
   "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); nicht mit R134a mischen, eigene Serviceanschlüsse und eigenes Servicegerät",
   "Hohes Treibhauspotenzial, deshalb in Neufahrzeugen verboten; schwer entflammbar (Sicherheitsklasse A2L); eigene Serviceanschlüsse und eigenes Servicegerät"
  ],
  "correct": 2,
  "explain": "Merkmale von R1234yf: GWP unter 150, Sicherheitsklasse A2L (schwer entflammbar), nicht mit R134a mischen – eigene Serviceanschlüsse und eigenes Servicegerät. R1234yf ersetzt in Neufahrzeugen R134a, weil es das Klima viel weniger belastet. Dafür ist es schwach brennbar. Der Kreislauf ist gleich aufgebaut, Anschlüsse und Geräte sind aber verschieden, damit nichts verwechselt wird.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "24021215caac",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 4,
  "q": "Bevor Sie den Kältekreis öffnen: Welche Antwort nennt drei Voraussetzungen, damit Sie an dieser Anlage arbeiten dürfen?",
  "opts": [
   "Kein eigener Sachkundenachweis nötig, wenn ein Kollege mit Nachweis im Betrieb ist; zugelassenes Klimaservicegerät für R1234yf; gut belüfteter Arbeitsplatz",
   "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; zugelassenes Klimaservicegerät für R1234yf; gut belüfteter Arbeitsplatz, nicht über einer Arbeitsgrube",
   "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; vorhandenes R134a-Servicegerät genügt; gut belüfteter Arbeitsplatz, nicht über einer Arbeitsgrube",
   "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; zugelassenes Klimaservicegerät für R1234yf; geschlossener Raum ohne Lüftung, damit kein Kältemittel entweicht"
  ],
  "correct": 1,
  "explain": "Wer Kältemittel absaugt oder einfüllt, braucht eine Sachkundebescheinigung. Für R1234yf ist ein eigenes Servicegerät vorgeschrieben. Weil das Kältemittel schwerer als Luft ist, sammelt es sich in Gruben.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "212c2244e9c8",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 5,
  "q": "Welche Antwort nennt vier Vorprüfungen, die Sie ohne Klimaservicegerät durchführen können?",
  "opts": [
   "Sichtprüfung auf Ölspuren und Beschädigungen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Vakuum-Haltetest durchführen",
   "Sichtprüfung auf Ölspuren und Beschädigungen; Innenraumfilter und Kondenswasserablauf prüfen; Kältemittel absaugen und wiegen; Ausströmtemperatur messen",
   "Vakuum-Haltetest durchführen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Innenraumfilter und Kondenswasserablauf prüfen",
   "Sichtprüfung auf Ölspuren und Beschädigungen; Verdichteransteuerung im Tester prüfen; Kondensatorlüfter und Gebläse prüfen; Ausströmtemperatur messen"
  ],
  "correct": 3,
  "explain": "Ohne Servicegerät möglich: Sichtprüfung auf Undichtheit (Ölspuren, Beschädigungen z. B. am Kondensator), Verdichteransteuerung (Messwerte Regelventil im Tester), Kondensatorlüfter und Innenraumgebläse, Innenraumfilter und Kondenswasserablauf, Ausströmtemperatur an der Mitteldüse, Fehlerspeicher von Klima- und Motorsteuergerät. Kältemittel absaugen und wiegen sowie der Vakuumtest gehen nur mit dem Servicegerät. Viele Fehler findet man schon ohne Manometer: Ölspuren zeigen Lecks (das Kältemittel trägt Öl mit), ein ausgefallener Lüfter oder ein zugesetzter Filter mindern die Kühlleistung.",
  "src": "FW"
 },
 {
  "id": "641cfe7ebac2",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "klima-bmw",
  "nr": 6,
  "q": "Sie messen an der Mitteldüse 18 °C (Umluft, höchste Kühlstufe, Gebläse mittel). Welcher Wert wäre bei einer intakten Anlage und 25 °C Außentemperatur ungefähr zu erwarten?",
  "opts": [
   "ca. 4 bis 8 °C",
   "ca. 15 bis 20 °C",
   "ca. −15 bis −10 °C",
   "ca. 22 bis 25 °C"
  ],
  "correct": 0,
  "explain": "Eine intakte Anlage bläst deutlich kühle Luft knapp über dem Gefrierpunkt aus (den genauen Sollwert liefert die Prüftabelle des Herstellers). Unter 0 °C darf es nicht gehen, sonst vereist der Verdampfer. 18 °C sind hier also deutlich zu warm.",
  "src": "FW"
 },
 {
  "id": "1b9899538f65",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 7,
  "q": "Am Servicegerät lesen Sie bei laufendem Motor ab: Niederdruck und Hochdruck liegen beide deutlich unter den Sollwerten aus dem Tabellenbuch. Wie ist das Messergebnis zu beurteilen?",
  "opts": [
   "Überfüllung: zu viel Kältemittel im Kreislauf; überschüssiges Kältemittel absaugen und nach Gewicht neu befüllen",
   "Kondensator verschmutzt oder Lüfter ausgefallen; Kondensator reinigen und Lüfteransteuerung prüfen",
   "Unterfüllung: der Verdampfer wird nicht ausreichend versorgt; Kältemittel verbraucht sich nicht, also Leck suchen statt nachfüllen",
   "Unterfüllung durch normalen Kältemittelverbrauch über die Jahre; nur die fehlende Menge nachfüllen, eine Lecksuche ist dabei nicht nötig"
  ],
  "correct": 2,
  "explain": "Beide Drücke zu niedrig deuten auf Unterfüllung: Der Verdampfer wird nicht ausreichend mit Kältemittel versorgt → geringe Kühlleistung. Nächster Schritt: Leck suchen, nicht einfach nachfüllen. Fehlt Kältemittel, kann der Verdichter auf der Hochdruckseite keinen normalen Druck aufbauen, und auch der Saugdruck sinkt. Da der Kreislauf geschlossen ist, bedeutet Kältemittelverlust immer eine Undichtheit.",
  "src": "FW"
 },
 {
  "id": "10f529a8dacc",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 8,
  "q": "Zum Vergleich: Ordnen Sie den Fehlerbildern die typische Druckanzeige am Servicegerät zu.",
  "paare": [
   [
    "Unterfüllung",
    "ND und HD beide zu niedrig"
   ],
   [
    "Kondensator verschmutzt oder Lüfter ausgefallen",
    "HD deutlich zu hoch, ND leicht erhöht"
   ],
   [
    "Expansionsventil klemmt geschlossen",
    "ND sehr niedrig (bis Unterdruck), HD niedrig, Leitung nach dem Ventil bereift"
   ],
   [
    "Überfüllung",
    "ND und HD beide zu hoch"
   ]
  ],
  "ablenker": [
   "ND zu hoch, HD zu niedrig"
  ],
  "explain": "Kann der Kondensator die Wärme nicht abgeben, steigt vor allem der Hochdruck. Lässt das Expansionsventil kaum Kältemittel durch, saugt der Verdichter die Niederdruckseite leer. Bei Überfüllung steigen beide Drücke. (Der Ablenker „ND hoch, HD niedrig“ passt eher zu einem Verdichter, der nicht fördert.)",
  "src": "FW"
 },
 {
  "id": "9afbea56ee96",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 9,
  "q": "Welche Antwort nennt drei Verfahren, mit denen Sie das Leck suchen können?",
  "opts": [
   "UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Vakuum-Haltetest zur Ortung der Leckstelle",
   "UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Formiergas mit Wasserstoff-Lecksucher",
   "UV-Kontrastmittel und UV-Lampe; elektronischer Lecksucher; Formiergas einfüllen und mit der UV-Lampe suchen",
   "Elektronischer Lecksucher; Formiergas mit Wasserstoff-Lecksucher; Ausströmtemperatur an der Mitteldüse messen"
  ],
  "correct": 1,
  "explain": "Verfahren: UV-Kontrastmittel im Öl und UV-Lampe (mit Brille), elektronischer Lecksucher (spricht auf Kältemittel in der Luft an), Formiergas (Stickstoff-Wasserstoff-Gemisch) mit Wasserstoff-Lecksucher. Hier zeigt die UV-Lampe Kontrastmittel am Kondensator hinter einem Steinschlag. Formiergas eignet sich, wenn kein Kältemittel mehr im Kreislauf ist. Ein Vakuumtest zeigt nur, dass es undicht ist, nicht wo.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "04cc42d0f5d8",
  "cat": "Klima",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 6,
  "situation": "klima-bmw",
  "nr": 10,
  "q": "Der Kondensator ist durch Steinschlag undicht und wird ersetzt. Bringen Sie die Arbeitsschritte am Klimaservicegerät in die richtige Reihenfolge.",
  "schritte": [
   "Restliches Kältemittel absaugen und recyceln",
   "Menge des abgeschiedenen Altöls ablesen",
   "Kondensator und Trockner ersetzen, neue Dichtringe einsetzen",
   "Kreislauf evakuieren (Dauer nach Herstellerangabe)",
   "Vakuum halten und beobachten (Dichtheitsprüfung)",
   "Frisches Öl in der abgeschiedenen Menge und ggf. UV-Kontrastmittel ergänzen",
   "Kältemittel nach Gewicht laut Typschild einfüllen"
  ],
  "explain": "Erst muss der Kreislauf leer sein, bevor man ihn öffnet. Die abgesaugte Ölmenge wird später ersetzt. Nach dem Einbau wird evakuiert (meist mindestens 20–30 Minuten, genaue Zeit nach Hersteller). Steigt der Druck beim Halten nicht an, ist der Kreislauf dicht – erst dann wird Öl und Kältemittel eingefüllt.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "3fb15d5713d7",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "klima-bmw",
  "nr": 11,
  "q": "Wozu wird der Kältekreislauf vor dem Befüllen evakuiert?",
  "opts": [
   "Um Luft und Feuchtigkeit zu entfernen und die Dichtheit zu prüfen",
   "Um das Kältemittelöl vollständig aus dem Verdichter zu saugen",
   "Um den Trockner zu regenerieren, damit er nicht getauscht werden muss",
   "Um den Kreislauf auf Betriebstemperatur zu bringen"
  ],
  "correct": 0,
  "explain": "Im Vakuum siedet Wasser schon bei Raumtemperatur und wird abgesaugt. Luft würde den Hochdruck erhöhen. Hält das Vakuum, ist die Anlage dicht.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "eb19a3e87a21",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 12,
  "q": "Warum muss der Trockner erneuert werden, wenn der Kreislauf geöffnet wurde? Welche Begründung ist richtig?",
  "opts": [
   "Der Trockner speichert das Kältemittelöl für den Verdichter; nach dem Öffnen ist er leergelaufen und muss mit frischem Öl getauscht werden",
   "Das Filtersieb ist durch Abrieb verstopft; die Feuchtigkeit aus der Luft spielt für den Trockner keine Rolle",
   "Beim Evakuieren wird das Trockenmittel durch den Unterdruck zerstört, deshalb ist der Trockner ein Einwegteil",
   "Das Trockenmittel hat Feuchtigkeit aus der Luft aufgenommen und ist gesättigt; Wasser bildet Säure und kann am Expansionsventil gefrieren"
  ],
  "correct": 3,
  "explain": "Das Trockenmittel ist nach dem Öffnen mit Feuchtigkeit gesättigt. Feuchtigkeit bildet mit Kältemittel und Öl Säure → Korrosion im Kreislauf; freies Wasser kann am Expansionsventil gefrieren und den Durchfluss sperren. Der Trockner kann nur eine begrenzte Menge Wasser binden. Ist der Kreislauf offen, ist er schnell voll. Ein neuer Trockner schützt Verdichter und Expansionsventil.",
  "src": "FW"
 },
 {
  "id": "5bb778286785",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 13,
  "q": "Für das Ergänzen des Öls stehen in der Werkstatt mehrere Kältemittelöle. Ordnen Sie den Ölen den richtigen Einsatz zu.",
  "paare": [
   [
    "PAG-Öl (ohne YF)",
    "nur für R134a-Anlagen"
   ],
   [
    "PAG-Öl YF",
    "für R1234yf- und R134a-Anlagen"
   ],
   [
    "POE-Öl",
    "für elektrische Verdichter (Hybrid/E-Fahrzeug)"
   ],
   [
    "PAO-Öl",
    "Universalöl für R134a, mischt sich nicht mit PAG"
   ]
  ],
  "ablenker": [
   "für Motoren mit Partikelfilter"
  ],
  "explain": "Für den BMW mit R1234yf kommt nur PAG-Öl YF (bzw. das Öl nach Herstellervorgabe) in Frage. PAG ohne YF darf nicht in R1234yf-Anlagen. POE ist nicht leitend und deshalb für elektrische Verdichter da. Grundsätzlich: Typ, Viskosität und Menge nach Hersteller, Öle nicht mischen.",
  "src": "TB Betriebsstoffe (Kompressoröle)"
 },
 {
  "id": "54482f9a2394",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 14,
  "q": "Ein Kollege will das übrige Öl später in einem Hybridfahrzeug mit elektrischem Verdichter verwenden. Warum ist dort POE-Öl vorgeschrieben?",
  "opts": [
   "Der HV-Elektromotor im Verdichter wird von Kältemittel und Öl umströmt; POE ist nicht leitend und erhält den Isolationswiderstand",
   "POE ist besonders hygroskopisch und bindet dadurch die Feuchtigkeit im Kreislauf besser als PAG-Öl",
   "POE schmiert die hohen Drehzahlen des Elektroverdichters besser als PAG; die elektrischen Eigenschaften des Öls spielen dabei keine Rolle",
   "POE ist elektrisch leitend und leitet Fehlerströme des HV-Motors sicher zur Fahrzeugmasse ab"
  ],
  "correct": 0,
  "explain": "Im elektrischen Verdichter wird der Hochvolt-Elektromotor von Kältemittel und Öl umströmt. POE-Öl ist nicht elektrisch leitend und hält die Isolation aufrecht; leitendes Öl verschlechtert den Isolationswiderstand → HV-Fehler bzw. Gefahr. POE ist außerdem wasserabweisend und darf nicht mit anderen Ölen gemischt werden. Schon Reste von PAG im Servicegerät können bei E-Verdichtern schaden – das Gerät muss dafür geeignet sein.",
  "src": "TB Betriebsstoffe (Kompressoröle), FW"
 },
 {
  "id": "e4270e6857f2",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "klima-bmw",
  "nr": 15,
  "q": "Laut Typschild beträgt die Füllmenge 590 g R1234yf. Das Servicegerät hat 340 g abgesaugt. Wie viel Prozent der Füllmenge haben gefehlt?",
  "opts": [
   "57,6 %",
   "42,4 %",
   "73,5 %",
   "4,2 %"
  ],
  "correct": 1,
  "explain": "Fehlmenge = 590 g − 340 g = 250 g. Anteil = 250 g ÷ 590 g × 100 % ≈ 42,4 %.",
  "src": "FW"
 },
 {
  "id": "eda77fe59da8",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 16,
  "q": "Der Kunde klagt auch über muffigen Geruch. Welche Antwort nennt die Ursache und zwei geeignete Maßnahmen zur Abhilfe?",
  "opts": [
   "Ursache: Kältemittel tritt am Verdampfer aus; Kältemittel absaugen und neu befüllen, Innenraumfilter erneuern",
   "Ursache: verbranntes Kältemittelöl im Verdichter; Kältemittelöl wechseln und den Verdichter spülen",
   "Ursache: Bakterien und Pilze am feuchten Verdampfer; Verdampfer reinigen bzw. desinfizieren, Innenraumfilter erneuern und Ablauf prüfen",
   "Ursache: Bakterien und Pilze am feuchten Verdampfer; Kondenswasserablauf verschließen, damit kein Schmutz eindringt, und Duftstoff in die Düsen sprühen"
  ],
  "correct": 2,
  "explain": "Ursache sind Bakterien und Pilze am feuchten Verdampfer. Abhilfe: Verdampfer reinigen bzw. desinfizieren, Innenraumfilter erneuern und Kondenswasserablauf auf Durchgang prüfen. Am Verdampfer schlägt sich Feuchtigkeit nieder – im Dunkeln wachsen dort Keime. Ein verstopfter Ablauf lässt Wasser im Gehäuse stehen. Tipp für den Kunden: vor dem Abstellen kurz ohne Klima weiterlüften.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "662fe27d8e9a",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 17,
  "q": "Welche Antwort nennt vier richtige Sicherheitsregeln beim Arbeiten am Kältekreis?",
  "opts": [
   "Schutzbrille tragen; Schutzhandschuhe gegen Erfrierungen tragen; nicht in der Arbeitsgrube arbeiten; keine offene Flamme, nicht rauchen",
   "Schutzbrille tragen; Schutzhandschuhe tragen; in der Arbeitsgrube arbeiten, weil Kältemittel nach oben steigt; keine offene Flamme",
   "Schutzbrille tragen; nicht in der Arbeitsgrube arbeiten; keine offene Flamme; Restkältemittel vor dem Öffnen in die Hallenluft ablassen",
   "Schutzbrille tragen; Schutzhandschuhe tragen; nicht in der Arbeitsgrube arbeiten; Tore schließen, damit kein Kältemittel ins Freie gelangt"
  ],
  "correct": 0,
  "explain": "Regeln: Schutzbrille (flüssiges Kältemittel verletzt die Augen), Schutzhandschuhe (Erfrierungen), nicht in der Arbeitsgrube arbeiten (Kältemittel schwerer als Luft, verdrängt den Sauerstoff), keine offene Flamme und nicht rauchen (R1234yf brennbar, giftige Zersetzungsprodukte), Arbeitsplatz gut belüften. Beim Verdampfen entzieht das Kältemittel der Umgebung sehr viel Wärme – auf der Haut gibt es Erfrierungen. In der Grube kann man ersticken, ohne es zu merken.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "5a8d4556d2be",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige Abschlussarbeiten, bevor Sie das Fahrzeug an den Kunden übergeben?",
  "opts": [
   "Dichtheit der neuen Verbindungen prüfen; Leistungstest; Fehlerspeicher löschen; als Reserve gegen spätere Verluste 10 % mehr Kältemittel als laut Typschild einfüllen",
   "Dichtheit der neuen Verbindungen prüfen; Fehlerspeicher löschen; Füllmenge dokumentieren; Leistungstest entfällt, da nach Gewicht befüllt wurde",
   "Leistungstest; Fehlerspeicher auslesen und löschen; Füllmenge dokumentieren; zur Dichtheitsprüfung etwas Kältemittel an den Verbindungen ablassen",
   "Dichtheit der neuen Verbindungen prüfen; Leistungstest (Ausströmtemperatur, Drücke); Fehlerspeicher auslesen und löschen; Kältemittelart und Füllmenge dokumentieren"
  ],
  "correct": 3,
  "explain": "Abschlussarbeiten: Dichtheit der neuen Verbindungen prüfen (z. B. elektronischer Lecksucher), Leistungstest (Ausströmtemperatur und Drücke), Fehlerspeicher auslesen und löschen, Kältemittelart und Füllmenge dokumentieren (abgesaugt / eingefüllt), Serviceaufkleber bzw. Hinweis im Motorraum aktualisieren. Die Dokumentation von Kältemittel und Menge ist vorgeschrieben. Der Leistungstest beweist, dass die Beanstandung „bläst lauwarm“ behoben ist.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "e8fc4df7b2cc",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-skoda",
  "nr": 1,
  "q": "Zu Beginn der Fehlersuche: Welche Antwort nennt drei sinnvolle erste Schritte?",
  "opts": [
   "Kältemittel absaugen und nach Gewicht neu befüllen; danach Fehlerspeicher löschen und Probefahrt machen, weil meist Kältemittel fehlt",
   "Beanstandung nachvollziehen (AC ein, Ausströmtemperatur messen); Fehlerspeicher aller Steuergeräte auslesen; Messwerte zu Drucksensor und Regelventil ansehen",
   "Beanstandung nachvollziehen (AC ein, Ausströmtemperatur messen); Verdichter vorsorglich ersetzen; danach Fehlerspeicher aller Steuergeräte löschen",
   "Fehlerspeicher löschen und abwarten, ob der Fehler wiederkommt; Innenraumfilter erneuern; Kältemittel mit UV-Kontrastmittel auffüllen, damit nichts fehlt"
  ],
  "correct": 1,
  "explain": "Zuerst wird die Beanstandung nachvollzogen und der Fehlerspeicher aller beteiligten Steuergeräte ausgelesen. Messwertblöcke zeigen, ob Drucksignal und Ansteuerung des Regelventils plausibel sind. Teile tauschen oder Kältemittel wechseln „auf Verdacht“ kostet Geld und findet die Ursache nicht; gelöscht wird erst nach der Reparatur.",
  "src": "FW, Format Prüfung Schule"
 },
 {
  "id": "16b358b0a60e",
  "cat": "Klima",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 6,
  "situation": "klima-skoda",
  "nr": 2,
  "bild": "klima-schaltplan.svg",
  "q": "Im Schaltplan-Auszug sind die Bauteile nur mit Kennzeichen eingetragen. Ordnen Sie den Kennzeichen die Bauteile zu.",
  "paare": [
   [
    "B1",
    "Hochdrucksensor (Kältemitteldruck)"
   ],
   [
    "B2",
    "Verdampfertemperatursensor"
   ],
   [
    "Y1",
    "Regelventil im Verdichter"
   ],
   [
    "A2",
    "Lüftersteuergerät"
   ],
   [
    "M1",
    "Motor des Kühlerlüfters"
   ],
   [
    "F1",
    "Sicherung für den Lüfter (Klemme 30)"
   ]
  ],
  "ablenker": [
   "Magnetkupplung des Verdichters",
   "Relais für den Kühlerlüfter"
  ],
  "explain": "Kennbuchstaben: A Steuergerät, B Sensor, F Sicherung, M Motor, Y Ventil/Aktor. B1 trägt das Zeichen p (Druck) und hat drei Anschlüsse (5 V, Signal, Masse), B2 das Zeichen T (Temperatur) mit zwei Anschlüssen. Y1 ist eine Spule mit Ventilzeichen. Eine Magnetkupplung hat dieser Verdichter nicht, und der Lüfter hängt an einem Lüftersteuergerät statt an einem Relais.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "71c72745484f",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 3,
  "q": "Im Fehlerspeicher des Klima-Steuergeräts steht: „Geber für Kältemitteldruck – Signal zu klein (unterer Grenzwert unterschritten)“. Was sagt dieser Eintrag aus?",
  "opts": [
   "Der Kältemitteldruck ist sicher zu niedrig; die Anlage hat ein Leck und muss sofort abgesaugt und neu befüllt werden",
   "Der Sensor meldet einen zu hohen Druck; der Kondensator ist wahrscheinlich verschmutzt oder der Lüfter ausgefallen",
   "Die Signalspannung am Steuergerät liegt unter dem gültigen Bereich; Ursache kann Leitung, Stecker oder Sensor sein",
   "Das Regelventil im Verdichter wird zu schwach angesteuert; die Endstufe im Steuergerät ist defekt und muss ersetzt werden"
  ],
  "correct": 2,
  "explain": "„Signal zu klein“ heißt nur: Die Spannung am Signaleingang liegt unter dem Bereich, den ein intakter Sensor liefern kann. Ursache kann eine Unterbrechung, ein Kurzschluss nach Masse, ein Steckerfehler oder der Sensor sein. Ob wirklich Kältemittel fehlt, zeigt erst der Vergleich mit dem Manometer – also nicht gleich am Kältekreis arbeiten.",
  "src": "Netz: kfz-dietrich (P0532/P0533), FW"
 },
 {
  "id": "984e7eb7d4d7",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 4,
  "q": "Warum stellt das Steuergerät den Verdichter ab, solange das Drucksignal unplausibel ist? Welche Begründung ist richtig?",
  "opts": [
   "Ohne gültigen Druckwert kann es weder Überdruck noch Kältemittelmangel erkennen; es schaltet zum Schutz der Anlage ab",
   "Der Verdichter braucht das Drucksignal als Spannungsversorgung für das Regelventil; ohne Signal fehlt der Spulenstrom",
   "Das Steuergerät will Kraftstoff sparen; bei jedem Fehler im Klimasystem werden alle Verbraucher abgeschaltet, auch das Gebläse",
   "Der Verdichter würde ohne Signal rückwärts laufen; das Abschalten verhindert, dass Öl in den Verdampfer gedrückt wird"
  ],
  "correct": 0,
  "explain": "Das Drucksignal schützt die Anlage: Zu hoher Druck gefährdet Leitungen und Verdichter, zu niedriger Druck (Kältemittelmangel) bedeutet auch zu wenig Öl für den Verdichter. Ist der Wert unplausibel, kann das Steuergerät beides nicht überwachen und schaltet sicherheitshalber ab. Deshalb bläst die Anlage warm, obwohl der Kältekreis in Ordnung sein kann.",
  "src": "FW"
 },
 {
  "id": "c5eff1b3cee7",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-skoda",
  "nr": 5,
  "bild": "klima-schaltplan.svg",
  "q": "Welche Pins des Steuergeräts A1 gehören laut Schaltplan zum Hochdrucksensor B1, und welche Aufgabe hat jeder?",
  "opts": [
   "Pin 1: Versorgung Klemme 15; Pin 4: Signal; Pin 2: Masse des Steuergeräts",
   "Pin 3: Signal; Pin 4: 5-V-Versorgung; Pin 5: Masse über das Steuergerät",
   "Pin 7: 5-V-Versorgung; Pin 8: Masse; Pin 11: Signal zum Regelventil",
   "Pin 3: 5-V-Versorgung; Pin 4: Signal; Pin 5: Masse über das Steuergerät"
  ],
  "correct": 3,
  "explain": "B1 hat drei Anschlüsse: Pin 1 bekommt von A1 Pin 3 die stabilisierte 5-V-Versorgung, Pin 2 liefert das Drucksignal an A1 Pin 4, Pin 3 liegt über A1 Pin 5 an Masse. Pin 1 und 2 von A1 versorgen das Steuergerät selbst, Pin 7/8 gehören zu B2 und Pin 11 zum Regelventil Y1.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "6bf1420afca3",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 6,
  "q": "Motor aus, das Fahrzeug stand über Nacht bei 20 °C. Am Servicegerät zeigen Hoch- und Niederdruckmanometer beide ca. 5 bar; laut Druck-Temperatur-Tabelle passt das zu 20 °C. Im Messwertblock zeigt der Hochdrucksensor 0,0 bar. Wie beurteilen Sie das?",
  "opts": [
   "Die Anlage ist fast leer, weil der Sensor 0,0 bar misst; das Manometer zeigt nur den Druck im Schlauch des Servicegeräts",
   "Kältemittel ist vorhanden; der Wert im Messwertblock ist unplausibel, der Fehler liegt im elektrischen Sensorkreis",
   "Beide Werte sind in Ordnung, weil der Sensor bei stehendem Motor grundsätzlich 0,0 bar anzeigt und erst im Betrieb misst",
   "Die Anlage ist überfüllt, weil beide Manometer den gleichen Druck zeigen; absaugen und nach Gewicht neu befüllen"
  ],
  "correct": 1,
  "explain": "Im Stillstand gleichen sich Hoch- und Niederdruck an. Solange noch flüssiges Kältemittel im Kreislauf ist, hängt dieser Ruhedruck fast nur von der Temperatur ab – er zeigt also, dass Kältemittel da ist (nicht aber, ob die Menge stimmt). Ein Sensorwert von 0,0 bar ist dann unplausibel. Gleiche Drücke im Stillstand sind normal und kein Zeichen für Überfüllung.",
  "src": "FW, Recherche ausbau-klima"
 },
 {
  "id": "a8c880c94214",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 6,
  "situation": "klima-skoda",
  "nr": 7,
  "bild": "klima-schaltplan.svg",
  "q": "Zündung ein, alle Stecker gesteckt. Sie messen rückseitig an den Steckern gegen Fahrzeugmasse: B1 Pin 1 = 5,0 V, B1 Pin 2 = 1,2 V, B1 Pin 3 = 0,0 V; A1 Pin 3 = 5,0 V, A1 Pin 4 = 0,0 V, A1 Pin 5 = 0,0 V. Wo liegt der Fehler?",
  "opts": [
   "Sensor B1 ist defekt, weil er kein Signal liefert; Sensor ersetzen",
   "Versorgungsleitung A1 Pin 3 – B1 Pin 1 ist unterbrochen",
   "Signalleitung B1 Pin 2 – A1 Pin 4 ist unterbrochen oder hochohmig",
   "Masseleitung B1 Pin 3 – A1 Pin 5 ist unterbrochen"
  ],
  "correct": 2,
  "explain": "Am Sensor kommen 5 V und Masse an, und er liefert 1,2 V – B1 arbeitet also. Am Steuergerät kommen davon 0 V an. Die Spannung geht auf der Signalleitung zwischen B1 Pin 2 und A1 Pin 4 verloren: Unterbrechung oder sehr hoher Übergangswiderstand, z. B. Korrosion im Stecker. Ein neuer Sensor würde nichts ändern.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "4b1d8fac8643",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-skoda",
  "nr": 8,
  "q": "Sie wollen die Unterbrechung mit dem Ohmmeter bestätigen. Welche Antwort beschreibt Messbedingung, Messpunkte und das bestätigende Ergebnis richtig?",
  "opts": [
   "Zündung ein, Stecker gesteckt lassen; zwischen B1 Pin 2 und A1 Pin 4 messen; ein Wert unter 1 Ω bestätigt die Unterbrechung",
   "Zündung aus, Stecker an B1 und A1 abziehen; zwischen B1 Pin 2 und Fahrzeugmasse messen; Anzeige „OL“ zeigt die Unterbrechung",
   "Zündung aus, Stecker abziehen; zwischen B1 Pin 2 und A1 Pin 4 messen; ein Wert unter 1 Ω bestätigt, dass die Leitung unterbrochen ist",
   "Zündung aus, Stecker an B1 und A1 abziehen; zwischen B1 Pin 2 und A1 Pin 4 messen; Anzeige „OL“ bestätigt die Unterbrechung"
  ],
  "correct": 3,
  "explain": "Widerstand misst man nur stromlos und an abgezogenen Steckern – sonst verfälschen Spannung und Steuergeräte-Eingänge den Wert. Eine intakte Leitung hat nahezu 0 Ω; „OL“ (Überlauf, unendlich) zwischen beiden Leitungsenden bedeutet Unterbrechung. Gegen Masse gemessen prüft man nur auf Masseschluss, nicht auf Durchgang.",
  "src": "FW"
 },
 {
  "id": "8cf66d19c309",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 9,
  "q": "Laut Werkstattinformation liefert B1 bei 0 bar 0,5 V und bei 30 bar 4,5 V (Kennlinie linear). Welchem Druck entsprechen die 1,2 V, die Sie direkt an B1 Pin 2 gemessen haben?",
  "opts": [
   "9,0 bar",
   "5,25 bar",
   "8,0 bar",
   "0,53 bar"
  ],
  "correct": 1,
  "explain": "Steigung = 30 bar ÷ (4,5 V − 0,5 V) = 7,5 bar/V. Druck = (1,2 V − 0,5 V) × 7,5 bar/V = 5,25 bar. Das passt zum Ruhedruck am Manometer (ca. 5 bar) – der Sensor misst richtig. Typischer Fehler: den Nullpunkt 0,5 V nicht abziehen (1,2 V × 7,5 bar/V = 9,0 bar) oder zusätzlich die Steigung mit 30 bar ÷ 4,5 V statt ÷ 4 V bilden (1,2 V × 6,67 bar/V = 8,0 bar).",
  "src": "FW"
 },
 {
  "id": "844551b942d7",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "situation": "klima-skoda",
  "nr": 10,
  "bild": "klima-schaltplan.svg",
  "q": "Ordnen Sie den Prüfaufgaben im Schaltplan das passende Messgerät mit Messpunkten und Bedingung zu.",
  "paare": [
   [
    "Versorgungsspannung des Sensors B1",
    "Voltmeter zwischen B1 Pin 1 und B1 Pin 3, Zündung ein"
   ],
   [
    "Durchgang der Signalleitung",
    "Ohmmeter zwischen B1 Pin 2 und A1 Pin 4, Stecker abgezogen"
   ],
   [
    "Ansteuerung des Regelventils Y1",
    "Oszilloskop an A1 Pin 11 gegen Masse, Motor läuft"
   ],
   [
    "Übergangswiderstand der Masse von A2",
    "Voltmeter zwischen A2 Klemme 31 und Batterie-Minus, Lüfter läuft"
   ]
  ],
  "ablenker": [
   "Amperemeter parallel zu B1 Pin 1 und Pin 3, Zündung ein"
  ],
  "explain": "Spannungen misst man im Betrieb parallel zum Messobjekt, Widerstände nur stromlos. Ein PWM-Signal lässt sich nur mit dem Oszilloskop sinnvoll beurteilen, ein Multimeter zeigt höchstens einen Mittelwert. Übergangswiderstände findet man als Spannungsfall unter Last. Ein Amperemeter parallel zu schalten, wäre ein Kurzschluss.",
  "src": "Eigener Schaltplan, Format Prüfung Schule"
 },
 {
  "id": "b70e25b923fe",
  "cat": "Klima",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 6,
  "situation": "klima-skoda",
  "nr": 11,
  "q": "Am Stecker von B1 ist der Kontakt der Signalleitung korrodiert, die Leitung dahinter gebrochen. Bringen Sie die Instandsetzung in die richtige Reihenfolge.",
  "schritte": [
   "Zündung aus, Fahrzeug gegen Einschalten sichern",
   "Schadstelle freilegen und Umfang des Schadens feststellen",
   "Kontakt bzw. Leitungsstück mit zugelassenem Reparatursatz ersetzen (Crimpverbinder mit Schrumpfschlauch)",
   "Leitung befestigen und gegen Scheuern und Feuchtigkeit schützen",
   "Durchgang der reparierten Leitung nachmessen",
   "Fehlerspeicher löschen, Messwertblock prüfen und Funktionsprobe machen"
  ],
  "explain": "Gearbeitet wird spannungsfrei. Erst wenn der Schaden ganz freigelegt ist, wählt man den passenden Reparatursatz; nach Herstellervorgabe meist abgedichtete Crimpverbinder statt Verdrillen oder Isolierband. Vor dem Löschen des Fehlerspeichers wird nachgemessen, danach beweist die Funktionsprobe den Erfolg.",
  "src": "FW"
 },
 {
  "id": "8d112e4c4a2d",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 5,
  "situation": "klima-skoda",
  "nr": 12,
  "bild": "klima-oszi-regelventil.svg",
  "q": "Nach der Reparatur prüfen Sie die Ansteuerung des Regelventils (Oszillogramm). Welche Frequenz hat das Signal, und wie groß ist der bestromte Anteil (Tastverhältnis)?",
  "opts": [
   "400 Hz; 40 % bestromt",
   "200 Hz; 60 % bestromt",
   "400 Hz; 60 % bestromt",
   "2,5 kHz; 60 % bestromt"
  ],
  "correct": 2,
  "formel": "f = 1 / T\nTastverhältnis = t_i / T · 100 %   (t_i = bestromte Zeit)",
  "explain": "Eine Periode (von einer fallenden bis zur nächsten fallenden Flanke) ist 5 Kästchen × 0,5 ms = 2,5 ms lang → f = 1 ÷ 2,5 ms = 400 Hz. Bestromt ist Y1, wenn A1 nach Masse schaltet, also im unteren Abschnitt: 3 Kästchen = 1,5 ms → 1,5 ms ÷ 2,5 ms = 60 %. Wer den oberen Abschnitt nimmt, kommt fälschlich auf 40 %.",
  "src": "Eigenes Oszillogramm, FW"
 },
 {
  "id": "13b5d1aa5630",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 13,
  "bild": "klima-oszi-regelventil.svg",
  "q": "In welchem Abschnitt des Oszillogramms schaltet A1 die Spule von Y1 ein (bestromt), und warum?",
  "opts": [
   "Abschnitt 1, weil dort die hohe Spannung anliegt und die Spule deshalb Strom bekommt",
   "In beiden Abschnitten gleich, weil eine Spule den Strom auch in der Pause unverändert weiterleitet",
   "Abschnitt 1, weil A1 die Spule über Pin 11 mit Plus versorgt und Y1 an Masse liegt",
   "Abschnitt 2, weil A1 dann nach Masse schaltet und Strom von Klemme 15 über F2 und Y1 fließt"
  ],
  "correct": 3,
  "explain": "Y1 liegt über F2 dauernd an Klemme 15; A1 schaltet die Masseseite. Ist der Transistor in A1 leitend, liegt Pin 11 fast auf 0 V, und Strom fließt durch die Spule (Abschnitt 2). Sperrt er, fließt kein Strom, und am Pin misst man über die Spule die volle Bordspannung (Abschnitt 1). Masseseitig angesteuert heißt: unterer Pegel = bestromt.",
  "src": "Eigenes Oszillogramm, Eigener Schaltplan"
 },
 {
  "id": "c4524be1c0ef",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 14,
  "bild": "klima-oszi-regelventil.svg",
  "q": "Laut Werkstattinformation gilt bei diesem Verdichter: größerer bestromter Anteil = größerer Hub. Wie ändert sich das Signal, wenn der Innenraum abgekühlt ist und weniger Kälteleistung gebraucht wird?",
  "opts": [
   "Abschnitt 2 wird kürzer, Abschnitt 1 länger; Hub und Fördermenge sinken",
   "Abschnitt 2 wird länger, Abschnitt 1 kürzer; der Verdichter fördert mehr, um nachzukühlen",
   "Die Frequenz sinkt auf die Hälfte; das Tastverhältnis bleibt gleich, und der Hub sinkt",
   "Die Spannung in Abschnitt 1 sinkt auf etwa 6 V; die Fördermenge sinkt auf die Hälfte"
  ],
  "correct": 0,
  "explain": "Die Leistung wird über das Tastverhältnis gestellt, nicht über Frequenz oder Spannungshöhe. Weniger Bedarf → kürzere bestromte Zeit (Abschnitt 2) bei gleicher Periodendauer → kleinerer mittlerer Spulenstrom → kleinerer Hub. Die Spannung in Abschnitt 1 ist einfach die Bordnetzspannung.",
  "src": "Eigenes Oszillogramm, Netz: Hella Techtips"
 },
 {
  "id": "92d0553aefe3",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-skoda",
  "nr": 15,
  "bild": "klima-schaltplan.svg",
  "q": "Bei der Funktionsprobe fällt auf, dass der Lüfter M1 nur langsam läuft. Bei laufendem Lüfter messen Sie zwischen A2 Klemme 31 und Batterie-Minus 1,6 V, zwischen F1 (Ausgang) und A2 Klemme 30 nur 0,1 V. Wie beurteilen Sie das?",
  "opts": [
   "Plus- und Masseseite sind in Ordnung; der Lüftermotor M1 ist schwergängig und muss ersetzt werden",
   "Übergangswiderstand in der Plusleitung zwischen F1 und A2; Leitung und Stecker an Klemme 30 instand setzen",
   "Zu hoher Übergangswiderstand in der Masseleitung von A2; Masseverbindung reinigen bzw. instand setzen",
   "A1 fordert zu wenig an; das PWM-Signal an Pin 13 muss im Messwertblock einfach erhöht werden"
  ],
  "correct": 2,
  "explain": "Spannungsfall misst man unter Last über einer Leitung bzw. Verbindung. 0,1 V auf der Plusseite sind unauffällig, 1,6 V auf der Masseseite viel zu viel (Grenzwerte laut Hersteller bzw. Tabellenbuch) – dort sitzt ein Übergangswiderstand, z. B. eine korrodierte Masseschraube. Diese Spannung fehlt dem Lüfter, er läuft langsam. Ein neuer Motor würde nichts ändern.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "932d99beac63",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 16,
  "bild": "klima-messpunkte.svg",
  "q": "Zur Leistungsprüfung wollen Sie die Überhitzung bestimmen. An welchem Messpunkt messen Sie dazu die Rohrtemperatur?",
  "opts": [
   "A – Druckleitung nach dem Verdichter",
   "C – Flüssigkeitsleitung vor dem Expansionsventil",
   "E – Saugleitung am Verdampferausgang",
   "D – Leitung zwischen Expansionsventil und Verdampfer"
  ],
  "correct": 2,
  "explain": "Überhitzung = Temperatur des Dampfes am Verdampferausgang minus Verdampfungstemperatur (aus Niederdruck und Druck-Temperatur-Tabelle). Gemessen wird deshalb an der Saugleitung direkt hinter dem Verdampfer (E). An D ist das Kältemittel noch Nassdampf, an A und C liegt Hochdruck an.",
  "src": "FW"
 },
 {
  "id": "349de976c4d1",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 5,
  "situation": "klima-skoda",
  "nr": 17,
  "bild": "klima-messpunkte.svg",
  "q": "Laut Druck-Temperatur-Tabelle entspricht der gemessene Hochdruck einer Kondensationstemperatur von 52 °C. An Messpunkt C messen Sie 45 °C. Wie groß ist die Unterkühlung?",
  "opts": [
   "97 K",
   "−7 K",
   "7 K",
   "45 K"
  ],
  "correct": 2,
  "formel": "Unterkühlung Δt = t_{Kond} − t_{Fl}\nt_{Fl} = gemessene Temperatur der Flüssigkeitsleitung; Δt in K",
  "explain": "Unterkühlung = Kondensationstemperatur − gemessene Flüssigkeitstemperatur = 52 °C − 45 °C = 7 K. Temperaturdifferenzen gibt man in Kelvin an. Die Unterkühlung zeigt, dass am Expansionsventil reine Flüssigkeit ankommt; ob der Wert passt, steht in der Herstellerangabe.",
  "src": "FW"
 },
 {
  "id": "0b3a7a69d8a6",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-skoda",
  "nr": 18,
  "q": "Bei der Fahrzeugübergabe fragt der Kunde, was defekt war. Welche Erklärung ist fachlich richtig und kundengerecht?",
  "opts": [
   "Der Kältemitteldruck war zu niedrig; wir haben Kältemittel nachgefüllt, und deshalb misst der Drucksensor jetzt wieder richtig",
   "Eine Leitung zum Drucksensor war am Stecker korrodiert, deshalb schaltete die Anlage ab; Leitung repariert, Kühlung geprüft",
   "Der Klimakompressor hat nicht mehr hochgeregelt; wir haben ihn vorsorglich ersetzt und die Anlage neu befüllt",
   "Es war ein Softwarefehler im Steuergerät; wir haben den Fehlerspeicher gelöscht, damit ist die Sache erledigt"
  ],
  "correct": 1,
  "explain": "Der Kunde soll verstehen, was die Ursache war und was gemacht wurde – verständlich, aber wahr. Der Kältekreis war in Ordnung, repariert wurde nur die Sensorleitung (und die Masse des Lüfters). Aussagen wie „vorsorglich ersetzt“ oder „nur gelöscht“ wären falsch und kosten Vertrauen.",
  "src": "FW"
 },
 {
  "id": "5eb2c25622bf",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Kunde bittet Sie, die Klimaanlage vor der Reparatur einfach „abzulassen“. Wie müssen Sie stattdessen vorgehen?",
  "opts": [
   "Ablassen ist bei R1234yf erlaubt, weil das Treibhauspotenzial gering ist; nur Art und Menge des Kältemittels dokumentieren",
   "Nicht ablassen (verboten); mit dem Servicegerät absaugen und recyceln bzw. entsorgen; Art und Menge dokumentieren; nur mit Sachkundenachweis",
   "Kältemittel im Freien langsam über den Niederdruckanschluss ablassen, damit es sich verteilt; Art und Menge dokumentieren; nur mit Sachkundenachweis",
   "Mit dem Servicegerät absaugen und danach über die Hallenabsaugung ins Freie leiten; Art und Menge dokumentieren"
  ],
  "correct": 1,
  "explain": "Kältemittel darf nicht in die Atmosphäre abgelassen werden. Es wird mit dem Servicegerät abgesaugt und recycelt bzw. als Abfall entsorgt, Art und Menge werden dokumentiert, und arbeiten dürfen nur Personen mit Sachkundenachweis. Fluorierte Kältemittel schädigen das Klima. Deshalb gilt ein Ablassverbot, und jede Menge, die ab- oder eingefüllt wird, wird aufgeschrieben.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "b8bc1683ded6",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Seit dem 17.04.2026 gilt in Deutschland eine neue Chemikalien-Klimaschutzverordnung (ChemKlimaschutzV). Welche Aussage trifft zu?",
  "opts": [
   "Die Sachkundepflicht gilt jetzt auch für alternative Kältemittel wie R1234yf; ältere Bescheinigungen gelten bis 12.03.2029 und müssen danach aufgefrischt werden.",
   "Für R1234yf ist seit 2026 keine Sachkunde mehr nötig, weil es nur ein geringes Treibhauspotenzial hat; die Bescheinigung bleibt nur für R134a-Anlagen Pflicht.",
   "Alle bisherigen Sachkundebescheinigungen sind seit dem 17.04.2026 ungültig; wer weiter an Klimaanlagen arbeitet, muss sofort neu geprüft werden.",
   "Kleinmengen bis 100 g dürfen seit 2026 in die Luft abgelassen werden, wenn Art und Menge im Serviceprotokoll stehen."
  ],
  "correct": 0,
  "explain": "Die neue Verordnung setzt die EU-F-Gase-Verordnung 2024/573 um. R1234yf ist ein HFO-Kältemittel und fällt jetzt ausdrücklich unter die Sachkundepflicht. Alte Nachweise bleiben bis 12.03.2029 gültig. Das Ablassverbot gilt weiter.",
  "src": "Netz: IHK Koblenz, autoservicepraxis 2026"
 },
 {
  "id": "d477db11c8c6",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Merkmale dem Expansionsventil oder dem Drosselrohr zu.",
  "paare": [
   [
    "Regelt die Kältemittelmenge abhängig von der Temperatur am Verdampferausgang",
    "Expansionsventil"
   ],
   [
    "Fester Querschnitt, keine Regelung",
    "Drosselrohr"
   ],
   [
    "Wird mit einem Akkumulator auf der Niederdruckseite kombiniert",
    "Drosselrohr"
   ],
   [
    "Wird mit Trockner/Sammler auf der Hochdruckseite kombiniert",
    "Expansionsventil"
   ]
  ],
  "explain": "Beide trennen Hoch- und Niederdruckseite. Das Drosselrohr kann nicht regeln, deshalb fängt der Akkumulator hinter dem Verdampfer flüssiges Kältemittel ab, bevor es zum Verdichter kommt.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "d055ec5552e7",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Eine Anlage arbeitet mit Drosselrohr und Akkumulator. Wo ist der Akkumulator eingebaut?",
  "opts": [
   "Auf der Niederdruckseite zwischen Verdampfer und Verdichter",
   "Auf der Hochdruckseite zwischen Kondensator und Drosselrohr",
   "Direkt am Druckausgang des Verdichters",
   "Zwischen Drosselrohr und Verdampfer"
  ],
  "correct": 0,
  "explain": "Der Akkumulator sammelt hinter dem Verdampfer flüssiges Kältemittel und bindet Feuchtigkeit. So bekommt der Verdichter nur Dampf. Der Sammler (Trockner) einer Anlage mit Expansionsventil sitzt dagegen auf der Hochdruckseite.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "7abfdf6e2800",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Wie passt ein extern geregelter Verdichter seine Förderleistung an? Welche Beschreibung ist richtig?",
  "opts": [
   "Eine Magnetkupplung schaltet den Verdichter je nach Kältebedarf ein und aus; der Hub der Kolben bleibt dabei immer gleich",
   "Ein Regelventil verstellt den Hub; es wird rein mechanisch vom Saugdruck gesteuert, ohne Signal vom Steuergerät",
   "Ein Regelventil verstellt den Hub (Schrägstellung der Taumelscheibe); das Steuergerät steuert es per PWM an; die Leistung passt sich stufenlos an",
   "Das Steuergerät verändert die Drehzahl des Verdichters stufenlos über eine verstellbare Riemenscheibe; der Hub der Kolben bleibt dabei immer gleich"
  ],
  "correct": 2,
  "explain": "Die Fördermenge wird über den Hub (Schrägstellung der Taumelscheibe) verändert. Ein Regelventil am Verdichter verstellt den Hub, das Steuergerät steuert es mit einem PWM-Signal an. Die Leistung passt sich stufenlos dem Kältebedarf an; oft ohne Magnetkupplung, bei „Klima aus“ minimaler Hub. (Rein vom Saugdruck geregelt = intern geregelter Verdichter.) Statt ständig ein- und auszuschalten wie bei einer Magnetkupplung, läuft der Verdichter mit und fördert nur so viel wie nötig. Das ist leiser, gleichmäßiger und spart Kraftstoff.",
  "src": "FW"
 },
 {
  "id": "0a2913d1a4c2",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie reagiert die Motorsteuerung auf den Betrieb der Klimaanlage? Welche Beschreibung ist richtig?",
  "opts": [
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird Drehmoment bzw. Leerlaufdrehzahl angehoben; bei Volllast oder zu heißem Motor wird der Verdichter abgeregelt",
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird die Drehzahl abgesenkt, um Kraftstoff zu sparen; bei Volllast läuft der Verdichter mit voller Leistung",
   "Das Motorsteuergerät erhält keine Information; der Leerlaufregler reagiert erst, wenn die Drehzahl gefallen ist; bei Volllast bleibt der Verdichter unverändert",
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird das Drehmoment angehoben; bei zu hoher Kühlmitteltemperatur fördert der Verdichter mehr, um den Motor mitzukühlen"
  ],
  "correct": 0,
  "explain": "Das Klimasteuergerät meldet die Verdichterlast (z. B. über CAN) an das Motorsteuergerät. Im Leerlauf erhöht das Motorsteuergerät vorsorglich Drehmoment bzw. Leerlaufdrehzahl, damit der Motor nicht abstirbt. Bei Volllast/Beschleunigen oder zu hoher Kühlmitteltemperatur wird der Verdichter abgeregelt oder abgeschaltet. Der Verdichter braucht spürbar Motorleistung. Deshalb tauschen Klima- und Motorsteuergerät Informationen aus und stimmen Last und Kühlbedarf ab.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "723b7b8e8758",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Der Druck-/Temperatursensor auf der Hochdruckseite ist ausgefallen. Welche Antwort beschreibt Aufgabe, Folgen des Ausfalls und Prüfung richtig?",
  "opts": [
   "Misst die Ausströmtemperatur an der Mitteldüse; bei Ausfall läuft der Verdichter mit voller Leistung weiter; prüfen: Sensor ausbauen und durchblasen",
   "Überwacht den Hochdruck nur zur Anzeige im Kombiinstrument; bei Ausfall läuft der Verdichter ungeregelt mit voller Leistung weiter; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
   "Überwacht nur die Füllmenge beim Befüllen am Servicegerät; bei Ausfall Verdichter ab, Fehlerspeichereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
   "Überwacht den Hochdruck, beeinflusst Verdichter und Lüfter; bei Ausfall Verdichter ab bzw. heruntergeregelt, Fehlereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen"
  ],
  "correct": 3,
  "explain": "Aufgabe: Hochdruck überwachen (Schutz vor zu hohem und zu niedrigem Druck); das Signal steuert Verdichter und Kondensatorlüfter. Bei Ausfall schaltet das Steuergerät den Verdichter ab bzw. regelt ihn herunter → keine Kühlung, Fehlerspeichereintrag. Prüfen: Fehlerspeicher, Messwert mit Manometeranzeige vergleichen, Versorgung, Signal und Masse nach Schaltplan messen. Ohne gültiges Drucksignal kann das Steuergerät nicht erkennen, ob der Druck gefährlich hoch ist – es schützt die Anlage, indem es den Verdichter stilllegt.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "7e2067cc646c",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Begriffen die passende Beschreibung zu.",
  "paare": [
   [
    "Überhitzung",
    "Der Dampf am Verdampferausgang ist wärmer als die Verdampfungstemperatur"
   ],
   [
    "Unterkühlung",
    "Die Flüssigkeit nach dem Kondensator ist kälter als die Kondensationstemperatur"
   ],
   [
    "Verdampfungstemperatur",
    "Siedetemperatur des Kältemittels im Verdampfer, hängt vom Niederdruck ab"
   ],
   [
    "Kondensationstemperatur",
    "Temperatur, bei der das Kältemittel im Kondensator flüssig wird, hängt vom Hochdruck ab"
   ]
  ],
  "explain": "Überhitzung sorgt dafür, dass nur Dampf zum Verdichter kommt; Unterkühlung sorgt dafür, dass am Expansionsventil nur Flüssigkeit ankommt. Die Druck-Temperatur-Zuordnung steht im Tabellenbuch.",
  "src": "FW"
 },
 {
  "id": "ffb810ff3f18",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Das Hochdruckmanometer zeigt einen Überdruck von 14 bar. Der Luftdruck beträgt 1 bar. Wie groß ist der Absolutdruck?",
  "opts": [
   "13 bar",
   "14 bar",
   "1,5 bar",
   "15 bar"
  ],
  "correct": 3,
  "formel": "p_{abs} = p_e + p_{amb}\np_e = Überdruck (Manometer, Unterdruck negativ), p_{amb} = Luftdruck; 1 bar = 1000 mbar",
  "explain": "Manometer zeigen den Überdruck gegenüber der Umgebung. Absolutdruck = Überdruck + Luftdruck = 14 bar + 1 bar = 15 bar.",
  "src": "FW"
 },
 {
  "id": "3b7e6bd41231",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum dürfen Sie beim Umgang mit Kältemittel nicht in einer Arbeitsgrube arbeiten?",
  "opts": [
   "Kältemitteldampf ist schwerer als Luft, sammelt sich am Boden und verdrängt den Sauerstoff",
   "Kältemitteldampf ist leichter als Luft, steigt aus dem Motorraum auf und sammelt sich unter dem Hallendach",
   "In der Grube ist es zu warm, das Kältemittel explodiert",
   "In der Grube kann das Servicegerät die Füllmenge nicht wiegen"
  ],
  "correct": 0,
  "explain": "Kältemittel ist geruchlos und schwerer als Luft. In einer Grube kann der Sauerstoffanteil unbemerkt sinken – Erstickungsgefahr.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "18b47948cb3f",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie ist abgeschiedenes, altes Kältemittelöl zu entsorgen?",
  "opts": [
   "Als gefährlicher Abfall getrennt sammeln und entsorgen",
   "Zusammen mit dem Motoraltöl über den Ölabscheider ablassen",
   "Wieder in den Kreislauf einfüllen, um Öl zu sparen",
   "Im Restmüll entsorgen, da es nur geringe Mengen sind"
  ],
  "correct": 0,
  "explain": "Kältemittelöl gilt als gefährlicher Abfall. Altes Öl wird nie wiederverwendet – nachgefüllt wird immer frisches Öl in der abgeschiedenen Menge.",
  "src": "TB Betriebsstoffe, FK Werkstatthinweise"
 },
 {
  "id": "9ffe7f77be80",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Auf einem Kältemittelöl steht zusätzlich „UV“. Was bedeutet das?",
  "opts": [
   "Das Öl enthält ein UV-Kontrastmittel, mit dem man Lecks unter einer UV-Lampe sieht",
   "Das Öl ist für Fahrzeuge mit UV-Schutzverglasung freigegeben",
   "Das Öl ist nur für R134a zugelassen",
   "Das Öl muss vor Sonnenlicht geschützt gelagert werden, weil es sich sonst zersetzt und unbrauchbar wird"
  ],
  "correct": 0,
  "explain": "Das Kontrastmittel tritt an Lecks mit dem Öl aus und leuchtet unter UV-Licht. So findet man auch kleine Undichtheiten.",
  "src": "TB Betriebsstoffe, FK Werkstatthinweise"
 },
 {
  "id": "ed333cdff8c6",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum haben R134a- und R1234yf-Anlagen unterschiedliche Serviceanschlüsse?",
  "opts": [
   "Damit die Kältemittel nicht verwechselt oder gemischt werden und nur das passende Servicegerät angeschlossen werden kann",
   "Weil R1234yf mit deutlich höherem Druck arbeitet und deshalb dickere Leitungen und größere Ventile in den Anschlüssen braucht",
   "Damit R1234yf-Anlagen ohne Sachkunde befüllt werden können",
   "Weil bei R1234yf nur der Niederdruckanschluss genutzt wird"
  ],
  "correct": 0,
  "explain": "Der Kreislauf ist bei beiden Kältemitteln gleich aufgebaut. Die verschiedenen Anschlüsse verhindern, dass falsches Kältemittel eingefüllt wird.",
  "src": "Recherche 3.6"
 },
 {
  "id": "f7793eb9241e",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt die Aufgabe des Innenraumfilters und zwei Folgen, wenn er zugesetzt ist?",
  "opts": [
   "Bindet Feuchtigkeit im Kältemittel; zugesetzt: Säurebildung im Kreislauf und Vereisung am Expansionsventil",
   "Filtert Staub und Pollen aus der Frischluft; zugesetzt: weniger Luftdurchsatz mit geringerer Kühl- und Heizleistung, Scheiben beschlagen leichter",
   "Filtert Staub und Pollen aus der Frischluft; zugesetzt: der Hochdruck steigt stark an, weil der Kondensator weniger Luft bekommt, und der Lüfter fällt aus",
   "Filtert die Ansaugluft des Motors; zugesetzt: Leistungsverlust des Motors und erhöhter Kraftstoffverbrauch"
  ],
  "correct": 1,
  "explain": "Der Innenraumfilter filtert Staub und Pollen aus der Frischluft (mit Aktivkohle auch Gerüche und Schadgase). Ist er zugesetzt, sinkt der Luftdurchsatz → geringere Kühl- und Heizleistung; Scheiben beschlagen leichter, muffiger Geruch ist möglich. Der Filter wird nach Wartungsplan gewechselt. Auf die Einbaurichtung achten (Pfeil zur Luftrichtung).",
  "src": "FW"
 },
 {
  "id": "8fde9de1ded9",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung der Besonderheiten eines elektrischen Klimakompressors in Hybrid- und Elektrofahrzeugen ist richtig?",
  "opts": [
   "Antrieb über Riemen und Magnetkupplung vom Verbrennungsmotor; keine Standklimatisierung möglich; Klimasachkunde genügt; PAG-Öl wie beim Riemenverdichter",
   "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; PAG-Öl YF verwenden",
   "Antrieb aus dem HV-Netz, unabhängig vom Verbrenner; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; nur POE-Öl",
   "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; Arbeiten unter Spannung erlaubt, da der Kältekreis vom HV-Netz getrennt ist; nur POE-Öl"
  ],
  "correct": 2,
  "explain": "Der elektrische Kompressor wird von einem Elektromotor aus dem Hochvoltnetz angetrieben, unabhängig vom Verbrennungsmotor – das ermöglicht Standklimatisierung und Kühlung der HV-Batterie. Arbeiten nur mit HV-Qualifikation, System vorher spannungsfrei schalten. Nur nicht leitendes POE-Öl verwenden, das Servicegerät muss für E-Verdichter geeignet sein. Der Elektromotor sitzt im Kältemittelstrom. Leitendes Öl würde die Isolation verschlechtern – deshalb POE und keine PAG-Reste.",
  "src": "Recherche 3.3, TB Betriebsstoffe, FW"
 },
 {
  "id": "8011c59d5065",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie wird der Kondensatorlüfter angesteuert und was passiert bei einem Ausfall? Welche Beschreibung ist richtig?",
  "opts": [
   "Abhängig von Hochdruck (Drucksensor) und Kühlmitteltemperatur, meist stufenlos per PWM; bei Ausfall steigt der Hochdruck stark, vor allem im Stand, der Verdichter wird abgeschaltet",
   "Nur abhängig von der Fahrgeschwindigkeit, ohne Drucksignal; bei Ausfall sinkt der Hochdruck, und die Kühlleistung wird sogar besser",
   "Abhängig von Hochdruck und Kühlmitteltemperatur per PWM; bei Ausfall fällt die Kühlung vor allem bei schneller Autobahnfahrt aus, im Stand und im Stadtverkehr bleibt sie dagegen unverändert",
   "Abhängig vom Niederdruck am Verdampfer; bei Ausfall sinkt der Niederdruck stark und der Verdampfer vereist"
  ],
  "correct": 0,
  "explain": "Das Steuergerät steuert den Lüfter abhängig vom Hochdruck (Drucksensor) und der Kühlmitteltemperatur an, meist stufenlos (PWM, Lüftersteuergerät). Bei Ausfall steigt der Hochdruck stark, vor allem im Stand → schlechte Kühlung, der Verdichter wird abgeschaltet. Im Stand fehlt der Fahrtwind, dann muss der Lüfter die Wärme am Kondensator abführen. Fällt er aus, schützt das Steuergerät die Anlage vor Überdruck.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "6649627c7865",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Nach längerer Fahrt lässt die Kühlleistung nach und aus den Düsen kommt kaum noch Luft. Nach einer Pause geht es wieder. Wie ist das Fehlerbild zu beurteilen und welche Ursachen kommen in Frage?",
  "opts": [
   "Hochdruckabschaltung durch Überhitzung des Kondensators; Ursachen: Kondensatorlüfter defekt, Kondensator verschmutzt",
   "Unterfüllung durch ein Leck; Ursachen: undichter Kondensator nach Steinschlag, poröse Kältemittelschläuche",
   "Verdampfer vereist; Ursachen: Überfüllung, zu großer Luftdurchsatz durch einen neuen Innenraumfilter, Verdichter regelt zu stark ab",
   "Verdampfer vereist; Ursachen: Verdampfertemperatursensor bzw. Regelung defekt, zu wenig Luftdurchsatz, Feuchtigkeit im Kreislauf"
  ],
  "correct": 3,
  "explain": "Der Verdampfer vereist: Kondenswasser gefriert an den Lamellen, Luft kommt nicht mehr durch. Ursachen: Verdampfertemperatursensor bzw. Regelung defekt (Verdichter regelt nicht ab), zu wenig Luftdurchsatz (Innenraumfilter zugesetzt, Gebläse schwach), Feuchtigkeit im Kreislauf vereist am Expansionsventil. Die Anlage soll den Verdampfer knapp über 0 °C halten. Taut das Eis in der Pause, funktioniert alles wieder – ein typisches Zeichen für Vereisung.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "146e215892b1",
  "cat": "Klima",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Ein Kreislauf ist vollständig leer. Bringen Sie die Schritte der Lecksuche mit Formiergas in die richtige Reihenfolge.",
  "schritte": [
   "Prüfen, dass kein Kältemittel mehr im Kreislauf ist (ggf. Rest absaugen)",
   "Formiergas über den Serviceanschluss bis zum Prüfdruck nach Herstellerangabe einfüllen",
   "Mit dem Wasserstoff-Lecksucher alle Bauteile und Verbindungen abtasten",
   "Undichte Stelle markieren und Formiergas ablassen",
   "Undichtes Bauteil ersetzen bzw. instand setzen",
   "Evakuieren und nach Gewicht befüllen"
  ],
  "explain": "Formiergas (Stickstoff mit wenig Wasserstoff) ist ungefährlich und darf abgelassen werden. Der kleine Wasserstoffanteil wird vom Lecksucher erkannt.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "7838a494c465",
  "cat": "Klima",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Bauteilen des Kältekreislaufs ihre Aufgabe zu.",
  "paare": [
   [
    "Verdichter",
    "saugt Kältemitteldampf an und verdichtet ihn, Druck und Temperatur steigen"
   ],
   [
    "Kondensator",
    "gibt Wärme an die Außenluft ab, das Kältemittel wird flüssig"
   ],
   [
    "Trockner/Sammler",
    "bindet Feuchtigkeit, filtert und speichert flüssiges Kältemittel"
   ],
   [
    "Expansionsventil",
    "senkt den Druck und dosiert das Kältemittel in den Verdampfer"
   ],
   [
    "Verdampfer",
    "nimmt Wärme aus der Innenraumluft auf, das Kältemittel verdampft"
   ]
  ],
  "ablenker": [
   "verdichtet flüssiges Kältemittel und kühlt es dabei ab"
  ],
  "explain": "Wärme wird im Verdampfer aus dem Innenraum aufgenommen und im Kondensator nach außen abgegeben. Der Verdichter ist die Pumpe, das Expansionsventil die Trennstelle zwischen Hoch- und Niederdruck.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "b2fe37c0f954",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "tb": true,
  "q": "Ein Kältemittelöl trägt die Bezeichnung „PAG-Öl ISO 46“. Welche kinematische Viskosität in mm²/s bei 40 °C hat es?",
  "opts": [
   "4,6 mm²/s",
   "460 mm²/s",
   "46 mm²/s",
   "0,46 mm²/s"
  ],
  "correct": 2,
  "explain": "Die ISO-Viskositätsklasse gibt die kinematische Viskosität bei 40 °C an: ISO 46 = 46 mm²/s.",
  "src": "TB Betriebsstoffe (Kompressoröle)"
 },
 {
  "id": "bcfca66ab7a0",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Beim Evakuieren zeigt das Servicegerät einen Überdruck von −0,95 bar an (Luftdruck 1,0 bar). Wie groß ist der Absolutdruck im Kreislauf in mbar?",
  "opts": [
   "50 mbar",
   "950 mbar",
   "1.950 mbar",
   "5 mbar"
  ],
  "correct": 0,
  "formel": "p_{abs} = p_e + p_{amb}\np_e = Überdruck (Manometer, Unterdruck negativ), p_{amb} = Luftdruck; 1 bar = 1000 mbar",
  "explain": "Absolutdruck = Luftdruck + Überdruck = 1,0 bar + (−0,95 bar) = 0,05 bar. 1 bar = 1000 mbar → 0,05 bar = 50 mbar.",
  "src": "FW"
 },
 {
  "id": "8bae98e20bbd",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Merkmale dem Kältemittel R134a oder R1234yf zu.",
  "paare": [
   [
    "Treibhauspotenzial (GWP) unter 150",
    "R1234yf"
   ],
   [
    "Sicherheitsklasse A2L (schwer entflammbar)",
    "R1234yf"
   ],
   [
    "In der EU für neue Pkw nicht mehr zulässig (hohes Treibhauspotenzial)",
    "R134a"
   ],
   [
    "PAG-Öl ohne YF-Kennzeichnung ist zulässig",
    "R134a"
   ]
  ],
  "explain": "R134a ist nicht brennbar, belastet das Klima aber stark – deshalb wird es in Neufahrzeugen der EU nicht mehr eingesetzt. R1234yf hat ein sehr geringes Treibhauspotenzial, ist dafür schwach brennbar. PAG ohne YF nur bei R134a.",
  "src": "Recherche 3.3/3.6, TB Betriebsstoffe, FW"
 },
 {
  "id": "9a0759f46bae",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "PAG-Öl ist stark hygroskopisch. Welche Antwort erklärt den Begriff richtig und nennt zwei richtige Regeln für den Umgang mit dem Öl?",
  "opts": [
   "Weist Feuchtigkeit ab; Gebinde kann offen stehen bleiben; Öle verschiedener Hersteller und Typen dürfen gemischt werden",
   "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Gebinde sofort wieder verschließen; nur Öl nach Herstellervorgabe, nicht mit anderen Ölen mischen",
   "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Öl vor dem Einfüllen einige Zeit offen stehen lassen, damit es entgast; nur Öl nach Herstellervorgabe",
   "Löst sich vollständig im Kältemittel; Gebinde sofort wieder verschließen; bei Bedarf PAO-Öl nachfüllen, wenn PAG vorgeschrieben ist"
  ],
  "correct": 1,
  "explain": "Hygroskopisch heißt: nimmt Feuchtigkeit aus der Umgebungsluft auf. Deshalb Gebinde nach der Entnahme sofort wieder verschließen und nur Öl nach Herstellervorgabe (Typ, Viskosität, Menge) verwenden, nicht mit anderen Ölen mischen. Feuchtes Öl bringt Wasser in den Kreislauf – mit den Folgen Säurebildung und Vereisung. Geschlossene Gebinde sind begrenzt lagerfähig.",
  "src": "TB Betriebsstoffe (Kompressoröle), FK Werkstatthinweise"
 },
 {
  "id": "8af03cc7f476",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Warum wird eine Klimaanlage nach Gewicht und nicht nach Druckanzeige befüllt? Welche Begründung ist richtig?",
  "opts": [
   "Die Manometer des Servicegeräts sind nur für R134a geeicht; bei R1234yf ist eine Druckmessung nicht zulässig",
   "Die Füllmenge ist in Gramm vorgegeben; der Druck steigt genau proportional zur Füllmenge und dient nur zur Kontrolle; eine leichte Überfüllung verbessert sogar die Kühlleistung",
   "Die Füllmenge ist in Gramm vorgegeben (Typschild); der Druck hängt stark von der Temperatur ab; Unter- oder Überfüllung mindert die Kühlleistung oder schädigt die Anlage",
   "Die Füllmenge ist in Gramm vorgegeben; nach Gewicht geht das Befüllen schneller; die genaue Menge spielt für die Kühlleistung kaum eine Rolle"
  ],
  "correct": 2,
  "explain": "Die Füllmenge ist vom Hersteller in Gramm vorgegeben (Typschild im Motorraum). Der Druck hängt stark von der Temperatur ab und sagt wenig über die Menge aus. Unter- oder Überfüllung mindert die Kühlleistung bzw. kann Verdichter und Anlage schädigen. Das Servicegerät wiegt das Kältemittel beim Befüllen ab. Druckwerte dienen nur zur Diagnose bei laufender Anlage.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "f83f25dc98a8",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Verfahren zur Dichtheitsprüfung ihr Prinzip zu.",
  "paare": [
   [
    "UV-Lecksuche",
    "Kontrastmittel im Öl leuchtet an der Leckstelle unter UV-Licht"
   ],
   [
    "Elektronischer Lecksucher",
    "Sensor erkennt Kältemittel in der Umgebungsluft"
   ],
   [
    "Formiergas",
    "Kreislauf mit Stickstoff-Wasserstoff-Gemisch füllen, Sensor erkennt Wasserstoff"
   ],
   [
    "Vakuum-Haltetest",
    "Druckanstieg im evakuierten Kreislauf zeigt eine Undichtheit, aber nicht den Ort"
   ]
  ],
  "explain": "Nur der Vakuumtest sagt nichts über die Lage des Lecks. Formiergas nutzt man, wenn kein Kältemittel mehr drin ist.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "0a1b6b3404b3",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Merkmale dem Druckschalter oder dem Drucksensor zu.",
  "paare": [
   [
    "Liefert ein stetiges Spannungssignal, das mit dem Druck steigt",
    "Drucksensor"
   ],
   [
    "Öffnet oder schließt einen Kontakt bei festen Schaltdrücken",
    "Druckschalter"
   ],
   [
    "Braucht eine 5-V-Versorgung vom Steuergerät",
    "Drucksensor"
   ],
   [
    "Kann nur „Grenzwert erreicht“ oder „nicht erreicht“ melden, keine Zwischenwerte",
    "Druckschalter"
   ]
  ],
  "explain": "Ein Druckschalter kennt nur zwei Zustände und schaltet bei festen Grenzdrücken. Ein Drucksensor misst stufenlos – damit kann das Steuergerät Verdichter und Lüfter fein regeln und Fehler wie „Signal unplausibel“ erkennen. Moderne Anlagen nutzen deshalb meist Sensoren.",
  "src": "FW, Recherche ausbau-klima"
 },
 {
  "id": "fe6314679904",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "klima-schaltplan.svg",
  "q": "Bei angeforderter Kühlung wird an A1 Pin 11 (Schaltplan) mit dem Oszilloskop gemessen. Ordnen Sie dem Messbild die wahrscheinliche Ursache zu.",
  "paare": [
   [
    "Rechteck zwischen ca. 0 V und Bordspannung",
    "Ansteuerung von Y1 in Ordnung"
   ],
   [
    "Dauernd Bordspannung, keine Pulse",
    "A1 schaltet nicht nach Masse (keine Anforderung, Endstufe defekt) oder Kurzschluss nach Plus"
   ],
   [
    "Dauernd ca. 0 V, keine Pulse",
    "Kein Plus über Y1 (F2 defekt, Spule oder Leitung unterbrochen) oder Endstufe dauernd leitend"
   ]
  ],
  "ablenker": [
   "Verdichter mechanisch blockiert"
  ],
  "explain": "Y1 bekommt Plus über F2, A1 schaltet nach Masse. Spannung an Pin 11 kann nur über F2 und die Spule ankommen. Liegt dauernd Bordspannung an, sind F2 und Spule durchgängig, aber A1 schaltet nicht. Liegt dauernd 0 V an, fehlt das Plus über die Spule – oder A1 schaltet ständig durch. Ein mechanischer Verdichterschaden ist im Signal nicht zu sehen.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "0a9fac732f84",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "bild": "klima-messpunkte.svg",
  "q": "Ordnen Sie den Messpunkten im Bild den Zustand des Kältemittels bzw. das Messmedium bei laufender Anlage zu.",
  "paare": [
   [
    "A",
    "heißer Dampf, Hochdruck"
   ],
   [
    "B",
    "Flüssigkeit, Hochdruck"
   ],
   [
    "D",
    "Nassdampf (Flüssigkeit und Dampf), Niederdruck"
   ],
   [
    "E",
    "überhitzter Dampf, Niederdruck"
   ],
   [
    "F",
    "abgekühlte Luft für den Innenraum"
   ]
  ],
  "ablenker": [
   "Flüssigkeit, Niederdruck"
  ],
  "explain": "Der Verdichter drückt heißen Dampf (A) in den Kondensator; dort wird das Kältemittel flüssig (B). Hinter dem Expansionsventil fällt der Druck, ein Teil verdampft sofort (Nassdampf, D). Am Verdampferausgang ist alles verdampft und etwas überhitzt (E). F misst keine Leitung, sondern die Luft am Ausströmer.",
  "src": "FW"
 },
 {
  "id": "74b29825c241",
  "cat": "Klima",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Merkmale dem passenden Kältemittel zu.",
  "paare": [
   [
    "Natürliches Kältemittel mit GWP 1",
    "R744 (CO₂)"
   ],
   [
    "Gibt die Wärme in einem Gaskühler statt in einem Kondensator ab",
    "R744 (CO₂)"
   ],
   [
    "HFO-Kältemittel, schwer entflammbar (A2L)",
    "R1234yf"
   ],
   [
    "In neuen Pkw der EU wegen hohem GWP nicht mehr zulässig",
    "R134a"
   ]
  ],
  "explain": "R744 ist Kohlendioxid: GWP 1, nicht brennbar, aber mit sehr viel höheren Drücken und oft überkritischem Betrieb – deshalb Gaskühler statt Kondensator. R1234yf ist ein HFO mit GWP unter 150 und schwach brennbar. R134a hat ein hohes GWP und ist für neue Pkw-Typen in der EU nicht mehr erlaubt.",
  "src": "Netz: ARCTick, UBA; Recherche 3.6"
 },
 {
  "id": "db630cbf2e24",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Fehlern das typische Anzeichen bei laufender Anlage zu.",
  "paare": [
   [
    "Verdichter fördert nicht (Regelmechanik defekt)",
    "ND und HD bleiben fast gleich, auch bei höherer Drehzahl"
   ],
   [
    "Trockner bzw. Filtersieb verstopft",
    "ND sehr niedrig; Trockner am Ausgang deutlich kälter als am Eingang"
   ],
   [
    "Feuchtigkeit im Kreislauf",
    "Kühlung setzt zeitweise aus, ND fällt dabei stark ab (Eis am Expansionsventil)"
   ],
   [
    "Expansionsventil klemmt offen",
    "ND zu hoch, Saugleitung bis zum Verdichter sehr kalt bzw. bereift"
   ]
  ],
  "ablenker": [
   "HD stark erhöht, Kondensator sehr heiß"
  ],
  "explain": "Fördert der Verdichter nicht, entsteht kein Druckunterschied. Ein verstopfter Trockner wirkt wie eine zweite Drosselstelle: Dahinter wird es kalt, dem Verdampfer fehlt Kältemittel. Feuchtigkeit gefriert zeitweise am Expansionsventil. Ein offenes Ventil lässt zu viel Kältemittel durch – der Verdampfer läuft über. Der Ablenker passt zu verschmutztem Kondensator oder ausgefallenem Lüfter.",
  "src": "FW"
 },
 {
  "id": "a49de7b1e2a8",
  "cat": "Klima",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ältere Anlagen schalten den Kühlerlüfter über ein Relais. Ordnen Sie den Relaisklemmen (DIN 72552) ihre Funktion zu.",
  "paare": [
   [
    "30",
    "Eingang Arbeitsstromkreis (Dauerplus)"
   ],
   [
    "87",
    "Ausgang zum Verbraucher (Schließer)"
   ],
   [
    "86",
    "Spulenanfang (Eingang Steuerstrom)"
   ],
   [
    "85",
    "Spulenende (meist zur Masse bzw. Endstufe)"
   ],
   [
    "87a",
    "Ruhekontakt (Öffner)"
   ]
  ],
  "ablenker": [
   "Zündungsplus vom Zündschloss"
  ],
  "explain": "Über 85/86 fließt der kleine Steuerstrom durch die Spule. Zieht das Relais an, verbindet es 30 mit 87, und der Lüfter läuft; 87a ist nur im Ruhezustand mit 30 verbunden. Zündungsplus heißt Klemme 15 und ist keine Relaisklemme.",
  "src": "TB Klemmenbezeichnungen DIN 72552"
 },
 {
  "id": "b2b77a600387",
  "cat": "Klima",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 3,
  "bild": "klima-schaltplan.svg",
  "q": "B2 ist ein NTC-Sensor, A1 versorgt ihn über einen Pull-up-Widerstand. Ordnen Sie den Anzeigen im Messwertblock die wahrscheinliche Ursache zu.",
  "paare": [
   [
    "Konstant ca. −40 °C (unterer Endwert)",
    "Unterbrechung im Sensorkreis (Signal- oder Masseleitung)"
   ],
   [
    "Konstant sehr hoher Wert (oberer Endwert)",
    "Kurzschluss der Signalleitung nach Masse"
   ],
   [
    "Knapp über 0 °C bei laufender Kühlung",
    "Plausibler Wert, Sensorkreis in Ordnung"
   ]
  ],
  "ablenker": [
   "Kältemittel überfüllt"
  ],
  "explain": "Ein NTC hat bei Kälte einen hohen, bei Wärme einen kleinen Widerstand. Ist der Kreis unterbrochen, sieht A1 einen unendlichen Widerstand und rechnet auf die tiefste Temperatur. Ein Masseschluss bedeutet 0 Ω, also höchste Temperatur. Im Betrieb hält die Regelung den Verdampfer knapp über 0 °C.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "de9f0b6d7889",
  "cat": "Klima",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Arbeiten die richtige Voraussetzung bzw. Regel zu.",
  "paare": [
   [
    "Kältemittel absaugen und befüllen",
    "Sachkundebescheinigung für Fahrzeugklimaanlagen"
   ],
   [
    "Elektrischen HV-Klimaverdichter aus- und einbauen",
    "zusätzlich HV-Qualifikation, System spannungsfrei geschaltet"
   ],
   [
    "Innenraumfilter wechseln",
    "keine besondere Bescheinigung nötig"
   ],
   [
    "Kältemittel in die Umgebung ablassen",
    "verboten – immer absaugen und recyceln"
   ]
  ],
  "explain": "Wer Kältemittel ab- oder einfüllt, braucht die Sachkunde (seit der ChemKlimaschutzV 2026 auch für HFO-Kältemittel wie R1234yf). Am HV-Verdichter kommt die Hochvolt-Qualifikation dazu. Ablassen ist immer verboten; der Filterwechsel ist eine normale Wartungsarbeit.",
  "src": "Recherche 3.6, Netz: IHK Karlsruhe"
 },
 {
  "id": "6cfd08dbdcff",
  "cat": "Klima",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Die Klimaanlage meldet einen elektrischen Fehler. Bringen Sie die Schritte einer systematischen Fehlersuche in die richtige Reihenfolge.",
  "schritte": [
   "Beanstandung nachvollziehen",
   "Fehlerspeicher auslesen und Messwertblöcke ansehen",
   "Stellglieddiagnose bzw. geführte Fehlersuche durchführen",
   "Im Schaltplan Messpunkte festlegen und messen",
   "Fehlerursache beheben",
   "Fehlerspeicher löschen und Funktion prüfen"
  ],
  "explain": "Erst prüfen, ob der Fehler da ist, dann die Informationen des Steuergeräts nutzen. Die Stellglieddiagnose zeigt, ob ein Aktor reagiert. Gemessen wird gezielt nach Schaltplan. Gelöscht wird erst nach der Reparatur, die Funktionsprobe beweist den Erfolg.",
  "src": "FW"
 },
 {
  "id": "fefac1826d80",
  "cat": "Klima",
  "level": 3,
  "typ": "reihenfolge",
  "pkt": 5,
  "q": "Der Verdichter hat einen inneren Schaden, im abgeschiedenen Öl sind Metallspäne. Bringen Sie die Instandsetzung in die richtige Reihenfolge.",
  "schritte": [
   "Kältemittel absaugen und abgeschiedene Ölmenge ablesen",
   "Verdichter, Trockner und Expansionsventil ausbauen",
   "Leitungen und Wärmetauscher nach Herstellervorgabe spülen oder ersetzen",
   "Neue Bauteile mit neuen Dichtringen einbauen, Ölfüllung nach Herstellerangabe",
   "Evakuieren und Vakuum halten",
   "Nach Gewicht befüllen und Verdichter nach Vorschrift einlaufen lassen"
  ],
  "explain": "Späne verteilen sich im ganzen Kreislauf und würden den neuen Verdichter zerstören. Deshalb werden Trockner und Expansionsventil mit ersetzt und der Rest gespült oder – wenn der Hersteller Spülen nicht zulässt – ersetzt. Erst nach Dichtheitsprüfung im Vakuum wird befüllt.",
  "src": "Netz: DENSO Bulletin, FW"
 },
 {
  "id": "0c22f7e4fc0a",
  "cat": "Klima",
  "level": 1,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte eines Leistungstests der Klimaanlage in die richtige Reihenfolge.",
  "schritte": [
   "Prüfbedingungen herstellen: Türen und Fenster zu, Thermometer in die Mitteldüse",
   "Motor starten, Klima auf maximale Kühlung und Umluft stellen",
   "Prüfdrehzahl halten, bis sich die Werte stabilisiert haben",
   "Ausströmtemperatur ablesen und Umgebungstemperatur notieren",
   "Werte mit der Prüftabelle des Herstellers vergleichen"
  ],
  "explain": "Vergleichbar sind die Werte nur unter den Bedingungen der Prüftabelle. Die Anlage braucht einige Minuten, bis Drücke und Temperaturen stabil sind. Die Ausströmtemperatur allein sagt wenig – sie wird immer zusammen mit der Umgebungstemperatur bewertet.",
  "src": "FW"
 },
 {
  "id": "997dbbe1c922",
  "cat": "Klima",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Ein Fahrzeug unbekannter Herkunft kommt zum Klimaservice. Bringen Sie die ersten Schritte in die richtige Reihenfolge.",
  "schritte": [
   "Kältemittelart am Typschild und an den Serviceanschlüssen prüfen",
   "Kältemittel mit dem Identifiziergerät auf Art und Reinheit prüfen",
   "Passendes Servicegerät anschließen",
   "Kältemittel absaugen und Menge ablesen",
   "Abgeschiedene Ölmenge ablesen und notieren"
  ],
  "explain": "Erst wenn klar ist, welches Kältemittel und wie rein es ist, darf das Servicegerät angeschlossen werden – sonst verunreinigt fremdes Kältemittel den Vorrat im Gerät. Abgesaugte Menge und Ölmenge braucht man für Diagnose und Befüllung.",
  "src": "FW"
 },
 {
  "id": "5a2a5bc740de",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "klima-schaltplan.svg",
  "q": "Im Schaltplan ist die Sicherung F2 durchgebrannt. Welche Folge hat das? (Bei diesem Verdichter gilt: Regelventil unbestromt = kleinster Hub.)",
  "opts": [
   "Das ganze Steuergerät A1 fällt aus, weil es über F2 versorgt wird; auch die Sensoren B1 und B2 sind dann ohne Spannung",
   "Y1 bekommt keine Spannung; der Verdichter läuft mit kleinstem Hub, die Anlage kühlt nicht; Lüfter und Sensoren arbeiten weiter",
   "Der Lüfter M1 bleibt stehen, weil A2 über F2 von Klemme 15 versorgt wird; der Verdichter regelt dagegen normal weiter",
   "Y1 wird dauernd bestromt, weil die Sicherung den Strom nicht mehr begrenzt; der Verdichter fördert ständig mit vollem Hub"
  ],
  "correct": 1,
  "explain": "Laut Schaltplan versorgt F2 nur das Regelventil Y1 mit Plus von Klemme 15. A1 hängt an F3, A2 an F1 (Klemme 30). Ohne Plus kann A1 die Spule nicht bestromen – der Verdichter bleibt auf kleinstem Hub, eine Magnetkupplung gibt es nicht. Eine durchgebrannte Sicherung unterbricht den Strom immer, sie lässt ihn nie ungebremst fließen.",
  "src": "Eigener Schaltplan"
 },
 {
  "id": "b822012a80e1",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "klima-schaltplan.svg",
  "q": "Der Messwertblock zeigt für B2 dauerhaft −40 °C, obwohl die Klimaanlage länger aus war und es 25 °C warm ist. Wie reagiert A1, und wo liegt der Fehler wahrscheinlich?",
  "opts": [
   "A1 erhöht die Verdichterleistung, um die Kälte auszugleichen; wahrscheinlich ist das Kältemittel überfüllt",
   "A1 schaltet den Lüfter M1 auf volle Drehzahl; wahrscheinlich hat die Signalleitung von B2 einen Kurzschluss nach Masse",
   "A1 reagiert gar nicht, weil B2 nur zur Anzeige im Bedienteil dient; wahrscheinlich ist der Sensor B1 falsch angeschlossen",
   "A1 nimmt Vereisungsgefahr an und regelt den Verdichter ab; wahrscheinlich ist der Sensorkreis von B2 unterbrochen"
  ],
  "correct": 3,
  "explain": "B2 schützt den Verdampfer vor Vereisung: Meldet er sehr tiefe Temperatur, regelt A1 den Verdichter zurück oder ab – die Anlage kühlt nicht. −40 °C ist der Endwert eines NTC bei unendlichem Widerstand, also Unterbrechung von Sensor oder Leitung (A1 Pin 7/8). Ein Kurzschluss nach Masse würde dagegen einen sehr hohen Wert ergeben.",
  "src": "Eigener Schaltplan, FW"
 },
 {
  "id": "ebd434a969f2",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "klima-oszi-regelventil.svg",
  "q": "Bei angeforderter Kühlung zeigt das Oszilloskop an A1 Pin 11 nicht das abgebildete Signal, sondern dauernd die volle Bordspannung ohne Pulse. Was lässt sich daraus schließen?",
  "opts": [
   "F2 und die Spule von Y1 sind durchgängig; A1 schaltet die Masseseite nicht – Anforderung bzw. Endstufe prüfen",
   "Die Sicherung F2 ist durchgebrannt; deshalb liegt an Pin 11 die volle Spannung an, und Y1 bleibt stromlos",
   "Die Spule von Y1 ist unterbrochen; die Spannung staut sich an Pin 11, deshalb zeigt das Oszilloskop Bordspannung",
   "Y1 wird dauernd bestromt, und der Verdichter fördert mit vollem Hub; das ist bei hoher Kühlanforderung normal"
  ],
  "correct": 0,
  "explain": "Spannung an Pin 11 kann nur über F2 und die Spule von Y1 dorthin kommen – beide sind also in Ordnung. Fehlen die Pulse nach Masse, schaltet A1 nicht: Es gibt keine Anforderung (z. B. wegen eines anderen Fehlers wie „Drucksignal unplausibel“) oder die Endstufe ist defekt. Wäre F2 oder die Spule unterbrochen, läge an Pin 11 keine Spannung an. Dauernd bestromt hieße dauernd 0 V.",
  "src": "Eigenes Oszillogramm, Eigener Schaltplan"
 },
 {
  "id": "27c9f74d47a0",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "klima-messpunkte.svg",
  "q": "Die Anlage kühlt schlecht, der Niederdruck ist sehr niedrig. Bei laufender Klima messen Sie an B 50 °C und an C 10 °C; der Trockner ist an der Ausgangsseite beschlagen. Wo liegt der Fehler wahrscheinlich?",
  "opts": [
   "Der Kondensator ist verschmutzt; die Temperatur zwischen B und C fällt deshalb besonders stark ab",
   "Das Expansionsventil klemmt offen; deshalb ist das Kältemittel schon vor dem Ventil abgekühlt",
   "Trockner bzw. Filtersieb ist verstopft und wirkt wie eine Drosselstelle; Trockner ersetzen",
   "Die Anlage ist überfüllt; zu viel flüssiges Kältemittel kühlt den Trockner von innen ab"
  ],
  "correct": 2,
  "explain": "Zwischen B und C liegt nur der Trockner; in einer freien Flüssigkeitsleitung ändert sich die Temperatur kaum. Ein großer Temperaturabfall mit Beschlag zeigt, dass der Druck schon im Trockner fällt und Kältemittel dort verdampft – eine Verstopfung wirkt wie eine Drosselstelle. Dem Verdampfer fehlt dann Kältemittel, der Niederdruck sinkt.",
  "src": "FW"
 },
 {
  "id": "ce7a47b34c14",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "klima-messpunkte.svg",
  "q": "Laut Druck-Temperatur-Tabelle entspricht der Niederdruck einer Verdampfungstemperatur von 2 °C. An Messpunkt E messen Sie 8 °C. Wie groß ist die Überhitzung?",
  "opts": [
   "10 K",
   "4 K",
   "−6 K",
   "6 K"
  ],
  "correct": 3,
  "formel": "Überhitzung Δt = t_{Saug} − t_{Verd}\nt_{Saug} = gemessene Temperatur am Verdampferausgang; Δt in K",
  "explain": "Überhitzung = gemessene Temperatur am Verdampferausgang − Verdampfungstemperatur = 8 °C − 2 °C = 6 K. Wer addiert, kommt auf 10 K, wer dividiert auf 4. Eine Überhitzung stellt sicher, dass nur Dampf zum Verdichter gelangt; der Sollbereich steht in den Herstellerunterlagen.",
  "src": "FW"
 },
 {
  "id": "6e1ced62e7f6",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "klima-messpunkte.svg",
  "q": "An welchem Messpunkt ist die Temperatur bei laufender Anlage am höchsten?",
  "opts": [
   "B – nach dem Kondensator",
   "A – direkt nach dem Verdichter",
   "D – nach dem Expansionsventil",
   "E – am Verdampferausgang"
  ],
  "correct": 1,
  "explain": "Beim Verdichten steigen Druck und Temperatur stark an; das heiße Gas gibt seine Wärme erst im Kondensator ab. Deshalb ist die Druckleitung direkt hinter dem Verdichter (A) die heißeste Stelle. Hinter dem Expansionsventil (D) ist es am kältesten.",
  "src": "FW"
 },
 {
  "id": "2b9903026df3",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein extern geregelter Verdichter ohne Magnetkupplung hat in der Riemenscheibe eine Überlastsicherung. Wozu dient sie?",
  "opts": [
   "Sie schaltet den Verdichter bei ausgeschalteter Klimaanlage ab, weil er sonst ständig mit vollem Hub fördern würde",
   "Sie begrenzt den Hochdruck, indem sie bei zu hohem Druck Kältemittel über ein Ventil in der Riemenscheibe ablässt",
   "Sie dämpft nur Drehschwingungen des Riemens; ein blockierter Verdichter bringt deshalb den Motor zum Stillstand",
   "Blockiert der Verdichter, trennt sie ihn vom Antrieb, damit der Riementrieb mit den anderen Aggregaten weiterläuft"
  ],
  "correct": 3,
  "explain": "Ohne Magnetkupplung dreht der Verdichter immer mit; bei „Klima aus“ stellt das Regelventil nur den kleinsten Hub ein. Frisst der Verdichter fest, würde der Riemen reißen oder durchrutschen – dann fallen auch andere Aggregate am selben Riemen (z. B. Generator) aus. Die Überlastsicherung (Sollbruchstelle bzw. Rutschkupplung) trennt den Verdichter rechtzeitig ab.",
  "src": "Netz: Hella Techtips, FW"
 },
 {
  "id": "a248dc8b4198",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Klima ein, Motor läuft: Nieder- und Hochdruck bleiben fast gleich und ändern sich auch bei höherer Drehzahl kaum. Messwertblock und Oszilloskop zeigen eine plausible Ansteuerung des Regelventils, die Spule hat den Sollwiderstand. Welche Ursache ist am wahrscheinlichsten?",
  "opts": [
   "Die Anlage ist überfüllt; zu viel Kältemittel gleicht Hoch- und Niederdruck auch bei höherer Drehzahl an",
   "Der Verdichter fördert trotz Ansteuerung nicht (Regelmechanik oder Triebwerk defekt)",
   "Der Kondensatorlüfter ist ausgefallen; dadurch steigt der Niederdruck auf den Wert des Hochdrucks",
   "Das Expansionsventil klemmt geschlossen; deshalb bleiben beide Drücke gleich hoch"
  ],
  "correct": 1,
  "explain": "Gleiche Drücke bei laufendem Motor bedeuten: Es wird kein Druckunterschied aufgebaut, der Verdichter fördert nicht. Da die elektrische Ansteuerung nachweislich stimmt, liegt der Fehler im Verdichter selbst (Regelmechanik, Taumelscheibe, Ventile). Überfüllung erhöht beide Drücke, ein geschlossenes Expansionsventil senkt den Niederdruck stark, ein ausgefallener Lüfter erhöht vor allem den Hochdruck.",
  "src": "Netz: Robinair EVDC100, FW"
 },
 {
  "id": "78b2f55d0676",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "In einer Anlage wurde Feuchtigkeit im Kreislauf festgestellt. Welche Abhilfe ist richtig?",
  "opts": [
   "Nur Innenraumfilter und Kondenswasserablauf prüfen, weil die Feuchtigkeit von außen in den Innenraum kommt",
   "Kältemittel absaugen; Trockner weiterverwenden, weil er die Feuchtigkeit ja bindet; kurz evakuieren und befüllen",
   "Kältemittel absaugen; Trockner erneuern; ausreichend lange evakuieren, damit das Wasser verdampft; nach Gewicht befüllen",
   "Etwas mehr Kältemittelöl einfüllen, weil das Öl die Feuchtigkeit aufnimmt und die Anlage so wieder trocken wird"
  ],
  "correct": 2,
  "explain": "Wasser im Kreislauf bildet Säure und kann am Expansionsventil gefrieren. Der Trockner ist dann gesättigt und muss erneuert werden. Im Vakuum siedet das Wasser schon bei Raumtemperatur und wird abgesaugt – das braucht Zeit, also lange genug evakuieren (Dauer nach Hersteller). Mehr Öl einzufüllen schadet nur.",
  "src": "FW"
 },
 {
  "id": "df0ec1538cbd",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach einer Reparatur wurde nur sehr kurz evakuiert. Jetzt ist der Hochdruck im Betrieb deutlich zu hoch, obwohl Füllmenge, Lüfter und Kondensator in Ordnung sind. Was ist die wahrscheinliche Ursache?",
  "opts": [
   "Zu viel Kältemittelöl im Kreislauf; das Öl verdampft im Kondensator und erhöht dadurch den Hochdruck",
   "Das kurze Evakuieren hat den Trockner zerstört; seine Körner verstopfen das Expansionsventil vollständig",
   "Luft (nicht kondensierbares Gas) im Kreislauf; sie sammelt sich im Kondensator und erhöht den Hochdruck",
   "Der Unterdruck beim Evakuieren hat den Drucksensor verstellt; er zeigt jetzt dauernd einen zu hohen Wert"
  ],
  "correct": 2,
  "explain": "Wird zu kurz evakuiert, bleibt Luft im Kreislauf. Luft lässt sich im Kondensator nicht verflüssigen, nimmt dort Platz weg und erhöht den Hochdruck – die Kühlleistung sinkt. Mit der Luft kommt außerdem Feuchtigkeit hinein. Abhilfe: absaugen, ausreichend evakuieren, nach Gewicht neu befüllen.",
  "src": "FW"
 },
 {
  "id": "a4365e1199ad",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach dem Tausch des Kondensators soll Öl ergänzt werden. Wie viel Öl wird eingefüllt?",
  "opts": [
   "Immer die komplette Ölfüllmenge der Anlage, weil beim Absaugen das ganze Öl mit herauskommt",
   "Die beim Absaugen abgeschiedene Menge plus die Herstellerangabe für den neuen Kondensator",
   "Gar kein Öl, weil ein neuer Kondensator ab Werk mit der vollen Ölmenge der Anlage befüllt ist",
   "So viel, bis das Hochdruckmanometer im Stillstand den Sollwert für den Ruhedruck anzeigt"
  ],
  "correct": 1,
  "explain": "Beim Absaugen wird nur ein Teil des Öls abgeschieden – diese Menge wird ersetzt. Im ausgebauten Bauteil bleibt zusätzlich Öl zurück; wie viel dafür nachgefüllt wird, gibt der Hersteller je Bauteil an. Zu viel Öl verschlechtert den Wärmeübergang, zu wenig schadet dem Verdichter. Der Druck sagt nichts über die Ölmenge.",
  "src": "FW"
 },
 {
  "id": "3584ac8fc26c",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Nach dem Evakuieren wird die Vakuumpumpe abgeschaltet. In der Haltezeit steigt der Druck langsam an. Wie gehen Sie vor?",
  "opts": [
   "Trotzdem befüllen, weil ein leichter Anstieg beim Haltetest normal ist und das Kältemittel kleine Lecks abdichtet",
   "Mit UV-Kontrastmittel in der Haltezeit nach dem Leck suchen, weil das Vakuum das Mittel an die Leckstelle zieht",
   "Nicht befüllen; Dichtheit prüfen (z. B. Formiergas) und, wenn dicht, weiter evakuieren, weil Restfeuchte verdampft",
   "Kältemittel einfüllen und danach die doppelte Ölmenge ergänzen, weil durch das Vakuum Öl verloren gegangen ist"
  ],
  "correct": 2,
  "explain": "Steigt der Druck, kommt etwas in den Kreislauf: Luft durch ein Leck oder Dampf aus Restfeuchtigkeit. Steigt er bis zum Umgebungsdruck, ist es eher ein Leck; bleibt er auf niedrigem Niveau stehen, eher Feuchtigkeit. Befüllt wird erst, wenn das Vakuum hält. UV-Kontrastmittel braucht umlaufendes Öl unter Druck und hilft hier nicht.",
  "src": "FW"
 },
 {
  "id": "a61981069f46",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum prüfen viele Werkstätten das Kältemittel vor dem Absaugen mit einem Identifiziergerät?",
  "opts": [
   "Weil das Servicegerät sonst die Füllmenge laut Typschild nicht berechnen kann",
   "Weil R1234yf ohne vorherige Identifizierung gesetzlich nicht abgesaugt werden darf und das Gerät sonst sperrt",
   "Damit kein fremdes oder verunreinigtes Kältemittel in das Servicegerät und dessen Vorrat gelangt",
   "Damit man feststellt, wie viel Öl im Kreislauf ist, bevor es zusammen mit dem Kältemittel abgesaugt wird"
  ],
  "correct": 2,
  "explain": "Wurde eine Anlage mit falschem oder gemischtem Kältemittel befüllt, würde das Absaugen den ganzen Vorrat im Servicegerät verunreinigen. Das Identifiziergerät zeigt Art und Reinheit; verunreinigtes Kältemittel wird mit einem eigenen Gerät abgesaugt und entsorgt.",
  "src": "FW"
 },
 {
  "id": "b0cba90aa4bb",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie führen Sie die Sonde eines elektronischen Lecksuchers richtig?",
  "opts": [
   "Schnell und im Abstand von etwa einem Meter über den ganzen Motorraum hinweg",
   "Langsam und dicht an Leitungen und Verbindungen, vor allem an deren Unterseite",
   "Nur an der Oberseite der Bauteile, weil das Kältemittel nach oben steigt",
   "Bei laufendem Motorlüfter, damit das austretende Kältemittel zur Sonde geweht wird"
  ],
  "correct": 1,
  "explain": "Kältemittel ist schwerer als Luft und sinkt nach unten. Die Sonde wird deshalb langsam und dicht unter Leitungen und Verbindungen geführt. Luftzug verdünnt austretendes Kältemittel – Motor und Lüfter bleiben aus.",
  "src": "FW"
 },
 {
  "id": "c059d8d3d5df",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Kunde wundert sich über eine Wasserpfütze unter seinem Auto nach einer Fahrt mit Klimaanlage. Was sagen Sie ihm?",
  "opts": [
   "Das ist Kältemittel, das sich beim Austreten verflüssigt; die Anlage muss sofort auf Dichtheit geprüft werden",
   "Das ist Kühlmittel aus dem Motor; der Klimakondensator hat ein Leck zum Kühler und muss ersetzt werden",
   "Das ist Kondenswasser aus dem Auspuff; mit der Klimaanlage hat es nichts zu tun, es entsteht nur im Winter",
   "Das ist normal: Am kalten Verdampfer kondensiert Feuchtigkeit aus der Luft und läuft unter dem Fahrzeug ab"
  ],
  "correct": 3,
  "explain": "Der Verdampfer kühlt die Luft unter ihren Taupunkt; die Feuchtigkeit schlägt sich als Wasser nieder und läuft über den Kondenswasserablauf ins Freie. Klares, geruchloses Wasser ist also ein gutes Zeichen. Austretendes Kältemittel verdampft sofort. Bedenklich wäre Wasser im Fußraum – dann ist der Ablauf verstopft.",
  "src": "FW"
 },
 {
  "id": "1d14f91a0fce",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum hilft es, im Winter bei beschlagenen Scheiben die Klimaanlage einzuschalten?",
  "opts": [
   "Die Klimaanlage heizt im Winter stärker als die normale Heizung, weil der Verdichter die Luft zusätzlich erwärmt",
   "Der Verdampfer trocknet die Luft; danach wird sie erwärmt und nimmt die Feuchtigkeit von den Scheiben auf",
   "Der Kondensator bläst warme Luft direkt auf die Frontscheibe, wodurch das Wasser schnell verdunstet",
   "Die Klimaanlage saugt die feuchte Luft über die Serviceanschlüsse aus dem Innenraum ab"
  ],
  "correct": 1,
  "explain": "Am kalten Verdampfer kondensiert die Feuchtigkeit der Luft. Die getrocknete Luft wird danach im Heizungswärmetauscher erwärmt und kann die Feuchtigkeit von den Scheiben aufnehmen. Bei sehr tiefen Außentemperaturen schaltet der Verdichter allerdings zum Schutz ab.",
  "src": "FW"
 },
 {
  "id": "22b275d0765a",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Aussage über Pkw-Klimaanlagen mit R744 (CO₂) ist richtig?",
  "opts": [
   "R744 arbeitet mit niedrigeren Drücken als R1234yf und darf deshalb mit demselben Servicegerät befüllt werden",
   "R744 ist ein HFO-Kältemittel wie R1234yf; der Kreislauf ist identisch, nur die Serviceanschlüsse sind anders",
   "R744 arbeitet mit sehr viel höheren Drücken; statt eines Kondensators gibt ein Gaskühler die Wärme ab; GWP 1",
   "R744 ist giftig und brennbar; deshalb darf es nur in Fahrzeugen ohne Verbrennungsmotor eingesetzt werden"
  ],
  "correct": 2,
  "explain": "CO₂ hat GWP 1, ist nicht brennbar und ungiftig, verdrängt aber wie alle Kältemittel den Sauerstoff (schwerer als Luft). Es arbeitet mit vielfach höheren Drücken, oft überkritisch – die Wärme gibt deshalb ein Gaskühler ab, ohne dass das Gas dabei flüssig wird. Leitungen, Bauteile und Servicegeräte sind eigens dafür ausgelegt.",
  "src": "Netz: ARCTick, UBA"
 },
 {
  "id": "9025ed13bd0e",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was gibt der GWP-Wert eines Kältemittels an?",
  "opts": [
   "Wie viel Gramm Kältemittel die Anlage je Kilowatt Kühlleistung mindestens benötigt",
   "Wie leicht das Kältemittel entflammbar ist (Sicherheitsklasse)",
   "Wie stark es im Vergleich zur gleichen Masse CO₂ zum Treibhauseffekt beiträgt",
   "Bei welchem Druck das Kältemittel bei 20 °C verdampft"
  ],
  "correct": 2,
  "explain": "GWP (Global Warming Potential) vergleicht die Treibhauswirkung eines Stoffes mit der von CO₂ (GWP = 1), meist über 100 Jahre. R134a liegt weit über 1000, R1234yf unter 150 – deshalb dürfen neue Pkw in der EU nur noch Kältemittel mit GWP unter 150 haben. Die Brennbarkeit gibt die Sicherheitsklasse an (z. B. A2L).",
  "src": "Recherche 3.6, FW"
 },
 {
  "id": "091c1b01ae6b",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei einer Leistungsprüfung ergibt sich eine Unterkühlung von fast 0 K und eine sehr große Überhitzung. Welche Ursache passt?",
  "opts": [
   "Überfüllung: Zu viel Kältemittel staut sich im Kondensator, dadurch steigt die Überhitzung am Verdampfer",
   "Unterfüllung: Es fehlt Kältemittel, der Kondensator ist nicht voll Flüssigkeit, der Verdampfer wird zu wenig versorgt",
   "Der Kondensatorlüfter läuft dauernd mit voller Drehzahl; dadurch wird das Kältemittel zu stark unterkühlt",
   "Das Expansionsventil klemmt offen; zu viel Kältemittel gelangt in den Verdampfer und wird dort überhitzt"
  ],
  "correct": 1,
  "explain": "Fehlt Kältemittel, gibt es nach dem Kondensator kaum reine Flüssigkeit, die weiter abkühlen könnte → Unterkühlung nahe 0 K. Im Verdampfer ist das wenige Kältemittel früh verdampft, der Dampf erwärmt sich danach stark → große Überhitzung. Überfüllung ergibt eher große Unterkühlung, ein offenes Expansionsventil kleine Überhitzung.",
  "src": "FW"
 },
 {
  "id": "be96e511bff0",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach dem Abstellen des Motors läuft der Kühlerlüfter noch einige Minuten nach. Wie ist das zu beurteilen?",
  "opts": [
   "Das ist immer ein Fehler: Ein Lüfter darf nur bei laufendem Motor laufen, also ist die Endstufe defekt",
   "Das zeigt eine Überfüllung der Klimaanlage an; der Lüfter muss den zu hohen Ruhedruck abbauen",
   "Das kann normal sein: Das Steuergerät lässt den Lüfter nachlaufen, um Motorraum und Kühler abzukühlen",
   "Das ist normal, weil der Lüfter nach dem Abstellen als Generator die Batterie wieder nachlädt"
  ],
  "correct": 2,
  "explain": "Viele Fahrzeuge lassen den Lüfter abhängig von Kühlmittel- bzw. Motorraumtemperatur nachlaufen (Dauer nach Herstellerangabe). Ein Fehler liegt vor, wenn er nicht mehr abschaltet und die Batterie entleert – dann Ansteuerung, Endstufe bzw. Relais prüfen.",
  "src": "Netz: kfz-dietrich (Kühlerlüfter-Nachlauf), FW"
 },
 {
  "id": "65cdf58dbd7b",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 1,
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Ihr Lohn als Geselle richtet sich nach dem Tarifvertrag. Welche Erklärung des Begriffs Tarifautonomie ist richtig?",
  "opts": [
   "Der Staat legt Löhne und Arbeitsbedingungen per Gesetz fest; Gewerkschaften und Arbeitgeberverbände werden dazu nur angehört",
   "Betriebsrat und Arbeitgeber handeln die Löhne im einzelnen Betrieb selbstständig aus; Grundlage ist das Betriebsverfassungsgesetz",
   "Gewerkschaften und Arbeitgeberverbände handeln Löhne und Arbeitsbedingungen selbstständig aus; Grundlage ist Art. 9 Abs. 3 GG; der Staat mischt sich nicht ein",
   "Gewerkschaften und Arbeitgeberverbände verhandeln die Löhne selbstständig; der Abschluss gilt aber erst, wenn das Bundesarbeitsministerium ihn genehmigt hat"
  ],
  "correct": 2,
  "explain": "Tarifautonomie heißt: Die Tarifpartner regeln Lohn, Arbeitszeit und Urlaub eigenverantwortlich. Grundlage ist die Koalitionsfreiheit nach Art. 9 Abs. 3 Grundgesetz; in die Verhandlungen mischt sich der Staat nicht ein. Er gibt nur den gesetzlichen Rahmen vor (z. B. Arbeitszeitgesetz, Bundesurlaubsgesetz, Mindestlohngesetz).",
  "src": "FW"
 },
 {
  "id": "4624e962ef74",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 2,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Beschreibungen die passende Organisation im bayerischen Kfz-Handwerk zu.",
  "paare": [
   [
    "Vertritt die Beschäftigten bei den Tarifverhandlungen",
    "IG Metall"
   ],
   [
    "Vertritt die Kfz-Betriebe als Arbeitgeber bei den Tarifverhandlungen",
    "Landesinnungsverband des Kfz-Gewerbes Bayern (Arbeitgeberseite)"
   ],
   [
    "Führt die Handwerksrolle und überwacht die Ausbildung, verhandelt aber keine Löhne",
    "Handwerkskammer"
   ],
   [
    "Vermittelt als neutrale Stelle, wenn die Verhandlungen gescheitert sind",
    "Schlichter"
   ]
  ],
  "ablenker": [
   "Betriebsrat",
   "Bundesagentur für Arbeit"
  ],
  "explain": "Tarifpartner sind Gewerkschaft (Kfz-Handwerk: IG Metall) und Arbeitgeberseite (Landesverband bzw. Landesinnungsverband des Kfz-Gewerbes, in dem die Innungsbetriebe organisiert sind). Die Handwerkskammer ist für Handwerksrolle und Ausbildung zuständig. Der Betriebsrat schließt nur Betriebsvereinbarungen, keine Tarifverträge.",
  "src": "FW (Verbandsname mit Innung abgleichen)"
 },
 {
  "id": "a9a1a4529af4",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 3,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Regelungen der Tarifvertragsart zu, in der sie üblicherweise stehen.",
  "paare": [
   [
    "Anzahl der Urlaubstage pro Jahr",
    "Manteltarifvertrag"
   ],
   [
    "Wöchentliche Arbeitszeit und Kündigungsfristen",
    "Manteltarifvertrag"
   ],
   [
    "Höhe des Stundenlohns und der Ausbildungsvergütung",
    "Entgelttarifvertrag"
   ],
   [
    "Einstufung eines Gesellen in eine Entgeltgruppe nach seiner Tätigkeit",
    "Entgeltrahmentarifvertrag"
   ]
  ],
  "ablenker": [
   "Ausbildungsvertrag",
   "Betriebsvereinbarung"
  ],
  "explain": "Manteltarif (Rahmen-/Manteltarif): allgemeine Arbeitsbedingungen, lange Laufzeit. Entgelttarif: die Euro-Beträge, kurze Laufzeit (meist 1–2 Jahre). Entgeltrahmentarif: beschreibt die Entgeltgruppen und wer in welche Gruppe kommt.",
  "src": "FW"
 },
 {
  "id": "32d99541edcf",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 4,
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "q": "Bringen Sie den Ablauf einer Tarifauseinandersetzung mit Streik in die richtige Reihenfolge.",
  "schritte": [
   "Kündigung des alten Entgelttarifvertrags",
   "Tarifverhandlungen zwischen Gewerkschaft und Arbeitgeberverband",
   "Verhandlungen werden für gescheitert erklärt",
   "Schlichtungsverfahren ohne Einigung",
   "Urabstimmung: in der Regel mindestens 75 % der Mitglieder für Streik",
   "Streik (Arbeitgeber können mit Aussperrung reagieren)",
   "Neue Verhandlungen mit Verhandlungsergebnis",
   "Zweite Urabstimmung: in der Regel reichen 25 % Zustimmung zur Annahme"
  ],
  "explain": "Erst nach Ablauf bzw. Kündigung des Tarifvertrags endet die Friedenspflicht. Die Quoten 75 % / 25 % stehen in der Satzung der Gewerkschaft (z. B. IG Metall) – nicht im Gesetz.",
  "src": "FW"
 },
 {
  "id": "920a8b806b7d",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 5,
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was bedeutet die Friedenspflicht während der Laufzeit eines Tarifvertrags?",
  "opts": [
   "Zu Themen, die im Tarifvertrag geregelt sind, darf nicht gestreikt oder ausgesperrt werden",
   "Der Betriebsrat darf während der Laufzeit keine Betriebsversammlung einberufen",
   "Arbeitnehmer dürfen ihr Arbeitsverhältnis während der Laufzeit nicht kündigen",
   "Die Gewerkschaft darf erst nach einer gescheiterten Schlichtung wieder verhandeln, auch zu neuen Themen"
  ],
  "correct": 0,
  "explain": "Die Friedenspflicht schützt den Abschluss: Solange er gilt, sind Arbeitskämpfe über die geregelten Inhalte unzulässig. Warnstreiks sind erst nach Ende der Laufzeit erlaubt.",
  "src": "FW"
 },
 {
  "id": "8294b79b5826",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 6,
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Im Juli 2026 verdienen Sie 3.000 € brutto im Monat. Nach dem Tarifabschluss 2025 im bayerischen Kfz-Handwerk steigen die Entgelte ab August 2026 um 3,3 %. Wie hoch ist Ihr neuer Monatslohn?",
  "opts": [
   "3.009,90 €",
   "3.099,00 €",
   "3.168,00 €",
   "2.901,00 €"
  ],
  "correct": 1,
  "formel": "Prozentwert = Grundwert · Prozentsatz / 100\nneuer Wert = Grundwert · (1 + p / 100)",
  "explain": "Erhöhung: 3.000 € × 3,3 % = 99 € → neuer Lohn 3.000 € + 99 € = 3.099 €. (Abschluss 2025: +2,3 % ab Juli 2025, +3,3 % ab August 2026, Laufzeit bis Ende Mai 2027.)",
  "src": "Netz: IG Metall Bayern, Tarifnachrichten Kfz 06/2025"
 },
 {
  "id": "ad4f90f2a087",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 7,
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Als Geselle sind Sie in allen Zweigen der Sozialversicherung versichert. Ordnen Sie jedem Zweig seinen Träger zu.",
  "paare": [
   [
    "Rentenversicherung",
    "Deutsche Rentenversicherung"
   ],
   [
    "Krankenversicherung",
    "Krankenkasse (z. B. AOK, Ersatzkasse)"
   ],
   [
    "Pflegeversicherung",
    "Pflegekasse (bei der Krankenkasse)"
   ],
   [
    "Arbeitslosenversicherung",
    "Bundesagentur für Arbeit"
   ],
   [
    "Unfallversicherung",
    "Berufsgenossenschaft"
   ]
  ],
  "ablenker": [
   "Finanzamt",
   "Handwerkskammer"
  ],
  "explain": "Die Pflegekassen sind organisatorisch an die Krankenkassen angegliedert. Für Kfz-Betriebe ist in der Regel die Berufsgenossenschaft Holz und Metall (BGHM) zuständig.",
  "src": "FW"
 },
 {
  "id": "e4917a594973",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 8,
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wer bezahlt die Beiträge zur gesetzlichen Unfallversicherung?",
  "opts": [
   "Allein der Arbeitgeber",
   "Arbeitnehmer und Arbeitgeber je zur Hälfte",
   "Allein der Arbeitnehmer",
   "Der Staat aus Steuermitteln"
  ],
  "correct": 0,
  "explain": "Die Unfallversicherung (Berufsgenossenschaft) übernimmt die Haftung des Arbeitgebers für Arbeits- und Wegeunfälle. Deshalb zahlt er den Beitrag allein, abhängig von Lohnsumme und Gefahrklasse.",
  "src": "FW"
 },
 {
  "id": "ff819f9a2c28",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 9,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Mit einer Zulage verdienen Sie 3.100 € brutto im Monat. Der Beitragssatz zur Rentenversicherung beträgt 2026 18,6 %. Wie hoch ist Ihr Arbeitnehmeranteil?",
  "opts": [
   "576,60 €",
   "28,83 €",
   "2.811,70 €",
   "288,30 €"
  ],
  "correct": 3,
  "formel": "AN-Anteil = Bruttolohn · AN-Satz / 100\nAN-Satz = Beitragssatz / 2",
  "explain": "Arbeitnehmer und Arbeitgeber zahlen je die Hälfte: 18,6 % ÷ 2 = 9,3 %. 3.100 € × 9,3 % = 288,30 €.",
  "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "89b582347045",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 10,
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ihr Rentenbeitrag wird nicht für Sie angespart. Welche Aussage beschreibt das Umlageverfahren (Generationenvertrag) und das Problem durch den demografischen Wandel richtig?",
  "opts": [
   "Ihre Beiträge werden auf einem persönlichen Konto angelegt und verzinst; weil weniger Kinder geboren werden, sinken die Zinsen und damit die Rente",
   "Die heutigen Beiträge zahlen direkt die heutigen Renten, Ihre Rente zahlt später die nächste Generation; durch weniger Geburten und längeres Leben kommen immer weniger Beitragszahler auf einen Rentner",
   "Die heutigen Renten werden vollständig aus Steuern bezahlt; durch den demografischen Wandel muss deshalb vor allem die Mehrwertsteuer steigen",
   "Die heutigen Beiträge zahlen direkt die heutigen Renten; weil die geburtenstarken Jahrgänge jetzt erst ins Berufsleben starten, kommen künftig mehr Beitragszahler auf einen Rentner"
  ],
  "correct": 1,
  "explain": "Beim Umlageverfahren gibt es keinen Kapitalstock: Die Beiträge der heutigen Beschäftigten bezahlen direkt die heutigen Renten, dafür erwerben die Beitragszahler einen Anspruch, den später die nächste Generation finanziert. Demografischer Wandel: weniger Geburten, höhere Lebenserwartung, die Babyboomer gehen in Rente. Folge: weniger Beitragszahler pro Rentner → steigende Beiträge, sinkendes Rentenniveau oder höhere Steuerzuschüsse.",
  "src": "FW"
 },
 {
  "id": "0c7a7d293093",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 11,
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt die drei Säulen der Altersvorsorge mit je einem passenden Beispiel?",
  "opts": [
   "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); gesetzliche Pflegeversicherung (Pflegegeld); private Vorsorge (Riester-Vertrag, Sparplan)",
   "Gesetzliche Unfallversicherung (Verletztenrente); betriebliche Altersvorsorge (Entgeltumwandlung); private Vorsorge (Riester-Vertrag, Sparplan)",
   "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); betriebliche Altersvorsorge (Entgeltumwandlung); private Vorsorge (Riester-Vertrag, Sparplan)",
   "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn); betriebliche Altersvorsorge (Entgeltumwandlung); Grundsicherung im Alter (Sozialamt)"
  ],
  "correct": 2,
  "explain": "Die drei Säulen: gesetzliche Rentenversicherung, betriebliche Altersvorsorge (z. B. Entgeltumwandlung über den Arbeitgeber) und private Vorsorge (z. B. private Rentenversicherung, Riester-Vertrag, Sparplan). Die Grundsicherung im Alter ist keine Vorsorge, sondern Fürsorge aus Steuern. Die gesetzliche Rente allein sichert den Lebensstandard meist nicht. Betriebliche und private Vorsorge werden vom Staat teils gefördert (Zulagen, Steuer- und Beitragsvorteile).",
  "src": "FW"
 },
 {
  "id": "8c0accb84de8",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 12,
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Der Bundestag hat im Dezember 2025 das Rentenpaket 2025 beschlossen (in Kraft seit 01.01.2026). Was regelt die darin verlängerte Haltelinie?",
  "opts": [
   "Das Rentenniveau soll bis 2031 nicht unter 48 % sinken",
   "Jede Rente beträgt bis 2031 mindestens 48 % des letzten Bruttolohns",
   "Der Rentenbeitragssatz wird bis 2031 auf 48 % begrenzt",
   "Die Regelaltersgrenze sinkt bis 2031 auf 63 Jahre"
  ],
  "correct": 0,
  "explain": "Das Rentenniveau vergleicht eine Standardrente (45 Beitragsjahre mit Durchschnittsverdienst) mit dem Durchschnittsverdienst. Es ist keine Garantie für die eigene Rente. Die Haltelinie von 48 % gilt laut Rentenpaket 2025 bis 2031.",
  "src": "Netz: Bundesregierung, Rentenpaket 2025 (12/2025)"
 },
 {
  "id": "61bf4c558e94",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 13,
  "level": 1,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Bei der Kommunalwahl im März 2026 galten dieselben Wahlgrundsätze wie bei der Bundestagswahl. Ordnen Sie jedem Grundsatz seine Bedeutung zu.",
  "paare": [
   [
    "allgemein",
    "Alle Wahlberechtigten dürfen wählen, unabhängig von Geschlecht, Einkommen oder Religion"
   ],
   [
    "unmittelbar",
    "Die Bürger wählen die Bewerber direkt, ohne Wahlmänner dazwischen"
   ],
   [
    "frei",
    "Niemand darf zur Wahl gezwungen oder in seiner Entscheidung unter Druck gesetzt werden"
   ],
   [
    "gleich",
    "Jede Stimme zählt gleich viel"
   ],
   [
    "geheim",
    "Niemand darf erfahren, wie jemand abgestimmt hat"
   ]
  ],
  "ablenker": [
   "Nur wer Steuern zahlt, darf wählen"
  ],
  "explain": "Die fünf Wahlgrundsätze stehen für den Bundestag in Art. 38 GG und gelten über Art. 28 GG auch für Gemeinde- und Kreiswahlen.",
  "src": "FW"
 },
 {
  "id": "49bd1345fbd5",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 14,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei der Wahl des Stadtrats in Bayern durften Sie kumulieren und panaschieren. Welche Erklärung beider Begriffe ist richtig?",
  "opts": [
   "Kumulieren: Stimmen auf Bewerber verschiedener Listen verteilen; Panaschieren: einem Bewerber bis zu 3 Stimmen geben; insgesamt so viele Stimmen, wie Sitze zu vergeben sind",
   "Kumulieren: einem Bewerber bis zu 5 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt so viele Stimmen, wie Sitze zu vergeben sind",
   "Kumulieren: einem Bewerber bis zu 3 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt genau 3 Stimmen, egal wie viele Sitze zu vergeben sind",
   "Kumulieren: einem Bewerber bis zu 3 Stimmen geben; Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen; insgesamt so viele Stimmen, wie Sitze zu vergeben sind"
  ],
  "correct": 3,
  "explain": "Kumulieren = „häufeln“: einem Bewerber mehrere Stimmen geben, in Bayern höchstens 3. Panaschieren = „mischen“: Stimmen auf Bewerber verschiedener Listen (Parteien/Wählergruppen) verteilen. Man hat so viele Stimmen, wie Gemeinde- bzw. Stadtratsmitglieder zu wählen sind. Zusätzlich gibt es das Listenkreuz: Dann bekommt jeder Bewerber der Liste der Reihe nach eine Stimme. Wer zu viele Stimmen vergibt, macht den Stimmzettel ungültig bzw. teilweise ungültig.",
  "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"
 },
 {
  "id": "c00f724d8175",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 15,
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aussage zur Kommunalwahl in Bayern am 08.03.2026 ist richtig?",
  "opts": [
   "Gewählt wird für 6 Jahre, wählen darf man ab 18 Jahren",
   "Gewählt wird für 5 Jahre, wählen darf man ab 16 Jahren",
   "Gewählt wird für 4 Jahre, wählen darf man ab 18 Jahren",
   "Gewählt wird für 6 Jahre, wählen darf man ab 16 Jahren"
  ],
  "correct": 0,
  "explain": "Gemeinderat, Bürgermeister, Kreistag und Landrat werden in Bayern für 6 Jahre gewählt. Anders als in einigen anderen Bundesländern gibt es in Bayern kein Kommunalwahlrecht ab 16 – aktives Wahlrecht ab 18.",
  "src": "Netz: sonntagsblatt.de / Gemeinde-Infoblätter Kommunalwahl 2026"
 },
 {
  "id": "942b45c764e7",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 16,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Der neu gewählte Stadtrat berät über die Aufgaben der Gemeinde. Ordnen Sie die Aufgaben der richtigen Art zu.",
  "paare": [
   [
    "Versorgung mit Trinkwasser",
    "Pflichtaufgabe (eigener Wirkungskreis)"
   ],
   [
    "Bau und Unterhalt der Grundschulgebäude",
    "Pflichtaufgabe (eigener Wirkungskreis)"
   ],
   [
    "Betrieb eines Hallenbads",
    "Freiwillige Aufgabe"
   ],
   [
    "Einrichtung eines Jugendzentrums",
    "Freiwillige Aufgabe"
   ],
   [
    "Ausstellen von Personalausweisen und Reisepässen",
    "Übertragene Aufgabe (vom Staat)"
   ],
   [
    "Führen des Melderegisters",
    "Übertragene Aufgabe (vom Staat)"
   ]
  ],
  "explain": "Pflichtaufgaben muss die Gemeinde erfüllen, über das „Wie“ entscheidet sie selbst. Freiwillige Aufgaben übernimmt sie, wenn Geld da ist. Übertragene Aufgaben erledigt sie im Auftrag des Staates nach dessen Weisung.",
  "src": "FW"
 },
 {
  "id": "7b196cd02d0c",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 17,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ihr Chef erklärt, dass der Autoverkauf stark von der Konjunktur abhängt. Ordnen Sie den Phasen das typische Merkmal zu.",
  "paare": [
   [
    "Aufschwung (Expansion)",
    "Nachfrage und Produktion steigen, die Arbeitslosigkeit beginnt zu sinken"
   ],
   [
    "Hochkonjunktur (Boom)",
    "Kapazitäten voll ausgelastet, Preise und Löhne steigen stark"
   ],
   [
    "Abschwung (Rezession)",
    "Nachfrage und Investitionen gehen zurück, Kurzarbeit nimmt zu"
   ],
   [
    "Tiefstand (Depression)",
    "Hohe Arbeitslosigkeit, kaum Investitionen, pessimistische Stimmung"
   ]
  ],
  "ablenker": [
   "Die Preise sinken, während die Produktion stark wächst"
  ],
  "explain": "Die Konjunktur schwankt wellenförmig um den langfristigen Wachstumstrend. Ein Zyklus hat vier Phasen.",
  "src": "FW"
 },
 {
  "id": "473b4f4fb774",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 18,
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt die vier Ziele des magischen Vierecks nach dem Stabilitäts- und Wachstumsgesetz von 1967?",
  "opts": [
   "Stabilität des Preisniveaus; hoher Beschäftigungsstand; außenwirtschaftliches Gleichgewicht; stetiges und angemessenes Wirtschaftswachstum",
   "Stabilität des Preisniveaus; hoher Beschäftigungsstand; ausgeglichener Staatshaushalt; stetiges und angemessenes Wirtschaftswachstum",
   "Stabilität des Preisniveaus; hoher Beschäftigungsstand; möglichst hoher Exportüberschuss; stetiges und angemessenes Wirtschaftswachstum",
   "Stabilität des Preisniveaus; hoher Beschäftigungsstand; außenwirtschaftliches Gleichgewicht; Schutz der Umwelt"
  ],
  "correct": 0,
  "explain": "Die vier Ziele nach StabG 1967: Stabilität des Preisniveaus, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht (kein dauerhaft hoher Export- oder Importüberschuss), stetiges und angemessenes Wirtschaftswachstum. „Magisch“, weil sich nie alle vier Ziele gleichzeitig voll erreichen lassen. Erweitert zum magischen Sechseck/Vieleck um Umweltschutz und gerechte Einkommens- und Vermögensverteilung.",
  "src": "FW"
 },
 {
  "id": "19356f8a2f9d",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 19,
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Welches Beispiel beschreibt einen Zielkonflikt zwischen zwei Zielen des magischen Vierecks richtig?",
  "opts": [
   "Mehr Beschäftigung bringt mehr Einkommen und Konsum, dadurch wächst die Wirtschaft stärker; beide Ziele fördern sich gegenseitig",
   "Höhere Leitzinsen senken die Inflation und kurbeln zugleich Investitionen und Beschäftigung an, weil Sparen attraktiver wird; so werden beide Ziele gleichzeitig erreicht",
   "Hohe Nachfrage und volle Auslastung sichern Wachstum und Beschäftigung, lassen aber Preise und Löhne steigen; höhere Zinsen gegen die Inflation bremsen dann Wachstum und Beschäftigung",
   "Sinkende Arbeitslosigkeit drückt die Löhne und damit die Preise; so sorgt ein hoher Beschäftigungsstand automatisch für stabile Preise"
  ],
  "correct": 2,
  "explain": "Beispiel: Wirtschaftswachstum/hoher Beschäftigungsstand gegen Preisniveaustabilität. Hohe Nachfrage und volle Auslastung führen zu steigenden Preisen und Löhnen (Inflation); Maßnahmen dagegen (z. B. höhere Zinsen) bremsen Investitionen, Wachstum und Beschäftigung. Fördern sich zwei Ziele gegenseitig, spricht man von Zielharmonie. Ein Zielkonflikt liegt vor, wenn die Förderung eines Ziels ein anderes verschlechtert. Weiteres Beispiel: Wachstum gegen Umweltschutz.",
  "src": "FW"
 },
 {
  "id": "ce22ef5dcf91",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 20,
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie verhält sich der Staat in einer Rezession nach der antizyklischen (nachfrageorientierten) Fiskalpolitik?",
  "opts": [
   "Er erhöht seine Ausgaben und senkt Steuern, notfalls mit neuen Schulden",
   "Er kürzt seine Ausgaben und erhöht die Steuern, damit der Haushalt ausgeglichen bleibt",
   "Er senkt den Leitzins, damit Kredite für Betriebe und Verbraucher billiger werden",
   "Er hält sich ganz heraus, weil sich der Markt von selbst wieder erholt"
  ],
  "correct": 0,
  "explain": "Antizyklisch = gegen den Konjunkturverlauf: In der Krise die fehlende Nachfrage ersetzen (Deficit Spending), im Boom Ausgaben kürzen und Rücklagen bilden. Den Leitzins bestimmt nicht der Staat, sondern die unabhängige EZB.",
  "src": "FW"
 },
 {
  "id": "fd7713b3e36f",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Angenommen, der Manteltarifvertrag sieht 30 Urlaubstage vor, in Ihrem Arbeitsvertrag stehen 32. Was gilt?",
  "opts": [
   "32 Tage, weil vom Tarifvertrag zugunsten des Arbeitnehmers abgewichen werden darf",
   "30 Tage, weil der Tarifvertrag immer Vorrang vor dem einzelnen Arbeitsvertrag hat",
   "24 Tage, weil das Bundesurlaubsgesetz als höheres Recht den Tarifvertrag verdrängt",
   "31 Tage, weil bei widersprüchlichen Regelungen der Mittelwert beider Verträge gilt"
  ],
  "correct": 0,
  "explain": "Günstigkeitsprinzip (§ 4 Abs. 3 Tarifvertragsgesetz): Der Tarifvertrag ist ein Mindeststandard. Schlechter als der Tarif darf der Arbeitsvertrag nicht sein, besser schon.",
  "src": "FW"
 },
 {
  "id": "05619b14e57d",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Was bedeutet es, wenn ein Tarifvertrag für allgemeinverbindlich erklärt wird?",
  "opts": [
   "Er gilt für alle Arbeitgeber und Arbeitnehmer der Branche im Geltungsbereich, auch ohne Verbandsmitgliedschaft",
   "Er gilt dann nur noch für Gewerkschaftsmitglieder, weil nur sie ihn über ihre Beiträge mitfinanzieren",
   "Er kann während der Laufzeit von keiner Seite mehr gekündigt oder geändert werden, auch nicht in gegenseitigem Einvernehmen",
   "Er gilt automatisch für alle Branchen in Deutschland, also z. B. auch für Bäckereien und Banken"
  ],
  "correct": 0,
  "explain": "Die Allgemeinverbindlicherklärung spricht das Arbeitsministerium auf Antrag der Tarifpartner aus, wenn sie im öffentlichen Interesse liegt (§ 5 TVG). Damit sind auch nicht tarifgebundene Betriebe erfasst.",
  "src": "FW"
 },
 {
  "id": "c03f9364cd38",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei Möglichkeiten, wie ein Tarifvertrag für Ihr Arbeitsverhältnis verbindlich werden kann?",
  "opts": [
   "Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Allgemeinverbindlicherklärung; Eintragung des Betriebs in die Handwerksrolle",
   "Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Allgemeinverbindlicherklärung; Verweis im Arbeitsvertrag (Bezugnahmeklausel)",
   "Gewerkschaftsmitgliedschaft des Arbeitnehmers, auch wenn der Betrieb nicht im Arbeitgeberverband ist; Allgemeinverbindlicherklärung; Verweis im Arbeitsvertrag",
   "Beiderseitige Tarifbindung (Gewerkschaft und Arbeitgeberverband); Beschluss der Betriebsversammlung; Verweis im Arbeitsvertrag (Bezugnahmeklausel)"
  ],
  "correct": 1,
  "explain": "Drei Wege: beiderseitige Tarifbindung (Sie sind Gewerkschaftsmitglied und Ihr Betrieb ist Mitglied im Arbeitgeberverband), Allgemeinverbindlicherklärung oder ein Verweis im Arbeitsvertrag (Bezugnahmeklausel). Nach § 3 TVG sind die Mitglieder der Tarifparteien tarifgebunden. Tarifgebundene Betriebe wenden den Tarif in der Praxis meist über den Arbeitsvertrag auch für Nicht-Gewerkschaftsmitglieder an.",
  "src": "FW"
 },
 {
  "id": "05904481d3e9",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie unterscheiden sich Flächentarifvertrag und Haustarifvertrag?",
  "opts": [
   "Flächentarif: zwischen Gewerkschaft und einem einzelnen Unternehmen; Haustarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region",
   "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region; Haustarif: zwischen Betriebsrat und Arbeitgeber eines Unternehmens",
   "Flächentarif: zwischen Gewerkschaft und Staat, gilt bundesweit für alle Branchen; Haustarif: zwischen Gewerkschaft und einem einzelnen Unternehmen",
   "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband für eine Branche in einer Region; Haustarif: zwischen Gewerkschaft und einem einzelnen Unternehmen"
  ],
  "correct": 3,
  "explain": "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband, gilt für eine Branche in einer Region (z. B. Kfz-Handwerk Bayern). Haustarif (Firmentarif): zwischen Gewerkschaft und einem einzelnen Unternehmen. Betriebsrat und Arbeitgeber schließen keine Tarifverträge, sondern Betriebsvereinbarungen. Kleine und mittlere Kfz-Betriebe sind meist über ihren Verband an den Flächentarif gebunden. Große Konzerne haben teils eigene Haustarife.",
  "src": "FW"
 },
 {
  "id": "bebe58f58185",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Begriffen aus dem Arbeitskampf die richtige Beschreibung zu.",
  "paare": [
   [
    "Warnstreik",
    "Kurze Arbeitsniederlegung während laufender Verhandlungen nach Ende der Friedenspflicht"
   ],
   [
    "Urabstimmung",
    "Die Gewerkschaftsmitglieder stimmen geheim über einen unbefristeten Streik ab"
   ],
   [
    "Aussperrung",
    "Der Arbeitgeber schließt Beschäftigte von der Arbeit aus und zahlt keinen Lohn"
   ],
   [
    "Wilder Streik",
    "Arbeitsniederlegung ohne Aufruf einer Gewerkschaft – rechtswidrig"
   ],
   [
    "Streikgeld",
    "Unterstützung der Gewerkschaft für ihre streikenden Mitglieder"
   ]
  ],
  "ablenker": [
   "Lohnfortzahlung durch die Krankenkasse"
  ],
  "explain": "Während Streik und Aussperrung zahlt der Arbeitgeber keinen Lohn. Gewerkschaftsmitglieder erhalten Streikgeld, Nichtmitglieder gehen leer aus.",
  "src": "FW"
 },
 {
  "id": "074915ad6102",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Zweigen der Sozialversicherung den Beitragssatz für das Jahr 2026 zu.",
  "paare": [
   [
    "Rentenversicherung",
    "18,6 %"
   ],
   [
    "Krankenversicherung (allgemeiner Satz)",
    "14,6 %"
   ],
   [
    "Durchschnittlicher Zusatzbeitrag der Krankenkassen",
    "2,9 %"
   ],
   [
    "Pflegeversicherung (mit Kind)",
    "3,6 %"
   ],
   [
    "Arbeitslosenversicherung",
    "2,6 %"
   ],
   [
    "Unfallversicherung",
    "Abhängig vom Gefahrtarif der Berufsgenossenschaft"
   ]
  ],
  "ablenker": [
   "19,9 %",
   "1,2 %"
  ],
  "explain": "Werte 2026: RV 18,6 %, KV 14,6 % + Zusatzbeitrag der Kasse (Durchschnitt 2,9 %), PV 3,6 % (kinderlos ab 23 Jahren +0,6 % für den Arbeitnehmer), AV 2,6 %. Bis auf den PV-Zuschlag und die UV tragen AN und AG je die Hälfte.",
  "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "a0b1177a05b6",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Sie sind 25 Jahre alt, kinderlos und verdienen 2026 3.100 € brutto. Beitragssätze 2026: RV 18,6 %, KV 14,6 % plus 2,9 % Zusatzbeitrag Ihrer Kasse, PV 3,6 % plus 0,6 % Kinderlosenzuschlag, AV 2,6 %. Wie hoch ist Ihr gesamter Arbeitnehmeranteil zur Sozialversicherung?",
  "opts": [
   "655,65 €",
   "629,30 €",
   "674,25 €",
   "1.329,90 €"
  ],
  "correct": 2,
  "formel": "AN-Anteil = Bruttolohn · Summe der AN-Sätze / 100\nAN-Satz = Beitragssatz / 2 (auch der KV-Zusatzbeitrag); den PV-Kinderlosenzuschlag zahlt der Arbeitnehmer allein",
  "explain": "AN-Anteile: RV 9,3 % + KV (14,6 % + 2,9 %) ÷ 2 = 8,75 % + PV 1,8 % + 0,6 % = 2,4 % + AV 1,3 % = 21,75 %. 3.100 € × 21,75 % = 674,25 € (RV 288,30 € + KV 271,25 € + PV 74,40 € + AV 40,30 €).",
  "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "063a67718f54",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Beitragsbemessungsgrenze der Rentenversicherung liegt 2026 bei 8.450 € im Monat. Was bedeutet das?",
  "opts": [
   "Vom Einkommen über 8.450 € werden keine Rentenbeiträge mehr erhoben",
   "Wer mehr als 8.450 € verdient, ist von der Rentenversicherung befreit",
   "Die höchste Monatsrente beträgt 8.450 €",
   "Ab 8.450 € Monatslohn zahlt der Arbeitgeber den Beitrag allein"
  ],
  "correct": 0,
  "explain": "Die Beitragsbemessungsgrenze deckelt das beitragspflichtige Einkommen. 2026: RV/AV 8.450 €, KV/PV 5.812,50 € im Monat. Nicht verwechseln mit der Versicherungspflichtgrenze der Krankenversicherung.",
  "src": "Netz: krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "420584b13395",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wer trägt 2026 den Kinderlosenzuschlag von 0,6 % in der Pflegeversicherung?",
  "opts": [
   "Der kinderlose Arbeitnehmer ab 23 Jahren allein",
   "Arbeitnehmer und Arbeitgeber je zur Hälfte, also je 0,3 %",
   "Der Arbeitgeber allein, zusätzlich zu seinem Anteil",
   "Die Pflegekasse aus Steuermitteln des Bundes"
  ],
  "correct": 0,
  "explain": "Der Grundbeitrag 3,6 % wird geteilt (je 1,8 %). Kinderlose ab 23 zahlen 0,6 % zusätzlich allein → 2,4 % Arbeitnehmeranteil. Eltern mit mehreren Kindern unter 25 zahlen weniger.",
  "src": "Netz: lohn-info.de, Sozialversicherungsbeiträge 2026"
 },
 {
  "id": "beb2b23a79c8",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Bis zu welchem Monatsverdienst ist im Jahr 2026 ein Minijob möglich?",
  "opts": [
   "603 €",
   "556 €",
   "538 €",
   "450 €"
  ],
  "correct": 0,
  "explain": "Die Minijob-Grenze ist an den Mindestlohn gekoppelt (10 Stunden pro Woche zum Mindestlohn). Mit dem Mindestlohn 2026 von 13,90 € ergibt das 603 € im Monat (13,90 € × 130 ÷ 3, aufgerundet). Frühere Grenzen: 2025 556 €, 2024 538 €, bis 09/2022 450 €.",
  "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "70f3f0ce5666",
  "cat": "WiSo",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Grundprinzipien der sozialen Sicherung die richtige Beschreibung zu.",
  "paare": [
   [
    "Solidaritätsprinzip",
    "Beitrag nach Einkommen, Leistung nach Bedarf – Gesunde tragen die Kosten der Kranken mit"
   ],
   [
    "Subsidiaritätsprinzip",
    "Zuerst hilft man sich selbst oder die Familie, der Staat hilft erst, wenn das nicht reicht"
   ],
   [
    "Versicherungsprinzip",
    "Leistungen erhält, wer vorher Beiträge gezahlt hat (z. B. Rente)"
   ],
   [
    "Versorgungsprinzip",
    "Leistungen aus Steuern für besondere Dienste oder Opfer für den Staat (z. B. Beamtenpension)"
   ],
   [
    "Fürsorgeprinzip",
    "Hilfe aus Steuermitteln nach Prüfung der Bedürftigkeit (z. B. Sozialhilfe)"
   ]
  ],
  "explain": "Die Sozialversicherung beruht auf Versicherungs- und Solidaritätsprinzip. Versorgung und Fürsorge werden aus Steuern bezahlt.",
  "src": "FW (Lehrplan Politik und Gesellschaft 10.3.1)"
 },
 {
  "id": "ca61427e236d",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Seit 01.01.2026 gibt es die sogenannte Aktivrente. Was regelt sie?",
  "opts": [
   "Wer nach Erreichen der Regelaltersgrenze sozialversicherungspflichtig weiterarbeitet, kann bis zu 2.000 € im Monat steuerfrei verdienen",
   "Jeder kann ab 63 Jahren ohne Abschläge in Rente gehen, wenn er mindestens 35 Beitragsjahre hat",
   "Wer nach Erreichen der Regelaltersgrenze weiterarbeitet, bekommt zusätzlich zum Lohn automatisch 2.000 € Rente im Monat ausbezahlt",
   "Rentner müssen bis zum 70. Lebensjahr mindestens in Teilzeit weiterarbeiten, sonst wird die Rente gekürzt"
  ],
  "correct": 0,
  "explain": "Aktivrente (Stand 2026): Steuerfreibetrag von bis zu 2.000 € monatlich für Arbeitslohn nach Erreichen der Regelaltersgrenze. Nicht für Minijobs, Selbstständige oder Frührentner vor der Regelaltersgrenze.",
  "src": "Netz: Bundesregierung / test.de, Aktivrente 2026"
 },
 {
  "id": "d7302b157cfb",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Mit welchem Alter erreichen Sie (Geburtsjahrgang 2006) nach heutigem Recht (Stand 2026) die Regelaltersgrenze der Rentenversicherung?",
  "opts": [
   "65 Jahre",
   "67 Jahre",
   "63 Jahre",
   "68 Jahre"
  ],
  "correct": 1,
  "explain": "Die Regelaltersgrenze wurde schrittweise angehoben und liegt für alle ab Jahrgang 1964 bei 67 Jahren.",
  "src": "FW"
 },
 {
  "id": "8a4c76fcc351",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Fällen die passende Leistung der gesetzlichen Rentenversicherung zu.",
  "paare": [
   [
    "Ein Geselle kann nach einem Freizeitunfall dauerhaft nur noch 2 Stunden täglich arbeiten",
    "Rente wegen voller Erwerbsminderung"
   ],
   [
    "Der Ehepartner eines Versicherten stirbt",
    "Witwen- bzw. Witwerrente"
   ],
   [
    "Ein Kind verliert einen Elternteil",
    "Waisenrente"
   ],
   [
    "Ein Mitarbeiter soll nach einer Bandscheiben-OP wieder arbeitsfähig werden",
    "Medizinische Rehabilitation"
   ]
  ],
  "ablenker": [
   "Arbeitslosengeld",
   "Verletztenrente der Berufsgenossenschaft"
  ],
  "explain": "Volle Erwerbsminderung: weniger als 3 Stunden Arbeit täglich möglich. Bei einem Freizeitunfall ist nicht die Berufsgenossenschaft, sondern die Renten- bzw. Krankenversicherung zuständig. Grundsatz: Reha vor Rente.",
  "src": "FW"
 },
 {
  "id": "8ecd5de43ef4",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Sie stürzen auf dem direkten Weg zur Werkstatt mit dem Fahrrad und brechen sich das Handgelenk. Welche Antwort nennt die zuständige Versicherung und ihre Leistungen richtig?",
  "opts": [
   "Gesetzliche Krankenversicherung, weil der Unfall nicht im Betrieb passiert ist; Behandlung beim Hausarzt; Krankengeld nach der Lohnfortzahlung; Reha über die Rentenversicherung",
   "Gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist; Heilbehandlung beim Durchgangsarzt; Arbeitslosengeld nach der Lohnfortzahlung; Reha und ggf. Verletztenrente",
   "Gesetzliche Rentenversicherung, weil Ihre Erwerbsfähigkeit gefährdet ist; Heilbehandlung beim Hausarzt; Übergangsgeld ab dem ersten Tag; bei bleibenden Schäden Erwerbsminderungsrente",
   "Gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist; Heilbehandlung beim Durchgangsarzt; Verletztengeld nach der Lohnfortzahlung; Reha und ggf. Verletztenrente"
  ],
  "correct": 3,
  "explain": "Zuständig ist die gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist. Leistungen: Heilbehandlung (Durchgangsarzt, Klinik, Medikamente), Verletztengeld nach Ende der Lohnfortzahlung, Rehabilitation und Umschulung, bei bleibenden Schäden Verletztenrente. Versichert sind Arbeitsunfälle, Wegeunfälle (direkter Weg) und Berufskrankheiten. Den Unfall muss der Betrieb der BG melden. Weitere Aufgabe der BG: Prävention durch Unfallverhütungsvorschriften.",
  "src": "FW"
 },
 {
  "id": "a3374f8e9742",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei Leistungen der Arbeitslosenversicherung?",
  "opts": [
   "Arbeitslosengeld; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Förderung von Weiterbildung und Umschulung",
   "Arbeitslosengeld; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Krankengeld bei längerer Krankheit",
   "Arbeitsvermittlung und Berufsberatung; Sozialhilfe für dauerhaft Erwerbsunfähige; Förderung von Weiterbildung und Umschulung",
   "Arbeitsvermittlung und Berufsberatung; Kurzarbeitergeld bei vorübergehendem Arbeitsausfall; Erwerbsminderungsrente"
  ],
  "correct": 0,
  "explain": "Leistungen: Arbeitslosengeld (60 % bzw. mit Kind 67 % des pauschalierten Nettoentgelts), Arbeitsvermittlung und Berufsberatung, Förderung von Weiterbildung und Umschulung, Kurzarbeitergeld. Krankengeld zahlt die Krankenkasse, Erwerbsminderungsrente die Rentenversicherung, Sozialhilfe das Sozialamt. Träger ist die Bundesagentur für Arbeit mit den Agenturen für Arbeit vor Ort. Auch Insolvenzgeld gehört zu den Leistungen.",
  "src": "FW"
 },
 {
  "id": "a4bf12fca0dd",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung des Wahlsystems der Bundestagswahl seit der Wahlrechtsreform 2023 (erstmals angewendet am 23.02.2025) ist richtig?",
  "opts": [
   "Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; mindestens 598 Sitze, Überhangmandate werden ausgeglichen; jeder Wahlkreissieger zieht ein",
   "Erststimme entscheidet über die Sitzverteilung; Zweitstimme für einen Wahlkreisbewerber; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; Wahlkreissieger nur mit Zweitstimmendeckung",
   "Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; Wahlkreissieger nur mit Zweitstimmendeckung",
   "Erststimme für einen Wahlkreisbewerber; Zweitstimme entscheidet über die Sitzverteilung; fest 630 Sitze ohne Überhang- und Ausgleichsmandate; jeder Wahlkreissieger zieht sicher ein"
  ],
  "correct": 2,
  "explain": "Mit der Erststimme wählt man einen Wahlkreisbewerber, die Zweitstimme für eine Landesliste entscheidet über die Sitzverteilung der Parteien. Der Bundestag hat fest 630 Sitze, Überhang- und Ausgleichsmandate gibt es nicht mehr (früher: mindestens 598 Sitze plus Überhang- und Ausgleichsmandate). Zweitstimmendeckung: Gewinnt eine Partei mehr Wahlkreise, als ihr Sitze nach Zweitstimmen zustehen, gehen die Wahlkreissieger mit den schwächsten Ergebnissen leer aus.",
  "src": "Netz: Bundestag, Urteil BVerfG 30.07.2024 zur Wahlrechtsreform 2023"
 },
 {
  "id": "460138a5c38f",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Eine Partei erhält bei der Bundestagswahl 4,2 % der Zweitstimmen und gewinnt 3 Wahlkreise direkt. Was gilt nach dem Stand 2026?",
  "opts": [
   "Sie zieht entsprechend ihrem Zweitstimmenanteil in den Bundestag ein (Grundmandatsklausel)",
   "Sie bekommt keinen einzigen Sitz, weil sie unter der 5-%-Hürde liegt und es keine Ausnahmen mehr gibt",
   "Nur die drei Wahlkreissieger ziehen ein, weitere Sitze bekommt die Partei nicht",
   "Sie bekommt automatisch 5 % der Sitze, weil sie die Hürde über Direktmandate erreicht"
  ],
  "correct": 0,
  "explain": "Das Bundesverfassungsgericht hat am 30.07.2024 den geplanten Wegfall der Grundmandatsklausel für verfassungswidrig erklärt. Bis zu einer Neuregelung gilt: Mit mindestens 3 Direktmandaten zählt die Partei trotz weniger als 5 % bei der Sitzverteilung mit.",
  "src": "Netz: Bundestag, Urteil BVerfG 30.07.2024"
 },
 {
  "id": "45dff089c1f7",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Aussage zur 5-%-Sperrklausel bei der Bundestagswahl ist richtig – zu Inhalt, Zweck, Nachteil und Geltung bei der Kommunalwahl in Bayern?",
  "opts": [
   "Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt auch bei der Kommunalwahl in Bayern",
   "Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt nicht bei der Kommunalwahl in Bayern",
   "Sitze nur ab 5 % der Zweitstimmen (Ausnahme Grundmandatsklausel); Zweck: kleinen Parteien den Einzug erleichtern; Nachteil: das Parlament zersplittert; gilt nicht bei der Kommunalwahl in Bayern",
   "Sitze nur ab 5 % der Wahlberechtigten, Ausnahmen gibt es keine; Zweck: Zersplitterung verhindern; Nachteil: Stimmen für kleine Parteien wirken nicht; gilt nicht bei der Kommunalwahl in Bayern"
  ],
  "correct": 1,
  "explain": "Nur Parteien mit mindestens 5 % der Zweitstimmen erhalten Sitze (Ausnahme Grundmandatsklausel). Zweck: Zersplitterung des Parlaments verhindern, stabile Mehrheiten und Regierungen ermöglichen. Nachteil: Stimmen für kleine Parteien wirken sich nicht aus, die Wahlgleichheit wird eingeschränkt. Bei der Kommunalwahl in Bayern gibt es keine Sperrklausel. Die Sperrklausel ist eine Lehre aus der Weimarer Republik. Für den Bayerischen Landtag gilt ebenfalls eine 5-%-Hürde, für Gemeinderäte und Kreistage in Bayern nicht.",
  "src": "FW"
 },
 {
  "id": "7c5dc38129ff",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Bei der Bürgermeisterwahl am 08.03.2026 erhält Bewerberin A 44 %, Bewerber B 38 % und Bewerber C 18 % der gültigen Stimmen. Wie geht es weiter?",
  "opts": [
   "Zwei Wochen später findet eine Stichwahl zwischen A und B statt",
   "A ist gewählt, weil bei der Bürgermeisterwahl die einfache Mehrheit reicht",
   "Die Wahl wird nach vier Wochen mit allen drei Bewerbern wiederholt",
   "Der neue Gemeinderat wählt den Bürgermeister aus A und B"
  ],
  "correct": 0,
  "explain": "Gewählt ist, wer mehr als die Hälfte der gültigen Stimmen erhält. Sonst folgt eine Stichwahl der beiden Bewerber mit den meisten Stimmen – 2026 am 22.03., also zwei Wochen nach der Hauptwahl.",
  "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"
 },
 {
  "id": "59985a0c2c71",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei der Kommunalwahl in Ihrer Gemeinde sind 20 Gemeinderatsmitglieder zu wählen. Sie möchten kumulieren. Wie vielen Bewerbern können Sie höchstens die volle Stimmenzahl von je 3 Stimmen geben?",
  "opts": [
   "6 Bewerbern",
   "7 Bewerbern",
   "18 Bewerbern",
   "20 Bewerbern"
  ],
  "correct": 0,
  "explain": "Sie haben 20 Stimmen (= Zahl der Sitze). Pro Bewerber höchstens 3: 20 ÷ 3 = 6 Rest 2 → 6 Bewerber mit je 3 Stimmen (18 Stimmen), die übrigen 2 Stimmen können Sie anderen Bewerbern geben.",
  "src": "FW"
 },
 {
  "id": "731f183a9560",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Sie wohnen in einer kreisangehörigen Gemeinde im Landkreis Bayreuth. Wen bzw. was haben Sie bei der bayerischen Kommunalwahl 2026 in der Regel gewählt?",
  "opts": [
   "Den Stadtrat und den Oberbürgermeister",
   "Den Gemeinderat, den Ersten Bürgermeister, den Bezirkstag und den Landtag",
   "Den Gemeinderat, den Ersten Bürgermeister, den Kreistag und den Regierungspräsidenten",
   "Den Gemeinderat, den Ersten Bürgermeister, den Kreistag und den Landrat"
  ],
  "correct": 3,
  "explain": "In einer kreisangehörigen Gemeinde wählt man Gemeinderat, Ersten Bürgermeister, Kreistag und Landrat. Bezirkstag und Landtag werden gemeinsam zu einem anderen Termin gewählt, der Regierungspräsident wird ernannt. In einer kreisfreien Stadt wie der Stadt Bayreuth wählt man dagegen nur den Stadtrat und den Oberbürgermeister. „In der Regel“, weil Bürgermeister nach einer vorzeitigen Neuwahl teils zu anderen Terminen gewählt werden.",
  "src": "FW"
 },
 {
  "id": "2f30b4f11620",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt die Voraussetzungen, um bei der Kommunalwahl in Bayern 2026 wählen zu dürfen?",
  "opts": [
   "Mindestens 16 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
   "Mindestens 18 Jahre; ausschließlich deutsche Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
   "Mindestens 18 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Monaten Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen",
   "Mindestens 18 Jahre; deutsche oder andere EU-Staatsangehörigkeit; seit mindestens zwei Jahren Wohnsitz im Wahlkreis; nicht vom Wahlrecht ausgeschlossen"
  ],
  "correct": 2,
  "explain": "Voraussetzungen: am Wahltag mindestens 18 Jahre alt, deutsche Staatsangehörigkeit oder die eines anderen EU-Staats, seit mindestens zwei Monaten Wohnsitz bzw. Lebensmittelpunkt im Wahlkreis (Gemeinde bzw. Landkreis), nicht vom Wahlrecht ausgeschlossen. EU-Bürger dürfen bei Kommunalwahlen mitwählen, bei Bundestags- und Landtagswahlen nicht. Wer im Wählerverzeichnis steht, bekommt eine Wahlbenachrichtigung und kann auch Briefwahl beantragen.",
  "src": "Netz: Gemeinde-Infoblätter / Europäisches Parlament München, Kommunalwahl 2026"
 },
 {
  "id": "cc6f52eedcbf",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Der Freistaat Bayern überträgt den Gemeinden eine neue Aufgabe. Was verlangt das Konnexitätsprinzip dabei?",
  "opts": [
   "Die Gemeinden müssen die Aufgabe aus ihren eigenen Steuereinnahmen bezahlen, weil sie zur Selbstverwaltung gehört",
   "Der Freistaat muss für die Finanzierung sorgen und den Gemeinden die Mehrkosten ausgleichen („Wer bestellt, bezahlt“)",
   "Der Freistaat darf die Aufgabe erst übertragen, wenn die Bürger der Gemeinde in einem Bürgerentscheid zugestimmt haben",
   "Die Gemeinden müssen die Aufgabe übernehmen, dürfen dafür aber eine eigene Sondersteuer bei ihren Bürgern erheben"
  ],
  "correct": 1,
  "explain": "Konnexität: Wer eine Aufgabe überträgt, muss auch für die Finanzierung sorgen („Wer bestellt, bezahlt“). Der Freistaat muss die Mehrkosten der Gemeinden ausgleichen (Bayerische Verfassung, Art. 83 Abs. 3). Das Konnexitätsprinzip schützt die kommunale Selbstverwaltung davor, dass ihr der Staat Aufgaben ohne Geld aufbürdet.",
  "src": "FW"
 },
 {
  "id": "135ba1f53e1a",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Funktionen von Wahlen die passende Beschreibung zu.",
  "paare": [
   [
    "Legitimation",
    "Parlament und Regierung erhalten ihre Macht auf Zeit vom Volk"
   ],
   [
    "Kontrolle",
    "Die Wähler können eine Regierung oder einen Bürgermeister abwählen"
   ],
   [
    "Repräsentation",
    "Die Meinungen der Bevölkerung werden im Parlament abgebildet"
   ],
   [
    "Integration",
    "Durch die Teilnahme fühlen sich die Bürger als Teil des Gemeinwesens"
   ],
   [
    "Auswahl (Rekrutierung)",
    "Es wird bestimmt, welche Personen politische Ämter übernehmen"
   ]
  ],
  "explain": "Wahlen sind in der Demokratie das wichtigste Mittel der Bürger, Einfluss auf die Politik zu nehmen.",
  "src": "FW (Lehrplan Politik und Gesellschaft 11.3.1)"
 },
 {
  "id": "23808d9dbb5a",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Erklärung des Bruttoinlandsprodukts (BIP) und des Unterschieds zwischen nominalem und realem BIP ist richtig?",
  "opts": [
   "Wert aller in einem Jahr im Inland hergestellten Waren und Dienstleistungen (Endprodukte); nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation",
   "Wert aller in einem Jahr im Inland hergestellten Waren und Dienstleistungen (Endprodukte); nominal: preisbereinigt, ohne Inflation; real: zu aktuellen Preisen",
   "Wert aller in einem Jahr von Deutschen weltweit hergestellten Waren und Dienstleistungen; nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation",
   "Summe aller Umsätze der Unternehmen im Inland in einem Jahr, einschließlich Vorleistungen; nominal: zu aktuellen Preisen; real: preisbereinigt, ohne Inflation"
  ],
  "correct": 0,
  "explain": "BIP: Wert aller Waren und Dienstleistungen (Endprodukte), die in einem Jahr im Inland hergestellt werden – Vorleistungen werden nicht doppelt gezählt. Nominales BIP: mit den aktuellen Preisen des Jahres. Reales BIP: preisbereinigt, zeigt das tatsächliche Wachstum ohne Inflation. Steigt das nominale BIP um 3 % bei 2 % Inflation, ist die Wirtschaft real nur um etwa 1 % gewachsen.",
  "src": "FW"
 },
 {
  "id": "5c281276dd04",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ein Auffahrunfall mit anschließender Reparatur in Ihrer Werkstatt erhöht das BIP. Welche Antwort nennt richtige Kritikpunkte am BIP als Maß für Wohlstand und eine passende alternative Messgröße?",
  "opts": [
   "Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Verbraucherpreisindex",
   "Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; Hausarbeit und Ehrenamt werden doppelt gezählt; die Verteilung ist nicht erkennbar; Alternative: Human Development Index",
   "Reparaturen von Schäden werden aus dem BIP herausgerechnet; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Human Development Index",
   "Reparaturen von Schäden erhöhen das BIP ohne Wohlstandsgewinn; unbezahlte Arbeit wird nicht erfasst; die Verteilung ist nicht erkennbar; Alternative: Human Development Index"
  ],
  "correct": 3,
  "explain": "Kritik: Reparaturen von Schäden (Unfälle, Umweltschäden) erhöhen das BIP, obwohl kein Wohlstand entsteht. Unbezahlte Arbeit (Hausarbeit, Pflege in der Familie, Ehrenamt) wird nicht erfasst. Die Verteilung von Einkommen und Vermögen ist nicht erkennbar. Alternativen: z. B. Human Development Index (HDI), Nationaler Wohlfahrtsindex oder OECD Better Life Index. Der Verbraucherpreisindex misst dagegen nur die Inflation. Das BIP misst nur Marktleistungen. Alternative Messgrößen beziehen z. B. Bildung, Gesundheit, Lebenserwartung oder Umwelt mit ein.",
  "src": "FW (Lehrplan Politik und Gesellschaft 12.1.8)"
 },
 {
  "id": "74f6a904f8f3",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie die Konjunkturindikatoren der richtigen Art zu.",
  "paare": [
   [
    "ifo-Geschäftsklimaindex",
    "Frühindikator"
   ],
   [
    "Auftragseingänge in der Industrie",
    "Frühindikator"
   ],
   [
    "Industrieproduktion",
    "Präsenzindikator"
   ],
   [
    "Veränderung des realen BIP",
    "Präsenzindikator"
   ],
   [
    "Arbeitslosenquote",
    "Spätindikator"
   ],
   [
    "Entwicklung der Verbraucherpreise",
    "Spätindikator"
   ]
  ],
  "explain": "Frühindikatoren zeigen die Entwicklung im Voraus (Erwartungen, Aufträge). Präsenzindikatoren beschreiben die aktuelle Lage. Spätindikatoren reagieren erst mit Verzögerung – Betriebe stellen erst ein, wenn der Aufschwung sicher ist.",
  "src": "FW"
 },
 {
  "id": "1dc6378f34de",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie hat sich das reale Bruttoinlandsprodukt in Deutschland im Jahr 2025 entwickelt (Destatis, Januar 2026)?",
  "opts": [
   "Es ist um 0,2 % gewachsen, nach zwei Jahren mit Rückgang",
   "Es ist um 2,0 % geschrumpft, vor allem wegen der schwachen Industrie",
   "Es ist um 3,5 % gewachsen, so stark wie seit 2010 nicht mehr",
   "Es ist das dritte Jahr in Folge geschrumpft"
  ],
  "correct": 0,
  "explain": "Nach Rückgängen 2023 und 2024 wuchs das reale BIP 2025 laut erster Schätzung des Statistischen Bundesamts leicht um 0,2 %. Für 2026 wurde ein etwas stärkeres Wachstum erwartet.",
  "src": "Netz: Destatis, Pressemitteilung 017/2026 (15.01.2026)"
 },
 {
  "id": "fe164cf98073",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welches Ziel verfolgt die Europäische Zentralbank (EZB) mit ihrer Geldpolitik (Stand 2026)?",
  "opts": [
   "Eine Inflationsrate von mittelfristig 2 % im Euroraum",
   "Eine Arbeitslosenquote von unter 3 % im Euroraum",
   "Eine Inflationsrate von genau 0 %, also völlig stabile Preise",
   "Ein jährliches Wirtschaftswachstum von 5 %"
  ],
  "correct": 0,
  "explain": "Vorrangiges Ziel der EZB ist die Preisniveaustabilität. Sie strebt eine Inflationsrate von 2 % auf mittlere Sicht an. Ihr wichtigstes Mittel ist der Leitzins.",
  "src": "FW"
 },
 {
  "id": "c8d7d2b90615",
  "cat": "WiSo",
  "level": 3,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Wirkungskette einer Leitzinssenkung der EZB in die richtige Reihenfolge.",
  "schritte": [
   "Die EZB senkt den Leitzins",
   "Geschäftsbanken können sich günstiger Geld bei der Zentralbank leihen",
   "Die Zinsen für Kredite sinken (z. B. Autofinanzierung, Investitionskredite)",
   "Unternehmen und Haushalte nehmen mehr Kredite auf und investieren bzw. kaufen mehr",
   "Die Nachfrage steigt, Produktion und Beschäftigung nehmen zu"
  ],
  "explain": "Niedrige Zinsen beleben die Wirtschaft, können aber die Inflation anheizen. Gegen hohe Inflation erhöht die EZB deshalb den Leitzins.",
  "src": "FW"
 },
 {
  "id": "263a966c1da9",
  "cat": "WiSo",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie die Maßnahmen der nachfrageorientierten oder der angebotsorientierten Wirtschaftspolitik zu.",
  "paare": [
   [
    "Der Staat baut in der Krise zusätzlich Straßen und Schulen",
    "Nachfrageorientiert"
   ],
   [
    "Prämie beim Kauf eines Neuwagens gegen Verschrottung des Altwagens (wie 2009)",
    "Nachfrageorientiert"
   ],
   [
    "Senkung der Unternehmenssteuern",
    "Angebotsorientiert"
   ],
   [
    "Abbau von Bürokratie und Vorschriften für Betriebe",
    "Angebotsorientiert"
   ],
   [
    "Senkung der Lohnnebenkosten",
    "Angebotsorientiert"
   ]
  ],
  "explain": "Nachfrageorientiert (Keynes): Der Staat stärkt die Nachfrage, vor allem antizyklisch in der Krise. Angebotsorientiert: bessere Bedingungen für Unternehmen (Kosten, Steuern, Regeln), damit sie investieren und Arbeitsplätze schaffen.",
  "src": "FW"
 },
 {
  "id": "80a52da7e3e0",
  "cat": "WiSo",
  "level": 3,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie den Zielen des magischen Vielecks die Größe zu, mit der man sie misst.",
  "paare": [
   [
    "Stabilität des Preisniveaus",
    "Veränderung des Verbraucherpreisindex (Inflationsrate)"
   ],
   [
    "Hoher Beschäftigungsstand",
    "Arbeitslosenquote"
   ],
   [
    "Außenwirtschaftliches Gleichgewicht",
    "Außenbeitrag (Exporte minus Importe)"
   ],
   [
    "Stetiges und angemessenes Wachstum",
    "Veränderung des realen BIP"
   ],
   [
    "Schutz der Umwelt",
    "Ausstoß von Treibhausgasen (CO₂)"
   ]
  ],
  "ablenker": [
   "Höhe des Leitzinses"
  ],
  "explain": "Die vier klassischen Ziele stehen im Stabilitäts- und Wachstumsgesetz von 1967. Umweltschutz und gerechte Verteilung kamen später als Erweiterung zum Vieleck dazu.",
  "src": "FW"
 },
 {
  "id": "6f264bdbc61a",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt drei typische Auswirkungen einer Rezession auf ein Autohaus mit Werkstatt?",
  "opts": [
   "Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; die Preise steigen und Rabatte fallen weg",
   "Mehr Neuwagenverkäufe, weil Kunden in der Krise in Sachwerte investieren; Kunden schieben Wartung auf; Kurzarbeit",
   "Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; Kurzarbeit und weniger Neueinstellungen",
   "Weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf; mehr Neueinstellungen und Überstunden"
  ],
  "correct": 2,
  "explain": "Typische Folgen: weniger Neu- und Gebrauchtwagenverkäufe; Kunden schieben Wartung und Reparaturen auf, die Werkstatt hat weniger Aufträge; Kurzarbeit, weniger Neueinstellungen oder Ausbildungsplätze; stärkerer Preisdruck, mehr Rabatte. Autos sind langlebige Gebrauchsgüter: Ihr Kauf wird in unsicheren Zeiten zuerst verschoben. Deshalb reagiert der Kfz-Handel stark auf die Konjunktur.",
  "src": "FW"
 },
 {
  "id": "53558b53ff5d",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Ihr Lohn steigt im August 2026 um 3,3 %. Die Inflationsrate beträgt im gleichen Zeitraum angenommen 2,0 %. Um wie viel Prozent steigt Ihr Reallohn ungefähr?",
  "opts": [
   "5,3 %",
   "1,3 %",
   "1,65 %",
   "−1,3 %"
  ],
  "correct": 1,
  "formel": "Reallohnänderung ≈ Nominallohnänderung − Inflationsrate",
  "explain": "Näherung: Reallohnveränderung ≈ Nominallohnveränderung − Inflationsrate = 3,3 % − 2,0 % = 1,3 %. Genau: 1,033 ÷ 1,020 − 1 ≈ 1,27 %.",
  "src": "FW"
 },
 {
  "id": "764c31765a57",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 1,
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Im Frühjahr 2026 wurde in Ihrem Autohaus der Betriebsrat gewählt. In welchem Rhythmus und Zeitraum finden die regelmäßigen Betriebsratswahlen statt?",
  "opts": [
   "Alle 2 Jahre in der Zeit vom 1. Oktober bis 30. November, zuletzt im Herbst 2026",
   "Alle 5 Jahre gemeinsam mit der Landtagswahl, zuletzt im Herbst 2023",
   "Alle 4 Jahre in der Zeit vom 1. März bis 31. Mai, zuletzt im Frühjahr 2026",
   "Alle 6 Jahre gemeinsam mit der Kommunalwahl, zuletzt im März 2026"
  ],
  "correct": 2,
  "explain": "Nach § 13 Betriebsverfassungsgesetz (BetrVG) finden die regelmäßigen Betriebsratswahlen alle vier Jahre zwischen 1. März und 31. Mai statt (2022, 2026, nächste 2030); die Amtszeit beträgt vier Jahre. Alle zwei Jahre im Herbst wird die Jugend- und Auszubildendenvertretung gewählt. Mit Landtags- oder Kommunalwahlen haben Betriebsratswahlen nichts zu tun.",
  "src": "FW (BetrVG §§ 13, 21)"
 },
 {
  "id": "bb7283f15067",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 2,
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Wer durfte im Autohaus den Betriebsrat wählen, und wer konnte selbst in den Betriebsrat gewählt werden?",
  "opts": [
   "Wählen: alle Arbeitnehmer ab 18 Jahren; gewählt werden: alle Arbeitnehmer ab 18 Jahren, die Mitglied einer Gewerkschaft sind",
   "Wählen: alle Arbeitnehmer ab 16 Jahren, auch Azubis; gewählt werden: Wahlberechtigte ab 18, die mindestens 6 Monate im Betrieb sind",
   "Wählen: alle Arbeitnehmer ab 16 Jahren, auch Azubis; gewählt werden: alle Wahlberechtigten ab 16 Jahren ohne Wartezeit",
   "Wählen: nur Gesellen und Angestellte, keine Auszubildenden; gewählt werden: Wahlberechtigte ab 18, die mindestens 6 Monate im Betrieb sind"
  ],
  "correct": 1,
  "explain": "Wahlberechtigt sind alle Arbeitnehmer ab 16 Jahren, auch Auszubildende (§ 7 BetrVG, seit 2021). Wählbar sind Wahlberechtigte ab 18 Jahren, die dem Betrieb seit mindestens sechs Monaten angehören (§ 8). Eine Gewerkschaftsmitgliedschaft ist nicht nötig. Einen Betriebsrat gibt es ab 5 ständigen Arbeitnehmern; bei 51–100 Wahlberechtigten hat er 5 Mitglieder.",
  "src": "FW (BetrVG §§ 1, 7, 8, 9)"
 },
 {
  "id": "316b635248f4",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 3,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Auf der Betriebsversammlung geht es um verschiedene Regelungen. Ordnen Sie zu, wo sie üblicherweise festgelegt sind.",
  "paare": [
   [
    "Höhe der Stundenlöhne in den tarifgebundenen Kfz-Betrieben Bayerns",
    "Tarifvertrag (Gewerkschaft und Arbeitgeberverband)"
   ],
   [
    "Beginn und Ende der täglichen Arbeitszeit und Pausen im Autohaus",
    "Betriebsvereinbarung (Betriebsrat und Arbeitgeber)"
   ],
   [
    "Ihre persönliche Zulage über Tarif und Ihr Firmenwagen",
    "Arbeitsvertrag (Sie und der Arbeitgeber)"
   ],
   [
    "Mindesturlaub von 24 Werktagen pro Jahr",
    "Gesetz (Bundesurlaubsgesetz)"
   ]
  ],
  "ablenker": [
   "Satzung der Handwerkskammer"
  ],
  "explain": "Löhne vereinbaren die Tarifpartner. Der Betriebsrat darf Löhne, die üblicherweise im Tarif geregelt sind, nicht per Betriebsvereinbarung festlegen (Tarifvorbehalt, § 77 Abs. 3 BetrVG) – außer der Tarifvertrag erlaubt es mit einer Öffnungsklausel. Bei der Lage der Arbeitszeit hat der Betriebsrat dagegen ein Mitbestimmungsrecht (§ 87 BetrVG). Das Bundesurlaubsgesetz garantiert 24 Werktage (Mo–Sa), also 20 Arbeitstage bei der 5-Tage-Woche.",
  "src": "FW (BetrVG §§ 77, 87; BUrlG)"
 },
 {
  "id": "857c74471c1d",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 4,
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Im Herbst 2026 wird im Autohaus auch die Jugend- und Auszubildendenvertretung (JAV) gewählt. Wer darf sie wählen?",
  "opts": [
   "Nur Auszubildende, die bereits volljährig sind, weil Minderjährige nicht wählen dürfen",
   "Alle Arbeitnehmer unter 18 Jahren und alle Auszubildenden unter 25 Jahren im Betrieb",
   "Alle Beschäftigten des Betriebs, weil die JAV ein Ausschuss des Betriebsrats ist",
   "Nur Mitglieder der Gewerkschaftsjugend, weil die IG Metall die JAV-Mitglieder stellt"
  ],
  "correct": 1,
  "explain": "Wahlberechtigt sind alle Arbeitnehmer unter 18 Jahren und alle Auszubildenden unter 25 Jahren (§§ 60, 61 BetrVG). Die JAV wird für zwei Jahre gewählt, regelmäßig vom 1. Oktober bis 30. November (2024, 2026). Sie ist kein Teil des Betriebsrats, arbeitet aber eng mit ihm zusammen und setzt sich z. B. für die Qualität der Ausbildung ein.",
  "src": "FW (BetrVG §§ 60–64)"
 },
 {
  "id": "2d4a23a2dec5",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 5,
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "wiso-konjunkturzyklus.svg",
  "q": "Die Geschäftsführung zeigt ein Schaubild zum Konjunkturverlauf. Ordnen Sie den Nummern ① bis ④ die Konjunkturphase zu.",
  "paare": [
   [
    "Phase ①",
    "Aufschwung (Expansion)"
   ],
   [
    "Phase ②",
    "Hochkonjunktur (Boom)"
   ],
   [
    "Phase ③",
    "Abschwung (Rezession)"
   ],
   [
    "Phase ④",
    "Tiefstand (Depression)"
   ]
  ],
  "ablenker": [
   "Stagnation am Trend"
  ],
  "explain": "Nach dem unteren Wendepunkt A steigt die Wirtschaftsleistung wieder (Aufschwung ①). Um den oberen Wendepunkt B liegt die Hochkonjunktur ②, danach sinkt die Leistung (Abschwung ③) bis zum Tiefstand ④. Die gestrichelte Linie ist der langfristige Wachstumstrend, um den die tatsächliche Entwicklung schwankt.",
  "src": "Eigenes Diagramm"
 },
 {
  "id": "e9b52c6df059",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 6,
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "bild": "wiso-konjunkturzyklus.svg",
  "q": "Der Verkaufsleiter berichtet: „Die Auftragseingänge für Neuwagen gehen seit Monaten zurück, die Hersteller produzieren aber noch auf hohem Niveau, und Kurzarbeit gibt es bisher nicht.“ Wo im Schaubild befindet sich die Wirtschaft am ehesten?",
  "opts": [
   "Kurz nach Punkt A am Beginn von Phase ①: Die Aufträge fallen, weil die Kunden auf noch niedrigere Preise warten",
   "Mitten in Phase ④: Sinkende Aufträge zeigen, dass der Tiefstand erreicht ist und die Kurzarbeit gerade endet",
   "Genau bei Punkt A: Sinkende Aufträge bei noch hoher Produktion sind das Kennzeichen des unteren Wendepunkts",
   "Kurz nach Punkt B am Beginn von Phase ③: Der Frühindikator fällt schon, Präsenz- und Spätindikatoren noch nicht"
  ],
  "correct": 3,
  "explain": "Auftragseingänge sind ein Frühindikator, die Produktion ist ein Präsenzindikator, Arbeitsmarkt und Kurzarbeit sind Spätindikatoren. Wenn nur der Frühindikator nachgibt, ist der obere Wendepunkt B gerade überschritten – der Abschwung ③ beginnt. Am Punkt A wären Produktion und Beschäftigung niedrig, nicht hoch.",
  "src": "Eigenes Diagramm / FW"
 },
 {
  "id": "9b75224d435d",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 7,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Obwohl der Neuwagenverkauf schwach ist, ist die Werkstatt gut ausgelastet. Welche Erklärung ist am wahrscheinlichsten?",
  "opts": [
   "Kunden verschieben den Neukauf und lassen stattdessen ihr älteres Auto warten und reparieren",
   "Im Abschwung steigen die Werkstattpreise stark, deshalb erledigen Kunden Reparaturen vor der nächsten Erhöhung",
   "Weil weniger Neuwagen verkauft werden, schreibt der Staat seit 2026 häufigere Hauptuntersuchungen vor",
   "Neuwagen haben im Abschwung mehr Mängel, weil die Hersteller sparen, und kommen deshalb öfter in die Werkstatt"
  ],
  "correct": 0,
  "explain": "Autos sind langlebige Gebrauchsgüter: Ihren Kauf kann man verschieben, wenn die Zukunft unsicher ist. Die Kunden fahren ihr Auto länger, der Fahrzeugbestand wird älter, und Wartung und Verschleißreparaturen nehmen zu. Deshalb ist das Werkstattgeschäft weniger konjunkturabhängig als der Verkauf und stabilisiert das Autohaus im Abschwung.",
  "src": "FW"
 },
 {
  "id": "c14acaa2bf69",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 8,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Laut Statistischem Bundesamt lag die Inflationsrate im September 2026 bei 3,3 %, vor allem weil Energie und Kraftstoffe deutlich teurer wurden. Um welche Art von Inflation handelt es sich in erster Linie?",
  "opts": [
   "Nachfrageinflation: Die Verbraucher kaufen so viel, dass die Betriebe mit der Produktion nicht nachkommen und die Preise erhöhen",
   "Kosteninflation: Teurere Energie verteuert Produktion und Transport, die Betriebe geben die Kosten über die Preise weiter",
   "Importierte Deflation: Billige Waren aus dem Ausland drücken das Preisniveau, deshalb steigt die Inflationsrate",
   "Geldmengeninflation: Der Staat lässt mehr Bargeld drucken, um die gestiegenen Energiepreise selbst zu bezahlen"
  ],
  "correct": 1,
  "explain": "Im September 2026 waren Energieprodukte 14,9 % und Kraftstoffe 37,1 % teurer als ein Jahr zuvor, die Kerninflation (ohne Energie und Nahrungsmittel) lag nur bei 2,4 %. Das spricht für eine Kosteninflation (Angebotsschock): Höhere Kosten werden über die Preise weitergegeben. Bei einer Nachfrageinflation würden die Preise auf breiter Front wegen zu hoher Nachfrage steigen. Geld „druckt“ nicht der Staat – über die Geldpolitik entscheidet die EZB.",
  "src": "Netz: Destatis, Pressemitteilung 364/2026 (13.10.2026)"
 },
 {
  "id": "d88db240ead3",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 9,
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Ihr Tariflohn liegt seit August 2026 um 3,3 % höher als ein Jahr zuvor. Die Inflationsrate betrug im September 2026 ebenfalls 3,3 % (gegenüber dem Vorjahresmonat). Wie hat sich Ihr Reallohn im Vergleich zum Vorjahr ungefähr entwickelt?",
  "opts": [
   "Er ist um etwa 6,6 % gestiegen, weil Lohnerhöhung und Inflationsrate zusammengezählt werden",
   "Er ist etwa gleich geblieben: Die Lohnerhöhung gleicht den Preisanstieg aus, die Kaufkraft steigt nicht",
   "Er ist um etwa 3,3 % gesunken, weil die Inflation die Lohnerhöhung und zusätzlich einen Teil des Lohns auffrisst",
   "Er ist um 3,3 % gestiegen, weil der Reallohn nur vom Tarifvertrag abhängt und nicht von den Preisen"
  ],
  "correct": 1,
  "explain": "Reallohnveränderung ≈ Nominallohnveränderung − Inflationsrate = 3,3 % − 3,3 % ≈ 0 %. Sie bekommen zwar mehr Euro, können sich davon aber nicht mehr kaufen als ein Jahr zuvor. Der Reallohn misst die Kaufkraft des Lohns.",
  "src": "FW / Netz: Destatis PM 364/2026, IG Metall Kfz-Tarif 2025"
 },
 {
  "id": "bca58a9939e4",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 10,
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Wegen der steigenden Inflation wird über die Europäische Zentralbank (EZB) diskutiert. Wie wirkt eine Leitzinserhöhung typischerweise auf das Autohaus?",
  "opts": [
   "Autokredite werden billiger, weil die Banken mehr Geld von der EZB bekommen; der Neuwagenverkauf zieht deshalb sofort deutlich an",
   "Die EZB legt mit dem Leitzins direkt die Listenpreise für Neuwagen fest; das Autohaus muss seine Preise deshalb senken",
   "Autokredite und Leasing werden teurer, weniger Kunden finanzieren einen Kauf; die Nachfrage sinkt, der Preisanstieg wird gebremst",
   "Die Leitzinserhöhung senkt sofort die Kraftstoffpreise, weil die EZB die Energiepreise für den ganzen Euroraum festlegt"
  ],
  "correct": 2,
  "explain": "Steigt der Leitzins, leihen sich die Banken teurer Geld bei der Zentralbank und verlangen höhere Kreditzinsen. Kreditfinanzierte Käufe und Investitionen gehen zurück, die Nachfrage sinkt, der Preisauftrieb lässt nach. Nachteil (Zielkonflikt): Das bremst auch Wachstum und Beschäftigung – der Autohandel spürt das stark. Weltmarktpreise für Energie legt die EZB nicht fest; gegen eine Kosteninflation wirkt Zinspolitik deshalb nur langsam.",
  "src": "FW"
 },
 {
  "id": "06b9aa84025d",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 11,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Die Geschäftsführung erwägt Kurzarbeit im Verkauf, falls der Absatz weiter einbricht. Welche Aussage zum Kurzarbeitergeld ist richtig?",
  "opts": [
   "Die Krankenkasse zahlt den vollen Bruttolohn für die ausgefallenen Stunden, damit kein Beschäftigter Einbußen hat",
   "Der Arbeitgeber zahlt den ausgefallenen Lohn allein weiter und bekommt ihn später vom Finanzamt als Steuergutschrift vollständig erstattet",
   "Die Beschäftigten werden vorübergehend entlassen und bekommen Arbeitslosengeld, bis die Aufträge wieder steigen",
   "Die Agentur für Arbeit ersetzt einen Teil des ausgefallenen Nettolohns (60 %, mit Kind 67 %); die Arbeitsplätze bleiben erhalten"
  ],
  "correct": 3,
  "explain": "Kurzarbeitergeld ist eine Leistung der Arbeitslosenversicherung (Bundesagentur für Arbeit) bei vorübergehendem, erheblichem Arbeitsausfall: 60 % bzw. mit Kind 67 % der Nettoentgeltdifferenz. Ziel ist, Fachkräfte zu halten statt zu entlassen. Der Arbeitgeber zeigt die Kurzarbeit bei der Agentur für Arbeit an; gibt es einen Betriebsrat, muss er zustimmen (Mitbestimmung nach § 87 BetrVG).",
  "src": "FW"
 },
 {
  "id": "70283750525f",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 12,
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Kollege fordert, der Staat solle wie 2009 eine Prämie für den Kauf von Neuwagen zahlen. Welche Einordnung ist richtig?",
  "opts": [
   "Angebotsorientierte Politik: Die Prämie senkt die Produktionskosten der Hersteller; Nachteil: Die Tariflöhne der Branche sinken",
   "Nachfrageorientierte, antizyklische Politik: Sie belebt die Nachfrage; Nachteile: Mitnahme- und Vorzieheffekte, Kosten für den Staat",
   "Geldpolitik der EZB: Die Prämie erhöht die Geldmenge im Euroraum; Nachteil: Sie gilt nur für Fahrzeuge aus dem Euroraum",
   "Prozyklische Politik: Die Prämie verstärkt den Abschwung bewusst, damit schwache Betriebe schneller und endgültig vom Markt verschwinden"
  ],
  "correct": 1,
  "explain": "Die Umweltprämie („Abwrackprämie“) 2009 war ein staatlicher Nachfrageimpuls in der Rezession (Keynes, antizyklisch). Mitnahmeeffekt: Kunden, die ohnehin gekauft hätten, kassieren die Prämie. Vorzieheffekt: Käufe werden nur vorgezogen und fehlen danach. Bezahlt wird sie aus Steuern oder neuen Schulden.",
  "src": "FW"
 },
 {
  "id": "8c189b255abd",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 13,
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "In der Pause geht es um die nächste Landtagswahl in Bayern (regulär 2028). Welche Aussage zum bayerischen Landtagswahlrecht ist richtig?",
  "opts": [
   "Wie bei der Bundestagswahl entscheidet allein die Zweitstimme über die Sitzverteilung; die Erststimme wählt nur den Abgeordneten im eigenen Stimmkreis",
   "Erst- und Zweitstimme werden zu Gesamtstimmen addiert, die über die Sitzverteilung entscheiden; mit der Zweitstimme wählt man eine Person der Liste",
   "Es gibt nur eine Stimme für eine Partei; die Abgeordneten bestimmt danach der Landtagspräsident aus den Parteilisten",
   "Erst- und Zweitstimme werden zu Gesamtstimmen addiert; eine Sperrklausel gibt es aber wie bei der Kommunalwahl in Bayern nicht, jede Stimme zählt"
  ],
  "correct": 1,
  "explain": "Mit der Erststimme wählt man einen Bewerber im Stimmkreis (91 Stimmkreise), mit der Zweitstimme einen Bewerber auf der Liste des Wahlkreises (7 Wahlkreise = Regierungsbezirke) – so kann man die Reihenfolge der Liste verändern. Beide Stimmen zählen zusammen als Gesamtstimmen für die Sitzverteilung. Es gilt eine 5-%-Hürde auf die Gesamtstimmen. Wahlperiode: 5 Jahre.",
  "src": "Netz: bpb, Fakten zur Landtagswahl in Bayern 2023"
 },
 {
  "id": "285538d13800",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 14,
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Laut Bayerischer Verfassung hat der Landtag 180 Abgeordnete. Nach der Wahl 2023 sind es aber 203. Woran liegt das?",
  "opts": [
   "Die 23 zusätzlichen Sitze gehen an Vertreter der sieben Bezirkstage, die automatisch auch Mitglied im Landtag sind",
   "Im bayerischen Landtagswahlrecht gibt es – anders als im Bund – weiterhin Überhang- und Ausgleichsmandate",
   "Seit der Wahlrechtsreform 2023 hat der Landtag wie der Bundestag eine feste, größere Sitzzahl",
   "Parteien unter 5 % erhalten in Bayern zusätzliche Sitze, damit auch kleine Parteien vertreten sind"
  ],
  "correct": 1,
  "explain": "Gewinnt eine Partei mehr Stimmkreise direkt, als ihr nach Gesamtstimmen Sitze zustehen, behält sie diese Überhangmandate; die anderen Parteien erhalten dafür Ausgleichsmandate. 2023 ergab das 203 statt 180 Abgeordnete. Im Bundestag gibt es seit der Reform 2023 keine Überhang- und Ausgleichsmandate mehr (fest 630 Sitze).",
  "src": "Netz: Bayerischer Landtag, Volkshandbuch 19. Wahlperiode"
 },
 {
  "id": "7f4fbedf38b1",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 15,
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Kollegen wollen ein Volksbegehren in Bayern unterstützen. Bringen Sie die Stufen der Volksgesetzgebung in die richtige Reihenfolge.",
  "schritte": [
   "Antrag auf Zulassung mit mindestens 25.000 Unterschriften von Stimmberechtigten",
   "Prüfung und Zulassung durch das Innenministerium (im Streitfall entscheidet der Verfassungsgerichtshof)",
   "Volksbegehren: Mindestens 10 % der Stimmberechtigten tragen sich innerhalb von 14 Tagen im Rathaus ein",
   "Der Landtag berät den Gesetzentwurf und kann ihn annehmen oder einen eigenen Entwurf dagegenstellen",
   "Volksentscheid: Alle Stimmberechtigten stimmen ab, wenn der Landtag den Entwurf nicht unverändert annimmt"
  ],
  "explain": "Die Bayerische Verfassung (Art. 74) erlaubt Gesetzgebung durch das Volk. Nach dem erfolgreichen Volksbegehren muss sich der Landtag mit dem Entwurf befassen. Lehnt er ihn ab, entscheiden die Bürger im Volksentscheid. In der Gemeinde heißt das Gegenstück Bürgerbegehren und Bürgerentscheid.",
  "src": "Netz: Bayerische Verfassung Art. 74 / Landeswahlgesetz"
 },
 {
  "id": "7e896d536063",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 16,
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "In Ihrer Stadt soll über eine Umgehungsstraße am Gewerbegebiet entschieden werden. Bürger sammeln Unterschriften für einen Bürgerentscheid. Welche Aussage ist richtig?",
  "opts": [
   "Das Bürgerbegehren beantragt die Abstimmung; beim Bürgerentscheid stimmen die Bürger ab, das Ergebnis wirkt wie ein Stadtratsbeschluss",
   "Beim Bürgerentscheid stimmen die Bürger ab; das Ergebnis ist aber nur eine unverbindliche Empfehlung, die der Stadtrat jederzeit übergehen kann",
   "Das Bürgerbegehren muss zuerst vom Bayerischen Landtag genehmigt werden; danach stimmen alle Bürger Bayerns darüber ab",
   "Beim Bürgerentscheid stimmt nur der Stadtrat ab; die Bürger dürfen vorher in einer Bürgerversammlung ihre Meinung sagen"
  ],
  "correct": 0,
  "explain": "Bayerische Gemeindeordnung (Art. 18a): Mit dem Bürgerbegehren (Unterschriften) beantragen Bürger einen Bürgerentscheid. Beim Bürgerentscheid entscheidet die Mehrheit, wenn sie einen Mindestanteil der Stimmberechtigten erreicht (abhängig von der Gemeindegröße). Das Ergebnis hat die Wirkung eines Gemeinderatsbeschlusses und kann ein Jahr lang nur durch einen neuen Bürgerentscheid geändert werden.",
  "src": "FW (Gemeindeordnung Bayern Art. 18a)"
 },
 {
  "id": "ad2288649753",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 17,
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie die Merkmale der passenden Wahl zu (Stand 2026).",
  "paare": [
   [
    "Man darf einem Bewerber bis zu 3 Stimmen geben",
    "Kommunalwahl in Bayern"
   ],
   [
    "Erst- und Zweitstimme zählen zusammen für die Sitzverteilung",
    "Landtagswahl in Bayern"
   ],
   [
    "Fest 630 Sitze, keine Überhang- und Ausgleichsmandate",
    "Bundestagswahl"
   ],
   [
    "Amtszeit 6 Jahre, keine Sperrklausel",
    "Kommunalwahl in Bayern"
   ],
   [
    "Wahlperiode 5 Jahre, 5-%-Hürde auf die Gesamtstimmen",
    "Landtagswahl in Bayern"
   ]
  ],
  "ablenker": [
   "Europawahl"
  ],
  "explain": "Kommunalwahl Bayern: Kumulieren (bis 3 Stimmen) und Panaschieren, 6 Jahre, keine Sperrklausel, auch EU-Bürger wählen mit. Landtagswahl Bayern: Gesamtstimmen aus Erst- und Zweitstimme, 5-%-Hürde, 5 Jahre. Bundestagswahl: nur die Zweitstimme verteilt die Sitze, fest 630 Sitze seit der Reform 2023, Wahlperiode 4 Jahre.",
  "src": "FW / Netz: bpb, Bundestag"
 },
 {
  "id": "ca4ce7103853",
  "cat": "WiSo",
  "situation": "wiso-betrieb",
  "nr": 18,
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Im Abschwung klagen viele Gemeinden über Löcher im Haushalt. Welche Steuer ist für Gemeinden die wichtigste eigene Einnahme und schwankt stark mit der Konjunktur?",
  "opts": [
   "Die Grundsteuer, weil sie bei jedem Abschwung neu auf die Hausbesitzer umgelegt wird",
   "Die Kfz-Steuer, weil sie an die Zahl der in der Stadt verkauften Neuwagen gekoppelt ist",
   "Die Gewerbesteuer, weil sie vom Ertrag der Betriebe in der Gemeinde abhängt",
   "Die Umsatzsteuer, weil die Gemeinde ihren Satz selbst festlegt und sie vollständig behält"
  ],
  "correct": 2,
  "explain": "Die Gewerbesteuer hängt vom Gewerbeertrag der Betriebe ab; den Hebesatz legt die Gemeinde selbst fest. Im Abschwung sinken die Gewinne und damit die Einnahmen stark. Die Grundsteuer ist dagegen stabil, die Kfz-Steuer steht dem Bund zu, von der Umsatzsteuer bekommen die Gemeinden nur einen kleinen Anteil zu einem bundesweit festen Satz. Folge: Gemeinden sparen im Abschwung oft bei freiwilligen Aufgaben – das wirkt prozyklisch.",
  "src": "FW"
 },
 {
  "id": "d43f4ce7061f",
  "cat": "WiSo",
  "level": 1,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Ordnen Sie den Funktionen des Tarifvertrags die passende Beschreibung zu.",
  "paare": [
   [
    "Schutzfunktion",
    "Der einzelne Arbeitnehmer wird vor einseitig diktierten, schlechten Arbeitsbedingungen geschützt"
   ],
   [
    "Ordnungsfunktion",
    "Einheitliche Regeln für viele Betriebe erleichtern Kalkulation und Verwaltung"
   ],
   [
    "Friedensfunktion",
    "Während der Laufzeit sind Streiks und Aussperrungen über geregelte Inhalte ausgeschlossen"
   ],
   [
    "Verteilungsfunktion",
    "Die Beschäftigten werden am wirtschaftlichen Erfolg und am Produktivitätsfortschritt beteiligt"
   ]
  ],
  "ablenker": [
   "Der Staat legt über den Tarifvertrag die Steuersätze fest"
  ],
  "explain": "Allein wäre der einzelne Arbeitnehmer dem Arbeitgeber meist unterlegen – der Tarifvertrag schützt ihn. Für die Betriebe schafft er gleiche Wettbewerbsbedingungen und Planungssicherheit, für beide Seiten Ruhe während der Laufzeit. Über Lohnerhöhungen werden die Beschäftigten am Erfolg beteiligt.",
  "src": "FW"
 },
 {
  "id": "b040df14d4f4",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Manteltarifvertrag ist abgelaufen, ein neuer ist noch nicht abgeschlossen. Was gilt bis dahin für die bestehenden Arbeitsverhältnisse?",
  "opts": [
   "Es gilt nur noch das Gesetz, also z. B. 24 Werktage Urlaub, bis ein neuer Tarifvertrag in Kraft tritt",
   "Die bisherigen Regelungen gelten weiter (Nachwirkung), bis sie durch eine neue Abmachung ersetzt werden",
   "Der Arbeitgeber darf die Arbeitsbedingungen bis zum neuen Abschluss einseitig per Aushang festlegen",
   "Alle Arbeitsverhältnisse ruhen ohne Lohn, bis sich die Tarifpartner auf einen neuen Vertrag geeinigt haben"
  ],
  "correct": 1,
  "explain": "Nach § 4 Abs. 5 Tarifvertragsgesetz wirken die Regelungen eines abgelaufenen Tarifvertrags nach, bis sie durch eine andere Abmachung (neuer Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag) ersetzt werden. Es entsteht also keine Lücke. Die Friedenspflicht endet aber mit dem Ablauf.",
  "src": "FW (TVG § 4 Abs. 5)"
 },
 {
  "id": "c80e4a1d3d7e",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Der Entgelttarifvertrag im bayerischen Kfz-Handwerk läuft laut Abschluss 2025 bis Ende Mai 2027. Was ändert sich danach?",
  "opts": [
   "Die Löhne fallen automatisch auf den gesetzlichen Mindestlohn zurück, bis ein neuer Vertrag gilt",
   "Der Vertrag verlängert sich automatisch um zwei Jahre, neue Verhandlungen sind erst 2029 möglich",
   "Die Handwerkskammer legt die Löhne fest, bis sich die Tarifpartner wieder geeinigt haben",
   "Die Friedenspflicht für die Entgelte endet; die IG Metall darf dann zu Warnstreiks aufrufen, um Druck zu machen"
  ],
  "correct": 3,
  "explain": "Mit dem Ende der Laufzeit endet die Friedenspflicht – Warnstreiks während der neuen Verhandlungen sind dann zulässig. Die bisherigen Entgelte gelten weiter (Nachwirkung), sie fallen nicht auf den Mindestlohn zurück. Die Handwerkskammer verhandelt keine Löhne.",
  "src": "Netz: IG Metall / DGB-Tarifmeldung Kfz-Handwerk 2025"
 },
 {
  "id": "f61913bcf04a",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine Auszubildende im bayerischen Kfz-Handwerk bekam vor Juli 2025 eine Ausbildungsvergütung von 1.000 € (Beispielwert). Laut Tarifabschluss 2025 stieg sie ab Juli 2025 um 80 € und ab August 2026 um weitere 3,3 %. Wie hoch ist sie ab August 2026?",
  "opts": [
   "1.113,00 €",
   "1.115,64 €",
   "1.033,00 €",
   "1.080,00 €"
  ],
  "correct": 1,
  "formel": "Prozentwert = Grundwert · Prozentsatz / 100\nneuer Wert = Grundwert · (1 + p / 100)\nbei mehreren Stufen ist der Grundwert jeweils der Betrag nach der vorherigen Stufe",
  "explain": "Stufe 1: 1.000 € + 80 € = 1.080 €. Stufe 2: 1.080 € × 1,033 = 1.115,64 €. Wer zuerst 3,3 % auf 1.000 € rechnet und dann 80 € addiert, kommt auf 1.113 € – die Prozentstufe gilt aber für den bereits erhöhten Betrag.",
  "src": "Netz: IG Metall / DGB-Tarifmeldung Kfz-Handwerk 2025"
 },
 {
  "id": "50d11234cc81",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Der gesetzliche Mindestlohn beträgt 2026 13,90 € pro Stunde und steigt zum 01.01.2027 auf 14,60 €. Wie kommt seine Höhe zustande?",
  "opts": [
   "Die Mindestlohnkommission (Arbeitgeber- und Gewerkschaftsseite) schlägt sie vor, die Bundesregierung setzt sie per Verordnung fest",
   "Die IG Metall legt sie in ihrem Tarifvertrag fest, danach gilt sie automatisch für alle Branchen in Deutschland",
   "Der Bundestag beschließt jedes Jahr ein neues Mindestlohngesetz mit dem Betrag, den die Bundesagentur für Arbeit vorschlägt",
   "Jedes Bundesland legt einen eigenen Mindestlohn fest; Bayern orientiert sich dabei am Tariflohn im Handwerk"
  ],
  "correct": 0,
  "explain": "Nach dem Mindestlohngesetz beschließt die Mindestlohnkommission (stimmberechtigt: Vertreter der Arbeitgeber und der Gewerkschaften, dazu beratende Wissenschaftler) die Anpassung, die Bundesregierung macht sie per Rechtsverordnung verbindlich. Der Mindestlohn ist eine Untergrenze; Tariflöhne liegen meist darüber. Mit ihm steigt auch die Minijob-Grenze.",
  "src": "Netz: Mindestlohnkommission, Beschluss 06/2025"
 },
 {
  "id": "0143c7c56ba7",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Arbeitgeber sagt im Vorstellungsgespräch, er stelle nur Bewerber ein, die nicht in einer Gewerkschaft sind. Wie ist das zu beurteilen?",
  "opts": [
   "Zulässig: In Handwerksbetrieben mit weniger als 100 Beschäftigten gilt die Koalitionsfreiheit nicht",
   "Zulässig: Der Arbeitgeber darf sich seine Mitarbeiter frei aussuchen, auch nach der Gewerkschaftszugehörigkeit",
   "Unzulässig: Art. 9 Abs. 3 GG schützt das Recht, einer Gewerkschaft beizutreten; Abreden dagegen sind nichtig",
   "Unzulässig nur dann, wenn der Betrieb Mitglied im Arbeitgeberverband ist; sonst ist es ausdrücklich erlaubt"
  ],
  "correct": 2,
  "explain": "Art. 9 Abs. 3 Grundgesetz: Abreden, die die Koalitionsfreiheit einschränken oder behindern, sind nichtig, darauf gerichtete Maßnahmen rechtswidrig – das gilt ausdrücklich auch zwischen Arbeitgeber und Arbeitnehmer. Umgekehrt darf auch niemand zum Beitritt gezwungen werden (negative Koalitionsfreiheit).",
  "src": "FW (GG Art. 9 Abs. 3)"
 },
 {
  "id": "3c54346cccb0",
  "cat": "WiSo",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Rechtsgrundlagen eines Arbeitsverhältnisses in die richtige Rangfolge – von der höchsten zur niedrigsten.",
  "schritte": [
   "Grundgesetz (z. B. Koalitionsfreiheit)",
   "Gesetze (z. B. Bundesurlaubsgesetz, Arbeitszeitgesetz)",
   "Tarifvertrag",
   "Betriebsvereinbarung",
   "Arbeitsvertrag"
  ],
  "explain": "Eine niedrigere Stufe darf die höhere nicht zum Nachteil des Arbeitnehmers unterschreiten. Abweichungen zugunsten des Arbeitnehmers sind erlaubt (Günstigkeitsprinzip). Die Betriebsvereinbarung steht unter dem Tarifvertrag (Tarifvorbehalt).",
  "src": "FW"
 },
 {
  "id": "d234c3b34d5d",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Tarifvertrag enthält eine Öffnungsklausel. Was bedeutet das?",
  "opts": [
   "Der Tarifvertrag kann jederzeit von jeder Seite ohne Frist gekündigt werden, wenn sich die Wirtschaftslage ändert",
   "Der Tarifvertrag gilt auch für Betriebe anderer Branchen, die ihm freiwillig beitreten möchten",
   "Gewerkschaftsmitglieder dürfen auch während der Laufzeit streiken, wenn ihr Betrieb besonders hohe Gewinne macht",
   "Betriebe dürfen in den genannten Fällen per Betriebsvereinbarung vom Tarif abweichen, z. B. um Arbeitsplätze zu sichern"
  ],
  "correct": 3,
  "explain": "§ 4 Abs. 3 TVG erlaubt Abweichungen vom Tarif nur, wenn der Tarifvertrag sie gestattet (Öffnungsklausel) oder wenn sie für den Arbeitnehmer günstiger sind. Öffnungsklauseln erlauben z. B. in einer Krise, eine Tariferhöhung zu verschieben oder die Arbeitszeit befristet zu senken. Die Friedenspflicht bleibt davon unberührt.",
  "src": "FW (TVG § 4 Abs. 3)"
 },
 {
  "id": "23072ae1c61f",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "bild": "wiso-lohnabrechnung.svg",
  "q": "Die Abbildung zeigt eine vereinfachte Entgeltabrechnung für Oktober 2026. Wie hoch ist der Auszahlungsbetrag in Zeile H?",
  "opts": [
   "2.504,00 €",
   "2.832,80 €",
   "2.136,80 €",
   "2.156,00 €"
  ],
  "correct": 2,
  "formel": "Netto = Brutto − Steuern − Sozialversicherung (AN-Anteile)",
  "explain": "Steuern: B + C = 340,00 € + 27,20 € = 367,20 €. Sozialversicherung (Arbeitnehmeranteil): D + E + F + G = 297,60 € + 280,00 € + 76,80 € + 41,60 € = 696,00 € (21,75 % von 3.200 €). Abzüge gesamt 1.063,20 € → Netto 3.200 € − 1.063,20 € = 2.136,80 €. 2.504 € bzw. 2.832,80 € entstehen, wenn man die Steuern bzw. die Sozialversicherung vergisst.",
  "src": "Eigenes Diagramm (Beitragssätze 2026)"
 },
 {
  "id": "711f2bff8f4b",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "bild": "wiso-lohnabrechnung.svg",
  "q": "Wie viel zahlt der Arbeitgeber zur Abrechnung in der Abbildung zusätzlich zum Bruttoentgelt als Arbeitgeberanteil für die Zweige in den Zeilen D bis G?",
  "opts": [
   "696,00 €",
   "1.372,80 €",
   "1.063,20 €",
   "676,80 €"
  ],
  "correct": 3,
  "explain": "Renten-, Kranken- (einschließlich Zusatzbeitrag), Pflege- und Arbeitslosenversicherung werden je zur Hälfte getragen – aber den Kinderlosenzuschlag von 0,6 % (19,20 €) zahlt der Arbeitnehmer allein. Arbeitgeberanteil: 297,60 € + 280,00 € + 57,60 € + 41,60 € = 676,80 €. Steuern zahlt der Arbeitgeber nicht, er führt sie nur ab. Dazu kommen für ihn noch die Unfallversicherung (Berufsgenossenschaft) und Umlagen.",
  "src": "Eigenes Diagramm (Beitragssätze 2026)"
 },
 {
  "id": "c3d62fee0bcb",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "bild": "wiso-lohnabrechnung.svg",
  "q": "Ordnen Sie den Zeilen der Entgeltabrechnung in der Abbildung zu, wem das Geld letztlich zusteht.",
  "paare": [
   [
    "Zeile B (Lohnsteuer)",
    "Bund, Ländern und Gemeinden – eingezogen über das Finanzamt"
   ],
   [
    "Zeile C (Kirchensteuer)",
    "Der Religionsgemeinschaft – eingezogen über das Finanzamt"
   ],
   [
    "Zeile D (Rentenversicherung)",
    "Deutsche Rentenversicherung"
   ],
   [
    "Zeile G (Arbeitslosenversicherung)",
    "Bundesagentur für Arbeit"
   ]
  ],
  "ablenker": [
   "Berufsgenossenschaft",
   "Handwerkskammer"
  ],
  "explain": "Lohn- und Kirchensteuer führt der Arbeitgeber an das Finanzamt ab. Die Sozialversicherungsbeiträge D bis G zahlt er als Gesamtsozialversicherungsbeitrag an die Krankenkasse des Arbeitnehmers (Einzugsstelle), die sie an Rentenversicherung, Bundesagentur und Pflegekasse weiterleitet. Die Berufsgenossenschaft bekommt nur den Unfallversicherungsbeitrag, den der Arbeitgeber allein zahlt – er taucht in der Abrechnung des Arbeitnehmers nicht auf.",
  "src": "Eigenes Diagramm / FW"
 },
 {
  "id": "e644efac6307",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "bild": "wiso-lohnabrechnung.svg",
  "q": "Der Arbeitnehmer aus der Abbildung bekommt ein Kind. Welcher Sozialversicherungsbeitrag ändert sich dadurch, und wie?",
  "opts": [
   "Zeile F sinkt auf 67,20 €, weil nur der Arbeitgeberanteil am Zuschlag wegfällt",
   "Zeile F sinkt auf 57,60 €, weil der Kinderlosenzuschlag von 0,6 % wegfällt",
   "Zeile E sinkt auf 233,60 €, weil Eltern keinen Zusatzbeitrag zur Krankenkasse zahlen",
   "Zeile D sinkt auf 281,60 €, weil Eltern einen geringeren Rentenbeitrag zahlen"
  ],
  "correct": 1,
  "explain": "Der Zuschlag von 0,6 % in der Pflegeversicherung gilt nur für Kinderlose ab 23 Jahren und wird vom Arbeitnehmer allein getragen. Mit Kind zahlt er nur noch 1,8 %: 3.200 € × 1,8 % = 57,60 €. Ab dem zweiten Kind unter 25 sinkt der Beitrag weiter. Renten- und Krankenversicherungsbeiträge hängen nicht von Kindern ab.",
  "src": "Eigenes Diagramm (Beitragssätze 2026)"
 },
 {
  "id": "d747795c283a",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Sie sind wegen eines Bandscheibenvorfalls (kein Arbeitsunfall, keine Berufskrankheit) zehn Wochen arbeitsunfähig. Wer zahlt was?",
  "opts": [
   "Der Arbeitgeber zahlt 6 Wochen den vollen Lohn, danach zahlt die Krankenkasse Krankengeld (70 % vom Brutto, höchstens 90 % vom Netto)",
   "Die Krankenkasse zahlt vom ersten Tag an Krankengeld in Höhe von 70 % des Bruttolohns, der Arbeitgeber zahlt gar nichts",
   "Der Arbeitgeber zahlt 6 Wochen den vollen Lohn, danach zahlt die Berufsgenossenschaft Verletztengeld bis zur Genesung",
   "Der Arbeitgeber zahlt alle 10 Wochen den vollen Lohn weiter, weil die Erkrankung durch die Arbeit in der Werkstatt entstanden sein könnte"
  ],
  "correct": 0,
  "explain": "Entgeltfortzahlungsgesetz: Der Arbeitgeber zahlt bei Krankheit bis zu 6 Wochen den vollen Lohn. Danach zahlt die Krankenkasse Krankengeld: 70 % des Bruttoentgelts, höchstens 90 % des Nettoentgelts, für dieselbe Krankheit bis zu 78 Wochen innerhalb von 3 Jahren. Verletztengeld der Berufsgenossenschaft gibt es nur nach Arbeitsunfall oder Berufskrankheit.",
  "src": "FW (EFZG § 3, SGB V §§ 47, 48)"
 },
 {
  "id": "6e267a795ea4",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Zum 01.07.2026 stiegen die gesetzlichen Renten um 4,24 %. Ihr Großvater bekam vorher 1.250 € Rente (brutto). Wie hoch ist sie danach?",
  "opts": [
   "1.255,30 €",
   "1.292,40 €",
   "1.303,00 €",
   "1.197,00 €"
  ],
  "correct": 2,
  "formel": "Prozentwert = Grundwert · Prozentsatz / 100\nneuer Wert = Grundwert · (1 + p / 100)",
  "explain": "1.250 € × 4,24 % = 53 € → 1.250 € + 53 € = 1.303 €. Die Rentenanpassung folgt der Lohnentwicklung; die Haltelinie sorgt dafür, dass das Rentenniveau bis 2031 nicht unter 48 % sinkt. Der aktuelle Rentenwert stieg dabei von 40,79 € auf 42,52 € je Entgeltpunkt.",
  "src": "Netz: Deutsche Rentenversicherung, Rentenanpassung 2026"
 },
 {
  "id": "f0cd0a0d78f3",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 4,
  "q": "Neben der Sozialversicherung gibt es private Versicherungen (Individualversicherungen). Ordnen Sie dem Schaden die Versicherung zu, die ihn übernimmt.",
  "paare": [
   [
    "Sie beschädigen mit Ihrem Auto beim Ausparken ein fremdes Fahrzeug",
    "Kfz-Haftpflichtversicherung (Pflichtversicherung)"
   ],
   [
    "Sie stoßen in der Wohnung eines Freundes versehentlich dessen Fernseher um",
    "Private Haftpflichtversicherung"
   ],
   [
    "Sie können wegen eines Rückenleidens dauerhaft nicht mehr als Mechatroniker arbeiten",
    "Berufsunfähigkeitsversicherung"
   ],
   [
    "In Ihre Wohnung wird eingebrochen und Ihr Laptop gestohlen",
    "Hausratversicherung"
   ]
  ],
  "ablenker": [
   "Gesetzliche Unfallversicherung",
   "Teilkaskoversicherung"
  ],
  "explain": "Individualversicherungen sind freiwillig – außer der Kfz-Haftpflicht, die für jedes zugelassene Fahrzeug Pflicht ist. Der Beitrag richtet sich nach dem Risiko, nicht nach dem Einkommen. Die gesetzliche Unfallversicherung zahlt nur bei Arbeits- und Wegeunfällen; die Teilkasko ersetzt Schäden am eigenen Auto (z. B. Diebstahl des Fahrzeugs).",
  "src": "FW (Lehrplan Politik und Gesellschaft 10.3.2)"
 },
 {
  "id": "d829a9dc5cf6",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie kommt die Bundeskanzlerin bzw. der Bundeskanzler ins Amt?",
  "opts": [
   "Das Volk wählt sie bzw. ihn bei der Bundestagswahl direkt mit einer eigenen dritten Stimme",
   "Der Bundespräsident ernennt die Vorsitzende bzw. den Vorsitzenden der stärksten Partei ohne Wahl",
   "Der Bundestag wählt sie bzw. ihn auf Vorschlag des Bundespräsidenten mit der Mehrheit seiner Mitglieder",
   "Die Bundesversammlung wählt sie bzw. ihn gemeinsam mit dem Bundespräsidenten für 5 Jahre"
  ],
  "correct": 2,
  "explain": "Art. 63 GG: Der Bundestag wählt den Kanzler ohne Aussprache auf Vorschlag des Bundespräsidenten; nötig ist die Mehrheit der Mitglieder (Kanzlermehrheit). Die Bürger bestimmen den Kanzler also nur indirekt über die Bundestagswahl. Die Bundesversammlung wählt nur den Bundespräsidenten.",
  "src": "FW (GG Art. 63)"
 },
 {
  "id": "8b46a3111245",
  "cat": "WiSo",
  "level": 2,
  "typ": "zuordnung",
  "pkt": 5,
  "q": "Ordnen Sie zu, wer das jeweilige Amt wählt.",
  "paare": [
   [
    "Bundespräsident",
    "Bundesversammlung"
   ],
   [
    "Bundeskanzler",
    "Bundestag"
   ],
   [
    "Bayerischer Ministerpräsident",
    "Bayerischer Landtag"
   ],
   [
    "Erster Bürgermeister einer Gemeinde",
    "Die wahlberechtigten Bürger der Gemeinde direkt"
   ],
   [
    "Landrat",
    "Die wahlberechtigten Bürger des Landkreises direkt"
   ]
  ],
  "ablenker": [
   "Bundesrat"
  ],
  "explain": "Auf Bundes- und Landesebene werden Regierungschefs vom Parlament gewählt (parlamentarisches Regierungssystem). In Bayern werden Bürgermeister und Landräte dagegen direkt von den Bürgern gewählt, für 6 Jahre. Die Bundesversammlung besteht aus den Bundestagsabgeordneten und ebenso vielen Vertretern der Länder.",
  "src": "FW"
 },
 {
  "id": "2b1333250db3",
  "cat": "WiSo",
  "level": 1,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Sie sind am Wahltag auf Montage und wählen per Brief. Bringen Sie die Schritte der Briefwahl in die richtige Reihenfolge.",
  "schritte": [
   "Wahlbenachrichtigung erhalten: Sie stehen im Wählerverzeichnis",
   "Wahlschein mit Briefwahlunterlagen bei der Gemeinde beantragen",
   "Unterlagen (Wahlschein, Stimmzettel, Umschläge) per Post oder im Rathaus erhalten",
   "Stimmzettel allein ausfüllen, in den Stimmzettelumschlag stecken und die Versicherung an Eides statt unterschreiben",
   "Wahlbrief so rechtzeitig abschicken, dass er spätestens am Wahltag um 18 Uhr bei der angegebenen Stelle ist",
   "Am Wahltag prüft der Briefwahlvorstand die Wahlbriefe und zählt die Stimmen aus"
  ],
  "explain": "Die Briefwahl muss beantragt werden, ein Grund ist nicht nötig. Mit der Versicherung an Eides statt auf dem Wahlschein bestätigen Sie, dass Sie den Stimmzettel persönlich (geheim) ausgefüllt haben. Kommt der Wahlbrief nach 18 Uhr an, zählt die Stimme nicht.",
  "src": "FW"
 },
 {
  "id": "11fa11b7c9fc",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei der Gemeinderatswahl in Bayern sind 20 Sitze zu vergeben, jede Liste hat 20 Bewerber. Sie kreuzen Liste A an und geben zusätzlich zwei Bewerbern der Liste B je 3 Stimmen. Was geschieht mit Ihren übrigen Stimmen?",
  "opts": [
   "Der Stimmzettel ist ungültig, weil man ein Listenkreuz nicht mit Einzelstimmen kombinieren darf",
   "Die übrigen 14 Stimmen verfallen, weil das Listenkreuz neben Einzelstimmen nicht mehr zählt",
   "Die übrigen 14 Stimmen erhalten die Bewerber der Liste A der Reihe nach von oben, je eine Stimme",
   "Alle 20 Stimmen gehen an Liste A, die Einzelstimmen für Liste B werden nicht gewertet"
  ],
  "correct": 2,
  "explain": "Listenkreuz und Einzelstimmen dürfen kombiniert werden. Die Einzelstimmen (2 × 3 = 6) zählen zuerst; die restlichen 20 − 6 = 14 Stimmen gehen an die Bewerber der angekreuzten Liste A in der Reihenfolge des Stimmzettels, je eine Stimme. Ungültig wird der Stimmzettel z. B., wenn man mehr Stimmen vergibt, als Sitze zu vergeben sind.",
  "src": "Netz: Gemeinde-Infoblätter Kommunalwahl Bayern 2026"
 },
 {
  "id": "e1224a98bbcb",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aufgaben hat der Erste Bürgermeister in einer bayerischen Gemeinde?",
  "opts": [
   "Er beschließt allein den Haushalt und die Bebauungspläne der Gemeinde, der Gemeinderat darf dazu nur beraten",
   "Er leitet die Sitzungen des Gemeinderats, vollzieht dessen Beschlüsse und vertritt die Gemeinde nach außen",
   "Er wird vom Landrat ernannt und überwacht als Beamter des Freistaats die Arbeit des Gemeinderats",
   "Er ist nur Ehrenvorsitzender ohne Stimmrecht und darf an den Sitzungen des Gemeinderats nur zuhören"
  ],
  "correct": 1,
  "explain": "Nach der Bayerischen Gemeindeordnung sind Gemeinderat und Erster Bürgermeister die Hauptorgane. Der Gemeinderat beschließt (z. B. Haushalt, Bebauungspläne). Der direkt gewählte Bürgermeister leitet die Sitzungen mit eigenem Stimmrecht, führt die Beschlüsse aus, erledigt die laufenden Geschäfte, leitet die Verwaltung und vertritt die Gemeinde nach außen.",
  "src": "FW (Gemeindeordnung Bayern)"
 },
 {
  "id": "81fdd2543bca",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Aussage beschreibt das Subsidiaritätsprinzip im Staatsaufbau (Gemeinde – Land – Bund – EU) richtig?",
  "opts": [
   "Aufgaben soll möglichst der Bund erledigen, weil einheitliche Regeln für alle Bürger gerechter sind als örtliche Lösungen",
   "Wer einer Gemeinde eine Aufgabe überträgt, muss ihr auch das nötige Geld dafür zur Verfügung stellen",
   "Gemeinden dürfen nur Aufgaben übernehmen, die ihnen der Freistaat vorher ausdrücklich per Gesetz zugewiesen hat",
   "Aufgaben soll möglichst die kleinste, bürgernahe Ebene erledigen; die höhere Ebene hilft erst, wenn die untere überfordert ist"
  ],
  "correct": 3,
  "explain": "Subsidiarität heißt: Was die kleinere Einheit (Familie, Gemeinde, Land) selbst leisten kann, soll sie selbst regeln; die größere Einheit greift nur unterstützend ein. Das stärkt die kommunale Selbstverwaltung. „Wer bestellt, bezahlt“ ist dagegen das Konnexitätsprinzip.",
  "src": "FW (Lehrplan Politik und Gesellschaft 11.2.1)"
 },
 {
  "id": "8bb14d25cd35",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "bild": "wiso-konjunkturzyklus.svg",
  "q": "Was zeigen in der Abbildung die gestrichelte Linie und die Punkte A und B?",
  "opts": [
   "Gestrichelt: Inflationsrate; A: Beginn der Hochkonjunktur; B: Beginn des Aufschwungs",
   "Gestrichelt: Arbeitslosenquote; A: oberer Wendepunkt; B: unterer Wendepunkt",
   "Gestrichelt: langfristiger Wachstumstrend; A: oberer Wendepunkt; B: unterer Wendepunkt",
   "Gestrichelt: langfristiger Wachstumstrend; A: unterer Wendepunkt; B: oberer Wendepunkt"
  ],
  "correct": 3,
  "explain": "Die Trendlinie zeigt das durchschnittliche, langfristige Wachstum. Die tatsächliche Entwicklung schwankt darum. A ist der Tiefpunkt (unterer Wendepunkt), ab dem es wieder aufwärts geht; B ist der Höhepunkt (oberer Wendepunkt), ab dem der Abschwung beginnt.",
  "src": "Eigenes Diagramm"
 },
 {
  "id": "a53c940ae3f0",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie ermittelt das Statistische Bundesamt die Inflationsrate?",
  "opts": [
   "Es vergleicht die Preise eines festen Warenkorbs typischer Waren und Dienstleistungen mit dem Vorjahreszeitraum",
   "Es teilt die umlaufende Bargeldmenge durch die Zahl der Einwohner und vergleicht das Ergebnis mit dem Vorjahr",
   "Es erfasst nur die Preise für Kraftstoff, Strom und Heizöl, weil diese für alle Haushalte am wichtigsten sind",
   "Es übernimmt den Leitzins der EZB, weil die Inflationsrate per Definition immer genau dem Leitzins entspricht"
  ],
  "correct": 0,
  "explain": "Grundlage ist der Verbraucherpreisindex (VPI): Mehrere hundert Waren und Dienstleistungen werden nach ihrem Anteil an den Ausgaben der Haushalte gewichtet (Wägungsschema). Die Inflationsrate ist die Veränderung des VPI gegenüber dem Vorjahresmonat bzw. Vorjahr. Die „gefühlte“ Inflation kann abweichen – Pendler spüren z. B. Kraftstoffpreise stärker.",
  "src": "FW / Netz: Destatis"
 },
 {
  "id": "833e8b2aad4b",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Bundesregierung hat im Oktober 2026 ihre Herbstprojektion vorgelegt. Welche Erwartung für das reale BIP 2026 nennt sie?",
  "opts": [
   "Einen Rückgang um etwa 1,3 %, das dritte Minusjahr in Folge",
   "Ein Wachstum von etwa 1,3 %, nach nur 0,2 % im Jahr 2025",
   "Ein Wachstum von etwa 4 %, so stark wie seit 1990 nicht mehr",
   "Eine Stagnation bei 0,0 %, weil die Inflation alles aufzehrt"
  ],
  "correct": 1,
  "explain": "Laut Herbstprojektion vom 08.10.2026 soll das reale BIP 2026 um etwa 1,3 % wachsen – deutlich mehr als im Frühjahr erwartet und nach +0,2 % im Jahr 2025. Eine Projektion ist eine Prognose, kein endgültiges Ergebnis; die Ist-Zahl für 2026 veröffentlicht das Statistische Bundesamt im Januar 2027.",
  "src": "Netz: Bundesregierung, Herbstprojektion 2026 (08.10.2026)"
 }
];
export const SITUATIONEN = {
 "airbag-sitz": {
  "titel": "Kundenauftrag: Airbag-Kontrollleuchte nach Sitzausbau",
  "text": "Opel Astra K, Baujahr 2018, Front-, Seiten- und Kopfairbags, Gurtstraffer vorn.\nKunde beanstandet: „Seit ihr den Fahrersitz für die Teppichreinigung ausgebaut habt, leuchtet die Airbag-Leuchte.“\nFehlerspeicher: Zündkreis Seitenairbag Fahrer – Widerstand zu hoch.",
  "cat": "Airbag"
 },
 "airbag-wickelfeder": {
  "titel": "Kundenauftrag: Airbag-Leuchte an und Hupe ohne Funktion nach Lenkradtausch",
  "text": "Skoda Octavia III Combi, Baujahr 2016, Multifunktionslenkrad, Fahrerairbag zweistufig, Beifahrer-, Seiten- und Kopfairbags, Gurtstraffer vorn.\nKunde beanstandet: „Seit eine andere Werkstatt mein Lenkrad gegen ein Original-Lederlenkrad getauscht hat, leuchtet die Airbag-Leuchte, die Hupe geht nicht und die Radiotasten am Lenkrad sind ohne Funktion.“\nFehlerspeicher: Zündkreis Fahrerairbag Stufe 1 – Widerstand zu hoch; Zündkreis Fahrerairbag Stufe 2 – Widerstand zu hoch.\nSchaltplan-Auszug: siehe Bild (Pinbelegung als Beispiel).",
  "cat": "Airbag"
 },
 "epb-golf": {
  "titel": "Kundenauftrag: Bremsen hinten und Bremsflüssigkeit",
  "text": "VW Golf 8 1.5 TSI, Baujahr 2021, elektrische Parkbremse mit Stellmotoren am Bremssattel, ESP.\nKunde beanstandet: „Hinten schleift es beim Bremsen, und die Inspektion steht an.“\nBei der Prüfung: Bremsbeläge hinten 2 mm, Bremsflüssigkeit 3,8 % Wasser.",
  "cat": "Bremse"
 },
 "esp-focus": {
  "titel": "Kundenauftrag: ABS- und ESP-Leuchte nach Radlagerwechsel",
  "text": "Ford Focus 1.5 EcoBlue, Baujahr 2019, ABS/ESP mit aktiven Raddrehzahlsensoren (Magnetring im Radlager).\nKunde beanstandet: „Seit eine andere Werkstatt vor zwei Wochen das Radlager vorn rechts erneuert hat, gehen nach ein paar Kilometern die ABS- und die ESP-Leuchte an.“",
  "cat": "Bremse"
 },
 "cr-octavia": {
  "titel": "Kundenauftrag: Ruckeln und Leistungsverlust",
  "text": "Skoda Octavia 2.0 TDI, Baujahr 2020, Common-Rail mit Magnetventil-Injektoren, Zweisteller-Regelung, SCR-Katalysator.\nKunde beanstandet: „Der Motor ruckelt im Leerlauf, nimmt schlecht Gas an und die Motorkontrollleuchte ist an.“",
  "cat": "Diesel"
 },
 "scr-peugeot": {
  "titel": "Kundenauftrag: AdBlue-Störung mit drohender Startsperre",
  "text": "Peugeot 308 1.5 BlueHDi, Baujahr 2021, Common-Rail-Diesel mit Oxi-Kat, Partikelfilter und SCR-System (AdBlue); 64.000 km, überwiegend Kurzstrecke. Anlage und Schaltplan vereinfacht, Pins und Sicherungen sind Beispiele.\nKunde beanstandet: „Im Display steht sinngemäß ‚AdBlue-Störung – Start in 600 km nicht möglich‘. Ich habe letzte Woche AdBlue nachgefüllt, die Meldung ist trotzdem geblieben.“",
  "cat": "Diesel"
 },
 "klima-bmw": {
  "titel": "Kundenauftrag: Klimaanlage kühlt kaum",
  "text": "BMW 320d, Baujahr 2019, Kältemittel R1234yf, extern geregelter Verdichter.\nKunde beanstandet: „Die Klimaanlage bläst nur noch lauwarm, und manchmal riecht es muffig.“\nAußentemperatur 25 °C.",
  "cat": "Klima"
 },
 "klima-skoda": {
  "titel": "Kundenauftrag: Klimaanlage bläst nur warm (Elektrik)",
  "text": "Škoda Octavia Combi 1.5 TSI, Baujahr 2020, Kältemittel R1234yf, extern geregelter Verdichter ohne Magnetkupplung, Klimaautomatik.\nKunde beanstandet: „Seit ein paar Tagen kommt nur noch warme Luft aus den Düsen, obwohl AC eingeschaltet ist.“\nAußentemperatur 20 °C. Schaltplan-Auszug, Messwerte und Oszillogramm stehen in den Aufgaben (Pinbelegung = Beispiel).",
  "cat": "Klima"
 },
 "wiso-geselle": {
  "titel": "Situation: Start als Geselle",
  "text": "Du hast deine Gesellenprüfung bestanden und wirst von deinem Ausbildungsbetrieb, einem Autohaus in Bayreuth (Mitglied der Kfz-Innung, tarifgebunden), als Kfz-Mechatroniker übernommen. Im März 2026 waren Kommunalwahlen in Bayern.",
  "cat": "WiSo"
 },
 "wiso-betrieb": {
  "titel": "Situation: Betriebsversammlung im Autohaus",
  "text": "Sie arbeiten als Kfz-Mechatroniker in einem Autohaus mit Werkstatt in Kulmbach (60 Beschäftigte, tarifgebunden). Im Frühjahr 2026 wurde der Betriebsrat neu gewählt. Auf der Betriebsversammlung im Oktober 2026 berichtet die Geschäftsführung: Der Neuwagenverkauf ist schwach, die Werkstatt ist gut ausgelastet, Energie und Kraftstoff sind deutlich teurer geworden.\nIn der Pause diskutieren die Kollegen über Inflation, die nächste Landtagswahl und ein Volksbegehren.",
  "cat": "WiSo"
 }
};
