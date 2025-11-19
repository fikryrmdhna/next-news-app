export default function SkeletonCardTypeThree() {
  return (
    <article className="overflow-hidden flex gap-3 animate-pulse">
      <div className="w-[84px] h-[84px] lg:w-[250px] lg:h-[141px] bg-gray-200 rounded-sm" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="flex items-center gap-2 mt-3">
          <div className="w-5 h-5 bg-gray-200 rounded-full" />
          <div className="h-3 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </article>
  );
}
