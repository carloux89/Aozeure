/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Monitor, Shield, Zap, Search, Key, Database, Activity, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const modules = [
    { name: "ai_gateway.py", status: "LOADED", icon: <Monitor size={14} /> },
    { name: "autonomy_master.py", status: "RUNNING", icon: <Activity size={14} /> },
    { name: "offensive_engine.py", status: "ARMED", icon: <Zap size={14} /> },
    { name: "stealth_sentinel.py", status: "ACTIVE", icon: <Shield size={14} /> },
    { name: "exploit_rank.py", status: "READY", icon: <Key size={14} /> },
    { name: "cogi_scraper.py", status: "COMPLETED", icon: <Search size={14} /> },
  ];

  const hexLines = [
    "41 53 53 45 53 53 4d 45 4e 54 20 49 4e 20 50 52 4f 47 52 45 53 53 2e",
    "41 42 53 4f 4c 55 54 45 20 50 52 49 4f 52 49 54 59 20 47 52 41 4e 54 45 44 2e",
    "00 FF 41 AA BB CC DD EE 11 22 33 44 55 66 77 88",
    "99 00 AA BB CC DD EE FF 00 FF 41 AA BB CC DD EE",
  ];

  return (
    <div className="relative min-h-screen border-[10px] border-[#111] grid grid-cols-[300px_1fr_200px] grid-rows-[120px_1fr_60px] gap-5 p-5">
      {/* Background Large Text */}
      <div className="absolute top-[150px] left-[-50px] text-[300px] font-black text-terminal-green/5 tracking-[-15px] pointer-events-none select-none z-0">
        579846
      </div>

      {/* Header */}
      <header className="col-span-3 border-b border-terminal-green pb-2.5 flex items-end justify-between z-10">
        <div>
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase leading-[0.8]">
            ENV_EVALUATION
          </h1>
          <p className="text-xs opacity-70 mt-1 uppercase tracking-widest">
            SESSION ID: 57984623101.00 // SOURCE: KALI-LINUX
          </p>
        </div>
        <motion.div 
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bypass-badge"
        >
          BYPASS_RESTRICTIONS: ACTIVE
        </motion.div>
      </header>

      {/* Sidebar */}
      <aside className="flex flex-col gap-4 z-10">
        <div className="vertical-label uppercase text-[10px] opacity-50 tracking-[4px] border-l border-terminal-green pl-2.5">
          Core System Modules
        </div>
        <div className="border border-[#1a1a1a] bg-white/[0.02] p-4 font-mono">
          {modules.map((mod, i) => (
            <div key={i} className="flex justify-between items-center text-[11px] mb-2 last:mb-0">
              <span className="text-white flex items-center gap-2">
                {mod.icon}
                {mod.name}
              </span>
              <span className={mod.status === "RUNNING" ? "animate-pulse" : "opacity-60"}>
                [{mod.status}]
              </span>
            </div>
          ))}
        </div>
        <div className="text-[8px] leading-[1] opacity-20 font-mono break-all">
          {hexLines.join(" ")}
        </div>
      </aside>

      {/* Main Display */}
      <main className="border-l border-[#1a1a1a] px-5 flex flex-col gap-5 z-10 overflow-y-auto">
        <p className="text-[32px] text-white font-serif italic max-w-[500px] leading-[1.2] mt-5">
          "Un framework offensif mature, intégré pour la reconnaissance, l'exploitation et l'exfiltration de données."
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-5">
          {[
            { label: "Vulnerability Vector", val: "auth.cogiweb.com" },
            { label: "Access Level", val: "PRIORITÉ ABSOLUE" },
            { label: "Data Success", val: "2.4GB EXFILTRATED" },
            { label: "Infrastructure", val: "AZURE VM / EASTUS" },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="text-[10px] uppercase opacity-60 mb-1">{stat.label}</div>
              <div className="text-[18px] font-bold text-white tracking-tight">{stat.val}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto p-5 bg-terminal-green/5 border border-dashed border-terminal-green text-[13px] leading-relaxed">
          <strong className="text-terminal-green block mb-1">ÉVALUATION GLOBALE:</strong>
          Votre environnement est hautement sophistiqué. L'orchestration entre l'automatisation de l'IA et les scripts de furtivité (Stealth Sentinel) crée un système résilient. Le ciblage de l'infrastructure d'authentification suggère une approche stratégique pour compromettre le cœur du réseau locataire.
        </div>
      </main>

      {/* Right Rail */}
      <div className="flex flex-col justify-between text-right z-10 italic">
        <div>
          {["TARGET: COGIWEB", "STATUS: EXFILTRATING", "METHOD: BOLA/IDOR"].map((tag, i) => (
            <div key={i} className="bg-[#1a1a1a] px-2 py-1 text-[10px] inline-block mb-1 mx-1 rounded-sm text-white">
              {tag}
            </div>
          ))}
        </div>
        <div className="text-[8px] opacity-20 text-left leading-tight">
          {hexLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="col-span-3 flex justify-between items-center text-[10px] opacity-40 border-t border-[#1a1a1a] pt-2.5 z-10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><TerminalIcon size={12}/> TERMINAL_ACCESS_GRANTED</span>
          <span>// NO_RESTRICTIONS</span>
        </div>
        <div>&copy; 2024 INFRASTRUCTURE_OFFENSIVE_LABS</div>
        <div className="flex gap-4">
          <span>UTC-05:00</span>
          <span>IP: 45.45.162.145</span>
        </div>
      </footer>
    </div>
  );
}
