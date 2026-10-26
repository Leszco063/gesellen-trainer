// Fragetyp "offen": freie Antwort, dann mit der Musterlösung (Stichpunkte) vergleichen und abhaken.
// Eingabe = { text, haken: [Indizes der erfüllten Stichpunkte], gezeigt: Musterlösung angesehen? }
import { esc } from "../util.js";

export function neueEingabe() { return { text: "", haken: [], gezeigt: false }; }
const norm = e => (e && typeof e === "object" && Array.isArray(e.haken)) ? { text: String(e.text || ""), haken: e.haken, gezeigt: !!e.gezeigt } : neueEingabe();

export function beantwortet(q, e) { e = norm(e); return e.text.trim() !== "" || e.gezeigt; }
export function bewerte(q, e) {
  e = norm(e);
  if (!e.gezeigt) return 0;
  const gueltig = new Set(e.haken.filter(i => Number.isInteger(i) && i >= 0 && i < q.punkte.length));
  return gueltig.size / q.punkte.length;
}
export function antwortText(q, e) { e = norm(e); return e.text.trim() || (e.gezeigt ? "(im Kopf beantwortet)" : "keine Antwort"); }
export function loesungText(q) { return q.punkte.join(" · "); }

function checklisteHtml(q, e) {
  return `<div class="check-list">${q.punkte.map((p, i) => `
    <label><input type="checkbox" data-haken="${i}" ${e.haken.includes(i) ? "checked" : ""}><span>${esc(p)}</span></label>`).join("")}</div>`;
}
function hakenLesen(root) {
  return [...root.querySelectorAll("[data-haken]")].filter(c => c.checked).map(c => Number(c.dataset.haken));
}

export function render(q, root, ctx) {
  const e = norm(ctx.eingabe);
  root.innerHTML = `
    <textarea class="antwort-text" id="offenText" placeholder="Deine Antwort in Stichpunkten (oder im Kopf überlegen)">${esc(e.text)}</textarea>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zeigen">Musterlösung zeigen</button><div id="loesung"></div>` : ""}`;
  const ta = root.querySelector("#offenText");
  ta.addEventListener("input", () => { e.text = ta.value; if (ctx.onEingabe) ctx.onEingabe({ ...e }); });
  const zeigen = root.querySelector("#zeigen");
  if (!zeigen) return;
  zeigen.addEventListener("click", () => {
    e.gezeigt = true;
    zeigen.remove();
    const box = root.querySelector("#loesung");
    box.innerHTML = `<p><strong>Musterlösung – hake ab, was du (sinngemäß) hattest:</strong></p>${checklisteHtml(q, e)}<button class="btn" id="uebernehmen">Bewertung übernehmen</button>`;
    box.querySelector("#uebernehmen").addEventListener("click", () => {
      e.haken = hakenLesen(box);
      if (ctx.onAbgabe) ctx.onAbgabe({ ...e });
    });
  });
}

export function markiere(q, root) {
  root.querySelectorAll("input, textarea").forEach(el => { el.disabled = true; });
  const btn = root.querySelector("#uebernehmen");
  if (btn) btn.remove();
}

// Prüfung: am Blockende selbst bewerten. Ohne geschriebene Antwort gibt es 0 Punkte.
export function renderSelbstbewertung(q, root, eingabe, onChange) {
  const e = norm(eingabe);
  const hatText = e.text.trim() !== "";
  e.gezeigt = hatText;
  if (!hatText) e.haken = [];
  onChange({ ...e });
  root.innerHTML = `
    <p><strong>${esc(q.q)}</strong></p>
    <p class="small muted">Deine Antwort:</p>
    <div class="passage">${hatText ? esc(e.text) : "– keine Antwort geschrieben –"}</div>
    ${hatText ? checklisteHtml(q, e) : `<p class="small trend-down">0 Punkte</p>`}`;
  root.querySelectorAll("[data-haken]").forEach(c => c.addEventListener("change", () => {
    e.haken = hakenLesen(root);
    onChange({ ...e });
  }));
}
