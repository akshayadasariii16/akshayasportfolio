import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import { CustomCursor } from '../components/effects/CustomCursor';
import { LoadingScreen } from '../components/ai-core/LoadingScreen';
import { JarvisVoicePlayer } from '../components/ai-core/JarvisVoicePlayer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';

export const App: React.FC = () => {
  const [loadingActive, setLoadingActive] = useState(true);

  return (
    <div className="portfolio-app">
      {/* Desktop-only custom cursor */}
      <CustomCursor />

      {/* Cinematic AI Activation Screen (Scene One) */}
      <AnimatePresence>
        {loadingActive && (
          <LoadingScreen onComplete={() => setLoadingActive(false)} />
        )}
      </AnimatePresence>

      {/* Primary Fixed Navigation (Scene Eight) */}
      <Navigation />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Scene Three: Hero */}
        <Hero />

        {/* Scene Four: About & Philosophy */}
        <About />

        {/* Scene Five: Project Universe */}
        <Projects />

        {/* Scene Six: Skills Intelligence Matrix */}
        <Skills />

        {/* Scene Nine: Contact Terminal */}
        <Contact />
      </main>

      {/* Scene Two: Optional JARVIS Voice Player HUD */}
      <JarvisVoicePlayer />

      {/* Scene Ten: Closing Footer */}
      <Footer />
    </div>
  );
};

