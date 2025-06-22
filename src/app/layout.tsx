import type { Metadata } from "next";
import { workSans, nordique, geistSans, geistMono } from "@/styles/fonts";
import "./globals.css";
import { Footer, Nav } from "@/components";

export const metadata: Metadata = {
  title: "Parfum Orang Biasa",
  description: "Temukan parfum terbaik untuk keseharianmu. Dibuat oleh orang biasa, untuk kita, orang biasa. Tanpa janji yang dibuat-buat atau berlebihan, setiap aroma kami buat untuk menemani momen-momen kita yang kadang berantakan, kadang indah—apa adanya. Coba sekarang!",
  keywords: ["POB", "parfum orang biasa", "orang biasa", "wangi", "parfum","parfum tahan lama",
    "wewangian harian",
    "rekomendasi parfum", "parfum rekomendasi",
    "parfum lokal", "parfum Indonesia", "parfum murah", "parfum berkualitas",
    "parfum unisex", "parfum pria", "parfum wanita",
    "parfum fresh", "parfum floral", "parfum oriental", "parfum woody",
    "parfum citrus", "parfum fruity", "parfum gourmand",
    "parfum tahan lama", "parfum segar", "parfum manis", "parfum unik",
    "parfum elegan", "parfum kasual", "parfum harian",
    "parfum untuk kerja", "parfum untuk acara", "parfum untuk santai",
    "parfum untuk kencan", "parfum untuk pesta",
    "parfum untuk musim panas", "parfum untuk musim dingin",
    "parfum untuk pria", "parfum untuk wanita", "parfum untuk remaja",
    "parfum untuk dewasa", "parfum untuk anak muda",
    "parfum untuk segala usia", "parfum untuk segala jenis kelamin",
    "parfum untuk segala suasana", "parfum untuk segala momen",],
  authors: [
    {
      name: "Parfum Orang Biasa",
      url: "https://parfumorangbiasa.com",
    },
  ],
  creator: "Parfum Orang Biasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="POB" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="POB" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${nordique.variable} antialiased`}
      >
        <header className="fixed h-[40px] tablet:h-[65px] pc:h-[64px] top-0 left-0 right-0 z-50 mt-[16px] h-[64px] pl-[24px] tablet:pl-[64px] pc:pl-[calc((100vw-1440px)/2+64px)] flex justify-between items-center pointer-events-none">
          <Nav />
        </header>
        
        <div className="mx-auto h-auto overflow-x-hidden px-[24px] tablet:px-[64px] pc:px-[64px]"> 
          {children}
        </div>

        <footer className="max-w-[1440px] mx-auto px-[24px] py-[32px] h-auto tablet:px-[64px] tablet:py-[64px]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
