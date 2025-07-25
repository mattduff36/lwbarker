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
      "description": "Family-run business since 2004 providing professional flatbed transport solutions with vehicles from 3.5-ton vans to 44-ton articulated lorries. Local, long distance and specialized transport services across the UK.",
      "url": "https://lwbarkertransport.com",
      "telephone": "+441636402360",
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
      "openingHours": [
        "Mo-Fr 07:00-17:00",
        "Sa 08:00-12:00"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ],
      "specialOpeningHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Transport Available (Additional charges apply)"
      },
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
              "description": "Quick and reliable local transport services handling single pallets to full Arctic loads with no restrictions on local deliveries.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "availabilityStarts": "2024-01-01T00:00:00+00:00",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Pricing based on application"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Long Distance Transport",
              "description": "Professional long-distance transport solutions with UK-wide coverage and real-time updates by phone. No geographical limitations with full transit insurance.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "availabilityStarts": "2024-01-01T00:00:00+00:00",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Pricing based on load, distance, and location"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Specialized Transport",
              "description": "Expert handling of all types of specialized loads including abnormal loads with no weight or size limitations. Specialized equipment and escort services available if required.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "availabilityStarts": "2024-01-01T00:00:00+00:00",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Pricing based on load, distance, and requirements"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 Emergency Transport",
              "description": "Available 24/7 for emergency transport needs with additional charges for out-of-hours service.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "availabilityStarts": "2024-01-01T00:00:00+00:00",
                "priceCurrency": "GBP",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Additional charges apply for out-of-hours service"
                }
              }
            }
          }
        ]
      }
    };

    if (page === 'contact') {
      return {
        ...baseOrganization,
        "@type": "LocalBusiness",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+441636402360",
            "email": "lee@lwbarkertransport.com",
            "contactType": "customer service",
            "availableLanguage": "English",
            "hoursAvailable": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "07:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+447967176567",
            "contactType": "emergency",
            "availableLanguage": "English",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59",
              "description": "24/7 Emergency Transport"
            }
          }
        ]
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