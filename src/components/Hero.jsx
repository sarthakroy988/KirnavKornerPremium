import React from 'react';
import { MapPin, ArrowUpRight, Compass, ShieldCheck, Clock, Store, Sparkles } from 'lucide-react';
import { STORE_INFO, getStoreStatus } from '../utils/storeStatus';

export default function Hero({ onOpenEnquiry }) {
  const status = getStoreStatus();

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-3 pb-12 sm:pt-6 sm:pb-20 lg:pt-10 lg:pb-24 border-b border-[#E8E2D8]">
      {/* Decorative background grid subtle accent */}
      <div className="absolute inset-0 bg-cream-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Eyebrow Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 sm:pb-6 border-b border-[#E7E0D3] mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-[#1C1917] text-[#FAF8F5] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E59819] animate-pulse" />
              GUWAHATI • ASSAM
            </span>
            <span className="text-[11px] sm:text-xs text-stone-500 font-medium tracking-wide">
              RG Baruah Rd, Ambikagirinagar
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#1C1917]">
            <span className="text-[#D97706] font-serif text-xs sm:text-sm">4.7 ★</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-600">33 Google Reviews</span>
            <span className="text-stone-300 hidden xs:inline">|</span>
            <span className="text-emerald-700 font-medium hidden xs:inline">{status.fullBadge}</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">
            <div className="space-y-2.5">
              <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.16em] text-[#D97706] uppercase font-bold">
                A Guwahati Family Shopping Tradition
              </p>
              
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1C1917] leading-[1.08] break-normal">
                Everything <br />
                <span className="italic font-normal text-stone-700">little ones</span> love. <br />
                <span className="text-[#D97706]">All in one</span> little corner.
              </h1>
            </div>

            {/* Mobile-Only Real Store Image Feature (Impactful & Immediate on Small Screens) */}
            <div className="lg:hidden rounded-lg overflow-hidden border border-[#D5CEBF] shadow-md bg-[#1C1917] relative">
              <img
                src="/images/storefront-full.webp"
                alt="Kirnav Korner Multi-story Storefront in Guwahati at Night"
                className="w-full h-56 object-cover object-center"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E59819]">
                    Real 3-Floor Storefront
                  </span>
                  <p className="text-xs font-serif font-semibold"> কিৰ্ণভ কৰ্ণাৰ • RG Baruah Rd</p>
                </div>
                <span className="px-2 py-0.5 bg-white/20 backdrop-blur-xs text-white text-[10px] rounded font-medium">
                  {status.statusText}
                </span>
              </div>
            </div>

            {/* Tagline / Subtitle with Positioning Rules */}
            <div className="p-4 sm:p-5 bg-[#F4EFEA] border-l-4 border-[#D97706] rounded-r-md max-w-xl">
              <p className="font-serif text-base sm:text-xl text-[#1C1917] italic font-semibold">
                "Beautiful things. Sensible prices."
              </p>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                From newborn essentials and festive wear to ride-on electric cars, footwear, and games — Kirnav Korner is Guwahati's trusted multi-floor physical department store for children.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1C1917] text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded hover:bg-[#D97706] hover:text-white transition-all duration-200 shadow-md group"
              >
                <MapPin className="w-4 h-4 text-[#E59819] group-hover:text-white transition-colors" />
                <span>Visit The Store</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D5CEBF] text-[#1C1917] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded hover:bg-[#F3EFEA] hover:border-[#1C1917] transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#D97706]" />
                <span>Explore Departments</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Store Hours & Product Availability')}
                className="hidden sm:inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#D97706] border border-[#D97706]/40 rounded hover:bg-[#D97706]/10 cursor-pointer"
              >
                <span>WhatsApp Enquiry</span>
              </button>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 border-t border-[#E8E2D8] text-[11px] sm:text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-2">
                <Store className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>3 Multi-Level Floors</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>Dedicated Parking</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                <span>Open Everyday till 8 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Editorial Store Photography Presentation (5 cols) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Primary Photograph: Real Kirnav Korner Multi-Story Storefront at Night */}
              <div className="relative rounded-lg overflow-hidden border border-[#D5CEBF] shadow-xl bg-[#1C1917]">
                <img
                  src="/images/storefront-full.webp"
                  alt="Kirnav Korner Multi-story Children's Storefront at RG Baruah Road Guwahati"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Storefront Overlay Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#E59819] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider rounded">
                      Real Storefront
                    </span>
                    <span className="text-[11px] font-serif tracking-wide text-amber-200">
                      কিৰ্ণভ কৰ্ণাৰ • Zoo Road, Guwahati
                    </span>
                  </div>
                  <p className="text-xs text-stone-200 font-sans leading-snug">
                    Three spacious floors filled with children's garments, ride-ons, newborn essentials, and toys.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Photo Card: Warm Store Interior & Mascot */}
              <div className="absolute -bottom-8 -left-8 w-60 bg-white p-2.5 rounded-md shadow-2xl border border-[#D5CEBF] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                <div className="relative h-36 overflow-hidden rounded bg-stone-100">
                  <img
                    src="/images/crop-play-dino.webp"
                    alt="Inside Kirnav Korner showing vibrant retail interior and children's toys"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#1C1917]/85 text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                    Step Inside
                  </div>
                </div>
                <div className="p-2 text-left">
                  <p className="font-serif text-xs font-bold text-[#1C1917]">Warm, Energetic Aisles</p>
                  <p className="text-[10px] text-stone-500">Every corner holds a pleasant surprise</p>
                </div>
              </div>

              {/* Floating Real Footwear Badge */}
              <div className="absolute -top-4 -right-4 bg-[#FAF8F5] border border-[#D5CEBF] px-3.5 py-2 rounded-md shadow-lg flex items-center gap-2.5">
                <div className="w-9 h-9 rounded overflow-hidden bg-stone-200 shrink-0 border border-stone-300">
                  <img
                    src="/images/crop-footwear.webp"
                    alt="Children footwear shelf"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-stone-500">Footwear Rack</p>
                  <p className="text-xs font-serif font-bold text-[#1C1917]">Baby to School Steps</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
