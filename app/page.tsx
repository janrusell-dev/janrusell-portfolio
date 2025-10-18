import { AboutSection } from "@/components/sections/AboutSection";
import { APIPlaygroundSection } from "@/components/sections/APIPlaygroundSection";
import { CodeMotionSection } from "@/components/sections/CodeMotionSection";
import ContactSection from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function Home() {

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />

      <TechStackSection />

      <ContactSection />

      <CodeMotionSection />

      <APIPlaygroundSection />
    </div>
  );
}
