import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const photos = [
  {
    id: 1,
    url: "/Img/1.jpg",
    caption: "You carry tradition with such effortless grace, reminding us all that true beauty is timeless.",
    rotation: -4,
  },
  {
    id: 2,
    url: "/Img/10.png",
    caption: "To the girl whose eyes hold a world of dreams and a heart full of kindness—never stop being your authentic self...",
    rotation: 2,
  },
  {
    id: 3,
    url: "/Img/3.jpg",
    caption: "May your year be as bright and refreshing as your smile in this moment of pure joy.",
    rotation: -2,
  },
  {
    id: 4,
    url: "/Img/2.jpg",
    caption: "Happy Birthday! Just because you’re drowning in textbooks and adulting doesn't mean you’ve escaped me—I’m staying stuck to you like a stubborn glitch, so don't think a little academic stress or your ignorance is enough to break this bond",
    rotation: 5,
  },
  {
    id: 5,
    url: "/Img/21.png",
    caption: "To the girl who can quiet my storm with just one look and always finds the way to keep me on the right track.",
    rotation: -3,
  },
  {
    id: 6,
    url: "/Img/5.jpg",
    caption: "Cheers to the girl who finds the light in every situation and shines more brilliantly than any sunset.",
    rotation: 1,
  }
];

const StackCard = ({ photo, index, total }: { photo: any, index: number, total: number }) => {
  const { scrollYProgress } = useScroll();

  // Create a slight scale down effect for cards behind the current one
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.05]
  );

  return (
    <div className="sticky top-32 flex justify-center w-full mb-60 perspective-1000">
      <motion.div
        style={{ scale }}
        initial={{ y: 150, opacity: 0, rotateZ: photo.rotation * 2 }}
        whileInView={{ y: 0, opacity: 1, rotateZ: photo.rotation }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="glass p-4 rounded-xl shadow-2xl relative max-w-sm md:max-w-md w-full bg-white/10"
      >
        <div className="w-full aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-gray-200">
          <img
            src={photo.url}
            alt="Memory"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
        <p className="font-serif text-pink-50 text-xl text-center px-4 pb-2 italic">
          "{photo.caption}"
        </p>
      </motion.div>
    </div>
  );
};

const PhotoStack: React.FC = () => {
  return (
    <section className="relative w-full py-40 z-10">
      <div className="text-center mb-20 px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-pink-100 mb-6 font-light">
          Pieces of Time
        </h2>
        <p className="text-pink-200/60 font-light tracking-wide max-w-xl mx-auto text-lg leading-relaxed">
          Some moments anchor themselves in our memories. Scrolling through these, I am reminded of how deeply I value the times we've shared.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 relative pb-40">
        {photos.map((photo, i) => (
          <StackCard key={photo.id} photo={photo} index={i} total={photos.length} />
        ))}
      </div>
    </section>
  );
};

export default PhotoStack;
