import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AICoreCSS } from './AICoreCSS';
import { FastForward, ShieldCheck } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [telemetryPhase, setTelemetryPhase] = useState('SYS_INITIALIZING // KERNEL 0x7E1');
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is requested, complete immediately without sequence barrier
    if (reducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        const capped = Math.min(next, 100);

        if (capped > 75) {
          setTelemetryPhase('PROTOCOL READY // INTERFACE ACTIVE');
        } else if (capped > 45) {
          setTelemetryPhase('SYNCING HOLOGRAPHIC CORE // 60Hz NOMINAL');
        } else if (capped > 20) {
          setTelemetryPhase('ALLOCATING NEURAL HEURISTICS & GL TOKENS');
        }

        return capped;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete, reducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#FFF8FA',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflow: 'hidden'
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Cinematic AI Activation Sequence"
    >
      {/* Background fine technical grid & ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(248, 215, 227, 0.55) 0%, rgba(196, 181, 253, 0.25) 50%, transparent 80%),
            linear-gradient(to right, rgba(183, 110, 139, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(183, 110, 139, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
          pointerEvents: 'none'
        }}
      />

      {/* Skip Intro button */}
      <button
        onClick={onComplete}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          background: 'rgba(255, 248, 250, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--color-dusty-blush)',
          borderRadius: '9999px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          fontWeight: 600,
          color: 'var(--color-rosewood)',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(183, 110, 139, 0.12)',
          zIndex: 10,
          transition: 'all 0.2s ease'
        }}
        aria-label="Skip Activation Sequence"
      >
        <FastForward size={14} color="#D982A3" />
        <span>SKIP SEQUENCE</span>
      </button>

      {/* Center Holographic Core Visual */}
      <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
        <AICoreCSS size={260} isInteractive={false} />
      </div>

      {/* JARVIS Activation Telemetry */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          textAlign: 'center',
          maxWidth: '480px',
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-strong-pink)',
            letterSpacing: '0.15em',
            marginBottom: '0.5rem',
            textTransform: 'uppercase'
          }}
        >
          <ShieldCheck size={14} />
          <span>I AM JARVIS // AUTONOMOUS INTERFACE</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-rosewood)',
            marginBottom: '0.75rem'
          }}
        >
          INITIALIZING AKSHAYA
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-muted-text)',
            minHeight: '1.4rem',
            marginBottom: '1.25rem'
          }}
        >
          {telemetryPhase}
        </p>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: 'rgba(233, 168, 188, 0.25)',
            borderRadius: '9999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '0.75rem'
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #F8D7E3, #D982A3, #A78BFA)',
              borderRadius: '9999px',
              boxShadow: '0 0 12px rgba(217, 130, 163, 0.8)'
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-muted-text)'
          }}
        >
          <span>AI_SUBSYSTEM: V2.0</span>
          <span style={{ color: 'var(--color-strong-pink)', fontWeight: 600 }}>{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
