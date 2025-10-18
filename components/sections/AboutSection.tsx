import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="space-y-6 scroll-mt-32">
      <Card className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h3>
          <div className="space-y-4 text-gray-700 dark:text-neutral-300">
            <p>
              I’m a backend developer who enjoys turning complex ideas into 
              simple, scalable, and efficient systems. I focus on building 
              reliable APIs, optimizing databases, and deploying services that 
              perform well in production.
            </p>
            <p>
              I mainly work with <span className="text-cyan-500">Go</span>, 
              <span className="text-green-400"> Python</span>, and 
              <span className="text-purple-400"> C#</span>. I also like 
              exploring DevOps tools and cloud technologies to improve how 
              systems are built and delivered.
            </p>
            <p>
              I’m currently learning more about distributed systems and backend 
              performance optimization to improve how I design scalable software.
            </p>

            <div className="font-mono text-sm space-y-2 text-cyan-600 dark:text-cyan-400 bg-gray-50 dark:bg-neutral-950 p-4 rounded">
              <div>$ Built and deployed REST APIs with Gin</div>
              <div>$ Designed and dockerized microservices</div>
              <div>$ Optimized SQL queries for better performance</div>
              <div>$ Automated deployments using AWS</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
