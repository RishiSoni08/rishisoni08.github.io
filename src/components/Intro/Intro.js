import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Intro.css';

function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="intro">
      <div className="container">
        <div className="intro-content">
          {/* Text Content */}
          <motion.div
            className="intro-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="intro-greeting" variants={itemVariants}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="intro-name" variants={itemVariants}>
              {personalInfo.name}
              <span className="intro-dot">.</span>
            </motion.h1>

            {personalInfo.nickname && (
              <motion.p className="intro-nickname" variants={itemVariants}>
                ( {personalInfo.nickname} )
              </motion.p>
            )}

            <motion.h2 className="intro-title" variants={itemVariants}>
              {personalInfo.title}
            </motion.h2>

            <motion.p className="intro-subtitle" variants={itemVariants}>
              {personalInfo.subtitle}
            </motion.p>

            <motion.div variants={itemVariants}>
              <SocialMedia />
            </motion.div>

            <motion.div className="intro-cta" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                View My Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="intro-illustration"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="illustration-wrapper">
              {/* SVG Illustration - Developer at work */}
              <svg viewBox="0 0 500 500" className="developer-illustration">
                {/* Background shapes */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#f093fb', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#f5576c', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                
                {/* Decorative circles */}
                <circle cx="400" cy="100" r="60" fill="url(#grad2)" className="float-shape" />
                <circle cx="80" cy="350" r="40" fill="url(#grad2)" className="float-shape delay-1" />
                <circle cx="450" cy="400" r="30" fill="url(#grad2)" className="float-shape delay-2" />
                
                {/* Desk */}
                <rect x="100" y="320" width="300" height="15" rx="5" fill="#e0e0e0" />
                <rect x="120" y="335" width="20" height="80" rx="3" fill="#bdbdbd" />
                <rect x="360" y="335" width="20" height="80" rx="3" fill="#bdbdbd" />
                
                {/* Monitor */}
                <rect x="150" y="200" width="200" height="120" rx="8" fill="#2d3748" />
                <rect x="158" y="208" width="184" height="96" rx="4" fill="#1a202c" />
                
                {/* Code on screen */}
                <rect x="170" y="220" width="80" height="8" rx="2" fill="#667eea" />
                <rect x="170" y="235" width="120" height="8" rx="2" fill="#48bb78" />
                <rect x="170" y="250" width="60" height="8" rx="2" fill="#f6ad55" />
                <rect x="170" y="265" width="100" height="8" rx="2" fill="#667eea" />
                <rect x="170" y="280" width="75" height="8" rx="2" fill="#fc8181" />
                
                {/* Monitor stand */}
                <rect x="230" y="320" width="40" height="10" rx="2" fill="#a0aec0" />
                <rect x="240" y="310" width="20" height="10" fill="#a0aec0" />
                
                {/* Keyboard */}
                <rect x="180" y="360" width="140" height="30" rx="5" fill="#4a5568" />
                <rect x="188" y="368" width="124" height="14" rx="3" fill="#2d3748" />
                
                {/* Coffee cup */}
                <ellipse cx="380" cy="350" rx="20" ry="8" fill="#8b5a2b" />
                <rect x="360" y="320" width="40" height="30" rx="5" fill="#d69a4c" />
                <path d="M400 330 Q420 340 400 350" stroke="#d69a4c" strokeWidth="8" fill="none" />
                
                {/* Plant */}
                <rect x="100" y="290" width="30" height="30" rx="3" fill="#c4a77d" />
                <ellipse cx="115" cy="270" rx="25" ry="25" fill="#48bb78" />
                <ellipse cx="100" cy="260" rx="15" ry="20" fill="#68d391" />
                <ellipse cx="130" cy="265" rx="12" ry="18" fill="#38a169" />
                
                {/* Floating elements */}
                <g className="float-shape delay-1">
                  <rect x="50" y="150" width="50" height="50" rx="10" fill="url(#grad1)" opacity="0.2" transform="rotate(15 75 175)" />
                </g>
                <g className="float-shape delay-2">
                  <polygon points="420,200 450,250 390,250" fill="url(#grad1)" opacity="0.2" />
                </g>
              </svg>

              {/* Floating decorative elements */}
              <div className="floating-element elem-1">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="10" y="10" width="40" height="40" rx="8" fill="url(#grad1)" opacity="0.1" transform="rotate(15 30 30)" />
                </svg>
              </div>
              <div className="floating-element elem-2">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="15" fill="#667eea" opacity="0.15" />
                </svg>
              </div>
              <div className="floating-element elem-3">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <polygon points="25,5 45,40 5,40" fill="#764ba2" opacity="0.1" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;


