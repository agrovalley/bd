import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-wrap mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display font-bold text-xl text-white">Agro Valley Group</p>
          <p className="mt-1 font-mono text-xs text-brand-light">Quality &middot; Care &middot; Supply</p>
          <p className="mt-3 text-sm leading-relaxed max-w-sm text-white/70">
            একটি সমন্বিত কৃষি প্রতিষ্ঠান — পুকুরে মাছ চাষ, ডিম উৎপাদনের পোল্ট্রি খামার
            এবং ফিড ও ঔষধের পাইকারি-খুচরা সরবরাহ, একই ছাদের নিচে।
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-light mb-3">পাতাসমূহ</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition-colors">পরিচিতি</Link></li>
            <li><Link href="/aqua" className="hover:text-white transition-colors">Agro Valley Aqua</Link></li>
            <li><Link href="/poultry" className="hover:text-white transition-colors">Agro Valley Poultry</Link></li>
            <li><Link href="/agro-vet" className="hover:text-white transition-colors">Agro Valley Agro-Vet</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">যোগাযোগ</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-light mb-3">যোগাযোগ</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="tel:+8801307085154" className="hover:text-white transition-colors">
                +৮৮০ ১৩০৭-০৮৫১৫৪
              </a>
            </li>
            <li>
              <a href="https://wa.me/8801307085154" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:johurul.bsc@gmail.com" className="hover:text-white transition-colors">
                johurul.bsc@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/@24.3983037,88.730349,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block leading-relaxed"
              >
                ঝালুকা, আমগাছী হাট-৬২৪০,
                <br />
                দুর্গাপুর, রাজশাহী
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-wrap mx-auto px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/50 font-mono">
          <span>&copy; {new Date().getFullYear()} Agro Valley Group. সর্বস্বত্ব সংরক্ষিত।</span>
          <span>Aqua &middot; Poultry &middot; Agro-Vet</span>
        </div>
      </div>
    </footer>
  );
}
