import { Baloo_Da_2, Hind_Siliguri, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://avg.vercel.app"),
  title: "Agro Valley Group | Integrated Agro Enterprise",
  description:
    "Agro Valley Group — মাছ চাষ, ডিম উৎপাদন এবং ফিড ও ভেটেরিনারি সাপ্লাইয়ের সমন্বিত কৃষি প্রতিষ্ঠান। রাজশাহী, বাংলাদেশ।",
  keywords: [
    "Agro Valley",
    "Agro Valley Group",
    "মাছ চাষ",
    "পোল্ট্রি ফার্ম",
    "ফিড ডিলার",
    "পোল্ট্রি ঔষধ",
    "মাছের ঔষধ",
    "Fish Farming Bangladesh",
    "Poultry Farm Bangladesh",
    "Agro Vet",
    "Rajshahi",
    "Durgapur",
    "Jhaluka",
  ],
  openGraph: {
    title: "Agro Valley Group",
    description:
      "একটি সমন্বিত কৃষি প্রতিষ্ঠান — Aqua · Poultry · Agro-Vet",
    type: "website",
    url: "https://avg.vercel.app",
    locale: "bn_BD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-white text-ink`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
