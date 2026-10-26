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
