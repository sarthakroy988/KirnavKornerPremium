import React from 'react';
import { Sparkles, CheckCircle2, Heart, Award } from 'lucide-react';

export default function BrandBar() {
  const values = [
    {
      title: 'Beautiful Things. Sensible Prices.',
      subtitle: 'Quality picks without unnecessary luxury markups'
    },
    {
      title: 'More for Little Ones. Less Fuss.',
      subtitle: 'From newborns to school kids under one roof'
    },
    {
      title: '3 Dedicated Retail Floors',
      subtitle: 'Apparel, footwear, ride-on cars, and baby care'
    },
    {
      title: 'Trusted Guwahati Family Store',
      subtitle: '4.7 ★ rating from local parents and families'
    }
  ];

  return (
    <div className="bg-[#1C1917] text-[#FAF8F5] py-6 sm:py-8 border-y border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
          {values.map((item, idx) => (
            <div key={idx} className={`pt-4 sm:pt-0 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''}`}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E59819]" />
                <h2 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h2>
              </div>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
