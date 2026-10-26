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
