
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Users, Brain, Lock, AlertTriangle } from 'lucide-react';

const EthicalGuidelines = () => {
  const principles = [
    {
      title: "Augment, Don't Override",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      description: "AI enhances human capabilities without replacing decision-making",
      guidelines: [
        "All code modifications require explicit user confirmation",
        "Human developer maintains final authority over all decisions",
        "AI provides suggestions, not commands",
        "User can override any AI recommendation"
      ]
    },
    {
      title: "Explainability First",
      icon: <Eye className="w-6 h-6" />,
      color: "blue",
      description: "Every AI action must be transparent and understandable",
      guidelines: [
        "Every suggestion includes reasoning and context",
        "AI explains its decision-making process",
        "No black-box operations allowed",
        "Users can always ask 'Why?' and get meaningful answers"
      ]
    },
    {
      title: "Privacy by Design",
      icon: <Lock className="w-6 h-6" />,
      color: "green",
      description: "User data protection and privacy are fundamental",
      guidelines: [
        "On-device computation preferred when feasible",
        "Transparent data collection and usage policies",
        "User owns their profile and interaction data",
        "Easy export and deletion of personal data"
      ]
    },
    {
      title: "Prevent Skill Atrophy",
      icon: <Brain className="w-6 h-6" />,
      color: "orange",
      description: "Promote learning and understanding, not dependency",
      guidelines: [
        "Focus on teaching concepts, not just providing answers",
        "Encourage experimentation and exploration",
        "Gradual complexity increase in assistance",
        "Regular knowledge checks and skill assessment"
      ]
    }
  ];

  const safeguards = [
    {
      category: "Data Protection",
      measures: [
        "End-to-end encryption for sensitive data",
        "Regular security audits and penetration testing",
        "GDPR and CCPA compliance",
        "Minimal data collection principle"
      ]
    },
    {
      category: "AI Safety",
      measures: [
        "Content filtering for harmful outputs",
        "Rate limiting to prevent abuse",
        "Human oversight for critical decisions",
        "Fail-safe mechanisms for AI failures"
      ]
    },
    {
      category: "User Empowerment",
      measures: [
        "Granular control over AI assistance level",
        "Ability to disable specific features",
        "Clear opt-in/opt-out mechanisms",
        "Regular transparency reports"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-500/20 border-purple-500 text-purple-300',
      blue: 'bg-blue-500/20 border-blue-500 text-blue-300',
      green: 'bg-green-500/20 border-green-500 text-green-300',
      orange: 'bg-orange-500/20 border-orange-500 text-orange-300'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="space-y-8">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Shield className="w-6 h-6 mr-3 text-green-400" />
            Ethical Guidelines & Design Philosophy
          </CardTitle>
          <CardDescription className="text-gray-300">
            Building responsible AI that empowers humans and respects their autonomy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className={`${getColorClasses(principle.color)} border-2`}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {principle.icon}
                    <span className="ml-3">{principle.title}</span>
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">•</span>
                        <span className="text-sm text-gray-300">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety Measures */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
            Safety Measures & Safeguards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeguards.map((safeguard) => (
              <div key={safeguard.category} className="space-y-4">
                <h4 className="font-semibold text-cyan-300">{safeguard.category}</h4>
                <ul className="space-y-2">
                  {safeguard.measures.map((measure, index) => (
                    <li key={index} className="flex items-start">
                      <Shield className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Control Center */}
      <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/50">
        <CardHeader>
          <CardTitle className="text-white">User Control Center</CardTitle>
          <CardDescription className="text-gray-300">
            Granular control over AI assistance and data usage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-300">Assistance Level Controls</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Code Generation</span>
                  <Badge variant="secondary">Configurable</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Learning Assistance</span>
                  <Badge variant="secondary">Always On</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Debugging Help</span>
                  <Badge variant="secondary">On Demand</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Style Learning</span>
                  <Badge variant="secondary">Opt-in</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-purple-300">Data & Privacy Controls</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Code Analysis</span>
                  <Badge className="bg-green-500">Encrypted</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Usage Analytics</span>
                  <Badge className="bg-yellow-500">Anonymous</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Personal Model</span>
                  <Badge className="bg-blue-500">Local Storage</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Data Export</span>
                  <Badge className="bg-purple-500">Available</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transparency Commitment */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Transparency Commitment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-300">What We Promise</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Clear explanation of AI decision-making</li>
                <li>• Regular updates on ethical guidelines</li>
                <li>• Open-source core functionality</li>
                <li>• Community involvement in ethical decisions</li>
                <li>• Regular transparency reports</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-300">What We Don't Do</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Train on your code without explicit consent</li>
                <li>• Share your data with third parties</li>
                <li>• Make decisions without human oversight</li>
                <li>• Hide our AI's limitations or failures</li>
                <li>• Lock you into proprietary formats</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EthicalGuidelines;
