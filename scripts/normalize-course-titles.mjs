import fs from 'fs';

const path = 'src/app/courses/page.tsx';
let src = fs.readFileSync(path, 'utf8');

const titleMap = {
  'ETABS Mastery: Structural Analysis & Design Course': 'ETABS Structural Analysis & Design Course',
  'Masters in 3D Modeling & Animation with 3ds Max': '3D Modeling & Animation with 3ds Max',
  'Professional Photoshop Mastery Course - Design Like a Pro': 'Professional Photoshop Course — Design Like a Pro',
  'Lumion 10 Masterclass - Create Stunning 3D Visualizations Fast': 'Lumion 10 — Create Stunning 3D Visualizations',
  'Masters in CAM Programming Course for CNC Jobs': 'CAM Programming for CNC Jobs',
  'Masters in C++ Programming Course (Beginner to Advanced)': 'C++ Programming Course (Beginner to Advanced)',
  'Masters in Java Programming from Scratch': 'Java Programming from Scratch',
  'Masters in JavaScript from Basics to Advanced': 'JavaScript from Basics to Advanced',
  'Masters in Full Stack Web Development': 'Full Stack Web Development',
  'Mastering Artificial Intelligence: From Basics to Real-World Applications': 'Artificial Intelligence — From Basics to Real-World Applications',
  'Masters in React Development from Scratch': 'React Development from Scratch',
  'Masters in Node.js Development Course in India': 'Node.js Development Course',
  'Revit MEP Mastery Course - Design Smarter, Build Faster': 'Revit MEP Design Course — Design Smarter, Build Faster',
  'Advanced Excel Mastery: Data, Automation & Analysis': 'Advanced Excel — Data, Automation & Analysis',
  'SEO & Search Engine Marketing (SEM) Mastery': 'SEO & Search Engine Marketing (SEM) Course',
  'B2B & B2C Lead Generation Masterclass': 'B2B & B2C Lead Generation Course',
};

for (const [oldTitle, newTitle] of Object.entries(titleMap)) {
  src = src.replaceAll(`title: '${oldTitle}'`, `title: '${newTitle}'`);
}

// Catch any remaining title patterns
src = src.replace(/title: 'Masters in ([^']+)'/g, "title: '$1'");
src = src.replace(/title: 'Master ([^']+)'/g, "title: '$1'");
src = src.replace(/title: 'Mastering ([^']+)'/g, "title: '$1'");
src = src.replace(/ Mastery([^']*)'/g, " Course$1'");
src = src.replace(/ Masterclass([^']*)'/g, " Course$1'");

fs.writeFileSync(path, src);

const remaining = [...src.matchAll(/title: '([^']*(?:Master|Mastery|Masterclass|Mastering)[^']*)'/g)].map((m) => m[1]);
console.log('Remaining titles with Master variants:', remaining.length ? remaining : 'none');
console.log('Done');
