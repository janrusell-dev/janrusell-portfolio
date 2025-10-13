'use client';


import { useState } from "react";
import { Card, CardContent } from "../ui/card";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    category: 'Backend' | 'Frontend' | 'Fullstack' | 'Learning';
    github?: string;
    demo?: string;
    status: 'Completed' | 'In Progress' | 'Learning';
    highlights: string[];
}

export function ProjectsSection(){
    const [filter, setFilter] = useState<string>('All');
     const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio with code-in-motion theme showcasing backend development skills",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      category: "Frontend",
      github: "https://github.com/janrusell-dev/portfolio",
      demo: "https://janrusell.dev",
      status: "Completed",
      highlights: [
        "Animated terminal components",
        "Responsive design",
        "Dark mode optimized"
      ]
    },
    {
      id: 2,
      title: "Task Manager API",
      description: "RESTful API for managing tasks with user authentication and CRUD operations",
      tech: ["Go", "Gin", "PostgreSQL", "JWT"],
      category: "Backend",
      github: "https://github.com/janrusell-dev/task-api",
      status: "In Progress",
      highlights: [
        "JWT authentication",
        "PostgreSQL database",
        "RESTful endpoints",
        "Unit tests with Go testing"
      ]
    },
    {
      id: 3,
      title: "Blog Backend System",
      description: "Learning project: Building a blog API with Django REST Framework",
      tech: ["Django", "Python", "SQLite", "DRF"],
      category: "Learning",
      github: "https://github.com/janrusell-dev/blog-backend",
      status: "Learning",
      highlights: [
        "Django REST Framework basics",
        "Model relationships",
        "API serialization",
        "Admin panel customization"
      ]
    },
   {
  id: 4,
  title: "URL Shortening Service",
  description: "A RESTful API built with ASP.NET Core for shortening long URLs, retrieving the original links, managing updates and deletions, and tracking usage statistics.",
  tech: ["ASP.NET Core", "PostgreSQL", "Entity Framework Core", "Swagger UI", "pgAdmin 4"],
  category: "Backend",
  github: "https://github.com/janrusell-dev/URLShortener",
  status: "Completed",
  highlights: [
    "Shorten and manage URLs via RESTful endpoints",
    "Retrieve and update original URLs",
    "Track access statistics for each short URL",
    "Integrated Swagger UI for API testing",
    "Database management using PostgreSQL and Entity Framework Core"
  ]
}

  ];
   const categories = ['All', 'Backend', 'Frontend', 'Fullstack', 'Learning'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed': return 'text-green-400 border-green-400';
      case 'In Progress': return 'text-amber-400 border-amber-400';
      case 'Learning': return 'text-cyan-400 border-cyan-400';
    }
  };
  
  const getCategoryEmoji = (category: Project['category']) => {
    switch (category) {
      case 'Backend': return '⚙️';
      case 'Frontend': return '🎨';
      case 'Fullstack': return '🚀';
      case 'Learning': return '📚';
    }
  };
    return(
    <section id="projects" className="space-y-6 scroll-mt-32">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold mb-2 text-emerald-500 dark:text-emerald-400">Projects</h3>
    <p className="text-neutral-500 dark:text-neutral-400">Things I&apos;ve built and learned</p>
  </div>

  {/* Filter Buttons */}
  <div className="flex gap-2 justify-center flex-wrap mb-8">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setFilter(cat)}
        className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
          filter === cat
            ? 'bg-emerald-500 text-white'
            : 'bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 hover:border-emerald-500'
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Projects Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProjects.map((project) => (
      <Card 
        key={project.id}
        className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 
             hover:border-emerald-500 dark:hover:border-emerald-400 
             transition-all hover:scale-[1.02] group"
      >
        <CardContent className="p-6 space-y-4 text-gray-700 dark:text-neutral-300">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{getCategoryEmoji(project.category)}</span>
              <h4 className="font-bold text-lg">{project.title}</h4>
            </div>
            <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-neutral-400">{project.description}</p>

          {/* Highlights */}
          <div className="space-y-1">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="text-xs font-mono text-emerald-400 flex items-start gap-2">
                <span className="text-gray-400 dark:text-neutral-500">→</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded font-mono text-gray-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2 border-t border-gray-300 dark:border-neutral-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-gray-700 dark:text-neutral-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                💻 GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-gray-700 dark:text-neutral-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                🚀 Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Empty State */}
  {filteredProjects.length === 0 && (
    <div className="text-center py-12">
      <p className="text-gray-500 dark:text-neutral-400 font-mono">No projects in this category yet</p>
    </div>
  )}

  {/* Terminal-style "More Coming Soon" */}
  <Card className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 mt-8">
    <CardContent className="p-6 text-center text-gray-700 dark:text-neutral-300">
      <div className="font-mono text-sm space-y-2">
        <div><span className="text-emerald-400">$</span> git commit -m &quot;More projects coming soon...&quot;</div>
        <div><span className="text-cyan-400">→</span> Currently learning and building</div>
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

    );
}