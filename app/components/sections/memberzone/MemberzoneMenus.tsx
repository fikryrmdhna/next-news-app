'use client'

interface MenuItemProps {
  icon: string;
  label: string;
  href: string;
}

const menuItems: MenuItemProps[] = [
  { icon: '👤', label: 'Profil Saya', href: '/profil' },
  { icon: '📰', label: 'Artikel Tersimpan', href: '/tersimpan' },
  { icon: '⭐', label: 'Langganan', href: '/langganan' },
  { icon: '⚙️', label: 'Pengaturan', href: '/pengaturan' },
];

export default function MemberzoneMenus() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-lg mb-4">Menu Member</h3>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-700">{item.label}</span>
          </a>
        ))}
        <button className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-100 transition-colors w-full text-left text-red-600">
          <span className="text-2xl">🚪</span>
          <span>Keluar</span>
        </button>
      </nav>
    </div>
  );
}
