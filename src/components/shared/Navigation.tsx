import { useState, useEffect } from 'react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    // Hide swipe hint after first interaction or 5 seconds
    const timer = setTimeout(() => setShowSwipeHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (action: () => void) => {
    setShowSwipeHint(false);
    action();
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />
      
      {/* Swipe hint for mobile users */}
      {showSwipeHint && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.875rem',
          textAlign: 'center',
          pointerEvents: 'none',
          animation: 'fadeIn 1s ease-out',
          zIndex: 999
        }}>
          <div style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>👆 ← →</div>
          <div>Swipe or tap arrows to navigate</div>
        </div>
      )}

      <div className="navigation">
        <button 
          className="nav-button" 
          onClick={() => handleNavClick(onPrev)} 
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <span className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button 
          className="nav-button" 
          onClick={() => handleNavClick(onNext)} 
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </>
  );
};
