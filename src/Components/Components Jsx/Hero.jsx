import "../Componenets Css/Hero.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  
  // Scroll to the footer section
  const scrollToFooter = () => {
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the project section
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  const openHireMe = () => {
    window.open("https://www.upwork.com/freelancers/~01d3c8ad355e5adf9f?mp_source=share", "_blank", "noopener,noreferrer");
  };
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        {/* Hero Content */}
        <div className="hero-content">
          <h3>Welcome to My Portfolio</h3>
          <h2>I am Muhammad Umar</h2>
          <h1>Game Developer</h1>
          <p>
          I am a versatile Developer with expertise in Unity, C#, and web technologies like HTML, CSS, JavaScript, and React. I create engaging 2D and 3D games for mobile, PC, and WebGL platforms, and build dynamic, responsive websites. Proficient in Git, GitHub, and Git LFS, I also have experience hosting sites on GitHub Pages. Skilled in UI design and integration, I ensure seamless user experiences across games and web applications. This portfolio, developed in React, showcases my ability to combine design and functionality. Whether working solo or in a team, I deliver high-quality projects that exceed expectations. </p>
          {/* Work Experience Section */}
          <div className="work-experience">
            <h3>Work Experience:</h3>
            <ul>
              <li>Game Developer at Section Soft (Present)</li>
              <li>Freelance Game Developer: delivering custom game solutions</li>
              <li>Experienced in 2D/3D game development using Unity and C#</li>
              <li>Personal project: 3D action-adventure game for PC and mobile</li>
            </ul>
          </div>
          {/* Buttons Section */}
          <div className="hero-buttons">
            <button onClick={scrollToProjects}>View My Work</button>
            <button onClick={scrollToFooter}>Contact Me</button>
            <button onClick={openHireMe}>Hire Me</button>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:umarsaddiq1212@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="about-image">
          <img src="./images/m5.png" alt="About Me" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
