'use client';

import Image from "next/image";
import Link from "next/link";
import type { HomepagePartners } from "@/types/homepage";
import { useRef } from "react";

interface ExploreMediaProps {
  data: HomepagePartners[];
}

export default function ExploreMedia({ data }: ExploreMediaProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!data || data.length === 0) return null;

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold leading-[150%] mb-0">Jelajahi Media Mitra</h2>
        <div className="w-[60px] text-right">
          <button 
            aria-label="button-prev" 
            className="p-1 cursor-pointer disabled:opacity-50" 
            onClick={scrollPrev}
          >
            <svg className="w-5 h-5 text-[#D72329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            aria-label="button-next" 
            className="p-1 cursor-pointer disabled:opacity-50" 
            onClick={scrollNext}
          >
            <svg className="w-5 h-5 text-[#D72329]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <section>
        <div className="overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {data.map((mitra) => (
              <div 
                key={mitra.id} 
                className="flex-shrink-0 w-[145px] md:w-[155px] lg:w-[165px] px-2"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Link href={`/${mitra.alias}`}>
                  <div className="flex flex-col items-center bg-white border border-[#e0e0e0] rounded-lg py-8 px-4">
                    <Image
                      src={mitra.avatar_url}
                      alt={`${mitra.name} Avatar`}
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16 rounded-lg mb-4"
                      unoptimized
                    />
                    <span className="text-center text-xs font-semibold line-clamp-1 w-full">{mitra.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
