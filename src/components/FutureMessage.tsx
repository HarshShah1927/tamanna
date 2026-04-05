import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fullText = `Waqt badla hai, par jazbaat wahi purane hain,
Khamoshiyon mein bhi dosti ke afsane hain;
Bas ek awaaz dena jab bhi dil thoda udaas ho,
Hum door hokar bhi tere saath nibhane ke bahane hain.
Aapko Janam Din ki Hardik Shubhkamnayein`;

const FutureMessage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative w-full py-40 flex flex-col items-center justify-center z-10 px-6 bg-black/20">
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="font-serif text-xl md:text-2xl leading-loose text-pink-50/90 min-h-[200px] whitespace-pre-line">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-6 ml-1 bg-pink-300 align-middle"
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureMessage;
