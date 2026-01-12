export const MarketSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
        <h2 className="animate-fade-in-up mb-xl" style={{ color: '#fff' }}>Market Size</h2>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* TAM */}
          <div className="animate-scale-in delay-200" style={{
            width: '100%',
            background: 'rgba(250, 204, 21, 0.15)',
            border: '3px solid #facc15',
            borderRadius: '20px',
            padding: '2.5rem',
          }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '2px' }}>Total Addressable Market</h3>
            <div style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 6rem)', 
              fontWeight: 900,
              color: '#facc15',
              textShadow: '0 0 40px rgba(250, 204, 21, 0.4)',
              marginBottom: '0.5rem'
            }}>$221B</div>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>U.S. Staffing & Recruiting Industry</p>
          </div>

          {/* SOM - Our Initial Focus */}
          <div className="animate-scale-in delay-300" style={{
            width: '95%',
            background: 'rgba(129, 140, 248, 0.15)',
            border: '2px solid #818cf8',
            borderRadius: '16px',
            padding: '2rem',
          }}>
            <h3 style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Our Initial Focus</h3>
            <div style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
              fontWeight: 800,
              color: '#fff',
              marginBottom: '0.5rem'
            }}>$16B+</div>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem' }}>Workforce Development & Post-Secondary Education</p>
            
            {/* Secondary Market Details */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1.5rem',
              marginTop: '1.5rem',
              textAlign: 'left'
            }}>
              {/* Who */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#818cf8', 
                  fontWeight: 700,
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  marginBottom: '0.75rem'
                }}>Who</div>
                <ul style={{ 
                  fontSize: '0.875rem', 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: 0,
                  paddingLeft: '1.25rem'
                }}>
                  <li>Community Colleges</li>
                  <li>Vocational Schools</li>
                  <li>Workforce Boards</li>
                  <li>Career Centers</li>
                </ul>
              </div>

              {/* Pain Points */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#818cf8', 
                  fontWeight: 700,
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  marginBottom: '0.75rem'
                }}>Their Pain</div>
                <ul style={{ 
                  fontSize: '0.875rem', 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: 0,
                  paddingLeft: '1.25rem'
                }}>
                  <li>Poor placement rates</li>
                  <li>Weak employer ties</li>
                  <li>Limited job pipelines</li>
                  <li>Manual tracking</li>
                </ul>
              </div>

              {/* Solution */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#818cf8', 
                  fontWeight: 700,
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px',
                  marginBottom: '0.75rem'
                }}>Our Solution</div>
                <ul style={{ 
                  fontSize: '0.875rem', 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  margin: 0,
                  paddingLeft: '1.25rem'
                }}>
                  <li>Built-in job market</li>
                  <li>Employer network</li>
                  <li>Automated workflows</li>
                  <li>Outcome tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
