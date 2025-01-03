import React, { useState } from 'react'
import '../Styles/skillsMenu.css'
import { skillsData } from './SkillsData'

const SkillLevel = ({ level }) => {
  return (
    <div className="skill-level">
      {[...Array(10)].map((_, index) => (
        <div 
          key={index} 
          className={`level-box ${index < level ? 'filled' : ''}`}
        />
      ))}
    </div>
  )
}

const SkillsMenu = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'devTools', label: 'Dev Tools' },
    { id: 'environment', label: 'Environment' }
  ];

  return (
    <>
      <div className="skills-tabs">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="skills-menu">
        <div className="skills-content">
          {categories.map(category => (
            <div 
              key={category.id}
              className={`skills-section ${activeTab === category.id ? 'active' : ''}`}
            >
              <h2 className="skill-title">{skillsData[category.id].title}</h2>
              <ul className="skill-list">
                {skillsData[category.id].skills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillsMenu