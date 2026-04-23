/**
 * App.jsx
 * GlassNav is now embedded in Hero.jsx — no separate Header or Navbar needed.
 */
import './App.css';
import Hero    from './Components/Components Jsx/Hero';
import Skills  from './Components/Components Jsx/Skills';
import Projects from './Components/Components Jsx/Projects';
import Tools   from './Components/Components Jsx/Tools';
import Footer  from './Components/Components Jsx/Footer';
import ProjectPage from './Components/Components Jsx/ProjectPage';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ children, amount = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

function MainContent() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  if (isProjectPage) return null;

  return (
    <>
      <Hero />
      <Section amount={0.15}><Skills /></Section>
      <Section amount={0.08}><Projects /></Section>
      <Section amount={0.1}><Tools /></Section>
      <Section amount={0.2}><Footer /></Section>
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
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
