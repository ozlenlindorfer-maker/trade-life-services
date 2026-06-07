"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroContactForm from "./HeroContactForm";

const trustPoints = [
  "20+ years experience",
  "500+ jobs completed",
  "No job too small",
  "Responds as soon as possible",
];

export default function Hero() {
  const reduced = useReducedMotion();
  const from = { opacity: 0, y: reduced ? 0 : 28 };
  const to = { opacity: 1, y: 0 };
  const t = (delay: number) => ({ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: reduced ? 0 : delay });

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 0% 65%, rgba(46,109,164,0.22) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 10%, rgba(212,148,58,0.08) 0%, transparent 45%),
          linear-gradient(160deg, #060402 0%, #141210 55%, #1c1410 100%)
        `,
      }}
    >
      {/* Diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none" aria-hidden>
        <span
          className="font-heading text-white whitespace-nowrap leading-none"
          style={{ fontSize: "24vw", opacity: 0.018, letterSpacing: "0.03em" }}
        >
          TRADE LIFE
        </span>
      </div>

      {/* Rust glow */}
      <div className="absolute -left-24 top-1/3 w-80 h-80 bg-rust rounded-full opacity-10 blur-3xl pointer-events-none" />

      {/* Vertical accent */}
      <div
        className="absolute top-0 bottom-0 bg-rust opacity-70 hidden lg:block"
        style={{ left: "7%", width: "2px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 xl:gap-16 items-center">

          {/* ── Left: Brand copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3 mb-7" initial={from} animate={to} transition={t(0)}>
              <div className="h-px w-10 bg-rust" />
              <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">
                Knoxville, TN &amp; Surrounding Areas
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading leading-none tracking-wide mb-8">
              <motion.span
                className="block text-dim mb-1"
                style={{ fontSize: "clamp(1.8rem,3.8vw,3.2rem)" }}
                initial={from} animate={to} transition={t(0.1)}
              >
                Hey, I&apos;m
              </motion.span>
              <motion.span
                className="block text-cream"
                style={{ fontSize: "clamp(5rem,13vw,11rem)", lineHeight: 0.88 }}
                initial={from} animate={to} transition={t(0.2)}
              >
                DAVID.
              </motion.span>
              <motion.span
                className="flex items-baseline gap-3 flex-wrap mt-4"
                initial={from} animate={to} transition={t(0.3)}
              >
                <span className="text-rust" style={{ fontSize: "clamp(1.8rem,3.8vw,3.2rem)" }}>
                  20+ years
                </span>
                <span className="text-warm" style={{ fontSize: "clamp(1rem,1.8vw,1.5rem)", letterSpacing: "0.04em" }}>
                  of handyman work.
                </span>
              </motion.span>
            </h1>

            {/* Sub */}
            <motion.p
              className="text-base sm:text-lg text-dim max-w-md mb-10 leading-relaxed"
              initial={from} animate={to} transition={t(0.42)}
            >
              One call — leaks fixed, things built, jobs sorted. Serving Knoxville
              and Knox County for over two decades.
            </motion.p>

            {/* Trust list */}
            <motion.ul className="space-y-3 mb-10" initial={from} animate={to} transition={t(0.52)}>
              {trustPoints.map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-dim text-sm">
                  <svg className="w-4 h-4 text-rust flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {pt}
                </li>
              ))}
            </motion.ul>

            {/* Phone */}
            <motion.div initial={from} animate={to} transition={t(0.6)}>
              <p className="text-dim/50 text-[10px] tracking-[0.2em] uppercase mb-1">Rather just call?</p>
              <a
                href="tel:+18652471871"
                className="font-heading text-cream hover:text-rust transition-colors tracking-wider cursor-pointer"
                style={{ fontSize: "clamp(1.6rem,3vw,2.5rem)" }}
              >
                (865) 247&#8209;1871
              </a>
            </motion.div>
          </div>

          {/* ── Right: Quote form card ── */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: reduced ? 0 : 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "rgba(28,24,20,0.92)",
                border: "1px solid #3a3028",
                borderTop: "3px solid #2e6da4",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(46,109,164,0.08)",
              }}
            >
              <div className="px-6 pt-6 pb-2">
                <p className="text-rust text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Get in Touch</p>
                <p className="font-heading text-cream text-2xl tracking-wide leading-tight mb-1">Contact David</p>
                <p className="text-dim text-xs mb-5">Tell David what you need — he&apos;ll get back to you as soon as possible.</p>
              </div>
              <div className="px-6 pb-6">
                <HeroContactForm />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Angled cut into next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-14">
          <polygon points="0,56 1440,0 1440,56" fill="#2e6da4" />
        </svg>
      </div>
    </section>
  );
}
