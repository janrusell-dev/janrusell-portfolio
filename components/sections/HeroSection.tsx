export function HeroSection(){
    return(
          <section className="text-center space-y-6 py-20 scroll-mt-32" id="home">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Hi, I&apos;mm Jan Rusell Engracial
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          Backend Developer specializing in <span className="text-emerald-400">Go</span>, <span className="text-purple-400">C#</span>, <span className="text-green-400">Django</span>, and <span className="text-orange-400">SQL</span>
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a href="#code-motion" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-mono text-sm transition-colors">
            View Code in Motion
          </a>
          <a href="#contact" className="px-6 py-3 border border-neutral-700 hover:border-emerald-500 rounded-lg font-mono text-sm transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    )
}