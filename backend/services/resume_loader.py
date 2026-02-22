import os

def load_resume(file_path: str = None) -> str:
    """Loads the resume content from a text file."""
    try:
        if file_path is None:
            # Get the directory of the current file (services/resume_loader.py)
            current_dir = os.path.dirname(os.path.abspath(__file__))
            # Go up one level to backend/ and find resume.txt
            file_path = os.path.join(current_dir, "..", "resume.txt")
        
        if not os.path.exists(file_path):
            print(f"Resume file not found at: {file_path}")
            return ""

        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()
    except Exception as e:
        print(f"Error loading resume: {e}")
        return ""
