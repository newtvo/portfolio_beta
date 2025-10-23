'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Code2, Sparkles } from 'lucide-react';

/**
 * OPTION 2: BENTO GRID HERO
 * 2025 Trend: Apple-style bento grid layout with interactive cards
 * Inspired by: iOS 18, macOS Sonoma, Linear.app
 */

export default function HeroSectionBento() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="flex items-center justify-center min-h-screen py-20 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full grid grid-cols-12 gap-4 auto-rows-[140px]"
      >
        {/* Main intro card - spans 8 columns, 3 rows */}
        <motion.div
          variants={item}
          className="col-span-12 md:col-span-8 row-span-3 p-8 rounded-3xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.15) 0%, rgba(110, 162, 179, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(123, 189, 232, 0.1) 0%, transparent 70%)',
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <motion.p
                className="text-sm font-mono mb-2"
                style={{ color: '#4E8EA2' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Full-Stack Developer
              </motion.p>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span 
                  style={{ 
                    background: 'linear-gradient(135deg, #7BBDE8 0%, #BDD8E9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Nhut Vo
                </span>
              </h1>
              
              <p className="text-lg md:text-xl max-w-xl" style={{ color: 'rgba(189, 216, 233, 0.8)' }}>
                Building scalable .NET solutions and AI-powered tools that transform business workflows.
              </p>
            </div>

            <div className="flex gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold text-white"
                style={{ 
                  background: 'linear-gradient(135deg, #4E8EA2, #6EA2B3)',
                }}
              >
                Get in Touch
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-semibold backdrop-blur-sm"
                style={{ 
                  color: '#7BBDE8',
                  border: '1px solid rgba(123, 189, 232, 0.3)',
                  backgroundColor: 'rgba(0, 29, 57, 0.3)'
                }}
              >
                View Work
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/newtvo"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 md:col-span-4 row-span-1 p-6 rounded-3xl relative overflow-hidden group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.1) 0%, rgba(110, 162, 179, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.1), transparent)' }}
          />
          <div className="relative z-10 h-full flex items-center gap-3">
            <Github size={32} style={{ color: '#7BBDE8' }} />
            <div>
              <p className="font-semibold" style={{ color: '#BDD8E9' }}>GitHub</p>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>@newtvo</p>
            </div>
          </div>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/vo-nhut/"
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.05, y: -5 }}
          className="col-span-6 md:col-span-4 row-span-1 p-6 rounded-3xl relative overflow-hidden group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.1) 0%, rgba(110, 162, 179, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.1), transparent)' }}
          />
          <div className="relative z-10 h-full flex items-center gap-3">
            <Linkedin size={32} style={{ color: '#7BBDE8' }} />
            <div>
              <p className="font-semibold" style={{ color: '#BDD8E9' }}>LinkedIn</p>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Connect</p>
            </div>
          </div>
        </motion.a>

        {/* Location Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="col-span-6 md:col-span-4 row-span-1 p-6 rounded-3xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.1) 0%, rgba(110, 162, 179, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="h-full flex items-center gap-3">
            <MapPin size={28} style={{ color: '#4E8EA2' }} />
            <div>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Based in</p>
              <p className="font-semibold" style={{ color: '#BDD8E9' }}>Toronto, ON</p>
            </div>
          </div>
        </motion.div>

        {/* Status Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="col-span-6 md:col-span-4 row-span-1 p-6 rounded-3xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.1) 0%, rgba(110, 162, 179, 0.05) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="h-full flex items-center gap-3">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#4E8EA2' }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(78, 142, 162, 0.7)',
                  '0 0 0 8px rgba(78, 142, 162, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Status</p>
              <p className="font-semibold" style={{ color: '#BDD8E9' }}>Available for work</p>
            </div>
          </div>
        </motion.div>

        {/* Skills highlight card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="col-span-12 md:col-span-4 row-span-1 p-6 rounded-3xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.15) 0%, rgba(110, 162, 179, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="h-full flex items-center gap-4">
            <Code2 size={32} style={{ color: '#7BBDE8' }} />
            <div>
              <p className="text-sm mb-1" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Specializing in</p>
              <div className="flex flex-wrap gap-2">
                {['C#', '.NET', 'Azure', 'React'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-lg font-medium"
                    style={{
                      backgroundColor: 'rgba(123, 189, 232, 0.1)',
                      color: '#7BBDE8',
                      border: '1px solid rgba(123, 189, 232, 0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
