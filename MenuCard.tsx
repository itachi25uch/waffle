import React from 'react';
import { MenuItem } from '../types';
import { Sparkles, Heart } from 'lucide-react';
import { ChocolateDripIcon } from './illustrations/FoodIllustrations';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#F4E5D2] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
      id={`menu-card-${item.id}`}
    >
      <div>
        {/* Card Image Header */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F4E5D2]/30">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {/* Veg / Non-Veg Indicator Icon */}
          <div className="absolute top-3 left-3 bg-[#FFFDF8] p-1.5 rounded-lg shadow-sm flex items-center justify-center">
            <div
              className={`w-3.5 h-3.5 border-2 flex items-center justify-center rounded-sm ${
                item.isVeg ? 'border-emerald-600' : 'border-rose-600'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                }`}
              />
            </div>
          </div>

          {/* Badge if available */}
          {item.badge && (
            <div className="absolute top-3 right-3 bg-[#3A2118]/85 backdrop-blur-xs text-[#FFFDF8] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
              {item.badge}
            </div>
          )}

          {/* Price pill floating over image bottom */}
          <div className="absolute bottom-3 right-3 bg-[#FFFDF8] text-[#3A2118] font-bold text-sm sm:text-base px-3 py-1 rounded-full shadow-md border border-[#F4E5D2]">
            ₹{item.price}
          </div>

          {/* Floating chocolate drip icon revealed on hover */}
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="p-1 rounded-full bg-[#FFFDF8] shadow-sm">
              <ChocolateDripIcon className="w-4 h-4 text-[#3A2118]" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#B8753A]">
              {item.category}
            </span>
            {item.isChefSpecial && (
              <span className="text-[10px] font-semibold text-[#E86F78] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Chef Pick
              </span>
            )}
          </div>

          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#3A2118] mb-2 leading-snug group-hover:text-[#B8753A] transition-colors">
            {item.name}
          </h3>

          {item.description && (
            <p className="text-xs sm:text-sm text-[#3A2118]/75 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.packagingExtra && (
            <p className="text-[11px] text-[#B8753A] font-medium mt-2">
              *{item.packagingExtra}
            </p>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-[#F4E5D2]/60 flex items-center justify-between">
        <span className="text-xs text-[#3A2118]/60 font-medium">
          Dine-in • Takeaway
        </span>
        <a
          href="tel:09949550666"
          className="text-xs font-bold text-[#3A2118] hover:text-[#B8753A] flex items-center gap-1 group/link"
        >
          <span>Order</span>
          <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};
