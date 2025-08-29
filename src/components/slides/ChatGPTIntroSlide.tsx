import { SlideLayout } from "./SlideLayout";
import { MessageCircle, Mic, History } from "lucide-react";

export const ChatGPTIntroSlide = () => {
  return (
    <SlideLayout background="secondary">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          What is ChatGPT?
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            A conversational AI tool by OpenAI that understands context, 
            generates human-like responses, and helps with countless tasks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat Interface</h3>
              <p className="opacity-80">Natural conversation flow with context awareness</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chat History</h3>
              <p className="opacity-80">Save and organize your conversations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Mode</h3>
              <p className="opacity-80">Speak directly and get audio responses</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-3">Available Versions:</h4>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-green-300 font-bold text-xl">GPT-3.5</div>
                <div className="text-sm opacity-80">Free Version</div>
              </div>
              <div className="text-center">
                <div className="text-primary-glow font-bold text-xl">GPT-4</div>
                <div className="text-sm opacity-80">Plus Subscription</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};