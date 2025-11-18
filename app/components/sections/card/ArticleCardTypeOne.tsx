import Image from "next/image"
import Link from "next/link"

export default function ArticleCardTypeOne () {
  return (
    <article className="grid md:grid-cols-2 gap-2 lg:gap-6 mb-6">
      <div className="relative">
        <Link href={'/'} >
          <figure>
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="props.data?.feature_image_caption || ''"
              className="w-full lg:w-[523px] aspect-[16/9] rounded-sm object-cover"
              width={100}
              height={100}
              unoptimized
            />
          </figure>
        </Link>
        <Link href={'/'} >
          <div className="absolute bottom-3 text-white text-xs px-3 py-1 flex items-center gap-1">
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="`${props.data?.partner?.name} Avatar` || 'alt image thumbnail'"
              className="w-5 h-5 object-contain rounded-full"
              width={100}
              height={100}
              unoptimized
            />
            props.data?.partner?.name
          </div>
        </Link>
      </div>
      <div className="flex flex-col">
        <Link href={'/'} >
          <p className="font-open-sans text-lg md:text-[32px] font-semibold lg:font-bold mb-0 lg:mb-3 leading-[150%] lg:leading-[120%] text-[#212121]">props.data?.title_digital</p>
          <p className="hidden lg:block text-[#424242] text-sm md:text-base">props.data?.description</p>
        </Link>
      </div>
    </article>
  )
}