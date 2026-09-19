import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sliders, Flame, Award, ArrowUpRight, CheckCircle, Droplet } from 'lucide-react';
import { WaffleIcon, ChocolateDripIcon, StrawberryIcon } from './illustrations/FoodIllustrations';

interface SensoryProfile {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tastingNotes: string[];
  metrics: {
    crispness: number;
    cocoaDensity: number;
    creaminess: number;
    sweetnessBalance: number;
  };
  details: {
    bakeTemp: string;
    origin: string;
    creameryPairing: string;
    texture: string;
  };
}

export const OnyxCraftSection: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState<string>('belgian-choco');
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  const profiles: SensoryProfile[] = [
    {
      id: 'belgian-choco',
      name: 'Belgian Choco Supreme',
      category: 'Signature Grid',
      price: '₹219',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85',
      tastingNotes: ['Molten Dark Cocoa', 'Toasted Malt Grid', 'Madagascar Vanilla', 'Warm Ganache'],
      metrics: {
        crispness: 96,
        cocoaDensity: 94,
        creaminess: 88,
        sweetnessBalance: 82,
      },
      details: {
        bakeTemp: '205°C Cast Iron',
        origin: 'Belgian Recipe Batter',
        creameryPairing: 'Artisanal Vanilla Creamery',
        texture: 'Ultra-crisp crust with airy pillowy crumb',
      },
    },
    {
      id: 'lotus-biscoff',
      name: 'Lotus Biscoff Crunch',
      category: 'Artisanal Creamery & Waffle',
      price: '₹219',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=85',
      tastingNotes: ['Speculoos Spice', 'Brown Sugar Caramel', 'Crunchy Biscuit Crumb', 'Dairy Cream'],
      metrics: {
        crispness: 92,
        cocoaDensity: 40,
        creaminess: 96,
        sweetnessBalance: 88,
      },
      details: {
        bakeTemp: '198°C Golden Bake',
        origin: 'Authentic Speculoos Spread',
        creameryPairing: 'Biscoff Caramel Creamery',
        texture: 'Layered crunch with molten spiced caramel',
      },
    },
    {
      id: 'red-velvet',
      name: 'Red Velvet Royale',
      category: 'Velvet Batter Specialty',
      price: '₹219',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85',
      tastingNotes: ['Crimson Cocoa', 'Cream Cheese Undertone', 'Whipped Cloud', 'Sweet Vanilla'],
      metrics: {
        crispness: 90,
        cocoaDensity: 75,
        creaminess: 92,
        sweetnessBalance: 84,
      },
      details: {
        bakeTemp: '200°C Even Pressure',
        origin: 'Daphne Cocoa Batter',
        creameryPairing: 'Oreo / Vanilla Creamery',
        texture: 'Delicate melt-in-mouth cocoa honeycomb',
      },
    },
    {
      id: 'exotic-sitaphal',
      name: 'Sitaphal & Jackfruit Creamery',
      category: 'Fresh Fruit Creamery',
      price: '₹109',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=85',
      tastingNotes: ['Custard Apple Pulp', 'Wild Jackfruit Aroma', 'Slow Churned Milk', 'Rich Velvet'],
      metrics: {
        crispness: 70,
        cocoaDensity: 10,
        creaminess: 98,
        sweetnessBalance: 78,
      },
      details: {
        bakeTemp: 'Sub-Zero Churning',
        origin: 'Fresh Seasonal Fruit Puree',
        creameryPairing: 'Fresh Waffle Cone / Cup',
        texture: 'Dense, natural fruit pulp and rich cream',
      },
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Malted Batter Chemistry',
      subtitle: 'The Foundation',
      desc: 'Our batter is crafted in small batches daily, balancing premium wheat flour, farm butter, and golden malt for an airy interior structure.',
    },
    {
      step: '02',
      title: '200°C Deep Cast-Iron Press',
      subtitle: 'The Sear & Grid',
      desc: 'Pressed for precisely 180 seconds on heavy commercial irons to achieve deep syrup wells and an unmistakable snap that stays crisp.',
    },
    {
      step: '03',
      title: '29 Artisanal Creameries',
      subtitle: 'The Cold Churn',
      desc: 'From Belgian Dark Chocolate and Lotus Biscoff to indigenous Sitaphal and Alphonso Mango, our ice creams are slow-churned for density.',
    },
    {
      step: '04',
      title: 'Hot-Cold Alchemy',
      subtitle: 'The Finish',
      desc: 'Plated piping hot, topped with an icy creamery scoop, real warm chocolate ganache, and crisp cookie crumb toppings.',
    },
  ];

  const activeProfile = profiles.find((p) => p.id === activeProfileId) || profiles[0];

  return (
    <section id="craft" className="py-24 bg-[#1F1410] text-[#FFFDF8] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B8753A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#E86F78]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Onyx Coffee Lab Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#3D251B] pb-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3D251B] text-[#E8B068] text-xs font-mono tracking-widest uppercase mb-3 border border-[#523325]">
              <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
              <span>THE TASTING LABORATORY</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFDF8]">
              The Art & Science of Sweetness.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#D4B89A]/80 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Inspired by specialty roasters and culinary craft. Every dessert is calibrated for texture, temperature contrast, and cocoa depth.
          </p>
        </div>

        {/* Sensory Profile Matrix Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          {/* Left Column: Interactive Selector & Sensory Sliders */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Tabs for profiles */}
            <div className="flex flex-wrap gap-2 pb-2">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProfileId(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                    activeProfileId === p.id
                      ? 'bg-[#E8B068] text-[#1F1410] border-[#E8B068] shadow-lg shadow-[#E8B068]/20 scale-102'
                      : 'bg-[#2B1B15] text-[#D4B89A] border-[#3D251B] hover:border-[#B8753A]'
                  }`}
                >
                  {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>

            {/* Active Item Title & Price */}
            <div className="bg-[#2B1B15] p-6 sm:p-8 rounded-3xl border border-[#3D251B] shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#E86F78]">
                    {activeProfile.category}
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#FFFDF8] mt-1">
                    {activeProfile.name}
                  </h3>
                </div>
                <span className="font-serif-display text-2xl sm:text-3xl font-bold text-[#E8B068] px-3.5 py-1 bg-[#1F1410] rounded-2xl border border-[#3D251B]">
                  {activeProfile.price}
                </span>
              </div>

              {/* Tasting Notes Tags */}
              <div className="flex flex-wrap gap-2 my-5">
                {activeProfile.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#1F1410] border border-[#3D251B] text-[#D4B89A] flex items-center gap-1.5"
                  >
                    <span className="text-[#E86F78]">✦</span> {note}
                  </span>
                ))}
              </div>

              {/* Dynamic Sensory Sliders (Onyx Style Animated Progress Meters) */}
              <div className="space-y-4 pt-4 border-t border-[#3D251B]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#E8B068] flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" /> Sensory Profile Calibration
                </h4>

                {/* Meter 1: Crispness */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#D4B89A] mb-1.5">
                    <span>Exterior Crisp Index</span>
                    <span className="text-[#FFFDF8] font-bold">{activeProfile.metrics.crispness}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1F1410] rounded-full overflow-hidden border border-[#3D251B]">
                    <motion.div
                      key={`${activeProfile.id}-crisp`}
                      initial={{ width: 0 }}
                      animate={{ width: `${activeProfile.metrics.crispness}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#B8753A] to-[#E8B068] rounded-full"
                    />
                  </div>
                </div>

                {/* Meter 2: Cocoa Density */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#D4B89A] mb-1.5">
                    <span>Cocoa & Flavor Richness</span>
                    <span className="text-[#FFFDF8] font-bold">{activeProfile.metrics.cocoaDensity}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1F1410] rounded-full overflow-hidden border border-[#3D251B]">
                    <motion.div
                      key={`${activeProfile.id}-cocoa`}
                      initial={{ width: 0 }}
                      animate={{ width: `${activeProfile.metrics.cocoaDensity}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-[#5C3322] to-[#B8753A] rounded-full"
                    />
                  </div>
                </div>

                {/* Meter 3: Creaminess */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#D4B89A] mb-1.5">
                    <span>Creamery Melt Velocity</span>
                    <span className="text-[#FFFDF8] font-bold">{activeProfile.metrics.creaminess}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1F1410] rounded-full overflow-hidden border border-[#3D251B]">
                    <motion.div
                      key={`${activeProfile.id}-cream`}
                      initial={{ width: 0 }}
                      animate={{ width: `${activeProfile.metrics.creaminess}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#E8B068] to-[#FFFDF8] rounded-full"
                    />
                  </div>
                </div>

                {/* Meter 4: Sweetness Balance */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#D4B89A] mb-1.5">
                    <span>Palate Sweetness Balance</span>
                    <span className="text-[#FFFDF8] font-bold">{activeProfile.metrics.sweetnessBalance}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1F1410] rounded-full overflow-hidden border border-[#3D251B]">
                    <motion.div
                      key={`${activeProfile.id}-sweet`}
                      initial={{ width: 0 }}
                      animate={{ width: `${activeProfile.metrics.sweetnessBalance}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[#E86F78] to-[#E8B068] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Origin & Temperature Info */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#3D251B] text-xs font-mono">
                <div>
                  <span className="text-[#D4B89A]/60 block text-[10px]">HEAT CALIBRATION</span>
                  <span className="text-[#FFFDF8] font-semibold">{activeProfile.details.bakeTemp}</span>
                </div>
                <div>
                  <span className="text-[#D4B89A]/60 block text-[10px]">CHOSEN PAIRING</span>
                  <span className="text-[#FFFDF8] font-semibold">{activeProfile.details.creameryPairing}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Animated Product Showcase Image Card */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProfile.id}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -15 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden border-2 border-[#3D251B] shadow-2xl bg-[#2B1B15] group"
              >
                <div className="h-[440px] sm:h-[500px] overflow-hidden relative">
                  <img
                    src={activeProfile.image}
                    alt={activeProfile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1410] via-transparent to-transparent opacity-80" />

                  {/* Corner Accent Badge */}
                  <div className="absolute top-4 left-4 bg-[#1F1410]/90 backdrop-blur-md border border-[#3D251B] px-3.5 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E86F78] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[#E8B068]">
                      Batch Tested • Fresh On Order
                    </span>
                  </div>

                  {/* Bottom Texture Details */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1F1410]/85 backdrop-blur-md border border-[#3D251B]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#E8B068] uppercase tracking-wider">
                        Texture Specification
                      </span>
                      <span className="text-xs text-white/60 font-mono">Creamy Waffles Lab</span>
                    </div>
                    <p className="text-sm font-medium text-[#FFFDF8] mt-1">
                      {activeProfile.details.texture}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4-Step "The Process / The Craft" Timeline: Onyx Coffee Lab Pilgrimage Style */}
        <div className="pt-12 border-t border-[#3D251B]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E86F78] block mb-1">
              STEP-BY-STEP STANDARDS
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#FFFDF8]">
              The Four Pillars of the Crunch.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                whileHover={{ y: -6 }}
                onClick={() => setActiveProcessStep(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  activeProcessStep === idx
                    ? 'bg-[#2B1B15] border-[#E8B068] shadow-xl shadow-[#E8B068]/10'
                    : 'bg-[#231713] border-[#3D251B] hover:border-[#523325]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black text-[#E86F78]">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8B068] bg-[#1F1410] px-2.5 py-1 rounded-full border border-[#3D251B]">
                    {step.subtitle}
                  </span>
                </div>
                <h4 className="font-serif-display text-lg font-bold text-[#FFFDF8] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#D4B89A]/80 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
