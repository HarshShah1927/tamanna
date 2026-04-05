import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const compliments = [
  "You have a really good heart, even when things are complicated.",
  "The way your mind works is something I've always admired.",
  "You handle more than you give yourself credit for.",
  "Your presence has always had a calming effect.",
  "You are entirely enough, just as you are.",
  "I hope you always find reasons to smile, even on tough days.",
  "You're the kind of person who leaves a lasting impression."
];

const ComplimentGenerator: React.FC = () => {
  const [current, setCurrent] = useState<number | null>(null);

  const generateCompliment = () => {
    let next;
    do {
      next = Math.floor(Math.random() * compliments.length);
    } while (next === current && compliments.length > 1);
    setCurrent(next);
  };

  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center z-10 px-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={generateCompliment}
        className="glass px-8 py-4 rounded-full flex items-center space-x-3 text-pink-100 hover:bg-white/10 transition-colors shadow-lg shadow-pink-500/10"
      >
        <Sparkles className="w-5 h-5 text-pink-300" />
        <span className="tracking-wide uppercase text-sm">A small thought</span>
      </motion.button>

      <div className="h-32 mt-12 w-full max-w-xl text-center flex items-center justify-center">
        <AnimatePresence mode="wait">
          {current !== null && (
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl font-serif text-pink-50 leading-relaxed"
            >
              "{compliments[current]}"
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ComplimentGenerator;
