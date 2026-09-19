import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem } from '../types';
import { Instagram, X, Sparkles, Eye } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-3 border border-[#EADBCC]">
            <Instagram className="w-3.5 h-3.5 text-[#E86F78]" />
            Café Moments & Food Craft
          </div>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
            Sweet moments at Creamy Waffles
          </h2>
          <p className="text-[#3A2118]/70 text-base sm:text-lg">
            A visual peek into our freshly pressed waffles, handcrafted ice creams, and loaded savory bites.
          </p>
        </div>

        {/* Asymmetric Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            // Asymmetric heights for an editorial feel
            const isFeatured = idx === 0 || idx === 4;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1 h-96' : 'h-80'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2118]/85 via-[#3A2118]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Label */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFFDF8] bg-[#E86F78] px-3 py-1 rounded-full shadow-xs">
                      Creamy Waffles
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Caption */}
                  <div>
                    <span className="text-xs text-[#E8B068] font-bold uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif-display text-xl font-bold text-[#FFFDF8] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Gallery Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0E0A]/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FFFDF8] rounded-3xl overflow-hidden shadow-2xl border border-[#F4E5D2]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#3A2118]/70 hover:bg-[#3A2118] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover max-h-[65vh]"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8753A]">
                  {selectedPhoto.category} • Creamy Waffles Hyderabad
                </span>
                <span className="text-xs bg-[#F4E5D2] text-[#3A2118] font-semibold px-2.5 py-1 rounded-full">
                  Original Café Recipe
                </span>
              </div>
              <h3 className="font-serif-display text-2xl font-bold text-[#3A2118] mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-[#3A2118]/80 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
