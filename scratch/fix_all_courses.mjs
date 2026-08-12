/**
 * Full course pipeline:
 * 1. Expanded caddesk slug mapping -> courseDetails.ts
 * 2. Explicit per-course thumbnail images -> page.tsx
 * Run: node scratch/fix_all_courses.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const require = createRequire(import.meta.url);

const scraped = require(path.join(root, 'data/caddesk_courses.json'));
const bySlug = Object.fromEntries(
  scraped.map((c) => [c.url.replace(/^https?:\/\/[^/]+\/course\//, '').replace(/\/$/, ''), c])
);

// site course id -> caddeskindia slug(s)
const slugMapping = {
  'autocad-civil-designer': ['autocad-civil-arch'],
  'staad-pro': ['staad-proadvance'],
  'etabs-structural': ['etabs'],
  'revit-structure': ['revit-structure'],
  '3dsmax-animation': ['3ds-max'],
  'sketchup-modeling': ['google-sketch-up'],
  'vray-rendering': ['v-ray'],
  'revit-architecture': ['revit-architecture'],
  'lumion-visualization': ['lumion'],
  'billing-bec': ['quantity-takeoff'],
  'autocad-mechanical': ['autocad-mechanical'],
  'solidworks-mechanical': ['solidworks'],
  'catia': ['catia-advanced'],
  'creo-parametric': ['creo'],
  'ansys-workbench': ['ansys-workbench'],
  'ansys-fluent': ['ansys'],
  'revit-mep-design': ['revit-mep'],
  'revit-mep-electrical': ['revit-mep'],
  'autocad-electrical': ['autocad-electrical'],
  'matlab': ['mat-lab-electrical'],
  'tally-prime': ['tally-erp'],
  'advanced-excel': ['advanced-excel'],
  'data-science': ['data-science-with-python'],
  'data-analytic': ['data-science-with-python'],
  'java-programming': ['core-java'],
  'primavera-p6': ['primavera'],
  'cpp-programming': ['c-plus-plus-programming'],
  'plc-scada': ['plc', 'scada'],
  'nx-cam': ['cnc-programming'],
  'master-cam': ['cnc-programming'],
  'html-css-sass': ['web-design'],
  'javascript': ['web-design'],
  'full-stack-web': ['web-design', 'core-java', 'php'],
  'mastering-artificial-intelligence': ['data-science-with-python'],
  'react-dev-scratch': ['web-design', 'core-java'],
  'master-react-js': ['web-design'],
  'master-node-js': ['web-design', 'php'],
  'master-angular': ['asp-net-mvc'],
  'mern-stack-web-development': ['web-design', 'core-java', 'php'],
  'golang-programming': ['core-python-programming'],
  'msp-training': ['ms-project'],
  'strategic-ppm': ['primavera', 'ms-project'],
  'pmp-certification': ['primavera', 'ms-project'],
  'ms-office': ['advanced-excel'],
  'gst-certification': ['tally-erp'],
  'basic-computer': ['c-programming-2'],
  'sap-certification': ['tally-erp'],
  'google-ads': ['digital-marketing'],
  'fb-insta-ads': ['digital-marketing'],
  'seo-sem': ['digital-marketing'],
  'canva-graphics': ['digital-marketing'],
  'keyword-research': ['digital-marketing'],
  'lead-generation': ['digital-marketing'],
};

// Explicit thumbnail per course id (software-accurate local images)
const courseImages = {
  'autocad-civil-designer': '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-CE-1.jpg',
  'staad-pro': '/images/caddeskindia_com_wp-content_uploads_2021_03_STAAD-Pro.jpg',
  'etabs-structural': '/images/caddeskindia_com_wp-content_uploads_2021_02_ETAB-1.jpg',
  'revit-structure': '/images/caddeskindia_com_wp-content_uploads_2021_02_REVIT-ST-1.jpg',
  'safe-safety': '/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg',
  'rcdc-detailing': '/images/caddeskindia_com_wp-content_uploads_2021_03_STAAD-Pro.jpg',
  'tekla-structures': '/images/caddeskindia_com_wp-content_uploads_2021_02_REVIT-ST-1.jpg',
  '3dsmax-animation': '/images/caddeskindia_com_wp-content_uploads_2021_03_3ds-max-int.jpg',
  'sketchup-modeling': '/images/caddeskindia_com_wp-content_uploads_2021_02_Sketch-up.jpg',
  'vray-rendering': '/images/caddeskindia_com_wp-content_uploads_2021_03_V-ray.jpg',
  'revit-architecture': '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-ar-in.jpg',
  'photoshop-graphics': '/images/caddeskindia_com_wp-content_uploads_2023_09_1.png',
  'billing-bec': '/images/caddeskindia_com_wp-content_uploads_2021_03_QTO.jpg',
  'lumion-visualization': '/images/caddeskindia_com_wp-content_uploads_2021_03_Lumion-3d.jpg',
  'autocad-mechanical': '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
  'solidworks-mechanical': '/images/caddeskindia_com_wp-content_uploads_2021_02_Solidworks.jpg',
  'catia': '/images/caddeskindia_com_wp-content_uploads_2021_03_catia-in.jpg',
  'nx-cad-expert': '/images/caddeskindia_com_wp-content_uploads_2021_02_Fusion-360.jpg',
  'creo-parametric': '/images/caddeskindia_com_wp-content_uploads_2021_02_Creo.jpg',
  'gdt-course': '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
  'nx-cam': '/images/caddeskindia_com_wp-content_uploads_2021_02_CNC.jpg',
  'ansys-workbench': '/images/caddeskindia_com_wp-content_uploads_2021_02_ANSYS-WB.jpg',
  'ansys-fluent': '/images/caddeskindia_com_wp-content_uploads_2021_02_ANSYS-CFD.jpg',
  'piping-design': '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
  'sp3d-piping': '/sp3d.png',
  'e3d-plant': '/e3d.png',
  'revit-mep-design': '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-MEP.jpg',
  'master-cam': '/images/caddeskindia_com_wp-content_uploads_2021_02_CNC-3.jpg',
  'cpp-programming': '/images/caddeskindia_com_wp-content_uploads_2021_01_c-1.jpg',
  'java-programming': '/images/caddeskindia_com_wp-content_uploads_2021_03_JAVA.jpg',
  'javascript': '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
  'full-stack-web': '/images/caddeskindia_com_wp-content_uploads_2021_03_web-design-Int.jpg',
  'mastering-artificial-intelligence': '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
  'data-science': '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
  'data-analytic': '/images/caddeskindia_com_wp-content_uploads_2021_03_DS-with-Python.jpg',
  'react-dev-scratch': '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
  'html-css-sass': '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
  'golang-programming': '/images/caddeskindia_com_wp-content_uploads_2021_01_Python.jpg',
  'master-node-js': '/images/caddeskindia_com_wp-content_uploads_2021_03_PHP.jpg',
  'master-angular': '/images/caddeskindia_com_wp-content_uploads_2021_01_ASP.net_.jpg',
  'master-react-js': '/images/caddeskindia_com_wp-content_uploads_2021_03_Web-Design.jpg',
  'mern-stack-web-development': '/images/caddeskindia_com_wp-content_uploads_2021_03_web-design-Int.jpg',
  'autocad-electrical': '/images/caddeskindia_com_wp-content_uploads_2021_03_acad-EE-In.jpg',
  'revit-mep-electrical': '/images/caddeskindia_com_wp-content_uploads_2021_03_Revit-MEP.jpg',
  'pcb-design': '/images/caddeskindia_com_wp-content_uploads_2021_02_Eplan.jpg',
  'etap-electrical': '/images/caddeskindia_com_wp-content_uploads_2021_02_MATLAB-1.jpg',
  'matlab': '/images/caddeskindia_com_wp-content_uploads_2021_02_MATLAB-1.jpg',
  'plc-scada': '/images/caddeskindia_com_wp-content_uploads_2021_02_PLC-1.jpg',
  'primavera-p6': '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
  'msp-training': '/images/caddeskindia_com_wp-content_uploads_2021_02_MSP.jpg',
  'strategic-ppm': '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
  'pmp-certification': '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
  'six-sigma': '/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg',
  'ms-office': '/images/caddeskindia_com_wp-content_uploads_2021_03_Excel.jpg',
  'tally-prime': '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
  'gst-certification': '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
  'advanced-excel': '/images/caddeskindia_com_wp-content_uploads_2021_03_Excel.jpg',
  'basic-computer': '/images/caddeskindia_com_wp-content_uploads_2021_01_C.jpg',
  'sap-certification': '/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg',
  'rhino-matrix': '/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-3.jpg',
  'google-ads': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'fb-insta-ads': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'seo-sem': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'canva-graphics': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'keyword-research': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'lead-generation': '/images/caddeskindia_com_wp-content_uploads_2021_03_Digital_Marketting.jpg',
  'autocad-2d-piping-design': '/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg',
  'smartplant-3d-sp3d': '/sp3d.png',
  'everything-3d-e3d': '/e3d.png',
  'autocad-plant-3d': '/images/caddeskindia_com_wp-content_uploads_2021_03_civil-3d.jpg',
};

function rebrand(text) {
  return text.replace(/CAD\s*DESK/gi, 'M-Tech Computers');
}

function cleanTopics(topics) {
  return topics.map((t) => t.trim()).filter(Boolean);
}

function buildEntry(slugs) {
  const pairs = slugs.map((s) => [s, bySlug[s]]).filter(([, c]) => Boolean(c));
  if (!pairs.length) return null;
  const courses = pairs.map(([, c]) => c);
  const overviewParts = [];
  const highlights = [];
  const syllabus = [];

  pairs.forEach(([slug, course]) => {
    const prefix = courses.length > 1 ? `${course.title} — ` : '';
    let text = (course.overview || '').trim();
    if (text) overviewParts.push(rebrand(text));
    course.highlights?.forEach((h) => {
      const clean = rebrand(h);
      if (clean && !highlights.includes(clean)) highlights.push(clean);
    });
    course.syllabus?.forEach((section) => {
      const points = cleanTopics(section.topics).map(rebrand);
      if (!points.length) return;
      syllabus.push({
        title: rebrand(courses.length > 1 ? `${prefix}${section.section_title}` : section.section_title),
        points,
      });
    });
  });

  return {
    overview: overviewParts.join('\n\n'),
    highlights: highlights.slice(0, 8),
    syllabus,
  };
}

// --- Generate courseDetails.ts ---
const result = {};
for (const [id, slugs] of Object.entries(slugMapping)) {
  const entry = buildEntry(slugs);
  if (entry?.syllabus?.length) result[id] = entry;
  else console.warn('No syllabus for', id);
}

const header = `// Auto-generated from data/caddesk_courses.json (scraped from caddeskindia.com).
// Regenerate via: node scratch/fix_all_courses.mjs

export interface CourseDetailSyllabusSection {
  title: string;
  points: string[];
}

export interface CourseDetailEntry {
  overview: string;
  highlights: string[];
  syllabus: CourseDetailSyllabusSection[];
}

export const courseDetails: Record<string, CourseDetailEntry> = `;

fs.writeFileSync(
  path.join(root, 'src/data/courseDetails.ts'),
  header + JSON.stringify(result, null, 2) + ';\n'
);
console.log('courseDetails.ts:', Object.keys(result).length, 'courses');

// --- Update images in page.tsx ---
const pagePath = path.join(root, 'src/app/courses/page.tsx');
let page = fs.readFileSync(pagePath, 'utf8');
let imageUpdates = 0;

for (const [id, img] of Object.entries(courseImages)) {
  const blockRe = new RegExp(
    `(\\{\\s*id:\\s*'${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?image:\\s*)'([^']*)'`,
    'm'
  );
  if (blockRe.test(page)) {
    page = page.replace(blockRe, `$1'${img}'`);
    imageUpdates++;
  } else {
    console.warn('Could not find course block for image update:', id);
  }
}

fs.writeFileSync(pagePath, page);
console.log('Updated images for', imageUpdates, 'courses in page.tsx');

// Prefer scraped local_image when we have slug mapping and no explicit override needed
for (const [id, slugs] of Object.entries(slugMapping)) {
  const primary = bySlug[slugs[0]];
  if (primary?.local_image && !courseImages[id]?.includes('sp3d') && !courseImages[id]?.includes('e3d')) {
    // keep explicit mapping — already set above
  }
}

console.log('Done.');
