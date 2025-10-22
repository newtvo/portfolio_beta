/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-teal-300">About Me</h2>
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group w-full md:w-[280px] flex-shrink-0"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-teal-400/30 bg-slate-800/30 backdrop-blur-sm">
            {/* Profile image */}
            <Image
              src="/profile.jpeg"
              alt="Minh Nhut Vo"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 280px"
              priority
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </div>
          {/* Decorative border animation */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 flex-1"
        >
          <p className="text-slate-400 leading-relaxed">
            I'm a software developer based in Toronto, ON, passionate about building scalable, elegant systems. 
            With experience in <span className="text-teal-300 font-medium">C#</span>, <span className="text-teal-300 font-medium">Python</span>, and cloud technologies like <span className="text-teal-300 font-medium">Azure</span>, I enjoy crafting clean and efficient solutions.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Currently working as an <span className="text-teal-300 font-medium">Application Developer II</span> at <span className="text-teal-300 font-medium">First National Financial LP</span>, where I build 
            web applications and develop AI-powered OCR tools for processing insurance documents.
          </p>
          <p className="text-slate-400 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying Toronto's vibrant tech community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
