import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Project Details">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="section-tag" style={{ margin: '0 0 10px 0' }}>
            {project.highlight || 'Featured Project'}
          </span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '8px' }}>
            {project.title}
          </h2>
        </div>

        <div style={{ width: '100%', height: '260px', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>Overview</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
            {project.description}
          </p>
        </div>

        {project.keyFeatures && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>Key Architecture & Features</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.keyFeatures.map((feat, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="#06b6d4" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>Tech Stack & Technologies</h4>
          <div className="project-tech-tags">
            {project.tech.map((t, idx) => (
              <span key={idx} className="project-tech-tag" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <ExternalLink size={17} />
              <span>Launch Live App</span>
            </a>
          )}

          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={17} />
              <span>View Source Code on GitHub</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
