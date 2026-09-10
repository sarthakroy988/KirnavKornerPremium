import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, Star, ArrowUp } from 'lucide-react';
import { STORE_INFO, getStoreStatus } from '../utils/storeStatus';

export default function Footer({ onOpenEnquiry }) {
  const status = getStoreStatus();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#FAF8F5] pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                KIRNAV KORNER
              </span>
              <span className="font-serif text-sm text-[#E59819] font-normal">
                কিৰ্ণভ কৰ্ণাৰ
              </span>
            </div>
            
            <p className="text-xs uppercase tracking-widest text-[#D97706] font-semibold">
              Children's Store • Guwahati, Assam
            </p>

            <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
              Everything a child needs, in one little corner. From infant wear and Mee Mee care to electric ride-on cars, shoes, and toys at sensible Guwahati prices.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-stone-300">
              <span className="flex items-center gap-1 text-[#F59E0B]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold">4.7 / 5</span>
              </span>
              <span className="text-stone-600">•</span>
              <span>33 Google Reviews</span>
              <span className="text-stone-600">•</span>
              <span className="text-emerald-400">{status.statusText}</span>
            </div>
          </div>

          {/* Quick Links Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  Discover Departments
                </a>
              </li>
              <li>
                <a href="#abundance" className="hover:text-white transition-colors">
                  The Store & Floors
                </a>
              </li>
              <li>
                <a href="#finds" className="hover:text-white transition-colors">
                  Kirnav Finds Lookbook
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Visit Us & Parking
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Store Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Visit or Contact
            </p>
            
            <p className="text-xs text-stone-400 leading-relaxed">
              RG Baruah Rd, AIDC, Ambikagirinagar,<br />
              Guwahati, Assam 781024
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E59819]" />
                <span>Call: +91 99543 61338</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Store Contact & Visit')}
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors cursor-pointer text-left"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 99543 61338</span>
              </button>

              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Directions: RG Baruah Rd (Zoo Road)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line & Philosophy Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="font-serif italic text-stone-400 text-center sm:text-left">
            "Made for little ones. Chosen by parents."
          </p>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Kirnav Korner. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
