export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Trade Life Services",
    description:
      "Knoxville's trusted handyman for general repairs, plumbing, electrical, carpentry, painting, and more. Serving Knoxville, TN and surrounding areas.",
    url: "https://tradelifeservices.com",
    telephone: "+18652471871",
    priceRange: "$$",
    image: "https://tradelifeservices.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Knoxville",
      addressRegion: "TN",
      addressCountry: "US",
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
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Repairs & Maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Work" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpentry & Woodwork" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting & Decorating" } },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+18652471871",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
