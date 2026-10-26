# Gesellenprüfungs-Trainer Kfz – Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bis So 01.11.2026 läuft eine installierbare PWA, mit der der User die schriftliche Gesellenprüfung Teil 2 (27.11.2026) in allen fünf Blöcken üben und als Prüfungstag simulieren kann. Sie ist als Vorlage (`kern/` + `inhalt/`) für weitere Trainer gebaut.

**Architecture:** Vanilla-JS-ES-Module ohne Build-Schritt, wie beim Telekom-Trainer. `kern/` enthält die generische App (Übung, Prüfung, Leitner, Statistik, fünf Fragetypen, Bewertung), `inhalt/` alles Prüfungsspezifische (Prüfungsplan, Fragenbank, Spickzettel, Rechen-Generatoren, SVG-Bilder). Die Fragenbank wird in Python gepflegt und von `tools/export.py` geprüft und nach `inhalt/fragen.js` exportiert. Logik ohne DOM-Zugriff liegt in eigenen Modulen und wird mit Node getestet.

**Tech Stack:** HTML/CSS/JS (ES2022-Module), Service Worker, Python 3 (nur Standardbibliothek; Pillow nur für Icons), Node ≥ 20 für Tests, GitHub Pages + GitHub Actions.

**Spec:** [docs/superpowers/specs/2026-10-26-gesellenpruefung-trainer-design.md](../specs/2026-10-26-gesellenpruefung-trainer-design.md) (Abschnitt 15 hat Vorrang vor 5–9)
**Recherche:** [docs/recherche/2026-10-26-gp2-winter-2026-27.md](../../recherche/2026-10-26-gp2-winter-2026-27.md)
**Lokales Material (nicht im Repo):** `material/notizen/*.md`, `material/fotos/`
**Vorbild-Code:** `C:\Users\leand\Desktop\Telekom\webapp` (in Bash: `T=/c/Users/leand/Desktop/Telekom/webapp`)

## Global Constraints

- Keine npm-Abhängigkeiten, kein Bundler. Module laufen direkt im Browser und in Node (`"type": "module"`).
- Python nur mit der Standardbibliothek (Ausnahme: `tools/icons.py` braucht Pillow).
- Alle Texte in der App auf Deutsch, den User mit „du“ ansprechen, Prüfungsfragen in der Sie-Form wie im Original („Nennen Sie …“).
- **Urheberrecht:** Keine Texte, Fotos oder Grafiken aus Büchern oder Prüfungen 1:1 übernehmen. Fragen in eigenen Worten, Bilder als eigene SVGs. `material/` wird nie committet (steht in `.gitignore`).
- localStorage-Schlüssel beginnen immer mit `TRAINER.id + "."` (hier `gp2kfz.`). Der Telekom-Trainer liegt auf derselben Domain `leszco063.github.io`.
- Jede Datei in `kern/`, `inhalt/` (außer `inhalt/fragen/*.py`) und `css/` steht in `sw.js` → `FILES`. Das prüft der Test `offline`.
- Bedienung am iPhone: Eingabefelder `font-size` ≥ 16 px (sonst zoomt iOS), Layout ab 360 px Breite ohne horizontales Scrollen.
- Termine: Theorie `2026-11-27`, Praxis `2027-01-29`.
- Punkte-Standard pro Typ: `mc` 2, `zahl` 3, `reihenfolge` 4, `offen` 4, `zuordnung` 4. Eine Frage zählt für Leitner und Statistik als richtig ab Anteil ≥ 0,67.
- Notenschlüssel: 92 / 81 / 67 / 50 / 30 → Note 1 … 6.
- Commits auf Deutsch, Autor ist schon repo-lokal gesetzt (`Leszco063`), jede Commit-Nachricht endet mit `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Tests: `node tools/tests.js` und `python tools/test_export.py`, beide müssen nach jedem Task grün sein.

## Review Focus

1. **App wird mitten in der Simulation geschlossen** (iOS beendet PWAs im Hintergrund): Beim nächsten Öffnen muss die Prüfung mit der Restzeit fortsetzbar sein, abgelaufene Blöcke enden sauber, und Eingaben aller Typen überstehen `JSON.stringify` → `JSON.parse` → `bewerte`. Test: Task 8, `pruefung-aufbau.test.js` („Rundreise JSON“).
2. **Zahleneingabe in deutscher Schreibweise** („12,5“, „12.5“, „ 1.234,5 bar“, leer, „abc“): Kommazahlen werden richtig erkannt, Unlesbares zählt als falsch statt NaN-Punkten. Test: Task 4, `typen.test.js` → `parseZahl`.
3. **Zu wenige Fragen eines Typs für einen Block ohne Aufgabensatz** (z. B. Klima ohne `zahl` und ohne Generator): Der Block wird mit anderen Fragen des Bereichs aufgefüllt, ohne Absturz und ohne doppelte Fragen. Test: Task 8, `pruefung-aufbau.test.js` („Auffüllen“).
4. **Telekom-Trainer auf derselben Domain:** Speichern/Laden darf nur Schlüssel mit `gp2kfz.` anfassen. Test: Task 5, `speicher.test.js` („Schlüssel-Präfix“).
5. **Offene Aufgabe in der Prüfung ohne geschriebene Antwort:** gibt 0 Punkte, auch wenn jemand Häkchen setzen will. Außerdem gibt es ohne „Lösung zeigen“ keine Punkte. Test: Task 4, `typen.test.js` (`offen.bewerte` mit `gezeigt: false`).

---

## Dateistruktur

```
index.html  manifest.webmanifest  sw.js  icon-180.png  icon-192.png  icon-512.png  package.json  README.md
.claude/launch.json
.github/workflows/pruefen.yml
css/app.css
kern/
  config.js            Konstanten + CATEGORIES aus TRAINER.bereiche
  util.js              Hilfsfunktionen (+ tageBis, datumDe)
  ui.js                render/on/Timer/Navigation (mit Schutz vor unbekannten Ansichten)
  speicher.js          Fortschritt, Leitner, Tagesziel (Schlüssel mit TRAINER.id)
  auswahl.js           Auswahl der nächsten Frage
  bewertung.js         Punkte, Noten, Bestehensregel (rein, testbar)
  typen/index.js       typVon(q)
  typen/mc.js  typen/offen.js  typen/zahl.js  typen/reihenfolge.js  typen/zuordnung.js
  fragenansicht.js     Situation, Bild, Fragetext, Antwortbereich
  karten.js            CARDS + cardForQuestion (ohne DOM, testbar)
  pruefung-aufbau.js   Prüfung zusammenstellen (rein, testbar)
  start.js  uebung.js  pruefung.js  lernen.js  meldungen.js  statistik.js  main.js
inhalt/
  trainer.js           Name, Termine, Bereiche, Notenschlüssel, Punkte, Prüfungsplan
  fragen.js            ERZEUGT von tools/export.py – nie von Hand ändern
  fragen/grundlagen.py  diesel.py  bremse.py  klima.py  airbag.py  wiso.py
  lernkarten.js        Spickzettel
  gen/index.js  gen/gemeinsam.js  gen/elektrik.js  gen/hydraulik.js  gen/sozialabgaben.js
  bilder/*.svg
tools/
  export.py  test_export.py  icons.py  tests.js
  tests/hilfe.js  tests/*.test.js
```

---

### Task 1: Grundgerüst, Datumshilfen und Offline-Test

**Files:**
- Create: `index.html`, `manifest.webmanifest`, `sw.js`, `package.json`, `.claude/launch.json`, `css/app.css`, `kern/util.js`, `kern/ui.js`, `kern/config.js`, `inhalt/trainer.js`, `tools/icons.py`, `icon-180.png`, `icon-192.png`, `icon-512.png`
- Test: `tools/tests.js`, `tools/tests/hilfe.js`, `tools/tests/offline.test.js`, `tools/tests/util.test.js`

**Interfaces:**
- Produces: `tageBis(zielKey, heuteKey) → number` (ganze Tage, negativ wenn vorbei), `datumDe("2026-11-27") → "27.11.2026"`, alle Telekom-Exporte aus `util.js` (`esc, rand, randInt, shuffle, dateKey, nowStamp, addDays, fmt, euro, formatDuration`). `TRAINER` (siehe Code). `CATEGORIES`, `TIMER_SECONDS`, `REPEAT_SHARE`, `LEVEL_NAMES`, `LEVEL_COLORS` aus `kern/config.js`. Test-Helfer `fail, ok, eq, ROOT, fakeStorage, anzahlFehler` aus `tools/tests/hilfe.js`.

- [ ] **Step 1: Test-Helfer und Runner anlegen**

`tools/tests/hilfe.js`:
```js
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
```

`tools/tests.js`:
```js
// Automatische Tests: node tools/tests.js
// Läuft auch bei jedem Upload auf GitHub (siehe .github/workflows/pruefen.yml).
// Neue Testdateien unten in DATEIEN eintragen.

import { anzahlFehler } from "./tests/hilfe.js";

const DATEIEN = ["offline", "util"];

for (const name of DATEIEN) {
  const mod = await import(`./tests/${name}.test.js`);
  await mod.default();
}

if (anzahlFehler()) {
  console.error(`\n${anzahlFehler()} Fehler gefunden.`);
  process.exit(1);
}
console.log("\nAlle Tests bestanden.");
```

`tools/tests/util.test.js`:
```js
import { eq } from "./hilfe.js";
import { tageBis, datumDe, addDays } from "../../kern/util.js";

export default async function () {
  eq(tageBis("2026-11-27", "2026-10-26"), 32, "tageBis 26.10. → 27.11.");
  eq(tageBis("2026-11-27", "2026-11-27"), 0, "tageBis am selben Tag");
  eq(tageBis("2026-11-27", "2026-11-28"), -1, "tageBis danach");
  eq(tageBis("2027-01-29", "2026-12-31"), 29, "tageBis über den Jahreswechsel");
  eq(tageBis("2026-03-30", "2026-03-28"), 2, "tageBis über die Zeitumstellung");
  eq(datumDe("2026-11-27"), "27.11.2026", "datumDe");
  eq(addDays("2026-12-31", 1), "2027-01-01", "addDays über den Jahreswechsel");
  console.log("✓ Datumshilfen");
}
```

`tools/tests/offline.test.js`:
```js
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
```

- [ ] **Step 2: Test laufen lassen, er muss fehlschlagen**

Run: `node tools/tests.js`
Expected: FAIL, weil `sw.js` bzw. `kern/util.js` fehlen (ENOENT / ERR_MODULE_NOT_FOUND).

- [ ] **Step 3: Dateien aus dem Telekom-Trainer übernehmen**

```bash
T=/c/Users/leand/Desktop/Telekom/webapp
mkdir -p kern inhalt css .claude
cp "$T/js/util.js" kern/util.js
cp "$T/js/ui.js" kern/ui.js
cp "$T/css/app.css" css/app.css
```

An `kern/util.js` anhängen:
```js

// Ganze Tage von heute bis zum Zieldatum (beide als "JJJJ-MM-TT"), negativ wenn vorbei
export function tageBis(ziel, heute = dateKey()) {
  const tag = key => {
    const [y, m, d] = key.split("-").map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((tag(ziel) - tag(heute)) / 86400000);
}

// "2026-11-27" → "27.11.2026"
export function datumDe(key) {
  const [y, m, d] = key.split("-");
  return `${d}.${m}.${y}`;
}
```

In `kern/ui.js` die Funktion `go` ersetzen durch:
```js
export function go(name, ...args) {
  if (!screens[name]) {
    toast("Dieser Bereich kommt bald.");
    return;
  }
  screens[name](...args);
}
```

In `css/app.css` die Akzentfarben ersetzen. Im hellen `:root`-Block:
```css
  --accent: #0b5cd5;
  --accent-press: #08469f;
  --accent-soft: #e3edfc;
```
Im dunklen Block (`@media (prefers-color-scheme: dark)`) und, falls vorhanden, im `[data-theme="dark"]`-Block:
```css
    --accent: #5b9dff;
    --accent-press: #0b5cd5;
    --accent-soft: #13284a;
```
Am Ende von `css/app.css` anhängen:
```css
/* ---------- Gesellenprüfungs-Trainer: Fragetypen ---------- */
.tb-hint { color: var(--info); font-size: 14px; margin: 4px 0 8px; }
.situation { white-space: pre-line; }
details.situation-mini { margin: 0 0 10px; font-size: 14px; color: var(--muted); }
details.situation-mini summary { cursor: pointer; color: var(--accent); }
figure.bild { margin: 10px 0 14px; background: #fff; border: 1px solid var(--border); border-radius: 10px; padding: 8px; }
figure.bild img { width: 100%; height: auto; display: block; }
.antwort-text { width: 100%; min-height: 110px; font: inherit; font-size: 16px; padding: 10px; border-radius: 10px; border: 1px solid var(--border); background: var(--card); color: var(--text); box-sizing: border-box; margin-bottom: 10px; }
.zahl-row { display: flex; gap: 8px; align-items: center; margin: 10px 0 4px; }
.zahl-row input { flex: 1; min-width: 0; font-size: 20px; padding: 10px; border-radius: 10px; border: 1.5px solid var(--border); background: var(--card); color: var(--text); }
.zahl-row input.correct { border-color: var(--ok); background: var(--ok-bg); }
.zahl-row input.wrong { border-color: var(--bad); background: var(--bad-bg); }
.einheit { font-size: 18px; font-weight: 600; min-width: 40px; }
.reihe { list-style: none; padding: 0; margin: 10px 0; }
.reihe li { display: flex; align-items: center; gap: 8px; padding: 10px; margin-bottom: 6px; border: 1px solid var(--border); border-radius: 10px; background: var(--card); flex-wrap: wrap; }
.reihe li .nr { font-weight: 700; color: var(--muted); min-width: 22px; }
.reihe li .txt { flex: 1 1 160px; }
.reihe li button { width: 40px; height: 40px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg); color: var(--text); font-size: 18px; }
.reihe li.correct, .zuo-row.correct { border-color: var(--ok); background: var(--ok-bg); }
.reihe li.wrong, .zuo-row.wrong { border-color: var(--bad); background: var(--bad-bg); }
.zuo-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 8px; border: 1px solid var(--border); border-radius: 10px; margin-bottom: 6px; background: var(--card); }
.zuo-links { flex: 1 1 140px; }
.zuo-row select { flex: 1 1 160px; max-width: 100%; font-size: 16px; padding: 8px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg); color: var(--text); }
.check-list label { display: flex; gap: 10px; align-items: flex-start; padding: 8px 0; border-bottom: 1px solid var(--border); }
.check-list input { width: 22px; height: 22px; margin-top: 2px; flex: none; }
.countdown .row strong { color: var(--accent); }
```

- [ ] **Step 4: Neue Dateien schreiben**

`inhalt/trainer.js`:
```js
// Alles, was diesen Trainer von anderen unterscheidet. Für einen neuen Trainer: diese Datei,
// inhalt/fragen/*.py, inhalt/lernkarten.js, inhalt/gen/ und inhalt/bilder/ austauschen.

export const TRAINER = {
  id: "gp2kfz",
  name: "Gesellenprüfung Kfz",
  untertitel: "Teil 2 · Pkw · Kfz-Innung Oberfranken · Winter 2026/27",
  termine: [
    { name: "Schriftliche Prüfung", datum: "2026-11-27" },
    { name: "Praktische Prüfung (Kundenauftrag)", datum: "2027-01-29" },
  ],
  bereiche: ["Diesel", "Bremse", "Klima", "Airbag", "WiSo", "Grundlagen"],
  hinweis: "Erlaubt: Kfz-Tabellenbuch ohne eigene Einträge.",
  // 100-Punkte-Schlüssel im Handwerk: [ab Prozent, Text, Note]
  notenschluessel: [
    [92, "sehr gut", 1], [81, "gut", 2], [67, "befriedigend", 3],
    [50, "ausreichend", 4], [30, "mangelhaft", 5], [0, "ungenügend", 6],
  ],
  // Punkte pro Aufgabe, wenn die Frage kein eigenes "pkt" hat
  punkteProTyp: { mc: 2, zahl: 3, reihenfolge: 4, offen: 4, zuordnung: 4 },
  pruefung: {
    name: "Prüfungstag 27.11. (komplett)",
    levelMix: [0.25, 0.45, 0.30],
    // Mischung, wenn es für einen Block keinen Aufgabensatz gibt (21 Aufgaben wie in der Schulprüfung)
    blockMix: { mc: 4, zahl: 2, reihenfolge: 1, offen: 9, zuordnung: 5 },
    faecher: { diag: "Diagnosetechnik", ih: "Kfz- und Instandhaltungstechnik", wiso: "Wirtschafts- und Sozialkunde" },
    bestehen: { mindestAusreichend: 2, grenzeAusreichend: 50, grenzeUngenuegend: 30 },
    ablauf: [
      { id: "diag1", name: "Diagnosetechnik I – Dieselmotor (Common-Rail & AdBlue)", kurz: "Diesel", cats: ["Diesel"], minuten: 60, fach: "diag" },
      { id: "ih1", name: "Instandhaltungstechnik I – Bremsanlage (EPB & ESP)", kurz: "Bremse", cats: ["Bremse"], minuten: 60, fach: "ih" },
      { pause: 20 },
      { id: "diag2", name: "Diagnosetechnik II – Klimaanlage", kurz: "Klima", cats: ["Klima"], minuten: 60, fach: "diag" },
      { id: "ih2", name: "Instandhaltungstechnik II – Sicherheitssysteme (Airbag)", kurz: "Airbag", cats: ["Airbag"], minuten: 60, fach: "ih" },
      { pause: 20 },
      { id: "wiso", name: "Wirtschafts- und Sozialkunde", kurz: "WiSo", cats: ["WiSo"], minuten: 60, fach: "wiso" },
    ],
  },
};
```

`kern/config.js`:
```js
// Feste Einstellungen des Kerns. Alles Prüfungsspezifische steht in inhalt/trainer.js.
import { TRAINER } from "../inhalt/trainer.js";

export const TIMER_SECONDS = 60;   // Zeitdruck pro Aufgabe im Übungsmodus (nicht bei offenen Aufgaben)
export const REPEAT_SHARE = 0.3;   // Anteil fälliger Wiederholungen in normalen Runden

export const LEVEL_NAMES = { 1: "Leicht", 2: "Mittel", 3: "Schwer" };
export const LEVEL_COLORS = { 1: "var(--lvl1)", 2: "var(--lvl2)", 3: "var(--lvl3)" };

export const CATEGORIES = TRAINER.bereiche;
```

`index.html`:
```html
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Gesellenprüfung Kfz</title>
<meta name="description" content="Lern-Trainer für die Gesellenprüfung Teil 2 Kfz-Mechatroniker">
<meta name="theme-color" content="#0b5cd5">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="GP Kfz">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" type="image/png" href="icon-192.png">
<link rel="manifest" href="manifest.webmanifest">
<link rel="stylesheet" href="css/app.css">
</head>
<body>
<main id="app"><p class="muted" style="padding-top:40px;text-align:center">Lädt …</p></main>
<noscript><p style="padding:16px">Bitte JavaScript aktivieren.</p></noscript>
<script type="module" src="kern/main.js"></script>
</body>
</html>
```

`manifest.webmanifest`:
```json
{
  "name": "Gesellenprüfung Kfz – Trainer",
  "short_name": "GP Kfz",
  "description": "Lern-Trainer für die Gesellenprüfung Teil 2 Kfz-Mechatroniker",
  "lang": "de",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#f4f4f6",
  "theme_color": "#0b5cd5",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

`sw.js`:
```js
// Service Worker: macht die App offline nutzbar.
// Strategie "Netzwerk zuerst": Online gibt es immer die neueste Version (z. B. neue Fragen),
// offline wird die zuletzt geladene Version aus dem Zwischenspeicher genommen.
// Neue Dateien in kern/, inhalt/ oder css/ hier eintragen – der Test "offline" meldet vergessene Dateien.
const CACHE = "gp2kfz-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png",
  "css/app.css",
  "inhalt/trainer.js",
  "kern/config.js",
  "kern/ui.js",
  "kern/util.js",
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    // "no-cache": immer beim Server nachfragen, ob es eine neue Version gibt. Sonst kann der
    // Browser nach einem Update alte und neue Dateien mischen, und die App startet nicht.
    fetch(event.request.url, { cache: "no-cache", credentials: "same-origin" })
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
```

`package.json`:
```json
{
  "name": "gesellen-trainer",
  "private": true,
  "type": "module",
  "description": "Lern-Trainer für die Gesellenprüfung Teil 2 Kfz-Mechatroniker",
  "scripts": {
    "test": "node tools/tests.js"
  }
}
```

`.claude/launch.json`:
```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "trainer",
      "runtimeExecutable": "python",
      "runtimeArgs": ["-m", "http.server", "8766"],
      "port": 8766
    }
  ]
}
```

`tools/icons.py`:
```python
"""
Erzeugt die App-Icons icon-180/192/512.png (einfarbig mit Kürzel).

    python tools/icons.py "#0b5cd5" "GP"

Braucht Pillow (pip install pillow). Für einen neuen Trainer einfach Farbe und Kürzel ändern.
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    farbe, text = sys.argv[1], sys.argv[2]
    for size in (180, 192, 512):
        img = Image.new("RGB", (size, size), farbe)
        draw = ImageDraw.Draw(img)
        groesse = int(size * 0.42)
        try:
            font = ImageFont.truetype("arialbd.ttf", groesse)
        except OSError:
            font = ImageFont.load_default(size=groesse)
        box = draw.textbbox((0, 0), text, font=font)
        w, h = box[2] - box[0], box[3] - box[1]
        draw.text(((size - w) / 2 - box[0], (size - h) / 2 - box[1]), text, fill="white", font=font)
        img.save(os.path.join(ROOT, f"icon-{size}.png"))
    print("Icons geschrieben: icon-180.png, icon-192.png, icon-512.png")


if __name__ == "__main__":
    main()
```

- [ ] **Step 5: Icons erzeugen**

Run: `python -c "import PIL" || pip install --user pillow` und danach `python tools/icons.py "#0b5cd5" "GP"`
Expected: `Icons geschrieben: …`, drei PNGs im Hauptordner. (Klappt Pillow nicht: `cp "$T"/icon-*.png .` und das in der Commit-Nachricht vermerken.)

- [ ] **Step 6: Tests laufen lassen**

Run: `node tools/tests.js`
Expected: `✓ Service Worker: 5 Dateien geprüft`, `✓ Datumshilfen`, `Alle Tests bestanden.`

- [ ] **Step 7: Commit**

```bash
git add index.html manifest.webmanifest sw.js package.json .claude/launch.json css kern inhalt tools icon-*.png
git commit -m "Grundgerüst: Kern-Hilfen, Trainer-Konfiguration, Offline-Liste und Tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Fragenbank-Export mit allen Fragetypen

**Files:**
- Create: `tools/export.py`, `inhalt/fragen/grundlagen.py`, `inhalt/fragen.js` (erzeugt), `inhalt/bilder/.gitkeep`
- Test: `tools/test_export.py`
- Modify: `sw.js` (FILES + `"inhalt/fragen.js"`)

**Interfaces:**
- Produces (Python): `question_id(q) → str` (12 Hex-Zeichen), `validate(questions, situationen, bilder_dir=BILDER_DIR) → list[str]`, `load_all(fragen_dir=FRAGEN_DIR) → (questions, situationen, errors)`, `build_js(questions, situationen) → str`.
- Produces (JS): `inhalt/fragen.js` exportiert `QUESTIONS` (Liste, jede Frage mit `id`) und `SITUATIONEN` (`{ id: { titel, text, cat } }`).
- Fragenformat: siehe Spec Abschnitt 5 + 15. Typen: `mc` (`opts`, `correct`), `offen` (`punkte`), `zahl` (`loesung`, `einheit`, optional `toleranz`), `reihenfolge` (`schritte`), `zuordnung` (`paare`, optional `ablenker`). Gemeinsam: `cat`, `level`, `q`, `explain`, `src`, optional `typ` (Standard `mc`), `pkt`, `bild`, `tb`, `situation` + `nr`.

- [ ] **Step 1: Failing test schreiben**

`tools/test_export.py`:
```python
"""Tests für tools/export.py:  python tools/test_export.py"""
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import export  # noqa: E402


def frage(**k):
    q = {"cat": "Diesel", "level": 1, "q": "Frage?", "opts": ["a", "b"], "correct": 0, "explain": "weil", "src": "FW"}
    q.update(k)
    return q


def ohne(q, *keys):
    for k in keys:
        q.pop(k, None)
    return q


SIT = {"s1": {"titel": "Auftrag", "text": "Kunde sagt …", "cat": "Diesel"}}


class ExportTest(unittest.TestCase):
    def fehler(self, questions, situationen=None, bilder_dir=None):
        return export.validate(questions, situationen or {}, bilder_dir or tempfile.gettempdir())

    def test_gueltige_mc(self):
        self.assertEqual(self.fehler([frage()]), [])

    def test_correct_ausserhalb(self):
        self.assertTrue(any("correct" in e for e in self.fehler([frage(correct=5)])))

    def test_pflichtfelder(self):
        self.assertTrue(any("src" in e for e in self.fehler([ohne(frage(), "src")])))
        self.assertTrue(any("explain" in e for e in self.fehler([ohne(frage(), "explain")])))

    def test_level(self):
        self.assertTrue(any("level" in e for e in self.fehler([frage(level=4)])))

    def test_unbekannter_typ(self):
        self.assertTrue(any("typ" in e for e in self.fehler([frage(typ="lueckentext")])))

    def test_pkt(self):
        self.assertEqual(self.fehler([frage(pkt=6)]), [])
        self.assertTrue(any("pkt" in e for e in self.fehler([frage(pkt=0)])))
        self.assertTrue(any("pkt" in e for e in self.fehler([frage(pkt=2.5)])))

    def test_offen(self):
        ok = ohne(frage(typ="offen", punkte=["eins", "zwei"]), "opts", "correct")
        self.assertEqual(self.fehler([ok]), [])
        zu_wenig = ohne(frage(typ="offen", punkte=["eins"]), "opts", "correct")
        self.assertTrue(any("punkte" in e for e in self.fehler([zu_wenig])))

    def test_zahl(self):
        ok = ohne(frage(typ="zahl", loesung=12.5, einheit="bar"), "opts", "correct")
        self.assertEqual(self.fehler([ok]), [])
        text = ohne(frage(typ="zahl", loesung="12", einheit="bar"), "opts", "correct")
        self.assertTrue(any("loesung" in e for e in self.fehler([text])))
        tol = ohne(frage(typ="zahl", loesung=1, einheit="V", toleranz=0.9), "opts", "correct")
        self.assertTrue(any("toleranz" in e for e in self.fehler([tol])))

    def test_reihenfolge(self):
        ok = ohne(frage(typ="reihenfolge", schritte=["a", "b", "c"]), "opts", "correct")
        self.assertEqual(self.fehler([ok]), [])
        doppelt = ohne(frage(typ="reihenfolge", schritte=["a", "a", "c"]), "opts", "correct")
        self.assertTrue(any("schritte" in e for e in self.fehler([doppelt])))

    def test_zuordnung(self):
        ok = ohne(frage(typ="zuordnung", paare=[["Rail", "Hochdruck"], ["Filter", "Niederdruck"]], ablenker=["Rücklauf"]), "opts", "correct")
        self.assertEqual(self.fehler([ok]), [])
        links_doppelt = ohne(frage(typ="zuordnung", paare=[["Rail", "Hochdruck"], ["Rail", "Niederdruck"]]), "opts", "correct")
        self.assertTrue(any("doppelt" in e for e in self.fehler([links_doppelt])))
        kaputt = ohne(frage(typ="zuordnung", paare=[["Rail"]]), "opts", "correct")
        self.assertTrue(any("paare" in e for e in self.fehler([kaputt])))

    def test_situation_und_nr(self):
        self.assertEqual(self.fehler([frage(situation="s1", nr=1)], SIT), [])
        self.assertTrue(any("Situation" in e for e in self.fehler([frage(situation="xx", nr=1)], SIT)))
        self.assertTrue(any("nr" in e for e in self.fehler([frage(situation="s1")], SIT)))
        self.assertTrue(any("Bereich" in e for e in self.fehler([frage(cat="Klima", situation="s1", nr=1)], SIT)))
        zwei = [frage(situation="s1", nr=1), frage(q="Andere?", situation="s1", nr=1)]
        self.assertTrue(any("doppelt" in e for e in self.fehler(zwei, SIT)))
        self.assertTrue(any("titel" in e for e in self.fehler([], {"s2": {"text": "x", "cat": "Diesel"}})))

    def test_bild(self):
        with tempfile.TemporaryDirectory() as d:
            open(os.path.join(d, "da.svg"), "w").close()
            self.assertEqual(self.fehler([frage(bild="da.svg")], bilder_dir=d), [])
            self.assertTrue(any("Bild" in e for e in self.fehler([frage(bild="fehlt.svg")], bilder_dir=d)))

    def test_doppelte_frage(self):
        self.assertTrue(any("Doppelte" in e for e in self.fehler([frage(), frage()])))

    def test_id(self):
        a = export.question_id(frage())
        self.assertEqual(a, export.question_id(frage()))
        self.assertEqual(len(a), 12)
        offen1 = export.question_id(frage(typ="offen", punkte=["x", "y"]))
        offen2 = export.question_id(frage(typ="offen", punkte=["x", "z"]))
        self.assertNotEqual(offen1, offen2)

    def test_build_js(self):
        js = export.build_js([frage()], SIT)
        self.assertIn("export const QUESTIONS", js)
        self.assertIn("export const SITUATIONEN", js)
        self.assertIn('"id": "', js)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Test laufen lassen**

Run: `python tools/test_export.py`
Expected: FAIL mit `ModuleNotFoundError: No module named 'export'`.

- [ ] **Step 3: `tools/export.py` schreiben**

```python
"""
Prüft die Fragenbank (inhalt/fragen/*.py) und schreibt sie als JavaScript-Modul nach inhalt/fragen.js.

    python tools/export.py           # prüfen + exportieren
    python tools/export.py --check   # nur prüfen, ob inhalt/fragen.js aktuell ist (GitHub Actions)
    python tools/export.py --stats   # Anzahl je Bereich und Fragetyp anzeigen

Jede Datei in inhalt/fragen/ definiert QUESTIONS = [...] und optional SITUATIONEN = {...}.
Die Fragen-ID entsteht aus Bereich, Fragetext und den Kerndaten des Fragetyps. Wer eine Frage
inhaltlich ändert, bekommt eine neue ID – der Lernfortschritt dieser Frage beginnt dann neu.
"""

import collections
import glob
import hashlib
import importlib.util
import json
import os
import sys

TOOLS_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(TOOLS_DIR)
FRAGEN_DIR = os.path.join(ROOT_DIR, "inhalt", "fragen")
BILDER_DIR = os.path.join(ROOT_DIR, "inhalt", "bilder")
OUT_FILE = os.path.join(ROOT_DIR, "inhalt", "fragen.js")
TYPEN = ("mc", "offen", "zahl", "reihenfolge", "zuordnung")


def typ_von(q):
    return q.get("typ", "mc")


def kern_daten(q):
    typ = typ_von(q)
    if typ == "mc":
        return list(q.get("opts", []))
    if typ == "offen":
        return list(q.get("punkte", []))
    if typ == "reihenfolge":
        return list(q.get("schritte", []))
    if typ == "zuordnung":
        return ["=".join(map(str, p)) for p in q.get("paare", [])]
    if typ == "zahl":
        return [repr(q.get("loesung")), q.get("einheit", "")]
    return []


def question_id(q):
    raw = q.get("cat", "") + "|" + q.get("q", "") + "|" + "|".join(str(x) for x in kern_daten(q))
    return hashlib.md5(raw.encode("utf-8")).hexdigest()[:12]


def _text(x):
    return isinstance(x, str) and x.strip() != ""


def _ganzzahl(x):
    return isinstance(x, int) and not isinstance(x, bool)


def _zahl(x):
    return isinstance(x, (int, float)) and not isinstance(x, bool)


def _texte(x, mini, maxi):
    return isinstance(x, list) and mini <= len(x) <= maxi and all(_text(s) for s in x) and len(set(x)) == len(x)


def _pruefe_typ(q, typ, where, errors):
    if typ == "mc":
        opts = q.get("opts")
        if not _texte(opts, 2, 6):
            errors.append(f"{where}: opts braucht 2–6 verschiedene Antworten")
        elif not _ganzzahl(q.get("correct")) or not 0 <= q["correct"] < len(opts):
            errors.append(f"{where}: 'correct' zeigt auf keine Antwort")
    elif typ == "offen":
        if not _texte(q.get("punkte"), 2, 6):
            errors.append(f"{where}: punkte braucht 2–6 verschiedene Stichpunkte")
    elif typ == "reihenfolge":
        if not _texte(q.get("schritte"), 3, 8):
            errors.append(f"{where}: schritte braucht 3–8 verschiedene Schritte")
    elif typ == "zahl":
        if not _zahl(q.get("loesung")):
            errors.append(f"{where}: loesung muss eine Zahl sein")
        if not isinstance(q.get("einheit", ""), str):
            errors.append(f"{where}: einheit muss Text sein")
        tol = q.get("toleranz", 0.02)
        if not _zahl(tol) or not 0 < tol < 0.5:
            errors.append(f"{where}: toleranz muss zwischen 0 und 0,5 liegen")
    elif typ == "zuordnung":
        paare = q.get("paare")
        gueltig = isinstance(paare, list) and 2 <= len(paare) <= 12 and all(
            isinstance(p, (list, tuple)) and len(p) == 2 and _text(p[0]) and _text(p[1]) for p in paare)
        if not gueltig:
            errors.append(f"{where}: paare braucht 2–12 Paare [links, rechts]")
        elif len({p[0] for p in paare}) != len(paare):
            errors.append(f"{where}: linke Einträge doppelt")
        abl = q.get("ablenker", [])
        if not isinstance(abl, list) or not all(_text(a) for a in abl):
            errors.append(f"{where}: ablenker muss eine Liste von Texten sein")


def validate(questions, situationen, bilder_dir=BILDER_DIR):
    errors = []
    for sid, s in situationen.items():
        if not isinstance(s, dict) or not all(_text(s.get(k)) for k in ("titel", "text", "cat")):
            errors.append(f"Situation '{sid}': braucht titel, text und cat")
    nummern = collections.defaultdict(list)
    for i, q in enumerate(questions):
        where = f"Frage {i + 1} ({q.get('cat', '?')}: {str(q.get('q', ''))[:50]})"
        for key in ("cat", "q", "explain", "src"):
            if not _text(q.get(key)):
                errors.append(f"{where}: Feld '{key}' fehlt")
        if q.get("level") not in (1, 2, 3):
            errors.append(f"{where}: level muss 1, 2 oder 3 sein")
        if "pkt" in q and (not _ganzzahl(q["pkt"]) or not 1 <= q["pkt"] <= 10):
            errors.append(f"{where}: pkt muss eine ganze Zahl von 1 bis 10 sein")
        typ = typ_von(q)
        if typ not in TYPEN:
            errors.append(f"{where}: unbekannter typ '{typ}'")
        else:
            _pruefe_typ(q, typ, where, errors)
        if "bild" in q and not os.path.isfile(os.path.join(bilder_dir, str(q["bild"]))):
            errors.append(f"{where}: Bild '{q['bild']}' fehlt in inhalt/bilder/")
        if "situation" in q:
            s = situationen.get(q["situation"])
            if s is None:
                errors.append(f"{where}: Situation '{q['situation']}' gibt es nicht")
            elif isinstance(s, dict) and s.get("cat") != q.get("cat"):
                errors.append(f"{where}: Bereich passt nicht zur Situation '{q['situation']}'")
            if not _ganzzahl(q.get("nr")) or q["nr"] < 1:
                errors.append(f"{where}: Aufgabe in einem Aufgabensatz braucht nr ≥ 1")
            else:
                nummern[q["situation"]].append(q["nr"])
    for sid, nrs in nummern.items():
        if len(set(nrs)) != len(nrs):
            errors.append(f"Aufgabensatz '{sid}': nr doppelt vergeben")
    for qid, n in collections.Counter(question_id(q) for q in questions).items():
        if n > 1:
            errors.append(f"Doppelte Frage (ID {qid}) kommt {n}-mal vor")
    return errors


def load_all(fragen_dir=FRAGEN_DIR):
    questions, situationen, errors = [], {}, []
    for path in sorted(glob.glob(os.path.join(fragen_dir, "*.py"))):
        name = os.path.splitext(os.path.basename(path))[0]
        if name.startswith("_"):
            continue
        spec = importlib.util.spec_from_file_location(f"fragen_{name}", path)
        mod = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mod)
        questions.extend(getattr(mod, "QUESTIONS", []))
        for sid, s in getattr(mod, "SITUATIONEN", {}).items():
            if sid in situationen:
                errors.append(f"Situation '{sid}' ist doppelt definiert ({name}.py)")
            situationen[sid] = s
    return questions, situationen, errors


def build_js(questions, situationen):
    data = []
    for q in questions:
        entry = {"id": question_id(q)}
        entry.update(q)
        data.append(entry)
    return (
        "// Automatisch erzeugt von tools/export.py aus inhalt/fragen/*.py – nicht von Hand bearbeiten!\n"
        f"export const QUESTIONS = {json.dumps(data, ensure_ascii=False, indent=1)};\n"
        f"export const SITUATIONEN = {json.dumps(situationen, ensure_ascii=False, indent=1)};\n"
    )


def print_stats(questions, situationen):
    zaehler = collections.defaultdict(collections.Counter)
    for q in questions:
        zaehler[q["cat"]][typ_von(q)] += 1
    print(f"{'Bereich':<12}" + "".join(f"{t:>12}" for t in TYPEN) + f"{'gesamt':>9}")
    for cat in sorted(zaehler):
        c = zaehler[cat]
        print(f"{cat:<12}" + "".join(f"{c[t]:>12}" for t in TYPEN) + f"{sum(c.values()):>9}")
    for sid, s in situationen.items():
        n = sum(1 for q in questions if q.get("situation") == sid)
        print(f"Aufgabensatz {sid} ({s.get('cat')}): {n} Aufgaben")


def main():
    questions, situationen, errors = load_all()
    errors += validate(questions, situationen)
    if errors:
        print(f"{len(errors)} Fehler in der Fragenbank:")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    content = build_js(questions, situationen)
    if "--check" in sys.argv:
        current = open(OUT_FILE, encoding="utf-8").read() if os.path.exists(OUT_FILE) else ""
        if current != content:
            print("inhalt/fragen.js ist nicht aktuell – bitte 'python tools/export.py' ausführen.")
            sys.exit(1)
        print(f"OK: {len(questions)} Fragen gültig, inhalt/fragen.js ist aktuell.")
        return
    if "--stats" in sys.argv:
        print_stats(questions, situationen)
        return
    with open(OUT_FILE, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print(f"{len(questions)} Fragen exportiert nach inhalt/fragen.js")
    print_stats(questions, situationen)


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Tests laufen lassen**

Run: `python tools/test_export.py`
Expected: `OK` (15 Tests).

- [ ] **Step 5: Erste Fragen anlegen und exportieren**

`inhalt/fragen/grundlagen.py`:
```python
"""
Grundlagen: Elektrik, Messtechnik, Einheiten – nur, was die Prüfungsthemen brauchen.
Format siehe docs/superpowers/specs (Abschnitt 5 und 15). Nach Änderungen:  python tools/export.py
"""

QUESTIONS = [
    {"cat": "Grundlagen", "level": 1, "typ": "mc", "pkt": 2,
     "q": "Wie groß ist der Strom, wenn an einem Widerstand von 6 Ω eine Spannung von 12 V anliegt?",
     "opts": ["2 A", "0,5 A", "72 A", "6 A"], "correct": 0,
     "explain": "Ohmsches Gesetz: I = U ÷ R = 12 V ÷ 6 Ω = 2 A.", "src": "FW"},
    {"cat": "Grundlagen", "level": 2, "typ": "offen", "pkt": 3,
     "q": "Nennen Sie drei Prüfungen, mit denen Sie einen Sensor mit drei Anschlüssen (Versorgung, Signal, Masse) am Steuergerätestecker prüfen.",
     "punkte": ["Versorgungsspannung (ca. 5 V) gegen Masse messen",
                "Signalspannung gegen Masse messen und mit dem Sollwert vergleichen",
                "Masseleitung prüfen (Spannungsfall bzw. Durchgang < 0,5 Ω)"],
     "explain": "Erst Versorgung und Masse, dann das Signal prüfen – so findet man Leitungsfehler, bevor man den Sensor tauscht.",
     "src": "Format Schulprüfung, FW"},
    {"cat": "Grundlagen", "level": 1, "typ": "zahl", "pkt": 2,
     "q": "Ein Raildruck von 160 MPa entspricht wie viel bar?", "loesung": 1600, "einheit": "bar",
     "explain": "1 MPa = 10 bar → 160 MPa × 10 = 1600 bar.", "src": "FW"},
    {"cat": "Grundlagen", "level": 2, "typ": "zuordnung", "pkt": 4,
     "q": "Ordnen Sie den Messaufgaben das passende Messgerät zu.",
     "paare": [["Spannung an einem Sensor", "Voltmeter"], ["Widerstand einer Magnetspule", "Ohmmeter"],
               ["PWM-Ansteuerung eines Ventils", "Oszilloskop"], ["Stromaufnahme ohne Leitung aufzutrennen", "Strommesszange"]],
     "ablenker": ["Drehmomentschlüssel"],
     "explain": "Widerstände nur stromlos messen (Stecker ab). Zeitabhängige Signale wie PWM zeigt nur das Oszilloskop richtig.",
     "src": "FW"},
    {"cat": "Grundlagen", "level": 2, "typ": "reihenfolge", "pkt": 4,
     "q": "Bringen Sie die Schritte einer Widerstandsmessung an einem Magnetventil in die richtige Reihenfolge.",
     "schritte": ["Zündung ausschalten", "Steckverbindung am Bauteil abziehen",
                  "Messgerät auf Ohm stellen und Messleitungen kurzschließen (Nullabgleich)",
                  "An den Bauteilpins messen", "Messwert mit dem Sollwert vergleichen und dokumentieren"],
     "explain": "Widerstände nur stromlos messen – sonst ist der Messwert falsch und das Messgerät kann Schaden nehmen.",
     "src": "FW"},
]
```

Run: `mkdir -p inhalt/bilder && touch inhalt/bilder/.gitkeep && python tools/export.py`
Expected: `5 Fragen exportiert nach inhalt/fragen.js` + Tabelle (Grundlagen: je 1 pro Typ).

- [ ] **Step 6: Offline-Liste ergänzen, alle Tests**

In `sw.js` → `FILES` nach `"inhalt/trainer.js",` einfügen: `"inhalt/fragen.js",`
Run: `python tools/export.py --check && node tools/tests.js`
Expected: `OK: 5 Fragen gültig …`, `Alle Tests bestanden.`

- [ ] **Step 7: Commit**

```bash
git add tools/export.py tools/test_export.py inhalt/fragen inhalt/fragen.js inhalt/bilder/.gitkeep sw.js
git commit -m "Fragenbank-Export mit fünf Fragetypen, Aufgabensätzen und Prüfung

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Bewertung (Punkte, Noten, Bestehensregel)

**Files:**
- Create: `kern/bewertung.js`
- Test: `tools/tests/bewertung.test.js`
- Modify: `tools/tests.js` (DATEIEN + `"bewertung"`), `sw.js` (+ `"kern/bewertung.js"`)

**Interfaces:**
- Produces: `RICHTIG_AB = 0.67`, `zaehltRichtig(anteil) → bool`, `maxPunkte(q, standard) → number`, `punkteFuer(q, anteil, standard) → number`, `prozent(erreicht, max) → int`, `note(prozent, schluessel) → { note, text }`, `fachErgebnisse(bloecke, faecher, schluessel) → [{ fach, name, erreicht, max, prozent, note, text }]` (`bloecke`: `[{ fach, erreicht, max }]`), `bestehensCheck(faecherErgebnisse, regel) → { bestanden, gruende: string[] }`.

- [ ] **Step 1: Failing test**

`tools/tests/bewertung.test.js`:
```js
import { eq, ok } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { zaehltRichtig, maxPunkte, punkteFuer, prozent, note, fachErgebnisse, bestehensCheck } from "../../kern/bewertung.js";

const S = TRAINER.notenschluessel;
const PP = TRAINER.punkteProTyp;
const R = TRAINER.pruefung.bestehen;

export default async function () {
  for (const [p, n] of [[100, 1], [92, 1], [91, 2], [81, 2], [80, 3], [67, 3], [66, 4], [50, 4], [49, 5], [30, 5], [29, 6], [0, 6]]) {
    eq(note(p, S).note, n, `Note bei ${p} %`);
  }
  eq(note(50, S).text, "ausreichend", "Notentext");
  eq(maxPunkte({ typ: "offen" }, PP), 4, "Standardpunkte offen");
  eq(maxPunkte({}, PP), 2, "Standardpunkte mc ohne typ");
  eq(maxPunkte({ typ: "zahl", pkt: 6 }, PP), 6, "eigene Punkte gehen vor");
  eq(punkteFuer({ typ: "zuordnung" }, 0.5, PP), 2, "halbe Zuordnung");
  eq(punkteFuer({ pkt: 4 }, 1.7, PP), 4, "Anteil wird auf 1 begrenzt");
  eq(prozent(2, 3), 67, "Prozent runden");
  eq(prozent(5, 0), 0, "Prozent ohne Punkte");
  ok(zaehltRichtig(0.67) && !zaehltRichtig(0.66), "Richtig-Grenze 0,67");

  const faecher = fachErgebnisse(
    [{ fach: "diag", erreicht: 30, max: 50 }, { fach: "ih", erreicht: 40, max: 50 }, { fach: "diag", erreicht: 40, max: 50 }, { fach: "wiso", erreicht: 10, max: 40 }],
    TRAINER.pruefung.faecher, S);
  eq(faecher.map(f => [f.fach, f.erreicht, f.max, f.prozent, f.note]), [["diag", 70, 100, 70, 3], ["ih", 40, 50, 80, 3], ["wiso", 10, 40, 25, 6]], "fachErgebnisse");
  eq(fachErgebnisse([{ fach: "wiso", erreicht: 5, max: 10 }], TRAINER.pruefung.faecher, S).length, 1, "nur vorhandene Fächer");

  const mit = ps => ps.map((p, i) => ({ name: `F${i}`, prozent: p }));
  ok(bestehensCheck(mit([50, 50, 30]), R).bestanden, "2× genau ausreichend, 30 % ist noch nicht ungenügend → bestanden");
  const ungenuegend = bestehensCheck(mit([55, 60, 20]), R);
  ok(!ungenuegend.bestanden && ungenuegend.gruende.some(g => g.includes("ungenügend")), "ungenügend → nicht bestanden");
  const nurEins = bestehensCheck(mit([45, 45, 80]), R);
  ok(!nurEins.bestanden && nurEins.gruende.length === 1, "nur 1× ausreichend → nicht bestanden");
  console.log("✓ Bewertung: Noten, Punkte, Bestehensregel");
}
```
In `tools/tests.js`: `const DATEIEN = ["offline", "util", "bewertung"];`

- [ ] **Step 2: Test laufen lassen**

Run: `node tools/tests.js`
Expected: FAIL `Cannot find module …/kern/bewertung.js`.

- [ ] **Step 3: Implementieren**

`kern/bewertung.js`:
```js
// Punkte, Noten und Bestehensregel – ohne Oberfläche, damit testbar.

export const RICHTIG_AB = 0.67; // ab diesem Anteil zählt eine Aufgabe für Leitner und Statistik als richtig

export function zaehltRichtig(anteil) {
  return anteil >= RICHTIG_AB;
}

export function maxPunkte(q, standard) {
  if (Number.isInteger(q.pkt)) return q.pkt;
  return standard[q.typ || "mc"] ?? 1;
}

export function punkteFuer(q, anteil, standard) {
  return Math.max(0, Math.min(1, anteil)) * maxPunkte(q, standard);
}

export function prozent(erreicht, max) {
  return max > 0 ? Math.round((erreicht / max) * 100) : 0;
}

// schluessel: [[ab Prozent, Text, Note], …] absteigend
export function note(p, schluessel) {
  const stufe = schluessel.find(([ab]) => p >= ab) || schluessel[schluessel.length - 1];
  return { note: stufe[2], text: stufe[1] };
}

// Blöcke desselben Fachs zusammenfassen (z. B. Diagnosetechnik I + II), Reihenfolge wie in faecher
export function fachErgebnisse(bloecke, faecher, schluessel) {
  return Object.entries(faecher)
    .map(([fach, name]) => {
      const teile = bloecke.filter(b => b.fach === fach);
      if (!teile.length) return null;
      const erreicht = teile.reduce((s, b) => s + b.erreicht, 0);
      const max = teile.reduce((s, b) => s + b.max, 0);
      const p = prozent(erreicht, max);
      return { fach, name, erreicht, max, prozent: p, ...note(p, schluessel) };
    })
    .filter(Boolean);
}

// § 9 KfzMechAusbV, nur der schriftliche Teil: mind. zwei Bereiche ausreichend, keiner ungenügend
export function bestehensCheck(faecher, regel) {
  const gruende = [];
  const ausreichend = faecher.filter(f => f.prozent >= regel.grenzeAusreichend).length;
  if (ausreichend < regel.mindestAusreichend) {
    gruende.push(`Nur ${ausreichend} von ${faecher.length} Bereichen mindestens ausreichend (nötig: ${regel.mindestAusreichend}).`);
  }
  for (const f of faecher.filter(f => f.prozent < regel.grenzeUngenuegend)) {
    gruende.push(`${f.name}: ungenügend (unter ${regel.grenzeUngenuegend} %).`);
  }
  return { bestanden: !gruende.length, gruende };
}
```
In `sw.js` → `FILES` `"kern/bewertung.js",` einfügen (alphabetisch vor `"kern/config.js"`).

- [ ] **Step 4: Tests**

Run: `node tools/tests.js`
Expected: `✓ Bewertung …`, `Alle Tests bestanden.`

- [ ] **Step 5: Commit**

```bash
git add kern/bewertung.js tools/tests sw.js tools/tests.js
git commit -m "Bewertung: Punkte pro Aufgabe, 100-Punkte-Schlüssel, Bestehensregel

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Die fünf Fragetypen

**Files:**
- Create: `kern/typen/index.js`, `kern/typen/mc.js`, `kern/typen/offen.js`, `kern/typen/zahl.js`, `kern/typen/reihenfolge.js`, `kern/typen/zuordnung.js`
- Test: `tools/tests/typen.test.js`
- Modify: `tools/tests.js` (+ `"typen"`), `sw.js` (+ 6 Dateien)

**Interfaces:**
- Jeder Typ exportiert: `neueEingabe(q)`, `beantwortet(q, e) → bool`, `bewerte(q, e) → 0..1`, `antwortText(q, e) → string`, `loesungText(q) → string`, `render(q, root, ctx)`, `markiere(q, root, e)`.
  `ctx = { modus: "uebung" | "pruefung", eingabe, onEingabe(e)?, onAbgabe(e)? }`. In der Übung ruft der Typ `onAbgabe` auf (mc: beim Antippen, sonst über „Prüfen“). In der Prüfung nur `onEingabe`.
- Eingaben: `mc` Index (−1 = keine), `zahl` Text, `reihenfolge` Liste der Schritt-Indizes, `zuordnung` Liste gewählter rechter Werte (`""` = keine), `offen` `{ text, haken: [Indizes], gezeigt }`.
- Zusätzlich: `zahl.parseZahl(text) → number|NaN`, `zahl.STANDARD_TOLERANZ = 0.02`, `reihenfolge.verschiebe(e, pos, richtung)`, `zuordnung.optionen(q) → string[]` (sortiert), `offen.renderSelbstbewertung(q, root, eingabe, onChange)`.
- `typVon(q)` aus `kern/typen/index.js`, wirft `Error("Unbekannter Fragetyp: …")`.

- [ ] **Step 1: Failing test**

`tools/tests/typen.test.js`:
```js
import { eq, ok } from "./hilfe.js";
import { typVon, TYPEN } from "../../kern/typen/index.js";
import { parseZahl } from "../../kern/typen/zahl.js";
import { verschiebe } from "../../kern/typen/reihenfolge.js";
import { optionen } from "../../kern/typen/zuordnung.js";

const mc = { q: "?", opts: ["a", "b", "c"], correct: 1 };
const zahl = { typ: "zahl", q: "?", loesung: 2.5, einheit: "V" };
const reihe = { typ: "reihenfolge", q: "?", schritte: ["eins", "zwei", "drei", "vier"] };
const zuo = { typ: "zuordnung", q: "?", paare: [["Rail", "Hochdruck"], ["Filter", "Niederdruck"], ["Injektor", "Hochdruck"]], ablenker: ["Rücklauf"] };
const offen = { typ: "offen", q: "?", punkte: ["A", "B", "C", "D"] };

export default async function () {
  eq(Object.keys(TYPEN).sort(), ["mc", "offen", "reihenfolge", "zahl", "zuordnung"], "alle Typen registriert");
  ok(typVon({}) === TYPEN.mc, "ohne typ = mc");
  let geworfen = false;
  try { typVon({ typ: "quatsch" }); } catch (e) { geworfen = true; }
  ok(geworfen, "unbekannter Typ wirft");

  // mc
  eq([TYPEN.mc.bewerte(mc, 1), TYPEN.mc.bewerte(mc, 0), TYPEN.mc.bewerte(mc, -1)], [1, 0, 0], "mc bewerten");
  ok(!TYPEN.mc.beantwortet(mc, -1) && TYPEN.mc.beantwortet(mc, 0), "mc beantwortet");
  eq(TYPEN.mc.antwortText(mc, -1), "keine Antwort", "mc ohne Antwort");

  // zahl
  for (const [t, n] of [["12,5", 12.5], ["12.5", 12.5], [" 1.234,5 bar", 1234.5], ["1.234.567", 1234567], ["-3", -3], ["0,25", 0.25]]) eq(parseZahl(t), n, `parseZahl("${t}")`);
  for (const t of ["", "abc", null, undefined, "1,2,3", ","]) ok(Number.isNaN(parseZahl(t)), `parseZahl(${JSON.stringify(t)}) ist NaN`);
  eq([TYPEN.zahl.bewerte(zahl, "2,5"), TYPEN.zahl.bewerte(zahl, "2,54"), TYPEN.zahl.bewerte(zahl, "2,6"), TYPEN.zahl.bewerte(zahl, "")], [1, 1, 0, 0], "zahl mit 2 % Toleranz");
  eq(TYPEN.zahl.bewerte({ ...zahl, loesung: 0 }, "0,01"), 1, "zahl bei Lösung 0");
  eq(TYPEN.zahl.loesungText(zahl), "2,5 V", "zahl Lösungstext");

  // reihenfolge
  for (let i = 0; i < 200; i++) {
    const e = TYPEN.reihenfolge.neueEingabe(reihe);
    ok([...e].sort().join() === "0,1,2,3", "Startreihenfolge ist eine Permutation");
    ok(!e.every((v, k) => v === k), "Startreihenfolge ist nie schon richtig");
  }
  eq(TYPEN.reihenfolge.bewerte(reihe, [0, 1, 2, 3]), 1, "reihenfolge richtig");
  eq(TYPEN.reihenfolge.bewerte(reihe, [1, 0, 2, 3]), 0.5, "reihenfolge halb");
  eq(TYPEN.reihenfolge.bewerte(reihe, [0, 1]), 0, "reihenfolge falsche Länge");
  eq(verschiebe([2, 0, 1], 0, 1), [0, 2, 1], "verschiebe nach unten");
  eq(verschiebe([2, 0, 1], 0, -1), [2, 0, 1], "verschiebe am Rand bleibt");

  // zuordnung
  eq(optionen(zuo), ["Hochdruck", "Niederdruck", "Rücklauf"], "Optionen eindeutig + sortiert");
  eq(TYPEN.zuordnung.bewerte(zuo, ["Hochdruck", "Niederdruck", "Hochdruck"]), 1, "zuordnung richtig");
  eq(TYPEN.zuordnung.bewerte(zuo, ["Hochdruck", "", "Niederdruck"]), 1 / 3, "zuordnung ein Drittel");
  ok(!TYPEN.zuordnung.beantwortet(zuo, TYPEN.zuordnung.neueEingabe(zuo)), "zuordnung leer = unbeantwortet");

  // offen
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 1], gezeigt: true }), 0.5, "offen halb");
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 1, 2, 3], gezeigt: false }), 0, "offen ohne Lösung zeigen = 0");
  eq(TYPEN.offen.bewerte(offen, { text: "x", haken: [0, 0, 9, -1], gezeigt: true }), 0.25, "offen: doppelte/ungültige Haken zählen nicht");
  eq(TYPEN.offen.bewerte(offen, undefined), 0, "offen ohne Eingabe");

  // JSON-Rundreise aller Eingaben
  for (const [q, e] of [[mc, 1], [zahl, "2,5"], [reihe, [0, 1, 2, 3]], [zuo, ["Hochdruck", "Niederdruck", "Hochdruck"]], [offen, { text: "x", haken: [0], gezeigt: true }]]) {
    const t = typVon(q);
    eq(t.bewerte(q, JSON.parse(JSON.stringify(e))), t.bewerte(q, e), `JSON-Rundreise ${q.typ || "mc"}`);
  }
  console.log("✓ Fragetypen: Bewertung, Eingaben, Zahlenformat");
}
```
In `tools/tests.js`: `"typen"` an DATEIEN anhängen.

- [ ] **Step 2: Test laufen lassen**

Run: `node tools/tests.js`
Expected: FAIL `Cannot find module …/kern/typen/index.js`.

- [ ] **Step 3: Typen implementieren**

`kern/typen/index.js`:
```js
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
```

`kern/typen/mc.js`:
```js
// Fragetyp "mc": eine richtige Antwort aus mehreren (Reihenfolge wird gemischt).
// Schnittstelle aller Typen: neueEingabe, beantwortet, bewerte, antwortText, loesungText, render, markiere.
// ctx = { modus: "uebung" | "pruefung", eingabe, onEingabe(e), onAbgabe(e) }
import { esc, shuffle } from "../util.js";

export function neueEingabe() { return -1; }
export function beantwortet(q, e) { return Number.isInteger(e) && e >= 0; }
export function bewerte(q, e) { return e === q.correct ? 1 : 0; }
export function antwortText(q, e) { return beantwortet(q, e) && e < q.opts.length ? q.opts[e] : "keine Antwort"; }
export function loesungText(q) { return q.opts[q.correct]; }

export function render(q, root, ctx) {
  const order = shuffle(q.opts.map((_, i) => i));
  root.innerHTML = order.map(i => `<button class="opt ${ctx.eingabe === i ? "chosen" : ""}" data-i="${i}">${esc(q.opts[i])}</button>`).join("");
  root.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
    const i = Number(btn.dataset.i);
    root.querySelectorAll(".opt").forEach(b => b.classList.toggle("chosen", b === btn));
    if (ctx.onEingabe) ctx.onEingabe(i);
    if (ctx.modus === "uebung" && ctx.onAbgabe) ctx.onAbgabe(i);
  }));
}

export function markiere(q, root, e) {
  root.querySelectorAll(".opt").forEach(btn => {
    const i = Number(btn.dataset.i);
    btn.disabled = true;
    btn.classList.remove("chosen");
    if (i === q.correct) btn.classList.add("correct");
    else if (i === e) btn.classList.add("wrong");
  });
}
```

`kern/typen/zahl.js`:
```js
// Fragetyp "zahl": Rechenaufgabe mit Eingabefeld, Einheit und Toleranz (relativ, Standard 2 %).
import { esc, fmt } from "../util.js";

export const STANDARD_TOLERANZ = 0.02;

// "12,5" / "12.5" / " 1.234,5 bar" → Zahl; nicht lesbar → NaN
export function parseZahl(text) {
  let s = String(text ?? "").replace(/\s+/g, "").replace(/[^\d,.-]/g, "");
  if (!/\d/.test(s)) return NaN;
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  else if ((s.match(/\./g) || []).length > 1) s = s.replace(/\./g, "");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

export function neueEingabe() { return ""; }
export function beantwortet(q, e) { return !Number.isNaN(parseZahl(e)); }
export function bewerte(q, e) {
  const x = parseZahl(e);
  if (Number.isNaN(x)) return 0;
  const tol = q.toleranz ?? STANDARD_TOLERANZ;
  const grenze = q.loesung === 0 ? tol : Math.abs(q.loesung) * tol;
  return Math.abs(x - q.loesung) <= grenze + 1e-9 ? 1 : 0;
}
export function antwortText(q, e) { return beantwortet(q, e) ? `${fmt(parseZahl(e), 4)} ${q.einheit || ""}`.trim() : "keine Antwort"; }
export function loesungText(q) { return `${fmt(q.loesung, 4)} ${q.einheit || ""}`.trim(); }

export function render(q, root, ctx) {
  root.innerHTML = `
    <div class="zahl-row">
      <input type="text" inputmode="decimal" autocomplete="off" id="zahlIn" value="${esc(ctx.eingabe || "")}" placeholder="Ergebnis">
      <span class="einheit">${esc(q.einheit || "")}</span>
    </div>
    <p class="small muted">Komma oder Punkt als Dezimalzeichen · Toleranz ±${fmt((q.toleranz ?? STANDARD_TOLERANZ) * 100, 1)} %</p>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zahlOk">Prüfen</button>` : ""}`;
  const input = root.querySelector("#zahlIn");
  input.addEventListener("input", () => { if (ctx.onEingabe) ctx.onEingabe(input.value); });
  const abgeben = () => { if (ctx.onAbgabe) ctx.onAbgabe(input.value); };
  input.addEventListener("keydown", ev => { if (ev.key === "Enter" && ctx.modus === "uebung") abgeben(); });
  const ok = root.querySelector("#zahlOk");
  if (ok) ok.addEventListener("click", abgeben);
}

export function markiere(q, root, e) {
  const input = root.querySelector("#zahlIn");
  input.disabled = true;
  input.classList.add(bewerte(q, e) ? "correct" : "wrong");
  const ok = root.querySelector("#zahlOk");
  if (ok) ok.remove();
}
```

`kern/typen/reihenfolge.js`:
```js
// Fragetyp "reihenfolge": Arbeitsschritte mit ↑/↓ in die richtige Reihenfolge bringen.
// Eingabe = Liste der Schritt-Indizes in der Reihenfolge des Users.
import { esc, shuffle } from "../util.js";

export function neueEingabe(q) {
  const richtig = [...Array(q.schritte.length).keys()];
  const istRichtig = e => e.every((v, k) => v === k);
  let e = shuffle(richtig);
  for (let i = 0; i < 10 && istRichtig(e); i++) e = shuffle(richtig);
  return istRichtig(e) ? [...richtig.slice(1), richtig[0]] : e;
}
export function beantwortet() { return true; }
export function bewerte(q, e) {
  if (!Array.isArray(e) || e.length !== q.schritte.length) return 0;
  return e.filter((v, k) => v === k).length / e.length;
}
export function antwortText(q, e) { return Array.isArray(e) ? e.map((v, k) => `${k + 1}. ${q.schritte[v]}`).join(" | ") : "keine Antwort"; }
export function loesungText(q) { return q.schritte.map((s, k) => `${k + 1}. ${s}`).join(" | "); }

export function verschiebe(e, pos, richtung) {
  const ziel = pos + richtung;
  if (ziel < 0 || ziel >= e.length) return e.slice();
  const neu = e.slice();
  [neu[pos], neu[ziel]] = [neu[ziel], neu[pos]];
  return neu;
}

export function render(q, root, ctx) {
  let e = Array.isArray(ctx.eingabe) ? ctx.eingabe.slice() : neueEingabe(q);
  const zeichne = () => {
    root.innerHTML = `
      <p class="small muted">Bringe die Schritte mit ↑ und ↓ in die richtige Reihenfolge.</p>
      <ol class="reihe">${e.map((v, k) => `
        <li data-pos="${k}"><span class="nr">${k + 1}.</span><span class="txt">${esc(q.schritte[v])}</span>
          <button data-move="-1" aria-label="nach oben" ${k === 0 ? "disabled" : ""}>↑</button>
          <button data-move="1" aria-label="nach unten" ${k === e.length - 1 ? "disabled" : ""}>↓</button></li>`).join("")}
      </ol>
      ${ctx.modus === "uebung" ? `<button class="btn secondary" id="reiheOk">Prüfen</button>` : ""}`;
    root.querySelectorAll("[data-move]").forEach(btn => btn.addEventListener("click", () => {
      e = verschiebe(e, Number(btn.closest("li").dataset.pos), Number(btn.dataset.move));
      if (ctx.onEingabe) ctx.onEingabe(e.slice());
      zeichne();
    }));
    const ok = root.querySelector("#reiheOk");
    if (ok) ok.addEventListener("click", () => { if (ctx.onAbgabe) ctx.onAbgabe(e.slice()); });
  };
  if (ctx.onEingabe) ctx.onEingabe(e.slice());
  zeichne();
}

export function markiere(q, root, e) {
  root.querySelectorAll(".reihe li").forEach(li => {
    const pos = Number(li.dataset.pos);
    li.classList.add(e[pos] === pos ? "correct" : "wrong");
    li.querySelectorAll("button").forEach(b => b.remove());
    if (e[pos] !== pos) li.insertAdjacentHTML("beforeend", `<span class="small muted">richtig: Platz ${e[pos] + 1}</span>`);
  });
  const ok = root.querySelector("#reiheOk");
  if (ok) ok.remove();
}
```

`kern/typen/zuordnung.js`:
```js
// Fragetyp "zuordnung": zu jedem linken Eintrag den passenden rechten Wert wählen
// (Bild beschriften, Bauteil → Aufgabe, Niederdruck/Hochdruck einteilen).
import { esc } from "../util.js";

export function optionen(q) {
  return [...new Set([...q.paare.map(p => p[1]), ...(q.ablenker || [])])].sort((a, b) => a.localeCompare(b, "de"));
}
export function neueEingabe(q) { return q.paare.map(() => ""); }
export function beantwortet(q, e) { return Array.isArray(e) && e.some(Boolean); }
export function bewerte(q, e) {
  if (!Array.isArray(e) || e.length !== q.paare.length) return 0;
  return q.paare.filter((p, i) => e[i] === p[1]).length / q.paare.length;
}
export function antwortText(q, e) { return beantwortet(q, e) ? q.paare.map((p, i) => `${p[0]} → ${e[i] || "–"}`).join(" | ") : "keine Antwort"; }
export function loesungText(q) { return q.paare.map(p => `${p[0]} → ${p[1]}`).join(" | "); }

export function render(q, root, ctx) {
  const e = Array.isArray(ctx.eingabe) ? ctx.eingabe.slice() : neueEingabe(q);
  const opts = optionen(q);
  root.innerHTML = `
    <div class="zuordnung">${q.paare.map((p, i) => `
      <label class="zuo-row"><span class="zuo-links">${esc(p[0])}</span>
        <select data-i="${i}"><option value="">– wählen –</option>${opts.map(o => `<option value="${esc(o)}" ${e[i] === o ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>
      </label>`).join("")}</div>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zuoOk">Prüfen</button>` : ""}`;
  root.querySelectorAll("select").forEach(sel => sel.addEventListener("change", () => {
    e[Number(sel.dataset.i)] = sel.value;
    if (ctx.onEingabe) ctx.onEingabe(e.slice());
  }));
  const ok = root.querySelector("#zuoOk");
  if (ok) ok.addEventListener("click", () => { if (ctx.onAbgabe) ctx.onAbgabe(e.slice()); });
}

export function markiere(q, root, e) {
  root.querySelectorAll("select").forEach(sel => {
    const i = Number(sel.dataset.i);
    const richtig = e[i] === q.paare[i][1];
    sel.disabled = true;
    const row = sel.closest(".zuo-row");
    row.classList.add(richtig ? "correct" : "wrong");
    if (!richtig) row.insertAdjacentHTML("beforeend", `<span class="small">richtig: ${esc(q.paare[i][1])}</span>`);
  });
  const ok = root.querySelector("#zuoOk");
  if (ok) ok.remove();
}
```

`kern/typen/offen.js`:
```js
// Fragetyp "offen": freie Antwort, dann mit der Musterlösung (Stichpunkte) vergleichen und abhaken.
// Eingabe = { text, haken: [Indizes der erfüllten Stichpunkte], gezeigt: Musterlösung angesehen? }
import { esc } from "../util.js";

export function neueEingabe() { return { text: "", haken: [], gezeigt: false }; }
const norm = e => (e && typeof e === "object" && Array.isArray(e.haken)) ? { text: String(e.text || ""), haken: e.haken, gezeigt: !!e.gezeigt } : neueEingabe();

export function beantwortet(q, e) { e = norm(e); return e.text.trim() !== "" || e.gezeigt; }
export function bewerte(q, e) {
  e = norm(e);
  if (!e.gezeigt) return 0;
  const gueltig = new Set(e.haken.filter(i => Number.isInteger(i) && i >= 0 && i < q.punkte.length));
  return gueltig.size / q.punkte.length;
}
export function antwortText(q, e) { e = norm(e); return e.text.trim() || (e.gezeigt ? "(im Kopf beantwortet)" : "keine Antwort"); }
export function loesungText(q) { return q.punkte.join(" · "); }

function checklisteHtml(q, e) {
  return `<div class="check-list">${q.punkte.map((p, i) => `
    <label><input type="checkbox" data-haken="${i}" ${e.haken.includes(i) ? "checked" : ""}><span>${esc(p)}</span></label>`).join("")}</div>`;
}
function hakenLesen(root) {
  return [...root.querySelectorAll("[data-haken]")].filter(c => c.checked).map(c => Number(c.dataset.haken));
}

export function render(q, root, ctx) {
  const e = norm(ctx.eingabe);
  root.innerHTML = `
    <textarea class="antwort-text" id="offenText" placeholder="Deine Antwort in Stichpunkten (oder im Kopf überlegen)">${esc(e.text)}</textarea>
    ${ctx.modus === "uebung" ? `<button class="btn secondary" id="zeigen">Musterlösung zeigen</button><div id="loesung"></div>` : ""}`;
  const ta = root.querySelector("#offenText");
  ta.addEventListener("input", () => { e.text = ta.value; if (ctx.onEingabe) ctx.onEingabe({ ...e }); });
  const zeigen = root.querySelector("#zeigen");
  if (!zeigen) return;
  zeigen.addEventListener("click", () => {
    e.gezeigt = true;
    zeigen.remove();
    const box = root.querySelector("#loesung");
    box.innerHTML = `<p><strong>Musterlösung – hake ab, was du (sinngemäß) hattest:</strong></p>${checklisteHtml(q, e)}<button class="btn" id="uebernehmen">Bewertung übernehmen</button>`;
    box.querySelector("#uebernehmen").addEventListener("click", () => {
      e.haken = hakenLesen(box);
      if (ctx.onAbgabe) ctx.onAbgabe({ ...e });
    });
  });
}

export function markiere(q, root) {
  root.querySelectorAll("input, textarea").forEach(el => { el.disabled = true; });
  const btn = root.querySelector("#uebernehmen");
  if (btn) btn.remove();
}

// Prüfung: am Blockende selbst bewerten. Ohne geschriebene Antwort gibt es 0 Punkte.
export function renderSelbstbewertung(q, root, eingabe, onChange) {
  const e = norm(eingabe);
  const hatText = e.text.trim() !== "";
  e.gezeigt = hatText;
  if (!hatText) e.haken = [];
  onChange({ ...e });
  root.innerHTML = `
    <p><strong>${esc(q.q)}</strong></p>
    <p class="small muted">Deine Antwort:</p>
    <div class="passage">${hatText ? esc(e.text) : "– keine Antwort geschrieben –"}</div>
    ${hatText ? checklisteHtml(q, e) : `<p class="small trend-down">0 Punkte</p>`}`;
  root.querySelectorAll("[data-haken]").forEach(c => c.addEventListener("change", () => {
    e.haken = hakenLesen(root);
    onChange({ ...e });
  }));
}
```

In `sw.js` → `FILES` einfügen: `"kern/typen/index.js", "kern/typen/mc.js", "kern/typen/offen.js", "kern/typen/reihenfolge.js", "kern/typen/zahl.js", "kern/typen/zuordnung.js",`

- [ ] **Step 4: Tests**

Run: `node tools/tests.js`
Expected: `✓ Fragetypen …`, `Alle Tests bestanden.`

- [ ] **Step 5: Commit**

```bash
git add kern/typen tools/tests sw.js tools/tests.js
git commit -m "Fünf Fragetypen: Multiple Choice, offen, Zahl, Reihenfolge, Zuordnung

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Speicher und Fragenauswahl

**Files:**
- Create: `kern/speicher.js` (aus Telekom `js/speicher.js`), `kern/auswahl.js` (aus Telekom `js/auswahl.js`)
- Test: `tools/tests/speicher.test.js`
- Modify: `tools/tests.js` (+ `"speicher"`), `sw.js` (+ 2 Dateien)

**Interfaces:**
- Produces (wie Telekom): `BOX_INTERVALS, LEARNED_BOX, withBox, loadProgress, saveProgress, importProgress, loadSettings, saveSettings, saveRun, recordAnswer(q, isCorrect) → history, dailyStatus, historySummary, isDue, dueQuestions, boxStats, categoryWeakness, trend`. Neu in `loadProgress()`: `data.saetze = { satzId: "JJJJ-MM-TT HH:MM" }`. Schlüssel: `` `${TRAINER.id}.progress` `` und `` `${TRAINER.id}.settings` ``.
- `auswahl.js`: `chooseByHistory(candidates, history)`, `pickFromPool(pool, level, used, history)`.

- [ ] **Step 1: Failing test**

`tools/tests/speicher.test.js`:
```js
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
```
In `tools/tests.js`: `"speicher"` an DATEIEN anhängen.

- [ ] **Step 2: Test laufen lassen**

Run: `node tools/tests.js`
Expected: FAIL `Cannot find module …/kern/speicher.js`.

- [ ] **Step 3: Übernehmen und anpassen**

```bash
cp "$T/js/speicher.js" kern/speicher.js
cp "$T/js/auswahl.js" kern/auswahl.js
```
In `kern/speicher.js`:
1. Die ersten 6 Zeilen (Kommentar + Imports) ersetzen durch:
```js
// Speichern im Browser (localStorage). Alle Schlüssel beginnen mit TRAINER.id, damit sich
// mehrere Trainer auf derselben Domain nicht in die Quere kommen. Export/Import über die Statistik.

import { QUESTIONS } from "../inhalt/fragen.js";
import { TRAINER } from "../inhalt/trainer.js";
import { CATEGORIES } from "./config.js";
import { nowStamp, dateKey, addDays } from "./util.js";
```
2. Schlüssel ersetzen:
```js
const PROGRESS_KEY = `${TRAINER.id}.progress`;
const SETTINGS_KEY = `${TRAINER.id}.settings`;
```
3. In `withDefaults` die Zeile mit `data.interview` ersetzen durch:
```js
  data.saetze = data.saetze || {};       // { satzId: "JJJJ-MM-TT HH:MM" } wann ein Aufgabensatz zuletzt in der Simulation war
```
4. In `loadSettings` die Standardwerte `timer: true,` → `timer: false,` und `count: 20,` → `count: 15,` ändern.

`kern/auswahl.js` bleibt unverändert (die Imports `./util.js`, `./config.js`, `./speicher.js` passen schon).
In `sw.js` → `FILES`: `"kern/auswahl.js",` und `"kern/speicher.js",` einfügen.

- [ ] **Step 4: Tests**

Run: `node tools/tests.js`
Expected: `✓ Speicher …`, `Alle Tests bestanden.`

- [ ] **Step 5: Commit**

```bash
git add kern/speicher.js kern/auswahl.js tools/tests sw.js tools/tests.js
git commit -m "Speicher mit Trainer-Präfix, Leitner-Wiederholung und Fragenauswahl

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Rechen-Generatoren (Elektrik, Hydraulik, Sozialabgaben)

**Files:**
- Create: `inhalt/gen/index.js`, `inhalt/gen/gemeinsam.js`, `inhalt/gen/elektrik.js`, `inhalt/gen/hydraulik.js`, `inhalt/gen/sozialabgaben.js`
- Test: `tools/tests/generatoren.test.js`
- Modify: `tools/tests.js` (+ `"generatoren"`), `sw.js` (+ 5 Dateien)

**Interfaces:**
- Produces: `GENERATORS = { Diesel: [elektrik, hydraulik], Bremse: [hydraulik], Airbag: [elektrik], WiSo: [sozialabgaben], Grundlagen: [elektrik] }`, `GEN_SHARE = 0.15`, `hasGenerator(cat) → bool`, `generate(cat, level) → Frage`.
- Generierte Frage: `{ id: "gen-…", gen: true, cat, level, typ: "zahl", q, loesung, einheit, toleranz, explain, daten: { art, … }, src: "Generator" }`. `daten.art` ∈ `ohm, reihe, parallel, kennlinie, kennlinie-u, druck, uebersetzung, kolbenkraft, sv`.
- `zahlFrage(cat, level, q, loesung, einheit, explain, daten, toleranz = 0.02)`, `runde(x, stellen = 2)` aus `gemeinsam.js`. `SV_2026` aus `sozialabgaben.js`.

- [ ] **Step 1: Failing test**

`tools/tests/generatoren.test.js`:
```js
import { fail, ok } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { GENERATORS, hasGenerator, generate } from "../../inhalt/gen/index.js";

// Jede Aufgabe unabhängig nachrechnen
const NACHRECHNEN = {
  ohm: d => d.U / d.R,
  reihe: d => d.teile.reduce((s, x) => s + x, 0),
  parallel: d => (d.R1 * d.R2) / (d.R1 + d.R2),
  kennlinie: d => ((d.U - 0.5) / 4) * d.pmax,
  "kennlinie-u": d => 0.5 + (d.p / d.pmax) * 4,
  druck: d => d.F / (d.A * 10),
  uebersetzung: d => d.F1 * (d.d2 / d.d1) ** 2,
  kolbenkraft: d => (d.p / 10) * (Math.PI * d.d ** 2) / 4,
  sv: d => (d.brutto * d.satz) / 100,
};

export default async function () {
  const ids = new Set();
  for (const cat of Object.keys(GENERATORS)) {
    ok(TRAINER.bereiche.includes(cat), `Generator-Bereich ${cat} fehlt in TRAINER.bereiche`);
    ok(hasGenerator(cat), `hasGenerator(${cat})`);
    let n = 0;
    for (const level of [1, 2, 3]) {
      for (let i = 0; i < 500; i++) {
        const q = generate(cat, level);
        const wo = `${cat} L${level}`;
        ok(q.gen === true && q.cat === cat && q.level === level && q.typ === "zahl", `${wo}: Grundfelder`);
        ok(typeof q.q === "string" && q.q.length > 20 && typeof q.explain === "string" && q.explain.length > 5, `${wo}: Text fehlt`);
        ok(Number.isFinite(q.loesung) && typeof q.einheit === "string", `${wo}: Lösung/Einheit`);
        ok(!/NaN|undefined|Infinity|\[object /.test(JSON.stringify(q)), `${wo}: kaputter Wert ${q.q}`);
        ok(!ids.has(q.id), `${wo}: ID doppelt ${q.id}`);
        ids.add(q.id);
        const f = NACHRECHNEN[q.daten && q.daten.art];
        if (!f) { fail(`${wo}: unbekannte art ${q.daten && q.daten.art}`); continue; }
        const soll = f(q.daten);
        if (Math.abs(soll - q.loesung) > Math.abs(soll) * (q.toleranz / 2) + 0.01) fail(`${wo}: Lösung ${q.loesung} ≠ ${soll} (${q.q})`);
        n += 1;
      }
    }
    console.log(`✓ Generator ${cat}: ${n} Aufgaben nachgerechnet`);
  }
  ok(!hasGenerator("Klima"), "Klima hat (noch) keinen Generator");
}
```
In `tools/tests.js`: `"generatoren"` anhängen.

- [ ] **Step 2: Test laufen lassen**

Run: `node tools/tests.js`
Expected: FAIL `Cannot find module …/inhalt/gen/index.js`.

- [ ] **Step 3: Generatoren schreiben**

`inhalt/gen/gemeinsam.js`:
```js
// Gemeinsame Helfer für die Rechen-Generatoren.
let zaehler = 0;

export const runde = (x, stellen = 2) => Math.round(x * 10 ** stellen) / 10 ** stellen;

export function zahlFrage(cat, level, q, loesung, einheit, explain, daten, toleranz = 0.02) {
  zaehler += 1;
  return {
    id: `gen-${cat}-${Date.now().toString(36)}-${zaehler}`,
    gen: true, cat, level, typ: "zahl", q, loesung, einheit, toleranz, explain, daten, src: "Generator",
  };
}
```

`inhalt/gen/elektrik.js`:
```js
// Rechenaufgaben Elektrik: Ohmsches Gesetz, Reihenschaltung (Zündkreis), Parallelschaltung,
// lineare Sensorkennlinie (Raildrucksensor 0,5–4,5 V).
import { rand, fmt } from "../../kern/util.js";
import { zahlFrage, runde } from "./gemeinsam.js";

function ohm(cat, level) {
  const U = rand([12, 12.5, 13.5, 14]);
  const R = rand([2, 2.5, 3, 4, 5, 6, 8]);
  const I = runde(U / R);
  return zahlFrage(cat, level, `An einem Verbraucher liegen ${fmt(U)} V an, sein Widerstand beträgt ${fmt(R)} Ω. Wie groß ist der Strom?`,
    I, "A", `I = U ÷ R = ${fmt(U)} V ÷ ${fmt(R)} Ω = ${fmt(I)} A`, { art: "ohm", U, R });
}

function reihe(cat, level) {
  const teil = cat === "Airbag" ? "die Zündpille" : "der Verbraucher";
  const zp = rand([1.8, 2, 2.2, 2.5, 3]);
  const st = rand([0.1, 0.2, 0.3]);
  const lt = rand([0.2, 0.3, 0.4, 0.5]);
  const R = runde(zp + 2 * st + lt);
  return zahlFrage(cat, level,
    `In einem Stromkreis liegen in Reihe: ${teil} (${fmt(zp)} Ω), zwei Steckverbindungen mit je ${fmt(st)} Ω Übergangswiderstand und die Leitung (${fmt(lt)} Ω). Wie groß ist der Gesamtwiderstand?`,
    R, "Ω", `Reihenschaltung: R = ${fmt(zp)} + 2 × ${fmt(st)} + ${fmt(lt)} = ${fmt(R)} Ω.${cat === "Airbag" ? " Einen Airbag-Zündkreis misst man nur mit Diagnosetester bzw. Prüfadapter – nie direkt an der Zündpille." : ""}`,
    { art: "reihe", teile: [zp, st, st, lt] });
}

function parallel(cat, level) {
  const R1 = rand([2, 3, 4, 6, 8, 12]);
  const R2 = rand([2, 3, 4, 6, 8, 12]);
  const R = runde((R1 * R2) / (R1 + R2));
  return zahlFrage(cat, level, `Zwei Widerstände mit ${fmt(R1)} Ω und ${fmt(R2)} Ω sind parallel geschaltet. Wie groß ist der Ersatzwiderstand?`,
    R, "Ω", `R = (R1 × R2) ÷ (R1 + R2) = (${fmt(R1)} × ${fmt(R2)}) ÷ (${fmt(R1)} + ${fmt(R2)}) = ${fmt(R)} Ω`, { art: "parallel", R1, R2 });
}

function kennlinie(cat, level) {
  const pmax = rand([1800, 2000, 2200, 2500]);
  const U = rand([1, 1.5, 2, 2.5, 3, 3.5, 4]);
  const p = runde(((U - 0.5) / 4) * pmax, 0);
  return zahlFrage(cat, level,
    `Ein Raildrucksensor liefert linear 0,5 V bei 0 bar und 4,5 V bei ${fmt(pmax, 0)} bar. Im Messwertblock steht eine Signalspannung von ${fmt(U)} V. Welcher Raildruck liegt an?`,
    p, "bar", `p = (U − 0,5 V) ÷ 4 V × ${fmt(pmax, 0)} bar = (${fmt(U)} − 0,5) ÷ 4 × ${fmt(pmax, 0)} = ${fmt(p, 0)} bar`, { art: "kennlinie", U, pmax });
}

function kennlinieU(cat, level) {
  const pmax = rand([180, 200, 250]);
  const p = 10 * Math.floor(2 + Math.random() * (pmax / 10 - 3));
  const U = runde(0.5 + (p / pmax) * 4);
  return zahlFrage(cat, level,
    `Ein Raildrucksensor liefert linear 0,5 V bei 0 MPa und 4,5 V bei ${pmax} MPa. Welche Signalspannung erwarten Sie bei ${p} MPa (= ${fmt(p * 10, 0)} bar)?`,
    U, "V", `U = 0,5 V + ${p} ÷ ${pmax} × 4 V = ${fmt(U)} V (1 MPa = 10 bar)`, { art: "kennlinie-u", p, pmax });
}

export function elektrik(cat, level) {
  if (level === 1) return ohm(cat, level);
  if (cat === "Diesel") return level === 2 ? kennlinie(cat, level) : kennlinieU(cat, level);
  return level === 2 ? reihe(cat, level) : parallel(cat, level);
}
```

`inhalt/gen/hydraulik.js`:
```js
// Rechenaufgaben Hydraulik: Druck aus Kraft und Fläche, hydraulische Übersetzung (Bremse),
// Kraft auf einen Kolben bei Raildruck (Diesel).
import { rand, randInt, fmt } from "../../kern/util.js";
import { zahlFrage, runde } from "./gemeinsam.js";

function druck(cat, level) {
  const F = 300 + 50 * randInt(0, 18);
  const A = rand([2, 2.5, 3, 4, 5, 6]);
  const p = runde(F / (A * 10));
  return zahlFrage(cat, level, `Auf einen Kolben mit ${fmt(A)} cm² Fläche wirkt eine Kraft von ${F} N. Welcher Druck entsteht? (1 bar = 10 N/cm²)`,
    p, "bar", `p = F ÷ A = ${F} N ÷ ${fmt(A)} cm² = ${fmt(F / A)} N/cm² = ${fmt(p)} bar`, { art: "druck", F, A });
}

function uebersetzung(cat, level) {
  const d1 = rand([20, 22, 23, 25]);
  const d2 = rand([38, 42, 45, 48, 54, 57]);
  const F1 = 1500 + 100 * randInt(0, 20);
  const F2 = runde(F1 * (d2 / d1) ** 2, 0);
  return zahlFrage(cat, level,
    `Der Hauptbremszylinder (Kolbendurchmesser ${d1} mm) wird mit ${F1} N betätigt. Welche Spannkraft entsteht an einem Bremssattelkolben mit ${d2} mm Durchmesser?`,
    F2, "N", `Gleicher Druck überall: F2 = F1 × (d2 ÷ d1)² = ${F1} N × (${d2} ÷ ${d1})² = ${fmt(F2, 0)} N`, { art: "uebersetzung", F1, d1, d2 });
}

function kolbenkraft(cat, level) {
  const p = 1000 + 100 * randInt(0, 10);
  const d = rand([3, 4, 4.5, 5]);
  const A = runde((Math.PI * d * d) / 4);
  const F = runde((p / 10) * A, 0);
  return zahlFrage(cat, level,
    `Im Ventilsteuerraum eines Injektors herrschen ${p} bar. Der Ventilsteuerkolben hat ${fmt(d)} mm Durchmesser. Welche Kraft wirkt auf den Kolben? (1 bar = 0,1 N/mm²)`,
    F, "N", `A = π × d² ÷ 4 = ${fmt(A)} mm²; p = ${p} bar = ${fmt(p / 10)} N/mm²; F = p × A = ${fmt(F, 0)} N`, { art: "kolbenkraft", p, d });
}

export function hydraulik(cat, level) {
  if (level === 1) return druck(cat, level);
  return cat === "Diesel" ? kolbenkraft(cat, level) : uebersetzung(cat, level);
}
```

`inhalt/gen/sozialabgaben.js`:
```js
// WiSo: Arbeitnehmeranteile der Sozialversicherung aus dem Bruttolohn (Beitragssätze 2026).
// Quelle: Rechercheakte Abschnitt 3.5 – zum Jahreswechsel prüfen!
import { randInt, fmt, euro } from "../../kern/util.js";
import { zahlFrage, runde } from "./gemeinsam.js";

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
  return zahlFrage(cat, level,
    `${wer} verdient ${euro(brutto)} brutto im Monat. Berechnen Sie ${was} (Beitragssätze 2026).`,
    betrag, "€", `${weg} → ${euro(brutto)} × ${fmt(satz)} % = ${euro(betrag)}`, { art: "sv", brutto, satz }, 0.002);
}
```

`inhalt/gen/index.js`:
```js
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
```
In `sw.js` → `FILES` die 5 Dateien `inhalt/gen/…` eintragen.

- [ ] **Step 4: Tests**

Run: `node tools/tests.js`
Expected: fünf Zeilen `✓ Generator …`, `Alle Tests bestanden.`

- [ ] **Step 5: Commit**

```bash
git add inhalt/gen tools/tests sw.js tools/tests.js
git commit -m "Rechen-Generatoren für Elektrik, Hydraulik und Sozialabgaben 2026

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Oberfläche – Start, Übung, Spickzettel, Melden, Statistik

**Files:**
- Create: `kern/karten.js`, `kern/fragenansicht.js`, `kern/start.js`, `kern/uebung.js`, `kern/main.js`, `inhalt/lernkarten.js` (erste Karte)
- Create (aus Telekom, angepasst): `kern/lernen.js`, `kern/meldungen.js`, `kern/statistik.js`
- Test: `tools/tests/karten.test.js`
- Modify: `tools/tests.js` (+ `"karten"`), `sw.js` (+ 10 Dateien)

**Interfaces:**
- Consumes: Typen (Task 4), `zaehltRichtig` (Task 3), Speicher (Task 5), `GEN_SHARE, hasGenerator, generate` (Task 6), `QUESTIONS, SITUATIONEN`.
- Produces: `CARDS`, `cardForQuestion(q) → Karte|null` (`kern/karten.js`, ohne DOM). `situationHtml(id, kompakt = false)`, `frageHtml(q, { kompakteSituation = false } = {})` → HTML mit `<div id="antwort"></div>` (`kern/fragenansicht.js`). `openCardOverlay(card)` (`kern/lernen.js`). `openReportOverlay(q, eingabe, onDone)` (`kern/meldungen.js`). Ansichten `start`, `uebung`, `lernen`, `meldungen`, `statistik`.
- Karte: `{ id, cat, title, keys: string[], html }`.

- [ ] **Step 1: Failing test für `karten.js`**

`tools/tests/karten.test.js`:
```js
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
```
In `tools/tests.js`: `"karten"` anhängen. Run `node tools/tests.js` → FAIL (Modul fehlt).

- [ ] **Step 2: `kern/karten.js` und erste Karte**

`kern/karten.js`:
```js
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
```

`inhalt/lernkarten.js`:
```js
// Spickzettel: kurze Lernkarten je Bereich. "keys" helfen, nach einer falschen Antwort
// die passende Karte vorzuschlagen (Treffer im Fragen- oder Erklärungstext).
// Inhalte in eigenen Worten – Quellen siehe docs/recherche und material/notizen (lokal).

export const CARDS = [
  {
    id: "messen", cat: "Grundlagen", title: "Messen am Fahrzeug",
    keys: ["Voltmeter", "Ohmmeter", "Oszilloskop", "Widerstand", "Spannung", "PWM", "Masse"],
    html: `
      <table class="ktable">
        <tr><td>Spannung</td><td>Voltmeter parallel zum Bauteil, Stromkreis geschlossen</td></tr>
        <tr><td>Widerstand</td><td>Ohmmeter, Bauteil stromlos (Stecker ab), vorher Nullabgleich</td></tr>
        <tr><td>Strom</td><td>Amperemeter in Reihe oder Strommesszange</td></tr>
        <tr><td>PWM / Signalverlauf</td><td>Oszilloskop</td></tr>
      </table>
      <h4>Merksätze</h4>
      <ul>
        <li>Leitungen auf Durchgang: Sollwert meist &lt; 0,5 Ω.</li>
        <li>Masseseitig angesteuertes Bauteil: Im Oszi-Bild ist das <strong>untere</strong> Niveau „bestromt“.</li>
        <li>Sensor mit 3 Pins: 5-V-Versorgung, Signal, Masse – erst Versorgung und Masse prüfen, dann das Signal.</li>
      </ul>`,
  },
];
```
Run: `node tools/tests.js` → `✓ Spickzettel-Suche (1 Karten)`.

- [ ] **Step 3: `kern/fragenansicht.js`**

```js
// Darstellung einer Aufgabe (Situation, Hinweis, Fragetext, Bild, Antwortbereich) – für Übung und Prüfung.
import { SITUATIONEN } from "../inhalt/fragen.js";
import { esc } from "./util.js";

export function situationHtml(id, kompakt = false) {
  const s = SITUATIONEN[id];
  if (!s) return "";
  if (kompakt) return `<details class="situation-mini"><summary>Auftrag: ${esc(s.titel)}</summary><p>${esc(s.text)}</p></details>`;
  return `<div class="passage situation"><strong>${esc(s.titel)}</strong>\n${esc(s.text)}</div>`;
}

export function frageHtml(q, { kompakteSituation = false } = {}) {
  return `
    ${q.situation ? situationHtml(q.situation, kompakteSituation) : ""}
    ${q.tb ? `<p class="tb-hint">📘 Tabellenbuch erlaubt</p>` : ""}
    <p class="qtext">${esc(q.q)}</p>
    ${q.bild ? `<figure class="bild"><img src="inhalt/bilder/${esc(q.bild)}" alt="Abbildung zur Aufgabe"></figure>` : ""}
    ${q.stemHtml ? `<div class="stem">${q.stemHtml}</div>` : ""}
    <div id="antwort"></div>`;
}
```

- [ ] **Step 4: Spickzettel, Melden, Statistik aus dem Telekom-Trainer übernehmen**

```bash
cp "$T/js/lernen.js" kern/lernen.js
cp "$T/js/meldungen.js" kern/meldungen.js
cp "$T/js/statistik.js" kern/statistik.js
```

`kern/lernen.js`:
- Zeile `import { CARDS } from "./lernkarten.js";` ersetzen durch:
```js
import { CARDS } from "./karten.js";
import { CATEGORIES } from "./config.js";
```
- Zeile `const practiceCat = card.cat === "Test-Taktik" ? null : card.cat;` ersetzen durch:
```js
  const practiceCat = CATEGORIES.includes(card.cat) ? card.cat : null;
```

`kern/meldungen.js`:
- Nach den Imports ergänzen:
```js
import { SITUATIONEN } from "../inhalt/fragen.js";
import { typVon } from "./typen/index.js";
```
- Die Funktion `snapshot` komplett ersetzen:
```js
// Kompakte, lesbare Kopie der Frage – auch generierte Aufgaben bleiben so nachvollziehbar
function snapshot(q, eingabe) {
  const t = typVon(q);
  return {
    id: q.id,
    bereich: q.cat,
    level: q.level,
    typ: q.typ || "mc",
    frage: q.q,
    situation: q.situation && SITUATIONEN[q.situation] ? SITUATIONEN[q.situation].titel : "",
    richtig: t.loesungText(q),
    gewaehlt: eingabe === undefined ? null : t.antwortText(q, eingabe),
    erklaerung: q.explain,
    quelle: q.src || "",
    generiert: !!q.gen,
  };
}
```
- In `openReportOverlay(q, chosen, onDone)` den Parameter `chosen` in `eingabe` umbenennen, ebenso im Aufruf `...snapshot(q, chosen)` → `...snapshot(q, eingabe)`.
- Die Funktion `reportText` komplett ersetzen:
```js
// Text zum Weitergeben (z. B. per WhatsApp oder in den Chat mit Claude)
function reportText(list) {
  return list.map((m, i) => [
    `${i + 1}. [${m.bereich}, Level ${m.level}, ${m.typ}] ${m.grund}${m.generiert ? " (generierte Aufgabe)" : ""}`,
    m.situation ? `   Aufgabensatz: ${m.situation}` : null,
    `   Frage: ${m.frage}`,
    `   Hinterlegt: ${m.richtig}`,
    m.gewaehlt ? `   Meine Antwort: ${m.gewaehlt}` : null,
    m.notiz ? `   Notiz: ${m.notiz}` : null,
    `   Quelle: ${m.quelle || "?"}${m.generiert ? "" : ` · ID: ${m.id}`}`,
  ].filter(Boolean).join("\n")).join("\n\n");
}
```

`kern/statistik.js`:
- Die Imports `import { QUESTIONS } from "./fragen.js";` und `import { POOL_CATEGORIES } from "./config.js";` ersetzen durch:
```js
import { QUESTIONS } from "../inhalt/fragen.js";
import { TRAINER } from "../inhalt/trainer.js";
import { CATEGORIES } from "./config.js";
```
- `POOL_CATEGORIES.map(` → `CATEGORIES.map(`
- `<span class="bar-val">${x.prozent} Pkt</span>` → `<span class="bar-val">${x.prozent} % · ${x.note}</span>`
- `Als Datei speichern, auf ein anderes Gerät übertragen oder vom alten PC-Programm übernehmen (telekom_trainer_fortschritt.json).` → `Als Datei speichern und auf ein anderes Gerät übertragen.`
- `a.download = "telekom_trainer_fortschritt.json";` → `` a.download = `${TRAINER.id}-fortschritt.json`; ``
- `alert("Die Datei konnte nicht gelesen werden. Ist es eine telekom_trainer_fortschritt.json?");` → `` alert(`Die Datei konnte nicht gelesen werden. Ist es eine ${TRAINER.id}-fortschritt.json?`); ``

- [ ] **Step 5: `kern/uebung.js` schreiben**

```js
// Übungsrunde: adaptive Schwierigkeit, optional Zeitdruck, Wiederholung fälliger Fragen.

import { QUESTIONS } from "../inhalt/fragen.js";
import { GEN_SHARE, hasGenerator, generate } from "../inhalt/gen/index.js";
import { CATEGORIES, LEVEL_NAMES, LEVEL_COLORS, TIMER_SECONDS } from "./config.js";
import { esc, shuffle } from "./util.js";
import { render, on, startTick, stopTick, screen, go, toast } from "./ui.js";
import { loadProgress, loadSettings, saveRun, recordAnswer, dueQuestions, withBox, isDue, dailyStatus } from "./speicher.js";
import { pickFromPool } from "./auswahl.js";
import { frageHtml } from "./fragenansicht.js";
import { typVon } from "./typen/index.js";
import { zaehltRichtig } from "./bewertung.js";
import { cardForQuestion } from "./karten.js";
import { openCardOverlay } from "./lernen.js";
import { openReportOverlay } from "./meldungen.js";

let S = null; // aktuelle Runde

// override.cats: nur diese Bereiche üben (z. B. vom Spickzettel aus)
function startSession(mode, override = {}) {
  const settings = loadSettings();
  const history = loadProgress().fragen;
  const activeCats = override.cats || CATEGORIES.filter(c => settings.cats[c]);
  if (!activeCats.length) { alert("Bitte mindestens einen Bereich auswählen."); return; }
  let pool = QUESTIONS.filter(q => activeCats.includes(q.cat));
  if (mode === "faellig") {
    pool = dueQuestions(history, pool);
    if (!pool.length) { alert("In den ausgewählten Bereichen ist heute nichts zum Wiederholen fällig."); return; }
  }
  const unlimited = activeCats.some(c => hasGenerator(c));
  if (mode === "normal" && !pool.length && !unlimited) { alert("In den ausgewählten Bereichen gibt es noch keine Fragen."); return; }
  S = {
    mode, cats: activeCats, pool, history,
    adaptive: settings.adaptive && mode === "normal",
    fixedLevel: settings.level,
    timer: settings.timer,
    total: mode === "faellig" ? Math.min(pool.length, Math.max(settings.count, 20)) : (unlimited ? settings.count : Math.min(settings.count, pool.length)),
    level: settings.adaptive ? 1 : settings.level,
    streakCorrect: 0, streakWrong: 0,
    used: new Set(), questions: [], index: 0, score: 0, wrong: [], catStats: {},
  };
  pickNext();
  showQuestion();
}

function pickNext() {
  let q = null;
  if (S.mode === "faellig") {
    q = S.pool.find(x => !S.used.has(x.id)) || null; // schon nach Box sortiert
  } else {
    const level = S.adaptive ? S.level : S.fixedLevel;
    for (const cat of shuffle(S.cats)) {
      if (hasGenerator(cat) && Math.random() < GEN_SHARE) { q = generate(cat, level); break; }
      q = pickFromPool(S.pool.filter(x => x.cat === cat), level, S.used, S.history);
      if (q) break;
    }
  }
  if (!q) return null;
  S.used.add(q.id);
  S.questions.push(q);
  return q;
}

function historyTag(q) {
  if (q.gen) return `<span class="muted">Neu erzeugt</span>`;
  const raw = S.history[q.id];
  if (!raw) return `<span style="color:var(--info)" class="badge">Neu</span>`;
  const e = withBox(raw);
  if (isDue(e) && e.box === 1) return `<span style="color:var(--warn)" class="badge">Wiederholung – zuletzt falsch</span>`;
  if (isDue(e)) return `<span style="color:var(--warn)" class="badge">Wiederholung · Box ${e.box}</span>`;
  return `<span class="muted">Box ${e.box} · ${e.gesehen}× gehabt</span>`;
}

function questionHeader(q) {
  const modeLabel = S.mode === "faellig" ? "Wiederholung" : (S.adaptive ? "Adaptiv" : "");
  return `
    <div class="qhead"><span>Aufgabe ${S.index + 1} / ${S.total}</span><span>Richtig: ${S.score}</span></div>
    <div class="qmeta">
      <span class="badge" style="color:${LEVEL_COLORS[q.level]}">● ${LEVEL_NAMES[q.level]}</span>
      ${historyTag(q)}
      <span class="muted" style="margin-left:auto">${modeLabel}</span>
    </div>
    <div class="progress"><div style="width:${(S.index / S.total) * 100}%"></div></div>
    <div class="cat">${esc(q.cat)}</div>`;
}

function showQuestion() {
  const q = S.questions[S.index];
  const t = typVon(q);
  render(`
    ${questionHeader(q)}
    ${frageHtml(q)}
    <div id="feedback"></div>
    <div class="timer" id="timer"></div>
    <button class="btn" id="next" style="display:none">${S.index + 1 >= S.total ? "Zum Ergebnis" : "Weiter"}</button>`);
  S.answered = false;
  S.eingabe = t.neueEingabe(q);
  t.render(q, document.getElementById("antwort"), {
    modus: "uebung",
    eingabe: S.eingabe,
    onEingabe: e => { S.eingabe = e; },
    onAbgabe: e => checkAnswer(e, false),
  });
  on("#next", "click", nextQuestion);
  if (S.timer && (q.typ || "mc") !== "offen") {
    let left = TIMER_SECONDS;
    const el = document.getElementById("timer");
    el.textContent = `⏱ ${left} s`;
    startTick(() => {
      left -= 1;
      el.textContent = `⏱ ${left} s`;
      el.classList.toggle("low", left <= 10);
      if (left <= 0) checkAnswer(S.eingabe, true);
    });
  }
}

function checkAnswer(eingabe, zeitUm) {
  if (S.answered) return;
  S.answered = true;
  stopTick();
  const q = S.questions[S.index];
  const t = typVon(q);
  const anteil = t.bewerte(q, eingabe);
  const isCorrect = zaehltRichtig(anteil);
  const cs = S.catStats[q.cat] = S.catStats[q.cat] || { richtig: 0, gesamt: 0 };
  cs.gesamt += 1;
  if (isCorrect) cs.richtig += 1;
  S.history = recordAnswer(q, isCorrect);
  t.markiere(q, document.getElementById("antwort"), eingabe);
  const day = dailyStatus();
  if (day.heute === day.ziel) toast(`🎯 Tagesziel erreicht! Serie: ${day.serie} ${day.serie === 1 ? "Tag" : "Tage"}`);

  let head;
  if (isCorrect) {
    S.score += 1; S.streakCorrect += 1; S.streakWrong = 0;
    head = anteil < 1 ? `Gut – ${Math.round(anteil * 100)} % richtig.` : "Richtig!";
  } else {
    S.streakWrong += 1; S.streakCorrect = 0; S.wrong.push(q);
    head = zeitUm ? "Zeit abgelaufen." : anteil > 0 ? `Teilweise – ${Math.round(anteil * 100)} % richtig.` : "Nicht ganz.";
  }

  let levelNote = "";
  if (S.adaptive) {
    const before = S.level;
    if (S.streakCorrect >= 2 && S.level < 3) { S.level += 1; S.streakCorrect = 0; }
    else if (S.streakWrong >= 2 && S.level > 1) { S.level -= 1; S.streakWrong = 0; }
    if (S.level !== before) levelNote = `<span class="explain muted small">Schwierigkeit wird ${S.level > before ? "höher" : "niedriger"} gestellt.</span>`;
  }

  const typ = q.typ || "mc";
  const loesung = typ === "zahl" || typ === "reihenfolge" ? `<span class="explain"><strong>Lösung:</strong> ${esc(t.loesungText(q))}</span>` : "";
  const card = cardForQuestion(q);
  const fb = document.getElementById("feedback");
  fb.className = `feedback ${isCorrect ? "ok" : "bad"}`;
  fb.innerHTML = `<strong>${head}</strong>${loesung}<span class="explain">${esc(q.explain)}</span>${levelNote}
    <div class="feedback-actions">
      ${card ? `<button class="link" id="cardLink">📖 Spickzettel: ${esc(card.title)}</button>` : ""}
      <button class="link muted-link" id="reportBtn">⚑ Frage melden</button>
    </div>`;
  if (card) document.getElementById("cardLink").addEventListener("click", () => openCardOverlay(card));
  const reportBtn = document.getElementById("reportBtn");
  reportBtn.addEventListener("click", () => openReportOverlay(q, eingabe, () => {
    reportBtn.textContent = "⚑ Gemeldet";
    reportBtn.disabled = true;
  }));
  document.getElementById("timer").textContent = "";
  const next = document.getElementById("next");
  next.style.display = "block";
  next.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function nextQuestion() {
  S.index += 1;
  if (S.index < S.total && pickNext()) showQuestion();
  else showResult();
}

function showResult() {
  const total = S.questions.length;
  const pct = total ? Math.round((S.score / total) * 100) : 0;
  const before = loadProgress().runs;
  let lastPct = before.length ? before[before.length - 1].prozent : null;
  if (S.mode === "faellig") lastPct = null; // Wiederholungen zählen nicht in den Verlauf
  else saveRun(S.score, total, S.catStats, S.level);

  let cmp = "";
  if (lastPct !== null) {
    const diff = pct - lastPct;
    if (diff > 0) cmp = `<p class="center trend-up">↑ ${diff} Prozentpunkte besser als letzte Runde (${lastPct}%)</p>`;
    else if (diff < 0) cmp = `<p class="center trend-down">↓ ${-diff} Prozentpunkte schwächer als letzte Runde (${lastPct}%)</p>`;
    else cmp = `<p class="center trend-flat">→ Gleiches Ergebnis wie letzte Runde (${lastPct}%)</p>`;
  }
  let extra = "";
  if (S.mode === "faellig") {
    extra = `<p class="center"><strong>${S.score} von ${total} gewusst</strong> – diese rücken eine Box weiter.<br>Heute noch fällig: ${dueQuestions(S.history).length}</p>`;
  } else if (S.adaptive) {
    extra = `<p class="center">Zuletzt erreichtes Level: <strong>${LEVEL_NAMES[S.level]}</strong></p>`;
  }
  const wrongByCat = {};
  S.wrong.forEach(q => { wrongByCat[q.cat] = (wrongByCat[q.cat] || 0) + 1; });
  const wrongHtml = S.wrong.length
    ? `<section class="card"><h3>Fehler nach Bereich</h3>${Object.entries(wrongByCat).map(([c, n]) => `<p>${esc(c)}: ${n} Fehler</p>`).join("")}</section>`
    : "";
  render(`
    <h2 class="center">${S.mode === "faellig" ? "Wiederholung beendet" : "Ergebnis"}</h2>
    <div class="big">${S.score} / ${total}</div>
    <p class="center muted">${pct} % richtig</p>
    ${cmp}${extra}${wrongHtml}
    <button class="btn" id="again">Zurück zum Start</button>`);
  on("#again", "click", () => go("start"));
}

screen("uebung", startSession);
```

- [ ] **Step 6: `kern/start.js` schreiben**

```bash
cp "$T/js/start.js" kern/start.js
```
Dann in `kern/start.js`:
1. Kopfkommentar und Imports (alles vor `// Chrome/Edge am PC …`) ersetzen durch:
```js
// Startbildschirm: Countdown, Tagesziel, Menü und Einstellungen für die Übungsrunde.

import { QUESTIONS } from "../inhalt/fragen.js";
import { TRAINER } from "../inhalt/trainer.js";
import { CATEGORIES, LEVEL_NAMES, TIMER_SECONDS } from "./config.js";
import { esc, dateKey, tageBis, datumDe } from "./util.js";
import { render, on, screen, go } from "./ui.js";
import { loadProgress, loadSettings, saveSettings, historySummary, categoryWeakness, trend, dueQuestions, boxStats, LEARNED_BOX, dailyStatus } from "./speicher.js";
```
2. Vor `function showStart()` einfügen:
```js
function countdownCard() {
  const heute = dateKey();
  const termine = TRAINER.termine.map(t => ({ ...t, tage: tageBis(t.datum, heute) })).filter(t => t.tage >= 0);
  if (!termine.length) return "";
  return `
    <section class="card countdown">
      ${termine.map(t => `
        <div class="row"><span>${esc(t.name)}<span class="muted small"> · ${datumDe(t.datum)}</span></span>
          <strong>${t.tage === 0 ? "heute!" : `noch ${t.tage} ${t.tage === 1 ? "Tag" : "Tage"}`}</strong></div>`).join("")}
    </section>`;
}
```
3. In `showStart()` den `render(` … `);`-Aufruf bis einschließlich `<div id="installSlot"></div>` ersetzen durch:
```js
  render(`
    <h1>${esc(TRAINER.name)}</h1>
    <p class="muted small">${esc(TRAINER.untertitel)}</p>
    ${countdownCard()}
    <p class="muted small">${QUESTIONS.length} Fragen · bearbeitet: ${seen} · gelernt: ${learned} · heute fällig: ${due}</p>
    ${dailyCard()}

    <nav class="menu">
      <button class="menu-item wide" data-go="pruefung"><strong>Prüfungssimulation</strong><span>Wie am Prüfungstag: Kundenauftrag pro Block, 60 Minuten, Note am Ende</span></button>
      <button class="menu-item" data-go="lernen"><strong>Spickzettel</strong><span>Das Wichtigste je Thema</span></button>
      <button class="menu-item" data-go="statistik"><strong>Statistik</strong><span>Fortschritt, Prüfungen, Sichern</span></button>
    </nav>
    ${progressCard(data)}

    <section class="card">
      <h3>Übungsrunde</h3>
      <div class="chips">
        ${CATEGORIES.map(c => `<button class="chip ${settings.cats[c] ? "on" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
      </div>
      <div class="row" style="margin-top:8px">
        <div>Adaptive Schwierigkeit<div class="muted small">passt sich deiner Leistung an</div></div>
        <label class="switch"><input type="checkbox" id="adaptive" ${settings.adaptive ? "checked" : ""}><span></span></label>
      </div>
      <div class="row" id="levelRow" style="${settings.adaptive ? "display:none" : ""}">
        <div style="width:100%">Feste Stufe
          <div class="segmented">
            ${[1, 2, 3].map(l => `<button data-level="${l}" class="${settings.level === l ? "on" : ""}">${LEVEL_NAMES[l]}</button>`).join("")}
          </div>
        </div>
      </div>
      <div class="row">
        <div>Zeitdruck<div class="muted small">${TIMER_SECONDS} Sekunden pro Aufgabe (nicht bei offenen Aufgaben)</div></div>
        <label class="switch"><input type="checkbox" id="timer" ${settings.timer ? "checked" : ""}><span></span></label>
      </div>
      <div class="row">
        <div>Anzahl Aufgaben</div>
        <div class="stepper">
          <button id="minus" aria-label="weniger">−</button>
          <output id="count">${settings.count}</output>
          <button id="plus" aria-label="mehr">+</button>
        </div>
      </div>
      <button class="btn" id="start">Übung starten</button>
      ${due ? `<button class="btn warn" id="faellig">Heute fällig: ${due} wiederholen</button>` : ""}
    </section>
    <div id="installSlot"></div>
  `);
```
Die Event-Handler danach (`on(".chip" …` bis `on("[data-go]" …`) bleiben unverändert.

- [ ] **Step 7: `kern/main.js`, Offline-Liste**

```js
// Einstiegspunkt: lädt alle Ansichten (sie melden sich selbst an) und zeigt den Start.
import { TRAINER } from "../inhalt/trainer.js";
import { go } from "./ui.js";
import "./start.js";
import "./uebung.js";
import "./lernen.js";
import "./meldungen.js";
import "./statistik.js";

document.title = TRAINER.name;
go("start");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
```
In `sw.js` → `FILES` ergänzen: `"inhalt/lernkarten.js", "kern/fragenansicht.js", "kern/karten.js", "kern/lernen.js", "kern/main.js", "kern/meldungen.js", "kern/start.js", "kern/statistik.js", "kern/uebung.js",`

- [ ] **Step 8: Tests und Browser-Check**

Run: `node tools/tests.js` → `Alle Tests bestanden.`
Dann die Vorschau starten (`preview_start` mit Name `trainer`, Port 8766) und prüfen:
1. Start zeigt Countdown („noch … Tage“ bis 27.11. und 29.01.), Menü, Übungsrunde.
2. Übung mit Bereich „Grundlagen“: Alle 5 Fragetypen tauchen auf (Anzahl 10), jeder lässt sich beantworten und markiert richtig/falsch; die offene Aufgabe zeigt die Musterlösung mit Häkchen.
3. Konsole ohne Fehler (`read_console_messages`, nur Fehler).
4. Bei 375 px Breite (`resize_window` mobile) gibt es kein horizontales Scrollen, die Auswahllisten passen.
5. „Prüfungssimulation“ zeigt den Hinweis „kommt bald“ (kommt in Task 8).

- [ ] **Step 9: Commit**

```bash
git add kern inhalt/lernkarten.js sw.js tools
git commit -m "Oberfläche: Start mit Countdown, Übung mit allen Fragetypen, Spickzettel, Melden, Statistik

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Prüfungssimulation mit Aufgabensätzen

**Files:**
- Create: `kern/pruefung-aufbau.js`, `kern/pruefung.js`
- Test: `tools/tests/pruefung-aufbau.test.js`
- Modify: `kern/main.js` (+ `import "./pruefung.js";`), `tools/tests.js` (+ `"pruefung-aufbau"`), `sw.js` (+ 2 Dateien)

**Interfaces:**
- Consumes: `chooseByHistory` (Task 5), `typVon` (Task 4), Bewertung (Task 3), `situationHtml/frageHtml` (Task 7), `renderSelbstbewertung` (Task 4).
- Produces:
  - `zufallsLevel(mix, r = Math.random()) → 1|2|3`
  - `waehleSatz(block, situationen, pool, zuletzt = {}) → satzId|null` (Satz des Bereichs, der am längsten nicht dran war; nie gespielte zuerst)
  - `baueBlock(block, mix, levelMix, pool, history, used, gen) → Frage[]` (nur Fragen ohne `situation`)
  - `bauePruefung(plan, auswahl, pool, situationen, history, gen, zuletzt = {}) → { schritte, index: 0, qIndex: 0 }`; Schritt Block: `{ typ: "block", id, name, kurz, fach, minuten, satz, fragen, eingaben, ende: null, fertig: false, selbstbewertet: false }`, Schritt Pause: `{ typ: "pause", minuten, ende: null }`. `gen = { has(cat), generate(cat, level) }`.
  - Gespeichert im Fortschritt: `data.pruefungen.push({ datum, variante, prozent, note, bloecke, faecher })`, `data.saetze[satzId] = datum`.

- [ ] **Step 1: Failing test**

`tools/tests/pruefung-aufbau.test.js`:
```js
import { ok, eq } from "./hilfe.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { zufallsLevel, waehleSatz, baueBlock, bauePruefung } from "../../kern/pruefung-aufbau.js";
import { typVon } from "../../kern/typen/index.js";

let nr = 0;
const f = (cat, typ, extra = {}) => {
  nr += 1;
  const basis = { id: `q${nr}`, cat, level: 1 + (nr % 3), typ, q: `Frage ${nr}`, explain: "x", src: "FW" };
  const daten = {
    mc: { opts: ["a", "b"], correct: 0 }, offen: { punkte: ["a", "b"] }, zahl: { loesung: 1, einheit: "V" },
    reihenfolge: { schritte: ["a", "b", "c"] }, zuordnung: { paare: [["a", "1"], ["b", "2"]] },
  }[typ];
  return { ...basis, ...daten, ...extra };
};
const viele = (cat, typ, n) => Array.from({ length: n }, () => f(cat, typ));

export default async function () {
  eq([zufallsLevel([0.25, 0.45, 0.3], 0.1), zufallsLevel([0.25, 0.45, 0.3], 0.5), zufallsLevel([0.25, 0.45, 0.3], 0.9)], [1, 2, 3], "zufallsLevel");

  const mix = TRAINER.pruefung.blockMix;
  const pool = [...viele("Diesel", "mc", 10), ...viele("Diesel", "offen", 12), ...viele("Diesel", "zuordnung", 6), ...viele("Diesel", "reihenfolge", 2)];
  const gen = { has: c => c === "Diesel", generate: (cat, level) => ({ ...f(cat, "zahl"), level, gen: true }) };
  const block = { cats: ["Diesel"] };

  const fragen = baueBlock(block, mix, [0.25, 0.45, 0.3], pool, {}, new Set(), gen);
  const anzahl = t => fragen.filter(q => q.typ === t).length;
  eq([anzahl("mc"), anzahl("zahl"), anzahl("reihenfolge"), anzahl("offen"), anzahl("zuordnung")], [4, 2, 1, 9, 5], "Mix mit Generator");
  eq(new Set(fragen.map(q => q.id)).size, fragen.length, "keine doppelten Fragen");

  const ohneGen = baueBlock(block, mix, [0.25, 0.45, 0.3], pool, {}, new Set(), null);
  eq(ohneGen.length, 21, "Auffüllen: fehlende Rechenaufgaben durch andere ersetzt");
  eq(new Set(ohneGen.map(q => q.id)).size, 21, "Auffüllen ohne Doppelte");
  eq(baueBlock(block, mix, [0.25, 0.45, 0.3], pool.slice(0, 3), {}, new Set(), null).length, 3, "kleiner Pool: nimmt was da ist");

  const situationen = { alt: { titel: "A", text: "x", cat: "Diesel" }, neu: { titel: "N", text: "y", cat: "Diesel" }, leer: { titel: "L", text: "z", cat: "Diesel" }, klima: { titel: "K", text: "k", cat: "Klima" } };
  const satzA = [3, 1, 2].map(n => f("Diesel", "offen", { situation: "alt", nr: n }));
  const satzN = [1, 2].map(n => f("Diesel", "mc", { situation: "neu", nr: n }));
  const poolMitSatz = [...pool, ...satzA, ...satzN];
  eq(waehleSatz(block, situationen, poolMitSatz, { alt: "2026-10-01 10:00", neu: "2026-10-20 10:00" }), "alt", "ältester Satz zuerst");
  eq(waehleSatz(block, situationen, poolMitSatz, { alt: "2026-10-01 10:00" }), "neu", "nie gespielter Satz zuerst");
  eq(waehleSatz({ cats: ["Bremse"] }, situationen, poolMitSatz, {}), null, "kein Satz im Bereich");

  const plan = TRAINER.pruefung;
  const ganz = bauePruefung(plan, null, poolMitSatz, situationen, {}, gen, { neu: "2026-10-20 10:00" });
  eq(ganz.schritte.map(s => s.typ), ["block", "block", "pause", "block", "block", "pause", "block"], "ganzer Tag mit Pausen");
  const diesel = ganz.schritte[0];
  eq([diesel.satz, diesel.fragen.map(q => q.nr)], ["alt", [1, 2, 3]], "Aufgabensatz in nr-Reihenfolge");
  ok(diesel.fragen.every(q => q.situation === "alt"), "Satz nur mit eigenen Fragen");

  const einzeln = bauePruefung(plan, ["diag1"], pool, situationen, {}, gen);
  eq(einzeln.schritte.length, 1, "Einzelblock ohne Pausen");
  ok(einzeln.schritte[0].satz === null && einzeln.schritte[0].fragen.length === 21, "ohne Satz: gemischter Block");
  ok(einzeln.schritte[0].fragen.every(q => !q.situation), "gemischter Block ohne Satz-Fragen");

  // Rundreise JSON (App geschlossen und wieder geöffnet)
  const s = einzeln.schritte[0];
  s.eingaben = s.fragen.map(q => ({ mc: 0, zahl: "1,0", reihenfolge: [0, 1, 2], zuordnung: ["1", "2"], offen: { text: "t", haken: [0], gezeigt: true } }[q.typ]));
  const kopie = JSON.parse(JSON.stringify(einzeln));
  kopie.schritte[0].fragen.forEach((q, i) => {
    eq(typVon(q).bewerte(q, kopie.schritte[0].eingaben[i]), typVon(q).bewerte(s.fragen[i], s.eingaben[i]), `Rundreise JSON ${q.typ}`);
  });
  console.log("✓ Prüfungsaufbau: Mix, Auffüllen, Aufgabensätze, Speichern");
}
```
`tools/tests.js`: `"pruefung-aufbau"` anhängen. Run → FAIL (Modul fehlt).

- [ ] **Step 2: `kern/pruefung-aufbau.js`**

```js
// Stellt eine Prüfung nach dem Prüfungsplan zusammen (ohne Oberfläche, damit testbar).
import { chooseByHistory } from "./auswahl.js";
import { typVon } from "./typen/index.js";

export function zufallsLevel(mix, r = Math.random()) {
  return r < mix[0] ? 1 : r < mix[0] + mix[1] ? 2 : 3;
}

// Aufgabensatz des Bereichs, der am längsten nicht dran war (nie gespielte zuerst)
export function waehleSatz(block, situationen, pool, zuletzt = {}) {
  const kandidaten = Object.entries(situationen)
    .filter(([id, s]) => block.cats.includes(s.cat) && pool.some(q => q.situation === id))
    .map(([id]) => id)
    .sort((a, b) => (zuletzt[a] || "").localeCompare(zuletzt[b] || ""));
  return kandidaten[0] || null;
}

// Gemischter Block nach blockMix; gen = { has(cat), generate(cat, level) } liefert fehlende Rechenaufgaben
export function baueBlock(block, mix, levelMix, pool, history, used, gen) {
  const imBereich = pool.filter(q => block.cats.includes(q.cat) && !q.situation);
  const fragen = [];
  let fehlend = 0;
  for (const [typ, anzahl] of Object.entries(mix)) {
    for (let i = 0; i < anzahl; i++) {
      const level = zufallsLevel(levelMix);
      const frei = imBereich.filter(q => (q.typ || "mc") === typ && !used.has(q.id));
      let q = null;
      if (frei.length) {
        const passend = frei.filter(x => x.level === level);
        q = chooseByHistory(passend.length ? passend : frei, history);
      } else if (typ === "zahl" && gen) {
        const cat = block.cats.find(c => gen.has(c));
        if (cat) q = gen.generate(cat, level);
      }
      if (q) { used.add(q.id); fragen.push(q); } else fehlend += 1;
    }
  }
  for (let i = 0; i < fehlend; i++) {
    const rest = imBereich.filter(q => !used.has(q.id));
    if (!rest.length) break;
    const q = chooseByHistory(rest, history);
    used.add(q.id);
    fragen.push(q);
  }
  return fragen;
}

// auswahl: null = ganzer Ablauf mit Pausen, sonst Liste von Block-IDs (ohne Pausen)
export function bauePruefung(plan, auswahl, pool, situationen, history, gen, zuletzt = {}) {
  const used = new Set();
  const schritte = [];
  for (const s of plan.ablauf) {
    if (s.pause) {
      if (!auswahl) schritte.push({ typ: "pause", minuten: s.pause, ende: null });
      continue;
    }
    if (auswahl && !auswahl.includes(s.id)) continue;
    const satz = waehleSatz(s, situationen, pool, zuletzt);
    const fragen = satz
      ? pool.filter(q => q.situation === satz).sort((a, b) => a.nr - b.nr)
      : baueBlock(s, plan.blockMix, plan.levelMix, pool, history, used, gen);
    fragen.forEach(q => used.add(q.id));
    schritte.push({
      typ: "block", id: s.id, name: s.name, kurz: s.kurz, fach: s.fach, minuten: s.minuten, satz,
      fragen, eingaben: fragen.map(q => typVon(q).neueEingabe(q)),
      ende: null, fertig: false, selbstbewertet: false,
    });
  }
  return { schritte, index: 0, qIndex: 0 };
}
```
Run `node tools/tests.js` → `✓ Prüfungsaufbau …`.

- [ ] **Step 3: `kern/pruefung.js` (Oberfläche)**

```js
// Prüfungssimulation nach dem Prüfungsplan in inhalt/trainer.js: Blöcke mit eigener Zeit,
// Pausen dazwischen, kein Zurückspringen, offene Aufgaben am Blockende selbst bewerten.
// Der Stand wird nach jeder Eingabe gespeichert – schließt iOS die App, geht es danach weiter.

import { QUESTIONS, SITUATIONEN } from "../inhalt/fragen.js";
import { TRAINER } from "../inhalt/trainer.js";
import { hasGenerator, generate } from "../inhalt/gen/index.js";
import { esc, fmt, nowStamp, formatDuration } from "./util.js";
import { render, on, startTick, stopTick, barColor, screen, go, toast } from "./ui.js";
import { loadProgress, saveProgress, recordAnswer } from "./speicher.js";
import { bauePruefung } from "./pruefung-aufbau.js";
import { frageHtml, situationHtml } from "./fragenansicht.js";
import { typVon } from "./typen/index.js";
import { renderSelbstbewertung } from "./typen/offen.js";
import { maxPunkte, punkteFuer, prozent, note, fachErgebnisse, bestehensCheck, zaehltRichtig } from "./bewertung.js";
import { cardForQuestion } from "./karten.js";
import { openCardOverlay } from "./lernen.js";
import { openReportOverlay } from "./meldungen.js";

const PLAN = TRAINER.pruefung;
const PP = TRAINER.punkteProTyp;
const LAUF_KEY = `${TRAINER.id}.laufendePruefung`;
let E = null; // laufende Prüfung

function speichern() {
  try { localStorage.setItem(LAUF_KEY, JSON.stringify(E)); } catch (e) { /* Speicher voll – Prüfung läuft im Arbeitsspeicher weiter */ }
}
function laden() {
  try { return JSON.parse(localStorage.getItem(LAUF_KEY)); } catch (e) { return null; }
}
function loeschen() {
  try { localStorage.removeItem(LAUF_KEY); } catch (e) { /* egal */ }
}

function showIntro() {
  const offen = laden();
  const bloecke = PLAN.ablauf.filter(s => !s.pause);
  const letzte = loadProgress().pruefungen.slice(-3).reverse();
  render(`
    <h2>Prüfungssimulation</h2>
    <section class="card"><ul class="hints">
      <li>Wie am Prüfungstag: ${bloecke.length} Blöcke à 60 Minuten mit Pausen dazwischen. Jeder Block ist ein Kundenauftrag mit aufeinander aufbauenden Aufgaben.</li>
      <li>Kein Zurückspringen. Unbeantwortet gibt 0 Punkte.</li>
      <li>Offene Aufgaben bewertest du am Blockende selbst anhand der Musterlösung – ehrlich bleiben.</li>
      <li>${esc(TRAINER.hinweis)}</li>
    </ul></section>
    ${offen ? `
      <section class="card"><h3>Angefangene Prüfung</h3>
        <p class="small muted">${esc(offen.variante)} · gestartet ${esc(offen.start)}</p>
        <div class="btn-row"><button class="btn" id="weiter">Fortsetzen</button><button class="btn secondary" id="verwerfen">Verwerfen</button></div>
      </section>` : ""}
    <button class="menu-item wide" data-start="alle" style="width:100%;margin-top:10px">
      <strong>${esc(PLAN.name)}</strong><span>${bloecke.map(b => esc(b.kurz)).join(" · ")} · ca. 5 ½ Stunden mit Pausen</span>
    </button>
    ${bloecke.map(b => `
      <button class="menu-item wide" data-start="${b.id}" style="width:100%;margin-top:8px">
        <strong>${esc(b.name)}</strong><span>Einzelner Block · ${b.minuten} Minuten</span>
      </button>`).join("")}
    ${letzte.length ? `<section class="card"><h3>Letzte Ergebnisse</h3>${letzte.map(x => `<p>${esc(x.datum)} · ${esc(x.variante)}: <strong>${x.prozent} % · Note ${x.note}</strong></p>`).join("")}</section>` : ""}
    <button class="btn ghost" id="back">Zurück</button>`);
  on("[data-start]", "click", e => {
    if (offen && !confirm("Die angefangene Prüfung wird verworfen. Neu starten?")) return;
    starte(e.currentTarget.dataset.start);
  });
  on("#weiter", "click", () => { E = offen; showSchritt(); });
  on("#verwerfen", "click", () => { loeschen(); showIntro(); });
  on("#back", "click", () => go("start"));
}

function starte(id) {
  const data = loadProgress();
  E = bauePruefung(PLAN, id === "alle" ? null : [id], QUESTIONS, SITUATIONEN, data.fragen, { has: hasGenerator, generate }, data.saetze);
  E.variante = id === "alle" ? PLAN.name : PLAN.ablauf.find(s => s.id === id).name;
  E.start = nowStamp().slice(0, 16);
  speichern();
  showSchritt();
}

function showSchritt() {
  stopTick();
  const s = E.schritte[E.index];
  if (!s) { showErgebnis(); return; }
  if (s.typ === "pause") { showPause(s); return; }
  if (s.fertig) { blockAbschluss(s); return; }
  if (s.ende === null) { showBlockIntro(s); return; }
  if (Date.now() >= s.ende) { blockZuEnde(s, true); return; }
  showFrage(s);
}

function weiter() {
  E.index += 1;
  E.qIndex = 0;
  speichern();
  showSchritt();
}

function showPause(s) {
  if (!s.ende) { s.ende = Date.now() + s.minuten * 60000; speichern(); }
  render(`
    <h2>Pause</h2>
    <p class="muted">${s.minuten} Minuten wie am Prüfungstag – aufstehen, trinken, durchatmen.</p>
    <div class="big" id="clock"></div>
    <button class="btn" id="skip">Pause beenden</button>`);
  const tick = () => {
    const left = Math.max(0, Math.round((s.ende - Date.now()) / 1000));
    const el = document.getElementById("clock");
    if (!el) return;
    el.textContent = formatDuration(left);
    if (left <= 0) weiter();
  };
  tick();
  startTick(tick, 1000);
  on("#skip", "click", weiter);
}

function showBlockIntro(s) {
  const max = s.fragen.reduce((sum, q) => sum + maxPunkte(q, PP), 0);
  render(`
    <div class="cat">${esc(PLAN.faecher[s.fach] || "")}</div>
    <h2>${esc(s.name)}</h2>
    <p class="muted">${s.fragen.length} Aufgaben · ${max} Punkte · ${s.minuten} Minuten · kein Zurückspringen</p>
    ${s.satz ? situationHtml(s.satz) : ""}
    <section class="card"><p class="small">${esc(TRAINER.hinweis)} Stift und Papier für Nebenrechnungen bereitlegen.</p></section>
    <button class="btn" id="go">Block starten – die Zeit läuft</button>`);
  on("#go", "click", () => {
    s.ende = Date.now() + s.minuten * 60000;
    E.qIndex = 0;
    speichern();
    showFrage(s);
  });
}

function showFrage(s) {
  const q = s.fragen[E.qIndex];
  const t = typVon(q);
  const last = E.qIndex === s.fragen.length - 1;
  render(`
    <div class="qhead">
      <span><strong>${esc(s.kurz)}</strong> · Aufgabe ${E.qIndex + 1}/${s.fragen.length} · ${maxPunkte(q, PP)} P.</span>
      <span id="clock" class="badge"></span>
    </div>
    <div class="progress" style="margin-top:8px"><div id="bar"></div></div>
    ${frageHtml(q, { kompakteSituation: true })}
    <button class="btn" id="nextQ"></button>
    <button class="btn ghost" id="abort">Prüfung unterbrechen</button>`);
  const nextBtn = document.getElementById("nextQ");
  const label = () => {
    const done = t.beantwortet(q, s.eingaben[E.qIndex]);
    nextBtn.textContent = last ? (done ? "Block abschließen" : "Ohne Antwort abschließen") : (done ? "Weiter" : "Überspringen");
  };
  t.render(q, document.getElementById("antwort"), {
    modus: "pruefung",
    eingabe: s.eingaben[E.qIndex],
    onEingabe: e => { s.eingaben[E.qIndex] = e; speichern(); label(); },
  });
  label();
  on("#nextQ", "click", () => {
    if (last) blockZuEnde(s, false);
    else { E.qIndex += 1; speichern(); showFrage(s); }
  });
  on("#abort", "click", () => {
    if (confirm("Prüfung unterbrechen? Unter „Prüfungssimulation“ kannst du weitermachen – die Zeit läuft aber weiter.")) go("start");
  });
  const tick = () => {
    const left = Math.max(0, Math.round((s.ende - Date.now()) / 1000));
    const clock = document.getElementById("clock");
    if (!clock) return;
    clock.textContent = `⏱ ${formatDuration(left)}`;
    clock.style.color = left <= 300 ? "var(--bad)" : "";
    document.getElementById("bar").style.width = `${(left / (s.minuten * 60)) * 100}%`;
    if (left <= 0) blockZuEnde(s, true);
  };
  tick();
  startTick(tick, 1000);
}

function blockZuEnde(s, zeitUm) {
  stopTick();
  if (zeitUm) toast(`Zeit für „${s.kurz}“ ist abgelaufen`);
  s.fertig = true;
  speichern();
  blockAbschluss(s);
}

// Nach dem Block: offene Aufgaben selbst bewerten, dann weiter
function blockAbschluss(s) {
  const offene = s.fragen.map((q, i) => ({ q, i })).filter(({ q }) => (q.typ || "mc") === "offen");
  if (!offene.length || s.selbstbewertet) { weiter(); return; }
  render(`
    <h2>Selbstbewertung: ${esc(s.kurz)}</h2>
    <p class="muted small">Vergleiche deine Antworten mit der Musterlösung und hake ab, was du inhaltlich genannt hast. Ohne geschriebene Antwort gibt es 0 Punkte.</p>
    ${offene.map(({ i }) => `<section class="card" id="sb${i}"></section>`).join("")}
    <button class="btn" id="ok">Bewertung übernehmen</button>`);
  for (const { q, i } of offene) {
    renderSelbstbewertung(q, document.getElementById(`sb${i}`), s.eingaben[i], e => { s.eingaben[i] = e; speichern(); });
  }
  on("#ok", "click", () => { s.selbstbewertet = true; weiter(); });
}

function auswerten() {
  const bloecke = E.schritte.filter(s => s.typ === "block").map(s => {
    let erreicht = 0, max = 0;
    const anteile = s.fragen.map((q, i) => {
      const anteil = typVon(q).bewerte(q, s.eingaben[i]);
      erreicht += punkteFuer(q, anteil, PP);
      max += maxPunkte(q, PP);
      return anteil;
    });
    erreicht = Math.round(erreicht * 10) / 10;
    const p = prozent(erreicht, max);
    return { name: s.name, kurz: s.kurz, fach: s.fach, satz: s.satz, erreicht, max, prozent: p, note: note(p, TRAINER.notenschluessel).note, anteile };
  });
  const faecher = fachErgebnisse(bloecke, PLAN.faecher, TRAINER.notenschluessel);
  const erreicht = bloecke.reduce((x, b) => x + b.erreicht, 0);
  const max = bloecke.reduce((x, b) => x + b.max, 0);
  const p = prozent(erreicht, max);
  const vollerTag = faecher.length === Object.keys(PLAN.faecher).length;
  return { bloecke, faecher, erreicht, max, prozent: p, note: note(p, TRAINER.notenschluessel), check: vollerTag ? bestehensCheck(faecher, PLAN.bestehen) : null };
}

function showErgebnis() {
  stopTick();
  if (!E.ergebnis) {
    E.ergebnis = auswerten();
    const R = E.ergebnis;
    E.schritte.filter(s => s.typ === "block").forEach((s, b) => {
      s.fragen.forEach((q, i) => recordAnswer(q, zaehltRichtig(R.bloecke[b].anteile[i])));
    });
    const data = loadProgress();
    const datum = nowStamp().slice(0, 16);
    data.pruefungen.push({
      datum, variante: E.variante, prozent: R.prozent, note: R.note.note,
      bloecke: R.bloecke.map(({ anteile, ...rest }) => rest),
      faecher: R.faecher,
    });
    R.bloecke.forEach(b => { if (b.satz) data.saetze[b.satz] = datum; });
    saveProgress(data);
    loeschen();
  }
  const R = E.ergebnis;
  render(`
    <h2 class="center">Prüfung beendet</h2>
    <div class="big">${R.prozent} %</div>
    <p class="center muted">${fmt(R.erreicht, 1)} von ${R.max} Punkten · Note ${R.note.note} (${esc(R.note.text)}) · ${esc(E.variante)}</p>
    <section class="card"><h3>Blöcke</h3>
      ${R.bloecke.map(b => `
        <div class="bar-row"><span>${esc(b.kurz)}</span>
          <div class="bar"><div style="width:${b.prozent}%;background:${barColor(b.prozent)}"></div></div>
          <span class="bar-val">${b.prozent} % · ${b.note}</span></div>`).join("")}
    </section>
    ${R.faecher.length > 1 ? `<section class="card"><h3>Prüfungsbereiche</h3>${R.faecher.map(f => `<p>${esc(f.name)}: <strong>${f.prozent} % · Note ${f.note} (${esc(f.text)})</strong></p>`).join("")}</section>` : ""}
    ${R.check ? `
      <section class="card"><h3>Bestehensregel (schriftlich)</h3>
        <p class="${R.check.bestanden ? "trend-up" : "trend-down"}"><strong>${R.check.bestanden ? "Die schriftlichen Bereiche würden reichen." : "So würde es schriftlich nicht reichen:"}</strong></p>
        ${R.check.gruende.map(g => `<p class="small">${esc(g)}</p>`).join("")}
        <p class="small muted">Zum Bestehen zählen außerdem der Kundenauftrag (mindestens ausreichend) und das Gesamtergebnis von Teil 2 – das prüft die App nicht.</p>
      </section>` : ""}
    <button class="btn" id="review">Aufgaben durchgehen</button>
    <button class="btn secondary" id="home">Zum Start</button>`);
  on("#review", "click", () => showReview(true));
  on("#home", "click", () => go("start"));
}

function showReview(nurFehler) {
  const items = [];
  E.schritte.filter(s => s.typ === "block").forEach((s, b) => s.fragen.forEach((q, i) => {
    const anteil = E.ergebnis.bloecke[b].anteile[i];
    if (!nurFehler || anteil < 1) items.push({ s, q, e: s.eingaben[i], anteil });
  }));
  render(`
    <h2>Durchsicht</h2>
    <div class="segmented" style="margin-bottom:12px">
      <button id="fWrong" class="${nurFehler ? "on" : ""}">Nur Fehler</button>
      <button id="fAll" class="${nurFehler ? "" : "on"}">Alle Aufgaben</button>
    </div>
    ${items.length ? items.map(({ s, q, e, anteil }, idx) => {
      const t = typVon(q);
      const karte = cardForQuestion(q);
      return `
        <section class="card">
          <div class="cat">${esc(s.kurz)} · ${fmt(punkteFuer(q, anteil, PP), 1)} / ${maxPunkte(q, PP)} P.</div>
          <p><strong>${esc(q.q)}</strong></p>
          <p class="${anteil >= 1 ? "trend-up" : "trend-down"} small">Deine Antwort: ${esc(t.antwortText(q, e))}</p>
          ${anteil >= 1 ? "" : `<p class="trend-up small">Lösung: ${esc(t.loesungText(q))}</p>`}
          <p class="small">${esc(q.explain)}</p>
          <div class="feedback-actions">
            ${karte ? `<button class="link" data-card="${idx}">📖 Spickzettel: ${esc(karte.title)}</button>` : ""}
            <button class="link muted-link" data-report="${idx}">⚑ Frage melden</button>
          </div>
        </section>`;
    }).join("") : `<p class="center trend-up">Alles richtig – stark!</p>`}
    <button class="btn" id="back">Zur Auswertung</button>`);
  on("#fWrong", "click", () => showReview(true));
  on("#fAll", "click", () => showReview(false));
  on("#back", "click", showErgebnis);
  on("[data-card]", "click", ev => openCardOverlay(cardForQuestion(items[Number(ev.currentTarget.dataset.card)].q)));
  on("[data-report]", "click", ev => {
    const btn = ev.currentTarget;
    const { q, e } = items[Number(btn.dataset.report)];
    openReportOverlay(q, e, () => { btn.textContent = "⚑ Gemeldet"; btn.disabled = true; });
  });
}

screen("pruefung", showIntro);
```
In `kern/main.js` nach `import "./uebung.js";` ergänzen: `import "./pruefung.js";`
In `sw.js` → `FILES`: `"kern/pruefung-aufbau.js", "kern/pruefung.js",`

- [ ] **Step 4: Tests und Browser-Check**

Run: `node tools/tests.js` → `Alle Tests bestanden.`
Im Browser (Vorschau `trainer`):
1. Prüfungssimulation → Block „Grundlagen“ gibt es nicht. Deshalb vorübergehend in der Konsole `localStorage` leeren und den Block „Diesel“ starten: Er wird mit Generator-Aufgaben aufgefüllt (noch kaum Diesel-Fragen), zeigt Uhr, Punkte pro Aufgabe und „Überspringen“/„Weiter“.
2. Mitten im Block die Seite neu laden → „Angefangene Prüfung · Fortsetzen“ erscheint, die Restzeit stimmt, die Eingaben sind noch da.
3. Block abschließen → Ergebnis mit Prozent, Note, Durchsicht. Hinweis: Mit 2 von 3 Fächern erscheint keine Bestehensregel (nur beim ganzen Tag).
4. Konsole ohne Fehler.

- [ ] **Step 5: Commit**

```bash
git add kern sw.js tools
git commit -m "Prüfungssimulation: Aufgabensätze, Zeit pro Block, Pausen, Selbstbewertung, Note und Bestehensregel

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Gemeinsame Regeln für die Inhalts-Tasks 9–15

Diese Regeln gelten für jede Inhalts-Aufgabe. Wer einen Inhalts-Task bearbeitet, liest sie zuerst.

**Quellen (Feld `src`):** `"FK 342"` (Fachkundebuch, Seite), `"TB 277"` (Tabellenbuch), `"Prüfung Schule"` (nur das *Format* nachgebaut, nie den Text), `"Netz: <Quelle>"`, `"FW"` (Fachwissen, noch nicht mit Buch abgeglichen). Faktenbasis: `docs/recherche/2026-10-26-gp2-winter-2026-27.md` (Abschnitt 3 und 3.6) und die lokalen Notizen in `material/notizen/`. Regel aus 3.6: ✅ darf rein. ⚠️ nur ohne feste Zahl oder als Tabellenbuch-Frage (`"tb": True`). 🆕 nur mit Jahreszahl im Fragetext.

**Urheberrecht:** Fragen, Musterlösungen und Erklärungen in eigenen Worten formulieren, kein Satz aus Buch oder Prüfung übernehmen. Ein anderes Fahrzeug und ein anderer Fehler als in der Schulprüfung (dort: Passat 2.0 TDI, ZME defekt).

**Stil wie in der echten Prüfung:** Sie-Form, Operatoren „Nennen Sie …“, „Beschreiben Sie …“, „Ergänzen Sie die Tabelle“, „Ordnen Sie zu“, „Beurteilen Sie das Messergebnis“. Einheiten gemischt (MPa und bar, Ω, V, A, %). Offene Aufgaben haben 2–6 Stichpunkte in `punkte`, je Stichpunkt eine prüfbare Aussage. Tabellenaufgaben („Prüfung → Messgerät → Messpunkte → Sollwert“) werden zu `offen` (eine Zeile = ein Stichpunkt) oder zu `zuordnung`.

**Aufgabensatz:** `SITUATIONEN = {"<id>": {"titel": "Kundenauftrag: …", "text": "<Fahrzeug, Baujahr, Motorcode/Ausstattung> – Kunde beanstandet: „…“", "cat": "<Bereich>"}}`, 15–21 Aufgaben mit `"situation": "<id>", "nr": 1 … n`, die vom Erkennen über Prüfen und Messen bis zur Instandsetzung und den Abschlussarbeiten aufeinander aufbauen. Summe `pkt` 60–100.

**Typ-Mix pro Bereich (Test prüft das):** `mc` ≤ 30 %, `offen` ≥ 30 %, `zuordnung` ≥ 15 %, mindestens 1 `reihenfolge`. Level: ca. 25 % 1, 45 % 2, 30 % 3.

**SVG-Bilder (`inhalt/bilder/*.svg`):** Selbst gezeichnet, `viewBox` ca. `0 0 640 400`, weiße Fläche, Linien `#1a1a1a` 2 px, Schrift `font-family="Arial, sans-serif"` 14–16 px, Nummern in Kreisen (r = 11) für Zuordnungsfragen, DIN-Schaltzeichen (Widerstand = Rechteck, Magnetventil = Rechteck mit Schrägstrich + Ventilsymbol, Sensor = Rechteck mit p/U). Keine Fotos, keine Logos, keine Nachzeichnung einer Buchgrafik in Linienführung und Beschriftung. Jedes neue SVG in `sw.js` eintragen.

**Ablauf jedes Inhalts-Tasks:**
1. In `tools/tests/inhalt.test.js` → `MINDEST` die Zeile des Bereichs eintragen.
2. `node tools/tests.js` → muss fehlschlagen (zu wenige Fragen).
3. Inhalte schreiben.
4. `python tools/export.py` (zeigt die Statistik) → `python tools/export.py --check` → `node tools/tests.js` → grün.
5. Im Browser 5 Fragen des Bereichs und einen Simulationsblock durchklicken, Bild lesbar auf 375 px Breite.
6. Commit.

---

### Task 9: Spickzettel und Inhalts-Test

**Files:**
- Modify: `inhalt/lernkarten.js`
- Test: `tools/tests/inhalt.test.js`
- Modify: `tools/tests.js` (+ `"inhalt"`)

**Interfaces:**
- Consumes: `QUESTIONS, SITUATIONEN`, `TRAINER`, `CARDS, cardForQuestion`, `typVon`.
- Produces: `MINDEST`-Tabelle, die die Tasks 10–15 füllen.

- [ ] **Step 1: Test anlegen**

`tools/tests/inhalt.test.js`:
```js
import { fail, ok } from "./hilfe.js";
import { QUESTIONS, SITUATIONEN } from "../../inhalt/fragen.js";
import { TRAINER } from "../../inhalt/trainer.js";
import { CARDS, cardForQuestion } from "../../kern/karten.js";
import { typVon } from "../../kern/typen/index.js";

// Mindestumfang je Bereich – jeder Inhalts-Task trägt hier seinen Bereich ein
const MINDEST = {
  Grundlagen: { fragen: 5, saetze: 0, karten: 1 },
};

export default async function () {
  for (const q of QUESTIONS) {
    if (!TRAINER.bereiche.includes(q.cat)) fail(`Frage ${q.id}: Bereich ${q.cat} fehlt in TRAINER.bereiche`);
    try { typVon(q); } catch (e) { fail(`Frage ${q.id}: ${e.message}`); }
  }
  for (const cat of TRAINER.bereiche) {
    if (QUESTIONS.some(q => q.cat === cat) && !cardForQuestion({ cat, q: "", explain: "" })) fail(`Kein Spickzettel für Bereich ${cat}`);
  }
  for (const c of CARDS) ok(TRAINER.bereiche.includes(c.cat) && c.keys.length >= 3 && c.html.length > 200, `Karte ${c.id}: Bereich, ≥ 3 keys, Inhalt`);
  for (const [cat, m] of Object.entries(MINDEST)) {
    const qs = QUESTIONS.filter(q => q.cat === cat);
    const anzahl = t => qs.filter(q => (q.typ || "mc") === t).length;
    ok(qs.length >= m.fragen, `${cat}: ${qs.length} Fragen, mindestens ${m.fragen} nötig`);
    ok(Object.values(SITUATIONEN).filter(s => s.cat === cat).length >= m.saetze, `${cat}: weniger als ${m.saetze} Aufgabensätze`);
    ok(CARDS.filter(c => c.cat === cat).length >= m.karten, `${cat}: weniger als ${m.karten} Spickzettel`);
    if (m.fragen >= 30) {
      ok(anzahl("mc") <= qs.length * 0.3, `${cat}: zu viel Multiple Choice (${anzahl("mc")} von ${qs.length})`);
      ok(anzahl("offen") >= qs.length * 0.3, `${cat}: zu wenig offene Aufgaben (${anzahl("offen")})`);
      ok(anzahl("zuordnung") >= qs.length * 0.15, `${cat}: zu wenig Zuordnungen (${anzahl("zuordnung")})`);
      ok(anzahl("reihenfolge") >= 1, `${cat}: keine Reihenfolge-Aufgabe`);
    }
    for (const [sid] of Object.entries(SITUATIONEN).filter(([, s]) => s.cat === cat)) {
      const satz = qs.filter(q => q.situation === sid);
      const pkt = satz.reduce((s, q) => s + (q.pkt ?? TRAINER.punkteProTyp[q.typ || "mc"]), 0);
      ok(satz.length >= 15 && satz.length <= 21, `${cat}/${sid}: ${satz.length} Aufgaben (15–21)`);
      ok(pkt >= 60 && pkt <= 100, `${cat}/${sid}: ${pkt} Punkte (60–100)`);
    }
  }
  console.log(`✓ Inhalt: ${QUESTIONS.length} Fragen, ${Object.keys(SITUATIONEN).length} Aufgabensätze, ${CARDS.length} Spickzettel`);
}
```
`tools/tests.js`: `"inhalt"` anhängen. In `MINDEST` zusätzlich eintragen (damit der Test fehlschlägt, bis die Karten da sind):
```js
  Diesel: { fragen: 0, saetze: 0, karten: 5 },
  Bremse: { fragen: 0, saetze: 0, karten: 4 },
  Klima: { fragen: 0, saetze: 0, karten: 4 },
  Airbag: { fragen: 0, saetze: 0, karten: 4 },
  WiSo: { fragen: 0, saetze: 0, karten: 4 },
```
Und bei Grundlagen `karten: 2`.
Run: `node tools/tests.js` → FAIL (zu wenige Spickzettel).

- [ ] **Step 2: 22 Karten schreiben**

In `inhalt/lernkarten.js` an `CARDS` anhängen, im Format der Karte „messen“ (HTML mit `<h4>`, `<ul>`, `<table class="ktable">`, kurz, max. ca. 15 Zeilen pro Karte, eigene Worte). Pflichtinhalte:

| id | cat | title | keys (mind.) | Muss enthalten |
|---|---|---|---|---|
| `cr-aufbau` | Diesel | Common-Rail: Aufbau und Drücke | Rail, Niederdruck, Hochdruck, Rücklauf, Vorförderpumpe | Druckbereiche (Saug −0,2…−0,4 bar, Vorförder 2,5…5 bar, Rücklauf, Hochdruck bis ca. 2500 bar Pkw = 250 MPa), Bauteile je Kreis, „Druckerzeugung und Einspritzung getrennt“, 1 MPa = 10 bar |
| `cr-regelung` | Diesel | Druckregelung: ZME und DRV | Zumesseinheit, ZME, Druckregelventil, DRV, Zweisteller, Druckbegrenzungsventil | 3 Regelungsarten; Zweisteller: Start nur DRV, LL/Teillast/Schub beide, hohe Last nur ZME; ZME stromlos offen, PWM masseseitig; DRV ohne Strom ca. 100 bar; DBV ein-/zweistufig |
| `cr-injektor` | Diesel | Injektoren: Magnetventil und Piezo | Injektor, Magnetventil, Piezo, Anzugsstrom, Haltestrom, IMA | Ablauf Öffnen/Schließen (Abfluss-/Zulaufdrossel, Ventilsteuerraum); MV: 70–100 V Booster, Anzug ca. 18–20 A, Halten ca. 10–13 A; Piezo 110–150 V, Kondensator; IMA-Code; Piezo stehend lagern, Stecker nicht bei laufendem Motor ziehen |
| `cr-diagnose` | Diesel | Diagnose: Sensoren, Notlauf, Testerfunktionen | Raildrucksensor, Mengenvergleich, Rücklaufmenge, Kompressionstest, Notlauf | Raildrucksensor 5 V / 0,5–4,5 V, < 0,25 V oder > 4,75 V = Defekt; Fahrpedalgeber 2 Geber → erhöhte LL; NW-Sensor → kein Neustart; Mengenvergleich +/−; Rücklaufmenge max. 3× kleinste; dyn. Kompressionstest ±7 1/min; Hochdrucktest |
| `scr` | Diesel | AdBlue und SCR | AdBlue, SCR, Harnstoff, NOx, Sperrkatalysator, Dosierventil | 32,5 % Harnstoff, ca. −11 °C, WGK 1, greift Lack/Metalle an, > 60 °C Zersetzung; Reihenfolge Oxi-Kat → DPF → NOx-Sensor 1 → Dosierventil → Mischer/Hydrolysestrecke → SCR → NOx-Sensor 2 → Sperrkat; Reaktion ab ca. 170 °C; Leitungen werden nach Motor-Aus leergesaugt; Restreichweite/Startsperre |
| `epb` | Bremse | Elektrische Parkbremse | EPB, Parkbremse, Servicemodus, Stellmotor, Auto-Hold | Bauarten, Funktionen, Belagwechsel nur im Servicemodus, danach Grundeinstellung/Anlernen, Notlösen, dynamische Notbremsung über ESP |
| `esp` | Bremse | ABS/ASR/ESP | ESP, ABS, Raddrehzahlsensor, Gierrate, Lenkwinkelsensor, Hydroaggregat | Sensoren und ihre Aufgabe, aktive vs. passive Raddrehzahlsensoren, Regelphasen Druck halten/abbauen/aufbauen, Über-/Untersteuern, Lenkwinkelsensor nach Spureinstellung kalibrieren |
| `bremsfluessigkeit` | Bremse | Bremsflüssigkeit | DOT, Siedepunkt, hygroskopisch, Nass-Siedepunkt | Tabelle DOT 3/4/5.1 (205/230/260 °C, nass 140/155/180 °C), 3,5 % Wasser, DOT 5 Silikon nicht mischen, Wechsel nach Herstellervorgabe (meist 2 Jahre) |
| `bremse-rechnen` | Bremse | Bremse rechnen und prüfen | Abbremsung, Bremsenprüfstand, Übersetzung, Kraft, Druck | p = F/A, F2 = F1 × (d2/d1)², Abbremsung z = ΣF ÷ (m × g) × 100 %, Grenzwerte „aus dem Tabellenbuch“ (ohne Zahl) |
| `klima-kreislauf` | Klima | Kältekreislauf | Verdichter, Kondensator, Verdampfer, Expansionsventil, Trockner | Bauteile in Flussrichtung, Hoch-/Niederdruckseite, Aggregatzustände, Drosselrohr vs. Expansionsventil, Sammler vs. Akkumulator |
| `klima-kaeltemittel` | Klima | Kältemittel und Öle | R1234yf, R134a, PAG, POE, Kältemittelöl | GWP, A2L, nicht mischen, PAG hygroskopisch für R134a, PAG YF für beide, POE nicht leitend für E-Kompressoren, Öle sind gefährlicher Abfall |
| `klima-service` | Klima | Klimaservice | Klimaservicegerät, Absaugen, Evakuieren, Befüllen, Lecksuche | Ablauf Absaugen → Öl/Recycling → Evakuieren (Vakuum halten = Dichtheit) → Öl/UV → Befüllen nach Gewicht; Lecksuche UV/elektronisch/Formiergas |
| `klima-recht` | Klima | Klima: Vorschriften und Sicherheit | Sachkunde, F-Gase, Verordnung, Schutzbrille | Sachkundenachweis, kein Ablassen, Dokumentation, neue ChemKlimaschutzV seit 17.04.2026 (Auffrischung bis 12.03.2029), Kältemittel schwerer als Luft (Grube), Erfrierungen |
| `airbag-aufbau` | Airbag | Airbag: Aufbau und Funktion | Airbag, Gasgenerator, Gurtstraffer, Steuergerät, Crashsensor | Komponenten, Ablauf in ms, mind. 2 Crash-Signale, Energiereserve, Kontrollleuchte Selbsttest, Crashsignal an andere Systeme |
| `airbag-sicherheit` | Airbag | Arbeiten am Airbag | Batterie, Wartezeit, ablegen, Polster, Kurzschlussbrücke | Zündung aus → Batterie ab → Wartezeit nach Herstellerangabe → entladen; Polsterseite nach oben ablegen/vom Körper weg tragen; keine Wärme; nie mit Multimeter an Zündpille messen |
| `airbag-recht` | Airbag | Airbag: Recht, Lagerung, Entsorgung | Sprengstoff, P1, Fachkunde, Lagerung, Entsorgung | P1-Gegenstände, eingeschränkte Fachkunde/Schulung, Anzeige bei der Behörde, Lagerung nach LR 240, nicht in den Hausmüll, nach Auslösung Teile + Steuergerät ersetzen |
| `airbag-diagnose` | Airbag | Airbag: Diagnose | Fehlerspeicher, Zündkreis, Widerstand, Prüfadapter, Wickelfeder | Fehlerspeicher/Messwerte mit Tester, Ersatzwiderstand/Prüfadapter, typische Fehler (Stecker Sitz, Wickelfeder), Codierung neues Steuergerät |
| `tarif` | WiSo | Tarifvertrag | Tarifvertrag, Tarifautonomie, Streik, Urabstimmung, Friedenspflicht | Art. 9 Abs. 3 GG, Tarifpartner, Mantel- vs. Entgelttarif, Ablauf mit 75 %/25 %, Friedenspflicht, Günstigkeitsprinzip, Kfz-Tarif Bayern 2025 (+3,3 % ab 08/2026) |
| `sozialversicherung` | WiSo | Sozialversicherungen 2026 | Rentenversicherung, Krankenversicherung, Pflege, Arbeitslosen, Unfall | 5 Zweige + Träger + Beitragssätze 2026 + Aufteilung, Unfallversicherung nur AG, Prinzipien, Rentenpaket 2025 (48 % bis 2031), Aktivrente |
| `wahl` | WiSo | Wahlen und Kommunalwahl | Wahlgrundsätze, Kommunalwahl, Kumulieren, Panaschieren, Bürgermeister | 5 Wahlgrundsätze, Kommunalwahl Bayern 08.03.2026, 6 Jahre, ab 18, Kumulieren bis 3 Stimmen, Panaschieren, Stichwahl, Bundestag 630 Sitze/keine Überhangmandate/Grundmandatsklausel |
| `konjunktur` | WiSo | Konjunktur und Wirtschaftspolitik | Konjunktur, BIP, Magisches Viereck, Aufschwung, Rezession, EZB | 4 Phasen + Indikatoren, BIP real 2025 +0,2 %, magisches Viereck (StabG 1967) + Vieleck, Zielkonflikte, nachfrage- vs. angebotsorientiert, EZB-Ziel 2 % |
| `einheiten` | Grundlagen | Einheiten umrechnen | MPa, bar, Prozent, Tastverhältnis | 1 MPa = 10 bar = 1 N/mm²; 1 bar = 10 N/cm²; Tastverhältnis = Einschaltzeit ÷ Periodendauer × 100 % |

- [ ] **Step 3: Tests, Commit**

Run: `node tools/tests.js` → `✓ Inhalt: … 23 Spickzettel`.
```bash
git add inhalt/lernkarten.js tools
git commit -m "Spickzettel für alle Prüfungsbereiche und Inhalts-Test

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 10: Diesel – Aufgabensatz, Einzelfragen, 2 SVGs

**Files:**
- Create: `inhalt/fragen/diesel.py`, `inhalt/bilder/cr-anlage.svg`, `inhalt/bilder/raildruck-kennlinie.svg`
- Modify: `tools/tests/inhalt.test.js` (`MINDEST.Diesel = { fragen: 40, saetze: 1, karten: 5 }`), `sw.js` (+ 2 SVG), `inhalt/fragen.js` (erzeugt)

**Bilder:**
- `cr-anlage.svg`: Schema einer Zweisteller-Anlage mit Nummern ①–⑪: Tank mit Vorförderpumpe ①, Kraftstofffilter ②, Niederdruck-Temperatur-/Druckgeber ③, Hochdruckpumpe ④ mit Zumesseinheit ⑤, Hochdruckleitung, Rail ⑥, Raildrucksensor ⑦, Druckregelventil ⑧, 4 Injektoren ⑨, Rücklaufleitung ⑩, Kraftstoffkühler ⑪. Leitungsarten durch Strichart unterscheiden (Niederdruck durchgezogen, Hochdruck doppelt/dick, Rücklauf gestrichelt) und eine Legende.
- `raildruck-kennlinie.svg`: Diagramm x = Raildruck 0–200 MPa (Raster alle 20), y = Spannung 0–5 V (Raster 0,5), Gerade von (0 MPa; 0,5 V) bis (200 MPa; 4,5 V).

**Aufgabensatz `cr-octavia`** – Titel „Kundenauftrag: Ruckeln und Leistungsverlust“, Text „Skoda Octavia 2.0 TDI, Baujahr 2020, Common-Rail mit Magnetventil-Injektoren, Zweisteller-Regelung, SCR-Katalysator. Kunde beanstandet: „Der Motor ruckelt im Leerlauf, nimmt schlecht Gas an und die Motorkontrollleuchte ist an.““ Fehlerbild: Injektor Zylinder 3 innen undicht.

| nr | typ | pkt | Inhalt (Lösungskern) |
|---|---|---|---|
| 1 | offen | 2 | Gemischbildungsart nennen + Hauptmerkmal (CR-Direkteinspritzung; Druckerzeugung und Einspritzung getrennt) |
| 2 | zuordnung | 6 | Bild `cr-anlage.svg`: Nummern ①, ④, ⑤, ⑥, ⑦, ⑧ → Bauteilnamen (Ablenker: „Lambdasonde“) |
| 3 | zuordnung | 6 | Bauteile (Vorförderpumpe, Filter, Hochdruckpumpe-Ausgang, Rail, Injektor-Leckölleitung, Druckregelventil-Abfluss) → Niederdruck / Hochdruck / Rücklauf |
| 4 | mc | 2 | Aufgabe des Rails (Kraftstoff unter Hochdruck speichern und Druckschwankungen ausgleichen) |
| 5 | offen | 6 | Tabelle „Bauteil → Aufgabe“ für Hochdruckpumpe, ZME, Druckregelventil, Raildrucksensor, Injektor, Vorförderpumpe (6 Stichpunkte) |
| 6 | offen | 3 | Drei Funktionen der geführten Fehlersuche/des Testers, die hier helfen (Fehlerspeicher mit Umgebungsbedingungen, Messwertblöcke Raildruck Soll/Ist, Mengenvergleich/Laufruhe) |
| 7 | offen | 4 | Zwei Messungen im Niederdruckkreis mit Sollwert (Vorförderdruck ca. 2,5–5 bar; Fördermenge/Filterdurchsatz bzw. Unterdruck vor der Pumpe) |
| 8 | zahl | 3 | Bild `raildruck-kennlinie.svg`, `tb`: Signalspannung bei 100 MPa (= 2,5 V) |
| 9 | zahl | 2 | 1350 bar in MPa (135) |
| 10 | offen | 5 | Raildrucksensor am SG prüfen: Versorgung ca. 5 V gegen Masse, Signal 0,5–4,5 V gegen Masse, Masse (Spannungsfall < 0,1 V bzw. Durchgang < 0,5 Ω), Messgerät Voltmeter |
| 11 | mc | 2 | Reaktion des SG bei Signal 0,1 V (Defekt erkannt → Notlauf/Abschalten; nicht: „Raildruck wird auf 2500 bar erhöht“) |
| 12 | offen | 4 | Mengenvergleich deuten: Zyl. 1 −0,4 / 2 −0,2 / 3 +5,0 / 4 −0,3 mm³/Hub → Zyl. 3 bringt zu wenig Drehmoment, SG spritzt mehr ein; Ursache Injektor oder Kompression; nächster Schritt Rücklaufmengenmessung bzw. Kompressionstest |
| 13 | zahl | 3 | Rücklaufmengen 11 / 13 / 41 / 12 ml → Verhältnis größte ÷ kleinste (3,73) |
| 14 | mc | 2 | Bewertung: Grenzwert 3-fach überschritten → Injektor Zyl. 3 tauschen |
| 15 | reihenfolge | 4 | Injektor tauschen (6 Schritte: Fehlerspeicher auslesen → Motorabdeckung ab/Leitungen reinigen → Rücklauf- und Hochdruckleitung lösen, Öffnungen verschließen → Injektor ausbauen, Dichtung ersetzen → neuen Injektor + neue Hochdruckleitung nach Drehmoment einbauen → IMA-Code codieren) |
| 16 | offen | 3 | Warum IMA-Code eingeben? (Fertigungstoleranz je Injektor, SG berechnet Ansteuerzeit genau, gleiche Menge pro Zylinder) |
| 17 | mc | 2 | Ansteuerung MV-Injektor (Booster 70–90 V, Anzug ca. 18–20 A, Halten ca. 10–12 A) |
| 18 | offen | 4 | Vier Abschlussarbeiten (Fehlerspeicher löschen, Mengenvergleich/Laufruhe prüfen, Hochdrucktest bzw. Dichtheit Sichtprüfung, Probefahrt, Fehlerspeicher erneut auslesen) |
| 19 | offen | 3 | SCR: Warum muss im Winter nach Motor-Aus die AdBlue-Leitung leergesaugt werden? (Gefrierpunkt ca. −11 °C, Eis/Kristalle beschädigen Leitung und Dosierventil, Umkehrventil im Tankmodul) |
| 20 | zuordnung | 5 | Abgasanlage in Flussrichtung: Positionen 1–5 → Oxi-Kat, DPF, Dosierventil, SCR-Kat, Sperrkat |

Summe: 71 Punkte.

**Einzelfragen (mind. 20, ohne `situation`):**
- Regelung: Zweisteller-Phasen (zuordnung: Start / Leerlauf / Volllast → nur DRV / beide / nur ZME), ZME stromlos offen (mc), DRV ohne Ansteuerung ca. 100 bar (mc), Folgen DRV-Ausfall vs. Raildrucksensor-Ausfall (offen), DBV einstufig/zweistufig (offen), Tastverhältnis ZME bei steigender Last (offen, wie in der Schulprüfung: Raildruck steigt, Tastverhältnis steigt).
- ZME-Prüfung: Tabelle Spannung/Widerstand/Oszi mit Messpunkten (offen), Widerstand 50 Ω beurteilen (offen), Oszi masseseitig: welcher Pegel = bestromt (mc).
- Piezo: Spannung/Kondensatorverhalten (mc), Lagerung stehend + Stecker nicht abziehen (offen).
- Testerfunktionen → Zweck (zuordnung: Leerlaufdrehzahlvergleich, Mengenvergleich, dynamischer Kompressionstest, Hochdrucktest, Injektoranpassung), dynamischer Kompressionstest bei 259/258/257/280 1/min deuten (offen).
- Sensoren mit Notlauf (zuordnung: Fahrpedalgeber → erhöhte LL; NW-Sensor → kein Neustart; Raildrucksensor → Notlauf/Abschalten).
- AdBlue: Eigenschaften (zuordnung: Harnstoffanteil 32,5 %, Gefrierpunkt ca. −11 °C, Wassergefährdungsklasse 1, Zersetzung ab ca. 60 °C), Reaktion NOx + NH₃ → N₂ + H₂O (mc), Aufgabe Sperrkat (offen), Aufgabe NOx-Sensoren 1 und 2 (offen), Werkstatt-Umgang mit AdBlue (offen: Lack sofort abwaschen, nicht in Kraftstofftank, Kristalle entfernen, Kanister verschlossen).
- 2 `zahl`: Raildrucksensor 3,1 V bei 0,5–4,5 V/0–2000 bar → bar (1300); Tastverhältnis 4 ms an / 10 ms Periode → % (40).

- [ ] **Step 1:** `MINDEST.Diesel = { fragen: 40, saetze: 1, karten: 5 }` eintragen, `node tools/tests.js` → FAIL.
- [ ] **Step 2:** Beide SVGs zeichnen, in `sw.js` eintragen, im Browser öffnen (`http://localhost:8766/inhalt/bilder/cr-anlage.svg`) und auf 375 px prüfen.
- [ ] **Step 3:** `inhalt/fragen/diesel.py` mit Modul-Docstring, `SITUATIONEN` und `QUESTIONS` schreiben. Beispiel für das Format (Aufgabe 2 und eine Einzelfrage):
```python
SITUATIONEN = {
    "cr-octavia": {
        "titel": "Kundenauftrag: Ruckeln und Leistungsverlust",
        "text": "Skoda Octavia 2.0 TDI, Baujahr 2020, Common-Rail mit Magnetventil-Injektoren, Zweisteller-Regelung, SCR-Katalysator.\nKunde beanstandet: „Der Motor ruckelt im Leerlauf, nimmt schlecht Gas an und die Motorkontrollleuchte ist an.“",
        "cat": "Diesel",
    },
}

QUESTIONS = [
    {"cat": "Diesel", "level": 1, "typ": "zuordnung", "pkt": 6, "situation": "cr-octavia", "nr": 2, "bild": "cr-anlage.svg",
     "q": "Ordnen Sie den Nummern im Leitungsplan die Bauteile zu.",
     "paare": [["①", "Vorförderpumpe"], ["④", "Hochdruckpumpe"], ["⑤", "Zumesseinheit"], ["⑥", "Rail"],
               ["⑦", "Raildrucksensor"], ["⑧", "Druckregelventil"]],
     "ablenker": ["Lambdasonde"],
     "explain": "Die Zumesseinheit sitzt am Zulauf der Hochdruckpumpe, Raildrucksensor und Druckregelventil sitzen am Rail.",
     "src": "FK 339–342, Format Prüfung Schule"},
    {"cat": "Diesel", "level": 2, "typ": "zuordnung", "pkt": 3,
     "q": "Bei einer Zweisteller-Regelung arbeiten Zumesseinheit (ZME) und Druckregelventil (DRV) je nach Betriebszustand. Ordnen Sie zu.",
     "paare": [["Motorstart und Warmlauf", "nur DRV"], ["Leerlauf, Schub, kleine Einspritzmengen", "ZME und DRV"],
               ["Mittlere bis hohe Last", "nur ZME"]],
     "explain": "Beim Start sorgt das DRV für schnellen Druckaufbau (der Kraftstoff erwärmt sich dabei). Im Leerlauf regeln beide am genauesten. Bei hoher Last regelt nur die ZME – so bleibt die Pumpenleistung klein.",
     "src": "FK 340–341, TB 274"},
]
```
- [ ] **Step 4:** `python tools/export.py` → Statistik prüfen (Diesel ≥ 40, Satz `cr-octavia` 20 Aufgaben), `python tools/export.py --check`, `node tools/tests.js` → grün.
- [ ] **Step 5:** Browser: Simulation „Diagnosetechnik I“ zeigt den Satz `cr-octavia` mit Situation und 71 Punkten. Zwei Aufgaben beantworten, Bild lesbar.
- [ ] **Step 6:** Commit `Diesel: Aufgabensatz Common-Rail mit Injektor-Diagnose, Einzelfragen CR und AdBlue, eigene Schaubilder`.

---

### Task 11: Bremse – Aufgabensatz, Einzelfragen, 1 SVG

**Files:** `inhalt/fragen/bremse.py`, `inhalt/bilder/esp-system.svg`; `MINDEST.Bremse = { fragen: 40, saetze: 1, karten: 4 }`; `sw.js`.

**Bild `esp-system.svg`:** Draufsicht Fahrzeug, Nummern ①–⑦: 4 Raddrehzahlsensoren ① (eine Nummer für alle 4), Hydroaggregat mit Steuergerät ②, Lenkwinkelsensor ③, Gierraten-/Querbeschleunigungssensor ④, Bremsdrucksensor ⑤ am Hauptbremszylinder, EPB-Stellmotoren hinten ⑥, EPB-Taster ⑦.

**Aufgabensatz `epb-golf`** – „Kundenauftrag: Bremsen hinten und Bremsflüssigkeit“, Text: „VW Golf 8 1.5 TSI, Baujahr 2021, elektrische Parkbremse mit Stellmotoren am Bremssattel, ESP. Kunde: „Hinten schleift es beim Bremsen, und die Inspektion steht an.“ Bei der Prüfung: Bremsbeläge hinten 2 mm, Bremsflüssigkeit 3,8 % Wasser.“

| nr | typ | pkt | Inhalt |
|---|---|---|---|
| 1 | zuordnung | 7 | Bild `esp-system.svg`: Nummern → Bauteile |
| 2 | offen | 3 | Drei Funktionen der EPB außer Parken (Auto-Hold, Anfahrassistent, dynamische Notbremsung) |
| 3 | mc | 2 | Warum Servicemodus vor dem Belagwechsel (Kolben über Spindel/Getriebe – ohne Zurückfahren Schaden) |
| 4 | reihenfolge | 5 | Belagwechsel hinten mit EPB (7 Schritte: Tester an, Servicemodus aktivieren → Rad ab → Sattel lösen → Beläge/Scheibe prüfen und tauschen → Sattel montieren nach Drehmoment → Servicemodus beenden/Grundeinstellung → Fehlerspeicher, Bremsprobe) |
| 5 | offen | 4 | Scheibe prüfen: Mindestdicke, Seitenschlag, Dickentoleranz/Riefen, Verschleißgrenze aus Herstellerdaten |
| 6 | offen | 3 | Bremsflüssigkeit hygroskopisch: Was bedeutet es, welche Folge (Siedepunkt sinkt, Dampfblasen, Bremse fällt aus) |
| 7 | zahl | 3 | `tb`: Nass-Siedepunkt DOT 4 laut Tabelle (155) |
| 8 | mc | 2 | Bewertung 3,8 % Wasser → wechseln (Nass-Siedepunkt-Grenze 3,5 %) |
| 9 | offen | 4 | Besonderheiten beim Entlüften mit ESP (Entlüftungsgerät, Reihenfolge nach Hersteller, Hydroaggregat mit Tester ansteuern/Grundeinstellung, keine Luft ins Aggregat) |
| 10 | zuordnung | 5 | ESP-Sensoren → Messgröße (Raddrehzahl, Lenkwinkel, Gierrate, Querbeschleunigung, Bremsdruck) |
| 11 | offen | 4 | Aktiver vs. passiver Raddrehzahlsensor (aktiv: Hall/MR, Versorgung, Rechtecksignal, auch bei Stillstand; passiv: induktiv, Sinus, Amplitude drehzahlabhängig) |
| 12 | mc | 2 | Signalbild eines aktiven Sensors (Rechteck, Frequenz steigt mit Geschwindigkeit) |
| 13 | offen | 4 | Übersteuern: ESP-Eingriff (kurveninneres/äußeres Rad – Vorderrad außen bremsen, Motormoment reduzieren) |
| 14 | zuordnung | 3 | ABS-Regelphasen → Ventilstellung Einlass/Auslass (Druck aufbauen: E offen/A zu; halten: E zu/A zu; abbauen: E zu/A offen) |
| 15 | zahl | 3 | Hydraulik: HBZ 23 mm, Sattelkolben 57 mm, F1 2500 N → F2 (15 354 N) |
| 16 | offen | 3 | Wann Lenkwinkelsensor kalibrieren (nach Spureinstellung, Lenkungs-/Spurstangentausch, laut Hersteller nach Batterieabklemmen) |
| 17 | offen | 4 | Bremsenprüfstand: was wird gemessen/bewertet (Bremskraft je Rad, Ungleichmäßigkeit je Achse, Abbremsung, Feststellbremse, Unrundheit) |
| 18 | offen | 4 | Vier Abschlussarbeiten (Grundeinstellung EPB, Fehlerspeicher, Bremsflüssigkeitsstand/Wechselaufkleber, Probefahrt mit Einbremsen, Dokumentation) |

Summe: 65 Punkte.

**Einzelfragen (mind. 22):** EPB-Bauarten (zuordnung), Notlösen bei leerer Batterie (offen), Kolben zurückdrücken ohne Servicemodus (mc), Bremsflüssigkeit DOT 5 vs. 5.1 (mc), DOT-Tabelle Siedepunkte (zuordnung, `tb`), Bremsflüssigkeit gesundheitsschädlich/Lack (offen), Bremskraftverstärker Aufgabe (offen), Zweikreisaufteilung II/X (zuordnung), Bremsassistent (offen), ASR-Eingriffe (offen), Druck p = F/A (zahl), Abbremsung z berechnen mit Masse 1500 kg und ΣF 9000 N → 61,2 % (zahl, Formel in der Erklärung, Grenzwert nur „laut Tabellenbuch“), Raddrehzahlsensor Fehlerbild (offen), Reihenfolge Bremsflüssigkeit wechseln (reihenfolge), Belagverschleißanzeige (mc), ESP-Kontrollleuchte nach Achsvermessung (offen), Hydroaggregat Bauteile (zuordnung), Gierrate Einheit °/s (mc), Prüfstand Ungleichmäßigkeit berechnen (zahl: 2800 N/2300 N → 17,9 %).

- [ ] **Step 1–6:** wie im gemeinsamen Ablauf. Commit `Bremse: Aufgabensatz EPB-Belagwechsel und ESP, Einzelfragen, Schaubild ESP`.

---

### Task 12: Klima – Aufgabensatz, Einzelfragen, 1 SVG

**Files:** `inhalt/fragen/klima.py`, `inhalt/bilder/klimakreislauf.svg`; `MINDEST.Klima = { fragen: 40, saetze: 1, karten: 4 }`; `sw.js`.

**Bild `klimakreislauf.svg`:** Kreislauf mit ① Verdichter (Magnetkupplung bzw. Regelventil), ② Kondensator mit Lüfter, ③ Trockner/Sammler, ④ Expansionsventil, ⑤ Verdampfer mit Gebläse, ⑥ Druck-/Temperatursensor Hochdruck, ⑦ Service-Anschluss Hochdruck, ⑧ Service-Anschluss Niederdruck. Hochdruckseite durchgezogen, Niederdruckseite gestrichelt, Flussrichtung mit Pfeilen.

**Aufgabensatz `klima-bmw`** – „Kundenauftrag: Klimaanlage kühlt kaum“, Text: „BMW 320d, Baujahr 2019, Kältemittel R1234yf, extern geregelter Verdichter. Kunde: „Die Klimaanlage bläst nur noch lauwarm, und manchmal riecht es muffig.“ Außentemperatur 25 °C.“ Fehler: Unterfüllung durch Leck am Kondensator (Steinschlag).

| nr | typ | pkt | Inhalt |
|---|---|---|---|
| 1 | zuordnung | 8 | Bild `klimakreislauf.svg`: ①–⑧ → Bauteile |
| 2 | zuordnung | 5 | Bauteil → Aggregatzustand/Druckseite des Kältemittels am Eingang (Verdichter: gasförmig ND; Kondensator: gasförmig HD; Expansionsventil: flüssig HD; Verdampfer: flüssig-gasförmig ND; Trockner: flüssig HD) |
| 3 | offen | 3 | Eigenschaften R1234yf (GWP < 150, schwer entflammbar A2L, nicht mit R134a mischen, eigene Anschlüsse/Geräte) |
| 4 | offen | 3 | Voraussetzung, um am Kältekreis arbeiten zu dürfen (Sachkundenachweis, zertifiziertes Servicegerät für R1234yf, belüfteter Arbeitsplatz) |
| 5 | offen | 4 | Vorprüfungen ohne Servicegerät (Sichtprüfung Leck/Ölspuren, Verdichter läuft/Regelventil, Lüfter, Innenraumfilter, Ausströmtemperatur messen) |
| 6 | mc | 2 | Typische Ausströmtemperatur einer intakten Anlage (ca. 4–8 °C) |
| 7 | offen | 4 | Manometerwerte deuten: ND und HD beide zu niedrig → Unterfüllung/Leck (Begründung) |
| 8 | zuordnung | 4 | Fehlerbild → Druckanzeige (Unterfüllung: ND niedrig/HD niedrig; Kondensator verschmutzt: HD zu hoch; Expansionsventil klemmt zu: ND sehr niedrig/HD niedrig; Überfüllung: ND hoch/HD hoch) |
| 9 | offen | 3 | Drei Methoden der Lecksuche (UV-Kontrastmittel, elektronischer Lecksucher, Formiergas N₂/H₂) |
| 10 | reihenfolge | 6 | Klimaservice (7 Schritte: Kältemittel absaugen/recyceln → abgeschiedenes Öl messen → Bauteil tauschen → Evakuieren mind. 20–30 min → Vakuum halten/Dichtheit → Öl/UV ergänzen → nach Gewicht befüllen) |
| 11 | mc | 2 | Zweck des Evakuierens (Feuchtigkeit und Luft entfernen, Dichtheit prüfen) |
| 12 | offen | 3 | Warum Trockner bei offenem Kreislauf erneuern (Feuchtigkeit → Säure, Vereisung am Expansionsventil) |
| 13 | zuordnung | 4 | Öl → Einsatz (PAG für R134a, PAG YF für R1234yf/R134a, POE für elektrische Verdichter, PAO-Universalöl nur mit Herstellerfreigabe) |
| 14 | offen | 3 | Warum POE bei E-/Hybrid-Verdichtern (nicht leitend, Isolation HV-Motor) |
| 15 | zahl | 2 | Füllmenge laut Typschild 590 g, abgesaugt 340 g → wie viel fehlte in % (42,4) |
| 16 | offen | 3 | Muffiger Geruch: Ursache und Abhilfe (Bakterien/Pilze am Verdampfer → Desinfektion, Innenraumfilter, Kondenswasserablauf prüfen) |
| 17 | offen | 4 | Vier Sicherheitsregeln (Schutzbrille, Handschuhe – Erfrierung, nicht in der Grube, keine offene Flamme, Lüftung) |
| 18 | offen | 4 | Abschlussarbeiten (Dichtheit, Leistungstest/Ausströmtemperatur, Fehlerspeicher, Dokumentation Menge/Kältemittel, Aufkleber) |

Summe: 67 Punkte.

**Einzelfragen (mind. 22):** Kältemittel-Ablassverbot und Dokumentation (offen), neue ChemKlimaschutzV 2026 (mc, mit Jahr), Expansionsventil vs. Drosselrohr (zuordnung), Akkumulator vs. Sammler (mc), extern geregelter Verdichter/PWM-Regelventil (offen), Lastregelung des Motors bei Klimabetrieb (offen), Druck-/Temperatursensor-Ausfall (offen), Unterkühlung/Überhitzung (zuordnung), Überdruck ↔ Absolutdruck (zahl: 14 bar Überdruck → 15 bar absolut), Kältemittel schwerer als Luft (mc), Kältemittelöl als gefährlicher Abfall (mc), UV-Kennzeichnung (mc), Service-Anschlüsse R134a vs. R1234yf verschieden (mc), Innenraumfilter (offen), elektrischer Klimakompressor HV (offen), Kondensatorlüfter-Ansteuerung (offen), Fehlerbild Vereisung Verdampfer (offen), Reihenfolge Lecksuche mit Formiergas (reihenfolge), Bauteil → Aufgabe (zuordnung).

- [ ] **Step 1–6:** wie im gemeinsamen Ablauf. Commit `Klima: Aufgabensatz Unterfüllung und Klimaservice, Einzelfragen, Schaubild Kältekreis`.

---

### Task 13: Airbag – Aufgabensatz, Einzelfragen, 1 SVG

**Files:** `inhalt/fragen/airbag.py`, `inhalt/bilder/airbag-system.svg`; `MINDEST.Airbag = { fragen: 40, saetze: 1, karten: 4 }`; `sw.js`.

**Bild `airbag-system.svg`:** Draufsicht Innenraum, Nummern ①–⑧: Airbag-Steuergerät ① (Mitteltunnel), Upfront-Sensoren ② (vorn), Seitenaufprallsensoren ③ (B-Säule/Tür), Fahrerairbag ④ mit Wickelfeder ⑤, Beifahrerairbag ⑥, Gurtstraffer ⑦, Kontrollleuchte ⑧ im Kombiinstrument.

**Aufgabensatz `airbag-sitz`** – „Kundenauftrag: Airbag-Kontrollleuchte nach Sitzausbau“, Text: „Opel Astra K, Baujahr 2018. Kunde: „Seit ihr den Fahrersitz für die Teppichreinigung ausgebaut habt, leuchtet die Airbag-Leuchte.“ Fehlerspeicher: Zündkreis Seitenairbag Fahrer – Widerstand zu hoch.“ Fehler: Stecker unter dem Sitz nicht eingerastet (Übergangswiderstand).

| nr | typ | pkt | Inhalt |
|---|---|---|---|
| 1 | zuordnung | 8 | Bild `airbag-system.svg`: ①–⑧ → Bauteile |
| 2 | offen | 3 | Was zeigt die Kontrollleuchte beim Einschalten (Selbsttest, geht nach einigen Sekunden aus; Dauerleuchten = Fehler, System ggf. abgeschaltet) |
| 3 | mc | 2 | Bedeutung des Fehlereintrags „Widerstand zu hoch“ (Unterbrechung/Übergangswiderstand im Zündkreis) |
| 4 | reihenfolge | 5 | Sicherheitsablauf vor Arbeiten (6 Schritte: Zündung aus und Schlüssel weg → Batterie-Minus abklemmen und sichern → Wartezeit nach Herstellerangabe → elektrostatisch entladen → Stecker trennen → Bauteil mit Polster nach oben ablegen) |
| 5 | offen | 3 | Warum Wartezeit nach dem Abklemmen (Energiereserve/Kondensator im Steuergerät zündet sonst noch) |
| 6 | mc | 2 | Was ist verboten (Widerstand der Zündpille mit dem Multimeter messen) |
| 7 | offen | 4 | Zündkreis richtig prüfen (Tester-Messwerte, Prüfadapter/Ersatzwiderstand statt Airbag, Steckverbindung/Kurzschlussbrücke prüfen, Leitung auf Durchgang) |
| 8 | zahl | 3 | Ersatzwiderstand 2,2 Ω + Stecker 2 × 0,1 Ω + Leitung 0,3 Ω → Gesamt (2,7 Ω) |
| 9 | offen | 3 | Aufgabe der Kurzschlussbrücke im Stecker (schließt Zündpille beim Abziehen kurz → keine Auslösung durch Fremdspannung) |
| 10 | offen | 3 | Warum Stecker unter dem Sitz typische Fehlerquelle (Sitzverstellung bewegt Leitung, Korrosion, nicht eingerastet) |
| 11 | zuordnung | 5 | Rückhaltesystem → Wirkung (Gurtstraffer: Gurtlose entfernen; Gurtkraftbegrenzer: Kraft auf Brustkorb begrenzen; Seitenairbag: Thorax schützen; Kopfairbag: Kopf schützen; Knieairbag: Beine/Abrutschen) |
| 12 | mc | 2 | Wie viele Signale braucht das Steuergerät zur Auslösung (mind. zwei plausible: Steuergerät + Satellit) |
| 13 | offen | 4 | Vier Regeln für Lagerung und Transport (Polster nach oben, nicht in der Nähe von Wärme > ca. 100 °C, abschließbarer Raum/Lagerung nach LR 240, nicht an der Leitung tragen, Originalverpackung) |
| 14 | offen | 3 | Rechtliches (Kategorie P1, Schulung/eingeschränkte Fachkunde, Anzeige bei der Behörde) |
| 15 | offen | 3 | Nach einem Unfall mit Auslösung: was ist zu tauschen (ausgelöste Airbags/Gurtstraffer, Steuergerät mit Crashdaten, ggf. Sensoren, Wickelfeder nach Hersteller) |
| 16 | mc | 2 | Entsorgung nicht ausgelöster Airbags (nicht Hausmüll; Rückgabe/fachgerechte Auslösung) |
| 17 | offen | 4 | Abschlussarbeiten (Stecker einrasten, Batterie anklemmen ohne dass jemand im Fahrzeug sitzt, Fehlerspeicher löschen, Kontrollleuchte prüfen, Zündkreis-Messwerte prüfen) |
| 18 | zuordnung | 4 | Crash-Zeitablauf (ms) → Ereignis (ca. 10–20 ms Auslöseentscheidung, ca. 30–40 ms Airbag voll, ca. 60–80 ms Insasse taucht ein, danach Entleerung) – in der Erklärung „Richtwerte, je nach Fahrzeug“ |

Summe: 63 Punkte.

**Einzelfragen (mind. 22):** Gasgenerator Aufbau ein-/zweistufig (offen), Hybrid-Gasgenerator (mc), Gurtstraffer pyrotechnisch vs. reversibel elektrisch (zuordnung), Sitzbelegungserkennung (offen), Beifahrerairbag-Abschaltung/Kindersitz (offen), Wickelfeder Einbau-Mittelstellung (offen), Crashsignal an andere Systeme (zuordnung: Türentriegelung, Warnblinker, Kraftstoffpumpe aus, Notruf eCall), pyrotechnischer Batterietrennschalter (offen), aktive Motorhaube (mc), Upfront-/Seitensensoren Messprinzip (offen), Neues Steuergerät codieren (mc), Reihenfolge Lenkradairbag ausbauen (reihenfolge), Widerstand Parallelschaltung (zahl), Strom durch Zündpille (zahl: 12 V / 2 Ω = 6 A → Hinweis, warum Messen gefährlich ist), Airbag-Recht Kategorie P1 (mc), Wartezeit „nach Herstellerangabe“ (mc ohne feste Zahl), Sicherheitsabstand beim Arbeiten (offen), Airbag nach 10 Jahren? (offen: Herstellerangabe, ältere Systeme hatten Tauschintervalle).

- [ ] **Step 1–6:** wie im gemeinsamen Ablauf. Commit `Airbag: Aufgabensatz Zündkreisfehler am Sitz, Einzelfragen, Schaubild Rückhaltesystem`.

---

### Task 14: WiSo – Aufgabensatz und Einzelfragen

**Files:** `inhalt/fragen/wiso.py`; `MINDEST.WiSo = { fragen: 40, saetze: 1, karten: 4 }`.

**Aufgabensatz `wiso-geselle`** – „Situation: Start als Geselle“, Text: „Du hast deine Gesellenprüfung bestanden und wirst von deinem Ausbildungsbetrieb, einem Autohaus in Bayreuth (Mitglied der Kfz-Innung, tarifgebunden), als Kfz-Mechatroniker übernommen. Im März 2026 waren Kommunalwahlen in Bayern.“ – alle 4 Themen, Zahlen mit Jahr.

| nr | typ | pkt | Inhalt |
|---|---|---|---|
| 1 | offen | 3 | Tarifautonomie erklären (Art. 9 Abs. 3 GG, Tarifpartner verhandeln ohne Staat) |
| 2 | zuordnung | 4 | Tarifpartner im Kfz-Handwerk Bayern (Gewerkschaft: IG Metall; Arbeitgeber: Landesinnungsverband/Arbeitgeberverband des Kfz-Gewerbes) + Ablenker |
| 3 | zuordnung | 4 | Tarifvertragsart → Inhalt (Manteltarif: Arbeitszeit/Urlaub; Entgelttarif: Löhne/Ausbildungsvergütung; Entgeltrahmen: Eingruppierung) |
| 4 | reihenfolge | 5 | Ablauf Tarifkonflikt (Kündigung → Verhandlungen → Scheitern → Schlichtung → Urabstimmung 75 % → Streik → neue Verhandlung → Urabstimmung 25 %) |
| 5 | mc | 2 | Friedenspflicht (während der Laufzeit keine Streiks zu geregelten Themen) |
| 6 | zahl | 3 | Kfz-Tarif Bayern: Lohn 3000 € + 3,3 % ab 08/2026 → neu (3099) |
| 7 | zuordnung | 5 | Sozialversicherung → Träger (RV: Deutsche Rentenversicherung; KV: Krankenkasse; PV: Pflegekasse; AV: Bundesagentur für Arbeit; UV: Berufsgenossenschaft) |
| 8 | mc | 2 | Wer zahlt die Unfallversicherung (nur Arbeitgeber) |
| 9 | zahl | 3 | RV-Arbeitnehmeranteil 2026 bei 3100 € (288,30) |
| 10 | offen | 4 | Generationenvertrag/Umlageverfahren und Problem des demografischen Wandels |
| 11 | offen | 3 | Drei-Säulen-Modell der Altersvorsorge |
| 12 | mc | 2 | Rentenpaket 2025: Haltelinie 48 % bis 2031 |
| 13 | zuordnung | 5 | Wahlgrundsatz → Bedeutung (allgemein, unmittelbar, frei, gleich, geheim) |
| 14 | offen | 3 | Kumulieren und Panaschieren erklären |
| 15 | mc | 2 | Kommunalwahl Bayern: Amtszeit und Wahlalter (6 Jahre, ab 18) |
| 16 | zuordnung | 4 | Gemeindeaufgaben → Art (Pflicht: Wasserversorgung/Schulgebäude; freiwillig: Schwimmbad/Jugendzentrum; übertragen: Pass-/Meldewesen) |
| 17 | zuordnung | 4 | Konjunkturphase → Merkmal (Aufschwung, Boom, Abschwung, Tiefstand) |
| 18 | offen | 4 | Magisches Viereck nennen (4 Ziele) |
| 19 | offen | 3 | Zielkonflikt erklären (z. B. Wachstum ↔ Preisniveaustabilität) |
| 20 | mc | 2 | Antizyklische Fiskalpolitik in der Rezession (Staat erhöht Ausgaben/senkt Steuern) |

Summe: 67 Punkte.

**Einzelfragen (mind. 20):** Günstigkeitsprinzip (mc), Allgemeinverbindlichkeit (mc), Aussperrung (mc), Tarifbindung/Mitgliedschaft (offen), Beitragssätze 2026 → Zweig (zuordnung), Beitragsbemessungsgrenze (mc), Kinderlosenzuschlag Pflege (mc), Minijob-Grenze 603 € (mc, mit Jahr), Subsidiarität/Solidarität (zuordnung), Aktivrente 2026 (mc), Regelaltersgrenze 67 (mc), Bundestag 630 Sitze/Zweitstimmendeckung (offen), Grundmandatsklausel (mc), 5-%-Hürde (mc), Bürgermeister Stichwahl (mc), Funktionen von Wahlen (zuordnung), BIP-Definition (offen), Frühindikatoren (zuordnung: ifo-Geschäftsklima, Auftragseingänge vs. Spätindikator Arbeitslosenquote), BIP 2025 +0,2 % (mc, mit Jahr), EZB-Inflationsziel 2 % (mc), Angebots- vs. Nachfragepolitik (zuordnung).

- [ ] **Step 1–6:** wie im gemeinsamen Ablauf (ohne SVG). Commit `WiSo: Aufgabensatz Start als Geselle, Einzelfragen zu Tarif, Sozialversicherung, Wahlen, Konjunktur`.

---

### Task 15: Grundlagen auffüllen

**Files:** `inhalt/fragen/grundlagen.py`; `MINDEST.Grundlagen = { fragen: 20, saetze: 0, karten: 2 }`.

Mindestens 15 neue Fragen (ohne Aufgabensatz), alle Typen: Ohm/Leistung (mc, zahl), Reihen-/Parallelschaltung (zahl), Spannungsfall an Masseleitung beurteilen (offen), PWM/Tastverhältnis erklären + berechnen (offen, zahl), Oszilloskop-Einstellungen (zuordnung: V/DIV, ms/DIV, Trigger), CAN-Bus Grundlagen (zuordnung: CAN-High/Low, Abschlusswiderstand 2 × 120 Ω → 60 Ω messen), Klemmenbezeichnungen (zuordnung: 15, 30, 31, 50, 87), Relais prüfen (reihenfolge), Hall- vs. Induktivgeber (zuordnung), NTC/PTC (mc), Messwertblock vs. Stellglieddiagnose (offen), Sicherung prüfen (offen), Einheiten MPa/bar/N/mm² (zahl).

- [ ] **Step 1–6:** wie im gemeinsamen Ablauf. Commit `Grundlagen: Elektrik, Messtechnik, CAN und Einheiten`.

---

### Task 16: README, GitHub Actions, Veröffentlichung, iPhone-Check

**Files:**
- Create: `README.md`, `.github/workflows/pruefen.yml`

- [ ] **Step 1: Workflow**

`.github/workflows/pruefen.yml`:
```yaml
# Automatische Prüfung bei jedem Upload. Ergebnis: Reiter "Actions" – grüner Haken = alles in Ordnung.
name: Prüfen

on:
  push:
  pull_request:
  workflow_dispatch:

jobs:
  pruefen:
    runs-on: ubuntu-latest
    steps:
      - name: Code holen
        uses: actions/checkout@v4
      - name: Python einrichten
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - name: Node.js einrichten
        uses: actions/setup-node@v4
        with:
          node-version: "22"
      - name: Prüfregeln für die Fragenbank testen
        run: python tools/test_export.py
      - name: Fragenbank prüfen (gültig und inhalt/fragen.js aktuell)
        run: python tools/export.py --check
      - name: Kern, Generatoren, Inhalt und Offline-Liste testen
        run: node tools/tests.js
```

- [ ] **Step 2: README**

`README.md`:
````markdown
# Gesellenprüfung Kfz – Trainer

Lern-App für die Gesellenprüfung Teil 2 Kfz-Mechatroniker (Pkw, Kfz-Innung Oberfranken, Winter 2026/27).
Läuft im Browser, lässt sich aufs iPhone installieren (Safari → Teilen → „Zum Home-Bildschirm“) und funktioniert offline.

**Live:** https://leszco063.github.io/gesellen-trainer/

## Fragen ändern oder ergänzen
1. Datei in `inhalt/fragen/` bearbeiten (Format: siehe Kopf von `inhalt/fragen/grundlagen.py` und `docs/superpowers/specs/`).
2. `python tools/export.py` – prüft alles und schreibt `inhalt/fragen.js`.
3. `node tools/tests.js` – alle Tests grün?
4. Commit + Push → GitHub Actions prüft, GitHub Pages aktualisiert die App.

## Als Vorlage für einen neuen Trainer
Auf GitHub „Use this template“, dann nur `inhalt/` austauschen: `trainer.js` (Name, Termine, Prüfungsplan),
`fragen/*.py`, `lernkarten.js`, `gen/` (optional), `bilder/`. Icons: `python tools/icons.py "#Farbe" "KÜRZEL"`.
`kern/` und `tools/` bleiben gleich.

## Urheberrecht
Alle Fragen sind eigene Formulierungen, alle Schaubilder selbst gezeichnet. Fotos aus Büchern und Prüfungen
liegen nur lokal in `material/` und werden nicht hochgeladen.
````

- [ ] **Step 3: Lokale Endkontrolle**

Run: `python tools/test_export.py && python tools/export.py --check && node tools/tests.js && python tools/export.py --stats`
Expected: alles grün, Statistik zeigt ≥ 220 Fragen und 5 Aufgabensätze.
Commit: `git add README.md .github && git commit -m "README und automatische Prüfung mit GitHub Actions …"`

- [ ] **Step 4: Freigabe zum Veröffentlichen einholen**

Den User fragen: „Darf ich das öffentliche Repo `Leszco063/gesellen-trainer` anlegen, hochladen und GitHub Pages einschalten?“ **Erst nach einem klaren Ja weitermachen.** Vorher prüfen, dass `git ls-files | grep -i material` nichts ausgibt.

- [ ] **Step 5: Repo, Pages, Template**

```bash
gh auth status
gh repo create Leszco063/gesellen-trainer --public --source . --remote origin --push --description "Lern-Trainer für die Gesellenprüfung Teil 2 Kfz-Mechatroniker (PWA)"
gh api -X POST repos/Leszco063/gesellen-trainer/pages -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/"
gh repo edit Leszco063/gesellen-trainer --template
gh run watch --exit-status
```
Expected: Workflow „Prüfen“ grün; `gh api repos/Leszco063/gesellen-trainer/pages --jq .html_url` → `https://leszco063.github.io/gesellen-trainer/`.

- [ ] **Step 6: Live-Check**

Im Browser-Pane `https://leszco063.github.io/gesellen-trainer/` öffnen (Pages braucht ggf. 1–2 Minuten): Start lädt, eine Übungsaufgabe pro Typ, ein Simulationsblock startet, Konsole ohne Fehler. Bei 375 px kein horizontales Scrollen. Danach den User bitten, die App auf dem iPhone über Safari → „Zum Home-Bildschirm“ zu installieren, einmal offline (Flugmodus) zu öffnen und kurz zu bestätigen, dass alles läuft.

- [ ] **Step 7: Notizen aktualisieren**

`C:\Users\leand\Desktop\Claude-Vault\notizen\Ideen\Lern-Trainer als Vorlage.md` um einen Absatz „Umgesetzt: Gesellenprüfungs-Trainer (Repo gesellen-trainer, Template)“ ergänzen – nur nach Rückfrage beim User, weil es seine persönliche Notiz ist.

---

## Nach Phase 1 (nicht Teil dieses Plans)

- Phase 2 (02.–20.11.): zweiter Aufgabensatz pro Block, Buchmaterial zu Bremse/Klima/Airbag/WiSo einarbeiten, `FW`-Fragen abgleichen, Generatoren `bremse` (Abbremsung) und `klima` (Druck/Temperatur), gemeldete Fragen korrigieren.
- Ab 21.11.: Feature-Stopp, nur Korrekturen.
- Dezember: eigener Spec + Plan für die Praxis-Module (Fachgespräch, Diagnose-Fälle, Abläufe, Messwerte) für den 29./30.01.2027.
