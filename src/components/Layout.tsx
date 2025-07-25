import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip Navigation Link - hidden visually but accessible to screen readers and keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-lwb-orange-500 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-lwb-grey-200 shadow-sm">
        <Navigation />
      </header>

      {/* Main Content */}
      <main id="main-content" className={`flex-1 ${className}`} tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Layout; 