import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks, footerText } from '../../data/portfolio';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Description */}
          <div className="footer-brand">
            <a href="#intro" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
              <span className="logo-text">{personalInfo.name.split(' ')[0]}</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-description">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#intro">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              {socialLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.name}
                >
                  {link.icon === 'github' && <FaGithub />}
                  {link.icon === 'linkedin' && <FaLinkedin />}
                  {link.icon === 'twitter' && <FaTwitter />}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            {footerText} <FaHeart className="heart-icon" /> © {currentYear} {personalInfo.name}
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


