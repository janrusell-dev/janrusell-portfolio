import { CodeSnippet } from "../CodeSnippet";
import { InteractiveTerminal } from "../InteractiveTerminal";
import { Terminal } from "../Terminal";

export function CodeMotionSection(){
    // API Logs Terminal
    const apiLogs = [
      "$ curl https://api.janrusell.dev/projects",
      "→ 200 OK",
      "→ Content-Type: application/json",
      "→ Response time: 42ms",
      '→ {"projects": [{"id": 1, "name": "Portfolio"}, {"id": 2, "name": "Task Manager"}]}',
    ];

    // Data Pipeline Terminal
    const dataTransform = [
      "$ Processing data pipeline...",
      "[INFO] Reading from PostgreSQL",
      "[INFO] Filtering active projects",
      "[INFO] Transforming JSON response",
      "[SUCCESS] Output: 2 projects ready",
    ];

    // Docker Logs Terminal
    const dockerLogs = [
      "$ docker-compose up",
      "[INFO] Starting services...",
      "[INFO] postgres_db ... done",
      "[INFO] api_server ... done",
      "[SUCCESS] Listening on port 8080",
    ];

    // Backend Code Snippet
    const backendCode = `func GetProjects(c *gin.Context) {
    projects := []Project{
      {ID: 1, Name: "Portfolio"},
      {ID: 2, Name: "Task Manager"},
    }
    c.JSON(200, gin.H{"projects": projects})
  }`;

 return (
    <section id="code-motion" className="space-y-6 scroll-mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Code in Motion</h3>
        <p className="text-neutral-400">Real-time backend operations and API flows</p>
      </div>

      {/* Animated Terminals Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Terminal lines={apiLogs} title="api-logs.sh" delay={600} />
        <Terminal lines={dataTransform} title="data-pipeline.sh" delay={700} />
      </div>

      {/* Additional Terminal */}
      <Terminal lines={dockerLogs} title="docker-compose.sh" delay={500} />

      {/* Code Snippet */}
      <CodeSnippet code={backendCode} language="Go (Gin Framework)" />

      {/* Interactive Terminal */}
      <div className="mt-8">
        <div className="text-center mb-4">
          <h4 className="text-xl font-bold mb-1">Try the Interactive Terminal</h4>
          <p className="text-sm text-neutral-400">Type &quot;help&quot; to see available commands</p>
        </div>
        <InteractiveTerminal />
      </div>

      {/* System Flow */}
      {/* <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h4 className="font-bold text-lg mb-2">System Flow</h4>
              <div className="flex items-center gap-2 text-sm font-mono text-neutral-400 flex-wrap">
                <span>Frontend Request</span>
                <span className="text-emerald-400">→</span>
                <span>API Endpoint</span>
                <span className="text-emerald-400">→</span>
                <span>Database Query</span>
                <span className="text-emerald-400">→</span>
                <span>JSON Response</span>
                <span className="text-emerald-400">→</span>
                <span>Log Output</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card> */}
    </section>
  );
}