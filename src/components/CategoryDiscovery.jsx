import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageCircle, MapPin, Check } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function CategoryDiscovery({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'wear',
      tag: 'WEAR',
      subtitle: '& Kids Clothing',
      fullTitle: 'Baby & Kids Clothing',
      description: 'Festive outfits, soft newborn sets, party frocks, traditional kurtas, and everyday durable cotton playwear that stands up to childhood.',
      image: '/images/crop-clothing.webp',
      altImage: '/images/crop-fashion-dresses.webp',
      floor: 'Ground & 1st Floor',
      highlights: ['Newborn soft sets & swaddles', 'Girls party dresses & traditional wear', 'Boys festive wear & smart casuals', 'Everyday breathable cotton sets', 'Dedicated in-store trial room'],
      accentColor: 'bg-amber-500'
    },
    {
      id: 'play',
      tag: 'PLAY',
      subtitle: 'Games & Ride-ons',
      fullTitle: 'Toys, Games & Ride-ons',
      description: 'Battery-operated ride-on cars, motorcycles, tricycles, building sets, board games, puzzles, and interactive developmental toys.',
      image: '/images/crop-play-dino.webp',
      altImage: '/images/crop-rideons-cycles.webp',
      floor: '2nd Floor Showroom & Ground Play Section',
      highlights: ['Rechargeable ride-on electric cars', 'Kids battery motorcycles & scooters', 'Tricycles, balance bikes & pedal cycles', 'Action toys, dolls & cuddly plushies', 'Brain games, puzzles & learning kits'],
      accentColor: 'bg-orange-500'
    },
    {
      id: 'baby',
      tag: 'BABY',
      subtitle: 'Essentials',
      fullTitle: 'Baby Essentials & Care',
      description: 'Everything for infants and new parents: feeding bottles, sterilisers, skin care, bath support, carriers, strollers, and nursery must-haves.',
      image: '/images/storefront-full.webp',
      floor: 'Ground Floor Baby Centre',
      highlights: ['Official Mee Mee newborn essentials', 'Feeding bottles, sippers & warmers', 'Gentle baby bath & skincare lotions', 'Diapering care, wipes & mats', 'Strollers, prams & baby bedding'],
      accentColor: 'bg-emerald-600'
    },
    {
      id: 'step-out',
      tag: 'STEP OUT',
      subtitle: "Kids' Footwear",
      fullTitle: "Kids' Footwear & Shoes",
      description: 'Comfortable pre-walker booties, fun LED light-up sneakers, sturdy school shoes, rainy-day sandals, and festive ethnic footwear.',
      image: '/images/crop-footwear.webp',
      floor: 'Ground Floor Footwear Rack',
      highlights: ['Soft-sole pre-walkers & booties', 'Anti-slip daily sandals & crocs', 'LED light sneakers for active kids', 'Formal & school-ready footwear', 'Ethnic juttis & party sandals'],
      accentColor: 'bg-rose-500'
    },
    {
      id: 'school',
      tag: 'SCHOOL',
      subtitle: 'Essentials',
      fullTitle: 'School Essentials & Gear',
      description: 'Ergonomic backpacks, spill-proof insulated lunch containers, water bottles, art supplies, and practical daily student necessities.',
      image: '/images/crop-clothing.webp',
      floor: 'Ground Floor Supplies Section',
      highlights: ['Character & sturdy school backpacks', 'Stainless steel insulated lunch boxes', 'BPA-free kids water bottles', 'Art sets, crayons & pencil cases', 'School socks, napkins & rainwear'],
      accentColor: 'bg-blue-600'
    },
    {
      id: 'gift',
      tag: 'GIFT',
      subtitle: '& Favourites',
      fullTitle: 'Little Gifts & Favourites',
      description: 'The easiest place in Guwahati to find birthday presents, return gifts, baby shower hampers, and little celebration surprises.',
      image: '/images/crop-play-dino.webp',
      floor: 'All Floors / Gift Wrapping at Counter',
      highlights: ['Birthday gift toys & activity sets', 'Baby shower gifting hampers', 'Return gift bundles for parties', 'Unique novelty accessories', 'In-store festive gift presentation'],
      accentColor: 'bg-purple-600'
    }
  ];

  const current = categories[activeCategory];

  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E7E0D3] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D97706] font-bold">
                Store Department Directory
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-tight">
              WHAT'S AROUND <br className="hidden sm:inline" />THE CORNER?
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif text-lg sm:text-xl text-stone-700 italic">
              A little bit of everything for little ones.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
              Explore three physical retail floors packed with honest, practical choices for growing kids. Select a department below to see what's in store.
            </p>
          </div>
        </div>

        {/* Category Visual Grid (Asymmetric Editorial Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`group cursor-pointer rounded-lg overflow-hidden border transition-all duration-300 bg-white flex flex-col ${
                  isSelected 
                    ? 'border-[#1C1917] ring-2 ring-[#1C1917]/10 shadow-lg -translate-y-1' 
                    : 'border-[#E8E2D8] hover:border-[#1C1917]/50 hover:shadow-md'
                }`}
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
                  <img
                    src={cat.image}
                    alt={cat.fullTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Corner Floor Badge */}
                  <div className="absolute top-3 left-3 bg-[#1C1917]/85 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded tracking-wider">
                    {cat.floor}
                  </div>

                  {/* Department Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl font-bold tracking-tight text-white">
                        {cat.tag}
                      </span>
                      <span className="text-xs text-stone-300 font-medium">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1.5">
                      {cat.fullTitle}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#D97706] group-hover:text-[#1C1917] transition-colors flex items-center gap-1">
                      <span>View Highlights</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>

                    <span className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">
                      In-Store Stock
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Department Feature Focus Box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F4EFEA] rounded-xl border border-[#D5CEBF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-[#1C1917] text-white text-[10px] font-bold tracking-widest uppercase rounded">
                  Featured Corner: {current.tag}
                </span>
                <span className="text-xs text-[#D97706] font-semibold">
                  Location: {current.floor}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                {current.fullTitle} at Kirnav Korner
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {current.description}
              </p>

              {/* What Parents Will Find */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  What Parents Find in This Corner:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-4 bg-white p-5 rounded-lg border border-[#E8E2D8] space-y-3.5 shadow-xs">
              <p className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                Planning a Visit for {current.tag}?
              </p>
              <p className="text-xs text-stone-500 leading-relaxed">
                Have a question about sizes, age groups, or vehicle models currently on display? Message the Guwahati store team directly on WhatsApp.
              </p>
              
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(current.fullTitle)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </button>

                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#D97706] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E59819]" />
                  <span>Get Directions to Store</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
