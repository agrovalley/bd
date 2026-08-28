import Link from "next/link";
import DivisionBand from "@/components/DivisionBand";
import OtherUnitsLinks from "@/components/OtherUnitsLinks";
import ContactCTA from "@/components/ContactCTA";
import UnitPhoto from "@/components/UnitPhoto";

export const metadata = {
  title: "Agro Valley Poultry | Fresh Egg Production",
  description:
    "Agro Valley Poultry — বড় পরিসরে লেয়ার মুরগি পালন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে নিয়মিত তাজা ডিম সরবরাহ।",
};

export default function PoultryPage() {
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
        id="poultry"
        eyebrow="Division 02 — Fresh Egg Production"
        title="Agro Valley Poultry"
        englishName="Fresh egg production"
        description="আধুনিক স্বাস্থ্যব্যবস্থাপনার মাধ্যমে বড় পরিসরে লেয়ার মুরগি পালন করা হয়, যা থেকে নিয়মিত তাজা ডিম উৎপাদিত হয় এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে সরবরাহ করা হয়।"
        points={[
          "বড় পরিসরে লেয়ার মুরগি পালন",
          "নিয়মিত তাজা ডিম উৎপাদন ও সরবরাহ",
          "আড়ত, দোকান ও পরিবেশক পর্যায়ে পাইকারি ডিম সরবরাহ",
          "মানসম্মত স্বাস্থ্যব্যবস্থাপনায় উৎপাদিত ডিম",
          "নিজস্ব ফিড ও ব্যবস্থাপনা সহায়তায় খামার পরিচালনা",
        ]}
        illustration={<UnitPhoto src="/images/poultry-farm.jpg" alt="Agro Valley Poultry — লেয়ার মুরগির খামার" priority />}
      />

      {/* HEALTH MANAGEMENT */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
              ব্যবস্থাপনা
            </p>
            <h2 className="font-display font-bold text-2xl leading-snug">
              স্বাস্থ্য ও মান
              <br />
              নিয়ন্ত্রণ।
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { title: "নিয়মিত পরিচর্যা", desc: "নিজস্ব Agro-Vet ইউনিটের ফিড, ভিটামিন ও ভ্যাকসিন দিয়ে খামার পরিচালিত হয়।" },
              { title: "মানসম্মত সংগ্রহ", desc: "প্রতিদিন উৎপাদিত ডিম মান যাচাই করে সংগ্রহ করা হয়।" },
              { title: "সরবরাহ নেটওয়ার্ক", desc: "আড়ত, দোকান ও পরিবেশকদের কাছে নিয়মিত সরবরাহ ব্যবস্থা।" },
              { title: "চাহিদা অনুযায়ী সরবরাহ", desc: "পাইকারি ক্রেতাদের পরিমাণ অনুযায়ী সরবরাহ সমন্বয় করা হয়।" },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherUnitsLinks current="poultry" />
      <ContactCTA />
    </main>
  );
}
