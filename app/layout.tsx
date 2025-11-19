import type { Metadata } from "next";
import "./globals.css";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
import AppBottomNav from "./components/layout/AppBottomNav";

export const metadata: Metadata = {
  title: "News.id - Media Jurnalisme Independen dan Investigasi",
  description: "Media berita independen di Indonesia yang fokus pada jurnalisme investigasi, laporan mendalam, dan analisis kritis untuk publik yang cerdas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <AppHeader />
        <AppBottomNav />
        <main className="mt-6">
          {children}
        </main>
        <footer className="bg-white border-t border-[#eeeeee] pt-6 mt-12">
          <AppFooter />
        </footer>
      </body>
    </html>
  );
}
