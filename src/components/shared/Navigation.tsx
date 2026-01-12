interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation = ({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) => {
  return (
    <>
      <div className="progress-bar" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} />
      <div className="navigation">
        <button className="nav-button" onClick={onPrev} disabled={currentSlide === 0}>
          ←
        </button>
        <span className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button className="nav-button" onClick={onNext} disabled={currentSlide === totalSlides - 1}>
          →
        </button>
      </div>
    </>
  );
};
