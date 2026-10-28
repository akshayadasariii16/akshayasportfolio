import React from 'react';
import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-secondary-bg)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        marginTop: '2rem'
      }}
      role="contentinfo"
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Identity column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF8FA',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                A
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.12em', color: 'var(--color-rosewood)' }}>
                AKSHAYA
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-text)', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.25rem' }}>
              Futuristic, high-fidelity portfolio interface merging intelligent system design with blush pink and pearl white aesthetics.
            </p>
            <div className="status-pill">
              <span className="status-dot" />
              <span>ALL SYSTEMS NOMINAL // SIMULATION</span>
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem'
              }}
            >
              System Index
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#hero" style={{ color: 'var(--color-rosewood)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                  01. Home & AI Core
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'var(--color-rosewood)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                  02. Executive Profile
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: 'var(--color-rosewood)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                  03. Project Universe
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: 'var(--color-rosewood)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                  04. Skills Intelligence
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'var(--color-rosewood)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}>
                  05. Contact Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connectivity */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem'
              }}
            >
              Network Presence
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {portfolioData.contact.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-rosewood)',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                >
                  <Sparkles size={13} color="#D982A3" />
                  <span>{s.platform}: {s.handle}</span>
                </a>
              ))}
              <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted-text)' }}>
                Location: {portfolioData.contact.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(183, 110, 139, 0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', color: 'var(--color-muted-text)' }}>
            <span>Engineered with</span>
            <Heart size={14} color="#D982A3" fill="#D982A3" />
            <span>by Akshaya · Powered by React 18, Three.js & Framer Motion</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--glass-border)',
              background: 'var(--color-pearl-white)',
              color: 'var(--color-rosewood)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-subtle)'
            }}
            aria-label="Back to top of page"
          >
            <Terminal size={12} color="#D982A3" />
            <span>TOP OF TERMINAL</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

