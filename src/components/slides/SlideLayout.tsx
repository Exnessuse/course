import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  background?: "primary" | "secondary" | "hero";
  className?: string;
}

export const SlideLayout = ({ children, background = "primary", className = "" }: SlideLayoutProps) => {
  const backgrounds = {
    primary: "bg-gradient-primary",
    secondary: "bg-gradient-secondary", 
    hero: "bg-gradient-hero"
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-8 max-w-6xl">
        {children}
      </div>
    </div>
  );
};