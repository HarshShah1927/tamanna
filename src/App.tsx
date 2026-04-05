import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Background3D from './components/Background3D';
import CursorGlow from './components/CursorGlow';
import MusicPlayer from './components/MusicPlayer';
import IntroSection from './components/IntroSection';
import PhotoStack from './components/PhotoStack';
import MandalaArt from './components/MandalaArt';
import ComplimentGenerator from './components/ComplimentGenerator';
import FutureMessage from './components/FutureMessage';
import EasterEggs from './components/EasterEggs';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#0b0f19] text-pink-50 min-h-screen selection:bg-pink-300/30 selection:text-pink-100 font-sans">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0f19]"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-pink-100 tracking-[0.3em] uppercase text-sm font-light"
            >
              For Tamanna...
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="relative"
          >
            {/* Ambient & Interaction Layers */}
            <CursorGlow />
            <Background3D />
            <MusicPlayer />
            
            {/* Content Layers */}
            <main className="relative z-10 w-full overflow-hidden">
              <EasterEggs />
              
              <IntroSection />
              
              {/* New Sticky Photo Stack (replaces the thin Timeline) */}
              <PhotoStack />

              {/* Beautiful mesmerizing Mandala Art container */}
              <MandalaArt />
              
              <ComplimentGenerator />
              <FutureMessage />

              {/* Minimal Footer */}
              <footer className="w-full py-12 text-center text-pink-200/40 text-xs tracking-widest uppercase">
                <p>Created with gentle thoughts
                  <br /> - By Harsh Shah
                </p>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
