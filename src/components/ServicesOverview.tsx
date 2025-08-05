'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Globe, Construction } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Local Transport',
      description: 'Quick and reliable local transport services handling single pallets to full Arctic loads with no restrictions on local deliveries.',
      icon: MapPin,
      features: ['Same-day delivery', 'No restrictions', 'Pricing based on application', 'Professional drivers']
    },
    {
      title: 'Long Distance',
      description: 'Professional long-distance transport solutions with UK-wide coverage and real-time updates by phone.',
      icon: Globe,
      features: ['UK-wide coverage', 'Updates by phone', 'Full Goods in Transit Insurance', 'No geographical limitations']
    },
    {
      title: 'Specialized Loads',
      description: 'Expert handling of all types of specialized loads with professional equipment and experienced drivers.',
      icon: Construction,
      features: ['Specialized equipment', 'Professional handling', 'Expert drivers', 'Secure transport']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Our <span className="text-lwb-orange-500">Transport Services</span>
          </h2>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            Complete transport solutions with vehicles from 3.5 tonne vans to 44 tonne articulated lorries.
            Whatever your transport needs, we have the right solution for you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animation="slideUp"
              delay={index}
              stagger={true}
              className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 hover:border-lwb-orange-300 transition-all duration-300 group card-hover"
            >
              <div className="text-lwb-orange-500 mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} className="mx-auto animate-bounce-soft" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-black mb-4 text-center group-hover:text-lwb-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brand-grey mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-brand-grey transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 100}ms` }}>
                    <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="btn-primary inline-block group-hover:shadow-xl transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" className="text-center mt-12">
          <Link 
            href="/services" 
            className="btn-secondary inline-block"
          >
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesOverview; 