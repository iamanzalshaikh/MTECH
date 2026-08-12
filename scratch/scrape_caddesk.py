import re
import json
import time
import requests
from bs4 import BeautifulSoup

def clean_text(text):
    if not text:
        return ""
    # Clean whitespace and weird chars
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def scrape_course_details(url):
    print(f"  Scraping course: {url}")
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
        if response.status_code != 200:
            print(f"    Failed to fetch {url}: Status code {response.status_code}")
            return None
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Course Overview
        overview = []
        overview_div = soup.find('div', class_='about-content-wrap')
        if overview_div:
            # Get all paragraphs or lists under this div
            for p in overview_div.find_all(['p', 'ul', 'ol', 'em']):
                p_text = clean_text(p.get_text())
                if p_text and p_text not in overview:
                    overview.append(p_text)
        else:
            # Backup: search by heading
            heading = soup.find(lambda tag: tag.name in ['h2', 'h3'] and 'overview' in tag.get_text().lower())
            if heading:
                curr = heading.next_sibling
                while curr:
                    if curr.name in ['p', 'ul', 'ol']:
                        p_text = clean_text(curr.get_text())
                        if p_text:
                            overview.append(p_text)
                    elif curr.name in ['h2', 'h3', 'div']:
                        break
                    curr = curr.next_sibling
        
        overview_text = "\n\n".join(overview) if overview else ""
        
        # Course Highlights
        highlights = []
        feature_section = soup.find('div', class_='feature')
        if feature_section:
            for li in feature_section.find_all('li'):
                text = clean_text(li.get_text())
                if text:
                    highlights.append(text)
                    
        # Syllabus / Course Contents
        syllabus = []
        # Find accordion for course content (usually id starts with accordionExample)
        accordion = soup.find('div', id=re.compile(r'accordionExample$'))
        if not accordion:
            # Try finding any accordion class
            accordion = soup.find('div', class_='faq-accordion')
            
        if accordion:
            items = accordion.find_all('div', class_='accordion-item')
            for item in items:
                header = item.find('span', class_='title')
                if not header:
                    header = item.find('button', class_='accordion-button')
                
                body = item.find('div', class_='accordion-body')
                if header and body:
                    title_text = clean_text(header.get_text())
                    # extract list items if any
                    body_items = [clean_text(li.get_text()) for li in body.find_all('li')]
                    if not body_items:
                        body_items = [clean_text(body.get_text())]
                    
                    syllabus.append({
                        "section_title": title_text,
                        "topics": body_items
                    })
        
        # FAQs
        faqs = []
        faq_accordion = soup.find('div', id=re.compile(r'accordionExamplew'))
        if faq_accordion:
            items = faq_accordion.find_all('div', class_='accordion-item')
            for item in items:
                q_elem = item.find('span', class_='title') or item.find('button', class_='accordion-button')
                a_elem = item.find('div', class_='accordion-body')
                if q_elem and a_elem:
                    faqs.append({
                        "question": clean_text(q_elem.get_text()),
                        "answer": clean_text(a_elem.get_text())
                    })
                    
        return {
            "overview": overview_text,
            "highlights": highlights,
            "syllabus": syllabus,
            "faqs": faqs
        }
        
    except Exception as e:
        print(f"    Error scraping course details {url}: {e}")
        return None

def main():
    categories = [
        {
            "name": "Civil & Architecture",
            "url": "https://caddeskindia.com/categories/civil-architecture/"
        },
        {
            "name": "Electrical & Electronics",
            "url": "https://caddeskindia.com/categories/electrical/"
        },
        {
            "name": "Mechanical & Automobile",
            "url": "https://caddeskindia.com/categories/mechanical/"
        },
        {
            "name": "Internships",
            "url": "https://caddeskindia.com/categories/internship-program/"
        },
        {
            "name": "CS & IT",
            "url": "https://caddeskindia.com/categories/cs-it/"
        }
    ]
    
    scraped_data = []
    
    for cat in categories:
        print(f"Scraping category: {cat['name']} ({cat['url']})")
        try:
            response = requests.get(cat['url'], headers={"User-Agent": "Mozilla/5.0"}, timeout=15)
            if response.status_code != 200:
                print(f"Failed to fetch category {cat['name']}: {response.status_code}")
                continue
                
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find all courses on page
            course_cards = soup.find_all('div', class_='single-course')
            print(f"Found {len(course_cards)} courses in {cat['name']}")
            
            for card in course_cards:
                title_elem = card.find('h4', class_='title') or card.find('h4')
                link_elem = card.find('a')
                img_elem = card.find('img')
                desc_elem = card.find('div', class_='content')
                if desc_elem:
                    desc_p = desc_elem.find('p')
                    desc_text = clean_text(desc_p.get_text()) if desc_p else ""
                else:
                    desc_text = ""
                
                if title_elem and link_elem:
                    title = clean_text(title_elem.get_text())
                    url = link_elem.get('href')
                    image_url = img_elem.get('src') if img_elem else ""
                    
                    # Dedup check
                    exists = False
                    for course in scraped_data:
                        if course['url'] == url:
                            # Just add category
                            if cat['name'] not in course['categories']:
                                course['categories'].append(cat['name'])
                            exists = True
                            break
                            
                    if not exists:
                        # Scrape course inner page
                        details = scrape_course_details(url)
                        time.sleep(1) # Be nice to server
                        
                        course_obj = {
                            "title": title,
                            "url": url,
                            "image": image_url,
                            "short_description": desc_text,
                            "categories": [cat['name']],
                            "overview": details['overview'] if details else "",
                            "highlights": details['highlights'] if details else [],
                            "syllabus": details['syllabus'] if details else [],
                            "faqs": details['faqs'] if details else []
                        }
                        scraped_data.append(course_obj)
                        
        except Exception as e:
            print(f"Error scraping category {cat['name']}: {e}")
            
    # Save JSON data
    output_json = "data/caddesk_courses.json"
    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(scraped_data, f, indent=2, ensure_ascii=False)
    print(f"Successfully saved {len(scraped_data)} courses to {output_json}")
    
    # Save Markdown summary
    output_md = "data/caddesk_courses_summary.md"
    with open(output_md, 'w', encoding='utf-8') as f:
        f.write("# CAD Desk Scraped Courses Summary\n\n")
        f.write(f"Total courses scraped: {len(scraped_data)}\n\n")
        
        # Group by category
        by_cat = {}
        for course in scraped_data:
            for cat_name in course['categories']:
                if cat_name not in by_cat:
                    by_cat[cat_name] = []
                by_cat[cat_name].append(course)
                
        for cat_name, courses in by_cat.items():
            f.write(f"## {cat_name} ({len(courses)} courses)\n\n")
            for c in courses:
                f.write(f"### {c['title']}\n")
                f.write(f"- **URL**: {c['url']}\n")
                f.write(f"- **Short Description**: {c['short_description']}\n")
                if c['highlights']:
                    f.write("- **Highlights**:\n")
                    for hl in c['highlights']:
                        f.write(f"  - {hl}\n")
                if c['overview']:
                    # truncate overview to first paragraph
                    first_para = c['overview'].split('\n\n')[0]
                    f.write(f"- **Overview**: {first_para}\n")
                if c['syllabus']:
                    f.write("- **Syllabus Sections**:\n")
                    for section in c['syllabus']:
                        f.write(f"  - {section['section_title']} ({len(section['topics'])} topics)\n")
                f.write("\n")
                
    print(f"Successfully saved summary to {output_md}")

if __name__ == "__main__":
    main()
