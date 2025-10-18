"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { DarkModeToggle } from "./DarkModeToggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },

  { id: "contact", label: "Contact" },
  { id: "code-motion", label: "Code in Motion" },
  { id: "api-playground", label: "API Playground" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b border-gray-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div>
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Jan Rusell Engracial
            </h1>
            <p className="text-sm text-neutral-400 dark:text-neutral-400">
              Backend Developer
            </p>
          </a>
        </div>

        {/* Desktop Navigation + Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-black dark:text-white hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
              >
                {section.label}
              </a>
            ))}
          </nav>

          <DarkModeToggle />
        </div>

        {/* Mobile Menu + Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <DarkModeToggle />

          <button
            className="text-cyan-400 p-2 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-300 dark:border-neutral-800">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-sm text-black dark:text-white hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Portfolio Loaded */}
      <div className="mt-2 px-6">
        <span className="text-cyan-400 font-mono text-sm animate-pulse">
          $ portfolio loaded
        </span>
      </div>
    </header>
  );
}
