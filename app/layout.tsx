import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agro Valley Limited | Integrated Agro Enterprise",
  description:
    "Agro Valley Limited — মাছ চাষ, ডিম উৎপাদন এবং ফিড ও ভেটেরিনারি সাপ্লাইয়ের সমন্বিত কৃষি প্রতিষ্ঠান।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
