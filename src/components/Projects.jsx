import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Radio 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full-Stack & Web', value: 'fullstack' },
    { label: 'AI & Vision', value: 'ai' },
    { label: 'Python Systems', value: 'python' },
    { label: 'Interactive Tools', value: 'tools' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="section-wrapper" id="projects">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> GitHub Repositories & Work
          </span>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-desc">
            Production-ready web applications, enterprise job portals, and intelligent software built with React, Vite, Java, and Python.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              
              {/* Project Image Banner */}
              <div className="project-img-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img"
                  loading="lazy"
                />
                
                {/* Highlight Tag */}
                <span className="project-overlay-badge">
                  {project.highlight}
                </span>

                {/* Live Indicator */}
                {project.liveUrl && (
                  <div className="project-live-indicator pulse-badge" style={{ padding: '3px 8px', fontSize: '0.72rem' }}>
                    <span className="pulse-dot"></span>
                    <span>Live</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>

                {/* Tech Pills */}
                <div className="project-tech-tags">
                  {project.tech.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      #{tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="project-tech-tag" style={{ color: 'var(--text-dim)' }}>
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="project-footer-actions">
                  <button 
                    className="project-action-link"
                    onClick={() => setSelectedProject(project)}
                    title="Read Project Architecture Details"
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link primary"
                        title="Open Live Application"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        title="View Code on GitHub"
                      >
                        <GithubIcon size={15} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
