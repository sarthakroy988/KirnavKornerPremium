import React from 'react';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../utils/storeStatus';

export default function ReviewsSection() {
  const reviews = [
    {
      author: 'Monika Das',
      quote: 'Very good store price are reasonable good collection and very good service',
      badge: 'Local Guide'
    },
    {
      author: 'Arunabh Chakravarty',
      quote: 'Best place to shop for clothes and essential items for babies and children!',
      badge: 'Verified Customer'
    },
    {
      author: 'Dr Indrajit Kalita',
      quote: 'Wonderful collection of high quality garments and child attire and toys',
      badge: 'Verified Customer'
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E0D8CB] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D97706] font-bold">
                Social Proof & Trust
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              COMMUNITY TRUST
            </h2>
            <p className="mt-1 font-serif text-base sm:text-lg text-stone-600 italic">
              Real impressions from Guwahati parents and families.
            </p>
          </div>

          {/* Authentic Google Rating Score Box */}
          <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#E0D8CB] shadow-xs flex items-center gap-5">
            <div className="text-center pr-4 border-r border-stone-200">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] block leading-none">
                4.7
              </span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                out of 5.0
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#F59E0B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold text-[#1C1917]">
                33+ Google Reviews
              </p>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#D97706] hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Read on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* The 3 Real Customer Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-[#E8E2D8] shadow-xs flex flex-col justify-between relative hover:border-[#1C1917]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#D97706]/40" />

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Exact Quote */}
                <p className="font-serif text-base sm:text-lg text-[#1C1917] italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#1C1917] tracking-wide uppercase">
                    {rev.author}
                  </h3>
                  <span className="text-[11px] text-stone-400">
                    Google Review
                  </span>
                </div>

                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#FAF8F5] border border-stone-200 rounded text-[10px] font-medium text-stone-600">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  <span>{rev.badge}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500">
            Ratings and reviews verified via Kirnav Korner's public Google Business profile on RG Baruah Road, Guwahati.
          </p>
        </div>

      </div>
    </section>
  );
}
