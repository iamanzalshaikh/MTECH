"""Extract placed students + photos from placement board DOCX."""
import json
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

DOCX = Path(r"C:\Users\ANZAL\Downloads\place student board.docx")
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "placed-students"
DATA_OUT = Path(__file__).resolve().parents[1] / "data" / "placement_board_students.json"

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
}


def slugify(name: str) -> str:
    s = name.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def clean_field(text: str, prefix: str) -> str:
    t = re.sub(rf"^{prefix}\s*:?\s*", "", text, flags=re.I).strip()
    return re.sub(r"\s+", " ", t)


def title_name(name: str) -> str:
    return " ".join(w.capitalize() for w in name.split())


def load_relationships(z: zipfile.ZipFile) -> dict[str, str]:
    rels = {}
    root = ET.fromstring(z.read("word/_rels/document.xml.rels"))
    for rel in root:
        rid = rel.attrib.get("Id")
        target = rel.attrib.get("Target")
        if rid and target:
            rels[rid] = target.replace("../", "")
    return rels


def cell_text(cell) -> str:
    return "".join(t.text or "" for t in cell.iter(f"{{{NS['w']}}}t")).strip()


def images_in_cell(cell, rels: dict[str, str]) -> list[str]:
    paths = []
    for blip in cell.iter(f"{{{NS['a']}}}blip"):
        rid = blip.attrib.get(f"{{{NS['r']}}}embed")
        if rid and rid in rels:
            paths.append(rels[rid])
    return paths


def parse_tables(z: zipfile.ZipFile, rels: dict[str, str]) -> list[dict]:
    root = ET.fromstring(z.read("word/document.xml"))
    students = []

    for tbl in root.findall(f".//{{{NS['w']}}}tbl"):
        rows = tbl.findall(f"{{{NS['w']}}}tr")
        if len(rows) < 5:
            continue

        # Photos are in row 0 (one per column)
        photo_cells = []
        for tc in rows[0].findall(f"{{{NS['w']}}}tc"):
            imgs = images_in_cell(tc, rels)
            photo_cells.append(imgs[0] if imgs else None)

        names = [clean_field(cell_text(tc), "Student Name") for tc in rows[1].findall(f"{{{NS['w']}}}tc")]
        companies = [
            clean_field(cell_text(tc), r"Company\s*Name?") for tc in rows[2].findall(f"{{{NS['w']}}}tc")
        ]
        roles = [clean_field(cell_text(tc), "Designation") for tc in rows[3].findall(f"{{{NS['w']}}}tc")]
        branches = [clean_field(cell_text(tc), "Branch") for tc in rows[4].findall(f"{{{NS['w']}}}tc")]

        for i in range(3):
            name = title_name(names[i]) if i < len(names) and names[i] else ""
            company = companies[i].strip(" :") if i < len(companies) else ""
            role = roles[i].strip(" .") if i < len(roles) else ""
            branch = branches[i].strip(" .") if i < len(branches) else ""
            if not name:
                continue
            students.append(
                {
                    "name": name,
                    "role": role or "Placed Candidate",
                    "company": company or "—",
                    "branch": branch or None,
                    "source_image": photo_cells[i] if i < len(photo_cells) else None,
                }
            )

    return students


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(DOCX) as z:
        rels = load_relationships(z)
        students = parse_tables(z, rels)

        for s in students:
            src = s.pop("source_image", None)
            if not src:
                continue
            media_name = Path(src).name
            try:
                data = z.read(f"word/{src}" if not src.startswith("media/") else f"word/{src}")
            except KeyError:
                try:
                    data = z.read(src)
                except KeyError:
                    data = z.read(f"word/media/{media_name}")
            ext = Path(media_name).suffix.lower() or ".jpeg"
            filename = f"{slugify(s['name'])}{ext}"
            dest = OUT_DIR / filename
            dest.write_bytes(data)
            s["photo"] = f"/placed-students/{filename}"

    # dedupe by name
    seen = set()
    unique = []
    for s in students:
        key = s["name"].lower()
        if key in seen:
            continue
        seen.add(key)
        unique.append(s)

    DATA_OUT.write_text(json.dumps(unique, indent=2, ensure_ascii=False), encoding="utf-8")
    with_photo = sum(1 for s in unique if s.get("photo"))
    print(f"Students: {len(unique)}, with photos: {with_photo}")
    print(f"Saved to {OUT_DIR} and {DATA_OUT}")


if __name__ == "__main__":
    main()
