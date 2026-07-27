from PIL import Image, ImageDraw

def make_transparent(image_path, output_path):
    img = Image.open(image_path).convert('RGBA')
    width, height = img.size
    
    # Target color: white background
    # Let's flood-fill from the corners
    corners = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]
    
    # We will perform a search for white-ish pixels connected to the corners
    # and replace them with fully transparent pixels (0, 0, 0, 0).
    # Since ImageDraw.floodfill can do this, we'll run it for each corner.
    # Note: floodfill modifies the image in-place.
    for corner in corners:
        ImageDraw.floodfill(img, corner, (0, 0, 0, 0), thresh=20)
        
    img.save(output_path, 'PNG')
    print("Background transparency processed and saved successfully.")

if __name__ == "__main__":
    make_transparent('public/placement-badge.png', 'public/placement-badge.png')
