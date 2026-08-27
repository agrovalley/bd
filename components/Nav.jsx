"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#aqua", label: "Aqua" },
  { href: "#poultry", label: "Poultry" },
  { href: "#agro-vet", label: "Agro-Vet" },
  { href: "#about", label: "পরিচিতি" },
  { href: "#contact", label: "যোগাযোগ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-wrap mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-teal">
          Agro Valley
          <span className="font-mono text-[10px] align-super ml-1 text-gold-dim">Ltd.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-ink/80">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-teal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-cream border-t border-ink/10 px-6 py-4 flex flex-col gap-4 font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
