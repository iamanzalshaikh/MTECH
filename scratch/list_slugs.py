import json
from pathlib import Path

data = json.loads(Path('data/caddesk_courses.json').read_text(encoding='utf-8'))
seen = {}
for c in data:
    slug = c['url'].split('/course/')[-1].strip('/')
    if slug not in seen:
        seen[slug] = {
            'title': c['title'],
            'img': c.get('local_image') or c.get('image'),
            'syllabus': len(c.get('syllabus', [])),
        }
for slug in sorted(seen):
    s = seen[slug]
    print(f"{slug:42} | {s['title'][:30]:30} | syllabus:{s['syllabus']:2}")
