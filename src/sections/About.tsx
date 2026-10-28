import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { portfolioData } from '../data/portfolio';
import { Quote, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const { about, identity } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <SectionContainer
      id="about"
      badge="SCENE 02 // EXECUTIVE DOSSIER"
      title="Philosophy & Architecture"
      subtitle="Crafting intelligent systems through rigorous engineering and delicate visual sculpture."
      alternateBg={true}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}
      >
        {/* Column 1: Core Statement & Focus Tags */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Statement / Quote Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Quote
              size={36}
              color="#D982A3"
              style={{ opacity: 0.25, position: 'absolute', top: '16px', right: '16px' }}
            />
            <p
              style={{
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                color: 'var(--color-rosewood)',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '1.25rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              "{about.quote}"
            </p>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--color-strong-pink)' }}>
              — {about.quoteAuthor}
            </div>
          </div>

          {/* Interest Tags / Technical Domains */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={14} />
              <span>Core Research & Technical Interests</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {about.interestTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 248, 250, 0.9)',
                    border: '1px solid var(--glass-border)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-rosewood)',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'all 0.2s ease'
                  }}
                  className="tag-hover"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Biography & Holographic Profile Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Holographic Profile Card */}
          <div
            className="glass-panel holo-glow-border"
            style={{
              padding: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.75rem',
              alignItems: 'center'
            }}
          >
            {/* Avatar / Monogram with Orbital Ring */}
            <div
              style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Outer decorative orbit ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(217, 130, 163, 0.5)',
                  animation: 'rotate-forward 20s linear infinite'
                }}
              />

              {!imageError && identity.avatarUrl ? (
                <img
                  src={identity.avatarUrl}
                  alt={`${identity.name} profile portrait`}
                  onError={() => setImageError(true)}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #FFF8FA',
                    boxShadow: '0 4px 16px rgba(217, 130, 163, 0.35)'
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 60%, #C4B5FD 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFF8FA',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    boxShadow: '0 4px 18px rgba(217, 130, 163, 0.45)',
                    border: '2px solid #FFF8FA'
                  }}
                >
                  {identity.monogram}
                </div>
              )}
            </div>

            {/* Profile Meta Details */}
            <div style={{ flex: 1, minWidth: '180px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-strong-pink)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}
              >
                IDENTITY ID // AK-01
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-rosewood)', marginBottom: '0.25rem' }}>
                {identity.name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-text)', lineHeight: 1.4 }}>
                {identity.designation}
              </p>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {about.biography.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-rosewood)',
                  lineHeight: 1.75
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Verified System Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem'
            }}
          >
            {about.verifiedMetrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-panel"
                style={{
                  padding: '1.2rem 1rem',
                  textAlign: 'center',
                  background: 'rgba(255, 248, 250, 0.85)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-strong-pink)',
                    letterSpacing: '0.08em',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase'
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-rosewood)',
                    marginBottom: '0.2rem'
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--color-muted-text)'
                  }}
                >
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
