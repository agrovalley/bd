"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

const emptyForm = { record_type: "BP", title: "", value: "", notes: "", record_date: new Date().toISOString().slice(0, 10) };
const formatDate = (value) => new Intl.DateTimeFormat("en", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00`));

function AuthPanel() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    const result = mode === "login"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { name } } });
    if (result.error) setMessage(result.error.message);
    else if (mode === "signup") setMessage("Account created. Check your email if confirmation is enabled.");
    setBusy(false);
  }
  return <main className="vault-shell"><div className="vault-auth-card">
    <div className="vault-auth-brand"><span className="vault-heart">♥</span><span>Personal Health Records</span></div>
    <p className="vault-eyebrow">শুধু আপনার জন্য</p>
    <h1>{mode === "login" ? "আপনার স্বাস্থ্য-তথ্যে প্রবেশ করুন" : "আপনার account তৈরি করুন"}</h1>
    <p className="vault-muted">স্বাস্থ্য-তথ্য public business pages থেকে আলাদা এবং authenticated Supabase access-এর অধীনে থাকে।</p>
    <form onSubmit={submit} className="vault-form">
      {mode === "signup" && <label>নাম<input value={name} onChange={(e) => setName(e.target.value)} required /></label>}
      <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
      <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>
      {message && <p className="vault-message">{message}</p>}
      <button className="vault-primary" disabled={busy}>{busy ? "অপেক্ষা করুন…" : mode === "login" ? "নিরাপদে লগইন" : "অ্যাকাউন্ট তৈরি করুন"}</button>
    </form>
    <button className="vault-switch" onClick={() => { setMode(mode === "login" ? "signup" : "login"); setMessage(""); }}>{mode === "login" ? "নতুন account তৈরি করবেন?" : "আগের account আছে? লগইন করুন"}</button>
    <a className="vault-back" href="/">← ব্যবসায়িক সাইটে ফিরে যান</a>
  </div></main>;
}

function RecordCard({ record }) {
  const [opening, setOpening] = useState(false);
  async function openFile() {
    if (!record.file_url) return;
    setOpening(true);
    const { data } = await supabase.storage.from("health-files").createSignedUrl(record.file_url, 600);
    if (data?.signedUrl) window.open(data.signedUrl, "_blank", "noopener,noreferrer");
    setOpening(false);
  }
  return <article className="hub-record"><div className="hub-record-top"><span className="hub-tag">{record.record_type}</span><time>{formatDate(record.record_date)}</time></div><h3>{record.title}</h3>{record.value && <strong>{record.value}</strong>}{record.notes && <p>{record.notes}</p>}{record.file_url && <button className="vault-file" onClick={openFile} disabled={opening}>{opening ? "Opening…" : "Report খুলুন ↗"}</button>}</article>;
}

const sections = [
  { id: "summary", label: "Doctor Summary" },
  { id: "profile", label: "Profile & Family History" },
  { id: "measurements", label: "Height, Weight & BMI" },
  { id: "labs", label: "Laboratory Results" },
  { id: "prevention", label: "Prevention & Vaccination" },
  { id: "next-tests", label: "পরবর্তী পরীক্ষা" },
  { id: "records", label: "Health Timeline" },
];

function Summary({ records }) {
  const latest = (type) => records.find((item) => item.record_type?.toLowerCase().includes(type));
  return <div className="hub-section"><div className="hub-section-heading"><p className="vault-eyebrow">Doctor Summary</p><h2>আপনার স্বাস্থ্য-তথ্য, এক শান্ত জায়গায়।</h2><p>ব্যক্তিগত health hub-এর গুরুত্বপূর্ণ তথ্য এক নজরে দেখুন। এটি record-keeping-এর জন্য; diagnosis বা treatment-এর বিকল্প নয়।</p></div><div className="hub-summary-grid"><div><span>রক্তচাপ</span><strong>{latest("bp")?.value || "—"}</strong><small>{latest("bp") ? formatDate(latest("bp").record_date) : "কোনো record নেই"}</small></div><div><span>রক্তে গ্লুকোজ</span><strong>{latest("glucose")?.value || "—"}</strong><small>{latest("glucose") ? formatDate(latest("glucose").record_date) : "কোনো record নেই"}</small></div><div><span>ওজন</span><strong>{latest("weight")?.value || "—"}</strong><small>{latest("weight") ? formatDate(latest("weight").record_date) : "কোনো record নেই"}</small></div><div><span>Total records</span><strong>{records.length}</strong><small>Supabase timeline</small></div></div></div>;
}

function Profile() { return <div className="hub-section"><p className="vault-eyebrow">Profile</p><h2>Johurul Haque</h2><div className="hub-card-grid"><article><span>জন্মসাল</span><strong>1993</strong><p>বয়স: 32 বছর</p></article><article><span>পারিবারিক ইতিহাস</span><strong>Diabetes · BP · Thyroid</strong><p>মাতৃকুল ও বোনের ইতিহাসে এই ঝুঁকিগুলো উল্লেখ আছে।</p></article><article><span>Food triggers</span><strong>দুধ · ভাজা খাবার · ছানার মিষ্টি</strong><p>Reported symptoms: gas, bloating, diarrhea-like discomfort.</p></article></div><div className="hub-note">এই profile supplied health notes থেকে সংগঠিত। নতুন তথ্য যোগ হলে healthcare professional-এর সঙ্গে review করুন।</div></div>; }

function Measurements({ records }) { const items = records.filter((r) => /bp|blood|glucose|sugar|weight|height|bmi/i.test(`${r.record_type} ${r.title}`)); return <div className="hub-section"><p className="vault-eyebrow">Measurements</p><h2>Height, Weight, BMI, BP & Glucose</h2><div className="hub-table">{items.length ? items.map((r) => <div className="hub-row" key={r.id}><span>{r.record_type}</span><strong>{r.value || "—"}</strong><time>{formatDate(r.record_date)}</time></div>) : <div className="hub-empty">এখনো কোনো measurement record নেই। Admin account থেকে record যোগ করা যাবে।</div>}</div></div>; }

function Labs({ records }) { const items = records.filter((r) => /lab|esr|mpv|pdw|test|report/i.test(`${r.record_type} ${r.title} ${r.notes}`)); return <div className="hub-section"><p className="vault-eyebrow">Laboratory Results</p><h2>পরীক্ষার ফলাফল</h2><div className="hub-lab-grid"><article><span>ESR (28 Mar 2026)</span><strong>11 mm</strong><small>Reference 0–10 mm · Borderline high</small></article><article><span>MPV</span><strong>16 fL</strong><small>Reference 9–13 fL · High</small></article><article><span>PDW</span><strong>20.9 fL</strong><small>Reference 9–17 fL · High</small></article></div>{items.length > 0 && <div className="hub-table hub-table-spaced">{items.map((r) => <div className="hub-row" key={r.id}><span>{r.title}</span><strong>{r.value}</strong><time>{formatDate(r.record_date)}</time></div>)}</div>}<div className="hub-note">এই ফলাফল supplied report summary থেকে সাজানো; সম্পূর্ণ CBC, symptoms ও clinical history মিলিয়ে doctor-এর সঙ্গে review করুন।</div></div>; }

function Prevention() { return <div className="hub-section"><p className="vault-eyebrow">Prevention & Vaccination</p><h2>নিয়মিত health checkup plan</h2><div className="hub-card-grid"><article><span>Family-risk follow-up</span><strong>HbA1c · TSH · SGPT / ALT</strong><p>Strong family history-এর কারণে qualified healthcare professional-এর সঙ্গে periodic review নিয়ে আলোচনা করুন।</p></article><article><span>Vaccination</span><strong>Review needed</strong><p>নিজের vaccination record update করে doctor-এর সঙ্গে মিলিয়ে নিন।</p></article></div></div>; }

function NextTests() { return <div className="hub-section"><p className="vault-eyebrow">Next Tests</p><h2>পরবর্তী পরীক্ষা কী করাবেন</h2><div className="hub-checklist"><div>○ HbA1c — family diabetes history review</div><div>○ TSH — thyroid history review</div><div>○ SGPT / ALT — preventive follow-up</div><div>○ Complete CBC — ESR, MPV ও PDW পুনর্মূল্যায়ন</div></div><div className="hub-note">এটি কোনো medical prescription নয়। চূড়ান্ত সিদ্ধান্ত সবসময় qualified doctor-এর সঙ্গে নিন।</div></div>; }

function HealthDashboard({ session }) {
  const [records, setRecords] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(""); const [role, setRole] = useState("patient"); const [managedUserId, setManagedUserId] = useState(session.user.id); const [active, setActive] = useState("summary"); const [query, setQuery] = useState(""); const [showForm, setShowForm] = useState(false); const [form, setForm] = useState(emptyForm); const [saving, setSaving] = useState(false);
  const name = session.user.user_metadata?.name || session.user.email?.split("@")[0] || "আপনি";
  async function loadRecords(userId = managedUserId, isAdmin = role === "admin") { setLoading(true); let queryBuilder = supabase.from("health_records").select("id,user_id,record_type,title,value,notes,file_url,record_date,created_at"); if (!isAdmin) queryBuilder = queryBuilder.eq("user_id", userId); const result = await queryBuilder.order("record_date", { ascending: false }).order("created_at", { ascending: false }); if (result.error) { setError(result.error.message); setRecords([]); } else setRecords(result.data || []); setLoading(false); }
  useEffect(() => { let mounted = true; (async () => { const roleResult = await supabase.from("user_roles").select("role,user_id,email").eq("email", session.user.email?.toLowerCase() || "").maybeSingle(); if (!mounted) return; const nextRole = roleResult.data?.role === "admin" ? "admin" : "patient"; const ownerId = nextRole === "admin" ? ((await supabase.from("user_roles").select("user_id").eq("email", "johurul.bsc@outlook.com").maybeSingle()).data?.user_id || session.user.id) : (roleResult.data?.user_id || session.user.id); if (!mounted) return; setRole(nextRole); setManagedUserId(ownerId); await loadRecords(ownerId, nextRole === "admin"); })(); return () => { mounted = false; }; }, [session.user.id]);
  const filtered = useMemo(() => { const q = query.trim().toLowerCase(); return records.filter((r) => !q || [r.title, r.record_type, r.value, r.notes].filter(Boolean).join(" ").toLowerCase().includes(q)); }, [records, query]);
  async function saveRecord(event) { event.preventDefault(); setSaving(true); setError(""); const result = await supabase.from("health_records").insert({ ...form, user_id: managedUserId }).select("id,user_id,record_type,title,value,notes,file_url,record_date,created_at").single(); if (result.error) setError(result.error.message); else { setRecords((items) => [result.data, ...items]); setForm({ ...emptyForm, record_date: new Date().toISOString().slice(0, 10) }); setShowForm(false); } setSaving(false); }
  const content = active === "summary" ? <Summary records={records} /> : active === "profile" ? <Profile /> : active === "measurements" ? <Measurements records={records} /> : active === "labs" ? <Labs records={records} /> : active === "prevention" ? <Prevention /> : active === "next-tests" ? <NextTests /> : <div className="hub-section"><div className="hub-list-head"><div><p className="vault-eyebrow">Health Timeline</p><h2>আপনার records</h2></div><input placeholder="Search records…" value={query} onChange={(e) => setQuery(e.target.value)} /></div>{loading ? <p className="vault-muted">Records লোড হচ্ছে…</p> : filtered.length ? <div className="hub-records">{filtered.map((record) => <RecordCard key={record.id} record={record} />)}</div> : <div className="hub-empty">এখনও কোনো record নেই। আপনার doctor update করলে এখানে দেখা যাবে।</div>}</div>;
  return <main className="hub-dashboard"><header className="hub-topbar"><a className="vault-brand" href="/"><span className="vault-heart">♥</span> Health Hub</a><div className="vault-user"><span>{name}</span><button onClick={() => supabase.auth.signOut()}>লগআউট</button></div></header><div className="hub-layout"><aside className="hub-sidebar"><p className="hub-sidebar-title">Health Hub</p><p className="hub-sidebar-user">{name}</p><nav>{sections.map((section) => <button key={section.id} className={active === section.id ? "hub-nav-active" : ""} onClick={() => setActive(section.id)}>{section.label}</button>)}</nav></aside><div className="hub-main"><div className="hub-mobile-nav">{sections.map((section) => <button key={section.id} className={active === section.id ? "hub-nav-active" : ""} onClick={() => setActive(section.id)}>{section.label}</button>)}</div>{role === "admin" && <div className="hub-admin-bar"><span>Admin / Developer access</span><button className="vault-primary" onClick={() => setShowForm(true)}>+ নতুন record</button></div>}{showForm && <form className="vault-new-record" onSubmit={saveRecord}><h2>নতুন health record</h2><div className="vault-grid"><label>ধরন<input value={form.record_type} onChange={(e) => setForm({ ...form, record_type: e.target.value })} required /></label><label>তারিখ<input type="date" value={form.record_date} onChange={(e) => setForm({ ...form, record_date: e.target.value })} required /></label><label>শিরোনাম<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label><label>Value<input value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} required /></label><label className="vault-wide">Notes<textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></label></div><div className="vault-actions"><button type="button" onClick={() => setShowForm(false)}>বাতিল</button><button className="vault-primary" disabled={saving}>{saving ? "সংরক্ষণ হচ্ছে…" : "সংরক্ষণ করুন"}</button></div></form>}{error && <p className="vault-message">{error}</p>}{content}</div></div></main>;
}

export default function PrivateVaultPage() {
  const [session, setSession] = useState(undefined);
  useEffect(() => { supabase.auth.getSession().then(({ data }) => setSession(data.session)); const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next)); return () => data.subscription.unsubscribe(); }, []);
  if (session === undefined) return <main className="vault-shell"><p className="vault-muted">Secure access যাচাই হচ্ছে…</p></main>;
  return session ? <HealthDashboard session={session} /> : <AuthPanel />;
}
