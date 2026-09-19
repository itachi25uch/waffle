import React from 'react';

interface MarqueeTickerProps {
  variant?: 'light' | 'dark';
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ variant = 'dark' }) => {
  const items = [
    'FRESHLY BAKED TO ORDER',
    '29 ARTISANAL CREAMERIES',
    'HYDERABAD • USHA MULLAPUDI RD',
    'HOT WAFFLES & COLD SCOOPS',
    '4.6★ ON GOOGLE (224 REVIEWS)',
    'BELGIAN CHOCOLATE DRIZZLE',
    'DINE-IN • TAKEAWAY • DELIVERY',
    'LOADED THICK SHAKES',
  ];

  const isDark = variant === 'dark';

  return (
    <div
      className={`py-3.5 overflow-hidden select-none border-y transition-colors ${
        isDark
          ? 'bg-[#1F1410] border-[#3D251B] text-[#FFFDF8]'
          : 'bg-[#F4E5D2] border-[#E3CDBC] text-[#3A2118]'
      }`}
    >
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center space-x-6 text-xs sm:text-sm font-black tracking-widest uppercase">
            <span>{text}</span>
            <span className="text-[#E86F78] text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
