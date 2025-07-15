import type { Metadata } from 'next'
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import FleetShowcase from '@/components/FleetShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Professional Flatbed Transport Services | UK-Wide Coverage',
  description: 'L.W. Barker Transport Services LTD offers professional flatbed transport solutions across the UK. From 3.5ton vans to 44ton Arctic vehicles. Local, long distance and specialized transport services.',
  keywords: ['flatbed transport UK', 'professional transport services', 'UK transport company', 'logistics services', 'haulage services', 'local transport', 'long distance transport', 'specialized transport', 'vehicle transportation'],
  openGraph: {
    title: 'Professional Flatbed Transport Services | UK-Wide Coverage',
    description: 'L.W. Barker Transport Services LTD offers professional flatbed transport solutions across the UK. From 3.5ton vans to 44ton Arctic vehicles.',
    url: 'https://lwbarkertransport.com',
    images: [
      {
        url: '/hero_bg1.jpg',
        width: 1200,
        height: 630,
        alt: 'L.W. Barker Transport Services - Professional Flatbed Transport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Flatbed Transport Services | UK-Wide Coverage',
    description: 'L.W. Barker Transport Services LTD offers professional flatbed transport solutions across the UK. From 3.5ton vans to 44ton Arctic vehicles.',
    images: ['/hero_bg1.jpg'],
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData type="localBusiness" page="home" />
      <Layout className="p-0">
        <Hero />
        <ServicesOverview />
        <FleetShowcase />
        <WhyChooseUs />
      </Layout>
    </>
  )
} 