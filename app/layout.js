import { Baloo_Da_2, Hind_Siliguri, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Baloo_Da_2({
  subsets: ["bengali", "latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Agro Valley Limited | Aqua · Poultry · Agro-Vet",
  description:
    "Agro Valley Limited — পুকুরে মাছ চাষ, ডিম উৎপাদনের পোল্ট্রি খামার এবং ফিড ও ঔষধের পাইকারি-খুচরা ডিলারশিপ। একটি সমন্বিত কৃষি প্রতিষ্ঠান।",
  keywords: [
    "Agro Valley",
    "মাছ চাষ",
    "পোল্ট্রি ফার্ম",
    "ফিড ডিলার",
    "পোল্ট্রি ঔষধ",
    "মাছের ঔষধ",
    "Fish Farm Bangladesh",
    "Poultry Farm Bangladesh",
  ],
  openGraph: {
    title: "Agro Valley Limited",
    description:
      "একটি সমন্বিত কৃষি প্রতিষ্ঠান — Aqua · Poultry · Agro-Vet",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
