import React from 'react';
import Link from 'next/link';

const FleetShowcase: React.FC = () => {
  const fleetVehicles = [
    {
      name: '3.5 Ton Van',
      capacity: 'Up to 3.5 tons',
      description: 'Perfect for urban deliveries and smaller loads',
      features: ['Urban friendly', 'Manoeuvrable', 'Cost-effective'],
      suitable: 'Local deliveries, small machinery, construction supplies'
    },
    {
      name: '7.5 Ton Truck',
      capacity: 'Up to 7.5 tons',
      description: 'Mid-range capacity for regional transport',
      features: ['Versatile', 'Reliable', 'Efficient'],
      suitable: 'Medium loads, regional delivery, commercial goods'
    },
    {
      name: '18 Ton Truck',
      capacity: 'Up to 18 tons',
      description: 'Heavy-duty transport for larger loads',
      features: ['Powerful', 'Durable', 'Professional'],
      suitable: 'Construction materials, heavy machinery, large items'
    },
    {
      name: '44 Ton Arctic',
      capacity: 'Up to 44 tons',
      description: 'Our flagship vehicle for maximum capacity',
      features: ['Maximum capacity', 'Long-distance', 'Specialized'],
      suitable: 'Oversized loads, long-haul transport, specialized cargo'
    }
  ];

  return (
    <section className="py-16 bg-lwb-grey-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Our Professional <span className="text-lwb-orange-500">Fleet</span>
          </h2>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            From compact vans to heavy-duty Arctics, our diverse fleet ensures we can handle any transport requirement 
            with professional flatbed solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((vehicle, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-lwb-grey-200 hover:border-lwb-orange-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  🚛
                </div>
                <h3 className="text-xl font-semibold text-brand-black mb-2">
                  {vehicle.name}
                </h3>
                <div className="text-lwb-orange-500 font-bold text-lg">
                  {vehicle.capacity}
                </div>
              </div>
              
              <p className="text-brand-grey text-center mb-4 leading-relaxed">
                {vehicle.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-brand-black mb-2 text-sm">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {vehicle.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-lwb-orange-100 text-lwb-orange-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-brand-black mb-2 text-sm">Suitable for:</h4>
                <p className="text-brand-grey text-sm leading-relaxed">
                  {vehicle.suitable}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-lwb-orange-500 mb-2">24/7</div>
              <div className="text-brand-grey">Available Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lwb-orange-500 mb-2">UK-Wide</div>
              <div className="text-brand-grey">Coverage Area</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lwb-orange-500 mb-2">Professional</div>
              <div className="text-brand-grey">Trained Drivers</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/fleet" 
              className="btn-secondary"
            >
              View Full Fleet
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase; 