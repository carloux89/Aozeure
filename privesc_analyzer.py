import os
import subprocess
import json

class PrivEscAnalyzer:
    """Analyzes SUID binaries for potential local privilege escalation vectors."""
    
    def __init__(self):
        # Common binaries that are dangerous if SUID (based on GTFOBins)
        self.gtfo_bins = [
            "bash", "sh", "cp", "mv", "vim", "vi", "nano", "perl", "python", 
            "ruby", "find", "nmap", "tcpdump", "awk", "sed", "tar", "zip"
        ]
        self.suid_files = []

    def find_suid_binaries(self):
        """Find all SUID binaries on the system."""
        print("[*] Scanning system for SUID binaries...")
        try:
            # Commande find pour chercher les fichiers avec le bit SUID (4000)
            cmd = ["find", "/", "-perm", "-4000", "-type", "f", "2>/dev/null"]
            result = subprocess.run(" ".join(cmd), shell=True, capture_output=True, text=True)
            self.suid_files = result.stdout.splitlines()
            print(f"[+] Found {len(self.suid_files)} SUID binaries.")
            return self.suid_files
        except Exception as e:
            print(f"[!] Error scanning for SUID binaries: {e}")
            return []

    def analyze_suid(self):
        """Analyze the found SUID binaries against known vulnerable patterns."""
        if not self.suid_files:
            self.find_suid_binaries()
            
        vulnerable_findings = []
        print("[*] Analyzing binaries for GTFOBins patterns...")
        
        for file_path in self.suid_files:
            binary_name = os.path.basename(file_path)
            if binary_name in self.gtfo_bins:
                print(f"[!] POTENTIAL VULNERABILITY: SUID binary found in GTFOBins list: {file_path}")
                vulnerable_findings.append({
                    "path": file_path,
                    "binary": binary_name,
                    "reason": "Binary is known to have exploitable SUID features (GTFOBins)."
                })
        
        return vulnerable_findings

    def check_writable_conf(self):
        """Check for writable configuration files that could lead to privesc."""
        print("[*] Checking for writable sensitive configuration files...")
        sensitive_files = ["/etc/passwd", "/etc/shadow", "/etc/sudoers", "/etc/crontab"]
        findings = []
        for f in sensitive_files:
            if os.access(f, os.W_OK):
                print(f"[!!!] CRITICAL: {f} is WRITABLE!")
                findings.append(f)
        return findings

if __name__ == "__main__":
    analyzer = PrivEscAnalyzer()
    suid = analyzer.find_suid_binaries()
    vulns = analyzer.analyze_suid()
    conf = analyzer.check_writable_conf()
    
    report = {
        "suid_count": len(suid),
        "potential_gtfo_vulns": vulns,
        "writable_conf": conf
    }
    
    print("\n--- Privilege Escalation Report ---")
    print(json.dumps(report, indent=2))
