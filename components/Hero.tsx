"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduced = useReducedMotion();

  const from = { opacity: 0, y: reduced ? 0 : 32 };
  const to = { opacity: 1, y: 0 };
  const ease = [0.25, 0.46, 0.45, 0.94] as const;
  const t = (delay: number) => ({ duration: 0.55, ease, delay: reduced ? 0 : delay });

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 0% 65%, rgba(194,84,10,0.22) 0%, transparent 55%),
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
          style={{ fontSize: "24vw", opacity: 0.022, letterSpacing: "0.03em" }}
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

      {/* Stamp badge — desktop only */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-16 xl:right-24 hidden lg:flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 192 192" className="absolute inset-0 w-full h-full">
            <circle cx="96" cy="96" r="88" fill="none" stroke="#c2540a" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.3" />
            <circle cx="96" cy="96" r="72" fill="none" stroke="#c2540a" strokeWidth="1" opacity="0.15" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-1">
            <span className="font-heading text-warm/50 text-[10px] tracking-[0.3em] uppercase">Knoxville, TN</span>
            <div className="w-10 h-px bg-rust/35 my-0.5" />
            <span className="font-heading text-cream/75 text-2xl leading-none tracking-widest">TRADE LIFE</span>
            <span className="font-heading text-rust text-2xl leading-none tracking-widest">SERVICES</span>
            <div className="w-10 h-px bg-rust/35 my-0.5" />
            <span className="font-heading text-warm/50 text-[10px] tracking-[0.3em] uppercase">Trusted Handyman</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={from} animate={to} transition={t(0)}
          >
            <div className="h-px w-10 bg-rust" />
            <span className="text-warm text-xs font-semibold tracking-[0.25em] uppercase">
              Knoxville, TN &amp; Surrounding Areas
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading leading-none tracking-wide mb-8">
            <motion.span
              className="flex items-baseline gap-4 flex-wrap mb-1"
              initial={from} animate={to} transition={t(0.12)}
            >
              <span className="text-cream" style={{ fontSize: "clamp(3rem,7vw,6.5rem)" }}>
                No Job
              </span>
              <span
                className="text-rust"
                style={{ fontSize: "clamp(0.8rem,1.5vw,1.25rem)", letterSpacing: "0.06em" }}
              >
                too small.
              </span>
            </motion.span>

            <motion.span
              className="block text-cream"
              style={{ fontSize: "clamp(3rem,7vw,6.5rem)" }}
              initial={from} animate={to} transition={t(0.22)}
            >
              No Problem
            </motion.span>

            <motion.span
              className="block text-warm"
              style={{ fontSize: "clamp(5.5rem,14vw,13rem)", lineHeight: 0.9 }}
              initial={from} animate={to} transition={t(0.34)}
            >
              TOO BIG.
            </motion.span>
          </h1>

          {/* Sub */}
          <motion.p
            className="text-lg sm:text-xl text-dim max-w-xl mb-12 leading-relaxed"
            initial={from} animate={to} transition={t(0.48)}
          >
            Your go-to handyman — David handles everything from
            quick repairs to big projects. One call, one guy, done right.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={from} animate={to} transition={t(0.58)}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-rust hover:bg-rust/80 text-cream font-bold text-base px-9 py-4 rounded transition-colors cursor-pointer"
            >
              Contact David
            </Link>
            <a
              href="tel:+18652471871"
              className="inline-flex items-center justify-center bg-dark-card border-2 border-warm/70 hover:border-warm hover:bg-dark-alt text-cream font-bold text-base px-9 py-4 rounded transition-colors cursor-pointer"
            >
              Call (865) 247&#8209;1871
            </a>
          </motion.div>
        </div>
      </div>

      {/* Angled cut into next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-14">
          <polygon points="0,56 1440,0 1440,56" fill="#c2540a" />
        </svg>
      </div>
    </section>
  );
}
