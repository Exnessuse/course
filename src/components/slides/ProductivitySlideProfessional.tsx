import productivityEmail from "@/assets/productivity-email.jpg";
import { Mail, FileText, CheckCircle, Workflow, Clock, BarChart3, Target } from "lucide-react";

export const ProductivitySlide = () => {
  const features = [
    { 
      icon: Mail, 
      title: "Draft emails in seconds", 
      description: "Professional tone, perfect structure, every time",
      stat: "5x faster"
    },
    { 
      icon: FileText, 
      title: "Summarize meetings instantly", 
      description: "Turn long transcripts into clear action items",
      stat: "90% time saved"
    },
    { 
      icon: CheckCircle, 
      title: "Generate structured reports", 
      description: "Data analysis, insights, and recommendations",
      stat: "Zero mistakes"
    }
  ];

  const metrics = [
    { icon: Clock, number: "10hrs", label: "Saved Weekly" },
    { icon: BarChart3, number: "300%", label: "Faster Output" },
    { icon: Target, number: "95%", label: "Accuracy Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <Workflow className="h-4 w-4" />
              Productivity Powerhouse
            </div>
            
            <h1 className="text-display mb-8">
              Automating Your Workflow
            </h1>
            
            <p className="text-body-large mb-12 text-muted-foreground">
              Transform repetitive tasks into automated workflows that save hours every day.
            </p>
            
            {/* Feature Cards */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="floating-card bg-white p-6 rounded-2xl shadow-card border border-border">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-primary p-4 rounded-xl flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground mb-2">{feature.description}</p>
                        <span className="inline-flex items-center bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold">
                          {feature.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl border border-border shadow-soft">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{metric.number}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* Example Prompt */}
            <div className="bg-white p-6 rounded-2xl border border-border shadow-card">
              <h4 className="text-lg font-bold mb-3 text-primary">Try This Prompt:</h4>
              <div className="bg-gradient-secondary p-4 rounded-xl border border-border">
                <p className="font-mono text-sm text-foreground">
                  "Summarize this 2-hour meeting transcript into 5 key action items with deadlines and responsible parties."
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-xl border border-border">
                <img 
                  src={productivityEmail} 
                  alt="Modern productivity dashboard with email automation" 
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