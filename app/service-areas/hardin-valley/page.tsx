import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Hardin Valley TN | Trade Life Services",
  description:
    "Handyman services in Hardin Valley, TN — repairs, plumbing, electrical, carpentry, painting. Trade Life Services serves Hardin Valley and northwest Knoxville. Call (865) 247-1871.",
  keywords: ["handyman Hardin Valley TN", "handyman near me Hardin Valley", "home repair Hardin Valley", "northwest Knoxville handyman"],
  alternates: { canonical: `${siteUrl}/service-areas/hardin-valley` },
  openGraph: {
    title: "Handyman in Hardin Valley, TN | Trade Life Services",
    description: "Reliable handyman services in Hardin Valley and northwest Knoxville. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/hardin-valley`,
  },
};

const data: ServiceAreaData = {
  city: "Hardin Valley",
  slug: "hardin-valley",
  headline: "Handyman in\nHardin Valley, TN",
  subheadline:
    "Hardin Valley's go-to handyman for repairs, maintenance, and home improvements. David serves the entire northwest Knoxville corridor — fast response, fair pricing.",
  intro:
    "Hardin Valley has become one of the fastest-growing communities in the Knoxville area, with many newer homes that still need the care and upkeep that every property requires over time. Trade Life Services covers Hardin Valley, Karns, and the broader northwest Knoxville corridor.",
  body:
    "Whether it's a new build that needs a few things sorted out, or an older home in need of maintenance, David handles plumbing repairs, electrical work, carpentry, painting, drywall, and general home repairs throughout Hardin Valley. He brings 20+ years of experience to every job and handles each one personally — no crews, no subcontractors. Just reliable work at an honest price, scheduled quickly and done right.",
  ctaHeading: "Hardin Valley — One Call Gets It Done.",
  ctaBody:
    "David covers Hardin Valley, Karns, and northwest Knoxville. Get in touch and he'll respond within 24 hours.",
};

export default function HardinValleyPage() {
  return <ServiceAreaTemplate data={data} />;
}
