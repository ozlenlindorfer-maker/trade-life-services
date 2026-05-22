import FadeUp from "./FadeUp";

const testimonials = [
  {
    text: "David fixed our leaking pipe in under an hour. Professional, fast, and fairly priced. Won't be calling anyone else.",
    name: "Sarah M.",
    location: "Knoxville, TN",
  },
  {
    text: "Called him for electrical work and carpentry on our deck. Amazing quality — you can tell he takes real pride in his work.",
    name: "Mike T.",
    location: "Farragut, TN",
  },
  {
    text: "Best handyman in Knox County, period. Shows up when he says he will, does quality work, and doesn't overcharge.",
    name: "Lisa R.",
    location: "Maryville, TN",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-warm"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Dot grid texture */}
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
              What People Say
            </span>
            <h2 className="font-heading text-6xl sm:text-7xl text-cream mt-2">
              Knoxville Trusts David
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.12}>
              <div className="bg-dark-card border border-dark-edge rounded-xl p-7 flex flex-col h-full relative overflow-hidden">
                {/* Decorative quote mark */}
                <span
                  className="absolute top-3 right-5 font-heading text-8xl text-rust leading-none select-none pointer-events-none"
                  style={{ opacity: 0.08 }}
                  aria-hidden
                >
                  &ldquo;
                </span>

                <Stars />

                <blockquote className="text-dim text-sm leading-relaxed flex-1 mb-6 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-rust/20 border border-rust/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-rust text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-heading text-lg text-cream tracking-wide leading-none">
                      {t.name}
                    </div>
                    <div className="text-xs text-dim/70 mt-0.5">{t.location}</div>
                  </div>
                </div>

                {/* Bottom rust accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-rust opacity-20" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
