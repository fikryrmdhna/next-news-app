import Image from "next/image"
import Link from "next/link"

export default function ArticleCardTypeTwo () {
  return (
    <article className="overflow-hidden">
      <div className="relative">
        <Link href={'/'} className="block lg:min-w-[250px]">
          <figure>
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="data?.feature_image_caption || 'alt image thumbnail'"
              className="block w-full lg:w-[250px] aspect-[16/9] box-border rounded-sm object-cover"
              width={100}
              height={100}
              unoptimized
            />
          </figure>
        </Link>
        <Link href={'/'}>
          <div className="hidden absolute bottom-2 text-white text-xs px-2 py-1 lg:flex items-center gap-1">
            <Image
              src="https://placehold.co/200x200?text=t"
              alt="`${data?.partner?.name} Avatar`"
              className="w-5 h-5 object-contain rounded-full"
              width={100}
              height={100}
              unoptimized
            />
            data?.partner?.name
          </div>
        </Link>
      </div>
      <div className="lg:line-clamp-4 pt-2">
        <div className="text-base leading-[150%] font-semibold">
          <span>
            Eksklusif
          </span>
          <Link href={'/'} className="text-sm lg:text-base leading-[150%] text-[#212121]">
            data?.title_digital
          </Link>
        </div>
        <Link href={'/'} className="bottom-2 flex lg:hidden items-center gap-1 text-neutral-500 text-xs mt-2">
          <Image
            src="https://placehold.co/20x20?text=t"
            alt="`${data?.partner?.name} Avatar`"
            className="w-5 h-5 rounded-full object-contain"
            width={100}
            height={100}
            unoptimized
          />
          <span>data?.partner?.name</span>
        </Link>
      </div>
    </article>
  )
}