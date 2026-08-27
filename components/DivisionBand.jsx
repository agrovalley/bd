export default function DivisionBand({
  id,
  eyebrow,
  title,
  englishName,
  description,
  points,
  reverse,
  accent,
  dark,
  illustration,
}) {
  const bg = dark ? "bg-teal-dim text-cream" : "bg-cream text-ink";
  const eyebrowColor =
    accent === "teal" ? "text-teal-light" : accent === "gold" ? "text-gold-dim" : "text-rust";
  const chipBg =
    accent === "teal" ? "bg-teal/10 text-teal" : accent === "gold" ? "bg-gold/15 text-gold-dim" : "bg-rust/10 text-rust";

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
          <p className={`font-mono text-sm mb-6 ${dark ? "text-cream/50" : "text-ink/50"}`}>
            {englishName}
          </p>
          <p className={`leading-relaxed mb-6 ${dark ? "text-cream/80" : "text-ink/80"}`}>
            {description}
          </p>
          <ul className="space-y-3">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${chipBg.split(" ")[0]}`} />
                <span className={`text-sm ${dark ? "text-cream/80" : "text-ink/80"}`}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
