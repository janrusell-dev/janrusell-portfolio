'use client';

import { ArrowUp, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
   const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        px-3 py-2 rounded-lg
        border border-cyan-500/30
        bg-gray-100/70 dark:bg-neutral-900/70
        text-cyan-600 dark:text-cyan-300
        hover:bg-cyan-50 dark:hover:bg-cyan-900/30
        backdrop-blur-md shadow-md transition-all duration-300
      "
      aria-label='Scroll to top'
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}
