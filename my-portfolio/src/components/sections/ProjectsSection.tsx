'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Cat, Shield, Zap, Home } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Automated Underwriting Engine',
      description: 'AI-powered loan decision engine with real-time income/debt analysis, credit evaluation, and automated approve/deny decisions with compliance checks.',
      tags: ['C#', '.NET', 'Azure', 'Rules Engine', 'SQL'],
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      size: 'large', // spans 2 columns
      github: 'https://github.com/newtvo/underwriting-engine',
      demo: '#',
      image: '/projects/underwriting.jpg',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio with parallax effects, terminal CLI, and glassmorphic design.',
      tags: ['Next.js', 'TypeScript', 'Framer Motion'],
      icon: Sparkles,
      gradient: 'from-purple-500 to-pink-500',
      size: 'medium',
      github: 'https://github.com/newtvo/portfolio_beta',
      demo: '#',
      image: '/projects/portfolio.jpg',
    },
    {
      id: 3,
      title: 'Property Comparison Platform',
      description: 'HouseSigma-style real estate comparison tool with side-by-side property analysis, price trends, neighborhood scores, and mortgage integration.',
      tags: ['Next.js', 'TypeScript', 'Real Estate API', 'Charts'],
      icon: Home,
      gradient: 'from-indigo-500 to-purple-500',
      size: 'medium',
      github: 'https://github.com/newtvo/property-comparison',
      demo: '#',
      image: '/projects/property-compare.jpg',
    },
    {
      id: 4,
      title: 'Mortgage Fraud Detection System',
      description: 'ML-powered fraud detection analyzing loan applications, documents, and patterns. Identifies suspicious income claims and document anomalies.',
      tags: ['Python', 'Azure AI', 'ML', 'OCR', 'Anomaly Detection'],
      icon: Shield,
      gradient: 'from-red-500 to-rose-500',
      size: 'small',
      github: 'https://github.com/newtvo/fraud-detection',
      demo: '#',
    },
    {
      id: 5,
      title: 'Cat Breeds Showcase',
      description: 'Interactive web app showcasing 60+ cat breeds with beautiful images, detailed info, and search functionality using The Cat API.',
      tags: ['Next.js', 'TypeScript', 'REST API', 'Tailwind'],
      icon: Cat,
      gradient: 'from-orange-500 to-amber-500',
      size: 'medium',
      github: 'https://github.com/newtvo/cat-breeds-showcase',
      demo: '#',
      image: '/projects/cat-breeds.jpg',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#7BBDE8' }}>
          Featured Projects
        </h2>
        <p className="text-lg" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
          Building scalable solutions with modern technologies
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const colSpan = project.size === 'large' ? 'md:col-span-2' : project.size === 'medium' ? 'md:col-span-2' : 'md:col-span-2';
          const rowSpan = project.size === 'large' ? 'md:row-span-2' : 'md:row-span-1';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${colSpan} ${rowSpan} group relative rounded-3xl overflow-hidden backdrop-blur-xl cursor-pointer`}
              style={{
                background: 'rgba(0, 29, 57, 0.3)',
                border: '1px solid rgba(123, 189, 232, 0.2)',
              }}
            >
              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(123, 189, 232, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(123, 189, 232, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="p-3 rounded-2xl backdrop-blur-sm"
                      style={{
                        background: 'rgba(123, 189, 232, 0.1)',
                        border: '1px solid rgba(123, 189, 232, 0.2)'
                      }}
                    >
                      <Icon size={24} style={{ color: '#7BBDE8' }} />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-xl backdrop-blur-sm"
                        style={{
                          background: 'rgba(123, 189, 232, 0.1)',
                          border: '1px solid rgba(123, 189, 232, 0.3)'
                        }}
                      >
                        <Github size={18} style={{ color: '#BDD8E9' }} />
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-xl backdrop-blur-sm"
                        style={{
                          background: 'rgba(123, 189, 232, 0.1)',
                          border: '1px solid rgba(123, 189, 232, 0.3)'
                        }}
                      >
                        <ExternalLink size={18} style={{ color: '#BDD8E9' }} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: '#BDD8E9' }}>
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-4" 
                    style={{ color: 'rgba(189, 216, 233, 0.7)' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg backdrop-blur-sm"
                      style={{
                        background: 'rgba(123, 189, 232, 0.15)',
                        color: '#7BBDE8',
                        border: '1px solid rgba(123, 189, 232, 0.3)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at bottom, rgba(123, 189, 232, 0.2) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <motion.a
          href="https://github.com/newtvo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.2), rgba(110, 162, 179, 0.15))',
            border: '1px solid rgba(123, 189, 232, 0.3)',
            color: '#BDD8E9'
          }}
        >
          <Github size={20} />
          View All Projects on GitHub
          <ExternalLink size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
