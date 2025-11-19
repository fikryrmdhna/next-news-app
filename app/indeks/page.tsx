import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import Pagination from "@/app/components/ui/Pagination";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

// This would fetch from API with filters
async function fetchIndeksArticles(page: number = 1) {
  // Placeholder - implement actual API call
  return {
    articles: [],
    totalPages: 1,
    currentPage: page,
  };
}

export default async function IndeksPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const data = await fetchIndeksArticles(currentPage);

  return (
    <div className="container">
      <main>
        <h1 className="text-3xl font-bold text-[#212121] mb-8">Indeks Artikel</h1>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rubrik
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="">Semua Rubrik</option>
                <option value="berita-daerah">Berita Daerah</option>
                <option value="perspektif">Perspektif</option>
                <option value="jeda">Jeda</option>
                <option value="mendalam">Mendalam</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mitra
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="">Semua Mitra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal
              </label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button className="mt-4 px-6 py-2 bg-[#D72329] text-white rounded-md hover:bg-[#b91c22]">
            Terapkan Filter
          </button>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {data.articles.map((article: HomepageLatestArticle) => (
            <ArticleCardTypeThree
              key={article.article_uuid}
              data={article}
            />
          ))}
        </div>

        {data.articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Tidak ada artikel yang ditemukan.</p>
          </div>
        )}

        {/* Pagination */}
        <Pagination
          currentPage={data.currentPage}
          totalPages={data.totalPages}
          baseUrl="/indeks"
        />
      </main>
    </div>
  );
}
