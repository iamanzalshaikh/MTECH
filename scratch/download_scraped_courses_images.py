import os
import re
import json
import urllib.parse
import requests

def download_image(url, output_dir):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
    
    parsed_url = urllib.parse.urlparse(url)
    path_part = parsed_url.path.strip("/")
    safe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', path_part)
    domain_prefix = parsed_url.netloc.replace(".", "_")
    filename = f"{domain_prefix}_{safe_name}"
    
    filepath = os.path.join(output_dir, filename)
    
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        return filename
        
    print(f"Downloading: {url}")
    try:
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(r.content)
            return filename
        else:
            print(f"  Failed: status code {r.status_code}")
    except Exception as e:
        print(f"  Error: {e}")
    return None

def main():
    workspace_dir = r"c:\Users\ANZAL\Desktop\CAD TECH"
    public_images_dir = os.path.join(workspace_dir, "public", "images")
    os.makedirs(public_images_dir, exist_ok=True)
    
    json_path = os.path.join(workspace_dir, "data", "caddesk_courses.json")
    if not os.path.exists(json_path):
        print(f"JSON file not found: {json_path}")
        return
        
    with open(json_path, 'r', encoding='utf-8') as f:
        courses = json.load(f)
        
    print(f"Loaded {len(courses)} courses from JSON.")
    
    downloaded_count = 0
    for course in courses:
        img_url = course.get("image")
        if img_url and ("caddeskindia.com" in img_url or "mtechcomputers.in" in img_url):
            local_filename = download_image(img_url, public_images_dir)
            if local_filename:
                course["local_image"] = f"/images/{local_filename}"
                downloaded_count += 1
                
    # Save the updated JSON
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(courses, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully downloaded {downloaded_count} course images and updated the JSON database.")

if __name__ == "__main__":
    main()
