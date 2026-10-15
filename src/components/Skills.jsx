import React, { useState } from 'react';
import { 
  Wrench, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Code, 
  CheckCircle2 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout': return <Layout size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      default: return <Code size={20} />;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter((cat) => cat.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section className="section-wrapper" id="skills">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Wrench size={14} /> Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills &amp; <span>Proficiencies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of programming languages, frameworks, cloud services, and computer science foundations.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="skills-tabs-container">
          <button 
            className={`skill-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Disciplines
          </button>
          <button 
            className={`skill-tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`skill-tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend &amp; Systems
          </button>
          <button 
            className={`skill-tab-btn ${activeTab === 'database' ? 'active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            Databases &amp; Cloud
          </button>
          <button 
            className={`skill-tab-btn ${activeTab === 'cs' ? 'active' : ''}`}
            onClick={() => setActiveTab('cs')}
          >
            CS Fundamentals
          </button>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCategories.map((categoryGroup, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              
              <div className="category-card-header">
                <div className="category-icon-box">
                  {getIcon(categoryGroup.icon)}
                </div>
                <h3 className="category-title">{categoryGroup.category}</h3>
              </div>

              <div className="skill-items-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-info-top">
                      <div className="skill-name">
                        <span>{skill.name}</span>
                        <span className="skill-tag-pill">{skill.tag}</span>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>

                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
