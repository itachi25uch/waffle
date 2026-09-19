import React from 'react';
import { motion } from 'motion/react';
import { StrawberryIcon, SparkleDoodle } from './illustrations/FoodIllustrations';

export const FloatingDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* 1. Floating Strawberry slice - Top Left */}
      <motion.div
        className="absolute top-24 left-[8%] md:left-[12%]"
        animate={{
          y: [-10, 12, -10],
          rotate: [-4, 6, -4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-10 h-10 opacity-80 filter drop-shadow-sm">
          <StrawberryIcon className="w-full h-full" />
        </div>
      </motion.div>

      {/* 2. Floating Chocolate Chip / Drop - Top Right */}
      <motion.div
        className="absolute top-32 right-[10%] md:right-[15%]"
        animate={{
          y: [8, -14, 8],
          rotate: [12, -8, 12],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-[#3A2118] shadow-md flex items-center justify-center border border-[#5C3322]">
          <div className="w-2 h-2 rounded-full bg-[#7A4E39] -mt-1 -ml-1 opacity-70" />
        </div>
      </motion.div>

      {/* 3. Golden Waffle Cube - Mid Left */}
      <motion.div
        className="absolute top-[48%] left-[4%] md:left-[6%]"
        animate={{
          y: [-8, 10, -8],
          rotate: [-15, 10, -15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-[#E8B068] border-2 border-[#B8753A] shadow-sm flex items-center justify-center transform rotate-12">
          <div className="w-3 h-3 rounded bg-[#D99B52]" />
        </div>
      </motion.div>

      {/* 4. Cream Swirl Blob - Mid Right */}
      <motion.div
        className="absolute top-[52%] right-[5%] md:right-[8%]"
        animate={{
          y: [10, -12, 10],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <div className="w-7 h-7 rounded-full bg-[#FFFDF8] border border-[#F4E5D2] shadow-sm flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#FCECD8]" />
        </div>
      </motion.div>

      {/* 5. Tiny Caramel Star / Sparkle - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-[14%]"
        animate={{
          y: [-6, 8, -6],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <SparkleDoodle className="w-5 h-5 text-[#B8753A]" />
      </motion.div>

      {/* 6. Cocoa Bean / Chocolate Piece - Bottom Right */}
      <motion.div
        className="absolute bottom-16 right-[18%]"
        animate={{
          y: [6, -10, 6],
          rotate: [-10, 8, -10],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      >
        <div className="w-7 h-5 rounded-full bg-[#3A2118] border border-[#5C3322] shadow-sm transform -rotate-45" />
      </motion.div>
    </div>
  );
};
