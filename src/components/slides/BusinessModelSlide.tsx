export const BusinessModelSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1000px' }}>
        <h2 className="animate-fade-in-up mb-xl" style={{ color: '#fff' }}>Business Model</h2>
        
        <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
          <div className="card animate-fade-in-up delay-200" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>
              How It Works
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              Customers pre-purchase credits consumed as we automate resumes, applications, and interviews leading to verified hires
            </p>
          </div>

          <div className="card animate-fade-in-up delay-300" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff', fontWeight: 700 }}>
              Unit Economics
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
              AI + OI automation scales margins toward <strong>70%</strong> as usage expands
            </p>
          </div>
        </div>

        <div className="animate-scale-in delay-400" style={{
          background: 'rgba(250, 204, 21, 0.15)',
          border: '3px solid #facc15',
          borderRadius: '20px',
          padding: '2.5rem'
        }}>
          <div className="metric-label" style={{ marginBottom: '0.75rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            Account Value
          </div>
          <div style={{ 
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 900,
            color: '#facc15',
            textShadow: '0 0 30px rgba(250, 204, 21, 0.4)',
            marginBottom: '0.5rem'
          }}>
            $100K – $2M
          </div>
          <p style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem' }}>
            per year
          </p>
        </div>
      </div>
    </div>
  );
};
