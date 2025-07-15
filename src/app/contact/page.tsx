import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | L.W. Barker Transport Services LTD',
  description: 'Get in touch with L.W. Barker Transport Services LTD for quotes and transport service inquiries',
}

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-brand-black mb-8 text-center">
          Contact <span className="text-brand-orange">Us</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200">
                <h2 className="text-2xl font-semibold text-brand-black mb-6">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">Location</h3>
                      <p className="text-brand-grey">NG24 1DW</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">Phone</h3>
                      <a href="tel:07967176567" className="text-brand-orange hover:text-lwb-orange-600">
                        07967 176567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">Email</h3>
                      <a href="mailto:lee@lwbarkertransport.com" className="text-brand-orange hover:text-lwb-orange-600">
                        lee@lwbarkertransport.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black">Website</h3>
                      <p className="text-brand-grey">lwbarkertransport.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200">
                <h3 className="text-xl font-semibold text-brand-black mb-4">Follow Us</h3>
                <a href="https://www.facebook.com/lwbarkeruk/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-lwb-orange-600">
                  Facebook - L.W. Barker UK
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
} 