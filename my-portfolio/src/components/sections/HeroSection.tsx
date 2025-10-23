'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

// Modern typing component with gradient text and sleek cursor
function TypingText({ text, speed = 35 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplay('');
    setIsComplete(false);
    let i = 0;
    const id = setInterval(() => {
      setDisplay((p) => p + text.charAt(i));
      i += 1;
      if (i >= text.length) {
        clearInterval(id);
        setIsComplete(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <motion.div
      className="relative mb-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* Gradient glow background effect */}
      <motion.div
        className="absolute -inset-2 rounded-2xl blur-xl"
        style={{
          background: 'linear-gradient(to right, rgba(78, 142, 162, 0.3), rgba(73, 118, 159, 0.3), rgba(78, 142, 162, 0.3))'
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Text container with glass morphism */}
      <div className="relative backdrop-blur-sm bg-neutral-900/50 rounded-2xl px-8 py-6 shadow-2xl" style={{ borderColor: '#4E8EA2', borderWidth: '1px', borderStyle: 'solid' }}>
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          {/* Split text into parts for gradient effects */}
          {display.split('|').map((part, index) => (
            <span key={index}>
              {index === 0 ? (
                // First part - standard gradient
                <span style={{ 
                  background: 'linear-gradient(to right, #BDD8E9, #7BBDE8, #BDD8E9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {part}
                </span>
              ) : (
                <>
                  <span style={{ color: '#4E8EA2' }} className="mx-2">|</span>
                  {/* Second part - highlight with ocean gradient */}
                  <span style={{ 
                    background: 'linear-gradient(to right, #7BBDE8, #6EA2B3, #7BBDE8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 600
                  }}>
                    {part}
                  </span>
                </>
              )}
            </span>
          ))}
          
          {/* Modern sleek cursor */}
          <motion.span
            aria-hidden="true"
            className="inline-block ml-1 w-[3px] h-6 rounded-full align-middle"
            style={{
              background: 'linear-gradient(180deg, #4E8EA2 0%, #6EA2B3 100%)',
              boxShadow: '0 0 15px rgba(78, 142, 162, 0.6)'
            }}
            animate={{
              opacity: isComplete ? [1, 0, 1] : 1,
              scaleY: isComplete ? [1, 0.8, 1] : 1,
            }}
            transition={{
              opacity: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' },
              scaleY: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
            }}
          />
        </p>
        
        {/* Subtle decorative corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: '#4E8EA2', opacity: 0.6 }} />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: '#6EA2B3', opacity: 0.6 }} />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-4"
        style={{ color: '#7BBDE8' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nhut Vo
      </motion.h1>
      <TypingText text="  Full-Stack Developer | Building scalable solutions that drive business value" speed={40} />
      <div className="flex gap-4">
        <a href="https://github.com/newtvo" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-neutral-900/30 px-4 py-2 rounded-md hover:bg-neutral-900/50 focus:outline-none"
            style={{ borderColor: '#4E8EA2', color: '#BDD8E9' }}
          >
            <Github size={18} style={{ color: '#BDD8E9' }} /> GitHub
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/vo-nhut/" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-neutral-900/30 px-4 py-2 rounded-md hover:bg-neutral-900/50 focus:outline-none"
            style={{ borderColor: '#4E8EA2', color: '#BDD8E9' }}
          >
            <Linkedin size={18} style={{ color: '#BDD8E9' }} /> LinkedIn
          </Button>
        </a>
      </div>
    </section>
  );
}
