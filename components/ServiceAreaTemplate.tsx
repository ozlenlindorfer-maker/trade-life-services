import Link from "next/link";
import FadeUp from "./FadeUp";

export interface ServiceAreaData {
  city: string;
  state?: string;
  slug: string;
  headline: string;
  subheadline: string;
  intro: string;
  body: string;
  ctaHeading: string;
  ctaBody: string;
}

const services = [
  { name: "General Repairs", href: "/services/general-repairs", desc: "Leaks, holes, squeaks — anything that needs fixing." },
  { name: "Plumbing", href: "/services/plumbing", desc: "Faucets, toilets, drains, pipes." },
  { name: "Electrical", href: "/services/electrical", desc: "Outlets, switches, fixtures." },
  { name: "Carpentry", href: "/services/carpentry", desc: "Shelving, doors, trim, decks." },
  { name: "Painting", href: "/services/painting", desc: "Interior and exterior painting." },
];

export default function ServiceAreaTemplate({ data }: { data: ServiceAreaData }) {
  const { city, state = "TN", headline, subheadline, intro, body, ctaHeading, ctaBody } = data;

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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="absolute -left-20 bottom-0 w-96 h-64 bg-rust/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs text-dim/60">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <span className="text-dim">Service Areas</span>
            <span>/</span>
            <span className="text-warm">{city}</span>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">
              {city}, {state}
            </span>
          </div>

          <h1
            className="font-heading text-cream leading-none tracking-wide mb-5"
            style={{ fontSize: "clamp(2.8rem,8vw,7rem)" }}
          >
            {headline}
          </h1>
          <p className="text-dim text-xl max-w-2xl leading-relaxed mb-10">{subheadline}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-9 py-4 rounded transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
            <a
              href="tel:+18652471871"
              className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-9 py-4 rounded transition-colors cursor-pointer"
            >
              Call (865) 247&#8209;1871
            </a>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-20 border-b border-dark-edge" style={{ background: "#141210" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-[1fr_340px] gap-16 items-start">
            <div>
              <FadeUp>
                <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">About This Area</span>
                <h2 className="font-heading text-5xl sm:text-6xl text-cream mt-2 mb-6">
                  Handyman Services in {city}
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-dim text-lg leading-relaxed mb-5">{intro}</p>
                <p className="text-dim text-base leading-relaxed">{body}</p>
              </FadeUp>
            </div>

            {/* Trust card */}
            <FadeUp delay={0.2}>
              <div
                className="rounded-lg p-7 mt-8 lg:mt-0"
                style={{ background: "#1c1814", border: "1px solid #3a3028", borderTop: "3px solid #2e6da4" }}
              >
                <p className="text-rust text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Why Trade Life Services</p>
                <ul className="space-y-4">
                  {[
                    "Local to Knoxville, TN",
                    "20+ years of experience",
                    "500+ jobs completed",
                    "Responds as soon as possible",
                    "No job too small",
                    "Honest, upfront pricing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-dim text-sm">
                      <svg className="w-4 h-4 text-rust flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-6 border-t border-dark-edge">
                  <p className="text-dim/50 text-[10px] tracking-wide uppercase mb-1.5">Call us directly</p>
                  <a href="tel:+18652471871" className="font-heading text-2xl text-cream hover:text-rust transition-colors tracking-wider">
                    (865) 247&#8209;1871
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#1a1510" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">What We Do in {city}</span>
            <h2 className="font-heading text-5xl sm:text-6xl text-cream mt-2 mb-4">Services Offered</h2>
            <p className="text-dim text-lg max-w-xl mb-14 leading-relaxed">
              Whether it&rsquo;s a quick repair or a bigger job, we handle it all across {city} and surrounding areas.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <FadeUp key={s.name} delay={i * 0.07}>
                <Link
                  href={s.href}
                  className="relative rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-200 block cursor-pointer"
                  style={{
                    background: "#1c1814",
                    borderTop: "1px solid #3a3028",
                    borderRight: "1px solid #3a3028",
                    borderBottom: "1px solid #3a3028",
                    borderLeft: "3px solid #2e6da4",
                  }}
                >
                  <div className="p-6">
                    <span
                      className="absolute top-2 right-4 font-heading text-7xl leading-none text-white select-none pointer-events-none"
                      style={{ opacity: 0.04 }}
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-2xl text-cream tracking-wide mb-2">{s.name}</h3>
                    <p className="text-dim text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rust scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden border-t border-rust/20 text-center"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(46,109,164,0.22) 0%, transparent 65%), #0a0806`,
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-rust/40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">{city}, {state}</span>
          <h2
            className="font-heading text-cream mt-3 mb-5 leading-none"
            style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
          >
            {ctaHeading}
          </h2>
          <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-10 py-4 rounded transition-colors cursor-pointer"
            >
              Contact Us
            </Link>
            <a
              href="tel:+18652471871"
              className="inline-flex items-center justify-center border-2 border-warm/70 hover:border-warm text-cream font-bold text-base px-10 py-4 rounded transition-colors cursor-pointer"
            >
              Call (865) 247&#8209;1871
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
