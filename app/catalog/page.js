import Link from "next/link";

export const metadata = {
  title: "পণ্য ক্যাটালগ | AgroValley Farms",
  description: "AgroValley Farms-এর মাছ, ডিম, ফিড, ঔষধ ও ভেটেরিনারি সাপ্লাইয়ের পণ্য ক্যাটালগ।",
};

const catalog = [
  {
    number: "01",
    category: "Aqua",
    title: "মাছ ও অ্যাকুয়া সাপ্লাই",
    english: "Fish & Aquaculture Supply",
    summary: "বাণিজ্যিক মাছ চাষ, চাহিদামাফিক সরবরাহ এবং মাছের জন্য প্রয়োজনীয় ফিড ও পরিচর্যা সহায়তা।",
    products: [
      "রুই, কাতলা, পাঙ্গাশ ও তেলাপিয়াসহ বিভিন্ন প্রজাতির মাছ",
      "পোনা থেকে পূর্ণবয়স্ক মাছের জন্য বিভিন্ন গ্রেডের ফিড",
      "পাইকারি মাছ সরবরাহ — ঢাকা ও দেশের বিভিন্ন অঞ্চলে",
      "খুচরা ক্রেতা ও আড়তদারদের জন্য চাহিদামাফিক সরবরাহ",
    ],
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    number: "02",
    category: "Poultry",
    title: "তাজা ডিম ও পোল্ট্রি সাপ্লাই",
    english: "Fresh Eggs & Poultry Supply",
    summary: "বড় পরিসরে লেয়ার মুরগি পালন, নিয়মিত তাজা ডিম উৎপাদন এবং আড়ত, দোকান ও পরিবেশক পর্যায়ে সরবরাহ।",
    products: [
      "নিয়মিত তাজা ডিম উৎপাদন ও সরবরাহ",
      "আড়ত, দোকান ও পরিবেশকের জন্য পাইকারি ডিম",
      "লেয়ার মুরগির জন্য সমন্বিত খামার ব্যবস্থাপনা",
      "লেয়ার ও ব্রয়লার উপযোগী পোল্ট্রি ফিড",
    ],
    accent: "bg-lime-50 text-lime-700",
  },
  {
    number: "03",
    category: "Agro-Vet",
    title: "ফিড, ঔষধ ও ভেটেরিনারি পণ্য",
    english: "Feed & Veterinary Products",
    summary: "মাছ ও পোল্ট্রির জন্য প্রয়োজনীয় ফিড, ঔষধ, ভ্যাকসিন, ভিটামিন, মিনারেল ও সাপ্লিমেন্ট।",
    products: [
      "মাছের ফিড — পোনা থেকে পূর্ণবয়স্ক মাছের জন্য",
      "লেয়ার ও ব্রয়লার পোল্ট্রি ফিড",
      "মাছ ও পোল্ট্রির প্রয়োজনীয় ঔষধ ও ভ্যাকসিন",
      "ভিটামিন, মিনারেল প্রিমিক্স ও অন্যান্য সাপ্লিমেন্ট",
      "খুচরা, পাইকারি এবং বাহ্যিক ডিলারশিপ সরবরাহ",
    ],
    accent: "bg-green-50 text-green-700",
  },
];

function inquiryUrl(category) {
  const message = encodeURIComponent(`আসসালামু আলাইকুম, AgroValley Farms-এর ${category} সম্পর্কে জানতে চাই।`);
  return `https://wa.me/8801307085154?text=${message}`;
}

export default function CatalogPage() {
  return (
    <main>
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, #16A34A 0, transparent 42%), radial-gradient(circle at 85% 30%, #4ADE80 0, transparent 40%)" }} />
        <div className="max-w-wrap mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4">Product Catalog · AgroValley Farms</p>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-tight max-w-3xl">আপনার প্রয়োজনের জন্য <span className="text-brand">সঠিক সমাধান।</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">মাছ, ডিম, ফিড, ঔষধ ও ভেটেরিনারি সাপ্লাই—AgroValley Farms-এর সমন্বিত পণ্য ও সেবা এক জায়গায় দেখুন। মূল্য, স্টক ও পাইকারি কোটেশনের জন্য সরাসরি যোগাযোগ করুন।</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+8801307085154" className="bg-brand text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors">ফোনে যোগাযোগ করুন</a>
            <Link href="/contact" className="border border-ink/20 px-6 py-3 rounded-full text-sm font-semibold hover:border-brand hover:text-brand transition-colors">অনুসন্ধান পাঠান</Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-28 border-y border-ink/10">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {catalog.map((item) => (
              <article key={item.category} className="flex flex-col rounded-2xl bg-white border border-ink/10 p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${item.accent}`}>{item.category}</span>
                  <span className="font-mono text-sm text-brand/60">{item.number}</span>
                </div>
                <h2 className="mt-7 font-display font-bold text-2xl leading-tight">{item.title}</h2>
                <p className="mt-2 text-sm font-medium text-brand-dark">{item.english}</p>
                <p className="mt-5 text-sm leading-7 text-ink/70">{item.summary}</p>
                <ul className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm leading-6 text-ink/75">
                  {item.products.map((product) => <li key={product} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{product}</li>)}
                </ul>
                <a href={inquiryUrl(item.category)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">WhatsApp-এ জানতে চাই →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-wrap mx-auto px-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-brand-dark mb-3">Wholesale & Retail</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">পাইকারি বা খুচরা—আপনার প্রয়োজন অনুযায়ী সরবরাহ।</h2>
          </div>
          <div className="text-ink/70 leading-relaxed">
            <p>পণ্য, পরিমাণ, সরবরাহের স্থান এবং সময় জানালে আমরা আপনার অনুসন্ধান অনুযায়ী তথ্য দিতে পারি। মূল্য ও স্টক পরিবর্তনশীল হওয়ায় নিশ্চিত তথ্যের জন্য সরাসরি ফোন বা WhatsApp-এ যোগাযোগ করুন।</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand">+৮৮০ ১৩০৭-০৮৫১৫৪ →</a>
              <a href="mailto:johurul.bsc@gmail.com" className="text-brand-dark hover:text-brand">johurul.bsc@gmail.com →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
