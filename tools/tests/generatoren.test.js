import { fail, ok } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { GENERATORS, hasGenerator, generate } from "../../inhalt/gen/index.js";
import { parseZahl } from "../../kern/typen/zahl.js";

// Jede Aufgabe unabhängig nachrechnen
const NACHRECHNEN = {
  ohm: d => d.U / d.R,
  reihe: d => d.teile.reduce((s, x) => s + x, 0),
  parallel: d => (d.R1 * d.R2) / (d.R1 + d.R2),
  kennlinie: d => ((d.U - 0.5) / 4) * d.pmax,
  "kennlinie-u": d => 0.5 + (d.p / d.pmax) * 4,
  druck: d => d.F / (d.A * 10),
  uebersetzung: d => d.F1 * (d.d2 / d.d1) ** 2,
  kolbenkraft: d => (d.p / 10) * (Math.PI * d.d ** 2) / 4,
  sv: d => (d.brutto * d.satz) / 100,
};

export default async function () {
  const ids = new Set();
  for (const cat of Object.keys(GENERATORS)) {
    ok(TRAINER.bereiche.includes(cat), `Generator-Bereich ${cat} fehlt in TRAINER.bereiche`);
    ok(hasGenerator(cat), `hasGenerator(${cat})`);
    let n = 0;
    for (const level of [1, 2, 3]) {
      for (let i = 0; i < 500; i++) {
        const q = generate(cat, level);
        const wo = `${cat} L${level}`;
        ok(q.gen === true && q.cat === cat && q.level === level && (q.typ || "mc") === "mc", `${wo}: Grundfelder (Multiple Choice)`);
        ok(typeof q.q === "string" && q.q.length > 20 && typeof q.explain === "string" && q.explain.length > 5, `${wo}: Text fehlt`);
        ok(Array.isArray(q.opts) && q.opts.length === 4 && new Set(q.opts).size === 4, `${wo}: 4 verschiedene Antworten ${JSON.stringify(q.opts)}`);
        ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, `${wo}: correct ungültig`);
        ok(!/NaN|undefined|Infinity|\[object /.test(JSON.stringify(q)), `${wo}: kaputter Wert ${q.q}`);
        ok(!ids.has(q.id), `${wo}: ID doppelt ${q.id}`);
        ids.add(q.id);
        const f = NACHRECHNEN[q.daten && q.daten.art];
        if (!f) { fail(`${wo}: unbekannte art ${q.daten && q.daten.art}`); continue; }
        const soll = f(q.daten);
        const werte = q.opts.map(parseZahl);
        ok(werte.every(w => !Number.isNaN(w)), `${wo}: Antwort nicht lesbar ${JSON.stringify(q.opts)}`);
        if (Math.abs(soll - werte[q.correct]) > Math.abs(soll) * 0.01 + 0.01) fail(`${wo}: richtige Antwort ${q.opts[q.correct]} ≠ ${soll} (${q.q})`);
        const zuNah = werte.filter((w, k) => k !== q.correct && Math.abs(w - soll) <= Math.abs(soll) * 0.01 + 0.01);
        ok(!zuNah.length, `${wo}: Ablenker zu nah an der Lösung ${JSON.stringify(q.opts)}`);
        n += 1;
      }
    }
    console.log(`✓ Generator ${cat}: ${n} Aufgaben nachgerechnet`);
  }
  ok(!hasGenerator("Klima"), "Klima hat (noch) keinen Generator");
}
