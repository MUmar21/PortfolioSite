import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Tag, User, Layers } from 'lucide-react';
import { projectsData } from './Projects';
import '../Componenets Css/ProjectPage.css';

function ProjectPage() {
  const { title } = useParams();
  const navigate  = useNavigate();
  const project   = projectsData.find(p => p.title === decodeURIComponent(title));

  const [imgIdx, setImgIdx] = useState(0);

  if (!project) {
    return (
      <div className="pp-notfound">
        <span>Project not found</span>
        <button onClick={() => navigate(-1)} className="pp-back-btn">← Go Back</button>
      </div>
    );
  }

  const images = project.titleImages;
  const prev = () => setImgIdx(i => i === 0 ? images.length - 1 : i - 1);
  const next = () => setImgIdx(i => i === images.length - 1 ? 0 : i + 1);

  return (
    <div className="pp-root">

      {/* ── Ambient orbs ── */}
      <div className="pp-orb pp-orb-a" aria-hidden />
      <div className="pp-orb pp-orb-b" aria-hidden />

      {/* ── Back button (top-left, always visible) ── */}
      <motion.button
        className="pp-back-btn"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Back to projects"
      >
        <ArrowLeft size={16} />
        Back
      </motion.button>

      <div className="pp-layout">

        {/* ══ LEFT COLUMN — Image gallery ══ */}
        <motion.div
          className="pp-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main image */}
          <div className="pp-main-img-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIdx}
                src={`${import.meta.env.BASE_URL}${images[imgIdx].replace('./', '')}`}
                alt={`${project.title} screenshot ${imgIdx + 1}`}
                className="pp-main-img"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.35 }}
              />
            </AnimatePresence>

            {/* Arrows */}
            {images.length > 1 && (
              <>
                <button className="pp-arrow pp-arrow-l" onClick={prev} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <button className="pp-arrow pp-arrow-r" onClick={next} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
                <div className="pp-counter">{imgIdx + 1} / {images.length}</div>
              </>
            )}

            {/* Corner accents */}
            <span className="pp-corner pp-corner-tl" aria-hidden />
            <span className="pp-corner pp-corner-br" aria-hidden />
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="pp-thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  className={`pp-thumb ${i === imgIdx ? 'active' : ''}`}
                  onClick={() => setImgIdx(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${src.replace('./', '')}`}
                    alt=""
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* ══ RIGHT COLUMN — Project details ══ */}
        <motion.div
          className="pp-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Category badge */}
          <span className="pp-category-badge">{project.Category}</span>

          {/* Title */}
          <h1 className="pp-title">{project.title}</h1>

          {/* Meta grid */}
          <div className="pp-meta-grid">
            <div className="pp-meta-item">
              <User size={14} />
              <span className="pp-meta-label">Client</span>
              <span className="pp-meta-value">{project.Client}</span>
            </div>
            <div className="pp-meta-item">
              <Layers size={14} />
              <span className="pp-meta-label">Category</span>
              <span className="pp-meta-value">{project.Category}</span>
            </div>
          </div>

          {/* Tags */}
          {project.tags && (
            <div className="pp-tags-row">
              <Tag size={13} style={{ color: 'var(--q-cyan)', flexShrink: 0 }} />
              {project.tags.map(t => (
                <span key={t} className="pp-tag">{t}</span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="pp-divider" />

          {/* Description */}
          <div className="pp-desc-block">
            <h2 className="pp-desc-label">Project Overview</h2>
            <p className="pp-desc">{project.description}</p>
          </div>

          {/* CTA buttons */}
          <div className="pp-cta-row">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pp-cta-primary"
              >
                <ExternalLink size={15} />
                View Live / Demo
              </a>
            )}
            <button className="pp-cta-ghost" onClick={() => navigate(-1)}>
              <ArrowLeft size={15} />
              Back to Projects
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default ProjectPage;
