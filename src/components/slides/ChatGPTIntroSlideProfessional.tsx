import { MessageCircle, Mic, History, Brain, Sparkles, Rocket } from "lucide-react";

export const ChatGPTIntroSlide = () => {
  const features = [
    { 
      icon: MessageCircle, 
      title: "Natural Conversations", 
      description: "Talk to AI like a human expert",
      gradient: "bg-gradient-primary"
    },
    { 
      icon: History, 
      title: "Smart Memory", 
      description: "Remembers your entire conversation",
      gradient: "bg-gradient-accent"
    },
    { 
      icon: Mic, 
      title: "Voice Integration", 
      description: "Speak and listen in real-time",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="text-center">
          {/* Hero Section */}
          <div className="animate-slide-in mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Brain className="h-4 w-4" />
              Meet Your AI Assistant
            </div>
            
            <h1 className="text-display mb-8">
              What is ChatGPT?
            </h1>
            
            <p className="text-body-large mb-16 text-muted-foreground max-w-4xl mx-auto">
              The world's most advanced conversational AI that understands context, generates human-like responses, and transforms how you work.
            </p>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-scale" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div key={index} className="floating-card bg-white p-10 rounded-3xl border border-border shadow-card">
                <div className={`w-20 h-20 ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Version Comparison */}
          <div className="max-w-4xl mx-auto animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Choose Your Power Level</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-border shadow-card">
                <div className="bg-gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-success mb-2">GPT-3.5</div>
                <div className="text-lg text-muted-foreground mb-4">Free Version</div>
                <div className="text-sm text-muted-foreground">Perfect for getting started</div>
              </div>
              <div className="bg-gradient-primary p-8 rounded-3xl text-white shadow-xl">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">GPT-4</div>
                <div className="text-lg text-white/80 mb-4">Plus Subscription</div>
                <div className="text-sm text-white/70">Advanced reasoning & creativity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};