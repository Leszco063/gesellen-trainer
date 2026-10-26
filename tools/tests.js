// Automatische Tests: node tools/tests.js
// Läuft auch bei jedem Upload auf GitHub (siehe .github/workflows/pruefen.yml).
// Neue Testdateien unten in DATEIEN eintragen.

import { anzahlFehler } from "./tests/hilfe.js";

const DATEIEN = ["offline", "util", "bewertung", "typen", "speicher", "generatoren", "karten", "pruefung-aufbau"];

for (const name of DATEIEN) {
  const mod = await import(`./tests/${name}.test.js`);
  await mod.default();
}

if (anzahlFehler()) {
  console.error(`\n${anzahlFehler()} Fehler gefunden.`);
  process.exit(1);
}
console.log("\nAlle Tests bestanden.");
