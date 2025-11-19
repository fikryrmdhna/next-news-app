'use client'

interface DesktopMediumRectangleProps {
  id: string;
  className?: string;
}

export default function DesktopMediumRectangle({ id, className = '' }: DesktopMediumRectangleProps) {
  return (
    <div 
      id={id}
      className={`hidden lg:block w-full max-w-[300px] min-h-[250px] bg-gray-100 rounded ${className}`}
    >
      {/* REMP Ad will be injected here */}
      <div className="flex items-center justify-center h-[250px] text-gray-400 text-sm">
        Advertisement
      </div>
    </div>
  );
}
