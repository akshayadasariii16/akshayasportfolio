import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Square, Radio, ChevronDown, ChevronUp } from 'lucide-react';
import { useSpeechNarration } from '../../hooks/useSpeechNarration';
import { portfolioData } from '../../data/portfolio';

export const JarvisVoicePlayer: React.FC = () => {
  const { voiceNarration } = portfolioData;
  const [showTranscript, setShowTranscript] = useState(false);

  const {
    isSpeaking,
    isMuted,
    isSupported,
    currentVoiceName,
    play,
    stop,
    toggleMute
  } = useSpeechNarration({
    text: voiceNarration.introScript,
    lang: voiceNarration.preferredVoiceLang,
    rate: voiceNarration.rate,
    pitch: voiceNarration.pitch
  });

  if (!isSupported) {
    return null;
  }

  return (
    <aside
      className="jarvis-voice-hud"
      aria-label="JARVIS Voice Narration Controller"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 900,
        maxWidth: '380px'
      }}
    >
      <div
        className="glass-panel"
        style={{
          padding: '0.75rem 1.1rem',
          borderRadius: 'var(--radius-pill)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-glass), var(--shadow-glow-pink)',
          border: '1px solid rgba(217, 130, 163, 0.35)',
          background: 'rgba(255, 248, 250, 0.92)'
        }}
      >
        {/* Audio Equalizer (4 bars) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            height: '18px',
            padding: '0 2px'
          }}
          title={isSpeaking ? 'JARVIS is speaking...' : 'Equalizer idle'}
          aria-hidden="true"
        >
          <span className={`equalizer-bar ${isSpeaking ? 'active' : ''}`} />
          <span className={`equalizer-bar ${isSpeaking ? 'active' : ''}`} />
          <span className={`equalizer-bar ${isSpeaking ? 'active' : ''}`} />
          <span className={`equalizer-bar ${isSpeaking ? 'active' : ''}`} />
        </div>

        {/* Telemetry Status and Voice Name */}
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Radio size={12} color={isSpeaking ? '#D982A3' : '#795A6B'} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: isSpeaking ? 'var(--color-strong-pink)' : 'var(--color-rosewood)'
              }}
            >
              JARVIS {isSpeaking ? 'ACTIVE' : 'READY'}
            </span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--color-muted-text)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '120px'
            }}
            title={currentVoiceName || 'Default System Voice'}
          >
            {currentVoiceName ? currentVoiceName.split(' ')[0] : 'Voice Engine'}
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {isSpeaking ? (
            <button
              onClick={stop}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--color-dusty-blush)',
                background: 'rgba(248, 215, 227, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-rosewood)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Stop Narration"
              aria-label="Stop JARVIS Voice Narration"
            >
              <Square size={13} fill="currentColor" />
            </button>
          ) : (
            <button
              onClick={play}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--color-strong-pink)',
                background: 'linear-gradient(135deg, #F8D7E3, #D982A3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF8FA',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(217, 130, 163, 0.4)',
                transition: 'all 0.2s ease'
              }}
              title="Play AI Introduction"
              aria-label="Play JARVIS AI Voice Introduction"
            >
              <Play size={14} fill="currentColor" style={{ marginLeft: '2px' }} />
            </button>
          )}

          <button
            onClick={toggleMute}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--glass-border)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isMuted ? 'var(--color-error)' : 'var(--color-rosewood)',
              cursor: 'pointer'
            }}
            title={isMuted ? 'Unmute' : 'Mute'}
            aria-label={isMuted ? 'Unmute voice synthesis' : 'Mute voice synthesis'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Transcript toggle */}
          <button
            onClick={() => setShowTranscript(prev => !prev)}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-muted-text)',
              cursor: 'pointer'
            }}
            title={showTranscript ? 'Hide transcript' : 'Show transcript'}
            aria-expanded={showTranscript}
            aria-label="Toggle voice narration transcript"
          >
            {showTranscript ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </button>
        </div>
      </div>

      {/* Accessible Non-Obtrusive Transcript Drawer */}
      {showTranscript && (
        <div
          className="glass-panel"
          style={{
            marginTop: '8px',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(255, 248, 250, 0.95)',
            boxShadow: 'var(--shadow-glass)',
            border: '1px solid var(--glass-border)',
            fontSize: '0.8rem',
            color: 'var(--color-rosewood)',
            lineHeight: 1.5
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-strong-pink)'
            }}
          >
            <span>TRANSMISSION TRANSCRIPT</span>
            <span style={{ color: 'var(--color-muted-text)' }}>AUDIO // OPTIONAL</span>
          </div>
          <p>"{voiceNarration.introScript}"</p>
        </div>
      )}
    </aside>
  );
};
