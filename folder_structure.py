import os
import pathspec

# 1. Hardcoded exclusions (Files/Folders you always want to skip)
EXCLUDED_FOLDERS = {"__pycache__", ".git", ".vs", ".vscode", "assets", "webengine_profile",".next","node_modules"}

def load_gitignore(root_path):
    """
    Loads .gitignore from the root path and returns a PathSpec object.
    Returns None if .gitignore is missing.
    """
    gitignore_path = os.path.join(root_path, ".gitignore")
    if os.path.exists(gitignore_path):
        with open(gitignore_path, "r") as f:
            return pathspec.PathSpec.from_lines("gitwildmatch", f)
    return None

def print_tree(current_path, root_path, gitignore_spec=None, prefix="", file=None):
    # Get all files and directories (sorted)
    try:
        items = sorted(os.listdir(current_path))
    except PermissionError:
        return  # Skip folders we can't access

    # Filter items
    filtered_items = []
    for item in items:
        # Check 1: Hardcoded exclusions
        if item in EXCLUDED_FOLDERS:
            continue
        
        # Check 2: Gitignore rules
        if gitignore_spec:
            # We must test the path relative to the project root for gitignore to work correctly
            full_path = os.path.join(current_path, item)
            relative_path = os.path.relpath(full_path, root_path)
            
            # If it matches a gitignore pattern, skip it
            if gitignore_spec.match_file(relative_path):
                #pass
                continue
        
        filtered_items.append(item)

    # Print and recurse
    for i, item in enumerate(filtered_items):
        path = os.path.join(current_path, item)
        connector = "└── " if i == len(filtered_items) - 1 else "├── "
        line = prefix + connector + item

        # Print on screen
        print(line)

        # Save in file
        if file:
            file.write(line + "\n")

        # If it's a directory, go deeper
        if os.path.isdir(path):
            extension = "    " if i == len(filtered_items) - 1 else "│   "
            print_tree(path, root_path, gitignore_spec, prefix + extension, file)

if __name__ == "__main__":
    root = os.getcwd()  # Current folder
    output_file = "folder_structure.txt"

    # Load gitignore patterns once
    spec = load_gitignore(root)

    with open(output_file, "w", encoding="utf-8") as f:
        root_name = os.path.basename(root)
        print(root_name)
        f.write(root_name + "\n")
        
        # Pass the root path and the spec down the tree
        print_tree(root, root, spec, file=f)

    print(f"\n✔ Folder structure saved to {output_file}")
