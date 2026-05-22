import { desc, title } from "framer-motion/client";

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
    "Systems Architecture & State Management: Engineered a robust, modular player-state machine and combo system, integrating complex enemy AI behaviors and skillsets for a dynamic isometric combat experience.",
    "Cross-Platform Input Engineering: Architected a unified input system using Unity's New Input System, delivering seamless, low-latency controls across both PC and mobile (joystick/touch) platforms.",
    "Immersive World Building & Narrative: Designed and developed detailed isometric levels alongside custom cinematic timelines to bridge gameplay and storytelling through high-fidelity visual sequences.",
    "Performance Optimization & Build Management: Executed advanced optimization workflows to maximize frame rates and minimize build size, ensuring high-performance playability on resource-constrained mobile devices.",
    ]
  },
  { 
    title: "Drone Air Attack", 
    desc: "Fast-paced aerial combat with customizable weapons, smart enemy AI, and dynamic missions. Stunning visuals and immersive sound deliver a thrilling drone warfare experience.", 
    images: ["./images/Drone1.jpg", "./images/Drone2.jpg", "./images/Drone3.jpg", "./images/Drone4.jpg", "./images/Drone5.jpg"], 
    link: "https://play.google.com/store/apps/details?id=com.disect360.drone.air.strike.war.drone", 
    Category: "Mobile Shooter", 
    Client: "Section Soft", 
    tags: ["Unity", "Android", "Monetization", "Firebase"],
    role: "Lead Unity Developer",
    technicalHighlights: [
    "Advanced Combat & AI Systems: Engineered a sophisticated drone flight controller featuring a diverse arsenal (missiles, targeted bombs, ballistic rockets) and a complex multi-tier AI system capable of managing varied threats including ground RPG units, tanks, and aerial dogfights.",
    "Modular Architecture & Data Management: Architected a scalable database using Scriptable Objects for cross-scene data persistence and implemented a robust weapon modification and shop system with custom UI for deep player progression.",
    "Live-Ops & Analytics Integration: Integrated Firebase Analytics with custom event tracking to monitor user engagement, alongside a comprehensive Ads Mediation stack (Unity & AdMob) featuring Banner, Interstitial, Native, and Rewarded formats.",
    "Optimization & Stability Engineering: Achieved high-performance gameplay by optimizing textures and FBX assets to reduce build size, eliminating memory leaks/GC spikes, and resolving ANR/crash issues for a successful Google Play Store launch.",
    "Immersive Features & Localization: Developed specialized gameplay systems including night-vision modes, dynamic camera-shake effects, and a full language localization framework to support a global multi-language audience."
    ]
  },
    { 
    title: "Beat Saber VR", 
    desc: "A high-fidelity VR rhythm game featuring an automated audio-analysis engine that procedurally generates gameplay nodes based on music frequency. The system synchronizes environmental lighting, block spawning, and haptic feedback to the audio track's peak frequencies, delivering a fully immersive and satisfying sensory experience in a 3D virtual",
    images: ["./images/BS_3.jpg", "./images/BS_1.jpg", "./images/BS_2.jpg", "./images/BS_5.jpg", "./images/BS_17.jpg","./images/BS_6.jpg", "./images/BS_7.jpg", "./images/BS_8.jpg", "./images/BS_9.jpg", "./images/BS_10.jpg", "./images/BS_11.jpg", "./images/BS_14.jpg", "./images/BS_15.jpg", "./images/BS_16.jpg"], 
    link: "", 
    Category: "Virtual Reality (VR) / Rhythm Action", 
    Client: "GOSI", 
    tags: ["Unity VR", "Audio DSP", "Procedural Generation", "XR Interaction Toolkit", "Haptics", "ScriptableObjects"],
    role: "VR Developer & Systems Architect",
    technicalHighlights: [
      "Automated Audio-Analysis Engine: Engineered a custom Digital Signal Processing (DSP) algorithm to analyze audio frequency waves in real-time, automatically generating spawn nodes and slicing directions based on beat intensity and pitch shifts.",
      "Synchronized Environmental Systems: Architected a modular 'Beat-Sync' framework that orchestrates lighting transitions, particle effects, and object spawning to match the music’s rhythm, ensuring a cohesive multi-sensory environment.",
      "Advanced XR Physics & Haptics: Developed a high-precision saber collision system utilizing the XR Interaction Toolkit, integrated with localized haptic feedback and custom shaders to provide tactile and visual crunch during successful slices.",
      "Data-Driven Level Architecture: Utilized ScriptableObjects to create a scalable node-mapping system, allowing for the rapid storage and retrieval of procedural song data while maintaining high performance in a VR context.",
      "Core Gameplay Loop & UX: Implemented a complex 'Energy System' and obstacle avoidance logic (walls) to mirror high-end rhythm game standards, focusing on low-latency input tracking to prevent VR motion sickness."
    ]
  },
  { 
    title: "Shadow Boxing", 
    desc: "A high-performance, turn-based 1v1 multiplayer shadow boxing game for Android. Built on a strict Client-Server authoritative model, the game features synchronized combat, character customization, and cross-platform matchmaking. The project evolved through multiple networking iterations to achieve a custom integration between Mirror and PlayFab, ensuring full control over game state and server-side security.", 
    images: ["./images/SB_6.jpg", "./images/SB_1.jpg", "./images/SB_2.jpg", "./images/SB_3.jpg", "./images/SB_4.jpg", "./images/SB_5.jpg", "./images/SB_7.jpg", "./images/SB_8.jpg", "./images/SB_9.jpg", "./images/SB_10.jpg"], 
    link: "", 
    Category: "Mobile / Multiplayer", 
    Client: "HourX", 
    tags: ["Mirror Networking", "PlayFab", "C#", "Client-Server Architecture", "Cloud Deployment", "Android"],
    role: "Lead Network Engineer & Gameplay Developer",
    technicalHighlights: [
    "Authoritative Server Architecture: Engineered a secure Client-Server model using Mirror, where all gameplay logic and state transitions are validated server-side via RPCs to prevent cheating and ensure perfect synchronization across clients.",
    "PlayFab Backend Integration: Architected a full-stack backend solution using PlayFab for secure user authentication, automated matchmaking, and global leaderboards, including successful deployment and scaling of dedicated server instances.",
    "Infrastructure Optimization: Successfully executed a complex migration from Photon (PUN/Fusion) to Mirror to bypass proprietary cloud constraints, establishing a custom transport layer that allows direct communication with PlayFab’s hosted servers.",
    "Synchronized Combat Systems: Developed a robust turn-based combat engine that handles character selection, dynamic avatar synchronization, and low-latency input processing for a seamless 1v1 multiplayer experience.",
    "Cloud Deployment & DevOps: Managed the end-to-end deployment pipeline, including server-side logic coding, build optimization, and remote debugging to ensure a bug-free, low-latency production environment."
    ]
  },
  { 
    title: "Scene Optimizer Pro", 
    desc: "A comprehensive, high-performance Unity Editor extension designed to audit and optimize scene-specific resources. The tool provides real-time analytics for textures, 3D models, and UI assets, allowing developers to visualize memory footprints and execute batch optimizations directly within the editor. By automating the identification of memory bottlenecks and providing guided compression workflows, it significantly reduces build sizes and improves runtime performance for multi-platform projects.",
    images: ["./images/SO_1.jpg", "./images/SO_2.jpg", "./images/SO_3.jpg", "./images/SO_4.jpg", "./images/SO_5.jpg", "./images/SO_6.jpg", "./images/SO_7.jpg", "./images/SO_8.jpg"], 
    link: "", 
    Category: "Unity Editor Tools / DevOps & Optimization", 
    Client: "MUS Labs", 
    tags: ["Unity Editor Scripting", "C#", "Workflow Automation", "Optimization", "Resource Management", "Android/iOS Development"],
    role: "Lead Tools Programmer & UI/UX Designer",
    technicalHighlights: [
     "Automated Scene Auditing Engine: Engineered a high-speed scanning algorithm that traverses the active scene hierarchy to map asset dependencies, providing detailed telemetry on texture formats, GPU memory usage, and disk estimates.",
     "Intelligent Optimization Workflow: Developed a centralized dashboard that enables one-click texture and mesh compression (FBX), allowing developers to preview projected build-size savings before applying changes.",
     "Asset-Specific Analytics: Architected a modular 'Breakdown' system that categorizes assets into specific silos (Normal Maps, Lightmaps, UI, Regular Textures), ensuring targeted optimization strategies for different asset types.",
     "Guided Issue & Recommendation System: Implemented a logic-based 'Issue Reporter' that flags high-memory assets and provides actionable technical guidance on compression settings and best practices.",
     "Custom Futuristic Editor UI: Designed and scripted a bespoke, high-performance editor window with a modern aesthetic, utilizing advanced UI layouts to present complex data in a scannable, user-friendly format.",
     "Revert & Persistence Logic: Integrated a 'Revert All' feature to ensure non-destructive workflows, allowing developers to experiment with optimization configurations safely during the production cycle."
    ]
  },
  {
    title: "Real Farming Simulator",
    desc: "A high-fidelity, systems-driven farming simulation that replicates the end-to-end agricultural lifecycle—from soil preparation to market sales. Players operate heavy machinery with modular attachment systems to perform multi-stage farming tasks including plowing, seeding, and harvesting. The project features a robust, clean-code architecture designed for high reusability, featuring realistic vehicle physics and a grid-based crop management system.",
    images: ["./images/FS_1.jpg", "./images/FS_2.jpg", "./images/FS_3.jpg", "./images/FS_4.jpg", "./images/FS_5.jpg", "./images/FS_6.jpg", "./images/FS_7.jpg", "./images/FS_8.jpg", "./images/FS_9.jpg", "./images/FS_10.jpg", "./images/FS_11.jpg", "./images/FS_12.jpg", "./images/FS_13.jpg", "./images/FS_14.jpg", "./images/FS_15.jpg"], 
    link: "", 
    Category: "Simulation / Vehicle Action", 
    Client: "Section Soft", 
    tags: ["Advanced OOP", "Design Patterns", "Vehicle Physics", "C#", "Grid Systems", "Resource Management"],
    role: "Systems Architect & Gameplay Developer",
    technicalHighlights: [
     "Modular Tool & Attachment System: Architected a highly decoupled tool system using Interfaces and Abstract Classes, allowing for seamless 'Plug-and-Play' functionality for various farming implements (plows, sprayers, harvesters) with minimal code overhead.",
     "Physics-Based Vehicle Integration: Custom-tuned the Realistic Car Controller (RCC) framework to handle heavy-duty truck physics, including specialized towing logic and weight-distribution mechanics for attached machinery.",
     "Grid-Based Crop Logic: Developed an optimized grid system to manage field states and crop growth, enabling precise tracking of player progress through different agricultural stages (plowing, watering, harvesting).",
     "State-Driven Gameplay Loop: Engineered a structured mission framework where players must execute sequential farming stages, supported by real-time progress monitoring and a dynamic 'Market' system for crop-to-currency exchange.",
     "Clean Code & Design Patterns: Applied industry-standard design patterns to ensure a scalable codebase, focusing on SOLID principles to manage complex interactions between trucks, tools, and environmental triggers.",
     "Retention & Meta-Systems: Integrated a comprehensive mobile feature set, including user onboarding flows, a game energy economy, and local push notifications to drive long-term player engagement."
    ]
  },
  { 
    title: "Computer Vision Pose Detection", 
    desc: "A cutting-edge interactive experience utilizing Computer Vision to bridge physical movement with digital gameplay. This project features a dual-implementation of MediaPipe and MoveNet to track player poses and hand gestures via a live camera feed. By calculating body centroids and skeletal landmarks, the system enables hands-free control of game elements. The architecture was specifically evolved to handle multi-user tracking on a split-screen interface, allowing two players to control independent paddles simultaneously using real-time motion data.", 
    images: ["./images/PD_1.jpg", "./images/PD_2.jpg", "./images/PD_3.jpg", "./images/PD_4.jpg", "./images/PD_5.jpg"], 
    link: "", 
    Category: "Computer Vision / AI Interaction", 
    Client: "Section Soft", 
    tags: ["Mediapipe", "MoveNet", "Computer Vision", "Pose Estimation", "Unity", "Gesture Recognition"],
    role: "AI Integration & Creative Technologist",
    technicalHighlights: [
    "Hybrid CV Framework Integration: Engineered a flexible pipeline supporting both MediaPipe and MoveNet (TensorFlow Lite), enabling a transition from single-user tracking to high-performance multi-pose detection for local multiplayer.",
    "Biometric Input Mapping: Developed an algorithm to calculate the center-point between left and right shoulders to determine body orientation, translating physical lateral movement into precise in-game paddle velocity.",
    "Heuristic Gesture Recognition: Implemented custom gesture-tracking logic that monitors hand landmark positions to trigger game events, such as a 'Hands Up' gesture to initialize the physics engine and launch gameplay.",
    "Real-Time Data Pipeline: Optimized the camera texture processing and skeletal coordinate mapping to ensure low-latency input, maintaining a responsive feel essential for fast-paced arcade mechanics.",
    "Multi-Player Split-Screen Architecture: Designed a scalable system to isolate and assign specific pose IDs to independent game controllers, allowing stable multi-user interaction within the same physical camera frame.",
    "Cross-Platform AI Implementation: Leveraged Unity’s ability to process external AI inference data, showcasing the potential for touchless interfaces in home entertainment and interactive installations."
    ]
  },
  { 
    title: "Ertugral the Warrior", 
    desc: "Story-driven multiplayer action inspired by Ertugrul. Fight with AI teammates, defend camps, and battle opposing teams. Built with Photon Fusion 2.", 
    images: ["./images/E1.jpg", "./images/E2.jpg", "./images/E3.jpg", "./images/E4.jpg"], 
    link: "", 
    Category: "Multiplayer Action", 
    Client: "Freelance", 
    tags: ["Photon Fusion", "Multiplayer", "AI", "Unity", "State Machine"],
    role: "Multiplayer Systems Engineer",
    technicalHighlights: [
    "Multiplayer Architecture (Photon Fusion 2): Engineered a high-performance networked combat system supporting both story-driven single-player and team-based multiplayer modes, utilizing a Last Team Standing win-condition logic.",
    "Tactical AI & State Management: Developed advanced finite state machines to govern complex behaviors for both teammates and enemies, enabling synchronized, large-scale AI battles where units react dynamically to the player-leader and the environment.",
    "Enhanced Controller Engineering: Extensively modified and scaled a 3rd-person controller framework to meet custom project requirements, ensuring fluid combat mechanics and responsive player movement within a high-action context.",
    "World Building & Optimization: Designed expansive terrain-based environments and implemented rigorous optimization techniques to maintain high frame rates during intense multiplayer skirmishes involving multiple active AI agents."
    ]
  },
  { 
    title: "Archery Bow Shooting", 
    desc: "Hyper-casual mobile with smooth archery across 50 handcrafted levels. Features polished UI, daily rewards, unlockable skins, and integrated Unity Ads.", 
    images: ["./images/Archery1.jpg", "./images/Archery2.jpg", "./images/Archery3.jpg", "./images/Archery4.jpg", "./images/Archery5.jpg", "./images/Archery6.jpg", "./images/Archery7.jpg", "./images/Archery8.jpg", "./images/Archery9.jpg"], 
    link: "https://play.google.com/store/apps/details?id=com.techsol.archery.arrow.shooting.action", 
    Category: "Hyper-Casual", 
    Client: "Section Soft", 
    tags: ["Unity", "Android", "Unity Ads", "50 Levels", "Mobile UI/UX", "ScriptableObjects"],
    role: "Unity Developer and Level Designer",
    technicalHighlights: [
    "High-Fidelity Input Engineering: Developed a precision-tuned, physics-based touch input mechanic that simulates realistic bow tension and release, creating a tactile and responsive feel optimized for mobile platforms.",
    "Scalable Level Architecture: Architected a modular gameplay system using ScriptableObjects to centralize level stats, objectives, and progression logic, enabling rapid development and high reusability across 50+ unique, handcrafted stages.",
    "Player Engagement & Monetization Suite: Integrated a robust live-ops framework featuring Unity Ads mediation, daily reward loops, an interactive spin-wheel, and a dynamic equipment shop, all encapsulated within a custom, polished UI.",
    "Design-Driven Gameplay: Executed end-to-end level design and balancing, implementing dynamic difficulty curves and varied objectives to ensure long-term player retention and an immersive hyper-casual experience."
    ]
  },
  { 
    title: "FPS Shooters", 
    desc: "Intense FPS with flag defense, bomb defusal, sniping, and base infiltration missions. Live on Play Store with Unity Ads and Firebase Analytics tracking.", 
    images: ["./images/fps.png", "./images/fps1.png", "./images/fps2.png", "./images/fps6.png", "./images/fps7.png", "./images/fps8.png", "./images/fps4.png"], 
    link: "", 
    Category: "FPS Mobile", 
    Client: "Section Soft", 
    tags: ["Unity", "AdMob", "Firebase", "Play Store"],
    role: "Game Programmer",
    technicalHighlights: [
    "Diverse Mission Engineering: Architected a modular FPS framework supporting multiple high-stakes game modes, including capture-the-flag defense, bomb defusal logic, and stealth-based base infiltration missions.",
    "Tactical AI & Combat Systems: Developed specialized AI behaviors for various combat roles, ranging from long-range snipers to tactical ground units, ensuring a challenging and dynamic player experience.",
    "Live-Ops & Data Analytics: Integrated Firebase Analytics for real-time user behavior tracking and custom event monitoring, paired with a Unity Ads monetization stack for sustainable live operations.",
    "Performance Optimization & Play Store Deployment: Executed comprehensive performance profiling to ensure high-fidelity visuals remained stable on mobile devices, resulting in a successful deployment and maintenance on the Google Play Store."
    ]
  },
  { 
    title: "Car Stunt Game", 
    desc: "Action-packed driving game with checkpoint levels, dynamic obstacles, ramp stunts, and realistic physics. Multiple control modes and a purchasable car roster.", 
    images: ["./images/CarStunt1.jpg", "./images/CarStunt2.jpg", "./images/CarStunt3.jpg", "./images/CarStunt4.jpg", "./images/CarStunt5.jpg", "./images/CarStunt6.jpg", "./images/CarStunt7.jpg", "./images/CarStunt8.jpg"], 
    link: "", 
    Category: "Racing / Stunt", 
    Client: "Section Soft", 
    tags: ["Unity", "Physics", "Mobile", "Multiple Cars", "UX / Interaction Design"],
    role: "Unity Developer",
    technicalHighlights: [
    "Advanced Vehicle Physics & Control: Leveraged and customized the Realistic Car Controller (RCC) framework to engineer high-fidelity driving mechanics, supporting multiple control schemes and realistic stunt-based physics.",
    "Dynamic Level Engineering: Designed and implemented a robust checkpoint system featuring interactive obstacles and high-altitude ramp stunts that challenge the player’s driving precision.",
    "Systems Architecture & Progression: Developed a modular car roster system with integrated purchasing logic and unique UI architectures to facilitate seamless player progression and vehicle customization.",
    "UI/UX & Interactive Design: Architected a bespoke, high-performance user interface tailored for fast-paced action, ensuring clear mission feedback and intuitive navigation across diverse control modes."
    ]
  },
  { 
    title: "Park The Car Game", 
    desc: "Top-down parking simulation with realistic car physics. Navigate tight spaces, hit checkpoints, and park precisely without collisions.", 
    images: ["./images/CarParking1.jpg", "./images/CarParking2.jpg", "./images/CarParking3.jpg", "./images/CarParking4.jpg", "./images/CarParking5.jpg", "./images/CarParking6.jpg"], 
    link: "", 
    Category: "Simulation", 
    Client: "Section Soft", 
    tags: ["Unity", "Top-Down", "Mobile", "Physics Simulation", "C# Optimization", "Level Design"],
    role: "Unity Developer",
    technicalHighlights: [
    "Precision Physics & Collision Detection: Engineered a high-accuracy vehicle controller with realistic steering geometry and friction models, optimized for low-speed maneuvering and frame-perfect collision detection in tight environments.",
    "Multi-Perspective Gameplay Architecture: Developed a versatile camera and control system that supports both traditional top-down and immersive third-person parking modes, ensuring consistent handling across different visual orientations.",
    "Dynamic Level & Objective System: Designed a modular level framework featuring diverse environmental challenges, checkpoint-based navigation, and a precision-parking scoring algorithm that evaluates player accuracy.",
    "Handcrafted Environmental Design: Executed comprehensive level design focused on spatial puzzles and technical driving, implementing reactive obstacles and tight spatial constraints to maximize player challenge and engagement."
    ] 
  },
  { 
    title: "Word Checking Game", 
    desc: "Puzzle game where players swipe shuffled letters to form words. Features dynamic word suggestions, timer challenges, and a modular swipe input system.", 
    images: ["./images/WC1.jpg", "./images/WC2.jpg", "./images/WC4.jpg", "./images/WC3.jpg", "./images/WC5.jpg"], 
    link: "", 
    Category: "Puzzle / Casual", 
    Client: "Freelance", 
    tags: ["Unity", "Word Game", "Mobile", "Swipe Input"],
    role: "Game Designer & Unity Developer",
    technicalHighlights: [
      "Optimized String & Logic Algorithms: Engineered a high-performance word-validation system capable of cross-referencing player input against a comprehensive dictionary database with near-zero latency.",
      "Modular Gesture & Swipe Input: Architected a custom, reusable swipe-to-select input system that handles dynamic letter connections, providing smooth and responsive visual feedback during rapid gameplay.",
      "Dynamic UI & Feedback Systems: Developed a modular UI architecture featuring real-time word suggestions, time-sensitive challenge logic, tailored for hyper-casual mobile play.",
      "State-Driven Puzzle Architecture: Implemented a robust game-state manager to handle shuffled letter generation, ensuring a bug-free experience across hundreds of randomized sessions."
    ]
  },
  { 
    title: "Running Game", 
    desc: "Dynamic interactive wall installation with single and two-player modes. Speed increases per difficulty; competitive play with obstacle penalties.", 
    images: ["./images/run2.png", "./images/run1.png", "./images/run3.png"], 
    link: "https://www.youtube.com/watch?v=xoh62EL0WrE&feature=youtu.be", 
    Category: "Interactive Wall", 
    Client: "Kids Playland", 
    tags: ["Unity 3D", "Multiplayer (Local)", "Interactive Installation", "Systems Engineering"],
    role: "Unity Developer",
    technicalHighlights: [
      "Bespoke Multi-Input Engineering: Architected a custom input handling system specifically optimized for large-scale interactive walls, enabling simultaneous two-player interaction with zero cross-talk or input interruption between users.",
      "Dynamic Difficulty & Scaling: Developed an adaptive game loop that manages real-time speed scaling, obstacle generation, and health/timer logic to provide a balanced competitive experience for varying skill levels in a public installation setting.",
      "Interactive Installation Logic: Engineered a robust, high-availability system designed for continuous operation, featuring optimized collision penalties and coin-pickup mechanics that respond instantly to physical touch on the installation surface.",
      "Performance Optimization for Large Displays: Executed specialized rendering and performance profiling to ensure smooth, high-frame-rate visuals on large-format interactive hardware, maintaining visual clarity and responsive feedback."
    ]
  },
  { 
    title: "Memory Game", 
    desc: "Arcade memory game with single and multiplayer modes. Players earn tokens through matching mechanics with special cards and undo functionality.", 
    images: ["./images/AM1.jpg", "./images/AM2.jpg", "./images/AM3.jpg", "./images/AM4.jpg", "./images/AM5.jpg"], 
    link: "", 
    Category: "Turn-Based / Puzzle", 
    Client: "Section Soft", 
    tags: ["Unity", "Competitive Multiplayer", "Systems Architecture", "Turn-Based Logic", "Arcade Mechanics", "C# Optimization"],
    role: "Unity Developer",
    technicalHighlights: [
      "High-Performance Game Logic: Designed and implemented a highly optimized matching algorithm that manages complex game states, including (Steal) mechanics, turn-skipping, and full turn-reversal (Undo) functionality.",
      "Scalable Local Multiplayer Architecture: Engineered a modular turn-based system supporting 1 to 4 players, ensuring seamless state transitions and synchronized score/token tracking across competitive sessions.",
      "Complex Card Interaction Systems: Developed a robust interaction framework for specialized card types, enabling dynamic gameplay triggers and strategic player-to-player token interactions.",
      "Modular Systems Design: Architected the core gameplay loop to be fully reusable and optimized for arcade-style performance, focusing on clean code principles to allow for easy scaling of new mechanics or visual themes."
    ]
  },
  { 
    title: "Basketball Dunk Hoop", 
    desc: "Fast mobile game where players swipe to dunk through hoops — Static and Moveable modes. Avoid bombs, earn coins, and customize ball skins.", 
    images: ["./images/Basket1.jpg", "./images/Basket2.jpg", "./images/Basket3.jpg", "./images/Basket4.jpg", "./images/Basket5.jpg", "./images/Basket6.jpg"], 
    link: "https://www.youtube.com/watch?v=9G5I2D0OPd4", 
    Category: "Hyper-Casual", 
    Client: "Section Soft", 
    tags: ["Unity", "Mobile", "Object Pooling", "Swipe Input Engineering", "Unity Ads"],
    role: "Unity Developer",
    technicalHighlights: [
      "Advanced Physics & Swipe Mechanics: Engineered a precision-based swipe input system that calculates velocity and trajectory to simulate realistic basketball physics, optimized for responsive gameplay on mobile devices.",
      "Adaptive Environment Logic: Developed modular (Static) and (Moveable) hoop modes with dynamic obstacle spawning (bombs) and randomized reward placement to ensure varied level difficulty.",
      "State-Driven Monetization & Customization: Architected a robust ball-skin customization system and bonus round logic integrated with Unity Ads, utilizing a centralized shop system for player progression and retention.",
      "Optimized Mobile Performance: Implemented object pooling for balls, hoops, and effects to maintain consistent 60 FPS on low-end devices, coupled with a lightweight UI system for seamless scene transitions."
    ]
  },
  { 
    title: "AI Car Simulation", 
    desc: "AI-driven car autonomously navigates a track using front-facing sensors for obstacle avoidance and raycasting for curved boundary detection.", 
    images: ["./images/AICar1.jpg", "./images/AICar2.jpg", "./images/AICar3.jpg", "./images/AICar4.jpg", "./images/AICar5.jpg", "./images/AICar6.jpg", "./images/AICar7.jpg", "./images/AICar8.jpg", "./images/AICar9.jpg", "./images/AICar10.jpg"], 
    link: "https://youtu.be/qX_3virmqWA", 
    Category: "AI Simulation", 
    Client: "Freelance", 
    tags: ["AI", "Raycasting", "Sensors", "Unity", "Automation"],
    role: "AI Developer",
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
    tags: ["Unity", "Interactive Video", "2-Player", "Branding", "C# Systems"],
    role: "Unity Developer",
    technicalHighlights: [
      "Dual-Track Competitive Logic: Engineered a synchronized two-player racing architecture where progress is driven by a hybrid scoring system, balancing real-time gameplay performance with accurate responses to educational EV trivia.",
      "Interactive Educational Integration: Developed a modular quiz-engine within the simulation that triggers dynamic video sequences and point multipliers, seamlessly blending informational content for ENGIE Vianeo with high-engagement play.",
      "Large-Scale Installation Optimization: Optimized the interactive video playback and physics-based charging mechanics for large-format display walls, ensuring zero-latency response times and clear visual feedback for a public audience.",
      "State-Driven Win Conditions: Architected a robust progression manager that calculates real-time leader-stats, dynamically adjusting the finish line arrival based on competitive scoring to ensure a smooth, high-impact conclusion for every session."
    ]
  },
  { 
    title: "Color The Animals", 
    desc: "Coloring game where players throw paint on animated animals. Each animal reacts with happiness or frustration. Educational and creative.", 
    images: ["./images/color.png", "./images/color1.jpg", "./images/color2.jpg", "./images/color3.jpg"], 
    link: "", 
    Category: "Educational / Kids", 
    Client: "Kids Playland", 
    tags: ["Unity 3D", "Character AI", "Kids/Educational Tech", "Animation State Machines", "Physics-Based Interaction"],
    role: "Unity Developer",
    technicalHighlights: [
      "Dynamic Surface Interaction: Engineered a high-performance 3D painting system that allows players to apply color directly onto realistic animated models using physics-based projectile logic.",
      "Reactive Character AI: Developed an emotional feedback system where 3D animals respond to player actions via a state-driven animation controller, triggering unique happiness or frustration sequences based on gameplay triggers.",
      "Educational Interaction Design: Designed a kid-friendly UX/UI focused on intuitive creative exploration, blending realistic 3D aesthetics with simplified mechanics to promote engagement and color recognition.",
      "Animation & State Management: Implemented a robust animation state machine to handle seamless transitions between idle, reactive, and celebratory states, ensuring smooth visual feedback during high-frequency interaction."
    ]
  },
  { 
    title: "Bricks Breaker", 
    desc: "Classic brick-breaking with single and two-player competitive modes. Race against the clock across multiple maps to destroy the most bricks.", 
    images: ["./images/brick.jpg", "./images/brick1.png", "./images/brick2.png", "./images/brick3.png", "./images/brick6.png", "./images/brick8.png"], 
    link: "", 
    Category: "Arcade", 
    Client: "Section Soft", 
    tags: ["Unity 3D", "Arcade", "Multiplayer (Local)", "Interactive Wall"],
    role: "Unity Developer",
    technicalHighlights: [
      "Competitive Multi-Agent Architecture: Engineered a high-speed synchronized two-player racing mode that tracks real-time destruction metrics, allowing for side-by-side competitive play on a shared interactive installation.",
      "Dynamic Level & Pattern Generation: Developed a modular system that allows for  brick layouts selection, enabling dynamic environment scaling based on user-selected difficulty and time constraints.",
      "Optimized Interactive Input System: Architected a low-latency input handling framework specifically for large-scale interactive walls, ensuring precise paddle control and collision detection for multiple simultaneous users.",
      "High-Impact Visual Effects (VFX): Implemented a performance-optimized particle and trail system for destroyed bricks and ball trajectories, enhancing the tactile feedback and visual energy of the installation without compromising frame rate."
    ]
  },
];

export const STATS = [
  { val: '20+', lbl: 'Games Shipped' },
  { val: '2+', lbl: 'Years Experience' },
  { val: '10+', lbl: 'Studios & Clients' },
  { val: 'AAA', lbl: 'Quality Standard' },
];

export default projectsData;