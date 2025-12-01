import { fetchRubricByAlias } from "@/lib/actions";
import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import Breadcrumb from "@/app/components/sections/Breadcrumb";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

const rubricDescriptions: Record<string, string> = {
  'berita-daerah': 'Update berita daerah terkini dari berbagai wilayah Indonesia. Fokus pada isu lokal, kebijakan, dan dinamika kehidupan masyarakat.',
  'perspektif': 'Ruang dialog publik yang diisi dengan opini dan analisis dari berbagai sudut pandang. Perkaya wawasanmu lewat gagasan kritis dan reflektif.',
  'jeda': 'Temukan berita ringan dan inspiratif seputar budaya lokal, gaya hidup, dan cerita-cerita yang dekat dengan keseharian masyarakat Indonesia.',
  'mendalam': 'Laporan investigasi dan analisis mendalam tentang isu-isu penting di Indonesia.',
};

export default async function RubricPage({
  params,
}: {
  params: Promise<{ rubric_slug: string }>
}) {
  const { rubric_slug } = await params;
  
  const data = await fetchRubricByAlias(rubric_slug);
  const articles = data?.data?.latest_articles || [];
  const rubric = data?.data?.rubric;
  const description = rubricDescriptions[rubric_slug] || '';

  return (
    <div className="container">
      <main>
        {/* Rubric Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#212121] mb-2">
            {rubric?.name || rubric_slug}
          </h1>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>

        {/* Latest Articles */}
        <div>
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
        </div>
      </main>
    </div>
  );
}
