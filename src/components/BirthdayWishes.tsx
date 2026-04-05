import React from 'react';
import { motion } from 'framer-motion';

const BirthdayWishes: React.FC = () => {
  return (
    <section className="relative w-full py-40 z-10 flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl glass p-10 md:p-16 rounded-3xl text-center shadow-pink-500/10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 opacity-50" />
        
        <h2 className="text-4xl md:text-5xl font-serif text-pink-50 mb-10 leading-tight">
          Wishing you the happiest of birthdays.
        </h2>
        
        <div className="space-y-6 text-pink-100/90 font-light text-lg md:text-xl leading-relaxed">
          <p>
            I know things have felt a bit distant lately, and words sometimes get lost in misunderstandings. But today isn't about that. Today is about celebrating the incredible person you are.
          </p>
          <p>
            You have a spirit that brightens the room and a heart that deserves to be celebrated. I wanted to create this space just for you—a quiet, pressure-free reminder of how much you are valued and appreciated. 
          </p>
          <p>
            May this year bring you closer to every dream you hold dear, surround you with the love you give out so freely, and give you peace in the quiet moments. 
          </p>
          <p className="pt-8 text-2xl font-serif italic text-pink-200">
            Keep shining.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default BirthdayWishes;
