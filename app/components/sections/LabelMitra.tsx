import Image from "next/image";
import Link from "next/link";

interface LabelMitraProps {
  name: string;
  avatar?: string;
  alias: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LabelMitra({ name, avatar, alias, size = 'md' }: LabelMitraProps) {
  const sizes = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-base',
  };

  return (
    <Link 
      href={`/${alias}`}
      className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
    >
      {avatar && (
        <Image
          src={avatar}
          alt={`${name} logo`}
          width={20}
          height={20}
          className={`${sizes[size].split(' ')[0]} ${sizes[size].split(' ')[1]} rounded-full object-cover`}
          unoptimized
        />
      )}
      <span className={`${sizes[size].split(' ')[2]} text-gray-700`}>
        {name}
      </span>
    </Link>
  );
}
