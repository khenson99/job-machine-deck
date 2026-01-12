export const HeroSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        <h1 className="animate-fade-in-up" style={{ marginBottom: '2rem' }}>
          Job Machine
        </h1>
        <h2 className="animate-fade-in-up delay-200" style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '3rem'
        }}>
          Automating Job Placement        </h2>
        <p className="animate-fade-in-up delay-400" style={{ 
          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          Interview-only job searching.
        </p>
        <div className="animate-fade-in delay-600" style={{ 
          marginTop: '4rem',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
        </div>
      </div>
    </div>
  );
};
