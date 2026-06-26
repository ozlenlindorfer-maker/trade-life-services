import ContactLink from "./ContactLink";
import FadeUp from "./FadeUp";

export default function HomeCTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 50% 0%, rgba(42,98,150,0.12) 0%, transparent 60%),
          linear-gradient(180deg, #ffffff 0%, #faf8f4 60%, #f1ece3 100%)
        `,
      }}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top rust bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-rust opacity-60" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 bg-rust/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          <span className="text-warm text-xs font-bold tracking-[0.3em] uppercase">
            Let&rsquo;s Talk
          </span>

          <h2
            className="font-heading text-cream mt-3 mb-5 leading-none"
            style={{ fontSize: "clamp(3.5rem,9vw,8rem)" }}
          >
            Ready to Get
            <br />
            <span className="text-rust">Something Fixed?</span>
          </h2>

          <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Reach out and we&apos;ll be in touch. Serving Knoxville, TN and
            surrounding areas — most jobs scheduled within days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactLink className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-white font-bold text-base px-10 py-4 rounded transition-colors cursor-pointer">
              Get in Touch
            </ContactLink>
            <a
              href="tel:+18652471871"
              className="inline-flex items-center justify-center bg-dark-card border-2 border-warm/70 hover:border-warm hover:bg-dark-alt text-cream font-bold text-base px-10 py-4 rounded transition-colors cursor-pointer"
            >
              Call (865) 247&#8209;1871
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Bottom rust bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-rust opacity-40" />
    </section>
  );
}
