import { SlideLayout } from "./SlideLayout";
import ethicsSecurity from "@/assets/ethics-security.jpg";
import { Shield, AlertTriangle, Lock, CheckCircle } from "lucide-react";

export const EthicsSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Responsible
              <br />
              <span className="text-success">AI Use</span>
            </h1>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-border">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Always fact-check results</h3>
                  <p className="text-muted-foreground">AI can make mistakes - verify important information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-border">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Watch for bias</h3>
                  <p className="text-muted-foreground">Be aware of potential biases in AI responses</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-border">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Protect sensitive data</h3>
                  <p className="text-muted-foreground">Never share confidential or personal information</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-xl shadow-soft border border-border">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Use ethically in work & study</h3>
                  <p className="text-muted-foreground">Enhance your abilities, don't replace your thinking</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-accent-light p-6 rounded-xl shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-semibold text-accent">Remember:</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                AI is a powerful assistant, not a replacement for critical thinking, 
                creativity, and human judgment.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-card-custom border border-border">
              <img 
                src={ethicsSecurity} 
                alt="Security shield representing responsible AI use" 
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};