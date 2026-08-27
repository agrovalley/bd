# Agro Valley Limited — ওয়েবসাইট

Next.js (App Router) + Tailwind CSS দিয়ে তৈরি একটি আধুনিক, রেস্পন্সিভ ওয়েবসাইট।
তিনটি ইউনিট — **Aqua**, **Poultry**, **Agro-Vet** — এর জন্য আলাদা সেকশনসহ একটি
সিঙ্গেল-পেজ ব্র্যান্ড সাইট।

## লোকালি চালানো (ঐচ্ছিক, টেস্ট করার জন্য)

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে `http://localhost:3000` খুলুন।

## GitHub-এ পুশ করা

```bash
cd agro-valley
git init
git add .
git commit -m "Agro Valley website — initial version"
git branch -M main
git remote add origin https://github.com/<আপনার-ইউজারনেম>/agro-valley.git
git push -u origin main
```

> GitHub-এ আগে থেকে একটি খালি রিপোজিটরি (agro-valley) তৈরি করে নিন (README/gitignore
> ছাড়া — কারণ সেগুলো এই প্রজেক্টে আগে থেকেই আছে)।

## Vercel-এ ডিপ্লয় করা

1. https://vercel.com -এ লগইন করুন (GitHub অ্যাকাউন্ট দিয়ে)।
2. **Add New → Project** এ ক্লিক করুন।
3. GitHub থেকে `agro-valley` রিপোজিটরিটি সিলেক্ট করুন।
4. Framework Preset স্বয়ংক্রিয়ভাবে **Next.js** সনাক্ত হবে — কোনো সেটিংস পরিবর্তনের
   দরকার নেই।
5. **Deploy** চাপুন — কয়েক মিনিটেই লাইভ লিংক পেয়ে যাবেন।

এরপর থেকে `main` ব্রাঞ্চে যেকোনো পুশ করলেই Vercel স্বয়ংক্রিয়ভাবে নতুন ভার্সন
ডিপ্লয় করবে।

## যা পরিবর্তন করা প্রয়োজন হবে

- `components/Footer.jsx` ও `app/page.js` (Contact সেকশন) — ফোন নম্বর, ইমেইল,
  ঠিকানা বসান।
- `app/layout.js` — মেটাডাটা/SEO তথ্য প্রয়োজনে হালনাগাদ করুন।
- ইলাস্ট্রেশনগুলো (`components/Illustrations.jsx`) বর্তমানে abstract/geometric —
  চাইলে পরে বাস্তব ছবি দিয়ে প্রতিস্থাপন করা যাবে।

## প্রজেক্ট স্ট্রাকচার

```
app/
  layout.js       -> ফন্ট, মেটাডাটা
  page.js         -> মূল হোমপেজ (সব সেকশন একত্রে)
  globals.css     -> ডিজাইন টোকেন ও বেস স্টাইল
components/
  Nav.jsx         -> হেডার/নেভিগেশন
  Footer.jsx
  CycleDiagram.jsx -> উৎপাদন চক্রের অ্যানিমেটেড ডায়াগ্রাম
  DivisionBand.jsx -> প্রতিটি ইউনিটের জন্য পুনঃব্যবহারযোগ্য সেকশন
  Illustrations.jsx
  ContactForm.jsx  -> mailto ভিত্তিক ফর্ম (ব্যাকএন্ড ছাড়াই কাজ করে)
```
