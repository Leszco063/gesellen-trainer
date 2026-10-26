// Gemeinsame Helfer für alle Tests (node tools/tests.js).
import { fileURLToPath } from "node:url";

export const ROOT = fileURLToPath(new URL("../..", import.meta.url));
let failures = 0;

export function fail(msg) {
  failures += 1;
  if (failures <= 40) console.error("  FEHLER:", msg);
}
export function ok(cond, msg) {
  if (!cond) fail(msg);
}
export function eq(actual, expected, msg) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) fail(`${msg}: erwartet ${JSON.stringify(expected)}, bekommen ${JSON.stringify(actual)}`);
}
export function anzahlFehler() {
  return failures;
}
// Ersatz für den Browser-Speicher
export function fakeStorage() {
  globalThis.localStorage = {
    store: {},
    getItem(k) { return this.store[k] ?? null; },
    setItem(k, v) { this.store[k] = String(v); },
    removeItem(k) { delete this.store[k]; },
  };
  return globalThis.localStorage;
}
