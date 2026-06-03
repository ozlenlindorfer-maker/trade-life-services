"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience", color: "text-rust" },
  { value: 500, suffix: "+", label: "Jobs Completed", color: "text-warm" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed", color: "text-cream" },
];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!active || reduced) {
      setCount(target);
      return;
    }
    const steps = 50;
    const duration = 1800;
    let current = 0;
    const inc = target / steps;
    const id = setInterval(() => {
      current += inc;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [active, target, reduced]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-14 relative overflow-hidden border-t border-b border-rust/25"
      style={{ background: "#0a0806" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
          backgroundSize: "10px 10px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-rust opacity-60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-rust/15 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:py-0 sm:px-8 first:pt-0 last:pb-0 sm:first:pt-0 sm:last:pb-0">
              <div className={`font-heading text-6xl sm:text-5xl lg:text-7xl leading-none mb-2 ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} active={isInView} />
              </div>
              <div className="text-dim text-xs sm:text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
