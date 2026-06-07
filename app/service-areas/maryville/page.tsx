import type { Metadata } from "next";
import ServiceAreaTemplate, { type ServiceAreaData } from "@/components/ServiceAreaTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";

export const metadata: Metadata = {
  title: "Handyman Maryville TN | Trade Life Services",
  description:
    "Looking for a handyman in Maryville, TN? Trade Life Services covers Maryville and Blount County — repairs, plumbing, electrical, carpentry, painting. Call (865) 247-1871.",
  keywords: ["handyman Maryville TN", "handyman near me Maryville", "home repair Maryville Tennessee", "Blount County handyman"],
  alternates: { canonical: `${siteUrl}/service-areas/maryville` },
  openGraph: {
    title: "Handyman in Maryville, TN | Trade Life Services",
    description: "Trusted handyman services in Maryville, TN and Blount County. Call David at (865) 247-1871.",
    url: `${siteUrl}/service-areas/maryville`,
  },
};

const data: ServiceAreaData = {
  city: "Maryville",
  slug: "maryville",
  headline: "Handyman in\nMaryville, TN",
  subheadline:
    "Covering Maryville and Blount County for repairs, maintenance, and home improvements. David is one phone call away — honest pricing, quality work, no surprises.",
  intro:
    "Maryville is a growing city south of Knoxville with a mix of established neighborhoods and newer developments. Homeowners across Blount County rely on Trade Life Services for everything from routine maintenance to bigger projects that require a skilled, experienced hand.",
  body:
    "Whether you're in a historic Maryville home that needs updating, or a newer property in Alcoa or Friendsville Road area, David serves the entire Blount County region. He handles plumbing repairs, electrical upgrades, carpentry, interior and exterior painting, and general home maintenance — all with the care and attention that a personal, single-operator service provides. Call today for a fast, no-obligation quote.",
  ctaHeading: "Maryville & Blount County — Let's Talk.",
  ctaBody:
    "David serves Maryville, Alcoa, and all of Blount County. Reach out and he'll get back to you as soon as possible.",
};

export default function MaryvillePage() {
  return <ServiceAreaTemplate data={data} />;
}
