import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-lwb-grey-200 shadow-sm">
        <Navigation />
      </header>

      {/* Main Content */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 