import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { CREAMERIES_LIST } from '../data/menuData';

interface SignatureDessertsProps {
  onExploreMenu: () => void;
}

export const SignatureDesserts: React.FC<SignatureDessertsProps> = ({ onExploreMenu }) => {
  const [selectedCreamery, setSelectedCreamery] = useState('Belgian Chocolate');

  const signatures = [
    {
      title: 'BELGIAN CHOCO WAFFLE',
      subtitle: 'With Choice of Your Creamery',
      price: '₹219',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=85',
      desc: 'Our flagship creation. Deep golden Belgian waffle griddled to crisp perfection, drenched in rich warm chocolate drizzle and topped with a generous scoop of your favorite artisanal creamery.',
      highlights: ['Freshly baked to order', 'Choice of any 29 creameries included', 'Warm chocolate ribbons'],
    },
    {
      title: 'RED VELVET & KIKI OREO WAFFLES',
      subtitle: 'With Creameries & Toppings',
      price: '₹219',
      image: 'https://images.unsplash.com/photo-1588785392665-f6d4a541417d?auto=format&fit=crop&w=1000&q=85',
      desc: 'Signature cocoa velvet waffle or crushed Oreo cookie crumble waffle. Accompanied by velvety cream and choice of cold hand-churned ice cream creamery scoop.',
      highlights: ['Velvety cocoa batter', 'Crunchy Oreo crumbs', 'Decadent dessert pairing'],
    },
  ];

  return (
    <section id="signature" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
            Signature Indulgence
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            The ones you'll come back for.
          </h2>
          <p className="text-[#3A2118]/70 text-base sm:text-lg">
            Handcrafted with authentic recipes and served with your choice from 29 gourmet creameries.
          </p>
        </div>

        {/* Editorial Split Showcase 1: BELGIAN CHOCO WAFFLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Huge Food Imagery */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] group">
              <img
                src={signatures[0].image}
                alt={signatures[0].title}
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FFFDF8]">
                <div>
                  <span className="font-handwriting text-2xl text-[#E8B068]">Served hot & crispy</span>
                  <p className="font-serif-display text-2xl sm:text-3xl font-bold">Creamy Waffles Original</p>
                </div>
                <span className="text-2xl sm:text-3xl font-bold bg-[#3A2118]/80 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-[#F4E5D2]/30">
                  {signatures[0].price}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#E86F78] font-bold mb-2">
              House Specialty
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#3A2118] mb-2 leading-tight">
              {signatures[0].title}
            </h3>
            <p className="text-[#B8753A] font-semibold text-sm mb-4">
              {signatures[0].subtitle}
            </p>
            <p className="text-[#3A2118]/80 text-base leading-relaxed mb-6">
              {signatures[0].desc}
            </p>

            <div className="space-y-2.5 mb-8">
              {signatures[0].highlights.map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm text-[#3A2118]/90 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#F4E5D2] flex items-center justify-center text-[#B8753A]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#3A2118] text-[#FFFDF8] hover:bg-[#5C3322] font-bold text-xs uppercase tracking-wider transition-all w-fit shadow-sm hover:shadow"
            >
              <span>View On Menu</span>
              <ArrowRight className="w-4 h-4 text-[#E86F78]" />
            </button>
          </div>
        </div>

        {/* Elegant Vertical Decorative Line */}
        <div className="flex items-center justify-center my-12">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4B89A] to-transparent" />
          <div className="mx-4 p-2 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs">🧇</div>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4B89A] to-transparent" />
        </div>

        {/* Editorial Split Showcase 2: WAFFLES WITH CREAMERY & FLAVORS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#B8753A] font-bold mb-2">
              Signature Pairings
            </span>
            <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#3A2118] mb-2 leading-tight">
              WAFFLES WITH CREAMERY
            </h3>
            <p className="text-[#3A2118]/80 text-base leading-relaxed mb-6">
              Every waffle order comes with your choice of our 29 house-churned creameries. Pick from classic rich chocolates to exotic local favorites like Sitaphal and Alphonso Mango.
            </p>

            {/* Interactive Creamery Flavours Pills */}
            <div className="bg-[#FFFDF8] p-5 rounded-2xl border border-[#F4E5D2] mb-6 shadow-xs">
              <p className="text-xs font-bold uppercase tracking-wider text-[#3A2118] mb-3 flex items-center justify-between">
                <span>Select Your Creamery:</span>
                <span className="text-[#E86F78] font-handwriting text-lg">{selectedCreamery}</span>
              </p>
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                {CREAMERIES_LIST.slice(0, 18).map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedCreamery(flavor)}
                    className={`text-xs px-2.5 py-1 rounded-full transition-all duration-150 whitespace-nowrap ${
                      selectedCreamery === flavor
                        ? 'bg-[#3A2118] text-[#FFFDF8] font-bold shadow-xs'
                        : 'bg-[#F4E5D2]/60 hover:bg-[#F4E5D2] text-[#3A2118]'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#3A2118]/60 mt-3 italic">
                + 11 more flavors available in-store! (Waffle cone / cup: Rs. 10/- extra)
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-serif-display text-2xl font-bold text-[#3A2118]">₹219</span>
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B8753A] hover:bg-[#A3642F] text-[#FFFDF8] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Explore All Flavours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] group">
              <img
                src={signatures[1].image}
                alt={signatures[1].title}
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FFFDF8]">
                <div>
                  <span className="font-handwriting text-2xl text-[#E8B068]">Paired with {selectedCreamery}</span>
                  <p className="font-serif-display text-2xl sm:text-3xl font-bold">Red Velvet & Oreo</p>
                </div>
                <span className="text-2xl sm:text-3xl font-bold bg-[#3A2118]/80 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-[#F4E5D2]/30">
                  ₹219
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
