import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transport Services | L.W. Barker Transport Services LTD',
  description: 'Local, long distance and specialized transport services with vehicles from 3.5ton van to 44ton Arctic',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-black mb-8 text-center">
          Our <span className="text-brand-orange">Transport Services</span>
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">Local Transport</h2>
            <p className="text-brand-grey mb-4">
              Quick and reliable local transport services for your nearby delivery needs.
            </p>
            <button className="btn-primary">Contact for Quote</button>
          </div>
          
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">Long Distance</h2>
            <p className="text-brand-grey mb-4">
              Professional long-distance transport solutions across the UK.
            </p>
            <button className="btn-primary">Contact for Quote</button>
          </div>
          
          <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">Specialized Loads</h2>
            <p className="text-brand-grey mb-4">
              Expert handling of specialized and oversized load transport.
            </p>
            <button className="btn-primary">Contact for Quote</button>
          </div>
        </div>
      </div>
    </main>
  )
} 