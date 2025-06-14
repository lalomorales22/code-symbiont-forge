
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Terminal, Play, Copy, Check } from 'lucide-react';

const CLIDemo = () => {
  const [activeDemo, setActiveDemo] = useState('init');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState('');

  const demos = {
    init: {
      title: 'Project Initialization',
      description: 'Setting up symbiotic partnership with your codebase',
      steps: [
        { command: '$ cd my-react-project', output: '', delay: 500 },
        { command: '$ symbiont init', output: '', delay: 800 },
        { 
          command: '', 
          output: `🧬 Analyzing project DNA...
📁 Scanning 247 files across 12 directories
🔍 Detecting patterns in your React/TypeScript setup
📚 Learning from 3,420 lines of code
🎨 Identifying your coding style preferences
⚡ Building vector embeddings for context

✅ Project Symbiont initialized successfully!
📊 Style confidence: 89%
🎯 Ready for symbiotic development`, 
          delay: 2000 
        }
      ]
    },
    do: {
      title: 'Co-Coding Assistant',
      description: 'AI generates code matching your exact style and patterns',
      steps: [
        { command: '$ symbiont do "create a UserCard component with avatar and status"', output: '', delay: 800 },
        { 
          command: '', 
          output: `🎯 Understanding your request...
🔍 Analyzing your component patterns...
📝 Matching your TypeScript interfaces style
🎨 Following your CSS module conventions

Generated: src/components/UserCard/UserCard.tsx
Generated: src/components/UserCard/UserCard.module.css
Generated: src/components/UserCard/index.ts

✨ Code ready for review. Perfect style match: 94%`, 
          delay: 1500 
        },
        {
          command: '$ cat src/components/UserCard/UserCard.tsx',
          output: `import React from 'react';
import styles from './UserCard.module.css';
import { Avatar } from '../Avatar';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    status: 'online' | 'offline' | 'away';
  };
  variant?: 'compact' | 'detailed';
}

export const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  variant = 'detailed' 
}) => {
  return (
    <div className={styles.userCard} data-variant={variant}>
      <Avatar 
        src={user.avatar} 
        alt={user.name}
        status={user.status}
      />
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user.name}</h3>
        {variant === 'detailed' && (
          <p className={styles.userEmail}>{user.email}</p>
        )}
      </div>
    </div>
  );
};`,
          delay: 2000
        }
      ]
    },
    learn: {
      title: 'Contextual Learning',
      description: 'Learn concepts using your actual codebase as examples',
      steps: [
        { command: '$ symbiont learn "explain React hooks in my useAuth hook"', output: '', delay: 800 },
        { 
          command: '', 
          output: `🔍 Analyzing your useAuth.ts hook...
📚 Connecting theory to your implementation...

Looking at your \`useAuth\` hook, here's how React hooks work:

🪝 **useState** (line 8): 
   \`const [user, setUser] = useState<User | null>(null)\`
   Manages the authentication state in your component

🔄 **useEffect** (line 12):
   \`useEffect(() => { checkAuthStatus(); }, [])\`
   Runs authentication check when component mounts

🎯 **Custom Hook Pattern**:
   Your hook encapsulates auth logic and returns:
   - Current user state
   - Login/logout functions  
   - Loading states

💡 **Why this works**: Hooks let you "hook into" React's state 
   management and lifecycle. Your pattern follows the single 
   responsibility principle beautifully!

Would you like me to explain any specific part in more detail?`, 
          delay: 2500 
        }
      ]
    },
    debug: {
      title: 'Intelligent Debugging',
      description: 'AI analyzes errors with full project context',
      steps: [
        { command: '$ npm run build', output: '', delay: 500 },
        { 
          command: '', 
          output: `❌ Error: Cannot find module './UserCard' 
   at src/components/Dashboard/Dashboard.tsx:12:24`, 
          delay: 800 
        },
        { command: '$ symbiont debug "Cannot find module ./UserCard"', output: '', delay: 600 },
        { 
          command: '', 
          output: `🔍 Analyzing error with project context...
📁 Checking import paths in Dashboard.tsx...

🎯 **Issue Found**: Missing barrel export

**Problem**: You're importing \`./UserCard\` but the component
is in \`./UserCard/UserCard.tsx\` with no index.ts barrel export.

**Solutions**:
1. Add barrel export (recommended):
   Create \`src/components/UserCard/index.ts\`:
   \`export { UserCard } from './UserCard';\`

2. Update import path:
   Change \`import { UserCard } from './UserCard'\`
   to \`import { UserCard } from './UserCard/UserCard'\`

**Auto-fix available**: Would you like me to create the barrel export?`, 
          delay: 2000 
        }
      ]
    }
  };

  const copyCommand = async (command: string) => {
    await navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const playDemo = async () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const demo = demos[activeDemo as keyof typeof demos];
    for (let i = 0; i < demo.steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, demo.steps[i].delay));
    }
    
    setIsPlaying(false);
  };

  useEffect(() => {
    setCurrentStep(0);
  }, [activeDemo]);

  const currentDemo = demos[activeDemo as keyof typeof demos];

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Terminal className="w-6 h-6 mr-3 text-green-400" />
            Interactive CLI Demo
          </CardTitle>
          <CardDescription className="text-gray-300">
            Experience the symbiotic CLI interface in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Demo Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(demos).map(([key, demo]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                onClick={() => setActiveDemo(key)}
                className={`${
                  activeDemo === key 
                    ? 'bg-purple-500 hover:bg-purple-600' 
                    : 'bg-slate-700 hover:bg-slate-600 border-slate-600'
                }`}
              >
                {demo.title}
              </Button>
            ))}
          </div>

          {/* Current Demo Info */}
          <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
            <h3 className="font-semibold text-white mb-2">{currentDemo.title}</h3>
            <p className="text-gray-300 text-sm">{currentDemo.description}</p>
          </div>

          {/* Terminal Window */}
          <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">symbiont@terminal</div>
              <Button
                size="sm"
                variant="outline"
                onClick={playDemo}
                disabled={isPlaying}
                className="bg-slate-700 border-slate-600 hover:bg-slate-600"
              >
                <Play className="w-4 h-4 mr-1" />
                {isPlaying ? 'Playing...' : 'Replay'}
              </Button>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm min-h-[400px]">
              {currentDemo.steps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="mb-4">
                  {step.command && (
                    <div className="flex items-center group">
                      <span className="text-green-400">{step.command}</span>
                      {step.command.startsWith('$ symbiont') && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyCommand(step.command)}
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedCommand === step.command ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </Button>
                      )}
                    </div>
                  )}
                  {step.output && (
                    <div className="text-gray-300 whitespace-pre-line mt-2 pl-2 border-l-2 border-purple-500/30">
                      {step.output}
                    </div>
                  )}
                </div>
              ))}
              
              {isPlaying && currentStep < currentDemo.steps.length - 1 && (
                <div className="flex items-center text-gray-500">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse mr-2"></div>
                  Processing...
                </div>
              )}
            </div>
          </div>

          {/* Command Reference */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit">Core</Badge>
                <CardTitle className="text-sm font-mono text-purple-300">symbiont init</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-300">Initialize project analysis and create AI-human partnership</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit">Generate</Badge>
                <CardTitle className="text-sm font-mono text-blue-300">symbiont do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-300">Generate code that matches your style and project patterns</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit">Learn</Badge>
                <CardTitle className="text-sm font-mono text-cyan-300">symbiont learn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-300">Understand concepts through your actual codebase examples</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit">Debug</Badge>
                <CardTitle className="text-sm font-mono text-orange-300">symbiont debug</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-300">Intelligent error analysis with full project context</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CLIDemo;
