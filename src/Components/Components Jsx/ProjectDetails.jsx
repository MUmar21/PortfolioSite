import React from 'react';
import "../Componenets Css/ProjectDetails.css"

const ProjectDetail = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="overlay">
      <div className="project-detail">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="image-slider">
          <button className="arrow" onClick={handlePrev}>&lt;</button>
          <img src={project.images[currentIndex]} alt={project.title} />
          <button className="arrow" onClick={handleNext}>&gt;</button>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectDetail;
