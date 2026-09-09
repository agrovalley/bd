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
    event.preventDefault();
    setBusy(true); setMessage("");
    const result = mode === "login"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { data: { name } } });
    if (result.error) setMessage(result.error.message);
    else if (mode === "signup") setMessage("Account created. Check your email if confirmation is enabled.");
    setBusy(false);
  }

  return <main className="vault-shell">
    <div className="vault-auth-card">
      <div className="vault-auth-brand"><span className="vault-heart">♥</span><span>Private Health Vault</span></div>
      <p className="vault-eyebrow">শুধু আপনার জন্য</p>
      <h1>{mode === "login" ? "আপনার ভল্টে প্রবেশ করুন" : "আপনার ব্যক্তিগত ভল্ট তৈরি করুন"}</h1>
      <p className="vault-muted">আপনার স্বাস্থ্য-তথ্য এই public business site-এর বাইরে, Supabase-এর private access rules-এর অধীনে থাকবে।</p>
      <form onSubmit={submit} className="vault-form">
        {mode === "signup" && <label>নাম<input value={name} onChange={(e) => setName(e.target.value)} required /></label>}
        <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
        <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>
        {message && <p className="vault-message">{message}</p>}
        <button className="vault-primary" disabled={busy}>{busy ? "অপেক্ষা করুন…" : mode === "login" ? "নিরাপদে লগইন" : "অ্যাকাউন্ট তৈরি করুন"}</button>
      </form>
      <button className="vault-switch" onClick={() => { setMode(mode === "login" ? "signup" : "login"); setMessage(""); }}>{mode === "login" ? "নতুন account তৈরি করবেন?" : "আগের account আছে? লগইন করুন"}</button>
      <a className="vault-back" href="/">← ব্যবসায়িক সাইটে ফিরে যান</a>
    </div>
  </main>;
}

function RecordCard({ record }) {
  const [opening, setOpening] = useState(false);
  async function openFile() {
    if (!record.file_url) return;
    setOpening(true);
    const { data, error } = await supabase.storage.from("health-files").createSignedUrl(record.file_url, 600);
    if (!error && data?.signedUrl) window.open(data.signedUrl, "_blank", "noopener,noreferrer");
    setOpening(false);
  }
  return <article className="vault-record">
    <div className="vault-record-top"><span className="vault-tag">{record.record_type}</span><time>{formatDate(record.record_date)}</time></div>
    <h3>{record.title}</h3>
    {record.value && <strong>{record.value}</strong>}
    {record.notes && <p>{record.notes}</p>}
    {record.file_url && <button className="vault-file" onClick={openFile} disabled={opening}>{opening ? "Opening…" : "Report খুলুন ↗"}</button>}
  </article>;
}

function VaultDashboard({ session }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const name = session.user.user_metadata?.name || session.user.email?.split("@")[0] || "আপনি";

  async function loadRecords() {
    setLoading(true);
    const result = await supabase.from("health_records").select("id,user_id,record_type,title,value,notes,file_url,record_date,created_at").eq("user_id", session.user.id).order("record_date", { ascending: false }).order("created_at", { ascending: false });
    if (result.error) { setError(result.error.message); setRecords([]); } else setRecords(result.data || []);
    setLoading(false);
  }
  useEffect(() => { loadRecords(); }, []);
  const filtered = useMemo(() => { const q = query.trim().toLowerCase(); return records.filter((r) => !q || [r.title, r.record_type, r.value, r.notes].filter(Boolean).join(" ").toLowerCase().includes(q)); }, [records, query]);
  async function saveRecord(event) {
    event.preventDefault(); setSaving(true); setError("");
    const result = await supabase.from("health_records").insert({ ...form, user_id: session.user.id }).select("id,user_id,record_type,title,value,notes,file_url,record_date,created_at").single();
    if (result.error) setError(result.error.message); else { setRecords((items) => [result.data, ...items]); setForm({ ...emptyForm, record_date: new Date().toISOString().slice(0, 10) }); setShowForm(false); }
    setSaving(false);
  }

  return <main className="vault-dashboard">
    <header className="vault-topbar"><a className="vault-brand" href="/"><span className="vault-heart">♥</span> Private Vault</a><div className="vault-user"><span>{name}</span><button onClick={() => supabase.auth.signOut()}>লগআউট</button></div></header>
    <div className="vault-content">
      <section className="vault-hero"><div><p className="vault-eyebrow">Private health space</p><h1>আপনার স্বাস্থ্য-তথ্য, এক শান্ত জায়গায়।</h1><p>শুধু authenticated account দিয়ে প্রবেশযোগ্য। Public business pages আপনার records দেখতে পারে না।</p></div><button className="vault-primary vault-add" onClick={() => setShowForm(true)}>+ নতুন record</button></section>
      <div className="vault-stats"><div><span>Total records</span><strong>{records.length}</strong></div><div><span>Latest entry</span><strong>{records[0] ? formatDate(records[0].record_date) : "—"}</strong></div><div><span>Access</span><strong>Private</strong></div></div>
      {showForm && <form className="vault-new-record" onSubmit={saveRecord}><h2>নতুন health record</h2><div className="vault-grid"><label>ধরন<input value={form.record_type} onChange={(e) => setForm({ ...form, record_type: e.target.value })} required /></label><label>তারিখ<input type="date" value={form.record_date} onChange={(e) => setForm({ ...form, record_date: e.target.value })} required /></label><label>শিরোনাম<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label><label>Value<input value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} required /></label><label className="vault-wide">Notes<textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></label></div><div className="vault-actions"><button type="button" onClick={() => setShowForm(false)}>বাতিল</button><button className="vault-primary" disabled={saving}>{saving ? "সংরক্ষণ হচ্ছে…" : "সংরক্ষণ করুন"}</button></div></form>}
      <section className="vault-list-head"><div><p className="vault-eyebrow">Your timeline</p><h2>Health records</h2></div><input placeholder="Search records…" value={query} onChange={(e) => setQuery(e.target.value)} /></section>
      {error && <p className="vault-message">{error}</p>}
      {loading ? <p className="vault-muted">Records লোড হচ্ছে…</p> : filtered.length ? <div className="vault-records">{filtered.map((record) => <RecordCard key={record.id} record={record} />)}</div> : <div className="vault-empty">এখনও কোনো record নেই।</div>}
    </div>
  </main>;
}

export default function PrivateVaultPage() {
  const [session, setSession] = useState(undefined);
  useEffect(() => { supabase.auth.getSession().then(({ data }) => setSession(data.session)); const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next)); return () => data.subscription.unsubscribe(); }, []);
  if (session === undefined) return <main className="vault-shell"><p className="vault-muted">Secure access যাচাই হচ্ছে…</p></main>;
  return session ? <VaultDashboard session={session} /> : <AuthPanel />;
}
