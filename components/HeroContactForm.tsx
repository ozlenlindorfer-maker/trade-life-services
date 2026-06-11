"use client";

import { useState } from "react";

type FormData = { name: string; phone: string; email: string; jobType: string };
type FormErrors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "block w-full bg-dark/80 border border-dark-edge rounded px-3 py-2.5 text-cream text-sm placeholder:text-dim/40 focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-colors";

const labelCls = "block text-[11px] font-semibold text-dim uppercase tracking-[0.15em] mb-1.5";

function Err({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-400 text-[11px] mt-1">{msg}</p>;
}

export default function HeroContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", jobType: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Required.";
    if (!form.phone.trim()) e.phone = "Required.";
    if (!form.email.trim()) e.email = "Required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email.";
    if (!form.jobType.trim()) e.jobType = "Required.";
    return e;
  }

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-12 h-12 bg-rust/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-heading text-3xl text-cream mb-1">Request Sent!</p>
          <p className="text-dim text-sm leading-relaxed">We&apos;ll be in touch as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
      {/* Name + Phone row */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Name <span className="text-rust">*</span></label>
          <input type="text" value={form.name} onChange={set("name")} placeholder="John Smith" className={inputCls} autoComplete="name" />
          <Err msg={errors.name} />
        </div>
        <div>
          <label className={labelCls}>Phone <span className="text-rust">*</span></label>
          <input type="tel" value={form.phone} onChange={set("phone")} placeholder="(865) 555-0100" className={inputCls} autoComplete="tel" />
          <Err msg={errors.phone} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelCls}>Email <span className="text-rust">*</span></label>
        <input type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} autoComplete="email" />
        <Err msg={errors.email} />
      </div>

      {/* Job description */}
      <div>
        <label className={labelCls}>What do you need? <span className="text-rust">*</span></label>
        <textarea
          value={form.jobType}
          onChange={set("jobType")}
          placeholder="e.g. Leaking pipe under kitchen sink, patch drywall, repaint bedroom..."
          rows={3}
          className={inputCls}
        />
        <Err msg={errors.jobType} />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs bg-red-950/40 border border-red-800/40 rounded px-3 py-2">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-rust hover:bg-rust/80 disabled:opacity-60 disabled:cursor-not-allowed text-cream font-bold text-sm py-3.5 px-5 rounded transition-colors cursor-pointer tracking-wide"
      >
        {status === "submitting" ? "Sending…" : "Send Message →"}
      </button>

      <p className="text-[10px] text-dim/50 text-center">We respond as soon as possible · No obligation</p>
    </form>
  );
}
