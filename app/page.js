import CycleDiagram from "@/components/CycleDiagram";
import UnitPreviewCard from "@/components/UnitPreviewCard";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import { PondIllustration, PoultryIllustration, FeedIllustration } from "@/components/Illustrations";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #16A34A 0, transparent 45%), radial-gradient(circle at 85% 15%, #116B35 0, transparent 40%), radial-gradient(circle at 60% 90%, #4ADE80 0, transparent 45%)",
          }}
        />
        <div className="max-w-wrap mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-5 fade-up">
            Integrated Agro Enterprise · Bangladesh
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.15] max-w-3xl text-ink fade-up" style={{ animationDelay: "0.1s" }}>
            মাটি, পানি ও প্রাণীজ খাদ্যে একটি পূর্ণাঙ্গ চক্র।
          </h1>
          <p className="mt-6 max-w-xl text-ink/70 leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
            Agro Valley Group উৎপাদন থেকে সরবরাহ — পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে
            পরিচালনা করে। Aqua, Poultry এবং Agro-Vet-এর মাধ্যমে আমরা স্বাস্থ্যকর
            উৎপাদন ও নির্ভরযোগ্য সরবরাহ নিশ্চিত করি।
          </p>

          <div className="mt-9 flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact" className="bg-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors">
              ব্যবসায়িক যোগাযোগ
            </Link>
            <Link href="/about" className="border border-ink/20 px-6 py-3 rounded-full text-sm font-medium hover:border-ink/50 transition-colors">
              প্রতিষ্ঠান সম্পর্কে জানুন
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "Agro Valley Aqua", href: "/aqua" },
              { label: "Agro Valley Poultry", href: "/poultry" },
              { label: "Agro Valley Agro-Vet", href: "/agro-vet" },
            ].map((b) => (
              <Link
                key={b.label}
                href={b.href}
                className="font-mono text-xs px-4 py-2 rounded-full border border-brand/30 text-brand-dark hover:bg-soft transition-colors"
              >
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CYCLE DIAGRAM — signature element */}
      <section className="bg-soft py-20 md:py-28 border-y border-ink/10">
        <div className="max-w-wrap mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-ink/50 mb-3">
            সমন্বিত উৎপাদন ও সরবরাহ
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl max-w-xl mx-auto mb-14">
            যা আমরা উৎপাদন করি, তা দিয়েই আমরা পুষ্টি জোগাই — বাকিটা পৌঁছে যায় বাজারে
          </h2>
          <CycleDiagram />
          <p className="mt-14 max-w-lg mx-auto text-sm text-ink/60 leading-relaxed">
            Agro-Vet ইউনিটের ফিড ও ভেটেরিনারি পণ্য Aqua এবং Poultry ইউনিটের নিজস্ব
            খামারে ব্যবহৃত হয়। উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে
            সরবরাহ করা হয় — এই সমন্বিত মডেল উৎপাদন, মান নিয়ন্ত্রণ ও সরবরাহকে একই
            চক্রে যুক্ত করে।
          </p>
        </div>
      </section>

      {/* UNIT PREVIEWS */}
      <section className="py-24 md:py-32">
        <div className="max-w-wrap mx-auto px-6">
          <div className="max-w-xl mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-3">
              Our Units
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              তিনটি ইউনিট, একটি লক্ষ্য।
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <UnitPreviewCard
              href="/aqua"
              eyebrow="Division 01"
              title="Agro Valley Aqua"
              englishName="Commercial fish farming"
              description="একাধিক পুকুরে রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ চাষ ও পাইকারি সরবরাহ।"
              illustration={<PondIllustration />}
            />
            <UnitPreviewCard
              href="/poultry"
              eyebrow="Division 02"
              title="Agro Valley Poultry"
              englishName="Fresh egg production"
              description="বড় পরিসরে লেয়ার মুরগি পালন ও নিয়মিত তাজা ডিম উৎপাদন-সরবরাহ।"
              illustration={<PoultryIllustration />}
            />
            <UnitPreviewCard
              href="/agro-vet"
              eyebrow="Division 03"
              title="Agro Valley Agro-Vet"
              englishName="Feed & veterinary supply"
              description="মাছ ও পোল্ট্রির ফিড, ঔষধ ও সাপ্লিমেন্টের খুচরা ও পাইকারি ডিলারশিপ।"
              illustration={<FeedIllustration />}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-soft py-24 md:py-28">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-3">
              Why Agro Valley Group
            </p>
            <h2 className="font-display font-bold text-3xl leading-tight">
              কেন আমাদের
              <br />
              বেছে নেবেন।
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "সমন্বিত সরবরাহ চক্র",
                desc: "উৎপাদন থেকে বাজারজাতকরণ পর্যন্ত পুরো প্রক্রিয়া নিজেদের নিয়ন্ত্রণে, তাই মান বজায় রাখা সহজ হয়।",
              },
              {
                title: "নিজস্ব ফিড ও ঔষধ",
                desc: "নিজস্ব Agro-Vet ইউনিটের ফিড ও ঔষধ দিয়েই খামার পরিচালিত হয়, যা উৎপাদনের মান নিশ্চিত করে।",
              },
              {
                title: "দেশব্যাপী সরবরাহ",
                desc: "ঢাকাসহ দেশের বিভিন্ন অঞ্চলে পাইকারি ও খুচরা ক্রেতাদের চাহিদামাফিক সরবরাহ।",
              },
              {
                title: "সরাসরি যোগাযোগ",
                desc: "ফোন, ইমেইল বা WhatsApp-এ সরাসরি প্রতিষ্ঠানের সাথে যোগাযোগের সুযোগ।",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-semibold text-lg mb-2 text-ink">{item.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 md:py-28">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-3">
              About Us
            </p>
            <h2 className="font-display font-bold text-3xl leading-tight">
              একটি প্রতিষ্ঠান,
              <br />
              তিনটি স্তম্ভ।
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-ink/75 leading-relaxed mb-6">
              Agro Valley Group একটি সমন্বিত কৃষি প্রতিষ্ঠান, যা উৎপাদন থেকে সরবরাহ —
              পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে পরিচালনা করে। প্রতিষ্ঠানটি তিনটি
              পরিপূরক ইউনিটে বিভক্ত এবং প্রতিটি ইউনিট একে অপরের সাথে সংযুক্ত।
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark">
              পূর্ণ পরিচিতি পড়ুন <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
