import type { Metadata } from "next";
import { workSans, nordique, geistSans, geistMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parfum Orang Biasa",
  description: "Parfum Orang Biasa",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} ${nordique.variable} antialiased`}
      >
        <div className="max-w-[1440px] mx-auto px-[24px] tablet:px-[64px] pc:px-[64px]">
          {children}
        </div>
      </body>
    </html>
  );
}
