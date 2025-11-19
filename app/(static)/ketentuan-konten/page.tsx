import Breadcrumb from "@/app/components/sections/Breadcrumb";

export default function KetentuanKontenPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: 'Ketentuan Konten' }]} />

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-6">Ketentuan Konten</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-6">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">1. Hak Cipta dan Kepemilikan Konten</h2>
            <p className="mb-4">
              Seluruh konten yang dipublikasikan di News.id, termasuk namun tidak terbatas pada teks, 
              gambar, video, dan audio, adalah milik News.id atau mitra media kami dan dilindungi oleh 
              hukum hak cipta yang berlaku di Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">2. Penggunaan Konten</h2>
            <p className="mb-4">Pengguna diperbolehkan untuk:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Membaca dan mengakses konten untuk kepentingan pribadi</li>
              <li>Membagikan tautan artikel melalui media sosial</li>
              <li>Mengutip sebagian konten dengan menyertakan sumber yang jelas</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">3. Larangan Penggunaan</h2>
            <p className="mb-4">Pengguna dilarang untuk:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Menyalin, mereproduksi, atau mendistribusikan konten tanpa izin</li>
              <li>Menggunakan konten untuk tujuan komersial tanpa lisensi</li>
              <li>Memodifikasi atau mengubah konten tanpa persetujuan</li>
              <li>Menghapus atau mengubah pemberitahuan hak cipta</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">4. Konten Eksklusif</h2>
            <p className="mb-4">
              Beberapa konten di News.id ditandai sebagai "Eksklusif" atau "VIP" yang memerlukan 
              keanggotaan khusus untuk mengakses. Konten ini tidak boleh dibagikan kepada non-anggota.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">5. Lisensi Media dan Pers</h2>
            <p className="mb-4">
              Media massa dan organisasi pers yang ingin menggunakan konten kami dapat menghubungi 
              tim redaksi untuk mendapatkan lisensi khusus.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">6. Pelaporan Pelanggaran</h2>
            <p className="mb-4">
              Jika Anda menemukan pelanggaran terhadap ketentuan konten ini, silakan laporkan kepada 
              kami melalui email: <a href="mailto:legal@news.id" className="text-blue-600 hover:underline">legal@news.id</a>
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">7. Perubahan Ketentuan</h2>
            <p className="mb-4">
              News.id berhak untuk mengubah ketentuan konten ini sewaktu-waktu. Pengguna akan 
              diberitahu tentang perubahan signifikan melalui situs web.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
