import CycleDiagram from "@/components/CycleDiagram";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "পরিচিতি | Agro Valley Group",
  description:
    "Agro Valley Group সম্পর্কে জানুন — একটি সমন্বিত কৃষি প্রতিষ্ঠান, যেখানে মাছ চাষ, ডিম উৎপাদন এবং ফিড-ঔষধ সরবরাহ একই ব্যবস্থাপনার অধীনে পরিচালিত হয়।",
};

const STAGES = [
  { label: "Aqua", note: "Fish production" },
  { label: "Poultry", note: "Egg production" },
  { label: "Agro-Vet", note: "Feed & veterinary supply" },
];

export default function AboutPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-wrap mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4">
            About Us
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight max-w-2xl">
            একটি প্রতিষ্ঠান, তিনটি স্তম্ভ, একটি লক্ষ্য।
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
              পরিচিতি
            </p>
            <h2 className="font-display font-bold text-2xl leading-snug">
              উৎপাদন থেকে সরবরাহ — একই হাতে।
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-ink/75 leading-relaxed">
            <p>
              Agro Valley Group একটি সমন্বিত (integrated) কৃষি প্রতিষ্ঠান, যা উৎপাদন
              থেকে সরবরাহ — পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে পরিচালনা করে। প্রতিষ্ঠানটি
              তিনটি পরিপূরক ইউনিটে বিভক্ত — <strong>Aqua</strong> (মাছ চাষ),
              <strong> Poultry</strong> (ডিম উৎপাদন) এবং <strong>Agro-Vet</strong>
              (ফিড ও ঔষধ সরবরাহ)।
            </p>
            <p>
              প্রতিটি ইউনিট একে অপরের সাথে সংযুক্ত: নিজস্ব ফিড ও ঔষধ দিয়ে খামার
              পরিচালনা করা হয়, আর উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে
              সরবরাহ করা হয়। এই সমন্বিত মডেল উৎপাদন, মান নিয়ন্ত্রণ এবং সরবরাহ
              ব্যবস্থাপনাকে একই চক্রে যুক্ত করে।
            </p>
            <p>
              প্রতিষ্ঠানের প্রতিটি সিদ্ধান্তে আমরা তিনটি বিষয়কে গুরুত্ব দিই — মান,
              যত্ন এবং নির্ভরযোগ্য সরবরাহ। এই তিনটি নীতির উপর ভিত্তি করেই Agro Valley
              Group-এর প্রতিটি ইউনিট পরিচালিত হয়।
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATED MODEL */}
      <section className="bg-soft py-20 md:py-28 border-y border-ink/10">
        <div className="max-w-wrap mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-ink/50 mb-3">
            Integrated Operating Model
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl max-w-xl mx-auto mb-14">
            তিনটি ইউনিট একে অপরকে সহায়তা করে
          </h2>
          <CycleDiagram />

          <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {STAGES.map((s, i) => (
              <div key={s.label} className="bg-white rounded-xl border border-ink/10 p-5">
                <p className="font-mono text-[11px] text-brand-dark mb-1">Stage {i + 1}</p>
                <p className="font-display font-semibold">{s.label}</p>
                <p className="text-xs text-ink/50">{s.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-lg mx-auto text-sm text-ink/60 leading-relaxed">
            Agro-Vet ইউনিটের ফিড ও ভেটেরিনারি পণ্য Aqua এবং Poultry ইউনিটের নিজস্ব
            খামারে ব্যবহৃত হয়। এরপর উৎপাদিত মাছ ও ডিম দেশের বিভিন্ন বাজারে সরবরাহ
            করা হয় — ফলাফল: সমন্বিত উৎপাদন ও সরবরাহ।
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 md:py-24">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
              অবস্থান
            </p>
            <h2 className="font-display font-bold text-2xl leading-snug">
              রাজশাহী থেকে
              <br />
              দেশব্যাপী।
            </h2>
          </div>
          <div className="md:col-span-2 text-ink/75 leading-relaxed">
            <p className="mb-4">
              আমাদের কার্যক্রম পরিচালিত হয় রাজশাহীর দুর্গাপুর থেকে, এবং উৎপাদিত মাছ
              ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে সরবরাহ করা হয়।
            </p>
            <a
              href="https://www.google.com/maps/@24.3983037,88.730349,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark"
            >
              ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী — মানচিত্রে দেখুন
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
