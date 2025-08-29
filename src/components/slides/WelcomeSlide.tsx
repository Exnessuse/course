import { SlideLayout } from "./SlideLayout";
import instructorWelcome from "@/assets/instructor-welcome.jpg";
import { Clock, PenTool, Zap, Shield } from "lucide-react";

export const WelcomeSlide = () => {
  const benefits = [
    { icon: Clock, text: "Save hours with AI", color: "text-blue-300" },
    { icon: PenTool, text: "Write faster & smarter", color: "text-purple-300" },
    { icon: Zap, text: "Automate daily tasks", color: "text-orange-300" },
    { icon: Shield, text: "Ethical & responsible use", color: "text-green-300" }
  ];

  return (
    <SlideLayout background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Welcome!
          </h1>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Transform your productivity with AI and master the most powerful conversational tool of our time.
          </p>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <span className="text-xl font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={instructorWelcome} 
            alt="Friendly instructor with AI assistant" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
      </div>
    </SlideLayout>
  );
};