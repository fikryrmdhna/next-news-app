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
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-[#212121] mb-8">Pencarian</h1>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <form onSubmit={handleSearch}>
            <div className="flex gap-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari artikel, topik, atau mitra..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
              >
                {isSearching ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Mencari...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Cari
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Advanced Filters */}
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-blue-600 font-medium">
              Filter Pencarian Lanjutan
            </summary>
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
          </details>
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
