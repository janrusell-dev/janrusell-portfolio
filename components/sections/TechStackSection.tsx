import { TechStackGrid } from "../TechStackGrid";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="space-y-6 scroll-mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Tech Stack</h3>
        <p className="text-neutral-400">Technologies I work with</p>
      </div>
      <TechStackGrid />
    </section>
  );
}
