"""
Erzeugt die App-Icons icon-180/192/512.png (einfarbig mit Kürzel).

    python tools/icons.py "#0b5cd5" "GP"

Braucht Pillow (pip install pillow). Für einen neuen Trainer einfach Farbe und Kürzel ändern.
"""
import os
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    farbe, text = sys.argv[1], sys.argv[2]
    for size in (180, 192, 512):
        img = Image.new("RGB", (size, size), farbe)
        draw = ImageDraw.Draw(img)
        groesse = int(size * 0.42)
        try:
            font = ImageFont.truetype("arialbd.ttf", groesse)
        except OSError:
            font = ImageFont.load_default(size=groesse)
        box = draw.textbbox((0, 0), text, font=font)
        w, h = box[2] - box[0], box[3] - box[1]
        draw.text(((size - w) / 2 - box[0], (size - h) / 2 - box[1]), text, fill="white", font=font)
        img.save(os.path.join(ROOT, f"icon-{size}.png"))
    print("Icons geschrieben: icon-180.png, icon-192.png, icon-512.png")


if __name__ == "__main__":
    main()
