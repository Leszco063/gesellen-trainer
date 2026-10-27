// Stellt eine Prüfung nach dem Prüfungsplan zusammen (ohne Oberfläche, damit testbar).
import { chooseByHistory } from "./auswahl.js";
import { typVon } from "./typen/index.js";

export function zufallsLevel(mix, r = Math.random()) {
  return r < mix[0] ? 1 : r < mix[0] + mix[1] ? 2 : 3;
}

// Aufgabensatz des Bereichs, der am längsten nicht dran war (nie gespielte zuerst).
// Sind alle Sätze schon gespielt, wechseln Satz und gemischter Block (null) ab – zuletzt["mix:<blockId>"]
// merkt sich den letzten gemischten Block. So kommen auch die Einzelfragen in die Simulation.
export function waehleSatz(block, situationen, pool, zuletzt = {}) {
  const kandidaten = Object.entries(situationen)
    .filter(([id, s]) => block.cats.includes(s.cat) && pool.some(q => q.situation === id))
    .map(([id]) => id)
    .sort((a, b) => (zuletzt[a] || "").localeCompare(zuletzt[b] || ""));
  const satz = kandidaten[0];
  if (!satz) return null;
  if (!zuletzt[satz]) return satz;
  return (zuletzt[`mix:${block.id}`] || "") < zuletzt[satz] ? null : satz;
}

// Gemischter Block nach blockMix; gen = { has(cat), generate(cat, level) } liefert fehlende Rechenaufgaben
export function baueBlock(block, mix, levelMix, pool, history, used, gen) {
  const imBereich = pool.filter(q => block.cats.includes(q.cat) && !q.situation);
  const fragen = [];
  let fehlend = 0;
  for (const [typ, anzahl] of Object.entries(mix)) {
    for (let i = 0; i < anzahl; i++) {
      const level = zufallsLevel(levelMix);
      const frei = imBereich.filter(q => (q.typ || "mc") === typ && !used.has(q.id));
      let q = null;
      if (frei.length) {
        const passend = frei.filter(x => x.level === level);
        q = chooseByHistory(passend.length ? passend : frei, history);
      } else if (typ === "zahl" && gen) {
        const cat = block.cats.find(c => gen.has(c));
        if (cat) q = gen.generate(cat, level);
      }
      if (q) { used.add(q.id); fragen.push(q); } else fehlend += 1;
    }
  }
  for (let i = 0; i < fehlend; i++) {
    const rest = imBereich.filter(q => !used.has(q.id));
    if (!rest.length) break;
    const q = chooseByHistory(rest, history);
    used.add(q.id);
    fragen.push(q);
  }
  return fragen;
}

// auswahl: null = ganzer Ablauf mit Pausen, sonst Liste von Block-IDs (ohne Pausen)
export function bauePruefung(plan, auswahl, pool, situationen, history, gen, zuletzt = {}) {
  const used = new Set();
  const schritte = [];
  for (const s of plan.ablauf) {
    if (s.pause) {
      if (!auswahl) schritte.push({ typ: "pause", minuten: s.pause, ende: null });
      continue;
    }
    if (auswahl && !auswahl.includes(s.id)) continue;
    const satz = waehleSatz(s, situationen, pool, zuletzt);
    const fragen = satz
      ? pool.filter(q => q.situation === satz).sort((a, b) => a.nr - b.nr)
      : baueBlock(s, plan.blockMix, plan.levelMix, pool, history, used, gen);
    fragen.forEach(q => used.add(q.id));
    schritte.push({
      typ: "block", id: s.id, name: s.name, kurz: s.kurz, fach: s.fach, minuten: s.minuten, satz,
      fragen, eingaben: fragen.map(q => typVon(q).neueEingabe(q)),
      ende: null, fertig: false, selbstbewertet: false,
    });
  }
  return { schritte, index: 0, qIndex: 0 };
}
