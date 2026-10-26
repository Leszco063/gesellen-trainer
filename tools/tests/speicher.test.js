import { fail, ok, eq, fakeStorage } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";

export default async function () {
  const store = fakeStorage();
  store.setItem("testTrainer.progress", JSON.stringify({ runs: [{ prozent: 99 }], fragen: {} })); // Telekom-Daten auf derselben Domain
  const sp = await import("../../kern/speicher.js");
  const { dateKey, addDays } = await import("../../kern/util.js");
  const today = dateKey();
  const qA = { id: "testA", cat: "Diesel" }, qB = { id: "testB", cat: "Diesel" };

  eq(sp.loadProgress().runs.length, 0, "Telekom-Fortschritt wird nicht gelesen");
  let h = sp.recordAnswer(qA, true);
  if (h.testA.box !== 3 || h.testA.faellig !== addDays(today, 3)) fail(`Leitner: neu+richtig sollte Box 3 / +3 Tage sein, ist ${JSON.stringify(h.testA)}`);
  h = sp.recordAnswer(qA, true);
  ok(h.testA.box === 4 && h.testA.faellig === addDays(today, 7), "Leitner: Box 3 + richtig → Box 4 / +7 Tage");
  h = sp.recordAnswer(qA, false);
  ok(h.testA.box === 1 && h.testA.faellig === today, "Leitner: falsch → Box 1 / heute");
  h = sp.recordAnswer(qB, false);
  ok(h.testB.box === 1 && sp.isDue(h.testB), "Leitner: neu+falsch heute fällig");
  eq(sp.dueQuestions(h, [qA, qB, { id: "x" }]).length, 2, "dueQuestions");
  ok(!sp.recordAnswer({ id: "gen-1", gen: true }, true)["gen-1"], "Generierte Aufgaben landen nicht im Verlauf");
  eq(sp.loadProgress().saetze, {}, "saetze vorhanden");
  sp.saveSettings(sp.loadSettings());

  const fremd = Object.keys(store.store).filter(k => !k.startsWith(`${TRAINER.id}.`) && k !== "testTrainer.progress");
  eq(fremd, [], "Schlüssel-Präfix: nur gp2kfz.* geschrieben");
  eq(JSON.parse(store.getItem("testTrainer.progress")).runs.length, 1, "Telekom-Daten unverändert");

  // Tagesziel und Serie
  store.store = {};
  const tage = {};
  tage[today] = { anzahl: 30, ziel: 30 };
  tage[addDays(today, -1)] = { anzahl: 35, ziel: 30 };
  tage[addDays(today, -2)] = { anzahl: 10, ziel: 30 };
  for (let i = 10; i <= 12; i++) tage[addDays(today, -i)] = { anzahl: 40, ziel: 30 };
  store.setItem(`${TRAINER.id}.progress`, JSON.stringify({ runs: [], fragen: {}, tage }));
  const ds = sp.dailyStatus();
  ok(ds.serie === 2 && ds.rekord === 3 && ds.erreicht, `Serie 2 / Rekord 3 / erreicht, ist ${JSON.stringify(ds)}`);

  const { chooseByHistory, pickFromPool } = await import("../../kern/auswahl.js");
  const pool = [{ id: "p1", level: 1 }, { id: "p2", level: 2 }];
  ok(["p1", "p2"].includes(chooseByHistory(pool, {}).id), "chooseByHistory liefert eine Frage");
  eq(pickFromPool(pool, 3, new Set(["p1"]), {}).id, "p2", "pickFromPool weicht auf anderes Level aus");
  console.log("✓ Speicher: Leitner, Tagesziel, Schlüssel-Präfix, Auswahl");
}
