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
