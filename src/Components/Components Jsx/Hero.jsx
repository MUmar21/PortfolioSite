import '../Componenets Css/Hero.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube, FaArrowDown } from 'react-icons/fa';
import { Link, scroller } from 'react-scroll';
import { Briefcase, Award } from 'lucide-react';

const openUpwork = () =>
  window.open(
    'https://www.upwork.com/freelancers/~01d3c8ad355e5adf9f?mp_source=share',
    '_blank',
    'noopener,noreferrer'
  );

// ─── Scroll to projects section AND switch its tab ────────────────────────────
const goToTab = (tab) => {
  scroller.scrollTo('projects', { smooth: true, duration: 700, offset: -80 });
  // Small delay so scroll starts before the tab event fires
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('portfolio-tab-change', { detail: tab }));
  }, 200);
};

// ─── Nav links ────────────────────────────────────────────────────────────────
const navLinks = [
  { label: 'Home',     to: 'home'          },
  { label: 'Services', to: 'skills-section' },
  { label: 'Skills',   to: 'tools'          },
];

// ─── Nav animation variants ───────────────────────────────────────────────────
const navContainerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const navLinkV = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function GlassNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hero-nav"
      aria-label="Primary navigation"
    >
      <div className="nav-logo-mark">
        <img src="./images/logo.png" alt="MUS Labs" className="nav-logo-img" />
        <span className="nav-logo-text">MUS</span>
      </div>

      <motion.div
        className="nav-links"
        variants={navContainerV}
        initial="hidden"
        animate="visible"
      >
        {/* Regular scroll links */}
        {navLinks.map(l => (
          <motion.div key={l.to} variants={navLinkV}>
            <Link
              to={l.to}
              smooth
              duration={700}
              offset={-80}
              spy
              activeClass="nav-link-active"
              className="nav-link"
            >
              {l.label}
            </Link>
          </motion.div>
        ))}

        {/* Project Showcase button — scrolls + selects projects tab */}
        <motion.div variants={navLinkV}>
          <button
            className="nav-link"
            onClick={() => goToTab('projects')}
            aria-label="Go to Project Showcase"
          >
            <Briefcase size={12} style={{ marginRight: '0.3em', opacity: 0.7 }} />
            Projects
          </button>
        </motion.div>

        {/* Certificates button — scrolls + selects certificates tab */}
        <motion.div variants={navLinkV}>
          <button
            className="nav-link"
            onClick={() => goToTab('certificates')}
            aria-label="Go to Certificates"
          >
            <Award size={12} style={{ marginRight: '0.3em', opacity: 0.7 }} />
            Certificates
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        className="nav-cta"
        onClick={openUpwork}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Hire Me
      </motion.button>
    </motion.nav>
  );
}

// ─── Stagger variants ─────────────────────────────────────────────────────────
const containerV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const imageV = {
  hidden:  { opacity: 0, scale: 0.92, x: 24 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <GlassNav />

      <section className="hero" id="home">

        {/* Background */}
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

          {/* ── LEFT: Content ── */}
          <motion.div
            className="hero-content"
            variants={containerV}
            initial="hidden"
            animate="visible"
          >
            {/* Status */}
            <motion.span className="hero-eyebrow" variants={itemV}>
              <span className="eyebrow-pulse" />
              Pakistan · Open to Work · Full-Time & Freelance
            </motion.span>

            {/* Name */}
            <motion.p className="hero-name" variants={itemV}>
              Muhammad Umar Saddiq
            </motion.p>

            {/* Title */}
            <motion.h1 className="hero-title" variants={itemV}>
              Unity<br />
              <span className="grad-text">Developer</span>
            </motion.h1>
            <span className="hero-title-underline" />

            {/* Subtitle */}
            <motion.h2 className="hero-subtitle" variants={itemV}>
              Unity Programmer · Game Designer · Gameplay Engineer · VR Developer · Game Systems Architect
            </motion.h2>

            {/* Bio — direct, human, no AI tone */}
            <motion.p className="hero-bio" variants={itemV}>
              I'm a Unity developer with 2+ years of hands-on experience building mobile games,
              VR applications, and multiplayer systems for studios and clients. My work covers
              the full cycle — gameplay programming, networking, backend integration, and
              performance optimization for Android, iOS, and PC. I also teach Unity development
              at CEGA and share game dev content on YouTube.
            </motion.p>

            {/* Tags */}
            <motion.div className="hero-tags" variants={itemV}>
              {[
                'C# · C++ · Python',
                'Unity · Unreal Engine 5',
                'Multiplayer (Mirror / Photon)',
                'VR / XR',
                'PlayFab · Firebase',
                'Editor Scripting',
                'React · JavaScript',
              ].map(t => (
                <span key={t} className="hero-tag">{t}</span>
              ))}
            </motion.div>

            {/* Expertise block */}
            <motion.div className="hero-expertise" variants={itemV}>
              <span className="expertise-label">Core Strengths</span>
              <ul>
                <li><span className="li-d" />Unity & C# — gameplay, multiplayer, VR/XR, AI, physics, editor tools</li>
                <li><span className="li-d" />Unreal Engine 5 & C++ / Blueprints — gameplay systems and real-time 3D</li>
                <li><span className="li-d" />Cross-platform — Android, iOS, PC, and Meta Quest</li>
                <li><span className="li-d" />Product Ownership — Unity Asset Store published tool</li>
                <li><span className="li-d" />Technical Training — 50+ Unity students</li>
              </ul>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero-btns" variants={itemV}>
              <button
                className="q-btn q-btn-primary"
                onClick={() => scrollTo('projects')}
              >
                View My Work
              </button>
              <button className="q-btn q-btn-ghost" onClick={openUpwork}>
                Hire on Upwork
              </button>
              <a
                href="./UmarResume.pdf"
                download="UmarResume.pdf"
                className="q-btn q-btn-outline"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div className="hero-social" variants={itemV}>
              <a
                href="https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/"
                target="_blank" rel="noopener noreferrer"
                className="soc-link" aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mus_labs/"
                target="_blank" rel="noopener noreferrer"
                className="soc-link" aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@muslabsofficial"
                target="_blank" rel="noopener noreferrer"
                className="soc-link" aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:umarsaddiq1212@gmail.com"
                className="soc-link" aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <div className="soc-sep" />
              <span className="soc-email">umarsaddiq1212@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Avatar ── */}
          <motion.div
            className="hero-img-panel"
            variants={imageV}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-img-frame">
              <span className="hf-corner hf-tl" />
              <span className="hf-corner hf-tr" />
              <span className="hf-corner hf-bl" />
              <span className="hf-corner hf-br" />

              <img
                src="./images/avatar.png"
                alt="Muhammad Umar Saddiq — Unity Developer"
                className="hero-avatar"
              />

              <div className="hud-label hud-top">DEVELOPER</div>
              <div className="hud-label hud-bottom">ARCHITECT</div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              className="stat-chip chip-a"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="chip-val">20+</span>
              <span className="chip-lbl">Games Shipped</span>
            </motion.div>

            <motion.div
              className="stat-chip chip-b"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              <span className="chip-val">50+</span>
              <span className="chip-lbl">Students Trained</span>
            </motion.div>

            <motion.div
              className="stat-chip chip-c"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            >
              <span className="chip-val">2+</span>
              <span className="chip-lbl">Years Industry<br/>Experience</span>
            </motion.div>

            <div className="img-glow" aria-hidden />
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          className="scroll-cue"
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          <FaArrowDown />
          <span>Scroll</span>
        </motion.div>

      </section>
    </>
  );
}

export default Hero;
