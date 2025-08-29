import { SlideLayout } from "./SlideLayout";
import codingDebug from "@/assets/coding-debug.jpg";
import { Code, Globe, FileSearch } from "lucide-react";

export const AdvancedSlide = () => {
  return (
    <SlideLayout background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Beyond
            <br />
            <span className="text-primary-glow">Writing</span>
          </h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Code className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Debug code with explanations</h3>
                <p className="opacity-80">Find bugs and understand the fixes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Globe className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Translate instantly</h3>
                <p className="opacity-80">Natural translations with cultural context</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <FileSearch className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Summarize long articles</h3>
                <p className="opacity-80">Extract key insights from complex documents</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-3 text-primary-glow">Example Prompt:</h4>
            <p className="font-mono text-sm bg-black/20 p-4 rounded-lg border border-white/10">
              "Debug this Python code and explain step by step."
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={codingDebug} 
            alt="Code editor interface with debugging tools" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
      </div>
    </SlideLayout>
  );
};