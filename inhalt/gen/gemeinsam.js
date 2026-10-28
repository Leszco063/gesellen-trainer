// Gemeinsame Helfer für die Rechen-Generatoren.
import { fmt, shuffle } from "../../kern/util.js";

let zaehler = 0;

export const runde = (x, stellen = 2) => Math.round(x * 10 ** stellen) / 10 ** stellen;

// Rechenaufgabe als Multiple Choice: richtige Lösung + Ergebnisse typischer Rechenfehler.
// fehler: Werte, die bei typischen Fehlern herauskommen; reichen sie nicht, wird mit Vielfachen aufgefüllt.
// formel: allgemeine Formel als Hilfe vor dem Antworten (ohne die Zahlen der Aufgabe).
export function rechenFrage(cat, level, q, loesung, einheit, explain, daten, fehler, { stellen = 2, format, formel } = {}) {
  zaehler += 1;
  const text = format || (x => `${fmt(x, stellen)} ${einheit}`.trim());
  const zuNah = x => Math.abs(x - loesung) <= Math.abs(loesung) * 0.01 + 0.01;
  const richtig = text(loesung);
  const opts = [richtig];
  for (const x of [...fehler, loesung * 1.25, loesung * 0.8, loesung * 2, loesung / 2, loesung * 10, loesung / 10]) {
    if (opts.length === 4) break;
    if (!Number.isFinite(x) || zuNah(x)) continue;
    const t = text(x);
    if (!opts.includes(t)) opts.push(t);
  }
  const gemischt = shuffle(opts);
  return {
    id: `gen-${cat}-${Date.now().toString(36)}-${zaehler}`,
    gen: true, cat, level, typ: "mc", q, opts: gemischt, correct: gemischt.indexOf(richtig), explain, formel, daten, src: "Generator",
  };
}
