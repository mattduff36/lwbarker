'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
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

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/LOGO-TransBG.png"
              alt="L.W. Barker Transport Services LTD Logo"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-brand-black">
              L.W. Barker Transport Services
            </h1>
            <p className="text-sm text-brand-grey">Complete Transport Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors duration-200 hover:text-lwb-orange-600 ${
                isActiveLink(item.href)
                  ? 'text-lwb-orange-500 border-b-2 border-lwb-orange-500 pb-1'
                  : 'text-brand-black hover:text-lwb-orange-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-lwb-grey-300 hover:bg-lwb-grey-50 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-1 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute top-4 left-0 w-6 h-0.5 bg-brand-black transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-4 pb-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? 'bg-lwb-orange-50 text-lwb-orange-600 border-l-4 border-lwb-orange-500'
                  : 'text-brand-black hover:bg-lwb-grey-50 hover:text-lwb-orange-600'
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 