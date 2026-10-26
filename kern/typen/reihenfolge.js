// Fragetyp "reihenfolge": Arbeitsschritte mit ↑/↓ in die richtige Reihenfolge bringen.
// Eingabe = Liste der Schritt-Indizes in der Reihenfolge des Users.
import { esc, shuffle } from "../util.js";

export function neueEingabe(q) {
  const richtig = [...Array(q.schritte.length).keys()];
  const istRichtig = e => e.every((v, k) => v === k);
  let e = shuffle(richtig);
  for (let i = 0; i < 10 && istRichtig(e); i++) e = shuffle(richtig);
  return istRichtig(e) ? [...richtig.slice(1), richtig[0]] : e;
}
export function beantwortet() { return true; }
export function bewerte(q, e) {
  if (!Array.isArray(e) || e.length !== q.schritte.length) return 0;
  return e.filter((v, k) => v === k).length / e.length;
}
export function antwortText(q, e) { return Array.isArray(e) ? e.map((v, k) => `${k + 1}. ${q.schritte[v]}`).join(" | ") : "keine Antwort"; }
export function loesungText(q) { return q.schritte.map((s, k) => `${k + 1}. ${s}`).join(" | "); }

export function verschiebe(e, pos, richtung) {
  const ziel = pos + richtung;
  if (ziel < 0 || ziel >= e.length) return e.slice();
  const neu = e.slice();
  [neu[pos], neu[ziel]] = [neu[ziel], neu[pos]];
  return neu;
}

export function render(q, root, ctx) {
  let e = Array.isArray(ctx.eingabe) ? ctx.eingabe.slice() : neueEingabe(q);
  const zeichne = () => {
    root.innerHTML = `
      <p class="small muted">Bringe die Schritte mit ↑ und ↓ in die richtige Reihenfolge.</p>
      <ol class="reihe">${e.map((v, k) => `
        <li data-pos="${k}"><span class="nr">${k + 1}.</span><span class="txt">${esc(q.schritte[v])}</span>
          <button data-move="-1" aria-label="nach oben" ${k === 0 ? "disabled" : ""}>↑</button>
          <button data-move="1" aria-label="nach unten" ${k === e.length - 1 ? "disabled" : ""}>↓</button></li>`).join("")}
      </ol>
      ${ctx.modus === "uebung" ? `<button class="btn secondary" id="reiheOk">Prüfen</button>` : ""}`;
    root.querySelectorAll("[data-move]").forEach(btn => btn.addEventListener("click", () => {
      e = verschiebe(e, Number(btn.closest("li").dataset.pos), Number(btn.dataset.move));
      if (ctx.onEingabe) ctx.onEingabe(e.slice());
      zeichne();
    }));
    const ok = root.querySelector("#reiheOk");
    if (ok) ok.addEventListener("click", () => { if (ctx.onAbgabe) ctx.onAbgabe(e.slice()); });
  };
  if (ctx.onEingabe) ctx.onEingabe(e.slice());
  zeichne();
}

export function markiere(q, root, e) {
  root.querySelectorAll(".reihe li").forEach(li => {
    const pos = Number(li.dataset.pos);
    li.classList.add(e[pos] === pos ? "correct" : "wrong");
    li.querySelectorAll("button").forEach(b => b.remove());
    if (e[pos] !== pos) li.insertAdjacentHTML("beforeend", `<span class="small muted">richtig: Platz ${e[pos] + 1}</span>`);
  });
  const ok = root.querySelector("#reiheOk");
  if (ok) ok.remove();
}
