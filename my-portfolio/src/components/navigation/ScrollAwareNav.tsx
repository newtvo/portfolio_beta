// Option 7: Scroll-Aware Transparent Overlay
'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollAwareNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(1000);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.4, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    // Set scroll height on mount (client-side only)
    setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setScrollHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { label: 'About', href: '#about', number: '01' },
    { label: 'Experience', href: '#experience', number: '02' },
    { label: 'Projects', href: '#projects', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  return (
    <motion.nav
      style={{ 
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 border-b border-slate-700/30 shadow-lg' 
          : 'bg-slate-900/20'
      }`}
    >
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isScrolled ? 1 : 0,
              x: isScrolled ? 0 : -20 
            }}
            className="text-xl font-bold"
            style={{ textShadow: '0 0 1px rgba(0, 0, 0, 0.5)' }}
          >
            <span className="text-teal-300">N</span>
            <span className="text-slate-200">V</span>
          </motion.div>

          {/* Nav Items */}
          <ul className="flex items-center gap-8 ml-auto">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="group relative flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors duration-300"
                  style={{ textShadow: '0 0 1px rgba(0, 0, 0, 0.5)' }}
                >
                  <span className="font-mono text-xs text-teal-400 font-semibold group-hover:opacity-100">
                    {item.number}.
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                  
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Scroll progress indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"
            style={{
              width: useTransform(scrollY, [0, scrollHeight], ['0%', '100%'])
            }}
          />
        </div>
      </div>
    </motion.nav>
  );
}
