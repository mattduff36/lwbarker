import React from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'localBusiness' | 'service';
  page?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', page = 'home' }) => {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "L.W. Barker Transport Services LTD",
      "description": "Professional flatbed transport solutions with vehicles from 3.5-ton vans to 44-ton articulated lorries. Local, long distance and specialized transport services across the UK.",
      "url": "https://lwbarkertransport.com",
      "telephone": "+447967176567",
      "email": "lee@lwbarkertransport.com",
      "address": {
        "@type": "PostalAddress",
        "postalCode": "NG24 1DW",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "53.0781",
        "longitude": "-0.7906"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "53.0781",
          "longitude": "-0.7906"
        },
        "geoRadius": "500000"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "£",
      "image": "https://lwbarkertransport.com/LOGO.png",
      "logo": "https://lwbarkertransport.com/LOGO.png",
      "sameAs": [
        "https://www.facebook.com/lwbarkertransport"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Transport Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local Transport Services",
              "description": "Professional local transport services for nearby deliveries and collections"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long Distance Transport",
              "description": "Reliable long distance transport services across the UK"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Specialized Transport",
              "description": "Specialized transport services for unique and challenging loads"
            }
          }
        ]
      }
    };

    if (page === 'contact') {
      return {
        ...baseOrganization,
        "@type": "LocalBusiness",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+447967176567",
          "email": "lee@lwbarkertransport.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      };
    }

    if (page === 'services') {
      return {
        ...baseOrganization,
        "@type": "Service",
        "provider": {
          "@type": "LocalBusiness",
          "name": "L.W. Barker Transport Services LTD"
        },
        "serviceType": "Transport Services",
        "category": "Transportation and Logistics"
      };
    }

    return baseOrganization;
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData; 