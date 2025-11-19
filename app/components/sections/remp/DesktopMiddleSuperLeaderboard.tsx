'use client'

interface DesktopMiddleSuperLeaderboardProps {
  id: string;
  className?: string;
}

export default function DesktopMiddleSuperLeaderboard({ id, className = '' }: DesktopMiddleSuperLeaderboardProps) {
  return (
    <div 
      id={id}
      className={`hidden lg:block w-full min-h-[90px] bg-gray-100 rounded ${className}`}
    >
      {/* REMP Ad will be injected here */}
      <div className="flex items-center justify-center h-[90px] text-gray-400 text-sm">
        Advertisement
      </div>
    </div>
  );
}
