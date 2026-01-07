import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks, personalInfo, resumeLink } from '../../data/portfolio';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="header-container">
        {/* Logo */}
        <motion.a
          href="#intro"
          className="header-logo"
          onClick={(e) => handleNavClick(e, '#intro')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">{personalInfo.name.split(' ')[0]}</span>
          <span className="logo-dot">.</span>
        </motion.a>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <a
                href={resumeLink}
                className="nav-link nav-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
}

export default Header;


