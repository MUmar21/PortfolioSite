import { motion } from 'framer-motion';
import '../Componenets Css/Tools.css';

const skillsData = [
  { id: 1,  name: 'C#',           icon: './images/C.png',           level: 'Expert',     category: 'Language' },
  { id: 2,  name: 'Unity',        icon: './images/unity.png',        level: 'Expert',     category: 'Engine' },
  { id: 3,  name: 'GitHub',       icon: './images/Github.png',       level: 'Expert',     category: 'DevOps' },
  { id: 4,  name: 'Firebase',     icon: './images/firebase.png',     level: 'Expert',     category: 'Backend' },
  { id: 5,  name: 'AdMob / Ads',  icon: './images/admob.png',        level: 'Expert',     category: 'Monetization' },
  { id: 6,  name: 'Mirror Net.',  icon: './images/mirror.png',       level: 'Expert',     category: 'Networking' },
  { id: 7,  name: 'Photon',       icon: './images/photon.png',       level: 'Expert',     category: 'Networking' },
  { id: 8,  name: 'MediaPipe',    icon: './images/mediapipe.png',    level: 'Advanced',   category: 'AI / CV' },
  { id: 9,  name: 'Photoshop',    icon: './images/photoshop.png',    level: 'Expert',     category: 'Design' },
  { id: 10, name: 'Premiere Pro', icon: './images/premiere-pro.png', level: 'Advanced',   category: 'Design' },
  { id: 11, name: 'Blender',      icon: './images/blender.png',      level: 'Proficient', category: '3D' },
  { id: 12, name: 'Figma',        icon: './images/Figma.png',        level: 'Proficient', category: 'Design' },
  { id: 13, name: 'HTML / CSS',   icon: './images/hc.png',           level: 'Expert',     category: 'Web' },
  { id: 14, name: 'JavaScript',   icon: './images/JS.png',           level: 'Proficient', category: 'Web' },
  { id: 15, name: 'React',        icon: './images/React.png',        level: 'Proficient', category: 'Web' },
];

const levelColor = {
  'Expert':     'var(--q-cyan)',
  'Advanced':   '#a78bfa',
  'Proficient': 'var(--q-muted)',
};

const cardVariants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (i % 5) * 0.06 }
  }),
};

function ToolCard({ skill, index }) {
  return (
    <motion.div
      className="tool-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -5, scale: 1.04, transition: { duration: 0.2 } }}
    >
      <div className="tool-icon-wrap">
        <img src={skill.icon} alt={skill.name} className="tool-icon" loading="lazy" />
      </div>
      <p className="tool-name">{skill.name}</p>
      <span
        className="tool-level"
        style={{ color: levelColor[skill.level] ?? 'var(--q-muted)' }}
      >
        {skill.level}
      </span>
    </motion.div>
  );
}

function Tools() {
  return (
    <section className="tools-section" id="tools">
      <div className="tools-orb tools-orb-a" aria-hidden />
      <div className="tools-orb tools-orb-b" aria-hidden />

      <div className="tools-inner">
        {/* Header */}
        <div className="tools-header">
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className="tools-heading">
            Tools &amp; <span className="grad-text">Expertise</span>
          </h2>
          <p className="tools-subheading">
            The technologies I work with daily — across game engines, networking,
            cloud backends, and creative tooling.
          </p>
        </div>

        {/* Grid */}
        <div className="tools-grid">
          {skillsData.map((s, i) => (
            <ToolCard key={s.id} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
