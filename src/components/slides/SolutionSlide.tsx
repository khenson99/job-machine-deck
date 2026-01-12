export const SolutionSlide = () => {
  const features = [
    { 
      icon: '🤖', 
      title: 'AI Matching',
      description: 'Analyze skills and fit in seconds, not weeks'
    },
    { 
      icon: '⚡', 
      title: 'Full Automation',
      description: 'Eliminate 90% of manual recruitment work'
    },
    { 
      icon: '📊', 
      title: 'Data Moat',
      description: 'Learn from every placement to get better'
    }
  ];

  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        <h2 className="animate-fade-in-up mb-lg" style={{ color: '#fff' }}>The Solution</h2>
        
        <p className="animate-fade-in-up delay-200" style={{
          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          marginBottom: '3rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          AI automation that replaces recruiters entirely
        </p>

        {/* Simplified Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card animate-scale-in delay-${300 + index * 100}`}
              style={{ textAlign: 'center', padding: '2rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#fff',
                fontWeight: 700
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: 1.5,
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple Metrics */}
        <div className="animate-fade-in-up delay-600" style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(129, 140, 248, 0.1)',
          borderRadius: '12px',
          border: '2px solid rgba(129, 140, 248, 0.3)'
        }}>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 600
          }}>
            <span style={{ color: '#facc15', fontSize: '1.5em', fontWeight: 800 }}>3x</span> faster · 
            <span style={{ color: '#facc15', fontSize: '1.5em', fontWeight: 800, margin: '0 0.5rem' }}>75%</span> cheaper · 
            <span style={{ color: '#facc15', fontSize: '1.5em', fontWeight: 800, marginLeft: '0.5rem' }}>30%</span> better matches
          </p>
        </div>
      </div>
    </div>
  );
};
