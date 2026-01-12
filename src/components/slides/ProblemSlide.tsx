export const ProblemSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        {/* Massive $14BN - Eye-catching */}
        <div className="animate-scale-in" style={{
          fontSize: 'clamp(4rem, 12vw, 8rem)',
          fontWeight: 900,
          color: '#facc15',
          textShadow: '0 0 40px rgba(250, 204, 21, 0.5)',
          marginBottom: '0.5rem',
          lineHeight: 1
        }}>
          $14BN
        </div>
        
        <p className="animate-fade-in-up delay-100" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          color: 'rgba(255, 255, 255, 0.6)',
          marginBottom: '3rem',
          fontWeight: 500
        }}>
          wasted annually on employment services that don't work
        </p>

        {/* Why It Doesn't Work - 3 Pain Points */}
        <h3 className="animate-fade-in-up delay-200" style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          color: '#818cf8',
          marginBottom: '2rem',
          fontWeight: 700
        }}>
          Why It's Broken:
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
          gap: '1.5rem'
        }}>
          <div className="card animate-slide-in-left delay-300" style={{
            background: 'rgba(239, 68, 68, 0.1)',
            borderLeft: '4px solid #ef4444',
            padding: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⏱️</div>
            <h4 style={{ fontSize: '1.125rem', color: '#ef4444', marginBottom: '0.5rem', fontWeight: 700 }}>
              Too Slow
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
              Recruiters spend 6 weeks per hire, manually screening resumes and chasing candidates
            </p>
          </div>

          <div className="card animate-slide-in-left delay-400" style={{
            background: 'rgba(245, 158, 11, 0.1)',
            borderLeft: '4px solid #f59e0b',
            padding: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💸</div>
            <h4 style={{ fontSize: '1.125rem', color: '#f59e0b', marginBottom: '0.5rem', fontWeight: 700 }}>
              Too Expensive
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
              $4K-$8K per placement for generic staffing that delivers mediocre matches
            </p>
          </div>

          <div className="card animate-slide-in-left delay-500" style={{
            background: 'rgba(139, 92, 246, 0.1)',
            borderLeft: '4px solid #8b5cf6',
            padding: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🎯</div>
            <h4 style={{ fontSize: '1.125rem', color: '#8b5cf6', marginBottom: '0.5rem', fontWeight: 700 }}>
              Poor Quality
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
              70% of placements fail within 90 days because humans can't match at scale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
