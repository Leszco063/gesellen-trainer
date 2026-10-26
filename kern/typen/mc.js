// Fragetyp "mc": eine richtige Antwort aus mehreren (Reihenfolge wird gemischt).
// Schnittstelle aller Typen: neueEingabe, beantwortet, bewerte, antwortText, loesungText, render, markiere.
// ctx = { modus: "uebung" | "pruefung", eingabe, onEingabe(e), onAbgabe(e) }
import { esc, shuffle } from "../util.js";

export function neueEingabe() { return -1; }
export function beantwortet(q, e) { return Number.isInteger(e) && e >= 0; }
export function bewerte(q, e) { return e === q.correct ? 1 : 0; }
export function antwortText(q, e) { return beantwortet(q, e) && e < q.opts.length ? q.opts[e] : "keine Antwort"; }
export function loesungText(q) { return q.opts[q.correct]; }

export function render(q, root, ctx) {
  const order = shuffle(q.opts.map((_, i) => i));
  root.innerHTML = order.map(i => `<button class="opt ${ctx.eingabe === i ? "chosen" : ""}" data-i="${i}">${esc(q.opts[i])}</button>`).join("");
  root.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.i);
    root.querySelectorAll(".opt").forEach(b => b.classList.toggle("chosen", b === btn));
    if (ctx.onEingabe) ctx.onEingabe(i);
    if (ctx.modus === "uebung" && ctx.onAbgabe) ctx.onAbgabe(i);
  }));
}

export function markiere(q, root, e) {
  root.querySelectorAll(".opt").forEach(btn => {
    const i = Number(btn.dataset.i);
    btn.disabled = true;
    btn.classList.remove("chosen");
    if (i === q.correct) btn.classList.add("correct");
    else if (i === e) btn.classList.add("wrong");
  });
}
