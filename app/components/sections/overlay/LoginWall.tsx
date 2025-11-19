'use client'

interface LoginWallProps {
  onLogin?: () => void;
}

export default function LoginWall({ onLogin }: LoginWallProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Konten Terbatas
          </h2>
          <p className="text-gray-600">
            Silakan masuk untuk melanjutkan membaca artikel ini
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onLogin}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition-colors"
          >
            Masuk Sekarang
          </button>
          
          <button className="w-full px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 font-semibold transition-colors">
            Daftar Gratis
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Dengan masuk, Anda menyetujui{' '}
          <a href="/ketentuan-konten" className="text-blue-600 hover:underline">
            Syarat & Ketentuan
          </a>
        </p>
      </div>
    </div>
  );
}
