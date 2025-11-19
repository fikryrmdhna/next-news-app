import ArticleCardTypeThree from "./card/ArticleCardTypeThree";
import type { Article } from "@/types/rubricType";

interface BeritaDaerahProps {
  articles: Article[];
  provinceName?: string;
}

export default function BeritaDaerah({ articles, provinceName }: BeritaDaerahProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-[#212121] mb-4">
        {provinceName ? `Berita Daerah - ${provinceName}` : 'Berita Daerah'}
      </h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCardTypeThree
            key={article.article_uuid}
            data={article as any}
          />
        ))}
      </div>
    </div>
  );
}
