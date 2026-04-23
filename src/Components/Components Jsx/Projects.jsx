import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import '../Componenets Css/Projects.css';

// ─── Project data ─────────────────────────────────────────────────────────────
export const projectsData = [
  {
    title: "Kibo No Ken",
    description: "Kibo No Ken is a 3D isometric action-adventure game for PC and mobile. Play as a young prince on a quest to find a legendary sword, face enemies and powerful demons, and defeat the dark lord who seized your kingdom. Features captivating animations, thrilling combat, and a rich storyline.",
    titleImages: ["./images/kbk.png","./images/kbk1.png","./images/kbk2.png","./images/kbk3.png","./images/kbk4.png","./images/kbk10.png","./images/kbk6.png","./images/kbk7.png","./images/kbk12.png"],
    images: ["../public/images/kbk.png","../public/images/kbk1.png","../public/images/kbk2.png","../public/images/kbk3.png","../public/images/kbk4.png","../public/images/kbk10.png","../public/images/kbk6.png","../public/images/kbk7.png","../public/images/kbk12.png"],
    link: "https://www.youtube.com/watch?v=wHYxLtUvvns",
    Category: "3D Action-Adventure", Client: "Personal Project",
    tags: ["Unity","C#","Mobile","PC"]
  },
  {
    title: "Drone Air Attack",
    description: "A fast-paced aerial combat game featuring customizable weapons, smart enemy AI, and dynamic missions across detailed war zones. Smooth controls, stunning visuals, and immersive sound deliver a thrilling drone warfare experience.",
    titleImages: ["./images/Drone1.jpg","./images/Drone2.jpg","./images/Drone3.jpg","./images/Drone4.jpg","./images/Drone5.jpg"],
    images: ["../public/images/Drone1.jpg","../public/images/Drone2.jpg","../public/images/Drone3.jpg","../public/images/Drone4.jpg","../public/images/Drone5.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.disect360.drone.air.strike.war.drone",
    Category: "Mobile Shooter", Client: "Section Soft",
    tags: ["Unity","Android","Ads","Firebase"]
  },
  {
    title: "Ertugral the Warrior",
    description: "A story-driven multiplayer game inspired by the Ertugrul series. Fight as Ertrugal with AI teammates in intense missions, featuring smart AI combat, camp defense, and Photon Fusion 2 multiplayer with lobby systems and RPCs.",
    titleImages: ["./images/E1.jpg","./images/E2.jpg","./images/E3.jpg","./images/E4.jpg"],
    images: ["../public/images/E1.jpg","../public/images/E2.jpg","../public/images/E3.jpg","../public/images/E4.jpg"],
    link: "",
    Category: "Multiplayer Action", Client: "Freelance",
    tags: ["Photon Fusion","Multiplayer","AI","Unity"]
  },
  {
    title: "Archery Bow Shooting Game",
    description: "A hyper-casual mobile game with smooth archery mechanics across 50 handcrafted levels. Features polished UI, daily rewards, unlockable skins, shop and spin wheel, plus integrated Unity Ads and player retention systems.",
    titleImages: ["./images/Archery1.jpg","./images/Archery2.jpg","./images/Archery3.jpg","./images/Archery4.jpg","./images/Archery5.jpg","./images/Archery6.jpg","./images/Archery7.jpg","./images/Archery8.jpg","./images/Archery9.jpg"],
    images: ["../public/images/Archery1.jpg","../public/images/Archery2.jpg","../public/images/Archery3.jpg","../public/images/Archery4.jpg","../public/images/Archery5.jpg","../public/images/Archery6.jpg","../public/images/Archery7.jpg","../public/images/Archery8.jpg","../public/images/Archery9.jpg"],
    link: "https://play.google.com/store/apps/details?id=com.techsol.archery.arrow.shooting.action",
    Category: "Hyper-Casual", Client: "Section Soft",
    tags: ["Unity","Android","Unity Ads","50 Levels"]
  },
  {
    title: "FPS Shooters",
    description: "Intense first-person shooter with missions including flag defense, bomb defusal, sniping, and base infiltration. Live on Play Store with Unity Ads, AdMob monetization, and Firebase Analytics tracking.",
    titleImages: ["./images/fps.png","./images/fps1.png","./images/fps2.png","./images/fps6.png","./images/fps7.png","./images/fps8.png","./images/fps4.png"],
    images: ["../public/images/fps.png","../public/images/fps1.png","../public/images/fps2.png","../public/images/fps6.png","../public/images/fps7.png","../public/images/fps8.png","../public/images/fps4.png"],
    link: "https://play.google.com/store/apps/details?id=com.SectionSoft.FPSShootingGunGames2025",
    Category: "FPS Mobile", Client: "Section Soft",
    tags: ["Unity","AdMob","Firebase","Play Store"]
  },
  {
    title: "Car Stunt Game",
    description: "Action-packed mobile driving game with checkpoint-based levels, dynamic obstacles, ramp stunts, and realistic physics. Multiple control options (gyro/buttons/steering), purchasable cars with unique specs.",
    titleImages: ["./images/CarStunt1.jpg","./images/CarStunt2.jpg","./images/CarStunt3.jpg","./images/CarStunt4.jpg","./images/CarStunt5.jpg","./images/CarStunt6.jpg","./images/CarStunt7.jpg","./images/CarStunt8.jpg"],
    images: ["../public/images/CarStunt1.jpg","../public/images/CarStunt2.jpg","../public/images/CarStunt3.jpg","../public/images/CarStunt4.jpg","../public/images/CarStunt5.jpg","../public/images/CarStunt6.jpg","../public/images/CarStunt7.jpg","../public/images/CarStunt8.jpg"],
    link: "",
    Category: "Racing / Stunt", Client: "Section Soft",
    tags: ["Unity","Physics","Mobile","Multiple Cars"]
  },
  {
    title: "Park The Car Game",
    description: "Top-down parking simulation with realistic driving mechanics. Navigate tight spaces, hit checkpoints, and park precisely without collisions. Multiple levels, maps, and modes — highly polished mobile experience.",
    titleImages: ["./images/CarParking1.jpg","./images/CarParking2.jpg","./images/CarParking3.jpg","./images/CarParking4.jpg","./images/CarParking5.jpg","./images/CarParking6.jpg"],
    images: ["../public/images/CarParking1.jpg","../public/images/CarParking2.jpg","../public/images/CarParking3.jpg","../public/images/CarParking4.jpg","../public/images/CarParking6.jpg","../public/images/CarParking5.jpg"],
    link: "",
    Category: "Simulation", Client: "Section Soft",
    tags: ["Unity","Top-Down","Mobile","Physics"]
  },
  {
    title: "Word Checking Game",
    description: "Engaging word puzzle where players swipe shuffled letters to form words from categories like animals, food, and sports. Features a dynamic word suggestion system, timer-based challenges, and a modular swipe input system.",
    titleImages: ["./images/WC1.jpg","./images/WC2.jpg","./images/WC4.jpg","./images/WC3.jpg","./images/WC5.jpg"],
    images: ["../public/images/WC1.jpg","../public/images/WC2.jpg","../public/images/WC4.jpg","../public/images/WC3.jpg","../public/images/WC5.jpg"],
    link: "",
    Category: "Puzzle / Casual", Client: "Freelance",
    tags: ["Unity","Word Game","Mobile","Swipe Input"]
  },
  {
    title: "Running Game",
    description: "Dynamic interactive wall game with single-player and two-player modes. Speed progressively increases per difficulty; two-player mode tracks coin collection with obstacle penalties for the ultimate competitive experience.",
    titleImages: ["./images/run2.png","./images/run1.png","./images/run3.png"],
    images: ["../public/images/run2.png","../public/images/run1.png","../public/images/run3.png"],
    link: "https://www.youtube.com/watch?v=xoh62EL0WrE&feature=youtu.be",
    Category: "Interactive Installation", Client: "Kids Playland",
    tags: ["Unity","Multiplayer","Installation","Kinect"]
  },
  {
    title: "Memory Game",
    description: "Arcade-style memory game with single and multiplayer modes. Players earn tokens through matching mechanics with special cards, undo functionality, and interactive twists. Clean UI with smooth polished flow.",
    titleImages: ["./images/AM1.jpg","./images/AM2.jpg","./images/AM3.jpg","./images/AM4.jpg","./images/AM5.jpg"],
    images: ["../public/images/AM1.jpg","../public/images/AM2.jpg","../public/images/AM3.jpg","../public/images/AM4.jpg","../public/images/AM5.jpg"],
    link: "",
    Category: "Casual / Puzzle", Client: "Section Soft",
    tags: ["Unity","Multiplayer","Mobile","Casual"]
  },
  {
    title: "Basketball Dunk Hoop",
    description: "Fast-paced mobile game where players swipe to dunk through hoops across 2 modes: Static and Moveable. Avoid bombs and balloons, earn reward coins, and customize with different ball skins and environments.",
    titleImages: ["./images/Basket1.jpg","./images/Basket2.jpg","./images/Basket3.jpg","./images/Basket4.jpg","./images/Basket5.jpg","./images/Basket6.jpg"],
    images: ["../public/images/Basket1.jpg","../public/images/Basket2.jpg","../public/images/Basket3.jpg","../public/images/Basket4.jpg","../public/images/Basket5.jpg","../public/images/Basket6.jpg"],
    link: "https://www.youtube.com/watch?v=9G5I2D0OPd4",
    Category: "Hyper-Casual", Client: "Section Soft",
    tags: ["Unity","Swipe","Mobile","Customization"]
  },
  {
    title: "AI Car Simulation",
    description: "Advanced AI-driven car autonomously navigating a road track using front-facing sensors for obstacle avoidance and raycasting for boundary detection on curves. Adjusts speed dynamically for inclines, turns, and road ends.",
    titleImages: ["./images/AICar1.jpg","./images/AICar2.jpg","./images/AICar3.jpg","./images/AICar4.jpg","./images/AICar5.jpg","./images/AICar6.jpg","./images/AICar7.jpg","./images/AICar8.jpg","./images/AICar9.jpg","./images/AICar10.jpg"],
    images: ["../public/images/AICar1.jpg","../public/images/AICar2.jpg","../public/images/AICar3.jpg","../public/images/AICar4.jpg","../public/images/AICar5.jpg","../public/images/AICar6.jpg","../public/images/AICar7.jpg","../public/images/AICar8.jpg","../public/images/AICar9.jpg","../public/images/AICar10.jpg"],
    link: "https://youtu.be/qX_3virmqWA",
    Category: "AI Simulation", Client: "Freelance",
    tags: ["AI","Raycasting","Sensors","Unity"]
  },
  {
    title: "Electric Car Simulation",
    description: "Interactive video sequence for ENGIE Vianeo. Two-player experience where players charge vehicles and answer EV-related questions during gameplay to gain energy and points — custom-branded for the client.",
    titleImages: ["./images/vi.png","./images/vi1.png","./images/vi2.png","./images/vi3.png","./images/vi4.png"],
    images: ["../public/images/vi.png","../public/images/vi1.png","../public/images/vi2.png","../public/images/vi3.png","../public/images/vi4.png"],
    link: "",
    Category: "Interactive Experience", Client: "ENGIE Vianeo",
    tags: ["Unity","Interactive Video","2-Player","Branding"]
  },
  {
    title: "Color The Animals",
    description: "Engaging coloring game where players throw paint on animated animals. Choose from a vibrant palette; each animal reacts with happiness or frustration. Ends when all animals are colored — creative and interactive.",
    titleImages: ["./images/color.png","./images/color1.jpg","./images/color2.jpg","./images/color3.jpg"],
    images: ["../public/images/color.png","../public/images/color1.jpg","../public/images/color2.jpg","../public/images/color3.jpg"],
    link: "",
    Category: "Educational / Kids", Client: "Kids Playland",
    tags: ["Unity","Kids","Educational","Animation"]
  },
  {
    title: "Bricks Breaker",
    description: "Classic brick-breaking game with single and two-player competitive modes. Race against the clock across multiple maps. Two-player: most bricks destroyed wins. Single: clear all bricks before time runs out.",
    titleImages: ["./images/brick.jpg","./images/brick1.png","./images/brick2.png","./images/brick3.png","./images/brick6.png","./images/brick8.png"],
    images: ["../public/images/brick.jpg","../public/images/brick1.png","../public/images/brick2.png","../public/images/brick3.png","../public/images/brick6.png","../public/images/brick8.png"],
    link: "",
    Category: "Arcade", Client: "Section Soft",
    tags: ["Unity","Arcade","2-Player","Mobile"]
  },
];

// ─── Image carousel inside each card ─────────────────────────────────────────
function CardCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const prev = (e) => { e.preventDefault(); setIdx(i => i === 0 ? images.length - 1 : i - 1); };
  const next = (e) => { e.preventDefault(); setIdx(i => i === images.length - 1 ? 0 : i + 1); };

  return (
    <div className="card-carousel">
      <img src={images[idx]} alt={title} className="card-img" loading="lazy" />
      {images.length > 1 && (
        <>
          <button className="car-btn car-prev" onClick={prev} aria-label="Previous image"><ChevronLeft size={16} /></button>
          <button className="car-btn car-next" onClick={next} aria-label="Next image"><ChevronRight size={16} /></button>
          <div className="car-dots">
            {images.slice(0, Math.min(images.length, 5)).map((_, i) => (
              <span key={i} className={`car-dot ${i === idx ? 'active' : ''}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Single project card ──────────────────────────────────────────────────────
const cardMotion = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }
  }),
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="proj-card"
      variants={cardMotion}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* Image area */}
      <CardCarousel images={project.titleImages} title={project.title} />

      {/* Card body */}
      <div className="proj-body">
        {/* Meta row */}
        <div className="proj-meta">
          <span className="proj-category">{project.Category}</span>
          <span className="proj-client">{project.Client}</span>
        </div>

        <h3 className="proj-title">{project.title}</h3>

        {/* Tags */}
        <div className="proj-tags">
          {project.tags?.map(t => <span key={t} className="proj-tag">{t}</span>)}
        </div>

        {/* Footer */}
        <div className="proj-footer">
          <Link
            to={`/project/${encodeURIComponent(project.title)}`}
            className="proj-btn"
          >
            View Details
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="proj-ext" aria-label="External link">
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-orb projects-orb-a" aria-hidden />
      <div className="projects-orb projects-orb-b" aria-hidden />

      <div className="projects-inner">
        <div className="projects-header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="projects-heading">
            Shipped <span className="grad-text">Projects</span>
          </h2>
          <p className="projects-subheading">
            15 titles across mobile, PC, multiplayer, VR, and interactive
            installations — each built to production standards.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
