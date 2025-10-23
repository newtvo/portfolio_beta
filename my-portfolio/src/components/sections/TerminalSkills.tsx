'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TerminalSkills() {
  const [cursorBlink, setCursorBlink] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [customOutput, setCustomOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [customOutput]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const handleCustomCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = userInput.trim().toLowerCase();
    
    let output: string[] = [];
    
    if (cmd === 'help') {
      output = [
        'help         | List all available commands             |',
        'about        | About Me                                |',
        'tech         | Tech I worked with                      |',
        'exp          | My work experience                      |',
        'edu          | My education                            |',
        'github       | Open my GitHub Profile                  |',
        'linkedin     | Open my LinkedIn Profile                |',
        'contact      | Contact information                     |',
        'clear        | Clear the terminal                      |',
        ''
      ];
    } else if (cmd === 'about') {
      output = [
        'About Nhut:',
        '---',
        '- Full Stack Developer (.NET/C# Stack)',
        '- Problem Solver',
        '- 2+ years of professional experience',
        '- Azure Cloud Enthusiast ☁️',
        ''
      ];
    } else if (cmd === 'tech') {
      output = [
        'These are the tech I\'ve recently worked with.',
        '---',
        '- C# | ASP.NET Core | .NET Framework',
        '- TypeScript | JavaScript | React | Next.js',
        '- MSSQL | SQL Server | Azure SQL',
        '- Azure | Azure Functions | Azure DevOps | Azure AI',
        '- Azure Service Bus | Entity Framework',
        '- Git | Visual Studio | VS Code',
        ''
      ];
    } else if (cmd === 'exp') {
      output = [
        'My Work experience.',
        '---',
        '- Application Developer II @First National Financial LP  | June 2022 - Present',
        '- QA Technician @CTDI                                    | 2021 - 2022',
        '- Intern / Front-end Web Developer @Workland             | 2020',
        '- Volunteer @HackConcordia                               | 2020',
        ''
      ];
    } else if (cmd === 'edu') {
      output = [
        'My Education.',
        '---',
        '- Computer Science @ Concordia University',
        '- Graduated 2022',
        '- Focus: Software Engineering & Cloud Computing',
        ''
      ];
    } else if (cmd === 'github') {
      output = [
        'Opening GitHub Profile...',
        '→ https://github.com/newtvo',
        ''
      ];
      setTimeout(() => window.open('https://github.com/newtvo', '_blank'), 500);
    } else if (cmd === 'linkedin') {
      output = [
        'Opening LinkedIn Profile...',
        '→ https://linkedin.com/in/nhut-vo',
        ''
      ];
      setTimeout(() => window.open('https://linkedin.com/in/nhut-vo', '_blank'), 500);
    } else if (cmd === 'contact') {
      output = [
        'Contact Information:',
        '---',
        '- Email: nhut.vo@example.com',
        '- GitHub: github.com/newtvo',
        '- LinkedIn: linkedin.com/in/nhut-vo',
        ''
      ];
    } else if (cmd === 'clear') {
      setCustomOutput([]);
      setUserInput('');
      return;
    } else if (cmd === '') {
      setUserInput('');
      return;
    } else {
      output = [`Command not found: ${cmd}`, `Type 'help' for available commands`, ''];
    }
    
    // Add to command history if not empty
    if (cmd !== '') {
      setCommandHistory(prev => [...prev, userInput.trim()]);
      setHistoryIndex(-1);
    }
    
    setCustomOutput(prev => [...prev, `guest@/nhut-vo:~$ ${userInput}`, ...output]);
    setUserInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const newIndex = historyIndex === -1 
        ? commandHistory.length - 1 
        : Math.max(0, historyIndex - 1);
      
      setHistoryIndex(newIndex);
      setUserInput(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      
      const newIndex = historyIndex + 1;
      
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setUserInput('');
      } else {
        setHistoryIndex(newIndex);
        setUserInput(commandHistory[newIndex]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg overflow-hidden shadow-2xl"
        style={{
          backgroundColor: '#0A0E14',
          border: '2px solid rgba(78, 142, 162, 0.3)',
          boxShadow: '0 0 30px rgba(78, 142, 162, 0.2)',
        }}
      >
        {/* Terminal Header */}
        <div 
          className="px-4 py-3 flex items-center gap-2"
          style={{ 
            backgroundColor: '#1A1F29',
            borderBottom: '1px solid rgba(78, 142, 162, 0.2)'
          }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="ml-4 text-sm font-mono" style={{ color: '#BDD8E9' }}>
            guest@/nhut-vo:~$
          </span>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          onClick={focusInput}
          className="p-6 font-mono text-sm overflow-y-auto cursor-text"
          style={{
            backgroundColor: '#0A0E14',
            height: '500px',
            color: '#BDD8E9'
          }}
        >
          {/* Welcome Message */}
          <div className="mb-4" style={{ color: '#4E8EA2' }}>
            <p>Welcome to Nhut Vo's Portfolio</p>
            <p>Type 'help' to see available commands</p>
            <p className="mt-2">────────────────────────────────────────</p>
          </div>

          {/* Custom user commands output */}
          {customOutput.map((line, i) => (
            <div 
              key={`custom-${i}`}
              className="mb-1"
              style={{ color: line.startsWith('guest@') ? '#6EA2B3' : '#BDD8E9' }}
            >
              {line}
            </div>
          ))}

          {/* Interactive input prompt */}
          <form onSubmit={handleCustomCommand} className="flex items-center gap-2">
            <span style={{ color: '#6EA2B3' }}>guest@/nhut-vo:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none ml-2"
              style={{ color: '#BDD8E9', caretColor: '#4E8EA2' }}
              spellCheck={false}
            />
            {cursorBlink && (
              <span 
                className="inline-block w-2 h-4"
                style={{ backgroundColor: '#4E8EA2' }}
              />
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
