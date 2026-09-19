import React, { useState } from 'react';
import { Sparkles, Wine, GlassWater, Flame } from 'lucide-react';
import { ShakeIcon } from './illustrations/FoodIllustrations';

export const DrinksSection: React.FC = () => {
  const [activeDrinkTab, setActiveDrinkTab] = useState<'SHAKES' | 'MOCKTAILS'>('SHAKES');

  const thickShakes = [
    {
      name: 'Biscoff Thick Shake',
      price: '₹209',
      desc: 'Caramelized speculoos churned into rich vanilla ice cream with biscuit crumble.',
      tag: 'House Special',
      badgeColor: 'bg-[#B8753A]',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Oreo Thick Shake',
      price: '₹189',
      desc: 'Dark chocolate cookies whipped to thick creamy perfection with chocolate drip.',
      tag: 'Bestseller',
      badgeColor: 'bg-[#3A2118]',
      image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Kitkat Thick Shake',
      price: '₹189',
      desc: 'Crisp chocolate wafers blended with rich dairy cream.',
      tag: 'Popular',
      badgeColor: 'bg-[#B73F48]',
      image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Brownie Thick Shake',
      price: '₹189',
      desc: 'Real baked fudge brownie chunks spun into smooth dark cocoa shake.',
      tag: 'Decadent',
      badgeColor: 'bg-[#5C3322]',
      image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Mango / Strawberry / Black Current',
      price: '₹169',
      desc: 'Real fruit purée and sweet milk shake. Also in Butterscotch & Green Apple.',
      tag: 'Real Fruit',
      badgeColor: 'bg-[#E86F78]',
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Classic Vanilla Shake',
      price: '₹159',
      desc: 'Aromatic French vanilla creamery scoop churned smooth and frosty.',
      tag: 'Classic',
      badgeColor: 'bg-[#D4B89A]',
      image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const mocktails = [
    {
      name: 'Blue Curaçao Sparkler',
      price: '₹89',
      desc: 'Vibrant electric blue citrus mocktail over crushed ice with fresh lime & mint.',
      tag: 'Signature Chill',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Mint Mojito',
      price: '₹89',
      desc: 'Hand-muddled garden mint leaves, fresh lime wedges and sparkling soda.',
      tag: 'Classic',
      badgeColor: 'bg-emerald-600',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Kiwi Mojito',
      price: '₹99',
      desc: 'Zesty kiwi fruit essence with crushed mint, ice and sparkling fizz.',
      tag: 'Tangy Fresh',
      badgeColor: 'bg-lime-600',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Strawberry Splash',
      price: '₹89',
      desc: 'Luscious ripe strawberry cooler shaken with ice and lemon.',
      tag: 'Fruity',
      badgeColor: 'bg-[#E86F78]',
      image: 'https://images.unsplash.com/photo-1587888637140-849b25d80ef9?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Green Apple Sparkler',
      price: '₹99',
      desc: 'Crisp granny smith apple notes paired with effervescent soda and lime.',
      tag: 'Crisp',
      badgeColor: 'bg-teal-600',
      image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Butterscotch Cooler',
      price: '₹89',
      desc: 'Rich caramel and butterscotch notes transformed into a fizzy chilled cooler.',
      tag: 'Sweet Chill',
      badgeColor: 'bg-[#B8753A]',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const currentList = activeDrinkTab === 'SHAKES' ? thickShakes : mocktails;

  return (
    <section id="drinks" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      {/* Animated Liquid Gradient Background backdrop */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-liquid-gradient" />

      {/* Floating fizzy bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/60 border border-[#EADBCC] animate-float-slow"
            style={{
              width: `${12 + (i % 4) * 8}px`,
              height: `${12 + (i % 4) * 8}px`,
              left: `${10 + i * 11}%`,
              bottom: `${5 + (i * 12) % 60}%`,
              animationDuration: `${5 + (i % 5) * 1.5}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#EADBCC]">
            <ShakeIcon className="w-4 h-4" />
            Hand-Blended & Shaken Fresh
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            Sip something delicious.
          </h2>
          <p className="text-[#3A2118]/70 text-base sm:text-lg">
            From velvety thick shakes loaded with real chocolate & cookies to icy citrus mocktails.
          </p>

          {/* Drink Category Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-[#F4E5D2] border border-[#D4B89A] mt-8 shadow-xs">
            <button
              onClick={() => setActiveDrinkTab('SHAKES')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeDrinkTab === 'SHAKES'
                  ? 'bg-[#3A2118] text-[#FFFDF8] shadow-sm'
                  : 'text-[#3A2118] hover:text-[#B8753A]'
              }`}
            >
              <span>Thick Shakes (10 Flavours)</span>
            </button>
            <button
              onClick={() => setActiveDrinkTab('MOCKTAILS')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeDrinkTab === 'MOCKTAILS'
                  ? 'bg-[#3A2118] text-[#FFFDF8] shadow-sm'
                  : 'text-[#3A2118] hover:text-[#B8753A]'
              }`}
            >
              <span>Mocktails & Coolers</span>
            </button>
          </div>
        </div>

        {/* Tall Editorial Drink Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentList.map((drink) => (
            <div
              key={drink.name}
              className="relative rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#F4E5D2] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/70 via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 text-[#FFFDF8] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm ${drink.badgeColor}`}
                >
                  {drink.tag}
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-4 right-4 bg-[#FFFDF8] text-[#3A2118] font-bold text-base px-3.5 py-1 rounded-full shadow-md border border-[#F4E5D2]">
                  {drink.price}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#3A2118] mb-2 group-hover:text-[#B8753A] transition-colors">
                    {drink.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A2118]/75 leading-relaxed">
                    {drink.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F4E5D2] flex items-center justify-between text-xs text-[#B8753A] font-semibold">
                  <span>Freshly prepared</span>
                  <a
                    href="tel:09949550666"
                    className="hover:underline flex items-center gap-1 text-[#3A2118]"
                  >
                    Order by phone →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
