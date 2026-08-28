import { useState } from 'react';
import { motion } from 'framer-motion';
import '../Componenets Css/Tools.css';

// ─── Data — grouped by category ───────────────────────────────────────────────
const categories = [
  {
    id: 'engines',
    label: 'Engines & Tools',
    items: [
      { name: 'Unity',        icon: './images/unity.png'        },
      { name: 'Unreal Engine 5', icon: './images/unreal.png'    },
      { name: 'GitHub',       icon: './images/Github.png'       },
      { name: 'Firebase',     icon: './images/firebase.png'     },
      { name: 'PlayFab',      icon: './images/photon.png'       },
      { name: 'Mirror Net.',  icon: './images/mirror.png'       },
      { name: 'Photon',       icon: './images/photon.png'       },
      { name: 'AdMob / Ads',  icon: './images/admob.png'        },
      { name: 'MediaPipe',    icon: './images/mediapipe.png'    },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'C#',           icon: './images/C.png'            },
      { name: 'C++',          icon: './images/C++.png'            },
      { name: 'Python',       icon: './images/python.png'       },
      { name: 'JavaScript',   icon: './images/JS.png'           },
      { name: 'HTML / CSS',   icon: './images/hc.png'           },
      { name: 'React',        icon: './images/React.png'        },
    ],
  },
  {
    id: 'design',
    label: 'Design & Creative',
    items: [
      { name: 'Blender',      icon: './images/blender.png'      },
      { name: 'Figma',        icon: './images/Figma.png'        },
      { name: 'Photoshop',    icon: './images/photoshop.png'    },
      { name: 'Premiere Pro', icon: './images/premiere-pro.png' },
      { name: 'Jira', icon: './images/Jira.png' },
    ],
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const cardV = {
  hidden:  { opacity: 0, scale: 0.9, y: 12 },
  visible: (i) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: (i % 5) * 0.055 },
  }),
};

const panelV = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Single tool card ─────────────────────────────────────────────────────────
function ToolCard({ skill, index }) {
  return (
    <motion.div
      className="tool-card"
      variants={cardV}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -4, scale: 1.04, transition: { duration: 0.18 } }}
    >
      <div className="tool-icon-wrap">
        <img src={skill.icon} alt={skill.name} className="tool-icon" loading="lazy" />
      </div>
      <p className="tool-name">{skill.name}</p>
    </motion.div>
  );
}

// ─── Tools Section ────────────────────────────────────────────────────────────
function Tools() {
  const [activeTab, setActiveTab] = useState('engines');
  const active = categories.find(c => c.id === activeTab);

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
            Game engines, programming languages, and creative software — the full stack
            I use to take a project from concept to shipped product.
          </p>
        </div>

        {/* Category tabs */}
        <div className="tools-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`tools-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — animates when tab changes */}
        <motion.div
          key={activeTab}
          className="tools-grid"
          variants={panelV}
          initial="hidden"
          animate="visible"
        >
          {active.items.map((s, i) => (
            <ToolCard key={s.name} skill={s} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Tools;
