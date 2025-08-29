import { SlideLayout } from "./SlideLayout";
import contentCreation from "@/assets/content-creation.jpg";
import { PenTool, Share2, Edit3 } from "lucide-react";

export const WritingSlide = () => {
  return (
    <SlideLayout background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div className="flex justify-center">
          <img 
            src={contentCreation} 
            alt="Content creation workspace with writing tools" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
        
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Content Creation
            <br />
            <span className="text-orange-300">Made Easy</span>
          </h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <PenTool className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Write blog posts, LinkedIn content</h3>
                <p className="opacity-80">From ideas to publish-ready content</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-full">
                <Edit3 className="h-6 w-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adjust tone & style</h3>
                <p className="opacity-80">Professional, casual, persuasive - any voice you need</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Share2 className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save time on editing</h3>
                <p className="opacity-80">Get polished first drafts that need minimal revision</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-3 text-orange-300">Example Prompt:</h4>
            <p className="font-mono text-sm bg-black/20 p-4 rounded-lg border border-white/10">
              "Write a 150-word blog intro on remote work benefits."
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};