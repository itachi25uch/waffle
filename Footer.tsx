import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { WaffleIcon } from './illustrations/FoodIllustrations';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3A2118] text-[#FFFDF8] pt-16 pb-28 sm:pb-16 border-t border-[#5C3322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5C3322]">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4E5D2] flex items-center justify-center p-1.5 shadow-sm">
                <WaffleIcon className="w-full h-full" />
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-[#FFFDF8]">
                CREAMY WAFFLES
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#E8B068] font-bold mb-3">
              Desserts • Waffles • Shakes • More
            </p>
            <p className="text-sm text-[#FFFDF8]/70 max-w-sm leading-relaxed mb-4">
              A modern dessert café serving crispy golden Belgian waffles, 29 artisanal creameries, loaded thick shakes, burgers, and savory cravings in Hyderabad.
            </p>
            <div className="inline-flex items-center gap-2 text-xs bg-[#5C3322] px-3 py-1.5 rounded-full text-[#E8B068]">
              <span>⭐ 4.6 Rating (224 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E8B068] font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFFDF8]/80 font-medium">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleScrollTo(e, '#menu')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Menu & Categories
                </a>
              </li>
              <li>
                <a
                  href="#signature"
                  onClick={(e) => handleScrollTo(e, '#signature')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Signature Desserts
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, '#gallery')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Visual Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleScrollTo(e, '#reviews')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleScrollTo(e, '#location')}
                  className="hover:text-[#E8B068] transition-colors"
                >
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E8B068] font-bold mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3.5 text-sm text-[#FFFDF8]/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E86F78] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:09949550666"
                    className="font-bold text-[#FFFDF8] hover:text-[#E8B068] text-base"
                  >
                    099495 50666
                  </a>
                  <p className="text-xs text-[#FFFDF8]/60">Call for takeaway & delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86F78] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  Usha Mullapudi Road, Prakasham Panthulu Nagar, <br />
                  Rodamestri Nagar, Hyderabad, Telangana 500117
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E86F78] shrink-0 mt-0.5" />
                <p className="text-xs">
                  <span className="font-semibold text-white">Daily:</span> Open from 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Craftsmanship */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFDF8]/50 gap-4">
          <p>© {new Date().getFullYear()} Creamy Waffles. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-[#E8B068]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#E86F78] text-[#E86F78]" />
            <span>for Hyderabad dessert lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
