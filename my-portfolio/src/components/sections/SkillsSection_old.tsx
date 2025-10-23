'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { 
  SiSharp, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiMysql,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiGit
} from 'react-icons/si';
import { TbBrandAzure, TbCloudComputing, TbDatabase, TbApi, TbMessageCircle } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { FaMicrosoft } from 'react-icons/fa';

const TerminalSkills = dynamic(
  () => import('@/components/sections/TerminalSkills'),
  { ssr: false }
);

interface Skill {
  name: string;
  category: string;
  level: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  // Languages
  { name: 'C#', category: 'Languages', level: 95, icon: '💎' },
  { name: 'TypeScript', category: 'Languages', level: 85, icon: '📘' },
  { name: 'JavaScript', category: 'Languages', level: 85, icon: '�' },
  { name: 'Python', category: 'Languages', level: 75, icon: '🐍' },
  { name: 'SQL', category: 'Languages', level: 90, icon: '🗄️' },
  
  // Backend
  { name: 'ASP.NET Core', category: 'Backend', level: 95, icon: '�' },
  { name: 'ASP.NET Web API', category: 'Backend', level: 90, icon: '🔷' },
  { name: '.NET Framework', category: 'Backend', level: 90, icon: '⬛' },
  { name: 'Entity Framework', category: 'Backend', level: 90, icon: '�' },
  
  // Frontend
  { name: 'React', category: 'Frontend', level: 85, icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', level: 80, icon: '▲' },
  
  // Database
  { name: 'MSSQL', category: 'Database', level: 90, icon: '�️' },
  { name: 'SQL Server', category: 'Database', level: 90, icon: '💾' },
  { name: 'Azure SQL', category: 'Database', level: 85, icon: '☁️' },
  
  // Cloud & Azure
  { name: 'Azure', category: 'Cloud', level: 85, icon: '☁️' },
  { name: 'Azure Functions', category: 'Cloud', level: 80, icon: '⚡' },
  { name: 'Azure DevOps', category: 'Cloud', level: 85, icon: '🔧' },
  { name: 'Azure AI', category: 'Cloud', level: 75, icon: '🤖' },
  { name: 'Azure Service Bus', category: 'Cloud', level: 85, icon: '📨' },
  
  // Tools
  { name: 'Git', category: 'Tools', level: 90, icon: '📦' },
  { name: 'Visual Studio', category: 'Tools', level: 90, icon: '💜' },
  { name: 'VS Code', category: 'Tools', level: 85, icon: '�' },
];

const categories = ['All', 'Languages', 'Backend', 'Frontend', 'Database', 'Cloud', 'Tools'];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState<'terminal' | 'grid'>('terminal');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="max-w-6xl mx-auto py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#7BBDE8' }}>
          Skills & Technologies
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#BDD8E9' }}>
          Technologies I work with and love
        </p>
      </motion.div>

      {/* View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex justify-center gap-4 mb-8 flex-wrap"
      >
        <button
          onClick={() => setView('terminal')}
          className="px-6 py-2 rounded-lg font-medium transition-all duration-200 font-mono"
          style={{
            backgroundColor: view === 'terminal' ? 'rgba(78, 142, 162, 0.4)' : 'rgba(78, 142, 162, 0.1)',
            color: view === 'terminal' ? '#ffffff' : '#BDD8E9',
            border: view === 'terminal' ? '2px solid rgba(78, 142, 162, 0.8)' : '2px solid transparent',
          }}
        >
          💻 Terminal View
        </button>
        <button
          onClick={() => setView('grid')}
          className="px-6 py-2 rounded-lg font-medium transition-all duration-200"
          style={{
            backgroundColor: view === 'grid' ? 'rgba(78, 142, 162, 0.4)' : 'rgba(78, 142, 162, 0.1)',
            color: view === 'grid' ? '#ffffff' : '#BDD8E9',
            border: view === 'grid' ? '2px solid rgba(78, 142, 162, 0.8)' : '2px solid transparent',
          }}
        >
          📋 Grid View
        </button>
      </motion.div>

      {/* Category Filter */}
      {view === 'grid' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: selectedCategory === category 
                  ? 'rgba(78, 142, 162, 0.3)' 
                  : 'rgba(78, 142, 162, 0.1)',
                color: selectedCategory === category ? '#ffffff' : '#BDD8E9',
                border: selectedCategory === category 
                  ? '1px solid rgba(78, 142, 162, 0.6)' 
                  : '1px solid transparent',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      {/* Terminal View */}
      {view === 'terminal' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalSkills />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-6 text-sm font-mono"
            style={{ color: '#BDD8E9', opacity: 0.7 }}
          >
            💡 Try typing: <span style={{ color: '#4E8EA2' }}>help</span>, <span style={{ color: '#4E8EA2' }}>clear</span>, <span style={{ color: '#4E8EA2' }}>echo hello</span>, <span style={{ color: '#4E8EA2' }}>date</span>, <span style={{ color: '#4E8EA2' }}>pwd</span>
          </motion.p>
        </motion.div>
      )}

      {/* Grid View */}
      {view === 'grid' && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 30px rgba(78, 142, 162, 0.3)',
              }}
              className="p-6 rounded-xl backdrop-blur-sm relative overflow-hidden group"
              style={{
                backgroundColor: 'rgba(0, 29, 57, 0.3)',
                border: '1px solid rgba(78, 142, 162, 0.3)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(78, 142, 162, 0.1), rgba(110, 162, 179, 0.1))',
                }}
              />
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold mb-2" style={{ color: '#7BBDE8' }}>
                  {skill.name}
                </h3>
                <p className="text-xs mb-3" style={{ color: '#BDD8E9', opacity: 0.7 }}>
                  {skill.category}
                </p>
                
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'rgba(78, 142, 162, 0.2)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #4E8EA2, #6EA2B3)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
