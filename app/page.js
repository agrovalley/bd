import Link from "next/link";

const divisions = [
  {
    number: "01",
    title: "Aqua",
    subtitle: "মাছ উৎপাদন",
    body: "দায়িত্বশীল চাষ, স্বাস্থ্যকর পানি এবং নিয়মিত সরবরাহ—পুকুর থেকে বাজার পর্যন্ত।",
    href: "/aqua",
    tone: "moss",
  },
  {
    number: "02",
    title: "Poultry",
    subtitle: "ডিম উৎপাদন",
    body: "মানসম্মত লেয়ার ফার্ম থেকে প্রতিদিনের তাজা ডিম, নির্ভরযোগ্যভাবে।",
    href: "/poultry",
    tone: "sun",
  },
  {
    number: "03",
    title: "Agro-Vet",
    subtitle: "ফিড ও ভেটেরিনারি",
    body: "ফিড, ভ্যাকসিন, ওষুধ ও খামার-পরামর্শ—একটি সমন্বিত সাপ্লাই নেটওয়ার্ক।",
    href: "/agro-vet",
    tone: "clay",
  },
];

const signals = [
  ["৩", "মূল ব্যবসায়িক ইউনিট"],
  ["২৪/৭", "খামার পর্যবেক্ষণ"],
  ["১", "সমন্বিত সাপ্লাই চেইন"],
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="hero-section relative">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="max-w-wrap mx-auto px-6 pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
          <div className="grid items-end gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="relative z-10 max-w-2xl">
              <div className="eyebrow mb-7 animate-fade-up">
                <span className="eyebrow-mark" />
                <span>Integrated agro enterprise · Rajshahi</span>
              </div>
              <h1 className="hero-title animate-fade-up [animation-delay:120ms]">
                খাবারের শুরুটা<br />
                <em>ভালো মাটি</em> থেকে।
              </h1>
              <p className="hero-copy animate-fade-up [animation-delay:220ms]">
                Agro Valley মাছ, ডিম এবং খামারের প্রয়োজনীয় সরবরাহকে একসঙ্গে নিয়ে তৈরি করছে বাংলাদেশের জন্য আরও যত্নশীল একটি কৃষি চক্র।
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:320ms]">
                <Link href="/contact" className="button-primary">
                  ব্যবসায়িক যোগাযোগ <span aria-hidden="true">↗</span>
                </Link>
                <Link href="#divisions" className="button-quiet">
                  আমাদের কাজ দেখুন <span aria-hidden="true">↓</span>
                </Link>
              </div>
              <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-ink/15 pt-5 animate-fade-up [animation-delay:420ms]">
                {signals.map(([value, label]) => (
                  <div key={label} className="pr-4">
                    <div className="signal-value">{value}</div>
                    <div className="signal-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual relative animate-fade-up [animation-delay:180ms]">
              <div className="hero-photo-frame">
                <img src="/images/aqua-harvest.jpg" alt="Agro Valley fish harvest" className="hero-photo" />
                <div className="hero-photo-shade" />
                <div className="hero-photo-caption">
                  <span className="caption-dot" />
                  <span>On the ground · 2024</span>
                </div>
              </div>
              <div className="hero-note hero-note-top">
                <span className="hero-note-kicker">Built around</span>
                <strong>একটি পূর্ণাঙ্গ চক্র</strong>
              </div>
              <div className="hero-note hero-note-bottom">
                <span className="hero-note-kicker">Our promise</span>
                <strong>ভালো উৎপাদন, ভালো জীবন</strong>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                <span>EST.</span>
                <b>AV</b>
                <span>2018</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-baseline" aria-hidden="true">
          <span>01 / 04</span>
          <span className="baseline-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="max-w-wrap mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[.32fr_1fr] lg:gap-20">
            <div className="section-index">01 <span>—</span> WHY AGRO VALLEY</div>
            <div className="max-w-4xl">
              <p className="manifesto-lead">আমরা আলাদা আলাদা পণ্য বিক্রি করি না। আমরা তৈরি করি <span>সম্পর্কিত একটি উৎপাদন ব্যবস্থা</span>—যেখানে পানি, প্রাণী এবং মানুষের যত্ন একসঙ্গে কাজ করে।</p>
              <div className="mt-10 grid gap-8 border-t border-ink/15 pt-7 sm:grid-cols-2">
                <div>
                  <div className="mini-label">01 / Care</div>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">প্রতিটি ইউনিটে স্বাস্থ্য, নিরাপত্তা এবং দীর্ঘমেয়াদি স্থায়িত্বকে প্রথমে রাখা হয়।</p>
                </div>
                <div>
                  <div className="mini-label">02 / Continuity</div>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-ink/65">উৎপাদন থেকে সরবরাহ—একটি টিম, একটি মান, একটি নির্ভরযোগ্য প্রতিশ্রুতি।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divisions" className="divisions-section">
        <div className="max-w-wrap mx-auto px-6">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="section-index">02 <span>—</span> THE SYSTEM</div>
              <h2 className="section-title mt-5">তিনটি দিক।<br /><span>একটি ভবিষ্যৎ।</span></h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-ink/55">একটি ইউনিটের উপজাত অন্যটির ইনপুট হয়ে ওঠে। এটাই Agro Valley-এর কাজের মূল নকশা।</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {divisions.map((division) => (
              <Link key={division.title} href={division.href} className={`division-card division-${division.tone} group`}>
                <div className="flex items-start justify-between">
                  <span className="division-number">{division.number}</span>
                  <span className="division-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="division-art" aria-hidden="true">
                  <span className="art-ring art-ring-one" />
                  <span className="art-ring art-ring-two" />
                  <span className="art-core" />
                </div>
                <div className="relative z-10 mt-20">
                  <div className="mini-label">{division.subtitle}</div>
                  <h3>{division.title}</h3>
                  <p>{division.body}</p>
                  <span className="division-link">বিস্তারিত দেখুন <span>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="field-section">
        <div className="max-w-wrap mx-auto px-6">
          <div className="field-card">
            <div className="field-image-wrap">
              <img src="/images/poultry-farm.jpg" alt="Agro Valley poultry farm" className="field-image" />
              <div className="field-image-label">From our fields</div>
            </div>
            <div className="field-copy">
              <div className="section-index text-white/60">03 <span>—</span> IN PRACTICE</div>
              <h2 className="field-title">মাঠে যা করি,<br /><em>বাজারে তা রাখি।</em></h2>
              <p>আমাদের প্রতিটি সিদ্ধান্তের শুরু খামারে। সঠিক খাদ্য, নিয়মিত পরিচর্যা এবং দক্ষ মানুষের হাতে গড়ে ওঠে এমন পণ্য যা আপনার ব্যবসা ও পরিবারের উপর ভরসা করা যায়।</p>
              <Link href="/about" className="button-light">আমাদের গল্প <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="max-w-wrap mx-auto flex flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <div>
            <div className="section-index">04 <span>—</span> LET&apos;S TALK</div>
            <h2 className="contact-title mt-5">আপনার পরের<br /><span>ভালো সিদ্ধান্তটি</span> কোথায়?</h2>
          </div>
          <div className="md:pb-2 md:text-right">
            <p className="mb-5 max-w-xs text-sm leading-7 text-ink/55 md:ml-auto">পাইকারি সরবরাহ, খামার-পরামর্শ বা অংশীদারিত্ব—আমাদের সঙ্গে কথা বলুন।</p>
            <Link href="/contact" className="button-primary">যোগাযোগ করুন <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
