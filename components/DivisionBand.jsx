export default function DivisionBand({
  id,
  eyebrow,
  title,
  englishName,
  description,
  points,
  reverse,
  dark,
  illustration,
}) {
  const bg = dark ? "bg-ink text-white" : "bg-white text-ink";
  const eyebrowColor = dark ? "text-brand-light" : "text-brand-dark";
  const dotColor = dark ? "bg-brand-light" : "bg-brand";

  return (
    <section id={id} className={`${bg} relative overflow-hidden scroll-mt-20`}>
      <div className="max-w-wrap mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className={`flex justify-center ${reverse ? "md:order-2" : ""}`}>{illustration}</div>

        <div className={reverse ? "md:order-1" : ""}>
          <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${eyebrowColor}`}>
            {eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-2">
            {title}
          </h2>
          <p className={`font-mono text-sm mb-6 ${dark ? "text-white/50" : "text-ink/50"}`}>
            {englishName}
          </p>
          <p className={`leading-relaxed mb-6 ${dark ? "text-white/80" : "text-ink/80"}`}>
            {description}
          </p>
          <ul className="space-y-3">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${dotColor}`} />
                <span className={`text-sm ${dark ? "text-white/80" : "text-ink/80"}`}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
