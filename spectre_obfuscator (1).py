import base64
import os

def obfuscate_file(file_path):
    """Obfusque un fichier Python en utilisant base64."""
    if not os.path.exists(file_path): return
    
    with open(file_path, "r") as f:
        content = f.read()
    
    encoded = base64.b64encode(content.encode()).decode()
    obfuscated_path = file_path + ".obs"
    
    with open(obfuscated_path, "w") as f:
        f.write(f"# SPECTRE OBFUSCATED\nexec(__import__('base64').b64decode('{encoded}').decode())")
    
    print(f"[+] File {file_path} obfuscated to {obfuscated_path}")

if __name__ == "__main__":
    scripts = ["offensive_engine.py", "stealth_sentinel.py", "ai_gateway.py"]
    for s in scripts:
        path = f"/home/kali/.gemini/antigravity/core_autonomy/scripts/{s}"
        obfuscate_file(path)
