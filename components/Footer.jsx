export default function Footer() {
  return (
    <footer className="bg-teal-dim text-cream/80">
      <div className="max-w-wrap mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display font-bold text-xl text-cream">Agro Valley Limited</p>
          <p className="mt-3 text-sm leading-relaxed max-w-sm text-cream/70">
            একটি সমন্বিত কৃষি প্রতিষ্ঠান — পুকুরে মাছ চাষ, ডিম উৎপাদনের পোল্ট্রি খামার
            এবং ফিড ও ঔষধের পাইকারি-খুচরা সরবরাহ, একই ছাদের নিচে।
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gold-light mb-3">ইউনিটসমূহ</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#aqua" className="hover:text-cream transition-colors">Agro Valley Aqua</a></li>
            <li><a href="#poultry" className="hover:text-cream transition-colors">Agro Valley Poultry</a></li>
            <li><a href="#agro-vet" className="hover:text-cream transition-colors">Agro Valley Agro-Vet</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gold-light mb-3">যোগাযোগ</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>ফোন: <a href="tel:+8801307085154" className="hover:text-cream transition-colors">+৮৮০ ১৩০৭-০৮৫১৫৪</a></li>
            <li>ইমেইল: <a href="mailto:johurul.bsc@gmail.com" className="hover:text-cream transition-colors">johurul.bsc@gmail.com</a></li>
            <li>ঠিকানা: ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী</li>
            <li><span className="block text-xs text-cream/50">Jhaluka, Amgachi Hat-6240, Durgapur, Rajshahi</span></li>
            <li><a href="https://www.google.com/maps/@24.3983037,88.730349,16z" target="_blank" rel="noreferrer" className="text-gold-light hover:text-cream transition-colors">Google Maps লোকেশন</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-wrap mx-auto px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-cream/50 font-mono">
          <span>&copy; {new Date().getFullYear()} Agro Valley Limited. সর্বস্বত্ব সংরক্ষিত।</span>
          <span>Aqua &middot; Poultry &middot; Agro-Vet</span>
        </div>
      </div>
    </footer>
  );
}
