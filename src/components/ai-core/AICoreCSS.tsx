import React from 'react';

interface AICoreCSSProps {
  size?: number;
  className?: string;
  isInteractive?: boolean;
}

export const AICoreCSS: React.FC<AICoreCSSProps> = ({
  size = 320,
  className = '',
  isInteractive = true
}) => {
  return (
    <div
      className={`ai-core-container ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        pointerEvents: isInteractive ? 'auto' : 'none'
      }}
      aria-label="JARVIS Holographic AI Core Visual Simulation"
    >
      {/* Ambient background bloom */}
      <div
        style={{
          position: 'absolute',
          width: `${size * 0.85}px`,
          height: `${size * 0.85}px`,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(248, 215, 227, 0.6) 0%, rgba(196, 181, 253, 0.35) 45%, transparent 70%)',
          filter: 'blur(32px)',
          animation: 'core-breathe 4s ease-in-out infinite alternate',
          pointerEvents: 'none'
        }}
      />

      {/* Outer Ring 1 - Counter Clockwise Slow Rotation */}
      <div
        style={{
          position: 'absolute',
          width: `${size * 0.94}px`,
          height: `${size * 0.94}px`,
          borderRadius: '50%',
          border: '1px dashed rgba(217, 130, 163, 0.45)',
          animation: 'rotate-reverse 35s linear infinite'
        }}
      />

      {/* Outer Ring 2 - Segmented Technical Ring */}
      <div
        style={{
          position: 'absolute',
          width: `${size * 0.82}px`,
          height: `${size * 0.82}px`,
          borderRadius: '50%',
          border: '1.5px solid rgba(167, 139, 250, 0.4)',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          animation: 'rotate-forward 24s linear infinite'
        }}
      />

      {/* Middle Ring 3 - Angular Ticks */}
      <div
        style={{
          position: 'absolute',
          width: `${size * 0.70}px`,
          height: `${size * 0.70}px`,
          borderRadius: '50%',
          border: '1px solid rgba(233, 168, 188, 0.55)',
          borderLeftColor: 'transparent',
          animation: 'rotate-reverse 18s linear infinite'
        }}
      />

      {/* Inner Ring 4 - Fast Telemetry Ring */}
      <div
        style={{
          position: 'absolute',
          width: `${size * 0.56}px`,
          height: `${size * 0.56}px`,
          borderRadius: '50%',
          border: '2px dotted rgba(217, 130, 163, 0.7)',
          animation: 'rotate-forward 12s linear infinite'
        }}
      />

      {/* Central Holographic Luminous Nucleus */}
      <div
        style={{
          position: 'relative',
          width: `${size * 0.34}px`,
          height: `${size * 0.34}px`,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 45%, #C4B5FD 100%)',
          boxShadow: '0 0 35px rgba(217, 130, 163, 0.75), inset 0 0 15px rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse-nucleus 3s ease-in-out infinite alternate'
        }}
      >
        {/* Core innermost point */}
        <div
          style={{
            width: `${size * 0.12}px`,
            height: `${size * 0.12}px`,
            borderRadius: '50%',
            backgroundColor: '#FFF8FA',
            boxShadow: '0 0 15px #FFF8FA'
          }}
        />
      </div>

      {/* Telemetry data labels orbiting core */}
      <div
        style={{
          position: 'absolute',
          bottom: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.12em',
          color: 'var(--color-strong-pink)',
          textTransform: 'uppercase',
          opacity: 0.85
        }}
      >
        SYS_STATUS // ACTIVE 60Hz
      </div>

      {/* Keyframe styles injected inline for reliability */}
      <style>{`
        @keyframes rotate-forward {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes core-breathe {
          0% { transform: scale(0.92); opacity: 0.65; }
          100% { transform: scale(1.08); opacity: 0.95; }
        }
        @keyframes pulse-nucleus {
          0% { transform: scale(0.95); box-shadow: 0 0 25px rgba(217, 130, 163, 0.6); }
          100% { transform: scale(1.05); box-shadow: 0 0 45px rgba(167, 139, 250, 0.85); }
        }
      `}</style>
    </div>
  );
};
