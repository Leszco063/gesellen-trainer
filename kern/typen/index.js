// Alle Fragetypen. Jeder Typ hat dieselbe Schnittstelle (siehe mc.js).
import * as mc from "./mc.js";
import * as offen from "./offen.js";
import * as zahl from "./zahl.js";
import * as reihenfolge from "./reihenfolge.js";
import * as zuordnung from "./zuordnung.js";

export const TYPEN = { mc, offen, zahl, reihenfolge, zuordnung };

export function typVon(q) {
  const t = TYPEN[q.typ || "mc"];
  if (!t) throw new Error(`Unbekannter Fragetyp: ${q.typ}`);
  return t;
}
