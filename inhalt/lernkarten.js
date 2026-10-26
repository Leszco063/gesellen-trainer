// Spickzettel: kurze Lernkarten je Bereich. "keys" helfen, nach einer falschen Antwort
// die passende Karte vorzuschlagen (Treffer im Fragen- oder Erklärungstext).
// Inhalte in eigenen Worten – Quellen siehe docs/recherche und material/notizen (lokal).

export const CARDS = [
  // ============================ GRUNDLAGEN ============================
  {
    id: "messen", cat: "Grundlagen", title: "Messen am Fahrzeug",
    keys: ["Voltmeter", "Ohmmeter", "Oszilloskop", "Widerstand", "Spannung", "PWM", "Masse"],
    html: `
      <table class="ktable">
        <tr><td>Spannung</td><td>Voltmeter parallel zum Bauteil, Stromkreis geschlossen</td></tr>
        <tr><td>Widerstand</td><td>Ohmmeter, Bauteil stromlos (Stecker ab), vorher Nullabgleich</td></tr>
        <tr><td>Strom</td><td>Amperemeter in Reihe oder Strommesszange</td></tr>
        <tr><td>PWM / Signalverlauf</td><td>Oszilloskop</td></tr>
      </table>
      <h4>Merksätze</h4>
      <ul>
        <li>Leitungen auf Durchgang: Sollwert meist &lt; 0,5 Ω.</li>
        <li>Masseseitig angesteuertes Bauteil: Im Oszi-Bild ist das <strong>untere</strong> Niveau „bestromt“.</li>
        <li>Sensor mit 3 Pins: 5-V-Versorgung, Signal, Masse – erst Versorgung und Masse prüfen, dann das Signal.</li>
      </ul>`,
  },
  {
    id: "einheiten", cat: "Grundlagen", title: "Einheiten umrechnen",
    keys: ["MPa", "bar", "N/mm", "Tastverhältnis", "Prozent", "umrechnen"],
    html: `
      <table class="ktable">
        <tr><td>1 MPa</td><td>= 10 bar = 1 N/mm²</td></tr>
        <tr><td>1 bar</td><td>= 10 N/cm² = 0,1 N/mm² = 100 kPa</td></tr>
        <tr><td>Absolutdruck</td><td>= Überdruck + ca. 1 bar Umgebungsdruck</td></tr>
        <tr><td>Tastverhältnis</td><td>= Einschaltzeit ÷ Periodendauer × 100 %</td></tr>
      </table>
      <h4>Beispiele</h4>
      <ul>
        <li>180 MPa Raildruck = 1800 bar.</li>
        <li>4 ms an, Periode 10 ms → Tastverhältnis 40 %.</li>
        <li>Ohmsches Gesetz: U = R × I, Leistung P = U × I.</li>
      </ul>`,
  },

  // ============================ DIESEL ============================
  {
    id: "cr-aufbau", cat: "Diesel", title: "Common-Rail: Aufbau und Drücke",
    keys: ["Rail", "Niederdruck", "Hochdruck", "Rücklauf", "Vorförderpumpe", "Common-Rail"],
    html: `
      <p><strong>Prinzip:</strong> Druckerzeugung (Hochdruckpumpe) und Einspritzung (Injektoren) sind getrennt. Das Rail speichert den Kraftstoff unter Hochdruck und gleicht Druckschwankungen aus.</p>
      <table class="ktable">
        <tr><td>Saugseite</td><td>ca. −0,2 … −0,4 bar</td></tr>
        <tr><td>Vorförderdruck</td><td>ca. 2,5 … 5 bar (Elektropumpe 3 … 7 bar)</td></tr>
        <tr><td>Rücklauf</td><td>wenige bar (Piezo mit Druckhalteventil 10 bar)</td></tr>
        <tr><td>Hochdruck Pkw</td><td>bis ca. 2500 bar = 250 MPa</td></tr>
      </table>
      <h4>Kreise</h4>
      <ul>
        <li><strong>Niederdruck:</strong> Tank, Vorförderpumpe, Filter mit Wasserabscheider/Heizung, Niederdruckgeber.</li>
        <li><strong>Hochdruck:</strong> Hochdruckpumpe, Hochdruckleitungen, Rail, Injektoren.</li>
        <li><strong>Rücklauf:</strong> Leckmenge der Injektoren, Druckregelventil, Kraftstoffkühler.</li>
      </ul>`,
  },
  {
    id: "cr-regelung", cat: "Diesel", title: "Druckregelung: ZME und DRV",
    keys: ["Zumesseinheit", "ZME", "Druckregelventil", "DRV", "Zweisteller", "Druckbegrenzungsventil", "Tastverhältnis"],
    html: `
      <table class="ktable">
        <tr><td>Einsteller hochdruckseitig</td><td>nur DRV am Rail – Pumpe fördert immer voll, hohe Leistungsaufnahme</td></tr>
        <tr><td>Einsteller saugseitig</td><td>nur ZME an der Pumpe (Bedarfsregelung) + Druckbegrenzungsventil als Schutz</td></tr>
        <tr><td>Zweisteller</td><td>ZME und DRV je nach Betriebszustand</td></tr>
      </table>
      <h4>Zweisteller</h4>
      <ul>
        <li>Start/Warmlauf: nur DRV → schneller Druckaufbau, Kraftstoff wird warm.</li>
        <li>Leerlauf, Schub, kleine Mengen: beide → genaueste Regelung.</li>
        <li>Mittlere/hohe Last: nur ZME → wenig Pumpenleistung, wenig Erwärmung.</li>
      </ul>
      <h4>Bauteile</h4>
      <ul>
        <li>ZME: stromlos <strong>offen</strong>, PWM masseseitig vom Steuergerät.</li>
        <li>DRV: ohne Strom nur ca. 100 bar (Federkraft) → Ausfall = kein Motorlauf.</li>
        <li>Druckbegrenzungsventil: einstufig (Motor aus) oder zweistufig (Notlauf mit Restdruck).</li>
      </ul>`,
  },
  {
    id: "cr-injektor", cat: "Diesel", title: "Injektoren: Magnetventil und Piezo",
    keys: ["Injektor", "Magnetventil", "Piezo", "Anzugsstrom", "Haltestrom", "IMA", "Düsennadel"],
    html: `
      <h4>Magnetventil-Injektor</h4>
      <ul>
        <li>Öffnen: Spule bestromt → Ventilkugel gibt Abflussdrossel frei → Druck im Ventilsteuerraum fällt → Düsennadel hebt ab.</li>
        <li>Schließen: Strom aus → Feder drückt Kugel zu → Raildruck im Steuerraum → Nadel schließt.</li>
        <li>Ansteuerung: Boosterspannung ca. 70–100 V, Anzugsstrom ca. 18–20 A, Haltestrom ca. 10–13 A.</li>
      </ul>
      <h4>Piezo-Injektor</h4>
      <ul>
        <li>Piezostapel dehnt sich bei Spannung (ca. 110–150 V), verhält sich wie ein Kondensator.</li>
        <li>Hydraulischer Koppler vergrößert den Weg; braucht Rücklaufdruck (Druckhalteventil).</li>
        <li>Ausgebaut <strong>stehend</strong> lagern; Stecker nie bei laufendem Motor abziehen.</li>
      </ul>
      <p><strong>Tausch:</strong> IMA-Code (Mengenabgleich) ins Steuergerät codieren.</p>`,
  },
  {
    id: "cr-diagnose", cat: "Diesel", title: "Diagnose: Sensoren, Notlauf, Testerfunktionen",
    keys: ["Raildrucksensor", "Mengenvergleich", "Rücklaufmenge", "Kompressionstest", "Notlauf", "Fahrpedal"],
    html: `
      <table class="ktable">
        <tr><td>Raildrucksensor</td><td>5 V Versorgung, Signal ca. 0,5–4,5 V; unter 0,25 V oder über 4,75 V = Defekt</td></tr>
        <tr><td>Fahrpedalgeber</td><td>2 Geber; Fehler → erhöhte Leerlaufdrehzahl, eingeschränkt fahrbereit</td></tr>
        <tr><td>Nockenwellengeber</td><td>Ausfall → läuft evtl. weiter, aber kein Neustart</td></tr>
      </table>
      <h4>Testerfunktionen</h4>
      <ul>
        <li><strong>Mengenvergleich:</strong> + = Zylinder bringt zu wenig Drehmoment → bekommt mehr.</li>
        <li><strong>Rücklaufmenge:</strong> größte höchstens das 3-Fache der kleinsten.</li>
        <li><strong>Dyn. Kompressionstest:</strong> Starterdrehzahlen je Zylinder vergleichen; höhere Drehzahl = weniger Kompression.</li>
        <li><strong>Hochdrucktest:</strong> Pumpe, Druckauf-/abbau, Dichtheit prüfen.</li>
      </ul>`,
  },
  {
    id: "scr", cat: "Diesel", title: "AdBlue und SCR",
    keys: ["AdBlue", "SCR", "Harnstoff", "NOx", "Sperrkatalysator", "Dosierventil", "Ammoniak"],
    html: `
      <table class="ktable">
        <tr><td>AdBlue</td><td>32,5 % Harnstoff + demineralisiertes Wasser</td></tr>
        <tr><td>Gefrierpunkt</td><td>ca. −11 °C → Tank, Pumpe, Leitungen beheizt</td></tr>
        <tr><td>Eigenschaften</td><td>kein Gefahrstoff, WGK 1, greift Lack und manche Metalle an, zersetzt sich ab ca. 60 °C</td></tr>
      </table>
      <h4>Reihenfolge in der Abgasanlage</h4>
      <p>Oxi-Kat → DPF → NOx-Sensor 1 → Dosierventil → Mischer/Hydrolysestrecke → SCR-Kat → NOx-Sensor 2 → Sperrkat</p>
      <ul>
        <li>Aus Harnstoff wird Ammoniak (NH₃); ab ca. 170 °C: NOx + NH₃ → N₂ + H₂O.</li>
        <li>Sperrkat verhindert NH₃-Schlupf und oxidiert CO.</li>
        <li>Nach Motor-Aus werden Leitung und Dosierventil leergesaugt (Frost).</li>
        <li>Tank leer oder System defekt: Restreichweite zählt runter, dann kein Neustart.</li>
      </ul>`,
  },

  // ============================ BREMSE ============================
  {
    id: "epb", cat: "Bremse", title: "Elektrische Parkbremse",
    keys: ["EPB", "Parkbremse", "Servicemodus", "Stellmotor", "Auto-Hold", "Belagwechsel"],
    html: `
      <ul>
        <li><strong>Bauarten:</strong> Stellmotor direkt am Bremssattel (Motor-on-Caliper) oder zentraler Seilzug-Aktuator.</li>
        <li><strong>Funktionen:</strong> Parken, Auto-Hold, Anfahrassistent, dynamische Notbremsung über ESP während der Fahrt.</li>
        <li><strong>Belagwechsel hinten:</strong> vorher <strong>Servicemodus</strong> (Tester, teils Bordmenü) → Kolben fährt zurück. Nie gegen den Motor zurückdrücken (Spindel/Getriebe).</li>
        <li>Danach Servicemodus beenden, Grundeinstellung/Anlernen, Fehlerspeicher prüfen, Bremsprobe.</li>
        <li><strong>Notlösen:</strong> bei leerer Batterie Fremdstart; manche Fahrzeuge haben eine mechanische Notentriegelung.</li>
      </ul>`,
  },
  {
    id: "esp", cat: "Bremse", title: "ABS / ASR / ESP",
    keys: ["ESP", "ABS", "Raddrehzahlsensor", "Gierrate", "Lenkwinkelsensor", "Hydroaggregat", "Übersteuern"],
    html: `
      <table class="ktable">
        <tr><td>Raddrehzahlsensoren</td><td>aktiv (Hall/MR, Rechteck, auch bei Stillstand) oder passiv (induktiv, Sinus)</td></tr>
        <tr><td>Lenkwinkelsensor</td><td>Fahrerwunsch – nach Spureinstellung kalibrieren</td></tr>
        <tr><td>Gierraten-/Querbeschleunigungssensor</td><td>tatsächliche Fahrzeugbewegung</td></tr>
        <tr><td>Bremsdrucksensor</td><td>Fahrerbremswunsch</td></tr>
      </table>
      <h4>Regelphasen</h4>
      <ul>
        <li>Druck aufbauen: Einlass offen, Auslass zu. Halten: beide zu. Abbauen: Einlass zu, Auslass offen + Rückförderpumpe.</li>
        <li>Übersteuern → kurvenäußeres Vorderrad bremsen; Untersteuern → kurveninneres Hinterrad; zusätzlich Motormoment senken.</li>
      </ul>`,
  },
  {
    id: "bremsfluessigkeit", cat: "Bremse", title: "Bremsflüssigkeit",
    keys: ["DOT", "Siedepunkt", "hygroskopisch", "Nass-Siedepunkt", "Bremsflüssigkeit", "Dampfblasen"],
    html: `
      <table class="ktable">
        <tr><td></td><td>DOT 3</td><td>DOT 4</td><td>DOT 5.1</td></tr>
        <tr><td>Siedepunkt min.</td><td>205 °C</td><td>230 °C</td><td>260 °C</td></tr>
        <tr><td>Nass-Siedepunkt min.</td><td>140 °C</td><td>155 °C</td><td>180 °C</td></tr>
      </table>
      <ul>
        <li><strong>Hygroskopisch:</strong> nimmt Wasser auf → Siedepunkt sinkt → Dampfblasen → Bremse fällt aus.</li>
        <li>Nass-Siedepunkt = Siedebeginn bei ca. 3,5 % Wasser.</li>
        <li>DOT 5 ist Silikon – nicht mit DOT 3/4/5.1 (Glykol) mischen.</li>
        <li>Gesundheitsschädlich, löst Lack; Wechsel nach Herstellervorgabe (meist alle 2 Jahre).</li>
      </ul>`,
  },
  {
    id: "bremse-rechnen", cat: "Bremse", title: "Bremse rechnen und prüfen",
    keys: ["Abbremsung", "Bremsenprüfstand", "Übersetzung", "Kraft", "Druck", "Ungleichmäßigkeit"],
    html: `
      <table class="ktable">
        <tr><td>Druck</td><td>p = F ÷ A (1 bar = 10 N/cm²)</td></tr>
        <tr><td>hydraulische Übersetzung</td><td>F₂ = F₁ × (d₂ ÷ d₁)²</td></tr>
        <tr><td>Abbremsung</td><td>z = Summe Bremskräfte ÷ (m × g) × 100 %</td></tr>
        <tr><td>Ungleichmäßigkeit</td><td>(größere − kleinere Kraft) ÷ größere × 100 %</td></tr>
      </table>
      <ul>
        <li>Bremsenprüfstand: Bremskraft je Rad, Differenz je Achse, Unrundheit, Feststellbremse.</li>
        <li>Grenzwerte (Mindestabbremsung usw.) im <strong>Tabellenbuch</strong> nachschlagen.</li>
      </ul>`,
  },

  // ============================ KLIMA ============================
  {
    id: "klima-kreislauf", cat: "Klima", title: "Kältekreislauf",
    keys: ["Verdichter", "Kondensator", "Verdampfer", "Expansionsventil", "Trockner", "Hochdruck", "Niederdruck"],
    html: `
      <p>Verdichter → Kondensator → Trockner/Sammler → Expansionsventil → Verdampfer → zurück zum Verdichter</p>
      <table class="ktable">
        <tr><td>Hochdruckseite</td><td>Verdichter-Ausgang bis Expansionsventil (gasförmig heiß → im Kondensator flüssig)</td></tr>
        <tr><td>Niederdruckseite</td><td>Expansionsventil bis Verdichter-Eingang (im Verdampfer verdampft → kalt)</td></tr>
      </table>
      <ul>
        <li>Expansionsventil regelt nach Überhitzung; Drosselrohr (Orifice) ist fest – dann Akkumulator auf der Niederdruckseite statt Sammler.</li>
        <li>Verdampfer nimmt Wärme aus der Innenraumluft auf, Kondensator gibt Wärme nach außen ab.</li>
      </ul>`,
  },
  {
    id: "klima-kaeltemittel", cat: "Klima", title: "Kältemittel und Öle",
    keys: ["R1234yf", "R134a", "PAG", "POE", "Kältemittelöl", "GWP"],
    html: `
      <ul>
        <li><strong>R1234yf:</strong> niedriger GWP (unter 150), schwer entflammbar (A2L), eigene Anschlüsse und Servicegeräte. Nie mit R134a mischen.</li>
        <li><strong>PAG-Öl:</strong> stark hygroskopisch, für R134a; Gebinde sofort verschließen.</li>
        <li><strong>PAG YF:</strong> für R1234yf und R134a. PAG ohne „YF“ nicht in R1234yf-Anlagen.</li>
        <li><strong>POE-Öl:</strong> für elektrische Verdichter (Hybrid/E-Auto), nicht leitend.</li>
        <li>Öle nicht mischen; Typ, Viskosität und Menge nach Hersteller. Altöl = gefährlicher Abfall.</li>
      </ul>`,
  },
  {
    id: "klima-service", cat: "Klima", title: "Klimaservice und Lecksuche",
    keys: ["Klimaservicegerät", "Absaugen", "Evakuieren", "Befüllen", "Lecksuche", "Vakuum", "Unterfüllung"],
    html: `
      <ol>
        <li>Kältemittel absaugen und recyceln, abgeschiedenes Öl messen.</li>
        <li>Reparatur, ggf. Trockner erneuern.</li>
        <li>Evakuieren (mind. 20–30 min) – entfernt Luft und Feuchtigkeit.</li>
        <li>Vakuum halten = Dichtheitsprüfung.</li>
        <li>Öl / UV-Kontrastmittel ergänzen, nach Gewicht (Typschild) befüllen.</li>
      </ol>
      <h4>Lecksuche</h4>
      <ul><li>UV-Kontrastmittel, elektronischer Lecksucher, Formiergas (N₂/H₂).</li></ul>
      <h4>Druckdiagnose (qualitativ)</h4>
      <ul>
        <li>Unterfüllung: beide Drücke zu niedrig. Überfüllung: beide zu hoch.</li>
        <li>Kondensator verschmutzt/Lüfter defekt: Hochdruck zu hoch.</li>
        <li>Sollwerte je nach Temperatur → Tabellenbuch/Hersteller.</li>
      </ul>`,
  },
  {
    id: "klima-recht", cat: "Klima", title: "Klima: Vorschriften und Sicherheit",
    keys: ["Sachkunde", "F-Gase", "Verordnung", "Schutzbrille", "Erfrierung", "ChemKlimaschutzV"],
    html: `
      <ul>
        <li>Arbeiten am Kältekreis nur mit <strong>Sachkundenachweis</strong> und zugelassenem Servicegerät.</li>
        <li>Kältemittel nie in die Umwelt ablassen; Mengen dokumentieren.</li>
        <li>Neue Chemikalien-Klimaschutzverordnung seit 17.04.2026: Sachkunde auch für HFO (z. B. R1234yf); alte Bescheinigungen bis 12.03.2029, danach Auffrischung.</li>
        <li>Schutzbrille und Handschuhe (Erfrierungen), gut lüften, nicht in der Grube arbeiten (Kältemittel schwerer als Luft), keine offene Flamme.</li>
      </ul>`,
  },

  // ============================ AIRBAG ============================
  {
    id: "airbag-aufbau", cat: "Airbag", title: "Airbag: Aufbau und Funktion",
    keys: ["Airbag", "Gasgenerator", "Gurtstraffer", "Steuergerät", "Crashsensor", "Wickelfeder"],
    html: `
      <ul>
        <li><strong>Komponenten:</strong> Steuergerät mit Beschleunigungssensor und Energiereserve, Upfront- und Seitensensoren, Airbagmodule, Gurtstraffer, Gurtkraftbegrenzer, Wickelfeder im Lenkrad, Kontrollleuchte.</li>
        <li>Auslösung nur bei mindestens zwei plausiblen Crash-Signalen.</li>
        <li>Ablauf in Millisekunden: Entscheidung, Airbag voll, Insasse taucht ein, Entleerung (Richtwerte, je nach Fahrzeug).</li>
        <li>Kontrollleuchte: Selbsttest nach Zündung ein, Dauerleuchten = Fehler.</li>
        <li>Crashsignal an andere Systeme: Türen entriegeln, Warnblinker, Kraftstoffpumpe aus, Notruf.</li>
      </ul>`,
  },
  {
    id: "airbag-sicherheit", cat: "Airbag", title: "Arbeiten am Airbag",
    keys: ["Batterie", "Wartezeit", "ablegen", "Polster", "Kurzschlussbrücke", "Sicherheitsregeln"],
    html: `
      <ol>
        <li>Zündung aus, Schlüssel weg.</li>
        <li>Batterie-Minus abklemmen und sichern.</li>
        <li>Wartezeit <strong>nach Herstellerangabe</strong> (Energiereserve im Steuergerät).</li>
        <li>Sich elektrostatisch entladen, dann Stecker trennen.</li>
      </ol>
      <ul>
        <li>Modul mit Polsterseite nach oben ablegen, beim Tragen vom Körper weg.</li>
        <li>Keine Wärme über ca. 100 °C, keine Fette/Reiniger, nicht an der Leitung tragen.</li>
        <li><strong>Nie</strong> mit dem Multimeter direkt an der Zündpille messen.</li>
        <li>Kurzschlussbrücke im Stecker schließt die Zündpille beim Abziehen kurz.</li>
      </ul>`,
  },
  {
    id: "airbag-recht", cat: "Airbag", title: "Airbag: Recht, Lagerung, Entsorgung",
    keys: ["Sprengstoff", "P1", "Fachkunde", "Lagerung", "Entsorgung", "Behörde"],
    html: `
      <ul>
        <li>Airbags und Gurtstraffer sind pyrotechnische Gegenstände der Kategorie <strong>P1</strong> (Sprengstoffrecht).</li>
        <li>Ein- und Ausbau nur mit Schulung (eingeschränkte Fachkunde); der Betrieb zeigt die Tätigkeit vorher der Behörde an.</li>
        <li>Lagerung nach Richtlinie LR 240 (begrenzte Mengen, geeigneter Raum).</li>
        <li>Nicht in den Hausmüll; ausgelöste Teile und das Steuergerät mit Crashdaten ersetzen.</li>
      </ul>`,
  },
  {
    id: "airbag-diagnose", cat: "Airbag", title: "Airbag: Diagnose",
    keys: ["Fehlerspeicher", "Zündkreis", "Widerstand", "Prüfadapter", "Ersatzwiderstand", "Stecker"],
    html: `
      <ul>
        <li>Fehlerspeicher und Zündkreis-Messwerte mit dem Diagnosetester auslesen.</li>
        <li>„Widerstand zu hoch“ = Unterbrechung oder Übergangswiderstand (z. B. Stecker unter dem Sitz nicht eingerastet).</li>
        <li>„Widerstand zu niedrig“ = Kurzschluss.</li>
        <li>Prüfen mit Prüfadapter/Ersatzwiderstand statt Airbag, Leitungen auf Durchgang.</li>
        <li>Typische Fehler: Sitzstecker, Wickelfeder, Korrosion. Neues Steuergerät codieren.</li>
      </ul>`,
  },

  // ============================ WISO ============================
  {
    id: "tarif", cat: "WiSo", title: "Tarifvertrag",
    keys: ["Tarifvertrag", "Tarifautonomie", "Streik", "Urabstimmung", "Friedenspflicht", "Gewerkschaft"],
    html: `
      <ul>
        <li><strong>Tarifautonomie</strong> (Art. 9 Abs. 3 GG): Gewerkschaften und Arbeitgeberverbände verhandeln ohne den Staat.</li>
        <li>Manteltarifvertrag: Arbeitszeit, Urlaub. Entgelttarifvertrag: Löhne, Ausbildungsvergütung.</li>
        <li>Ablauf: Kündigung → Verhandlung → Scheitern → Schlichtung → Urabstimmung (meist 75 %) → Streik → neue Verhandlung → Urabstimmung (meist 25 %).</li>
        <li>Friedenspflicht: kein Streik zu geregelten Themen während der Laufzeit.</li>
        <li>Günstigkeitsprinzip: Abweichungen nur zugunsten des Arbeitnehmers.</li>
        <li>Kfz-Handwerk Bayern 2025: +2,3 % ab 07/2025, +3,3 % ab 08/2026, Laufzeit bis Mai 2027.</li>
      </ul>`,
  },
  {
    id: "sozialversicherung", cat: "WiSo", title: "Sozialversicherungen 2026",
    keys: ["Rentenversicherung", "Krankenversicherung", "Pflegeversicherung", "Arbeitslosenversicherung", "Unfallversicherung", "Beitrag"],
    html: `
      <table class="ktable">
        <tr><td>Rente (DRV)</td><td>18,6 % – je 9,3 %</td></tr>
        <tr><td>Kranken (Krankenkasse)</td><td>14,6 % + Ø 2,9 % Zusatz – je Hälfte</td></tr>
        <tr><td>Pflege (Pflegekasse)</td><td>3,6 % (+0,6 % kinderlos ab 23, trägt AN)</td></tr>
        <tr><td>Arbeitslosen (Arbeitsagentur)</td><td>2,6 % – je 1,3 %</td></tr>
        <tr><td>Unfall (Berufsgenossenschaft)</td><td>nur Arbeitgeber</td></tr>
      </table>
      <ul>
        <li>Rente: Umlageverfahren (Generationenvertrag), Drei-Säulen-Modell, Regelaltersgrenze 67.</li>
        <li>Rentenpaket 2025: Rentenniveau 48 % bis 2031; Aktivrente seit 2026: bis 2000 € im Monat steuerfrei dazuverdienen.</li>
      </ul>`,
  },
  {
    id: "wahl", cat: "WiSo", title: "Wahlen und Kommunalwahl",
    keys: ["Wahlgrundsätze", "Kommunalwahl", "Kumulieren", "Panaschieren", "Bürgermeister", "Bundestag"],
    html: `
      <ul>
        <li>Wahlgrundsätze: allgemein, unmittelbar, frei, gleich, geheim.</li>
        <li><strong>Kommunalwahl Bayern 08.03.2026</strong>: Amtszeit 6 Jahre, Wahlrecht ab 18; Gemeinderat + Bürgermeister, Kreistag + Landrat.</li>
        <li>Kumulieren: bis zu 3 Stimmen auf eine Person. Panaschieren: Stimmen auf Bewerber verschiedener Listen verteilen.</li>
        <li>Bürgermeister ohne absolute Mehrheit → Stichwahl.</li>
        <li>Bundestag: 630 Sitze, keine Überhang-/Ausgleichsmandate mehr, 5-%-Hürde; Grundmandatsklausel (3 Direktmandate) gilt nach BVerfG-Urteil 2024 weiter.</li>
      </ul>`,
  },
  {
    id: "konjunktur", cat: "WiSo", title: "Konjunktur und Wirtschaftspolitik",
    keys: ["Konjunktur", "BIP", "Magisches Viereck", "Aufschwung", "Rezession", "EZB"],
    html: `
      <ul>
        <li>Phasen: Aufschwung → Boom → Abschwung → Tiefstand.</li>
        <li>Frühindikatoren: Auftragseingänge, Geschäftsklima. Spätindikatoren: Arbeitslosigkeit.</li>
        <li><strong>Magisches Viereck</strong> (Stabilitätsgesetz 1967): stabile Preise, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges Wachstum; erweitert um Umweltschutz und gerechte Einkommensverteilung.</li>
        <li>Zielkonflikt z. B. Wachstum ↔ Preisstabilität.</li>
        <li>Nachfrageorientiert (Keynes): Staat gibt in der Krise mehr aus. Angebotsorientiert: bessere Bedingungen für Unternehmen.</li>
        <li>BIP Deutschland 2025 real +0,2 %; EZB-Ziel: 2 % Inflation.</li>
      </ul>`,
  },
];
