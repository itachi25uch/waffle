import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const addressQuery = encodeURIComponent(
    'Creamy Waffles, Usha Mullapudi Rd, Prakasham Panthulu Nagar, Rodamestri Nagar, Hyderabad, Telangana 500117'
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  return (
    <section id="location" className="py-24 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E5D2] text-[#B8753A] text-xs font-bold uppercase tracking-widest mb-4 border border-[#EADBCC]">
              <MapPin className="w-3.5 h-3.5 text-[#E86F78]" />
              Visit Creamy Waffles
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#3A2118] tracking-tight mb-4">
              Come say hello.
            </h2>

            <p className="text-[#3A2118]/70 text-base sm:text-lg mb-8">
              Step inside for freshly prepared waffles, ice-cold thick shakes, and warm café vibes right in Rodamestri Nagar, Hyderabad.
            </p>

            {/* Address & Contact Details Card */}
            <div className="w-full bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 border border-[#F4E5D2] shadow-sm mb-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F4E5D2] flex items-center justify-center text-[#B8753A] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#3A2118]">
                    Creamy Waffles
                  </h3>
                  <p className="text-sm text-[#3A2118]/80 mt-1 leading-relaxed">
                    Usha Mullapudi Rd, Prakasham Panthulu Nagar, <br />
                    Rodamestri Nagar, Hyderabad, <br />
                    Telangana 500117
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-[#F4E5D2]">
                <div className="w-10 h-10 rounded-2xl bg-[#F4E5D2] flex items-center justify-center text-[#B8753A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8753A]">
                    Phone / Orders
                  </h4>
                  <a
                    href="tel:09949550666"
                    className="font-serif-display text-2xl font-bold text-[#3A2118] hover:text-[#B8753A] transition-colors"
                  >
                    099495 50666
                  </a>
                  <p className="text-xs text-[#3A2118]/60 mt-0.5">
                    Available for Dine-in queries, Takeaway & Home Delivery orders
                  </p>
                </div>
              </div>

              {/* Opening Information Clean Café Card */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F4E5D2]">
                <div className="w-10 h-10 rounded-2xl bg-[#FEE8E9] flex items-center justify-center text-[#E86F78] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#E86F78]">
                    Daily Hours
                  </h4>
                  <p className="text-base font-bold text-[#3A2118]">
                    Open from 10 AM
                  </p>
                  <p className="text-xs text-[#3A2118]/60">
                    Serving hot waffles and cold scoops 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3A2118] text-[#FFFDF8] hover:bg-[#5C3322] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4 text-[#E86F78]" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href="tel:09949550666"
                id="call-now-location-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F4E5D2] text-[#3A2118] hover:bg-[#EBD6BE] border border-[#D4B89A] font-bold text-xs uppercase tracking-wider shadow-xs hover:shadow transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#B8753A]" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF8] bg-[#FFFDF8]">
              {/* Google Maps Iframe Embed with fallback */}
              <div className="w-full h-[440px] sm:h-[480px] bg-[#F4E5D2]/40 relative">
                <iframe
                  title="Creamy Waffles Location Map"
                  src={`https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer"
                />

                {/* Floating Map Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#FFFDF8]/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-[#F4E5D2] max-w-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3A2118]">
                    <span className="w-2 h-2 rounded-full bg-[#E86F78] animate-ping" />
                    <span>Creamy Waffles • Hyderabad</span>
                  </div>
                  <p className="text-[11px] text-[#3A2118]/70 mt-1">
                    Usha Mullapudi Rd, Prakasham Panthulu Nagar
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B8753A] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
