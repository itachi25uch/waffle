import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { StrawberryIcon, SparkleDoodle } from './illustrations/FoodIllustrations';

export const DessertShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const showcaseItems = [
    {
      title: 'Belgian Choco Waffle',
      category: 'Signature Waffle',
      price: '₹219',
      tag: 'Chef Special',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
      description: 'Hot Belgian waffle, real melted chocolate, and vanilla creamery scoop.',
    },
    {
      title: 'Biscoff Artisanal Creamery',
      category: 'Artisanal Scoop',
      price: '₹109',
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
      description: 'Spiced speculoos caramel crunch churned in thick milk cream.',
    },
    {
      title: 'Biscoff & Oreo Thick Shakes',
      category: 'Decadent Shake',
      price: '₹189 - 209',
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
      description: 'Ultra-creamy, hand-blended milkshakes topped with whipped cloud cream.',
    },
    {
      title: 'Red Velvet Waffle with Creamery',
      category: 'Velvet Treat',
      price: '₹219',
      tag: 'Special',
      image: 'https://images.unsplash.com/photo-1588785392665-f6d4a541417d?auto=format&fit=crop&w=800&q=80',
      description: 'Crispy crimson waffle with cocoa undertones and rich creamery scoop.',
    },
    {
      title: 'Cheese Blast Burger & Fries',
      category: 'Savory Cravings',
      price: '₹149',
      tag: 'Molten Cheese',
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
      description: 'Golden fried patty with molten hot cheese explosion and peri peri fries.',
    },
    {
      title: 'Sitaphal & Jackfruit Creamery',
      category: 'Exotic Creameries',
      price: '₹109',
      tag: 'Seasonal',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80',
      description: 'Authentic custard apple pulp churned into fresh waffle bowl.',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#F4E5D2]/30 relative overflow-hidden border-b border-[#EADBCC]">
      {/* Decorative floating accent */}
      <div className="absolute top-12 left-8 pointer-events-none opacity-40">
        <StrawberryIcon className="w-12 h-12" />
      </div>
      <div className="absolute bottom-10 right-12 pointer-events-none opacity-40">
        <SparkleDoodle className="w-8 h-8 text-[#B8753A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF8] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#EADBCC]">
              <Sparkles className="w-3.5 h-3.5 text-[#E86F78]" />
              Sweet Moments Carousel
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight">
              A little happiness on a plate.
            </h2>
            <p className="text-[#3A2118]/70 text-base mt-2">
              Swipe or scroll horizontally through our most celebrated dessert creations.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-[#FFFDF8] border border-[#D4B89A] text-[#3A2118] hover:bg-[#3A2118] hover:text-[#FFFDF8] transition-colors shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-[#FFFDF8] border border-[#D4B89A] text-[#3A2118] hover:bg-[#3A2118] hover:text-[#FFFDF8] transition-colors shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Track with Overlapping Oversized Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-8 lg:px-12 py-6 no-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {showcaseItems.map((item, idx) => (
          <div
            key={item.title}
            className="flex-none w-[290px] sm:w-[350px] snap-center group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#FFFDF8] border border-[#F4E5D2] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Image Container with organic shape */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/60 via-transparent to-transparent opacity-80" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-[#3A2118]/85 backdrop-blur-sm text-[#FFFDF8] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                  {item.tag}
                </div>

                {/* Price pill */}
                <div className="absolute bottom-4 right-4 bg-[#FFFDF8] text-[#3A2118] font-bold text-sm px-3 py-1 rounded-full shadow-md">
                  {item.price}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#B8753A]">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-xl font-bold text-[#3A2118] mt-1 mb-2 group-hover:text-[#B8753A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A2118]/75 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
