"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  jobType: string;
  timeframe: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "block w-full bg-dark border border-dark-edge rounded-md px-4 py-3 text-cream text-base placeholder:text-dim/50 focus:outline-none focus:border-rust focus:ring-1 focus:ring-rust transition-colors";

const labelClass = "block text-sm font-semibold text-cream/70 mb-2";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-red-400 text-xs mt-1.5">{msg}</p>;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    jobType: "",
    timeframe: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.jobType.trim())
      e.jobType = "Please describe the type of job needed.";
    return e;
  }

  function set(field: keyof FormData) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
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
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-dark-card border border-dark-edge rounded-xl p-10 text-center">
        <div className="w-14 h-14 bg-rust/20 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-rust"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-4xl text-cream mb-3">You're All Set!</h3>
        <p className="text-dim text-base leading-relaxed">
          Thanks for reaching out. David will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>
            Full Name <span className="text-rust">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="John Smith"
            className={inputClass}
            autoComplete="name"
          />
          <FieldError msg={errors.name} />
        </div>

        <div>
          <label className={labelClass}>
            Phone Number <span className="text-rust">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="(865) 555-0100"
            className={inputClass}
            autoComplete="tel"
          />
          <FieldError msg={errors.phone} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>
          Email Address <span className="text-rust">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="you@example.com"
          className={inputClass}
          autoComplete="email"
        />
        <FieldError msg={errors.email} />
      </div>

      {/* Job Type */}
      <div>
        <label className={labelClass}>
          Type of Job / Service Needed <span className="text-rust">*</span>
        </label>
        <textarea
          value={form.jobType}
          onChange={set("jobType")}
          placeholder="e.g. Leaking pipe under kitchen sink, replace light fixture..."
          rows={3}
          className={inputClass}
        />
        <FieldError msg={errors.jobType} />
      </div>

      {/* Timeframe */}
      <div>
        <label className={labelClass}>Preferred Date or Timeframe</label>
        <input
          type="text"
          value={form.timeframe}
          onChange={set("timeframe")}
          placeholder="e.g. This week, ASAP, weekends only, after 5pm..."
          className={inputClass}
        />
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Brief Description of the Job</label>
        <textarea
          value={form.description}
          onChange={set("description")}
          placeholder="Any extra details that would help David understand the job..."
          rows={4}
          className={inputClass}
        />
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="bg-red-950/40 border border-red-800/50 text-red-400 text-sm rounded-md px-4 py-3">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-rust hover:bg-rust/80 disabled:opacity-60 disabled:cursor-not-allowed text-cream font-semibold text-base py-4 px-6 rounded-md transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send My Request"}
      </button>
    </form>
  );
}
