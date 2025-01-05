import { useState } from 'react';

const projectsData = [
    {
        title: "Kibo No Ken",
        description: "Kibo No Ken, is a personal project I’ve been developing, designed as a 3D isometric action-adventure game for both PC and mobile platforms. In this story-driven game, you play as a young prince on a quest to find a legendary sword. Along the way, you'll face enemies, powerful demons, and the dark lord who has seized control of the prince's kingdom. Your goal is to defeat these foes, avenge the prince's father, and free the people from oppression. With captivating animations, thrilling combat, and a rich storyline, Kibo No Ken offers an immersive blend of adventure and action.",
        images: ["./images/kbk.png","./images/kbk1.png", "./images/kbk2.png", "./images/kbk3.png", "./images/kbk4.png", "./images/kbk10.png", "./images/kbk6.png", "./images/kbk7.png", "./images/kbk12.png"], // Add more images here
        link: "https://www.youtube.com/watch?v=wHYxLtUvvns",
        Category: "Gaming",
        Client: "Personal Project"
    },
    {
        title: "FPS Shooters",
        description: "FPS Shooters is an intense, action-packed mobile game developed using Unity. As a first-person shooter, it offers a variety of challenging missions, including defending flags, eliminating enemies, defusing bombs, sniping from elevated positions, and planting bombs in enemy bases. The game features smooth controls, realistic combat scenarios, and immersive gameplay designed for mobile devices. Integrated with Unity Ads and AdMob for monetization, as well as Firebase Analytics to track user engagement and performance., this project was developed for a client and is now live on the Play Store, providing players with thrilling combat missions on the go.",
        images: ["./images/fps.png", "./images/fps1.png", "./images/fps2.png", "./images/fps6.png", "./images/fps7.png", "./images/fps8.png", "./images/fps4.png"],
        link: "https://play.google.com/store/apps/details?id=com.SectionSoft.FPSShootingGunGames2025",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Running Game",
        description: "Running Interactive Wall Game is a dynamic, fast-paced game offering both single-player and two-player modes. Players can choose their preferred difficulty level, where speed progressively increases, and set a game time from the available options. In two-player mode, the game challenges players to avoid obstacles and collect coins, with the player who scores the most by the end of the game declared the winner. If a player hits an obstacle, they'll fall behind, adding an extra layer of competition. This game offers exciting, competitive gameplay that tests agility and timing.",
        images: ["./images/run2.png", "./images/run1.png", "./images/run3.png"],
        link: "https://www.youtube.com/watch?v=xoh62EL0WrE&feature=youtu.be",
        Category: "Gaming",
        Client: "Kids Playland Company"
    },
    {
        title: "Color The Animals",
        description: "This engaging coloring game allows players to unleash their throw paint on variety of animated animals. As players click on different animals, they can choose from a vibrant palette of colors to bring each creature to life. Each animal features unique animations, reacting with happiness or frustration. The game ends once all animals have been colored, providing a fun and interactive way to enjoy art.",
        images: ["./images/color.png", "./images/color1.jpg", "./images/color2.jpg", "./images/color3.jpg"],
        link: "",
        Category: "Gaming",
        Client: "Kids Playland Company"
    },
    {
        title: "Bricks Breaker",
        description: "Experience the excitement of the Brick Breaker Game, where players can choose between engaging single-player or competitive two-player modes. In this fast-paced game, players aim to smash bricks across various maps while racing against the clock. In two-player mode, the winner is determined by who destroys the most bricks within the selected time limit. For single-player mode, players must eliminate all bricks before time runs out to secure victory. With dynamic gameplay and multiple maps to explore, each session promises a fun and challenging experience!",
        images: ["./images/brick.jpg", "./images/brick1.png", "./images/brick2.png","./images/brick3.png","./images/brick6.png","./images/brick8.png"],
        link: "",
        Category: "Gaming",
        Client: "Section Soft"
    },
    {
        title: "Electric Car Simulation",
        description: "The Electric Car Simulation is a tailored interactive video sequence designed specifically for ENGIE Vianeo, meeting their unique branding and project requirements. This engaging experience is made for two-players, allowing players to interact with a series of videos. Players must charge their vehicles and tap on-screen buttons that appear during gameplay. As the videos progress, they will encounter questions related to electric vehicles; answering correctly will gain energy and points.",
        images: ["./images/vi.png", "./images/vi1.png", "./images/vi2.png","./images/vi3.png", "./images/vi4.png"],
        link: "",
        Category: "Gaming",
        Client: "ENGIE Vianeo"
    },
    // Add more project objects here...
];

export default projectsData;