import Link from "next/link";
import FadeUp from "./FadeUp";

const factors = [
  {
    title: "Travel & Time",
    body: "The farther out the job, the more time it takes us to reach you — and that can affect the final cost. Closer to Knoxville usually means less; further afield, a little more.",
  },
  {
    title: "The Real Scope",
    body: "Some jobs turn out bigger than they look and some problems run deeper than expected — but plenty turn out smaller, too. We price for the work that's actually in front of us, never a worst-case guess.",
  },
  {
    title: "Materials",
    body: "When a job needs parts or materials, those are added fairly on top of labor. You only ever pay for what your specific job genuinely requires — nothing padded.",
  },
];

export default function PricingNote() {
  return (
    <section
      className="py-24 relative overflow-hidden border-b border-dark-edge"
      style={{ background: "#faf8f4" }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">
              Straight Talk on Pricing
            </span>
          </div>
          <h2 className="font-heading text-5xl sm:text-6xl text-cream tracking-wide mb-6">
            Honest Pricing, <span className="text-rust">No Surprises.</span>
          </h2>
          <p className="text-dim text-lg max-w-2xl leading-relaxed mb-14">
            We like to be upfront, so we&rsquo;re putting this right here for everyone
            to read. Here&rsquo;s the honest truth about how handyman pricing actually
            works — no fine print, no games.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {factors.map((f, i) => (
            <FadeUp key={f.title} delay={i * 0.08}>
              <div
                className="relative rounded-lg p-7 h-full overflow-hidden"
                style={{
                  background: "#ffffff",
                  borderTop: "1px solid #e5dcce",
                  borderRight: "1px solid #e5dcce",
                  borderBottom: "1px solid #e5dcce",
                  borderLeft: "3px solid #2a6296",
                }}
              >
                <span
                  className="absolute top-2 right-4 font-heading text-7xl leading-none text-rust select-none pointer-events-none"
                  style={{ opacity: 0.06 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-2xl text-cream tracking-wide mb-3">
                  {f.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed">{f.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Closing callout */}
        <FadeUp delay={0.1}>
          <div
            className="rounded-lg p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(42,98,150,0.06) 0%, rgba(42,98,150,0.03) 100%), #ffffff",
              border: "1px solid #e5dcce",
              borderTop: "3px solid #2a6296",
            }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl text-cream tracking-wide mb-3">
              We won&rsquo;t quote it blind — and we won&rsquo;t pretend to.
            </h3>
            <p className="text-dim leading-relaxed max-w-3xl mb-7">
              Every home and every job is different, so we can&rsquo;t give you a firm,
              final price until we come out and see what&rsquo;s actually going on.
              Once we&rsquo;ve taken a look, you&rsquo;ll get a clear, fair number —
              and we&rsquo;ll talk it through with you before any work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-white font-bold text-base px-8 py-3.5 rounded transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+18652471871"
                className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-8 py-3.5 rounded transition-colors"
              >
                Call (865) 247&#8209;1871
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
