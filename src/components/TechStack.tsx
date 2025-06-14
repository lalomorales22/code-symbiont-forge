
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Terminal, Code, Database, Cloud, Zap, Shield } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      techs: [
        { name: "Node.js CLI", description: "Primary interface with rich interactions", confidence: 95 },
        { name: "React Dashboard", description: "Web-based visualization and management", confidence: 90 },
        { name: "TypeScript", description: "Type-safe development experience", confidence: 98 },
        { name: "Tailwind CSS", description: "Utility-first styling framework", confidence: 85 }
      ]
    },
    {
      category: "Backend",
      icon: <Cloud className="w-6 h-6" />,
      color: "purple",
      techs: [
        { name: "Express.js API", description: "RESTful API server and routing", confidence: 92 },
        { name: "Python/FastAPI", description: "AI service orchestration and ML pipelines", confidence: 88 },
        { name: "Socket.io", description: "Real-time communication for live updates", confidence: 80 },
        { name: "JWT Authentication", description: "Secure user session management", confidence: 90 }
      ]
    },
    {
      category: "AI & ML",
      icon: <Zap className="w-6 h-6" />,
      color: "orange",
      techs: [
        { name: "LangChain", description: "LLM orchestration and prompt management", confidence: 85 },
        { name: "Vector Embeddings", description: "Code similarity and context matching", confidence: 88 },
        { name: "Hugging Face", description: "Pre-trained models and fine-tuning", confidence: 82 },
        { name: "OpenAI/Anthropic APIs", description: "External LLM integration", confidence: 95 }
      ]
    },
    {
      category: "Data & Infrastructure", 
      icon: <Database className="w-6 h-6" />,
      color: "cyan",
      techs: [
        { name: "MySQL", description: "Relational database for structured data", confidence: 90 },
        { name: "Redis", description: "Caching and session storage", confidence: 85 },
        { name: "Railway", description: "Full-stack deployment platform", confidence: 88 },
        { name: "GitHub Actions", description: "CI/CD and automated testing", confidence: 92 }
      ]
    }
  ];

  const integrations = [
    { name: "VS Code Extension", status: "planned", description: "Direct IDE integration" },
    { name: "Git Hooks", status: "core", description: "Automatic code analysis on commits" },
    { name: "Docker Support", status: "core", description: "Containerized deployment" },
    { name: "Slack/Discord", status: "planned", description: "Team collaboration features" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/20 border-blue-500 text-blue-300',
      purple: 'bg-purple-500/20 border-purple-500 text-purple-300',
      orange: 'bg-orange-500/20 border-orange-500 text-orange-300',
      cyan: 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getStatusColor = (status: string) => {
    return status === 'core' ? 'bg-green-500' : 'bg-yellow-500';
  };

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Technology Stack</CardTitle>
          <CardDescription className="text-gray-300">
            A modern, scalable architecture built for human-AI collaboration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technologies.map((category) => (
              <Card key={category.category} className={`${getColorClasses(category.color)} border-2`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {category.icon}
                    <span className="ml-3">{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.techs.map((tech) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-white">{tech.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {tech.confidence}%
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300">{tech.description}</p>
                      <Progress value={tech.confidence} className="h-1" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architecture Benefits */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="w-6 h-6 mr-3 text-green-400" />
            Architecture Benefits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-300">Scalability</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Microservices architecture</li>
                <li>• Horizontal scaling support</li>
                <li>• Load balancing ready</li>
                <li>• Caching layers</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-cyan-300">Performance</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Vector database optimization</li>
                <li>• Real-time WebSocket updates</li>
                <li>• Efficient ML inference</li>
                <li>• Edge caching</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-300">Reliability</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Fault-tolerant design</li>
                <li>• Automatic failover</li>
                <li>• Data backup strategies</li>
                <li>• Health monitoring</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integrations & Extensions */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Integrations & Extensions</CardTitle>
          <CardDescription className="text-gray-300">
            Expanding the symbiotic experience across development tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <div>
                  <h4 className="font-semibold text-white">{integration.name}</h4>
                  <p className="text-sm text-gray-300">{integration.description}</p>
                </div>
                <Badge className={`${getStatusColor(integration.status)} text-white`}>
                  {integration.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Development Workflow */}
      <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Terminal className="w-6 h-6 mr-3 text-green-400" />
            Development Workflow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-semibold text-purple-300 mb-2">Development</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• TypeScript for type safety</li>
                  <li>• ESLint + Prettier for code quality</li>
                  <li>• Jest for testing</li>
                  <li>• Husky for git hooks</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-semibold text-blue-300 mb-2">Testing</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Unit tests with Jest</li>
                  <li>• Integration tests</li>
                  <li>• E2E testing with Playwright</li>
                  <li>• AI model validation</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="font-semibold text-cyan-300 mb-2">Deployment</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Docker containerization</li>
                  <li>• Railway deployment</li>
                  <li>• GitHub Actions CI/CD</li>
                  <li>• Monitoring & alerting</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
