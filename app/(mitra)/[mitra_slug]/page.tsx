import { fetchHomepageMitra } from "@/lib/actions";
import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

export default async function MitraHomepage({
  params,
}: {
  params: Promise<{ mitra_slug: string }>
}) {
  const { mitra_slug } = await params
  
  const data = await fetchHomepageMitra(mitra_slug)
  const articles = data?.data?.list || []
  const partner = data?.data?.partner
  const totalEntry = data?.data?.total_entry || 0

  return (
    <div className="container">
      <main>
        {/* Partner Header */}
        {partner && (
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex items-center gap-4">
              <img 
                src={partner.logo_url} 
                alt={partner.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-[#212121]">{partner.name}</h1>
                {partner.vision && (
                  <p className="text-gray-600 mt-2">{partner.vision}</p>
                )}
                {partner.province_name && (
                  <p className="text-sm text-gray-500 mt-1">📍 {partner.province_name}</p>
                )}
              </div>
            </div>
            
            {/* Social Media */}
            {partner.social_media && (
              <div className="flex gap-4 mt-4">
                {partner.social_media.facebook && (
                  <a href={partner.social_media.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    Facebook
                  </a>
                )}
                {partner.social_media.instagram && (
                  <a href={partner.social_media.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                    Instagram
                  </a>
                )}
                {partner.social_media.twitter && (
                  <a href={partner.social_media.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                    Twitter
                  </a>
                )}
              </div>
            )}
          </div>
        )}

        <h2 className="text-2xl font-bold mb-6 text-[#212121]">
          Berita dari {partner?.name || mitra_slug} ({totalEntry})
        </h2>
        
        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article) => (
            <ArticleCardTypeThree 
              key={article.article_uuid} 
              data={article as HomepageLatestArticle} 
            />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Belum ada artikel yang tersedia.</p>
          </div>
        )}
      </main>
    </div>
  );
}
