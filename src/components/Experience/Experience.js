import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/portfolio';
import './Experience.css';

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="experience section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in data science and research.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div
          className="experience-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Colored Header */}
              <div 
                className="card-header"
                style={{ backgroundColor: exp.themeColor }}
              >
                <h3 className="company-name">{exp.company}</h3>
              </div>

              {/* Floating Logo */}
              <div className="logo-wrapper">
                <div className="logo-circle">
                  <img src={exp.logo} alt={exp.company} />
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h4 className="role-title">{exp.role}</h4>
                <p className="date-range">{exp.date}</p>
                <p className="description">{exp.description}</p>
                
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="highlights">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;

