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
        className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Text container with glass morphism */}
      <div className="relative backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-2xl px-8 py-6 shadow-2xl">
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          {/* Split text into parts for gradient effects */}
          {display.split('|').map((part, index) => (
            <span key={index}>
              {index === 0 ? (
                // First part - standard gradient
                <span className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent">
                  {part}
                </span>
              ) : (
                <>
                  <span className="text-slate-500 mx-2">|</span>
                  {/* Second part - highlight with teal gradient */}
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold">
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
              background: 'linear-gradient(180deg, #2dd4bf 0%, #22d3ee 100%)',
              boxShadow: '0 0 10px rgba(45, 212, 191, 0.5)'
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
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-teal-400/40 rounded-tl-lg" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/40 rounded-br-lg" />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-4 text-teal-300"
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
            className="flex items-center gap-2 border border-slate-600 bg-slate-800/30 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-800/40 focus:outline-none"
          >
            <Github size={18} className="text-slate-300" /> GitHub
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/vo-nhut/" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-slate-600 bg-slate-800/30 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-800/40 focus:outline-none"
          >
            <Linkedin size={18} className="text-slate-300" /> LinkedIn
          </Button>
        </a>
      </div>
    </section>
  );
}
