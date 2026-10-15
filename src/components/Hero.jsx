import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  FileCode2, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const TYPING_PHRASES = [
  "Full-Stack Web Architect",
  "B.Tech CSE Graduate (Class of 2026)",
  "React & Node.js Developer",
  "Java & Python Problem Solver",
  "Building Scalable Cloud Platforms"
];

export default function Hero({ onCopyPhone }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Introductions & Action CTAs */}
          <div className="hero-content">
            
            <div className="hero-status-row">
              <span className="section-tag" style={{ margin: 0 }}>
                <Sparkles size={14} /> Full-Stack Software Engineer
              </span>
              <span className="pulse-badge">
                <span className="pulse-dot"></span> B.Tech CSE 2026
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Neha Kumari</span>
            </h1>

            {/* Live Typing Effect */}
            <div className="typing-wrapper">
              <span>{displayText}</span>
              <span className="cursor-blink">|</span>
            </div>

            <p className="hero-desc">
              Computer Science & Engineering graduate (Class of 2026) from <strong>R.V.S College of Engineering and Technology</strong>. Specializing in architecting end-to-end full-stack web platforms, reactive frontend experiences, and intelligent automated workflows with <strong>React, Node.js, Java, and Python</strong>.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Featured Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <WhatsappIcon size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              <a 
                href={`tel:${personalInfo.phone}`}
                className="btn btn-secondary"
                title={`Call ${personalInfo.formattedPhone}`}
              >
                <Phone size={17} />
                <span>Call: {personalInfo.phone}</span>
              </a>
            </div>

            {/* Social & GitHub Strip */}
            <div className="hero-social-strip">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-pill-link"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-pill-link"
              >
                <GithubIcon size={16} />
                <span>GitHub (19+ Repos)</span>
              </a>

              <a 
                href="https://nehakumari3748.github.io/Job_portal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-pill-link"
                style={{ borderColor: 'rgba(6, 182, 212, 0.4)' }}
              >
                <ExternalLink size={16} color="#06b6d4" />
                <span style={{ color: '#06b6d4' }}>Live Job Portal</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Tech Chips */}
          <div className="hero-visual-card">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-filename">neha-profile.config.ts</span>
                <FileCode2 size={16} color="#94a3b8" />
              </div>

              <div className="terminal-body">
                <span className="code-keyword">const</span> <span className="code-variable">softwareEngineer</span> = &#123;<br />
                &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">"Neha Kumari"</span>,<br />
                &nbsp;&nbsp;<span className="code-property">degree</span>: <span className="code-string">"B.Tech Computer Science & Eng"</span>,<br />
                &nbsp;&nbsp;<span className="code-property">institution</span>: <span className="code-string">"RVSCET, Jamshedpur"</span>,<br />
                &nbsp;&nbsp;<span className="code-property">passingYear</span>: <span className="code-number">2026</span>,<br />
                &nbsp;&nbsp;<span className="code-property">phone</span>: <span className="code-string">"7004844313"</span>,<br />
                &nbsp;&nbsp;<span className="code-property">email</span>: <span className="code-string">"Nk7665508@gmail.com"</span>,<br />
                &nbsp;&nbsp;<span className="code-property">stack</span>: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"React"</span>, <span className="code-string">"Vite"</span>, <span className="code-string">"Node.js"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"Java"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"TypeScript"</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;<span className="code-property">openForOpportunities</span>: <span className="code-keyword">true</span>,<br />
                &nbsp;&nbsp;<span className="code-property">solveProblems</span>: () =&gt; <span className="code-string">"Clean code & scalable UX 🚀"</span><br />
                &#125;;
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-pills-row">
              <span className="tech-chip">⚛️ React.js</span>
              <span className="tech-chip">⚡ Vite</span>
              <span className="tech-chip">🟢 Node.js</span>
              <span className="tech-chip">☕ Java</span>
              <span className="tech-chip">🐍 Python</span>
              <span className="tech-chip">🔷 TypeScript</span>
              <span className="tech-chip">🗄️ SQL & MongoDB</span>
              <span className="tech-chip">👁️ OpenCV</span>
            </div>
          </div>

        </div>

        {/* Stats Row Banner */}
        <div className="stats-banner">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-val">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
