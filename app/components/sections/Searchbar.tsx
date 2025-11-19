'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchbarProps {
  placeholder?: string;
  className?: string;
}

export default function Searchbar({ placeholder = "Pencarian", className = "" }: SearchbarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/pencarian?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative hidden lg:flex ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full lg:w-[300px] px-4 py-2 pr-10 border border-[#E0E0E0] rounded-md focus:ring-2 focus:ring-[#D72329] focus:border-transparent text-sm"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#D72329]"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
