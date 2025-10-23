'use client';

import React from 'react';
import GlassmorphismNav from '@/components/navigation/ScrollAwareNav';
import MobileMenu from '@/components/navigation/MobileMenu';
import SmoothScrollHandler from '@/components/SmoothScrollHandler';
//import HeroSection from '@/components/sections/HeroSection';
//import HeroSection from '@/components/sections/HeroSection_Magnetic';
// Current
//import HeroSection from '@/components/sections/HeroSection';

// Try Magnetic
//import HeroSection from '@/components/sections/HeroSection_Magnetic';

// Try Bento (My recommendation!)
//import HeroSection from '@/components/sections/HeroSection_Bento';

// Try Parallax
import HeroSection from '@/components/sections/HeroSection_Parallax';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Portfolio() {
  return (
    <>
      {/* Smooth scroll handler for anchor links */}
      <SmoothScrollHandler />
      
      <main 
        className="min-h-screen transition-colors duration-300" 
        style={{ 
          color: '#7BBDE8',
          background: 'linear-gradient(to bottom, #000B1A 0%, #001D39 15%, #002447 30%, #003A5C 50%, #004D70 70%, #005F84 85%, #006F94 100%)',
          scrollBehavior: 'auto' // Let spring physics handle smoothness
        }}
      >
        {/* Navigation Bar */}
        <GlassmorphismNav />

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Hero Section */}
        <HeroSection />

        {/* Other sections with smooth transitions */}
        <div className="relative" style={{ willChange: 'transform' }}>
          {/* About Section */}
          <AboutSection />

          {/* Skills Section with 3D Visualization */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Contact Section */}
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-sm" style={{ borderTop: '1px solid rgba(78, 142, 162, 0.2)', color: 'rgba(189, 216, 233, 0.7)' }}>
          <p>© {new Date().getFullYear()} Nhut Vo — Built with Next.js, Tailwind, and Framer Motion</p>
        </footer>
      </main>
    </>
  );
}
