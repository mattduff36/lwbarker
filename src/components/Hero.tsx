'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroImages = [
    '/hero_bg1.jpg',
    '/hero_bg2.jpg', 
    '/hero_bg3.jpg',
    '/hero_bg4.jpg',
    '/hero_bg5.jpg'
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`L.W. Barker Transport Services Hero Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Complete <span className="text-lwb-orange-400">Flatbed Transport</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Professional transport services from 3.5ton van to 44ton Arctic. 
              Reliable, efficient, and tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn-primary bg-lwb-orange-500 hover:bg-lwb-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get a Quote
              </Link>
              <Link 
                href="/services" 
                className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-lwb-black-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrevious}
          className="ml-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="mr-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
          aria-label="Next image"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-lwb-orange-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contact Info Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-lwb-black-900 bg-opacity-90 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-lwb-orange-400">📞</span>
              <a href="tel:07967176567" className="hover:text-lwb-orange-400 transition-colors">
                07967 176567
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lwb-orange-400">✉️</span>
              <a href="mailto:lee@lwbarkertransport.com" className="hover:text-lwb-orange-400 transition-colors">
                lee@lwbarkertransport.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lwb-orange-400">📍</span>
              <span>NG24 1DW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 