"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "Aqua", message: "" });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Agro Valley – অনুসন্ধান: ${form.interest}`);
    const body = encodeURIComponent(
      `নাম: ${form.name}\nফোন: ${form.phone}\nআগ্রহের বিষয়: ${form.interest}\n\nবার্তা:\n${form.message}`
    );
    window.location.href = `mailto:johurul.bsc@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full bg-transparent border-b border-ink/20 focus:border-teal outline-none py-2 text-sm placeholder:text-ink/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-ink/50">নাম</label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="আপনার নাম"
          />
        </div>
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-ink/50">ফোন নম্বর</label>
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="01XXXXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="font-mono text-[11px] uppercase tracking-widest text-ink/50">আগ্রহের বিষয়</label>
        <select
          value={form.interest}
          onChange={(e) => update("interest", e.target.value)}
          className={`${inputClass} bg-cream`}
        >
          <option>Aqua — মাছ ক্রয়/বিক্রয়</option>
          <option>Poultry — ডিম সরবরাহ</option>
          <option>Agro-Vet — ফিড ও ঔষধ (পাইকারি/খুচরা)</option>
          <option>অন্যান্য</option>
        </select>
      </div>

      <div>
        <label className="font-mono text-[11px] uppercase tracking-widest text-ink/50">বার্তা</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
          placeholder="আপনার প্রয়োজনের বিস্তারিত লিখুন..."
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-teal text-cream px-6 py-3 rounded-full font-medium text-sm hover:bg-teal-light transition-colors"
        >
          ইমেইল বার্তা পাঠান
        </button>
        <a
          href="https://wa.me/8801307085154"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-teal/30 text-teal px-6 py-3 rounded-full font-medium text-sm hover:bg-teal/5 transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </form>
  );
}
