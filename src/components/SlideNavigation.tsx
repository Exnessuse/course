import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const SlideNavigation = ({ currentSlide, totalSlides, onPrevious, onNext }: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 border border-border shadow-glow">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="text-foreground hover:bg-secondary disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
        
        <span className="text-foreground text-sm font-medium min-w-[60px] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="text-foreground hover:bg-secondary disabled:opacity-50"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};