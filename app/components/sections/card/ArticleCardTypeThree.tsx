import Image from "next/image"
import Link from "next/link"
import type { HomepageLatestArticle } from "@/types/homepage"

interface ArticleCardTypeThreeProps {
  data: HomepageLatestArticle
  hideImageOnDesktop?: boolean
}

export default function ArticleCardTypeThree({ data, hideImageOnDesktop }: ArticleCardTypeThreeProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const articleUrl = `${baseUrl}${data?.partner?.alias}/rubrik/${data?.canonical_url}`

  return (
    <article className="overflow-hidden flex space-y-6 gap-3">
      <div className={`relative mb-0 ${hideImageOnDesktop ? 'block mb-2 sm:hidden' : ''}`}>
        <Link href={articleUrl}>
          <figure>
            <Image
              src={data?.feature_image || "https://placehold.co/200x200?text=t"}
              alt={data?.feature_image_caption || 'alt image thumbnail'}
              className="w-[84px] aspect-[1/1] lg:w-[250px] lg:aspect-[16/9] object-cover rounded-sm"
              width={250}
              height={250}
              unoptimized
            />
          </figure>
        </Link>
      </div>
      <div className="flex-1">
        <div className="!mb-2 line-clamp-3 lg:line-clamp-4">
          <div className="text-sm lg:text-base font-semibold leading-[21px] lg:leading-6">
            {data?.access === 'VIP' && (
              <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                Eksklusif
              </span>
            )}
            <Link href={articleUrl} className="!text-[#212121]">
              {data?.title_digital}
            </Link>
          </div>
        </div>

        <Link href={articleUrl}>
          <span className="flex flex-row items-center gap-1">
            <Image
              src={data?.partner?.avatar_url || "https://placehold.co/20x20?text=t"}
              alt={`${data?.partner?.name} Avatar`}
              className="w-5 h-5 object-contain rounded-full"
              width={20}
              height={20}
              unoptimized
            />
            <span className="!text-[#333] text-xs">{data?.partner?.name}</span>
          </span>
        </Link>
      </div>
    </article>
  )
}