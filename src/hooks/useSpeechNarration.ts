import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseSpeechNarrationOptions {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
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
  pitch = 1.02
}: UseSpeechNarrationOptions): UseSpeechNarrationReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [currentVoiceName, setCurrentVoiceName] = useState<string | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize and select voice
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);
    const synth = window.speechSynthesis;

    const pickVoice = () => {
      const voices = synth.getVoices();
      if (!voices || voices.length === 0) return;

      // Prefer British English voice
      const britishVoice = voices.find(v => v.lang === 'en-GB' || v.lang.startsWith('en-GB') || v.name.includes('UK') || v.name.includes('British'));
      const fallbackVoice = voices.find(v => v.lang.startsWith('en')) || voices[0];
      
      const selected = britishVoice || fallbackVoice;
      if (selected) {
        setCurrentVoiceName(selected.name);
      }
    };

    pickVoice();
    if (typeof synth.onvoiceschanged !== 'undefined') {
      synth.onvoiceschanged = pickVoice;
    }

    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, []);

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
    const voice = voices.find(v => v.lang === lang || v.lang.startsWith(lang) || v.name.includes('UK')) ||
                  voices.find(v => v.lang.startsWith('en')) ||
                  voices[0];

    if (voice) {
      utterance.voice = voice;
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
      }
      return next;
    });
  }, []);

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
