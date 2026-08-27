import { ArrowRight, CheckCircle2, Egg, Fish, MapPin, MessageCircle, Phone, ShieldCheck, Wheat } from "lucide-react";

const phone = "+8801307085154";
const email = "johurul.bsc@gmail.com";
const mapsUrl = "https://www.google.com/maps/@24.3983037,88.730349,16z";
const whatsappUrl = `https://wa.me/${phone.replace("+", "")}`;

const products = [
  {
    icon: Fish,
    number: "01",
    title: "Agro Valley Aqua",
    subtitle: "Commercial fish farming",
    description: "একাধিক পুকুরে রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ বাণিজ্যিকভাবে উৎপাদন করে ঢাকা ও দেশব্যাপী পাইকারি সরবরাহ।",
    points: ["বাণিজ্যিক পুকুরে মাছ চাষ", "পাইকারি ও চাহিদামাফিক সরবরাহ", "নিজস্ব ফিড ও পরিচর্যা ব্যবস্থাপনা"],
  },
  {
    icon: Egg,
    number: "02",
    title: "Agro Valley Poultry",
    subtitle: "Fresh egg production",
    description: "আধুনিক স্বাস্থ্যব্যবস্থাপনার মাধ্যমে বড় পরিসরে লেয়ার মুরগি পালন, নিয়মিত তাজা ডিম উৎপাদন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে সরবরাহ।",
    points: ["নিয়মিত তাজা ডিম উৎপাদন", "আড়ত ও পরিবেশক পর্যায়ে সরবরাহ", "মানসম্মত খামার ব্যবস্থাপনা"],
  },
  {
    icon: Wheat,
    number: "03",
    title: "Agro Valley Agro-Vet",
    subtitle: "Feed & veterinary supply",
    description: "মাছ ও পোল্ট্রি ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল প্রিমিক্স ও সাপ্লিমেন্টের খুচরা এবং পাইকারি ডিলারশিপ।",
    points: ["মাছ ও পোল্ট্রি ফিড", "ঔষধ, ভ্যাকসিন ও সাপ্লিমেন্ট", "নিজস্ব খামার ও বাহ্যিক ডিলারশিপ"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Agro Valley home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-xl font-black text-white">AV</span>
            <span className="leading-tight"><strong className="block text-lg text-ink">Agro Valley</strong><span className="text-xs text-ink/50">LIMITED</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-ink/65 md:flex">
            <a href="#about" className="transition hover:text-brand">পরিচিতি</a>
            <a href="#products" className="transition hover:text-brand">পণ্য ও সেবা</a>
            <a href="#contact" className="transition hover:text-brand">যোগাযোগ</a>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark sm:flex">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-soft blur-3xl" />
        <div className="container relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">
              <span className="h-2 w-2 rounded-full bg-brand" /> Integrated Agro Enterprise · Bangladesh
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              মাটি, পানি ও প্রাণীজ খাদ্যে <span className="text-brand">একটি পূর্ণাঙ্গ চক্র।</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-ink/65">
              Agro Valley Limited উৎপাদন থেকে সরবরাহ—পুরো শৃঙ্খলটি নিজেদের নিয়ন্ত্রণে পরিচালনা করে। Aqua, Poultry এবং Agro-Vet-এর মাধ্যমে আমরা স্বাস্থ্যকর উৎপাদন ও নির্ভরযোগ্য সরবরাহ নিশ্চিত করি।
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-4 font-bold text-white shadow-xl shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark">ব্যবসায়িক যোগাযোগ <ArrowRight size={18} /></a>
              <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-4 font-bold text-ink transition hover:border-brand hover:text-brand">আমাদের সেবা দেখুন</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-ink/10 pt-6 text-sm text-ink/60">
              <span><strong className="block text-2xl text-ink">৩</strong>পরিপূরক ইউনিট</span>
              <span><strong className="block text-2xl text-ink">ঢাকা+</strong>সরবরাহ অঞ্চল</span>
              <span><strong className="block text-2xl text-ink">২৪/৭</strong>ব্যবসায়িক যোগাযোগ</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[3rem] bg-brand/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-8 text-white shadow-soft sm:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-[22px] border-white/10" />
              <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border-[28px] border-white/10" />
              <p className="relative text-sm font-bold uppercase tracking-[0.25em] text-white/70">Our integrated cycle</p>
              <div className="relative mt-12 space-y-5">
                {[{ icon: Fish, label: "Aqua", text: "নিজস্ব পুকুরে মাছ উৎপাদন" }, { icon: Egg, label: "Poultry", text: "খামারে ডিম উৎপাদন" }, { icon: Wheat, label: "Agro-Vet", text: "ফিড ও ভেটেরিনারি সাপ্লাই" }].map(({ icon: Icon, label, text }) => <div key={label} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur"><span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand"><Icon size={24} /></span><div><strong className="block text-lg">{label}</strong><span className="text-sm text-white/70">{text}</span></div></div>)}
              </div>
              <p className="relative mt-10 border-t border-white/20 pt-5 text-sm leading-7 text-white/75">নিজস্ব ফিড ও পরিচর্যা থেকে মানসম্মত উৎপাদন—তারপর বাজারে নির্ভরযোগ্য সরবরাহ।</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-brand-soft py-24">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="section-kicker">About Agro Valley</p><h2 className="section-title">একটি প্রতিষ্ঠান,<br /><span className="text-brand">তিনটি শক্তিশালী স্তম্ভ।</span></h2></div>
          <div className="grid gap-6 text-lg leading-9 text-ink/70 md:grid-cols-2"><p>Agro Valley Limited একটি সমন্বিত কৃষি প্রতিষ্ঠান—ঝালুকা, দুর্গাপুর, রাজশাহী থেকে পরিচালিত। আমাদের লক্ষ্য হলো উৎপাদন, মান এবং সরবরাহকে একই ব্যবস্থাপনায় যুক্ত করা।</p><p>নিজস্ব ফিড ও ঔষধ দিয়ে খামার পরিচালিত হয়, আর উৎপাদিত মাছ ও ডিম ঢাকাসহ দেশের বিভিন্ন অঞ্চলে সরবরাহ করা হয়।</p></div>
        </div>
      </section>

      <section id="products" className="bg-white py-24">
        <div className="container"><div className="max-w-2xl"><p className="section-kicker">Products & Services</p><h2 className="section-title">আমাদের কাজের তিনটি <span className="text-brand">মূল দিক</span></h2><p className="mt-5 text-lg leading-8 text-ink/60">উৎপাদন থেকে বাজার—প্রতিটি ধাপে মান, যত্ন এবং নির্ভরযোগ্যতা।</p></div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">{products.map(({ icon: Icon, number, title, subtitle, description, points }) => <article key={title} className="group rounded-3xl border border-ink/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand/30"><div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"><Icon size={27} /></span><span className="text-sm font-black text-brand/50">{number}</span></div><p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-brand">{subtitle}</p><h3 className="mt-2 text-2xl font-black text-ink">{title}</h3><p className="mt-4 min-h-28 leading-8 text-ink/60">{description}</p><ul className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm font-semibold text-ink/70">{points.map((point) => <li key={point} className="flex gap-2"><CheckCircle2 size={18} className="shrink-0 text-brand" />{point}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 text-white"><div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><p className="section-kicker text-green-300">Get in touch</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">আপনার ব্যবসার জন্য<br /><span className="text-green-400">নির্ভরযোগ্য সঙ্গী।</span></h2><p className="mt-6 max-w-md leading-8 text-white/60">মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি ও খুচরা অনুসন্ধানের জন্য যোগাযোগ করুন।</p><div className="mt-9 space-y-4 text-sm text-white/80"><a className="flex items-start gap-3 transition hover:text-green-300" href={`tel:${phone}`}><Phone size={19} className="mt-1 text-green-400" />+৮৮০ ১৩০৭-০৮৫১৫৪</a><a className="flex items-start gap-3 transition hover:text-green-300" href={`mailto:${email}`}><MessageCircle size={19} className="mt-1 text-green-400" />{email}</a><a className="flex items-start gap-3 transition hover:text-green-300" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={19} className="mt-1 text-green-400" /><span>ঝালুকা, আমগাছী হাট-৬২৪০,<br />দুর্গাপুর, রাজশাহী<br /><span className="text-white/45">Jhaluka, Amgachi Hat-6240, Durgapur, Rajshahi</span></span></a></div></div>
        <form action={`mailto:${email}`} method="post" encType="text/plain" className="rounded-3xl bg-white p-7 text-ink shadow-soft sm:p-10"><div className="grid gap-6 sm:grid-cols-2"><label className="field-label">আপনার নাম<input name="name" required className="field-input" placeholder="নাম লিখুন" /></label><label className="field-label">ফোন নম্বর<input name="phone" required className="field-input" placeholder="01XXXXXXXXX" /></label></div><label className="field-label mt-6 block">আগ্রহের বিষয়<select name="interest" className="field-input"><option>Aqua — মাছ ক্রয়/বিক্রয়</option><option>Poultry — ডিম সরবরাহ</option><option>Agro-Vet — ফিড ও ঔষধ</option><option>অন্যান্য</option></select></label><label className="field-label mt-6 block">আপনার বার্তা<textarea name="message" required rows={4} className="field-input resize-none" placeholder="আপনার প্রয়োজনের বিস্তারিত লিখুন..." /></label><div className="mt-7 flex flex-wrap gap-3"><button type="submit" className="rounded-full bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand-dark">ইমেইল পাঠান <ArrowRight className="ml-1 inline" size={17} /></button><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-brand/30 px-6 py-3.5 font-bold text-brand transition hover:bg-brand-soft"><MessageCircle size={17} className="mr-2" /> WhatsApp</a></div></form>
      </div></section>

      <footer className="bg-white py-8"><div className="container flex flex-col justify-between gap-3 text-sm text-ink/50 sm:flex-row"><span>© {new Date().getFullYear()} Agro Valley Limited. সর্বস্বত্ব সংরক্ষিত।</span><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand" /> Quality · Care · Supply</span></div></footer>
    </main>
  );
}
