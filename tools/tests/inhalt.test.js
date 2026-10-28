import { readdirSync } from "node:fs";
import { join } from "node:path";
import { fail, ok, ROOT } from "./hilfe.js";
import { QUESTIONS, SITUATIONEN } from "../../inhalt/fragen.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { CARDS, cardForQuestion } from "../../kern/karten.js";
import { typVon } from "../../kern/typen/index.js";

// Mindestumfang je Bereich – jeder Inhalts-Task trägt hier seinen Bereich ein
// (Ausbau 28.10.: zusammen über 500 Fragen, zwei Kundenaufträge je Prüfungsblock, eigene Schaltpläne)
const MINDEST = {
  Grundlagen: { fragen: 45, saetze: 0, karten: 3, bilder: 8 },
  Diesel: { fragen: 95, saetze: 2, karten: 5, bilder: 10 },
  Bremse: { fragen: 95, saetze: 2, karten: 4, bilder: 8 },
  Klima: { fragen: 88, saetze: 2, karten: 4, bilder: 8 },
  Airbag: { fragen: 88, saetze: 2, karten: 4, bilder: 8 },
  WiSo: { fragen: 90, saetze: 2, karten: 4, bilder: 3 },
};
// Höchstanteil der mc-Fragen, bei denen die richtige Antwort eindeutig die längste (bzw. kürzeste) ist –
// sonst lässt sich die Lösung an der Länge erraten
const LAENGE_MAX = 0.35;

function laengeAuffaellig(q) {
  const l = q.opts.map(o => o.length);
  const andere = l.filter((_, i) => i !== q.correct);
  if (l[q.correct] > Math.max(...andere)) return "lang";
  if (l[q.correct] < Math.min(...andere)) return "kurz";
  return null;
}

export default async function () {
  for (const q of QUESTIONS) {
    if (!TRAINER.bereiche.includes(q.cat)) fail(`Frage ${q.id}: Bereich ${q.cat} fehlt in TRAINER.bereiche`);
    try { typVon(q); } catch (e) { fail(`Frage ${q.id}: ${e.message}`); }
    if (TRAINER.erlaubteTypen && !TRAINER.erlaubteTypen.includes(q.typ || "mc")) fail(`Frage ${q.id} (${q.cat}): Typ ${q.typ} ist in diesem Trainer nicht erlaubt`);
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
    ok(qs.filter(q => q.bild).length >= m.bilder, `${cat}: ${qs.filter(q => q.bild).length} Fragen mit Bild, mindestens ${m.bilder} nötig`);
    const mc = qs.filter(q => (q.typ || "mc") === "mc");
    for (const art of ["lang", "kurz"]) {
      const n = mc.filter(q => laengeAuffaellig(q) === art).length;
      ok(n <= mc.length * LAENGE_MAX, `${cat}: richtige Antwort ist ${n}/${mc.length}-mal die ${art === "lang" ? "längste" : "kürzeste"} (höchstens ${LAENGE_MAX * 100} %)`);
    }
    if (m.fragen >= 30) {
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
  // Jedes Bild gehört zu mindestens einer Frage (sonst liegt es nur im Offline-Speicher herum)
  const benutzt = new Set(QUESTIONS.map(q => q.bild).filter(Boolean));
  for (const datei of readdirSync(join(ROOT, "inhalt", "bilder")).filter(d => !d.startsWith("."))) ok(benutzt.has(datei), `Bild ${datei} wird von keiner Frage benutzt`);
  // Formel-Hilfe: Tabellenbuch-Schreibweise (· und /), nie das Ergebnis der Aufgabe
  const mitFormel = QUESTIONS.filter(q => q.formel);
  ok(mitFormel.length >= 45, `nur ${mitFormel.length} Rechenaufgaben mit Formel-Hilfe`);
  for (const q of mitFormel) ok(!/[×÷]/.test(q.formel), `Formel in Tabellenbuch-Schreibweise (· und /): ${q.formel}`);
  console.log(`✓ Inhalt: ${QUESTIONS.length} Fragen, ${Object.keys(SITUATIONEN).length} Aufgabensätze, ${CARDS.length} Spickzettel, ${mitFormel.length} Formel-Hilfen`);
}
