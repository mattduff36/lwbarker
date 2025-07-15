import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lwb-black-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
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
              Complete flatbed transport solutions with vehicles from 3.5ton van to 44ton Arctic.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📍</span>
                </div>
                <p className="text-lwb-grey-300">NG24 1DW</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <a 
                  href="tel:07967176567" 
                  className="text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200"
                >
                  07967 176567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✉️</span>
                </div>
                <a 
                  href="mailto:lee@lwbarkertransport.com" 
                  className="text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200"
                >
                  lee@lwbarkertransport.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌐</span>
                </div>
                <p className="text-lwb-grey-300">lwbarkertransport.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200">
                Home
              </Link>
              <Link href="/services" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200">
                Services
              </Link>
              <Link href="/fleet" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200">
                Fleet
              </Link>
              <Link href="/about" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="block text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media & Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/lwbarkeruk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-lwb-grey-300 hover:text-lwb-orange-400 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-5 h-5 bg-lwb-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">f</span>
                </div>
                <span>Facebook</span>
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-2">Our Services</h5>
              <ul className="text-sm text-lwb-grey-300 space-y-1">
                <li>• Local Transport</li>
                <li>• Long Distance</li>
                <li>• Specialized Loads</li>
                <li>• 3.5t - 44t Vehicles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lwb-grey-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lwb-grey-400 text-sm">
              © {new Date().getFullYear()} L.W. Barker Transport Services LTD. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="btn-primary text-sm">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 