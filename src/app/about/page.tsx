import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | L.W. Barker Transport Services LTD',
  description: 'Learn about L.W. Barker Transport Services LTD - professional flatbed transport solutions since our establishment',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-black mb-8 text-center">
          About <span className="text-brand-orange">L.W. Barker</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 mb-8">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">Our Story</h2>
            <p className="text-brand-grey mb-6">
              Here at L W Barker Transport Services LTD we pride ourselves in being able to offer the complete 
              flatbed transport solutions, with a range of vehicles from a 3.5ton van up to a 44ton Arctic 
              we cover it all.
            </p>
            <p className="text-brand-grey">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for 
              businesses across the UK, providing reliable transport services for all types of loads.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
              <h3 className="text-xl font-semibold text-brand-black mb-4">Our Mission</h3>
              <p className="text-brand-grey">
                To provide reliable, professional flatbed transport services with a complete range of 
                vehicles to meet all our customers' transport needs.
              </p>
            </div>
            
            <div className="bg-lwb-grey-50 p-6 rounded-lg border border-lwb-grey-200">
              <h3 className="text-xl font-semibold text-brand-black mb-4">Our Values</h3>
              <ul className="text-brand-grey">
                <li>• Professional service</li>
                <li>• Reliable delivery</li>
                <li>• Customer satisfaction</li>
                <li>• Complete transport solutions</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200">
            <h2 className="text-2xl font-semibold text-brand-black mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Location</h3>
                <p className="text-brand-grey">NG24 1DW</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Phone</h3>
                <a href="tel:07967176567" className="text-brand-orange hover:text-lwb-orange-600">
                  07967 176567
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-brand-black mb-2">Email</h3>
                <a href="mailto:lee@lwbarkertransport.com" className="text-brand-orange hover:text-lwb-orange-600">
                  lee@lwbarkertransport.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 