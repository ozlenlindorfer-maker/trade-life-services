import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Farragut TN | Trade Life Services",
  description:
    "Need a handyman in Farragut, TN? Trade Life Services — repairs, plumbing, electrical, carpentry, and painting. Serving Farragut and west Knoxville. Call (865) 247-1871.",
  keywords: ["handyman Farragut TN", "handyman near me Farragut", "home repair Farragut Tennessee", "Farragut handyman service"],
  alternates: { canonical: `${siteUrl}/service-areas/farragut` },
  openGraph: {
    title: "Handyman in Farragut, TN | Trade Life Services",
    description: "Trusted handyman services in Farragut, TN. Repairs, plumbing, electrical, carpentry. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/farragut`,
  },
};

const data: ServiceAreaData = {
  city: "Farragut",
  slug: "farragut",
  headline: "Handyman in\nFarragut, TN",
  subheadline:
    "Reliable home repairs and maintenance across Farragut. David has been trusted by Farragut homeowners for over 20 years — no runaround, no overcharging.",
  intro:
    "Farragut is one of Knoxville's most established suburbs, and homeowners here expect quality work done right the first time. That's exactly what David delivers. Whether you own a newer build in a Farragut subdivision or a classic home on Kingston Pike, every property needs maintenance and repairs — and that's where Trade Life Services comes in.",
  body:
    "From dripping faucets and running toilets to fresh paint, deck repairs, and electrical fixture upgrades, David handles the full range of home repair tasks that Farragut homeowners need. No job is passed off to a subcontractor — David handles every job himself, which means you get consistent quality and a direct line to the person doing the work. Most jobs in Farragut can be scheduled within days of your first call.",
  ctaHeading: "Need a Handyman in Farragut?",
  ctaBody:
    "Call or fill out the form — David will get back to you as soon as possible to discuss the job. Most Farragut jobs scheduled within days.",
};

export default function FarragutPage() {
  return <ServiceAreaTemplate data={data} />;
}
