import { getAbsoluteAssetUrl, getSiteUrl, seo } from "@/config/seo";
import { getPhoneUrl } from "@/config/site";

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const phone = getPhoneUrl().replace("tel:", "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.title.en,
        description: seo.description.en,
        inLanguage: ["en", "es"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seo.title.en,
        description: seo.description.en,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#residence` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"],
        },
      },
      {
        "@type": ["House", "Accommodation"],
        "@id": `${siteUrl}/#residence`,
        name: "Furnished home for lease in La Ahorcadita, Todos Santos",
        description: seo.description.en,
        image: [getAbsoluteAssetUrl(seo.ogImage.src)],
        telephone: phone,
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        occupancy: {
          "@type": "QuantitativeValue",
          maxValue: 2,
        },
        petsAllowed: "Dogs only",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Todos Santos",
          addressRegion: "Baja California Sur",
          addressCountry: "MX",
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Fully furnished" },
          { "@type": "LocationFeatureSpecification", name: "Off-grid solar power" },
          { "@type": "LocationFeatureSpecification", name: "Starlink internet" },
          { "@type": "LocationFeatureSpecification", name: "Air conditioning" },
          { "@type": "LocationFeatureSpecification", name: "Ocean and mountain views" },
          { "@type": "LocationFeatureSpecification", name: "Covered rooftop terrace" },
        ],
      },
      {
        "@type": "RealEstateListing",
        "@id": `${siteUrl}/#listing`,
        name: seo.title.en,
        description: seo.description.en,
        url: siteUrl,
        image: [getAbsoluteAssetUrl(seo.ogImage.src)],
        leaseLength: {
          "@type": "QuantitativeValue",
          minValue: 6,
          unitCode: "MON",
        },
        offers: {
          "@type": "Offer",
          price: 23000,
          priceCurrency: "MXN",
          availabilityStarts: "2026-10-01",
          url: `${siteUrl}/#contact`,
        },
        itemOffered: { "@id": `${siteUrl}/#residence` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "When is the home available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The home is available October 1, 2026.",
            },
          },
          {
            "@type": "Question",
            name: "What is the monthly rent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Monthly rent is $23,000 MXN.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum rental period?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The minimum rental period is 6 months.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in the rent?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Irrigation water, Starlink internet, and electricity (solar) are included. Household water and gas are the renter's responsibility.",
            },
          },
          {
            "@type": "Question",
            name: "Are dogs allowed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Well-behaved dogs are welcome. Cats are not allowed.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
