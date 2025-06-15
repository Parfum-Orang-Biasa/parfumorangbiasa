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
        <header>
          <Nav />
        </header>

        <div className="max-w-[1440px] mx-auto h-auto px-[24px] tablet:px-[64px] pc:px-[64px]">
          {children}
        </div>

        <footer className="max-w-[1440px] mx-auto px-[39px] py-[85.29px] h-auto tablet:px-[56px] tablet:py-[38px] pc:px-[56px] pc:py-[38px]">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
