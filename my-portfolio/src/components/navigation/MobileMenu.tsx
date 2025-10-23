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
        className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-black/90 backdrop-blur-xl shadow-lg transition-all duration-300"
        style={{ 
          borderColor: 'rgba(78, 142, 162, 0.3)',
          borderWidth: '1px',
          borderStyle: 'solid',
          color: '#BDD8E9',
          boxShadow: '0 4px 6px rgba(78, 142, 162, 0.1)'
        }}
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
              className="md:hidden fixed inset-0 bg-gradient-to-br from-black/98 via-neutral-950/98 to-black/98 backdrop-blur-2xl z-40"
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
              className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-black/95 via-neutral-950/95 to-black/95 backdrop-blur-2xl shadow-2xl z-40"
              style={{
                borderLeft: '1px solid rgba(78, 142, 162, 0.3)',
                boxShadow: '0 0 50px rgba(78, 142, 162, 0.05)'
              }}
            >
              {/* Navigation Links */}
              <ul className="flex flex-col gap-2 p-6 mt-20">
                {[
                  { href: '#about', number: '01', label: 'About', delay: 0.15 },
                  { href: '#skills', number: '02', label: 'Skills', delay: 0.17 },
                  { href: '#experience', number: '03', label: 'Experience', delay: 0.2 },
                  { href: '#projects', number: '04', label: 'Projects', delay: 0.25 },
                  { href: '#contact', number: '05', label: 'Contact', delay: 0.3 }
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
                      className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-neutral-900/50 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover Effect Background */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'linear-gradient(to right, rgba(78, 142, 162, 0.1), rgba(110, 162, 179, 0.1))' }}
                        whileHover={{ scale: 1.02 }}
                      />
                      
                      {/* Number Badge */}
                      <span 
                        className="relative z-10 flex items-center justify-center w-8 h-8 rounded-lg font-mono text-xs transition-colors duration-300"
                        style={{
                          background: 'linear-gradient(to bottom right, rgba(78, 142, 162, 0.2), rgba(110, 162, 179, 0.2))',
                          borderColor: 'rgba(78, 142, 162, 0.4)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          color: '#BDD8E9'
                        }}
                      >
                        {item.number}
                      </span>
                      
                      {/* Label */}
                      <span className="relative z-10 text-lg font-medium transition-colors duration-300" style={{ color: '#7BBDE8' }}>
                        {item.label}
                      </span>
                      
                      {/* Arrow Indicator */}
                      <motion.svg
                        className="relative z-10 w-5 h-5 ml-auto"
                        style={{ color: '#4E8EA2' }}
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
                className="absolute bottom-0 left-0 right-0 p-8 bg-black/50 backdrop-blur-xl"
                style={{ borderTop: '1px solid rgba(78, 142, 162, 0.3)' }}
              >
                <p className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: '#7BBDE8' }}>Connect</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/newtvo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900/50 transition-all duration-300"
                    style={{
                      borderColor: 'rgba(78, 142, 162, 0.5)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: '#BDD8E9'
                    }}
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900/50 transition-all duration-300"
                    style={{
                      borderColor: 'rgba(78, 142, 162, 0.5)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      color: '#BDD8E9'
                    }}
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
