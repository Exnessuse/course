import { useState, useEffect } from "react";
import { SlideNavigation } from "./SlideNavigation";
import { TitleSlide } from "./slides/TitleSlide";
import { WelcomeSlide } from "./slides/WelcomeSlideProfessional";
import { ChatGPTIntroSlide } from "./slides/ChatGPTIntroSlideProfessional";
import { ProductivitySlide } from "./slides/ProductivitySlideProfessional";
import { WritingSlide } from "./slides/WritingSlideProfessional";
import { AdvancedSlide } from "./slides/AdvancedSlideProfessional";
import { CreativitySlide } from "./slides/CreativitySlideProfessional";
import { EthicsSlide } from "./slides/EthicsSlideProfessional";
import { ConclusionSlide } from "./slides/ConclusionSlideProfessional";

const slides = [
  TitleSlide,
  WelcomeSlide,
  ChatGPTIntroSlide,
  ProductivitySlide,
  WritingSlide,
  AdvancedSlide,
  CreativitySlide,
  EthicsSlide,
  ConclusionSlide
];

export const ChatGPTPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
        default:
          // Handle number keys for direct navigation
          const num = parseInt(event.key);
          if (num >= 1 && num <= slides.length) {
            event.preventDefault();
            setCurrentSlide(num - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((SlideComponent, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <SlideComponent />
          </div>
        ))}
      </div>
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrevious={prevSlide}
      />
      
      {/* Keyboard shortcuts hint */}
      <div className="fixed top-8 right-8 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-lg px-4 py-2 border border-border text-foreground text-sm shadow-soft hover:shadow-card-custom transition-shadow">
          <div className="text-xs font-medium mb-1 text-primary">Keyboard Navigation:</div>
          <div className="text-xs text-muted-foreground">← → Space | Home End | 1-9</div>
        </div>
      </div>
    </div>
  );
};