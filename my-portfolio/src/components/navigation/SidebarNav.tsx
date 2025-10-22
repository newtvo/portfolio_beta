// Option 1: Sidebar Navigation (Vertical)
'use client';

import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';

export default function SidebarNav() {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  return (
    <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
      {navItems.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.href}
          className="group relative flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-slate-800/40 backdrop-blur-md border border-slate-700/40 flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
            <item.icon size={20} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-3 py-1 bg-slate-800/90 backdrop-blur-md border border-slate-700/40 rounded-lg text-sm text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {item.label}
          </div>

          {/* Number indicator */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-teal-400/20 border border-teal-400/40 flex items-center justify-center text-xs text-teal-300 font-mono">
            {index}
          </span>
        </motion.a>
      ))}
    </nav>
  );
}
