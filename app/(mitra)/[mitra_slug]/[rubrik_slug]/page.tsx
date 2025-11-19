import { fetchPartnersRubric } from "@/lib/actions";
import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

export default async function MitraRubrik({
  params,
}: {
  params: Promise<{ mitra_slug: string; rubrik_slug: string }>
}) {
  const { mitra_slug, rubrik_slug } = await params
  
  const data = await fetchPartnersRubric({
    partner_alias: mitra_slug,
    rubric_alias: rubrik_slug,
    limit: 25,
    page: 1
  })
  
  const articles = data?.data?.list || []
  const partner = data?.data?.partner
  const totalEntry = data?.data?.total_entry || 0

  return (
    <div className="container">
      <main>
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <a href="/" className="text-[#D72329] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <a href={`/${mitra_slug}`} className="text-[#D72329] hover:underline">{partner?.name || mitra_slug}</a>
          <span className="mx-2">/</span>
          <span className="text-[#616161]">{rubrik_slug}</span>
        </nav>

        {/* Partner Header */}
        {partner && (
          <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center gap-4">
            <img 
              src={partner.avatar_url} 
              alt={partner.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#212121]">
                {partner.name} - {rubrik_slug}
              </h1>
              <p className="text-sm text-gray-500">{totalEntry} artikel</p>
            </div>
          </div>
        )}

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
            <p className="text-gray-500">Belum ada artikel yang tersedia di rubrik ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}
