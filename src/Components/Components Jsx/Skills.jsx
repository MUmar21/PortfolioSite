import { motion } from 'framer-motion';
import '../Componenets Css/Skills.css';
import {
  Cpu, Globe, Database, Eye, Glasses, Activity,
  Zap, Layout, DollarSign, BarChart3, Rocket, Wrench
} from 'lucide-react';

const services = [
  { id: 1,  icon: Cpu,        title: 'Core Systems Architecture',         desc: 'Engineering scalable, modular game frameworks in Unity that ensure long-term stability and easy feature expansion.' },
  { id: 2,  icon: Globe,      title: 'Multiplayer & Network Engineering',  desc: 'Implementing robust real-time synchronization using Photon (PUN), Mirror, and Netcode for GameObjects.' },
  { id: 3,  icon: Database,   title: 'Backend & LiveOps Integration',      desc: 'Developing persistent game worlds with PlayFab server logic, secure authentication, and global leaderboards.' },
  { id: 4,  icon: Eye,        title: 'AI & Computer Vision',               desc: 'Integrating MediaPipe and MoveNet for advanced motion tracking, gesture recognition, and pose-driven mechanics.' },
  { id: 5,  icon: Glasses,    title: 'Immersive VR Development',           desc: 'Designing high-fidelity Virtual Reality experiences with optimized physics and intuitive spatial UI/UX.' },
  { id: 6,  icon: Activity,   title: 'Advanced Physics & Simulators',      desc: 'Creating high-accuracy simulation systems and complex physics-based gameplay for industrial or entertainment use.' },
  { id: 7,  icon: Zap,        title: 'Technical Optimization & Profiling', desc: 'Identifying bottlenecks and optimizing GPU/CPU performance, memory management, and draw calls for 60 FPS.' },
  { id: 8,  icon: Layout,     title: 'Cross-Platform Deployment',          desc: 'Tailoring and porting high-performance builds across PC (Steam), Android, and iOS ecosystems.' },
  { id: 9,  icon: DollarSign, title: 'Data-Driven Monetization',           desc: 'Strategic integration of Unity Ads, AdMob, and Mediation to maximize LTV without compromising experience.' },
  { id: 10, icon: BarChart3,  title: 'Analytics & SDK Implementation',     desc: 'Implementing Firebase Analytics and custom event tracking to gain deep insights into player behavior.' },
  { id: 11, icon: Rocket,     title: 'Rapid Prototyping & MVP Development',desc: 'Transforming core concepts into playable MVPs quickly to validate mechanics and secure project funding.' },
  { id: 12, icon: Wrench,     title: 'Automated Tooling & Editor Scripting',desc: 'Building custom Unity Editor tools to automate workflows, localization, and asset management.' },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.055 }
  }),
};

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <motion.div
      className="service-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="service-icon-ring">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h4 className="service-title">{service.title}</h4>
      <p  className="service-desc">{service.desc}</p>
    </motion.div>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills-section">

      {/* Ambient orbs */}
      <div className="skills-orb skills-orb-left"  aria-hidden />
      <div className="skills-orb skills-orb-right" aria-hidden />

      <div className="skills-inner">
        {/* Header */}
        <div className="skills-header">
          <span className="section-eyebrow">What I Build</span>
          <h2 className="skills-heading">
            Services &amp; <span className="grad-text">Capabilities</span>
          </h2>
          <p className="skills-subheading">
            From multiplayer architecture to VR experiences — a full suite of
            game-engineering services for studios and product teams worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;