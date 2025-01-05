import React from 'react';
import '../Componenets Css/Tools.css';

const skillsData = [
  { id: 1, name: 'C#', icon: './images/C.png', percentage: '80%' },
  { id: 2, name: 'Html/Css', icon: './images/hc.png', percentage: '90%' },
  { id: 3, name: 'Javascript', icon: './images/JS.png', percentage: '50%' },
  { id: 4, name: 'React', icon: './images/React.png', percentage: '30%' },
  { id: 5, name: 'Github', icon: './images/Github.png', percentage: '85%' },
  { id: 6, name: 'Unity', icon: './images/unity.png', percentage: '80%' },
  { id: 7, name: 'Blender', icon: './images/blender.png', percentage: '50%' },
  { id: 8, name: 'Photoshop', icon: './images/photoshop.png', percentage: '90%' },
  { id: 9, name: 'Premiere Pro', icon: './images/premiere-pro.png', percentage: '75%' },
  { id: 10, name: 'Figma', icon: './images/Figma.png', percentage: '50%' },
];

const Tools = () => {
  return (
    <div className="tools">
      <h2 className="tools-title">My <span>Expertise with Tools</span></h2>
      <p className="tools-description">
      </p>
      <div className="tools-grid">
        {skillsData.map(skill => (
          <div key={skill.id} className="tools-card">
            <img src={skill.icon} alt={`${skill.name} icon`} className="tools-icon" />
            <h3>{skill.percentage}</h3>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
