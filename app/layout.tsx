import type { Viewport } from "next";
import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";
const ogImage = "https://images.unsplash.com/photo-1674649207083-281c2517ab49?w=1200&q=80";


export const viewport: Viewport = {
  themeColor: "#2a6296",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trade Life Services | Handyman in Knoxville, TN",
    template: "%s | Trade Life Services",
  },
  description:
    "Trade Life Services — Knoxville's trusted handyman. General repairs, plumbing, electrical, carpentry, painting, and more. Serving Knoxville, TN and surrounding areas. Call (865) 247-1871.",
  keywords: [
    "handyman Knoxville TN",
    "handyman near me Knoxville",
    "home repair Knoxville Tennessee",
    "plumbing repair Knoxville",
    "electrical handyman Knoxville",
    "carpentry Knoxville TN",
    "painting contractor Knoxville",
    "Trade Life Services",
    "local handyman Knox County",
    "home maintenance Knoxville",
  ],
  authors: [{ name: "Trade Life Services" }],
  creator: "Trade Life Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trade Life Services",
    title: "Trade Life Services | Handyman in Knoxville, TN",
    description:
      "No job too small, no problem too big. Knoxville's trusted handyman — repairs, plumbing, electrical, carpentry, and more. Call (865) 247-1871.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Trade Life Services — Handyman in Knoxville, TN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Life Services | Handyman in Knoxville, TN",
    description:
      "No job too small, no problem too big. Knoxville's trusted handyman. Call (865) 247-1871.",
    images: [ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <JsonLd />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZPVD7CRK8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZPVD7CRK8');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-dark text-cream antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
