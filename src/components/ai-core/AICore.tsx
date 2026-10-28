import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AICoreCSS } from './AICoreCSS';

// Lazy-load Three.js 3D implementation for optimal initial bundle performance (Spec 17)
const AICoreThree = lazy(() =>
  import('./AICoreThree').then((mod) => ({ default: mod.AICoreThree }))
);

interface AICoreProps {
  size?: number;
  className?: string;
  forceCSS?: boolean;
}

export const AICore: React.FC<AICoreProps> = ({
  size = 320,
  className = '',
  forceCSS = false
}) => {
  const [hasWebGL, setHasWebGL] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
    if (forceCSS) {
      setHasWebGL(false);
      return;
    }

    // Safely detect WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, [forceCSS]);

  if (!isClient) {
    return <AICoreCSS size={size} className={className} />;
  }

  return (
    <div className={`ai-core-wrapper ${className}`} style={{ width: size, height: size, position: 'relative' }}>
      {hasWebGL ? (
        <Suspense fallback={<AICoreCSS size={size} />}>
          <AICoreThree size={size} />
        </Suspense>
      ) : (
        <AICoreCSS size={size} />
      )}
    </div>
  );
};
