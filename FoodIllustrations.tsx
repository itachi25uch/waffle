import React from 'react';

export const WaffleIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Golden Waffle Base */}
    <rect x="10" y="10" width="80" height="80" rx="18" fill="#E8B068" stroke="#B8753A" strokeWidth="4" />
    <rect x="14" y="14" width="72" height="72" rx="14" fill="#F4C586" />
    
    {/* Waffle Grid Pockets */}
    <rect x="22" y="22" width="22" height="22" rx="5" fill="#D99B52" stroke="#B8753A" strokeWidth="2.5" />
    <rect x="56" y="22" width="22" height="22" rx="5" fill="#D99B52" stroke="#B8753A" strokeWidth="2.5" />
    <rect x="22" y="56" width="22" height="22" rx="5" fill="#D99B52" stroke="#B8753A" strokeWidth="2.5" />
    <rect x="56" y="56" width="22" height="22" rx="5" fill="#D99B52" stroke="#B8753A" strokeWidth="2.5" />
    
    {/* Syrup / Butter Melting */}
    <rect x="42" y="42" width="16" height="16" rx="4" fill="#FEE58A" stroke="#E5BA38" strokeWidth="2" transform="rotate(12 50 50)" />
    <path d="M48 30 Q54 36 50 42 Q46 48 52 58" stroke="#5C3322" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
  </svg>
);

export const StrawberryIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Strawberry Body */}
    <path
      d="M40 72 C22 62 14 42 16 28 C18 16 34 16 40 22 C46 16 62 16 64 28 C66 42 58 62 40 72 Z"
      fill="#E86F78"
      stroke="#B73F48"
      strokeWidth="3.5"
    />
    {/* Strawberry Seeds */}
    <circle cx="30" cy="34" r="1.8" fill="#FFF2BD" />
    <circle cx="50" cy="34" r="1.8" fill="#FFF2BD" />
    <circle cx="40" cy="44" r="1.8" fill="#FFF2BD" />
    <circle cx="28" cy="50" r="1.8" fill="#FFF2BD" />
    <circle cx="52" cy="50" r="1.8" fill="#FFF2BD" />
    <circle cx="40" cy="58" r="1.8" fill="#FFF2BD" />
    {/* Green Crown Leaves */}
    <path
      d="M40 22 C34 12 24 16 24 16 C30 20 34 24 40 24 C46 24 50 20 56 16 C56 16 46 12 40 22 Z"
      fill="#6B9E5A"
      stroke="#4A753C"
      strokeWidth="2"
    />
    <path d="M40 18 Q40 8 46 6" stroke="#4A753C" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ShakeIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shake Cup */}
    <path d="M22 36 L28 92 C29 95 32 98 36 98 L44 98 C48 98 51 95 52 92 L58 36 Z" fill="#F4E5D2" stroke="#3A2118" strokeWidth="3" />
    {/* Shake Liquid */}
    <path d="M25 46 L29 88 C30 90 32 92 35 92 L45 92 C48 92 50 90 51 88 L55 46 Z" fill="#E86F78" opacity="0.8" />
    {/* Straw */}
    <path d="M48 10 L44 38" stroke="#B8753A" strokeWidth="4" strokeLinecap="round" />
    {/* Cream Cloud on Top */}
    <path
      d="M20 36 C18 28 26 24 32 26 C36 20 44 20 48 24 C54 22 62 26 60 36 Z"
      fill="#FFFDF8"
      stroke="#3A2118"
      strokeWidth="3"
    />
    {/* Cherry */}
    <circle cx="44" cy="18" r="5" fill="#E86F78" stroke="#B73F48" strokeWidth="2" />
    <path d="M44 14 Q48 8 52 10" stroke="#4A753C" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IceCreamCupIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Waffle Bowl Cup */}
    <path d="M20 48 L28 80 C29 84 33 86 37 86 L53 86 C57 86 61 84 62 80 L70 48 Z" fill="#E8B068" stroke="#B8753A" strokeWidth="3" />
    <path d="M24 56 L66 56 M28 66 L62 66 M32 76 L58 76" stroke="#B8753A" strokeWidth="1.8" strokeDasharray="3 3" />
    
    {/* Scoop Left: Strawberry */}
    <circle cx="34" cy="40" r="16" fill="#E86F78" stroke="#B73F48" strokeWidth="2.5" />
    {/* Scoop Right: Vanilla / Caramel */}
    <circle cx="56" cy="40" r="16" fill="#F4E5D2" stroke="#B8753A" strokeWidth="2.5" />
    {/* Scoop Top: Belgian Choco */}
    <circle cx="45" cy="26" r="15" fill="#5C3322" stroke="#3A2118" strokeWidth="2.5" />
    
    {/* Chocolate Stick / Wafer */}
    <rect x="58" y="10" width="6" height="30" rx="3" fill="#B8753A" stroke="#3A2118" strokeWidth="1.5" transform="rotate(25 61 25)" />
    {/* Sprinkles */}
    <circle cx="42" cy="22" r="1.5" fill="#FFFDF8" />
    <circle cx="48" cy="28" r="1.5" fill="#FFFDF8" />
  </svg>
);

export const ChocolateDripIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M25 6 C25 6 12 24 12 33 C12 40 18 46 25 46 C32 46 38 40 38 33 C38 24 25 6 25 6 Z"
      fill="#3A2118"
    />
    <path d="M20 28 C18 32 18 36 21 39" stroke="#7A4E39" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HandDrawnArrow: React.FC<{ className?: string }> = ({ className = 'w-16 h-8' }) => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 28 C30 10 60 8 85 24"
      stroke="#B8753A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="1 1"
    />
    <path d="M75 16 L88 25 L76 33" stroke="#B8753A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SparkleDoodle: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 4 C20 12 24 16 32 20 C24 24 20 28 20 36 C20 28 16 24 8 20 C16 16 20 12 20 4 Z"
      fill="#B8753A"
      opacity="0.8"
    />
  </svg>
);
