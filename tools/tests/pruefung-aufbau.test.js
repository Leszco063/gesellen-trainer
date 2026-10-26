import { ok, eq } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { zufallsLevel, waehleSatz, baueBlock, bauePruefung } from "../../kern/pruefung-aufbau.js";
import { typVon } from "../../kern/typen/index.js";

let nr = 0;
const f = (cat, typ, extra = {}) => {
  nr += 1;
  const basis = { id: `q${nr}`, cat, level: 1 + (nr % 3), typ, q: `Frage ${nr}`, explain: "x", src: "FW" };
  const daten = {
    mc: { opts: ["a", "b"], correct: 0 }, offen: { punkte: ["a", "b"] }, zahl: { loesung: 1, einheit: "V" },
    reihenfolge: { schritte: ["a", "b", "c"] }, zuordnung: { paare: [["a", "1"], ["b", "2"]] },
  }[typ];
  return { ...basis, ...daten, ...extra };
};
const viele = (cat, typ, n) => Array.from({ length: n }, () => f(cat, typ));

export default async function () {
  eq([zufallsLevel([0.25, 0.45, 0.3], 0.1), zufallsLevel([0.25, 0.45, 0.3], 0.5), zufallsLevel([0.25, 0.45, 0.3], 0.9)], [1, 2, 3], "zufallsLevel");

  const mix = TRAINER.pruefung.blockMix;
  const pool = [...viele("Diesel", "mc", 10), ...viele("Diesel", "offen", 12), ...viele("Diesel", "zuordnung", 6), ...viele("Diesel", "reihenfolge", 2)];
  const gen = { has: c => c === "Diesel", generate: (cat, level) => ({ ...f(cat, "zahl"), level, gen: true }) };
  const block = { cats: ["Diesel"] };

  const fragen = baueBlock(block, mix, [0.25, 0.45, 0.3], pool, {}, new Set(), gen);
  const anzahl = t => fragen.filter(q => q.typ === t).length;
  eq([anzahl("mc"), anzahl("zahl"), anzahl("reihenfolge"), anzahl("offen"), anzahl("zuordnung")], [4, 2, 1, 9, 5], "Mix mit Generator");
  eq(new Set(fragen.map(q => q.id)).size, fragen.length, "keine doppelten Fragen");

  const ohneGen = baueBlock(block, mix, [0.25, 0.45, 0.3], pool, {}, new Set(), null);
  eq(ohneGen.length, 21, "Auffüllen: fehlende Rechenaufgaben durch andere ersetzt");
  eq(new Set(ohneGen.map(q => q.id)).size, 21, "Auffüllen ohne Doppelte");
  eq(baueBlock(block, mix, [0.25, 0.45, 0.3], pool.slice(0, 3), {}, new Set(), null).length, 3, "kleiner Pool: nimmt was da ist");

  const situationen = { alt: { titel: "A", text: "x", cat: "Diesel" }, neu: { titel: "N", text: "y", cat: "Diesel" }, leer: { titel: "L", text: "z", cat: "Diesel" }, klima: { titel: "K", text: "k", cat: "Klima" } };
  const satzA = [3, 1, 2].map(n => f("Diesel", "offen", { situation: "alt", nr: n }));
  const satzN = [1, 2].map(n => f("Diesel", "mc", { situation: "neu", nr: n }));
  const poolMitSatz = [...pool, ...satzA, ...satzN];
  eq(waehleSatz(block, situationen, poolMitSatz, { alt: "2026-10-01 10:00", neu: "2026-10-20 10:00" }), "alt", "ältester Satz zuerst");
  eq(waehleSatz(block, situationen, poolMitSatz, { alt: "2026-10-01 10:00" }), "neu", "nie gespielter Satz zuerst");
  eq(waehleSatz({ cats: ["Bremse"] }, situationen, poolMitSatz, {}), null, "kein Satz im Bereich");

  const plan = TRAINER.pruefung;
  const ganz = bauePruefung(plan, null, poolMitSatz, situationen, {}, gen, { neu: "2026-10-20 10:00" });
  eq(ganz.schritte.map(s => s.typ), ["block", "block", "pause", "block", "block", "pause", "block"], "ganzer Tag mit Pausen");
  const diesel = ganz.schritte[0];
  eq([diesel.satz, diesel.fragen.map(q => q.nr)], ["alt", [1, 2, 3]], "Aufgabensatz in nr-Reihenfolge");
  ok(diesel.fragen.every(q => q.situation === "alt"), "Satz nur mit eigenen Fragen");

  const einzeln = bauePruefung(plan, ["diag1"], pool, situationen, {}, gen);
  eq(einzeln.schritte.length, 1, "Einzelblock ohne Pausen");
  ok(einzeln.schritte[0].satz === null && einzeln.schritte[0].fragen.length === 21, "ohne Satz: gemischter Block");
  ok(einzeln.schritte[0].fragen.every(q => !q.situation), "gemischter Block ohne Satz-Fragen");

  // Rundreise JSON (App geschlossen und wieder geöffnet)
  const s = einzeln.schritte[0];
  s.eingaben = s.fragen.map(q => ({ mc: 0, zahl: "1,0", reihenfolge: [0, 1, 2], zuordnung: ["1", "2"], offen: { text: "t", haken: [0], gezeigt: true } }[q.typ]));
  const kopie = JSON.parse(JSON.stringify(einzeln));
  kopie.schritte[0].fragen.forEach((q, i) => {
    eq(typVon(q).bewerte(q, kopie.schritte[0].eingaben[i]), typVon(q).bewerte(s.fragen[i], s.eingaben[i]), `Rundreise JSON ${q.typ}`);
  });
  console.log("✓ Prüfungsaufbau: Mix, Auffüllen, Aufgabensätze, Speichern");
}
