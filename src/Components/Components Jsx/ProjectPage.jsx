import React, { useState } from "react";
import "../Componenets Css//ProjectPage.css"; // Import the CSS file

const ProjectPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Replace these with your image URLs
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="project-page">
      <div className="project-left">
        <div className="image-slider">
          <button className="arrow left-arrow" onClick={handlePrevImage}>
            &#8249;
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Project"
            className="project-image"
          />
          <button className="arrow right-arrow" onClick={handleNextImage}>
            &#8250;
          </button>
        </div>
        <h1 className="project-title">Kibo No Ken</h1>
        <a
          href="https://project-url.com"
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project URL
        </a>
        <div className="project-meta">
          <p><strong>Category:</strong> Gaming</p>
          <p><strong>Client:</strong> Personal Project</p>
        </div>
      </div>
      <div className="project-right">
        <h2>Description:</h2>
        <p>
          Kibo No Ken is a personal project I've been developing, designed as a
          3D isometric action-adventure game for both PC and mobile platforms.
          In this story-driven game, you play as a young prince on a quest to
          find a legendary sword. Along the way, you'll face enemies, powerful
          demons, and the dark lord who has seized control of the prince's
          kingdom. Your goal is to defeat these foes, avenge the prince's
          father, and free the people from oppression. With captivating
          animations, thrilling combat, and a rich storyline, Kibo No Ken
          offers an immersive blend of adventure and action.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
