'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Zap, Briefcase, Target, DollarSign, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliable & Safe',
      description: 'Professional drivers with full insurance coverage and safety-first approach to all transport operations.'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Quick response times and efficient routing to get your goods delivered on time, every time.'
    },
    {
      icon: Briefcase,
      title: 'Professional Service',
      description: 'Experienced team with industry expertise providing courteous and professional service throughout.'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Custom transport solutions designed to meet your specific needs and requirements.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Fair, transparent pricing with no hidden costs. Get the best value for your transport needs.'
    },
    {
      icon: Phone,
      title: 'Easy Communication',
      description: 'Direct contact with our team for quotes, updates, and support throughout the transport process.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Why Choose <span className="text-lwb-orange-500">L.W. Barker</span>?
          </h2>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            We pride ourselves on delivering complete flatbed transport solutions with professionalism, 
            reliability, and customer satisfaction at the heart of everything we do.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index}
              stagger={true}
              className="text-center p-6 rounded-lg hover:bg-lwb-grey-50 transition-all duration-300 group card-hover"
            >
              <div className="text-lwb-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <value.icon size={48} className="icon-hover animate-float" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-4 group-hover:text-lwb-orange-500 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-brand-grey leading-relaxed group-hover:text-brand-black transition-colors duration-300">
                {value.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" className="mt-16 bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 hover:shadow-lg transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-black mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-brand-grey mb-6 max-w-2xl mx-auto">
              Contact us today for a free quote. Our team is ready to discuss your transport needs 
              and provide a tailored solution that meets your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:07967176567" 
                className="btn-secondary transform hover:scale-105 transition-all duration-300"
              >
                Call Now: 07967 176567
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mt-12 text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-lwb-orange-500 text-white p-6 rounded-lg hover:bg-lwb-orange-600 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Operating Hours</h4>
              <p className="text-lwb-orange-100">Available 24/7 for emergency transport</p>
              <p className="text-lwb-orange-100">Office: Monday - Friday, 8:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-lwb-black-900 text-white p-6 rounded-lg hover:bg-lwb-black-800 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Coverage Area</h4>
              <p className="text-lwb-grey-300">UK-wide transport services</p>
              <p className="text-lwb-grey-300">Based in NG24 1DW</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs; 