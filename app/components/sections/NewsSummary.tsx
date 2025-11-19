interface NewsSummaryProps {
  summary: string[];
}

export default function NewsSummary({ summary }: NewsSummaryProps) {
  if (!summary || summary.length === 0) return null;

  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
      <h3 className="text-lg font-bold text-[#212121] mb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        Poin Penting
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
