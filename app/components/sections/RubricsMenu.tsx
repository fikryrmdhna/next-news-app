import Link from "next/link";

interface RubricMenuItem {
  id: number;
  name: string;
  alias: string;
  icon?: string;
}

interface RubricsMenuProps {
  rubrics?: RubricMenuItem[];
}

export default function RubricsMenu({ rubrics = [] }: RubricsMenuProps) {
  // Default rubrics if none provided
  const defaultRubrics: RubricMenuItem[] = [
    { id: 1, name: 'Berita Daerah', alias: 'berita-daerah' },
    { id: 2, name: 'Perspektif', alias: 'perspektif' },
    { id: 3, name: 'Jeda', alias: 'jeda' },
    { id: 4, name: 'Mendalam', alias: 'mendalam' },
  ];

  const menuItems = rubrics.length > 0 ? rubrics : defaultRubrics;

  return (
    <>
      {menuItems.map((rubric) => (
        <Link
          key={rubric.id}
          href={`/rubrik/${rubric.alias}`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-none text-md ring-offset-white transition-colors focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-neutral-900 h-10 px-4 py-2 flex-none text-sm font-medium hover:text-[#D72329]"
        >
          {rubric.name}
        </Link>
      ))}
    </>
  );
}
