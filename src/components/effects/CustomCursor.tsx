import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics loop for the trailing ring
    const render = () => {
      // Linear interpolation (lerp) damping
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover]');
      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, reducedMotion]);

  if (isTouchDevice || reducedMotion) {
    return null;
  }

  return (
    <>
      {/* Central precise dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          margin: '-4px 0 0 -4px',
          borderRadius: '50%',
          backgroundColor: '#D982A3',
          boxShadow: '0 0 10px rgba(217, 130, 163, 0.8)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease, width 0.2s ease, height 0.2s ease',
          willChange: 'transform'
        }}
      />

      {/* Trailing holographic ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '46px' : '30px',
          height: isHovered ? '46px' : '30px',
          margin: isHovered ? '-23px 0 0 -23px' : '-15px 0 0 -15px',
          borderRadius: '50%',
          border: isHovered
            ? '1.5px solid rgba(217, 130, 163, 0.9)'
            : '1.5px solid rgba(196, 181, 253, 0.75)',
          backgroundColor: isHovered
            ? 'rgba(248, 215, 227, 0.22)'
            : 'rgba(255, 248, 250, 0.05)',
          boxShadow: isHovered
            ? '0 0 20px rgba(217, 130, 163, 0.45)'
            : '0 0 12px rgba(167, 139, 250, 0.3)',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
          willChange: 'transform'
        }}
      />
    </>
  );
};
