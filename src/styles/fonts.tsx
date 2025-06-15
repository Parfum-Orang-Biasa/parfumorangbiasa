import { Work_Sans, Geist, Geist_Mono } from "next/font/google";

import localFont from "next/font/local";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nordique = localFont({
  src: "../fonts/nordique.ttf",
  variable: "--font-nordique",
  display: "swap",
  preload: true,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { workSans, nordique, geistSans, geistMono};
