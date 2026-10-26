// Jede Datei, die die App braucht, muss im Service Worker stehen (sonst fehlt sie offline),
// und umgekehrt darf sw.js keine Dateien nennen, die es nicht gibt.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fail, ROOT } from "./hilfe.js";

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap(name => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

export default async function () {
  const sw = readFileSync(join(ROOT, "sw.js"), "utf-8");
  const files = ["kern", "inhalt", "css"].flatMap(d => walk(join(ROOT, d)))
    .map(p => relative(ROOT, p).replaceAll("\\", "/"))
    .filter(f => /\.(js|css|svg|png)$/.test(f));
  for (const f of files) if (!sw.includes(`"${f}"`)) fail(`sw.js: Datei fehlt in der Offline-Liste: ${f}`);
  for (const m of sw.matchAll(/"((?:kern|inhalt|css)\/[^"]+)"/g)) {
    if (!existsSync(join(ROOT, m[1]))) fail(`sw.js: Eintrag ohne Datei: ${m[1]}`);
  }
  console.log(`✓ Service Worker: ${files.length} Dateien geprüft`);
}
