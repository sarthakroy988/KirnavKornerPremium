import React, { useState } from 'react';
import { X, MessageCircle, Phone, MapPin, Send, Check } from 'lucide-react';
import { STORE_INFO, getStoreStatus } from '../utils/storeStatus';

export default function EnquiryModal({ isOpen, onClose, initialSubject = '' }) {
  const [selectedTopic, setSelectedTopic] = useState(initialSubject || 'General Store Visit');
  const [customQuery, setCustomQuery] = useState('');
  const status = getStoreStatus();

  if (!isOpen) return null;

  const topics = [
    'Baby Essentials & Mee Mee',
    'Ride-On Cars & Tricycles',
    'Kids Clothing & Festive Wear',
    'Footwear & Shoe Sizes',
    'School Gear & Bags',
    'Store Timings & Parking'
  ];

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = customQuery.trim()
      ? `Hi Kirnav Korner, I saw your website. Regarding "${selectedTopic}": ${customQuery.trim()}`
      : `Hi Kirnav Korner, I saw your website and would like to enquire about: "${selectedTopic}".`;
    
    window.open(STORE_INFO.whatsappUrl(finalMsg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-xl border border-[#D5CEBF] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#1C1917] text-white p-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <h3 id="modal-title" className="font-serif text-lg font-bold">
                Connect with Kirnav Korner
              </h3>
            </div>
            <p className="text-xs text-stone-300 font-sans mt-0.5">
              Direct store assistance on RG Baruah Road • Guwahati
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSend} className="p-6 space-y-5">
          
          {/* Live Store status notice */}
          <div className="p-3 bg-[#F4EFEA] rounded-lg border border-[#E0D8CB] flex items-center justify-between text-xs">
            <span className="text-stone-700 font-medium">Store Status:</span>
            <span className="font-bold text-[#1C1917]">{status.fullBadge}</span>
          </div>

          {/* Preset Topics */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              What are you looking for?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(t)}
                  className={`p-2 text-left text-xs rounded border transition-all cursor-pointer flex items-center justify-between ${
                    selectedTopic === t
                      ? 'bg-[#1C1917] text-white border-[#1C1917] font-semibold'
                      : 'bg-white text-stone-700 border-[#E0D8CB] hover:border-stone-400'
                  }`}
                >
                  <span className="truncate">{t}</span>
                  {selectedTopic === t && <Check className="w-3.5 h-3.5 text-[#E59819] shrink-0 ml-1" />}
                </button>
              ))}
            </div>
          </div>

          {/* Optional custom note */}
          <div>
            <label htmlFor="custom-query" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
              Additional Details / Age / Requirements (Optional)
            </label>
            <textarea
              id="custom-query"
              rows={2}
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="e.g. Do you have battery cars in red? Or what sizes in party dresses?"
              className="w-full p-2.5 bg-white border border-[#D5CEBF] rounded text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#D97706] font-sans"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#1EBE5D] transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Query on WhatsApp (+91 99543 61338)</span>
            </button>

            <p className="text-[11px] text-center text-stone-500">
              Opens WhatsApp directly with the Kirnav Korner store team.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
