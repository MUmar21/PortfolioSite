import { motion } from 'framer-motion';
import { Users, BookOpen, Award, ChevronRight, GraduationCap, Code2 } from 'lucide-react';
import '../Componenets Css/Training.css';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const fadeLeft = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 } },
};

const curriculum = [
  'Unity Engine fundamentals and editor workflow',
  'C# programming and object-oriented design patterns',
  'Game architecture — state machines, managers, ScriptableObjects',
  'Physics systems, animation, VFX, and UI development',
  'Mobile Optimization',
  'Project structure and professional production pipeline',
];

const stats = [
  { val: '50+',    lbl: 'Students Trained',     icon: Users        },
  { val: 'Unity',  lbl: 'Primary Engine',        icon: BookOpen     },
  { val: 'C# & OOP', lbl: 'Core Programming',   icon: Code2        },
  { val: 'Live',   lbl: 'Active Programme',      icon: GraduationCap },
];

export default function Training() {
  return (
    <section className="training-section" id="training">
      <div className="tr-orb tr-orb-a" aria-hidden />
      <div className="tr-orb tr-orb-b" aria-hidden />

      <div className="tr-inner">

        {/* Header */}
        <motion.div
          className="tr-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="section-eyebrow">Mentorship</span>
          <h2 className="tr-heading">
            Game Dev <span className="grad-text">Training</span>
          </h2>
          <p className="tr-sub">
            Alongside professional development work, I delivered a
            structured Unity game development curriculum at CEGA —
            taking students from no programming background to shipping their own games.
          </p>
        </motion.div>

        {/* Main layout — left content, right curriculum */}
        <div className="tr-layout">

          {/* Left — overview + stat block */}
          <motion.div
            className="tr-left"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {/* Institute block */}
            <div className="tr-institute-block">
              <div className="tr-institute-header">
                <div className="tr-inst-icon">
                  <GraduationCap size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="tr-inst-label">Training Institute</span>
                  <h3 className="tr-inst-name">Cega Institute</h3>
                </div>
              </div>

              {/* Big number */}
              <div className="tr-big-stat">
                <span className="tr-big-val">50+</span>
                <span className="tr-big-lbl">Students trained in Unity<br />game development</span>
              </div>

              <p className="tr-inst-desc">
                I serve as a Unity Game Development Instructor at CEGA,
                delivering hands-on online live sessions that combine 
                programming fundamentals with real game production workflows.
                Every student leaves with a working game they built themselves.
              </p>

              <p className="tr-inst-desc">
                The programme is structured to mirror how professional teams actually
                work — iterative builds, clean architecture from day one, and shipping
                as the final milestone rather than an afterthought.
              </p>

              {/* Role badge */}
              <div className="tr-role-badge">
                <Award size={14} />
                Unity Game Development Instructor
              </div>
            </div>
          </motion.div>

          {/* Right — curriculum */}
          <motion.div
            className="tr-right"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            <div className="tr-curriculum-card">
              <div className="tr-curriculum-header">
                <BookOpen size={18} strokeWidth={1.5} />
                <span>Course Curriculum</span>
              </div>

              <ul className="tr-curriculum-list">
                {curriculum.map((item, i) => (
                  <motion.li
                    key={i}
                    className="tr-curriculum-item"
                    variants={fadeUp}
                    custom={i * 0.05}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <ChevronRight size={13} className="tr-chevron" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Outcome block */}
              <div className="tr-outcome">
                <span className="tr-outcome-label">Graduate Outcome</span>
                <p className="tr-outcome-text">
                  Students complete the programme with a portfolio-ready mobile game,
                  a solid grasp of C# and Unity architecture, and the skills to continue
                  learning independently or pursue entry-level game development roles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          className="tr-stat-strip"
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {stats.map(({ val, lbl, icon: Icon }) => (
            <div key={lbl} className="tr-strip-item">
              <div className="tr-strip-icon">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              <div className="tr-strip-text">
                <span className="tr-strip-val">{val}</span>
                <span className="tr-strip-lbl">{lbl}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="tr-quote"
          variants={fadeUp}
          custom={0.4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="tr-quote-mark">"</span>
          Teaching game development forces you to understand it completely.
          Every system I've taught, I've understood ten times better afterward.
          <span className="tr-quote-attr">— Muhammad Umar Saddiq</span>
        </motion.blockquote>

      </div>
    </section>
  );
}