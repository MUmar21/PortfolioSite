/**
 * Skills.jsx — Quantum Glass v2
 * Added: bg image layer + scanlines + vignette
 */
import { motion } from 'framer-motion';
import '../Componenets Css/Skills.css';
import {
  Cpu, Globe, Database, Eye, Glasses, Activity,
  Zap, Layout, DollarSign, BarChart3, Rocket, Wrench
} from 'lucide-react';

const services = [
  { id: 1,  icon: Cpu,        title: 'Core Systems Architecture',          desc: 'Engineering scalable, modular game frameworks in Unity that ensure long-term stability and easy feature expansion.' },
  { id: 2,  icon: Globe,      title: 'Multiplayer & Network Engineering',   desc: 'Implementing robust real-time synchronization using Photon (PUN), Mirror, and Netcode for GameObjects.' },
  { id: 3,  icon: Database,   title: 'Backend & LiveOps Integration',       desc: 'Developing persistent game worlds with PlayFab server logic, secure authentication, and global leaderboards.' },
  { id: 4,  icon: Eye,        title: 'AI & Computer Vision',                desc: 'Integrating MediaPipe and MoveNet for advanced motion tracking, gesture recognition, and pose-driven mechanics.' },
  { id: 5,  icon: Glasses,    title: 'Immersive VR Development',            desc: 'Designing high-fidelity Virtual Reality experiences with optimized physics and intuitive spatial UI/UX.' },
  { id: 6,  icon: Activity,   title: 'Advanced Physics & Simulators',       desc: 'Creating high-accuracy simulation systems and complex physics-based gameplay for industrial or entertainment use.' },
  { id: 7,  icon: Zap,        title: 'Technical Optimization & Profiling',  desc: 'Identifying bottlenecks and optimizing GPU/CPU performance, memory management, and draw calls for 60 FPS.' },
  { id: 8,  icon: Layout,     title: 'Cross-Platform Deployment',           desc: 'Tailoring and porting high-performance builds across PC (Steam), Android, and iOS ecosystems.' },
  { id: 9,  icon: DollarSign, title: 'Data-Driven Monetization',            desc: 'Strategic integration of Unity Ads, AdMob, and Mediation to maximize LTV without compromising experience.' },
  { id: 10, icon: BarChart3,  title: 'Analytics & SDK Implementation',      desc: 'Implementing Firebase Analytics and custom event tracking to gain deep insights into player behavior.' },
  { id: 11, icon: Rocket,     title: 'Rapid Prototyping & MVP Dev',         desc: 'Transforming core concepts into playable MVPs quickly to validate mechanics and secure project funding.' },
  { id: 12, icon: Wrench,     title: 'Automated Tooling & Editor Scripting',desc: 'Building custom Unity Editor tools to automate workflows, localization, and asset management.' },
];

const cardV = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1], delay: i * 0.05 } }),
};

function ServiceCard({ s, i }) {
  const Icon = s.icon;
  return (
    <motion.div className="svc-card" variants={cardV} initial="hidden"
      whileInView="visible" custom={i} viewport={{ once: false, amount: 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}>
      <div className="svc-icon-ring"><Icon size={26} strokeWidth={1.5} /></div>
      <h4 className="svc-title">{s.title}</h4>
      <p  className="svc-desc">{s.desc}</p>
    </motion.div>
  );
}

function Skills() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;
  return (
    <section className="skills-section" id="skills-section">
      {/* Background layers */}
      <div className="s-bg" style={{ backgroundImage: `url(${bgUrl})` }} aria-hidden />
      <div className="s-scan"     aria-hidden />
      <div className="s-vignette" aria-hidden />
      <div className="sk-orb sk-orb-l" aria-hidden />
      <div className="sk-orb sk-orb-r" aria-hidden />

      <div className="skills-inner">
        <div className="skills-header">
          <span className="section-eyebrow">What I Build</span>
          <h2 className="sk-heading">Services &amp; <span className="grad-text">Capabilities</span></h2>
          <p className="sk-sub">From multiplayer architecture to VR experiences — a full suite of game-engineering services for studios and product teams worldwide.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
