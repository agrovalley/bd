import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CycleDiagram from "@/components/CycleDiagram";
import DivisionBand from "@/components/DivisionBand";
import ContactForm from "@/components/ContactForm";
import { PondIllustration, PoultryIllustration, FeedIllustration } from "@/components/Illustrations";

export default function Home() {
  return (
    <main id="top" className="bg-cream">
      <Nav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #0E3B36 0, transparent 45%), radial-gradient(circle at 85% 15%, #E3A73B 0, transparent 40%), radial-gradient(circle at 60% 90%, #A6512E 0, transparent 45%)",
          }}
        />
        <div className="max-w-wrap mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal-light mb-5 fade-up">
            Integrated Agro Enterprise — Bangladesh
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.15] max-w-3xl text-ink fade-up" style={{ animationDelay: "0.1s" }}>
            পুকুর থেকে পোল্ট্রি খামার — একই হাতে গড়া, একই মানে বাঁধা।
          </h1>
          <p className="mt-6 max-w-xl text-ink/70 leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
            Agro Valley Limited একটি সমন্বিত কৃষি প্রতিষ্ঠান — নিজস্ব পুকুরে মাছ চাষ,
            বড় পরিসরে ডিম উৎপাদনকারী পোল্ট্রি খামার, এবং ফিড ও ঔষধের নিজস্ব ডিলারশিপ
            একই ছাদের নিচে পরিচালিত হয়।
          </p>

          <div className="mt-9 flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="bg-teal text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-light transition-colors">
              যোগাযোগ করুন
            </a>
            <a href="#about" className="border border-ink/20 px-6 py-3 rounded-full text-sm font-medium hover:border-ink/50 transition-colors">
              প্রতিষ্ঠান সম্পর্কে জানুন
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "Agro Valley Aqua", href: "#aqua", cls: "border-teal/30 text-teal" },
              { label: "Agro Valley Poultry", href: "#poultry", cls: "border-gold-dim/40 text-gold-dim" },
              { label: "Agro Valley Agro-Vet", href: "#agro-vet", cls: "border-rust/30 text-rust" },
            ].map((b) => (
              <a
                key={b.label}
                href={b.href}
                className={`font-mono text-xs px-4 py-2 rounded-full border ${b.cls} hover:bg-ink/5 transition-colors`}
              >
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CYCLE DIAGRAM — signature element */}
      <section className="bg-cream-dim py-20 md:py-28 border-y border-ink/10">
        <div className="max-w-wrap mx-auto px-6 text-center">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-ink/50 mb-3">
            আমাদের কার্যক্রম
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl max-w-xl mx-auto mb-14">
            যা আমরা উৎপাদন করি, তা দিয়েই আমরা পুষ্টি জোগাই — বাকিটা পৌঁছে যায় বাজারে
          </h2>
          <CycleDiagram />
          <p className="mt-14 max-w-lg mx-auto text-sm text-ink/60 leading-relaxed">
            আমাদের ফিড ও ঔষধ ইউনিট নিজস্ব মাছ ও পোল্ট্রি খামারে সরবরাহ দেয়, খামারের
            উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে বিক্রি হয়, আর সেই আয় থেকেই
            পুনরায় বিনিয়োগ হয় — একটি সম্পূর্ণ, স্বনির্ভর চক্র।
          </p>
        </div>
      </section>

      {/* AQUA */}
      <DivisionBand
        id="aqua"
        accent="teal"
        eyebrow="Division 01 — Aquaculture"
        title="Agro Valley Aqua"
        englishName="Pond-based fish farming & wholesale supply"
        description="একাধিক বড় পুকুরে বাণিজ্যিক ভিত্তিতে মাছ চাষ করা হয়। উৎপাদিত মাছ মানসম্মত পরিচর্যার মাধ্যমে বড় করে তোলা হয় এবং ঢাকা ও দেশের বিভিন্ন অঞ্চলের পাইকারি ও খুচরা বাজারে সরবরাহ করা হয়।"
        points={[
          "একাধিক পুকুরে বড় পরিসরে মাছ চাষ",
          "ঢাকা ও দেশব্যাপী পাইকারি সরবরাহ",
          "নিজস্ব ফিড ও ঔষধ দ্বারা পরিচর্যা",
        ]}
        illustration={<PondIllustration />}
      />

      {/* POULTRY */}
      <DivisionBand
        id="poultry"
        accent="gold"
        dark
        reverse
        eyebrow="Division 02 — Layer Farming"
        title="Agro Valley Poultry"
        englishName="Large-scale egg production farm"
        description="বড় পরিসরের পোল্ট্রি খামারে নিয়মিত ও মানসম্মতভাবে ডিম উৎপাদিত হয়। আধুনিক ব্যবস্থাপনা ও নিজস্ব ফিড-ঔষধ ব্যবহারের মাধ্যমে উৎপাদনের গুণগত মান নিশ্চিত করা হয়।"
        points={[
          "বড় পরিসরে লেয়ার মুরগি পালন",
          "নিয়মিত ডিম উৎপাদন ও সরবরাহ",
          "স্বাস্থ্যবিধি মেনে আধুনিক ব্যবস্থাপনা",
        ]}
        illustration={<PoultryIllustration />}
      />

      {/* AGRO-VET */}
      <DivisionBand
        id="agro-vet"
        accent="rust"
        eyebrow="Division 03 — Feed & Pharma Dealership"
        title="Agro Valley Agro-Vet"
        englishName="Feed & veterinary medicine — retail and wholesale"
        description="মাছ ও পোল্ট্রির ফিড এবং ঔষধের একটি পূর্ণাঙ্গ ডিলারশিপ, যেখানে নিজস্ব খামারের চাহিদা মেটানোর পাশাপাশি খুচরা ও পাইকারি পর্যায়ে সরবরাহ করা হয়।"
        points={[
          "মাছ ও পোল্ট্রির ফিড সরবরাহ",
          "প্রয়োজনীয় ঔষধ ও ভ্যাকসিন",
          "খুচরা ও পাইকারি — উভয় পর্যায়ে বিক্রয়",
        ]}
        illustration={<FeedIllustration />}
      />

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 scroll-mt-20">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-teal-light mb-3">
              About Us
            </p>
            <h2 className="font-display font-bold text-3xl leading-tight">
              একটি প্রতিষ্ঠান,
              <br />
              তিনটি স্তম্ভ।
            </h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-ink/75 leading-relaxed">
            <p>
              Agro Valley Limited গড়ে উঠেছে মাছ চাষ, পোল্ট্রি ও কৃষি-উপকরণ সরবরাহের
              দীর্ঘ অভিজ্ঞতা থেকে। তিনটি আলাদা ইউনিট — Aqua, Poultry এবং Agro-Vet —
              একে অপরের পরিপূরক হিসেবে কাজ করে, যা প্রতিষ্ঠানকে উৎপাদন থেকে বাজারজাতকরণ
              পর্যন্ত সম্পূর্ণ নিয়ন্ত্রণ দেয়।
            </p>
            <p>
              আমরা বিশ্বাস করি, মানসম্মত ফিড ও ঔষধ থেকেই শুরু হয় স্বাস্থ্যকর উৎপাদন —
              এবং সেই ধারাবাহিকতা বজায় রাখার লক্ষ্যেই আমাদের প্রতিটি ইউনিট একে অপরের
              সাথে সংযুক্ত।
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-teal-dim text-cream py-24 md:py-32 scroll-mt-20">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-light mb-3">
              Get in Touch
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-5">
              ব্যবসায়িক আলোচনার জন্য যোগাযোগ করুন
            </h2>
            <p className="text-cream/70 leading-relaxed mb-8 max-w-md">
              মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি বা খুচরা অনুসন্ধানের জন্য নিচের
              ফর্মটি পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।
            </p>
            <ul className="space-y-2 text-sm text-cream/80 font-mono">
              <li>+৮৮০ ১XXX-XXXXXX</li>
              <li>info@agrovalley.com.bd</li>
            </ul>
          </div>

          <div className="bg-cream text-ink rounded-2xl p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
