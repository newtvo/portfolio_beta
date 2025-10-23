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
      <h2 className="text-3xl font-semibold mb-8" style={{ color: '#7BBDE8' }}>Experience</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Company selector - Apple Glass UI 2025 */}
        <aside className="space-y-2">
          <ul className="text-sm space-y-2">
            {companies.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onMouseEnter={() => handleHoverEnter(c.id)}
                  onMouseLeave={handleHoverLeave}
                  onFocus={() => setSelected(c.id)}
                  onClick={() => setSelected(c.id)}
                  className="group w-full text-left px-5 py-3.5 transition-all duration-300 ease-out rounded-xl relative overflow-hidden backdrop-blur-2xl"
                  style={{
                    color: selected === c.id ? '#ffffff' : 'rgba(189, 216, 233, 0.75)',
                    fontWeight: selected === c.id ? 600 : 500,
                    backgroundColor: selected === c.id 
                      ? 'rgba(123, 189, 232, 0.06)' 
                      : 'transparent',
                    border: selected === c.id 
                      ? '1px solid rgba(123, 189, 232, 0.2)' 
                      : '1px solid transparent',
                    boxShadow: selected === c.id 
                      ? '0 4px 16px -4px rgba(123, 189, 232, 0.15)' 
                      : 'none',
                    transform: selected === c.id ? 'translateX(4px)' : 'translateX(0)',
                    WebkitBackdropFilter: 'blur(12px)',
                    backdropFilter: 'blur(12px)',
                  }}
                  aria-pressed={selected === c.id}
                >
                  {/* Gradient overlay for selected state */}
                  {selected === c.id && (
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(135deg, rgba(123, 189, 232, 0.08) 0%, rgba(78, 142, 162, 0.04) 100%)',
                        pointerEvents: 'none'
                      }}
                    />
                  )}
                  
                  {/* Shimmer effect on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      animation: selected === c.id ? 'none' : 'shimmer 2s infinite',
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Active indicator bar */}
                  {selected === c.id && (
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                      style={{
                        background: 'linear-gradient(180deg, #7BBDE8 0%, #4E8EA2 100%)',
                        boxShadow: '0 0 12px rgba(123, 189, 232, 0.6), 0 0 24px rgba(123, 189, 232, 0.3)'
                      }}
                    />
                  )}
                  
                  <span className="relative z-10">{c.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        
        {/* Add shimmer animation */}
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>

        {/* Selected role details */}
        <div className="md:col-span-2 space-y-6">
          {companies.map((c) =>
            c.id === selected ? (
              <div
                key={c.id}
                className="p-6 rounded-2xl bg-neutral-900/30 backdrop-blur-md shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none transform-gpu perspective-1000 hover:scale-[1.02] transition-all duration-300 ease-out"
                style={{
                  transform: 'rotateX(2deg) rotateY(-1deg) translateZ(0)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  background: 'linear-gradient(145deg, rgba(51, 65, 85, 0.35), rgba(30, 41, 59, 0.25))',
                  borderColor: 'rgba(78, 142, 162, 0.5)',
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
              >
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className="text-xl font-semibold">
                      <span style={{ color: '#BDD8E9' }}>{c.role}</span>
                      <a
                        href={c.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium ml-3 hover:underline"
                        style={{ color: '#7BBDE8' }}
                        aria-label={`${c.name} website`}
                      >
                        @ {c.name}
                      </a>
                    </p>
                    <p className="mt-1 text-sm" style={{ color: 'rgba(189, 216, 233, 0.7)' }}>{c.period}</p>
                  </div>
                </div>

                <ul className="mt-4 list-disc list-inside space-y-3 relative z-10" style={{ color: 'rgba(189, 216, 233, 0.9)' }}>
                  {c.bullets.map((b, i) => (
                    <li key={i} className="marker:text-[#4E8EA2]">{b}</li>
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
