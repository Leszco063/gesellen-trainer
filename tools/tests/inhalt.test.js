import { fail, ok } from "./hilfe.js";
import { QUESTIONS, SITUATIONEN } from "../../inhalt/fragen.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { CARDS, cardForQuestion } from "../../kern/karten.js";
import { typVon } from "../../kern/typen/index.js";

// Mindestumfang je Bereich – jeder Inhalts-Task trägt hier seinen Bereich ein
const MINDEST = {
  Grundlagen: { fragen: 5, saetze: 0, karten: 2 },
  Diesel: { fragen: 40, saetze: 1, karten: 5 },
  Bremse: { fragen: 40, saetze: 1, karten: 4 },
  Klima: { fragen: 40, saetze: 1, karten: 4 },
  Airbag: { fragen: 40, saetze: 1, karten: 4 },
  WiSo: { fragen: 40, saetze: 1, karten: 4 },
};

export default async function () {
  for (const q of QUESTIONS) {
    if (!TRAINER.bereiche.includes(q.cat)) fail(`Frage ${q.id}: Bereich ${q.cat} fehlt in TRAINER.bereiche`);
    try { typVon(q); } catch (e) { fail(`Frage ${q.id}: ${e.message}`); }
  }
  for (const cat of TRAINER.bereiche) {
    if (QUESTIONS.some(q => q.cat === cat) && !cardForQuestion({ cat, q: "", explain: "" })) fail(`Kein Spickzettel für Bereich ${cat}`);
  }
  for (const c of CARDS) ok(TRAINER.bereiche.includes(c.cat) && c.keys.length >= 3 && c.html.length > 200, `Karte ${c.id}: Bereich, ≥ 3 keys, Inhalt`);
  for (const [cat, m] of Object.entries(MINDEST)) {
    const qs = QUESTIONS.filter(q => q.cat === cat);
    const anzahl = t => qs.filter(q => (q.typ || "mc") === t).length;
    ok(qs.length >= m.fragen, `${cat}: ${qs.length} Fragen, mindestens ${m.fragen} nötig`);
    ok(Object.values(SITUATIONEN).filter(s => s.cat === cat).length >= m.saetze, `${cat}: weniger als ${m.saetze} Aufgabensätze`);
    ok(CARDS.filter(c => c.cat === cat).length >= m.karten, `${cat}: weniger als ${m.karten} Spickzettel`);
    if (m.fragen >= 30) {
      ok(anzahl("mc") <= qs.length * 0.3, `${cat}: zu viel Multiple Choice (${anzahl("mc")} von ${qs.length})`);
      ok(anzahl("offen") >= qs.length * 0.3, `${cat}: zu wenig offene Aufgaben (${anzahl("offen")})`);
      ok(anzahl("zuordnung") >= qs.length * 0.15, `${cat}: zu wenig Zuordnungen (${anzahl("zuordnung")})`);
      ok(anzahl("reihenfolge") >= 1, `${cat}: keine Reihenfolge-Aufgabe`);
    }
    for (const [sid] of Object.entries(SITUATIONEN).filter(([, s]) => s.cat === cat)) {
      const satz = qs.filter(q => q.situation === sid);
      const pkt = satz.reduce((s, q) => s + (q.pkt ?? TRAINER.punkteProTyp[q.typ || "mc"]), 0);
      ok(satz.length >= 15 && satz.length <= 21, `${cat}/${sid}: ${satz.length} Aufgaben (15–21)`);
      ok(pkt >= 60 && pkt <= 100, `${cat}/${sid}: ${pkt} Punkte (60–100)`);
    }
  }
  console.log(`✓ Inhalt: ${QUESTIONS.length} Fragen, ${Object.keys(SITUATIONEN).length} Aufgabensätze, ${CARDS.length} Spickzettel`);
}
