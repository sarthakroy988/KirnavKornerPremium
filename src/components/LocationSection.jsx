import React from 'react';
import { MapPin, Phone, Clock, Navigation, Car, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { STORE_INFO, getStoreStatus } from '../utils/storeStatus';

export default function LocationSection({ onOpenEnquiry }) {
  const status = getStoreStatus();

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D97706] font-bold">
              Find Us In Person
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-tight">
            RIGHT HERE IN <br />
            <span className="text-[#D97706]">GUWAHATI.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
            Conveniently situated along RG Baruah Road (Zoo Road) near AIDC. Come visit with the whole family.
          </p>
        </div>

        {/* Location Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Action Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Contact Block */}
            <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#E0D8CB] shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">
                  Store Location
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
                  Kirnav Korner
                </h3>
                <p className="font-serif text-sm text-[#D97706] font-normal">
                  কিৰ্ণভ কৰ্ণাৰ
                </p>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3 text-sm text-stone-700">
                <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1917]">
                    RG Baruah Rd, AIDC,
                  </p>
                  <p>Ambikagirinagar,</p>
                  <p>Guwahati, Assam 781024</p>
                  <p className="text-xs text-stone-500 mt-1">
                    Landmark: Plot 208, Zoo Road corridor, near AIDC
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm text-stone-700 pt-2 border-t border-stone-100">
                <Phone className="w-5 h-5 text-[#D97706] shrink-0" />
                <div>
                  <p className="text-xs text-stone-500">Call Directly</p>
                  <a
                    href={`tel:${STORE_INFO.phoneClean}`}
                    className="font-bold text-[#1C1917] hover:text-[#D97706] transition-colors"
                  >
                    +91 99543 61338
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3 text-sm text-stone-700 pt-2 border-t border-stone-100">
                <Clock className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#1C1917]">Open Everyday</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${status.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {status.statusText}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5">
                    10:00 AM – 8:00 PM (Closes 8 PM)
                  </p>
                </div>
              </div>

              {/* Parking Feature */}
              <div className="flex items-start gap-3 text-sm text-stone-700 pt-2 border-t border-stone-100">
                <Car className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1917]">Customer Parking</p>
                  <p className="text-xs text-stone-500">
                    Dedicated front parking for Kirnav Korner visitors
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#D97706] transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#E59819]" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${STORE_INFO.phoneClean}`}
                    className="flex items-center justify-center gap-1.5 py-3 px-3 border border-[#1C1917] text-[#1C1917] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#F4EFEA] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Call Store</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Driving Directions & Parking')}
                    className="flex items-center justify-center gap-1.5 py-3 px-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame & Real Facade Visual (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Map Card */}
            <div className="rounded-xl overflow-hidden border border-[#D5CEBF] shadow-md bg-stone-100 relative">
              <iframe
                title="Kirnav Korner Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.457814766861!2d91.77443187600863!3d26.173874391118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591e6dc84e73%3A0xe5d7e5d862908f51!2sRG%20Baruah%20Rd%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-80 sm:h-96 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-lg border border-stone-200 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <div>
                    <p className="text-xs font-bold text-[#1C1917]">Easy Access on Zoo Road</p>
                    <p className="text-[10px] text-stone-500">Accessible from Ganeshguri, Chandmari & Zoo Tiniali</p>
                  </div>
                </div>

                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#1C1917] text-white text-[11px] font-semibold uppercase rounded hover:bg-[#D97706] transition-colors shrink-0"
                >
                  Navigate
                </a>
              </div>
            </div>

            {/* Quick Distance Guide */}
            <div className="p-4 bg-white rounded-lg border border-[#E8E2D8] text-xs text-stone-600 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div>
                <p className="font-bold text-[#1C1917]">Zoo Tiniali</p>
                <p className="text-[11px] text-stone-400">~3 mins drive</p>
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">Ganeshguri</p>
                <p className="text-[11px] text-stone-400">~6 mins drive</p>
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">Chandmari</p>
                <p className="text-[11px] text-stone-400">~8 mins drive</p>
              </div>
              <div>
                <p className="font-bold text-[#1C1917]">GS Road</p>
                <p className="text-[11px] text-stone-400">~7 mins drive</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
