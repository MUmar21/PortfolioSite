import { motion } from 'framer-motion';
import '../Componenets Css/Skills.css';
import {
  Cpu, Globe, Database, Eye, Glasses, Activity,
  Zap, Layout, DollarSign, BarChart3, Rocket, Wrench
} from 'lucide-react';

// ─── Service data — rewritten to sound human and specific ─────────────────────
const services = [
  {
    id: 1,
    icon: Cpu,
    title: 'Game Systems Architecture',
    desc: 'I build game systems with a focus on clean architecture, modular components, and clear data flow, making projects easier to develop, maintain, debug, and extend as they grow.',
  },
  {
    id: 2,
    icon: Globe,
    title: 'Multiplayer & Networking',
    desc: 'I build multiplayer systems with Mirror, Photon Fusion 2, and PlayFab, focusing on server-authoritative architecture, RPCs, state synchronization, matchmaking, and reliable networked gameplay.',
  },
  {
    id: 3,
    icon: Database,
    title: 'Backend & Live Operations',
    desc: 'PlayFab for authentication, leaderboards, and cloud saves. Firebase for analytics and real-time data. I wire the backend so the game feels alive long after launch.',
  },
  {
    id: 4,
    icon: Eye,
    title: 'AI & Computer Vision',
    desc: 'I can Integrate MediaPipe and MoveNet into Unity to turn a camera feed into game input — pose detection, gesture recognition, full-body tracking for interactive installations.',
  },
  {
    id: 5,
    icon: Glasses,
    title: 'VR & XR Development',
    desc: 'Built VR experiences with Unity XR Interaction Toolkit — spatial UI, haptics, DSP-driven audio sync, and the hard work of keeping frame rates stable on headset hardware.',
  },
  {
    id: 6,
    icon: Activity,
    title: 'Physics & Simulation',
    desc: 'From vehicle controllers to modular machinery systems, I develop responsive and reliable physics and simulation systems for interactive experiences.',
  },
  {
    id: 7,
    icon: Zap,
    title: 'Optimization & Profiling',
    desc: 'I use profiling and data-driven optimization to improve draw calls, texture memory, asset loading, and GC performance, while resolving memory issues, ANRs, and crashes to deliver smooth and stable experiences across target platforms.',  
  },
  {
    id: 8,
    icon: Layout,
    title: 'Cross-Platform Deployment',
    desc: 'Android, iOS, PC, and XR headsets. I handle build pipelines, Unity Addressables for modular asset delivery and reduced initial download size, platform-specific quirks, store submissions, and post-launch crash triage.',
  },
  {
    id: 9,
    icon: DollarSign,
    title: 'Monetization Integration',
    desc: 'Unity Ads, AdMob, mediation stacks, IAP — integrated cleanly so the game earns without punishing the player.',
  },
  {
    id: 10,
    icon: BarChart3,
    title: 'Analytics & SDK Setup',
    desc: 'Firebase Analytics with custom events, funnel tracking, and retention metrics.',
  },
  {
    id: 11,
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc: 'I can take a mechanic from whiteboard to playable prototype. Useful for pitches, game jams, and killing bad ideas before they become expensive ones.',
  },
  {
    id: 12,
    icon: Wrench,
    title: 'Custom Editor Tooling',
    desc: 'I have built and published Scene Optimizer Pro on the Unity Asset Store. I write Unity Editor scripts that can save development time every week — automation, asset auditing, workflow tools.',
  },
];

const cardV = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.06 },
  }),
};

function ServiceCard({ s, i }) {
  const Icon = s.icon;
  return (
    <motion.div
      className="svc-card"
      variants={cardV}
      initial="hidden"
      whileInView="visible"
      custom={i}
      viewport={{ once: false, amount: 0.08 }}
    >
      <div className="svc-icon-ring">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h4 className="svc-title">{s.title}</h4>
      <p className="svc-desc">{s.desc}</p>
    </motion.div>
  );
}

function Skills() {
  const bgUrl = `${import.meta.env.BASE_URL}images/bg.png`;

  return (
    <section className="skills-section" id="skills-section">
      <div className="s-bg" style={{ backgroundImage: `url(${bgUrl})` }} aria-hidden />
      <div className="s-scan" aria-hidden />
      <div className="s-vignette" aria-hidden />
      <div className="sk-orb sk-orb-l" aria-hidden />
      <div className="sk-orb sk-orb-r" aria-hidden />

      <div className="skills-inner">
        <div className="skills-header">
          <span className="section-eyebrow">What I Do</span>
          <h2 className="sk-heading">
            Services &amp; <span className="grad-text">Capabilities</span>
          </h2>
          <p className="sk-sub">
            From solo mobile titles to multiplayer live-service games — I've built across the
            full spectrum. Here's what I can bring to your project or team.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
