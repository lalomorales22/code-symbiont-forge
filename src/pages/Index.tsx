
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Terminal, Brain, GitBranch, Zap, Users, Lock, TrendingUp, Code, BookOpen, Settings } from 'lucide-react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import SymbiosisFlow from '@/components/SymbiosisFlow';
import CLIDemo from '@/components/CLIDemo';
import TechStack from '@/components/TechStack';
import EthicalGuidelines from '@/components/EthicalGuidelines';

const Index = () => {
  const [selectedFeature, setSelectedFeature] = useState('overview');
  const [adaptationProgress, setAdaptationProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAdaptationProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const coreFeatures = [
    {
      id: 'init',
      icon: <GitBranch className="w-5 h-5" />,
      title: 'symbiont init',
      description: 'Contextual project analysis and DNA mapping',
      command: 'Scans codebase, creates vector embeddings, establishes style patterns'
    },
    {
      id: 'do',
      icon: <Code className="w-5 h-5" />,
      title: 'symbiont do',
      description: 'Co-coding with adaptive intelligence',
      command: 'Generates code matching your exact style and project architecture'
    },
    {
      id: 'learn',
      icon: <BookOpen className="w-5 h-5" />,
      title: 'symbiont learn',
      description: 'Accelerated skill acquisition',
      command: 'Bridges theory and practice using your actual codebase as examples'
    },
    {
      id: 'correct',
      icon: <Brain className="w-5 h-5" />,
      title: 'symbiont correct',
      description: 'Co-evolutionary feedback loop',
      command: 'Mutual learning through correction and adaptation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Project Symbiont
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              An AI co-pilot that embodies true Human-AI Symbiosis. Not just a tool, but a co-evolutionary partner 
              that learns with you, adapts to your style, and accelerates your development journey.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Terminal className="w-4 h-4 mr-2" />
                CLI-First Experience
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Adaptive Learning
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Real-time Evolution
              </div>
            </div>
          </div>

          {/* Adaptation Progress Indicator */}
          <div className="max-w-md mx-auto mb-12">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-400">Symbiotic Adaptation in Progress</p>
            </div>
            <Progress value={adaptationProgress} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Learning Your Style</span>
              <span>{adaptationProgress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <Tabs value={selectedFeature} onValueChange={setSelectedFeature} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="cli">CLI Demo</TabsTrigger>
            <TabsTrigger value="tech">Tech Stack</TabsTrigger>
            <TabsTrigger value="ethics">Ethics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Core Concept */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Brain className="w-6 h-6 mr-3 text-purple-400" />
                  Core Concept: Human-AI Symbiosis
                </CardTitle>
                <CardDescription className="text-gray-300">
                  A true partnership where both human and AI co-evolve, creating a "Centaur Team" 
                  that's greater than the sum of its parts.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-300">Human Focus</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• High-level strategy and architecture</li>
                      <li>• Creative problem-solving</li>
                      <li>• Business logic and requirements</li>
                      <li>• Code review and quality decisions</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-300">AI Responsibilities</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Boilerplate and routine code generation</li>
                      <li>• Bug detection and debugging assistance</li>
                      <li>• Documentation and testing</li>
                      <li>• Style consistency and refactoring</li>
                    </ul>
                  </div>
                </div>
                
                <Separator className="bg-slate-600" />
                
                <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-3">The Co-Evolution Loop</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <p className="text-sm text-gray-300">Human codes & asks questions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <p className="text-sm text-gray-300">AI learns style & context</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <p className="text-sm text-gray-300">Personalized assistance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <p className="text-sm text-gray-300">Human learns faster</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Features */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Core Commands & Features</CardTitle>
                <CardDescription className="text-gray-300">
                  The primary interface is a powerful CLI that grows smarter with every interaction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coreFeatures.map((feature) => (
                    <div key={feature.id} className="p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-mono text-purple-300">{feature.title}</h4>
                          <p className="text-sm text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-300 font-mono bg-slate-800 p-2 rounded">
                        {feature.command}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monetization Strategy */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                  Freemium Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Badge variant="secondary" className="mr-3">FREE</Badge>
                      <h4 className="text-lg font-semibold text-white">Open Source Core</h4>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Core CLI functionality</li>
                      <li>• Public repository analysis</li>
                      <li>• Basic learning features</li>
                      <li>• Community support</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Badge className="mr-3 bg-gradient-to-r from-purple-500 to-cyan-500">$10/mo</Badge>
                      <h4 className="text-lg font-semibold text-white">Pro Symbiont</h4>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Private repository analysis</li>
                      <li>• Unlimited learn & debug commands</li>
                      <li>• Advanced personalization</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture">
            <ArchitectureDiagram />
          </TabsContent>

          <TabsContent value="workflow">
            <SymbiosisFlow />
          </TabsContent>

          <TabsContent value="cli">
            <CLIDemo />
          </TabsContent>

          <TabsContent value="tech">
            <TechStack />
          </TabsContent>

          <TabsContent value="ethics">
            <EthicalGuidelines />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
