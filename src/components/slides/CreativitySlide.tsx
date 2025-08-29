import { SlideLayout } from "./SlideLayout";
import creativityIdeas from "@/assets/creativity-ideas.jpg";
import { Lightbulb, Heart, Calendar } from "lucide-react";

export const CreativitySlide = () => {
  return (
    <SlideLayout background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div className="flex justify-center">
          <img 
            src={creativityIdeas} 
            alt="Creative lightbulb with gift boxes and music notes" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
        
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Creative Side
            <br />
            <span className="text-orange-300">of ChatGPT</span>
          </h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Write poems, jokes & stories</h3>
                <p className="opacity-80">Unlock your creative potential with AI inspiration</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-500/20 p-3 rounded-full">
                <Heart className="h-6 w-6 text-pink-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Generate unique ideas</h3>
                <p className="opacity-80">Brainstorm solutions and spark innovation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Plan events & surprises</h3>
                <p className="opacity-80">Thoughtful planning made effortless</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-3 text-orange-300">Example Prompt:</h4>
            <p className="font-mono text-sm bg-black/20 p-4 rounded-lg border border-white/10">
              "Suggest 5 birthday gift ideas under $50 for a music lover."
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};