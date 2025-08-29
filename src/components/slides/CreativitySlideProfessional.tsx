import creativityIdeas from "@/assets/creativity-ideas.jpg";
import { Lightbulb, Heart, Calendar, Palette, Music, Gift } from "lucide-react";

export const CreativitySlide = () => {
  const features = [
    { 
      icon: Lightbulb, 
      title: "Write poems, jokes & stories", 
      description: "Unlock your creative potential with AI-powered inspiration",
      stat: "Limitless ideas"
    },
    { 
      icon: Heart, 
      title: "Generate unique concepts", 
      description: "Brainstorm solutions and spark innovation for any project",
      stat: "Original thinking"
    },
    { 
      icon: Calendar, 
      title: "Plan memorable events", 
      description: "Create thoughtful experiences and meaningful surprises",
      stat: "Perfect planning"
    }
  ];

  const creativeAreas = [
    { icon: Palette, text: "Art Ideas" },
    { icon: Music, text: "Song Lyrics" },
    { icon: Gift, text: "Gift Ideas" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0), 
                           radial-gradient(circle at 30px 30px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px, 80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center animate-fade-scale">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-xl border border-border">
                <img 
                  src={creativityIdeas} 
                  alt="Creative workspace with lightbulb, music notes, and artistic elements" 
                  className="w-full max-w-lg rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-accent opacity-10 rounded-3xl blur-2xl"></div>
              {/* Floating Creative Elements */}
              <div className="absolute -top-6 -right-6 bg-accent/20 backdrop-blur-sm rounded-full p-4 animate-bounce">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary/20 backdrop-blur-sm rounded-full p-4 animate-bounce" style={{ animationDelay: '1s' }}>
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-gradient-accent text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Palette className="h-4 w-4" />
              Creative Genius Mode
            </div>
            
            <h1 className="text-display mb-8">
              Unleash Your Creativity
            </h1>
            
            <p className="text-body-large mb-12 text-muted-foreground">
              Transform ideas into reality with AI-powered creativity that inspires, entertains, and delights.
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
            
            {/* Creative Areas */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {creativeAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl border border-border shadow-soft">
                  <area.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{area.text}</div>
                </div>
              ))}
            </div>
            
            {/* Example Prompt */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-card">
              <h4 className="text-lg font-bold mb-3 text-accent">Try This Prompt:</h4>
              <div className="bg-gradient-secondary p-4 rounded-xl border border-border">
                <p className="font-mono text-sm text-foreground">
                  "Create 5 unique birthday surprise ideas for a music lover, each under $50 with detailed execution plans."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};