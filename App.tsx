/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { OnyxCraftSection } from './components/OnyxCraftSection';
import { DessertShowcase } from './components/DessertShowcase';
import { SignatureDesserts } from './components/SignatureDesserts';
import { MenuSection } from './components/MenuSection';
import { DrinksSection } from './components/DrinksSection';
import { WhyCreamyWaffles } from './components/WhyCreamyWaffles';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyNav } from './components/MobileStickyNav';
import { MenuLightbox } from './components/MenuLightbox';

export default function App() {
  const [isMenuLightboxOpen, setIsMenuLightboxOpen] = useState(false);

  const handleOpenMenuViewer = () => {
    setIsMenuLightboxOpen(true);
  };

  const handleCloseMenuViewer = () => {
    setIsMenuLightboxOpen(false);
  };

  const handleExploreMenu = () => {
    const menuEl = document.querySelector('#menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#3A2118] font-sans antialiased selection:bg-[#F4E5D2] selection:text-[#3A2118] relative">
      {/* Top Fixed / Transparent Navbar */}
      <Navbar onOpenMenuViewer={handleOpenMenuViewer} />

      <main>
        {/* Hero Section with 3D Parallax & Floating Treats */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenMenuViewer={handleOpenMenuViewer}
        />

        {/* Section 2: Onyx Coffee Lab-Style Marquee & Tasting Laboratory */}
        <MarqueeTicker variant="dark" />
        <OnyxCraftSection />
        <MarqueeTicker variant="light" />

        {/* Section 3: Horizontal Dessert Carousel */}
        <DessertShowcase />

        {/* Section 4: Signature Belgian Waffles & Choice of Creameries */}
        <SignatureDesserts onExploreMenu={handleExploreMenu} />

        {/* Section 5: Filterable Authentic Menu with Categories & Search */}
        <MenuSection onOpenMenuViewer={handleOpenMenuViewer} />

        {/* Section 6: Drinks Section (Thick Shakes & Mocktails) */}
        <DrinksSection />

        {/* Section 7: Why Creamy Waffles Illustrated Features */}
        <WhyCreamyWaffles />

        {/* Section 8: Visual Masonry Gallery */}
        <Gallery />

        {/* Section 9: 4.6-Star Google Reviews */}
        <Reviews />

        {/* Section 10: Location, Maps, Hours & Contact */}
        <LocationSection />

        {/* Section 11: Final Call to Action */}
        <FinalCTA onExploreMenu={handleExploreMenu} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileStickyNav />

      {/* Full-Screen Menu Lightbox Viewer (Original 7-page menu sheets) */}
      <MenuLightbox
        isOpen={isMenuLightboxOpen}
        onClose={handleCloseMenuViewer}
      />
    </div>
  );
}

