import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header  from './Components/Components Jsx/Header'
import Hero  from './Components/Components Jsx/Hero'
import Projects  from './Components/Components Jsx/Projects'
import ProjectPage  from './Components/Components Jsx/ProjectPage'
import Contact  from './Components/Components Jsx/Contact'
import Navbar from './Components/Components Jsx/Navbar'
import Skills from './Components/Components Jsx/Skills'
import Tools from './Components/Components Jsx/Tools'
import Footer from './Components/Components Jsx/Footer'

// Importing motion from framer-motion
import { motion } from 'framer-motion'

// Define animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function App() {
  return (
    <>
      <div>
        <Header />
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        > */}
          <Hero />
        {/* </motion.div> */}

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

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        > */}
          <Tools />
        {/* </motion.div> */}

        {/* Comment out or include as needed */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Contact />
        </motion.div> */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Footer />
        </motion.div>
        {/* <ProjectPage /> */}
      </div>
    </>
  )
}


export default App
