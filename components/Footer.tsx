import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-edge">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div className="text-center sm:text-left">
          <p className="font-heading text-xl text-cream tracking-wider mb-1">
            Trade Life Services
          </p>
          <p className="text-dim">Knoxville, TN and surrounding areas</p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2">
          <a
            href="tel:+18652471871"
            className="text-warm hover:text-cream font-semibold transition-colors"
          >
            (865) 247-1871
          </a>
          <Link
            href="/contact"
            className="text-dim hover:text-cream transition-colors"
          >
            Contact →
          </Link>
        </div>
      </div>

      <div className="border-t border-dark-edge text-center py-4 text-xs text-dim/60">
        © {new Date().getFullYear()} Trade Life Services. All rights reserved.
      </div>
    </footer>
  );
}
