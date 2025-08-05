import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Transport Quote Today',
  description: 'Contact L.W. Barker Transport Services LTD for quotes and transport service inquiries. Call 01636 402360 or email traffic@lwbarkertransport.com. Professional transport solutions across the UK.',
  keywords: ['contact transport company', 'transport quote', 'transport inquiry', 'UK transport contact', 'transport quote', 'transport services contact', 'professional transport inquiry'],
  openGraph: {
    title: 'Contact Us - Get Your Transport Quote Today',
    description: 'Contact L.W. Barker Transport Services LTD for quotes and transport service inquiries. Call 01636 402360 or email traffic@lwbarkertransport.com.',
    url: 'https://lwbarkertransport.com/contact',
    images: [
      {
        url: '/hero_bg5.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services - Contact Us for Transport Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get Your Transport Quote Today',
    description: 'Contact L.W. Barker Transport Services LTD for quotes and transport service inquiries. Call 01636 402360 or email traffic@lwbarkertransport.com.',
    images: ['/hero_bg5.jpg'],
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <StructuredData type="localBusiness" page="contact" />
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-lwb-black-900 mb-8 text-center">
            Contact <span className="text-lwb-orange-500">Us</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-brand-black mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to discuss your transport needs? Contact us today for a free quote or to learn more about our services. Our preferred method of contact is by phone at 01636 402360.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-orange text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black">Phone</h3>
                    <p className="text-gray-600">01636 402360 <span className="text-sm text-gray-500">(Office)</span></p>
                    <p className="text-gray-600">07967 176567 <span className="text-sm text-gray-500">(24/7 Emergency)</span></p>
                    <p className="text-sm text-gray-500">Office calls preferred during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-orange text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black">Email</h3>
                    <p className="text-gray-600">traffic@lwbarkertransport.com</p>
                    <p className="text-sm text-gray-500">For quotes and general inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-orange text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black">Location</h3>
                    <p className="text-gray-600">United Kingdom</p>
                    <p className="text-sm text-gray-500">Serving the UK nationwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-orange text-white p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-black">Operating Hours</h3>
                    <p className="text-gray-600">Monday-Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-500">24/7 available for emergency transport via 07967 176567 (additional charges apply)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-brand-black mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay updated with our latest services and transport solutions</p>
                <a 
                  href="https://www.facebook.com/lwbarkertransport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-orange hover:text-orange-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook Page
                </a>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
} 