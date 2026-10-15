import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('nk_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('nk_portfolio_theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('nk_portfolio_theme', 'light');
    }
  }, [isDark]);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const handleCopy = (text, successMsg) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || `Copied to clipboard: ${text}`);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    } else {
      showToast(`Selected: ${text}`);
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Dynamic Background Ambient Orbs */}
      <div className="ambient-glow" aria-hidden="true">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
        <div className="glow-orb-3"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero onCopyPhone={() => handleCopy('7004844313', 'Phone number copied!')} />
        <About onCopy={handleCopy} />
        <Skills />
        <Projects />
        <Education />
        <Contact onCopy={handleCopy} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Action Toast Notification */}
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
