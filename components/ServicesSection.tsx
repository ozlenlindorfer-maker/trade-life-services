import FadeUp from "./FadeUp";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    name: "General Repairs & Maintenance",
    desc: "If it's broken, David fixes it. Leaks, holes, squeaks — no problem.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
    name: "Plumbing",
    desc: "Dripping faucets, running toilets, blocked drains — sorted fast.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    name: "Electrical",
    desc: "Outlets, switches, fixtures, and more. Safe, code-compliant work.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    name: "Carpentry & Woodwork",
    desc: "Shelving, doors, trim, decks — built right and built to last.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
    name: "Painting & Decorating",
    desc: "Clean lines, smooth finishes. Interior and exterior painting done properly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    name: "And More",
    desc: "Knoxville homeowners and businesses — if you need it done, just ask.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#141210" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="mb-14">
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">
              Services
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl text-cream mt-2 mb-4">
              What We Handle
            </h2>
            <p className="text-dim text-lg max-w-xl leading-relaxed">
              One call, one guy, everything sorted. David covers the full range
              of home and property repairs across Knoxville and the surrounding area.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <FadeUp key={service.name} delay={i * 0.07}>
              <div
                className="relative rounded-lg p-6 overflow-hidden group hover:-translate-y-1 transition-all duration-200 cursor-default"
                style={{
                  background: "#1c1814",
                  borderTop: "1px solid #3a3028",
                  borderRight: "1px solid #3a3028",
                  borderBottom: "1px solid #3a3028",
                  borderLeft: "3px solid #c2540a",
                }}
              >
                {/* Card number watermark */}
                <span
                  className="absolute top-2 right-4 font-heading text-7xl leading-none text-white select-none pointer-events-none"
                  style={{ opacity: 0.04 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 flex items-center justify-center rounded bg-rust/10 border border-rust/30 text-rust mb-5 group-hover:bg-rust/20 transition-colors">
                  {service.icon}
                </div>

                <h3 className="font-heading text-2xl text-cream tracking-wide mb-2">
                  {service.name}
                </h3>
                <p className="text-dim text-sm leading-relaxed">{service.desc}</p>

                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rust scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
