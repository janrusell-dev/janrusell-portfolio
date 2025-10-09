'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "code-motion", label: "Code in Motion" },
  { id: "api-playground", label: "API Playground" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <div>
          <h1 className="text-2xl font-bold">Jan Rusell Engracial</h1>
          <p className="text-sm text-neutral-400">Backend Developer</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-400 p-2 rounded hover:bg-neutral-800 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-neutral-900 border-t border-neutral-800">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-sm hover:text-emerald-400 transition-colors"
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
        <span className="text-emerald-400 font-mono text-sm animate-pulse">
          $ portfolio loaded
        </span>
      </div>
    </header>
  );
}
