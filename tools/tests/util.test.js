import { eq } from "./hilfe.js";
import { tageBis, datumDe, addDays, formelHtml } from "../../kern/util.js";

export default async function () {
  eq(tageBis("2026-11-27", "2026-10-26"), 32, "tageBis 26.10. → 27.11.");
  eq(tageBis("2026-11-27", "2026-11-27"), 0, "tageBis am selben Tag");
  eq(tageBis("2026-11-27", "2026-11-28"), -1, "tageBis danach");
  eq(tageBis("2027-01-29", "2026-12-31"), 29, "tageBis über den Jahreswechsel");
  eq(tageBis("2026-03-30", "2026-03-28"), 2, "tageBis über die Zeitumstellung");
  eq(datumDe("2026-11-27"), "27.11.2026", "datumDe");
  eq(addDays("2026-12-31", 1), "2027-01-01", "addDays über den Jahreswechsel");
  eq(formelHtml("s = s_R + s_B"), "s = s<sub>R</sub> + s<sub>B</sub>", "formelHtml: einfacher Index");
  eq(formelHtml("F_{B,max} / U_0"), "F<sub>B,max</sub> / U<sub>0</sub>", "formelHtml: Index in Klammern");
  eq(formelHtml("a < b & AN-Satz"), "a &lt; b &amp; AN-Satz", "formelHtml: maskiert HTML, ohne _ kein Index");
  console.log("✓ Datumshilfen, Formelschreibweise");
}
