import React, { useState } from "react";
import "../Componenets Css//ProjectPage.css"; // Import the CSS file
import { useParams } from 'react-router-dom';
import { projectsData } from './Projects'; // Correct import

const ProjectPage = () => {
  const { title } = useParams();
  const project = projectsData.find((proj) => proj.title === decodeURIComponent(title));

  if (!project) {
    return <div>Project not found</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className="project-page">
      <div className="project-left">
        <div className="image-slider">
          <button className="arrow left-arrow" onClick={handlePrevImage}>
            &#8249;
          </button>
          <img
            src={import.meta.env.BASE_URL + project.titleImages[currentImageIndex]} // Should work now
            alt={project.title}
            className="project-image"
          />
          <button className="arrow right-arrow" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>
        <h1 className="project-title">{project.title}</h1>
        {project.link && (
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project URL
          </a>
        )}
        <div className="project-meta">
          <p><strong>Category:</strong> {project.Category}</p>
          <p><strong>Client:</strong> {project.Client}</p>
        </div>
      </div>
      <div className="project-right">
        <h2>Description:</h2>
        <p>{project.description}</p>
        <button className="back-button" onClick={handleBackClick}>
        Back 
      </button>
      </div>
    </div>
  );
};
export default ProjectPage;
