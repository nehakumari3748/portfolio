import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Code2, 
  Layers, 
  Cpu, 
  GitBranch, 
  CheckCircle,
  Copy
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onCopy }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <User size={14} /> Background & Focus
          </span>
          <h2 className="section-title">
            About <span>Neha Kumari</span>
          </h2>
          <p className="section-desc">
            Bridging technical depth, modern web engineering, and clean design thinking.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Profile Card */}
          <div className="about-card-left glass-card">
            <div className="about-avatar-wrapper">
              {!imgError ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt="Neha Kumari"
                  className="about-avatar"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="about-avatar-fallback">NK</div>
              )}
            </div>

            <h3 className="about-name">{personalInfo.name}</h3>
            <p className="about-tagline">{personalInfo.role}</p>

            {/* Quick Contact Information */}
            <div className="contact-quick-list">
              <div className="quick-contact-item">
                <GraduationCap size={18} color="#06b6d4" />
                <div>
                  <strong>Degree:</strong> B.Tech CSE (Passout 2026)
                </div>
              </div>

              <div className="quick-contact-item">
                <MapPin size={18} color="#3b82f6" />
                <div>
                  <strong>College:</strong> RVSCET, Jamshedpur
                </div>
              </div>

              <div className="quick-contact-item" style={{ cursor: 'pointer' }} onClick={() => onCopy(personalInfo.phone, 'Phone number copied to clipboard!')}>
                <Phone size={18} color="#10b981" />
                <div style={{ flex: 1 }}>
                  <strong>Phone:</strong> {personalInfo.phone}
                </div>
                <Copy size={14} color="#94a3b8" />
              </div>

              <div className="quick-contact-item" style={{ cursor: 'pointer' }} onClick={() => onCopy(personalInfo.email, 'Email address copied to clipboard!')}>
                <Mail size={18} color="#f59e0b" />
                <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong>Email:</strong> {personalInfo.email}
                </div>
                <Copy size={14} color="#94a3b8" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="about-content-right">
            <h3 className="about-lead">
              A motivated software engineer passionate about transforming real-world challenges into high-performance digital products.
            </h3>

            <div className="about-paragraphs">
              <p>
                I am currently in my final year pursuing a <strong>Bachelor of Technology (B.Tech) in Computer Science and Engineering</strong> at <strong>R.V.S College of Engineering and Technology, Jamshedpur</strong> (Graduation year: <strong>2026</strong>).
              </p>
              <p>
                My passion lies at the intersection of robust backend logic and fluid user interfaces. From developing comprehensive full-stack platforms like <strong>CareerNexus Job Portal</strong> and <strong>WhatsApp Automation CRM</strong>, to building AI quiz systems and computer vision apps, I love pushing the boundaries of what modern web technology can achieve.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="about-pillars-grid">
              
              <div className="pillar-item">
                <div className="pillar-title">
                  <Layers size={18} color="#06b6d4" />
                  <span>Full-Stack Engineering</span>
                </div>
                <p className="pillar-desc">
                  Building reactive frontends with React and dependable APIs using Node.js, Express, and Java.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-title">
                  <Code2 size={18} color="#3b82f6" />
                  <span>Algorithms & OOP</span>
                </div>
                <p className="pillar-desc">
                  Strong grasp of Data Structures, Object-Oriented Principles, and clean code conventions.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-title">
                  <Cpu size={18} color="#8b5cf6" />
                  <span>AI & Automation</span>
                </div>
                <p className="pillar-desc">
                  Practical experience building chatbots, computer vision pipelines with OpenCV, and automated workflows.
                </p>
              </div>

              <div className="pillar-item">
                <div className="pillar-title">
                  <GitBranch size={18} color="#10b981" />
                  <span>19+ GitHub Projects</span>
                </div>
                <p className="pillar-desc">
                  Consistent open-source contributor with proven skills in version control, deployment, and testing.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
