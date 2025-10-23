'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Clock, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'vo.nhut@outlook.com';

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Left: Quick Info Cards */}
        <div className="space-y-4">
          {/* Email Card with Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden group"
            style={{
              background: 'rgba(0, 29, 57, 0.3)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: 'rgba(123, 189, 232, 0.1)',
                    border: '1px solid rgba(123, 189, 232, 0.2)'
                  }}
                >
                  <Mail size={24} style={{ color: '#7BBDE8' }} />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Email</p>
                  <p className="font-semibold" style={{ color: '#BDD8E9' }}>{email}</p>
                </div>
              </div>
              
              <motion.button
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg"
                style={{
                  background: 'rgba(123, 189, 232, 0.1)',
                  border: '1px solid rgba(123, 189, 232, 0.2)'
                }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check size={18} style={{ color: '#4E8EA2' }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Copy size={18} style={{ color: '#7BBDE8' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl backdrop-blur-xl"
            style={{
              background: 'rgba(0, 29, 57, 0.3)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="p-3 rounded-xl"
                style={{
                  background: 'rgba(123, 189, 232, 0.1)',
                  border: '1px solid rgba(123, 189, 232, 0.2)'
                }}
              >
                <MapPin size={24} style={{ color: '#7BBDE8' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Location</p>
                <p className="font-semibold" style={{ color: '#BDD8E9' }}>Toronto, Ontario</p>
              </div>
            </div>
          </motion.div>

          {/* Response Time Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl backdrop-blur-xl"
            style={{
              background: 'rgba(0, 29, 57, 0.3)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="p-3 rounded-xl"
                style={{
                  background: 'rgba(123, 189, 232, 0.1)',
                  border: '1px solid rgba(123, 189, 232, 0.2)'
                }}
              >
                <Clock size={24} style={{ color: '#7BBDE8' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>Response Time</p>
                <p className="font-semibold" style={{ color: '#BDD8E9' }}>Usually within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Social Links Bento Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 h-fit"
        >
          {/* LinkedIn - Large */}
          <motion.a
            href="https://www.linkedin.com/in/vo-nhut/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            className="col-span-2 p-8 rounded-2xl backdrop-blur-xl relative overflow-hidden group cursor-pointer"
            style={{
              background: 'rgba(0, 29, 57, 0.3)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.1), transparent)' }}
            />
            <Linkedin size={40} style={{ color: '#7BBDE8' }} className="mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#BDD8E9' }}>LinkedIn</h3>
            <p className="text-sm" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>Let&apos;s connect professionally</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/newtvo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.05 }}
            className="p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden group cursor-pointer"
            style={{
              background: 'rgba(0, 29, 57, 0.3)',
              border: '1px solid rgba(123, 189, 232, 0.2)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.1), transparent)' }}
            />
            <Github size={32} style={{ color: '#7BBDE8' }} className="mb-3" />
            <h3 className="text-lg font-bold" style={{ color: '#BDD8E9' }}>GitHub</h3>
          </motion.a>

          {/* Email CTA */}
          <motion.button
            onClick={handleCompose}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #4E8EA2, #6EA2B3)',
              border: '1px solid rgba(123, 189, 232, 0.3)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #6EA2B3, #7BBDE8)' }}
            />
            <Send size={32} style={{ color: 'white' }} className="mb-3 relative z-10" />
            <h3 className="text-lg font-bold text-white relative z-10">Email</h3>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-sm mb-4" style={{ color: 'rgba(189, 216, 233, 0.6)' }}>
          Prefer a quick chat? Reach out via any platform above
        </p>
        <motion.form onSubmit={handleCompose} className="inline-block">
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 12px 30px rgba(78, 142, 162, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-lg font-bold rounded-xl flex items-center gap-3 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(to right, #4E8EA2, #6EA2B3)',
              color: 'white',
              border: 'none'
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to right, #6EA2B3, #7BBDE8)' }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Send size={20} />
              Start a Conversation
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
