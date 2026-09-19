import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Filter, Eye } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuCategoryType, MenuItem } from '../types';
import { MenuCard } from './MenuCard';

interface MenuSectionProps {
  onOpenMenuViewer: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenMenuViewer }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>('ALL');
  const [dietaryFilter, setDietaryFilter] = useState<'ALL' | 'VEG' | 'NON-VEG'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { label: string; value: MenuCategoryType; icon: string }[] = [
    { label: 'All Items', value: 'ALL', icon: '✨' },
    { label: 'Waffles', value: 'WAFFLES', icon: '🧇' },
    { label: 'Creameries (29)', value: 'CREAMERIES', icon: '🍨' },
    { label: 'Thick Shakes', value: 'THICK SHAKES', icon: '🥤' },
    { label: 'Mocktails', value: 'MOCKTAILS', icon: '🍹' },
    { label: 'Value Combos', value: 'COMBOS', icon: '🍔' },
    { label: 'Creamy Breads & Burgers', value: 'CREAMY BREADS', icon: '🥪' },
    { label: 'Fried Items', value: 'FRIED ITEMS', icon: '🍟' },
    { label: 'Creamy Pasta', value: 'CREAMY PASTA', icon: '🍝' },
    { label: 'Momos', value: 'MOMOS', icon: '🥟' },
    { label: 'Noodles & Rice', value: 'NOODLES & RICE', icon: '🍜' },
    { label: 'Soups & Starters', value: 'SOUPS & STARTERS', icon: '🍲' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;

      // Dietary match
      const matchDietary =
        dietaryFilter === 'ALL' ||
        (dietaryFilter === 'VEG' && item.isVeg) ||
        (dietaryFilter === 'NON-VEG' && !item.isVeg);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query);

      return matchCategory && matchDietary && matchSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#FFF8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#EADBCC]">
            <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
            Authentic Café Menu
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            Made for your cravings.
          </h2>
          <p className="text-[#3A2118]/70 text-base sm:text-lg">
            From crispy waffles to creamy shakes, discover your next sweet obsession.
          </p>

          {/* Full Original Menu Viewer CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenMenuViewer}
              id="view-full-menu-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A2118] text-[#FFFDF8] hover:bg-[#5C3322] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Eye className="w-4 h-4 text-[#E86F78]" />
              <span>View Full Original Menu (7 Pages)</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-10 space-y-5">
          {/* Horizontal Scrollable Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar sm:justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                id={`cat-btn-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-xs ${
                  selectedCategory === cat.value
                    ? 'bg-[#3A2118] text-[#FFFDF8] shadow-md scale-102'
                    : 'bg-[#FFFDF8] text-[#3A2118]/80 hover:bg-[#F4E5D2] border border-[#F4E5D2]'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Sub-bar: Search Input & Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FFFDF8] p-3 rounded-2xl border border-[#F4E5D2]">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#B8753A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search waffles, shakes, burgers, pasta..."
                className="w-full pl-10 pr-4 py-2 bg-[#FFF8F0] rounded-xl text-xs sm:text-sm text-[#3A2118] placeholder:text-[#3A2118]/40 border border-[#EADBCC] focus:outline-none focus:border-[#B8753A]"
              />
            </div>

            {/* Dietary Toggle: All / Veg / Non-Veg */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs font-semibold text-[#3A2118]/60 hidden md:inline">
                Dietary:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-[#FFF8F0] border border-[#EADBCC]">
                <button
                  onClick={() => setDietaryFilter('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    dietaryFilter === 'ALL'
                      ? 'bg-[#3A2118] text-[#FFFDF8]'
                      : 'text-[#3A2118]/70 hover:text-[#3A2118]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('VEG')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    dietaryFilter === 'VEG'
                      ? 'bg-emerald-700 text-white'
                      : 'text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Pure Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('NON-VEG')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    dietaryFilter === 'NON-VEG'
                      ? 'bg-rose-700 text-white'
                      : 'text-rose-700 hover:bg-rose-50'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Non-Veg
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Animated Menu Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-[#FFFDF8] rounded-3xl border border-[#F4E5D2]">
              <p className="font-serif-display text-2xl text-[#3A2118] mb-2">
                No items found for "{searchQuery}"
              </p>
              <p className="text-sm text-[#3A2118]/60 mb-6">
                Try searching for another craveable item or clear the filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('ALL');
                  setDietaryFilter('ALL');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-[#3A2118] text-[#FFFDF8] text-xs font-bold uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Note about original prices */}
        <div className="mt-12 text-center text-xs text-[#3A2118]/60 max-w-xl mx-auto">
          * All menu prices and items are extracted directly from the verified Creamy Waffles dine-in & takeaway menu. Packaging charges extra where applicable.
        </div>
      </div>
    </section>
  );
};
