import Link from "next/link";

export default function UnitPreviewCard({ href, eyebrow, title, englishName, description, illustration, cta }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-ink/10 bg-white hover:border-brand/40 hover:shadow-lg transition-all p-8"
    >
      <div className="flex justify-center mb-6">{illustration}</div>
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-brand-dark mb-2">{eyebrow}</p>
      <h3 className="font-display font-bold text-2xl mb-1">{title}</h3>
      <p className="font-mono text-xs text-ink/45 mb-4">{englishName}</p>
      <p className="text-sm text-ink/70 leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-dark group-hover:gap-3 transition-all">
        {cta || "বিস্তারিত দেখুন"}
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
