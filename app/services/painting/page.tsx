import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tradelifeservices.com";

export const metadata: Metadata = {
  title: "Painting & Decorating Knoxville TN",
  description:
    "Interior and exterior painting in Knoxville, TN. Clean lines, smooth finishes, honest pricing. Trade Life Services — call (865) 247-1871.",
  keywords: ["painting contractor Knoxville TN", "interior painting Knoxville", "exterior painting Knoxville", "house painter Knoxville", "painting services Knox County"],
  alternates: { canonical: `${siteUrl}/services/painting` },
  openGraph: {
    title: "Painting & Decorating Knoxville TN | Trade Life Services",
    description: "Clean lines, smooth finishes — interior and exterior painting done properly in Knoxville, TN.",
    url: `${siteUrl}/services/painting`,
  },
};

const tasks = [
  { title: "Interior Room Painting", body: "Walls and ceilings painted cleanly — proper prep, clean edges, smooth finish. No drips, no mess left behind." },
  { title: "Exterior House Painting", body: "Full exterior painting that protects your home from Knoxville weather and boosts curb appeal." },
  { title: "Trim & Accent Painting", body: "Baseboards, doors, window frames, and accent walls done with precision and clean tape lines." },
  { title: "Deck & Fence Staining", body: "Wood decks and fences cleaned, sanded, and stained to protect the timber and refresh the look." },
  { title: "Garage & Basement Floors", body: "Concrete floors prepped and painted with durable coatings that hold up to daily use." },
  { title: "Touch-Ups & Spot Painting", body: "Scuffs, marks, and patches blended in — colour matched so the repair is invisible." },
];

export default function PaintingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-28 relative overflow-hidden border-b border-rust/20"
        style={{
          background: `
            radial-gradient(ellipse at 0% 100%, rgba(42,98,150,0.10) 0%, transparent 55%),
            linear-gradient(180deg, #ffffff 0%, #f1ece3 100%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px" }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">Knoxville, TN</span>
          </div>
          <h1 className="font-heading text-cream leading-none tracking-wide mb-6" style={{ fontSize: "clamp(3rem,9vw,8rem)" }}>
            Painting &amp;<br /><span className="text-rust">Decorating</span>
          </h1>
          <p className="text-dim text-xl max-w-xl leading-relaxed mb-10">
            Clean lines, smooth finishes — interior and exterior painting done properly. We take the time to prep right so the results last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-white font-bold text-base px-9 py-4 rounded transition-colors">
              Get a Quote
            </Link>
            <a href="tel:+18652471871" className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-9 py-4 rounded transition-colors">
              Call (865) 247&#8209;1871
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24" style={{ background: "#faf8f4" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">What We Paint</span>
            <h2 className="font-heading text-5xl sm:text-6xl text-cream mt-2 mb-4">Painting Jobs We Take On</h2>
            <p className="text-dim text-lg max-w-xl leading-relaxed">Good painting is 80% prep. We do it properly — surfaces cleaned, primed, and ready before a brush touches the wall.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, i) => (
              <div
                key={task.title}
                className="relative rounded-lg p-6 overflow-hidden"
                style={{ background: "#ffffff", borderTop: "1px solid #e5dcce", borderRight: "1px solid #e5dcce", borderBottom: "1px solid #e5dcce", borderLeft: "3px solid #2a6296" }}
              >
                <span className="absolute top-2 right-4 font-heading text-7xl leading-none text-rust select-none pointer-events-none" style={{ opacity: 0.06 }} aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-2xl text-cream tracking-wide mb-2">{task.title}</h3>
                <p className="text-dim text-sm leading-relaxed">{task.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-rust/20 text-center" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(42,98,150,0.10) 0%, transparent 65%), #f1ece3" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">Ready for a Fresh Coat?</span>
          <h2 className="font-heading text-cream mt-3 mb-5 leading-none" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Let&rsquo;s Make It <span className="text-rust">Look Right.</span>
          </h2>
          <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">Serving Knoxville, Maryville, Farragut, Oak Ridge, and Knox County. Most jobs scheduled within days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-white font-bold text-base px-10 py-4 rounded transition-colors">
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
