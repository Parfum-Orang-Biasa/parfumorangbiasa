import type { Metadata } from "next";
import { workSans, nordique, geistSans, geistMono } from "@/styles/fonts";
import "./globals.css";
import { Footer, Nav } from "@/components";

export const metadata: Metadata = {
  title: "Parfum Orang Biasa",
  description: "Parfum Untuk Kita, Orang Biasa",
  keywords: ["POB", "parfum orang biasa", "orang biasa", "wangi", "parfum"],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${nordique.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 mt-[16px] h-[64px] pl-[24px] tablet:pl-[64px] pc:pl-[calc((100vw-1440px)/2+64px)] flex justify-between items-center">
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
