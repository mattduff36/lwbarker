import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lwb-black-900 text-white" role="contentinfo" aria-label="Footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4" aria-labelledby="company-info">
            <h4 id="company-info" className="sr-only">Company Information</h4>
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/LOGO-TransBG.png"
                  alt="L.W. Barker Transport Services LTD Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">L.W. Barker</h3>
                <p className="text-sm text-lwb-grey-300">Transport Services LTD</p>
              </div>
            </div>
            <p className="text-lwb-grey-300 text-sm">
              Family-run business since 2004 with 21 years of experience. Complete transport solutions with vehicles from 3.5 tonne vans to 44 tonne articulated lorries.
            </p>
            <p className="text-lwb-grey-300 text-sm italic mt-1">
              &quot;We will NOT let you down.&quot;
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 id="contact-info" className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div className="flex flex-col">
                  <a
                    href="tel:01636402360"
                    className="text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1"
                    aria-label="Call office: 01636 402360"
                  >
                    01636 402360
                  </a>
                  <span className="text-xs text-lwb-grey-400">(Office)</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✉️</span>
                </div>
                <a
                  href="mailto:traffic@lwbarkertransport.com"
                  className="text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1"
                  aria-label="Email: traffic@lwbarkertransport.com"
                >
                  traffic@lwbarkertransport.com
                </a>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">f</span>
                </div>
                <a
                  href="https://www.facebook.com/lwbarkeruk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1"
                  aria-label="Visit our Facebook page"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" role="navigation" aria-labelledby="quick-links">
            <h4 id="quick-links" className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                Home
              </Link>
              <Link href="/services" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                Services
              </Link>
              <Link href="/fleet" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                Fleet
              </Link>
              <Link href="/about" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                About
              </Link>
              <Link href="/contact" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                Contact
              </Link>
              <Link href="/accessibility" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 id="services-list" className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="text-sm text-lwb-grey-300 space-y-1" aria-labelledby="services-list">
              <li>• Local Transport (No restrictions)</li>
              <li>• Long Distance (UK-wide)</li>
              <li>• Specialized & Abnormal Loads</li>
              <li>• Fleet of vehicles (3.5t - 44t)</li>
              <li>• 24/7 Emergency Transport</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lwb-grey-700">
          <div className="flex justify-center items-center">
            <p className="text-lwb-grey-400 text-sm text-center">
              Website developed by <a href="https://mpdee.co.uk" target="_blank" rel="noopener noreferrer" className="text-lwb-orange-400 hover:text-lwb-orange-300 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 focus:ring-offset-lwb-black-900 rounded-md px-1" aria-label="Visit mpdee.co.uk website">mpdee.co.uk</a> © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 