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
  "id": "33219b439698",
  "cat": "Airbag",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 2,
  "q": "Beschreiben Sie, wie sich die Airbag-Kontrollleuchte bei einem fehlerfreien System nach dem Einschalten der Zündung verhält, und was Dauerleuchten bedeutet.",
  "punkte": [
   "Leuchte geht beim Einschalten an (Selbsttest des Systems, Lampentest)",
   "Sie erlischt nach wenigen Sekunden, wenn kein Fehler erkannt wurde",
   "Dauerleuchten (oder Blinken) heißt: Fehler erkannt, Schutzwirkung eingeschränkt, Teile ggf. abgeschaltet"
  ],
  "explain": "Beim Einschalten prüft das Steuergerät Zündkreise, Sensoren und Energiereserve. Bleibt die Leuchte an, ist ein Fehler gespeichert – das Fahrzeug ist nicht mehr voll geschützt und muss diagnostiziert werden.",
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
  "id": "f5b9ec71ff7a",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 5,
  "q": "Begründen Sie, warum Sie nach dem Abklemmen der Batterie nicht sofort am Airbag-System arbeiten dürfen.",
  "punkte": [
   "Das Steuergerät besitzt eine Energiereserve (Kondensator)",
   "Diese kann die Zündpille auch ohne Batterie noch bestromen – der Airbag könnte auslösen",
   "Erst nach der vom Hersteller angegebenen Wartezeit ist die Reserve entladen"
  ],
  "explain": "Die Energiereserve ist gewollt: Reißt bei einem Unfall die Batterieleitung ab, kann das Steuergerät trotzdem noch zünden. Bei Arbeiten in der Werkstatt ist genau das die Gefahr.",
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
  "id": "693c00ce3522",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 7,
  "q": "Nennen Sie vier Schritte bzw. Hilfsmittel, mit denen Sie den Zündkreis des Seitenairbags fachgerecht prüfen.",
  "punkte": [
   "Fehlerspeicher und Messwerte (Zündkreiswiderstand) mit dem Diagnosetester auslesen",
   "Prüfadapter bzw. Ersatzwiderstand anstelle der Airbag-Einheit anschließen",
   "Steckverbindung unter dem Sitz prüfen: eingerastet, Kontakte, Korrosion, Kurzschlussbrücke",
   "Leitung nach Herstellervorgabe (Airbag-Einheit und Steuergerät abgesteckt) auf Durchgang und Kurzschluss prüfen"
  ],
  "explain": "Mit dem Ersatzwiderstand lässt sich eingrenzen: Verschwindet der Fehler, liegt er an der Airbag-Einheit oder ihrem Stecker, bleibt er, an Leitung oder Steuergerät. Leitungen nur prüfen, wenn keine Zündpille angeschlossen ist.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "0adde88e13ae",
  "cat": "Airbag",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 8,
  "q": "Statt der Airbag-Einheit schließen Sie einen Ersatzwiderstand von 2,2 Ω an. Die zwei Steckverbindungen haben je 0,1 Ω Übergangswiderstand, die Leitung hat insgesamt 0,3 Ω. Berechnen Sie den Gesamtwiderstand des Zündkreises.",
  "loesung": 2.7,
  "einheit": "Ω",
  "explain": "Alle Widerstände liegen in Reihe: R = 2,2 Ω + 2 × 0,1 Ω + 0,3 Ω = 2,7 Ω. Ein lockerer Stecker erhöht den Übergangswiderstand – deshalb meldet das Steuergerät dann „Widerstand zu hoch“.",
  "src": "FW"
 },
 {
  "id": "74a4e0ad981d",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 9,
  "q": "Im Stecker der Airbag-Einheit sitzt eine Kurzschlussbrücke. Beschreiben Sie ihre Aufgabe.",
  "punkte": [
   "Beim Abziehen des Steckers verbindet eine Federbrücke die beiden Anschlüsse der Zündpille",
   "Die Zündpille ist damit kurzgeschlossen",
   "Fremdspannung oder statische Aufladung kann keinen Zündstrom durch die Zündpille treiben – keine ungewollte Auslösung"
  ],
  "explain": "Sobald der Stecker wieder richtig eingerastet ist, drückt er die Brücke auf. Rastet er nicht ein, kann die Brücke teilweise anliegen oder der Kontakt wackeln – ein Grund für unplausible Zündkreiswerte.",
  "src": "Netz: Recherche 3.6, FW"
 },
 {
  "id": "4c61969af2fc",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 10,
  "q": "Begründen Sie, warum die Steckverbindung unter dem Sitz eine typische Fehlerquelle ist – besonders nach einem Sitzausbau.",
  "punkte": [
   "Stecker wird beim Ausbau getrennt und beim Einbau nicht richtig eingerastet bzw. verriegelt",
   "Die Leitung wird bei jeder Sitzverstellung bewegt (Zug, Knicken, Scheuern)",
   "Feuchtigkeit und Schmutz am Fahrzeugboden (z. B. nach Teppichreinigung) führen zu Korrosion an den Kontakten"
  ],
  "explain": "Im vorliegenden Fall ist der Stecker nach dem Sitzeinbau nicht eingerastet: Der Übergangswiderstand ist zu hoch, das Steuergerät erkennt das beim Selbsttest und schaltet die Kontrollleuchte ein.",
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
  "id": "e35a64c10ba1",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 13,
  "q": "Falls die Airbag-Einheit ausgebaut werden muss: Nennen Sie vier Regeln für Ablage, Transport und Lagerung.",
  "punkte": [
   "Mit der Polsterseite nach oben ablegen, beim Tragen das Polster vom Körper weg halten",
   "Nicht an der Leitung oder am Stecker tragen",
   "Keine Wärme über ca. 100 °C, kein offenes Feuer, keine Fette oder Reinigungsmittel",
   "Gesichert in einem abschließbaren Raum bzw. Behälter lagern (Mengengrenzen nach Lagerrichtlinie LR 240)"
  ],
  "explain": "Liegt das Polster unten und die Einheit löst aus, wird sie wie ein Geschoss hochgeschleudert. Mit dem Polster nach oben entfaltet sich der Sack frei nach oben. Für den Transport möglichst die Originalverpackung nutzen.",
  "src": "Netz: Recherche 3.4/3.6 (kfz-tech.de, TÜV SÜD)"
 },
 {
  "id": "2ef8fd61d2f0",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 14,
  "q": "Nennen Sie die rechtlichen Voraussetzungen, damit Ihr Betrieb Airbag- und Gurtstraffereinheiten aus- und einbauen darf.",
  "punkte": [
   "Airbag- und Gurtstraffereinheiten sind pyrotechnische Gegenstände der Kategorie P1 (Sprengstoffrecht)",
   "Ein- und Ausbau nur mit entsprechender Fachkunde bzw. Schulung (eingeschränkte Fachkunde)",
   "Die Tätigkeit muss vor Aufnahme bei der zuständigen Behörde angezeigt werden"
  ],
  "explain": "Dazu kommen die Regeln zur Lagerung (LR 240) und zur Entsorgung. Wer ohne Schulung an Airbags arbeitet, gefährdet sich und andere und handelt gegen das Sprengstoffrecht.",
  "src": "Netz: Recherche 3.4 (TÜV SÜD, Behördenportale, autoservicepraxis)"
 },
 {
  "id": "baf8ee8aa7eb",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "situation": "airbag-sitz",
  "nr": 15,
  "q": "Der Kunde fragt nebenbei, was bei seinem Zweitwagen nach einem Unfall mit ausgelösten Frontairbags zu ersetzen ist. Nennen Sie drei Punkte.",
  "punkte": [
   "Alle ausgelösten Airbag-Einheiten und Gurtstraffer ersetzen",
   "Airbag-Steuergerät nach Herstellerangabe ersetzen (Crashdaten gespeichert)",
   "Betroffene Sensoren, Wickelfeder, Gurte und Halterungen nach Herstellervorgabe prüfen bzw. ersetzen"
  ],
  "explain": "Ausgelöste pyrotechnische Teile sind verbraucht. Das Steuergerät hat den Crash gespeichert und ist nach Herstellervorgabe zu tauschen; danach wird das neue Gerät codiert.",
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
  "id": "c2687d54c574",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "airbag-sitz",
  "nr": 17,
  "q": "Sie haben den Stecker unter dem Sitz als Fehlerursache gefunden. Nennen Sie vier Abschlussarbeiten.",
  "punkte": [
   "Steckverbindung einrasten und verriegeln, Leitung zugfrei und scheuerfrei verlegen",
   "Batterie nach Herstellervorgabe anklemmen – dabei hält sich niemand im Fahrzeug auf",
   "Fehlerspeicher auslesen und löschen",
   "Kontrollleuchte (Selbsttest, geht aus) und Zündkreis-Messwerte im Tester kontrollieren"
  ],
  "explain": "Erst wenn die Leuchte nach dem Selbsttest erlischt und kein Fehler mehr gespeichert ist, ist das System wieder voll einsatzbereit. Die Arbeit wird im Auftrag dokumentiert.",
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
  "id": "d5bf8739fc60",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie den Aufbau eines pyrotechnischen Gasgenerators und den Unterschied zwischen einstufiger und zweistufiger Ausführung.",
  "punkte": [
   "Gehäuse mit Zündpille, Treibladung (fester Treibstoff) und Filter bzw. Kühlsieb",
   "Die bestromte Zündpille zündet die Treibladung, das entstehende Gas strömt in den Luftsack",
   "Einstufig: eine Treibladung, immer gleiche Aufblaswirkung",
   "Zweistufig: zwei getrennt zündbare Ladungen – je nach Unfallschwere und Gurtstatus zündet nur Stufe 1 oder beide zeitversetzt"
  ],
  "explain": "Mit zwei Stufen kann das Steuergerät den Airbag weicher oder härter füllen. Auch eine nicht gezündete zweite Stufe ist nach einem Unfall noch scharf – Einheit trotzdem als pyrotechnischen Gegenstand behandeln.",
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
  "id": "6cbc93212a1b",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie die Aufgabe der Sitzbelegungserkennung am Beifahrersitz und zwei Auswirkungen auf das Rückhaltesystem.",
  "punkte": [
   "Erkennt, ob der Sitz belegt ist (z. B. über eine Sensormatte im Sitzpolster)",
   "Bei unbelegtem Sitz werden Beifahrerairbag bzw. Gurtstraffer bei einem Unfall nicht unnötig ausgelöst",
   "Bei belegtem Sitz ohne angelegten Gurt wird die Gurtwarnung ausgegeben"
  ],
  "explain": "Unnötige Auslösungen verursachen hohe Reparaturkosten. Nach Arbeiten am Sitz muss die Sensormatte richtig angeschlossen sein, sonst erscheint ein Fehler.",
  "src": "FW"
 },
 {
  "id": "55bd5afaa0ff",
  "cat": "Airbag",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Eine Kundin möchte eine rückwärtsgerichtete Babyschale auf dem Beifahrersitz befestigen. Was müssen Sie ihr erklären?",
  "punkte": [
   "Der Beifahrerairbag muss abgeschaltet sein (Schlüsselschalter bzw. Menü nach Herstellerangabe)",
   "Grund: Der sich entfaltende Airbag trifft die Babyschale mit großer Wucht – schwere Verletzungsgefahr",
   "Anzeige „Beifahrerairbag aus“ kontrollieren und nach dem Entfernen der Babyschale wieder einschalten"
  ],
  "explain": "Die Babyschale sitzt sehr nah an der Instrumententafel. Wird der Airbag danach nicht wieder eingeschaltet, fehlt einem erwachsenen Beifahrer der Schutz.",
  "src": "Netz: Recherche 3.4, FW"
 },
 {
  "id": "83ce1e9034c7",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Beim Einbau einer neuen Wickelfeder müssen die Räder geradeaus stehen und die Wickelfeder in Mittelstellung sein. Begründen Sie das und nennen Sie die Folge eines Fehlers.",
  "punkte": [
   "Die Wickelfeder ist ein aufgewickeltes Flachbandkabel mit begrenzter Zahl an Umdrehungen in beide Richtungen",
   "Nur aus der Mittelstellung reicht die Länge für vollen Lenkeinschlag nach links und rechts",
   "Bei falschem Einbau reißt das Band beim Lenken – Zündkreis Fahrerairbag unterbrochen, Hupe und Lenkradtasten ohne Funktion"
  ],
  "explain": "Neue Wickelfedern sind meist mit einer Transportsicherung in Mittelstellung fixiert. Die Sicherung erst nach dem Einbau entfernen und die Wickelfeder bei abgenommenem Lenkrad nicht verdrehen.",
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
  "id": "3ac159dd42bf",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Manche Fahrzeuge haben am Batterie-Pluskabel einen pyrotechnischen Batterietrennschalter. Beschreiben Sie Aufgabe und Folgen der Auslösung.",
  "punkte": [
   "Trennt bei einem schweren Unfall die Hauptleitung von der Batterie zu Starter und Generator",
   "Verhindert Kurzschluss und Brand durch eine beschädigte, nicht abgesicherte Plusleitung",
   "Nach der Auslösung muss das Bauteil ersetzt werden; wichtige Verbraucher (z. B. Warnblinker) bleiben meist versorgt"
  ],
  "explain": "Besonders wichtig, wenn die Batterie im Heck sitzt und die Plusleitung durch das ganze Fahrzeug läuft. Der Trennschalter ist ebenfalls ein pyrotechnisches Bauteil.",
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
  "id": "01f9839bfaca",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie, wie Upfront-Sensoren und Seitenaufprallsensoren einen Aufprall erfassen und wie das Steuergerät die Signale nutzt.",
  "punkte": [
   "Upfront-Sensoren vorn im Fahrzeug messen die Verzögerung mit einem Beschleunigungssensor und melden einen Frontaufprall sehr früh",
   "Seitenaufprallsensoren in B-Säule bzw. Schweller messen die Querbeschleunigung",
   "Drucksensoren in der Tür erfassen den schnellen Druckanstieg, wenn die Tür eingedrückt wird",
   "Das Steuergerät vergleicht die Signale mit seinem eigenen Beschleunigungssensor (Plausibilität), bevor es auslöst"
  ],
  "explain": "Beim Seitenaufprall ist die Knautschzone sehr kurz – deshalb sitzen die Sensoren direkt in der Seite, damit das Steuergerät schnell genug entscheiden kann.",
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
  "id": "caf730215561",
  "cat": "Airbag",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "q": "In einer Übungsschaltung im Labor werden zwei Widerstände mit 3,3 Ω und 6,8 Ω parallel geschaltet. Berechnen Sie den Gesamtwiderstand.",
  "loesung": 2.22,
  "einheit": "Ω",
  "explain": "Parallelschaltung: R = (R1 × R2) ÷ (R1 + R2) = (3,3 Ω × 6,8 Ω) ÷ 10,1 Ω ≈ 2,22 Ω. Der Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
  "src": "FW"
 },
 {
  "id": "7eb109255f0d",
  "cat": "Airbag",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "q": "Berechnen Sie den Strom, der durch eine Zündpille mit 2 Ω fließen würde, wenn versehentlich die Bordnetzspannung von 12 V anliegt.",
  "loesung": 6,
  "einheit": "A",
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
  "id": "e9ba6bcff99e",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Sie prüfen im Innenraum bei eingeschalteter Zündung, die Airbag-Anlage ist also aktiv. Nennen Sie drei Verhaltensregeln.",
  "punkte": [
   "Nicht im Entfaltungsbereich der Airbags aufhalten (nicht vor Lenkrad oder Instrumententafel beugen)",
   "Keine Werkzeuge oder Gegenstände auf oder vor Airbag-Abdeckungen legen",
   "Keine Spannung und kein Messgerät an Airbag-Stecker oder Zündkreis anlegen – nur mit Tester prüfen"
  ],
  "explain": "Löst ein Airbag ungewollt aus, ist der Bereich direkt vor der Abdeckung am gefährlichsten. Gegenstände würden dabei weggeschleudert.",
  "src": "FW"
 },
 {
  "id": "ee5d802a42cd",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Ein Kunde fragt, ob die Airbags in seinem 15 Jahre alten Fahrzeug wegen des Alters getauscht werden müssen. Wie gehen Sie vor?",
  "punkte": [
   "Herstellerangaben bzw. Serviceplan auf ein Tausch- oder Prüfintervall prüfen",
   "Ältere Systeme hatten teils feste Tauschintervalle, neuere gelten meist über die Lebensdauer als wartungsfrei",
   "Funktion über Selbsttest der Kontrollleuchte und Fehlerspeicher prüfen, offene Rückrufe des Herstellers abfragen"
  ],
  "explain": "Eine pauschale Altersgrenze gibt es nicht – maßgeblich ist der Hersteller. Rückrufaktionen wegen fehlerhafter Gasgeneratoren hat es schon gegeben, deshalb die Fahrgestellnummer prüfen.",
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
  "id": "0721681086db",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Beschreiben Sie Aufgabe und Wirkungsweise des Gurtkraftbegrenzers.",
  "punkte": [
   "Begrenzt die Kraft, die der Gurt beim Aufprall auf den Brustkorb ausübt (z. B. gegen Rippenbrüche)",
   "Ab einer bestimmten Gurtkraft gibt er kontrolliert Gurtband frei (z. B. Torsionsstab im Gurtaufroller)",
   "Wirkt mit dem Airbag zusammen: Der Insasse taucht kontrolliert in den Airbag ein"
  ],
  "explain": "Ohne Kraftbegrenzer würde der gestraffte Gurt den Oberkörper sehr hart abfangen. Zusammen mit dem Airbag wird die Verzögerung auf einen längeren Weg verteilt.",
  "src": "FW"
 },
 {
  "id": "6769f0d1d09d",
  "cat": "Airbag",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie vier Dinge, die Sie bei Arbeiten in der Nähe ein- oder ausgebauter Airbag-Einheiten vermeiden müssen.",
  "punkte": [
   "Wärme über ca. 100 °C, offene Flamme und Schweißen in der Nähe (Herstellervorgaben beachten)",
   "Fette, Reinigungs- oder Lösungsmittel auf der Airbag-Abdeckung",
   "Schläge und Stöße – heruntergefallene Einheiten nicht mehr einbauen",
   "Prüfspannung oder Messgerät direkt an die Zündpille anlegen"
  ],
  "explain": "Wärme kann die Treibladung zünden, Lösungsmittel greifen Abdeckung und Sollbruchstelle an, und ein Sturz kann den Gasgenerator innen beschädigen.",
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
  "id": "31269c2bc5ec",
  "cat": "Airbag",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Bei einer Inspektion fällt Ihnen auf, dass die Airbag-Kontrollleuchte beim Einschalten der Zündung gar nicht aufleuchtet. Beurteilen Sie den Befund und nennen Sie das weitere Vorgehen.",
  "punkte": [
   "Befund ist ein Fehler: Der Selbsttest wird nicht angezeigt, ein Systemfehler würde dem Fahrer nicht gemeldet",
   "Mögliche Ursachen: Leuchte bzw. Anzeige im Kombiinstrument, Datenbus/Ansteuerung, Steuergerät ohne Versorgung oder manipuliert",
   "Fehlerspeicher von Airbag-Steuergerät und Kombiinstrument auslesen und den Kunden über den Sicherheitsmangel informieren"
  ],
  "explain": "Die Kontrollleuchte ist Teil der Sicherheitsfunktion. Leuchtet sie nie, kann der Fahrer einen Ausfall des Airbag-Systems nicht erkennen – das ist auch bei der Hauptuntersuchung ein Mangel.",
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
  "id": "ac9aa9f8a4ff",
  "cat": "Bremse",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 2,
  "q": "Die elektrische Parkbremse kann mehr als nur das Fahrzeug im Stand festhalten. Nennen Sie drei weitere Funktionen.",
  "punkte": [
   "Auto-Hold: hält das Fahrzeug nach dem Anhalten, ohne dass der Fahrer auf dem Pedal bleibt",
   "Anfahrassistent: löst die Parkbremse beim Anfahren selbsttätig (auch am Berg)",
   "Dynamische Notbremsung: Taster während der Fahrt gezogen → ESP bremst über alle vier Räder"
  ],
  "explain": "Während der Fahrt bremst nicht der Stellmotor hinten allein, sondern das ESP-Hydroaggregat über alle Räder – so bleibt das Fahrzeug stabil.",
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
  "id": "05c851eb6639",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 5,
  "q": "Vor dem Belagwechsel prüfen Sie die hinteren Bremsscheiben. Nennen Sie vier Prüfungen bzw. Prüfmerkmale.",
  "punkte": [
   "Scheibendicke an mehreren Stellen messen (Bügelmessschraube) und mit der Mindestdicke vergleichen",
   "Seitenschlag mit Messuhr prüfen",
   "Dickentoleranz (Dickenunterschied über den Umfang) prüfen",
   "Oberfläche sichtprüfen: Riefen, Risse, Rostrand, Verfärbung",
   "Grenzwerte aus den Herstellerdaten (Werkstattinformation) entnehmen"
  ],
  "explain": "Seitenschlag und Dickenunterschiede spürt der Fahrer als pulsierendes Bremspedal. Die Mindestdicke ist häufig zusätzlich auf der Scheibe eingeprägt.",
  "src": "FW"
 },
 {
  "id": "d2e9fe2abcf0",
  "cat": "Bremse",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 6,
  "q": "Bremsflüssigkeit ist hygroskopisch. Erklären Sie den Begriff und beschreiben Sie die Folgen für die Bremsanlage.",
  "punkte": [
   "Hygroskopisch: nimmt Wasser (Luftfeuchtigkeit) auf",
   "Mit steigendem Wassergehalt sinkt der Siedepunkt",
   "Bei starker Erwärmung bilden sich Dampfblasen → Pedal fällt durch, Bremswirkung kann ausfallen"
  ],
  "explain": "Dampf lässt sich – anders als Flüssigkeit – zusammendrücken. Deshalb geht bei Dampfblasen der Pedalweg ins Leere. Darum wird die Flüssigkeit nach Herstellervorgabe regelmäßig gewechselt.",
  "src": "TB Bremsflüssigkeit"
 },
 {
  "id": "42c9eb2e92d9",
  "cat": "Bremse",
  "level": 1,
  "typ": "zahl",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 7,
  "tb": true,
  "q": "Im Fahrzeug ist Bremsflüssigkeit DOT 4 eingefüllt. Wie hoch muss ihr Nass-Siedepunkt laut Tabellenbuch mindestens sein?",
  "loesung": 155,
  "einheit": "°C",
  "explain": "Tabelle Bremsflüssigkeiten: DOT 4 – Siedepunkt mind. 230 °C, Nass-Siedepunkt mind. 155 °C.",
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
  "id": "ee4428726ff1",
  "cat": "Bremse",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 9,
  "q": "Beim Wechsel der Bremsflüssigkeit müssen Sie die Bremsanlage entlüften. Beschreiben Sie die Besonderheiten bei einem Fahrzeug mit ESP.",
  "punkte": [
   "Mit Befüll- und Entlüftungsgerät unter dem vorgeschriebenen Druck arbeiten",
   "Entlüfterventile in der Reihenfolge laut Hersteller öffnen",
   "Ist Luft ins Hydroaggregat gelangt, Ventile und Rückförderpumpe mit dem Tester ansteuern (Entlüftungsroutine)",
   "Ausgleichsbehälter nie leer laufen lassen, damit keine Luft ins Hydroaggregat kommt"
  ],
  "explain": "Im Hydroaggregat gibt es Kammern, die beim normalen Entlüften nicht durchströmt werden. Luft dort lässt sich nur mit der Tester-Routine herausspülen.",
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
  "id": "486462ca315c",
  "cat": "Bremse",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 11,
  "q": "Vergleichen Sie einen aktiven und einen passiven Raddrehzahlsensor (Arbeitsprinzip, Versorgung, Signal).",
  "punkte": [
   "Aktiv: Hall- oder magnetoresistives Prinzip, braucht eine Versorgungsspannung vom Steuergerät",
   "Aktiv: Rechtecksignal, erkennt auch sehr kleine Drehzahlen bis fast zum Stillstand",
   "Passiv: induktiv, braucht keine Versorgung, erzeugt eine sinusförmige Wechselspannung",
   "Passiv: Amplitude und Frequenz steigen mit der Drehzahl, bei sehr kleiner Drehzahl kein auswertbares Signal"
  ],
  "explain": "Aktive Sensoren tasten meist einen Magnetring (Multipolring) im Radlager ab, passive ein Zahnrad aus Stahl.",
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
  "id": "24519e5b897b",
  "cat": "Bremse",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 13,
  "q": "Bei der Probefahrt bricht das Heck in einer Kurve aus (Übersteuern). Beschreiben Sie, wie das ESP das erkennt und eingreift.",
  "punkte": [
   "Erkennung: Ist-Gierrate (Sensor) ist größer als die Soll-Gierrate aus Lenkwinkel und Geschwindigkeit",
   "Das kurvenäußere Vorderrad wird gezielt gebremst",
   "Dadurch entsteht ein Gegenmoment, das das Fahrzeug zurückdreht",
   "Zusätzlich wird das Motormoment reduziert"
  ],
  "explain": "Beim Untersteuern ist es umgekehrt: Das Fahrzeug dreht zu wenig, ESP bremst vor allem das kurveninnere Hinterrad.",
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
  "id": "0fb80bd9dddc",
  "cat": "Bremse",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 15,
  "q": "Der Hauptbremszylinder hat 23 mm Kolbendurchmesser, der Kolben im Bremssattel 57 mm. Auf den Kolben des Hauptbremszylinders wirken 2500 N. Berechnen Sie die Spannkraft am Sattelkolben.",
  "loesung": 15354,
  "einheit": "N",
  "explain": "Der Druck ist überall gleich, die Kräfte verhalten sich wie die Flächen: F₂ = F₁ × (d₂ ÷ d₁)² = 2500 N × (57 ÷ 23)² = 2500 N × 6,14 ≈ 15 354 N.",
  "src": "FW"
 },
 {
  "id": "c602725c31f9",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "epb-golf",
  "nr": 16,
  "q": "Der Kunde erwähnt, dass im Frühjahr eine Achsvermessung gemacht wurde. Nennen Sie drei Anlässe, nach denen der Lenkwinkelsensor neu kalibriert werden muss.",
  "punkte": [
   "Nach einer Spur- bzw. Achseinstellung",
   "Nach Arbeiten an der Lenkung, z. B. Tausch von Lenkgetriebe oder Spurstange",
   "Je nach Hersteller nach dem Abklemmen der Batterie bzw. Tausch des Sensors oder Steuergeräts"
  ],
  "explain": "Steht die Nulllage des Sensors nicht auf Geradeausfahrt, rechnet das ESP mit einem falschen Fahrerwunsch und kann falsch eingreifen.",
  "src": "Netz: kfz-dietrich.com (Recherche 3.6)"
 },
 {
  "id": "ae48f590875c",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 17,
  "tb": true,
  "q": "Nach der Reparatur prüfen Sie das Fahrzeug auf dem Rollenbremsprüfstand. Nennen Sie, was gemessen bzw. bewertet wird. Die Grenzwerte entnehmen Sie dem Tabellenbuch.",
  "punkte": [
   "Bremskraft an jedem Rad",
   "Ungleichmäßigkeit der Bremskräfte links/rechts je Achse",
   "Abbremsung des Fahrzeugs aus der Summe der Bremskräfte und der Masse",
   "Wirkung der Feststellbremse (EPB)",
   "Bremskraftschwankung (Unrundheit) einer Radbremse"
  ],
  "explain": "Die Grenzwerte für Mindestabbremsung, Ungleichmäßigkeit und Feststellbremse stehen im Tabellenbuch – dort nachschlagen, nicht aus dem Kopf.",
  "src": "FW, TB (Grenzwerte)"
 },
 {
  "id": "d60c893bc8d0",
  "cat": "Bremse",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "situation": "epb-golf",
  "nr": 18,
  "q": "Nennen Sie vier Abschlussarbeiten, bevor Sie den Golf an den Kunden übergeben.",
  "punkte": [
   "Grundeinstellung der EPB kontrollieren, EPB mehrmals schließen und lösen",
   "Fehlerspeicher auslesen und löschen",
   "Bremsflüssigkeitsstand prüfen und Wechselaufkleber anbringen",
   "Probefahrt mit Bremsprobe, neue Beläge nach Herstellervorgabe einbremsen",
   "Arbeiten und Messwerte im Auftrag dokumentieren"
  ],
  "explain": "Neue Beläge erreichen ihre volle Wirkung erst nach dem Einbremsen. Darauf sollte auch der Kunde hingewiesen werden.",
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
  "id": "61aeb8b22b54",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Ein Fahrzeug mit EPB soll abgeschleppt werden, die Batterie ist leer und die Parkbremse geschlossen. Beschreiben Sie, wie Sie vorgehen.",
  "punkte": [
   "Fahrzeug gegen Wegrollen sichern (Unterlegkeile)",
   "Spannung herstellen (Starthilfe, Ladegerät) und EPB normal mit dem Taster lösen",
   "Geht das nicht: mechanische Notentriegelung nach Herstellerangabe"
  ],
  "explain": "Ohne Strom lässt sich die EPB nicht mit dem Taster lösen. Die Notentriegelung ist je nach Hersteller unterschiedlich, deshalb immer die Reparaturanleitung beachten.",
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
  "id": "cc9d5cb2cd28",
  "cat": "Bremse",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie vier Regeln für den Umgang mit Bremsflüssigkeit in der Werkstatt und begründen Sie sie kurz.",
  "punkte": [
   "Haut- und Augenkontakt vermeiden, Schutzbrille/Handschuhe – sie ist gesundheitsschädlich",
   "Spritzer auf dem Lack sofort mit Wasser abspülen – sie löst Lack",
   "Gebinde sofort verschließen, alte oder abgelassene Flüssigkeit nicht wiederverwenden – sie ist hygroskopisch",
   "Getrennt sammeln und als gefährlichen Abfall entsorgen"
  ],
  "explain": "Gesundheitsschädlich, lacklösend und wasseranziehend – daraus ergeben sich alle Regeln.",
  "src": "TB Bremsflüssigkeit, FW"
 },
 {
  "id": "083945e19651",
  "cat": "Bremse",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Beschreiben Sie Aufgabe und Wirkungsweise eines Unterdruck-Bremskraftverstärkers.",
  "punkte": [
   "Er verstärkt die Fußkraft des Fahrers, damit weniger Pedalkraft nötig ist",
   "Eine Membran trennt eine Unterdruckkammer von einer Kammer, in die beim Bremsen Außenluft strömt – der Druckunterschied erzeugt die Hilfskraft",
   "Unterdruck kommt vom Saugrohr oder von einer Vakuumpumpe (z. B. Diesel)"
  ],
  "explain": "Fällt der Bremskraftverstärker aus, bremst die Anlage weiter, aber der Fahrer muss deutlich stärker treten.",
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
  "id": "458d2591df3a",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Beschreiben Sie die Funktion des Bremsassistenten.",
  "punkte": [
   "Er erkennt eine Notbremsung an der sehr schnellen Pedalbetätigung bzw. dem schnellen Druckanstieg (Bremsdrucksensor)",
   "Er baut dann selbsttätig den vollen Bremsdruck bis in die ABS-Regelung auf",
   "Grund: Viele Fahrer treten in der Notsituation zu zaghaft – der Bremsweg wird kürzer"
  ],
  "explain": "Den Druck erzeugt die Rückförderpumpe im ESP-Hydroaggregat, das Signal liefert der Bremsdrucksensor.",
  "src": "FW"
 },
 {
  "id": "887c8af40e61",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie, wie die Antriebsschlupfregelung (ASR) ein durchdrehendes Antriebsrad erkennt und mit welchen zwei Eingriffen sie reagiert.",
  "punkte": [
   "Erkennung: Vergleich der Raddrehzahlen der Antriebsräder mit denen der nicht angetriebenen Räder",
   "Bremseingriff am durchdrehenden Rad (wirkt wie eine Differenzialsperre)",
   "Eingriff in den Motor: Antriebsmoment wird reduziert"
  ],
  "explain": "Der Bremseingriff hilft vor allem auf einseitig glattem Untergrund. Drehen beide Räder durch, wird vor allem das Motormoment zurückgenommen.",
  "src": "FW"
 },
 {
  "id": "5347899dc524",
  "cat": "Bremse",
  "level": 1,
  "typ": "zahl",
  "pkt": 3,
  "q": "Auf den Kolben eines Hauptbremszylinders (Kolbenfläche 4 cm²) wirkt eine Kraft von 1600 N. Wie groß ist der Druck in bar?",
  "loesung": 40,
  "einheit": "bar",
  "explain": "p = F ÷ A = 1600 N ÷ 4 cm² = 400 N/cm². Da 1 bar = 10 N/cm² ist, sind das 40 bar.",
  "src": "FW"
 },
 {
  "id": "fa0080630f78",
  "cat": "Bremse",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "q": "Am Bremspedal greift die Fußkraft 280 mm vom Drehpunkt an, die Druckstange 70 mm vom Drehpunkt. Der Fahrer tritt mit 150 N. Welche Kraft wirkt auf die Druckstange (ohne Bremskraftverstärker)?",
  "loesung": 600,
  "einheit": "N",
  "explain": "Hebelgesetz: Pedalübersetzung i = 280 mm ÷ 70 mm = 4. F = 150 N × 4 = 600 N.",
  "src": "FW"
 },
 {
  "id": "c397a4f3b2c8",
  "cat": "Bremse",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "tb": true,
  "q": "Ein Pkw mit 1500 kg erreicht auf dem Bremsenprüfstand eine Summe aller Bremskräfte von 9000 N. Berechnen Sie die Abbremsung z (g = 9,81 m/s²).",
  "loesung": 61.2,
  "einheit": "%",
  "explain": "z = ΣF ÷ (m × g) × 100 % = 9000 N ÷ (1500 kg × 9,81 m/s²) × 100 % = 9000 ÷ 14 715 × 100 % ≈ 61,2 %. Ob das reicht, beurteilen Sie mit der Mindestabbremsung aus dem Tabellenbuch.",
  "src": "FW, TB (Grenzwert)"
 },
 {
  "id": "1b05d1a10003",
  "cat": "Bremse",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "tb": true,
  "q": "An der Vorderachse misst der Prüfstand links 2800 N und rechts 2300 N Bremskraft. Berechnen Sie die Ungleichmäßigkeit, bezogen auf den größeren Wert.",
  "loesung": 17.9,
  "einheit": "%",
  "explain": "Ungleichmäßigkeit = (2800 N − 2300 N) ÷ 2800 N × 100 % ≈ 17,9 %. Den zulässigen Höchstwert entnehmen Sie dem Tabellenbuch.",
  "src": "FW, TB (Grenzwert)"
 },
 {
  "id": "ef720383bb9d",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "q": "Die ABS-Kontrollleuchte leuchtet, im Fehlerspeicher steht „Raddrehzahlsensor hinten links – Signal unplausibel“. Nennen Sie vier mögliche Ursachen.",
  "punkte": [
   "Impuls- bzw. Magnetring verschmutzt oder beschädigt",
   "Luftspalt zu groß, z. B. Sensor nicht richtig eingesetzt oder Radlagerspiel",
   "Leitung oder Stecker beschädigt bzw. korrodiert",
   "Sensor selbst defekt"
  ],
  "explain": "Erst Sichtprüfung und Leitungsprüfung, dann das Signal mit dem Oszilloskop beim Drehen des Rades ansehen – erst danach den Sensor tauschen.",
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
  "id": "0b13d38e318c",
  "cat": "Bremse",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nach einer Achsvermessung beanstandet der Kunde, dass die ESP-Kontrollleuchte leuchtet. Nennen Sie die wahrscheinliche Ursache und die Abhilfe.",
  "punkte": [
   "Lenkwinkelsensor wurde nach der Vermessung nicht neu kalibriert – Nulllage passt nicht mehr zur Geradeausstellung",
   "Grundeinstellung des Lenkwinkelsensors mit dem Tester bei geradeaus gestellten Rädern durchführen",
   "Fehlerspeicher löschen und mit einer Probefahrt prüfen"
  ],
  "explain": "Das ESP vergleicht Lenkwinkel und Gierrate. Passt die Nulllage nicht, sind die Werte unplausibel und das System schaltet sich mit Warnung ab.",
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
  "id": "de941dd30c42",
  "cat": "Bremse",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Ein Fahrzeug schiebt in einer Kurve über die Vorderräder nach außen (Untersteuern). Beschreiben Sie Erkennung und Eingriff des ESP.",
  "punkte": [
   "Erkennung: Ist-Gierrate ist kleiner als die Soll-Gierrate aus Lenkwinkel und Geschwindigkeit",
   "Das kurveninnere Hinterrad wird gezielt gebremst",
   "Das erzeugt ein Drehmoment, das das Fahrzeug in die Kurve dreht",
   "Zusätzlich wird das Motormoment reduziert"
  ],
  "explain": "Merkhilfe: Untersteuern → innen hinten bremsen, Übersteuern → außen vorne bremsen.",
  "src": "FW"
 },
 {
  "id": "f1170e6e3931",
  "cat": "Bremse",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Beschreiben Sie zwei Verfahren, mit denen der Zustand der Bremsflüssigkeit geprüft werden kann, und beurteilen Sie ihre Aussagekraft.",
  "punkte": [
   "Siedepunkt-Messgerät: erhitzt eine Probe und misst den tatsächlichen Siedepunkt – genaues Verfahren",
   "Wassergehalt-Tester (z. B. Leitfähigkeit): zeigt den Wasseranteil in Prozent – nur eine Abschätzung",
   "Messergebnis mit dem Mindest-Nass-Siedepunkt bzw. der Herstellervorgabe vergleichen"
  ],
  "explain": "Der Siedepunkt ist die eigentliche Größe, auf die es ankommt. Der Wassergehalt ist nur ein Hinweis darauf.",
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
  "id": "2ffcf09944ee",
  "cat": "Diesel",
  "level": 1,
  "typ": "offen",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 1,
  "q": "Nennen Sie die Art der Gemischbildung bei diesem Motor und ihr wichtigstes Merkmal.",
  "punkte": [
   "Common-Rail-Direkteinspritzung (Speichereinspritzung, Kraftstoff direkt in den Brennraum)",
   "Druckerzeugung (Hochdruckpumpe) und Einspritzung (Injektoren) sind voneinander getrennt – der Druck steht im Rail ständig bereit"
  ],
  "explain": "Weil das Rail den Hochdruck speichert, kann das Steuergerät Zeitpunkt, Menge und Anzahl der Einspritzungen unabhängig von Drehzahl und Kolbenstellung festlegen.",
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
  "id": "adc6dd38de0b",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 6,
  "situation": "cr-octavia",
  "nr": 5,
  "q": "Ergänzen Sie die Tabelle „Bauteil → Aufgabe“ für Hochdruckpumpe, Zumesseinheit, Druckregelventil, Raildrucksensor, Injektor und Vorförderpumpe.",
  "punkte": [
   "Hochdruckpumpe: verdichtet den Kraftstoff auf Raildruck und fördert ihn ins Rail",
   "Zumesseinheit: lässt saugseitig nur die benötigte Kraftstoffmenge in die Hochdruckpumpe (Bedarfsregelung)",
   "Druckregelventil: stellt hochdruckseitig den Raildruck ein, indem es Kraftstoff in den Rücklauf absteuert",
   "Raildrucksensor: meldet den Ist-Raildruck als Spannungssignal an das Motorsteuergerät",
   "Injektor: spritzt die vom Steuergerät berechnete Menge zum berechneten Zeitpunkt in den Brennraum",
   "Vorförderpumpe: fördert Kraftstoff aus dem Tank über den Filter zur Hochdruckpumpe"
  ],
  "explain": "Bei der Zweisteller-Regelung teilen sich Zumesseinheit (Menge vor der Pumpe) und Druckregelventil (Druck im Rail) die Raildruckregelung. Der Raildrucksensor liefert dafür den Istwert.",
  "src": "FK 339–342, Format Prüfung Schule"
 },
 {
  "id": "7ff53b8877f7",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 6,
  "q": "Sie schließen den Diagnosetester an. Nennen Sie drei Funktionen der geführten Fehlersuche, die Ihnen bei dieser Beanstandung weiterhelfen.",
  "punkte": [
   "Fehlerspeicher mit Umgebungsbedingungen (Drehzahl, Temperatur, Häufigkeit) auslesen",
   "Messwertblöcke ansehen, z. B. Raildruck Soll/Ist",
   "Mengenvergleich bzw. Leerlaufdrehzahlvergleich (Laufruhe je Zylinder)"
  ],
  "explain": "Ruckeln im Leerlauf deutet auf einen einzelnen Zylinder. Die zylinderbezogenen Testerfunktionen zeigen, welcher Zylinder auffällt, bevor man Teile tauscht.",
  "src": "TB 277, FW"
 },
 {
  "id": "8381c03ec2f5",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 7,
  "q": "Bevor Sie den Hochdruckteil untersuchen, schließen Sie Fehler im Niederdruckkreis aus. Nennen Sie zwei Messungen mit Messgerät und ungefährem Sollwert.",
  "punkte": [
   "Vorförderdruck mit Manometer (Kraftstoffdruck-Prüfgerät) im Zulauf zur Hochdruckpumpe messen",
   "Sollwert Vorförderdruck ca. 2,5–5 bar (Herstellerangabe)",
   "Fördermenge mit Messbecher über eine festgelegte Zeit bzw. Unterdruck vor der Pumpe (Filterdurchlass) messen",
   "Sollwert Fördermenge laut Werkstattinformation bzw. Saugdruck nur ca. −0,2 bis −0,4 bar (höherer Unterdruck = Filter verstopft)"
  ],
  "explain": "Bekommt die Hochdruckpumpe zu wenig Kraftstoff, kann sie den Raildruck nicht halten – die Folge sieht aus wie ein Hochdruckfehler. Darum zuerst den Niederdruck prüfen.",
  "src": "FK 339, Format Prüfung Schule, FW"
 },
 {
  "id": "dca0a77483d7",
  "cat": "Diesel",
  "level": 1,
  "typ": "zahl",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 8,
  "bild": "raildruck-kennlinie.svg",
  "tb": true,
  "q": "Lesen Sie aus der Kennlinie des Raildrucksensors ab: Welche Signalspannung gibt der Sensor bei einem Raildruck von 100 MPa aus?",
  "loesung": 2.5,
  "einheit": "V",
  "explain": "Bei 100 MPa senkrecht nach oben bis zur Kennlinie, dann waagerecht zur Spannungsachse: 2,5 V. Rechnerisch: 0,5 V + 100 MPa × (4,0 V ÷ 200 MPa) = 2,5 V.",
  "src": "FK 340–342, Format Prüfung Schule"
 },
 {
  "id": "0d2f9a340a7d",
  "cat": "Diesel",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 9,
  "q": "Im Messwertblock steht ein Raildruck von 1350 bar, die Werkstattinformation gibt die Sollwerte in MPa an. Rechnen Sie 1350 bar in MPa um.",
  "loesung": 135,
  "einheit": "MPa",
  "explain": "1 MPa = 10 bar → 1350 bar ÷ 10 = 135 MPa.",
  "src": "FW"
 },
 {
  "id": "634f9d6cc2cc",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 5,
  "situation": "cr-octavia",
  "nr": 10,
  "q": "Beschreiben Sie, wie Sie den Raildrucksensor am Steuergerätestecker prüfen (Messgerät, Messpunkte, Sollwerte).",
  "punkte": [
   "Messgerät: Voltmeter (Multimeter, Gleichspannung) über Prüfadapter, Stecker bleibt gesteckt",
   "Versorgungsspannung Plus gegen Masse bei Zündung ein: ca. 5 V",
   "Signal gegen Masse: ca. 0,5 V bei drucklosem Rail, mit steigendem Raildruck bis ca. 4,5 V",
   "Masseleitung: Spannungsfall unter ca. 0,1 V bzw. Durchgang unter 0,5 Ω (stromlos gemessen)",
   "Messwerte mit Kennlinie bzw. Raildruck im Messwertblock vergleichen"
  ],
  "explain": "Erst Versorgung und Masse, dann das Signal prüfen. So erkennt man einen Leitungsfehler, bevor man einen funktionsfähigen Sensor tauscht.",
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
  "id": "8ce23885cb90",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 12,
  "q": "Der Mengenvergleich im Leerlauf zeigt: Zyl. 1 −1,5 / Zyl. 2 −1,3 / Zyl. 3 +4,4 / Zyl. 4 −1,6 mm³/Hub. Beurteilen Sie das Ergebnis und nennen Sie den nächsten Prüfschritt.",
  "punkte": [
   "Zylinder 3 fällt mit einer deutlich positiven Korrektur auf",
   "Positive Korrektur: Zylinder 3 bringt zu wenig Drehmoment, das Steuergerät spritzt dort mehr ein",
   "Mögliche Ursachen: Injektor Zyl. 3 (z. B. innen undicht) oder zu geringe Kompression in Zyl. 3",
   "Nächster Schritt: Rücklaufmengenmessung der Injektoren bzw. Kompressionstest"
  ],
  "explain": "Der Mengenvergleich zeigt die Abweichung jedes Zylinders vom Mittelwert. Ein Zylinder mit großer positiver Korrektur arbeitet zu schwach – die Ursache muss mit weiteren Prüfungen eingegrenzt werden.",
  "src": "TB 277"
 },
 {
  "id": "e48686eef09e",
  "cat": "Diesel",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 13,
  "q": "Bei der Rücklaufmengenmessung (gleiche Messzeit) ergeben sich: Zyl. 1 11 ml, Zyl. 2 13 ml, Zyl. 3 41 ml, Zyl. 4 12 ml. Berechnen Sie das Verhältnis der größten zur kleinsten Rücklaufmenge.",
  "loesung": 3.73,
  "einheit": "",
  "explain": "Größte ÷ kleinste Menge = 41 ml ÷ 11 ml ≈ 3,73.",
  "src": "TB 277"
 },
 {
  "id": "a6693dd03208",
  "cat": "Diesel",
  "level": 2,
  "typ": "mc",
  "pkt": 2,
  "situation": "cr-octavia",
  "nr": 14,
  "q": "Die größte Rücklaufmenge darf höchstens das Dreifache der kleinsten betragen. Wie beurteilen Sie die Messung aus der vorigen Aufgabe?",
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
  "id": "1c527354a64c",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 16,
  "q": "Begründen Sie, warum nach dem Tausch der IMA-Code des neuen Injektors in das Steuergerät eingegeben werden muss.",
  "punkte": [
   "Jeder Injektor hat fertigungsbedingte Mengentoleranzen, die im IMA-Code (Injektor-Mengen-Abgleich) stehen",
   "Mit dem Code berechnet das Steuergerät die Ansteuerdauer für diesen Injektor genauer",
   "Dadurch bekommt jeder Zylinder die gleiche Einspritzmenge (ruhiger Lauf, Abgaswerte)"
  ],
  "explain": "Der mehrstellige Code ist auf dem Injektor aufgedruckt und wird im Tester z. B. unter „Injektoranpassung“ eingegeben.",
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
  "id": "fc533249832e",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "cr-octavia",
  "nr": 18,
  "q": "Nennen Sie vier abschließende Arbeiten nach dem Injektortausch.",
  "punkte": [
   "Fehlerspeicher löschen",
   "Mengenvergleich bzw. Laufruhe im Leerlauf erneut prüfen",
   "Hochdruckanschlüsse bei laufendem Motor auf Dichtheit sichtprüfen (bzw. Hochdrucktest)",
   "Probefahrt und danach Fehlerspeicher erneut auslesen"
  ],
  "explain": "Erst wenn nach der Probefahrt kein neuer Fehler gespeichert ist und alle Zylinder gleichmäßig arbeiten, ist die Reparatur abgeschlossen. Danach Motorabdeckung montieren.",
  "src": "Format Prüfung Schule, FW"
 },
 {
  "id": "336edfa89bd8",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "cr-octavia",
  "nr": 19,
  "q": "Das Fahrzeug hat eine SCR-Anlage. Erklären Sie, warum die AdBlue-Leitung und das Dosierventil nach dem Abstellen des Motors leergesaugt werden.",
  "punkte": [
   "AdBlue gefriert bereits bei ca. −11 °C",
   "Gefrierendes AdBlue dehnt sich aus bzw. kristallisiert und kann Leitung und Dosierventil beschädigen oder verstopfen",
   "Das Fördermodul pumpt die Lösung deshalb über ein Umkehrventil in den Tank zurück (Tank und Modul sind zusätzlich beheizt)"
  ],
  "explain": "Was im Tank einfriert, taut die Heizung nach dem Start wieder auf. In der dünnen Leitung und im Dosierventil darf dagegen nichts stehen bleiben.",
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
  "id": "271f0683677b",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Vergleichen Sie die Folgen eines Ausfalls des Druckregelventils mit denen eines Ausfalls des Raildrucksensors.",
  "punkte": [
   "Ausfall Druckregelventil: Raildruck lässt sich nicht mehr einstellen, nur ca. 100 bar Federdruck → Motor läuft nicht",
   "Ausfall Raildrucksensor: Steuergerät kennt den Ist-Druck nicht mehr",
   "Raildrucksensor: Steuergerät steuert das Druckregelventil mit einem festen Ersatzwert an → Notlauf mit eingeschränkter Leistung bzw. bei unplausiblem Signal Motorabschaltung",
   "In beiden Fällen: Fehlerspeichereintrag und Motorkontrollleuchte"
  ],
  "explain": "Der Sensor liefert nur den Istwert – ohne ihn arbeitet das System gesteuert statt geregelt weiter. Ohne Stellglied kann dagegen gar kein ausreichender Druck aufgebaut werden.",
  "src": "FK 340–342, TB 278–279"
 },
 {
  "id": "561f7af987b0",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie Aufgabe und Wirkungsweise eines Druckbegrenzungsventils am Rail und unterscheiden Sie die einstufige von der zweistufigen Ausführung.",
  "punkte": [
   "Schützt das Hochdrucksystem vor Überdruck: öffnet bei zu hohem Druck (ca. 2500 bar) eine Ablaufbohrung zum Rücklauf",
   "Wird vor allem bei saugseitiger Regelung gebraucht, z. B. wenn die stromlos offene ZME ausfällt",
   "Einstufig: nach dem Ansprechen wird der Motor abgestellt",
   "Zweistufig: hält danach einen niedrigeren Druck (z. B. ca. 400 bar) → eingeschränkte Weiterfahrt mit erhöhter Leerlaufdrehzahl"
  ],
  "explain": "Das Druckbegrenzungsventil ist eine reine Sicherheitseinrichtung. Es regelt den Druck nicht, sondern begrenzt ihn nur nach oben.",
  "src": "FK 340–342"
 },
 {
  "id": "c7bd9e4e2628",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Die Werkstattinformation nennt für die Zumesseinheit: Leerlauf – Raildruck 22–35 MPa, Tastverhältnis 35–45 %; Volllast – Raildruck 135–200 MPa, Tastverhältnis 90–100 %. Beschreiben Sie, wie sich Raildruck und Tastverhältnis bei steigender Last ändern, und begründen Sie.",
  "punkte": [
   "Der Raildruck steigt mit der Last von ca. 22–35 MPa auf bis zu 135–200 MPa",
   "Das angezeigte Tastverhältnis der Zumesseinheit steigt ebenfalls (von ca. 40 % auf bis zu 100 %)",
   "Das Steuergerät passt so die Fördermenge der Hochdruckpumpe dem höheren Bedarf an (mehr Einspritzmenge, höherer Druck)"
  ],
  "explain": "Wie der Tester das Tastverhältnis bezieht (bestromter oder unbestromter Anteil), ist herstellerabhängig. Beurteilen Sie Messwerte deshalb immer mit den Sollwerten der Werkstattinformation.",
  "src": "Prüfung Schule (Format), FW"
 },
 {
  "id": "1dd6c29dfb68",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie drei Vorteile der saugseitigen Regelung mit Zumesseinheit gegenüber der rein hochdruckseitigen Regelung.",
  "punkte": [
   "Die Hochdruckpumpe verdichtet nur die benötigte Menge → geringere Leistungsaufnahme",
   "Weniger Kraftstoff fließt unter Hochdruck in den Rücklauf",
   "Der Kraftstoff erwärmt sich weniger (geringere Kraftstofftemperatur)"
  ],
  "explain": "Jeder Liter, der erst auf Hochdruck gebracht und dann wieder abgesteuert wird, kostet Motorleistung und heizt den Kraftstoff auf.",
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
  "id": "4a2812ba0d05",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 6,
  "q": "Ergänzen Sie die Tabelle zur Prüfung der Zumesseinheit (Plus dauerhaft über Sicherung, Ansteuerung masseseitig vom Steuergerät): Prüfung → Messgerät → Messpunkte/Bedingung → Sollwert für Versorgung, Wicklungswiderstand und Ansteuerung.",
  "punkte": [
   "Versorgung: Voltmeter, Plus-Pin der ZME gegen Fahrzeugmasse, Zündung ein",
   "Sollwert Versorgung: Bordnetzspannung (ca. 12 V)",
   "Widerstand: Ohmmeter, an beiden Pins der ZME, Zündung aus und Stecker abgezogen",
   "Sollwert Widerstand: laut Werkstattinformation (wenige Ohm)",
   "Ansteuerung: Oszilloskop, Steuerleitung (Masseseite) gegen Fahrzeugmasse, Motor läuft",
   "Sollbild: Rechtecksignal (PWM) zwischen ca. 0 V und Bordnetzspannung, Tastverhältnis ändert sich mit dem Lastzustand"
  ],
  "explain": "Spannung und Ansteuerung werden im Betrieb gemessen, der Widerstand nur stromlos. Ein PWM-Signal lässt sich nur mit dem Oszilloskop sicher beurteilen.",
  "src": "Format Prüfung Schule, TB 278–279, FW"
 },
 {
  "id": "14c7fff78ea5",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "An der abgezogenen Zumesseinheit messen Sie einen Wicklungswiderstand von 50 Ω. Die Werkstattinformation gibt 2–5 Ω vor. Beurteilen Sie das Messergebnis und nennen Sie die Folgen.",
  "punkte": [
   "Der Widerstand ist deutlich zu hoch (Wicklung bzw. Kontakt hochohmig, z. B. Teilunterbrechung oder Korrosion)",
   "Folge: Der Strom ist zu klein, die Zumesseinheit lässt sich nicht mehr richtig verstellen → Raildruckregelung gestört",
   "Messung direkt an den Pins wiederholen, Steckkontakte prüfen und bei bestätigtem Wert die Zumesseinheit ersetzen"
  ],
  "explain": "Nach dem ohmschen Gesetz fließt bei zehnfachem Widerstand nur ein Zehntel des Stroms – die Magnetkraft reicht dann nicht mehr. Den Sollwert immer aus der Werkstattinformation des Fahrzeugs nehmen.",
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
  "id": "2c2b56c6c3b2",
  "cat": "Diesel",
  "level": 1,
  "typ": "zahl",
  "pkt": 3,
  "q": "Das Oszilloskop zeigt an der Zumesseinheit 4 ms Einschaltzeit bei einer Periodendauer von 10 ms. Berechnen Sie das Tastverhältnis.",
  "loesung": 40,
  "einheit": "%",
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
  "id": "5b25de68ff0e",
  "cat": "Diesel",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie zwei besondere Regeln beim Umgang mit Piezo-Injektoren (mit Rücklauf) und begründen Sie jede.",
  "punkte": [
   "Ausgebaute Injektoren stehend lagern",
   "Begründung: Sonst läuft der hydraulische Koppler leer und lässt sich nicht wieder befüllen → Injektor unbrauchbar",
   "Steckverbindung nie bei laufendem Motor trennen",
   "Begründung: Der Injektor kann offen stehen bleiben → unkontrollierte Einspritzung, Motorschaden"
  ],
  "explain": "Beide Regeln stehen auch in den Werkstatthinweisen der Hersteller. Ein falsch gelagerter Piezo-Injektor ist ein teurer Fehler.",
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
  "id": "6eb771b35db7",
  "cat": "Diesel",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "q": "Bei einer Rücklaufmengenmessung beträgt die kleinste Rücklaufmenge 9 ml. Wie groß darf die größte Rücklaufmenge höchstens sein?",
  "loesung": 27,
  "einheit": "ml",
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
  "id": "66474dd5c58d",
  "cat": "Diesel",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Der dynamische Kompressionstest ergibt folgende Starterdrehzahlen: Zyl. 1 259, Zyl. 2 258, Zyl. 3 257, Zyl. 4 280 1/min. Beurteilen Sie das Ergebnis.",
  "punkte": [
   "Zyl. 4 dreht deutlich schneller (über 20 1/min Unterschied, zulässig sind nur ca. 7 1/min)",
   "Höhere Starterdrehzahl bedeutet: Der Kolben muss weniger verdichten → Kompression in Zyl. 4 zu gering",
   "Mögliche Ursachen: undichte Ventile, verschlissene Kolbenringe, defekte Zylinderkopfdichtung",
   "Nächster Schritt: Kompressionsdruck messen bzw. Druckverlusttest an Zyl. 4"
  ],
  "explain": "Beim dynamischen Kompressionstest ist die Einspritzung abgeschaltet. Ein Zylinder mit wenig Kompression bremst den Anlasser weniger – deshalb steigt die Drehzahl in seinem Verdichtungstakt.",
  "src": "TB 277"
 },
 {
  "id": "9ae5fd94935b",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Beschreiben Sie, wie der Hochdrucktest mit dem Diagnosetester abläuft und was er prüft.",
  "punkte": [
   "Das Steuergerät steuert ZME und Druckregelventil gezielt an und baut bei vorgegebener Drehzahl (ca. 3500 1/min) den höchsten Systemdruck auf",
   "Geprüft wird die Förderleistung der Hochdruckpumpe sowie Druckaufbau und Druckabbau",
   "Geprüft wird die innere und äußere Dichtheit des Hochdruckteils"
  ],
  "explain": "Erreicht die Anlage den Solldruck nicht oder fällt er zu schnell ab, liegt der Fehler bei Pumpe, Regelventilen oder Undichtheiten.",
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
  "id": "15398fed2f3a",
  "cat": "Diesel",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "bild": "raildruck-kennlinie.svg",
  "q": "Ein Raildrucksensor gibt 0,5 V bei 0 bar und 4,5 V bei 2000 bar aus (Kennlinie linear). Im Messwertblock lesen Sie 3,1 V. Welchem Raildruck in bar entspricht das?",
  "loesung": 1300,
  "einheit": "bar",
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
  "id": "206294407f1e",
  "cat": "Diesel",
  "level": 1,
  "typ": "offen",
  "pkt": 2,
  "q": "Nennen Sie die Aufgaben des Sperrkatalysators hinter dem SCR-Katalysator.",
  "punkte": [
   "Verhindert, dass überschüssiges Ammoniak ins Freie gelangt (stechender Geruch, gesundheitsschädlich)",
   "Wandelt das bei der DPF-Regeneration entstehende Kohlenmonoxid (CO) in CO₂ um"
  ],
  "explain": "Wird mehr AdBlue dosiert, als der SCR-Kat umsetzen kann, tritt Ammoniak aus („Ammoniakschlupf“). Der Sperrkat fängt das ab.",
  "src": "FK 357"
 },
 {
  "id": "68577fb6090a",
  "cat": "Diesel",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Eine SCR-Anlage hat zwei NOx-Sensoren. Beschreiben Sie, wo sie sitzen und wofür das Steuergerät ihre Signale nutzt.",
  "punkte": [
   "NOx-Sensor 1 sitzt vor dem Dosierventil und misst die Stickoxide aus dem Motor",
   "Daraus berechnet das Steuergerät die benötigte AdBlue-Dosiermenge",
   "NOx-Sensor 2 sitzt nach dem SCR-Kat und überwacht, ob die Stickoxide ausreichend reduziert wurden (Wirkungsgrad, Korrektur der Dosierung)"
  ],
  "explain": "Zeigt Sensor 2 zu hohe Werte, ist der Wirkungsgrad zu schlecht – z. B. durch falsches AdBlue, Kristalle am Dosierventil oder einen gealterten Kat. Das Steuergerät speichert dann einen Fehler.",
  "src": "FK 357, FW"
 },
 {
  "id": "d24128e22db6",
  "cat": "Diesel",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie vier Regeln für den Umgang mit AdBlue in der Werkstatt.",
  "punkte": [
   "Verschüttetes AdBlue sofort mit Wasser abwaschen – es greift Lack und manche Metalle an",
   "AdBlue nie in den Kraftstofftank füllen (und keinen Diesel in den AdBlue-Tank)",
   "Weiße Kristalle an Einfüllstutzen, Leitungen oder Dosierventil mit warmem Wasser entfernen",
   "Nur saubere Behälter verwenden, Kanister verschlossen und vor Hitze geschützt lagern (Zersetzung ab ca. 60 °C)"
  ],
  "explain": "AdBlue ist kein Gefahrstoff, aber sehr kriechfähig. Verunreinigtes oder zersetztes AdBlue kann den SCR-Kat und das Dosiersystem schädigen.",
  "src": "FK 357, TB Betriebsstoffe"
 },
 {
  "id": "80ae9296ef3b",
  "cat": "Diesel",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Im Kombiinstrument erscheint „AdBlue nachfüllen – Motorstart in 800 km nicht mehr möglich“. Erklären Sie dem Kunden die Meldung und das weitere Vorgehen.",
  "punkte": [
   "Ohne AdBlue würde das Fahrzeug die Abgasgrenzwerte überschreiten, deshalb zählt das System eine Restreichweite herunter",
   "Bei 0 km ist nach dem Abstellen kein Neustart mehr möglich (Startsperre)",
   "AdBlue in ausreichender Menge nachfüllen (Herstellerangabe), danach prüfen, ob die Warnung erlischt"
  ],
  "explain": "Die Startsperre ist gesetzlich vorgeschrieben. Bleibt die Warnung trotz vollem Tank, liegt ein Fehler im System vor (z. B. Füllstandsgeber, Kristalle im Fördermodul).",
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
  "id": "ade5610348e6",
  "cat": "Grundlagen",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie drei Prüfungen, mit denen Sie einen Sensor mit drei Anschlüssen (Versorgung, Signal, Masse) am Steuergerätestecker prüfen.",
  "punkte": [
   "Versorgungsspannung (ca. 5 V) gegen Masse messen",
   "Signalspannung gegen Masse messen und mit dem Sollwert vergleichen",
   "Masseleitung prüfen (Spannungsfall bzw. Durchgang < 0,5 Ω)"
  ],
  "explain": "Erst Versorgung und Masse, dann das Signal prüfen – so findet man Leitungsfehler, bevor man den Sensor tauscht.",
  "src": "Format Schulprüfung, FW"
 },
 {
  "id": "79f06b438734",
  "cat": "Grundlagen",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "q": "Ein Raildruck von 160 MPa entspricht wie viel bar?",
  "loesung": 1600,
  "einheit": "bar",
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
  "id": "5f135633453c",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 3,
  "q": "Das Fahrzeug ist mit R1234yf befüllt. Nennen Sie drei Eigenschaften bzw. Besonderheiten dieses Kältemittels.",
  "punkte": [
   "Geringes Treibhauspotenzial (GWP unter 150)",
   "Schwer entflammbar (Sicherheitsklasse A2L)",
   "Darf nicht mit R134a gemischt werden – eigene Serviceanschlüsse und eigenes Servicegerät"
  ],
  "explain": "R1234yf ersetzt in Neufahrzeugen R134a, weil es das Klima viel weniger belastet. Dafür ist es schwach brennbar. Der Kreislauf ist gleich aufgebaut, Anschlüsse und Geräte sind aber verschieden, damit nichts verwechselt wird.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "5e5ec8d1bb61",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 4,
  "q": "Bevor Sie den Kältekreis öffnen: Nennen Sie drei Voraussetzungen, damit Sie an dieser Anlage arbeiten dürfen.",
  "punkte": [
   "Sachkundenachweis (Bescheinigung) für Arbeiten an Kälteanlagen in Fahrzeugen",
   "Zugelassenes Klimaservicegerät für R1234yf",
   "Gut belüfteter Arbeitsplatz, nicht über einer Arbeitsgrube"
  ],
  "explain": "Wer Kältemittel absaugt oder einfüllt, braucht eine Sachkundebescheinigung. Für R1234yf ist ein eigenes Servicegerät vorgeschrieben. Weil das Kältemittel schwerer als Luft ist, sammelt es sich in Gruben.",
  "src": "Recherche 3.3/3.6, FW"
 },
 {
  "id": "a45ad6796526",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 5,
  "q": "Nennen Sie vier Vorprüfungen, die Sie ohne Klimaservicegerät durchführen können.",
  "punkte": [
   "Sichtprüfung auf Undichtheit (Ölspuren, Beschädigungen z. B. am Kondensator)",
   "Prüfen, ob der Verdichter arbeitet bzw. angesteuert wird (Messwerte Regelventil im Tester)",
   "Prüfen, ob Kondensatorlüfter und Innenraumgebläse laufen",
   "Innenraumfilter und Kondenswasserablauf prüfen",
   "Ausströmtemperatur an der Mitteldüse mit Thermometer messen",
   "Fehlerspeicher von Klima- und Motorsteuergerät auslesen"
  ],
  "explain": "Viele Fehler findet man schon ohne Manometer: Ölspuren zeigen Lecks (das Kältemittel trägt Öl mit), ein ausgefallener Lüfter oder ein zugesetzter Filter mindern die Kühlleistung.",
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
  "id": "1c38c69f6bf8",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 7,
  "q": "Am Servicegerät lesen Sie bei laufendem Motor ab: Niederdruck und Hochdruck liegen beide deutlich unter den Sollwerten aus dem Tabellenbuch. Beurteilen Sie das Messergebnis und begründen Sie Ihre Aussage.",
  "punkte": [
   "Beide Drücke zu niedrig deutet auf Unterfüllung (zu wenig Kältemittel im Kreislauf)",
   "Der Verdampfer wird nicht ausreichend mit Kältemittel versorgt → geringe Kühlleistung",
   "Kältemittel verbraucht sich nicht – es muss ein Leck geben",
   "Nächster Schritt: Leck suchen, nicht einfach nachfüllen"
  ],
  "explain": "Fehlt Kältemittel, kann der Verdichter auf der Hochdruckseite keinen normalen Druck aufbauen, und auch der Saugdruck sinkt. Da der Kreislauf geschlossen ist, bedeutet Kältemittelverlust immer eine Undichtheit.",
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
  "id": "c8e2ef1bdf91",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 9,
  "q": "Nennen Sie drei Verfahren, mit denen Sie das Leck suchen können.",
  "punkte": [
   "UV-Kontrastmittel im Öl und UV-Lampe (mit Brille)",
   "Elektronischer Lecksucher (spricht auf Kältemittel in der Luft an)",
   "Formiergas (Stickstoff-Wasserstoff-Gemisch) einfüllen und mit Wasserstoff-Lecksucher prüfen"
  ],
  "explain": "Hier zeigt die UV-Lampe Kontrastmittel am Kondensator hinter einem Steinschlag. Formiergas eignet sich, wenn kein Kältemittel mehr im Kreislauf ist. Ein Vakuumtest zeigt nur, dass es undicht ist, nicht wo.",
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
  "id": "4c7cc43181cd",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 12,
  "q": "Begründen Sie, warum der Trockner erneuert werden muss, wenn der Kreislauf geöffnet wurde.",
  "punkte": [
   "Das Trockenmittel hat Feuchtigkeit aus der Luft aufgenommen und ist gesättigt",
   "Feuchtigkeit bildet mit Kältemittel und Öl Säure → Korrosion im Kreislauf",
   "Freies Wasser kann am Expansionsventil gefrieren und den Durchfluss sperren"
  ],
  "explain": "Der Trockner kann nur eine begrenzte Menge Wasser binden. Ist der Kreislauf offen, ist er schnell voll. Ein neuer Trockner schützt Verdichter und Expansionsventil.",
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
  "id": "83aa29a0ce10",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 14,
  "q": "Ein Kollege will das übrige Öl später in einem Hybridfahrzeug mit elektrischem Verdichter verwenden. Erklären Sie, warum dort POE-Öl vorgeschrieben ist.",
  "punkte": [
   "Im elektrischen Verdichter wird der Hochvolt-Elektromotor von Kältemittel und Öl umströmt",
   "POE-Öl ist nicht elektrisch leitend und hält die Isolation des HV-Motors aufrecht",
   "Falsches (leitendes) Öl verschlechtert den Isolationswiderstand → HV-Fehler bzw. Gefahr"
  ],
  "explain": "POE ist außerdem wasserabweisend und darf nicht mit anderen Ölen gemischt werden. Schon Reste von PAG im Servicegerät können bei E-Verdichtern schaden – das Gerät muss dafür geeignet sein.",
  "src": "TB Betriebsstoffe (Kompressoröle), FW"
 },
 {
  "id": "d0e049e02cfd",
  "cat": "Klima",
  "level": 2,
  "typ": "zahl",
  "pkt": 2,
  "situation": "klima-bmw",
  "nr": 15,
  "q": "Laut Typschild beträgt die Füllmenge 590 g R1234yf. Das Servicegerät hat 340 g abgesaugt. Wie viel Prozent der Füllmenge haben gefehlt?",
  "loesung": 42.4,
  "einheit": "%",
  "explain": "Fehlmenge = 590 g − 340 g = 250 g. Anteil = 250 g ÷ 590 g × 100 % ≈ 42,4 %.",
  "src": "FW"
 },
 {
  "id": "24566bd77439",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "situation": "klima-bmw",
  "nr": 16,
  "q": "Der Kunde klagt auch über muffigen Geruch. Nennen Sie die Ursache und zwei Maßnahmen zur Abhilfe.",
  "punkte": [
   "Ursache: Bakterien und Pilze am feuchten Verdampfer",
   "Verdampfer reinigen bzw. desinfizieren",
   "Innenraumfilter erneuern und Kondenswasserablauf auf Durchgang prüfen"
  ],
  "explain": "Am Verdampfer schlägt sich Feuchtigkeit nieder – im Dunkeln wachsen dort Keime. Ein verstopfter Ablauf lässt Wasser im Gehäuse stehen. Tipp für den Kunden: vor dem Abstellen kurz ohne Klima weiterlüften.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "f9259322a50d",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 17,
  "q": "Nennen Sie vier Sicherheitsregeln beim Arbeiten am Kältekreis.",
  "punkte": [
   "Schutzbrille tragen (flüssiges Kältemittel verletzt die Augen)",
   "Schutzhandschuhe tragen – austretendes Kältemittel verdampft und verursacht Erfrierungen",
   "Nicht in der Arbeitsgrube arbeiten – Kältemittel ist schwerer als Luft und verdrängt den Sauerstoff",
   "Keine offene Flamme, nicht rauchen (R1234yf brennbar, giftige Zersetzungsprodukte)",
   "Arbeitsplatz gut belüften"
  ],
  "explain": "Beim Verdampfen entzieht das Kältemittel der Umgebung sehr viel Wärme – auf der Haut gibt es Erfrierungen. In der Grube kann man ersticken, ohne es zu merken.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "4b770210148d",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "situation": "klima-bmw",
  "nr": 18,
  "q": "Nennen Sie vier Abschlussarbeiten, bevor Sie das Fahrzeug an den Kunden übergeben.",
  "punkte": [
   "Dichtheit der neuen Verbindungen prüfen (z. B. elektronischer Lecksucher)",
   "Leistungstest: Ausströmtemperatur und Drücke kontrollieren",
   "Fehlerspeicher auslesen und löschen",
   "Kältemittelart und Füllmenge dokumentieren (abgesaugt / eingefüllt)",
   "Serviceaufkleber bzw. Hinweis im Motorraum aktualisieren"
  ],
  "explain": "Die Dokumentation von Kältemittel und Menge ist vorgeschrieben. Der Leistungstest beweist, dass die Beanstandung „bläst lauwarm“ behoben ist.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "ab0304f79994",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Ein Kunde bittet Sie, die Klimaanlage vor der Reparatur einfach „abzulassen“. Erklären Sie, wie Sie stattdessen vorgehen müssen.",
  "punkte": [
   "Kältemittel darf nicht in die Atmosphäre abgelassen werden (verboten)",
   "Kältemittel mit dem Servicegerät absaugen und recyceln bzw. als Abfall entsorgen",
   "Art und Menge des Kältemittels dokumentieren",
   "Arbeiten nur durch Personen mit Sachkundenachweis"
  ],
  "explain": "Fluorierte Kältemittel schädigen das Klima. Deshalb gilt ein Ablassverbot, und jede Menge, die ab- oder eingefüllt wird, wird aufgeschrieben.",
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
  "id": "1c313bf1ce53",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie, wie ein extern geregelter Verdichter seine Förderleistung anpasst.",
  "punkte": [
   "Die Fördermenge wird über den Hub (Schrägstellung der Taumelscheibe) verändert",
   "Ein Regelventil am Verdichter verstellt den Hub",
   "Das Steuergerät steuert das Regelventil mit einem PWM-Signal an",
   "Die Leistung passt sich stufenlos dem Kältebedarf an; oft ohne Magnetkupplung, bei „Klima aus“ minimaler Hub"
  ],
  "explain": "Statt ständig ein- und auszuschalten wie bei einer Magnetkupplung, läuft der Verdichter mit und fördert nur so viel wie nötig. Das ist leiser, gleichmäßiger und spart Kraftstoff.",
  "src": "FW"
 },
 {
  "id": "ead55838a146",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Erklären Sie, wie die Motorsteuerung auf den Betrieb der Klimaanlage reagiert.",
  "punkte": [
   "Das Klimasteuergerät meldet die Verdichterlast (z. B. über CAN) an das Motorsteuergerät",
   "Im Leerlauf erhöht das Motorsteuergerät vorsorglich das Drehmoment bzw. die Leerlaufdrehzahl, damit der Motor nicht abstirbt",
   "Bei Volllast/Beschleunigen oder zu hoher Kühlmitteltemperatur wird der Verdichter abgeregelt oder abgeschaltet"
  ],
  "explain": "Der Verdichter braucht spürbar Motorleistung. Deshalb tauschen Klima- und Motorsteuergerät Informationen aus und stimmen Last und Kühlbedarf ab.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "26f6780e6c06",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Der Druck-/Temperatursensor auf der Hochdruckseite ist ausgefallen. Beschreiben Sie die Aufgabe des Sensors, die Folgen des Ausfalls und wie Sie ihn prüfen.",
  "punkte": [
   "Aufgabe: Hochdruck überwachen – Schutz vor zu hohem und zu niedrigem Druck",
   "Das Signal wird zur Steuerung von Verdichter und Kondensatorlüfter genutzt",
   "Bei Ausfall schaltet das Steuergerät den Verdichter ab bzw. regelt ihn herunter → keine Kühlung, Fehlerspeichereintrag",
   "Prüfen: Fehlerspeicher und Messwert mit Manometeranzeige vergleichen, Versorgung, Signal und Masse nach Schaltplan messen"
  ],
  "explain": "Ohne gültiges Drucksignal kann das Steuergerät nicht erkennen, ob der Druck gefährlich hoch ist – es schützt die Anlage, indem es den Verdichter stilllegt.",
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
  "id": "0b8c1e22954f",
  "cat": "Klima",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "q": "Das Hochdruckmanometer zeigt einen Überdruck von 14 bar. Der Luftdruck beträgt 1 bar. Wie groß ist der Absolutdruck?",
  "loesung": 15,
  "einheit": "bar",
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
  "id": "8016dee0f92d",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie die Aufgabe des Innenraumfilters und zwei Folgen, wenn er zugesetzt ist.",
  "punkte": [
   "Filtert Staub und Pollen aus der Frischluft (mit Aktivkohle auch Gerüche und Schadgase)",
   "Weniger Luftdurchsatz → geringere Kühl- und Heizleistung",
   "Scheiben beschlagen leichter, muffiger Geruch möglich"
  ],
  "explain": "Der Filter wird nach Wartungsplan gewechselt. Auf die Einbaurichtung achten (Pfeil zur Luftrichtung).",
  "src": "FW"
 },
 {
  "id": "7eed8097ede4",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie Besonderheiten eines elektrischen Klimakompressors in Hybrid- und Elektrofahrzeugen.",
  "punkte": [
   "Wird von einem Elektromotor aus dem Hochvoltnetz angetrieben, unabhängig vom Verbrennungsmotor",
   "Ermöglicht Standklimatisierung und Kühlung der HV-Batterie",
   "Arbeiten nur mit HV-Qualifikation, System vorher spannungsfrei schalten",
   "Nur nicht leitendes POE-Öl verwenden, Servicegerät muss für E-Verdichter geeignet sein"
  ],
  "explain": "Der Elektromotor sitzt im Kältemittelstrom. Leitendes Öl würde die Isolation verschlechtern – deshalb POE und keine PAG-Reste.",
  "src": "Recherche 3.3, TB Betriebsstoffe, FW"
 },
 {
  "id": "10ba4be3b7e7",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Erklären Sie, wie der Kondensatorlüfter angesteuert wird und was bei einem Ausfall passiert.",
  "punkte": [
   "Das Steuergerät steuert den Lüfter abhängig vom Hochdruck (Drucksensor) und der Kühlmitteltemperatur an",
   "Die Drehzahl wird meist stufenlos (PWM, Lüftersteuergerät) angepasst",
   "Bei Ausfall steigt der Hochdruck stark, vor allem im Stand → schlechte Kühlung, Verdichter wird abgeschaltet"
  ],
  "explain": "Im Stand fehlt der Fahrtwind, dann muss der Lüfter die Wärme am Kondensator abführen. Fällt er aus, schützt das Steuergerät die Anlage vor Überdruck.",
  "src": "Recherche 3.3, FW"
 },
 {
  "id": "8e91148c8743",
  "cat": "Klima",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Nach längerer Fahrt lässt die Kühlleistung nach und aus den Düsen kommt kaum noch Luft. Nach einer Pause geht es wieder. Beurteilen Sie das Fehlerbild und nennen Sie mögliche Ursachen.",
  "punkte": [
   "Der Verdampfer vereist: Kondenswasser gefriert an den Lamellen, Luft kommt nicht mehr durch",
   "Ursache: Verdampfertemperatursensor bzw. Regelung defekt, Verdichter regelt nicht ab",
   "Ursache: zu wenig Luftdurchsatz (Innenraumfilter zugesetzt, Gebläse schwach)",
   "Ursache: Feuchtigkeit im Kreislauf vereist am Expansionsventil"
  ],
  "explain": "Die Anlage soll den Verdampfer knapp über 0 °C halten. Taut das Eis in der Pause, funktioniert alles wieder – ein typisches Zeichen für Vereisung.",
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
  "id": "36fda54cf1ac",
  "cat": "Klima",
  "level": 2,
  "typ": "zahl",
  "pkt": 2,
  "tb": true,
  "q": "Ein Kältemittelöl trägt die Bezeichnung „PAG-Öl ISO 46“. Welche kinematische Viskosität in mm²/s bei 40 °C hat es?",
  "loesung": 46,
  "einheit": "mm²/s",
  "explain": "Die ISO-Viskositätsklasse gibt die kinematische Viskosität bei 40 °C an: ISO 46 = 46 mm²/s.",
  "src": "TB Betriebsstoffe (Kompressoröle)"
 },
 {
  "id": "a16349b50a9f",
  "cat": "Klima",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "q": "Beim Evakuieren zeigt das Servicegerät einen Überdruck von −0,95 bar an (Luftdruck 1,0 bar). Wie groß ist der Absolutdruck im Kreislauf in mbar?",
  "loesung": 50,
  "einheit": "mbar",
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
  "id": "0d173c6572a1",
  "cat": "Klima",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "PAG-Öl ist stark hygroskopisch. Erklären Sie den Begriff und nennen Sie zwei Regeln für den Umgang mit dem Öl.",
  "punkte": [
   "Hygroskopisch: nimmt Feuchtigkeit aus der Umgebungsluft auf",
   "Gebinde nach der Entnahme sofort wieder verschließen",
   "Nur Öl nach Herstellervorgabe (Typ, Viskosität, Menge) verwenden, nicht mit anderen Ölen mischen"
  ],
  "explain": "Feuchtes Öl bringt Wasser in den Kreislauf – mit den Folgen Säurebildung und Vereisung. Geschlossene Gebinde sind begrenzt lagerfähig.",
  "src": "TB Betriebsstoffe (Kompressoröle), FK Werkstatthinweise"
 },
 {
  "id": "440804db8ea4",
  "cat": "Klima",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Begründen Sie, warum eine Klimaanlage nach Gewicht und nicht nach Druckanzeige befüllt wird.",
  "punkte": [
   "Die Füllmenge ist vom Hersteller in Gramm vorgegeben (Typschild im Motorraum)",
   "Der Druck hängt stark von der Temperatur ab und sagt wenig über die Menge aus",
   "Unter- oder Überfüllung mindert die Kühlleistung bzw. kann Verdichter und Anlage schädigen"
  ],
  "explain": "Das Servicegerät wiegt das Kältemittel beim Befüllen ab. Druckwerte dienen nur zur Diagnose bei laufender Anlage.",
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
  "id": "f9bd4a829be2",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 1,
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Ihr Lohn als Geselle richtet sich nach dem Tarifvertrag. Erklären Sie den Begriff Tarifautonomie.",
  "punkte": [
   "Grundlage ist die Koalitionsfreiheit nach Art. 9 Abs. 3 Grundgesetz",
   "Gewerkschaften und Arbeitgeberverbände handeln Löhne und Arbeitsbedingungen selbstständig aus",
   "Der Staat mischt sich in die Verhandlungen nicht ein (er setzt nur Mindeststandards per Gesetz, z. B. Mindestlohn)"
  ],
  "explain": "Tarifautonomie heißt: Die Tarifpartner regeln Lohn, Arbeitszeit und Urlaub eigenverantwortlich. Der Staat gibt nur den gesetzlichen Rahmen vor (z. B. Arbeitszeitgesetz, Bundesurlaubsgesetz, Mindestlohngesetz).",
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
  "id": "398ced0757b3",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 6,
  "level": 1,
  "typ": "zahl",
  "pkt": 3,
  "q": "Im Juli 2026 verdienen Sie 3.000 € brutto im Monat. Nach dem Tarifabschluss 2025 im bayerischen Kfz-Handwerk steigen die Entgelte ab August 2026 um 3,3 %. Berechnen Sie Ihren neuen Monatslohn.",
  "loesung": 3099,
  "einheit": "€",
  "toleranz": 0.003,
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
  "id": "f1ebb7c6fb4b",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 9,
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "q": "Mit einer Zulage verdienen Sie 3.100 € brutto im Monat. Der Beitragssatz zur Rentenversicherung beträgt 2026 18,6 %. Berechnen Sie Ihren Arbeitnehmeranteil.",
  "loesung": 288.3,
  "einheit": "€",
  "toleranz": 0.005,
  "explain": "Arbeitnehmer und Arbeitgeber zahlen je die Hälfte: 18,6 % ÷ 2 = 9,3 %. 3.100 € × 9,3 % = 288,30 €.",
  "src": "Netz: lohn-info.de / krankenkassen.de, Rechengrößen 2026"
 },
 {
  "id": "63bc82591122",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 10,
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Ihr Rentenbeitrag wird nicht für Sie angespart. Erklären Sie das Umlageverfahren (Generationenvertrag) und das Problem, das der demografische Wandel dafür bringt.",
  "punkte": [
   "Die Beiträge der heutigen Beschäftigten bezahlen direkt die Renten der heutigen Rentner",
   "Die jetzigen Beitragszahler erwerben dafür einen Anspruch, den später die nächste Generation finanziert",
   "Demografischer Wandel: weniger Geburten und höhere Lebenserwartung, die Babyboomer gehen in Rente",
   "Folge: weniger Beitragszahler pro Rentner → steigende Beiträge, sinkendes Rentenniveau oder höhere Steuerzuschüsse"
  ],
  "explain": "Beim Umlageverfahren gibt es keinen Kapitalstock. Wie gut es funktioniert, hängt am Verhältnis von Beitragszahlern zu Rentnern.",
  "src": "FW"
 },
 {
  "id": "f0ec7bdfa4c7",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 11,
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie die drei Säulen der Altersvorsorge mit je einem Beispiel.",
  "punkte": [
   "Gesetzliche Rentenversicherung (Pflichtbeitrag vom Lohn)",
   "Betriebliche Altersvorsorge (z. B. Entgeltumwandlung über den Arbeitgeber)",
   "Private Vorsorge (z. B. private Rentenversicherung, Riester-Vertrag, Sparplan)"
  ],
  "explain": "Die gesetzliche Rente allein sichert den Lebensstandard meist nicht. Betriebliche und private Vorsorge werden vom Staat teils gefördert (Zulagen, Steuer- und Beitragsvorteile).",
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
  "id": "5f13cc200dc6",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 14,
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Bei der Wahl des Stadtrats in Bayern durften Sie kumulieren und panaschieren. Erklären Sie beide Begriffe.",
  "punkte": [
   "Kumulieren: einem Bewerber mehrere Stimmen geben, in Bayern höchstens 3",
   "Panaschieren: die Stimmen auf Bewerber verschiedener Listen (Parteien/Wählergruppen) verteilen",
   "Man hat so viele Stimmen, wie Gemeinde- bzw. Stadtratsmitglieder zu wählen sind – mehr darf man nicht vergeben"
  ],
  "explain": "Kumulieren = „häufeln“, Panaschieren = „mischen“. Zusätzlich gibt es das Listenkreuz: Dann bekommt jeder Bewerber der Liste der Reihe nach eine Stimme. Wer zu viele Stimmen vergibt, macht den Stimmzettel ungültig bzw. teilweise ungültig.",
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
  "id": "e171b298bfa9",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 18,
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie die vier Ziele des magischen Vierecks nach dem Stabilitäts- und Wachstumsgesetz von 1967.",
  "punkte": [
   "Stabilität des Preisniveaus",
   "Hoher Beschäftigungsstand",
   "Außenwirtschaftliches Gleichgewicht",
   "Stetiges und angemessenes Wirtschaftswachstum"
  ],
  "explain": "„Magisch“, weil sich nie alle vier Ziele gleichzeitig voll erreichen lassen. Erweitert zum magischen Sechseck/Vieleck um Umweltschutz und gerechte Einkommens- und Vermögensverteilung.",
  "src": "FW"
 },
 {
  "id": "c257670227f4",
  "cat": "WiSo",
  "situation": "wiso-geselle",
  "nr": 19,
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Erklären Sie an einem Beispiel einen Zielkonflikt zwischen zwei Zielen des magischen Vierecks.",
  "punkte": [
   "Beispiel: Wirtschaftswachstum/hoher Beschäftigungsstand gegen Preisniveaustabilität",
   "Hohe Nachfrage und volle Auslastung führen zu steigenden Preisen und Löhnen (Inflation)",
   "Maßnahmen gegen Inflation (z. B. höhere Zinsen) bremsen Investitionen, Wachstum und Beschäftigung"
  ],
  "explain": "Ein Zielkonflikt liegt vor, wenn die Förderung eines Ziels ein anderes verschlechtert. Weiteres Beispiel: Wachstum gegen Umweltschutz.",
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
  "id": "261b4c6aefd8",
  "cat": "WiSo",
  "level": 3,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie drei Möglichkeiten, wie ein Tarifvertrag für Ihr Arbeitsverhältnis verbindlich werden kann.",
  "punkte": [
   "Beiderseitige Tarifbindung: Sie sind Gewerkschaftsmitglied und Ihr Betrieb ist Mitglied im Arbeitgeberverband",
   "Der Tarifvertrag wurde für allgemeinverbindlich erklärt",
   "Ihr Arbeitsvertrag verweist auf den Tarifvertrag (Bezugnahmeklausel)"
  ],
  "explain": "Nach § 3 TVG sind die Mitglieder der Tarifparteien tarifgebunden. Tarifgebundene Betriebe wenden den Tarif in der Praxis meist über den Arbeitsvertrag auch für Nicht-Gewerkschaftsmitglieder an.",
  "src": "FW"
 },
 {
  "id": "21daee7034d3",
  "cat": "WiSo",
  "level": 2,
  "typ": "offen",
  "pkt": 2,
  "q": "Unterscheiden Sie Flächentarifvertrag und Haustarifvertrag.",
  "punkte": [
   "Flächentarif: zwischen Gewerkschaft und Arbeitgeberverband, gilt für eine Branche in einer Region (z. B. Kfz-Handwerk Bayern)",
   "Haustarif (Firmentarif): zwischen Gewerkschaft und einem einzelnen Unternehmen"
  ],
  "explain": "Kleine und mittlere Kfz-Betriebe sind meist über ihren Verband an den Flächentarif gebunden. Große Konzerne haben teils eigene Haustarife.",
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
  "id": "92943946cb15",
  "cat": "WiSo",
  "level": 3,
  "typ": "zahl",
  "pkt": 4,
  "q": "Sie sind 25 Jahre alt, kinderlos und verdienen 2026 3.100 € brutto. Beitragssätze 2026: RV 18,6 %, KV 14,6 % plus 2,9 % Zusatzbeitrag Ihrer Kasse, PV 3,6 % plus 0,6 % Kinderlosenzuschlag, AV 2,6 %. Berechnen Sie Ihren gesamten Arbeitnehmeranteil zur Sozialversicherung.",
  "loesung": 674.25,
  "einheit": "€",
  "toleranz": 0.003,
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
  "id": "78bc033f75c6",
  "cat": "WiSo",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "q": "Bis zu welchem Monatsverdienst ist im Jahr 2026 ein Minijob möglich?",
  "loesung": 603,
  "einheit": "€",
  "toleranz": 0.002,
  "explain": "Die Minijob-Grenze ist an den Mindestlohn gekoppelt (10 Stunden pro Woche zum Mindestlohn). Mit dem Mindestlohn 2026 von 13,90 € ergibt das 603 € im Monat.",
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
  "id": "4a88ccc33b67",
  "cat": "WiSo",
  "level": 1,
  "typ": "zahl",
  "pkt": 2,
  "q": "Mit welchem Alter erreichen Sie (Geburtsjahrgang 2006) nach heutigem Recht (Stand 2026) die Regelaltersgrenze der Rentenversicherung?",
  "loesung": 67,
  "einheit": "Jahre",
  "toleranz": 0.01,
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
  "id": "3690e5c33783",
  "cat": "WiSo",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "q": "Sie stürzen auf dem direkten Weg zur Werkstatt mit dem Fahrrad und brechen sich das Handgelenk. Welche Versicherung ist zuständig und welche Leistungen erbringt sie?",
  "punkte": [
   "Gesetzliche Unfallversicherung (Berufsgenossenschaft), weil es ein Wegeunfall ist",
   "Heilbehandlung (Behandlung beim Durchgangsarzt, Klinik, Medikamente)",
   "Verletztengeld nach Ende der Lohnfortzahlung",
   "Rehabilitation, Umschulung und bei bleibenden Schäden Verletztenrente"
  ],
  "explain": "Versichert sind Arbeitsunfälle, Wegeunfälle (direkter Weg) und Berufskrankheiten. Den Unfall muss der Betrieb der BG melden. Weitere Aufgabe der BG: Prävention durch Unfallverhütungsvorschriften.",
  "src": "FW"
 },
 {
  "id": "8cb340010376",
  "cat": "WiSo",
  "level": 2,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie drei Leistungen der Arbeitslosenversicherung.",
  "punkte": [
   "Arbeitslosengeld (60 % bzw. mit Kind 67 % des pauschalierten Nettoentgelts)",
   "Arbeitsvermittlung und Berufsberatung",
   "Förderung von Weiterbildung und Umschulung",
   "Kurzarbeitergeld bei vorübergehendem Arbeitsausfall"
  ],
  "explain": "Träger ist die Bundesagentur für Arbeit mit den Agenturen für Arbeit vor Ort. Auch Insolvenzgeld gehört zu den Leistungen.",
  "src": "FW"
 },
 {
  "id": "1563e6ca14df",
  "cat": "WiSo",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Beschreiben Sie das Wahlsystem der Bundestagswahl seit der Wahlrechtsreform 2023 (erstmals angewendet am 23.02.2025).",
  "punkte": [
   "Mit der Erststimme wählt man einen Wahlkreisbewerber",
   "Die Zweitstimme für eine Landesliste entscheidet über die Sitzverteilung der Parteien",
   "Der Bundestag hat fest 630 Sitze, Überhang- und Ausgleichsmandate gibt es nicht mehr",
   "Zweitstimmendeckung: Ein Wahlkreissieger zieht nur ein, wenn seine Partei genug Zweitstimmen-Sitze hat"
  ],
  "explain": "Gewinnt eine Partei mehr Wahlkreise, als ihr Sitze nach Zweitstimmen zustehen, gehen die Wahlkreissieger mit den schwächsten Ergebnissen leer aus.",
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
  "id": "7ce842112929",
  "cat": "WiSo",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "q": "Erklären Sie die 5-%-Sperrklausel bei der Bundestagswahl: Was besagt sie, welchen Zweck und welchen Nachteil hat sie, und gilt sie auch bei der Kommunalwahl in Bayern?",
  "punkte": [
   "Nur Parteien mit mindestens 5 % der Zweitstimmen erhalten Sitze (Ausnahme Grundmandatsklausel)",
   "Zweck: Zersplitterung des Parlaments verhindern, stabile Mehrheiten und Regierungen ermöglichen",
   "Nachteil: Stimmen für kleine Parteien wirken sich nicht aus, die Wahlgleichheit wird eingeschränkt",
   "Bei der Kommunalwahl in Bayern gibt es keine Sperrklausel"
  ],
  "explain": "Die Sperrklausel ist eine Lehre aus der Weimarer Republik. Für den Bayerischen Landtag gilt ebenfalls eine 5-%-Hürde, für Gemeinderäte und Kreistage in Bayern nicht.",
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
  "id": "d35c435ef66b",
  "cat": "WiSo",
  "level": 2,
  "typ": "zahl",
  "pkt": 3,
  "q": "Bei der Kommunalwahl in Ihrer Gemeinde sind 20 Gemeinderatsmitglieder zu wählen. Sie möchten kumulieren. Wie vielen Bewerbern können Sie höchstens die volle Stimmenzahl von je 3 Stimmen geben?",
  "loesung": 6,
  "einheit": "Bewerber",
  "toleranz": 0.01,
  "explain": "Sie haben 20 Stimmen (= Zahl der Sitze). Pro Bewerber höchstens 3: 20 ÷ 3 = 6 Rest 2 → 6 Bewerber mit je 3 Stimmen (18 Stimmen), die übrigen 2 Stimmen können Sie anderen Bewerbern geben.",
  "src": "FW"
 },
 {
  "id": "11da09648d3a",
  "cat": "WiSo",
  "level": 1,
  "typ": "offen",
  "pkt": 4,
  "q": "Sie wohnen in einer kreisangehörigen Gemeinde im Landkreis Bayreuth. Nennen Sie, wen bzw. was Sie bei der bayerischen Kommunalwahl 2026 in der Regel gewählt haben.",
  "punkte": [
   "Den Gemeinderat",
   "Den Ersten Bürgermeister",
   "Den Kreistag",
   "Den Landrat"
  ],
  "explain": "In einer kreisfreien Stadt wie der Stadt Bayreuth wählt man dagegen nur den Stadtrat und den Oberbürgermeister. „In der Regel“, weil Bürgermeister nach einer vorzeitigen Neuwahl teils zu anderen Terminen gewählt werden.",
  "src": "FW"
 },
 {
  "id": "829446211063",
  "cat": "WiSo",
  "level": 2,
  "typ": "offen",
  "pkt": 4,
  "q": "Nennen Sie die Voraussetzungen, um bei der Kommunalwahl in Bayern 2026 wählen zu dürfen.",
  "punkte": [
   "Am Wahltag mindestens 18 Jahre alt",
   "Deutsche Staatsangehörigkeit oder Staatsangehörigkeit eines anderen EU-Staats",
   "Seit mindestens zwei Monaten Wohnsitz bzw. Lebensmittelpunkt im Wahlkreis (Gemeinde bzw. Landkreis)",
   "Nicht vom Wahlrecht ausgeschlossen"
  ],
  "explain": "EU-Bürger dürfen bei Kommunalwahlen mitwählen, bei Bundestags- und Landtagswahlen nicht. Wer im Wählerverzeichnis steht, bekommt eine Wahlbenachrichtigung und kann auch Briefwahl beantragen.",
  "src": "Netz: Gemeinde-Infoblätter / Europäisches Parlament München, Kommunalwahl 2026"
 },
 {
  "id": "297d93c50d1e",
  "cat": "WiSo",
  "level": 3,
  "typ": "offen",
  "pkt": 2,
  "q": "Der Freistaat Bayern überträgt den Gemeinden eine neue Aufgabe. Erklären Sie, was das Konnexitätsprinzip dabei verlangt.",
  "punkte": [
   "Wer eine Aufgabe überträgt, muss auch für die Finanzierung sorgen („Wer bestellt, bezahlt“)",
   "Der Freistaat muss die Mehrkosten der Gemeinden ausgleichen (Bayerische Verfassung, Art. 83 Abs. 3)"
  ],
  "explain": "Das Konnexitätsprinzip schützt die kommunale Selbstverwaltung davor, dass ihr der Staat Aufgaben ohne Geld aufbürdet.",
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
  "id": "de731f43ff02",
  "cat": "WiSo",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Erklären Sie den Begriff Bruttoinlandsprodukt (BIP) und den Unterschied zwischen nominalem und realem BIP.",
  "punkte": [
   "Wert aller Waren und Dienstleistungen (Endprodukte), die in einem Jahr im Inland hergestellt werden",
   "Nominales BIP: gerechnet mit den aktuellen Preisen des Jahres",
   "Reales BIP: preisbereinigt, zeigt das tatsächliche Wachstum ohne Inflation"
  ],
  "explain": "Steigt das nominale BIP um 3 % bei 2 % Inflation, ist die Wirtschaft real nur um etwa 1 % gewachsen.",
  "src": "FW"
 },
 {
  "id": "fbcc7efa3c81",
  "cat": "WiSo",
  "level": 3,
  "typ": "offen",
  "pkt": 4,
  "q": "Ein Auffahrunfall mit anschließender Reparatur in Ihrer Werkstatt erhöht das BIP. Erläutern Sie, warum das BIP als Maß für Wohlstand kritisiert wird, und nennen Sie eine alternative Messgröße.",
  "punkte": [
   "Reparaturen von Schäden (Unfälle, Umweltschäden) erhöhen das BIP, obwohl kein Wohlstand entsteht",
   "Unbezahlte Arbeit (Hausarbeit, Pflege in der Familie, Ehrenamt) wird nicht erfasst",
   "Die Verteilung von Einkommen und Vermögen ist nicht erkennbar",
   "Alternative: z. B. Human Development Index (HDI), Nationaler Wohlfahrtsindex oder OECD Better Life Index"
  ],
  "explain": "Das BIP misst nur Marktleistungen. Alternative Messgrößen beziehen z. B. Bildung, Gesundheit, Lebenserwartung oder Umwelt mit ein.",
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
  "id": "ed88a99eab20",
  "cat": "WiSo",
  "level": 1,
  "typ": "offen",
  "pkt": 3,
  "q": "Nennen Sie drei Auswirkungen einer Rezession auf ein Autohaus mit Werkstatt.",
  "punkte": [
   "Weniger Neu- und Gebrauchtwagenverkäufe",
   "Kunden schieben Wartung und Reparaturen auf, die Werkstatt hat weniger Aufträge",
   "Kurzarbeit, weniger Neueinstellungen oder Ausbildungsplätze",
   "Stärkerer Preisdruck, mehr Rabatte"
  ],
  "explain": "Autos sind langlebige Gebrauchsgüter: Ihr Kauf wird in unsicheren Zeiten zuerst verschoben. Deshalb reagiert der Kfz-Handel stark auf die Konjunktur.",
  "src": "FW"
 },
 {
  "id": "11d3bf3506af",
  "cat": "WiSo",
  "level": 3,
  "typ": "zahl",
  "pkt": 3,
  "q": "Ihr Lohn steigt im August 2026 um 3,3 %. Die Inflationsrate beträgt im gleichen Zeitraum angenommen 2,0 %. Um wie viel Prozent steigt Ihr Reallohn ungefähr?",
  "loesung": 1.3,
  "einheit": "%",
  "toleranz": 0.1,
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
