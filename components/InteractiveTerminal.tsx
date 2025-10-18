"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";

interface TerminalLine {
  type: "command" | "output" | "error";
  content: string;
}

export function InteractiveTerminal() {
  const isFirstRender = useRef(true);
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to Jan Rusell's Portfolio Terminal" },
    { type: "output", content: 'Type "help" to see available commands' },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  // Available commands
  const commands: Record<string, () => string> = {
    help: () => `Available commands:
  help       - Show this help message
  about      - Learn more about me
  skills     - View my tech stack
  projects   - List my projects
  contact    - Get my contact information
  clear      - Clear terminal`,

    about: () => `Jan Rusell Engracial
Backend developer who turns complex ideas into simple, scalable systems.
I build reliable APIs, optimize databases, and deploy performant production services.

Tech Focus:
  - Backend: Go, C#, Django, Python
  - DevOps & Cloud: Docker, AWS, Linux

Current Learning Goals:
  - Distributed systems
  - Backend performance optimization

Achievements:
  $ Built and deployed REST APIs with Gin
  $ Designed and dockerized microservices
  $ Optimized SQL queries for better performance
  $ Automated deployments using AWS`,


    skills: () => `Tech Stack:

Languages:
  Go, C#, Python, TypeScript, JavaScript, Dart

Backend Frameworks:
  .NET Core, Django, Gin

Frontend Frameworks:
  React, Next.js, Shadcn UI, Tailwind CSS, Bootstrap, Flutter

Databases:
  PostgreSQL, SQL Server, Redis

DevOps & Cloud:
  Docker, AWS, Terraform, LocalStack, Nginx

Message Queues:
  RabbitMQ

Tools & Others:
  Git, GitHub, GitHub Actions, Postman, Swagger, VS Code, Visual Studio, Linux`,

    projects: () => `Projects:

1. Portfolio Website 🎨 (Frontend) - Completed
   Personal portfolio with code-in-motion theme showcasing backend development skills
   Highlights:
     → Animated terminal components
     → Responsive design
     → Dark mode optimized
   Tech: Next.js, TypeScript, Tailwind CSS, shadcn/ui
   Links: GitHub: github.com/janrusell-dev/portfolio | Demo: janrusell-portfolio.vercel.app

2. URL Shortening Service ⚙️ (Backend) - Completed
   A RESTful API built with ASP.NET Core for shortening long URLs, retrieving original links, managing updates and deletions, and tracking usage statistics.
   Highlights:
     → Shorten and manage URLs via RESTful endpoints
     → Retrieve and update original URLs
     → Track access statistics for each short URL
     → Integrated Swagger UI for API testing
     → Database management using PostgreSQL and Entity Framework Core
   Tech: ASP.NET Core, PostgreSQL, Entity Framework Core, Swagger UI, pgAdmin 4
   Links: GitHub: github.com/janrusell-dev/URLShortener

3. BrokerX 🚀 (Fullstack / Go + Next.js) - In Progress
   Lightweight **message broker** demonstrating concurrency, WebSocket communication, and real-time metrics visualization.
   Highlights:
     → Topic-based publish/subscribe messaging
     → Concurrent-safe operations using Goroutines and sync primitives
     → Real-time dashboard for active topics, message rates, and latency charts
     → Non-blocking broadcasts and graceful cleanup of connections
     → Clean architecture with handlers, services, middleware
   Tech: Go, Next.js, WebSockets, shadcn/ui, Tailwind CSS, Redis (optional), BoltDB (optional)
   Links: GitHub: github.com/janrusell-dev/BrokerX
   
$ More projects coming soon... Currently learning and building
`,

    contact: () => `Contact Information:
  Email: jan@example.com
  GitHub: github.com/janrusell-dev
  LinkedIn: linkedin.com/in/janrusell`,

    clear: () => "CLEAR_TERMINAL",
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add command to history
    setHistory((prev) => [...prev, { type: "command", content: `$ ${cmd}` }]);

    if (trimmedCmd === "") {
      return;
    }

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    // Execute command
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output !== "CLEAR_TERMINAL") {
        setHistory((prev) => [...prev, { type: "output", content: output }]);
      }
    } else {
      
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`,
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (isFirstRender.current){
      isFirstRender.current = false;
      return;
    }
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input when clicking anywhere on terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "command":
        return "text-cyan-600 dark:text-cyan-400";
      case "error":
        return "text-red-600 dark:text-red-400"; 
      case "output":
        return "text-neutral-700 dark:text-neutral-300";  
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  return (
    <Card className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800 overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-200 dark:bg-neutral-800  px-4 py-2 border-b border-gray-200 dark:border-neutral-700 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-neutral-600 dark:text-neutral-400 font-mono ml-2">
          interactive-terminal.sh
        </span>
      </div>

      {/* Terminal Content */}
      <CardContent
        className="p-4 font-mono text-sm h-[400px] overflow-y-auto cursor-text text-black dark:text-neutral-300"
        onClick={handleTerminalClick}
      >
        {history.map((line, idx) => (
          <div
            key={idx}
            className={`mb-1 ${getLineColor(line.type)} whitespace-pre-wrap`}
          >
            {line.content}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-cyan-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-black dark:text-neutral-300"
            spellCheck={false}
          />
          <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse"></span>
        </form>

        <div ref={bottomRef} />
      </CardContent>
    </Card>
  );
}
