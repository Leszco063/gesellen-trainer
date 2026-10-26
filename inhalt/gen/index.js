// Übersicht aller Rechen-Generatoren je Bereich. Ein Teil der Übungsaufgaben (GEN_SHARE)
// wird erzeugt; in der Prüfung füllen sie fehlende Rechenaufgaben auf.
import { rand } from "../../kern/util.js";
import { elektrik } from "./elektrik.js";
import { hydraulik } from "./hydraulik.js";
import { sozialabgaben } from "./sozialabgaben.js";

export const GENERATORS = {
  Diesel: [elektrik, hydraulik],
  Bremse: [hydraulik],
  Airbag: [elektrik],
  WiSo: [sozialabgaben],
  Grundlagen: [elektrik],
};
export const GEN_SHARE = 0.15;

export function hasGenerator(cat) {
  return Boolean(GENERATORS[cat] && GENERATORS[cat].length);
}

export function generate(cat, level) {
  return rand(GENERATORS[cat])(cat, level);
}
