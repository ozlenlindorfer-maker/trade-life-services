import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Oak Ridge TN | Trade Life Services",
  description:
    "Need a handyman in Oak Ridge, TN? Trade Life Services handles repairs, plumbing, electrical, carpentry, and painting across Oak Ridge and Anderson County. Call (865) 247-1871.",
  keywords: ["handyman Oak Ridge TN", "handyman near me Oak Ridge", "home repair Oak Ridge Tennessee", "Anderson County handyman"],
  alternates: { canonical: `${siteUrl}/service-areas/oak-ridge` },
  openGraph: {
    title: "Handyman in Oak Ridge, TN | Trade Life Services",
    description: "Reliable handyman services in Oak Ridge, TN. Repairs, plumbing, electrical, and more. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/oak-ridge`,
  },
};

const data: ServiceAreaData = {
  city: "Oak Ridge",
  slug: "oak-ridge",
  headline: "Handyman in\nOak Ridge, TN",
  subheadline:
    "Serving Oak Ridge homeowners with reliable repairs, maintenance, and home improvements. David gets the job done right without the runaround.",
  intro:
    "Oak Ridge has a proud history and a strong community of homeowners who take care of their properties. Whether your home is decades old or recently built, it needs regular maintenance and the occasional repair — and that's where David comes in. Trade Life Services covers Oak Ridge and the surrounding Anderson County area.",
  body:
    "David handles the full range of handyman services in Oak Ridge: leaky pipes, running toilets, drywall patches, cabinet repairs, deck maintenance, light fixture replacements, painting touch-ups, and more. He works alone, which means you deal directly with the person doing the work — no surprises, no subcontractors, just reliable service at a fair price. Most Oak Ridge jobs can be scheduled within days.",
  ctaHeading: "Oak Ridge — Let David Sort It.",
  ctaBody:
    "Trade Life Services covers Oak Ridge and Anderson County. Call or send a message — David responds as soon as possible.",
};

export default function OakRidgePage() {
  return <ServiceAreaTemplate data={data} />;
}
