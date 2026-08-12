import os
import re
import urllib.parse
import requests

def download_image(url, output_dir):
    # Setup headers to bypass hotlinking protection
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://caddeskindia.com/'
    }
    
    # Generate a unique and safe local filename
    parsed_url = urllib.parse.urlparse(url)
    path_part = parsed_url.path.strip("/")
    # Replace slashes and special chars with underscores
    safe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', path_part)
    # Add domain prefix to prevent any cross-domain collision
    domain_prefix = parsed_url.netloc.replace(".", "_")
    filename = f"{domain_prefix}_{safe_name}"
    
    filepath = os.path.join(output_dir, filename)
    
    # If already downloaded, just return the name
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        return filename
        
    print(f"Downloading: {url} -> {filename}")
    try:
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(r.content)
            return filename
        else:
            print(f"  Failed to download {url}: Status code {r.status_code}")
            # Try without referer
            r2 = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
            if r2.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(r2.content)
                return filename
            print(f"  Failed again: Status code {r2.status_code}")
    except Exception as e:
        print(f"  Error downloading {url}: {e}")
    return None

def main():
    workspace_dir = r"c:\Users\ANZAL\Desktop\CAD TECH"
    src_dir = os.path.join(workspace_dir, "src")
    public_images_dir = os.path.join(workspace_dir, "public", "images")
    
    # Create public/images directory if it doesn't exist
    os.makedirs(public_images_dir, exist_ok=True)
    
    # Find all files to scan
    scan_extensions = ('.tsx', '.ts', '.css', '.js')
    files_to_scan = []
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith(scan_extensions):
                files_to_scan.append(os.path.join(root, file))
                
    # Also scan layout.tsx or other root level files if they are in src
    # Let's inspect unique urls
    image_url_pattern = re.compile(
        r'https?://(?:caddeskindia\.com|mtechcomputers\.in)/[^\'"\s)]+\.(?:png|jpg|jpeg|webp|gif)',
        re.IGNORECASE
    )
    
    url_to_local_file = {}
    
    # First pass: gather all image URLs
    print("Scanning files for image URLs...")
    for filepath in files_to_scan:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            matches = image_url_pattern.findall(content)
            for url in matches:
                url_to_local_file[url] = None
        except Exception as e:
            print(f"Error reading {filepath}: {e}")
            
    print(f"Found {len(url_to_local_file)} unique image URLs to download.")
    
    # Download all images
    successful_downloads = {}
    for url in list(url_to_local_file.keys()):
        local_name = download_image(url, public_images_dir)
        if local_name:
            successful_downloads[url] = f"/images/{local_name}"
            
    print(f"Successfully downloaded {len(successful_downloads)} of {len(url_to_local_file)} images.")
    
    # Second pass: replace URLs in files
    print("Replacing remote URLs with local paths...")
    replaced_count = 0
    for filepath in files_to_scan:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            original_content = content
            for url, local_path in successful_downloads.items():
                # In CSS files, url('...') is used. We should be careful about replacement.
                content = content.replace(url, local_path)
                
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated: {filepath}")
                replaced_count += 1
        except Exception as e:
            print(f"Error updating {filepath}: {e}")
            
    print(f"Finished. Updated {replaced_count} files.")

if __name__ == "__main__":
    main()
