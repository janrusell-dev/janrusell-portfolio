import { CodeSnippet } from "@/components/CodeSnippet";
import { AboutSection } from "@/components/sections/AboutSection";
import { APIPlaygroundSection } from "@/components/sections/APIPlaygroundSection";
import { CodeMotionSection } from "@/components/sections/CodeMotionSection";
import ContactSection from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function Home() {
  const apiLogs = [
    "$ curl https://api.janrusell.dev/projects",
    "→ 200 OK",
    "→ Content-Type: application/json",
    "→ Response time: 42ms",
    '→ {"projects": [{"id": 1, "name": "Portfolio"}, {"id": 2, "name": "Task Manager"}]}'
  ];
    const backendCode = `func GetProjects(c *gin.Context) {
    projects := []Project{
      {ID: 1, Name: "Portfolio"},
      {ID: 2, Name: "Task Manager"},
    }
    c.JSON(200, gin.H{"projects": projects})
  }`;

   const dataTransform = [
    "$ Processing data pipeline...",
    "[INFO] Reading from PostgreSQL",
    "[INFO] Filtering active projects",
    "[INFO] Transforming JSON response",
    "→ Output: 2 projects ready"
  ];

   return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <HeroSection/>

      {/* Code in Motion Section */}
      <CodeMotionSection/>

      {/* API Playground Section */}
      <APIPlaygroundSection/>

      {/* Project Section */}
      <ProjectsSection />
      
      {/* Tech Stack Section */}

      <TechStackSection />


      {/* About Section */}
      <AboutSection/>

      {/* Contact Section */}
     <ContactSection/>
    </div>
  );
}
