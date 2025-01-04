// import '../Componenets Css/Projects.css';
// import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../Componenets Css/Projects.css';
import ProjectPage  from './ProjectPage'
import { Link } from 'react-router-dom';

export const projectsData = [
    {
        title: "KiboNoKen",
        description: "Kibo No Ken, is a personal project I’ve been developing, designed as a 3D isometric action-adventure game for both PC and mobile platforms. In this story-driven game, you play as a young prince on a quest to find a legendary sword. Along the way, you'll face enemies, powerful demons, and the dark lord who has seized control of the prince's kingdom. Your goal is to defeat these foes, avenge the prince's father, and free the people from oppression. With captivating animations, thrilling combat, and a rich storyline, Kibo No Ken offers an immersive blend of adventure and action.",
        titleImages: ["./images/kbk.png", "./images/kbk1.png", "./images/kbk2.png", "./images/kbk3.png", "./images/kbk4.png", "./images/kbk10.png", "./images/kbk6.png", "./images/kbk7.png", "./images/kbk12.png"], // Add more images here 
        images: ["../public/images/kbk.png","../public/images/kbk1.png", "../public/images/kbk2.png", "../public/images/kbk3.png", "../public/images/kbk4.png", "../public/images/kbk10.png", "../public/images/kbk6.png", "../public/images/kbk7.png", "../public/images/kbk12.png"], // Add more images here
        link: "https://www.youtube.com/watch?v=wHYxLtUvvns",
        Category: "Gaming",
        Client: "Personal Project"
    },
    {
        title: "FPS Shooters",
        description: "FPS Shooters is an intense, action-packed mobile game developed using Unity. As a first-person shooter, it offers a variety of challenging missions, including defending flags, eliminating enemies, defusing bombs, sniping from elevated positions, and planting bombs in enemy bases. The game features smooth controls, realistic combat scenarios, and immersive gameplay designed for mobile devices. Integrated with Unity Ads and AdMob for monetization, as well as Firebase Analytics to track user engagement and performance., this project was developed for a client and is now live on the Play Store, providing players with thrilling combat missions on the go.",
        titleImages: ["./images/fps.png", "./images/fps1.png", "./images/fps2.png", "./images/fps6.png", "./images/fps7.png", "./images/fps8.png", "./images/fps4.png"],
        images: ["../public/images/fps.png", "../public/images/fps1.png", "../public/images/fps2.png", "../public/images/fps6.png", "../public/images/fps7.png", "../public/images/fps8.png", "../public/images/fps4.png"],
        link: "https://play.google.com/store/apps/details?id=com.SectionSoft.FPSShootingGunGames2025",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Running Game",
        description: "Running Interactive Wall Game is a dynamic, fast-paced game offering both single-player and two-player modes. Players can choose their preferred difficulty level, where speed progressively increases, and set a game time from the available options. In two-player mode, the game challenges players to avoid obstacles and collect coins, with the player who scores the most by the end of the game declared the winner. If a player hits an obstacle, they'll fall behind, adding an extra layer of competition. This game offers exciting, competitive gameplay that tests agility and timing.",
        titleImages: ["./images/run2.png", "./images/run1.png", "./images/run3.png"],
        images: ["../public/images/run2.png", "../public/images/run1.png", "../public/images/run3.png"],
        link: "https://www.youtube.com/watch?v=xoh62EL0WrE&feature=youtu.be",
        Category: "Gaming",
        Client: "Kids Playland Company"
    },
    {
        title: "Color The Animals",
        description: "This engaging coloring game allows players to unleash their throw paint on variety of animated animals. As players click on different animals, they can choose from a vibrant palette of colors to bring each creature to life. Each animal features unique animations, reacting with happiness or frustration. The game ends once all animals have been colored, providing a fun and interactive way to enjoy art.",
        titleImages: ["./images/color.png", "./images/color1.jpg", "./images/color2.jpg", "./images/color3.jpg"],
        images: ["../public/images/color.png", "../public/images/color1.jpg", "../public/images/color2.jpg", "../public/images/color3.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Kids Playland Company"
    },
    {
        title: "Bricks Breaker",
        description: "Experience the excitement of the Brick Breaker Game, where players can choose between engaging single-player or competitive two-player modes. In this fast-paced game, players aim to smash bricks across various maps while racing against the clock. In two-player mode, the winner is determined by who destroys the most bricks within the selected time limit. For single-player mode, players must eliminate all bricks before time runs out to secure victory. With dynamic gameplay and multiple maps to explore, each session promises a fun and challenging experience!",
        titleImages: ["./images/brick.jpg", "./images/brick1.png", "./images/brick2.png","./images/brick3.png","./images/brick6.png","./images/brick8.png"],
        images: ["../public/images/brick.jpg", "../public/images/brick1.png", "../public/images/brick2.png", "../public/images/brick3.png", "../public/images/brick6.png", "../public/images/brick8.png"],
        link: "",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Electric Car Simulation",
        description: "The Electric Car Simulation is a tailored interactive video sequence designed specifically for ENGIE Vianeo, meeting their unique branding and project requirements. This engaging experience is made for two-players, allowing players to interact with a series of videos. Players must charge their vehicles and tap on-screen buttons that appear during gameplay. As the videos progress, they will encounter questions related to electric vehicles; answering correctly will gain energy and points.",
        titleImages: ["./images/vi.png", "./images/vi1.png", "./images/vi2.png","./images/vi3.png", "./images/vi4.png"],
        images: ["../public/images/vi.png", "../public/images/vi1.png", "../public/images/vi2.png", "../public/images/vi3.png", "../public/images/vi4.png"],
        link: "",
        Category: "Gaming",
        Client: "ENGIE Vianeo"
    },
    // Add more project objects here...
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
function ProjectCard({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="project-card">
        <div className="image-container">
          <button className="arrow left-arrow" onClick={prevImage}>&lt;</button>
          <img src={project.titleImages[currentImageIndex]} alt={project.title} />
          <button className="arrow right-arrow" onClick={nextImage}>&gt;</button>
        </div>
        <h3>{project.title}</h3>
        <Link to={`/project/${encodeURIComponent(project.title)}`}>View Project</Link>
        </div>
    );
}

export default Projects;
