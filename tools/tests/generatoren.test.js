import { fail, ok } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { GENERATORS, hasGenerator, generate } from "../../inhalt/gen/index.js";

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
        ok(q.gen === true && q.cat === cat && q.level === level && q.typ === "zahl", `${wo}: Grundfelder`);
        ok(typeof q.q === "string" && q.q.length > 20 && typeof q.explain === "string" && q.explain.length > 5, `${wo}: Text fehlt`);
        ok(Number.isFinite(q.loesung) && typeof q.einheit === "string", `${wo}: Lösung/Einheit`);
        ok(!/NaN|undefined|Infinity|\[object /.test(JSON.stringify(q)), `${wo}: kaputter Wert ${q.q}`);
        ok(!ids.has(q.id), `${wo}: ID doppelt ${q.id}`);
        ids.add(q.id);
        const f = NACHRECHNEN[q.daten && q.daten.art];
        if (!f) { fail(`${wo}: unbekannte art ${q.daten && q.daten.art}`); continue; }
        const soll = f(q.daten);
        if (Math.abs(soll - q.loesung) > Math.abs(soll) * (q.toleranz / 2) + 0.01) fail(`${wo}: Lösung ${q.loesung} ≠ ${soll} (${q.q})`);
        n += 1;
      }
    }
    console.log(`✓ Generator ${cat}: ${n} Aufgaben nachgerechnet`);
  }
  ok(!hasGenerator("Klima"), "Klima hat (noch) keinen Generator");
}
