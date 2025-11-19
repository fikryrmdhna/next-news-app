import Link from "next/link";

interface WidgetTagProps {
  tags: string[];
  title?: string;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')

export default function WidgetTag({ tags, title = "Tag Populer" }: WidgetTagProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="bg-white !border !border-[#EEEEEE] p-4 rounded-lg shadow">
      <p className="text-xl !font-bold text-[#212121] !mb-4 leading-6">{title}</p>
      <ul className="space-y-4">
        {tags.map((tag, index) => (
          <li key={index}>
            <Link
              href={`/tag/${slugify(tag)}`}
              className="w-full flex justify-between items-center text-sm font-semibold text-[#212121] rounded transition"
            >
              <span>#{tag}</span>
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.25L7.75 7.5L1.5 13.75" stroke="#BDBDBD" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
