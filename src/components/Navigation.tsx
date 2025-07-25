'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo with animations */}
          <Link href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 rounded-lg p-2 flex-1 min-w-0 group transition-all duration-300 hover:scale-105">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/LOGO-TransBG.png"
                alt="L.W. Barker Transport Services Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:rotate-3"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="sm:hidden">
                <span className="text-lg font-bold text-brand-black block group-hover:text-lwb-orange-500 transition-colors duration-300">L.W. Barker</span>
                <p className="text-sm text-brand-grey group-hover:text-lwb-orange-400 transition-colors duration-300">Transport Services LTD</p>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-brand-black block group-hover:text-lwb-orange-500 transition-colors duration-300">L.W. Barker Transport Services LTD</span>
                <p className="text-sm text-brand-grey group-hover:text-lwb-orange-400 transition-colors duration-300">Complete Transport Solutions</p>
              </div>
            </div>
          </Link>

          {/* Mobile Phone Button */}
          <a
            href="tel:01636402360"
            className="md:hidden flex items-center justify-center h-12 px-3 rounded-lg bg-lwb-grey-100 hover:bg-lwb-grey-200 text-lwb-black-900 transition-all duration-300 mr-2 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500"
            aria-label="Call office: 01636 402360"
            title="Call office: 01636 402360"
          >
            <span className="sr-only">Call office: 01636 402360</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" role="img">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-all duration-300 hover:text-lwb-orange-500 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 rounded-md px-3 py-2 relative overflow-hidden group ${
                  isActiveLink(item.href)
                    ? 'text-lwb-orange-500'
                    : 'text-lwb-black-900 hover:text-lwb-orange-500'
                }`}
                role="menuitem"
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-lwb-orange-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md"></div>
                {/* Active indicator */}
                {isActiveLink(item.href) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-lwb-orange-500 animate-scale-in"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <button
            ref={menuButtonRef}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-lwb-orange-500 hover:bg-lwb-orange-600 focus:outline-none focus:ring-2 focus:ring-lwb-orange-300 focus:ring-offset-2 transition-all duration-300 shadow-md flex-shrink-0 hover:scale-110 hover:shadow-lg"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute top-4 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with improved animations */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-lwb-grey-200 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="py-6 space-y-3">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-lwb-grey-50 hover:text-lwb-orange-500 focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-inset rounded-lg transform hover:translate-x-2 hover:scale-105 ${
                  isActiveLink(item.href)
                    ? 'text-lwb-orange-500 bg-lwb-orange-50 border-l-4 border-lwb-orange-500 scale-105'
                    : 'text-lwb-black-900'
                } ${isMenuOpen ? 'animate-fade-in-left' : ''}`}
                onClick={closeMenu}
                role="menuitem"
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-out ${index * 100}ms`
                }}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Emergency Contact in Mobile Menu */}
            <div className="mt-6 px-6 py-4 bg-lwb-orange-50 rounded-lg" aria-labelledby="emergency-contact-heading">
              <p id="emergency-contact-heading" className="text-sm font-medium text-lwb-black-900 mb-2">24/7 Emergency Transport</p>
              <a
                href="tel:07967176567"
                className="flex items-center text-lwb-orange-500 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 rounded-md px-2 py-1"
                aria-label="Call emergency number: 07967 176567"
                title="Call emergency number: 07967 176567"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true" role="img">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                07967 176567
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 