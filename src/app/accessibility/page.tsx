import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'L.W. Barker Transport Services LTD is committed to ensuring digital accessibility for people with disabilities.',
  keywords: ['accessibility', 'WCAG', 'accessible website', 'transport accessibility'],
  openGraph: {
    title: 'Accessibility Statement - L.W. Barker Transport',
    description: 'L.W. Barker Transport Services LTD is committed to ensuring digital accessibility for people with disabilities.',
    url: 'https://lwbarkertransport.com/accessibility',
  },
  alternates: {
    canonical: 'https://lwbarkertransport.com/accessibility',
  },
}

export default function AccessibilityPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-lwb-black-900 mb-6">
            Accessibility Statement
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-brand-grey mb-8">
              L.W. Barker Transport Services LTD is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Conformance Status
            </h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Our website strives to conform to WCAG 2.1 level AA standards.
            </p>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Accessibility Features
            </h2>
            <p>
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Skip to main content link for keyboard users</li>
              <li>Proper heading structure for screen reader navigation</li>
              <li>Alt text for all informative images</li>
              <li>Sufficient color contrast for text readability</li>
              <li>Keyboard accessibility for all interactive elements</li>
              <li>ARIA landmarks and labels for improved screen reader navigation</li>
              <li>Responsive design that works on various devices and screen sizes</li>
              <li>Focus indicators for keyboard navigation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Feedback
            </h2>
            <p>
              We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Phone: <a href="tel:01636402360" className="text-lwb-orange-500 hover:text-lwb-orange-700 transition-colors">01636 402360</a></li>
              <li>Email: <a href="mailto:traffic@lwbarkertransport.com" className="text-lwb-orange-500 hover:text-lwb-orange-700 transition-colors">traffic@lwbarkertransport.com</a></li>
              <li>Contact form: <Link href="/contact" className="text-lwb-orange-500 hover:text-lwb-orange-700 transition-colors">Contact Us</Link></li>
            </ul>
            <p>
              We try to respond to feedback within 5 business days.
            </p>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Compatibility with Browsers and Assistive Technology
            </h2>
            <p>
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p>
              The website is also designed to be compatible with the latest versions of major browsers including Chrome, Firefox, Safari, and Edge.
            </p>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Technical Specifications
            </h2>
            <p>
              Accessibility of our website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
            </ul>
            <p>
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Assessment Approach
            </h2>
            <p>
              L.W. Barker Transport Services LTD assessed the accessibility of this website by the following approaches:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Self-evaluation</li>
              <li>Manual testing with assistive technologies</li>
              <li>Automated testing tools</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-lwb-black-900 mt-8 mb-4">
              Date
            </h2>
            <p>
              This statement was created on July 25, 2025.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Contact Us for Accessibility Support
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}