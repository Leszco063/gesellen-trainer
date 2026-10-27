// Service Worker: macht die App offline nutzbar.
// Strategie "Netzwerk zuerst": Online gibt es immer die neueste Version (z. B. neue Fragen),
// offline wird die zuletzt geladene Version aus dem Zwischenspeicher genommen.
// Neue Dateien in kern/, inhalt/ oder css/ hier eintragen – der Test "offline" meldet vergessene Dateien.
// Nur eigene Caches (Präfix gp2kfz-) aufräumen – andere Trainer auf derselben Domain haben ihre eigenen.
const CACHE = "gp2kfz-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png",
  "css/app.css",
  "inhalt/bilder/airbag-system.svg",
  "inhalt/bilder/cr-anlage.svg",
  "inhalt/bilder/esp-system.svg",
  "inhalt/bilder/klimakreislauf.svg",
  "inhalt/bilder/raildruck-kennlinie.svg",
  "inhalt/fragen.js",
  "inhalt/gen/elektrik.js",
  "inhalt/gen/gemeinsam.js",
  "inhalt/gen/hydraulik.js",
  "inhalt/gen/index.js",
  "inhalt/gen/sozialabgaben.js",
  "inhalt/lernkarten.js",
  "inhalt/trainer.js",
  "kern/auswahl.js",
  "kern/bewertung.js",
  "kern/config.js",
  "kern/fragenansicht.js",
  "kern/karten.js",
  "kern/lernen.js",
  "kern/main.js",
  "kern/meldungen.js",
  "kern/pruefung-aufbau.js",
  "kern/pruefung.js",
  "kern/speicher.js",
  "kern/start.js",
  "kern/statistik.js",
  "kern/typen/index.js",
  "kern/typen/mc.js",
  "kern/typen/offen.js",
  "kern/typen/reihenfolge.js",
  "kern/typen/zahl.js",
  "kern/typen/zuordnung.js",
  "kern/ui.js",
  "kern/uebung.js",
  "kern/util.js",
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("gp2kfz-") && k !== CACHE).map(k => caches.delete(k))))
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
