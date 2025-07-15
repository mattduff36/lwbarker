'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Car, Construction } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Local Transport',
      description: 'Quick and reliable local transport services for your nearby delivery needs. Perfect for urban areas and short-distance hauls.',
      icon: Car,
      features: ['Same-day delivery', 'Urban-friendly vehicles', 'Competitive rates', 'Professional drivers']
    },
    {
      title: 'Long Distance',
      description: 'Professional long-distance transport solutions across the UK. Nationwide coverage with tracked deliveries.',
      icon: Truck,
      features: ['UK-wide coverage', 'Tracked deliveries', 'Scheduled transport', 'Secure handling']
    },
    {
      title: 'Specialized Loads',
      description: 'Expert handling of specialized and oversized load transport. Custom solutions for unique requirements.',
      icon: Construction,
      features: ['Oversized loads', 'Custom solutions', 'Expert handling', 'Safety compliance']
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
            Complete flatbed transport solutions with vehicles from 3.5ton van to 44ton Arctic. 
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