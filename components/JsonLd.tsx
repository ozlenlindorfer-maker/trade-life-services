export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trade-life-services.netlify.app";
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Trade Life Services",
    description:
      "Knoxville's trusted handyman for general repairs, plumbing, electrical, carpentry, painting, and more. Serving Knoxville, TN and surrounding areas.",
    url: siteUrl,
    telephone: "+18652471871",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1674649207083-281c2517ab49?w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Knoxville",
      addressRegion: "TN",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.9606,
      longitude: -83.9207,
    },
    areaServed: [
      { "@type": "City", name: "Knoxville", "@id": "https://www.wikidata.org/wiki/Q43684" },
      { "@type": "AdministrativeArea", name: "Knox County, TN" },
      { "@type": "City", name: "Farragut, TN" },
      { "@type": "City", name: "Maryville, TN" },
      { "@type": "City", name: "Oak Ridge, TN" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handyman Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Repairs & Maintenance", description: "All-round home repairs — leaks, holes, squeaks, and anything that needs fixing." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Repairs", description: "Dripping faucets, running toilets, blocked drains — sorted fast." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Work", description: "Outlets, switches, fixtures, and more. Safe, code-compliant work." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpentry & Woodwork", description: "Shelving, doors, trim, decks — built right and built to last." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting & Decorating", description: "Clean lines, smooth finishes. Interior and exterior painting." } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+18652471871",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
