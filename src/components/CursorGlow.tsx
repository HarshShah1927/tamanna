import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full mix-blend-screen z-50 opacity-40 blur-[80px]"
      animate={{
        x: mousePosition.x - 160,
        y: mousePosition.y - 160,
      }}
      transition={{
        type: 'tween',
        ease: 'backOut',
        duration: 0.8,
      }}
      style={{
        background: 'radial-gradient(circle, rgba(230,230,250,0.8) 0%, rgba(255,193,204,0) 70%)',
      }}
    />
  );
};

export default CursorGlow;
