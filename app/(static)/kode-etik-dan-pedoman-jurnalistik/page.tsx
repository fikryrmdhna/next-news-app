import Breadcrumb from "@/app/components/sections/Breadcrumb";

export default function KodeEtikPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={[{ label: 'Kode Etik dan Pedoman Jurnalistik' }]} />

        <article className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-6">
            Kode Etik dan Pedoman Jurnalistik
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              News.id berkomitmen untuk menjunjung tinggi kode etik jurnalistik dan 
              pedoman jurnalistik yang berlaku di Indonesia.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Prinsip-Prinsip Dasar</h2>
            
            <h3 className="text-xl font-bold text-[#212121] mt-6 mb-3">1. Independensi</h3>
            <p className="mb-4">
              Wartawan News.id independen, tidak terpengaruh oleh kepentingan politik, ekonomi, 
              atau kekuasaan lainnya. Kami hanya mengabdi kepada kepentingan publik dan kebenaran.
            </p>

            <h3 className="text-xl font-bold text-[#212121] mt-6 mb-3">2. Akurasi dan Kebenaran</h3>
            <p className="mb-4">
              Setiap informasi yang kami sajikan telah melalui proses verifikasi yang ketat. 
              Kami berkomitmen untuk memperbaiki kesalahan sesegera mungkin jika terjadi.
            </p>

            <h3 className="text-xl font-bold text-[#212121] mt-6 mb-3">3. Keberimbangan</h3>
            <p className="mb-4">
              Kami menghadirkan berbagai perspektif dalam setiap pemberitaan, terutama untuk 
              isu-isu yang kontroversial atau sensitif.
            </p>

            <h3 className="text-xl font-bold text-[#212121] mt-6 mb-3">4. Perlindungan Narasumber</h3>
            <p className="mb-4">
              Kami menghormati dan melindungi identitas narasumber yang meminta kerahasiaan, 
              kecuali diwajibkan oleh hukum.
            </p>

            <h3 className="text-xl font-bold text-[#212121] mt-6 mb-3">5. Hak Privasi</h3>
            <p className="mb-4">
              Kami menghormati hak privasi individu dan hanya mengungkap informasi pribadi 
              jika memiliki kepentingan publik yang kuat.
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Standar Editorial</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Memverifikasi fakta dari minimal dua sumber independen</li>
              <li>Memberikan hak jawab kepada pihak yang diberitakan</li>
              <li>Memisahkan fakta dari opini dengan jelas</li>
              <li>Menghindari sensasionalisme dan clickbait</li>
              <li>Tidak menerima gratifikasi atau suap dalam bentuk apapun</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Koreksi dan Klarifikasi</h2>
            <p className="mb-4">
              Jika Anda menemukan kesalahan dalam pemberitaan kami atau ingin memberikan 
              hak jawab, silakan hubungi kami di <a href="mailto:redaksi@news.id" className="text-blue-600 hover:underline">redaksi@news.id</a>
            </p>

            <h2 className="text-2xl font-bold text-[#212121] mt-8 mb-4">Keanggotaan Organisasi</h2>
            <p className="mb-4">
              News.id tergabung dalam Dewan Pers Republik Indonesia dan mengikuti seluruh 
              ketentuan yang ditetapkan oleh organisasi profesi jurnalistik Indonesia.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
