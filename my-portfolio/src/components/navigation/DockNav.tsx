// Option 6: Dock-Style Navigation (macOS-inspired)
'use client';

import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { useState } from 'react';

export default function DockNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { label: 'Home', icon: Home, href: '#', color: 'text-slate-400' },
    { label: 'About', icon: User, href: '#about', color: 'text-teal-400' },
    { label: 'Experience', icon: Briefcase, href: '#experience', color: 'text-cyan-400' },
    { label: 'Projects', icon: FolderGit2, href: '#projects', color: 'text-blue-400' },
    { label: 'Contact', icon: Mail, href: '#contact', color: 'text-purple-400' },
  ];

  return (
    <nav className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-end gap-2 px-4 py-3 bg-slate-900/60 backdrop-blur-2xl rounded-2xl border border-slate-700/40 shadow-2xl"
      >
        {navItems.map((item, index) => {
          const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 3;
          const scale = hoveredIndex !== null ? 1 + (3 - distance) * 0.15 : 1;
          
          return (
            <motion.a
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ 
                scale,
                y: hoveredIndex === index ? -8 : 0
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group relative"
            >
              {/* Icon container */}
              <div className={`w-12 h-12 rounded-xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/40 flex items-center justify-center ${item.color} hover:shadow-lg transition-shadow`}>
                <item.icon size={22} />
              </div>

              {/* Label tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800/90 backdrop-blur-md rounded-lg text-xs text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {item.label}
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </motion.a>
          );
        })}
      </motion.div>
    </nav>
  );
}
