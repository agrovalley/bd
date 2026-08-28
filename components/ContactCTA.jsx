import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-ink text-white py-16 md:py-20">
      <div className="max-w-wrap mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-2">
            আপনার ব্যবসার জন্য নির্ভরযোগ্য সঙ্গী।
          </h2>
          <p className="text-white/70 text-sm max-w-md">
            মাছ, ডিম, ফিড অথবা ঔষধ সংক্রান্ত পাইকারি ও খুচরা অনুসন্ধানের জন্য যোগাযোগ করুন।
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="bg-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
          >
            যোগাযোগ করুন
          </Link>
          <a
            href="https://wa.me/8801307085154"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-6 py-3 rounded-full text-sm font-medium hover:border-white/60 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
