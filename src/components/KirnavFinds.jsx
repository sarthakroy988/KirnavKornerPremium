import React, { useState } from 'react';
import { Sparkles, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function KirnavFinds({ onOpenEnquiry }) {
  const [selectedTab, setSelectedTab] = useState('ALL');

  const finds = [
    {
      id: 1,
      label: 'PLAY',
      caption: 'Ride-On Vehicles & Toys',
      image: '/images/crop-rideons-cycles.webp',
      aspect: 'landscape',
      description: 'Upper-floor electric ride-on cars, motorcycles, and trikes visible right through the front glass facade.',
      floorTag: 'Floor 2'
    },
    {
      id: 2,
      label: 'WEAR',
      caption: 'Party Dresses & Daily Cottons',
      image: '/images/crop-fashion-dresses.webp',
      aspect: 'portrait',
      description: 'Festive traditional attire, frocks, and casual cotton sets ready for fitting in the ground-floor trial room.',
      floorTag: 'Floor 1 & Ground'
    },
    {
      id: 3,
      label: 'PLAY',
      caption: 'Inflatable Mascots & Novelty Fun',
      image: '/images/crop-play-dino.webp',
      aspect: 'portrait',
      description: 'Our iconic yellow dino bop-bag mascot, games, puzzles, and surprise novelty toys scattered through the aisles.',
      floorTag: 'Ground Floor'
    },
    {
      id: 4,
      label: 'STEP OUT',
      caption: 'First Walkers & Summer Sandals',
      image: '/images/crop-footwear.webp',
      aspect: 'portrait',
      description: 'Colorful pre-walker booties, easy-strap sandals, and sturdy outdoor shoes for growing feet.',
      floorTag: 'Ground Floor'
    },
    {
      id: 5,
      label: 'WEAR',
      caption: 'Neatly Boxed Garments & Apparel',
      image: '/images/crop-clothing.webp',
      aspect: 'landscape',
      description: 'Endless wall-to-wall boxed sets for newborns, toddlers, and juniors organized by age and fit.',
      floorTag: 'Ground Floor'
    },
    {
      id: 6,
      label: 'BABY',
      caption: 'Newborn Care & Mee Mee Essentials',
      image: '/images/storefront-full.webp',
      aspect: 'landscape',
      description: 'Trusted baby care products, feeding gear, and infant nursery needs prominently displayed on the storefront.',
      floorTag: 'Ground Floor'
    }
  ];

  const filterTabs = ['ALL', 'PLAY', 'WEAR', 'STEP OUT', 'BABY', 'EVERYDAY'];

  const filtered = selectedTab === 'ALL'
    ? finds
    : selectedTab === 'EVERYDAY'
    ? finds.filter(f => f.label === 'WEAR' || f.label === 'STEP OUT')
    : finds.filter(f => f.label === selectedTab);

  return (
    <section id="finds" className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E0D8CB] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E59819]" />
              <span className="font-serif text-xs tracking-[0.25em] uppercase text-[#D97706] font-bold">
                In-Store Lookbook
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              KIRNAV FINDS
            </h2>
            <p className="mt-1 font-serif text-base sm:text-lg text-stone-600 italic">
              A few things that caught our eye.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedTab(tab)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  selectedTab === tab
                    ? 'bg-[#1C1917] text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-[#EAE4D9] hover:text-[#1C1917] border border-[#E0D8CB]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Lookbook Cards (Varied Heights & Aspect Ratios) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-[#E8E2D8] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Label Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 bg-[#1C1917] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    {item.label}
                  </span>
                  <span className="px-2 py-1 bg-white/90 backdrop-blur-xs text-[#1C1917] text-[10px] font-semibold uppercase tracking-wider rounded">
                    {item.floorTag}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#D97706] transition-colors">
                    {item.caption}
                  </h3>
                  <p className="mt-1 text-xs text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400 font-medium">
                    Seen at RG Baruah Rd
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry && onOpenEnquiry(`${item.label} - ${item.caption}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706] hover:text-[#1C1917] transition-colors cursor-pointer"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 p-4 bg-[#FAF8F5] border border-[#E0D8CB] rounded-md text-center">
          <p className="text-xs text-stone-600">
            <strong>Authentic Local Inventory:</strong> Products shown reflect Kirnav Korner's physical retail departments in Guwahati. Stock updates regularly as new seasonal collections arrive.
          </p>
        </div>

      </div>
    </section>
  );
}
