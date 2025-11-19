import Breadcrumb from "@/app/components/sections/Breadcrumb";

export default function PedomanMediaSiberPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: 'Pedoman Media Siber' }]} />

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-6">Pedoman Media Siber</h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              News.id mengikuti Pedoman Pemberitaan Media Siber yang ditetapkan oleh 
              Dewan Pers Republik Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">1. Ruang Lingkup</h2>
            <p className="mb-4">
              Pedoman ini berlaku untuk seluruh konten yang dipublikasikan di News.id, 
              termasuk artikel, foto, video, dan konten multimedia lainnya.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">2. Verifikasi dan Keberimbangan Berita</h2>
            <p className="mb-4">
              Setiap berita yang kami publikasikan telah melalui proses:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Verifikasi sumber dan kebenaran informasi</li>
              <li>Konfirmasi kepada pihak terkait</li>
              <li>Cross-check dengan sumber independen</li>
              <li>Review editorial sebelum publikasi</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">3. Isi Buatan Pengguna (User Generated Content)</h2>
            <p className="mb-4">
              News.id tidak memiliki fitur untuk konten buatan pengguna. Semua konten 
              diproduksi oleh tim redaksi profesional dan mitra media kami.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">4. Ralat, Koreksi, dan Hak Jawab</h2>
            <p className="mb-4">
              Jika terdapat kesalahan dalam pemberitaan:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Ralat akan segera dipublikasikan di artikel yang sama</li>
              <li>Perubahan signifikan akan dicantumkan di bagian akhir artikel</li>
              <li>Hak jawab akan diberikan kepada pihak yang merasa dirugikan</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">5. Pencabutan Berita</h2>
            <p className="mb-4">
              Berita hanya akan dicabut dalam kondisi:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Terdapat perintah pengadilan yang sah</li>
              <li>Terbukti secara mendasar tidak benar</li>
              <li>Melanggar ketentuan hukum yang berlaku</li>
            </ul>
            <p className="mb-4">
              Pencabutan akan disertai dengan catatan editor yang menjelaskan alasannya.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">6. Iklan</h2>
            <p className="mb-4">
              Iklan dan konten sponsor akan dibedakan dengan jelas dari konten editorial. 
              Kami tidak mengizinkan iklan yang menyesatkan atau tidak etis.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">7. Hak Cipta</h2>
            <p className="mb-4">
              Kami menghormati hak cipta pihak lain dan hanya menggunakan materi yang 
              telah mendapat izin atau sesuai dengan prinsip fair use.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">8. Privasi</h2>
            <p className="mb-4">
              Data pribadi pengguna dilindungi sesuai dengan peraturan perundang-undangan 
              yang berlaku. Lihat <a href="/kebijakan-privasi" className="text-blue-600 hover:underline">Kebijakan Privasi</a> kami 
              untuk informasi lebih lanjut.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">9. Pengaduan</h2>
            <p className="mb-4">
              Pengaduan terkait pemberitaan dapat disampaikan melalui:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Email: <a href="mailto:pengaduan@news.id" className="text-blue-600 hover:underline">pengaduan@news.id</a></li>
              <li>Melalui Dewan Pers RI jika diperlukan mediasi</li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}
