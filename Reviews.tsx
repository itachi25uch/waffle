import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, GOOGLE_RATING_STATS } from '../data/reviewsData';

export const Reviews: React.FC = () => {
  const reviewThemes = [
    { label: 'Waffle Taste & Crunch', count: '4.8 ★' },
    { label: 'Thick Shakes & Biscoff', count: '4.9 ★' },
    { label: '29 Creameries Flavors', count: '4.7 ★' },
    { label: 'Quantity & Value for Money', count: '4.8 ★' },
    { label: 'Cozy Café Ambience', count: '4.6 ★' },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#F4E5D2]/30 relative overflow-hidden border-y border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#EADBCC] shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Google Verified Ratings
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            Loved by dessert lovers.
          </h2>

          {/* Large Hero Rating Block */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#FFFDF8] px-8 py-5 rounded-3xl shadow-sm border border-[#F4E5D2] mt-4">
            <div className="flex items-center gap-3">
              <span className="font-serif-display text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
                ⭐ 4.6
              </span>
              <div className="text-left">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#3A2118]/70 font-semibold mt-0.5">
                  Based on 224 Google reviews
                </p>
              </div>
            </div>
            <div className="h-8 w-px bg-[#EADBCC] hidden sm:block" />
            <div className="text-xs font-semibold text-[#B8753A] uppercase tracking-wider">
              Usha Mullapudi Rd, Hyderabad
            </div>
          </div>
        </div>

        {/* Highlighted Themes Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {reviewThemes.map((theme) => (
            <div
              key={theme.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF8] border border-[#F4E5D2] text-xs font-semibold text-[#3A2118] shadow-2xs"
            >
              <ThumbsUp className="w-3.5 h-3.5 text-[#E86F78]" />
              <span>{theme.label}</span>
              <span className="text-[#B8753A] font-bold">({theme.count})</span>
            </div>
          ))}
        </div>

        {/* 5 Testimonial Cards from Authentic Customer Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 rounded-3xl bg-[#FFFDF8] border border-[#F4E5D2] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Theme badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8753A] bg-[#F4E5D2]/60 px-2.5 py-1 rounded-full">
                    {review.theme}
                  </span>
                </div>

                {/* Highlight Quote */}
                <div className="font-serif-display text-base font-bold text-[#3A2118] mb-3 leading-snug">
                  "{review.highlight}"
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-[#3A2118]/75 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-[#F4E5D2] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#3A2118]">{review.author}</h4>
                  <p className="text-[10px] text-[#3A2118]/50">{review.date}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
