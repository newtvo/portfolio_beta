// Option 4: Split Navigation (Logo + Menu)
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function SplitNav() {
  const navItems = [
    { label: 'About', href: '#about', number: '01' },
    { label: 'Experience', href: '#experience', number: '02' },
    { label: 'Projects', href: '#projects', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">MV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-200">Minh Nhut Vo</span>
              <span className="text-xs text-slate-500">Developer</span>
            </div>
          </motion.div>

          {/* Center: Navigation */}
          <ul className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="group relative px-5 py-2 rounded-lg text-slate-400 hover:text-teal-300 transition-all duration-300 hover:bg-slate-800/50"
                >
                  <span className="font-mono text-xs mr-2 text-teal-400">{item.number}.</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://github.com/newtvo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/40 flex items-center justify-center text-slate-400 hover:text-teal-300 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/vo-nhut/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/40 flex items-center justify-center text-slate-400 hover:text-teal-300 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
