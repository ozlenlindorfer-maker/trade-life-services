import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tradelifeservices.com";

export const metadata: Metadata = {
  title: "General Repairs & Maintenance | Knoxville Handyman",
  description:
    "General home repairs and maintenance in Knoxville, TN. Leaks, holes, squeaky doors, fixture installs, drywall, and more. Call Trade Life Services at (865) 247-1871.",
  keywords: ["general repairs Knoxville TN", "handyman maintenance Knoxville", "home repair Knox County", "drywall repair Knoxville", "fixture installation Knoxville"],
  alternates: { canonical: `${siteUrl}/services/general-repairs` },
  openGraph: {
    title: "General Repairs & Maintenance | Trade Life Services Knoxville",
    description: "Knoxville's trusted handyman for all general home repairs. One call, done right.",
    url: `${siteUrl}/services/general-repairs`,
  },
};

const tasks = [
  { title: "Drywall Repair", body: "Holes, cracks, water damage — patched and finished so you can't tell it was ever there." },
  { title: "Door & Window Fixes", body: "Sticky doors, broken locks, drafty windows, broken hardware — sorted fast." },
  { title: "Fixture Installation", body: "Ceiling fans, light fixtures, towel bars, mirrors, curtain rods — hung level and secure." },
  { title: "Caulking & Sealing", body: "Bathrooms, kitchens, windows — properly sealed to keep moisture and drafts out." },
  { title: "Gutter Cleaning & Repair", body: "Clogged or sagging gutters cleared and reattached before they cause bigger problems." },
  { title: "Odd Jobs & Punch Lists", body: "That list of things you've been putting off? We work through it all in one visit." },
];

export default function GeneralRepairsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-28 relative overflow-hidden border-b border-rust/20"
        style={{
          background: `
            radial-gradient(ellipse at 0% 100%, rgba(46,109,164,0.2) 0%, transparent 55%),
            linear-gradient(180deg, #0a0806 0%, #141210 100%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">Knoxville, TN</span>
          </div>
          <h1 className="font-heading text-cream leading-none tracking-wide mb-6" style={{ fontSize: "clamp(3rem,9vw,8rem)" }}>
            General Repairs<br /><span className="text-rust">&amp; Maintenance</span>
          </h1>
          <p className="text-dim text-xl max-w-xl leading-relaxed mb-10">
            If it&rsquo;s broken, we fix it. One visit, everything on your list sorted — no job too small, no problem too big.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-9 py-4 rounded transition-colors">
              Get a Quote
            </Link>
            <a href="tel:+18652471871" className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-9 py-4 rounded transition-colors">
              Call (865) 247&#8209;1871
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24" style={{ background: "#141210" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">What We Cover</span>
            <h2 className="font-heading text-5xl sm:text-6xl text-cream mt-2 mb-4">Common Jobs We Handle</h2>
            <p className="text-dim text-lg max-w-xl leading-relaxed">Knoxville homeowners call us for all the jobs that pile up. Here&rsquo;s what a typical visit covers — but if it&rsquo;s not on the list, just ask.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, i) => (
              <div
                key={task.title}
                className="relative rounded-lg p-6 overflow-hidden"
                style={{ background: "#1c1814", borderTop: "1px solid #3a3028", borderRight: "1px solid #3a3028", borderBottom: "1px solid #3a3028", borderLeft: "3px solid #2e6da4" }}
              >
                <span className="absolute top-2 right-4 font-heading text-7xl leading-none text-white select-none pointer-events-none" style={{ opacity: 0.04 }} aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-2xl text-cream tracking-wide mb-2">{task.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{task.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-rust/20 text-center" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(46,109,164,0.2) 0%, transparent 65%), #0a0806" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-rust/40" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">Ready to Get Started?</span>
          <h2 className="font-heading text-cream mt-3 mb-5 leading-none" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Let&rsquo;s Get It <span className="text-rust">Fixed.</span>
          </h2>
          <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">Serving Knoxville, Maryville, Oak Ridge, Farragut, and Knox County. Most jobs scheduled within days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-10 py-4 rounded transition-colors">
              Contact Us
            </Link>
            <a href="tel:+18652471871" className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-10 py-4 rounded transition-colors">
              Call (865) 247&#8209;1871
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
