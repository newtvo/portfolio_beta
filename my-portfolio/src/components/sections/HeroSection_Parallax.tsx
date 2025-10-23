'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';

/**
 * OPTION 3: PARALLAX LAYERS HERO - Enhanced Smooth Scrolling
 * 2025 Trend: Multi-layer parallax with depth and glassmorphism
 * Inspired by: Apple's product pages, Stripe, Vercel
 */

export default function HeroSectionParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Spring physics for ultra-smooth scrolling - relaxed for better transitions
  const springConfig = {
    stiffness: 60,      // Reduced from 100 for smoother feel
    damping: 25,        // Reduced from 30 for less resistance
    restDelta: 0.001,
    mass: 0.5          // Added mass for more momentum
  };

  // Parallax transforms with smooth easing - reduced range for smoother section transitions
  const y1Raw = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Reduced from 300
  const y2Raw = useTransform(scrollYProgress, [0, 1], [0, 350]);  // Reduced from 500
  const opacityRaw = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);  // Softer fade
  const scaleRaw = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.97, 0.9]);  // Less aggressive scale
  const blurRaw = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 5]);  // Reduced blur intensity

  // Apply spring physics for buttery smooth motion
  const y1 = useSpring(y1Raw, springConfig);
  const y2 = useSpring(y2Raw, springConfig);
  const opacity = useSpring(opacityRaw, springConfig);
  const scale = useSpring(scaleRaw, springConfig);
  const blur = useSpring(blurRaw, springConfig);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers with smooth parallax - instantly visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}  // Fast background fade-in
        style={{ 
          y: y2,
          willChange: 'transform'
        }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient orb 1 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(78, 142, 162, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1] // Custom easing curve
          }}
        />
        
        {/* Gradient orb 2 */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(123, 189, 232, 0.25) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1], // Custom easing curve
            delay: 2
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(123, 189, 232, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(123, 189, 232, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Main content with smooth parallax */}
      <motion.div
        style={{ 
          y: y1, 
          opacity, 
          scale,
          filter: useTransform(blur, (value) => `blur(${value}px)`),
          willChange: 'transform, opacity, filter'
        }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Floating badge - faster entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,  // Faster: was 0.8
            ease: [0.22, 1, 0.36, 1]  // Snappier ease-out
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-xl will-change-transform"
          style={{
            background: 'rgba(78, 142, 162, 0.1)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Terminal size={16} style={{ color: '#7BBDE8' }} />
          </motion.div>
          <span className="text-sm font-medium" style={{ color: '#BDD8E9' }}>
            Open to opportunities
          </span>
        </motion.div>

        {/* Greeting - subtle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-lg md:text-xl mb-3"
          style={{ color: 'rgba(189, 216, 233, 0.6)' }}
        >
          Hi, I'm
        </motion.p>

        {/* Name - HERO FOCAL POINT with Apple-smooth animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] // Apple's signature ease
          }}
          className="text-6xl md:text-8xl mb-6 leading-none relative"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut" // Smooth, Apple-like
            }}
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #BDD8E9 30%, #7BBDE8 60%, #4E8EA2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              display: 'inline-block',
              letterSpacing: '-0.02em',
              fontWeight: 700
            }}
          >
            Nhut Vo
          </motion.span>
          
          {/* Multiple layered glow orbs behind name - Apple smooth timing */}
          <motion.div
            className="absolute inset-0 -z-10 blur-[120px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.65, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1] // Apple ease
            }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(123, 189, 232, 0.8) 0%, rgba(78, 142, 162, 0.4) 50%, transparent 80%)',
            }}
          />
          
          {/* Second glow layer for depth */}
          <motion.div
            className="absolute inset-0 -z-10 blur-[80px]"
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.3, 0.55, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1], // Apple ease
              delay: 0.5
            }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(189, 216, 233, 0.6) 0%, rgba(123, 189, 232, 0.3) 60%, transparent 80%)',
            }}
          />
          
          {/* Third glow layer - subtle white core */}
          <motion.div
            className="absolute inset-0 -z-10 blur-[60px]"
            animate={{
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1], // Apple ease
              delay: 0.3
            }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
            }}
          />
        </motion.h1>

        {/* Role/Title - supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-2xl md:text-4xl font-bold mb-4"
          style={{ 
            color: '#BDD8E9',
            letterSpacing: '-0.01em'
          }}
        >
          Full-Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-lg md:text-xl mb-4 max-w-3xl mx-auto"
          style={{ color: 'rgba(189, 216, 233, 0.7)' }}
        >
          Crafting scalable solutions with .NET, Azure, and modern web technologies
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,   // Faster: was 0.8
            delay: 0.4,      // Faster: was 0.7
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-base md:text-lg mb-10"
          style={{ color: 'rgba(189, 216, 233, 0.6)' }}
        >
          Currently building AI-powered tools at First National Financial
        </motion.p>

        {/* Floating glass cards with faster stagger */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}  // Less movement
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,   // Faster: was 0.8
            delay: 0.5,      // Faster: was 0.9
            ease: [0.22, 1, 0.36, 1]  // Snappier
          }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          {/* Primary CTA */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden will-change-transform"
            style={{ 
              background: 'linear-gradient(135deg, #4E8EA2, #6EA2B3)',
              boxShadow: '0 8px 32px rgba(78, 142, 162, 0.3)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #6EA2B3, #7BBDE8)' }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </motion.a>

          {/* Social links with glass effect */}
          <motion.a
            href="https://github.com/newtvo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-6 py-4 rounded-2xl backdrop-blur-xl flex items-center gap-3 will-change-transform"
            style={{
              background: 'rgba(78, 142, 162, 0.1)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
              color: '#BDD8E9'
            }}
          >
            <Github size={20} />
            <span className="font-medium">GitHub</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vo-nhut/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="px-6 py-4 rounded-2xl backdrop-blur-xl flex items-center gap-3 will-change-transform"
            style={{
              background: 'rgba(78, 142, 162, 0.1)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
              color: '#BDD8E9'
            }}
          >
            <Linkedin size={20} />
            <span className="font-medium">LinkedIn</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Faster scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 0.8,      // Much faster: was 1.8
          duration: 0.5,   // Faster: was 0.8
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1]
          }}
          className="flex flex-col items-center gap-2"
        >
          <div 
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
            style={{ borderColor: 'rgba(123, 189, 232, 0.3)' }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: [0.45, 0, 0.55, 1]
              }}
              className="w-1 h-2 rounded-full"
              style={{ backgroundColor: '#7BBDE8' }}
            />
          </div>
          <span className="text-xs font-mono" style={{ color: 'rgba(189, 216, 233, 0.5)' }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
