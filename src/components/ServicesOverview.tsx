import React from 'react';
import Link from 'next/link';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      title: 'Local Transport',
      description: 'Quick and reliable local transport services for your nearby delivery needs. Perfect for urban areas and short-distance hauls.',
      icon: '🚛',
      features: ['Same-day delivery', 'Urban-friendly vehicles', 'Competitive rates', 'Professional drivers']
    },
    {
      title: 'Long Distance',
      description: 'Professional long-distance transport solutions across the UK. Nationwide coverage with tracked deliveries.',
      icon: '🚚',
      features: ['UK-wide coverage', 'Tracked deliveries', 'Scheduled transport', 'Secure handling']
    },
    {
      title: 'Specialized Loads',
      description: 'Expert handling of specialized and oversized load transport. Custom solutions for unique requirements.',
      icon: '🏗️',
      features: ['Oversized loads', 'Custom solutions', 'Expert handling', 'Safety compliance']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Our <span className="text-lwb-orange-500">Transport Services</span>
          </h2>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            Complete flatbed transport solutions with vehicles from 3.5ton van to 44ton Arctic. 
            Whatever your transport needs, we have the right solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 hover:border-lwb-orange-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-brand-black mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-brand-grey mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-brand-grey">
                    <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="btn-primary inline-block group-hover:bg-lwb-orange-600 transition-colors duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="btn-secondary inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 