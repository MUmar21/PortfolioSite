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
            I’m a versatile Game and Web Developer with a Bachelor’s degree in Computer Science and over 1 year of professional experience in game development. My core strengths lie in Unity, C#, and object-oriented programming, with a solid grasp of gameplay mechanics, level design, and performance optimization. I’ve developed a variety of game types—from hyper-casual mobile titles to PC and multiplayer experiences—bringing creative ideas to life through engaging, polished gameplay.
            Alongside game development, I’m also proficient in web technologies like HTML, CSS, JavaScript, and React. I create responsive, dynamic websites and have experience deploying them using GitHub Pages. I'm skilled in Git, GitHub, and Git LFS, ensuring smooth version control and collaboration.
            As a passionate gamer and problem-solver, I bring a player-focused mindset, write clean and maintainable code, and ensure cross-platform performance. Whether working solo or within a team, I’m committed to delivering high-quality digital experiences.
          </p>
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
          <img src="./images/m.png" alt="About Me" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
