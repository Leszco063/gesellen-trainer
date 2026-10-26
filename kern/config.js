// Feste Einstellungen des Kerns. Alles Prüfungsspezifische steht in inhalt/trainer.js.
import { TRAINER } from "../inhalt/trainer.js";

export const TIMER_SECONDS = 60;   // Zeitdruck pro Aufgabe im Übungsmodus (nicht bei offenen Aufgaben)
export const REPEAT_SHARE = 0.3;   // Anteil fälliger Wiederholungen in normalen Runden

export const LEVEL_NAMES = { 1: "Leicht", 2: "Mittel", 3: "Schwer" };
export const LEVEL_COLORS = { 1: "var(--lvl1)", 2: "var(--lvl2)", 3: "var(--lvl3)" };

export const CATEGORIES = TRAINER.bereiche;
