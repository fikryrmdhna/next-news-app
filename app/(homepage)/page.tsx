import { fetchHomepage } from "@/lib/actions";
import ArticleCardTypeFour from "../components/sections/card/ArticleCardTypeFour";
import ArticleCardTypeOne from "../components/sections/card/ArticleCardTypeOne";
import ArticleCardTypeThree from "../components/sections/card/ArticleCardTypeThree";
import ArticleCardTypeTwo from "../components/sections/card/ArticleCardTypeTwo";
import ArticleCardTypeTwoWrapper from "../components/sections/card/ArticleCardTypeTwoWrapper";
import WidgetTag from "../components/sections/WidgetTag";
import ExploreMedia from "../components/sections/ExploreMedia";
import RubricsArticle from "../components/sections/RubricsArticle";
import type { HomepageLatestArticle } from "@/types/homepage";
import Link from "next/link";
import Button from "../components/ui/Button";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Media Jurnalisme Independen dan Investigasi di Indonesia | News.id',
  description: 'News.id adalah media berita independen di Indonesia yang fokus pada jurnalisme investigasi, laporan mendalam, dan analisis kritis untuk publik yang cerdas.',
}

export default async function Home() {
  const rubricAliasPayload = process.env.RUBRIC_ALIAS_PAYLOAD || 'berita-daerah,perspektif,jeda,'
  const tagsPayload = process.env.TAGS_PAYLOAD || 'ham,lingkungan,kebijakan-publik'
  
  const data = await fetchHomepage({
    rubric_alias: rubricAliasPayload,
    tags: tagsPayload
  })

  const rubricDescription = [
    {
      name: 'berita-daerah',
      description: 'Update berita daerah terkini dari berbagai wilayah Indonesia. Fokus pada isu lokal, kebijakan, dan dinamika kehidupan masyarakat.'
    },
    {
      name: 'perspektif',
      description: 'Ruang dialog publik yang diisi dengan opini dan analisis dari berbagai sudut pandang. Perkaya wawasanmu lewat gagasan kritis dan reflektif.'
    },
    {
      name: 'jeda',
      description: 'Temukan berita ringan dan inspiratif seputar budaya lokal, gaya hidup, dan cerita-cerita yang dekat dengan keseharian masyarakat Indonesia.'
    }
  ]

  const articleData = data?.data?.latest_articles || []
  const mainHeadline = articleData.slice(0, 1)
  const othersHeadline = articleData.slice(1, 5)
  const firstLatestNews = articleData.slice(5, 15)
  const secondLatestNews = articleData.slice(15, 25)
  const firstMobileLatestNews = articleData.slice(5, 10)
  const secondMobileLatestNews = articleData.slice(10, 15)
  const widgetBrandData = data?.data?.articles_by_tag || []
  const partnersData = data?.data?.partners?.map((partner) => ({
    ...partner,
    partner_slug: partner.name.toLowerCase().replace(/\s+/g, '-'),
  })) || []
  const viralTags = data?.data?.viral_tags || []
  const rubricsArticleData = data?.data?.article_by_rubrics?.map(
    (item) => ({
      ...item,
      rubric: {
        ...item.rubric,
        description: rubricDescription.find(desc => desc.name === item.rubric.alias)?.description || ''
      }
    })
  ) || []

  return (
    <div className="container">
      <h1 className="sr-only">Media Jurnalisme Independen dan Investigasi di Indonesia | News.id</h1>
      <section className="space-y-6 mb-12">
        {mainHeadline.map((article: HomepageLatestArticle) => (
          <ArticleCardTypeOne key={article.article_uuid} data={article} />
        ))}

        <ArticleCardTypeTwoWrapper>
          {othersHeadline.map((article: HomepageLatestArticle) => (
            <ArticleCardTypeTwo key={article.article_uuid} data={article} />
          ))}
        </ArticleCardTypeTwoWrapper>
      </section>

      <div>
        <div className="block lg:flex lg:flex-row gap-6 mb-6 lg:mb-12">
          <section className="w-full lg:w-[738px]">
            {widgetBrandData.length > 0 && (
              <div className="grid grid-2 gap-4 mb-12 -mx-4 lg:mx-0">
                {widgetBrandData.map((item, index) => (
                  <ArticleCardTypeFour key={`widget-${index}`} data={item} />
                ))}
              </div>
            )}

            {/* Desktop View */}
            <section className="hidden lg:block">
              <h2 className="text-[#212121] text-xl lg:text-2xl font-bold mb-6">Berita Terbaru</h2>
              <section className="mb-6">
                {firstLatestNews.map((article: HomepageLatestArticle) => (
                  <div key={article.article_uuid} className="mb-6">
                    <ArticleCardTypeThree data={article} />
                  </div>
                ))}
              </section>

              {partnersData.length > 0 && (
                <section className="mb-6">
                  <ExploreMedia data={partnersData} />
                </section>
              )}

              <section>
                {secondLatestNews.map((article: HomepageLatestArticle) => (
                  <div key={article.article_uuid} className="mb-6">
                    <ArticleCardTypeThree data={article} />
                  </div>
                ))}
              </section>
              <div>
                <Link href="/indeks">
                  <Button variant="secondary" className="w-full !text-sm font-semibold">
                    Telusuri Berita Terbaru
                  </Button>
                </Link>
              </div>
            </section>

            {/* Mobile View */}
            <section className="block lg:hidden">
              <h2 className="text-[#212121] text-xl lg:text-2xl font-bold mb-6">Berita Terbaru</h2>
              <section className="mb-6">
                {firstMobileLatestNews.map((article: HomepageLatestArticle) => (
                  <div key={article.article_uuid} className="mb-6 !gap-2">
                    <ArticleCardTypeThree data={article} />
                  </div>
                ))}
              </section>
              {viralTags.length > 0 && (
                <section className="mb-6">
                  <WidgetTag tags={viralTags} title="Viral" />
                </section>
              )}
              <section className="mb-6">
                {secondMobileLatestNews.map((article: HomepageLatestArticle) => (
                  <div key={article.article_uuid} className="mb-6 !gap-2">
                    <ArticleCardTypeThree data={article} />
                  </div>
                ))}
              </section>
              {partnersData.length > 0 && (
                <section className="mb-6">
                  <ExploreMedia data={partnersData} />
                </section>
              )}
              <section className="mb-6">
                {secondLatestNews.map((article: HomepageLatestArticle) => (
                  <div key={article.article_uuid} className="mb-6 !gap-2">
                    <ArticleCardTypeThree data={article} />
                  </div>
                ))}
              </section>
              <div className="mb-6">
                <Link href="/indeks">
                  <Button variant="secondary" className="w-full !text-sm font-semibold">
                    Telusuri Berita Terbaru
                  </Button>
                </Link>
              </div>
            </section>
          </section>
          <aside className="w-[308px] space-y-6 hidden lg:block">
            <div className="sticky top-36">
              {viralTags.length > 0 && (
                <div className="mb-6">
                  <WidgetTag tags={viralTags} title="Viral" />
                </div>
              )}
            </div>
          </aside>
        </div>
        {rubricsArticleData.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rubricsArticleData.map((rubricData, index) => (
              <RubricsArticle
                key={`rubric-${index}-${rubricData.rubric.alias}`}
                data={rubricData}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
