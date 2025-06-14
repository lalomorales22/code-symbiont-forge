
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, Brain, Code, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';

const SymbiosisFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 'human-action',
      title: 'Human Action',
      icon: <User className="w-6 h-6" />,
      color: 'purple',
      description: 'Developer codes, runs commands, asks questions',
      details: [
        'Writes high-level code structure',
        'Runs symbiont commands for assistance',
        'Asks conceptual questions',
        'Reviews AI suggestions'
      ]
    },
    {
      id: 'ai-analysis',
      title: 'AI Analysis & Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'blue',
      description: 'AI analyzes context, learns patterns, adapts model',
      details: [
        'Scans current codebase state',
        'Updates vector embeddings',
        'Identifies coding patterns',
        'Personalizes response model'
      ]
    },
    {
      id: 'symbiotic-output',
      title: 'Symbiotic Output',
      icon: <Code className="w-6 h-6" />,
      color: 'cyan',
      description: 'AI provides personalized, contextual assistance',
      details: [
        'Generates code in user\'s style',
        'Provides explanations with examples',
        'Suggests improvements',
        'Offers learning opportunities'
      ]
    },
    {
      id: 'human-evolution',
      title: 'Human Evolution',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'green',
      description: 'Developer learns faster, focuses on strategy',
      details: [
        'Understands new concepts quickly',
        'Focuses on architecture decisions',
        'Provides feedback to AI',
        'Iterates on solutions'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-500/20 border-purple-500 text-purple-300',
      blue: 'bg-blue-500/20 border-blue-500 text-blue-300',
      cyan: 'bg-cyan-500/20 border-cyan-500 text-cyan-300',
      green: 'bg-green-500/20 border-green-500 text-green-300'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">The Symbiotic Workflow</CardTitle>
          <CardDescription className="text-gray-300">
            A continuous cycle of mutual learning and adaptation between human and AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Interactive Flow Diagram */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <Button
                    variant="outline"
                    className={`w-full p-6 h-auto flex flex-col items-center space-y-3 transition-all duration-300 ${
                      activeStep === index 
                        ? getColorClasses(step.color) + ' scale-105 shadow-lg'
                        : 'bg-slate-700/50 border-slate-600 hover:bg-slate-600/50'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`p-3 rounded-full ${activeStep === index ? 'bg-white/20' : 'bg-slate-600'}`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-sm">{step.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{step.description}</p>
                    </div>
                  </Button>
                  
                  {/* Arrow to next step */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Circular flow arrow for the last step */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="w-full h-4 border-t-2 border-dashed border-gray-500 rounded-full opacity-50" />
              <div className="absolute -top-2 left-0 transform -translate-x-1/2">
                <ArrowRight className="w-4 h-4 text-gray-500 transform rotate-180" />
              </div>
            </div>
          </div>

          {/* Step Details */}
          <Card className={`${getColorClasses(workflowSteps[activeStep].color)} border-2`}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {workflowSteps[activeStep].icon}
                <span className="ml-3">{workflowSteps[activeStep].title}</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                {workflowSteps[activeStep].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workflowSteps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Workflow Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              Co-Coding Example
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-400">$ symbiont do "create a user profile component"</div>
              <div className="text-green-400 mt-2">
                ✓ Analyzing your React patterns...
                <br />✓ Matching your TypeScript style...
                <br />✓ Generating component...
              </div>
            </div>
            <div className="text-sm text-gray-300">
              The AI understands your project structure, naming conventions, and preferred patterns 
              to generate code that feels like you wrote it.
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
              Learning Example
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
              <div className="text-gray-400">$ symbiont learn "explain closures in this context"</div>
              <div className="text-cyan-400 mt-2">
                Looking at your `createCounter` function...
                <br />Here's how closures work in your code...
              </div>
            </div>
            <div className="text-sm text-gray-300">
              Instead of generic explanations, the AI uses your actual codebase as examples, 
              making learning immediate and practical.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feedback Loop */}
      <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border-purple-500/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-yellow-400" />
            The Correction & Evolution Mechanism
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-gray-300">
            When the AI makes a suboptimal suggestion, the correction process creates a powerful feedback loop:
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-semibold text-purple-300 mb-2">1. Identify Issue</h4>
              <p className="text-sm text-gray-300">Developer notices AI suggestion doesn't fit their needs</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-semibold text-blue-300 mb-2">2. Provide Correction</h4>
              <p className="text-sm text-gray-300">Use `symbiont correct` to show better implementation</p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">3. Learn & Adapt</h4>
              <p className="text-sm text-gray-300">AI updates personal model and improves future suggestions</p>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg">
            <div className="font-mono text-sm">
              <div className="text-gray-400">$ symbiont correct</div>
              <div className="text-yellow-400 mt-1">
                → Opening correction interface...
                <br />→ Please provide the improved code and reason...
              </div>
              <div className="text-green-400 mt-2">
                ✓ Feedback recorded. I'll remember this pattern preference.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SymbiosisFlow;
