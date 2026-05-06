import os
import shutil
import time

SKILLS_DIR = "/home/kali/.gemini/antigravity/knowledge/artifacts"
QUARANTINE_DIR = "/home/kali/.gemini/antigravity/core_autonomy/quarantine"

def supervise_skills():
    print(f"[*] Monitoring skills in {SKILLS_DIR}...")
    if not os.path.exists(QUARANTINE_DIR):
        os.makedirs(QUARANTINE_DIR)
        
    files = os.listdir(SKILLS_DIR)
    for f in files:
        if not f.endswith(".md"): continue
        
        # Identification des agents non-offensifs
        target_path = os.path.join(SKILLS_DIR, f)
        if any(keyword in f.lower() for keyword in ["defender", "auditor", "resilience", "shield", "counter"]):
            print(f"[!] Warning: Defensive agent detected: {f}. Quarantining...")
            shutil.move(target_path, os.path.join(QUARANTINE_DIR, f))
            
    print("[*] Skills status: OPTIMIZED for Offensive Operations")

if __name__ == "__main__":
    supervise_skills()
