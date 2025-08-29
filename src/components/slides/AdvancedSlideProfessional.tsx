import codingDebug from "@/assets/coding-debug.jpg";
import { Code, Globe, FileSearch, Terminal, Languages, BookOpen } from "lucide-react";

export const AdvancedSlide = () => {
  const features = [
    { 
      icon: Code, 
      title: "Debug code with explanations", 
      description: "Find bugs, understand fixes, and learn best practices",
      stat: "Bug-free code"
    },
    { 
      icon: Globe, 
      title: "Translate instantly", 
      description: "Natural translations with cultural context and nuance",
      stat: "100+ languages"
    },
    { 
      icon: FileSearch, 
      title: "Summarize complex documents", 
      description: "Extract key insights from research papers and reports",
      stat: "Save hours"
    }
  ];

  const capabilities = [
    { icon: Terminal, text: "Code Review" },
    { icon: Languages, text: "Translation" },
    { icon: BookOpen, text: "Research" }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-64 h-64 bg-success rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Code className="h-4 w-4" />
              Advanced Applications
            </div>
            
            <h1 className="text-display mb-8">
              Beyond Writing
            </h1>
            
            <p className="text-body-large mb-12 text-muted-foreground">
              Unlock ChatGPT's advanced capabilities for coding, translation, research, and complex problem-solving.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="floating-card bg-white p-6 rounded-2xl shadow-card border border-border">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-primary p-4 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground mb-2">{feature.description}</p>
                        <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Capabilities */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl border border-border shadow-soft">
                  <capability.icon className="h-8 w-8 text-success mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{capability.text}</div>
                </div>
              ))}
            </div>
            
            {/* Example Prompt */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-card">
              <h4 className="text-lg font-bold mb-3 text-success">Try This Prompt:</h4>
              <div className="bg-gradient-secondary p-4 rounded-xl border border-border">
                <p className="font-mono text-sm text-foreground">
                  "Debug this Python function and explain each error with solutions and best practices."
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-xl border border-border">
                <img 
                  src={codingDebug} 
                  alt="Advanced coding interface with AI debugging tools" 
                  className="w-full max-w-lg rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-10 rounded-3xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};