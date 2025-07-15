'use client';

import React, { ReactNode } from 'react';
import { useScrollAnimation, animationVariants, staggerDelays } from '@/lib/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp';
  delay?: number;
  className?: string;
  stagger?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  stagger = false,
}) => {
  const { ref, isInView } = useScrollAnimation();
  const variant = animationVariants[animation];
  const delayClass = staggerDelays[delay] || 'delay-0';

  return (
    <div
      ref={ref}
      className={`${variant.initial} ${variant.transition} ${
        isInView ? variant.animate : ''
      } ${stagger ? delayClass : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 