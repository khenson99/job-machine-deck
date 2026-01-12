export const ClosingSlide = () => {
  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1 className="animate-fade-in" style={{ marginBottom: '3rem' }}>
          Job Machine
        </h1>
        
        <div className="animate-fade-in-up delay-300" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          <p style={{ 
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            fontWeight: 500,
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Let's talk
          </p>
          
          <div style={{ 
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: 1.8
          }}>
            <p><strong>Brandon Tigges</strong></p>
            <p>brandon@jobmachine.app</p>
            <p>+1 (540) 550-3682</p>
            <a 
              href="https://calendly.com/skilledhigher/brandon"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              style={{ marginTop: '1.5rem' }}
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
