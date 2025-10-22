'use client';

import React from 'react';
import GlassmorphismNav from '@/components/navigation/ScrollAwareNav';
import MobileMenu from '@/components/navigation/MobileMenu';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 transition-colors duration-300 scroll-smooth">
      {/* Navigation Bar */}
      <GlassmorphismNav />

      {/* Mobile Menu */}
      <MobileMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Nhut Vo — Built with Next.js, Tailwind, and Framer Motion</p>
      </footer>
    </main>
  );
}
