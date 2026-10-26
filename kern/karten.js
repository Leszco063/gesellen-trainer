// Spickzettel aus inhalt/lernkarten.js und die Suche nach der passenden Karte zu einer Frage.
// Ohne DOM, damit die Tests sie laden können.
import { CARDS } from "../inhalt/lernkarten.js";

export { CARDS };

// Karte des Bereichs mit den meisten Stichwort-Treffern in Frage + Erklärung
export function cardForQuestion(q) {
  const candidates = CARDS.filter(c => c.cat === q.cat);
  if (!candidates.length) return null;
  const text = `${q.q} ${q.explain}`.toLowerCase();
  let best = candidates[0], bestScore = 0;
  for (const c of candidates) {
    const score = c.keys.reduce((s, k) => s + (text.includes(k.toLowerCase()) ? 1 : 0), 0);
    if (score > bestScore) { best = c; bestScore = score; }
  }
  return best;
}
