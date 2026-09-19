import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Phone, Sparkles, Star } from 'lucide-react';
import {
  WaffleIcon,
  StrawberryIcon,
  ChocolateDripIcon,
  SparkleDoodle,
  HandDrawnArrow,
} from './illustrations/FoodIllustrations';
import { FloatingDecorations } from './FloatingDecorations';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenMenuViewer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenMenuViewer }) => {
  // Mouse parallax interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers
  const waffleRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const waffleRotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const waffleX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const waffleY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const strawberryX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const strawberryY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const chocolateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const chocolateY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F4E5D2]/60 via-[#FCECD8]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-[#E86F78]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating treat elements across hero */}
      <FloatingDecorations />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 lg:pt-0">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E5D2] border border-[#E3CDBC] mb-5 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#E86F78] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#3A2118]">
              DESSERTS • WAFFLES • SHAKES
            </span>
          </motion.div>

          {/* Large Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#3A2118] leading-[1.08] mb-6"
          >
            Sweet moments, <br />
            <span className="relative inline-block text-[#B8753A]">
              made delicious.
              {/* Decorative hand-drawn underline accent */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#E86F78]/70"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#3A2118]/80 max-w-xl leading-relaxed mb-8 font-normal"
          >
            Crispy waffles, creamy desserts and indulgent drinks made to turn an ordinary day into something special.
          </motion.p>

          {/* Handwritten accent doodle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-handwriting text-2xl text-[#B8753A] font-bold">
              Freshly made with love in Hyderabad
            </span>
            <HandDrawnArrow className="w-12 h-6 text-[#B8753A] hidden sm:block" />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onExploreMenu}
              id="hero-explore-menu-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3A2118] hover:bg-[#5C3322] text-[#FFFDF8] font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4 text-[#E86F78] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:09949550666"
              id="hero-call-us-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F4E5D2] hover:bg-[#EBD6BE] text-[#3A2118] border border-[#D4B89A] font-bold text-sm uppercase tracking-wider shadow-xs hover:shadow transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-[#B8753A]" />
              <span>CALL US</span>
            </a>

            <button
              onClick={onOpenMenuViewer}
              id="hero-view-original-menu-btn"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8753A] hover:text-[#3A2118] transition-colors py-2 px-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>View Full Original Menu (7 Pgs)</span>
            </button>
          </motion.div>

          {/* Social Proof Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 pt-6 border-t border-[#F4E5D2] flex flex-wrap items-center gap-6 text-sm text-[#3A2118]/90"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-[#3A2118]">4.6 ⭐</span>
              <span className="text-[#3A2118]/60">(224 Google Reviews)</span>
            </div>
            <div className="h-4 w-px bg-[#D4B89A] hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8753A]">
              <span>Dine-in • Takeaway • Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Parallax Dessert Floating Composition */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Circular backdrop glow */}
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#F4E5D2] via-[#FCECD8] to-[#FFF8F0] shadow-inner border border-[#EADBCC]" />

            {/* Subtle decorative doodles surrounding the composition */}
            {/* 1. Strawberry Doodle */}
            <motion.div
              style={{ x: strawberryX, y: strawberryY }}
              className="absolute -top-3 right-6 z-30 pointer-events-none"
            >
              <div className="p-2 bg-[#FFFDF8] rounded-2xl shadow-md border border-[#F4E5D2] rotate-12 flex items-center gap-1.5">
                <StrawberryIcon className="w-7 h-7" />
                <span className="font-handwriting text-sm font-bold text-[#E86F78]">Fresh berries</span>
              </div>
            </motion.div>

            {/* 2. Chocolate Drop & Arrow */}
            <motion.div
              style={{ x: chocolateX, y: chocolateY }}
              className="absolute -bottom-4 -left-4 z-30 pointer-events-none"
            >
              <div className="p-2.5 bg-[#FFFDF8] rounded-2xl shadow-md border border-[#F4E5D2] -rotate-6 flex items-center gap-2">
                <ChocolateDripIcon className="w-6 h-6 text-[#3A2118]" />
                <span className="font-handwriting text-sm font-bold text-[#3A2118]">Belgian Drizzle</span>
              </div>
            </motion.div>

            {/* 3. Artisanal Scoop badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute top-1/4 -left-8 z-30 hidden sm:flex items-center gap-2 bg-[#3A2118] text-[#FFFDF8] px-3.5 py-2 rounded-full shadow-lg border border-[#5C3322]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
              <span className="text-xs font-bold tracking-wide">29 Creameries</span>
            </motion.div>

            {/* Interactive floating waffle card container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{
                rotateX: waffleRotateX,
                rotateY: waffleRotateY,
                x: waffleX,
                y: waffleY,
                transformStyle: 'preserve-3d',
              }}
              className="relative z-20 w-full h-full p-4 flex items-center justify-center cursor-pointer group"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] group-hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85"
                  alt="Belgian Waffle with strawberries, chocolate drizzle, whipped cream and ice cream scoop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/60 via-transparent to-transparent opacity-80" />

                {/* Overlay Caption on Dessert */}
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFDF8]">
                  <p className="text-[11px] uppercase tracking-widest text-[#E8B068] font-bold">
                    Signature Creation
                  </p>
                  <p className="font-serif-display text-xl font-bold">
                    Belgian Choco Waffle & Creamery
                  </p>
                  <p className="text-xs text-[#FFFDF8]/90 font-medium">
                    Warm melted chocolate • Strawberries • Vanilla Cream
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
