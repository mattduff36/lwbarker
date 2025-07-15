import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { MapPin, Route, Construction, Shield, Zap, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transport Services - Local, Long Distance & Specialized',
  description: 'Comprehensive transport services including local delivery, long distance haulage, and specialized transport. Professional flatbed solutions with vehicles from 3.5ton van to 44ton Arctic across the UK.',
  keywords: ['transport services', 'local transport', 'long distance transport', 'specialized transport', 'flatbed delivery', 'UK haulage', 'logistics services', 'transport solutions', 'vehicle transportation'],
  openGraph: {
    title: 'Transport Services - Local, Long Distance & Specialized',
    description: 'Comprehensive transport services including local delivery, long distance haulage, and specialized transport. Professional flatbed solutions across the UK.',
    url: 'https://lwbarkertransport.com/services',
    images: [
      {
        url: '/hero_bg2.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services - Professional Transport Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transport Services - Local, Long Distance & Specialized',
    description: 'Comprehensive transport services including local delivery, long distance haulage, and specialized transport. Professional flatbed solutions across the UK.',
    images: ['/hero_bg2.jpg'],
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com/services',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Local Transport',
      icon: MapPin,
      description: 'Quick and reliable local transport services for your nearby delivery needs.',
      features: [
        'Same-day delivery available',
        'Urban-friendly vehicles',
        'Flexible scheduling',
        'Cost-effective rates',
        'Professional drivers',
        'Secure handling'
      ],
      coverage: 'Local and regional coverage within 50 miles',
      vehicles: '3.5ton van, 7.5ton truck',
      suitableFor: [
        'Construction supplies',
        'Retail deliveries',
        'Equipment transport',
        'Small machinery',
        'Commercial goods'
      ]
    },
    {
      title: 'Long Distance',
      icon: Route,
      description: 'Professional long-distance transport solutions across the UK.',
      features: [
        'UK-wide coverage',
        'Tracked deliveries',
        'Scheduled transport',
        'Secure handling',
        'Insurance coverage',
        'Real-time updates'
      ],
      coverage: 'Nationwide UK coverage',
      vehicles: '18ton truck, 44ton Arctic',
      suitableFor: [
        'Inter-city deliveries',
        'Large construction projects',
        'Heavy machinery',
        'Commercial relocations',
        'Industrial equipment'
      ]
    },
    {
      title: 'Specialized Loads',
      icon: Construction,
      description: 'Expert handling of specialized and oversized load transport.',
      features: [
        'Oversized load permits',
        'Route planning',
        'Escort services',
        'Custom solutions',
        'Safety compliance',
        'Insurance coverage'
      ],
      coverage: 'UK-wide with route planning',
      vehicles: '44ton Arctic with specialized equipment',
      suitableFor: [
        'Construction machinery',
        'Industrial equipment',
        'Prefabricated structures',
        'Agricultural machinery',
        'Abnormal loads'
      ]
    }
  ];

  return (
    <>
      <StructuredData type="service" page="services" />
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-lwb-black-900 mb-4">
              Our <span className="text-lwb-orange-500">Transport Services</span>
            </h1>
            <p className="text-lg text-brand-grey max-w-2xl mx-auto">
              Complete flatbed transport solutions with professional service and reliable delivery. 
              From local deliveries to specialized loads, we have the expertise and equipment to meet your needs.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-lwb-grey-200 overflow-hidden">
                <div className="bg-lwb-grey-50 px-8 py-6 border-b border-lwb-grey-200">
                  <div className="flex items-center">
                    <div className="text-lwb-orange-500 mr-4">
                      <service.icon size={48} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-lwb-black-900 mb-2">{service.title}</h2>
                      <p className="text-lg text-brand-grey">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-lwb-black-900 mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-brand-grey">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-lwb-black-900 mb-4">Service Details</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-lwb-black-900">Coverage:</h4>
                          <p className="text-brand-grey">{service.coverage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-lwb-black-900">Vehicles:</h4>
                          <p className="text-brand-grey">{service.vehicles}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-lwb-black-900 mb-4">Suitable For</h3>
                      <ul className="space-y-2">
                        {service.suitableFor.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-brand-grey">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="flex flex-row gap-2 sm:gap-4 justify-center">
                      <Link href="/contact" className="bg-lwb-orange-500 hover:bg-lwb-orange-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                        <span className="sm:hidden">Get Quote</span>
                        <span className="hidden sm:inline">Get Quote for {service.title}</span>
                      </Link>
                      <Link href="/fleet" className="bg-lwb-grey-500 hover:bg-lwb-grey-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                        View Fleet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-lwb-grey-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-lwb-black-900 mb-4">
                Why Choose L.W. Barker Transport Services?
              </h2>
              <p className="text-brand-grey max-w-2xl mx-auto">
                We pride ourselves on delivering professional, reliable transport solutions 
                tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <Shield size={48} />
                </div>
                <h3 className="text-lg font-semibold text-lwb-black-900 mb-2">Fully Insured</h3>
                <p className="text-brand-grey">Comprehensive insurance coverage for your peace of mind</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <Zap size={48} />
                </div>
                <h3 className="text-lg font-semibold text-lwb-black-900 mb-2">Fast Response</h3>
                <p className="text-brand-grey">Quick quotes and efficient service delivery</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <Briefcase size={48} />
                </div>
                <h3 className="text-lg font-semibold text-lwb-black-900 mb-2">Professional Service</h3>
                <p className="text-brand-grey">Experienced team with industry expertise</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-lwb-black-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-brand-grey mb-6">
              Contact us today for a free quote on any of our transport services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="tel:07967176567" className="btn-secondary">
                Call: 07967 176567
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
} 