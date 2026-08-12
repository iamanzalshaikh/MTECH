const fs = require('fs');
const path = require('path');

const data = require(path.join(__dirname, '..', 'data', 'caddesk_courses.json'));

const bySlug = {};
data.forEach((c) => {
  const slug = c.url.replace(/^https?:\/\/[^/]+\/course\//, '').replace(/\/$/, '');
  bySlug[slug] = c;
});

// Confident 1:1 mapping: site course id -> scraped caddeskindia.com course slug.
// Only included where the underlying software/topic is unambiguous — no thematic guesses.
const mapping = {
  'autocad-civil-designer': ['autocad-civil-arch'],
  'staad-pro': ['staad-proadvance'],
  'etabs-structural': ['etabs'],
  'revit-structure': ['revit-structure'],
  '3dsmax-animation': ['3ds-max'],
  'sketchup-modeling': ['google-sketch-up'],
  'vray-rendering': ['v-ray'],
  'revit-architecture': ['revit-architecture'],
  'lumion-visualization': ['lumion'],
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
  // Merge two source courses (PLC + SCADA) into the site's combined "PLC SCADA" course.
  'plc-scada': ['plc', 'scada'],
  // CNC/CAM programming courses on caddesk are covered by one generic "CNC Programming" page.
  'nx-cam': ['cnc-programming'],
  'master-cam': ['cnc-programming'],
  // Site's "HTML, CSS & SASS" course matches caddesk's general "Web Design" (CSS/JS) course.
  'html-css-sass': ['web-design'],
};

function cleanTopics(topics) {
  return topics.map((t) => t.trim()).filter((t) => t.length > 0);
}

// Requirement: overview text must read "same to same" as caddeskindia.com —
// the full text, verbatim, not trimmed or paraphrased. The only substitution
// made is the brand name, since this is M-Tech Computers' site, not CAD Desk's.
function rebrand(text) {
  return text.replace(/CAD\s*DESK/gi, 'M-Tech Computers');
}

// The source site has a known copy-paste bug on a handful of pages: the
// closing sentence names the wrong software (leftover from another course's
// template). Correct those specific known cases rather than propagate them.
const overviewCorrections = {
  'data-science-with-python': [
    [/in the Revit Architecture software\.?$/i, 'for data science applications.'],
  ],
};

function fullOverview(overview, slug) {
  let text = (overview || '').trim();
  const fixes = overviewCorrections[slug];
  if (fixes) {
    fixes.forEach(([pattern, replacement]) => {
      text = text.replace(pattern, replacement);
    });
  }
  return rebrand(text);
}

function buildEntry(slugs) {
  const pairs = slugs.map((s) => [s, bySlug[s]]).filter(([, c]) => Boolean(c));
  if (pairs.length === 0) return null;
  const courses = pairs.map(([, c]) => c);

  const overviewParts = [];
  const highlights = [];
  const syllabus = [];

  pairs.forEach(([slug, course]) => {
    const prefix = courses.length > 1 ? `${course.title} — ` : '';
    const para = fullOverview(course.overview, slug);
    if (para) overviewParts.push(para);
    course.highlights.forEach((h) => {
      const clean = rebrand(h);
      if (clean && !highlights.includes(clean)) highlights.push(clean);
    });
    course.syllabus.forEach((section) => {
      const points = cleanTopics(section.topics).map(rebrand);
      if (points.length === 0) return;
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

const result = {};
for (const [id, slugs] of Object.entries(mapping)) {
  const entry = buildEntry(slugs);
  if (entry && entry.syllabus.length > 0) {
    result[id] = entry;
  } else {
    console.warn('No usable entry for', id, slugs);
  }
}

const header = `// Auto-generated from data/caddesk_courses.json (scraped from caddeskindia.com).
// Each entry provides the real course overview, highlights and syllabus
// for a matched course id in src/app/courses/page.tsx's coursesData.
// Regenerate via scratch/gen_course_details.js if the source scrape changes.

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

const body = JSON.stringify(result, null, 2) + ';\n';

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'courseDetails.ts'),
  header + body
);

console.log('Generated entries for', Object.keys(result).length, 'courses:', Object.keys(result).join(', '));
