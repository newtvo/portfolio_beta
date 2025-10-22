// Enhanced Sidebar Navigation with Dock-Style Magnetic Effect
'use client';

import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { useState } from 'react';

export default function SidebarNavEnhanced() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#', color: 'hover:text-slate-300' },
    { id: 'about', label: 'About', icon: User, href: '#about', color: 'hover:text-teal-400' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience', color: 'hover:text-cyan-400' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects', color: 'hover:text-blue-400' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact', color: 'hover:text-purple-400' },
  ];

  return (
    <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {navItems.map((item, index) => {
        // Calculate distance from hovered item for magnetic effect
        const distance = hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 4;
        const scale = hoveredIndex !== null ? 1 + (4 - distance) * 0.12 : 1;
        const isHovered = hoveredIndex === index;
        
        return (
          <motion.a
            key={item.id}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex items-center justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale,
            }}
            transition={{ 
              delay: index * 0.1,
              scale: { type: 'spring', stiffness: 400, damping: 25 }
            }}
            whileHover={{ x: -4 }}
          >
            {/* Tooltip - appears on hover */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : 10
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="absolute right-full mr-4 px-4 py-2 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-lg text-sm text-slate-200 whitespace-nowrap shadow-lg pointer-events-none"
            >
              {item.label}
              {/* Arrow pointing to icon */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-slate-800/95 border-y-4 border-y-transparent" />
            </motion.div>

            {/* Icon Container with Dock Effect */}
            <motion.div
              animate={{
                width: isHovered ? 56 : 48,
                height: isHovered ? 56 : 48,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`relative rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 flex items-center justify-center text-slate-400 ${item.color} transition-colors duration-300 shadow-lg hover:shadow-xl`}
            >
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <item.icon size={22} />
              </motion.div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-400/0 via-teal-400/10 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Hover indicator line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isHovered ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="absolute right-0 w-1 h-8 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-l-full origin-center"
            />

            {/* Subtle glow behind icon */}
            <div className="absolute inset-0 rounded-xl bg-teal-400/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </motion.a>
        );
      })}

      {/* Decorative connecting line */}
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700/30 to-transparent -z-10" />
    </nav>
  );
}
