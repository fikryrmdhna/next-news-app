import ArticleCardTypeThree from "./card/ArticleCardTypeThree";
import type { ArticleData } from "@/types/articleDetail";

interface ReadRelatedProps {
  articles: ArticleData[];
  title?: string;
}

export default function ReadRelated({ articles, title = "Artikel Terkait" }: ReadRelatedProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-2xl font-bold text-[#212121] mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
