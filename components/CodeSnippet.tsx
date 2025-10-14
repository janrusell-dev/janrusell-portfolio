'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

// Code Snippet Component
export function CodeSnippet({ code, language }: { code: string; language: string }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800 overflow-hidden">
      <div className="bg-gray-200 dark:bg-neutral-800  px-4 py-2 border-b border-gray-200 dark:border-neutral-700">
        <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">{language}</span>
      </div>
      <CardContent className="p-4 font-mono text-sm text-black dark:text-neutral-300">
        <pre className={`transition-opacity duration-500 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
          <code className="text-cyan-400 dark:text-cyan-400">{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
