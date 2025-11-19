import Image from "next/image";
import Link from "next/link";
import type { HomepageTag, HomepageLatestArticle } from "@/types/homepage"

interface ArticleCardTypeFourProps {
  data: {
    tag: HomepageTag;
    articles: HomepageLatestArticle[];
  }
}

function formattedPartnerName(partner_name: string) {
  return partner_name ? partner_name.replace(/[.\s]+/g, '-').toLowerCase() : ''
}

export default function ArticleCardTypeFour({ data }: ArticleCardTypeFourProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  
  if (!data || !Array.isArray(data?.articles) || data?.articles.length === 0) {
    return null
  }

  return (
    <article>
      {data.articles.map((article, index) => {
        const articleUrl = `${baseUrl}${article?.partner?.alias}/rubrik/${article.canonical_url}`
        
        return (
          <div key={`widget-brand-${index}-${article.article_uuid}`} className="h-full flex flex-col justify-between">
            <Link href={articleUrl} className="mb-[10px]">
              <figure>
                <Image
                  src={article.feature_image || "https://placehold.co/200x200?text=t"}
                  width={200}
                  height={120}
                  alt={article.feature_image_caption || 'alt image thumbnail'}
                  className="w-full h-[120px] lg:h-[87px] rounded-sm object-cover mb-[8px]"
                  unoptimized
                />
              </figure>
              <p className="font-semibold text-sm leading-[150%]">{article.title_digital}</p>
            </Link>
            <div className="mt-auto">
              {article.partner && (
                <Link href={`/${formattedPartnerName(article.partner?.name)}`} className="flex items-center">
                  <Image
                    src={article.partner?.avatar_url || "https://placehold.co/20x20?text=t"}
                    width={20}
                    height={20}
                    alt={`${article.partner.name} Avatar`}
                    className="inline-block size-5 rounded-full ring-1 ring-white object-contain"
                    unoptimized
                  />
                  <p className="text-xs font-normal text-[#212121] ms-2">{article.partner?.name}</p>
                </Link>
              )}
              <hr className="w-full border border-[#FCDBB4] my-[12px]" />
              <Link href={`/tag/${data?.tag?.alias}`} className="w-full">
                <button className="w-full !text-sm font-semibold !bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
                  {data?.tag?.caption}
                </button>
              </Link>
            </div>
          </div>
        )
      })}
    </article>
  );
}