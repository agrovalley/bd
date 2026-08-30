import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "যোগাযোগ | Agro Valley Ltd",
  description:
    "Agro Valley Ltd-এর সাথে যোগাযোগ করুন — ফোন, WhatsApp, ইমেইল অথবা ফর্মের মাধ্যমে। ঠিকানা: ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী।",
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-36 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-wrap mx-auto px-6">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-brand-dark mb-4">
            Get in touch
          </p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight max-w-2xl">
            আপনার ব্যবসার জন্য নির্ভরযোগ্য সঙ্গী।
          </h1>
          <p className="mt-5 max-w-xl text-ink/70 leading-relaxed">
            মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি ও খুচরা অনুসন্ধানের জন্য নিচের
            ফর্মটি পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-wrap mx-auto px-6 grid md:grid-cols-2 gap-14">
          {/* CONTACT DETAILS */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">ফোন / WhatsApp</p>
              <a href="tel:+8801307085154" className="block text-lg font-medium hover:text-brand-dark transition-colors">
                +৮৮০ ১৩০৭-০৮৫১৫৪
              </a>
              <a
                href="https://wa.me/8801307085154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-brand-dark"
              >
                WhatsApp-এ বার্তা পাঠান <span aria-hidden="true">→</span>
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">ইমেইল</p>
              <a href="mailto:johurul.bsc@gmail.com" className="block text-lg font-medium hover:text-brand-dark transition-colors">
                johurul.bsc@gmail.com
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">ঠিকানা</p>
              <p className="text-lg font-medium leading-relaxed">
                ঝালুকা, আমগাছী হাট-৬২৪০, দুর্গাপুর, রাজশাহী
              </p>
              <p className="text-sm text-ink/50 leading-relaxed">
                Jhaluka, Amgachi Hat-6240, Durgapur, Rajshahi
              </p>
              <a
                href="https://www.google.com/maps/@24.3983037,88.730349,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-brand-dark"
              >
                Google Maps-এ দেখুন <span aria-hidden="true">→</span>
              </a>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-2">প্রোপ্রাইটর</p>
              <p className="text-lg font-medium">Proprietor: Md. Johurul Haque</p>
              <p className="text-sm text-ink/60">স্বত্বাধিকারী: মোঃ জহুরুল হক</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-soft rounded-2xl p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
