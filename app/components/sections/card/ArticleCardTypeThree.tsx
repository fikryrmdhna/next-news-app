import Image from "next/image"
import Link from "next/link"

export default function ArticleCardTypeThree () {
  return (
    <article className="overflow-hidden flex space-y-6 gap-3">
      <div className="relative mb-0">
        <Link href={'/'}>
          <figure>
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="data?.feature_image_caption || 'alt image thumbnail'"
              className="w-[84px] aspect-[1/1] lg:w-[250px] lg:aspect-[16/9] object-cover rounded-sm"
              width={100}
              height={100}
              unoptimized
            />
          </figure>
        </Link>
      </div>
      <div className="flex-1">
        <div className="!mb-2 line-clamp-3 lg:line-clamp-4">
          <div className="text-sm lg:text-base font-semibold leading-[21px] lg:leading-6">
            <span v-if="data?.access === 'VIP'">
              Eksklusif
            </span>
            <Link href={'/'} className="!text-[#212121]">
              data?.title_digital
            </Link>
          </div>
        </div>

        <Link href={'/'}>
          <span className="flex flex-row items-center gap-1">
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="`${data?.partner?.name} Avatar`"
              className="w-5 h-5 object-contain rounded-full"
              width={100}
              height={100}
              unoptimized
            />
            <span className="!text-[#333] text-xs">data?.partner?.name</span>
          </span>
        </Link>
      </div>
    </article>
  )
}