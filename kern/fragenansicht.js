// Darstellung einer Aufgabe (Situation, Hinweis, Fragetext, Bild, Antwortbereich) – für Übung und Prüfung.
import { SITUATIONEN } from "../inhalt/fragen.js";
import { esc } from "./util.js";

export function situationHtml(id, kompakt = false) {
  const s = SITUATIONEN[id];
  if (!s) return "";
  if (kompakt) return `<details class="situation-mini"><summary>Auftrag: ${esc(s.titel)}</summary><p>${esc(s.text)}</p></details>`;
  return `<div class="passage situation"><strong>${esc(s.titel)}</strong>\n${esc(s.text)}</div>`;
}

export function frageHtml(q, { kompakteSituation = false } = {}) {
  return `
    ${q.situation ? situationHtml(q.situation, kompakteSituation) : ""}
    ${q.tb ? `<p class="tb-hint">📘 Tabellenbuch erlaubt</p>` : ""}
    <p class="qtext">${esc(q.q)}</p>
    ${q.bild ? `<figure class="bild"><img src="inhalt/bilder/${esc(q.bild)}" alt="Abbildung zur Aufgabe"></figure>` : ""}
    ${q.stemHtml ? `<div class="stem">${q.stemHtml}</div>` : ""}
    <div id="antwort"></div>`;
}
