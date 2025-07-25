import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Truck as LorryIcon, Box, Boxes, Container, Warehouse, Wrench, Shield, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Fleet - Professional Transport Vehicles for Every Need',
  description: 'Comprehensive fleet of professional flatbed transport vehicles from 3.5-ton vans to 44-ton articulated lorries. Modern, well-maintained vehicles for local, long distance and specialized transport across the UK.',
  keywords: ['transport fleet', 'flatbed vehicles', '3.5-ton vans', '7.5-ton lorry', '18-ton lorry', '44-ton articulated lorries', 'professional vehicles', 'transport equipment', 'UK transport fleet'],
  openGraph: {
    title: 'Our Fleet - Professional Transport Vehicles for Every Need',
    description: 'Comprehensive fleet of professional flatbed transport vehicles from 3.5-ton vans to 44-ton articulated lorries. Modern, well-maintained vehicles for all transport needs.',
    url: 'https://lwbarkertransport.com/fleet',
    images: [
      {
        url: '/hero_bg3.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services Fleet - Professional Transport Vehicles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Fleet - Professional Transport Vehicles for Every Need',
    description: 'Comprehensive fleet of professional flatbed transport vehicles from 3.5-ton vans to 44-ton articulated lorries. Modern, well-maintained vehicles for all transport needs.',
    images: ['/hero_bg3.jpg'],
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com/fleet',
  },
}

export default function FleetPage() {
  const fleetVehicles = [
    {
      name: '3.5 Ton Van',
      icon: Box,
      capacity: 'Typical payload: 1.0 – 1.5 tonnes',
      dimensions: 'Various dimensions',
      description: 'We operate versatile 3.5 ton vans in both flatbed and box configurations for a wide range of applications.',
      features: [
        'Both flatbed and box configurations',
        'Excellent maneuverability',
        'Cost-effective for small loads',
        'Quick loading/unloading',
        'Fuel efficient',
        'Professional driver'
      ],
      applications: [
        'Various applications',
        'Local deliveries',
        'Small machinery transport',
        'Construction supplies',
        'Commercial goods',
        'Emergency transport'
      ],
      coverage: 'Local and regional',
      availability: 'Available 24/7'
    },
    {
      name: '7.5 Ton Lorry',
      icon: Boxes,
      capacity: 'Typical payload: 3.5 – 4.5 tonnes',
      dimensions: 'Flatbed configuration',
      description: 'Our flatbed 7.5 ton lorries provide reliable mid-range capacity for construction materials and commercial goods.',
      features: [
        'Flatbed design',
        'Versatile payload capacity',
        'Regional coverage',
        'Reliable performance',
        'Professional drivers',
        'Secure load restraints'
      ],
      applications: [
        'Construction materials',
        'Commercial goods',
        'Steel transport',
        'Pallet delivery',
        'Medium machinery',
        'Regional deliveries'
      ],
      coverage: 'Regional and nationwide',
      availability: 'Available 24/7'
    },
    {
      name: '18 Ton Lorry',
      icon: Container,
      capacity: 'Typical payload: 10 – 11.5 tonnes',
      dimensions: 'Heavy-duty flatbed',
      description: 'Our 18 ton lorries provide heavy-duty transport for construction materials, heavy machinery, and engineering loads.',
      features: [
        'Heavy-duty construction',
        'Large flatbed area',
        'Powerful engine',
        'Advanced safety features',
        'Professional drivers',
        'No crane compatibility'
      ],
      applications: [
        'Construction materials',
        'Heavy machinery',
        'Engineering loads',
        'Steel structures',
        'Palletized goods',
        'Industrial equipment'
      ],
      coverage: 'UK-wide',
      availability: 'Available 24/7'
    },
    {
      name: '44 Ton Arctic',
      icon: Warehouse,
      capacity: 'Typical payload: 28 – 30 tonnes',
      dimensions: 'Maximum legal dimensions',
      description: 'Our Arctic vehicles with specialized restraint systems can handle heavy loads across the UK.',
      features: [
        'Specialized restraint systems',
        'Extended flatbed',
        'Long-distance capability',
        'Expert drivers',
        'Full insurance coverage',
        'Maximum payload: 30 tonnes'
      ],
      applications: [
        'Heavy machinery transport',
        'Construction equipment',
        'Engineering loads',
        'Steel/Pallets',
        'Long-haul transport',
        'Specialized cargo'
      ],
      coverage: 'UK-wide with route planning',
      availability: 'Available 24/7'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-lwb-black-900 mb-4">
            Our Professional <span className="text-lwb-orange-500">Fleet</span>
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            From compact vans to heavy-duty Arctics, our diverse fleet ensures we can handle any transport 
            requirement with professional flatbed solutions and experienced drivers.
          </p>
        </div>
        
        <div className="space-y-8">
          {fleetVehicles.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-lwb-grey-200 overflow-hidden">
              <div className="bg-lwb-grey-50 px-8 py-6 border-b border-lwb-grey-200">
                <div className="flex items-center">
                  <div className="text-lwb-orange-500 mr-4">
                    <vehicle.icon size={48} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-brand-black mb-2">{vehicle.name}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-brand-grey">
                      <span className="bg-lwb-orange-100 text-lwb-orange-700 px-3 py-1 rounded">
                        {vehicle.capacity}
                      </span>
                      <span className="bg-lwb-grey-200 text-brand-black px-3 py-1 rounded">
                        {vehicle.availability}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-brand-grey mb-6">{vehicle.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black mb-3">Specifications</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-brand-grey">
                        <span className="font-medium">Capacity:</span> {vehicle.capacity}
                      </p>
                      <p className="text-brand-grey">
                        <span className="font-medium">Dimensions:</span> {vehicle.dimensions}
                      </p>
                      <p className="text-brand-grey">
                        <span className="font-medium">Coverage:</span> {vehicle.coverage}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black mb-3">Key Features</h3>
                    <ul className="space-y-1 text-sm">
                      {vehicle.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-lwb-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-brand-grey">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black mb-3">Applications</h3>
                    <ul className="space-y-1 text-sm">
                      {vehicle.applications.slice(0, 4).map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-lwb-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-brand-grey">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black mb-3">Perfect For</h3>
                    <ul className="space-y-1 text-sm">
                      {vehicle.applications.slice(4).map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-lwb-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span className="text-brand-grey">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex flex-row gap-2 sm:gap-4 justify-center">
                    <Link href="/contact" className="bg-lwb-orange-500 hover:bg-lwb-orange-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                      <span className="sm:hidden">Get Quote</span>
                      <span className="hidden sm:inline">Get Quote for {vehicle.name}</span>
                    </Link>
                    <Link href="/services" className="bg-lwb-grey-500 hover:bg-lwb-grey-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-lwb-grey-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              Fleet Capabilities & Standards
            </h2>
            <p className="text-brand-grey max-w-2xl mx-auto">
              Our fleet is maintained to the highest standards and operated by professional, experienced drivers covering hundreds of thousands of miles annually.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-lwb-orange-500 mb-4 flex justify-center">
                <Wrench size={48} />
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Regular Maintenance</h3>
              <p className="text-brand-grey">Comprehensive maintenance schedules ensure reliability and safety</p>
            </div>
            <div className="text-center">
              <div className="text-lwb-orange-500 mb-4 flex justify-center">
                <Shield size={48} />
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Fully Insured</h3>
              <p className="text-brand-grey">Complete insurance coverage for goods in transit and public liability</p>
            </div>
            <div className="text-center">
              <div className="text-lwb-orange-500 mb-4 flex justify-center">
                <User size={48} />
              </div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Professional Drivers</h3>
              <p className="text-brand-grey">Experienced, licensed drivers with excellent safety records</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-4">
            Need Help Choosing the Right Vehicle?
          </h2>
          <p className="text-brand-grey mb-6">
            Our team can help you select the perfect vehicle for your transport needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Expert Advice
            </Link>
            <Link href="tel:01636402360" className="btn-secondary">
              Call: 01636 402360
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 