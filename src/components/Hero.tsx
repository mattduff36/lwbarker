'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(5).fill(false));
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    '/hero_bg1.jpg',
    '/hero_bg2.jpg', 
    '/hero_bg3.jpg',
    '/hero_bg4.jpg',
    '/hero_bg5.jpg'
  ];

  // Trigger content animations after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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

  // Handle image load completion
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

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
    <>
      {/* Preload critical images */}
      <link rel="preload" as="image" href={heroImages[0]} />
      <link rel="preload" as="image" href={heroImages[1]} />
      
      <section className="relative h-[85vh] md:h-[90vh] lg:h-screen w-full overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <Image
                src={image}
                alt={`L.W. Barker Transport Services Hero Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-1000 ease-in-out"
                priority={index === 0}
                quality={index === 0 ? 90 : 85}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
                onLoad={() => handleImageLoad(index)}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              {/* Loading placeholder for non-priority images */}
              {!imagesLoaded[index] && index !== 0 && (
                <div className="absolute inset-0 bg-gray-900 animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Dark Overlay with subtle animation */}
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-1000"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center pb-24 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Logo with floating animation */}
              <div className={`mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto animate-float">
                  <Image
                    src="/LOGO-TransBG.png"
                    alt="L.W. Barker Transport Services Logo"
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110"
                    priority
                  />
                </div>
              </div>
              
              {/* Animated heading */}
              <h1 className={`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Complete <span className="text-lwb-orange-500 animate-pulse-soft">Flatbed Transport</span> Solutions
              </h1>
              
              {/* Animated subtitle */}
              <p className={`text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Professional transport services from 3.5ton van to 44ton Arctic. 
                Reliable, efficient, and tailored to your needs.
              </p>
              
              {/* Animated buttons */}
              <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link 
                  href="/contact" 
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10">Get a Quote</span>
                  <div className="absolute inset-0 bg-lwb-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white hover:bg-white hover:text-lwb-black-900 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-lwb-orange-500 scale-125 animate-pulse-soft' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-70 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Contact Info Banner with smooth animations */}
        <div className="absolute bottom-0 left-0 right-0 bg-lwb-black-900 bg-opacity-90 text-white py-3 md:py-4 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-xs md:text-sm">
              <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                <span className="text-lwb-orange-500 icon-hover">
                  <Phone size={16} />
                </span>
                <a href="tel:07967176567" className="link-hover">
                  07967 176567
                </a>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                <span className="text-lwb-orange-500 icon-hover">
                  <Mail size={16} />
                </span>
                <a href="mailto:lee@lwbarkertransport.com" className="link-hover">
                  lee@lwbarkertransport.com
                </a>
              </div>
              <div className="flex items-center space-x-2 transition-all duration-300 hover:scale-105">
                <span className="text-lwb-orange-500 icon-hover">
                  <MapPin size={16} />
                </span>
                <span>NG24 1DW</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 