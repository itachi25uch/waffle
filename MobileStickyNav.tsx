import React from 'react';
import { Home, UtensilsCrossed, Image as ImageIcon, Phone } from 'lucide-react';

export const MobileStickyNav: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FFF8F0]/95 backdrop-blur-md border-t border-[#F4E5D2] px-4 py-2 shadow-2xl">
      <nav className="flex items-center justify-around">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#3A2118] hover:text-[#B8753A] transition-colors focus:outline-none"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </a>

        <a
          href="#menu"
          onClick={(e) => handleScrollTo(e, '#menu')}
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#3A2118] hover:text-[#B8753A] transition-colors focus:outline-none"
        >
          <UtensilsCrossed className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Menu</span>
        </a>

        <a
          href="#gallery"
          onClick={(e) => handleScrollTo(e, '#gallery')}
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#3A2118] hover:text-[#B8753A] transition-colors focus:outline-none"
        >
          <ImageIcon className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Gallery</span>
        </a>

        <a
          href="tel:09949550666"
          className="flex flex-col items-center gap-1 py-1 px-3 text-[#FFFDF8] bg-[#3A2118] rounded-xl transition-transform active:scale-95 shadow-sm"
        >
          <Phone className="w-5 h-5 text-[#E86F78]" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </a>
      </nav>
    </div>
  );
};
