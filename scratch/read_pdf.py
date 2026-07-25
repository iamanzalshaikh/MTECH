import pypdf
import sys

# Ensure UTF-8 printing in Windows terminal
sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\ANZAL\Downloads\Piping Brochers.pdf"
reader = pypdf.PdfReader(pdf_path)
print(f"Total Pages: {len(reader.pages)}")

for i, page in enumerate(reader.pages):
    print(f"\n--- PAGE {i+1} ---")
    try:
        text = page.extract_text()
        print(text)
    except Exception as e:
        print(f"Error reading page {i+1}: {e}")
