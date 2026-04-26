import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projectsData, STATS } from './ProjectsData';
import '../Componenets Css/Projects.css';

// Card carousel component
function CardCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  
  const prev = (e) => { 
    e.preventDefault(); 
    setIdx(i => (i === 0 ? images.length - 1 : i - 1)); 
  };
  
  const next = (e) => { 
    e.preventDefault(); 
    setIdx(i => (i === images.length - 1 ? 0 : i + 1)); 
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="cc-wrap">
      <img src={images[idx]} alt={title} className="cc-img" loading="lazy" />
      {images.length > 1 && (
        <>
          <button className="cc-btn cc-prev" onClick={prev} aria-label="Previous"><ChevronLeft size={15}/></button>
          <button className="cc-btn cc-next" onClick={next} aria-label="Next"><ChevronRight size={15}/></button>
          <div className="cc-dots">
            {images.slice(0, Math.min(images.length, 5)).map((_, i) => (
              <span key={i} className={`cc-dot ${i === idx ? 'active' : ''}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Animation variants
const pCV = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.07 } 
  }),
};

// Individual Project Card
function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className="pc-card" 
      variants={pCV} 
      initial="hidden"
      whileInView="visible" 
      custom={index} 
      viewport={{ once: false, amount: 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
    >
      <CardCarousel images={project.images} title={project.title} />
      <div className="pc-body">
        <div className="pc-meta">
          <span className="pc-cat">{project.Category}</span>
          <span className="pc-client">{project.Client}</span>
        </div>
        <h3 className="pc-title">{project.title}</h3>
        <p className="pc-desc">{project.desc}</p>
        <div className="pc-tags">
          {project.tags?.map(t => <span key={t} className="pc-tag">{t}</span>)}
        </div>
        <div className="pc-foot">
          <Link to={`/project/${encodeURIComponent(project.title)}`} className="pc-btn">View Details</Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="pc-ext" aria-label="External link">
              <ExternalLink size={14}/>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;
  
  return (
    <section className="projects-section" id="projects">
      <div className="s-bg" style={{ backgroundImage: `url(${bgUrl})` }} aria-hidden />
      <div className="s-scan" aria-hidden />
      <div className="s-vignette" aria-hidden />
      <div className="pj-orb pj-orb-a" aria-hidden />
      <div className="pj-orb pj-orb-b" aria-hidden />

      <div className="pj-inner">
        {/* Header */}
        <div className="pj-header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="pj-heading">Shipped <span className="grad-text">Projects</span></h2>
          <p className="pj-sub">
            Multiple titles across mobile, PC, multiplayer, VR, and interactive installations — each built to production standards.
          </p>
        </div>

        {/* Stats strip */}
        <div className="pj-stats">
          {STATS.map(s => (
            <div key={s.lbl} className="pj-stat">
              <span className="pj-stat-val">{s.val}</span>
              <span className="pj-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="pj-grid">
          {projectsData.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;