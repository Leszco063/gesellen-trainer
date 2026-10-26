// Übungsrunde: adaptive Schwierigkeit, optional Zeitdruck, Wiederholung fälliger Fragen.

import { QUESTIONS } from "../inhalt/fragen.js";
import { GEN_SHARE, hasGenerator, generate } from "../inhalt/gen/index.js";
import { CATEGORIES, LEVEL_NAMES, LEVEL_COLORS, TIMER_SECONDS } from "./config.js";
import { esc, shuffle } from "./util.js";
import { render, on, startTick, stopTick, screen, go, toast } from "./ui.js";
import { loadProgress, loadSettings, saveRun, recordAnswer, dueQuestions, withBox, isDue, dailyStatus } from "./speicher.js";
import { pickFromPool } from "./auswahl.js";
import { frageHtml } from "./fragenansicht.js";
import { typVon } from "./typen/index.js";
import { zaehltRichtig } from "./bewertung.js";
import { cardForQuestion } from "./karten.js";
import { openCardOverlay } from "./lernen.js";
import { openReportOverlay } from "./meldungen.js";

let S = null; // aktuelle Runde

// override.cats: nur diese Bereiche üben (z. B. vom Spickzettel aus)
function startSession(mode, override = {}) {
  const settings = loadSettings();
  const history = loadProgress().fragen;
  const activeCats = override.cats || CATEGORIES.filter(c => settings.cats[c]);
  if (!activeCats.length) { alert("Bitte mindestens einen Bereich auswählen."); return; }
  let pool = QUESTIONS.filter(q => activeCats.includes(q.cat));
  if (mode === "faellig") {
    pool = dueQuestions(history, pool);
    if (!pool.length) { alert("In den ausgewählten Bereichen ist heute nichts zum Wiederholen fällig."); return; }
  }
  const unlimited = activeCats.some(c => hasGenerator(c));
  if (mode === "normal" && !pool.length && !unlimited) { alert("In den ausgewählten Bereichen gibt es noch keine Fragen."); return; }
  S = {
    mode, cats: activeCats, pool, history,
    adaptive: settings.adaptive && mode === "normal",
    fixedLevel: settings.level,
    timer: settings.timer,
    total: mode === "faellig" ? Math.min(pool.length, Math.max(settings.count, 20)) : (unlimited ? settings.count : Math.min(settings.count, pool.length)),
    level: settings.adaptive ? 1 : settings.level,
    streakCorrect: 0, streakWrong: 0,
    used: new Set(), questions: [], index: 0, score: 0, wrong: [], catStats: {},
  };
  pickNext();
  showQuestion();
}

function pickNext() {
  let q = null;
  if (S.mode === "faellig") {
    q = S.pool.find(x => !S.used.has(x.id)) || null; // schon nach Box sortiert
  } else {
    const level = S.adaptive ? S.level : S.fixedLevel;
    for (const cat of shuffle(S.cats)) {
      if (hasGenerator(cat) && Math.random() < GEN_SHARE) { q = generate(cat, level); break; }
      q = pickFromPool(S.pool.filter(x => x.cat === cat), level, S.used, S.history);
      if (q) break;
    }
    // Feste Fragen aufgebraucht: Rechenaufgaben erzeugen, solange es einen Generator gibt
    const genCat = S.cats.find(c => hasGenerator(c));
    if (!q && genCat) q = generate(genCat, level);
  }
  if (!q) return null;
  S.used.add(q.id);
  S.questions.push(q);
  return q;
}

function historyTag(q) {
  if (q.gen) return `<span class="muted">Neu erzeugt</span>`;
  const raw = S.history[q.id];
  if (!raw) return `<span style="color:var(--info)" class="badge">Neu</span>`;
  const e = withBox(raw);
  if (isDue(e) && e.box === 1) return `<span style="color:var(--warn)" class="badge">Wiederholung – zuletzt falsch</span>`;
  if (isDue(e)) return `<span style="color:var(--warn)" class="badge">Wiederholung · Box ${e.box}</span>`;
  return `<span class="muted">Box ${e.box} · ${e.gesehen}× gehabt</span>`;
}

function questionHeader(q) {
  const modeLabel = S.mode === "faellig" ? "Wiederholung" : (S.adaptive ? "Adaptiv" : "");
  return `
    <div class="qhead"><span>Aufgabe ${S.index + 1} / ${S.total}</span><span>Richtig: ${S.score}</span></div>
    <div class="qmeta">
      <span class="badge" style="color:${LEVEL_COLORS[q.level]}">● ${LEVEL_NAMES[q.level]}</span>
      ${historyTag(q)}
      <span class="muted" style="margin-left:auto">${modeLabel}</span>
    </div>
    <div class="progress"><div style="width:${(S.index / S.total) * 100}%"></div></div>
    <div class="cat">${esc(q.cat)}</div>`;
}

function showQuestion() {
  const q = S.questions[S.index];
  const t = typVon(q);
  render(`
    ${questionHeader(q)}
    ${frageHtml(q)}
    <div id="feedback"></div>
    <div class="timer" id="timer"></div>
    <button class="btn" id="next" style="display:none">${S.index + 1 >= S.total ? "Zum Ergebnis" : "Weiter"}</button>`);
  S.answered = false;
  S.eingabe = t.neueEingabe(q);
  t.render(q, document.getElementById("antwort"), {
    modus: "uebung",
    eingabe: S.eingabe,
    onEingabe: e => { S.eingabe = e; },
    onAbgabe: e => checkAnswer(e, false),
  });
  on("#next", "click", nextQuestion);
  if (S.timer && (q.typ || "mc") !== "offen") {
    let left = TIMER_SECONDS;
    const el = document.getElementById("timer");
    el.textContent = `⏱ ${left} s`;
    startTick(() => {
      left -= 1;
      el.textContent = `⏱ ${left} s`;
      el.classList.toggle("low", left <= 10);
      if (left <= 0) checkAnswer(S.eingabe, true);
    });
  }
}

function checkAnswer(eingabe, zeitUm) {
  if (S.answered) return;
  S.answered = true;
  stopTick();
  const q = S.questions[S.index];
  const t = typVon(q);
  const anteil = t.bewerte(q, eingabe);
  const isCorrect = zaehltRichtig(anteil);
  const cs = S.catStats[q.cat] = S.catStats[q.cat] || { richtig: 0, gesamt: 0 };
  cs.gesamt += 1;
  if (isCorrect) cs.richtig += 1;
  S.history = recordAnswer(q, isCorrect);
  t.markiere(q, document.getElementById("antwort"), eingabe);
  const day = dailyStatus();
  if (day.heute === day.ziel) toast(`🎯 Tagesziel erreicht! Serie: ${day.serie} ${day.serie === 1 ? "Tag" : "Tage"}`);

  let head;
  if (isCorrect) {
    S.score += 1; S.streakCorrect += 1; S.streakWrong = 0;
    head = anteil < 1 ? `Gut – ${Math.round(anteil * 100)} % richtig.` : "Richtig!";
  } else {
    S.streakWrong += 1; S.streakCorrect = 0; S.wrong.push(q);
    head = zeitUm ? "Zeit abgelaufen." : anteil > 0 ? `Teilweise – ${Math.round(anteil * 100)} % richtig.` : "Nicht ganz.";
  }

  let levelNote = "";
  if (S.adaptive) {
    const before = S.level;
    if (S.streakCorrect >= 2 && S.level < 3) { S.level += 1; S.streakCorrect = 0; }
    else if (S.streakWrong >= 2 && S.level > 1) { S.level -= 1; S.streakWrong = 0; }
    if (S.level !== before) levelNote = `<span class="explain muted small">Schwierigkeit wird ${S.level > before ? "höher" : "niedriger"} gestellt.</span>`;
  }

  const typ = q.typ || "mc";
  const loesung = typ === "zahl" || typ === "reihenfolge" ? `<span class="explain"><strong>Lösung:</strong> ${esc(t.loesungText(q))}</span>` : "";
  const card = cardForQuestion(q);
  const fb = document.getElementById("feedback");
  fb.className = `feedback ${isCorrect ? "ok" : "bad"}`;
  fb.innerHTML = `<strong>${head}</strong>${loesung}<span class="explain">${esc(q.explain)}</span>${levelNote}
    <div class="feedback-actions">
      ${card ? `<button class="link" id="cardLink">📖 Spickzettel: ${esc(card.title)}</button>` : ""}
      <button class="link muted-link" id="reportBtn">⚑ Frage melden</button>
    </div>`;
  if (card) document.getElementById("cardLink").addEventListener("click", () => openCardOverlay(card));
  const reportBtn = document.getElementById("reportBtn");
  reportBtn.addEventListener("click", () => openReportOverlay(q, eingabe, () => {
    reportBtn.textContent = "⚑ Gemeldet";
    reportBtn.disabled = true;
  }));
  document.getElementById("timer").textContent = "";
  const next = document.getElementById("next");
  next.style.display = "block";
  next.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  S.index += 1;
  if (S.index < S.total && pickNext()) showQuestion();
  else showResult();
}

function showResult() {
  const total = S.questions.length;
  const pct = total ? Math.round((S.score / total) * 100) : 0;
  const before = loadProgress().runs;
  let lastPct = before.length ? before[before.length - 1].prozent : null;
  if (S.mode === "faellig") lastPct = null; // Wiederholungen zählen nicht in den Verlauf
  else saveRun(S.score, total, S.catStats, S.level);

  let cmp = "";
  if (lastPct !== null) {
    const diff = pct - lastPct;
    if (diff > 0) cmp = `<p class="center trend-up">↑ ${diff} Prozentpunkte besser als letzte Runde (${lastPct}%)</p>`;
    else if (diff < 0) cmp = `<p class="center trend-down">↓ ${-diff} Prozentpunkte schwächer als letzte Runde (${lastPct}%)</p>`;
    else cmp = `<p class="center trend-flat">→ Gleiches Ergebnis wie letzte Runde (${lastPct}%)</p>`;
  }
  let extra = "";
  if (S.mode === "faellig") {
    extra = `<p class="center"><strong>${S.score} von ${total} gewusst</strong> – diese rücken eine Box weiter.<br>Heute noch fällig: ${dueQuestions(S.history).length}</p>`;
  } else if (S.adaptive) {
    extra = `<p class="center">Zuletzt erreichtes Level: <strong>${LEVEL_NAMES[S.level]}</strong></p>`;
  }
  const wrongByCat = {};
  S.wrong.forEach(q => { wrongByCat[q.cat] = (wrongByCat[q.cat] || 0) + 1; });
  const wrongHtml = S.wrong.length
    ? `<section class="card"><h3>Fehler nach Bereich</h3>${Object.entries(wrongByCat).map(([c, n]) => `<p>${esc(c)}: ${n} Fehler</p>`).join("")}</section>`
    : "";
  render(`
    <h2 class="center">${S.mode === "faellig" ? "Wiederholung beendet" : "Ergebnis"}</h2>
    <div class="big">${S.score} / ${total}</div>
    <p class="center muted">${pct} % richtig</p>
    ${cmp}${extra}${wrongHtml}
    <button class="btn" id="again">Zurück zum Start</button>`);
  on("#again", "click", () => go("start"));
}

screen("uebung", startSession);
