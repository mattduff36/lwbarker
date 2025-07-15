import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Fleet | L.W. Barker Transport Services LTD',
  description: 'Professional flatbed transport vehicles from 3.5ton van to 44ton Arctic for all your transport needs',
}

export default function FleetPage() {
  const fleetVehicles = [
    {
      name: '3.5 Ton Van',
      icon: '🚛',
      capacity: 'Up to 3.5 tons',
      dimensions: 'Length: 4.2m | Width: 2.1m | Height: 2.2m',
      description: 'Perfect for smaller loads and urban deliveries. Ideal for local transport needs with excellent manoeuvrability.',
      features: [
        'Urban friendly size',
        'Excellent manoeuvrability',
        'Cost-effective for small loads',
        'Quick loading/unloading',
        'Fuel efficient',
        'Professional driver'
      ],
      applications: [
        'Local deliveries',
        'Small machinery transport',
        'Construction supplies',
        'Retail goods',
        'Equipment hire delivery',
        'Emergency transport'
      ],
      coverage: 'Local and regional (up to 50 miles)',
      availability: 'Available 24/7'
    },
    {
      name: '7.5 Ton Truck',
      icon: '🚚',
      capacity: 'Up to 7.5 tons',
      dimensions: 'Length: 6.2m | Width: 2.4m | Height: 2.5m',
      description: 'Mid-range capacity for medium-sized loads and regional transport. Perfect balance of capacity and flexibility.',
      features: [
        'Versatile payload capacity',
        'Flatbed design',
        'Regional coverage',
        'Reliable performance',
        'Professional drivers',
        'Secure load restraints'
      ],
      applications: [
        'Regional deliveries',
        'Medium machinery',
        'Construction materials',
        'Commercial goods',
        'Agricultural supplies',
        'Industrial equipment'
      ],
      coverage: 'Regional (up to 200 miles)',
      availability: 'Available 24/7'
    },
    {
      name: '18 Ton Truck',
      icon: '🚐',
      capacity: 'Up to 18 tons',
      dimensions: 'Length: 8.5m | Width: 2.5m | Height: 3.0m',
      description: 'Heavy-duty transport for larger loads and construction materials. Built for demanding applications.',
      features: [
        'Heavy-duty construction',
        'Large flatbed area',
        'Powerful engine',
        'Advanced safety features',
        'Professional drivers',
        'Crane compatibility'
      ],
      applications: [
        'Construction materials',
        'Heavy machinery',
        'Industrial equipment',
        'Steel structures',
        'Precast concrete',
        'Large plant hire'
      ],
      coverage: 'UK-wide',
      availability: 'Available 24/7'
    },
    {
      name: '44 Ton Arctic',
      icon: '🚛',
      capacity: 'Up to 44 tons',
      dimensions: 'Length: 13.6m | Width: 2.55m | Height: 3.2m',
      description: 'Our flagship vehicle for maximum capacity and long-distance transport across the UK. Specialized for the heaviest loads.',
      features: [
        'Maximum legal capacity',
        'Extended flatbed',
        'Specialized restraints',
        'Long-distance capability',
        'Expert drivers',
        'Full insurance coverage'
      ],
      applications: [
        'Heavy machinery transport',
        'Construction equipment',
        'Industrial relocations',
        'Oversized loads',
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
          <h1 className="text-4xl font-bold text-brand-black mb-4">
            Our Professional <span className="text-brand-orange">Fleet</span>
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
                  <div className="text-4xl mr-4">{vehicle.icon}</div>
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
                  <Link href="/contact" className="btn-primary mr-4">
                    Get Quote for {vehicle.name}
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    View Services
                  </Link>
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
              All our vehicles are maintained to the highest standards and operated by professional, experienced drivers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Regular Maintenance</h3>
              <p className="text-brand-grey">Comprehensive maintenance schedules ensure reliability and safety</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-brand-black mb-2">Fully Insured</h3>
              <p className="text-brand-grey">Complete insurance coverage for goods in transit and public liability</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">👨‍💼</div>
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
            <Link href="tel:07967176567" className="btn-secondary">
              Call: 07967 176567
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
} 