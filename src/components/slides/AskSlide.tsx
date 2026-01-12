export const AskSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
        <h2 className="animate-fade-in-up mb-lg">The Ask</h2>
        
        <div className="animate-scale-in delay-200" style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
          border: '2px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '24px',
          padding: '3rem',
          marginBottom: '3rem'
        }}>
          <p style={{ 
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '1rem'
          }}>
            Raising
          </p>
          <div className="metric" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
            $1.4M
          </div>
          <p style={{ 
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '0.5rem',
            fontWeight: 500
          }}>
            Seed Round
          </p>
        </div>

        <div className="grid-2 animate-fade-in-up delay-400">
          <div className="card" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#818cf8' }}>
              Targets (Q1 2027)
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <strong>$2.4M ARR</strong>
              </li>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                <strong>68% Gross Margin</strong>
              </li>
            </ul>
          </div>

          <div className="card" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#818cf8' }}>
              Use of Proceeds
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              fontSize: '0.95rem',
              color: 'rgba(255, 255, 255, 0.75)'
            }}>
              <li>• Scale enterprise contracts</li>
              <li>• Automate workflows</li>
              <li>• Launch consumer referral engine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
