import os

def load_resume(file_path: str = None) -> str:
    """Loads the resume content from a text file."""
    try:
        if file_path is None:
            # Try multiple potential locations for Vercel environment
            current_dir = os.path.dirname(os.path.abspath(__file__))
            
            # List of paths to check
            paths_to_check = [
                os.path.join(current_dir, "..", "resume.txt"), # Standard structure: backend/resume.txt
                os.path.join(os.getcwd(), "backend", "resume.txt"), # From root: backend/resume.txt
                os.path.join(os.getcwd(), "resume.txt"), # If flattened
                "resume.txt" # Relative to CWD
            ]
            
            for path in paths_to_check:
                if os.path.exists(path):
                    file_path = path
                    break
            
            if not file_path:
                print(f"Resume file not found. Checked: {paths_to_check}")
                return ""
        
        if not os.path.exists(file_path):
            print(f"Resume file not found at: {file_path}")
            return ""

        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()
    except Exception as e:
        print(f"Error loading resume: {e}")
        return ""
