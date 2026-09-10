import React from 'react';
import { MapPin, Phone, ArrowUpRight, CheckCircle, Car, Shield, ShoppingBag, Layers } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function StoreExperience() {
  const floors = [
    {
      level: 'Floor 2',
      name: 'Ride-Ons & Big Toys Showroom',
      desc: 'Rechargeable electric battery ride-on cars, motorbikes, trikes, balance bicycles, and large indoor toys.'
    },
    {
      level: 'Floor 1',
      name: 'Festive, Party & Fashion Apparel',
      desc: 'Party dresses, birthday frocks, traditional kurtas, boys suits, and special celebration attire.'
    },
    {
      level: 'Ground Floor',
      name: 'Infant Care, Daily Wear & Footwear',
      desc: 'Mee Mee baby essentials, daily cotton garments, footwear racks, socks, and in-store trial room.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Editorial Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D97706] font-bold">
              The Physical Experience
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-tight">
            COME SEE IT <br />
            <span className="italic font-normal text-stone-600">FOR</span> YOURSELF.
          </h2>

          <div className="mt-4 p-4 sm:p-5 bg-[#F4EFEA] border-l-4 border-[#1C1917] rounded-r-md">
            <p className="font-serif text-lg sm:text-xl text-[#1C1917] italic font-semibold">
              "There's something different about seeing it all in person."
            </p>
            <p className="mt-2 text-sm sm:text-base text-stone-700 font-serif">
              Browse. Compare. Pick something they love.
            </p>
          </div>
        </div>

        {/* Big Dual-Photo & Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Real Interior & Entrance Photos (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#D5CEBF] shadow-lg bg-stone-900 group">
              <img
                src="/images/interior-full.webp"
                alt="Kirnav Korner vibrant retail interior"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="px-2.5 py-1 bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider rounded inline-block mb-1">
                  Inside Kirnav Korner
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  Spacious Aisles, Thoughtful Displays & Welcoming Warmth
                </p>
                <p className="text-xs text-stone-300">
                  Children love exploring our aisles; parents love finding everything in one visit.
                </p>
              </div>
            </div>

            {/* In-Store Conveniences Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#1C1917]">
              <div className="p-3 bg-white border border-[#E8E2D8] rounded flex items-center gap-2.5">
                <Car className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-medium">Customer Parking In Front</span>
              </div>
              <div className="p-3 bg-white border border-[#E8E2D8] rounded flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-medium">In-Store Trial Room</span>
              </div>
              <div className="p-3 bg-white border border-[#E8E2D8] rounded flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="font-medium">UPI, Cards & Cash</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Floor Directory & Direct Contact Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Multi-Floor Directory */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#E0D8CB] shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#D97706]" />
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Multi-Floor Directory
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  RG Baruah Rd Store
                </span>
              </div>

              <div className="space-y-4">
                {floors.map((fl, i) => (
                  <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-[#FAF8F5] transition-colors">
                    <span className="w-16 shrink-0 font-serif text-xs font-bold text-[#D97706] pt-0.5">
                      {fl.level}
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#1C1917]">
                        {fl.name}
                      </h4>
                      <p className="mt-0.5 text-xs text-stone-500 font-sans leading-relaxed">
                        {fl.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Callout Box with Exact Address from Prompt */}
            <div className="bg-[#1C1917] text-white p-6 sm:p-7 rounded-xl space-y-5">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E59819] mb-1">
                  Store Address
                </p>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  KIRNAV KORNER
                </h3>
                <p className="font-serif text-xs text-amber-300 font-normal">
                  কিৰ্ণভ কৰ্ণাৰ
                </p>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  RG Baruah Rd, AIDC,<br />
                  Ambikagirinagar, Guwahati, Assam 781024
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  Landmark: Near AIDC, Zoo Road • Customer parking available
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#D97706] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#B45309] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-stone-700 transition-colors border border-stone-700"
                >
                  <Phone className="w-4 h-4 text-[#E59819]" />
                  <span>Call The Store</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
