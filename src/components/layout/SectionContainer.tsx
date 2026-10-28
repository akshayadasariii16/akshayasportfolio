import React from 'react';

interface SectionContainerProps {
  id: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  alternateBg?: boolean;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className = '',
  alternateBg = false,
}) => {
  return (
    <section
      id={id}
      className={`section-wrapper ${className}`}
      style={{
        backgroundColor: alternateBg ? 'var(--color-secondary-bg)' : 'transparent',
        position: 'relative'
      }}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="container-custom">
        {(badge || title || subtitle) && (
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
            {badge && (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-strong-pink)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255, 248, 250, 0.85)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <span>{badge}</span>
              </div>
            )}
            {title && (
              <h2
                id={`${id}-heading`}
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-rosewood)',
                  marginBottom: '1rem'
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-muted-text)',
                  lineHeight: 1.65
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

