'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';

/**
 * OPTION 1: MAGNETIC HERO with Cursor-Following Text
 * 2025 Trend: Interactive magnetic elements that follow cursor
 * Inspired by: Apple, Awwwards winners, Linear.app
 */

export default function HeroSectionMagnetic() {
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  // Transform for magnetic effect
  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen text-center px-8 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #7BBDE8 0%, transparent 70%)',
          x: useTransform(x, (value) => value * 0.05),
          y: useTransform(y, (value) => value * 0.05),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #4E8EA2 0%, transparent 70%)',
          x: useTransform(x, (value) => value * -0.05),
          y: useTransform(y, (value) => value * -0.05),
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Main content with magnetic effect */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
        }}
        className="relative z-10"
      >
        {/* Greeting text */}
        <motion.p
          className="text-sm md:text-base font-mono mb-4 tracking-wider"
          style={{ color: '#4E8EA2' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is
        </motion.p>

        {/* Name with magnetic effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span 
            className="inline-block"
            style={{ 
              background: 'linear-gradient(135deg, #7BBDE8 0%, #BDD8E9 50%, #7BBDE8 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Nhut Vo
          </span>
          
          {/* Floating accent */}
          <motion.div
            className="absolute -right-4 -top-4 w-3 h-3 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, #7BBDE8, #4E8EA2)',
              boxShadow: '0 0 20px rgba(123, 189, 232, 0.6)'
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6 max-w-3xl"
          style={{ color: 'rgba(189, 216, 233, 0.9)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I build{' '}
          <span 
            className="relative inline-block"
            style={{ color: '#7BBDE8' }}
          >
            scalable solutions
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5"
              style={{ background: 'linear-gradient(to right, #4E8EA2, #7BBDE8)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
          {' '}that drive business value
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: 'rgba(189, 216, 233, 0.7)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Full-Stack Developer specializing in .NET/C# and Azure Cloud. 
          Currently crafting elegant solutions at First National Financial.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl font-semibold text-white relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(135deg, #4E8EA2, #6EA2B3)',
              boxShadow: '0 4px 20px rgba(78, 142, 162, 0.3)'
            }}
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #6EA2B3, #7BBDE8)' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="https://github.com/newtvo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-4 rounded-xl backdrop-blur-sm"
              style={{ 
                borderColor: 'rgba(123, 189, 232, 0.3)',
                color: '#BDD8E9',
                backgroundColor: 'rgba(0, 29, 57, 0.3)'
              }}
            >
              <Github size={20} /> GitHub
            </Button>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vo-nhut/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-4 rounded-xl backdrop-blur-sm"
              style={{ 
                borderColor: 'rgba(123, 189, 232, 0.3)',
                color: '#BDD8E9',
                backgroundColor: 'rgba(0, 29, 57, 0.3)'
              }}
            >
              <Linkedin size={20} /> LinkedIn
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono" style={{ color: '#4E8EA2' }}>Scroll Down</span>
          <ArrowDown size={20} style={{ color: '#4E8EA2' }} className="group-hover:translate-y-1 transition-transform" />
        </motion.a>
      </motion.div>
    </section>
  );
}
