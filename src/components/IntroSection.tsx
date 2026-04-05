import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax fade effect on scroll
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.section 
      style={{ opacity, y }}
      className="relative min-h-screen flex flex-col items-center justify-center z-10 p-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-3xl md:text-5xl font-light tracking-wide text-pink-100/90 leading-relaxed mb-6 font-serif">
          This is not just a website...
        </p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="text-lg md:text-2xl text-purple-200/60 font-light"
        >
          it's something I wanted you to see.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <span className="text-sm tracking-widest text-pink-300/40 uppercase mb-2">Scroll gently</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-pink-300/50 to-transparent"
        />
      </motion.div>
    </motion.section>
  );
};

export default IntroSection;
