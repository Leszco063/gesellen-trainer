import { eq, ok } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { zaehltRichtig, maxPunkte, punkteFuer, prozent, note, fachErgebnisse, bestehensCheck } from "../../kern/bewertung.js";

const S = TRAINER.notenschluessel;
const PP = TRAINER.punkteProTyp;
const R = TRAINER.pruefung.bestehen;

export default async function () {
  for (const [p, n] of [[100, 1], [92, 1], [91, 2], [81, 2], [80, 3], [67, 3], [66, 4], [50, 4], [49, 5], [30, 5], [29, 6], [0, 6]]) {
    eq(note(p, S).note, n, `Note bei ${p} %`);
  }
  eq(note(50, S).text, "ausreichend", "Notentext");
  eq(maxPunkte({ typ: "offen" }, PP), 4, "Standardpunkte offen");
  eq(maxPunkte({}, PP), 2, "Standardpunkte mc ohne typ");
  eq(maxPunkte({ typ: "zahl", pkt: 6 }, PP), 6, "eigene Punkte gehen vor");
  eq(punkteFuer({ typ: "zuordnung" }, 0.5, PP), 2, "halbe Zuordnung");
  eq(punkteFuer({ pkt: 4 }, 1.7, PP), 4, "Anteil wird auf 1 begrenzt");
  eq(prozent(2, 3), 67, "Prozent runden");
  eq(prozent(5, 0), 0, "Prozent ohne Punkte");
  ok(zaehltRichtig(0.67) && !zaehltRichtig(0.66), "Richtig-Grenze 0,67");

  const faecher = fachErgebnisse(
    [{ fach: "diag", erreicht: 30, max: 50 }, { fach: "ih", erreicht: 40, max: 50 }, { fach: "diag", erreicht: 40, max: 50 }, { fach: "wiso", erreicht: 10, max: 40 }],
    TRAINER.pruefung.faecher, S);
  eq(faecher.map(f => [f.fach, f.erreicht, f.max, f.prozent, f.note]), [["diag", 70, 100, 70, 3], ["ih", 40, 50, 80, 3], ["wiso", 10, 40, 25, 6]], "fachErgebnisse");
  eq(fachErgebnisse([{ fach: "wiso", erreicht: 5, max: 10 }], TRAINER.pruefung.faecher, S).length, 1, "nur vorhandene Fächer");

  const mit = ps => ps.map((p, i) => ({ name: `F${i}`, prozent: p }));
  ok(bestehensCheck(mit([50, 50, 30]), R).bestanden, "2× genau ausreichend, 30 % ist noch nicht ungenügend → bestanden");
  const ungenuegend = bestehensCheck(mit([55, 60, 20]), R);
  ok(!ungenuegend.bestanden && ungenuegend.gruende.some(g => g.includes("ungenügend")), "ungenügend → nicht bestanden");
  const nurEins = bestehensCheck(mit([45, 45, 80]), R);
  ok(!nurEins.bestanden && nurEins.gruende.length === 1, "nur 1× ausreichend → nicht bestanden");
  console.log("✓ Bewertung: Noten, Punkte, Bestehensregel");
}
