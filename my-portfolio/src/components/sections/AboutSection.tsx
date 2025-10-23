/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Coffee, Rocket, Award, MapPin, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { 
      icon: Briefcase, 
      value: '3+', 
      label: 'Years Experience',
      gradient: 'from-blue-500 to-cyan-500' 
    },
    { 
      icon: Rocket, 
      value: '15+', 
      label: 'GitHub Repos',
      gradient: 'from-purple-500 to-pink-500' 
    },
    { 
      icon: Code2, 
      value: '15+', 
      label: 'Technologies',
      gradient: 'from-orange-500 to-red-500' 
    },
    { 
      icon: Coffee, 
      value: '∞', 
      label: 'Coffee Consumed',
      gradient: 'from-green-500 to-teal-500' 
    },
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Current Role',
      description: 'Application Developer II at First National Financial LP',
      color: '#7BBDE8'
    },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: '#7BBDE8' }}>
          About Me
        </h2>
        <p className="text-lg" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
          Crafting elegant solutions to complex problems
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {/* Profile Image Card - Large */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden backdrop-blur-xl"
          style={{
            background: 'rgba(0, 29, 57, 0.3)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/profile.jpeg"
              alt="Nhut Vo"
              fill
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            
            {/* Gradient Overlay on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(to top, rgba(0, 29, 57, 0.8) 0%, transparent 50%)',
              }}
            />

            {/* Name Badge on Hover */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <h3 
                className="text-2xl font-bold mb-1"
                style={{
                  color: '#FFFFFF',
                }}
              >
                Nhut Vo
              </h3>
              <p 
                className="text-sm font-medium" 
                style={{ 
                  color: '#BDD8E9',
                }}
              >
                Full-Stack Developer
              </p>
            </motion.div>
          </div>

          {/* Decorative glow border */}
          <div 
            className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 blur-xl"
            style={{ 
              background: 'linear-gradient(135deg, #4E8EA2, #7BBDE8)',
            }}
          />
        </motion.div>

        {/* Stats Cards */}
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden group"
              style={{
                background: 'rgba(0, 29, 57, 0.3)',
                border: '1px solid rgba(123, 189, 232, 0.2)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <Icon size={24} style={{ color: '#7BBDE8' }} className="mb-3" />
                <p className="text-3xl font-bold mb-1" style={{ color: '#BDD8E9' }}>
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Bio Card - Spans 2 columns */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 p-6 rounded-2xl backdrop-blur-xl"
          style={{
            background: 'rgba(0, 29, 57, 0.3)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: '#7BBDE8' }}>
            My Story
          </h3>
          <p className="leading-relaxed text-sm mb-3" style={{ color: 'rgba(189, 216, 233, 0.8)' }}>
            I'm a software developer based in Toronto, passionate about building scalable, elegant systems. 
            With expertise in <span className="font-semibold" style={{ color: '#7BBDE8' }}>C#</span>, <span className="font-semibold" style={{ color: '#7BBDE8' }}>Python</span>, and cloud technologies like <span className="font-semibold" style={{ color: '#7BBDE8' }}>Azure</span>, I craft clean and efficient solutions.
          </p>
          <p className="leading-relaxed text-sm" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
            or enjoying Toronto's vibrant tech community.
          </p>
        </motion.div>

        {/* Current Role Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-6 rounded-2xl backdrop-blur-xl"
          style={{
            background: 'rgba(0, 29, 57, 0.3)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-xl flex-shrink-0"
              style={{
                background: 'rgba(123, 189, 232, 0.1)',
                border: '1px solid rgba(123, 189, 232, 0.2)'
              }}
            >
              <Award size={24} style={{ color: '#7BBDE8' }} />
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: '#BDD8E9' }}>
                Current Role
              </h4>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
                Application Developer II at First National Financial LP
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
