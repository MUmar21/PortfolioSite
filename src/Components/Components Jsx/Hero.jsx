/**
 * Hero.jsx — Quantum Glass v2
 * Fonts: Orbitron (display) · Outfit (body)
 * Includes: GlassNav pill, bg image, scanlines, vignette, stat chips
 */

import '../Componenets Css/Hero.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const CYAN   = '#00F0FF';
const PURPLE = '#8A2BE2';

// ─── Nav ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: 'Home',     to: 'home'           },
  { label: 'Services', to: 'skills-section'  },
  { label: 'Projects', to: 'projects'        },
  { label: 'Skills',   to: 'tools'           },
];

function GlassNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="hero-nav"
      aria-label="Primary navigation"
    >
      <div className="nav-logo-mark">
        <img src="./images/logo.png" alt="MUS" className="nav-logo-img" />
        <span className="nav-logo-text">MUS</span>
      </div>

      <div className="nav-links">
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} smooth duration={700} offset={-80}
            spy activeClass="nav-link-active" className="nav-link">
            {l.label}
          </Link>
        ))}
      </div>

      <a href="mailto:umarsaddiq1212@gmail.com" className="nav-cta">
        Hire Me
      </a>
    </motion.nav>
  );
}

// ─── Stagger ──────────────────────────────────────────────────────────────────
const C = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } };
const I = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const imgV = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 } } };

function Tag({ c }) { return <span className="hero-tag">{c}</span>; }

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const openUpwork = () => window.open('https://www.upwork.com/freelancers/~01d3c8ad355e5adf9f?mp_source=share', '_blank', 'noopener,noreferrer');

  return (
    <>
      <GlassNav />

      <section className="hero" id="home">
        {/* Background stack */}
        <div className="hero-bg" aria-hidden>
          <img src={bgUrl} alt="" className="hero-bg-img" />
          <div className="hero-bg-overlay" />
          <div className="s-scan" />
          <div className="s-vignette" />
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="hero-grid-lines" />
        </div>

        <div className="hero-layout">
          {/* ── LEFT ── */}
          <motion.div className="hero-content" variants={C} initial="hidden" animate="visible">

            <motion.span className="hero-eyebrow" variants={I}>
              <span className="eyebrow-pulse" />
              Remote · Karachi, Pakistan · Open to Work
            </motion.span>

            <motion.p className="hero-name" variants={I}>Muhammad Umar Saddiq</motion.p>

            <motion.h1 className="hero-title" variants={I}>
              Unity Game<br />
              <span className="grad-text">Developer</span>
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={I}>
              &amp; Full-Stack System Architect
            </motion.h2>

            <motion.p className="hero-bio" variants={I}>
              I architect scalable multiplayer systems, immersive VR experiences,
              and cross-platform game solutions. 3+ shipped titles across mobile,
              PC &amp; interactive installations.
            </motion.p>

            <motion.div className="hero-tags" variants={I}>
              {['Mirror / Photon','PlayFab','VR Dev','AI / ML','React · Python','C#'].map(t => <Tag key={t} c={t} />)}
            </motion.div>

            <motion.div className="hero-expertise" variants={I}>
              <span className="expertise-label">Core Expertise</span>
              <ul>
                <li><span className="li-d" />Unity &amp; C# — Multiplayer, VR &amp; Physics Simulation</li>
                <li><span className="li-d" />Technical Trainer @ Cega — Instructional Design &amp; Mentorship</li>
                <li><span className="li-d" />Full-Stack Web — React, JavaScript, Cloud Integration</li>
              </ul>
            </motion.div>

            <motion.div className="hero-btns" variants={I}>
              <button className="q-btn q-btn-primary" onClick={() => scrollTo('projects')}>View My Work</button>
              <button className="q-btn q-btn-ghost"   onClick={openUpwork}>Hire Me</button>
              <a href="/_UmarResume.pdf" download className="q-btn q-btn-outline">Download CV</a>
            </motion.div>

            <motion.div className="hero-social" variants={I}>
              <a href="https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/" target="_blank" rel="noopener noreferrer" className="soc-link" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="soc-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="YOUR_YOUTUBE"   target="_blank" rel="noopener noreferrer" className="soc-link" aria-label="YouTube"><FaYoutube /></a>
              <a href="mailto:umarsaddiq1212@gmail.com" className="soc-link" aria-label="Email"><FaEnvelope /></a>
              <div className="soc-sep" />
              <span className="soc-email">umarsaddiq1212@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Avatar panel ── */}
          <motion.div className="hero-img-panel" variants={imgV} initial="hidden" animate="visible">
            <motion.div 
              className="hero-img-frame"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="hf-corner hf-tl" />
              <span className="hf-corner hf-tr" />
              <span className="hf-corner hf-bl" />
              <span className="hf-corner hf-br" />
              
              <img src="./images/avatar.png" alt="Muhammad Umar Saddiq" className="hero-avatar" />

              <div className="hud-label hud-top">DEVELOPER · ARCHITECT</div>
              <div className="hud-label hud-bottom">UNITY · C# · REACT</div>
            </motion.div>

            {/* Floating chips */}
            <motion.div className="stat-chip chip-a"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="chip-val">3+</span>
              <span className="chip-lbl">Shipped Titles</span>
            </motion.div>

            <motion.div className="stat-chip chip-b"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
              <span className="chip-val">AAA</span>
              <span className="chip-lbl">Quality Standard</span>
            </motion.div>

            <motion.div className="stat-chip chip-c"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
              <span className="chip-val">5+</span>
              <span className="chip-lbl">Years Experience</span>
            </motion.div>

            <div className="img-glow" aria-hidden />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div className="scroll-cue" animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} aria-hidden>
          <FaArrowDown />
          <span>Scroll</span>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
