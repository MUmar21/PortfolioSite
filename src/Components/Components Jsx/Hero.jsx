import "../Componenets Css/Hero.css";
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube, FaArrowDown } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const imageVariants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
};

function Tag({ children }) {
  return <span className="hero-tag">{children}</span>;
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="social-link" aria-label={label}>
      <Icon />
    </a>
  );
}

function Hero() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  const scrollToFooter = () =>
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  const openHireMe = () =>
    window.open("https://www.upwork.com/freelancers/~01d3c8ad355e5adf9f?mp_source=share",
      "_blank", "noopener,noreferrer");

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <img src="./images/bg.jpeg" alt="" className="hero-bg-image" />
        <div className="hero-bg-overlay" />
        <div className="orb orb-cyan"   />
        <div className="orb orb-purple" />
        <div className="hero-grid"      />
      </div>

      <div className="hero-layout">

        {/* ── LEFT: Text ── */}
        <motion.div className="hero-content"
          variants={containerVariants} initial="hidden" animate="visible">

          <motion.span className="hero-eyebrow" variants={itemVariants}>
            <span className="eyebrow-dot" />
            Available for Remote Work · Karachi, PK
          </motion.span>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Muhammad Umar Saddiq
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            Full-Stack Game &amp;{" "}
            <span className="gradient-word">System Architect</span>
          </motion.h2>

          <motion.p className="hero-bio" variants={itemVariants}>
            I bridge high-performance game engineering with scalable web
            architecture. Professional Unity developer with shipped multiplayer
            titles, VR systems, and AI integrations — turning complex logic into
            fluid player experiences.
          </motion.p>

          <motion.div className="hero-tags" variants={itemVariants}>
            {["Mirror / Photon","PlayFab","VR Development","AI / ML","React · Python","C#"]
              .map(t => <Tag key={t}>{t}</Tag>)}
          </motion.div>

          <motion.div className="expertise-block" variants={itemVariants}>
            <p className="expertise-label">Core Expertise</p>
            <ul className="expertise-list">
              <li><span className="li-dot" />Unity &amp; C# Architect — Multiplayer, VR &amp; Physics Simulation</li>
              <li><span className="li-dot" />Technical Trainer @ Cega — Instructional Design &amp; Tech Mentorship</li>
              <li><span className="li-dot" />Full-Stack Web Developer — React, JavaScript, Cloud Integration</li>
            </ul>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button className="btn btn-primary" onClick={scrollToProjects}>View My Work</button>
            <button className="btn btn-ghost"   onClick={openHireMe}>Hire Me</button>
            <a href="/_UmarResume.pdf" download className="btn btn-outline">Download CV</a>
            <button className="btn btn-ghost"   onClick={scrollToFooter}>Contact</button>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <SocialLink href="https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/" icon={FaLinkedin} label="LinkedIn" />
            <SocialLink href="YOUR_INSTAGRAM" icon={FaInstagram} label="Instagram" />
            <SocialLink href="YOUR_YOUTUBE"   icon={FaYoutube}   label="YouTube" />
            <SocialLink href="mailto:umarsaddiq1212@gmail.com" icon={FaEnvelope} label="Email" />
            <div className="social-divider" aria-hidden />
            <span className="social-email">umarsaddiq1212@gmail.com</span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Image ── */}
        <motion.div className="hero-image-panel"
          variants={imageVariants} initial="hidden" animate="visible">

          <div className="image-glass-frame">
            <span className="corner corner-tl" aria-hidden />
            <span className="corner corner-tr" aria-hidden />
            <span className="corner corner-bl" aria-hidden />
            <span className="corner corner-br" aria-hidden />

            <img src="./images/avatar.png"
              alt="Muhammad Umar Saddiq — Game Developer"
              className="hero-avatar" />

            <motion.div className="stat-chip chip-top"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
              <span className="chip-value">3+</span>
              <span className="chip-label">Shipped Titles</span>
            </motion.div>

            <motion.div className="stat-chip chip-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
              <span className="chip-value">AAA</span>
              <span className="chip-label">Quality Standard</span>
            </motion.div>
          </div>

          <div className="image-glow" aria-hidden />
        </motion.div>

      </div>

      <motion.div className="scroll-cue"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden>
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;
