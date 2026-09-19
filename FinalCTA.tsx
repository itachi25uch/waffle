import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { WaffleIcon, HandDrawnArrow } from './illustrations/FoodIllustrations';

interface FinalCTAProps {
  onExploreMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreMenu }) => {
  return (
    <section className="py-28 bg-[#F4E5D2]/50 relative overflow-hidden border-t border-[#EADBCC]">
      {/* Background Illustrated Waffle watermark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-15 select-none transform rotate-12">
        <WaffleIcon className="w-[450px] h-[450px]" />
      </div>

      <div className="absolute top-10 left-10 pointer-events-none opacity-10 select-none transform -rotate-12">
        <WaffleIcon className="w-[300px] h-[300px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF8] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-6 border border-[#EADBCC] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
          Fresh Desserts Daily
        </div>

        <h2 className="font-serif-display text-4xl sm:text-6xl font-bold text-[#3A2118] tracking-tight mb-4 leading-tight">
          Your next sweet moment is waiting.
        </h2>

        <p className="font-handwriting text-3xl sm:text-4xl text-[#B8753A] font-bold mb-10">
          Come hungry. Leave happy.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreMenu}
            id="final-cta-explore-menu-btn"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#3A2118] text-[#FFFDF8] hover:bg-[#5C3322] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight className="w-4 h-4 text-[#E86F78] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:09949550666"
            id="final-cta-call-btn"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFFDF8] text-[#3A2118] hover:bg-[#F4E5D2] border border-[#D4B89A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#E86F78]" />
            <span>CALL CREAMY WAFFLES</span>
          </a>
        </div>
      </div>
    </section>
  );
};
