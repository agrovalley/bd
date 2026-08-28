import Link from "next/link";
import DivisionBand from "@/components/DivisionBand";
import OtherUnitsLinks from "@/components/OtherUnitsLinks";
import ContactCTA from "@/components/ContactCTA";
import { FeedIllustration } from "@/components/Illustrations";

export const metadata = {
  title: "Agro Valley Agro-Vet | Feed & Veterinary Supply",
  description:
    "Agro Valley Agro-Vet — মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন ও মিনারেল প্রিমিক্সের খুচরা ও পাইকারি ডিলারশিপ।",
};

export default function AgroVetPage() {
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
        id="agro-vet"
        eyebrow="Division 03 — Feed & Veterinary Supply"
        title="Agro Valley Agro-Vet"
        englishName="Feed & veterinary supply"
        description="মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল প্রিমিক্স ও সাপ্লিমেন্টের খুচরা এবং পাইকারি ডিলারশিপ — নিজস্ব খামারের চাহিদা মেটানোর পাশাপাশি বাহ্যিক খামার ও ব্যবসায়ীদের সরবরাহ করা হয়।"
        points={[
          "পোনা থেকে পূর্ণবয়স্ক মাছের জন্য বিভিন্ন গ্রেডের ফিড",
          "লেয়ার ও ব্রয়লার উপযোগী পোল্ট্রি ফিড",
          "মাছ ও পোল্ট্রির প্রয়োজনীয় ঔষধ ও ভ্যাকসিন",
          "ভিটামিন, মিনারেল প্রিমিক্স ও অন্যান্য সাপ্লিমেন্ট",
          "খুচরা ও পাইকারি — উভয় পর্যায়ে বিক্রয়",
        ]}
        illustration={<FeedIllustration />}
      />

      {/* SUPPLY SCOPE */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
              সরবরাহ পরিধি
            </p>
            <h2 className="font-display font-bold text-2xl leading-snug">
              অভ্যন্তরীণ ও
              <br />
              বাহ্যিক সরবরাহ।
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { title: "অভ্যন্তরীণ সরবরাহ", desc: "নিজস্ব Aqua ও Poultry খামারের জন্য নিয়মিত ফিড ও ঔষধ সরবরাহ।" },
              { title: "ডিলারশিপ", desc: "বাহ্যিক খামারি ও ব্যবসায়ীদের জন্য খুচরা ও পাইকারি সরবরাহ।" },
              { title: "মানসম্মত পণ্য", desc: "প্রয়োজনীয় ভ্যাকসিন, ভিটামিন ও মিনারেল প্রিমিক্স সরবরাহ।" },
              { title: "পরামর্শ সহায়তা", desc: "ফিড ও ঔষধ ব্যবহার সংক্রান্ত সাধারণ পরামর্শ প্রদান।" },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OtherUnitsLinks current="agro-vet" />
      <ContactCTA />
    </main>
  );
}
