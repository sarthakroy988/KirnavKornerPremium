import React from 'react';
import { MessageCircle, Phone, Navigation } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function MobileStickyBar({ onOpenEnquiry }) {
  return (
    <aside aria-label="Quick actions" className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#1C1917]/95 backdrop-blur-md border-t border-stone-800 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        
        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={() => onOpenEnquiry ? onOpenEnquiry('Quick WhatsApp Question') : window.open(STORE_INFO.whatsappUrl(), '_blank')}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] text-white rounded font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-white" />
          <span className="truncate">WhatsApp</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${STORE_INFO.phoneClean}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-stone-800 text-stone-100 border border-stone-700 rounded font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#E59819]" />
          <span className="truncate">Call</span>
        </a>

        {/* Directions Button */}
        <a
          href={STORE_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#D97706] text-white rounded font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 mb-0.5" />
          <span className="truncate">Directions</span>
        </a>

      </div>
    </aside>
  );
}
