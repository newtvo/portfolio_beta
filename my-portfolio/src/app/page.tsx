'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Hand } from 'lucide-react';

// Simple typing component with blinking cursor (uses Framer Motion for the cursor)
function TypingText({ text, speed = 35 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setDisplay('');
    let i = 0;
    const id = setInterval(() => {
      setDisplay((p) => p + text.charAt(i));
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <motion.p
      className="text-lg text-slate-400 mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {display}
      <motion.span
        aria-hidden="true"
        className="inline-block ml-2 w-[6px] h-5 bg-slate-400 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
    </motion.p>
  );
}

export default function Portfolio() {
  // companies + details for interactive Experience section
  const companies = [
    {
      id: 'wealthsimple',
      name: 'Wealthsimple',
      role: 'ML Platform Engineer',
      period: 'February 2023 - Present',
      bullets: [
        'Initiated and led the development of a reliable and scalable ML pipeline, enabling efficient fine‑tuning and deployment of large language models (LLMs).',
        'Designed and deployed a productivity AI assistant used daily by ~90% of the company, enabling secure interactions with OpenAI, Google Gemini, and Meta Llama.',
        'Architected and led the open‑source initiative LLM‑Gateway — a portal for companies to securely integrate and interact with multiple LLM providers.',
      ],
    },
    {
      id: 'drw',
      name: 'DRW Trading',
      role: 'Software Engineer',
      period: '2021 - 2022',
      bullets: [
        'Built low-latency services and internal tools to support trading workflows.',
        'Collaborated with traders and engineers to improve reliability and observability.',
      ],
    },
    {
      id: 'morgan',
      name: 'Morgan Stanley',
      role: 'Intern / Engineer',
      period: '2020',
      bullets: [
        'Contributed to backend systems and automated testing pipelines.',
      ],
    },
    {
      id: 'hackcon',
      name: 'HackConcordia',
      role: 'Volunteer / Mentor',
      period: '2019',
      bullets: ['Mentored students on full-stack projects and best practices.'],
    },
    {
      id: 'cods',
      name: 'CoDS',
      role: 'Developer',
      period: '2018 - 2019',
      bullets: ['Worked on web tooling and internal dashboards.'],
    },
    {
      id: 'ericsson',
      name: 'Ericsson',
      role: 'QA Technician',
      period: '2016 - 2018',
      bullets: [
        'Performed manual QA for Telus modem hardware and firmware: executed test cases, validated configurations, logged and tracked defects, and verified fixes across firmware releases.',
      ],
    },
  ];
  const [selected, setSelected] = useState<string>(companies[0].id);

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
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-300 transition-colors duration-300 scroll-smooth">
      

      {/* Top navigation (anchor links with nerdy numeric labels) */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        <ul className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md rounded-full px-3 py-1 text-sm">
          <li>
            <a
              href="#about"
              className="flex items-center gap-2 px-3 py-1 text-slate-300 hover:text-teal-300 transition-colors"
              aria-label="About"
            >
              <span className="font-mono text-xs text-teal-300 opacity-90 hover:opacity-100">01.</span>
              <span className="hidden sm:inline">About</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="flex items-center gap-2 px-3 py-1 text-slate-300 hover:text-teal-300 transition-colors"
              aria-label="Experience"
            >
              <span className="font-mono text-xs text-teal-300 opacity-90 hover:opacity-100">02.</span>
              <span className="hidden sm:inline">Experience</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex items-center gap-2 px-3 py-1 text-slate-300 hover:text-teal-300 transition-colors"
              aria-label="Projects"
            >
              <span className="font-mono text-xs text-teal-300 opacity-90 hover:opacity-100">03.</span>
              <span className="hidden sm:inline">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex items-center gap-2 px-3 py-1 text-slate-300 hover:text-teal-300 transition-colors"
              aria-label="Contact"
            >
              <span className="font-mono text-xs text-teal-300 opacity-90 hover:opacity-100">04.</span>
              <span className="hidden sm:inline">Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center p-8">
        <motion.h1
          className="text-5xl font-bold mb-4 text-teal-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Minh Nhut Vo
        </motion.h1>
        <TypingText text="  Software Developer | C#, Python, Azure, and Modern Web Apps." speed={35} />
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

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-teal-300">About Me</h2>
        <p className="text-slate-400 leading-relaxed">
          I'm a software developer based in Toronto, ON, passionate about building scalable, elegant systems. 
          With experience in C#, Python, and cloud technologies like Azure, I enjoy crafting clean and efficient solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-teal-300">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((project) => (
            <motion.div
              key={project}
              className="border border-slate-700/40 bg-slate-800/20 rounded-2xl p-6 hover:shadow-lg transition"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
             >
              <h3 className="text-xl font-medium mb-2 text-teal-300">Project {project}</h3>
              <p className="text-slate-400 mb-4">
                A modern web app demonstrating my skills in full-stack development.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border border-slate-600 bg-slate-800/30 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-800/40 focus:outline-none"
                >
                  View Code
                </Button>
                <Button size="sm" className="bg-slate-800/30 text-slate-300 hover:bg-slate-800/40">Live Demo</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-teal-300">Experience</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Where I've Worked - interactive list */}
          <aside className="space-y-3">
            <h3 className="text-lg font-medium text-teal-300">Where I’ve Worked</h3>
            <ul className="text-sm text-slate-400 space-y-2">
              {companies.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setSelected(c.id)}
                    onFocus={() => setSelected(c.id)}
                    onClick={() => setSelected(c.id)}
                    className={
                      'w-full text-left px-2 py-1 transition-colors ' +
                      (selected === c.id
                        ? 'text-teal-300 font-medium'
                        : 'text-slate-400 hover:text-teal-300')
                    }
                    aria-pressed={selected === c.id}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Selected role details */}
          <div className="md:col-span-2 space-y-6">
            {companies.map((c) =>
              c.id === selected ? (
                <div
                  key={c.id}
                  className="p-6 rounded-2xl bg-slate-800/20 border border-slate-700/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xl font-semibold text-teal-300">{c.role}</p>
                      <p className="text-sm text-slate-400">
                        {c.name} · {c.period}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 list-disc list-inside space-y-3 text-slate-400">
                    {c.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6 text-teal-300">Contact</h2>
        <p className="text-slate-400 mb-6">
          I'm open to new opportunities and collaborations. Reach out via email or LinkedIn and I'll get back to you.
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
                className="px-10 py-3 text-lg font-semibold bg-transparent text-teal-300 rounded-none border-2 border-teal-400 focus:outline-none"
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

      {/* Contact Section */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Minh Nhut Vo — Built with Next.js, Tailwind, and Framer Motion</p>
      </footer>
    </main>
  );
}
