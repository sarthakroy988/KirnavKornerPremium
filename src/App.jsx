import React, { useState, useEffect } from 'react';
import { getStoreStatus, STORE_INFO } from './utils/storeStatus';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [status, setStatus] = useState(getStoreStatus());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenEnquiry = (subject = '') => {
    setEnquirySubject(subject);
    setEnquiryModalOpen(true);
  };

  const departments = [
    {
      level: 'LEVEL 1',
      name: 'WEAR',
      icon: 'checkroom',
      desc: 'Newborn frocks, ethnic festive kurta sets & everyday soft cottons.',
      image: '/images/crop-clothing.webp',
      badgeColor: 'bg-[#FFDBCE] text-[#370E00]'
    },
    {
      level: 'LEVEL 2',
      name: 'PLAY',
      icon: 'toys',
      desc: 'Montessori wooden blocks, brain puzzles & electric ride-on jeeps.',
      image: '/images/crop-play-dino.webp',
      badgeColor: 'bg-[#FFDDB6] text-[#2A1800]'
    },
    {
      level: 'GROUND',
      name: 'BABY',
      icon: 'child_friendly',
      desc: 'Mee Mee baby gear, prams, sterilisers, organic diapers & nursing.',
      image: '/images/storefront-full.webp',
      badgeColor: 'bg-[#EFEEEB] text-[#1B1C1A]'
    },
    {
      level: 'GROUND',
      name: 'STEP OUT',
      icon: 'roller_skating',
      desc: 'Pre-walkers, soft crib booties, school shoes & light-up sneakers.',
      image: '/images/crop-footwear.webp',
      badgeColor: 'bg-[#EFEEEB] text-[#1B1C1A]'
    },
    {
      level: 'LEVEL 1',
      name: 'SCHOOL',
      icon: 'backpack',
      desc: 'Ergonomic backpacks, leakproof thermos bottles & stationery kits.',
      image: '/images/crop-clothing.webp',
      badgeColor: 'bg-[#FFDBCE] text-[#370E00]'
    },
    {
      level: 'ALL FLOORS',
      name: 'GIFT',
      icon: 'featured_seasonal_and_gifts',
      desc: 'Custom birthday hampers, baby shower baskets & celebration sets.',
      image: '/images/crop-fashion-dresses.webp',
      badgeColor: 'bg-[#FFDDB6] text-[#2A1800]'
    }
  ];

  const lookbookItems = [
    {
      tag: 'LEVEL 1 · WEAR',
      title: 'Festive Silk & Linen Kurta Set',
      desc: 'Handcrafted traditional festive wear for ages 1–6Y with comfortable cotton lining.',
      image: '/images/crop-fashion-dresses.webp'
    },
    {
      tag: 'LEVEL 2 · PLAY',
      title: 'Ride-On Electric Vehicles & Trikes',
      desc: 'Rechargeable battery-operated cars, motorbikes & cycles visible from the 2nd floor.',
      image: '/images/crop-rideons-cycles.webp'
    },
    {
      tag: 'GROUND · STEP OUT',
      title: 'First Walkers & Summer Sandals',
      desc: 'Anti-slip soles, breathable straps & soft pre-walker booties on our ground-floor shoe racks.',
      image: '/images/crop-footwear.webp'
    },
    {
      tag: 'GROUND · PLAY',
      title: 'Inflatable Mascots & Novelty Fun',
      desc: 'Our iconic yellow dino bop-bag mascot, puzzles, plush toys & board games.',
      image: '/images/crop-play-dino.webp'
    },
    {
      tag: 'GROUND · BABY',
      title: 'Mee Mee Newborn Care & Essentials',
      desc: 'Feeding bottles, gentle bath care, swaddles, strollers & baby nursery accessories.',
      image: '/images/storefront-full.webp'
    },
    {
      tag: 'LEVEL 1 · WEAR',
      title: 'Neatly Boxed Garments & Apparel',
      desc: 'Endless wall-to-wall boxed sets for newborns, toddlers, and juniors organized by age and fit.',
      image: '/images/crop-clothing.webp'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1B1C1A] font-sans antialiased min-h-screen selection:bg-[#FFDBCE] selection:text-[#370E00] pb-safe-bottom">
      
      {/* 1. Top Live Status Bar */}
      <aside className="bg-[#1C1917] text-[#FAF8F5] px-4 sm:px-6 py-2 text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center font-semibold text-[#FFDDB6] bg-stone-800 px-2 py-0.5 rounded text-[11px]">
              4.7 <span className="material-symbols-outlined text-[13px] ml-0.5 text-[#E59819]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-stone-400 ml-1 font-normal">(33 Reviews)</span>
            </span>
            <span className="inline-flex items-center text-stone-300 pl-1 text-[11px] sm:text-xs">
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {status.fullBadge}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${STORE_INFO.phoneClean}`}
              className="hidden sm:inline-flex items-center text-xs font-medium text-[#FFDBCE] hover:text-[#EA580C] transition-colors"
            >
              <span className="material-symbols-outlined text-sm mr-1">call</span>
              +91 99543 61338
            </a>
          </div>
        </div>
      </aside>

      {/* 2. Top Navigation (Sticky) */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3.5 bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E2D8] transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="md:hidden p-1.5 rounded text-[#1C1917] hover:bg-[#EFEEEB] active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <a href="#" className="flex flex-col group">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] tracking-tight group-hover:text-[#EA580C] transition-colors">
                  KIRNAV KORNER
                </span>
                <span className="font-serif text-xs text-[#EA580C] font-normal">
                  কিৰ্ণভ কৰ্ণাৰ
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-stone-500 font-medium">
                RG Baruah Road · Opp. AIDC, Guwahati
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-700">
            <a href="#departments" className="hover:text-[#EA580C] transition-colors">Departments</a>
            <a href="#abundance" className="hover:text-[#EA580C] transition-colors">The Store</a>
            <a href="#lookbook" className="hover:text-[#EA580C] transition-colors">Lookbook</a>
            <a href="#floorguide" className="hover:text-[#EA580C] transition-colors">3 Floors</a>
            <a href="#reviews" className="hover:text-[#EA580C] transition-colors">Reviews</a>
            <a href="#location" className="hover:text-[#EA580C] transition-colors">Visit Us</a>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden lg:inline-flex items-center px-2.5 py-1 rounded bg-[#FFDBCE] text-[#370E00] text-[11px] font-bold uppercase tracking-wider">
              3 Store Floors
            </span>
            <button
              onClick={() => handleOpenEnquiry('General Store Inquiry')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span className="hidden sm:inline">Ask Store</span>
            </button>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-[#1C1917] text-white rounded text-xs font-bold uppercase tracking-wider hover:bg-[#EA580C] transition-colors shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">directions</span>
              <span>Directions</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#E8E2D8] mt-3 space-y-2 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold text-stone-700">
              <a href="#departments" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">Departments</a>
              <a href="#abundance" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">The Store</a>
              <a href="#lookbook" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">Lookbook</a>
              <a href="#floorguide" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">3 Floors</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">Reviews</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded hover:bg-[#EFEEEB]">Location & Parking</a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. Impactful Mobile & Desktop Hero (Stitch Design) */}
        <section className="pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-[#E8E2D8]">
          <div className="flex flex-col gap-5">
            {/* Location Pill Eyebrow */}
            <div className="inline-flex items-center self-start gap-1.5 px-3 py-1 rounded-full bg-[#EFEEEB] border border-[#D0C4BE]/60">
              <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
              <span className="text-[11px] font-bold uppercase text-stone-700 tracking-wider">
                RG BARUAH ROAD · OPP. AIDC · GUWAHATI
              </span>
            </div>

            {/* Headline & Editorial Intro */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.08]">
                Everything little ones love. <br />
                <span className="italic font-normal text-[#EA580C]">All in one little corner.</span>
              </h1>
              <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
                Beautiful things. Sensible prices. Three spacious floors filled with newborn essentials, playful fashion, footwear, ride-on electric cars, and school gear in the heart of Guwahati.
              </p>
            </div>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href="#floorguide"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#1C1917] text-white hover:bg-[#EA580C] active:scale-95 transition-all duration-200 text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                Visit The Store
                <span className="material-symbols-outlined ml-1.5 text-base">arrow_downward</span>
              </a>
              <a 
                href="#departments"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-stone-300 bg-white text-stone-800 hover:bg-[#EFEEEB] active:scale-95 transition-all duration-200 text-xs font-bold uppercase tracking-wider"
              >
                Explore Departments
              </a>
              <button
                type="button"
                onClick={() => handleOpenEnquiry('Store Visit & Products')}
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg border border-[#25D366] text-[#1E6B58] bg-[#25D366]/10 hover:bg-[#25D366]/20 active:scale-95 transition-all duration-200 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span className="material-symbols-outlined mr-1 text-base text-[#25D366]">chat</span>
                WhatsApp Store
              </button>
            </div>

            {/* Hero Architectural Facade Showcase (Real 3-Floor Night Storefront) */}
            <div className="relative mt-3 rounded-2xl overflow-hidden border border-[#D0C4BE]/70 shadow-lg bg-[#1C1917] group">
              <img 
                src="/images/storefront-full.webp" 
                alt="Kirnav Korner 3-floor illuminated storefront at night on RG Baruah Road Guwahati" 
                className="w-full h-64 sm:h-96 md:h-[480px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm border border-stone-200 shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#EA580C] text-2xl">location_on</span>
                  <div>
                    <p className="font-serif text-sm font-bold text-[#1C1917] leading-tight">
                      3 Floors of Discovery · কিৰ্ণভ কৰ্ণাৰ
                    </p>
                    <p className="text-[11px] text-stone-600">
                      Opposite AIDC, Ambikagirinagar, Guwahati • Dedicated Customer Parking
                    </p>
                  </div>
                </div>
                <a 
                  href={STORE_INFO.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all shadow-xs"
                >
                  Navigate
                  <span className="material-symbols-outlined text-sm ml-1">near_me</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Brand Value Strip */}
        <section className="py-6 border-b border-[#E8E2D8] bg-[#F5F3F0] rounded-xl px-5 sm:px-8 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FFDBCE] flex items-center justify-center text-[#370E00] shrink-0">
                <span className="material-symbols-outlined text-2xl">apartment</span>
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-[#1C1917]">3 Dedicated Floors</h2>
                <p className="text-xs text-stone-600">Infants, kids clothing, footwear & ride-ons</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#FFDDB6] flex items-center justify-center text-[#2A1800] shrink-0">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-[#1C1917]">More Joy, Less Fuss</h2>
                <p className="text-xs text-stone-600">Everything checked off in a single walk</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-11 h-11 rounded-full bg-[#E4E2DF] flex items-center justify-center text-[#1C1917] shrink-0">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-[#1C1917]">Guwahati Family Hub</h2>
                <p className="text-xs text-stone-600">4.7 ★ rated by parents across Zoo Road</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Department Directory ("WHAT'S AROUND THE CORNER?") */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="departments">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
              WHAT'S AROUND THE CORNER?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              A little bit of everything for little ones.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Explore six core departments across our three retail floors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept, i) => (
              <div 
                key={i}
                onClick={() => handleOpenEnquiry(`Department Inquiry: ${dept.name}`)}
                className="p-4 sm:p-5 rounded-xl bg-white border border-[#D0C4BE]/60 shadow-xs hover:border-[#EA580C] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${dept.badgeColor}`}>
                      {dept.level}
                    </span>
                    <span className="material-symbols-outlined text-[#EA580C] text-2xl group-hover:scale-110 transition-transform">
                      {dept.icon}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] group-hover:text-[#EA580C] transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#EA580C]">
                  <span>Explore in Store</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Abundance Visual Collage ("ONE STORE. A THOUSAND LITTLE THINGS.") */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="abundance">
          <div className="bg-[#F5F3F0] rounded-2xl p-5 sm:p-8 md:p-10 border border-[#D0C4BE]/50">
            <div className="max-w-xl mb-6">
              <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
                IN-STORE EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                One store. A thousand little things.
              </h2>
              <p className="text-sm text-stone-600 italic mt-1 font-serif">
                "Walk in looking for one toy, walk out with everything checked off your list."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#D0C4BE]/60 shadow-sm relative group">
                <img 
                  src="/images/interior-full.webp" 
                  alt="Inside Kirnav Korner retail store with yellow mascot dinosaur, apparel boxes and shoes rack" 
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="px-2 py-0.5 bg-[#E59819] text-[#1C1917] text-[10px] font-bold uppercase rounded">
                    Real Retail Interior
                  </span>
                  <p className="font-serif text-sm font-semibold mt-1">Ground Floor Discovery & Trial Room</p>
                  <p className="text-[11px] text-stone-300">Organized rows of children's clothing, footwear, socks, and cheerful toys.</p>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-white border border-[#D0C4BE]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-[#EA580C] font-semibold text-sm">
                    <span className="material-symbols-outlined">electric_car</span>
                    Floor 2: Ride-On Showroom
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    Kids can sit, test-drive, and choose battery cars and tricycles before you purchase.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D0C4BE]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-[#EA580C] font-semibold text-sm">
                    <span className="material-symbols-outlined">styler</span>
                    Dedicated Kids' Trial Rooms
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    Spacious, well-ventilated dressing rooms designed comfortably for active toddlers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D0C4BE]/40 shadow-xs">
                  <div className="flex items-center gap-2 text-[#EA580C] font-semibold text-sm">
                    <span className="material-symbols-outlined">support_agent</span>
                    Friendly Sizing Assistance
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    Our Guwahati team patiently helps measure and select appropriate fits across ages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Value Section ("BEAUTIFUL THINGS. SENSIBLE PRICES.") */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
              PROMISE TO PARENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Beautiful things. Sensible prices.
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              High boutique presentation without the unreasonable luxury retail markup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#EFEEEB] flex items-center justify-center text-[#EA580C] mb-3">
                <span className="material-symbols-outlined text-2xl">spa</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1">1. Gentle on Growing Skin</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Hypoallergenic 100% combed cotton, breathable muslins, and dyes safe for sensitive infant and toddler skin.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#FFDBCE] flex items-center justify-center text-[#370E00] mb-3">
                <span className="material-symbols-outlined text-2xl">price_check</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1">2. Sensible Everyday Pricing</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Direct partnerships with trusted Indian kids' manufacturers keep daily necessities affordable for young families.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[#FFDDB6] flex items-center justify-center text-[#2A1800] mb-3">
                <span className="material-symbols-outlined text-2xl">touch_app</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917] mb-1">3. Touch & Feel in Person</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Skip uncertain online returns. Touch fabrics, inspect toy joints, and ensure accurate shoe fits right in our Guwahati store.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Curated Lookbook ('KIRNAV FINDS') */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="lookbook">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
                KIRNAV FINDS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Caught our eye this week.
              </h2>
            </div>
            <span className="hidden sm:inline-flex text-xs text-stone-500 font-medium">
              Swipe to discover →
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:-mx-0 sm:px-0">
            {lookbookItems.map((item, idx) => (
              <div 
                key={idx}
                className="w-64 sm:w-72 shrink-0 rounded-xl bg-white border border-[#D0C4BE]/60 overflow-hidden shadow-xs flex flex-col"
              >
                <div className="relative h-60 bg-stone-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-104 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] bg-white/90 text-stone-900 font-bold uppercase backdrop-blur-xs">
                    {item.tag}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1C1917] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 font-medium">In-Store Stock</span>
                    <button
                      type="button"
                      onClick={() => handleOpenEnquiry(`Inquiry: ${item.title}`)}
                      className="inline-flex items-center text-xs font-semibold px-2.5 py-1.5 rounded bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors cursor-pointer"
                    >
                      Inquire
                      <span className="material-symbols-outlined text-xs ml-1">chat</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Physical Store Guide ('3-Floor Store Directory') */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="floorguide">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
              COME SEE IT FOR YOURSELF
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              3-Floor Store Directory
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Spacious levels designed for relaxed strolling with prams and family on RG Baruah Road.
            </p>
          </div>

          <div className="space-y-3.5">
            {/* Floor 2 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-l-4 border-l-[#EA580C] border border-[#D0C4BE]/50 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#FFDBCE] text-[#370E00] flex items-center justify-center font-bold text-sm shrink-0">
                  L2
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1C1917]">
                    Floor 2: Mega Toy World & Ride-Ons
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    🚗 Electric battery cars, jeeps, remote vehicles, balance bicycles, tricycles, and large indoor toys.
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#EFEEEB] text-stone-700 text-xs font-semibold">
                Try In-Store
              </span>
            </div>

            {/* Floor 1 */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-l-4 border-l-[#E59819] border border-[#D0C4BE]/50 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#FFDDB6] text-[#2A1800] flex items-center justify-center font-bold text-sm shrink-0">
                  L1
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1C1917]">
                    Floor 1: Fashion & Festive Apparel
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    👗 Party dresses, Bihu & festive attire, traditional kurtas, boys suits, casual cottons & kids fitting rooms.
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#EFEEEB] text-stone-700 text-xs font-semibold">
                Fitting Rooms
              </span>
            </div>

            {/* Ground Floor */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-l-4 border-l-[#1C1917] border border-[#D0C4BE]/50 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#E4E2DF] text-[#1C1917] flex items-center justify-center font-bold text-sm shrink-0">
                  G
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#1C1917]">
                    Ground Floor: Newborn Care, Footwear & Essentials
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    🍼 Newborn layettes, Mee Mee feeding gear, diapers, kids shoe rack, pre-walkers, and counter service.
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto px-2.5 py-1 rounded-full bg-[#EFEEEB] text-stone-700 text-xs font-semibold">
                Stroller Friendly
              </span>
            </div>
          </div>

          {/* Amenities Strip */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-stone-700">
            <div className="p-2.5 rounded-lg bg-[#EFEEEB] border border-[#D0C4BE]/40 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#EA580C]">local_parking</span>
              <span>Dedicated Parking</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#EFEEEB] border border-[#D0C4BE]/40 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#EA580C]">ac_unit</span>
              <span>100% Air Conditioned</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#EFEEEB] border border-[#D0C4BE]/40 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-base text-[#EA580C]">stroller</span>
              <span>Stroller Aisles</span>
            </div>
          </div>
        </section>

        {/* 10. Genuine Verified Google Reviews (4.7★) */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="reviews">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
                CUSTOMER VOICES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Loved by Guwahati parents.
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1917]">
              <span className="material-symbols-outlined text-[#E59819]" style={{ fontVariationSettings: "'FILL' 1" }}>
                stars
              </span>
              <span>Rated 4.7 out of 5 on Google (33 Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#E59819] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-serif text-base text-stone-800 leading-relaxed italic">
                  "Very good store, price are reasonable, good collection and very good service."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1C1917]">Monika Das</span>
                <span className="text-[10px] text-stone-400 font-medium">Verified Google Review</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#E59819] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-serif text-base text-stone-800 leading-relaxed italic">
                  "Best place to shop for clothes and essential items for babies and children in Zoo Road / AIDC area. Staff is patient."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1C1917]">Arunabh Chakravarty</span>
                <span className="text-[10px] text-stone-400 font-medium">Verified Google Review</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="p-6 rounded-xl bg-white border border-[#D0C4BE]/50 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#E59819] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-serif text-base text-stone-800 leading-relaxed italic">
                  "Wonderful collection of high quality garments, child attire and toys. Truly stands apart in Guwahati."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1C1917]">Dr. Indrajit Kalita</span>
                <span className="text-[10px] text-stone-400 font-medium">Verified Google Review</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Store Location & Connectivity ('RIGHT HERE IN GUWAHATI') */}
        <section className="py-12 sm:py-16 border-b border-[#E8E2D8]" id="location">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-[#D0C4BE]/60 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase text-[#EA580C] tracking-widest block mb-1">
                RIGHT HERE IN GUWAHATI
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Visit our 3-floor destination on RG Baruah Road.
              </h2>
              
              <div className="space-y-4 mt-5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#EA580C] text-xl mt-0.5">pin_drop</span>
                  <div>
                    <strong className="text-[#1C1917] block text-xs font-bold uppercase">Store Address:</strong>
                    <span className="text-stone-600 text-xs sm:text-sm">RG Baruah Rd, Opp. AIDC, Ambikagirinagar, Guwahati, Assam 781024</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#EA580C] text-xl mt-0.5">schedule</span>
                  <div>
                    <strong className="text-[#1C1917] block text-xs font-bold uppercase">Store Timings:</strong>
                    <span className="text-stone-600 text-xs sm:text-sm">Monday – Sunday: 10:00 AM – 8:00 PM <span className="text-emerald-700 font-semibold">(Open All 7 Days)</span></span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#EA580C] text-xl mt-0.5">call</span>
                  <div>
                    <strong className="text-[#1C1917] block text-xs font-bold uppercase">Direct Contact:</strong>
                    <a className="text-[#EA580C] font-semibold text-xs sm:text-sm hover:underline" href={`tel:${STORE_INFO.phoneClean}`}>
                      +91 99543 61338
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a 
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-lg bg-[#1C1917] text-white hover:bg-[#EA580C] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined mr-1.5 text-base">directions</span>
                  Navigate via Google Maps
                </a>
                <a 
                  href={`tel:${STORE_INFO.phoneClean}`}
                  className="inline-flex items-center px-4 py-2.5 rounded-lg border border-stone-300 bg-[#EFEEEB] text-stone-800 hover:bg-stone-200 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined mr-1.5 text-base">phone_in_talk</span>
                  Call Front Desk
                </a>
              </div>
            </div>

            {/* Map & Landmark Card Preview */}
            <div className="rounded-xl overflow-hidden border border-[#D0C4BE]/60 shadow-sm h-64 sm:h-72 relative">
              <iframe
                title="Kirnav Korner Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.457814766861!2d91.77443187600863!3d26.173874391118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591e6dc84e73%3A0xe5d7e5d862908f51!2sRG%20Baruah%20Rd%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md border border-stone-200 shadow-sm text-xs font-bold text-stone-800">
                📍 Opp. AIDC, RG Baruah Road
              </div>
            </div>
          </div>
        </section>

        {/* 12. Final CTA Banner */}
        <section className="py-12 sm:py-16">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#EA580C] text-white shadow-lg relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDBCE] block mb-1">
                KIRNAV KORNER · কিৰ্ণভ কৰ্ণাৰ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Come find your little corner today.
              </h2>
              <p className="text-xs sm:text-sm text-[#FFDBCE] mt-2 leading-relaxed">
                Bring your little ones along. Test toys, touch fabrics, and enjoy stress-free family shopping across our 3 floors on RG Baruah Road.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleOpenEnquiry('Planning a Store Visit Today')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-stone-900 hover:bg-[#FFDBCE] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-emerald-600 mr-1.5">chat</span>
                WhatsApp Us
              </button>
              <a 
                href={`tel:${STORE_INFO.phoneClean}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-[#FFDBCE] text-white hover:bg-white/10 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
              >
                Call +91 99543 61338
              </a>
            </div>
          </div>
        </section>

        {/* Footer Notes */}
        <footer className="pt-6 pb-24 md:pb-8 border-t border-[#E8E2D8] text-center text-stone-500 text-xs">
          <p className="font-serif text-sm font-bold text-[#1C1917]">Kirnav Korner · কিৰ্ণভ কৰ্ণাৰ</p>
          <p className="mt-1">Guwahati's Premier Multi-Floor Physical Children's Department Store</p>
          <p className="text-[11px] text-stone-400 mt-1">RG Baruah Road, Opposite AIDC, Ambikagirinagar, Guwahati, Assam 781024</p>
          <p className="italic text-stone-400 mt-2 font-serif">"Made for little ones. Chosen by parents."</p>
        </footer>

      </main>

      {/* 13. Fixed Sticky Mobile Action Bar (Stitch BottomNavBar) */}
      <nav aria-label="Bottom Navigation" className="fixed bottom-0 inset-x-0 z-50 flex justify-around items-center px-4 py-2 bg-white/95 backdrop-blur-md shadow-2xl border-t border-stone-200 md:hidden pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        {/* Directions (Active State with Orange Accent) */}
        <a 
          href={STORE_INFO.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#FFDBCE] text-[#370E00] rounded-lg px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>directions</span>
          <span>Directions</span>
        </a>

        {/* Call Store */}
        <a 
          href={`tel:${STORE_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center text-stone-700 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          <span>Call Store</span>
        </a>

        {/* WhatsApp */}
        <button 
          type="button"
          onClick={() => handleOpenEnquiry('Quick WhatsApp Question')}
          className="flex flex-col items-center justify-center text-stone-700 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-transform cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg text-emerald-600">chat</span>
          <span>WhatsApp</span>
        </button>
      </nav>

      {/* Interactive WhatsApp Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialSubject={enquirySubject}
      />
    </div>
  );
}
