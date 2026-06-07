import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Alcoa TN | Trade Life Services",
  description:
    "Handyman services in Alcoa, TN — repairs, plumbing, electrical, carpentry, and painting. Trade Life Services covers Alcoa and surrounding Blount County. Call (865) 247-1871.",
  keywords: ["handyman Alcoa TN", "handyman near me Alcoa", "home repair Alcoa Tennessee", "Alcoa handyman service"],
  alternates: { canonical: `${siteUrl}/service-areas/alcoa` },
  openGraph: {
    title: "Handyman in Alcoa, TN | Trade Life Services",
    description: "Trusted handyman services in Alcoa, TN. Repairs, plumbing, electrical, carpentry and more. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/alcoa`,
  },
};

const data: ServiceAreaData = {
  city: "Alcoa",
  slug: "alcoa",
  headline: "Handyman in\nAlcoa, TN",
  subheadline:
    "Alcoa homeowners and businesses trust David for dependable home repairs and maintenance. Quality work, honest pricing, quick turnaround.",
  intro:
    "Alcoa sits right next to Maryville in Blount County and shares the same community values — people here want quality work from someone they can trust. Trade Life Services has been serving Alcoa and surrounding Blount County communities for over 20 years.",
  body:
    "David handles a wide range of handyman services in Alcoa: plumbing repairs, electrical fixture work, interior and exterior painting, carpentry, drywall patching, door and trim work, and general home maintenance. Every job is handled personally — David takes the call, shows up, and does the work himself. No middleman, no surprises on the invoice. If you need something fixed in Alcoa, just give him a call.",
  ctaHeading: "Alcoa — David Gets It Done.",
  ctaBody:
    "Serving Alcoa and all of Blount County. Call or fill out the form — David will be in touch as soon as possible.",
};

export default function AlcoaPage() {
  return <ServiceAreaTemplate data={data} />;
}
