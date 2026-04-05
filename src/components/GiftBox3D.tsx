import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GiftBox: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center z-10 py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-pink-100 mb-4 drop-shadow-[0_0_15px_rgba(255,193,204,0.5)]">
          A Special Gift
        </h2>
        <p className="text-pink-200/60 font-light tracking-widest uppercase text-sm">
          {!opened ? "Tap to open" : "For you"}
        </p>
      </div>

      <div className="relative w-64 h-64 cursor-pointer" onClick={() => setOpened(true)}>
        <AnimatePresence>
          {!opened ? (
            <motion.div
              key="closed-box"
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, -2, 2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="relative w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-2xl shadow-pink-500/30 border-2 border-white/20 flex flex-col items-center justify-center"
              >
                {/* Ribbon Vertical */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-white/80 shadow-lg" />
                {/* Ribbon Horizontal */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-white/80 shadow-lg" />
                {/* Bow */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-12 flex justify-between">
                  <div className="w-8 h-10 border-4 border-white/80 rounded-full bg-pink-100/30" />
                  <div className="w-8 h-10 border-4 border-white/80 rounded-full bg-pink-100/30" />
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="opened-wishes"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="absolute -inset-x-32 -inset-y-10 flex flex-col items-center justify-center glass p-8 rounded-3xl"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-6xl mb-6"
              >
                🎂
              </motion.span>
              <h3 className="text-3xl md:text-5xl font-serif text-pink-50 mb-6 text-center leading-tight">
                Happy Birthday!
              </h3>
              <p className="text-pink-100/90 text-lg md:text-xl text-center font-light leading-relaxed mb-4">
                I couldn't let your special day pass without celebrating you.
              </p>
              <p className="text-purple-200/80 text-center font-light leading-relaxed">
                You deserve all the joy, the late-night laughs, the quiet peaceful mornings, and every single dream you're chasing. Even if we're distant right now, my wishes for you are as strong and genuine as ever. 
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GiftBox;
