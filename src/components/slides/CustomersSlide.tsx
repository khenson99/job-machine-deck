export const CustomersSlide = () => {
  const segments = [
    { 
      icon: '🎓', 
      title: 'Universities', 
      market: '$4.2B',
      description: 'Need 70%+ placement rates for accreditation'
    },
    { 
      icon: '💼', 
      title: 'Outplacement', 
      market: '$2.3B',
      description: 'Rapid redeployment during restructuring'
    },
    { 
      icon: '🏢', 
      title: 'Workforce Programs', 
      market: '$10B+',
      description: 'Government-funded with ROI pressure'
    },
    { 
      icon: '⚡', 
      title: 'Direct Employers', 
      market: '$200B+',
      description: 'Replace $4K-$8K recruiter fees'
    }
  ];

  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        <h2 className="animate-fade-in-up mb-md" style={{ color: '#fff' }}>Who We Serve</h2>
        <p className="animate-fade-in-up delay-200 mb-xl" style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          $200B+ market
        </p>

        {/* Simple 2x2 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '1.5rem'
        }}>
          {segments.map((segment, index) => (
            <div 
              key={index}
              className={`card animate-scale-in delay-${300 + index * 100}`}
              style={{ 
                textAlign: 'center',
                padding: '2rem 1.5rem'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
                {segment.icon}
              </div>

              <h3 style={{ 
                fontSize: '1.25rem', 
                marginBottom: '0.5rem',
                color: '#fff',
                fontWeight: 700
              }}>
                {segment.title}
              </h3>

              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#facc15',
                marginBottom: '0.75rem'
              }}>
                {segment.market}
              </div>

              <p style={{ 
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.4
              }}>
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
