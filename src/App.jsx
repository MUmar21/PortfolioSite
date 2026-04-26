import './App.css';
import { useScroll, useSpring, motion } from 'framer-motion';

import Hero       from './Components/Components Jsx/Hero';
import Skills     from './Components/Components Jsx/Skills';
import Projects   from './Components/Components Jsx/Projects';
import Tools      from './Components/Components Jsx/Tools';
import Footer     from './Components/Components Jsx/Footer';
import ProjectPage from './Components/Components Jsx/ProjectPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// ─── Scroll progress bar (thin line at very top of viewport) ─────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  // useSpring smooths the bar movement — feels more premium than raw scroll
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      aria-hidden
      style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        height:          '2px',
        background:      'linear-gradient(90deg, #00F0FF, #9040FF)',
        transformOrigin: 'left center',
        scaleX,
        zIndex:          9999,
        boxShadow:       '0 0 10px rgba(0, 240, 255, 0.5)',
      }}
    />
  );
}

function PageSection({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.06 }}
      transition={{
        duration: 0.85,
        ease:     [0.22, 1, 0.36, 1],
        delay,
        filter:   { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Decorative section divider ───────────────────────────────────────────────
function SectionDivider() {
  return (
    <div aria-hidden style={{
      position:   'relative',
      height:     '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.18) 40%, rgba(138,43,226,0.18) 60%, transparent 100%)',
      margin:     '0',
      overflow:   'visible',
    }}>
      {/* Center diamond */}
      <div style={{
        position:  'absolute',
        left:      '50%',
        top:       '50%',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        width:     '6px',
        height:    '6px',
        background:'var(--q-cyan)',
        boxShadow: '0 0 8px var(--q-cyan)',
      }} />
    </div>
  );
}

// ─── Main page layout ─────────────────────────────────────────────────────────
function MainContent() {
  const location   = useLocation();
  const isProject  = location.pathname.startsWith('/project/');
  if (isProject) return null;

  return (
    <>
      {/* Hero gets no delay — it's the first thing seen */}
      <Hero />

      <SectionDivider />

      <PageSection delay={0}>
        <Skills />
      </PageSection>

      <SectionDivider />

      <PageSection delay={0}>
        <Projects />
      </PageSection>

      <SectionDivider />

      <PageSection delay={0}>
        <Tools />
      </PageSection>

      <SectionDivider />

      <PageSection delay={0}>
        <Footer />
      </PageSection>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/"               element={<MainContent />} />
      <Route path="/project/:title" element={<ProjectPage />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollProgressBar />
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
