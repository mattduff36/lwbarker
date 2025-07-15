import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import FleetShowcase from '@/components/FleetShowcase';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <Layout className="p-0">
      <Hero />
      <ServicesOverview />
      <FleetShowcase />
      <WhyChooseUs />
    </Layout>
  )
} 