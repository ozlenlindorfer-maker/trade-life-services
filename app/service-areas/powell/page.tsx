import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Powell TN | Trade Life Services",
  description:
    "Handyman services in Powell, TN — repairs, plumbing, electrical, carpentry, and painting. Trade Life Services covers Powell and north Knox County. Call (865) 247-1871.",
  keywords: ["handyman Powell TN", "handyman near me Powell", "home repair Powell Tennessee", "north Knox County handyman"],
  alternates: { canonical: `${siteUrl}/service-areas/powell` },
  openGraph: {
    title: "Handyman in Powell, TN | Trade Life Services",
    description: "Trusted handyman services in Powell, TN and north Knox County. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/powell`,
  },
};

const data: ServiceAreaData = {
  city: "Powell",
  slug: "powell",
  headline: "Handyman in\nPowell, TN",
  subheadline:
    "Powell and north Knox County homeowners trust David for fast, reliable home repairs and maintenance. One call and it's sorted.",
  intro:
    "Powell is a growing community in north Knox County with a mix of established residential neighborhoods and newer developments. Homeowners in Powell, Corryton, and surrounding communities rely on Trade Life Services for quality repair work without the big contractor price tag.",
  body:
    "From leaky faucets and running toilets to fence repairs, deck maintenance, interior painting, and drywall work — David handles it all across Powell and north Knox County. He works on every job personally, which means consistent quality and honest pricing every time. No callcentres, no middlemen — just David and the tools to get the job done. Call today to get on the schedule.",
  ctaHeading: "Powell Homeowner? Let's Talk.",
  ctaBody:
    "David covers Powell and all of north Knox County. Reach out and he'll get back to you within 24 hours.",
};

export default function PowellPage() {
  return <ServiceAreaTemplate data={data} />;
}
