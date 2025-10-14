"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";

interface APIResponse {
  success: boolean;
  data?: unknown;
  message?: string;
}

interface APIEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  params?: { name: string; type: string; required: boolean }[];
  exampleResponse: APIResponse;
}

interface APIResponseMock {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: APIResponse;
}

export function APIPlaygroundSection() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<APIEndpoint | null>(
    null
  );
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState<APIResponseMock | null>(null);
  const [loading, setLoading] = useState(false);

  const endpoints: APIEndpoint[] = [
    {
      method: "GET",
      path: "/api/projects",
      description: "Get all projects",
      exampleResponse: {
        success: true,
        data: [
          { id: 1, name: "Portfolio", status: "completed" },
          { id: 2, name: "Task Manager API", status: "in_progress" },
        ],
      },
    },
    {
      method: "GET",
      path: "/api/projects/:id",
      description: "Get project by ID",
      params: [{ name: "id", type: "number", required: true }],
      exampleResponse: {
        success: true,
        data: {
          id: 1,
          name: "Portfolio",
          status: "completed",
          tech: ["Next.js", "TypeScript"],
        },
      },
    },
    {
      method: "POST",
      path: "/api/projects",
      description: "Create new project",
      params: [
        { name: "name", type: "string", required: true },
        { name: "status", type: "string", required: true },
      ],
      exampleResponse: {
        success: true,
        message: "Project created successfully",
        data: { id: 3, name: "New Project", status: "in_progress" },
      },
    },
    {
      method: "GET",
      path: "/api/skills",
      description: "Get tech stack",
      exampleResponse: {
        success: true,
        data: {
          backend: ["Go", "C#", "Django", "Python"],
          frontend: ["React", "Next.js", "Tailwind CSS"],
          database: ["PostgreSQL", "SQL"],
        },
      },
    },
  ];

  const handleRequest = async (endpoint: APIEndpoint) => {
    setLoading(true);
    setResponse(null);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockResponse: APIResponseMock = {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json",
        "Response-Time": "42ms",
      },
      data: endpoint.exampleResponse,
    };

    setResponse(mockResponse);
    setLoading(false);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-700 border-green-300 dark:bg-green-400/20 dark:text-green-300 dark:border-green-400";
      case "POST":
        return "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500";
      case "PUT":
        return "bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500";
      case "DELETE":
        return "bg-red-100 text-red-700 border-red-300 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-300 dark:bg-neutral-500/20 dark:text-neutral-400 dark:border-neutral-500";
    }
  };

  return (
    <section id="api-playground" className="space-y-6 scroll-mt-32">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">API Playground</h3>
        <p className="text-neutral-400">
          Try out my backend API endpoints (demo)
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Endpoint List */}
        <div className="lg:col-span-1 space-y-3">
          <h4 className="text-sm font-bold text-neutral-400 mb-3">
            AVAILABLE ENDPOINTS
          </h4>
          {endpoints.map((endpoint, idx) => (
            <Card
              key={idx}
              className={`cursor-pointer transition-all ${
                selectedEndpoint === endpoint
                  ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500 dark:from-cyan-500/10 dark:to-blue-500/10 dark:border-cyan-500"
                  : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50"
              }`}
              onClick={() => {
                setSelectedEndpoint(endpoint);
                setResponse(null);
                setRequestBody("");
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs px-2 py-0.5 rounded border font-mono ${getMethodColor(
                      endpoint.method
                    )}`}
                  >
                    {endpoint.method}
                  </span>
                </div>
                <div className="font-mono text-xs text-cyan-400 mb-1">
                  {endpoint.path}
                </div>
                <div className="text-xs text-neutral-500">
                  {endpoint.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Request / Response Panel */}
        <div className="lg:col-span-2 space-y-4">
          {!selectedEndpoint ? (
            <Card className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
              <CardContent className="p-12 text-center text-gray-800 dark:text-neutral-300">
                <div className="text-4xl mb-4">🚀</div>
                <p className="font-mono text-sm">
                  Select an endpoint to test the API
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Request */}
              <Card className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
                <div className="bg-gray-100 dark:bg-neutral-800 px-4 py-2 border-b border-gray-200 dark:border-neutral-700">
                  <span className="text-xs text-gray-600 dark:text-neutral-400 font-mono">
                    REQUEST
                  </span>
                </div>
                <CardContent className="p-4 space-y-4 text-gray-800 dark:text-neutral-300">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm px-3 py-1 rounded border font-mono ${getMethodColor(
                        selectedEndpoint.method
                      )}`}
                    >
                      {selectedEndpoint.method}
                    </span>
                    <span className="font-mono text-sm text-cyan-500 dark:text-cyan-400 flex-1">
                      {selectedEndpoint.path}
                    </span>
                  </div>

                  {selectedEndpoint.params && (
                    <div className="space-y-2">
                      <div className="text-xs text-gray-600 dark:text-neutral-400 font-mono">
                        PARAMETERS
                      </div>
                      {selectedEndpoint.params.map((param, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs font-mono"
                        >
                          <span className="text-cyan-500 dark:text-cyan-400">
                            {param.name}
                          </span>
                          <span className="text-gray-500 dark:text-neutral-500">
                            :
                          </span>
                          <span className="text-purple-500 dark:text-purple-400">
                            {param.type}
                          </span>
                          {param.required && (
                            <span className="text-red-500 dark:text-red-400 text-xs">
                              (required)
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedEndpoint.method !== "GET" && (
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 dark:text-neutral-400 font-mono">
                        REQUEST BODY (JSON)
                      </div>
                      <textarea
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        placeholder='{"name": "My Project", "status": "in_progress"}'
                        //changed
                        className="w-full h-24 bg-gray-100 dark:bg-neutral-950 border border-gray-300 dark:border-neutral-700 rounded p-3 font-mono text-sm text-gray-700 dark:text-neutral-300 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  )}

                  <button
                    onClick={() => handleRequest(selectedEndpoint)}
                    disabled={loading}
                    className={`w-full py-3 rounded font-mono text-sm transition-all ${
                      loading
                        ? "bg-gray-200 dark:bg-neutral-800 text-gray-500 dark:text-neutral-500 cursor-not-allowed"
                        : "bg-cyan-500 hover:bg-cyan-600 text-white"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                        <span
                          className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                          className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></span>
                      </span>
                    ) : (
                      "▶ Send Request"
                    )}
                  </button>
                </CardContent>
              </Card>

              {/* Response */}
              {response && (
                <Card className="bg-gray-50 dark:bg-neutral-900 border-gray-200 dark:border-neutral-800">
                  <div className="bg-gray-100 dark:bg-neutral-800 px-4 py-2 border-b border-gray-200 dark:border-neutral-700 flex items-center justify-between">
                    <span className="text-xs text-gray-600 dark:text-neutral-400 font-mono">
                      RESPONSE
                    </span>
                    <span className="text-xs font-mono text-green-600 dark:text-cyan-400">
                      {response.status} {response.statusText}
                    </span>
                  </div>
                  <CardContent className="p-4 space-y-3 text-gray-800 dark:text-neutral-300">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-neutral-400 font-mono mb-2">
                        HEADERS
                      </div>
                      <div className="bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-neutral-700 rounded p-3 font-mono text-xs space-y-1">
                        {Object.entries(response.headers).map(
                          ([key, value]) => (
                            <div key={key} className="flex gap-2">
                              <span className="text-cyan-500 dark:text-cyan-400">
                                {key}:
                              </span>
                              <span>{String(value)}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-neutral-400 font-mono mb-2">
                        BODY
                      </div>
                      <div className="bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-neutral-700 rounded p-3 font-mono text-xs overflow-x-auto">
                        <pre className="text-xs text-gray-800 dark:text-cyan-400">
                          {JSON.stringify(response.data, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>

      <Card className="bg-gradient-to-br from-cyan-100/30 to-blue-100/30 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-200 dark:border-cyan-500/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="text-sm text-gray-700 dark:text-neutral-300">
              <span className="font-bold text-cyan-600 dark:text-cyan-400">
                Demo Mode:
              </span>
              This playground uses mock data to demonstrate API design patterns.
              In production, these endpoints would connect to a real backend
              server.
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
