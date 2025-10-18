"use client";

export function HeroSection() {
  return (
    <section className="text-center space-y-6 py-20 scroll-mt-32" id="home">
      {/* Heading */}
      <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in leading-[1.2]">
        Hi, I&apos;m Jan Rusell Engracial
      </h2>
      {/* Subheading / Intro */}
      <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
        I&apos;m a <span className="text-cyan-400">Backend Developer </span>
        specializing in building scalable and efficient systems. I work with{" "}
        <span className="text-purple-400">Go</span>,
        <span className="text-green-400"> Python</span>, and
        <span className="text-orange-400"> C#</span>. My focus is on clean code,
        robust APIs, and performant backend solutions.
      </p>

      {/* Buttons / CTAs */}
      <div className="flex gap-4 justify-center mt-8 flex-wrap">
        {/* Primary CTA: Projects */}
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-mono text-sm transition-colors"
        >
          View My Work
        </a>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="px-6 py-3 border border-transparent hover:border-cyan-500 rounded-lg font-mono text-sm transition-colors text-white bg-purple-600 hover:bg-purple-700"
        >
          Get in Touch
        </a>
      </div>

      {/* Optional tagline / quick skill highlight */}
      <p className="text-sm text-neutral-500 mt-4 max-w-md mx-auto font-mono">
        Experienced in <span className="text-cyan-400">REST APIs</span>,
        <span className="text-purple-400"> Microservices</span>, and
        <span className="text-green-400"> Cloud Deployments</span>.
      </p>
    </section>
  );
}
