import { useSlideNavigation } from './hooks/useSlideNavigation';
import { Navigation } from './components/shared/Navigation';
import { HeroSlide } from './components/slides/HeroSlide';
import { ProblemSlide } from './components/slides/ProblemSlide';
import { SolutionSlide } from './components/slides/SolutionSlide';
import { CustomersSlide } from './components/slides/CustomersSlide';
import { ProductSlide } from './components/slides/ProductSlide';
import { BusinessModelSlide } from './components/slides/BusinessModelSlide';
import { MarketSlide } from './components/slides/MarketSlide';
import { TractionSlide } from './components/slides/TractionSlide';
import { TeamSlide } from './components/slides/TeamSlide';
import { AskSlide } from './components/slides/AskSlide';
import { ClosingSlide } from './components/slides/ClosingSlide';
import './index.css';

const slides = [
  HeroSlide,
  ProblemSlide,
  SolutionSlide,
  CustomersSlide,
  ProductSlide,
  BusinessModelSlide,
  MarketSlide,
  TractionSlide,
  TeamSlide,
  AskSlide,
  ClosingSlide
];

function App() {
  const { currentSlide, nextSlide, prevSlide } = useSlideNavigation(slides.length);
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <CurrentSlideComponent key={currentSlide} />
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

export default App;
