'use client';

import { Card, CardContent } from "../ui/card";

interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "Company X",
    period: "2023 - 2024",
    highlights: [
      "Built RESTful APIs using Go and PostgreSQL",
      "Dockerized backend services and deployed to AWS",
      "Collaborated with frontend team to optimize performance",
    ],
    tech: ["Go", "PostgreSQL", "Docker", "AWS"],
  },
  {
    role: "Intern - Fullstack Developer",
    company: "Company Y",
    period: "2022 - 2023",
    highlights: [
      "Developed Employee Archive Filing System using Django",
      "Implemented authentication, backend logic, and database models",
      "Created responsive frontend using Bootstrap and Tailwind",
    ],
    tech: ["Django", "Python", "Tailwind", "Bootstrap"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2 text-black dark:text-white">Experience</h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Where I’ve applied my skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800 
                       hover:border-emerald-400 dark:hover:border-emerald-500  transition-all hover:scale-[1.02] group"
          >
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-lg text-black dark:text-white">{exp.role}</h4>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{exp.company}</span>
                </div>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{exp.period}</span>
              </div>

              {/* Highlights */}
              <div className="space-y-1">
                {exp.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="text-xs font-mono text-emerald-500 dark:text-emerald-400 flex items-start gap-2"
                  >
                    <span className="text-neutral-400 dark:text-neutral-600">→</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              {exp.tech && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded font-mono 
                                 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
