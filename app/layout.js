import { Baloo_Da_2, Hind_Siliguri, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const display = Baloo_Da_2({ subsets: ["bengali", "latin"], weight: ["500", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Hind_Siliguri({ subsets: ["bengali", "latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://avg.vercel.app"),
  title: "Agro Valley Farms | Growing good, together",
  description: "Agro Valley Farms — মাছ, ডিম এবং খামারের প্রয়োজনীয় সরবরাহকে একসঙ্গে নিয়ে তৈরি একটি সমন্বিত কৃষি প্রতিষ্ঠান। রাজশাহী, বাংলাদেশ।",
  keywords: ["Agro Valley", "AgroValley Farms", "মাছ চাষ", "পোল্ট্রি ফার্ম", "ফিড ডিলার", "রাজশাহী"],
  verification: { google: "hr8UjF9EGogsrKMyCSQ7BeInsejd8gMWBI9oci_Jvno" },
  alternates: { canonical: "/" },
  openGraph: { title: "AgroValley Farms", description: "একটি সমন্বিত কৃষি প্রতিষ্ঠান — Aqua · Poultry · Agro-Vet", type: "website", url: "https://avg.vercel.app", locale: "bn_BD" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-white text-ink`}>
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}