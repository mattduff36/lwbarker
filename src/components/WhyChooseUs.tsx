'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Zap, Briefcase, Target, DollarSign, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is one of our core values, with fully licensed drivers and comprehensive insurance coverage for all operations.'
    },
    {
      icon: Zap,
      title: 'Reliability & Punctuality',
      description: 'We pride ourselves on being reliable and punctual - delivering your goods on time, every time.'
    },
    {
      icon: Briefcase,
      title: 'Professional Service',
      description: 'With 21 years of experience, our team provides professional service with excellent communication throughout.'
    },
    {
      icon: Target,
      title: 'Flexibility',
      description: 'We\'ll sort it. Nothing is ever a problem - our flexible approach ensures we meet your specific requirements.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Fair pricing based on load, distance, and location with discounts available for regular customers.'
    },
    {
      icon: Phone,
      title: 'Excellent Communication',
      description: 'We prioritize communication with our customers, providing real-time updates by phone throughout the transport process.'
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
                href="tel:01636402360"
                className="btn-secondary transform hover:scale-105 transition-all duration-300"
              >
                Call Now: 01636 402360
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" className="mt-12 text-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-lwb-orange-500 text-white p-6 rounded-lg hover:bg-lwb-orange-600 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Operating Hours</h4>
              <p className="text-lwb-orange-100">Office: Monday - Friday, 7:00 AM - 5:00 PM</p>
              <p className="text-lwb-orange-100">Saturday: 8:00 AM - 12:00 PM</p>
              <p className="text-lwb-orange-100 mt-2">Available 24/7 for emergency transport</p>
            </div>
            <div className="bg-lwb-black-900 text-white p-6 rounded-lg hover:bg-lwb-black-800 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Coverage Area</h4>
              <p className="text-lwb-grey-300">Delivering Excellence across the UK</p>
              <p className="text-lwb-grey-300 mt-2">Based in the East Midlands</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs; 