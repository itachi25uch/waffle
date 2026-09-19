import React from 'react';
import { motion } from 'motion/react';
import { WaffleIcon, StrawberryIcon, ShakeIcon, IceCreamCupIcon } from './illustrations/FoodIllustrations';

export const WhyCreamyWaffles: React.FC = () => {
  const features = [
    {
      title: 'Freshly Made',
      description: 'Every waffle is griddled fresh to order so it reaches your plate hot, fragrant, and crisp.',
      icon: <WaffleIcon className="w-12 h-12" />,
      bg: 'bg-[#FCECD8]',
      accentColor: 'border-[#B8753A]/30',
      badge: 'Baking Fresh',
    },
    {
      title: 'Sweet Variety',
      description: 'Belgian waffles, 29 artisanal creameries, thick shakes, loaded burgers, and cheesy fries.',
      icon: <IceCreamCupIcon className="w-12 h-12" />,
      bg: 'bg-[#FEE8E9]',
      accentColor: 'border-[#E86F78]/30',
      badge: '29 Creameries',
    },
    {
      title: 'Perfect for Sharing',
      description: 'A vibrant, cozy dessert café designed for friends, dates, families, and sweet group cravings.',
      icon: <StrawberryIcon className="w-12 h-12" />,
      bg: 'bg-[#FFF2E2]',
      accentColor: 'border-[#B8753A]/30',
      badge: 'Sweet Moments',
    },
    {
      title: 'Dine-in • Takeaway • Delivery',
      description: 'Relax in our Hyderabad cafe, grab a takeaway waffle box, or call for home delivery.',
      icon: <ShakeIcon className="w-12 h-12" />,
      bg: 'bg-[#F4E5D2]',
      accentColor: 'border-[#3A2118]/20',
      badge: 'All 3 Services',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#FFF8F0] relative overflow-hidden border-t border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-handwriting text-2xl text-[#E86F78] font-bold block mb-1">
            Made with love
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            Why you'll love Creamy Waffles
          </h2>
          <p className="text-[#3A2118]/70 text-base sm:text-lg">
            We believe that extraordinary desserts start with honest ingredients, artisanal craft, and genuine hospitality.
          </p>
        </div>

        {/* 4 Illustrated Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`p-7 rounded-3xl bg-[#FFFDF8] border ${feature.accentColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Animated SVG Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center p-2.5 shadow-inner group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8753A] bg-[#F4E5D2]/60 px-2.5 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl font-bold text-[#3A2118] mb-3 group-hover:text-[#B8753A] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#3A2118]/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4E5D2]/50 flex items-center gap-1.5 text-xs font-semibold text-[#E86F78]">
                <span>Creamy Waffles Promise</span>
                <span>✨</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
