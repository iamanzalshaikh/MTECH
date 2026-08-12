import fs from 'fs';
import path from 'path';

const uploadPath = path.join(
  process.env.USERPROFILE || '',
  '.cursor/projects/c-Users-ANZAL-Desktop-CAD-TECH/uploads/placed-students-0.md'
);
const text = fs.readFileSync(uploadPath, 'utf8');
const blocks = text.split(/\n(?=\* [A-Za-z])/);
const students = [];

for (const block of blocks) {
  const header = block.match(/^\* (.+?) - (.+?) \| MIT Placed Student/);
  if (!header) continue;
  const name = header[1].trim();
  const role = header[2].trim();
  const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const companyLine = lines.find(
    (l, i) =>
      i >= 3 &&
      !l.startsWith('*') &&
      !l.startsWith('Placed as') &&
      !l.includes('img') &&
      l !== name
  );
  students.push({ name, role, company: companyLine || '—' });
}

const mtech2025 = [
  { name: 'Vaishnavi Gaikar', role: 'MIS Executive', company: 'Axis Bank' },
  { name: 'Harsh Dabhi', role: 'React Developer', company: 'Zencommerce' },
  { name: 'Nidhi Shukla', role: 'MIS Sales Co-Ordinator', company: 'MARS Lifestyle PVT LTD' },
  { name: 'Prathamesh Gaikwad', role: 'MIS Executive Analyst', company: 'Brocus IT Solutions Pvt. Ltd' },
  { name: 'Preeti Benvanshi', role: 'Jr Software Developer', company: 'Techno Purple' },
];

const batches = {
  '2025-2026': mtech2025,
  '2024-2025': students.slice(0, 55),
  '2023-2024': students.slice(55, 110),
  '2022-2023': students.slice(110, 165),
  '2021-2022': students.slice(165),
};

const fileContent = `export type PlacedStudent = {
  name: string;
  role: string;
  company: string;
};

export const placementYears = [
  '2025-2026',
  '2024-2025',
  '2023-2024',
  '2022-2023',
  '2021-2022',
] as const;

export type PlacementYear = (typeof placementYears)[number];

export const placedStudentsByYear: Record<PlacementYear, PlacedStudent[]> = ${JSON.stringify(batches, null, 2)} as Record<PlacementYear, PlacedStudent[]>;

export const companyLogos = [
  { name: 'Larsen & Toubro', abbr: 'L&T' },
  { name: 'Reliance', abbr: 'RIL' },
  { name: 'Mahindra', abbr: 'M&M' },
  { name: 'Siemens', abbr: 'SIEMENS' },
  { name: 'Unilever', abbr: 'HUL' },
  { name: 'Emerson', abbr: 'EMERSON' },
  { name: 'Axis Bank', abbr: 'AXIS' },
  { name: 'Zencommerce', abbr: 'ZEN' },
];

export const placementTestimonial = {
  quote:
    "I completed my engineering degree and joined M-Tech Computers for CAD/CAM and IT training. The practical labs, project work, and placement support helped me land a role in a reputed company. I strongly recommend M-Tech Computers to anyone serious about building industry-ready skills.",
  name: 'Pratik Dubal',
  course: 'Master Diploma Course',
};
`;

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/placedStudents.ts', fileContent);
console.log('Done:', Object.entries(batches).map(([k, v]) => `${k}:${v.length}`).join(', '));
