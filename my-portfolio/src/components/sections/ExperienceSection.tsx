/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function ExperienceSection() {
  // companies + details for interactive Experience section
  const companies = [
    {
      id: 'First National Financial LP',
      name: 'First National Financial LP',
      url: 'https://www.firstnational.ca',
      role: 'Application Developer II',
      period: 'June 2022 - Present',
      bullets: [
        'Redesigned AI‑powered OCR for insurance documents, achieving 80% accuracy and enabling a 20% improvement in loan processing speed.',
        'Led development of scalable C# / ASP.NET solutions on Azure and automated deployment pipelines, accelerating feature delivery by 30%.',
        'Implemented unit & integration testing, mentored junior engineers, and maintained a 98% on-time sprint completion rate while reducing post-release bugs 50%.',
      ],
    },
    {
      id: 'CTDI',
      name: 'CTDI',
      url: 'https://www.ctdi.com/', 
      role: 'QA Technician',
      period: '2021 - 2022',
      bullets: [
        'Performed manual QA for Telus modem hardware and firmware: executed test cases, validated configurations, logged and tracked defects, and verified fixes across firmware releases.',
      ],
    },
    {
      id: 'Workland',
      name: 'Workland',
      url: 'https://www.workland.com/',
      role: 'Intern / Front-end Web Developer',
      period: '2020',
      bullets: [
        'Designed and updated layouts to meet usability and performance requirements',
      ],
    },
    {
      id: 'hackcon',
      name: 'HackConcordia',
      url: 'https://hackconcordia.io',
      role: 'Volunteer',
      period: '2020',
      bullets: [
        ' Take part in coordinate hackers and sponsor during the event.',
        'Support the executive team to facilitate the smooth execution of the competition on site.',
        'Assist participants with technical issues and inquiries.'
      ],
    },
  ];

  const [selected, setSelected] = useState<string>(companies[0].id);
  // debounce hover to avoid flicker when moving between menu items
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleHoverEnter(id: string) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setSelected(id);
      hoverTimer.current = null;
    }, 80);
  }

  function handleHoverLeave() {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <section id="experience" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-semibold mb-8 text-teal-300">Experience</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Where I've Worked - interactive list */}
        <aside className="space-y-3">
          <h3 className="text-lg font-medium text-teal-300">Where I've Worked</h3>
          <ul className="text-sm text-slate-400 space-y-2">
            {companies.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => handleHoverEnter(c.id)}
                  onMouseLeave={handleHoverLeave}
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
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-600/50 backdrop-blur-md shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none transform-gpu perspective-1000 hover:scale-[1.02] transition-all duration-300 ease-out"
                style={{
                  transform: 'rotateX(2deg) rotateY(-1deg) translateZ(0)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  background: 'linear-gradient(145deg, rgba(51, 65, 85, 0.35), rgba(30, 41, 59, 0.25))'
                }}
              >
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className="text-xl font-semibold">
                      <span className="text-slate-400">{c.role}</span>
                      <a
                        href={c.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-teal-300 ml-3 hover:underline"
                        aria-label={`${c.name} website`}
                      >
                        @ {c.name}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{c.period}</p>
                  </div>
                </div>

                <ul className="mt-4 list-disc list-inside space-y-3 text-slate-300 marker:text-teal-300 relative z-10">
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
  );
}
