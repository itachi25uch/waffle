import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Maximize2, Sparkles, BookOpen } from 'lucide-react';
import { ORIGINAL_MENU_PAGES } from '../data/menuData';

interface MenuLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const MenuLightbox: React.FC<MenuLightboxProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentPage(initialPage);
    setZoomLevel(1);
  }, [initialPage, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage]);

  if (!isOpen) return null;

  const totalPages = ORIGINAL_MENU_PAGES.length;

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
    setZoomLevel(1);
  };

  const activePageData = ORIGINAL_MENU_PAGES.find((p) => p.id === currentPage) || ORIGINAL_MENU_PAGES[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0E0A]/90 backdrop-blur-md p-2 sm:p-4 md:p-6 transition-all duration-300"
      id="menu-lightbox-modal"
    >
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#FFF8F0] rounded-3xl overflow-hidden shadow-2xl border border-[#D4B89A]">
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#3A2118] text-[#FFFDF8] flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#5C3322] flex items-center justify-center text-sm font-bold">
              📖
            </div>
            <div>
              <h3 className="font-serif-display text-base sm:text-lg font-bold leading-none">
                Original Restaurant Menu
              </h3>
              <p className="text-[11px] text-[#E8B068] mt-0.5">
                Page {currentPage} of {totalPages} • {activePageData.title}
              </p>
            </div>
          </div>

          {/* Zoom and Navigation Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.0))}
              className="p-1.5 sm:p-2 rounded-lg bg-[#5C3322] hover:bg-[#7A4E39] text-[#FFFDF8] transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
              className="p-1.5 sm:p-2 rounded-lg bg-[#5C3322] hover:bg-[#7A4E39] text-[#FFFDF8] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 sm:p-2 rounded-lg bg-[#5C3322] hover:bg-[#7A4E39] text-[#FFFDF8] transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="ml-2 p-2 rounded-full bg-[#E86F78] hover:bg-[#D45963] text-white transition-colors"
              title="Close Menu (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Viewer Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#2B1810]/15 relative">
          {/* Floating Left / Right Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#3A2118]/80 hover:bg-[#3A2118] text-white shadow-xl backdrop-blur-xs transition-all hover:scale-105"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#3A2118]/80 hover:bg-[#3A2118] text-white shadow-xl backdrop-blur-xs transition-all hover:scale-105"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Authentic Menu Page Representation Container */}
          <div
            className="transition-transform duration-200 origin-center max-w-2xl w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Spiral Bound Restaurant Menu Sheet Graphic */}
            <div className="relative bg-[#1F2926] text-[#FFFDF8] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#3A4540] p-6 sm:p-8 font-sans">
              {/* Spiral binding rings simulation on left border */}
              <div className="absolute left-1 top-4 bottom-4 w-4 flex flex-col justify-between pointer-events-none opacity-40">
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="w-3 h-2 rounded-full bg-white border border-gray-400" />
                ))}
              </div>

              {/* Header Title Banner */}
              <div className="text-center mb-6 pl-4">
                <div className="inline-block bg-[#FFFDF8] text-[#1F2926] px-8 py-2 rounded-xl shadow-md border-b-4 border-[#B8753A]">
                  <h4 className="font-serif-display text-xl sm:text-2xl font-black uppercase tracking-wider">
                    {activePageData.title}
                  </h4>
                </div>
                <p className="text-xs text-[#F4E5D2]/70 mt-2 font-medium">
                  {activePageData.subtitle}
                </p>
              </div>

              {/* Rendered Menu Sheet Sections */}
              <div className="pl-4 space-y-4">
                <div className="bg-[#2B3834] p-4 rounded-xl border border-[#3E4F49]">
                  <h5 className="font-bold text-xs uppercase tracking-widest text-[#E8B068] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Items on this Sheet:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                    {activePageData.sections.map((sec, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-[#1F2926]/80 p-2 rounded-lg">
                        <span className="text-[#E86F78]">✦</span>
                        <span className="font-medium">{sec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#2B3834] p-4 rounded-xl border border-[#3E4F49]">
                  <h5 className="font-bold text-xs uppercase tracking-widest text-[#E86F78] mb-1">
                    Special Notes & Highlights:
                  </h5>
                  <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                    {activePageData.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Packaging & Pricing Notice */}
                <div className="text-center pt-2">
                  <span className="inline-block text-[11px] font-bold tracking-wider text-amber-400 bg-black/40 px-4 py-1 rounded-full border border-amber-500/30">
                    * PACKAGING RS.10/- EXTRA WHERE APPLICABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="px-4 py-3 bg-[#F4E5D2] border-t border-[#D4B89A] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 mx-auto">
            {ORIGINAL_MENU_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  setCurrentPage(page.id);
                  setZoomLevel(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  currentPage === page.id
                    ? 'bg-[#3A2118] text-[#FFFDF8] shadow-sm scale-105'
                    : 'bg-[#FFFDF8] text-[#3A2118] hover:bg-[#EBD6BE]'
                }`}
              >
                Pg {page.id}: {page.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
