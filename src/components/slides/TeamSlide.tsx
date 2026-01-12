export const TeamSlide = () => {
  const team = [
    {
      name: 'Brandon Tigges',
      title: 'CEO & Co-Founder',
      image: '/brandon.png',
      highlights: [
        'Built Gecko Robotics O&G to $6.9M',
        'Top seller 8 years straight',
        'Every President\'s Club'
      ]
    },
    {
      name: 'Trey Allison',
      title: 'CTO & Co-Founder',
      image: '/trey.png',
      highlights: [
        'Ex-CEO Kronologic',
        '$70M valuation, $20M raised',
        'Dual degrees: UT Austin + Texas A&M'
      ]
    }
  ];

  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        <h2 className="animate-fade-in-up mb-xl">The Team</h2>
        
        <div className="grid-2">
          {team.map((member, index) => (
            <div 
              key={index}
              className={`card animate-fade-in-up delay-${200 + index * 200}`}
              style={{ textAlign: 'center' }}
            >
              {/* Headshot */}
              <div style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(129, 140, 248, 0.3)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <h3 style={{ 
                fontSize: '1.75rem', 
                marginBottom: '0.5rem',
                color: '#ffffff',
                fontWeight: 700
              }}>
                {member.name}
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                color: '#818cf8',
                marginBottom: '1.5rem',
                fontWeight: 600
              }}>
                {member.title}
              </p>
              <ul style={{ 
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                textAlign: 'left',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                {member.highlights.map((highlight, i) => (
                  <li key={i} style={{ 
                    fontSize: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'start',
                    fontWeight: 500
                  }}>
                    <span style={{ 
                      marginRight: '0.75rem', 
                      color: '#10b981',
                      fontSize: '1.25rem',
                      flexShrink: 0
                    }}>✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
