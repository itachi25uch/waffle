import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { WaffleIcon } from './illustrations/FoodIllustrations';

interface NavbarProps {
  onOpenMenuViewer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenuViewer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'The Craft', href: '#craft' },
    { label: 'Menu', href: '#menu' },
    { label: 'Signature', href: '#signature' },
    { label: 'Drinks', href: '#drinks' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#F4E5D2] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            id="navbar-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F4E5D2] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <WaffleIcon className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-[#3A2118]">
                  CREAMY WAFFLES
                </span>
                <span className="text-[#E86F78] text-sm">★</span>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-[#B8753A] font-medium hidden sm:block">
                Desserts • Waffles • Shakes • Hyderabad
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-[#3A2118]/80 hover:text-[#B8753A] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E86F78] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenMenuViewer}
              id="navbar-view-menu-btn"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#3A2118] bg-[#F4E5D2]/70 hover:bg-[#F4E5D2] border border-[#D4B89A] rounded-full transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8753A]" />
              Full Menu (7 pgs)
            </button>

            <a
              href="tel:09949550666"
              id="navbar-call-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-[#FFFDF8] bg-[#3A2118] hover:bg-[#5C3322] rounded-full shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E86F78]" />
              <span>ORDER / CALL</span>
            </a>
          </div>

          {/* Mobile Hamburger toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:09949550666"
              className="p-2 rounded-full bg-[#3A2118] text-[#FFFDF8]"
              aria-label="Call Creamy Waffles"
            >
              <Phone className="w-4 h-4 text-[#E86F78]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#F4E5D2] text-[#3A2118] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FFF8F0] border-b border-[#F4E5D2] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#F4E5D2]">
              <span className="font-handwriting text-2xl text-[#B8753A]">Sweet moments await!</span>
              <span className="text-xs bg-[#E86F78]/15 text-[#B73F48] font-bold px-2.5 py-1 rounded-full">
                4.6 ⭐ (224 Reviews)
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-semibold text-[#3A2118] py-2 hover:text-[#B8753A] border-b border-[#F4E5D2]/40"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenuViewer();
              }}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-[#F4E5D2] text-[#3A2118] font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#B8753A]" />
              View Full Original Menu (7 Pages)
            </button>
            <a
              href="tel:09949550666"
              className="w-full py-3.5 px-4 rounded-xl bg-[#3A2118] text-[#FFFDF8] font-bold text-center text-sm flex items-center justify-center gap-2 shadow"
            >
              <Phone className="w-4 h-4 text-[#E86F78]" />
              Call Now: 099495 50666
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
