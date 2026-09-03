import CycleDiagram from "@/components/CycleDiagram";
import UnitPreviewCard from "@/components/UnitPreviewCard";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import UnitPhoto from "@/components/UnitPhoto";
import { PondIllustration, PoultryIllustration, FeedIllustration } from "@/components/Illustrations";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden hero-mesh">
        <div className="max-w-wrap mx-auto px-6 relative z-10">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-brand-dark" />Integrated Agro Enterprise · Bangladesh
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl text-ink">
              মাটি, পানি ও প্রাণীজ খাদ্যে একটি পূর্ণাঙ্গ চক্র।
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink/60 leading-relaxed">
              AgroValley Farms উৎপাদন থেকে সরবরাহ — পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে পরিচালনা করে। Aqua, Poultry এবং Agro-Vet-এর মাধ্যমে আমরা স্বাস্থ্যকর উৎপাদন ও নির্ভরযোগ্য সরবরাহ নিশ্চিত করি।
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-0.5 btn-shine">ব্যবসায়িক যোগাযোগ</Link>
              <Link href="/about" className="border border-ink/15 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold hover:border-brand/40 hover:text-brand-dark transition-all duration-300">প্রতিষ্ঠান সম্পর্কে জানুন</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {[{label:"Agro Valley Aqua",href:"/aqua"},{label:"Agro Valley Poultry",href:"/poultry"},{label:"Agro Valley Agro-Vet",href:"/agro-vet"}].map((b,i)=>(
                <Link key={b.label} href={b.href} className="font-mono text-xs px-5 py-2.5 rounded-full border border-brand/20 text-brand-dark bg-brand/5 hover:bg-brand hover:text-white hover:border-brand transition-all duration-300">{b.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-brand/5 blur-xl animate-float hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-brand-light/5 blur-2xl animate-float hidden lg:block" style={{animationDelay:"2s"}} />
      </section>

      {/* CYCLE DIAGRAM */}
      <section className="bg-gradient-soft py-24 md:py-32 border-y border-ink/5 relative overflow-hidden">
        <div className="max-w-wrap mx-auto px-6 text-center relative z-10">
          <div className="reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4 flex items-center justify-center gap-3"><span className="w-8 h-px bg-brand/40" />Integrated Operating Model<span className="w-8 h-px bg-brand/40" /></p>
            <h2 className="font-display font-bold text-3xl md:text-4xl max-w-2xl mx-auto mb-4">উৎপাদন থেকে বাজার — একই ছাদের নিচে।</h2>
            <p className="text-ink/50 max-w-lg mx-auto mb-16">তিনটি ইউনিট একে অপরকে সম্পূরক করে একটি টেকসই কৃষি ব্যবস্থা গড়ে তোলে।</p>
          </div>
          <div className="reveal reveal-delay-2"><CycleDiagram /></div>
        </div>
      </section>

      {/* UNIT PREVIEWS */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-wrap mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4">Our Divisions</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">তিনটি ইউনিট, একটি লক্ষ্য।</h2>
            <p className="text-ink/50 max-w-lg mx-auto">প্রতিটি ইউনিট আলাদা আলাদা পরিচালিত হলেও সবগুলো একই মান ও নীতির উপর ভিত্তি করে চলে।</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {href:"/aqua",eyebrow:"Division 01",title:"Agro Valley Aqua",englishName:"Commercial fish farming",description:"একাধিক পুকুরে রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ বাণিজ্যিকভাবে উৎপাদন ও পাইকারি সরবরাহ।",illustration:<PondIllustration />,cta:"Aqua বিস্তারিত"},
              {href:"/poultry",eyebrow:"Division 02",title:"Agro Valley Poultry",englishName:"Fresh egg production",description:"বড় পরিসরে লেয়ার মুরগি পালন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে নিয়মিত তাজা ডিম সরবরাহ।",illustration:<PoultryIllustration />,cta:"Poultry বিস্তারিত"},
              {href:"/agro-vet",eyebrow:"Division 03",title:"Agro Valley Agro-Vet",englishName:"Feed & veterinary supply",description:"মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল প্রিমিক্সের খুচরা ও পাইকারি ডিলারশিপ।",illustration:<FeedIllustration />,cta:"Agro-Vet বিস্তারিত"},
            ].map((card,i)=> (
              <div key={card.href} className={`reveal`} style={{transitionDelay:`${200+i*150}ms`}}><UnitPreviewCard {...card} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-24 md:py-32 border-t border-ink/5">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="reveal">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4">On the Ground</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">মাঠ পর্যায়ে আমাদের কার্যক্রম।</h2>
              <p className="text-ink/60 leading-relaxed mb-8">আমাদের প্রতিষ্ঠানের প্রতিটি ইউনিট সরাসরি মাঠ পর্যায়ে কাজ করে। পুকুর থেকে শুরু করে খামার এবং সরবরাহ কেন্দ্র — সবকিছুই নিজস্ব তত্ত্বাবধানে পরিচালিত হয়।</p>
              <Link href="/catalog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand transition-colors group">পণ্য ক্যাটালগ দেখুন<span className="group-hover:translate-x-1 transition-transform">→</span></Link>
            </div>
            <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
              <div className="space-y-4"><UnitPhoto src="/images/aqua-harvest.jpg" alt="পুকুর থেকে মাছ সংগ্রহ" /><UnitPhoto src="/images/poultry-farm.jpg" alt="লেয়ার মুরগির খামার" /></div>
              <div className="pt-8"><UnitPhoto src="/images/agro-valley-shop.jpg" alt="Agro-Vet শোরুম" /></div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}