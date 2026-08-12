/**
 * Merge placement board students (with photos) into placedStudents.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const board = JSON.parse(
  fs.readFileSync(path.join(root, 'data/placement_board_students.json'), 'utf8')
);
const tsPath = path.join(root, 'src/data/placedStudents.ts');
const src = fs.readFileSync(tsPath, 'utf8');

const existing2025 = [];

const boardNames = new Set(board.map((s) => s.name.toLowerCase()));
const merged2025 = [
  ...board,
  ...existing2025.filter((s) => !boardNames.has(s.name.toLowerCase())),
];

const formatted = JSON.stringify(merged2025, null, 4);

const re = /"2025-2026":\s*\[[\s\S]*?\n\s*\],/;
const newSrc = src.replace(re, `"2025-2026": ${formatted},`);

if (newSrc === src) {
  console.error('Replace failed');
  process.exit(1);
}

fs.writeFileSync(tsPath, newSrc);
console.log(`2025-2026: ${merged2025.length} students, ${merged2025.filter((s) => s.photo).length} with photos`);
