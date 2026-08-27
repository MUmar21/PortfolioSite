import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award, Briefcase } from 'lucide-react';
import { projectsData, STATS, certificatesData } from './ProjectsData';
import '../Componenets Css/Projects.css';

// ─── Image carousel ───────────────────────────────────────────────────────────
function CardCarousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const prev = (e) => { e.preventDefault(); setIdx(i => (i === 0 ? images.length - 1 : i - 1)); };
  const next = (e) => { e.preventDefault(); setIdx(i => (i === images.length - 1 ? 0 : i + 1)); };
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

// ─── Animation variants ───────────────────────────────────────────────────────
const cardV = {
  hidden:  { opacity: 0, y: 26 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.07 },
  }),
};

const panelV = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
};

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="pc-card"
      variants={cardV}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.06 }}
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
          <Link to={`/project/${encodeURIComponent(project.title)}`} className="pc-btn">
            View Details
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="pc-ext" aria-label="External link">
              <ExternalLink size={14}/>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Certificate Card — premium design, looks great without images ────────────
function CertCard({ cert, index }) {
  const hasImage = Boolean(cert.image);
  return (
    <motion.div
      className={`cert-card ${hasImage ? 'has-image' : ''}`}
      variants={cardV}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.06 }}
    >
      {/* Image — only renders if image path is provided */}
      {hasImage && (
        <div className="cert-img-wrap">
          <img src={cert.image} alt={cert.title} className="cert-img" loading="lazy" />
        </div>
      )}

      <div className="cert-body">
        {/* Top row: icon + issuer/date + verified badge */}
        <div className="cert-top-row">
          <div className="cert-icon-wrap">
            <Award size={20} strokeWidth={1.5} />
          </div>
          <div className="cert-meta">
            <span className="cert-issuer">{cert.issuer}</span>
            <span className="cert-date">{cert.date}</span>
          </div>
          <div className="cert-badge">
            <span className="cert-badge-dot" />
            Certified
          </div>
        </div>

        {/* Title */}
        <h3 className="cert-title">{cert.title}</h3>

        {/* Divider */}
        <div className="cert-divider" />

        {/* Description */}
        {cert.desc && <p className="cert-desc">{cert.desc}</p>}

        {/* Footer */}
        <div className="cert-footer">
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              Course Link <ExternalLink size={12} />
            </a>
          ) : (
            <span className="cert-no-link">Credential on file</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Projects + Certificates Section ────────────────────────────────────
function Projects() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;

  // Read initial tab from URL hash so nav buttons work
  const getInitialTab = () => {
    if (typeof window !== 'undefined' && window.location.hash === '#certificates') return 'certificates';
    return 'projects';
  };
  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Listen for custom event from the navbar buttons
  useEffect(() => {
    const handler = (e) => setActiveTab(e.detail);
    window.addEventListener('portfolio-tab-change', handler);
    return () => window.removeEventListener('portfolio-tab-change', handler);
  }, []);

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
          <h2 className="pj-heading">
            {activeTab === 'projects'
              ? <>Shipped <span className="grad-text">Projects</span></>
              : <>Certificates &amp; <span className="grad-text">Credentials</span></>
            }
          </h2>
          <p className="pj-sub">
            {activeTab === 'projects'
              ? 'Mobile, PC, VR, multiplayer, and interactive installations. Real clients, real deadlines, real players.'
              : 'Courses, certifications, and professional credentials that back up the work.'
            }
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="pj-toggle">
          <button
            className={`pj-toggle-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <Briefcase size={15} />
            Project Showcase
          </button>
          <button
            className={`pj-toggle-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <Award size={15} />
            Certificates
          </button>
        </div>

        {/* Stats strip — only on projects tab */}
        {activeTab === 'projects' && (
          <div className="pj-stats">
            {STATS.map(s => (
              <div key={s.lbl} className="pj-stat">
                <span className="pj-stat-val">{s.val}</span>
                <span className="pj-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        )}

        {/* Animated panel swap */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              className="pj-grid"
              variants={panelV}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {projectsData.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certificates"
              className="cert-grid"
              variants={panelV}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {certificatesData.map((c, i) => (
                <CertCard key={c.title} cert={c} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Projects;