'use client'

interface MobileTopLeaderboardProps {
  id: string;
  className?: string;
}

export default function MobileTopLeaderboard({ id, className = '' }: MobileTopLeaderboardProps) {
  return (
    <div 
      id={id}
      className={`lg:hidden w-full min-h-[62px] bg-gray-100 rounded ${className}`}
    >
      {/* REMP Ad will be injected here */}
      <div className="flex items-center justify-center h-[62px] text-gray-400 text-sm">
        Advertisement
      </div>
    </div>
  );
}
