import Link from "next/link";
const FOOTER_LINKS = [
  { href: "/about", label: "পরিচিতি" },
  { href: "/aqua", label: "Agro Valley Aqua" },
  { href: "/poultry", label: "Agro Valley Poultry" },
  { href: "/agro-vet", label: "Agro Valley Agro-Vet" },
  { href: "/catalog", label: "পণ্য ক্যাটালগ" },
  { href: "/contact", label: "যোগাযোগ" },
];
export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="max-w-wrap mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-display font-bold text-2xl text-white tracking-tight">AgroValley Farms</p>
              <p className="mt-2 font-mono text-xs text-brand-light tracking-wider">Quality · Care · Supply</p>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-white/60">একটি সমন্বিত কৃষি প্রতিষ্ঠান — পুকুরে মাছ চাষ, ডিম উৎপাদনের পোল্ট্রি খামার এবং ফিড ও ঔষধের পাইকারি-খুচরা সরবরাহ, একই ছাদের নিচে।</p>
            <div className="flex flex-wrap gap-3">
              <a href="/visiting-card/agrovalley-farms-visiting-card.pdf" download="AgroValley-Farms-Visiting-Card.pdf" className="inline-flex items-center gap-2 rounded-full border border-brand-light/40 px-4 py-2 text-xs font-medium text-brand-light hover:bg-brand-light hover:text-ink transition-all duration-300"><span>📇</span> ভিজিটিং কার্ড ডাউনলোড</a>
            </div>
          </div>
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light mb-5">পাতাসমূহ</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-light mb-5">যোগাযোগ</p>
            <ul className="space-y-4 text-sm">
              <li><a href="tel:+8801307085154" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">📞</span>+৮৮০ ১৩০৭-০৮৫১৫৪</a></li>
              <li><a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">💬</span>WhatsApp</a></li>
              <li><a href="mailto:johurul.bsc@gmail.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">✉️</span>johurul.bsc@gmail.com</a></li>
              <li><a href="https://www.google.com/maps/@24.3983037,88.730349,16z" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">📍</span><span className="leading-relaxed">ঝালুকা, আমগাছী হাট-৬২৪০,<br/>দুর্গাপুর, রাজশাহী</span></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <span className="text-xs text-white/40 font-mono">© {new Date().getFullYear()} AgroValley Farms. সর্বস্বত্ব সংরক্ষিত।</span>
          <div className="flex items-center gap-4"><span className="text-xs text-white/40 font-mono">Aqua</span><span className="w-1 h-1 rounded-full bg-brand/60" /><span className="text-xs text-white/40 font-mono">Poultry</span><span className="w-1 h-1 rounded-full bg-brand/60" /><span className="text-xs text-white/40 font-mono">Agro-Vet</span></div>
        </div>
      </div>
    </footer>
  );
}