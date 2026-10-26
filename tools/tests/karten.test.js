import { ok, eq } from "./hilfe.js";
import { CARDS, cardForQuestion } from "../../kern/karten.js";

export default async function () {
  ok(CARDS.length >= 1, "mindestens eine Karte");
  eq(new Set(CARDS.map(c => c.id)).size, CARDS.length, "Karten-IDs eindeutig");
  const karte = CARDS[0];
  eq(cardForQuestion({ cat: karte.cat, q: karte.keys[0], explain: "" }).id, karte.id, "passende Karte über Stichwort");
  eq(cardForQuestion({ cat: "GibtsNicht", q: "", explain: "" }), null, "kein Bereich → null");
  console.log(`✓ Spickzettel-Suche (${CARDS.length} Karten)`);
}
