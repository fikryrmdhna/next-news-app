import Image from "next/image"
import Link from "next/link"
import type { HomepageLatestArticle } from "@/types/homepage"

interface ArticleCardTypeOneProps {
  data: HomepageLatestArticle
}

export default function ArticleCardTypeOne({ data }: ArticleCardTypeOneProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const articleUrl = `${baseUrl}${data?.partner?.alias}/rubrik/${data?.canonical_url}`

  return (
    <article className="grid md:grid-cols-2 gap-2 lg:gap-6 mb-6">
      <div className="relative">
        <Link href={articleUrl}>
          <figure>
            <Image
              src={data.feature_image || "https://placehold.co/200x200?text=t"}
              alt={data?.feature_image_caption || ''}
              className="w-full lg:w-[523px] aspect-[16/9] rounded-sm object-cover"
              width={523}
              height={294}
              unoptimized
            />
          </figure>
        </Link>
        <Link href={articleUrl}>
          <div className="absolute bottom-3 text-white text-xs px-3 py-1 flex items-center gap-1">
            <Image
              src={data?.partner?.avatar_url || "https://placehold.co/20x20?text=t"}
              alt={`${data?.partner?.name} Avatar` || 'alt image thumbnail'}
              className="w-5 h-5 object-contain rounded-full"
              width={20}
              height={20}
              unoptimized
            />
            {data?.partner?.name || ''}
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href={articleUrl}>
          <p className="font-open-sans text-lg md:text-[32px] font-semibold lg:font-bold mb-0 lg:mb-3 leading-[150%] lg:leading-[120%] text-[#212121]">{data?.title_digital}</p>
          <p className="hidden lg:block text-[#424242] text-sm md:text-base">{data?.description}</p>
        </Link>
      </div>
    </article>
  )
}