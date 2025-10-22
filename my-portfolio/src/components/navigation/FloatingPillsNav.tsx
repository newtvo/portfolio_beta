// Option 5: Floating Pills
'use client';

import { motion } from 'framer-motion';

export default function FloatingPillsNav() {
  const navItems = [
    { label: 'About', href: '#about', number: '01', color: 'from-teal-400/20 to-teal-600/20' },
    { label: 'Experience', href: '#experience', number: '02', color: 'from-cyan-400/20 to-cyan-600/20' },
    { label: 'Projects', href: '#projects', number: '03', color: 'from-blue-400/20 to-blue-600/20' },
    { label: 'Contact', href: '#contact', number: '04', color: 'from-purple-400/20 to-purple-600/20' },
  ];

  return (
    <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 gap-3">
      {navItems.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: 'spring' }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            transition: { type: 'spring', stiffness: 400, damping: 10 }
          }}
          className="group relative"
        >
          {/* Floating pill */}
          <div className={`relative px-6 py-3 rounded-full bg-gradient-to-r ${item.color} backdrop-blur-xl border border-slate-700/30 shadow-lg hover:shadow-xl transition-shadow overflow-hidden`}>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative flex items-center gap-2">
              <span className="font-mono text-xs text-teal-400 font-semibold">
                {item.number}
              </span>
              <span className="text-sm font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                {item.label}
              </span>
            </div>
          </div>

          {/* Bottom glow on hover */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-teal-400/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
      ))}
    </nav>
  );
}
