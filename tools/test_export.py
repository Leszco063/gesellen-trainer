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
            with open(os.path.join(d, "da.svg"), "w", encoding="utf-8") as f:
                f.write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><title>T</title></svg>')
            self.assertEqual(self.fehler([frage(bild="da.svg")], bilder_dir=d), [])
            self.assertTrue(any("Bild" in e for e in self.fehler([frage(bild="fehlt.svg")], bilder_dir=d)))

    def test_bild_kaputt(self):
        with tempfile.TemporaryDirectory() as d:
            with open(os.path.join(d, "kaputt.svg"), "w", encoding="utf-8") as f:
                f.write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><g></svg>')
            with open(os.path.join(d, "ohne.svg"), "w", encoding="utf-8") as f:
                f.write('<svg xmlns="http://www.w3.org/2000/svg" width="640"><title>T</title></svg>')
            self.assertTrue(any("kaputt.svg" in e for e in self.fehler([frage(bild="kaputt.svg")], bilder_dir=d)))
            self.assertTrue(any("viewBox" in e for e in self.fehler([frage(bild="ohne.svg")], bilder_dir=d)))

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
