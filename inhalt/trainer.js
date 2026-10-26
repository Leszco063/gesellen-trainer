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
