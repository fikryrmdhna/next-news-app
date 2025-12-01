'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Partner, Province } from "@/types/jaringanType";

export default function JaringanPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [viral, setViral] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/media-partners');
        const data = await response.json();
        
        setPartners(data.data?.partners || []);
        setProvinces(data.data?.provinces || []);
        setViral(data?.data?.viral_tags || []);
      } catch (error) {
        console.error('Failed to fetch partners:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadData();
  }, []);

  async function handleProvinceChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    
    if (provinceId === "all") {
      try {
        const response = await fetch('/api/media-partners');
        const data = await response.json();
        setPartners(data.data?.partners || []);
      } catch (error) {
        console.error('Failed to fetch partners:', error);
      }
    } else {
      try {
        const response = await fetch(`/api/media-partners?province_id=${provinceId}`);
        const data = await response.json();
        setPartners(data.data?.partners || []);
      } catch (error) {
        console.error('Failed to fetch partners by province:', error);
      }
    }
  }

  return (
    <main>
      <div className="container">
        <div className="block lg:flex lg:flex-row gap-6">
          <section className="w-full lg:w-[738px] space-y-6">
            <h1 className="text-3xl font-bold text-[#212121] mb-4">Jaringan Media Teras</h1>
            <p className="text-[#616161] mb-8">
              News.id bekerja sama dengan berbagai media lokal di seluruh Indonesia untuk menghadirkan berita yang beragam dan kredibel.
            </p>

            {/* Province Filter */}
            <div className="mb-8">
              <select 
                className="w-full md:w-1/3 px-3 py-2 border border-[#E0E0E0] rounded-md"
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                <option value="all">Semua Provinsi</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-12">
                <p className="text-gray-500">Memuat data jaringan media...</p>
              </div>
            )}

            {/* Partners Grid */}
            {!isLoading && partners.length > 0 && (
              <div className="block w-auto lg:full">
                {partners.map((partner) => (
                  <Link
                    key={partner.id}
                    href={`/${partner.alias}`}
                    className="flex justify-between mb-4"
                  >
                    <div className="flex items-center">
                      <div className="rounded-full !border !border-[#E0E0E0] inline-flex items-center justify-center overflow-hidden w-10 h-10">
                        <Image
                          src={partner.logo_url || partner.avatar_url}
                          alt={partner.name}
                          width={60}
                          height={60}
                          className="h-[38px] w-auto flex-shrink-0 object-contain"
                          unoptimized
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-center text-[#212121] line-clamp-2 ml-2">
                        {partner.name}
                      </h3>
                    </div>
                    <button className="inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-white rounded-sm !border !border-[#D72329] text-[#D72329] hover:bg-white focus:ring-gray-400 cursor-pointer px-2 py-[6px] text-base px-3 !text-sm leading-[20px] w-[59px] h-[32px] font-semibold px-3 !text-sm leading-[20px] w-[59px] h-[32px] font-semibold">
                      Lihat
                    </button>
                  </Link>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!isLoading && partners.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Tidak ada media partner yang ditemukan.</p>
              </div>
            )}
          </section>
          <aside className="w-[308px] space-y-6 hidden lg:block">
            <div className="sticky top-36">
              {/* Viral Tags */}
              {viral.length > 0 && (
                <section className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-4 text-[#212121]">Viral</h3>
                  <div className="space-y-2">
                    {viral.slice(0, 5).map((tag, index) => (
                      <a
                        key={index}
                        href={`/tag/${tag}`}
                        className="block text-sm text-gray-700 hover:text-[#D72329]"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
