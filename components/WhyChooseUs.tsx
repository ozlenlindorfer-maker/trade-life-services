import FadeUp from "./FadeUp";

const points = [
  {
    title: "Local & Reliable",
    body: "Based right here in Knoxville. We show up when we say we will — no runaround, no excuses.",
  },
  {
    title: "No Job Too Small",
    body: "One leaky faucet or a full room renovation — every job gets the same care and attention.",
  },
  {
    title: "Honest Pricing",
    body: "You'll know the cost upfront. Straight talk, fair rates. No hidden fees, no surprises on the invoice.",
  },
  {
    title: "Serving Greater Knoxville",
    body: "Knoxville, Maryville, Oak Ridge, Farragut, and across Knox County — we&apos;ve got your area covered.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg,#000 0,#000 1px,transparent 0,transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="mb-12">
            <span className="text-rust text-xs font-bold tracking-[0.3em] uppercase">
              Why Us
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl text-cream mt-2">
              Why Knoxville Calls Us
            </h2>
          </div>
        </FadeUp>

        <div className="divide-y divide-dark-edge">
          {points.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.1}>
              <div className="flex items-start gap-6 sm:gap-10 py-8 group cursor-default">
                {/* Large number */}
                <div
                  className="font-heading leading-none text-rust/20 group-hover:text-rust/40 transition-colors duration-300 select-none flex-shrink-0 w-16 sm:w-24 pt-1"
                  style={{ fontSize: "clamp(3rem,6vw,4.5rem)" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-3xl sm:text-4xl text-cream tracking-wide mb-2 group-hover:text-warm transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-dim leading-relaxed max-w-2xl">{point.body}</p>
                </div>

                {/* Hover arrow */}
                <div className="hidden sm:flex items-center self-center flex-shrink-0 text-rust/0 group-hover:text-rust/60 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
