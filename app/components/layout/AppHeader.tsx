import Link from "next/link";
import Image from "next/image";
import Searchbar from "../sections/Searchbar";
import RubricsMenu from "../sections/RubricsMenu";

export default function AppHeader() {
  return (
    <>
      <div className="bg-white lg:shadow-md sticky top-0 z-30">
        <header className="container px-0 mx-auto relative">
          <div className="flex flex-items-center justify-between py-4 px-6">
            {/* News Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/img/logo_teras.svg"
                alt="Logo News"
                width={150}
                height={50}
                className="w-[130px] lg:w-[150px] aspect-3/1 object-contain"
              />
            </Link>

            {/* Searchbar */}
            <div className="flex items-center w-auto">
              <nav className="hidden lg:flex items-center mr-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-none text-md ring-offset-white transition-colors focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-neutral-900 h-10 px-2 py-2 flex-none text-base"
                >
                  Beranda
                </Link>
                <Link
                  href="/jaringan"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-none text-md ring-offset-white transition-colors focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-neutral-900 h-10 px-2 py-2 flex-none text-base"
                >
                  Jaringan
                </Link>
              </nav>
              <Searchbar />
            </div>

            {/* User Navigation */}
            <div className="items-center flex">
              <Link
                href={process.env.NEXT_PUBLIC_SSO_URL || '#'}
                className="font-semibold px-2 lg:px-4 py-2 text-sm me-2 bg-[#D72329] text-white rounded-md"
              >
                Dukung Kami
              </Link>

              <button
                type="button"
                className="text-black font-semibold lg:border cursor-pointer lg:border-[#616161] rounded-md text-sm lg:px-3 lg:py-2 text-center flex items-center"
              >
                <Image
                  src="/img/icon_user_profile.svg"
                  alt="Icon User Profile"
                  width={36}
                  height={36}
                  className="w-9 h-9 lg:w-5 lg:h-5 lg:me-1"
                />
                <span className="hidden text-sm lg:block text-[#616161]">Masuk</span>
              </button>
            </div>
          </div>
        </header>

        {/* Rubrics Navigation */}
        <div className="relative bg-[#FCFCFC] border-b border-t border-neutral-100">
          <div className="container px-0 relative mx-auto">
            <div className="flex flex-nowrap overflow-auto scrollbar-hide px-0 lg:px-6">
              <RubricsMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
