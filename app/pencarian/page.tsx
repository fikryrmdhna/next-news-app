'use client'

import { useState } from "react";
import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import type { HomepageLatestArticle } from "@/types/homepage";

export default function PencarianPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<HomepageLatestArticle[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    
    // TODO: Implement MeiliSearch or API search
    // const results = await searchArticles(query);
    // setResults(results);
    
    setTimeout(() => {
      setIsSearching(false);
      setResults([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">

          {/* Advanced Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rubrik
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="">Semua Rubrik</option>
                <option value="berita-daerah">Berita Daerah</option>
                <option value="perspektif">Perspektif</option>
                <option value="jeda">Jeda</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Mulai
              </label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Akhir
              </label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Search Results */}
        {query && !isSearching && (
          <div>
            <h2 className="text-xl font-bold text-[#212121] mb-4">
              Hasil pencarian untuk "{query}"
            </h2>

            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((article) => (
                  <ArticleCardTypeThree
                    key={article.article_uuid}
                    data={article}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">Tidak ada hasil yang ditemukan.</p>
                <p className="text-sm text-gray-400 mt-2">Coba gunakan kata kunci yang berbeda.</p>
              </div>
            )}
          </div>
        )}

        {/* Search Suggestions */}
        {!query && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-[#212121] mb-4">Pencarian Populer</h3>
            <div className="flex flex-wrap gap-2">
              {['Pemilu 2024', 'Lingkungan', 'HAM', 'Kebijakan Publik', 'Korupsi', 'Pendidikan'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setQuery(keyword)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
