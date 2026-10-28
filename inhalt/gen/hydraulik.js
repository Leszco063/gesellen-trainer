// Rechenaufgaben Hydraulik: Druck aus Kraft und Fläche, hydraulische Übersetzung (Bremse),
// Kraft auf einen Kolben bei Raildruck (Diesel).
import { rand, randInt, fmt } from "../../kern/util.js";
import { rechenFrage, runde } from "./gemeinsam.js";

function druck(cat, level) {
  const F = 300 + 50 * randInt(0, 18);
  const A = rand([2, 2.5, 3, 4, 5, 6]);
  const p = runde(F / (A * 10));
  return rechenFrage(cat, level, `Auf einen Kolben mit ${fmt(A)} cm² Fläche wirkt eine Kraft von ${F} N. Welcher Druck entsteht? (1 bar = 10 N/cm²)`,
    p, "bar", `p = F ÷ A = ${F} N ÷ ${fmt(A)} cm² = ${fmt(F / A)} N/cm² = ${fmt(p)} bar`, { art: "druck", F, A },
    [F / A, F / (A * 100), (F * A) / 10], { formel: "p = F / A\n1 bar = 10 N/cm²" });
}

function uebersetzung(cat, level) {
  const d1 = rand([20, 22, 23, 25]);
  const d2 = rand([38, 42, 45, 48, 54, 57]);
  const F1 = 1500 + 100 * randInt(0, 20);
  const F2 = runde(F1 * (d2 / d1) ** 2, 0);
  return rechenFrage(cat, level,
    `Der Hauptbremszylinder (Kolbendurchmesser ${d1} mm) wird mit ${F1} N betätigt. Welche Spannkraft entsteht an einem Bremssattelkolben mit ${d2} mm Durchmesser?`,
    F2, "N", `Gleicher Druck überall: F2 = F1 × (d2 ÷ d1)² = ${F1} N × (${d2} ÷ ${d1})² = ${fmt(F2, 0)} N`, { art: "uebersetzung", F1, d1, d2 },
    [(F1 * d2) / d1, F1 * (d1 / d2) ** 2, (F1 * d1) / d2], { stellen: 0, formel: "p = F_1 / A_1 = F_2 / A_2   (Druck überall gleich)\nF_2 = F_1 · A_2 / A_1 = F_1 · d_2² / d_1²" });
}

function kolbenkraft(cat, level) {
  const p = 1000 + 100 * randInt(0, 10);
  const d = rand([3, 4, 4.5, 5]);
  const A = runde((Math.PI * d * d) / 4);
  const F = runde((p / 10) * A, 0);
  return rechenFrage(cat, level,
    `Im Ventilsteuerraum eines Injektors herrschen ${p} bar. Der Ventilsteuerkolben hat ${fmt(d)} mm Durchmesser. Welche Kraft wirkt auf den Kolben? (1 bar = 0,1 N/mm²)`,
    F, "N", `A = π × d² ÷ 4 = ${fmt(A)} mm²; p = ${p} bar = ${fmt(p / 10)} N/mm²; F = p × A = ${fmt(F, 0)} N`, { art: "kolbenkraft", p, d },
    [p * A, (p / 100) * A, (p / 10) * Math.PI * d], { stellen: 0, formel: "F = p · A   mit   A = π · d² / 4\n10 bar = 1 N/mm² – Druck in N/mm², d in mm einsetzen" });
}

export function hydraulik(cat, level) {
  if (level === 1) return druck(cat, level);
  return cat === "Diesel" ? kolbenkraft(cat, level) : uebersetzung(cat, level);
}
