import React from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div className="brand-badge" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                &lt;NK/&gt;
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                Neha Kumari
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '420px' }}>
              Full-Stack Developer &amp; B.Tech CSE (Class of 2026) at RVSCET Jamshedpur. Building robust web systems and scalable user experiences.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="theme-btn" 
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="theme-btn" 
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a 
              href={personalInfo.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="theme-btn" 
              title="WhatsApp"
            >
              <WhatsappIcon size={18} />
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="theme-btn" 
              title="Call"
            >
              <Phone size={18} />
            </a>
            <button 
              onClick={scrollToTop} 
              className="btn btn-secondary btn-icon" 
              title="Back to Top"
              style={{ marginLeft: '12px' }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Neha Kumari. Built with React &amp; Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with passion for engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
