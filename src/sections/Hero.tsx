import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { AICore } from '../components/ai-core/AICore';
import { ParticleCanvas } from '../components/effects/ParticleCanvas';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { identity } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [coreSize, setCoreSize] = useState(320);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % identity.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [identity.roles.length]);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setCoreSize(210);
      } else if (width < 640) {
        setCoreSize(250);
      } else if (width < 1024) {
        setCoreSize(290);
      } else {
        setCoreSize(340);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 1.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden'
      }}
      aria-label="Akshaya — Hero Scene"
    >
      {/* Ambient background particle field */}
      <ParticleCanvas />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            alignItems: 'center',
            gap: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          {/* Left Hero Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Technical Greeting */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 248, 250, 0.90)',
                border: '1px solid var(--glass-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
                boxShadow: 'var(--shadow-subtle)',
                maxWidth: '100%'
              }}
            >
              <Terminal size={13} style={{ flexShrink: 0 }} />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {identity.systemGreeting}
              </span>
            </div>

            {/* Oversized Expressive Headline */}
            <h1
              style={{
                fontSize: 'var(--text-hero)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
                color: 'var(--color-rosewood)'
              }}
            >
              <span className="gradient-text-pink">{identity.name}</span>
            </h1>

            {/* Dynamic Rotating Role Tagline */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
                fontWeight: 600,
                color: 'var(--color-rosewood)',
                marginBottom: '1.25rem',
                minHeight: '2rem'
              }}
            >
              <span style={{ color: 'var(--color-dusty-blush)' }}>//</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="gradient-text-holo"
              >
                {identity.roles[roleIndex]}
              </motion.span>
            </div>

            {/* Concise Mission Narrative */}
            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-muted-text)',
                lineHeight: 1.7,
                maxWidth: '540px',
                marginBottom: '2rem'
              }}
            >
              I am Akshaya, a Software Developer passionate about building robust web applications, intelligent AI systems, and responsive digital experiences.
            </p>

            {/* Prominent Dual Calls to Action */}
            <div
              className="hero-cta-group"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}
            >
              <a href="#projects" className="btn-primary">
                <Sparkles size={16} />
                <span>EXPLORE UNIVERSE</span>
                <ArrowUpRight size={16} />
              </a>

              <a href="#contact" className="btn-secondary">
                <Terminal size={16} color="#D982A3" />
                <span>INITIALIZE CONTACT</span>
              </a>
            </div>

            {/* Verified telemetry line */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem 1.5rem',
                marginTop: '2rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted-text)'
              }}
            >
              <div>
                <span style={{ color: 'var(--color-strong-pink)' }}>LOCATION:</span> HYDERABAD // REMOTE
              </div>
              <div>
                <span style={{ color: 'var(--color-strong-pink)' }}>STATUS:</span> AVAILABLE
              </div>
            </div>
          </motion.div>

          {/* Right Holographic AI Core Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: '100%'
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: 'clamp(1rem, 4vw, 2rem)',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(255, 248, 250, 0.65)',
                boxShadow: 'var(--shadow-glass), var(--shadow-glow-pink)',
                border: '1px solid rgba(217, 130, 163, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '100%'
              }}
            >
              <AICore size={coreSize} />
              <div
                style={{
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--color-muted-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  textAlign: 'center'
                }}
              >
                <span className="status-dot" style={{ width: '6px', height: '6px', flexShrink: 0 }} />
                <span>JARVIS HOLOGRAPHIC CORE // REAL-TIME 3D</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              color: 'var(--color-muted-text)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              transition: 'color 0.2s ease'
            }}
            aria-label="Scroll down to About section"
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} color="#D982A3" />
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};
