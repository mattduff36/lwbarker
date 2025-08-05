import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { MapPin, Globe, Construction, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Professional Transport Company Since 2004',
  description: 'Learn about L.W. Barker Transport Services LTD - a family-run transport company with 21 years of experience providing reliable, safe, and efficient transport solutions across the UK with 24/7 service availability.',
  keywords: ['about transport company', 'professional transport', 'reliable transport', 'UK transport company', 'transport company', 'transport services history', 'professional logistics'],
  openGraph: {
    title: 'About Us - Professional Transport Company Since Establishment',
    description: 'Learn about L.W. Barker Transport Services LTD - a professional transport company providing reliable, safe, and efficient transport solutions across the UK.',
    url: 'https://lwbarkertransport.com/about',
    images: [
      {
        url: '/hero_bg4.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services - About Our Professional Transport Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Professional Transport Company Since Establishment',
    description: 'Learn about L.W. Barker Transport Services LTD - a professional transport company providing reliable, safe, and efficient transport solutions across the UK.',
    images: ['/hero_bg4.jpg'],
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com/about',
  },
}

export default function AboutPage() {
  const companyStats = [
    { value: '21', label: 'Years Experience' },
    { value: 'Multiple', label: 'Vehicles' },
    { value: 'Skilled', label: 'Drivers' },
    { value: '900k', label: 'Annual Miles' }
  ];



  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-lwb-black-900 mb-4">
            About <span className="text-lwb-orange-500">L.W. Barker</span>
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl mx-auto">
            Your trusted partner for complete transport solutions across the UK
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-6 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-brand-grey mb-6 leading-relaxed">
                  L.W. Barker Transport Services is a family-run business started by Lee & Kelly Barker in 2004 with just one van.
                  Our mission was simple: to provide reliable transport for the local and surrounding areas.
                </p>
                <p className="text-brand-grey leading-relaxed">
                  Today, with 21 years of experience, we&apos;ve grown to operate a diverse fleet of vehicles and employ skilled drivers, covering hundreds of thousands of
                  miles annually. We pride ourselves in offering complete transport solutions, from 3.5 tonne vans to 44 tonne articulated lorries.
                </p>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-lwb-grey-200">
                      <div className="text-2xl font-bold text-lwb-orange-500">{stat.value}</div>
                      <div className="text-sm text-brand-grey">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission and Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-lwb-grey-200 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Our Mission</h3>
              <p className="text-brand-grey leading-relaxed">
                &quot;When you need something delivered, we&apos;re always on hand to say YES! We will NOT let you down.&quot;
                We strive to be the go-to choice for businesses requiring efficient, safe, and reliable transport solutions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-lwb-grey-200 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-black mb-4">Our Commitment</h3>
              <ul className="text-brand-grey space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Safety as a core value
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Reliability and punctuality
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Clear communication with customers
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-lwb-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Flexibility to meet your needs
                </li>
              </ul>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-lwb-grey-50 p-8 rounded-lg border border-lwb-grey-200 mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <MapPin size={48} />
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Local Transport</h3>
                <p className="text-brand-grey text-sm">Quick deliveries within 50 miles using our 3.5t and 7.5t vehicles</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <Globe size={48} />
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Long Distance</h3>
                <p className="text-brand-grey text-sm">UK-wide transport with our 18t and 44t vehicles for maximum capacity</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-4 flex justify-center">
                  <Construction size={48} />
                </div>
                <h3 className="text-lg font-semibold text-brand-black mb-2">Specialized Loads</h3>
                <p className="text-brand-grey text-sm">Expert handling of specialized and complex load requirements</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="btn-primary mr-4">
                View All Services
              </Link>
              <Link href="/fleet" className="btn-secondary">
                See Our Fleet
              </Link>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg border border-lwb-grey-200 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-black mb-6 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-2 flex justify-center">
                  <MapPin size={32} />
                </div>
                <h3 className="font-semibold text-brand-black mb-1">Location</h3>
                <p className="text-brand-grey">NG24 1DW</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-2 flex justify-center">
                  <Phone size={32} />
                </div>
                <h3 className="font-semibold text-brand-black mb-1">Phone</h3>
                <a href="tel:01636402360" className="text-brand-orange hover:text-lwb-orange-600">
                  01636 402360
                </a>
                <p className="text-xs text-brand-grey">(Office)</p>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-2 flex justify-center">
                  <Mail size={32} />
                </div>
                <h3 className="font-semibold text-brand-black mb-1">Email</h3>
                <a href="mailto:traffic@lwbarkertransport.com" className="text-brand-orange hover:text-lwb-orange-600">
                  traffic@lwbarkertransport.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-lwb-orange-500 mb-2 flex justify-center">
                  <Globe size={32} />
                </div>
                <h3 className="font-semibold text-brand-black mb-1">Website</h3>
                <p className="text-brand-grey">lwbarkertransport.com</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="btn-primary">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 