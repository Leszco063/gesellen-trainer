import { eq, ok } from "./hilfe.js";
import { typVon, TYPEN } from "../../kern/typen/index.js";
import { parseZahl } from "../../kern/typen/zahl.js";
import { verschiebe } from "../../kern/typen/reihenfolge.js";
import { optionen } from "../../kern/typen/zuordnung.js";

const mc = { q: "?", opts: ["a", "b", "c"], correct: 1 };
const zahl = { typ: "zahl", q: "?", loesung: 2.5, einheit: "V" };
const reihe = { typ: "reihenfolge", q: "?", schritte: ["eins", "zwei", "drei", "vier"] };
const zuo = { typ: "zuordnung", q: "?", paare: [["Rail", "Hochdruck"], ["Filter", "Niederdruck"], ["Injektor", "Hochdruck"]], ablenker: ["Rücklauf"] };
const offen = { typ: "offen", q: "?", punkte: ["A", "B", "C", "D"] };

export default async function () {
  eq(Object.keys(TYPEN).sort(), ["mc", "offen", "reihenfolge", "zahl", "zuordnung"], "alle Typen registriert");
  ok(typVon({}) === TYPEN.mc, "ohne typ = mc");
  let geworfen = false;
  try { typVon({ typ: "quatsch" }); } catch (e) { geworfen = true; }
  ok(geworfen, "unbekannter Typ wirft");

  // mc
  eq([TYPEN.mc.bewerte(mc, 1), TYPEN.mc.bewerte(mc, 0), TYPEN.mc.bewerte(mc, -1)], [1, 0, 0], "mc bewerten");
  ok(!TYPEN.mc.beantwortet(mc, -1) && TYPEN.mc.beantwortet(mc, 0), "mc beantwortet");
  eq(TYPEN.mc.antwortText(mc, -1), "keine Antwort", "mc ohne Antwort");

  // zahl
  for (const [t, n] of [["12,5", 12.5], ["12.5", 12.5], [" 1.234,5 bar", 1234.5], ["1.234.567", 1234567], ["-3", -3], ["0,25", 0.25]]) eq(parseZahl(t), n, `parseZahl("${t}")`);
  for (const t of ["", "abc", null, undefined, "1,2,3", ","]) ok(Number.isNaN(parseZahl(t)), `parseZahl(${JSON.stringify(t)}) ist NaN`);
  // Deutsche Tausenderpunkte, Unicode-Minus, Unsinn
  for (const [t, n] of [["3.099", 3099], ["15.354", 15354], ["1.300", 1300], ["288,30 €", 288.3], ["−3", -3], ["0.125", 0.125], ["1.5", 1.5], ["3.099,50", 3099.5]]) eq(parseZahl(t), n, `parseZahl("${t}")`);
  for (const t of ["1e3", "2x3", "12-3", "1,2.3"]) ok(Number.isNaN(parseZahl(t)), `parseZahl(${JSON.stringify(t)}) ist NaN`);
  eq(TYPEN.zahl.bewerte({ typ: "zahl", loesung: 3099, einheit: "€" }, "3.099"), 1, "3.099 € als Tausenderpunkt richtig");
  eq([TYPEN.zahl.bewerte(zahl, "2,5"), TYPEN.zahl.bewerte(zahl, "2,54"), TYPEN.zahl.bewerte(zahl, "2,6"), TYPEN.zahl.bewerte(zahl, "")], [1, 1, 0, 0], "zahl mit 2 % Toleranz");
  eq(TYPEN.zahl.bewerte({ ...zahl, loesung: 0 }, "0,01"), 1, "zahl bei Lösung 0");
  eq(TYPEN.zahl.loesungText(zahl), "2,5 V", "zahl Lösungstext");

  // reihenfolge
  for (let i = 0; i < 200; i++) {
    const e = TYPEN.reihenfolge.neueEingabe(reihe);
    ok([...e].sort().join() === "0,1,2,3", "Startreihenfolge ist eine Permutation");
    ok(!e.every((v, k) => v === k), "Startreihenfolge ist nie schon richtig");
  }
  eq(TYPEN.reihenfolge.bewerte(reihe, [0, 1, 2, 3]), 1, "reihenfolge richtig");
  eq(TYPEN.reihenfolge.bewerte(reihe, [1, 0, 2, 3]), 0.5, "reihenfolge halb");
  eq(TYPEN.reihenfolge.bewerte(reihe, [0, 1]), 0, "reihenfolge falsche Länge");
  eq(verschiebe([2, 0, 1], 0, 1), [0, 2, 1], "verschiebe nach unten");
  eq(verschiebe([2, 0, 1], 0, -1), [2, 0, 1], "verschiebe am Rand bleibt");

  // zuordnung
  eq(optionen(zuo), ["Hochdruck", "Niederdruck", "Rücklauf"], "Optionen eindeutig + sortiert");
  eq(TYPEN.zuordnung.bewerte(zuo, ["Hochdruck", "Niederdruck", "Hochdruck"]), 1, "zuordnung richtig");
  eq(TYPEN.zuordnung.bewerte(zuo, ["Hochdruck", "", "Niederdruck"]), 1 / 3, "zuordnung ein Drittel");
  ok(!TYPEN.zuordnung.beantwortet(zuo, TYPEN.zuordnung.neueEingabe(zuo)), "zuordnung leer = unbeantwortet");

  // offen
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 1], gezeigt: true }), 0.5, "offen halb");
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 1, 2, 3], gezeigt: false }), 0, "offen ohne Lösung zeigen = 0");
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 0, 9, -1], gezeigt: true }), 0.25, "offen: doppelte/ungültige Haken zählen nicht");
  eq(TYPEN.offen.bewerte(offen, undefined), 0, "offen ohne Eingabe");

  // JSON-Rundreise aller Eingaben
  for (const [q, e] of [[mc, 1], [zahl, "2,5"], [reihe, [0, 1, 2, 3]], [zuo, ["Hochdruck", "Niederdruck", "Hochdruck"]], [offen, { text: "x", haken: [0], gezeigt: true }]]) {
    const t = typVon(q);
    eq(t.bewerte(q, JSON.parse(JSON.stringify(e))), t.bewerte(q, e), `JSON-Rundreise ${q.typ || "mc"}`);
  }
  console.log("✓ Fragetypen: Bewertung, Eingaben, Zahlenformat");
}
