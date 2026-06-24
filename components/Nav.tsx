import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b border-dark-edge"
      style={{ background: "rgba(250,248,244,0.85)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl tracking-widest text-cream hover:text-rust transition-colors"
        >
          Trade Life{" "}
          <span className="text-rust">Services</span>
        </Link>

        <nav>
          <Link
            href="/#contact"
            className="bg-rust hover:bg-rust/80 text-white text-sm font-bold px-5 py-2 rounded transition-colors tracking-wide"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
