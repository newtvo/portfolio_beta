'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button - Modern Design */}
      <motion.button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-teal-500/20 text-teal-300 hover:border-teal-400/40 shadow-lg shadow-teal-500/10 transition-all duration-300"
        aria-label="Toggle menu"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={mobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay - Modern Sleek Design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Enhanced Backdrop with Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-0 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-2xl z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Modern Mobile Menu Panel */}
            <motion.nav
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300,
                opacity: { duration: 0.2 }
              }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl border-l border-teal-500/20 shadow-2xl shadow-teal-500/5 z-40"
            >
              {/* Navigation Links */}
              <ul className="flex flex-col gap-2 p-6 mt-20">
                {[
                  { href: '#about', number: '01', label: 'About', delay: 0.15 },
                  { href: '#experience', number: '02', label: 'Experience', delay: 0.2 },
                  { href: '#projects', number: '03', label: 'Projects', delay: 0.25 },
                  { href: '#contact', number: '04', label: 'Contact', delay: 0.3 }
                ].map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: item.delay, type: 'spring', stiffness: 300, damping: 24 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover Effect Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      />
                      
                      {/* Number Badge */}
                      <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-400/30 font-mono text-xs text-teal-300 group-hover:border-teal-400/60 transition-colors duration-300">
                        {item.number}
                      </span>
                      
                      {/* Label */}
                      <span className="relative z-10 text-lg font-medium text-slate-300 group-hover:text-teal-300 transition-colors duration-300">
                        {item.label}
                      </span>
                      
                      {/* Arrow Indicator */}
                      <motion.svg
                        className="relative z-10 w-5 h-5 ml-auto text-slate-600 group-hover:text-teal-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ x: -5, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="absolute bottom-0 left-0 right-0 p-8 border-t border-slate-700/30 bg-slate-900/50 backdrop-blur-xl"
              >
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4 font-medium">Connect</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/newtvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-teal-300 hover:border-teal-500/30 hover:bg-slate-800/80 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/vo-nhut/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-teal-300 hover:border-teal-500/30 hover:bg-slate-800/80 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
