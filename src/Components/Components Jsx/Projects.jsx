// import '../Componenets Css/Projects.css';
// import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../Componenets Css/Projects.css';
import ProjectPage  from './ProjectPage'
import { Link } from 'react-router-dom';

export const projectsData = [
    {
        title: "Kibo No Ken",
        description: "Kibo No Ken, is a personal project I’ve been developing, designed as a 3D isometric action-adventure game for both PC and mobile platforms. In this story-driven game, you play as a young prince on a quest to find a legendary sword. Along the way, you'll face enemies, powerful demons, and the dark lord who has seized control of the prince's kingdom. Your goal is to defeat these foes, avenge the prince's father, and free the people from oppression. With captivating animations, thrilling combat, and a rich storyline, Kibo No Ken offers an immersive blend of adventure and action.",
        titleImages: ["./images/kbk.png", "./images/kbk1.png", "./images/kbk2.png", "./images/kbk3.png", "./images/kbk4.png", "./images/kbk10.png", "./images/kbk6.png", "./images/kbk7.png", "./images/kbk12.png"], // Add more images here 
        images: ["../public/images/kbk.png","../public/images/kbk1.png", "../public/images/kbk2.png", "../public/images/kbk3.png", "../public/images/kbk4.png", "../public/images/kbk10.png", "../public/images/kbk6.png", "../public/images/kbk7.png", "../public/images/kbk12.png"], // Add more images here
        link: "https://www.youtube.com/watch?v=wHYxLtUvvns",
        Category: "Gaming",
        Client: "Personal Project"
    },
    {
        title: "Drone Air Attack",
        description: "A fast-paced aerial combat game where players control advanced drones in intense battles. Featuring customizable weapons, smart enemy AI, and dynamic missions across detailed war zones. With smooth controls, stunning visuals, and immersive sound, it delivers a thrilling drone warfare experience.",
        titleImages: ["./images/Drone1.jpg", "./images/Drone2.jpg", "./images/Drone3.jpg","./images/Drone4.jpg", "./images/Drone5.jpg"],
        images: ["../public/images/Drone1.jpg", "../public/images/Drone2.jpg", "../public/images/Drone3.jpg", "../public/images/Drone4.jpg","../public/images/Drone5.jpg"],
        link: "https://play.google.com/store/apps/details?id=com.disect360.drone.air.strike.war.drone",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Ertrugal the Warrior",
        description: "An action-packed, story-driven and multiplayer game inspired by the Ertugrul series. Players fight as Ertrugal with AI teammates to battle Noyan’s forces in intense missions, leading to a final duel between the two warriors. The game features smart AI combat, camp defense, and multiplayer battles where two teams face off—first leader down loses. Built with Fusion 2, it includes lobby systems, session management, RPCs, health systems, and name tags for an immersive experience.",
        titleImages: ["./images/E1.jpg", "./images/E2.jpg", "./images/E3.jpg","./images/E4.jpg"],
        images: ["../public/images/E1.jpg", "../public/images/E2.jpg", "../public/images/E3.jpg", "../public/images/E4.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Freelance"
    },
    {
        title: "Archery Bow Shooting Game",
        description: "A hyper-casual mobile game featuring smooth and realistic archery mechanics across 50 handcrafted levels. Each stage introduces unique challenges to keep gameplay engaging. With a polished UI, daily rewards, unlockable skins, shop and spin wheel, plus integrated Unity Ads and player retention systems, the game offers a fun, optimized, and highly replayable experience.",
        titleImages: ["./images/Archery1.jpg", "./images/Archery2.jpg", "./images/Archery3.jpg","./images/Archery4.jpg", "./images/Archery5.jpg", "./images/Archery6.jpg", "./images/Archery7.jpg", "./images/Archery8.jpg", "./images/Archery9.jpg"],
        images: ["../public/images/Archery1.jpg", "../public/images/Archery2.jpg", "../public/images/Archery3.jpg", "../public/images/Archery4.jpg", "../public/images/Archery5.jpg", "../public/images/Archery6.jpg", "../public/images/Archery7.jpg", "../public/images/Archery8.jpg", "../public/images/Archery9.jpg"],
        link: "https://play.google.com/store/apps/details?id=com.techsol.archery.arrow.shooting.action",
        Category: "Gaming",
        Client: "Section Soft"
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
        title: "Car Stunt Game",
        description: "Car Stunt Game is an exciting and action-packed mobile driving game where players must navigate through challenging levels, reach checkpoints, and make it to the end of the map. The game features dynamic environments with various obstacles and hurdles, requiring players to skillfully avoid them while jumping off ramps for thrilling stunts. Each level presents unique challenges, keeping the gameplay fresh and engaging. With realistic car controls, the car accelerates, brakes, noses, and turns based on a true-to-life driving mechanism. Players can choose from multiple control options, including gyro, buttons, or steering wheel controls, offering a personalized driving experience. Additionally, players can purchase and select from a variety of cars, each with its own speed and specifications, allowing for customization and strategy. This fun and adventurous game is perfect for players who love to face challenges, perform exciting stunts, and choose the perfect car for the ride!",
        titleImages: ["./images/CarStunt1.jpg", "./images/CarStunt2.jpg", "./images/CarStunt3.jpg","./images/CarStunt4.jpg", "./images/CarStunt5.jpg","./images/CarStunt6.jpg", "./images/CarStunt7.jpg","./images/CarStunt8.jpg"],
        images: ["../public/images/CarStunt1.jpg", "../public/images/CarStunt2.jpg", "../public/images/CarStunt3.jpg", "../public/images/CarStunt4.jpg", "../public/images/CarStunt5.jpg","../public/images/CarStunt6.jpg","../public/images/CarStunt7.jpg","../public/images/CarStunt8.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Park The Car Game",
        description: "Park The Car Game is a challenging and immersive top-down perspective parking simulation game, where players must drive their car through various levels, hitting checkpoints and ultimately parking the car without colliding with obstacles or road edges. The game tests the player's patience and precision, offering a realistic driving experience that requires smooth control and careful maneuvering. With multiple levels, maps, and modes to explore, players must complete each level to unlock new ones. The game features a highly realistic car driving mechanism, making it both engaging and rewarding as players navigate tight spaces and tricky turns to park their car perfectly. Available on mobile devices, this game is perfect for those who enjoy testing their driving skills and mastering the art of parking.",
        titleImages: ["./images/CarParking1.jpg", "./images/CarParking2.jpg", "./images/CarParking3.jpg","./images/CarParking4.jpg", "./images/CarParking5.jpg","./images/CarParking6.jpg"],
        images: ["../public/images/CarParking1.jpg", "../public/images/CarParking2.jpg", "../public/images/CarParking3.jpg", "../public/images/CarParking4.jpg", "../public/images/CarParking6.jpg","../public/images/CarParking5.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Word Checking Game",
        description: "An engaging word puzzle game where players swipe through shuffled letters to form words from various categories such as animals, food, and sports. Featuring a dynamic word suggestion system, timer-based challenges, and a modular swipe input system, the game delivers fast-paced, interactive, and replayable word-matching fun.",
        titleImages: ["./images/WC1.jpg", "./images/WC2.jpg", "./images/WC4.jpg","./images/WC3.jpg", "./images/WC5.jpg"],
        images: ["../public/images/WC1.jpg", "../public/images/WC2.jpg", "../public/images/WC4.jpg", "../public/images/WC3.jpg", "../public/images/WC5.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Freelance"
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
        title: "Memory Game",
        description: "A fun and engaging arcade-style memory game with both single-player and multiplayer modes. Players compete to earn tokens through matching mechanics, with added twists like special cards, undo functionality, and interactive features that keep the gameplay exciting. Designed with a clean UI and smooth flow, it offers a polished and replayable experience.",
        titleImages: ["./images/AM1.jpg", "./images/AM2.jpg", "./images/AM3.jpg","./images/AM4.jpg", "./images/AM5.jpg"],
        images: ["../public/images/AM1.jpg", "../public/images/AM2.jpg", "../public/images/AM3.jpg", "../public/images/AM4.jpg", "../public/images/AM5.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Section Soft"
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
    {
        title: "Basketball-Dunk-Hoop-Game",
        description: "Basketball Dunk Hoop Game is a fast-paced mobile game where players swipe to dunk the ball into the hoop and complete level objectives. Players must avoid obstacles like bombs and balloons while aiming to meet the level's dunk requirements before time runs out. The game features two modes: Static Mode, where the hoop stays still, and Moveable Mode, where the hoop moves across the screen, adding extra challenge. Players can also enjoy bonus levels to pop balloons for reward coins and customize their gameplay with different ball skins. With various environments, beautiful relaxing music, immersive sound effects, and exciting rewards, it's a fun and challenging game for all!",
        titleImages: ["./images/Basket1.jpg", "./images/Basket2.jpg", "./images/Basket3.jpg","./images/Basket4.jpg", "./images/Basket5.jpg","./images/Basket6.jpg"],
        images: ["../public/images/Basket1.jpg", "../public/images/Basket2.jpg", "../public/images/Basket3.jpg", "../public/images/Basket4.jpg", "../public/images/Basket5.jpg","../public/images/Basket6.jpg"],
        link: "https://www.youtube.com/watch?v=9G5I2D0OPd4",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "AI Obstacle Avoidance and Track Navigation Car Simulation",
        description: "This simulation project showcases an advanced AI-driven car that autonomously navigates a road track, avoiding obstacles and maintaining a smooth driving experience. Using front-facing sensors, the car detects and avoids obstacles while utilizing raycasting technology to stay within the road boundaries, even on curved paths. The car adjusts its speed and velocity to ensure smooth movement, maintaining optimal performance on inclines and declines. It can take turns with precision, keep steady on the road, and automatically stop when the road ends. Created for a client, this car simulation integrates cutting-edge AI techniques to deliver a realistic and efficient driving experience.",
        titleImages: ["./images/AICar1.jpg", "./images/AICar2.jpg", "./images/AICar3.jpg","./images/AICar4.jpg", "./images/AICar5.jpg","./images/AICar6.jpg", "./images/AICar7.jpg","./images/AICar8.jpg","./images/AICar9.jpg","./images/AICar10.jpg"],
        images: ["../public/images/AICar1.jpg", "../public/images/AICar2.jpg", "../public/images/AICar3.jpg", "../public/images/AICar4.jpg", "../public/images/AICar5.jpg","../public/images/AICar6.jpg","../public/images/AICar7.jpg","../public/images/AICar8.jpg","../public/images/AICar9.jpg","../public/images/AICar10.jpg"],
        link: "https://youtu.be/qX_3virmqWA",
        Category: "Gaming",
        Client: "Freelance"
    },
    // {
    //     title: "Complex UI Integration",
    //     description: "It is a project I completed for a client where I seamlessly integrated their custom UI design into Unity, ensuring high responsiveness across various screen sizes. The design was intricate, featuring numerous components, which required careful attention to detail and optimization for fluid user interaction. I utilized advanced techniques to ensure the UI maintained its functionality and aesthetic integrity on different devices, providing a smooth and intuitive experience. This project showcases my ability to handle complex UI designs and deliver results that meet the client's specifications, enhancing the overall user interface experience.",
    //     titleImages: ["./images/UIGame1.png", "./images/UIGame2.png", "./images/UIGame3.png","./images/UIGame4.png", "./images/UIGame5.png","./images/UIGame6.png","./images/UIGame7.jpg"],
    //     images: ["../public/images/UIGame1.png", "../public/images/UIGame2.png", "../public/images/UIGame3.png", "../public/images/UIGame4.png", "../public/images/UIGame5.jpg","../public/images/UIGame6.jpg","../public/images/UIGame7.png"],
    //     link: "",
    //     Category: "Gaming",
    //     Client: "Section Soft"
    // },
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
