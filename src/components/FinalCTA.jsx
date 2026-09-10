import React from 'react';
import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function FinalCTA({ onOpenEnquiry }) {
  return (
    <section className="py-20 sm:py-28 bg-[#1C1917] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Glow & Geometry */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E59819]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-[11px] font-serif uppercase tracking-[0.2em] text-[#E59819]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E59819] animate-ping" />
          <span>RG Baruah Road • Guwahati</span>
        </div>

        {/* Memorable Editorial Headline as specified */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
          COME FIND <br />
          <span className="italic font-normal text-amber-200">YOUR LITTLE</span> <br />
          CORNER.
        </h2>

        {/* Supporting Text */}
        <div className="max-w-xl mx-auto space-y-2">
          <p className="font-serif text-xl sm:text-2xl text-stone-300 italic">
            Everything little ones love.
          </p>
          <p className="text-sm sm:text-base text-stone-400 font-sans">
            Right here in Guwahati.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B45309] transition-all duration-200 shadow-lg group"
          >
            <MapPin className="w-4 h-4" />
            <span>Visit Store</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Store Visit & Selection')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-stone-600 text-stone-200 text-xs font-bold uppercase tracking-wider rounded hover:bg-stone-800 hover:text-white transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Real Address Stamp */}
        <p className="text-xs text-stone-500 pt-6">
          Kirnav Korner • Plot 208, RG Baruah Rd, AIDC, Ambikagirinagar, Guwahati, Assam 781024
        </p>

      </div>
    </section>
  );
}
