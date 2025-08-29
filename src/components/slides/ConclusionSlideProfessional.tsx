import successTrophy from "@/assets/success-trophy.jpg";
import { Trophy, Zap, PenTool, Code, Lightbulb, Star, ArrowRight, Sparkles } from "lucide-react";

export const ConclusionSlide = () => {
  const achievements = [
    { 
      icon: Zap, 
      text: "Productivity Master", 
      detail: "10x faster workflows",
      color: "text-primary" 
    },
    { 
      icon: PenTool, 
      text: "Content Creator", 
      detail: "Professional writing",
      color: "text-accent" 
    },
    { 
      icon: Code, 
      text: "Tech Wizard", 
      detail: "Code & translations",
      color: "text-success" 
    },
    { 
      icon: Lightbulb, 
      text: "Creative Genius", 
      detail: "Unlimited ideas",
      color: "text-primary" 
    }
  ];

  const nextSteps = [
    "Practice with advanced prompts daily",
    "Explore industry-specific use cases", 
    "Build your AI-powered workflow",
    "Join our exclusive community"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Celebration Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-white rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="text-center text-white">
          {/* Hero Trophy Section */}
          <div className="mb-16 animate-fade-scale">
            <div className="relative inline-block mb-8">
              <img 
                src={successTrophy} 
                alt="Golden trophy celebrating AI mastery success" 
                className="w-64 h-64 mx-auto rounded-3xl shadow-xl object-cover"
              />
              <div className="absolute -inset-4 bg-gradient-accent opacity-30 rounded-3xl blur-2xl"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Sparkles className="h-8 w-8 text-white animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-display mb-4 animate-slide-in">
              <span className="text-white">Mission</span>{" "}
              <span className="text-accent">Accomplished!</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <Trophy className="h-12 w-12 text-accent animate-bounce" />
              <p className="text-3xl font-bold text-white/90">You're Now a ChatGPT Expert!</p>
              <Trophy className="h-12 w-12 text-accent animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* Achievement Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="glass-card floating-card p-8 rounded-3xl text-center">
                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-xl font-bold mb-2">{achievement.text}</div>
                  <div className="text-sm text-white/70">{achievement.detail}</div>
                  <div className="flex justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Next Steps Section */}
          <div className="max-w-4xl mx-auto mb-16 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 text-white">Your AI Journey Continues</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Ready to </span>
              <span className="text-accent">10x your productivity?</span>
            </div>
            <p className="text-xl text-white/80 mb-8">
              Start implementing these skills today and watch your efficiency soar!
            </p>
            <div className="inline-flex items-center gap-2 bg-accent px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-accent-light transition-colors">
              <Zap className="h-5 w-5" />
              Begin Your Transformation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};