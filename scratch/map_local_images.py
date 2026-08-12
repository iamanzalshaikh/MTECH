import os
import re
import json

def get_fallback_image(category):
    cat_lower = category.lower()
    if 'civil' in cat_lower or 'arch' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2026_04_Civil-arch.jpg"
    elif 'mechanical' in cat_lower or 'automobile' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2026_04_Mechanical.jpg"
    elif 'electrical' in cat_lower or 'electronics' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2026_04_ELECTRICAL.jpg"
    elif 'it ' in cat_lower or 'cs' in cat_lower or 'programming' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2026_04_CS.jpg"
    elif 'planning' in cat_lower or 'management' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2021_02_Primavera.jpg"
    elif 'jewellery' in cat_lower:
        return "/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-3.jpg"
    elif 'marketing' in cat_lower:
        return "/images/caddeskindia_com_wp-content_themes_caddesk_official_new_assets_images_category_ctg-1.jpg"
    elif 'accounting' in cat_lower or 'tally' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2021_03_Tally.jpg"
    elif 'piping' in cat_lower:
        return "/images/caddeskindia_com_wp-content_uploads_2021_02_ACAD-ME-1.jpg"
    return "/images/caddeskindia_com_wp-content_uploads_2025_02_header_logo.webp"

def clean_title(title):
    title = title.lower()
    title = re.sub(r'[^a-z0-9\s]', ' ', title)
    words = title.split()
    # Remove noise words
    noise = {'course', 'training', 'mastery', 'professional', 'certified', 'masterclass', 'master', 'skills', 'learn', 'advanced', 'basics', 'expert', 'scratch', 'beginners'}
    return [w for w in words if w not in noise]

def find_best_match(tsx_title, json_courses):
    tsx_words = set(clean_title(tsx_title))
    if not tsx_words:
        return None
        
    best_match = None
    max_overlap = 0
    
    for c in json_courses:
        json_words = set(clean_title(c['title']))
        overlap = len(tsx_words.intersection(json_words))
        if overlap > max_overlap:
            max_overlap = overlap
            best_match = c
            
    # Require at least some minimal overlap (e.g. 1 major word)
    if max_overlap >= 1:
        return best_match
    return None

def main():
    workspace_dir = r"c:\Users\ANZAL\Desktop\CAD TECH"
    tsx_path = os.path.join(workspace_dir, "src", "app", "courses", "page.tsx")
    json_path = os.path.join(workspace_dir, "data", "caddesk_courses.json")
    
    if not os.path.exists(tsx_path) or not os.path.exists(json_path):
        print("Required files not found!")
        return
        
    with open(json_path, 'r', encoding='utf-8') as f:
        json_courses = json.load(f)
        
    with open(tsx_path, 'r', encoding='utf-8') as f:
        tsx_content = f.read()
        
    # Find all course definitions in TSX
    # Format of definition:
    #   {
    #     id: '...',
    #     title: '...',
    #     category: '...',
    #     image: '...',
    #     ...
    #   }
    
    # We will search and replace the image fields inside the coursesData array
    # Let's find the coursesData block
    match = re.search(r'export const coursesData: Course\[\] = \[(.*?)\];', tsx_content, re.DOTALL)
    if not match:
        print("Could not find coursesData array in TSX!")
        return
        
    courses_block = match.group(1)
    
    # Split the block into individual course objects (split by curly braces)
    # We can parse the individual course blocks
    course_objects = re.findall(r'(\{\s*id:\s*\'[^\']+\'.*?\}\s*),?', courses_block, re.DOTALL)
    print(f"Found {len(course_objects)} course objects in TSX.")
    
    updated_block = courses_block
    matched_count = 0
    fallback_count = 0
    
    for obj in course_objects:
        # Extract fields
        id_m = re.search(r'id:\s*\'([^\']+)\'', obj)
        title_m = re.search(r'title:\s*\'([^\']+)\'', obj)
        cat_m = re.search(r'category:\s*\'([^\']+)\'', obj)
        img_m = re.search(r'image:\s*\'([^\']+)\'', obj)
        
        if id_m and title_m and cat_m and img_m:
            course_id = id_m.group(1)
            title = title_m.group(1)
            category = cat_m.group(1)
            old_image = img_m.group(1)
            
            # Find best match in JSON
            matched_course = find_best_match(title, json_courses)
            
            new_image = None
            if matched_course and 'local_image' in matched_course:
                new_image = matched_course['local_image']
                matched_count += 1
                print(f"Match: '{title}' -> '{matched_course['title']}' ({new_image})")
            else:
                new_image = get_fallback_image(category)
                fallback_count += 1
                print(f"No match for '{title}' (Category: {category}). Fallback: {new_image}")
                
            # Replace in updated_block
            # Build the exact line to replace
            old_line = f"image: '{old_image}'"
            new_line = f"image: '{new_image}'"
            
            # We want to replace this image line ONLY within this specific course block in the block string
            # To do this safely, we construct the block with the updated image and replace it
            updated_obj = obj.replace(old_line, new_line)
            updated_block = updated_block.replace(obj, updated_obj)
            
    # Now put the updated coursesData back into tsx_content
    new_tsx_content = tsx_content.replace(courses_block, updated_block)
    
    # Write back the updated TSX file
    with open(tsx_path, 'w', encoding='utf-8') as f:
        f.write(new_tsx_content)
        
    print(f"Finished updating TSX. Matches: {matched_count}, Fallbacks: {fallback_count}")

if __name__ == "__main__":
    main()
