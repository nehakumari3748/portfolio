import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Briefcase, 
  Award,
  Sparkles 
} from 'lucide-react';
import { educationData, experienceHighlights } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="section-wrapper" id="education">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Academics &amp; Experience
          </span>
          <h2 className="section-title">
            Education &amp; <span>Journey</span>
          </h2>
          <p className="section-desc">
            Academic milestones, technical coursework, and hands-on software development experience.
          </p>
        </div>

        {/* Education Highlight Card */}
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-card glass-card">
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <span className="timeline-badge-year">
                <Calendar size={14} /> {edu.period} • Class of 2026
              </span>
              <span className="pulse-badge">
                <span className="pulse-dot"></span>
                <span>{edu.status}</span>
              </span>
            </div>

            <h3 className="timeline-degree">{edu.degree}</h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', marginBottom: '16px', fontWeight: 600 }}>
              <MapPin size={16} />
              <span>{edu.institution} — {edu.location}</span>
            </div>

            <p className="timeline-desc">{edu.description}</p>

            <div className="coursework-highlights">
              {edu.highlights.map((hl, hIdx) => (
                <div key={hIdx} className="highlight-row">
                  <CheckCircle size={16} className="highlight-bullet" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* Experience & Practical Milestones */}
        <div className="exp-grid">
          {experienceHighlights.map((exp, idx) => (
            <div key={idx} className="exp-card glass-card">
              <div className="exp-badge">{exp.badge}</div>
              <h4 className="exp-title">{exp.title}</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '8px' }}>
                {exp.role} • {exp.period}
              </p>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
