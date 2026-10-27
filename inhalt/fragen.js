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
  "id": "14f94347fbd4",
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
   "Sie leuchtet kurz auf und erlischt; Dauerleuchten heißt: Wartungsintervall der Airbags fällig, Schutz bleibt voll erhalten"
  ],
  "correct": 1,
  "explain": "Die Leuchte geht beim Einschalten an (Selbsttest, Lampentest) und erlischt nach wenigen Sekunden, wenn kein Fehler erkannt wurde. Dauerleuchten (oder Blinken) heißt: Fehler erkannt, Teile ggf. abgeschaltet. Beim Einschalten prüft das Steuergerät Zündkreise, Sensoren und Energiereserve. Bleibt die Leuchte an, ist ein Fehler gespeichert – das Fahrzeug ist nicht mehr voll geschützt und muss diagnostiziert werden.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de), FW"
 },
 {
  "id": "4f5f65b9685d",
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
   "Zwischen den beiden Zündkreisleitungen besteht ein Kurzschluss",
   "Die Bordnetzspannung ist zu hoch"
  ],
  "correct": 0,
  "explain": "Das Steuergerät überwacht den Widerstand jedes Zündkreises ständig mit einem sehr kleinen Prüfstrom. „Zu hoch“ deutet auf eine Unterbrechung, einen lockeren Stecker oder korrodierte Kontakte hin. Ein Kurzschluss zwischen den Leitungen würde als „Widerstand zu niedrig“ gemeldet.",
  "src": "FW"
 },
 {
  "id": "02ca9497a1b1",
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
   "Sich elektrostatisch entladen (z. B. Fahrzeugmasse berühren)",
   "Steckverbindung des Airbag-Bauteils trennen",
   "Ausgebaute Airbag-Einheit mit der Polsterseite nach oben ablegen"
  ],
  "explain": "Erst stromlos machen, dann warten, bis die Energiereserve im Steuergerät entladen ist. Die Wartezeit ist je nach Fahrzeug sehr verschieden – sie steht im Reparaturleitfaden. Die elektrostatische Entladung schützt die Zündpille vor einem Funken über den Körper.",
  "src": "Netz: Recherche 3.4/3.6, FW"
 },
 {
  "id": "79f440813117",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 5,
  "q": "Warum dürfen Sie nach dem Abklemmen der Batterie nicht sofort am Airbag-System arbeiten?",
  "opts": [
   "Die Zündpille ist durch den Prüfstrom des Steuergeräts noch heiß; erst nach dem Abkühlen kann sie nicht mehr zünden",
   "Das Steuergerät speichert noch die Crashdaten dauerhaft ab; vorher gehen sie beim Arbeiten verloren",
   "Die Energiereserve (Kondensator) im Steuergerät kann die Zündpille noch bestromen; erst nach der Wartezeit nach Herstellerangabe ist sie entladen",
   "Der Fehlerspeicher löscht sich erst nach einer Wartezeit; sonst wird beim Wiederanklemmen ein Fehler eingetragen"
  ],
  "correct": 2,
  "explain": "Das Steuergerät besitzt eine Energiereserve (Kondensator), die die Zündpille auch ohne Batterie noch bestromen kann – der Airbag könnte auslösen. Erst nach der vom Hersteller angegebenen Wartezeit ist sie entladen. Die Energiereserve ist gewollt: Reißt bei einem Unfall die Batterieleitung ab, kann das Steuergerät trotzdem noch zünden. Bei Arbeiten in der Werkstatt ist genau das die Gefahr.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de)"
 },
 {
  "id": "d82a2d06a0ae",
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
   "Die Steckverbindung auf Korrosion und Verrastung sichtprüfen",
   "Die Zündkreis-Messwerte im Diagnosetester ablesen"
  ],
  "correct": 0,
  "explain": "Ein Multimeter schickt beim Widerstandsmessen einen Prüfstrom durch das Bauteil. Der kann die Zündpille auslösen. Den Zündkreiswiderstand liest man deshalb über den Tester aus oder misst mit Prüfadapter bzw. Ersatzwiderstand.",
  "src": "Netz: Recherche 3.4 (kfz-tech.de)"
 },
 {
  "id": "078b2d0a677e",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 7,
  "q": "Welche Antwort nennt vier fachgerechte Schritte bzw. Hilfsmittel, um den Zündkreis des Seitenairbags zu prüfen?",
  "opts": [
   "Messwerte mit dem Diagnosetester auslesen; Widerstand der Zündpille direkt mit dem Multimeter messen; Stecker unter dem Sitz prüfen; Leitung bei abgesteckten Bauteilen auf Durchgang prüfen",
   "Messwerte mit dem Diagnosetester auslesen; Prüfadapter bzw. Ersatzwiderstand anschließen; Stecker unter dem Sitz prüfen; Zündkreis bei eingesteckter Airbag-Einheit mit der Prüflampe prüfen",
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
  "explain": "Alle Widerstände liegen in Reihe: R = 2,2 Ω + 2 × 0,1 Ω + 0,3 Ω = 2,7 Ω. Ein lockerer Stecker erhöht den Übergangswiderstand – deshalb meldet das Steuergerät dann „Widerstand zu hoch“.",
  "src": "FW"
 },
 {
  "id": "84b6eada458d",
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
   "Beim Abziehen des Steckers legt sie die Zündkreisleitung an Masse, damit das Steuergerät den offenen Stecker erkennt",
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
  "id": "2ac39972e75b",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "airbag-sitz",
  "nr": 12,
  "q": "Unter welcher Bedingung löst das Airbag-Steuergerät einen Airbag aus?",
  "opts": [
   "Wenn mindestens zwei Sensorsignale den Aufprall übereinstimmend (plausibel) melden",
   "Sobald ein einzelner Sensor eine Verzögerung meldet",
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
  "id": "db022e85a65a",
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
   "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; Batterie ersetzen, weil der Zündstrom sie tiefentladen hat",
   "Ausgelöste Airbag-Einheiten und Gurtstraffer ersetzen; Steuergerät nach Herstellerangabe ersetzen; Sensoren, Wickelfeder, Gurte und Halterungen prüfen bzw. ersetzen"
  ],
  "correct": 3,
  "explain": "Alle ausgelösten Airbag-Einheiten und Gurtstraffer werden ersetzt; betroffene Sensoren, Wickelfeder, Gurte und Halterungen nach Herstellervorgabe prüfen bzw. ersetzen. Ausgelöste pyrotechnische Teile sind verbraucht. Das Steuergerät hat den Crash gespeichert und ist nach Herstellervorgabe zu tauschen; danach wird das neue Gerät codiert.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "17bb910c3c8f",
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
   "Im Altmetall-Container der Werkstatt",
   "In Wasser einweichen und danach in den Hausmüll"
  ],
  "correct": 0,
  "explain": "Eine nicht ausgelöste Einheit enthält noch die Treibladung und bleibt ein pyrotechnischer Gegenstand. Vor der Verschrottung eines Fahrzeugs werden die Einheiten fachgerecht ausgelöst.",
  "src": "Netz: Recherche 3.4/3.6"
 },
 {
  "id": "2461991073a6",
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
   "Stecker einrasten und verriegeln, Leitung zug- und scheuerfrei verlegen; Steuergerät neu codieren, weil der Sitzausbau die Codierung löscht; Fehlerspeicher auslesen und löschen; Kontrollleuchte kontrollieren"
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
  "id": "675681471ab6",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung von Aufbau und einstufiger bzw. zweistufiger Ausführung eines pyrotechnischen Gasgenerators ist richtig?",
  "opts": [
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: zwei Ladungen, die immer gleichzeitig zünden, damit der Airbag schneller voll ist",
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: zwei getrennt zündbare Ladungen, je nach Unfallschwere nur Stufe 1 oder beide zeitversetzt",
   "Gehäuse mit Druckluftflasche und Magnetventil; das Steuergerät öffnet das Ventil, die Luft strömt in den Luftsack; einstufig: ein Ventil; zweistufig: zwei Ventile, je nach Unfallschwere eines oder beide",
   "Gehäuse mit Zündpille, Treibladung und Filter; Zündpille zündet die Treibladung, das Gas strömt in den Luftsack; einstufig: eine Ladung; zweistufig: die zweite Ladung füllt den Airbag nach dem Entleeren für einen Folgeaufprall neu"
  ],
  "correct": 1,
  "explain": "Aufbau: Gehäuse mit Zündpille, Treibladung (fester Treibstoff) und Filter bzw. Kühlsieb. Die bestromte Zündpille zündet die Treibladung, das Gas strömt in den Luftsack. Einstufig: eine Treibladung, immer gleiche Aufblaswirkung. Zweistufig: zwei getrennt zündbare Ladungen – je nach Unfallschwere und Gurtstatus zündet nur Stufe 1 oder beide zeitversetzt. Mit zwei Stufen kann das Steuergerät den Airbag weicher oder härter füllen. Auch eine nicht gezündete zweite Stufe ist nach einem Unfall noch scharf – Einheit trotzdem als pyrotechnischen Gegenstand behandeln.",
  "src": "FW"
 },
 {
  "id": "168fc60f96ad",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Was kennzeichnet einen Hybrid-Gasgenerator?",
  "opts": [
   "Ein unter hohem Druck gespeichertes Gas wird durch eine pyrotechnische Ladung freigegeben und erwärmt",
   "Das Gas wird ausschließlich von einer elektrischen Pumpe erzeugt",
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
  "id": "60d4f5070792",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Eine Kundin möchte eine rückwärtsgerichtete Babyschale auf dem Beifahrersitz befestigen. Was müssen Sie ihr erklären?",
  "opts": [
   "Beifahrerairbag eingeschaltet lassen, weil er die Babyschale zusätzlich abpolstert; den Sitz ganz nach hinten schieben genügt",
   "Beifahrerairbag abschalten, weil der sich entfaltende Airbag die Babyschale mit großer Wucht trifft; danach kann er dauerhaft aus bleiben, Erwachsene schützt der Gurt",
   "Beifahrerairbag nach Herstellerangabe abschalten, weil er die Babyschale mit großer Wucht trifft; Anzeige „Beifahrerairbag aus“ kontrollieren und danach wieder einschalten",
   "Beifahrerairbag abschalten, das geht nur in der Werkstatt durch Abziehen des Airbag-Steckers; danach wieder anstecken lassen"
  ],
  "correct": 2,
  "explain": "Der Beifahrerairbag muss abgeschaltet sein (Schlüsselschalter bzw. Menü nach Herstellerangabe), weil der sich entfaltende Airbag die Babyschale mit großer Wucht trifft. Anzeige „Beifahrerairbag aus“ kontrollieren und nach dem Entfernen der Babyschale wieder einschalten. Die Babyschale sitzt sehr nah an der Instrumententafel. Wird der Airbag danach nicht wieder eingeschaltet, fehlt einem erwachsenen Beifahrer der Schutz.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "858c5aad72b6",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Beim Einbau einer neuen Wickelfeder müssen die Räder geradeaus stehen und die Wickelfeder in Mittelstellung sein. Welche Begründung und welche Folge eines Fehlers sind richtig?",
  "opts": [
   "Die Wickelfeder ist die Rückstellfeder des Lenkrads; nur aus der Mittelstellung läuft das Lenkrad nach Kurven zurück; bei Fehler zieht das Fahrzeug einseitig",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler reißt das Band – Fahrerairbag, Hupe und Lenkradtasten ohne Funktion",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler löst der Fahrerairbag beim Lenken aus",
   "Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen; nur aus der Mittelstellung reicht es für vollen Lenkeinschlag; bei Fehler blockiert das Lenkschloss und der Motor startet nicht"
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
  "id": "69709d80d794",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wozu dient eine aktive Motorhaube?",
  "opts": [
   "Sie hebt sich bei einem erkannten Fußgängeraufprall hinten an, damit mehr Abstand zu harten Motorteilen entsteht",
   "Sie öffnet sich bei Überhitzung des Motors",
   "Sie senkt den Luftwiderstand bei hoher Geschwindigkeit",
   "Sie verriegelt sich beim Unfall, damit keine Teile herausfliegen"
  ],
  "correct": 0,
  "explain": "Sensoren im Stoßfänger erkennen den Fußgängeraufprall, Aktuatoren (oft pyrotechnisch) heben die Haube an. Der Kopf des Fußgängers trifft dann auf eine nachgiebige Fläche.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "a8d073da4a6b",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Wie erfassen Upfront-Sensoren und Seitenaufprallsensoren einen Aufprall, und wie nutzt das Steuergerät die Signale?",
  "opts": [
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, Drucksensoren in der Tür den Druckanstieg; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung, Drucksensoren in der Tür den Druckanstieg; das Steuergerät löst aus, sobald ein einzelner Sensor anspricht",
   "Upfront-Sensoren messen per Radar den Abstand zum Hindernis; Seitensensoren in B-Säule bzw. Schweller die Querbeschleunigung; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität",
   "Upfront-Sensoren messen vorn die Verzögerung; Seitensensoren messen die Längsverzögerung, Drucksensoren den Gasdruck im Seitenairbag; das Steuergerät prüft die Signale mit seinem eigenen Sensor auf Plausibilität"
  ],
  "correct": 0,
  "explain": "Upfront-Sensoren vorn messen die Verzögerung mit einem Beschleunigungssensor und melden einen Frontaufprall sehr früh. Seitenaufprallsensoren in B-Säule bzw. Schweller messen die Querbeschleunigung, Drucksensoren in der Tür den schnellen Druckanstieg, wenn die Tür eingedrückt wird. Das Steuergerät vergleicht die Signale mit seinem eigenen Beschleunigungssensor (Plausibilität), bevor es auslöst. Beim Seitenaufprall ist die Knautschzone sehr kurz – deshalb sitzen die Sensoren direkt in der Seite, damit das Steuergerät schnell genug entscheiden kann.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "b5b7e5e3bc6a",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Sie bauen ein neues Airbag-Steuergerät ein. Was ist danach notwendig?",
  "opts": [
   "Es mit dem Diagnosetester auf die Fahrzeugausstattung codieren bzw. anlernen",
   "Nichts – es erkennt alle Airbags selbst",
   "Die Batterie 24 Stunden abgeklemmt lassen",
   "Jeden Zündkreis mit dem Multimeter anlernen"
  ],
  "correct": 0,
  "explain": "Das Steuergerät muss wissen, welche Airbags, Gurtstraffer und Sensoren verbaut sind. Danach Fehlerspeicher auslesen und die Kontrollleuchte prüfen.",
  "src": "Netz: Recherche 3.4"
 },
 {
  "id": "8fd0a570baed",
  "cat": "Airbag",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Für den Tausch der Wickelfeder muss das Lenkrad ab. Bringen Sie die Arbeitsschritte in die richtige Reihenfolge.",
  "schritte": [
   "Räder in Geradeausstellung bringen",
   "Zündung aus, Batterie abklemmen, Wartezeit nach Herstellerangabe abwarten",
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
  "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (3,3 Ω × 6,8 Ω) ÷ 10,1 Ω ≈ 2,22 Ω. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
  "src": "FW"
 },
 {
  "id": "bdda7a3e88ce",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie groß ist der Strom, der durch eine Zündpille mit 2 Ω fließen würde, wenn versehentlich die Bordnetzspannung von 12 V anliegt?",
  "opts": [
   "24 A",
   "0,17 A",
   "6 A",
   "0,6 A"
  ],
  "correct": 2,
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
  "id": "c1f4fa07cbe8",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Kunde fragt, ob die Airbags in seinem 15 Jahre alten Fahrzeug wegen des Alters getauscht werden müssen. Wie gehen Sie vor?",
  "opts": [
   "Airbags nach der gesetzlichen Altersgrenze von 10 Jahren grundsätzlich tauschen; Fehlerspeicher auslesen; Rückrufe nicht nötig, da sie verjährt sind",
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
  "id": "4eeb861b7701",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung von Aufgabe und Wirkungsweise des Gurtkraftbegrenzers ist richtig?",
  "opts": [
   "Zieht beim Aufprall das lose Gurtband straff; arbeitet mit einer Treibladung im Gurtschloss; muss nach der Auslösung ersetzt werden",
   "Begrenzt die Gurtkraft auf den Brustkorb; blockiert dazu das Gurtband vollständig, sobald eine bestimmte Kraft erreicht ist; der Insasse wird starr gehalten",
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
  "id": "7470a0527568",
  "cat": "Airbag",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Kunde ist beim Einparken langsam gegen einen Poller gefahren. Die Airbags haben nicht ausgelöst. Wie beurteilen Sie das?",
  "opts": [
   "Normal – die Verzögerung lag unter der Auslöseschwelle, der Gurt reicht als Schutz",
   "Fehler – Airbags müssen bei jedem Aufprall auslösen",
   "Fehler – die Airbags sind sicher dauerhaft abgeschaltet",
   "Normal – Airbags lösen nur bei einem Seitenaufprall aus"
  ],
  "correct": 0,
  "explain": "Frontairbags lösen erst bei einem deutlichen Aufprall aus (Richtwert: ab etwa 30 km/h, je nach Fahrzeug und Hindernis). Bei leichten Remplern würde der Airbag mehr schaden als nützen.",
  "src": "Netz: Recherche 3.6 (kfz-tech.de)"
 },
 {
  "id": "6d18d02aca06",
  "cat": "Airbag",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Nach einem Lenkradausbau funktionieren Hupe und Lenkradtasten nicht mehr und die Airbag-Leuchte ist an. Welches Bauteil ist am wahrscheinlichsten beschädigt?",
  "opts": [
   "Wickelfeder (Kontakteinheit)",
   "Upfront-Sensor",
   "Gurtstraffer",
   "Seitenaufprallsensor"
  ],
  "correct": 0,
  "explain": "Über die Wickelfeder laufen Fahrerairbag, Hupe und Lenkradtasten. Fallen alle zugleich aus, ist meist das Flachbandkabel gerissen – oft, weil das Lenkrad bei abgenommener Wickelfeder verdreht wurde.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "0fac7fe433ff",
  "cat": "Airbag",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Bei einer Inspektion fällt Ihnen auf, dass die Airbag-Kontrollleuchte beim Einschalten der Zündung gar nicht aufleuchtet. Wie ist der Befund zu beurteilen, und wie gehen Sie weiter vor?",
  "opts": [
   "In Ordnung: Ein fehlerfreies System zeigt keinen Selbsttest an; die Leuchte geht nur bei einem Fehler an; kein weiteres Vorgehen nötig",
   "Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde nicht gemeldet; Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument auslesen; Kunden über den Sicherheitsmangel informieren",
   "In Ordnung, wenn der Beifahrerairbag abgeschaltet ist; nur die Anzeige „Beifahrerairbag aus“ kontrollieren; Kunden nicht weiter informieren",
   "Fehler, aber ohne Einfluss auf die Sicherheit; die Airbags funktionieren trotzdem; Leuchte bei der nächsten Inspektion tauschen"
  ],
  "correct": 1,
  "explain": "Der Befund ist ein Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde dem Fahrer nicht gemeldet. Mögliche Ursachen sind Leuchte bzw. Anzeige im Kombiinstrument, Datenbus/Ansteuerung oder ein Steuergerät ohne Versorgung oder manipuliert. Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument auslesen und den Kunden informieren. Die Kontrollleuchte ist Teil der Sicherheitsfunktion. Leuchtet sie nie, kann der Fahrer einen Ausfall des Airbag-Systems nicht erkennen – das ist auch bei der Hauptuntersuchung ein Mangel.",
  "src": "FW"
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
  "id": "4a8ea725f94c",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "epb-golf",
  "nr": 3,
  "q": "Warum muss vor dem Wechsel der hinteren Bremsbeläge der Servicemodus der EPB mit dem Tester aktiviert werden?",
  "opts": [
   "Der Kolben wird über Getriebe und Spindel gehalten – nur der Stellmotor kann ihn zurückfahren, Gewalt würde Spindel oder Getriebe beschädigen",
   "Im Servicemodus wird die Bremsflüssigkeit aus dem Sattel abgepumpt, damit beim Zurückdrücken nichts überläuft",
   "Der Servicemodus schaltet nur die Kontrollleuchte ab, technisch ist er nicht nötig",
   "Ohne Servicemodus lassen sich die Raddrehzahlsensoren nicht ausbauen"
  ],
  "correct": 0,
  "explain": "Beim Motor-on-Caliper-Sattel drückt eine Spindel auf den Kolben. Der Servicemodus dreht die Spindel ganz zurück. Erst dann lässt sich der Kolben für die dickeren neuen Beläge zurückdrücken.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "283fc1d81db5",
  "cat": "Bremse",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 5,
  "situation": "epb-golf",
  "nr": 4,
  "q": "Bringen Sie die Arbeitsschritte für den Bremsbelagwechsel hinten am Fahrzeug mit EPB in die richtige Reihenfolge.",
  "schritte": [
   "Tester anschließen, Fehlerspeicher auslesen und Servicemodus der EPB aktivieren",
   "Fahrzeug anheben und Hinterrad abbauen",
   "Bremssattel lösen und sicher ablegen (nicht am Bremsschlauch hängen lassen)",
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
  "id": "1097733c08d1",
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
   "Sie nimmt Luft aus der Umgebung auf; dadurch schäumt sie; bei Erwärmung steigt der Bremsdruck unkontrolliert an",
   "Sie gibt Wasser an die Umgebung ab; dadurch dickt sie ein; Dichtungen quellen und die Bremskolben klemmen"
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
  "id": "401315cd5f20",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "epb-golf",
  "nr": 8,
  "q": "Das Prüfgerät zeigt bei der Bremsflüssigkeit 3,8 % Wasser an. Wie beurteilen Sie das Messergebnis?",
  "opts": [
   "Bremsflüssigkeit wechseln – der Wassergehalt liegt über ca. 3,5 %, der Siedepunkt ist unter den Nass-Siedepunkt gefallen",
   "In Ordnung – Bremsflüssigkeit ist erst ab ca. 10 % Wasser zu wechseln",
   "Es genügt, Bremsflüssigkeit bis zur MAX-Marke nachzufüllen",
   "Nur den Ausgleichsbehälter absaugen und neu füllen, die Leitungen bleiben unverändert"
  ],
  "correct": 0,
  "explain": "Der Nass-Siedepunkt ist der Siedepunkt bei ca. 3,5 % Wasser. Mit 3,8 % liegt die Flüssigkeit darüber, die Siedetemperatur ist also schon unter diese Grenze gefallen → kompletter Wechsel.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "da25aaaed0dd",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 9,
  "q": "Beim Wechsel der Bremsflüssigkeit müssen Sie die Bremsanlage entlüften. Welche Antwort beschreibt die Besonderheiten bei einem Fahrzeug mit ESP richtig?",
  "opts": [
   "Mit Befüll- und Entlüftungsgerät unter vorgeschriebenem Druck arbeiten; Ventile in Herstellerreihenfolge öffnen; ist Luft im Hydroaggregat, Ventile und Rückförderpumpe mit dem Tester ansteuern",
   "Mit Befüll- und Entlüftungsgerät unter möglichst hohem Druck arbeiten; alle Entlüfterventile gleichzeitig öffnen; das Hydroaggregat muss dabei nicht beachtet werden",
   "Ausgleichsbehälter vorher ganz leer saugen; Ventile in Herstellerreihenfolge öffnen; Luft im Hydroaggregat entweicht bei der nächsten Fahrt von selbst",
   "Bremsleitungen am Hydroaggregat abschrauben und es separat ausblasen; Ventile in Herstellerreihenfolge öffnen; Ausgleichsbehälter dabei leer laufen lassen"
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
  "id": "7b273231b5ef",
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
   "Aktiv: Hall-Prinzip, mit Versorgungsspannung, Rechtecksignal erst ab ca. 20 km/h; passiv: induktiv, mit Versorgungsspannung, Sinussignal bis zum Stillstand",
   "Aktiv: Hall- oder magnetoresistiv, mit Versorgungsspannung, Rechtecksignal bis fast zum Stillstand; passiv: induktiv, ohne Versorgung, Sinus, Amplitude und Frequenz steigen mit der Drehzahl"
  ],
  "correct": 3,
  "explain": "Aktiver Sensor: Hall- oder magnetoresistives Prinzip, braucht eine Versorgungsspannung vom Steuergerät, liefert ein Rechtecksignal und erkennt auch sehr kleine Drehzahlen bis fast zum Stillstand. Passiver Sensor: induktiv, braucht keine Versorgung, erzeugt eine sinusförmige Wechselspannung; Amplitude und Frequenz steigen mit der Drehzahl, bei sehr kleiner Drehzahl gibt es kein auswertbares Signal. Aktive Sensoren tasten meist einen Magnetring (Multipolring) im Radlager ab, passive ein Zahnrad aus Stahl.",
  "src": "FW"
 },
 {
  "id": "0cda86f6ee45",
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
   "Rechtecksignal mit steigender Amplitude bei gleicher Frequenz"
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
  "id": "d278f6bf33fd",
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
   "1.009 N"
  ],
  "correct": 1,
  "explain": "Der Druck ist überall gleich, die Kräfte verhalten sich wie die Flächen: F₂ = F₁ × (d₂ ÷ d₁)² = 2500 N × (57 ÷ 23)² = 2500 N × 6,14 ≈ 15 354 N. Typischer Fehler: nur mit dem Durchmesserverhältnis statt mit dem Quadrat rechnen (2500 N × 2,48 ≈ 6196 N).",
  "src": "FW"
 },
 {
  "id": "46e02401155e",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 16,
  "q": "Der Kunde erwähnt, dass im Frühjahr eine Achsvermessung gemacht wurde. Welche Antwort nennt drei Anlässe, nach denen der Lenkwinkelsensor neu kalibriert werden muss?",
  "opts": [
   "Nach einer Spur- bzw. Achseinstellung; nach Arbeiten an der Lenkung (z. B. Spurstange); je nach Hersteller nach Abklemmen der Batterie oder Tausch des Sensors",
   "Nach einer Spur- bzw. Achseinstellung; nach dem Wechsel der Bremsscheiben; nach dem Tausch eines Raddrehzahlsensors",
   "Nach einem Reifenwechsel auf gleiche Größe; nach einem Bremsflüssigkeitswechsel; nach Arbeiten an der Lenkung (z. B. Spurstange)",
   "Nach einem Motorölwechsel; nach dem Tausch der Bremsbeläge; je nach Hersteller nach Abklemmen der Batterie"
  ],
  "correct": 0,
  "explain": "Neu kalibrieren nach einer Spur- bzw. Achseinstellung, nach Arbeiten an der Lenkung (z. B. Tausch von Lenkgetriebe oder Spurstange) und je nach Hersteller nach dem Abklemmen der Batterie bzw. Tausch des Sensors oder Steuergeräts. Steht die Nulllage des Sensors nicht auf Geradeausfahrt, rechnet das ESP mit einem falschen Fahrerwunsch und kann falsch eingreifen.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "ed194f5240fc",
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
   "Bremskraft an jedem Rad; Ungleichmäßigkeit links/rechts je Achse; Siedepunkt der Bremsflüssigkeit; Wirkung der Feststellbremse"
  ],
  "correct": 2,
  "explain": "Gemessen bzw. bewertet werden die Bremskraft an jedem Rad, die Ungleichmäßigkeit der Bremskräfte links/rechts je Achse, die Abbremsung des Fahrzeugs aus der Summe der Bremskräfte und der Masse, die Wirkung der Feststellbremse (EPB) und die Bremskraftschwankung (Unrundheit) einer Radbremse. Bremsweg, Belagdicke oder Siedepunkt misst der Rollenprüfstand nicht. Die Grenzwerte für Mindestabbremsung, Ungleichmäßigkeit und Feststellbremse stehen im Tabellenbuch – dort nachschlagen, nicht aus dem Kopf.",
  "src": "FW, TB (Grenzwerte)"
 },
 {
  "id": "2a7bbdbb4ab9",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige Abschlussarbeiten, bevor Sie den Golf an den Kunden übergeben?",
  "opts": [
   "EPB mehrmals schließen und lösen; Fehlerspeicher auslesen und löschen; Bremsflüssigkeit als Reserve über MAX auffüllen; Probefahrt mit Bremsprobe",
   "Servicemodus der EPB aktiv lassen, damit sich die Beläge setzen; Fehlerspeicher auslesen und löschen; Wechselaufkleber anbringen; Probefahrt mit Bremsprobe",
   "EPB mehrmals schließen und lösen; Batterie kurz abklemmen, damit die EPB ihre Werte neu lernt; Wechselaufkleber anbringen; Probefahrt mit Bremsprobe",
   "EPB-Grundeinstellung kontrollieren, mehrmals schließen und lösen; Fehlerspeicher auslesen und löschen; Flüssigkeitsstand prüfen, Wechselaufkleber anbringen; Probefahrt, Beläge einbremsen"
  ],
  "correct": 3,
  "explain": "Abschlussarbeiten: Grundeinstellung der EPB kontrollieren und die EPB mehrmals schließen und lösen, Fehlerspeicher auslesen und löschen, Bremsflüssigkeitsstand prüfen und Wechselaufkleber anbringen, Probefahrt mit Bremsprobe und neue Beläge nach Herstellervorgabe einbremsen, Arbeiten und Messwerte im Auftrag dokumentieren. Neue Beläge erreichen ihre volle Wirkung erst nach dem Einbremsen. Darauf sollte auch der Kunde hingewiesen werden.",
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
  "id": "96905edd5e8e",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Fahrzeug mit EPB soll abgeschleppt werden, die Batterie ist leer und die Parkbremse geschlossen. Wie gehen Sie richtig vor?",
  "opts": [
   "Fahrzeug mit geschlossener EPB langsam anschleppen – die Bremse löst sich durch die Zugkraft; danach Batterie laden",
   "Gegen Wegrollen sichern (Unterlegkeile); Spannung herstellen und EPB mit dem Taster lösen; sonst mechanische Notentriegelung nach Herstellerangabe",
   "Stecker der Stellmotoren abziehen – ohne Strom öffnet die Parkbremse von selbst; Fahrzeug dann normal abschleppen",
   "Batterie ab- und wieder anklemmen, dadurch fährt die EPB in die Grundstellung; Fahrzeug ohne weitere Sicherung abschleppen"
  ],
  "correct": 1,
  "explain": "Zuerst das Fahrzeug gegen Wegrollen sichern (Unterlegkeile). Dann Spannung herstellen (Starthilfe, Ladegerät) und die EPB normal mit dem Taster lösen. Geht das nicht, die mechanische Notentriegelung nach Herstellerangabe nutzen. Ohne Strom lässt sich die EPB nicht mit dem Taster lösen. Die Notentriegelung ist je nach Hersteller unterschiedlich, deshalb immer die Reparaturanleitung beachten.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "9dddcb283aef",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Ein Kollege möchte den Kolben eines EPB-Sattels (Motor-on-Caliper) ohne Tester mit dem Rücksetzwerkzeug zurückdrehen. Wie beurteilen Sie das?",
  "opts": [
   "Nicht zulässig – Spindel, Getriebe oder Stellmotor können beschädigt werden",
   "Zulässig, wenn er dabei das Bremspedal gedrückt hält",
   "Zulässig, wenn vorher die Zündung eingeschaltet wurde",
   "Zulässig, die EPB stellt sich bei der nächsten Fahrt von selbst ein"
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
  "id": "15240111fe6a",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Antwort nennt vier richtige Regeln für den Umgang mit Bremsflüssigkeit in der Werkstatt mit passender Begründung?",
  "opts": [
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer mit Bremsenreiniger abwischen – greift nur Kunststoff an; Gebinde sofort verschließen – hygroskopisch; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; abgelassene Flüssigkeit filtern und wiederverwenden – altert nicht; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; Gebinde sofort verschließen, Altflüssigkeit nicht wiederverwenden – hygroskopisch; getrennt als gefährlichen Abfall entsorgen",
   "Schutzbrille und Handschuhe – gesundheitsschädlich; Lackspritzer sofort mit Wasser abspülen – löst Lack; Gebinde sofort verschließen – hygroskopisch; zusammen mit dem Altöl sammeln – gleiche Entsorgung"
  ],
  "correct": 2,
  "explain": "Haut- und Augenkontakt vermeiden, Schutzbrille und Handschuhe tragen – sie ist gesundheitsschädlich. Spritzer auf dem Lack sofort mit Wasser abspülen – sie löst Lack. Gebinde sofort verschließen, alte oder abgelassene Flüssigkeit nicht wiederverwenden – sie ist hygroskopisch. Getrennt sammeln und als gefährlichen Abfall entsorgen. Gesundheitsschädlich, lacklösend und wasseranziehend – daraus ergeben sich alle Regeln.",
  "src": "TB Bremsflüssigkeit, FW"
 },
 {
  "id": "76b6829853ae",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung von Aufgabe und Wirkungsweise eines Unterdruck-Bremskraftverstärkers ist richtig?",
  "opts": [
   "Verstärkt die Fußkraft; eine Membran trennt zwei Kammern, beim Bremsen wird in beide Kammern Unterdruck gelegt; Unterdruck kommt vom Saugrohr oder einer Vakuumpumpe",
   "Verstärkt die Fußkraft; eine Membran trennt zwei Kammern, beim Bremsen strömt Außenluft in eine Kammer; der nötige Überdruck kommt vom Abgasturbolader",
   "Speichert Bremsdruck für die ABS-Regelung; eine Membran trennt zwei Kammern, beim Bremsen strömt Außenluft in eine Kammer; Unterdruck kommt vom Saugrohr",
   "Verstärkt die Fußkraft; eine Membran trennt die Unterdruckkammer von einer Kammer, in die beim Bremsen Außenluft strömt; Unterdruck kommt vom Saugrohr oder einer Vakuumpumpe"
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
  "id": "8c302b7f49f2",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Beschreibung der Funktion des Bremsassistenten ist richtig?",
  "opts": [
   "Erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung (Bremsdrucksensor); baut dann selbsttätig vollen Bremsdruck bis in die ABS-Regelung auf; Grund: viele Fahrer treten zu zaghaft",
   "Erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung (Bremsdrucksensor); begrenzt dann den Bremsdruck, damit kein Rad blockiert; Grund: viele Fahrer treten zu stark",
   "Erkennt eine Notbremsung allein am Bremslichtschalter; schaltet dann das ABS ab, um den höchsten Bremsdruck zu erreichen; Grund: ABS verlängert den Bremsweg",
   "Erkennt eine Notbremsung am Gierratensensor; erhöht dann mechanisch die Pedalübersetzung; Grund: der Bremskraftverstärker reicht bei einer Vollbremsung nicht aus"
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
  "explain": "Ungleichmäßigkeit = (2800 N − 2300 N) ÷ 2800 N × 100 % ≈ 17,9 %. Typischer Fehler: auf den kleineren Wert beziehen (500 N ÷ 2300 N ≈ 21,7 %). Den zulässigen Höchstwert entnehmen Sie dem Tabellenbuch.",
  "src": "FW, TB (Grenzwert)"
 },
 {
  "id": "a7b71791a2fe",
  "cat": "Bremse",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "q": "Die ABS-Kontrollleuchte leuchtet, im Fehlerspeicher steht „Raddrehzahlsensor hinten links – Signal unplausibel“. Welche Antwort nennt vier mögliche Ursachen?",
  "opts": [
   "Impulsring verschmutzt oder beschädigt; Luftspalt zu groß (z. B. Radlagerspiel); Bremsflüssigkeitsstand zu niedrig; Sensor selbst defekt",
   "Impulsring verschmutzt oder beschädigt; Luftspalt zu groß (z. B. Radlagerspiel); Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt",
   "Impulsring verschmutzt oder beschädigt; Bremsbeläge hinten links verschlissen; Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt",
   "Lenkwinkelsensor nicht kalibriert; Luftspalt zu groß (z. B. Radlagerspiel); Leitung oder Stecker beschädigt bzw. korrodiert; Sensor selbst defekt"
  ],
  "correct": 1,
  "explain": "Mögliche Ursachen: Impuls- bzw. Magnetring verschmutzt oder beschädigt, Luftspalt zu groß (z. B. Sensor nicht richtig eingesetzt oder Radlagerspiel), Leitung oder Stecker beschädigt bzw. korrodiert, Sensor selbst defekt. Erst Sichtprüfung und Leitungsprüfung, dann das Signal mit dem Oszilloskop beim Drehen des Rades ansehen – erst danach den Sensor tauschen.",
  "src": "FW"
 },
 {
  "id": "63dc73b32210",
  "cat": "Bremse",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte für den Bremsflüssigkeitswechsel mit Befüll- und Entlüftungsgerät in die richtige Reihenfolge.",
  "schritte": [
   "Fahrzeug anheben, Entlüfterventile zugänglich machen",
   "Alte Flüssigkeit im Ausgleichsbehälter absaugen und neue Bremsflüssigkeit nach Herstellerspezifikation einfüllen",
   "Entlüftungsgerät anschließen und mit vorgeschriebenem Druck einschalten",
   "Entlüfterventile in der Reihenfolge laut Hersteller öffnen, bis klare, blasenfreie Flüssigkeit kommt, dann schließen",
   "Gerät abbauen und Flüssigkeitsstand auf MAX einstellen",
   "Druckpunkt am Pedal und Dichtheit prüfen, Wechselaufkleber anbringen, Bremsprobe"
  ],
  "explain": "Das Gerät hält den Druck im Ausgleichsbehälter, so kann keine Luft angesaugt werden. Die Reihenfolge der Räder gibt der Hersteller vor.",
  "src": "FW"
 },
 {
  "id": "3768b76f6499",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie arbeitet eine elektrische Bremsbelag-Verschleißanzeige meistens?",
  "opts": [
   "Eine Kontaktschleife im Belag wird an der Verschleißgrenze durchgeschliffen, die Unterbrechung lässt die Warnleuchte angehen",
   "Ein Ultraschallsensor misst ständig die Belagdicke",
   "Der Raddrehzahlsensor erkennt die Belagdicke am Signal",
   "Der Bremsdrucksensor meldet den Verschleiß über den sinkenden Druck"
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
  "id": "6d199668844d",
  "cat": "Bremse",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum ist der Hauptbremszylinder als Tandem-Hauptbremszylinder gebaut?",
  "opts": [
   "Er versorgt zwei getrennte Bremskreise – fällt einer aus, bremst der andere weiter",
   "Die zwei Kolben verdoppeln die Bremskraft an jedem Rad",
   "Ein Kolben ist für die Fußbremse, der andere für die Parkbremse",
   "Der zweite Kolben dient nur als Reserve beim Entlüften"
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
  "id": "d3c3dbb340a1",
  "cat": "Bremse",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Ein Fahrzeug schiebt in einer Kurve über die Vorderräder nach außen (Untersteuern). Wie erkennt das ESP das, und wie greift es ein?",
  "opts": [
   "Ist-Gierrate kleiner als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurveninneres Hinterrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate größer als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurvenäußeres Vorderrad wird gebremst; Motormoment wird reduziert",
   "Ist-Gierrate kleiner als Soll-Gierrate aus Lenkwinkel und Geschwindigkeit; kurvenäußeres Hinterrad wird gebremst; Motormoment wird erhöht",
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
  "id": "8b48ec8f795d",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 1,
  "q": "Welche Art der Gemischbildung hat dieser Motor und was ist ihr wichtigstes Merkmal?",
  "opts": [
   "Common-Rail-Direkteinspritzung; der Einspritzdruck wird für jede Einspritzung erst im Injektor durch einen Nocken erzeugt",
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
  "id": "1134bbf33ba6",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 4,
  "q": "Welche Aufgabe hat das Rail?",
  "opts": [
   "Es speichert den Kraftstoff unter Hochdruck und dämpft Druckschwankungen",
   "Es erzeugt den Hochdruck für die Injektoren",
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
  "id": "456320803c93",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 11,
  "q": "Wie reagiert das Motorsteuergerät, wenn das Signal des Raildrucksensors auf 0,1 V fällt?",
  "opts": [
   "Es erkennt einen Sensor- oder Leitungsfehler, speichert ihn und geht in den Notlauf bzw. schaltet den Motor ab",
   "Es erhöht den Raildruck auf 2500 bar, um den Druckverlust auszugleichen",
   "Es wertet 0,1 V als drucklosen Zustand und regelt normal weiter",
   "Es reagiert nicht, weil 0,1 V noch im gültigen Messbereich liegt"
  ],
  "correct": 0,
  "explain": "Der gültige Bereich liegt bei ca. 0,5–4,5 V. Unter ca. 0,25 V oder über ca. 4,75 V erkennt das Steuergerät einen Defekt (z. B. Kurzschluss nach Masse oder Unterbrechung).",
  "src": "TB 278–279"
 },
 {
  "id": "d4959cf9713a",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 12,
  "q": "Der Mengenvergleich im Leerlauf zeigt: Zyl. 1 −1,5 / Zyl. 2 −1,3 / Zyl. 3 +4,4 / Zyl. 4 −1,6 mm³/Hub. Wie ist das Ergebnis zu beurteilen und was ist der nächste Prüfschritt?",
  "opts": [
   "Zyl. 3 bringt zu wenig Drehmoment, das Steuergerät spritzt dort mehr ein; Ursache Injektor Zyl. 3 (z. B. innen undicht) oder zu wenig Kompression; nächster Schritt Rücklaufmengenmessung bzw. Kompressionstest",
   "Zyl. 3 bringt zu viel Drehmoment, das Steuergerät nimmt dort Menge zurück; Ursache Injektor Zyl. 3 spritzt zu viel ein; nächster Schritt Injektor Zyl. 3 ohne weitere Prüfung ersetzen",
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
  "explain": "Größte ÷ kleinste Menge = 41 ml ÷ 11 ml ≈ 3,73.",
  "src": "TB 277"
 },
 {
  "id": "ebc5c1b58ff1",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 14,
  "q": "Rücklaufmengenmessung: Zyl. 1 11 ml, Zyl. 2 13 ml, Zyl. 3 41 ml, Zyl. 4 12 ml. Die größte Rücklaufmenge darf höchstens das Dreifache der kleinsten betragen. Wie beurteilen Sie die Messung?",
  "opts": [
   "Grenze 3 × 11 ml = 33 ml wird von Zyl. 3 überschritten → Injektor Zyl. 3 ist innen undicht und wird ersetzt",
   "Alle Injektoren sind in Ordnung, weil keiner mehr als 50 ml zurückgibt",
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
  "id": "eb112e63c639",
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
   "Der IMA-Code enthält einen eigenen Raildruck-Sollwert für den Injektor; damit stellt das Steuergerät für jeden Zylinder einen anderen Raildruck ein; so wird die Leistung gleich",
   "Der IMA-Code setzt den Zähler für das Wechselintervall der Injektoren zurück; damit erlischt die Motorkontrollleuchte; ein Abgleich der Einspritzmenge findet nicht statt"
  ],
  "correct": 1,
  "explain": "Jeder Injektor hat fertigungsbedingte Mengentoleranzen, die im IMA-Code (Injektor-Mengen-Abgleich) stehen. Mit dem Code berechnet das Steuergerät die Ansteuerdauer für diesen Injektor genauer. Dadurch bekommt jeder Zylinder die gleiche Einspritzmenge (ruhiger Lauf, Abgaswerte). Der Raildruck ist für alle Injektoren gleich. Der mehrstellige Code ist auf dem Injektor aufgedruckt und wird im Tester z. B. unter „Injektoranpassung“ eingegeben.",
  "src": "TB 277, FK 339–349"
 },
 {
  "id": "2380eef0047c",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 17,
  "q": "Wie steuert das Motorsteuergerät einen Magnetventil-Injektor an?",
  "opts": [
   "Mit einer Boosterspannung von ca. 70–100 V und einem Anzugsstrom von ca. 20 A, danach mit einem kleineren Haltestrom von ca. 10–13 A",
   "Mit Bordnetzspannung und einem gleichbleibenden Strom von ca. 2 A während der ganzen Einspritzung",
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
  "id": "c28ae6a7d4b2",
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
   "Der NOx-Sensor 1 muss sich beim nächsten Start ohne AdBlue kalibrieren; Reste im Dosierventil würden die Messung verfälschen; das Fördermodul pumpt die Lösung deshalb in den Tank zurück"
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
  "id": "1bfb3f22e8c8",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "In welchem Zustand befindet sich die Zumesseinheit, wenn sie nicht angesteuert wird?",
  "opts": [
   "Stromlos offen – die Pumpe bekommt die volle Kraftstoffmenge",
   "Stromlos geschlossen – die Pumpe bekommt keinen Kraftstoff",
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
  "id": "f0bde3917899",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welcher Vergleich der Folgen eines Ausfalls des Druckregelventils mit denen eines Ausfalls des Raildrucksensors ist richtig?",
  "opts": [
   "Druckregelventil: Steuergerät steuert mit festem Ersatzwert weiter → Notlauf; Raildrucksensor: nur ca. 100 bar Federdruck → Motor läuft nicht; in beiden Fällen Fehlerspeichereintrag und Motorkontrollleuchte",
   "Druckregelventil: Raildruck steigt auf ca. 2500 bar, Motor läuft mit voller Leistung weiter; Raildrucksensor: festes Ersatzsignal → Notlauf; in beiden Fällen Fehlerspeichereintrag und Motorkontrollleuchte",
   "Druckregelventil: nur ca. 100 bar Federdruck → Motor läuft nicht; Raildrucksensor: keine Auswirkung, das Steuergerät berechnet den Druck aus der Drehzahl; nur beim Druckregelventil Motorkontrollleuchte",
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
  "id": "2f6e8b1e1711",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "An der abgezogenen Zumesseinheit messen Sie einen Wicklungswiderstand von 50 Ω. Die Werkstattinformation gibt 2–5 Ω vor. Wie ist das Messergebnis zu beurteilen und welche Folgen hat es?",
  "opts": [
   "Widerstand deutlich zu hoch; der Strom wird dadurch größer, die Spule überhitzt und die ZME bleibt ganz geschlossen; ZME sofort ohne weitere Messung ersetzen",
   "Widerstand in Ordnung, weil weder Kurzschluss (0 Ω) noch Unterbrechung (unendlich) vorliegt; keine Folgen für die Raildruckregelung; keine weitere Prüfung nötig",
   "Widerstand zu niedrig (Windungsschluss); der Strom wird zu groß, die ZME öffnet zu weit → Raildruck zu hoch; Steuergerät ersetzen",
   "Widerstand deutlich zu hoch (z. B. Teilunterbrechung, Korrosion); der Strom ist zu klein, die ZME lässt sich nicht richtig verstellen → Raildruckregelung gestört; Messung wiederholen, Kontakte prüfen, ggf. ZME ersetzen"
  ],
  "correct": 3,
  "explain": "Der Widerstand ist deutlich zu hoch (Wicklung bzw. Kontakt hochohmig, z. B. Teilunterbrechung oder Korrosion). Folge: Der Strom ist zu klein, die Zumesseinheit lässt sich nicht mehr richtig verstellen → Raildruckregelung gestört. Messung direkt an den Pins wiederholen, Steckkontakte prüfen und bei bestätigtem Wert die Zumesseinheit ersetzen. Nach dem ohmschen Gesetz fließt bei zehnfachem Widerstand nur ein Zehntel des Stroms – die Magnetkraft reicht dann nicht mehr. Den Sollwert immer aus der Werkstattinformation des Fahrzeugs nehmen.",
  "src": "Format Prüfung Schule, FW"
 },
 {
  "id": "992a78f5042c",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Die Zumesseinheit wird vom Steuergerät masseseitig per PWM angesteuert. Sie messen mit dem Oszilloskop an der Steuerleitung gegen Masse. Welcher Signalabschnitt bedeutet „Ventil bestromt“?",
  "opts": [
   "Der untere Pegel (ca. 0 V), weil das Steuergerät dann nach Masse durchschaltet",
   "Der obere Pegel (Bordnetzspannung), weil dann Spannung anliegt",
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
  "id": "cd0f5346e18c",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie verhält sich ein Piezo-Injektor elektrisch bei der Ansteuerung?",
  "opts": [
   "Wie ein Kondensator: Er wird mit ca. 110–150 V geladen, danach fließt kein Strom mehr; zum Schließen wird er entladen",
   "Wie eine Glühlampe: Solange er offen ist, fließt ein gleichbleibend hoher Strom",
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
  "id": "1454a75d3e1c",
  "cat": "Diesel",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Beim Mengenvergleich zeigt ein Zylinder eine Korrektur von −2,0 mm³/Hub. Was bedeutet das?",
  "opts": [
   "Der Zylinder liefert mehr Drehmoment als der Durchschnitt, das Steuergerät nimmt dort Einspritzmenge zurück",
   "Der Zylinder liefert zu wenig Drehmoment, das Steuergerät spritzt dort mehr ein",
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
  "id": "afa1e60d97f9",
  "cat": "Diesel",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welche Reaktion läuft im SCR-Katalysator ab?",
  "opts": [
   "Ammoniak (NH₃) reagiert mit Stickoxiden (NOx) zu Stickstoff (N₂) und Wasser (H₂O)",
   "Harnstoff verbrennt den Ruß im Partikelfilter zu CO₂",
   "Stickoxide werden mit Sauerstoff zu Ozon umgewandelt",
   "Ammoniak bindet die Rußpartikel und wird mit ihnen gespeichert"
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
  "id": "422f214e851d",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Bringen Sie die Schritte einer Widerstandsmessung an einem Magnetventil in die richtige Reihenfolge.",
  "schritte": [
   "Zündung ausschalten",
   "Steckverbindung am Bauteil abziehen",
   "Messgerät auf Ohm stellen und Messleitungen kurzschließen (Nullabgleich)",
   "An den Bauteilpins messen",
   "Messwert mit dem Sollwert vergleichen und dokumentieren"
  ],
  "explain": "Widerstände nur stromlos messen – sonst ist der Messwert falsch und das Messgerät kann Schaden nehmen.",
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
  "id": "19b190f3c367",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "reihenfolge",
  "pkt": 4,
  "q": "Ein Relais für den Kühlerlüfter steht im Verdacht. Bringen Sie die Prüfschritte in eine sinnvolle Reihenfolge.",
  "schritte": [
   "Relais nach Schaltplan identifizieren (Anschlüsse 30, 85, 86, 87)",
   "Relais ausbauen und Spulenwiderstand zwischen 85 und 86 messen",
   "Spule mit Bordspannung ansteuern und Schaltgeräusch prüfen",
   "Durchgang des Arbeitskontakts 30–87 im angesteuerten Zustand messen",
   "Ergebnis mit dem Sollwert vergleichen und dokumentieren"
  ],
  "explain": "Erst die Spule (Steuerstromkreis), dann der Kontakt (Arbeitsstromkreis). Ein Relais, das klickt, kann trotzdem einen verbrannten Kontakt haben.",
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
  "explain": "10 bar = 1 MPa → 120 bar ÷ 10 = 12 MPa.",
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
  "id": "bbed380d2f4c",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 3,
  "q": "Das Fahrzeug ist mit R1234yf befüllt. Welche Antwort nennt drei zutreffende Eigenschaften bzw. Besonderheiten dieses Kältemittels?",
  "opts": [
   "Geringes Treibhauspotenzial (GWP unter 150); nicht brennbar (Sicherheitsklasse A1); eigene Serviceanschlüsse und eigenes Servicegerät",
   "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); darf mit R134a gemischt werden, gleiche Serviceanschlüsse",
   "Geringes Treibhauspotenzial (GWP unter 150); schwer entflammbar (Sicherheitsklasse A2L); nicht mit R134a mischen, eigene Serviceanschlüsse und eigenes Servicegerät",
   "Hohes Treibhauspotenzial, deshalb in Neufahrzeugen verboten; schwer entflammbar (Sicherheitsklasse A2L); eigene Serviceanschlüsse und eigenes Servicegerät"
  ],
  "correct": 2,
  "explain": "Merkmale von R1234yf: GWP unter 150, Sicherheitsklasse A2L (schwer entflammbar), nicht mit R134a mischen – eigene Serviceanschlüsse und eigenes Servicegerät. R1234yf ersetzt in Neufahrzeugen R134a, weil es das Klima viel weniger belastet. Dafür ist es schwach brennbar. Der Kreislauf ist gleich aufgebaut, Anschlüsse und Geräte sind aber verschieden, damit nichts verwechselt wird.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "4011fe33abd3",
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
   "Sachkundenachweis für Arbeiten an Fahrzeug-Klimaanlagen; zugelassenes Klimaservicegerät für R1234yf; geschlossener Raum ohne Lüftung, damit nichts entweicht"
  ],
  "correct": 1,
  "explain": "Wer Kältemittel absaugt oder einfüllt, braucht eine Sachkundebescheinigung. Für R1234yf ist ein eigenes Servicegerät vorgeschrieben. Weil das Kältemittel schwerer als Luft ist, sammelt es sich in Gruben.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "98c1b0864902",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 5,
  "q": "Welche Antwort nennt vier Vorprüfungen, die Sie ohne Klimaservicegerät durchführen können?",
  "opts": [
   "Sichtprüfung auf Ölspuren und Beschädigungen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Hoch- und Niederdruck messen",
   "Sichtprüfung auf Ölspuren und Beschädigungen; Innenraumfilter und Kondenswasserablauf prüfen; Kältemittel absaugen und wiegen; Ausströmtemperatur messen",
   "Vakuum-Haltetest durchführen; Fehlerspeicher auslesen; Kondensatorlüfter und Gebläse prüfen; Innenraumfilter und Kondenswasserablauf prüfen",
   "Sichtprüfung auf Ölspuren und Beschädigungen; Verdichteransteuerung im Tester prüfen; Kondensatorlüfter und Gebläse prüfen; Ausströmtemperatur messen"
  ],
  "correct": 3,
  "explain": "Ohne Servicegerät möglich: Sichtprüfung auf Undichtheit (Ölspuren, Beschädigungen z. B. am Kondensator), Verdichteransteuerung (Messwerte Regelventil im Tester), Kondensatorlüfter und Innenraumgebläse, Innenraumfilter und Kondenswasserablauf, Ausströmtemperatur an der Mitteldüse, Fehlerspeicher von Klima- und Motorsteuergerät. Drücke messen, Kältemittel absaugen und wiegen sowie der Vakuumtest gehen nur mit dem Servicegerät. Viele Fehler findet man schon ohne Manometer: Ölspuren zeigen Lecks (das Kältemittel trägt Öl mit), ein ausgefallener Lüfter oder ein zugesetzter Filter mindern die Kühlleistung.",
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
  "id": "0a1a761abffd",
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
   "Unterfüllung durch normalen Kältemittelverbrauch; die fehlende Menge nachfüllen, eine Lecksuche ist nicht nötig"
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
  "id": "56609bb730e6",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 12,
  "q": "Warum muss der Trockner erneuert werden, wenn der Kreislauf geöffnet wurde? Welche Begründung ist richtig?",
  "opts": [
   "Der Trockner speichert das Kältemittelöl; nach dem Öffnen ist er leergelaufen und muss mit frischem Öl getauscht werden",
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
  "id": "4b38c67eea83",
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
   "POE schmiert die hohen Drehzahlen des Elektroverdichters besser; die elektrischen Eigenschaften spielen keine Rolle",
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
  "id": "f09c85dbf73e",
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
   "Ursache: Bakterien und Pilze am feuchten Verdampfer; Kondenswasserablauf verschließen und Duftstoff in die Düsen sprühen"
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
  "id": "7eb88bdf3c2d",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 18,
  "q": "Welche Antwort nennt vier richtige Abschlussarbeiten, bevor Sie das Fahrzeug an den Kunden übergeben?",
  "opts": [
   "Dichtheit der neuen Verbindungen prüfen; Leistungstest; Fehlerspeicher löschen; als Reserve 10 % mehr Kältemittel als laut Typschild einfüllen",
   "Dichtheit der neuen Verbindungen prüfen; Fehlerspeicher löschen; Füllmenge dokumentieren; Leistungstest entfällt, da nach Gewicht befüllt wurde",
   "Leistungstest; Fehlerspeicher auslesen und löschen; Füllmenge dokumentieren; zur Dichtheitsprüfung etwas Kältemittel an den Verbindungen ablassen",
   "Dichtheit der neuen Verbindungen prüfen; Leistungstest (Ausströmtemperatur, Drücke); Fehlerspeicher auslesen und löschen; Kältemittelart und Füllmenge dokumentieren"
  ],
  "correct": 3,
  "explain": "Abschlussarbeiten: Dichtheit der neuen Verbindungen prüfen (z. B. elektronischer Lecksucher), Leistungstest (Ausströmtemperatur und Drücke), Fehlerspeicher auslesen und löschen, Kältemittelart und Füllmenge dokumentieren (abgesaugt / eingefüllt), Serviceaufkleber bzw. Hinweis im Motorraum aktualisieren. Die Dokumentation von Kältemittel und Menge ist vorgeschrieben. Der Leistungstest beweist, dass die Beanstandung „bläst lauwarm“ behoben ist.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "ae56c4070464",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Ein Kunde bittet Sie, die Klimaanlage vor der Reparatur einfach „abzulassen“. Wie müssen Sie stattdessen vorgehen?",
  "opts": [
   "Ablassen ist bei R1234yf erlaubt, weil das Treibhauspotenzial gering ist; nur Art und Menge des Kältemittels dokumentieren",
   "Nicht ablassen (verboten); mit dem Servicegerät absaugen und recyceln bzw. entsorgen; Art und Menge dokumentieren; nur mit Sachkundenachweis",
   "Kältemittel im Freien langsam über den Niederdruckanschluss ablassen; Art und Menge dokumentieren; nur mit Sachkundenachweis",
   "Mit dem Servicegerät absaugen und danach über die Hallenabsaugung ins Freie leiten; Art und Menge dokumentieren"
  ],
  "correct": 1,
  "explain": "Kältemittel darf nicht in die Atmosphäre abgelassen werden. Es wird mit dem Servicegerät abgesaugt und recycelt bzw. als Abfall entsorgt, Art und Menge werden dokumentiert, und arbeiten dürfen nur Personen mit Sachkundenachweis. Fluorierte Kältemittel schädigen das Klima. Deshalb gilt ein Ablassverbot, und jede Menge, die ab- oder eingefüllt wird, wird aufgeschrieben.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "daccb62a0b06",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Seit dem 17.04.2026 gilt in Deutschland eine neue Chemikalien-Klimaschutzverordnung (ChemKlimaschutzV). Welche Aussage trifft zu?",
  "opts": [
   "Die Sachkundepflicht gilt jetzt auch für alternative Kältemittel wie R1234yf; ältere Bescheinigungen gelten bis 12.03.2029 und müssen danach aufgefrischt werden.",
   "Für R1234yf ist seit 2026 keine Sachkunde mehr nötig, weil es ein geringes Treibhauspotenzial hat.",
   "Alle bisherigen Sachkundebescheinigungen sind seit dem 17.04.2026 ungültig.",
   "Kleinmengen bis 100 g dürfen seit 2026 in die Luft abgelassen werden."
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
  "id": "61c45209d988",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Wie passt ein extern geregelter Verdichter seine Förderleistung an? Welche Beschreibung ist richtig?",
  "opts": [
   "Eine Magnetkupplung schaltet den Verdichter je nach Kältebedarf ein und aus; der Hub der Kolben bleibt dabei immer gleich",
   "Ein Regelventil verstellt den Hub; es wird rein mechanisch vom Saugdruck gesteuert, ohne Signal vom Steuergerät",
   "Ein Regelventil verstellt den Hub (Schrägstellung der Taumelscheibe); das Steuergerät steuert es per PWM an; die Leistung passt sich stufenlos an",
   "Das Steuergerät verändert die Drehzahl des Verdichters über eine verstellbare Riemenscheibe; der Hub bleibt gleich"
  ],
  "correct": 2,
  "explain": "Die Fördermenge wird über den Hub (Schrägstellung der Taumelscheibe) verändert. Ein Regelventil am Verdichter verstellt den Hub, das Steuergerät steuert es mit einem PWM-Signal an. Die Leistung passt sich stufenlos dem Kältebedarf an; oft ohne Magnetkupplung, bei „Klima aus“ minimaler Hub. (Rein vom Saugdruck geregelt = intern geregelter Verdichter.) Statt ständig ein- und auszuschalten wie bei einer Magnetkupplung, läuft der Verdichter mit und fördert nur so viel wie nötig. Das ist leiser, gleichmäßiger und spart Kraftstoff.",
  "src": "FW"
 },
 {
  "id": "efcb11e2c3bb",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie reagiert die Motorsteuerung auf den Betrieb der Klimaanlage? Welche Beschreibung ist richtig?",
  "opts": [
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird Drehmoment bzw. Leerlaufdrehzahl angehoben; bei Volllast oder zu heißem Motor wird der Verdichter abgeregelt",
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird die Drehzahl abgesenkt, um Kraftstoff zu sparen; bei Volllast läuft der Verdichter mit voller Leistung",
   "Das Motorsteuergerät erhält keine Information; der Leerlaufregler reagiert erst, wenn die Drehzahl gefallen ist; bei Volllast bleibt der Verdichter unverändert",
   "Verdichterlast wird (z. B. über CAN) gemeldet; im Leerlauf wird das Drehmoment angehoben; bei zu hoher Kühlmitteltemperatur fördert der Verdichter mehr, um mitzukühlen"
  ],
  "correct": 0,
  "explain": "Das Klimasteuergerät meldet die Verdichterlast (z. B. über CAN) an das Motorsteuergerät. Im Leerlauf erhöht das Motorsteuergerät vorsorglich Drehmoment bzw. Leerlaufdrehzahl, damit der Motor nicht abstirbt. Bei Volllast/Beschleunigen oder zu hoher Kühlmitteltemperatur wird der Verdichter abgeregelt oder abgeschaltet. Der Verdichter braucht spürbar Motorleistung. Deshalb tauschen Klima- und Motorsteuergerät Informationen aus und stimmen Last und Kühlbedarf ab.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "1d6d0c05065a",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Der Druck-/Temperatursensor auf der Hochdruckseite ist ausgefallen. Welche Antwort beschreibt Aufgabe, Folgen des Ausfalls und Prüfung richtig?",
  "opts": [
   "Misst die Ausströmtemperatur an der Mitteldüse; bei Ausfall läuft der Verdichter mit voller Leistung weiter; prüfen: Sensor ausbauen und durchblasen",
   "Überwacht den Hochdruck; bei Ausfall läuft der Verdichter ungeregelt mit voller Leistung weiter; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
   "Überwacht nur die Füllmenge beim Befüllen; bei Ausfall Verdichter ab, Fehlerspeichereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen",
   "Überwacht den Hochdruck und steuert Verdichter und Lüfter mit; bei Ausfall Verdichter ab bzw. heruntergeregelt, Fehlerspeichereintrag; prüfen: Messwert mit Manometer vergleichen, Versorgung, Signal und Masse messen"
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
  "explain": "Manometer zeigen den Überdruck gegenüber der Umgebung. Absolutdruck = Überdruck + Luftdruck = 14 bar + 1 bar = 15 bar.",
  "src": "FW"
 },
 {
  "id": "8004e7314874",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum dürfen Sie beim Umgang mit Kältemittel nicht in einer Arbeitsgrube arbeiten?",
  "opts": [
   "Kältemitteldampf ist schwerer als Luft, sammelt sich am Boden und verdrängt den Sauerstoff",
   "Kältemitteldampf ist leichter als Luft und steigt zur Grube hinauf",
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
  "id": "7417c366658b",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Auf einem Kältemittelöl steht zusätzlich „UV“. Was bedeutet das?",
  "opts": [
   "Das Öl enthält ein UV-Kontrastmittel, mit dem man Lecks unter einer UV-Lampe sieht",
   "Das Öl ist für Fahrzeuge mit UV-Schutzverglasung freigegeben",
   "Das Öl ist nur für R134a zugelassen",
   "Das Öl muss vor Sonnenlicht geschützt gelagert werden und ist sonst unbrauchbar"
  ],
  "correct": 0,
  "explain": "Das Kontrastmittel tritt an Lecks mit dem Öl aus und leuchtet unter UV-Licht. So findet man auch kleine Undichtheiten.",
  "src": "TB Betriebsstoffe, FK Werkstatthinweise"
 },
 {
  "id": "05bd53e7a314",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Warum haben R134a- und R1234yf-Anlagen unterschiedliche Serviceanschlüsse?",
  "opts": [
   "Damit die Kältemittel nicht verwechselt oder gemischt werden und nur das passende Servicegerät angeschlossen werden kann",
   "Weil R1234yf mit deutlich höherem Druck arbeitet und dickere Leitungen braucht",
   "Damit R1234yf-Anlagen ohne Sachkunde befüllt werden können",
   "Weil bei R1234yf nur der Niederdruckanschluss genutzt wird"
  ],
  "correct": 0,
  "explain": "Der Kreislauf ist bei beiden Kältemitteln gleich aufgebaut. Die verschiedenen Anschlüsse verhindern, dass falsches Kältemittel eingefüllt wird.",
  "src": "Recherche 3.6"
 },
 {
  "id": "ea657f32e539",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "Welche Antwort nennt die Aufgabe des Innenraumfilters und zwei Folgen, wenn er zugesetzt ist?",
  "opts": [
   "Bindet Feuchtigkeit im Kältemittel; zugesetzt: Säurebildung im Kreislauf und Vereisung am Expansionsventil",
   "Filtert Staub und Pollen aus der Frischluft; zugesetzt: weniger Luftdurchsatz mit geringerer Kühl- und Heizleistung, Scheiben beschlagen leichter",
   "Filtert Staub und Pollen aus der Frischluft; zugesetzt: der Hochdruck steigt stark an und der Kondensatorlüfter fällt aus",
   "Filtert die Ansaugluft des Motors; zugesetzt: Leistungsverlust des Motors und erhöhter Kraftstoffverbrauch"
  ],
  "correct": 1,
  "explain": "Der Innenraumfilter filtert Staub und Pollen aus der Frischluft (mit Aktivkohle auch Gerüche und Schadgase). Ist er zugesetzt, sinkt der Luftdurchsatz → geringere Kühl- und Heizleistung; Scheiben beschlagen leichter, muffiger Geruch ist möglich. Der Filter wird nach Wartungsplan gewechselt. Auf die Einbaurichtung achten (Pfeil zur Luftrichtung).",
  "src": "FW"
 },
 {
  "id": "17bc7b22ff7b",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Welche Beschreibung der Besonderheiten eines elektrischen Klimakompressors in Hybrid- und Elektrofahrzeugen ist richtig?",
  "opts": [
   "Antrieb über Riemen und Magnetkupplung vom Verbrennungsmotor; keine Standklimatisierung möglich; Klimasachkunde genügt; PAG-Öl wie beim Riemenverdichter",
   "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; PAG-Öl YF verwenden",
   "Antrieb aus dem HV-Netz, unabhängig vom Verbrenner; Standklimatisierung und Kühlung der HV-Batterie möglich; HV-Qualifikation, spannungsfrei schalten; nur POE-Öl",
   "Antrieb aus dem HV-Netz; Standklimatisierung und Kühlung der HV-Batterie möglich; Arbeiten unter Spannung erlaubt, da der Kreislauf getrennt ist; nur POE-Öl"
  ],
  "correct": 2,
  "explain": "Der elektrische Kompressor wird von einem Elektromotor aus dem Hochvoltnetz angetrieben, unabhängig vom Verbrennungsmotor – das ermöglicht Standklimatisierung und Kühlung der HV-Batterie. Arbeiten nur mit HV-Qualifikation, System vorher spannungsfrei schalten. Nur nicht leitendes POE-Öl verwenden, das Servicegerät muss für E-Verdichter geeignet sein. Der Elektromotor sitzt im Kältemittelstrom. Leitendes Öl würde die Isolation verschlechtern – deshalb POE und keine PAG-Reste.",
  "src": "Recherche 3.3, TB Betriebsstoffe, FW"
 },
 {
  "id": "e59446e10bd6",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Wie wird der Kondensatorlüfter angesteuert und was passiert bei einem Ausfall? Welche Beschreibung ist richtig?",
  "opts": [
   "Abhängig von Hochdruck (Drucksensor) und Kühlmitteltemperatur, meist stufenlos per PWM; bei Ausfall steigt der Hochdruck stark, vor allem im Stand, der Verdichter wird abgeschaltet",
   "Nur abhängig von der Fahrgeschwindigkeit, ohne Drucksignal; bei Ausfall sinkt der Hochdruck, und die Kühlleistung wird sogar besser",
   "Abhängig von Hochdruck und Kühlmitteltemperatur per PWM; bei Ausfall fällt die Kühlung vor allem bei schneller Autobahnfahrt aus, im Stand ist sie unverändert",
   "Abhängig vom Niederdruck am Verdampfer; bei Ausfall sinkt der Niederdruck stark und der Verdampfer vereist"
  ],
  "correct": 0,
  "explain": "Das Steuergerät steuert den Lüfter abhängig vom Hochdruck (Drucksensor) und der Kühlmitteltemperatur an, meist stufenlos (PWM, Lüftersteuergerät). Bei Ausfall steigt der Hochdruck stark, vor allem im Stand → schlechte Kühlung, der Verdichter wird abgeschaltet. Im Stand fehlt der Fahrtwind, dann muss der Lüfter die Wärme am Kondensator abführen. Fällt er aus, schützt das Steuergerät die Anlage vor Überdruck.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "4ae6d9fdf5dd",
  "cat": "Klima",
  "level": 3,
  "typ": "mc",
  "pkt": 4,
  "q": "Nach längerer Fahrt lässt die Kühlleistung nach und aus den Düsen kommt kaum noch Luft. Nach einer Pause geht es wieder. Wie ist das Fehlerbild zu beurteilen und welche Ursachen kommen in Frage?",
  "opts": [
   "Hochdruckabschaltung durch Überhitzung des Kondensators; Ursachen: Kondensatorlüfter defekt, Kondensator verschmutzt",
   "Unterfüllung durch ein Leck; Ursachen: undichter Kondensator nach Steinschlag, poröse Kältemittelschläuche",
   "Verdampfer vereist; Ursachen: Überfüllung, zu großer Luftdurchsatz durch neuen Innenraumfilter, Verdichter regelt zu stark ab",
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
  "id": "7ff7711e0bbd",
  "cat": "Klima",
  "level": 1,
  "typ": "mc",
  "pkt": 3,
  "q": "PAG-Öl ist stark hygroskopisch. Welche Antwort erklärt den Begriff richtig und nennt zwei richtige Regeln für den Umgang mit dem Öl?",
  "opts": [
   "Weist Feuchtigkeit ab; Gebinde kann offen stehen bleiben; Öle verschiedener Hersteller und Typen dürfen gemischt werden",
   "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Gebinde sofort wieder verschließen; nur Öl nach Herstellervorgabe, nicht mit anderen Ölen mischen",
   "Nimmt Feuchtigkeit aus der Umgebungsluft auf; Öl vor dem Einfüllen offen stehen lassen, damit es entgast; nur Öl nach Herstellervorgabe",
   "Löst sich vollständig im Kältemittel; Gebinde sofort wieder verschließen; bei Bedarf PAO-Öl nachfüllen, wenn PAG vorgeschrieben ist"
  ],
  "correct": 1,
  "explain": "Hygroskopisch heißt: nimmt Feuchtigkeit aus der Umgebungsluft auf. Deshalb Gebinde nach der Entnahme sofort wieder verschließen und nur Öl nach Herstellervorgabe (Typ, Viskosität, Menge) verwenden, nicht mit anderen Ölen mischen. Feuchtes Öl bringt Wasser in den Kreislauf – mit den Folgen Säurebildung und Vereisung. Geschlossene Gebinde sind begrenzt lagerfähig.",
  "src": "TB Betriebsstoffe (Kompressoröle), FK Werkstatthinweise"
 },
 {
  "id": "335b17f7aa85",
  "cat": "Klima",
  "level": 2,
  "typ": "mc",
  "pkt": 3,
  "q": "Warum wird eine Klimaanlage nach Gewicht und nicht nach Druckanzeige befüllt? Welche Begründung ist richtig?",
  "opts": [
   "Die Manometer des Servicegeräts sind nur für R134a geeicht; bei R1234yf ist eine Druckmessung nicht zulässig",
   "Die Füllmenge ist in Gramm vorgegeben; der Druck steigt genau proportional zur Füllmenge und dient nur zur Kontrolle; leichte Überfüllung verbessert die Kühlung",
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
  "id": "bdf94e6b1472",
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
   "Gewerkschaften und Arbeitgeberverbände verhandeln die Löhne; der Abschluss gilt aber erst, wenn das Arbeitsministerium ihn genehmigt"
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
  "id": "0ab91069e566",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 5,
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Was bedeutet die Friedenspflicht während der Laufzeit eines Tarifvertrags?",
  "opts": [
   "Zu Themen, die im Tarifvertrag geregelt sind, darf nicht gestreikt oder ausgesperrt werden",
   "Der Betriebsrat darf keine Betriebsversammlung einberufen",
   "Arbeitnehmer dürfen während der Laufzeit nicht kündigen",
   "Die Gewerkschaft darf erst nach einer Schlichtung verhandeln"
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
  "id": "c97c4d16ccbd",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 19,
  "level": 3,
  "typ": "mc",
  "pkt": 3,
  "q": "Welches Beispiel beschreibt einen Zielkonflikt zwischen zwei Zielen des magischen Vierecks richtig?",
  "opts": [
   "Mehr Beschäftigung bringt mehr Einkommen und Konsum, dadurch wächst die Wirtschaft stärker; beide Ziele fördern sich gegenseitig",
   "Höhere Leitzinsen senken die Inflation und kurbeln zugleich Investitionen und Beschäftigung an; so werden beide Ziele gleichzeitig erreicht",
   "Hohe Nachfrage und volle Auslastung sichern Wachstum und Beschäftigung, lassen aber Preise und Löhne steigen; höhere Zinsen gegen die Inflation bremsen dann Wachstum und Beschäftigung",
   "Sinkende Arbeitslosigkeit drückt die Löhne und damit die Preise; so sorgt ein hoher Beschäftigungsstand automatisch für stabile Preise"
  ],
  "correct": 2,
  "explain": "Beispiel: Wirtschaftswachstum/hoher Beschäftigungsstand gegen Preisniveaustabilität. Hohe Nachfrage und volle Auslastung führen zu steigenden Preisen und Löhnen (Inflation); Maßnahmen dagegen (z. B. höhere Zinsen) bremsen Investitionen, Wachstum und Beschäftigung. Fördern sich zwei Ziele gegenseitig, spricht man von Zielharmonie. Ein Zielkonflikt liegt vor, wenn die Förderung eines Ziels ein anderes verschlechtert. Weiteres Beispiel: Wachstum gegen Umweltschutz.",
  "src": "FW"
 },
 {
  "id": "506936b4eb11",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 20,
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie verhält sich der Staat in einer Rezession nach der antizyklischen (nachfrageorientierten) Fiskalpolitik?",
  "opts": [
   "Er erhöht seine Ausgaben und senkt Steuern, notfalls mit neuen Schulden",
   "Er kürzt seine Ausgaben und erhöht die Steuern",
   "Er senkt den Leitzins",
   "Er hält sich vollständig aus der Wirtschaft heraus"
  ],
  "correct": 0,
  "explain": "Antizyklisch = gegen den Konjunkturverlauf: In der Krise die fehlende Nachfrage ersetzen (Deficit Spending), im Boom Ausgaben kürzen und Rücklagen bilden. Den Leitzins bestimmt nicht der Staat, sondern die unabhängige EZB.",
  "src": "FW"
 },
 {
  "id": "2c5ffe14f7a0",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Angenommen, der Manteltarifvertrag sieht 30 Urlaubstage vor, in Ihrem Arbeitsvertrag stehen 32. Was gilt?",
  "opts": [
   "32 Tage, weil vom Tarifvertrag zugunsten des Arbeitnehmers abgewichen werden darf",
   "30 Tage, weil der Tarifvertrag immer Vorrang hat",
   "24 Tage, weil das Bundesurlaubsgesetz gilt",
   "31 Tage als Mittelwert beider Regelungen"
  ],
  "correct": 0,
  "explain": "Günstigkeitsprinzip (§ 4 Abs. 3 Tarifvertragsgesetz): Der Tarifvertrag ist ein Mindeststandard. Schlechter als der Tarif darf der Arbeitsvertrag nicht sein, besser schon.",
  "src": "FW"
 },
 {
  "id": "09dfbb957bdc",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Was bedeutet es, wenn ein Tarifvertrag für allgemeinverbindlich erklärt wird?",
  "opts": [
   "Er gilt für alle Arbeitgeber und Arbeitnehmer der Branche im Geltungsbereich, auch ohne Verbandsmitgliedschaft",
   "Er gilt nur für Gewerkschaftsmitglieder",
   "Er kann während der Laufzeit nicht mehr gekündigt werden",
   "Er gilt automatisch für alle Branchen in Deutschland"
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
  "id": "89eb9243e327",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Wer trägt 2026 den Kinderlosenzuschlag von 0,6 % in der Pflegeversicherung?",
  "opts": [
   "Der kinderlose Arbeitnehmer ab 23 Jahren allein",
   "Arbeitnehmer und Arbeitgeber je zur Hälfte",
   "Der Arbeitgeber allein",
   "Die Pflegekasse aus Steuermitteln"
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
  "id": "add6820d6fb3",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Seit 01.01.2026 gibt es die sogenannte Aktivrente. Was regelt sie?",
  "opts": [
   "Wer nach Erreichen der Regelaltersgrenze sozialversicherungspflichtig weiterarbeitet, kann bis zu 2.000 € im Monat steuerfrei verdienen",
   "Jeder kann ab 63 Jahren ohne Abschläge in Rente gehen",
   "Der Staat zahlt jedem Kind monatlich in ein Vorsorgedepot ein",
   "Rentner müssen bis 70 Jahre mindestens in Teilzeit arbeiten"
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
  "id": "c64797136b06",
  "cat": "WiSo",
  "level": 3,
  "typ": "mc",
  "pkt": 2,
  "q": "Eine Partei erhält bei der Bundestagswahl 4,2 % der Zweitstimmen und gewinnt 3 Wahlkreise direkt. Was gilt nach dem Stand 2026?",
  "opts": [
   "Sie zieht entsprechend ihrem Zweitstimmenanteil in den Bundestag ein (Grundmandatsklausel)",
   "Sie bekommt keinen einzigen Sitz, weil sie unter 5 % liegt",
   "Nur die drei Wahlkreissieger ziehen ein",
   "Sie bekommt automatisch 5 % der Sitze"
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
  "id": "8e171eb782b1",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Bei der Bürgermeisterwahl am 08.03.2026 erhält Bewerberin A 44 %, Bewerber B 38 % und Bewerber C 18 % der gültigen Stimmen. Wie geht es weiter?",
  "opts": [
   "Zwei Wochen später findet eine Stichwahl zwischen A und B statt",
   "A ist gewählt, weil sie die meisten Stimmen hat",
   "Die Wahl wird mit allen drei Bewerbern wiederholt",
   "Der Gemeinderat wählt den Bürgermeister aus A und B"
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
  "id": "dcc53a53e6f5",
  "cat": "WiSo",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "q": "Wie hat sich das reale Bruttoinlandsprodukt in Deutschland im Jahr 2025 entwickelt (Destatis, Januar 2026)?",
  "opts": [
   "Es ist um 0,2 % gewachsen, nach zwei Jahren mit Rückgang",
   "Es ist um 2,0 % geschrumpft",
   "Es ist um 3,5 % gewachsen",
   "Es ist das dritte Jahr in Folge geschrumpft"
  ],
  "correct": 0,
  "explain": "Nach Rückgängen 2023 und 2024 wuchs das reale BIP 2025 laut erster Schätzung des Statistischen Bundesamts leicht um 0,2 %. Für 2026 wurde ein etwas stärkeres Wachstum erwartet.",
  "src": "Netz: Destatis, Pressemitteilung 017/2026 (15.01.2026)"
 },
 {
  "id": "45489c2b8edf",
  "cat": "WiSo",
  "level": 1,
  "typ": "mc",
  "pkt": 2,
  "q": "Welches Ziel verfolgt die Europäische Zentralbank (EZB) mit ihrer Geldpolitik (Stand 2026)?",
  "opts": [
   "Eine Inflationsrate von mittelfristig 2 % im Euroraum",
   "Eine Arbeitslosenquote von 0 %",
   "Eine Inflationsrate von genau 0 %",
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
  "explain": "Näherung: Reallohnveränderung ≈ Nominallohnveränderung − Inflationsrate = 3,3 % − 2,0 % = 1,3 %. Genau: 1,033 ÷ 1,020 − 1 ≈ 1,27 %.",
  "src": "FW"
 }
];
export const SITUATIONEN = {
 "airbag-sitz": {
  "titel": "Kundenauftrag: Airbag-Kontrollleuchte nach Sitzausbau",
  "text": "Opel Astra K, Baujahr 2018, Front-, Seiten- und Kopfairbags, Gurtstraffer vorn.\nKunde beanstandet: „Seit ihr den Fahrersitz für die Teppichreinigung ausgebaut habt, leuchtet die Airbag-Leuchte.“\nFehlerspeicher: Zündkreis Seitenairbag Fahrer – Widerstand zu hoch.",
  "cat": "Airbag"
 },
 "epb-golf": {
  "titel": "Kundenauftrag: Bremsen hinten und Bremsflüssigkeit",
  "text": "VW Golf 8 1.5 TSI, Baujahr 2021, elektrische Parkbremse mit Stellmotoren am Bremssattel, ESP.\nKunde beanstandet: „Hinten schleift es beim Bremsen, und die Inspektion steht an.“\nBei der Prüfung: Bremsbeläge hinten 2 mm, Bremsflüssigkeit 3,8 % Wasser.",
  "cat": "Bremse"
 },
 "cr-octavia": {
  "titel": "Kundenauftrag: Ruckeln und Leistungsverlust",
  "text": "Skoda Octavia 2.0 TDI, Baujahr 2020, Common-Rail mit Magnetventil-Injektoren, Zweisteller-Regelung, SCR-Katalysator.\nKunde beanstandet: „Der Motor ruckelt im Leerlauf, nimmt schlecht Gas an und die Motorkontrollleuchte ist an.“",
  "cat": "Diesel"
 },
 "klima-bmw": {
  "titel": "Kundenauftrag: Klimaanlage kühlt kaum",
  "text": "BMW 320d, Baujahr 2019, Kältemittel R1234yf, extern geregelter Verdichter.\nKunde beanstandet: „Die Klimaanlage bläst nur noch lauwarm, und manchmal riecht es muffig.“\nAußentemperatur 25 °C.",
  "cat": "Klima"
 },
 "wiso-geselle": {
  "titel": "Situation: Start als Geselle",
  "text": "Du hast deine Gesellenprüfung bestanden und wirst von deinem Ausbildungsbetrieb, einem Autohaus in Bayreuth (Mitglied der Kfz-Innung, tarifgebunden), als Kfz-Mechatroniker übernommen. Im März 2026 waren Kommunalwahlen in Bayern.",
  "cat": "WiSo"
 }
};
