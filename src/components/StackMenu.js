import React, { useState, useRef } from 'react';
import { projectsData } from './StackData';
import '../Styles/StackMenu.css';

const StackMenu = () => {
  const [activeCategory, setActiveCategory] = useState('webApps');
  const projectsGridRef = useRef(null);

  const categories = [
    { id: 'webApps', label: 'WEB_APPS', icon: '⌨️' },
    { id: 'fullStack', label: 'FULL_STACK', icon: '⚡' }
  ];

  const handleScroll = (direction) => {
    if (projectsGridRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      projectsGridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="stack-wrapper">
      <div className="stack-container">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">~/projects/{activeCategory}</div>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-text">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-container">
          <button className="scroll-button left" onClick={() => handleScroll('left')}>
            <span className="arrow">←</span>
          </button>
          
          <div className="projects-grid" ref={projectsGridRef}>
            {projectsData[activeCategory].map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="image-overlay">
                      <div className="tech-preview">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">
                    <span className="terminal-prompt">&gt; </span>
                    {project.title}
                  </h3>
                  <div className="project-status">{project.status}</div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <button className="scroll-button right" onClick={() => handleScroll('right')}>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackMenu;