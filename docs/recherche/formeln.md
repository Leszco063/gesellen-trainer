# Formel-Hilfe: Schreibweise und Quellen (28.10.2026)

Rechenaufgaben haben ein Feld `formel` (Knopf „📐 Formel anzeigen“ vor dem Antworten, auch in der Prüfungssimulation – in der echten Prüfung ist das Tabellenbuch erlaubt). Dazu der Spickzettel „Formelsammlung“ (Grundlagen).

## Schreibweise
Wie in Tabellenbuch / Rechenbuch Kraftfahrzeugtechnik (Europa-Lehrmittel): Malpunkt `·`, Bruchstrich als `/`, Formelzeichen mit Index (s_R, F_B, p_max). In den Daten wird ein Index mit `_` geschrieben (`s_R`, `F_{B,max}`); die App stellt ihn tief (`formelHtml` in `kern/util.js`). Kein `×`/`÷` in Formeln (Test in `tools/tests/inhalt.test.js`). Die Formel nennt nie das Ergebnis der Aufgabe.

## Quellen (nur Schreibweise/Formeln abgeglichen, nichts übernommen)
- Europa-Lehrmittel, öffentliche Leseprobe „Methodische Lösungswege zum Rechenbuch Kraftfahrzeugtechnik“: https://www.europa-lehrmittel.de/leseprobe/22307-1.pdf – Malpunkt, Bruchstrich, `F = p · A`, `p = F / A`, `1 bar = 10 N/cm²`, Indizes wie V_h, v_m, P_eff.
- kfz-tech.de Formelsammlung: Anhalteweg `s = s_R + s_B`, `s_R = v · t_R`, `s_B = v² / (2 · a)` (https://www.kfz-tech.de/Engl/Formelsammlung/Anhalteweg.htm); Pedal/Hebel `F1 · l1 = F2 · l2` (https://www.kfz-tech.de/Biblio/Formelsammlung/PedalkraefteBrems.htm); hydraulische Übersetzung über Flächen bzw. d² (https://www.kfz-tech.de/Engl/Formelsammlung/HydrUebersetzung.htm); Verzögerung `a = v² / (2 · s)` (https://www.kfz-tech.de/Biblio/Formelsammlung/Bremsverzoegerung.htm).
- Tastgrad/Tastverhältnis `t_i / T` (DIN IEC 60469-1 nennt es Tastgrad), z. B. https://www.mikrocontroller.net/articles/Pulsweitenmodulation.

## Zu prüfen (mit dem eigenen Tabellenbuch)
- Formelzeichen der Abbremsung: hier `z` (wie in den Fragen); manche Quellen schreiben `Z` oder `κ`.
- Hydraulische Übersetzung: ob das Tabellenbuch `i_hyd` mit Index H/R (Haupt-/Radzylinder) schreibt – hier neutral F_1/F_2.
- Überhitzung/Unterkühlung: Formelzeichen (hier Δt mit t_Saug, t_Verd, t_Kond, t_Fl).
- Absolutdruck: `p_abs = p_e + p_amb` (DIN-Zeichen) – im Tabellenbuch evtl. anders benannt.
