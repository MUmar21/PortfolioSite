export const projectsData = [
  { 
    title: "Kibo No Ken", 
    desc: "3D isometric action-adventure for PC and mobile. Play as a young prince questing for a legendary sword, battling demons and a dark lord in a rich story-driven world.", 
    images: ["./images/kbk.png", "./images/kbk1.png", "./images/kbk2.png", "./images/kbk3.png", "./images/kbk4.png", "./images/kbk10.png", "./images/kbk6.png", "./images/kbk7.png", "./images/kbk12.png"], 
    link: "https://www.youtube.com/watch?v=wHYxLtUvvns", 
    Category: "3D Action-Adventure", 
    Client: "Personal Project - FYP", 
    tags: ["Unity", "C#", "Mobile", "PC"],
    role: "Lead Unity Developer",
    technicalHighlights: [
      "Engineered a modular architecture using ScriptableObjects to manage core game state, allowing variables to be overwritten and tuned at runtime without recompiling.",
      "Implemented fluid UI and combat navigation animations using DOTween for high-performance, code-driven transitions.",
      "Optimized 3D rendering pipeline for mobile devices, significantly reducing draw calls through static batching and texture atlasing."
    ]
  },
  { 
    title: "Drone Air Attack", 
    desc: "Fast-paced aerial combat with customizable weapons, smart enemy AI, and dynamic missions. Stunning visuals and immersive sound deliver a thrilling drone warfare experience.", 
    images: ["./images/Drone1.jpg", "./images/Drone2.jpg", "./images/Drone3.jpg", "./images/Drone4.jpg", "./images/Drone5.jpg"], 
    link: "https://play.google.com/store/apps/details?id=com.disect360.drone.air.strike.war.drone", 
    Category: "Mobile Shooter", 
    Client: "Section Soft", 
    tags: ["Unity", "Android", "Ads", "Firebase"],
    role: "Lead Unity Developer",
    technicalHighlights: [
      "Engineered a modular architecture using ScriptableObjects to manage core game state, allowing variables to be overwritten and tuned at runtime without recompiling.",
      "Implemented fluid UI and combat navigation animations using DOTween for high-performance, code-driven transitions.",
      "Optimized 3D rendering pipeline for mobile devices, significantly reducing draw calls through static batching and texture atlasing."
    ]
  },
  { 
    title: "Ertugral the Warrior", 
    desc: "Story-driven multiplayer action inspired by Ertugrul. Fight with AI teammates, defend camps, and battle opposing teams. Built with Photon Fusion 2.", 
    images: ["./images/E1.jpg", "./images/E2.jpg", "./images/E3.jpg", "./images/E4.jpg"], 
    link: "", 
    Category: "Multiplayer Action", 
    Client: "Freelance", 
    tags: ["Photon Fusion", "Multiplayer", "AI", "Unity"],
    role: "Multiplayer Systems Engineer",
    technicalHighlights: [
      "Integrated Photon Fusion 2 for seamless multiplayer connectivity, handling lobby creation, session management, and precise RPC state synchronization.",
      "Connected the game client to a PlayFab backend server to handle secure player authentication, remote configurations, and persistent loadout data.",
      "Developed a custom AI state machine for NPC teammates and enemy factions to dynamically respond to player actions during camp defense scenarios."
    ]
  },
  { 
    title: "Archery Bow Shooting", 
    desc: "Hyper-casual mobile with smooth archery across 50 handcrafted levels. Features polished UI, daily rewards, unlockable skins, and integrated Unity Ads.", 
    images: ["./images/Archery1.jpg", "./images/Archery2.jpg", "./images/Archery3.jpg", "./images/Archery4.jpg", "./images/Archery5.jpg", "./images/Archery6.jpg", "./images/Archery7.jpg", "./images/Archery8.jpg", "./images/Archery9.jpg"], 
    link: "https://play.google.com/store/apps/details?id=com.techsol.archery.arrow.shooting.action", 
    Category: "Hyper-Casual", 
    Client: "Section Soft", 
    tags: ["Unity", "Android", "Unity Ads", "50 Levels"] 
  },
  { 
    title: "FPS Shooters", 
    desc: "Intense FPS with flag defense, bomb defusal, sniping, and base infiltration missions. Live on Play Store with Unity Ads and Firebase Analytics tracking.", 
    images: ["./images/fps.png", "./images/fps1.png", "./images/fps2.png", "./images/fps6.png", "./images/fps7.png", "./images/fps8.png", "./images/fps4.png"], 
    link: "https://play.google.com/store/apps/details?id=com.SectionSoft.FPSShootingGunGames2025", 
    Category: "FPS Mobile", 
    Client: "Section Soft", 
    tags: ["Unity", "AdMob", "Firebase", "Play Store"],
    role: "Game Programmer",
    technicalHighlights: [
      "Implemented deep Firebase Analytics event tracking to monitor user drop-off rates, mission success metrics, and weapon preference.",
      "Built a highly optimized object pooling system for projectiles and hit particle effects to maintain steady 60 FPS on low-end Android devices.",
      "Integrated a hybrid monetization strategy using Unity Ads and AdMob, ensuring smooth ad delivery without interrupting core gameplay loops."
    ]
  },
  { 
    title: "Car Stunt Game", 
    desc: "Action-packed driving game with checkpoint levels, dynamic obstacles, ramp stunts, and realistic physics. Multiple control modes and a purchasable car roster.", 
    images: ["./images/CarStunt1.jpg", "./images/CarStunt2.jpg", "./images/CarStunt3.jpg", "./images/CarStunt4.jpg", "./images/CarStunt5.jpg", "./images/CarStunt6.jpg", "./images/CarStunt7.jpg", "./images/CarStunt8.jpg"], 
    link: "", 
    Category: "Racing / Stunt", 
    Client: "Section Soft", 
    tags: ["Unity", "Physics", "Mobile", "Multiple Cars"] 
  },
  { 
    title: "Park The Car Game", 
    desc: "Top-down parking simulation with realistic car physics. Navigate tight spaces, hit checkpoints, and park precisely without collisions.", 
    images: ["./images/CarParking1.jpg", "./images/CarParking2.jpg", "./images/CarParking3.jpg", "./images/CarParking4.jpg", "./images/CarParking5.jpg", "./images/CarParking6.jpg"], 
    link: "", 
    Category: "Simulation", 
    Client: "Section Soft", 
    tags: ["Unity", "Top-Down", "Mobile", "Physics"] 
  },
  { 
    title: "Word Checking Game", 
    desc: "Puzzle game where players swipe shuffled letters to form words. Features dynamic word suggestions, timer challenges, and a modular swipe input system.", 
    images: ["./images/WC1.jpg", "./images/WC2.jpg", "./images/WC4.jpg", "./images/WC3.jpg", "./images/WC5.jpg"], 
    link: "", 
    Category: "Puzzle / Casual", 
    Client: "Freelance", 
    tags: ["Unity", "Word Game", "Mobile", "Swipe Input"] 
  },
  { 
    title: "Running Game", 
    desc: "Dynamic interactive wall installation with single and two-player modes. Speed increases per difficulty; competitive play with obstacle penalties.", 
    images: ["./images/run2.png", "./images/run1.png", "./images/run3.png"], 
    link: "https://www.youtube.com/watch?v=xoh62EL0WrE&feature=youtu.be", 
    Category: "Interactive Installation", 
    Client: "Kids Playland", 
    tags: ["Unity", "Multiplayer", "Installation"] 
  },
  { 
    title: "Memory Game", 
    desc: "Arcade memory game with single and multiplayer modes. Players earn tokens through matching mechanics with special cards and undo functionality.", 
    images: ["./images/AM1.jpg", "./images/AM2.jpg", "./images/AM3.jpg", "./images/AM4.jpg", "./images/AM5.jpg"], 
    link: "", 
    Category: "Casual / Puzzle", 
    Client: "Section Soft", 
    tags: ["Unity", "Multiplayer", "Mobile", "Casual"] 
  },
  { 
    title: "Basketball Dunk Hoop", 
    desc: "Fast mobile game where players swipe to dunk through hoops — Static and Moveable modes. Avoid bombs, earn coins, and customize ball skins.", 
    images: ["./images/Basket1.jpg", "./images/Basket2.jpg", "./images/Basket3.jpg", "./images/Basket4.jpg", "./images/Basket5.jpg", "./images/Basket6.jpg"], 
    link: "https://www.youtube.com/watch?v=9G5I2D0OPd4", 
    Category: "Hyper-Casual", 
    Client: "Section Soft", 
    tags: ["Unity", "Swipe", "Mobile", "Customization"] 
  },
  { 
    title: "AI Car Simulation", 
    desc: "AI-driven car autonomously navigates a track using front-facing sensors for obstacle avoidance and raycasting for curved boundary detection.", 
    images: ["./images/AICar1.jpg", "./images/AICar2.jpg", "./images/AICar3.jpg", "./images/AICar4.jpg", "./images/AICar5.jpg", "./images/AICar6.jpg", "./images/AICar7.jpg", "./images/AICar8.jpg", "./images/AICar9.jpg", "./images/AICar10.jpg"], 
    link: "https://youtu.be/qX_3virmqWA", 
    Category: "AI Simulation", 
    Client: "Freelance", 
    tags: ["AI", "Raycasting", "Sensors", "Unity"],
    role: "AI / ML Developer",
    technicalHighlights: [
      "Designed an autonomous driving system utilizing continuous physics raycasting to act as virtual LiDAR sensors.",
      "Calculated dynamic speed and steering adjustments using sensor feedback arrays to maintain optimal track positioning.",
      "Developed custom Unity Editor scripts to visualize sensor reach and debug AI decision-making processes in real-time."
    ]
  },
  { 
    title: "Electric Car Simulation", 
    desc: "Interactive video sequence for ENGIE Vianeo. Two-player experience: charge vehicles and answer EV questions during gameplay to gain points.", 
    images: ["./images/vi.png", "./images/vi1.png", "./images/vi2.png", "./images/vi3.png", "./images/vi4.png"], 
    link: "", 
    Category: "Interactive Experience", 
    Client: "ENGIE Vianeo", 
    tags: ["Unity", "Interactive Video", "2-Player", "Branding"] 
  },
  { 
    title: "Color The Animals", 
    desc: "Coloring game where players throw paint on animated animals. Each animal reacts with happiness or frustration. Educational and creative.", 
    images: ["./images/color.png", "./images/color1.jpg", "./images/color2.jpg", "./images/color3.jpg"], 
    link: "", 
    Category: "Educational / Kids", 
    Client: "Kids Playland", 
    tags: ["Unity", "Kids", "Educational", "Animation"] 
  },
  { 
    title: "Bricks Breaker", 
    desc: "Classic brick-breaking with single and two-player competitive modes. Race against the clock across multiple maps to destroy the most bricks.", 
    images: ["./images/brick.jpg", "./images/brick1.png", "./images/brick2.png", "./images/brick3.png", "./images/brick6.png", "./images/brick8.png"], 
    link: "", 
    Category: "Arcade", 
    Client: "Section Soft", 
    tags: ["Unity", "Arcade", "2-Player", "Mobile"] 
  },
];

export const STATS = [
  { val: '20+', lbl: 'Games Shipped' },
  { val: '2+', lbl: 'Years Experience' },
  { val: '10+', lbl: 'Studios & Clients' },
  { val: 'AAA', lbl: 'Quality Standard' },
];

export default projectsData;