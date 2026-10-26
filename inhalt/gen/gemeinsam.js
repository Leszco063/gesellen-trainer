// Gemeinsame Helfer für die Rechen-Generatoren.
let zaehler = 0;

export const runde = (x, stellen = 2) => Math.round(x * 10 ** stellen) / 10 ** stellen;

export function zahlFrage(cat, level, q, loesung, einheit, explain, daten, toleranz = 0.02) {
  zaehler += 1;
  return {
    id: `gen-${cat}-${Date.now().toString(36)}-${zaehler}`,
    gen: true, cat, level, typ: "zahl", q, loesung, einheit, toleranz, explain, daten, src: "Generator",
  };
}
