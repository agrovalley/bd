"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "পরিচিতি" },
  { href: "/aqua", label: "Aqua" },
  { href: "/poultry", label: "Poultry" },
  { href: "/agro-vet", label: "Agro-Vet" },
  { href: "/catalog", label: "ক্যাটালগ" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-ink/5" : "bg-transparent"}`}>
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display font-bold text-lg tracking-tight text-ink shrink-0 group">
          <span className="relative">AgroValley<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" /></span>
          <span className="font-mono text-[10px] align-super ml-1.5 text-brand-dark bg-brand/10 px-1.5 py-0.5 rounded-md">Farms</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-1 font-medium text-sm text-ink/70">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link href={l.href} className={`relative px-4 py-2 rounded-full transition-all duration-300 ${active ? "text-brand-dark bg-brand/10 font-semibold" : "hover:text-brand hover:bg-ink/5"}`}>
                  {l.label}
                  {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand" />}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+8801307085154" className="text-sm font-medium text-ink/60 hover:text-brand transition-colors">+৮৮০ ১৩০৭-০৮৫১৫৪</a>
          <Link href="/contact" className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-dark transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-0.5 btn-shine">যোগাযোগ</Link>
        </div>
        <button aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-ink/5 transition-colors">
          <span className={`block h-0.5 w-6 bg-ink rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink rounded-full transition-all duration-300 ${open ? "opacity-0 w-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-ink/5 px-6 py-6 space-y-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === l.href ? "text-brand-dark bg-brand/10" : "text-ink/70 hover:bg-ink/5 hover:text-ink"}`}>{l.label}</Link>
          ))}
          <div className="pt-4 mt-4 border-t border-ink/10">
            <a href="tel:+8801307085154" className="flex items-center gap-2 px-4 py-3 text-sm text-ink/60 hover:text-brand transition-colors"><span>📞</span> +৮৮০ ১৩০৭-০৮৫১৫৪</a>
          </div>
        </div>
      </div>
    </header>
  );
}