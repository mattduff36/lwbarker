'use client';

import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-lwb-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-lwb-orange-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lwb-orange-300 focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top of page"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Scroll back to the top of the page"
    >
      <span className="sr-only">Back to top of page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        role="img"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
};

export default BackToTop;