import contentCreation from "@/assets/content-creation.jpg";
import { PenTool, Share2, Edit3, BookOpen, FileType, MessageSquare } from "lucide-react";

export const WritingSlide = () => {
  const features = [
    { 
      icon: PenTool, 
      title: "Write blog posts & LinkedIn content", 
      description: "From ideas to publish-ready content in minutes",
      stat: "10x faster"
    },
    { 
      icon: Edit3, 
      title: "Perfect tone & style", 
      description: "Professional, casual, persuasive - any voice you need",
      stat: "Any style"
    },
    { 
      icon: Share2, 
      title: "Save time on editing", 
      description: "Get polished first drafts that need minimal revision",
      stat: "80% less editing"
    }
  ];

  const contentTypes = [
    { icon: BookOpen, text: "Blog Articles" },
    { icon: MessageSquare, text: "Social Posts" },
    { icon: FileType, text: "Sales Copy" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center animate-fade-scale">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-xl border border-border">
                <img 
                  src={contentCreation} 
                  alt="Modern content creation workspace with AI writing tools" 
                  className="w-full max-w-lg rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-accent opacity-10 rounded-3xl blur-2xl"></div>
            </div>
          </div>
          
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <PenTool className="h-4 w-4" />
              Content Creation Pro
            </div>
            
            <h1 className="text-display mb-8">
              Write Like a Pro
            </h1>
            
            <p className="text-body-large mb-12 text-muted-foreground">
              Create compelling content that engages your audience and drives results across all platforms.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="floating-card bg-white p-6 rounded-2xl shadow-card border border-border">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-accent p-4 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground mb-2">{feature.description}</p>
                        <span className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Content Types */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl border border-border shadow-soft">
                  <type.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{type.text}</div>
                </div>
              ))}
            </div>
            
            {/* Example Prompt */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-card">
              <h4 className="text-lg font-bold mb-3 text-accent">Try This Prompt:</h4>
              <div className="bg-gradient-secondary p-4 rounded-xl border border-border">
                <p className="font-mono text-sm text-foreground">
                  "Write a 200-word LinkedIn post about remote work benefits that's engaging and includes 3 actionable tips."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};