'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Send } from 'lucide-react';

export default function ContactSection() {
  const email = 'vo.nhut@outlook.com';

  // Compose-in-Gmail flow
  function handleCompose(e: React.FormEvent) {
    e.preventDefault();
    const to = email;
    const subject = 'Hello 👋';
    const body = 'Say hi!';

    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const opened = window.open(gmailUrl, '_blank');
    if (!opened) {
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto py-24 px-6">
      {/* Header with floating orbs */}
      <div className="text-center mb-16 relative">
        {/* Background orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            background: 'radial-gradient(circle, rgba(123, 189, 232, 0.4) 0%, transparent 70%)',
          }}
        />

        <motion.h2 
          className="text-5xl font-bold mb-4"
          style={{ color: '#7BBDE8' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Build Something
        </motion.h2>
        <motion.p 
          className="text-xl max-w-2xl mx-auto"
          style={{ color: 'rgba(189, 216, 233, 0.8)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Open to new opportunities and collaborations
        </motion.p>
      </div>

      {/* Compact Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-4 mb-12"
      >
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/vo-nhut/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.05 }}
          className="p-4 rounded-xl backdrop-blur-xl relative overflow-hidden group cursor-pointer"
          style={{
            background: 'rgba(0, 29, 57, 0.3)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.15), transparent)' }}
          />
          <Linkedin size={28} style={{ color: '#7BBDE8' }} />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/newtvo"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.05 }}
          className="p-4 rounded-xl backdrop-blur-xl relative overflow-hidden group cursor-pointer"
          style={{
            background: 'rgba(0, 29, 57, 0.3)',
            border: '1px solid rgba(123, 189, 232, 0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.15), transparent)' }}
          />
          <Github size={28} style={{ color: '#7BBDE8' }} />
        </motion.a>

        {/* Email */}
        <motion.button
          onClick={handleCompose}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-xl relative overflow-hidden group cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #4E8EA2, #6EA2B3)',
            border: '1px solid rgba(123, 189, 232, 0.3)',
          }}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #6EA2B3, #7BBDE8)' }}
          />
          <Send size={28} style={{ color: 'white' }} className="relative z-10" />
        </motion.button>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.form onSubmit={handleCompose} className="inline-block">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 12px 30px rgba(78, 142, 162, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 text-base font-semibold rounded-xl flex items-center gap-2 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(to right, #4E8EA2, #6EA2B3)',
              color: 'white',
              border: 'none'
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to right, #6EA2B3, #7BBDE8)' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Send size={18} />
              Get In Touch
            </span>
          </motion.button>
        </motion.form>
        <p className="text-xs mt-4" style={{ color: 'rgba(189, 216, 233, 0.5)' }}>
          {email}
        </p>
      </motion.div>
    </section>
  );
}
