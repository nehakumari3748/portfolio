import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Briefcase, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, setIsDark, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#hero" className="nav-brand" aria-label="Neha Kumari Portfolio Home">
            <div className="brand-badge">&lt;NK/&gt;</div>
            <div className="brand-text">
              Neha<span>Kumari</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Class of 2026 Pulse Badge */}
            <div className="pulse-badge" title="Open to Full-Time / Internship Opportunities">
              <span className="pulse-dot"></span>
              <span>Class of 2026</span>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="theme-btn"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            {/* Quick Contact CTA */}
            <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
              <Send size={15} />
              <span>Hire Me</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
          <a
            href={`tel:${personalInfo.phone}`}
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <Phone size={16} /> Call
          </a>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
            style={{ flex: 1 }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
