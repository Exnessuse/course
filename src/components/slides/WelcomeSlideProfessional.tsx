import instructorWelcome from "@/assets/instructor-welcome.jpg";
import { Clock, PenTool, Zap, Shield, TrendingUp, Users } from "lucide-react";

export const WelcomeSlide = () => {
  const benefits = [
    { icon: Clock, text: "Save 10+ hours weekly", color: "text-primary", stat: "92% faster" },
    { icon: PenTool, text: "Write like a pro", color: "text-accent", stat: "5x better content" },
    { icon: Zap, text: "Automate everything", color: "text-success", stat: "Zero effort" },
    { icon: Shield, text: "Use AI responsibly", color: "text-primary", stat: "100% ethical" }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Students Trained" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" },
    { icon: Clock, number: "2 Hours", label: "To Master" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Zap className="h-4 w-4" />
              #1 ChatGPT Course
            </div>
            
            <h1 className="text-display mb-8">
              Welcome to the Future!
            </h1>
            
            <p className="text-body-large mb-12 text-muted-foreground">
              Join thousands who've transformed their productivity with our proven AI mastery system.
            </p>
            
            {/* Modern Benefit Cards */}
            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="floating-card bg-white p-6 rounded-2xl shadow-card border border-border group">
                    <div className="flex items-center gap-6">
                      <div className="bg-gradient-primary p-4 rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xl font-bold text-foreground block">{benefit.text}</span>
                        <span className="text-sm font-semibold text-success">{benefit.stat}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-primary mr-2" />
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-xl border border-border">
                <img 
                  src={instructorWelcome} 
                  alt="Expert AI instructor ready to teach" 
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