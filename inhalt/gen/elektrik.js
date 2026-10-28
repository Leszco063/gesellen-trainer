// Rechenaufgaben Elektrik: Ohmsches Gesetz, Reihenschaltung (Zündkreis), Parallelschaltung,
// lineare Sensorkennlinie (Raildrucksensor 0,5–4,5 V).
import { rand, fmt } from "../../kern/util.js";
import { rechenFrage, runde } from "./gemeinsam.js";

function ohm(cat, level) {
  const U = rand([12, 12.5, 13.5, 14]);
  const R = rand([2, 2.5, 3, 4, 5, 6, 8]);
  const I = runde(U / R);
  return rechenFrage(cat, level, `An einem Verbraucher liegen ${fmt(U)} V an, sein Widerstand beträgt ${fmt(R)} Ω. Wie groß ist der Strom?`,
    I, "A", `I = U ÷ R = ${fmt(U)} V ÷ ${fmt(R)} Ω = ${fmt(I)} A`, { art: "ohm", U, R },
    [U * R, R / U, U / (2 * R)], { formel: "I = U / R\nI in A, U in V, R in Ω" });
}

function reihe(cat, level) {
  const teil = cat === "Airbag" ? "die Zündpille" : "der Verbraucher";
  const zp = rand([1.8, 2, 2.2, 2.5, 3]);
  const st = rand([0.1, 0.2, 0.3]);
  const lt = rand([0.2, 0.3, 0.4, 0.5]);
  const R = runde(zp + 2 * st + lt);
  return rechenFrage(cat, level,
    `In einem Stromkreis liegen in Reihe: ${teil} (${fmt(zp)} Ω), zwei Steckverbindungen mit je ${fmt(st)} Ω Übergangswiderstand und die Leitung (${fmt(lt)} Ω). Wie groß ist der Gesamtwiderstand?`,
    R, "Ω", `Reihenschaltung: R = ${fmt(zp)} + 2 × ${fmt(st)} + ${fmt(lt)} = ${fmt(R)} Ω.${cat === "Airbag" ? " Einen Airbag-Zündkreis misst man nur mit Diagnosetester bzw. Prüfadapter – nie direkt an der Zündpille." : ""}`,
    { art: "reihe", teile: [zp, st, st, lt] },
    [zp + st + lt, zp + lt, 2 * st + lt], { formel: "Reihenschaltung: R_{ges} = R_1 + R_2 + R_3 + …\nJeder Übergangswiderstand zählt einzeln mit." });
}

function parallel(cat, level) {
  const R1 = rand([2, 3, 4, 6, 8, 12]);
  const R2 = rand([2, 3, 4, 6, 8, 12]);
  const R = runde((R1 * R2) / (R1 + R2));
  return rechenFrage(cat, level, `Zwei Widerstände mit ${fmt(R1)} Ω und ${fmt(R2)} Ω sind parallel geschaltet. Wie groß ist der Ersatzwiderstand?`,
    R, "Ω", `R = (R1 × R2) ÷ (R1 + R2) = (${fmt(R1)} × ${fmt(R2)}) ÷ (${fmt(R1)} + ${fmt(R2)}) = ${fmt(R)} Ω`, { art: "parallel", R1, R2 },
    [R1 + R2, (R1 + R2) / 2, R1 * R2], { formel: "Parallelschaltung: 1 / R_{ges} = 1 / R_1 + 1 / R_2 + …\nbei zwei Widerständen: R_{ges} = R_1 · R_2 / (R_1 + R_2)" });
}

function kennlinie(cat, level) {
  const pmax = rand([1800, 2000, 2200, 2500]);
  const U = rand([1, 1.5, 2, 2.5, 3, 3.5, 4]);
  const p = runde(((U - 0.5) / 4) * pmax, 0);
  return rechenFrage(cat, level,
    `Ein Raildrucksensor liefert linear 0,5 V bei 0 bar und 4,5 V bei ${fmt(pmax, 0)} bar. Im Messwertblock steht eine Signalspannung von ${fmt(U)} V. Welcher Raildruck liegt an?`,
    p, "bar", `p = (U − 0,5 V) ÷ 4 V × ${fmt(pmax, 0)} bar = (${fmt(U)} − 0,5) ÷ 4 × ${fmt(pmax, 0)} = ${fmt(p, 0)} bar`, { art: "kennlinie", U, pmax },
    [(U / 4) * pmax, ((U - 0.5) / 5) * pmax, (U / 5) * pmax], { stellen: 0, formel: "lineare Kennlinie: p = (U − U_0) / (U_{max} − U_0) · p_{max}\nU_0 = Spannung bei 0 bar, U_{max} = Spannung bei p_{max}" });
}

function kennlinieU(cat, level) {
  const pmax = rand([180, 200, 250]);
  const p = 10 * Math.floor(2 + Math.random() * (pmax / 10 - 3));
  const U = runde(0.5 + (p / pmax) * 4);
  return rechenFrage(cat, level,
    `Ein Raildrucksensor liefert linear 0,5 V bei 0 MPa und 4,5 V bei ${pmax} MPa. Welche Signalspannung erwarten Sie bei ${p} MPa (= ${fmt(p * 10, 0)} bar)?`,
    U, "V", `U = 0,5 V + ${p} ÷ ${pmax} × 4 V = ${fmt(U)} V (1 MPa = 10 bar)`, { art: "kennlinie-u", p, pmax },
    [(p / pmax) * 4, 0.5 + (p / pmax) * 5, (p / pmax) * 5], { formel: "lineare Kennlinie: U = U_0 + p / p_{max} · (U_{max} − U_0)\nU_0 = Spannung bei 0 MPa; 1 MPa = 10 bar" });
}

export function elektrik(cat, level) {
  if (level === 1) return ohm(cat, level);
  if (cat === "Diesel") return level === 2 ? kennlinie(cat, level) : kennlinieU(cat, level);
  return level === 2 ? reihe(cat, level) : parallel(cat, level);
}
