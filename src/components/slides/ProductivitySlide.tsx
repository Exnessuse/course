import { SlideLayout } from "./SlideLayout";
import productivityEmail from "@/assets/productivity-email.jpg";
import { Mail, FileText, CheckCircle } from "lucide-react";

export const ProductivitySlide = () => {
  return (
    <SlideLayout background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Automating
            <br />
            <span className="text-primary-glow">Emails & Reports</span>
          </h1>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Draft emails in seconds</h3>
                <p className="opacity-80">Professional tone, perfect structure, every time</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <FileText className="h-6 w-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Summarize meetings instantly</h3>
                <p className="opacity-80">Turn long transcripts into clear action items</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Generate structured reports</h3>
                <p className="opacity-80">Data analysis, insights, and recommendations</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h4 className="text-lg font-semibold mb-3 text-primary-glow">Example Prompt:</h4>
            <p className="font-mono text-sm bg-black/20 p-4 rounded-lg border border-white/10">
              "Summarize this meeting transcript into 5 action items."
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={productivityEmail} 
            alt="Laptop with email interface and productivity dashboard" 
            className="w-full max-w-md rounded-2xl shadow-card-custom"
          />
        </div>
      </div>
    </SlideLayout>
  );
};