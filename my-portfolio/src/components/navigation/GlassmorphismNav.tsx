// Option 2: Glassmorphism with Glow
'use client';

import { motion } from 'framer-motion';

export default function GlassmorphismNav() {
  const navItems = [
    { label: 'About', href: '#about', number: '01' },
    { label: 'Experience', href: '#experience', number: '02' },
    { label: 'Projects', href: '#projects', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  return (
    <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-teal-400/20 rounded-full blur-xl opacity-60" />
        
        {/* Main nav container */}
        <ul className="relative flex items-center gap-2 bg-slate-900/30 backdrop-blur-2xl rounded-full px-6 py-3 border border-slate-700/30 shadow-2xl">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-teal-300 transition-all duration-300 rounded-full hover:bg-slate-800/40"
              >
                <span className="font-mono text-xs text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.number}.
                </span>
                <span className="text-sm font-medium">{item.label}</span>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm -z-10" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
