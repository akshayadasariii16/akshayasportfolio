import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { AICore } from '../components/ai-core/AICore';
import { ParticleCanvas } from '../components/effects/ParticleCanvas';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { identity } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % identity.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [identity.roles.length]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '4rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3rem'
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
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              <Terminal size={13} />
              <span>{identity.systemGreeting}</span>
            </div>

            {/* Oversized Expressive Headline */}
            <h1
              style={{
                fontSize: 'var(--text-hero)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
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
                fontSize: 'var(--text-xl)',
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
                marginBottom: '2.5rem'
              }}
            >
              Architecting next-generation web applications, autonomous intelligence pipelines, and responsive 3D interfaces designed with surgical precision and ethereal blush-pink elegance.
            </p>

            {/* Prominent Dual Calls to Action */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
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
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-muted-text)'
              }}
            >
              <div>
                <span style={{ color: 'var(--color-strong-pink)' }}>LOCATION:</span> BANGALORE // REMOTE
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
              position: 'relative'
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(255, 248, 250, 0.65)',
                boxShadow: 'var(--shadow-glass), var(--shadow-glow-pink)',
                border: '1px solid rgba(217, 130, 163, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <AICore size={340} />
              <div
                style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-muted-text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span className="status-dot" style={{ width: '6px', height: '6px' }} />
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
            marginTop: '3.5rem'
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
