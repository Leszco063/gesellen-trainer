// Fragetyp "zuordnung": zu jedem linken Eintrag den passenden rechten Wert wählen
// (Bild beschriften, Bauteil → Aufgabe, Niederdruck/Hochdruck einteilen).
import { esc } from "../util.js";

export function optionen(q) {
  return [...new Set([...q.paare.map(p => p[1]), ...(q.ablenker || [])])].sort((a, b) => a.localeCompare(b, "de"));
}
export function neueEingabe(q) { return q.paare.map(() => ""); }
export function beantwortet(q, e) { return Array.isArray(e) && e.some(Boolean); }
export function bewerte(q, e) {
  if (!Array.isArray(e) || e.length !== q.paare.length) return 0;
  return q.paare.filter((p, i) => e[i] === p[1]).length / q.paare.length;
}
export function antwortText(q, e) { return beantwortet(q, e) ? q.paare.map((p, i) => `${p[0]} → ${e[i] || "–"}`).join(" | ") : "keine Antwort"; }
export function loesungText(q) { return q.paare.map(p => `${p[0]} → ${p[1]}`).join(" | "); }

export function render(q, root, ctx) {
  const e = Array.isArray(ctx.eingabe) ? ctx.eingabe.slice() : neueEingabe(q);
  const opts = optionen(q);
  root.innerHTML = `
    <div class="zuordnung">${q.paare.map((p, i) => `
      <label class="zuo-row"><span class="zuo-links">${esc(p[0])}</span>
        <select data-i="${i}"><option value="">– wählen –</option>${opts.map(o => `<option value="${esc(o)}" ${e[i] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>
      </label>`).join("")}</div>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zuoOk">Prüfen</button>` : ""}`;
  root.querySelectorAll("select").forEach(sel => sel.addEventListener("change", () => {
    e[Number(sel.dataset.i)] = sel.value;
    if (ctx.onEingabe) ctx.onEingabe(e.slice());
  }));
  const ok = root.querySelector("#zuoOk");
  if (ok) ok.addEventListener("click", () => { if (ctx.onAbgabe) ctx.onAbgabe(e.slice()); });
}

export function markiere(q, root, e) {
  root.querySelectorAll("select").forEach(sel => {
    const i = Number(sel.dataset.i);
    const richtig = e[i] === q.paare[i][1];
    sel.disabled = true;
    const row = sel.closest(".zuo-row");
    row.classList.add(richtig ? "correct" : "wrong");
    if (!richtig) row.insertAdjacentHTML("beforeend", `<span class="small">richtig: ${esc(q.paare[i][1])}</span>`);
  });
  const ok = root.querySelector("#zuoOk");
  if (ok) ok.remove();
}
