// Einstiegspunkt: lädt alle Ansichten (sie melden sich selbst an) und zeigt den Start.
import { TRAINER } from "../inhalt/trainer.js";
import { go } from "./ui.js";
import "./start.js";
import "./uebung.js";
import "./pruefung.js";
import "./lernen.js";
import "./meldungen.js";
import "./statistik.js";

document.title = TRAINER.name;
go("start");

// Schaltpläne sind auf dem Handy klein: Antippen zeigt das Bild bildschirmfüllend und scrollbar, nochmal Antippen schließt
document.addEventListener("click", e => {
  const bild = e.target.closest("figure.bild");
  if (bild) bild.classList.toggle("gross");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
