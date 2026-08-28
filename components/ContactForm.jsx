"use client";

import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  phone: "",
  interest: "Aqua — মাছ ক্রয়/বিক্রয়",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function buildMessage() {
    return `নাম: ${form.name}\nফোন: ${form.phone}\nআগ্রহের বিষয়: ${form.interest}\n\nবার্তা:\n${form.message}`;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "বার্তা যাচাই করা হচ্ছে…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "বার্তা পাঠানো যায়নি।");
      }

      const subject = encodeURIComponent(`Agro Valley Group – অনুসন্ধান: ${form.interest}`);
      const body = encodeURIComponent(buildMessage());
      setStatus({ type: "success", message: "তথ্য যাচাই হয়েছে। আপনার ইমেইল অ্যাপ খোলা হচ্ছে…" });
      setForm(INITIAL_FORM);
      window.location.href = `mailto:johurul.bsc@gmail.com?subject=${subject}&body=${body}`;
    } catch (error) {
      setStatus({ type: "error", message: error.message || "দয়া করে ফোন বা WhatsApp-এ যোগাযোগ করুন।" });
    }
  }

  function handleWhatsApp() {
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/8801307085154?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full bg-transparent border-b border-ink/20 focus:border-brand outline-none py-2 text-sm placeholder:text-ink/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-widest text-ink/50">আপনার নাম</label>
          <input id="contact-name" name="name" required maxLength={80} value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} placeholder="আপনার নাম" />
        </div>
        <div>
          <label htmlFor="contact-phone" className="font-mono text-[11px] uppercase tracking-widest text-ink/50">ফোন নম্বর</label>
          <input id="contact-phone" name="phone" required type="tel" maxLength={25} value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} placeholder="01XXXXXXXXX" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-interest" className="font-mono text-[11px] uppercase tracking-widest text-ink/50">আগ্রহের বিষয়</label>
        <select id="contact-interest" name="interest" value={form.interest} onChange={(e) => update("interest", e.target.value)} className={`${inputClass} bg-white`}>
          <option>Aqua — মাছ ক্রয়/বিক্রয়</option>
          <option>Poultry — ডিম সরবরাহ</option>
          <option>Agro-Vet — ফিড ও ঔষধ</option>
          <option>অন্যান্য</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-widest text-ink/50">আপনার বার্তা</label>
        <textarea id="contact-message" name="message" required maxLength={2000} rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass} placeholder="আপনার প্রয়োজনের বিস্তারিত লিখুন..." />
      </div>

      {status.type !== "idle" && (
        <p role="status" aria-live="polite" className={`text-sm ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-brand-dark" : "text-ink/60"}`}>
          {status.message}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button disabled={status.type === "loading"} type="submit" className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-brand-dark disabled:opacity-60 transition-colors">
          {status.type === "loading" ? "যাচাই হচ্ছে…" : "ইমেইল পাঠান"}
        </button>
        <button type="button" onClick={handleWhatsApp} className="inline-flex items-center gap-2 border border-brand text-brand-dark px-6 py-3 rounded-full font-medium text-sm hover:bg-soft transition-colors">
          WhatsApp-এ পাঠান
        </button>
      </div>
    </form>
  );
}
