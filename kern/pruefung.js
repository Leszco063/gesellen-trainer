// Prüfungssimulation nach dem Prüfungsplan in inhalt/trainer.js: Blöcke mit eigener Zeit,
// Pausen dazwischen, kein Zurückspringen, offene Aufgaben am Blockende selbst bewerten.
// Der Stand wird nach jeder Eingabe gespeichert – schließt iOS die App, geht es danach weiter.

import { QUESTIONS, SITUATIONEN } from "../inhalt/fragen.js";
import { TRAINER } from "../inhalt/trainer.js";
import { hasGenerator, generate } from "../inhalt/gen/index.js";
import { esc, fmt, nowStamp, formatDuration } from "./util.js";
import { render, on, startTick, stopTick, barColor, screen, go, toast } from "./ui.js";
import { loadProgress, saveProgress, recordAnswer } from "./speicher.js";
import { bauePruefung } from "./pruefung-aufbau.js";
import { frageHtml, situationHtml } from "./fragenansicht.js";
import { typVon } from "./typen/index.js";
import { renderSelbstbewertung } from "./typen/offen.js";
import { maxPunkte, punkteFuer, prozent, note, fachErgebnisse, bestehensCheck, zaehltRichtig } from "./bewertung.js";
import { cardForQuestion } from "./karten.js";
import { openCardOverlay } from "./lernen.js";
import { openReportOverlay } from "./meldungen.js";

const PLAN = TRAINER.pruefung;
const PP = TRAINER.punkteProTyp;
const LAUF_KEY = `${TRAINER.id}.laufendePruefung`;
let E = null; // laufende Prüfung

function speichern() {
  try { localStorage.setItem(LAUF_KEY, JSON.stringify(E)); } catch (e) { /* Speicher voll – Prüfung läuft im Arbeitsspeicher weiter */ }
}
function laden() {
  try { return JSON.parse(localStorage.getItem(LAUF_KEY)); } catch (e) { return null; }
}
function loeschen() {
  try { localStorage.removeItem(LAUF_KEY); } catch (e) { /* egal */ }
}

function showIntro() {
  const offen = laden();
  const bloecke = PLAN.ablauf.filter(s => !s.pause);
  const letzte = loadProgress().pruefungen.slice(-3).reverse();
  render(`
    <h2>Prüfungssimulation</h2>
    <section class="card"><ul class="hints">
      <li>Wie am Prüfungstag: ${bloecke.length} Blöcke à 60 Minuten mit Pausen dazwischen. Jeder Block ist ein Kundenauftrag mit aufeinander aufbauenden Aufgaben.</li>
      <li>Kein Zurückspringen. Unbeantwortet gibt 0 Punkte.</li>
      <li>Offene Aufgaben bewertest du am Blockende selbst anhand der Musterlösung – ehrlich bleiben.</li>
      <li>${esc(TRAINER.hinweis)}</li>
    </ul></section>
    ${offen ? `
      <section class="card"><h3>Angefangene Prüfung</h3>
        <p class="small muted">${esc(offen.variante)} · gestartet ${esc(offen.start)}</p>
        <div class="btn-row"><button class="btn" id="weiter">Fortsetzen</button><button class="btn secondary" id="verwerfen">Verwerfen</button></div>
      </section>` : ""}
    <button class="menu-item wide" data-start="alle" style="width:100%;margin-top:10px">
      <strong>${esc(PLAN.name)}</strong><span>${bloecke.map(b => esc(b.kurz)).join(" · ")} · ca. 5 ½ Stunden mit Pausen</span>
    </button>
    ${bloecke.map(b => `
      <button class="menu-item wide" data-start="${b.id}" style="width:100%;margin-top:8px">
        <strong>${esc(b.name)}</strong><span>Einzelner Block · ${b.minuten} Minuten</span>
      </button>`).join("")}
    ${letzte.length ? `<section class="card"><h3>Letzte Ergebnisse</h3>${letzte.map(x => `<p>${esc(x.datum)} · ${esc(x.variante)}: <strong>${x.prozent} % · Note ${x.note}</strong></p>`).join("")}</section>` : ""}
    <button class="btn ghost" id="back">Zurück</button>`);
  on("[data-start]", "click", e => {
    if (offen && !confirm("Die angefangene Prüfung wird verworfen. Neu starten?")) return;
    starte(e.currentTarget.dataset.start);
  });
  on("#weiter", "click", () => { E = offen; showSchritt(); });
  on("#verwerfen", "click", () => { loeschen(); showIntro(); });
  on("#back", "click", () => go("start"));
}

function starte(id) {
  const data = loadProgress();
  E = bauePruefung(PLAN, id === "alle" ? null : [id], QUESTIONS, SITUATIONEN, data.fragen, { has: hasGenerator, generate }, data.saetze);
  E.variante = id === "alle" ? PLAN.name : PLAN.ablauf.find(s => s.id === id).name;
  E.start = nowStamp().slice(0, 16);
  speichern();
  showSchritt();
}

function showSchritt() {
  stopTick();
  const s = E.schritte[E.index];
  if (!s) { showErgebnis(); return; }
  if (s.typ === "pause") { showPause(s); return; }
  if (s.fertig) { blockAbschluss(s); return; }
  if (s.ende === null) { showBlockIntro(s); return; }
  if (Date.now() >= s.ende) { blockZuEnde(s, true); return; }
  showFrage(s);
}

function weiter() {
  E.index += 1;
  E.qIndex = 0;
  speichern();
  showSchritt();
}

function showPause(s) {
  if (!s.ende) { s.ende = Date.now() + s.minuten * 60000; speichern(); }
  render(`
    <h2>Pause</h2>
    <p class="muted">${s.minuten} Minuten wie am Prüfungstag – aufstehen, trinken, durchatmen.</p>
    <div class="big" id="clock"></div>
    <button class="btn" id="skip">Pause beenden</button>`);
  const tick = () => {
    const left = Math.max(0, Math.round((s.ende - Date.now()) / 1000));
    const el = document.getElementById("clock");
    if (!el) return;
    el.textContent = formatDuration(left);
    if (left <= 0) weiter();
  };
  tick();
  startTick(tick, 1000);
  on("#skip", "click", weiter);
}

function showBlockIntro(s) {
  const max = s.fragen.reduce((sum, q) => sum + maxPunkte(q, PP), 0);
  render(`
    <div class="cat">${esc(PLAN.faecher[s.fach] || "")}</div>
    <h2>${esc(s.name)}</h2>
    <p class="muted">${s.fragen.length} Aufgaben · ${max} Punkte · ${s.minuten} Minuten · kein Zurückspringen</p>
    ${s.satz ? situationHtml(s.satz) : ""}
    <section class="card"><p class="small">${esc(TRAINER.hinweis)} Stift und Papier für Nebenrechnungen bereitlegen.</p></section>
    <button class="btn" id="go">Block starten – die Zeit läuft</button>`);
  on("#go", "click", () => {
    s.ende = Date.now() + s.minuten * 60000;
    E.qIndex = 0;
    speichern();
    showFrage(s);
  });
}

function showFrage(s) {
  const q = s.fragen[E.qIndex];
  const t = typVon(q);
  const last = E.qIndex === s.fragen.length - 1;
  render(`
    <div class="qhead">
      <span><strong>${esc(s.kurz)}</strong> · Aufgabe ${E.qIndex + 1}/${s.fragen.length} · ${maxPunkte(q, PP)} P.</span>
      <span id="clock" class="badge"></span>
    </div>
    <div class="progress" style="margin-top:8px"><div id="bar"></div></div>
    ${frageHtml(q, { kompakteSituation: true })}
    <button class="btn" id="nextQ"></button>
    <button class="btn ghost" id="abort">Prüfung unterbrechen</button>`);
  const nextBtn = document.getElementById("nextQ");
  const label = () => {
    const done = t.beantwortet(q, s.eingaben[E.qIndex]);
    nextBtn.textContent = last ? (done ? "Block abschließen" : "Ohne Antwort abschließen") : (done ? "Weiter" : "Überspringen");
  };
  t.render(q, document.getElementById("antwort"), {
    modus: "pruefung",
    eingabe: s.eingaben[E.qIndex],
    onEingabe: e => { s.eingaben[E.qIndex] = e; speichern(); label(); },
  });
  label();
  on("#nextQ", "click", () => {
    if (last) blockZuEnde(s, false);
    else { E.qIndex += 1; speichern(); showFrage(s); }
  });
  on("#abort", "click", () => {
    if (confirm("Prüfung unterbrechen? Unter „Prüfungssimulation“ kannst du weitermachen – die Zeit läuft aber weiter.")) go("start");
  });
  const tick = () => {
    const left = Math.max(0, Math.round((s.ende - Date.now()) / 1000));
    const clock = document.getElementById("clock");
    if (!clock) return;
    clock.textContent = `⏱ ${formatDuration(left)}`;
    clock.style.color = left <= 300 ? "var(--bad)" : "";
    document.getElementById("bar").style.width = `${(left / (s.minuten * 60)) * 100}%`;
    if (left <= 0) blockZuEnde(s, true);
  };
  tick();
  startTick(tick, 1000);
}

function blockZuEnde(s, zeitUm) {
  stopTick();
  if (zeitUm) toast(`Zeit für „${s.kurz}“ ist abgelaufen`);
  s.fertig = true;
  speichern();
  blockAbschluss(s);
}

// Nach dem Block: offene Aufgaben selbst bewerten, dann weiter
function blockAbschluss(s) {
  const offene = s.fragen.map((q, i) => ({ q, i })).filter(({ q }) => (q.typ || "mc") === "offen");
  if (!offene.length || s.selbstbewertet) { weiter(); return; }
  render(`
    <h2>Selbstbewertung: ${esc(s.kurz)}</h2>
    <p class="muted small">Vergleiche deine Antworten mit der Musterlösung und hake ab, was du inhaltlich genannt hast. Ohne geschriebene Antwort gibt es 0 Punkte.</p>
    ${offene.map(({ i }) => `<section class="card" id="sb${i}"></section>`).join("")}
    <button class="btn" id="ok">Bewertung übernehmen</button>`);
  for (const { q, i } of offene) {
    renderSelbstbewertung(q, document.getElementById(`sb${i}`), s.eingaben[i], e => { s.eingaben[i] = e; speichern(); });
  }
  on("#ok", "click", () => { s.selbstbewertet = true; weiter(); });
}

function auswerten() {
  const bloecke = E.schritte.filter(s => s.typ === "block").map(s => {
    let erreicht = 0, max = 0;
    const anteile = s.fragen.map((q, i) => {
      const anteil = typVon(q).bewerte(q, s.eingaben[i]);
      erreicht += punkteFuer(q, anteil, PP);
      max += maxPunkte(q, PP);
      return anteil;
    });
    erreicht = Math.round(erreicht * 10) / 10;
    const p = prozent(erreicht, max);
    return { name: s.name, kurz: s.kurz, fach: s.fach, satz: s.satz, erreicht, max, prozent: p, note: note(p, TRAINER.notenschluessel).note, anteile };
  });
  const faecher = fachErgebnisse(bloecke, PLAN.faecher, TRAINER.notenschluessel);
  const erreicht = bloecke.reduce((x, b) => x + b.erreicht, 0);
  const max = bloecke.reduce((x, b) => x + b.max, 0);
  const p = prozent(erreicht, max);
  const vollerTag = faecher.length === Object.keys(PLAN.faecher).length;
  return { bloecke, faecher, erreicht, max, prozent: p, note: note(p, TRAINER.notenschluessel), check: vollerTag ? bestehensCheck(faecher, PLAN.bestehen) : null };
}

function showErgebnis() {
  stopTick();
  if (!E.ergebnis) {
    E.ergebnis = auswerten();
    const R = E.ergebnis;
    E.schritte.filter(s => s.typ === "block").forEach((s, b) => {
      s.fragen.forEach((q, i) => recordAnswer(q, zaehltRichtig(R.bloecke[b].anteile[i])));
    });
    const data = loadProgress();
    const datum = nowStamp().slice(0, 16);
    data.pruefungen.push({
      datum, variante: E.variante, prozent: R.prozent, note: R.note.note,
      bloecke: R.bloecke.map(({ anteile, ...rest }) => rest),
      faecher: R.faecher,
    });
    R.bloecke.forEach(b => { if (b.satz) data.saetze[b.satz] = datum; });
    saveProgress(data);
    loeschen();
  }
  const R = E.ergebnis;
  render(`
    <h2 class="center">Prüfung beendet</h2>
    <div class="big">${R.prozent} %</div>
    <p class="center muted">${fmt(R.erreicht, 1)} von ${R.max} Punkten · Note ${R.note.note} (${esc(R.note.text)}) · ${esc(E.variante)}</p>
    <section class="card"><h3>Blöcke</h3>
      ${R.bloecke.map(b => `
        <div class="bar-row"><span>${esc(b.kurz)}</span>
          <div class="bar"><div style="width:${b.prozent}%;background:${barColor(b.prozent)}"></div></div>
          <span class="bar-val">${b.prozent} % · ${b.note}</span></div>`).join("")}
    </section>
    ${R.faecher.length > 1 ? `<section class="card"><h3>Prüfungsbereiche</h3>${R.faecher.map(f => `<p>${esc(f.name)}: <strong>${f.prozent} % · Note ${f.note} (${esc(f.text)})</strong></p>`).join("")}</section>` : ""}
    ${R.check ? `
      <section class="card"><h3>Bestehensregel (schriftlich)</h3>
        <p class="${R.check.bestanden ? "trend-up" : "trend-down"}"><strong>${R.check.bestanden ? "Die schriftlichen Bereiche würden reichen." : "So würde es schriftlich nicht reichen:"}</strong></p>
        ${R.check.gruende.map(g => `<p class="small">${esc(g)}</p>`).join("")}
        <p class="small muted">Zum Bestehen zählen außerdem der Kundenauftrag (mindestens ausreichend) und das Gesamtergebnis von Teil 2 – das prüft die App nicht.</p>
      </section>` : ""}
    <button class="btn" id="review">Aufgaben durchgehen</button>
    <button class="btn secondary" id="home">Zum Start</button>`);
  on("#review", "click", () => showReview(true));
  on("#home", "click", () => go("start"));
}

function showReview(nurFehler) {
  const items = [];
  E.schritte.filter(s => s.typ === "block").forEach((s, b) => s.fragen.forEach((q, i) => {
    const anteil = E.ergebnis.bloecke[b].anteile[i];
    if (!nurFehler || anteil < 1) items.push({ s, q, e: s.eingaben[i], anteil });
  }));
  render(`
    <h2>Durchsicht</h2>
    <div class="segmented" style="margin-bottom:12px">
      <button id="fWrong" class="${nurFehler ? "on" : ""}">Nur Fehler</button>
      <button id="fAll" class="${nurFehler ? "" : "on"}">Alle Aufgaben</button>
    </div>
    ${items.length ? items.map(({ s, q, e, anteil }, idx) => {
      const t = typVon(q);
      const karte = cardForQuestion(q);
      return `
        <section class="card">
          <div class="cat">${esc(s.kurz)} · ${fmt(punkteFuer(q, anteil, PP), 1)} / ${maxPunkte(q, PP)} P.</div>
          <p><strong>${esc(q.q)}</strong></p>
          <p class="${anteil >= 1 ? "trend-up" : "trend-down"} small">Deine Antwort: ${esc(t.antwortText(q, e))}</p>
          ${anteil >= 1 ? "" : `<p class="trend-up small">Lösung: ${esc(t.loesungText(q))}</p>`}
          <p class="small">${esc(q.explain)}</p>
          <div class="feedback-actions">
            ${karte ? `<button class="link" data-card="${idx}">📖 Spickzettel: ${esc(karte.title)}</button>` : ""}
            <button class="link muted-link" data-report="${idx}">⚑ Frage melden</button>
          </div>
        </section>`;
    }).join("") : `<p class="center trend-up">Alles richtig – stark!</p>`}
    <button class="btn" id="back">Zur Auswertung</button>`);
  on("#fWrong", "click", () => showReview(true));
  on("#fAll", "click", () => showReview(false));
  on("#back", "click", showErgebnis);
  on("[data-card]", "click", ev => openCardOverlay(cardForQuestion(items[Number(ev.currentTarget.dataset.card)].q)));
  on("[data-report]", "click", ev => {
    const btn = ev.currentTarget;
    const { q, e } = items[Number(btn.dataset.report)];
    openReportOverlay(q, e, () => { btn.textContent = "⚑ Gemeldet"; btn.disabled = true; });
  });
}

screen("pruefung", showIntro);
