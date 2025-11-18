import Image from "next/image";

export default function ArticleCardTypeFour () {
  return (
    <article>
      <div className="h-full flex flex-col justify-between">
        <a href="#" className="mb-[10px]">
          <figure>
            <Image
              src="https://placehold.co/200x200?text=t"
              width={100}
              height={100}
              alt="article.feature_image_caption || 'alt image thumbnail'"
              className="w-full h-[120px] lg:h-[87px] rounded-sm object-cover mb-[8px]"
              unoptimized
            />
          </figure>
          <p className="font-semibold text-sm leading-[150%]">article.title_digital</p>
        </a>
        <div className="mt-auto">
          <a href="#" className="flex items-center">
            <Image
              src="https://placehold.co/200x200?text=t"
              width={100}
              height={100}
              alt="`${article.partner.name} Avatar`"
              className="inline-block size-5 rounded-full ring-1 ring-white object-contain"
              unoptimized
            />
            <p className="text-xs font-normal text-[#212121] ms-2">article.partner?.name</p>
          </a>
          <hr className="w-full border border-[#FCDBB4] my-[12px]" />
          <a href="#" className="w-full">
            <button className="w-full !text-sm font-semibold !bg-white">props.data?.tag?.caption</button>
          </a>
        </div>
      </div>
    </article>
  );
}