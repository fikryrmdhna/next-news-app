'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Partner, Province } from "@/types/jaringanType";

export default function JaringanPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
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
    <div className="container">
      <main>
        <h1 className="text-3xl font-bold text-[#212121] mb-4">Jaringan Media Teras</h1>
        <p className="text-[#616161] mb-8">
          News.id bekerja sama dengan berbagai media lokal di seluruh Indonesia untuk menghadirkan berita yang beragam dan kredibel.
        </p>

        {/* Province Filter */}
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <label className="block text-sm font-medium text-[#212121] mb-2">
            Filter Berdasarkan Provinsi
          </label>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={`/${partner.alias}`}
                className="bg-white p-4 rounded-lg border border-[#E0E0E0] hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={partner.logo_url || partner.avatar_url}
                    alt={partner.name}
                    width={80}
                    height={80}
                    className="object-contain mb-3 rounded-lg"
                    unoptimized
                  />
                  <h3 className="text-sm font-semibold text-center text-[#212121] line-clamp-2">
                    {partner.name}
                  </h3>
                </div>
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
      </main>
    </div>
  );
}
