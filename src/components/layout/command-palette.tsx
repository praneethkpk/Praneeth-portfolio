"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Home, User, Layers, Code2, Calendar, Mail, FileText, Sun, Moon, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { socialLinks } from "@/lib/constants";

interface CommandItem {
  id: string;
  label: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  // Toggle shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNav = useCallback((id: string) => {
    setIsOpen(false);
    setQuery("");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const commands: CommandItem[] = [
    {
      id: "nav-home",
      label: "Go to Home",
      category: "Navigation",
      icon: Home,
      action: () => handleNav("home"),
    },
    {
      id: "nav-about",
      label: "Go to About (Engineering Mindset)",
      category: "Navigation",
      icon: User,
      action: () => handleNav("about"),
    },
    {
      id: "nav-skills",
      label: "Go to Technical Skills",
      category: "Navigation",
      icon: Layers,
      action: () => handleNav("skills"),
    },
    {
      id: "nav-projects",
      label: "Go to Projects & Case Studies",
      category: "Navigation",
      icon: Code2,
      action: () => handleNav("projects"),
    },
    {
      id: "nav-journey",
      label: "Go to Journey & Experience",
      category: "Navigation",
      icon: Calendar,
      action: () => handleNav("journey"),
    },
    {
      id: "nav-contact",
      label: "Go to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => handleNav("contact"),
    },
    {
      id: "action-resume",
      label: "Download Resume (PDF)",
      category: "Actions",
      icon: FileText,
      action: () => {
        setIsOpen(false);
        window.open("/resume.pdf", "_blank");
      },
    },
    {
      id: "action-theme",
      label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
    },
    {
      id: "social-github",
      label: "Open GitHub Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open(socialLinks.github, "_blank");
      },
    },
    {
      id: "social-linkedin",
      label: "Open LinkedIn Profile",
      category: "Social",
      icon: ExternalLink,
      action: () => {
        setIsOpen(false);
        window.open(socialLinks.linkedin, "_blank");
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-md animate-fade-in-up">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Palette Container */}
      <div className="relative glass-panel max-w-xl w-full rounded-2xl border border-outline-variant/40 shadow-2xl overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-outline-variant/20 bg-surface-container/50">
          <Search className="w-5 h-5 text-primary shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent text-sm text-on-surface focus:outline-none placeholder:text-on-surface-variant/40 font-mono"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-on-surface-variant hover:text-on-surface text-xs font-mono border border-outline-variant/30 px-2"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-on-surface-variant">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs md:text-sm font-mono text-on-surface group-hover:text-primary transition-colors">
                      {cmd.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-on-surface-variant/60 border border-outline-variant/20 px-2 py-0.5 rounded">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-outline-variant/15 bg-surface-container-lowest text-[11px] font-mono text-on-surface-variant/60 flex items-center justify-between">
          <span>Navigate: Ctrl + K</span>
          <span>Praneeth Kumar Parepalli Portfolio</span>
        </div>
      </div>
    </div>
  );
}
