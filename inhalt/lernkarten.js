// Spickzettel: kurze Lernkarten je Bereich. "keys" helfen, nach einer falschen Antwort
// die passende Karte vorzuschlagen (Treffer im Fragen- oder Erklärungstext).
// Inhalte in eigenen Worten – Quellen siehe docs/recherche und material/notizen (lokal).

export const CARDS = [
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
];
