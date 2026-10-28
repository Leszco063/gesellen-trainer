// WiSo: Arbeitnehmeranteile der Sozialversicherung aus dem Bruttolohn (Beitragssätze 2026).
// Quelle: Rechercheakte Abschnitt 3.5 – zum Jahreswechsel prüfen!
import { randInt, fmt, euro } from "../../kern/util.js";
import { rechenFrage, runde } from "./gemeinsam.js";

export const SV_2026 = { rv: 18.6, av: 2.6, kv: 14.6, kvZusatz: 2.9, pv: 3.6, pvKinderlos: 0.6 };
const AN = { rv: SV_2026.rv / 2, av: SV_2026.av / 2, kv: (SV_2026.kv + SV_2026.kvZusatz) / 2, pv: SV_2026.pv / 2 };

export function sozialabgaben(cat, level) {
  const azubi = level < 3 ? Math.random() < 0.5 : Math.random() < 0.4;
  const brutto = azubi ? 1050 + 10 * randInt(0, 30) : 2600 + 50 * randInt(0, 20);
  const wer = azubi ? "Ein Auszubildender (19 Jahre)" : "Ein Geselle (25 Jahre, kinderlos)";
  let satz, was, weg;
  if (level === 1) {
    satz = AN.rv;
    was = "den Arbeitnehmeranteil zur Rentenversicherung";
    weg = `Rentenversicherung 18,6 %, davon trägt der Arbeitnehmer die Hälfte: 9,3 %`;
  } else if (level === 2) {
    satz = AN.kv;
    was = "den Arbeitnehmeranteil zur Krankenversicherung (mit durchschnittlichem Zusatzbeitrag 2,9 %)";
    weg = `(14,6 % + 2,9 %) ÷ 2 = 8,75 %`;
  } else {
    const pv = AN.pv + (azubi ? 0 : SV_2026.pvKinderlos);
    satz = AN.rv + AN.av + AN.kv + pv;
    was = "alle Arbeitnehmeranteile zur Sozialversicherung zusammen";
    weg = `RV 9,3 % + AV 1,3 % + KV 8,75 % + PV ${fmt(pv)} %${azubi ? "" : " (inkl. 0,6 % Kinderlosenzuschlag ab 23)"} = ${fmt(satz)} %`;
  }
  const betrag = runde((brutto * satz) / 100);
  return rechenFrage(cat, level,
    `${wer} verdient ${euro(brutto)} brutto im Monat. Berechnen Sie ${was} (Beitragssätze 2026).`,
    betrag, "€", `${weg} → ${euro(brutto)} × ${fmt(satz)} % = ${euro(betrag)}`, { art: "sv", brutto, satz },
    [(brutto * satz * 2) / 100, (brutto * satz) / 1000, (brutto * satz) / 200], { format: euro, formel: "AN-Anteil = Bruttolohn · AN-Satz / 100\nAN-Satz = Beitragssatz / 2 (auch der KV-Zusatzbeitrag); den PV-Kinderlosenzuschlag ab 23 zahlt der Arbeitnehmer allein" });
}
