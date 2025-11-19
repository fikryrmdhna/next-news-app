import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import Breadcrumb from "@/app/components/sections/Breadcrumb";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

// This would normally fetch from API
async function fetchTagArticles(tagSlug: string) {
  // Placeholder - implement actual API call
  return {
    tag: {
      id: 1,
      caption: tagSlug,
      alias: tagSlug,
      description: `Artikel dengan tag ${tagSlug}`,
    },
    articles: [],
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag_slug: string }>
}) {
  const { tag_slug } = await params;
  const data = await fetchTagArticles(tag_slug);

  return (
    <div className="container">
      <main>
        <Breadcrumb items={[
          { label: 'Tag', href: '/' },
          { label: `#${data.tag.caption}` }
        ]} />

        {/* Tag Header */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h1 className="text-3xl font-bold text-[#212121] mb-2">
            #{data.tag.caption}
          </h1>
          {data.tag.description && (
            <p className="text-gray-600">{data.tag.description}</p>
          )}
        </div>

        {/* Articles */}
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
            <p className="text-gray-500">Belum ada artikel dengan tag ini.</p>
          </div>
        )}
      </main>
    </div>
  );
}
