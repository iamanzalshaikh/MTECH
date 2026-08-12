import fs from 'fs';

const path = 'src/app/courses/page.tsx';
let src = fs.readFileSync(path, 'utf8');

function fixTitle(title) {
  let t = title;
  // "Something - Master X" -> "Something - X"
  t = t.replace(/ - Master /g, ' - ');
  // Leading "Master " -> "Masters in " for programming/full stack type OR plain name
  if (t.startsWith('Master ')) {
    const rest = t.slice(7);
    if (/^(C\+\+|Java|JavaScript|Full Stack|React|Node|CAM|3D)/i.test(rest)) {
      t = `Masters in ${rest}`;
    } else {
      t = rest;
    }
  }
  // "Course - Master X" already handled; trim duplicate "Course Course"
  t = t.replace(/Masters in Masters in /g, 'Masters in ');
  return t;
}

src = src.replace(/title: '([^']+)'/g, (match, title) => {
  const fixed = fixTitle(title);
  return `title: '${fixed}'`;
});

fs.writeFileSync(path, src);
console.log('Course titles updated');
