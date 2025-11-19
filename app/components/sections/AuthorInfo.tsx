import Image from "next/image";
import type { UserData } from "@/types/articleDetail";

interface AuthorInfoProps {
  authors: UserData[];
}

export default function AuthorInfo({ authors }: AuthorInfoProps) {
  if (!authors || authors.length === 0) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-bold text-[#212121] mb-4">Tentang Penulis</h3>
      <div className="space-y-4">
        {authors.map((author) => (
          <div key={author.id} className="flex items-start gap-4">
            {author.foto && (
              <Image
                src={author.foto}
                alt={author.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
                unoptimized
              />
            )}
            <div className="flex-1">
              <h4 className="font-semibold text-[#212121]">{author.name}</h4>
              {author.biodata && (
                <p className="text-sm text-gray-600 mt-1">{author.biodata}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
