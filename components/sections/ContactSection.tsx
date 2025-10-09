import { Card, CardContent } from "../ui/card";

export default function ContactSection() {
  return (
     <section id="contact" className="space-y-6 scroll-mt-32">
        <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:janrusellengracial@gmail.com" className="px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-emerald-500 rounded-lg font-mono text-sm transition-colors">
                📧 Email
              </a>
              <a href="https://github.com/janrusell-dev" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-emerald-500 rounded-lg font-mono text-sm transition-colors">
                💻 GitHub
              </a>
              <a href="https://www.linkedin.com/in/engracial-jan-rusell-g/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-emerald-500 rounded-lg font-mono text-sm transition-colors">
                💼 LinkedIn
              </a>
            </div>
            <div className="mt-6 font-mono text-sm text-neutral-400">
              <span className="text-emerald-400">$ </span>echo "Thanks for visiting!"
            </div>
          </CardContent>
        </Card>
      </section>
  );
}