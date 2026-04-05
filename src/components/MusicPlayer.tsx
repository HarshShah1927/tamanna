import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // You'd replace this with an actual calming lofi music URL
    audioRef.current = new Audio('/desi-girl-dostana-original-motion-picturetrack-320-kbps_lRdizF2c.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 3 }}
      onClick={togglePlay}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass hover:bg-white/10 transition-colors duration-300 flex items-center justify-center group"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-pink-200" />
      ) : (
        <VolumeX className="w-5 h-5 text-gray-400" />
      )}
      <span className="absolute right-14 bg-black/50 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-pink-100">
        {isPlaying ? 'Pause Music' : 'Play Background Music'}
      </span>
    </motion.button>
  );
};

export default MusicPlayer;
