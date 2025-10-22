'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-teal-300">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((project) => (
          <motion.div
            key={project}
            className="p-6 rounded-2xl bg-slate-800/30 border border-slate-600/50 backdrop-blur-md shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none transform-gpu perspective-1000 hover:scale-[1.02] transition-all duration-300 ease-out"
            style={{
              transform: 'rotateX(2deg) rotateY(-1deg) translateZ(0)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              background: 'linear-gradient(145deg, rgba(51, 65, 85, 0.35), rgba(30, 41, 59, 0.25))'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-medium mb-2 text-teal-300">Project {project}</h3>
              <p className="text-slate-400 mb-4">
                A modern web app demonstrating my skills in full-stack development.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 border border-slate-600 bg-slate-800/30 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-800/40 focus:outline-none cursor-pointer"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 8px 20px rgba(45, 212, 191, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button 
                    asChild
                    size="sm" 
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-900 font-semibold cursor-pointer shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
