import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tradelifeservices.com";

export const metadata: Metadata = {
  title: "Electrical Work Knoxville TN | Trade Life Services",
  description:
    "Electrical handyman in Knoxville, TN. Outlets, switches, ceiling fans, light fixtures, and more. Safe, code-compliant work. Call Trade Life Services at (865) 247-1871.",
  keywords: ["electrical handyman Knoxville TN", "outlet repair Knoxville", "ceiling fan installation Knoxville", "light fixture Knoxville", "electrical work Knox County"],
  alternates: { canonical: `${siteUrl}/services/electrical` },
  openGraph: {
    title: "Electrical Work Knoxville TN | Trade Life Services",
    description: "Safe, code-compliant electrical repairs and installs across Knoxville and Knox County.",
    url: `${siteUrl}/services/electrical`,
  },
};

const tasks = [
  { title: "Outlet & Switch Repair", body: "Dead outlets, faulty switches, or GFCI issues — diagnosed and fixed safely." },
  { title: "Ceiling Fan Installation", body: "New ceiling fans installed and wired correctly, including switching and remote setups." },
  { title: "Light Fixture Replacement", body: "Old fixtures swapped for new ones — chandeliers, pendants, recessed lights, and more." },
  { title: "Dimmer Switches", body: "Standard switches upgraded to dimmers for any room in your home." },
  { title: "Outdoor Lighting", body: "Porch lights, motion sensors, and exterior fixtures installed and weatherproofed." },
  { title: "Smoke & CO Detector Install", body: "Detectors installed in the right locations and wired in so they work when it matters." },
];

export default function ElectricalPage() {
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
            Electrical<br /><span className="text-rust">Work</span>
          </h1>
          <p className="text-dim text-xl max-w-xl leading-relaxed mb-10">
            Outlets, switches, fixtures, ceiling fans, and more. Safe, code-compliant electrical work done right — without the full electrician bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-9 py-4 rounded transition-colors">
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
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">What We Handle</span>
            <h2 className="font-heading text-5xl sm:text-6xl text-cream mt-2 mb-4">Common Electrical Jobs</h2>
            <p className="text-dim text-lg max-w-xl leading-relaxed">We handle the electrical jobs most homeowners in Knoxville deal with — without the wait time or price tag of a full electrical contractor.</p>
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">Electrical Problem?</span>
          <h2 className="font-heading text-cream mt-3 mb-5 leading-none" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Safe Work. <span className="text-rust">Done Right.</span>
          </h2>
          <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">Serving Knoxville, Farragut, Maryville, Oak Ridge, and Knox County. Most jobs scheduled within days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-10 py-4 rounded transition-colors">
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
