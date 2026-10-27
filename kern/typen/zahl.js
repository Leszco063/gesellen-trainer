// Fragetyp "zahl": Rechenaufgabe mit Eingabefeld, Einheit und Toleranz (relativ, Standard 2 %).
import { esc, fmt } from "../util.js";

export const STANDARD_TOLERANZ = 0.02;

// "12,5" / "12.5" / "3.099" (Tausenderpunkt) / " 1.234,5 bar" → Zahl; nicht lesbar → NaN
export function parseZahl(text) {
  let s = String(text ?? "").replace(/−/g, "-").replace(/\s+/g, "");
  s = s.replace(/[^\d.,]+$/, ""); // angehängte Einheit weglassen
  if (!/^-?\d[\d.,]*$/.test(s)) return NaN;
  if (s.includes(",")) {
    if (!/^-?(\d{1,3}(\.\d{3})+|\d+),\d+$/.test(s)) return NaN;
    s = s.replace(/\./g, "").replace(",", ".");
  } else if (/^-?[1-9]\d{0,2}(\.\d{3})+$/.test(s)) {
    s = s.replace(/\./g, ""); // deutsche Tausenderpunkte: 3.099 = 3099
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

export function neueEingabe() { return ""; }
export function beantwortet(q, e) { return !Number.isNaN(parseZahl(e)); }
export function bewerte(q, e) {
  const x = parseZahl(e);
  if (Number.isNaN(x)) return 0;
  const tol = q.toleranz ?? STANDARD_TOLERANZ;
  const grenze = q.loesung === 0 ? tol : Math.abs(q.loesung) * tol;
  return Math.abs(x - q.loesung) <= grenze + 1e-9 ? 1 : 0;
}
export function antwortText(q, e) { return beantwortet(q, e) ? `${fmt(parseZahl(e), 4)} ${q.einheit || ""}`.trim() : "keine Antwort"; }
export function loesungText(q) { return `${fmt(q.loesung, 4)} ${q.einheit || ""}`.trim(); }

export function render(q, root, ctx) {
  root.innerHTML = `
    <div class="zahl-row">
      <input type="text" inputmode="decimal" autocomplete="off" id="zahlIn" value="${esc(ctx.eingabe || "")}" placeholder="Ergebnis">
      <span class="einheit">${esc(q.einheit || "")}</span>
    </div>
    <p class="small muted">Dezimalzeichen: Komma (z. B. 2,5) · Tausenderpunkt erlaubt (3.099) · Toleranz ±${fmt((q.toleranz ?? STANDARD_TOLERANZ) * 100, 1)} %</p>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zahlOk">Prüfen</button>` : ""}`;
  const input = root.querySelector("#zahlIn");
  input.addEventListener("input", () => { if (ctx.onEingabe) ctx.onEingabe(input.value); });
  const abgeben = () => { if (ctx.onAbgabe) ctx.onAbgabe(input.value); };
  input.addEventListener("keydown", ev => { if (ev.key === "Enter" && ctx.modus === "uebung") abgeben(); });
  const ok = root.querySelector("#zahlOk");
  if (ok) ok.addEventListener("click", abgeben);
}

export function markiere(q, root, e) {
  const input = root.querySelector("#zahlIn");
  input.disabled = true;
  input.classList.add(bewerte(q, e) ? "correct" : "wrong");
  const ok = root.querySelector("#zahlOk");
  if (ok) ok.remove();
}
