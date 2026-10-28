import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseSpeechNarrationOptions {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  autoPlay?: boolean;
}

export interface UseSpeechNarrationReturn {
  isSpeaking: boolean;
  isPaused: boolean;
  isMuted: boolean;
  isSupported: boolean;
  currentVoiceName: string | null;
  play: () => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  toggleMute: () => void;
}

export function useSpeechNarration({
  text,
  lang = 'en-GB',
  rate = 0.96,
  pitch = 1.02,
  autoPlay = false
}: UseSpeechNarrationOptions): UseSpeechNarrationReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentVoiceName, setCurrentVoiceName] = useState<string | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasAutoPlayedRef = useRef(false);
  const voicesLoadedRef = useRef(false);

  const stop = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  const play = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || isMuted) return;
    const synth = window.speechSynthesis;

    synth.cancel(); // Stop any pending utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voices = synth.getVoices();
    // Prefer British English voice for JARVIS persona
    const britishVoice = voices.find(
      v => v.lang === lang || v.lang.startsWith(lang) || v.name.toLowerCase().includes('uk') || v.name.toLowerCase().includes('british') || v.name.toLowerCase().includes('daniel') || v.name.toLowerCase().includes('george')
    );
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    const voice = britishVoice || englishVoice || voices[0];

    if (voice) {
      utterance.voice = voice;
      setCurrentVoiceName(voice.name);
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    synth.speak(utterance);
  }, [text, lang, rate, pitch, isMuted]);

  // Initialize and select voice
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
    const synth = window.speechSynthesis;

    const pickVoiceAndInit = () => {
      const voices = synth.getVoices();
      if (!voices || voices.length === 0) return;

      voicesLoadedRef.current = true;
      const britishVoice = voices.find(
        v => v.lang === lang || v.lang.startsWith(lang) || v.name.toLowerCase().includes('uk') || v.name.toLowerCase().includes('british')
      );
      const fallbackVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
      const selected = britishVoice || fallbackVoice;
      if (selected) {
        setCurrentVoiceName(selected.name);
      }

      // If autoplay was requested and haven't played yet, trigger speech!
      if (autoPlay && !hasAutoPlayedRef.current && !isMuted) {
        hasAutoPlayedRef.current = true;
        setTimeout(() => {
          play();
        }, 300);
      }
    };

    pickVoiceAndInit();
    if (typeof synth.onvoiceschanged !== 'undefined') {
      synth.onvoiceschanged = pickVoiceAndInit;
    }

    // Fallback if voiceschanged didn't fire immediately
    const timeout = setTimeout(() => {
      if (!hasAutoPlayedRef.current && autoPlay && !isMuted) {
        hasAutoPlayedRef.current = true;
        play();
      }
    }, 600);

    return () => {
      clearTimeout(timeout);
      if (synth) {
        synth.cancel();
      }
    };
  }, [autoPlay, play, isMuted, lang]);

  const pause = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      if (next && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
      } else if (!next && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        // Unmuting: trigger replay if desired
        setTimeout(() => play(), 100);
      }
      return next;
    });
  }, [play]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isSpeaking,
    isPaused,
    isMuted,
    isSupported,
    currentVoiceName,
    play,
    pause,
    resume,
    stop,
    toggleMute
  };
}
