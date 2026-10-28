import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AICoreCSS } from './AICoreCSS';
import { FastForward, ShieldCheck, CheckCircle2, Volume2, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [telemetryStage, setTelemetryStage] = useState('SYS_INITIALIZING // CORE KERNEL 0x7E1');
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const reducedMotion = useReducedMotion();

  // Progress sequence
  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReadyToEnter(true);
          return 100;
        }

        const increment = Math.floor(Math.random() * 6) + 3;
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          setTelemetryStage('ALL SYSTEMS NOMINAL // JARVIS READY');
          setIsReadyToEnter(true);
        } else if (next > 75) {
          setTelemetryStage('CALIBRATING NEURAL SPEECH & 3D MESH');
        } else if (next > 50) {
          setTelemetryStage('SYNCING HOLOGRAPHIC CORE // 60Hz NOMINAL');
        } else if (next > 25) {
          setTelemetryStage('ALLOCATING BLUSH-PINK & LAVENDER TOKENS');
        }

        return next;
      });
    }, 65);

    return () => clearInterval(interval);
  }, [onComplete, reducedMotion]);

  // Auto-enter timer once 100% is reached if user doesn't click
  useEffect(() => {
    if (!isReadyToEnter) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isReadyToEnter, onComplete]);

  const diagnosticSteps = [
    { label: 'Quantum Kernel & Heuristics', passed: progress > 20 },
    { label: 'Spectral Color Tokens', passed: progress > 45 },
    { label: 'Holographic Three.js Mesh', passed: progress > 70 },
    { label: 'JARVIS Voice Synthesizer', passed: progress >= 100 },
  ];

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
      aria-label="Cinematic AI Activation Loading Sequence"
    >
      {/* Background fine technical grid & ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(248, 215, 227, 0.65) 0%, rgba(196, 181, 253, 0.30) 45%, transparent 75%),
            linear-gradient(to right, rgba(183, 110, 139, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(183, 110, 139, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 48px 48px, 48px 48px',
          pointerEvents: 'none'
        }}
      />

      {/* Skip Sequence button - always clickable */}
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
          background: 'rgba(255, 248, 250, 0.90)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--color-dusty-blush)',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          fontWeight: 600,
          color: 'var(--color-rosewood)',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(183, 110, 139, 0.15)',
          zIndex: 10,
          transition: 'all 0.2s ease'
        }}
        aria-label="Skip Activation Sequence"
      >
        <FastForward size={14} color="#D982A3" />
        <span>SKIP SEQUENCE</span>
      </button>

      {/* Holographic AI Core in center with scanning laser animation */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <AICoreCSS size={240} isInteractive={false} />
        {/* Subtle horizontal scanning line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-10%',
            width: '120%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(217, 130, 163, 0.8), rgba(167, 139, 250, 0.8), transparent)',
            boxShadow: '0 0 12px rgba(217, 130, 163, 0.8)',
            animation: 'scan-laser 2.4s ease-in-out infinite alternate',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Telemetry & Diagnostic Interface */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        style={{
          textAlign: 'center',
          maxWidth: '520px',
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
            letterSpacing: '0.14em',
            marginBottom: '0.4rem',
            textTransform: 'uppercase'
          }}
        >
          <ShieldCheck size={14} />
          <span>I AM JARVIS // AUTONOMOUS AI INTERFACE</span>
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--color-rosewood)',
            marginBottom: '0.5rem'
          }}
        >
          INITIALIZING AKSHAYA
        </h1>

        {/* Dynamic Telemetry Stage Status */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-muted-text)',
            minHeight: '1.4rem',
            marginBottom: '1rem'
          }}
        >
          {telemetryStage}
        </p>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '100%',
            height: '7px',
            backgroundColor: 'rgba(233, 168, 188, 0.25)',
            borderRadius: '9999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '1rem'
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
              boxShadow: '0 0 14px rgba(217, 130, 163, 0.9)'
            }}
          />
        </div>

        {/* Diagnostics Checklist Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
            textAlign: 'left',
            marginBottom: '1.5rem'
          }}
        >
          {diagnosticSteps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: step.passed ? 'var(--color-rosewood)' : 'var(--color-muted-text)',
                opacity: step.passed ? 1 : 0.45,
                transition: 'opacity 0.2s ease, color 0.2s ease'
              }}
            >
              <CheckCircle2
                size={12}
                color={step.passed ? '#166534' : 'var(--color-dusty-blush)'}
              />
              <span>{step.label}</span>
            </div>
          ))}
        </div>

        {/* Ready to Enter Action CTA or Progress Indicator */}
        <AnimatePresence mode="wait">
          {isReadyToEnter ? (
            <motion.div
              key="enter-cta"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
              <button
                onClick={onComplete}
                className="btn-primary"
                style={{
                  padding: '0.95rem 2.2rem',
                  fontSize: '0.9375rem',
                  gap: '10px',
                  boxShadow: '0 6px 25px rgba(217, 130, 163, 0.5), 0 0 25px rgba(167, 139, 250, 0.4)',
                  cursor: 'pointer'
                }}
                aria-label="Enter Terminal and Start Experience"
              >
                <Volume2 size={18} />
                <span>ENTER TERMINAL // INITIALIZE JARVIS</span>
                <ArrowRight size={18} />
              </button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted-text)' }}>
                JARVIS narration will begin automatically · Auto-entering in {countdown}s
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="progress-stats"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-muted-text)'
              }}
            >
              <span>AI_CORE_CALIBRATION</span>
              <span style={{ color: 'var(--color-strong-pink)', fontWeight: 700 }}>{progress}%</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        @keyframes scan-laser {
          0% { top: 0%; opacity: 0.2; }
          50% { opacity: 0.9; }
          100% { top: 100%; opacity: 0.2; }
        }
      `}</style>
    </motion.div>
  );
};
