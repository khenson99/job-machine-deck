export const TractionSlide = () => {
  const metrics = [
    { value: '$492K', label: 'Current ARR' },
    { value: '44%', label: 'MoM Growth (Dec)' },
    { value: '165%', label: 'H2 2025 ARR Growth' },
    { value: '0%', label: 'Churn' }
  ];

  return (
    <div className="slide">
      <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
        <h2 className="animate-fade-in-up mb-xl" style={{ color: '#fff' }}>Traction</h2>
        
        <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`card animate-scale-in delay-${200 + index * 100}`}
              style={{ textAlign: 'center', padding: '2rem' }}
            >
              <div style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                color: '#facc15',
                textShadow: '0 0 30px rgba(250, 204, 21, 0.3)',
                marginBottom: '0.75rem'
              }}>
                {metric.value}
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 500
              }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="animate-fade-in delay-600" style={{
          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
          color: '#fff',
          fontWeight: 600
        }}>
          In-market, paid, and expanding
        </p>
      </div>
    </div>
  );
};
