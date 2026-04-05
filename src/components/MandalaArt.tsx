import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MandalaSVG = () => {
  const petals1 = 16;
  const petals2 = 32;
  const petals3 = 12;

  return (
    <svg viewBox="-150 -150 300 300" className="w-full h-full opacity-80" style={{ filter: "drop-shadow(0px 0px 10px rgba(255,193,204,0.3))" }}>
      {/* Center glowing core */}
      <circle cx="0" cy="0" r="10" fill="#fff" className="opacity-90" />
      <circle cx="0" cy="0" r="15" fill="none" stroke="#ffc1cc" strokeWidth="1" />

      {/* Inner small petals */}
      {Array.from({ length: petals3 }).map((_, i) => (
        <g key={`inner-${i}`} transform={`rotate(${i * (360 / petals3)})`}>
          <path d="M 0,-15 Q 10,-35 0,-50 Q -10,-35 0,-15" fill="none" stroke="#e6e6fa" strokeWidth="0.8" />
          <circle cx="0" cy="-45" r="1.5" fill="#e6e6fa" />
        </g>
      ))}

      {/* Middle intricate layer */}
      {Array.from({ length: petals1 }).map((_, i) => (
         <g key={`mid-${i}`} transform={`rotate(${i * (360 / petals1)})`}>
             <path d="M 0,-50 Q 25,-75 0,-110 Q -25,-75 0,-50" fill="rgba(255,193,204,0.05)" stroke="#ffc1cc" strokeWidth="0.5" />
             <path d="M 0,-60 Q 15,-80 0,-95 Q -15,-80 0,-60" fill="none" stroke="#ffc1cc" strokeWidth="1" opacity="0.6" />
             <circle cx="0" cy="-105" r="2" fill="#ffc1cc" />
         </g>
      ))}

      {/* Outer fine layer */}
      {Array.from({ length: petals2 }).map((_, i) => (
        <g key={`outer-${i}`} transform={`rotate(${i * (360 / petals2)})`}>
          <path d="M 0,-110 Q 15,-130 0,-140 Q -15,-130 0,-110" fill="none" stroke="#e6e6fa" strokeWidth="0.3" />
          <circle cx="0" cy="-142" r="1" fill="#e6e6fa" opacity="0.8" />
        </g>
      ))}

      {/* Concentric detail rings */}
      <circle cx="0" cy="0" r="50" fill="none" stroke="#ffc1cc" strokeWidth="0.2" strokeDasharray="2 4" />
      <circle cx="0" cy="0" r="110" fill="none" stroke="#e6e6fa" strokeWidth="0.3" strokeDasharray="1 6" />
    </svg>
  );
};

const MandalaArt: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative w-full min-h-[90vh] py-32 flex flex-col items-center justify-center z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent pointer-events-none" />
      
      <div className="text-center px-6 mb-16 z-20">
        <h2 className="text-3xl md:text-5xl font-serif text-pink-100 font-light mb-4 drop-shadow-[0_0_15px_rgba(255,193,204,0.5)]">
          {opened ? "For You" : "A Quiet Moment"}
        </h2>
        <p className="text-pink-200/60 tracking-wider uppercase text-sm font-light">
          {opened ? "Always appreciated" : "Tap the center of the mandala"}
        </p>
      </div>

      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="mandala-closed"
              exit={{ scale: 2, opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setOpened(true)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
                <MandalaSVG />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[15%]"
                >
                  <MandalaSVG />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="mandala-opened"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="absolute -inset-x-10 -inset-y-10 md:-inset-x-32 md:-inset-y-10 flex flex-col items-center justify-center glass p-8 md:p-12 rounded-3xl z-30"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="text-6xl mb-6"
              >
                🎂
              </motion.span>
              <h3 className="text-3xl md:text-5xl font-serif text-pink-50 mb-6 text-center leading-tight">
                Happy Birthday, Tamanna!
              </h3>
              <p className="text-pink-100/90 text-lg md:text-xl text-center font-light leading-relaxed mb-4">
                I couldn't let your special day pass without celebrating you.
              </p>
              <p className="text-purple-200/80 text-center font-light leading-relaxed">
                You deserve all the joy, the late-night laughs, the quiet peaceful mornings, and every single dream you're chasing. Even if things feel a bit distant right now, my wishes for you are as strong and genuine as ever.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MandalaArt;
