export const ProductSlide = () => {
  const moats = [
    { 
      icon: '🤖', 
      title: 'Placement Engine', 
      description: 'AI learns from every hire to improve matching'
    },
    { 
      icon: '📧', 
      title: 'Email Infrastructure', 
      description: '50M+ monthly emails at 1/10th the cost'
    },
    { 
      icon: '🌐', 
      title: 'Turkwork Marketplace', 
      description: 'Global workforce bridges AI gaps profitably'
    },
    { 
      icon: '📊', 
      title: 'Proprietary Dataset', 
      description: 'Complete funnel data competitors can\'t access'
    }
  ];

  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        <h2 className="animate-fade-in-up mb-md" style={{ color: '#fff' }}>Product & Moat</h2>
        <p className="animate-fade-in-up delay-200 mb-xl" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          We own the entire stack
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {moats.map((moat, index) => (
            <div 
              key={index}
              className={`card animate-scale-in delay-${200 + index * 100}`}
              style={{ 
                textAlign: 'center',
                padding: '2rem 1.5rem'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
                {moat.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                color: '#fff',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}>
                {moat.title}
              </h3>
              <p style={{ 
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.4
              }}>
                {moat.description}
              </p>
            </div>
          ))}
        </div>

        <a 
          href="https://share.vidyard.com/watch/9vThDTY37dvMDTY9qsWJ4v"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary animate-scale-in delay-600"
        >
          Watch Product Demo →
        </a>
      </div>
    </div>
  );
};
