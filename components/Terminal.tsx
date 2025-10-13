'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

interface TerminalProps {
    lines: string[];
    title: string;
    delay?: number;
    className?: string;
}
// Animated Terminal Component
export function Terminal({ lines, title, delay = 600 }: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

    // Animate lines appearing one by one
  useEffect(() => {
    if (currentIndex < lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, lines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Show blinking cursor after all lines are displayed
      setShowCursor(true);
    }
  }, [currentIndex, lines, delay]);

   // Determine line color based on prefix
  const getLineColor = (line: string) => {
    if (line.startsWith('$')) return 'text-emerald-400';
    if (line.startsWith('→')) return 'text-blue-400';
    if (line.startsWith('[INFO]')) return 'text-amber-400';
    if (line.startsWith('[ERROR]')) return 'text-red-400';
    if (line.startsWith('[SUCCESS]')) return 'text-green-400';
    return 'text-neutral-300';
  };

  return (
    <Card className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 overflow-hidden">
  {/* Terminal Header with macOS-style buttons */}
  <div className="bg-gray-200 dark:bg-neutral-800 px-4 py-2 border-b border-gray-300 dark:border-neutral-700 flex items-center gap-2">
    <div className="flex gap-1.5">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono ml-2">{title}</span>
  </div>
  
  {/* Terminal Content */}
  <CardContent className="p-4 font-mono text-sm min-h-[150px] text-black dark:text-neutral-50">
    {displayedLines.map((line, idx) => (
      <div 
        key={idx} 
        className={`mb-1 ${getLineColor(line)} animate-fade-in`}
        style={{ animationDelay: '0s' }}
      >
        {line}
      </div>
    ))}
    
    {/* Blinking Cursor */}
    {showCursor && (
      <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1"></span>
    )}
  </CardContent>
</Card>

  );
}