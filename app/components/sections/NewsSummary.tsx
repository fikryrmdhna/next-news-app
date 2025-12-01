interface NewsSummaryProps {
  summary: string[];
}

export default function NewsSummary({ summary }: NewsSummaryProps) {
  if (!summary || summary.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-[#212121] mb-3 flex items-center gap-2">
        Ringkasan Berita
      </h3>
      <ul className="space-y-2">
        {summary.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-gray-700 flex-1">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
