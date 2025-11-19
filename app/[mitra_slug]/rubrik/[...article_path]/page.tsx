import { fetchArticleDetail } from "@/lib/actions";
import ArticleCardTypeThree from "@/app/components/sections/card/ArticleCardTypeThree";
import Breadcrumb from "@/app/components/sections/Breadcrumb";
import ShareArticle from "@/app/components/sections/ShareArticle";
import AuthorInfo from "@/app/components/sections/AuthorInfo";
import TagArticle from "@/app/components/sections/TagArticle";
import Image from "next/image";
import type { HomepageLatestArticle } from "@/types/homepage";

export const dynamic = 'force-dynamic';

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ mitra_slug: string; article_path: string[] }>
}) {
  const { mitra_slug, article_path } = await params;
  
  // Join the path array and extract article ID from last segment
  const fullPath = article_path.join('/');
  const lastSegment = article_path[article_path.length - 1];
  const articleId = lastSegment?.split('-').filter(Boolean).at(-1);
  
  if (!articleId || !/^\d+$/.test(articleId)) {
    return (
      <div className="container">
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Invalid article URL</p>
        </div>
      </div>
    );
  }
  
  const data = await fetchArticleDetail(articleId);
  const article = data?.data?.article;
  const relatedArticles = data?.data?.related_articles || [];
  const latestArticles = data?.data?.latest_articles || [];
  const viralTags = data?.data?.viral_tags || [];

  if (!article) {
    return (
      <div className="container">
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Artikel tidak ditemukan.</p>
        </div>
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const articleUrl = `${baseUrl}${mitra_slug}/rubrik/${fullPath}`;

  // Get authors from article_users
  const authors = article.article_users
    ?.filter((au) => au.type === 'writer')
    .flatMap((au) => au.user) || [];

  return (
    <div className="container">
      <main>
        <Breadcrumb items={[
          { label: article.partner?.name || mitra_slug, href: `/${mitra_slug}` },
          { label: article.sub_rubric?.name || 'Artikel' },
          { label: article.title_digital }
        ]} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1">
            {/* Article Header */}
            <header className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#212121] mb-4">
                {article.title_digital}
              </h1>
              
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <time dateTime={article.published_at}>
                  {new Date(article.published_at).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                {article.partner && (
                  <span className="flex items-center gap-2">
                    <Image
                      src={article.partner.avatar_url}
                      alt={article.partner.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                      unoptimized
                    />
                    {article.partner.name}
                  </span>
                )}
              </div>

              {/* Author Info */}
              {authors.length > 0 && (
                <div className="mb-4">
                  {authors.map((author, index) => (
                    <AuthorInfo key={index} author={author} />
                  ))}
                </div>
              )}

              {/* Share Buttons */}
              <ShareArticle url={articleUrl} title={article.title_digital} />
            </header>

            {/* Featured Image */}
            {article.feature_image && (
              <figure className="mb-6">
                <Image
                  src={article.feature_image}
                  alt={article.feature_image_caption || article.title_digital}
                  width={800}
                  height={450}
                  className="w-full rounded-lg"
                  unoptimized
                />
                {article.feature_image_caption && (
                  <figcaption className="text-sm text-gray-600 mt-2">
                    {article.feature_image_caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <TagArticle tags={article.tags} />
            )}

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-[#212121]">Artikel Terkait</h2>
                <div className="space-y-6">
                  {relatedArticles.slice(0, 5).map((relatedArticle) => (
                    <ArticleCardTypeThree
                      key={relatedArticle.article_uuid}
                      data={relatedArticle as HomepageLatestArticle}
                    />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="sticky top-24">
              {/* Latest Articles */}
              {latestArticles.length > 0 && (
                <section className="bg-white p-4 rounded-lg shadow mb-6">
                  <h3 className="text-xl font-bold mb-4 text-[#212121]">Berita Terbaru</h3>
                  <div className="space-y-4">
                    {latestArticles.slice(0, 5).map((latestArticle) => (
                      <ArticleCardTypeThree
                        key={latestArticle.article_uuid}
                        data={latestArticle as HomepageLatestArticle}
                        hideImageOnDesktop
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Viral Tags */}
              {viralTags.length > 0 && (
                <section className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-4 text-[#212121]">Viral</h3>
                  <div className="space-y-2">
                    {viralTags.slice(0, 5).map((tag, index) => (
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
      </main>
    </div>
  );
}
