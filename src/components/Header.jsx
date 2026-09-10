import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Menu, X, Star, ChevronRight, MessageCircle } from 'lucide-react';
import { getStoreStatus, STORE_INFO } from '../utils/storeStatus';

export default function Header({ onOpenEnquiry }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Refresh status every minute
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'Shop / Discover', href: '#categories' },
    { name: 'The Store', href: '#abundance' },
    { name: 'Kirnav Finds', href: '#finds' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement & Live Timing Bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-2 px-4 border-b border-[#292524]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 tracking-wide font-medium">
            <span className="inline-flex items-center gap-1.5 text-[#F59E0B]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4.7 / 5 (33 Reviews)</span>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="text-stone-300 hidden sm:inline">RG Baruah Rd, AIDC, Guwahati</span>
          </div>

          <div className="flex items-center gap-3 text-stone-300">
            <div className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span>{status.fullBadge}</span>
            </div>
            <span className="text-stone-600 hidden md:inline">|</span>
            <a 
              href={`tel:${STORE_INFO.phoneClean}`} 
              className="hidden md:flex items-center gap-1 hover:text-[#F59E0B] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F59E0B]" />
              <span>{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D8]' : 'bg-[#FAF8F5] border-b border-[#EFE9DF]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Editorial Wordmark */}
          <a href="#" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#1C1917] group-hover:text-[#D97706] transition-colors font-bold">
                KIRNAV KORNER
              </span>
              <span className="text-xs font-serif text-[#D97706] tracking-normal font-normal">
                কিৰ্ণভ কৰ্ণাৰ
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone-500 font-medium">
              Children's Department Store • Guwahati
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#1C1917] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Store Visit & Selection')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:text-[#D97706] px-3 py-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Ask Store</span>
            </button>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded hover:bg-[#D97706] transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1917] focus-visible:ring-offset-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Directions on Google Maps"
              className="p-2 text-[#1C1917] hover:text-[#D97706] rounded-md"
            >
              <MapPin className="w-5 h-5 text-[#D97706]" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              aria-label={isOpenMenu ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpenMenu}
              className="p-2 text-[#1C1917] hover:text-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706] rounded-md"
            >
              {isOpenMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpenMenu && (
        <div className="sm:hidden fixed inset-x-0 top-20 bg-[#FAF8F5] border-b border-[#E8E2D8] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 py-6 space-y-4">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpenMenu(false)}
                  className="flex items-center justify-between py-3 px-3 rounded text-base font-medium text-[#1C1917] hover:bg-[#F3EFEA] hover:text-[#D97706] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#E8E2D8] space-y-2.5">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpenMenu(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#1C1917] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                <MapPin className="w-4 h-4 text-[#F59E0B]" />
                <span>Visit Store / Directions</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phoneClean}`}
                onClick={() => setIsOpenMenu(false)}
                className="w-full flex items-center justify-center gap-2 py-3 border border-[#1C1917] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#F3EFEA]"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span>Call +91 99543 61338</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
