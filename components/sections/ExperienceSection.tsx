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
    company: "Washindi Ventures Pty Ltd. (Remote, Australia)",
    period: "Aug 2025 – Oct 2025",
    highlights: [
      "Built and maintained backend features in Go for Vespucci Foundry, an AI-powered travel document automation system",
      "Implemented asynchronous file ingestion with AWS SQS and OCR fallback using Tesseract via Docker",
      "Integrated AWS S3, performed malware scanning, and emulated services using LocalStack",
      "Collaborated with frontend team on React/TypeScript dashboard and CI/CD pipelines via GitHub Actions",
    ],
    tech: ["Go", "Docker", "AWS S3", "AWS SQS", "LocalStack", "React", "TypeScript", "GitHub", "Postman",
            "GitHub Actions"],
  },
  {
    role: "Software Developer",
    company: "RD Pawnshop, Inc. (Cebu City, Philippines)",
    period: "Aug 2024 – Oct 2025",
    highlights: [
      "Developed and maintained ERP modules using C#, ASP.NET MVC, Windows Forms, and Microsoft SQL Server",
      "Built RESTful APIs with ASP.NET Web API and integrated with internal systems, validated via Postman",
      "Created cross-platform mobile application using Flutter and Dart",
      "Participated in Agile workflows, sprint planning, daily stand-ups, and feature demos",
    ],
    tech: ["C#", ".NET Core", "ASP.NET Web API", "Flutter", "Dart", "SQL Server", "Postman"],
  },
  {
    role: "Software Developer Intern",
    company: "Carlos Hilado Memorial State University - Records Management Office",
    period: "Feb 2024 – May 2024",
    highlights: [
      "Developed Employee Archive Filing System, a records management web app using Django and PostgreSQL",
      "Implemented CRUD operations, user authentication, and document search features",
      "Streamlined archive workflows to improve document tracking and accessibility",
      "Built responsive UI with Bootstrap and Tailwind CSS",
    ],
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap", "Tailwind", "HTML", "CSS", "JavaScript"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 scroll-mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2 text-black dark:text-white">
          Experience
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Where I’ve applied my skills in real-world projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800 
                       hover:border-cyan-400 dark:hover:border-cyan-500 transition-all hover:scale-[1.02] group"
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
              <ul className="space-y-1 list-none">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-xs font-mono text-cyan-500 dark:text-cyan-400 flex items-start gap-2"
                  >
                    <span className="text-neutral-400 dark:text-neutral-600">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

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
