import Image from "next/image"
import Link from "next/link"
import type { HomepageLatestArticle } from "@/types/homepage"

interface ArticleCardTypeTwoProps {
  data: HomepageLatestArticle
  isTitleBold?: boolean
  isRubricArticleHeadline?: boolean
  classTitle?: string
  classImage?: string
}

export default function ArticleCardTypeTwo({ 
  data, 
  isTitleBold, 
  isRubricArticleHeadline,
  classTitle,
  classImage 
}: ArticleCardTypeTwoProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const articleUrl = `${baseUrl}${data?.partner?.alias}/rubrik/${data?.canonical_url}`

  return (
    <article className="overflow-hidden">
      <div className="relative">
        <Link href={articleUrl} className="block lg:min-w-[250px]">
          <figure>
            <Image
              src={data?.feature_image || "https://placehold.co/200x200?text=t"}
              alt={data?.feature_image_caption || 'alt image thumbnail'}
              className={`block w-full lg:w-[250px] aspect-[16/9] box-border rounded-sm object-cover ${classImage || ''}`}
              width={250}
              height={141}
              unoptimized
            />
          </figure>
        </Link>
        <Link href={articleUrl}>
          <div className={`hidden absolute bottom-2 text-white text-xs px-2 py-1 lg:flex items-center gap-1 ${isRubricArticleHeadline ? '!flex' : ''}`}>
            <Image
              src={data?.partner?.avatar_url || "https://placehold.co/20x20?text=t"}
              alt={`${data?.partner?.name} Avatar`}
              className="w-5 h-5 object-contain rounded-full"
              width={20}
              height={20}
              unoptimized
            />
            {data?.partner?.name}
          </div>
        </Link>
      </div>
      <div className="lg:line-clamp-4 pt-2">
        <div className="text-base leading-[150%] font-semibold">
          {data?.access === 'VIP' && (
            <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded mr-2">
              Eksklusif
            </span>
          )}
          <Link href={articleUrl} className={`text-sm lg:text-base leading-[150%] text-[#212121] ${isTitleBold ? 'font-bold' : ''} ${classTitle || ''}`}>
            {data?.title_digital}
          </Link>
        </div>
        <Link href={articleUrl} className={`bottom-2 flex lg:hidden items-center gap-1 text-neutral-500 text-xs mt-2 ${isRubricArticleHeadline ? '!hidden' : ''}`}>
          <Image
            src={data?.partner?.avatar_url || "https://placehold.co/20x20?text=t"}
            alt={`${data?.partner?.name} Avatar`}
            className="w-5 h-5 rounded-full object-contain"
            width={20}
            height={20}
            unoptimized
          />
          <span>{data?.partner?.name}</span>
        </Link>
      </div>
    </article>
  )
}