import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Fleet | L.W. Barker Transport Services LTD',
  description: 'Professional flatbed transport vehicles from 3.5ton van to 44ton Arctic for all your transport needs',
}

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-black mb-8 text-center">
          Our <span className="text-brand-orange">Fleet</span>
        </h1>
        <p className="text-center text-brand-grey mb-12 max-w-2xl mx-auto">
          Professional flatbed transport vehicles to handle loads of all sizes
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">3.5 Ton Van</h2>
            <p className="text-brand-grey mb-4">
              Perfect for smaller loads and urban deliveries. Ideal for local transport needs.
            </p>
            <ul className="text-brand-grey text-sm mb-4">
              <li>• Payload: Up to 3.5 tons</li>
              <li>• Flatbed design</li>
              <li>• Urban friendly</li>
            </ul>
            <button className="btn-primary">Contact for Quote</button>
          </div>
          
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">7.5 Ton Truck</h2>
            <p className="text-brand-grey mb-4">
              Mid-range capacity for medium-sized loads and regional transport.
            </p>
            <ul className="text-brand-grey text-sm mb-4">
              <li>• Payload: Up to 7.5 tons</li>
              <li>• Flatbed design</li>
              <li>• Regional coverage</li>
            </ul>
            <button className="btn-primary">Contact for Quote</button>
          </div>
          
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">18 Ton Truck</h2>
            <p className="text-brand-grey mb-4">
              Heavy-duty transport for larger loads and construction materials.
            </p>
            <ul className="text-brand-grey text-sm mb-4">
              <li>• Payload: Up to 18 tons</li>
              <li>• Flatbed design</li>
              <li>• Construction ready</li>
            </ul>
            <button className="btn-primary">Contact for Quote</button>
          </div>
          
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200 md:col-span-2 lg:col-span-3">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">44 Ton Arctic</h2>
            <p className="text-brand-grey mb-4">
              Our flagship vehicle for the heaviest loads and long-distance transport across the UK.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-brand-grey text-sm mb-4">
                <li>• Payload: Up to 44 tons</li>
                <li>• Flatbed design</li>
                <li>• UK-wide coverage</li>
              </ul>
              <ul className="text-brand-grey text-sm mb-4">
                <li>• Specialized equipment</li>
                <li>• Professional drivers</li>
                <li>• Secure transport</li>
              </ul>
            </div>
            <button className="btn-primary">Contact for Quote</button>
          </div>
        </div>
      </div>
    </main>
  )
} 