import { SlideLayout } from "./SlideLayout";
import ethicsSecurity from "@/assets/ethics-security.jpg";
import { Shield, AlertTriangle, Lock, CheckCircle } from "lucide-react";

export const EthicsSlide = () => {
  return (
    <SlideLayout background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Responsible
            <br />
            <span className="text-green-300">AI Use</span>
          </h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-red-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Always fact-check results</h3>
                <p className="opacity-80">AI can make mistakes - verify important information</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-orange-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Watch for bias</h3>
                <p className="opacity-80">Be aware of potential biases in AI responses</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Lock className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Protect sensitive data</h3>
                <p className="opacity-80">Never share confidential or personal information</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Use ethically in work & study</h3>
                <p className="opacity-80">Enhance your abilities, don't replace your thinking</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-500/10 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />
              <h4 className="text-lg font-semibold text-yellow-300">Remember:</h4>
            </div>
            <p className="text-sm opacity-90">
              AI is a powerful assistant, not a replacement for critical thinking, 
              creativity, and human judgment.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={ethicsSecurity} 
            alt="Security shield representing responsible AI use" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
      </div>
    </SlideLayout>
  );
};