# Recherche Ausbau Airbag (Instandhaltungstechnik II – Sicherheitssysteme)

Stand 28.10.2026. Ergänzt `2026-10-26-gp2-winter-2026-27.md` Abschnitt 3.4 und 3.6. Alles für die Fragen in eigenen Worten, nichts wörtlich übernommen.

## Was neu dazukam

- **Recht genauer:** Anzeige nach **§ 14 SprengG** (mit § 4 Abs. 2 der 1. SprengV) durch den **Arbeitgeber**, schriftlich, **mindestens 2 Wochen vor** dem ersten Umgang; das Ende der Tätigkeit ist ebenfalls unverzüglich anzuzeigen. Erlaubnisfrei nur für Einheiten der Kategorie **P1** (früher Klasse T1) und nur, solange sie **nicht ausgelöst** werden (Ausbau/Einbau, Entsorgung im eingebauten Zustand). P2-Einheiten bzw. Entwicklungsmuster brauchen eine Erlaubnis nach § 7 SprengG. [Bremen, Behördenportale]
- **Eingeschränkte Fachkunde:** Lehrgang von **ca. 6 Stunden** (Aufbau/Funktion Gasgenerator, Explosivstoffe, Recht, Umgang und Gefahren, Lagerung, Transport, Entsorgung, Praxisteil). Berechtigt zum Ein-/Ausbau von P1-Einheiten und zur Entsorgung (Auslösen) im eingebauten Zustand. [Bremen]
- **Lagerung:** nach Sprengstofflager-Richtlinie **LR 240** bzw. Anhang 6 der 2. SprengV. Ohne Lagergenehmigung genannt: **bis 10 kg Netto-Explosivstoffmasse (NEM) im Arbeitsraum** (in geeignetem Schrank), **bis 100 kg NEM im Lagerraum** (F30/T30). [Bremen, KomNet NRW]
- **Diagnose-Praxis:** typische Ursachen Leuchte an: Wickelfeder (oft nach Lenkradausbau ohne Arretierung), Stecker unter dem Sitz, Sitzbelegungsmatte, Crashsensor nach leichtem Rempler, Steuergerät mit gespeichertem Crash („crash-gesperrt“), fehlendes Anlernen/Codieren nach Tausch. Crashdaten lassen sich bei vielen Herstellern nicht einfach löschen → Steuergerät nach Herstellervorgabe ersetzen. Nach Tausch von Sensor, Wickelfeder oder Steuergerät anlernen/codieren. Dauerleuchten der Airbag-Leuchte = Mangel bei der HU. [kfz-dietrich]
- **Zweistufiger Gasgenerator:** zwei Kammern mit eigener Zündpille; geringe Unfallschwere → nur Stufe 1, hohe → zusätzlich Stufe 2, zeitversetzt. Jede Stufe = eigener Zündkreis am Steuergerät. [Patente US 6199903 u. a.]
- **Reversibler Gurtstraffer:** Elektromotor strafft in kritischen Fahrsituationen vorbeugend; kommt es nicht zum Unfall, wird die Gurtspannung wieder gelöst. [Euro NCAP PRE-SAFE, Polestar-Handbuch]
- **Sitzbelegungs-/Kindersitzerkennung:** Folien-/Sensormatte im Sitzkissen, teils Gurtkraftsensoren. [card2brain, Patente]
- **eCall:** Pflicht für **neu typgenehmigte** Pkw (M1) und leichte Nutzfahrzeuge (N1) seit **31.03.2018** (VO (EU) 2015/758); automatischer Notruf 112 bei schwerem Unfall (u. a. Airbagauslösung) oder manuell; Bestandstypen ohne Nachrüstpflicht. [ptolemus, eurotransport, legislation.gov.uk]

## Sichere Werte (dürfen in Fragen)

| Thema | Wert |
|---|---|
| Kategorie | P1 (früher T1) |
| Anzeige | § 14 SprengG, Arbeitgeber, ≥ 2 Wochen vor Beginn |
| Fachkunde-Lehrgang | eingeschränkte Fachkunde, ca. 6 h |
| Lagerung | LR 240; Arbeitsraum bis 10 kg NEM, Lagerraum bis 100 kg NEM |
| eCall | seit 31.03.2018 für neue Typgenehmigungen M1/N1, Notruf 112 |
| Kontrollleuchte | Selbsttest wenige Sekunden nach Zündung ein, dann aus |
| Zündkreis | nur über Tester/Prüfadapter (Ersatzwiderstand), nie Multimeter an der Zündpille |
| Wartezeit | nur „nach Herstellerangabe“ |
| Auslösung | Plausibilisierung über mind. 2 Signale (Steuergerät + Satellit) |

## Zu prüfen / unsicher (nicht als feste Zahl abfragen)

- **Zündkreis-Sollwiderstand:** Werkstatt-Blog nennt 1,7–4,5 Ω (> 10 Ω Unterbrechung, < 1 Ω Kurzschluss) – keine Herstellerquelle → in Fragen nur als **Beispielwerte im Aufgabentext** (Sollbereich „laut Herstellerangabe“ im Text angegeben).
- **Crash-Zeiten:** Quellen nennen Entscheidung ca. 15–25 ms, Frontairbag voll nach ca. 30–50 ms, wieder schlaff nach ca. 150 ms. Uneinheitlich → im Crashablauf-Bild nur **Reihenfolge ohne Zahlen**.
- **Zeitpunkt Gurtstraffer vs. Airbag:** keine belastbare Quelle für ms-Werte → nur „Gurtstraffer zündet vor bzw. spätestens mit dem Frontairbag“ als Reihenfolge, keine Zahl.
- **LR 240 vs. neue LR 410** („Aufbewahrung kleiner Mengen“, BW-Freigabe 2025): Verhältnis unklar → nur „nach Sprengstofflager-Richtlinie (LR 240)“ abfragen, Mengen 10/100 kg NEM als Zusatzwissen.
- **Temperatur im Lagerschrank:** KomNet nennt max. 75 °C für Explosivstoffe; im Werkstattalltag „keine Wärme über ca. 100 °C“ (Recherche 3.6). Widerspruch → Temperaturwert nicht neu abfragen.
- **Transport:** Gefahrgut UN 3268 (Sicherheitseinrichtungen, elektrisch ausgelöst, Klasse 9) – nicht verlässlich nachgelesen → nur „in Originalverpackung bzw. zugelassener Verpackung, gesichert, nach Gefahrgutrecht“.
- **Beifahrerairbag aus → auch Beifahrer-Gurtstraffer aus:** nur Volvo-Handbuch → herstellerabhängig, nicht abfragen.

## Spickzettel-Vorschlag

1. **Airbag: sicher machen** – Zündung aus/Schlüssel weg → Batterie-Minus ab, sichern → Wartezeit nach Herstellerangabe → elektrostatisch entladen → Stecker trennen → Polster nach oben ablegen.
2. **Zündkreis-Fehler lesen** – zu hoch = Unterbrechung/Übergangswiderstand; zu niedrig = Leitungen untereinander kurzgeschlossen; Kurzschluss nach Plus/Masse = Scheuerstelle. Eingrenzen mit Ersatzwiderstand am Stecker: Fehler weg → Bauteil, Fehler bleibt → Leitung/Steuergerät.
3. **Wickelfeder** – Räder geradeaus, Mittelstellung, Transportsicherung erst nach Einbau ab; defekt → Fahrerairbag (beide Stufen), Hupe, Lenkradtasten tot.
4. **Recht Airbag** – P1, eingeschränkte Fachkunde (ca. 6 h), Anzeige § 14 SprengG ≥ 2 Wochen vorher, Lagerung LR 240 (10 kg NEM Arbeitsraum / 100 kg NEM Lager), Entsorgung nicht Hausmüll, im eingebauten Zustand auslösen.
5. **Nach Auslösung ersetzen** – ausgelöste Airbags und Gurtstraffer, Steuergerät nach Herstellerangabe (Crashdaten), Sensoren/Wickelfeder/Gurte prüfen, neu codieren, Fehlerspeicher, Kontrollleuchte.
6. **Crash-Reihenfolge** – Sensoren → Plausibilität → Gurtstraffer → Airbag Stufe 1 (ggf. Stufe 2) → Eintauchen/Entleeren → Crashsignal (Türen auf, Kraftstoffpumpe aus, Warnblinker, eCall).

## Quellen

- [service.bremen.de – Umgang mit Airbag- und Gurtstraffer-Einheiten anzeigen](https://www.service.bremen.de/dienstleistungen/umgang-mit-airbag-und-gurtstraffer-einheiten-anzeigen-207201)
- [Gewerbeaufsicht Bremen – Anzeigeformular § 14 SprengG](https://www.gewerbeaufsicht.bremen.de/sixcms/media.php/13/sprengg-anzeige-p14-umgang-airbag-gurtstraffer.pdf)
- [LRA Schwäbisch Hall – Anzeigeformular](https://formulare.lrasha.de/03_Verkehr___Ordnung/Ordnung/Anzeigenformular_Umgang_Airbag-_oder_Gutstraffereinheiten.pdf)
- [umwelt-online – SprengLR 240](https://www.umwelt-online.de/recht/anlasi/spreng/spreng.rl/200/240.htm)
- [KomNet NRW – Lagerung Airbag im Arbeitsraum](https://www.komnet.nrw.de/_sitetools/dialog/43437)
- [Gewerbeaufsicht Niedersachsen – Technischer Arbeitsschutz Airbag und Gurtstraffer](https://www.gewerbeaufsicht.niedersachsen.de/download/30045/Technischer_Arbeitsschutz_Airbag_und_Gurtstraffer.pdf)
- [autoservicepraxis – Airbag-Arbeiten (2021)](https://autoservicepraxis.de/downloadfile/2940429/90007_2021_25_10_I_020-023_n24_Airbag-Arbeiten_36261_print.pdf)
- [kfz-dietrich – Airbag-Warnleuchte Diagnose](https://kfz-dietrich.com/blog/auto-airbag-warnleuchte-werkstatt-diagnose/)
- [US-Patent 6199903 – Ansteuerung zweistufiger Gasgenerator](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6199903)
- [Skoda – Der Airbag als Wegbereiter](https://www.skoda.ch/company/airbags-detail)
- [autohero – Airbags](https://www.autohero.com/de/beratung/informieren/ausstattung/sicherheitssysteme/airbags/)
- [Euro NCAP – Mercedes PRE-SAFE (2010)](https://cdn.euroncap.com/media/2067/2010-mercedes-benz-pre-safe.pdf)
- [Polestar 2 Handbuch – Gurtstraffer](https://www.polestar.com/de/manual/polestar-2/2024/article/781212804f387c39c0a80151032ab2de/)
- [card2brain – Airbagsysteme/Gurtstraffer](https://card2brain.ch/box/20250606_z2_airbagsystemegurtstraffer?lang=de)
- [ptolemus – eCall ab 31.03.2018](https://www.ptolemus.com/blog/ecall-to-be-mandatory-on-new-car-models-from-31-march-2018/)
- [eurotransport – eCall wird Pflicht](https://www.eurotransport.de/fahrzeuge/lkw/notrufassistent-fuer-pkw-und-transporter-ab-31-maerz-wird-ecall-pflicht/)
- [Verordnung (EU) 2015/758](https://www.legislation.gov.uk/eur/2015/758/contents/data.html)
