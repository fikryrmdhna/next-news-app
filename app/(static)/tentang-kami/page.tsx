import Breadcrumb from "@/app/components/sections/Breadcrumb";

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: 'Tentang Kami' }]} />

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-6">Tentang News.id</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              News.id adalah platform media berita independen yang berfokus pada jurnalisme investigasi, 
              laporan mendalam, dan analisis kritis untuk publik Indonesia yang cerdas dan kritis.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Visi Kami</h2>
            <p className="text-gray-700 mb-6">
              Menjadi media rujukan utama untuk jurnalisme berkualitas tinggi yang menghadirkan 
              informasi mendalam, akurat, dan berimbang tentang isu-isu penting di Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Misi Kami</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Menghadirkan jurnalisme investigasi yang mendalam dan berkualitas</li>
              <li>Memberikan perspektif beragam dari berbagai daerah di Indonesia</li>
              <li>Menjaga independensi dan integritas dalam pemberitaan</li>
              <li>Mendorong transparansi dan akuntabilitas publik</li>
              <li>Memberdayakan media lokal melalui kolaborasi jaringan</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-[#212121] mb-2">Independensi</h3>
                <p className="text-sm text-gray-700">
                  Bebas dari kepentingan politik dan bisnis, fokus pada kepentingan publik.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-[#212121] mb-2">Akurasi</h3>
                <p className="text-sm text-gray-700">
                  Mengutamakan kebenaran dan verifikasi fakta dalam setiap laporan.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-[#212121] mb-2">Keberagaman</h3>
                <p className="text-sm text-gray-700">
                  Menghadirkan perspektif dari berbagai wilayah dan lapisan masyarakat.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <h3 className="font-bold text-[#212121] mb-2">Transparansi</h3>
                <p className="text-sm text-gray-700">
                  Terbuka tentang sumber informasi dan metode peliputan.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Jaringan Media</h2>
            <p className="text-gray-700 mb-6">
              News.id bekerja sama dengan puluhan media lokal di seluruh Indonesia untuk 
              menghadirkan berita yang beragam dan dekat dengan masyarakat di setiap daerah.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Hubungi Kami</h2>
            <p className="text-gray-700">
              Untuk informasi lebih lanjut, kerjasama, atau pertanyaan lainnya, 
              silakan hubungi kami melalui email di <a href="mailto:redaksi@news.id" className="text-blue-600 hover:underline">redaksi@news.id</a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
