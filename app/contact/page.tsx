import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tradelifeservices.com";

export const metadata: Metadata = {
  title: "Contact David",
  description:
    "Get in touch with Trade Life Services. Fill out the form or call David directly at (865) 247-1871. Knoxville's trusted handyman — most jobs scheduled within days.",
  openGraph: {
    title: "Contact Trade Life Services | Knoxville Handyman",
    description:
      "Reach out to David at Trade Life Services. Most jobs scheduled within days. Serving Knoxville, TN and surrounding areas.",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

const steps = [
  {
    num: "01",
    title: "Fill the Form",
    body: "Tell David what you need — job type, rough timeframe, any useful details.",
  },
  {
    num: "02",
    title: "David Reviews It",
    body: "He reads every request himself. No call centre, no middleman.",
  },
  {
    num: "03",
    title: "He Calls You Back",
    body: "Expect to hear from David within 24 hours to talk through the job.",
  },
];

const trust = [
  "Local to Knoxville, TN",
  "10+ years of experience",
  "Responds within 24 hours",
  "No job too small",
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="py-24 relative overflow-hidden border-b border-rust/20"
        style={{
          background: `
            radial-gradient(ellipse at 0% 100%, rgba(194,84,10,0.22) 0%, transparent 55%),
            linear-gradient(180deg, #0a0806 0%, #141210 100%)
          `,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="absolute -left-20 bottom-0 w-96 h-64 bg-rust/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1
            className="font-heading text-cream leading-none tracking-wide mb-6"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}
          >
            Let&rsquo;s Get
            <br />
            <span className="text-rust">To Work.</span>
          </h1>
          <p className="text-dim text-xl max-w-lg leading-relaxed">
            Tell David what you need — most jobs scheduled within days.
            No obligation, no runaround.
          </p>
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="border-b border-dark-edge" style={{ background: "#0a0806" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-rust text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            What Happens Next
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-dark-edge">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-5 py-6 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0"
              >
                <span className="font-heading text-3xl text-rust/35 leading-none flex-shrink-0 w-10 pt-0.5">
                  {step.num}
                </span>
                <div>
                  <p className="font-heading text-xl text-cream tracking-wide mb-1">
                    {step.title}
                  </p>
                  <p className="text-dim text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-column: Brand Panel + Form ── */}
      <section>
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[340px_1fr]">

          {/* Left — Brand Panel */}
          <div
            className="px-6 sm:px-10 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-dark-edge"
            style={{
              background:
                "linear-gradient(180deg, rgba(194,84,10,0.07) 0%, transparent 60%), #141210",
            }}
          >
            <div className="lg:sticky lg:top-24">
              <p className="text-rust text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                Why David
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl text-cream leading-tight mb-6">
                One Guy.
                <br />
                Done Right.
              </h2>

              <ul className="space-y-4 mb-8">
                {trust.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dim text-sm">
                    <svg
                      className="w-4 h-4 text-rust flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Worker photo */}
              <div className="relative h-40 rounded overflow-hidden mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=700&q=80"
                  alt="Trade professional at work"
                  fill
                  className="object-cover opacity-60"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/80 to-transparent" />
              </div>
              <div className="border-t border-dark-edge pt-8">
                <p className="text-dim text-xs mb-2 tracking-wide">Rather just call?</p>
                <a
                  href="tel:+18652471871"
                  className="font-heading text-3xl text-cream hover:text-rust transition-colors tracking-wider"
                >
                  (865) 247&#8209;1871
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="px-6 sm:px-10 py-12 lg:py-16" style={{ background: "#1c1814" }}>
            <h3 className="font-heading text-3xl text-cream mb-8 tracking-wide">
              Tell David About the Job
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Call CTA Band ── */}
      <section
        className="py-20 relative overflow-hidden border-t border-rust/20 text-center"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(194,84,10,0.22) 0%, transparent 65%),
            #0a0806
          `,
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-rust/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-rust text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Prefer to Talk?
          </p>
          <p className="text-dim text-lg mb-8 leading-relaxed">
            Call David directly — no hold music, no voicemail maze.
          </p>
          <a
            href="tel:+18652471871"
            className="font-heading text-cream hover:text-rust transition-colors tracking-wider"
            style={{ fontSize: "clamp(3rem,8vw,7rem)", lineHeight: 1 }}
          >
            (865) 247&#8209;1871
          </a>
          <p className="text-dim/40 text-xs mt-6 tracking-[0.2em] uppercase">
            Knoxville, TN &amp; Surrounding Areas
          </p>
        </div>
      </section>
    </>
  );
}
