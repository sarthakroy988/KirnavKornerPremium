import React from 'react';
import { Check, Shield, Feather, Coins } from 'lucide-react';

export default function ValueSection() {
  const pillars = [
    {
      icon: Feather,
      title: 'Comfort First for Growing Skin',
      desc: 'Soft breathable cottons, baby-friendly seams, and resilient fabrics designed to handle daily tumbling, playground runs, and multiple washes.'
    },
    {
      icon: Coins,
      title: 'Sensible, Honest Pricing',
      desc: 'Children grow fast. We choose products that look charming and wear well without inflating prices to boutique extremes.'
    },
    {
      icon: Shield,
      title: 'Real Products You Can Touch & Test',
      desc: 'No confusing sizing charts or misleading online product photos. Check materials, examine stitches, and try on shoes in person.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Restrained Editorial Typography Centerpiece */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F4EFEA] border border-[#E0D8CB] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
            <span className="text-[11px] font-serif font-bold uppercase tracking-[0.2em] text-[#1C1917]">
              The Kirnav Philosophy
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1C1917] tracking-tight leading-[1.05]">
            BEAUTIFUL THINGS. <br />
            <span className="italic font-normal text-stone-600">SENSIBLE</span> PRICES.
          </h2>

          <p className="text-base sm:text-xl text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
            "Thoughtfully chosen products for growing kids, without making every little purchase feel extravagant."
          </p>

          <div className="w-16 h-0.5 bg-[#D97706] mx-auto my-6" />
        </div>

        {/* 3 Restrained Editorial Value Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg border border-[#E8E2D8] hover:border-[#1C1917]/40 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#D97706]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#D97706]">
                  <Check className="w-4 h-4" />
                  <span>Guwahati Store Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Promise Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F4EFEA] border border-[#D5CEBF] rounded-lg text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">
            Local Commitment
          </p>
          <p className="font-serif text-lg sm:text-xl font-semibold text-[#1C1917]">
            "We believe shopping for children should bring joy, not financial stress. Come see the difference on RG Baruah Road."
          </p>
        </div>

      </div>
    </section>
  );
}
