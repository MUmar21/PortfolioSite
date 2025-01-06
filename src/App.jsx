import { useState } from 'react';
import './App.css';
import Header from './Components/Components Jsx/Header';
import Hero from './Components/Components Jsx/Hero';
import Projects from './Components/Components Jsx/Projects';
import ProjectPage from './Components/Components Jsx/ProjectPage';
import Navbar from './Components/Components Jsx/Navbar';
import Skills from './Components/Components Jsx/Skills';
import Tools from './Components/Components Jsx/Tools';
import Footer from './Components/Components Jsx/Footer';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Define animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function MainContent() {
  const location = useLocation();

  // Check if the current path is "/projectpage"
  const isProjectPage = location.pathname === '/projectpage';

  return (
    <div>
      {!isProjectPage && (
        <>
          <Header />
          <Hero />
          <Navbar />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Skills />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Tools />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainContent />} />
      {/* Update this route to include :title */}
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
