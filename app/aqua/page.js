import Link from "next/link";
import DivisionBand from "@/components/DivisionBand";
import OtherUnitsLinks from "@/components/OtherUnitsLinks";
import ContactCTA from "@/components/ContactCTA";
import { PondIllustration } from "@/components/Illustrations";

export const metadata = {
  title: "Agro Valley Aqua | Commercial Fish Farming",
  description:
    "Agro Valley Aqua — একাধিক পুকুরে রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ চাষ ও ঢাকাসহ দেশব্যাপী পাইকারি সরবরাহ।",
};

export default function AquaPage() {
  return (
    <main>
      <section className="pt-32 md:pt-40 pb-4">
        <div className="max-w-wrap mx-auto px-6">
          <Link href="/" className="text-sm text-ink/50 hover:text-brand-dark transition-colors">
            ← হোমে ফিরুন
          </Link>
        </div>
      </section>

      <DivisionBand
        id="aqua"
        eyebrow="Division 01 — Commercial Fish Farming"
        title="Agro Valley Aqua"
        englishName="Commercial fish farming"
        description="একাধিক পুকুরে রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ বাণিজ্যিকভাবে উৎপাদন করে ঢাকা ও দেশব্যাপী পাইকারি সরবরাহ করা হয়।"
        points={[
          "বাণিজ্যিক ভিত্তিতে একাধিক পুকুরে মাছ চাষ",
          "রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ উৎপাদন",
          "ঢাকা ও দেশের বিভিন্ন অঞ্চলে পাইকারি সরবরাহ",
          "খুচরা ক্রেতা ও আড়তদারদের জন্য চাহিদামাফিক সরবরাহ",
          "নিজস্ব ফিড ও পরিচর্যা ব্যবস্থাপনার মাধ্যমে উৎপাদন",
        ]}
        illustration={<PondIllustration />}
      />

      {/* SUPPLY PROCESS */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
              সরবরাহ প্রক্রিয়া
            </p>
            <h2 className="font-display font-bold text-2xl leading-snug">
              পুকুর থেকে
              <br />
              বাজার পর্যন্ত।
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { step: "০১", title: "পরিচর্যা", desc: "নিজস্ব Agro-Vet ইউনিটের ফিড ও ঔষধ দিয়ে পুকুরের মাছ পরিচর্যা করা হয়।" },
              { step: "০২", title: "সংগ্রহ", desc: "উপযুক্ত সময়ে মাছ সংগ্রহ করে গুণগত মান যাচাই করা হয়।" },
              { step: "০৩", title: "সরবরাহ", desc: "ঢাকা ও দেশের বিভিন্ন অঞ্চলে পাইকারি ও খুচরা সরবরাহ করা হয়।" },
              { step: "০৪", title: "চাহিদা অনুযায়ী", desc: "আড়তদার ও ব্যবসায়ীদের নির্দিষ্ট চাহিদা অনুযায়ী সরবরাহ সমন্বয় করা হয়।" },
            ].map((s) => (
              <div key={s.step}>
                <p className="font-mono text-xs text-brand-dark mb-1">{s.step}</p>
                <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherUnitsLinks current="aqua" />
      <ContactCTA />
    </main>
  );
}
