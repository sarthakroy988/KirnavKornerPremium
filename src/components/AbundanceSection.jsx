import React from 'react';
import { Sparkles, Compass, Eye, Layers } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function AbundanceSection({ onOpenEnquiry }) {
  return (
    <section id="abundance" className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D8] overflow-hidden relative">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-cream-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E59819]" />
            <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D97706] font-bold">
              The Store Experience
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.1]">
            ONE STORE. <br />
            <span className="text-[#D97706]">A THOUSAND</span> LITTLE THINGS.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-stone-700 font-sans leading-relaxed">
            From everyday essentials to things they never knew they wanted — discover a store made for little ones and the people shopping for them.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
            Walk past the brightly lit windows on RG Baruah Road into three floors packed with cheerful discoveries. No sparse boutique shelves. No empty hype. Just an abundance of practical, delightful options.
          </p>
        </div>

        {/* Asymmetrical Editorial Collage Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Main Large Visual: Warm Interior with Inflatable Mascot & Shelves (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative rounded-xl overflow-hidden border border-[#D5CEBF] shadow-lg bg-stone-900 group">
              <img
                src="/images/interior-full.webp"
                alt="Inside Kirnav Korner retail store with shelves of children apparel, footwear and toys"
                className="w-full h-[400px] sm:h-[520px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Editorial Caption Badge */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 bg-[#E59819] text-[#1C1917] text-[10px] font-bold uppercase tracking-wider rounded">
                    Retail Floor Reality
                  </span>
                  <span className="text-xs text-amber-200 font-serif">
                    Ground Floor • Apparel, Footwear & Fun
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 leading-snug">
                  Dense shelves filled with neatly arranged boxes, bright clothing racks, sock spinners, and our cheerful yellow dinosaur welcoming every family.
                </p>
              </div>

              {/* Floating Live Corner Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-[#1C1917] px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider shadow-md">
                In-Store Trial Room
              </div>
            </div>

            {/* Editorial Quote Card below Main Photo */}
            <div className="p-6 bg-white rounded-lg border border-[#E8E2D8] shadow-xs">
              <p className="font-serif text-base sm:text-lg text-[#1C1917] italic">
                "There is always something interesting around the corner. You come in for baby wipes or school socks, and leave with a smile and a little surprise they love."
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Kirnav Korner • Guwahati, Assam</span>
                <span className="text-[#D97706] font-semibold">Visit RG Baruah Rd</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Mosaic & Highlights (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Mosaic Tile: Ride-on Cars & Tricycles upper window */}
            <div className="relative rounded-lg overflow-hidden border border-[#D5CEBF] shadow-md bg-stone-900 group">
              <img
                src="/images/crop-rideons-cycles.webp"
                alt="Kirnav Korner upper floor showroom with kids ride-on cars, bikes and tricycles"
                className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E59819] block mb-0.5">
                  2nd Floor Showcase
                </span>
                <h3 className="font-serif text-lg font-bold text-white leading-tight">
                  Ride-Ons, Bikes & Tricycles
                </h3>
                <p className="text-[11px] text-stone-300">
                  Electric battery-operated mini cars, scooters & balance cycles
                </p>
              </div>
            </div>

            {/* Split Mosaic Row: Footwear & Clothing Boxes */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Footwear Tile */}
              <div className="relative rounded-lg overflow-hidden border border-[#D5CEBF] bg-white group p-3">
                <div className="h-36 overflow-hidden rounded bg-stone-100 mb-2.5">
                  <img
                    src="/images/crop-footwear.webp"
                    alt="Children footwear shelf at Kirnav Korner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#D97706]">Footwear Row</p>
                <p className="font-serif text-xs font-bold text-[#1C1917]">Baby Booties to School Steps</p>
              </div>

              {/* Clothing / Dress Tile */}
              <div className="relative rounded-lg overflow-hidden border border-[#D5CEBF] bg-white group p-3">
                <div className="h-36 overflow-hidden rounded bg-stone-100 mb-2.5">
                  <img
                    src="/images/crop-fashion-dresses.webp"
                    alt="Children party dresses and outfits"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#D97706]">Garment Aisles</p>
                <p className="font-serif text-xs font-bold text-[#1C1917]">Dresses, Cottons & Festives</p>
              </div>

            </div>

            {/* Storytelling Abundance Factbox */}
            <div className="bg-[#1C1917] text-white p-5 rounded-lg space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#E59819]" />
                <h4 className="font-serif text-sm font-bold tracking-wide uppercase text-stone-200">
                  Why Guwahati Parents Choose Kirnav:
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E59819] font-bold">•</span>
                  <span><strong>Zero Guesswork:</strong> Feel the fabrics, verify shoe sizes, and let kids test ride-ons in person.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E59819] font-bold">•</span>
                  <span><strong>Full Age Range:</strong> From day-one hospital discharge sets to pre-teen birthday party outfits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E59819] font-bold">•</span>
                  <span><strong>Sensible Price Points:</strong> Fair local retail pricing without the bloated mall parking & franchise markups.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
