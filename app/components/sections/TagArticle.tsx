import Link from "next/link";

interface TagArticleProps {
  tags: string[];
}

export default function TagArticle({ tags }: TagArticleProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, index) => (
        <Link
          key={index}
          href={`/tag/${tag}`}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
