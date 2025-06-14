
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Server, Database, Brain, Cloud, GitBranch } from 'lucide-react';

const ArchitectureDiagram = () => {
  const components = [
    {
      name: "CLI Interface",
      icon: <Terminal className="w-6 h-6" />,
      tech: "Node.js",
      description: "Primary interaction layer built with Node.js",
      color: "bg-green-500/20 border-green-500",
      position: "top-left"
    },
    {
      name: "Web Dashboard",
      icon: <Cloud className="w-6 h-6" />,
      tech: "React",
      description: "Visualization and management interface",
      color: "bg-blue-500/20 border-blue-500",
      position: "top-right"
    },
    {
      name: "API Server",
      icon: <Server className="w-6 h-6" />,
      tech: "Express.js",
      description: "Handles requests from CLI and dashboard",
      color: "bg-purple-500/20 border-purple-500",
      position: "center-left"
    },
    {
      name: "AI Core Service",
      icon: <Brain className="w-6 h-6" />,
      tech: "Python/FastAPI",
      description: "Orchestrates LLMs, personalization, and analysis",
      color: "bg-orange-500/20 border-orange-500",
      position: "center-right"
    },
    {
      name: "Database Layer",
      icon: <Database className="w-6 h-6" />,
      tech: "MySQL",
      description: "Stores user profiles, project context, and interaction logs",
      color: "bg-cyan-500/20 border-cyan-500",
      position: "bottom-center"
    },
    {
      name: "Deployment",
      icon: <GitBranch className="w-6 h-6" />,
      tech: "Railway",
      description: "Full-stack deployment with CI/CD via GitHub Actions",
      color: "bg-pink-500/20 border-pink-500",
      position: "bottom-full"
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">System Architecture</CardTitle>
          <CardDescription className="text-gray-300">
            A modular, scalable architecture designed for human-AI collaboration
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Architecture Visual */}
          <div className="relative bg-slate-900/50 p-8 rounded-lg border border-slate-600 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96">
              {/* Frontend Layer */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-300 text-center">Frontend Layer</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Terminal className="w-5 h-5 mr-2 text-green-400" />
                      <span className="font-semibold text-white">CLI Interface</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">Node.js</Badge>
                    <p className="text-xs text-gray-300">Primary developer interface</p>
                  </div>
                  <div className="p-4 bg-blue-500/20 border border-blue-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Cloud className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="font-semibold text-white">Web Dashboard</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">React</Badge>
                    <p className="text-xs text-gray-300">Visualization & management</p>
                  </div>
                </div>
              </div>

              {/* Backend Layer */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-cyan-300 text-center">Backend Layer</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-500/20 border border-purple-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Server className="w-5 h-5 mr-2 text-purple-400" />
                      <span className="font-semibold text-white">API Server</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">Express.js</Badge>
                    <p className="text-xs text-gray-300">Request orchestration</p>
                  </div>
                  <div className="p-4 bg-orange-500/20 border border-orange-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Brain className="w-5 h-5 mr-2 text-orange-400" />
                      <span className="font-semibold text-white">AI Core Service</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">Python/FastAPI</Badge>
                    <p className="text-xs text-gray-300">LLM orchestration & personalization</p>
                  </div>
                </div>
              </div>

              {/* Data Layer */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-300 text-center">Data Layer</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-cyan-500/20 border border-cyan-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Database className="w-5 h-5 mr-2 text-cyan-400" />
                      <span className="font-semibold text-white">MySQL Database</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">Railway</Badge>
                    <p className="text-xs text-gray-300">User profiles, context, interactions</p>
                  </div>
                  <div className="p-4 bg-pink-500/20 border border-pink-500 rounded-lg">
                    <div className="flex items-center mb-2">
                      <GitBranch className="w-5 h-5 mr-2 text-pink-400" />
                      <span className="font-semibold text-white">CI/CD Pipeline</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">GitHub Actions</Badge>
                    <p className="text-xs text-gray-300">Automated deployment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                  </marker>
                </defs>
                <line x1="33%" y1="40%" x2="67%" y2="40%" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="67%" y1="60%" x2="33%" y2="60%" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
          </div>

          {/* Database Schema */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-cyan-300">user_profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xs font-mono text-gray-300">
                  <div>• user_id</div>
                  <div>• preferences</div>
                  <div>• learning_goals</div>
                  <div>• skill_level</div>
                  <div>• coding_style</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-purple-300">project_context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xs font-mono text-gray-300">
                  <div>• project_id</div>
                  <div>• vector_embeddings</div>
                  <div>• file_structure</div>
                  <div>• dependencies</div>
                  <div>• style_guides</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-orange-300">interaction_log</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-xs font-mono text-gray-300">
                  <div>• interaction_id</div>
                  <div>• command_history</div>
                  <div>• ai_suggestions</div>
                  <div>• user_feedback</div>
                  <div>• learning_signals</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArchitectureDiagram;
