// Option 3: Minimal with Active Indicator
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MinimalNav() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['about', 'experience', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []); // navItems is stable, so we don't need it in dependencies

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-teal-300"
          >
            MV
          </motion.div>

          {/* Nav Items */}
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="relative group py-2 text-sm font-medium transition-colors"
                >
                  <span
                    className={`${
                      activeSection === item.id
                        ? 'text-teal-300'
                        : 'text-slate-400 hover:text-slate-300'
                    } transition-colors`}
                  >
                    <span className="font-mono text-xs mr-1 text-teal-400">
                      0{index + 1}.
                    </span>
                    {item.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
