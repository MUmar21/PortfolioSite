// SkillsSection.js
import React, { useState } from 'react';
import '../Componenets Css/Skills.css';

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const skills = [
    {
      id: 1,
      title: 'Unity Game Development',
      description: 'Expert in creating both 2D and 3D games with Unity.',
    },
    {
      id: 2,
      title: 'C# Programming',
      description: 'Proficient in C# coding for game logic, mechanics, and systems.',
    },
    {
      id: 3,
      title: 'Game Design',
      description: 'Innovative game design with engaging levels and experiences.',
    },
  ];

    const services = [
    {
      id: 1,
      title: 'Game Development & Design',
      description: 'Full-cycle game development from concept to launch.',
    },
    {
      id: 2,
      title: 'Game Design',
      description: 'Innovative game design with engaging levels and experiences.',
    },
    {
      id: 3,
      title: '2D & 3D Games',
      description: 'Building immersive 2D and 3D games for all platforms.',
    },
    {
      id: 4,
      title: 'Mobile & PC Games',
      description: 'Games tailored for mobile devices and PC.',
    },
    {
      id: 5,
      title: 'Single Player & Two Player Modes',
      description: 'Engaging solo and local multiplayer gameplay experiences.',
    },
    {
      id: 6,
      title: 'Multiplayer Games',
      description: 'Robust multiplayer features for connected gameplay.',
    },
    {
      id: 7,
      title: 'Graphic Design',
      description: 'Eye-catching graphics and assets for your games.',
    },
    {
      id: 8,
      title: 'Game Optimization',
      description: 'Performance tuning for fast, responsive gameplay.',
    },
    {
      id: 9,
      title: 'Testing & Debugging',
      description: 'Thorough testing and bug fixing for smooth performance.',
    },
    {
      id: 10,
      title: 'Monetization & Ads',
      description: 'Integrate Unity Ads, AdMob, and mediation for revenue.',
    },
    {
      id: 11,
      title: 'SDK Integration',
      description: 'Add features like Firebase analytics and custom events.',
    },
  ];

  return (
    <section className="skills-section">
      {/* <h2 className="section-title">My Skills & Expertise</h2>
      <p className="section-description">
        Discover my expertise and services in the world of game development.
      </p>
      <div className="accordion-container">
        {skills.map((skill, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            key={skill.id}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion-header">
              <span>{index + 1}. {skill.title}</span>
              <span className="arrow">{activeIndex === index ? '↑' : '↓'}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{skill.description}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}

      <div className="services-section">
        <h3 className="services-title">Services I Offer</h3>
        <p className="section-description">
        Discover my expertise and services in the world of game development.
      </p>
        <div className="services-container">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
