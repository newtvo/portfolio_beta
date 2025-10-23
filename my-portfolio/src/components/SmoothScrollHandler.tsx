'use client';

import { useEffect } from 'react';

/**
 * Smooth Scroll Handler
 * Implements custom smooth scrolling for better performance with parallax
 */
export default function SmoothScrollHandler() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      
      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      // Use smooth scroll with custom easing
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
