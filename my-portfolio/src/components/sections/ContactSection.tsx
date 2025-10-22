'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

export default function ContactSection() {
  // Compose-in-Gmail flow (opens Gmail compose in new tab; fallback to mailto)
  function handleCompose(e: React.FormEvent) {
    e.preventDefault();
    const to = 'vo.nhut@outlook.com'; // <- replace with your email
    const subject = 'Hello 👋';
    const body = 'Say hi!';

    // Gmail compose URL
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Try to open Gmail in a new tab; fallback to mailto if blocked/not available
    const opened = window.open(gmailUrl, '_blank');
    if (!opened) {
      // Fallback: mailto (will open default mail client)
      const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    }
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-teal-300">Contact</h2>
      <p className="text-slate-400 mb-6">
        I&apos;m open to new opportunities and collaborations. Reach out via email or LinkedIn and I&apos;ll get back to you.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex justify-center md:col-span-2">
          <form onSubmit={handleCompose} className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: '0 12px 30px rgba(16,185,129,0.10)',
              }}
              whileTap={{ scale: 0.98, y: -1 }}
              transition={{ type: 'spring', stiffness: 360, damping: 18 }}
              className="px-10 py-3 text-lg font-semibold bg-transparent text-teal-300 rounded-md border-2 border-teal-400 focus:outline-none"
              style={{ backdropFilter: 'blur(6px)' }}
              aria-label="Say hi"
            >
              <Hand size={18} className="inline-block mr-3" aria-hidden="true" />
              Say hi
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
