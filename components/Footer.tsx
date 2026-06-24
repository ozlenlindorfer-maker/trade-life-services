import Link from "next/link";

const services = [
  { label: "General Repairs", href: "/services/general-repairs" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Electrical", href: "/services/electrical" },
  { label: "Carpentry", href: "/services/carpentry" },
  { label: "Painting", href: "/services/painting" },
];

const areas = [
  { label: "Farragut", href: "/service-areas/farragut" },
  { label: "Maryville", href: "/service-areas/maryville" },
  { label: "Oak Ridge", href: "/service-areas/oak-ridge" },
  { label: "Powell", href: "/service-areas/powell" },
  { label: "Hardin Valley", href: "/service-areas/hardin-valley" },
  { label: "Alcoa", href: "/service-areas/alcoa" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-edge">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl tracking-widest text-cream hover:text-rust transition-colors">
              Trade Life <span className="text-rust">Services</span>
            </Link>
            <p className="text-dim text-sm mt-2 mb-4 leading-relaxed">
              Knoxville&apos;s trusted handyman service. Done once, done right.
            </p>
            <a href="tel:+18652471871" className="text-warm hover:text-cream font-semibold text-sm transition-colors">
              (865) 247-1871
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-dim/60 mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-dim text-sm hover:text-cream transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-dim/60 mb-4">Service Areas</p>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="text-dim text-sm hover:text-cream transition-colors">
                    {a.label}, TN
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-dim/60 mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-dim text-sm hover:text-cream transition-colors">Home</Link></li>
              <li><Link href="/#contact" className="text-dim text-sm hover:text-cream transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-8">
              <p className="text-dim/50 text-[10px] mb-1.5">Serving Knoxville &amp; Knox County</p>
              <Link
                href="/#contact"
                className="inline-block bg-rust hover:bg-rust/80 text-white text-xs font-bold px-5 py-2.5 rounded transition-colors cursor-pointer tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-edge text-center py-4 text-xs text-dim/60">
        © {new Date().getFullYear()} Trade Life Services · Knoxville, TN · All rights reserved.
      </div>
    </footer>
  );
}
