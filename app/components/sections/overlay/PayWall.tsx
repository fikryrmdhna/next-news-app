'use client'

interface PayWallProps {
  onSubscribe?: () => void;
  articleTitle?: string;
}

export default function PayWall({ onSubscribe, articleTitle }: PayWallProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full mx-4 p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-4">
            KONTEN EKSKLUSIF
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Artikel Premium
          </h2>
          {articleTitle && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              "{articleTitle}"
            </p>
          )}
          <p className="text-gray-600">
            Langganan untuk mendapatkan akses penuh ke artikel eksklusif, laporan investigasi, dan konten premium lainnya.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Benefit Berlangganan:</h3>
          <ul className="space-y-3">
            {[
              'Akses tak terbatas ke semua artikel eksklusif',
              'Laporan investigasi mendalam',
              'Berita terkini tanpa iklan',
              'Newsletter khusus subscriber',
              'Dukungan jurnalisme independen'
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={onSubscribe}
            className="w-full px-6 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition-colors"
          >
            Langganan Sekarang
          </button>
          
          <button className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Kembali
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Mulai dari Rp 50.000/bulan. Batalkan kapan saja.
        </p>
      </div>
    </div>
  );
}
