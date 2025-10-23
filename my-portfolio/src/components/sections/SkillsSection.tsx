'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Cloud, 
  Database, 
  Layers, 
  Sparkles,
  Terminal,
  Zap,
  Wrench,
  GitBranch,
  Box,
  Globe,
  Server
} from 'lucide-react';

// Category types
type Category = 'all' | 'languages' | 'frameworks' | 'cloud' | 'tools';

interface Skill {
  name: string;
  category: Category[];
  icon: React.ReactNode;
  level: number; // 1-100
  color: string;
  experience: string;
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Languages
    { name: 'C#', category: ['all', 'languages'], icon: <Code2 size={20} />, level: 95, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'TypeScript', category: ['all', 'languages'], icon: <Code2 size={20} />, level: 90, color: '#4E8EA2', experience: 'Production Ready' },
    { name: 'Python', category: ['all', 'languages'], icon: <Code2 size={20} />, level: 85, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'JavaScript', category: ['all', 'languages'], icon: <Code2 size={20} />, level: 88, color: '#4E8EA2', experience: 'Production Ready' },
    { name: 'SQL', category: ['all', 'languages'], icon: <Database size={20} />, level: 90, color: '#7BBDE8', experience: 'Production Ready' },

    // Frameworks
    { name: 'ASP.NET Core', category: ['all', 'frameworks'], icon: <Layers size={20} />, level: 93, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'React', category: ['all', 'frameworks'], icon: <Layers size={20} />, level: 87, color: '#4E8EA2', experience: 'Production Ready' },
    { name: 'Next.js', category: ['all', 'frameworks'], icon: <Layers size={20} />, level: 85, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'Entity Framework', category: ['all', 'frameworks'], icon: <Database size={20} />, level: 90, color: '#4E8EA2', experience: 'Production Ready' },
    { name: '.NET Framework', category: ['all', 'frameworks'], icon: <Layers size={20} />, level: 88, color: '#7BBDE8', experience: 'Production Ready' },

    // Cloud & DevOps
    { name: 'Azure', category: ['all', 'cloud'], icon: <Cloud size={20} />, level: 90, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'Azure Functions', category: ['all', 'cloud'], icon: <Zap size={20} />, level: 85, color: '#4E8EA2', experience: 'Production Ready' },
    { name: 'Azure DevOps', category: ['all', 'cloud'], icon: <GitBranch size={20} />, level: 88, color: '#7BBDE8', experience: 'Production Ready' },
    { name: 'Azure AI', category: ['all', 'cloud'], icon: <Sparkles size={20} />, level: 80, color: '#4E8EA2', experience: 'Actively Using' },
    { name: 'Azure Service Bus', category: ['all', 'cloud'], icon: <Server size={20} />, level: 82, color: '#7BBDE8', experience: 'Production Ready' },

    // Tools
    { name: 'Git', category: ['all', 'tools'], icon: <GitBranch size={20} />, level: 92, color: '#7BBDE8', experience: 'Daily Use' },
    { name: 'Visual Studio', category: ['all', 'tools'], icon: <Wrench size={20} />, level: 95, color: '#4E8EA2', experience: 'Daily Use' },
    { name: 'VS Code', category: ['all', 'tools'], icon: <Wrench size={20} />, level: 93, color: '#7BBDE8', experience: 'Daily Use' },
    { name: 'Docker', category: ['all', 'tools'], icon: <Box size={20} />, level: 75, color: '#4E8EA2', experience: 'Actively Learning' },
    { name: 'Postman', category: ['all', 'tools'], icon: <Globe size={20} />, level: 88, color: '#7BBDE8', experience: 'Daily Use' },
  ];

  const categories = [
    { id: 'all' as Category, label: 'All Skills', icon: <Sparkles size={18} /> },
    { id: 'languages' as Category, label: 'Languages', icon: <Code2 size={18} /> },
    { id: 'frameworks' as Category, label: 'Frameworks', icon: <Layers size={18} /> },
    { id: 'cloud' as Category, label: 'Cloud & DevOps', icon: <Cloud size={18} /> },
    { id: 'tools' as Category, label: 'Tools', icon: <Terminal size={18} /> },
  ];

  const filteredSkills = skills.filter(skill => skill.category.includes(activeCategory));

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden" 
      style={{ 
        background: 'transparent'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(123, 189, 232, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(78, 142, 162, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: 'rgba(123, 189, 232, 0.1)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <Sparkles size={16} style={{ color: '#7BBDE8' }} />
            <span className="text-sm font-medium" style={{ color: '#7BBDE8' }}>
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#BDD8E9' }}>
            Skills & Technologies
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
            My technical expertise across languages, frameworks, cloud platforms, and development tools
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
              style={{
                background: activeCategory === category.id 
                  ? 'rgba(123, 189, 232, 0.2)' 
                  : 'rgba(0, 29, 57, 0.3)',
                border: activeCategory === category.id 
                  ? '1px solid rgba(123, 189, 232, 0.4)' 
                  : '1px solid rgba(123, 189, 232, 0.2)',
                backdropFilter: 'blur(10px)',
                color: activeCategory === category.id ? '#7BBDE8' : 'rgba(189, 216, 233, 0.7)',
              }}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Tag Cloud - Flowing Pills */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                  layout: { duration: 0.3 },
                }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group cursor-pointer"
              >
                {/* Skill Pill */}
                <div
                  className="flex items-center gap-2 px-5 py-3 rounded-full backdrop-blur-xl transition-all duration-300"
                  style={{
                    background: hoveredSkill === skill.name 
                      ? `${skill.color}25` 
                      : 'rgba(0, 29, 57, 0.3)',
                    border: `1px solid ${hoveredSkill === skill.name ? `${skill.color}60` : 'rgba(123, 189, 232, 0.2)'}`,
                    boxShadow: hoveredSkill === skill.name 
                      ? `0 0 20px ${skill.color}30, 0 4px 15px rgba(0, 0, 0, 0.2)` 
                      : 'none',
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: hoveredSkill === skill.name ? 360 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ color: hoveredSkill === skill.name ? skill.color : '#7BBDE8' }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Name */}
                  <span
                    className="font-semibold text-sm whitespace-nowrap"
                    style={{ 
                      color: hoveredSkill === skill.name ? skill.color : '#BDD8E9' 
                    }}
                  >
                    {skill.name}
                  </span>

                  {/* Status Badge (shows on hover) */}
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-1.5 ml-1 pl-2 border-l"
                        style={{ borderColor: `${skill.color}40` }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: skill.color }}
                        />
                        <span 
                          className="text-xs font-medium whitespace-nowrap"
                          style={{ color: skill.color }}
                        >
                          {skill.experience}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Languages', count: skills.filter(s => s.category.includes('languages')).length },
            { label: 'Frameworks', count: skills.filter(s => s.category.includes('frameworks')).length },
            { label: 'Cloud & DevOps', count: skills.filter(s => s.category.includes('cloud')).length },
            { label: 'Tools', count: skills.filter(s => s.category.includes('tools')).length },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl backdrop-blur-xl text-center"
              style={{
                background: 'rgba(0, 29, 57, 0.3)',
                border: '1px solid rgba(123, 189, 232, 0.2)',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: 'spring' }}
                className="text-4xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #7BBDE8 0%, #4E8EA2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.count}
              </motion.div>
              <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
