import './App.css';
import { useScroll, useSpring, motion, AnimatePresence } from 'framer-motion';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero           from './Components/Components Jsx/Hero';
import Skills         from './Components/Components Jsx/Skills';
import Projects       from './Components/Components Jsx/Projects';
import AssetSpotlight from './Components/Components Jsx/AssetSpotlight';
import Training       from './Components/Components Jsx/Training';
import Tools          from './Components/Components Jsx/Tools';
import Footer         from './Components/Components Jsx/Footer';
import ProjectPage    from './Components/Components Jsx/ProjectPage';
import MouseTrail     from './Components/Components Jsx/MouseTrail';

// ─── Scroll progress bar ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
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
        background:      'linear-gradient(90deg, #C9A96E, #3A6FBF)',
        transformOrigin: 'left center',
        scaleX,
        zIndex:          9999,
        boxShadow:       '0 0 8px rgba(201, 169, 110, 0.4)',
      }}
    />
  );
}

// ─── Section scroll-reveal wrapper ───────────────────────────────────────────
function PageSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.06 }}
      transition={{
        duration: 0.85,
        ease:     [0.22, 1, 0.36, 1],
        filter:   { duration: 0.45 },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Section divider ──────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="section-divider" aria-hidden />;
}

// ─── Route transition — smooth fade through dark ──────────────────────────────
// A thin gold line sweeps down, then fades out. Fast, seamless, premium.
function RouteWipe({ locationKey }) {
  return (
    <AnimatePresence>
      <motion.div
        key={locationKey + '-wipe'}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 0.55,
          times:    [0, 0.25, 0.65, 1],
          ease:     'easeInOut',
        }}
        aria-hidden
        style={{
          position:      'fixed',
          inset:         0,
          background:    '#0C0F1A',
          zIndex:        9990,
          pointerEvents: 'none',
        }}
      >
        {/* Thin gold accent line that slides across during transition */}
        <motion.div
          initial={{ scaleX: 0, originX: '0%' }}
          animate={{ scaleX: [0, 1, 1, 0], originX: ['0%', '0%', '100%', '100%'] }}
          transition={{
            duration: 0.55,
            times:    [0, 0.35, 0.65, 1],
            ease:     'easeInOut',
          }}
          style={{
            position:   'absolute',
            top:        '50%',
            left:       0,
            right:      0,
            height:     '1px',
            background: 'linear-gradient(90deg, transparent, #C9A96E 40%, #3A6FBF 60%, transparent)',
            opacity:    0.6,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main page layout ─────────────────────────────────────────────────────────
function MainContent() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <PageSection>
        <Skills />
      </PageSection>
      <SectionDivider />
      <PageSection>
        <Projects />
      </PageSection>
      <SectionDivider />
      {/* Scene Optimizer Pro — Asset Store spotlight */}
      <PageSection>
        <AssetSpotlight />
      </PageSection>
      <SectionDivider />
      {/* Training & Mentorship — Cega Institute + YouTube */}
      <PageSection>
        <Training />
      </PageSection>
      <SectionDivider />
      <PageSection>
        <Tools />
      </PageSection>
      <SectionDivider />
      <PageSection>
        <Footer />
      </PageSection>
    </>
  );
}

// ─── App with animated routing ────────────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <RouteWipe locationKey={location.key} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.38, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/"               element={<MainContent />} />
            <Route path="/project/:title" element={<ProjectPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Mouse trail — renders above everything except the progress bar */}
      <MouseTrail />
      <ScrollProgressBar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default AppWrapper;
