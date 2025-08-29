import heroAiBrain from "@/assets/hero-ai-brain.jpg";
import { Zap, Award, Clock } from "lucide-react";

export const TitleSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="text-center text-white">
          {/* Hero Image with Modern Styling */}
          <div className="mb-16 animate-fade-scale">
            <div className="relative inline-block">
              <img 
                src={heroAiBrain} 
                alt="AI Brain neural network visualization" 
                className="w-64 h-64 mx-auto rounded-3xl shadow-xl object-cover"
              />
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-2xl"></div>
            </div>
          </div>
          
          {/* Ultra-Modern Title */}
          <div className="animate-slide-in">
            <h1 className="text-display mb-4">
              ChatGPT Mastery
            </h1>
            <h2 className="text-heading text-white/90 mb-12">
              for Work & Productivity
            </h2>
          </div>
          
          {/* Engaging Subtitle */}
          <p className="text-body-large mb-16 text-white/80 max-w-4xl mx-auto animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Transform your productivity with AI and master the most powerful conversational tool of our time
          </p>
          
          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card floating-card p-8 rounded-2xl">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">9 Power Modules</div>
              <div className="text-white/70">Comprehensive training system</div>
            </div>
            <div className="glass-card floating-card p-8 rounded-2xl">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Save 10+ Hours/Week</div>
              <div className="text-white/70">Proven productivity boost</div>
            </div>
            <div className="glass-card floating-card p-8 rounded-2xl">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Professional Ready</div>
              <div className="text-white/70">Industry-standard skills</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};