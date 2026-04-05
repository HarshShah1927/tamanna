import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const eggs = [
  { id: 1, top: '20%', left: '15%', message: "A small memory", icon: Heart },
  { id: 2, top: '60%', left: '85%', message: "Wishing you well", icon: Star },
  { id: 3, top: '40%', left: '75%', message: "Take care of yourself", icon: Heart },
  { id: 4, top: '80%', left: '25%', message: "Keep shining", icon: Star },
];

const EasterEggs: React.FC = () => {
  const [activeEgg, setActiveEgg] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      {eggs.map((egg) => {
        const Icon = egg.icon;
        const isActive = activeEgg === egg.id;

        return (
          <div 
            key={egg.id}
            className="absolute pointer-events-auto"
            style={{ top: egg.top, left: egg.left }}
          >
            <div className="relative group">
              <motion.button
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + egg.id, // Randomize somewhat
                  ease: "easeInOut"
                }}
                onHoverStart={() => setActiveEgg(egg.id)}
                onHoverEnd={() => setActiveEgg(null)}
                className="text-pink-300/40 hover:text-pink-300 transition-colors"
                aria-label="Hidden message"
              >
                <Icon size={16} />
              </motion.button>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap"
                  >
                    <div className="glass px-3 py-1 rounded text-xs text-pink-100 tracking-wider">
                      {egg.message}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EasterEggs;
