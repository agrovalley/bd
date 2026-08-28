import Link from "next/link";

const ALL_UNITS = [
  { id: "aqua", href: "/aqua", label: "Agro Valley Aqua", note: "মাছ চাষ ও পাইকারি সরবরাহ" },
  { id: "poultry", href: "/poultry", label: "Agro Valley Poultry", note: "ডিম উৎপাদন ও সরবরাহ" },
  { id: "agro-vet", href: "/agro-vet", label: "Agro Valley Agro-Vet", note: "ফিড ও ঔষধ ডিলারশিপ" },
];

export default function OtherUnitsLinks({ current }) {
  const others = ALL_UNITS.filter((u) => u.id !== current);
  return (
    <section className="bg-soft py-16 md:py-20">
      <div className="max-w-wrap mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink/50 mb-6">
          আমাদের অন্যান্য ইউনিট
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {others.map((u) => (
            <Link
              key={u.id}
              href={u.href}
              className="group flex items-center justify-between rounded-xl bg-white border border-ink/10 hover:border-brand/40 px-6 py-5 transition-colors"
            >
              <div>
                <p className="font-display font-semibold text-lg">{u.label}</p>
                <p className="text-sm text-ink/60">{u.note}</p>
              </div>
              <span className="text-brand-dark group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
