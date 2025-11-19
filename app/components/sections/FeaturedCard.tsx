import Image from "next/image";
import Link from "next/link";
import type { HomepageLatestArticle } from "@/types/homepage";

interface FeaturedCardProps {
  article: HomepageLatestArticle;
  priority?: boolean;
}

export default function FeaturedCard({ article, priority = false }: FeaturedCardProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  const articleUrl = `${baseUrl}${article?.partner?.alias}/rubrik/${article?.canonical_url}`;

  return (
    <article className="relative overflow-hidden rounded-lg shadow-lg group">
      <Link href={articleUrl}>
        <div className="relative h-96">
          <Image
            src={article.feature_image || "https://placehold.co/800x600?text=Featured"}
            alt={article.feature_image_caption || article.title_digital}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={priority}
            unoptimized
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* VIP Badge */}
            {article.access === 'VIP' && (
              <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded mb-3">
                Eksklusif
              </span>
            )}
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-3 line-clamp-3">
              {article.title_digital}
            </h2>
            
            {/* Description */}
            {article.description && (
              <p className="text-sm md:text-base text-gray-200 line-clamp-2 mb-3">
                {article.description}
              </p>
            )}
            
            {/* Partner Info */}
            {article.partner && (
              <div className="flex items-center gap-2">
                <Image
                  src={article.partner.avatar_url}
                  alt={article.partner.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                  unoptimized
                />
                <span className="text-sm">{article.partner.name}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
