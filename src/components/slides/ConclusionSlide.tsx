import { SlideLayout } from "./SlideLayout";
import successTrophy from "@/assets/success-trophy.jpg";
import { Trophy, Zap, PenTool, Code, Lightbulb } from "lucide-react";

export const ConclusionSlide = () => {
  const achievements = [
    { icon: Zap, text: "Productivity", color: "text-blue-300" },
    { icon: PenTool, text: "Writing & content", color: "text-purple-300" },
    { icon: Code, text: "Coding & translation", color: "text-green-300" },
    { icon: Lightbulb, text: "Creativity", color: "text-orange-300" }
  ];

  return (
    <SlideLayout background="hero">
      <div className="text-center text-white">
        <div className="mb-12">
          <img 
            src={successTrophy} 
            alt="Golden trophy celebrating success" 
            className="w-48 h-48 mx-auto mb-8 rounded-full shadow-glow"
          />
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-8">
          <span className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="h-16 w-16 text-yellow-300" />
            Congratulations!
          </span>
        </h1>
        
        <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          You now know how to harness ChatGPT's power for work and life
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group-hover:bg-white/20 transition-colors mb-4">
                  <Icon className={`h-8 w-8 mx-auto ${achievement.color}`} />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg font-medium">{achievement.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-4 text-primary-glow">Next Steps:</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            Keep practicing with prompts, explore new use cases, 
            and remember to use AI ethically and responsibly.
          </p>
        </div>
        
        <div className="text-xl font-semibold">
          <span className="text-primary-glow">Ready to transform your productivity?</span>
          <br />
          Let's begin your ChatGPT journey!
        </div>
      </div>
    </SlideLayout>
  );
};