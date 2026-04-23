import { FaLinkedin, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../Componenets Css/Footer.css';

const navLinks = [
  { label: 'Home',     to: 'home'          },
  { label: 'Services', to: 'skills-section' },
  { label: 'Projects', to: 'projects'       },
  { label: 'Skills',   to: 'tools'          },
];

const socials = [
  { href: 'https://www.linkedin.com/in/muhammad-umar-saddiq-967052233/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mus_labs/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@muslabsofficial',   icon: FaYoutube,   label: 'YouTube'   },
  { href: 'mailto:umarsaddiq1212@gmail.com', icon: FaEnvelope, label: 'Email' },
];

function Footer() {
  return (
    <footer className="footer" id="footer">

      {/* Top border glow line */}
      <div className="footer-glow-line" aria-hidden />

      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <img src="./images/logo.png" alt="MUS" className="footer-logo" />
          <p className="footer-tagline">
            Crafting immersive game experiences &amp; scalable digital systems.
            Open to High-Impact Remote Roles & Freelance Partnerships Worldwide.
          </p>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="footer-social" aria-label={s.label}>
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav">
            {navLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} smooth duration={600} offset={-80} className="footer-nav-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:umarsaddiq1212@gmail.com" className="contact-value">
                umarsaddiq1212@gmail.com
              </a>
            </li>
            <li>
              <span className="contact-label">Freelance</span>
              <a
                href="https://www.upwork.com/freelancers/~01d3c8ad355e5adf9f?mp_source=share"
                target="_blank" rel="noopener noreferrer"
                className="contact-value"
              >
                Hire on Upwork ↗
              </a>
            </li>
            <li>
              <span className="contact-label">Availability</span>
              <span className="contact-value contact-available">
                <span className="avail-dot" />
                Open to Remote Roles
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} · Designed &amp; built from Pakistan by Muhammad Umar Saddiq 
        </p>
        <a href="./UmarResume.pdf"  download="UmarResume.pdf" className="footer-cv-btn">
          Download CV
        </a>
      </div>

    </footer>
  );
}

export default Footer;
