import { Card, CardContent } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="space-y-6 scroll-mt-32">
      <Card className="bg-white dark:bg-neutral-900 border-gray-300 dark:border-neutral-800">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h3>
          <div className="space-y-4 text-gray-700 dark:text-neutral-300">
            <p>
              I&apos;m a backend developer focused on building scalable, reliable systems. 
              My expertise lies in designing RESTful APIs, optimizing database queries, 
              and architecting microservices.
            </p>
            <div className="font-mono text-sm space-y-2 text-emerald-600 dark:text-emerald-400 bg-gray-50 dark:bg-neutral-950 p-4 rounded">
              <div>$ Learned Gin framework</div>
              <div>$ Built Portfolio API</div>
              <div>$ Dockerized backend services</div>
              <div>$ Deployed to AWS</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
