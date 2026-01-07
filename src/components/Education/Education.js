import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import './Education.css';

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="education section">
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
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="decorative-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Education List */}
        <motion.div
          className="education-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={itemVariants}
            >
              {/* Logo */}
              <div className="edu-logo">
                <img src={edu.logo} alt={edu.university} />
              </div>

              {/* Content */}
              <div className="edu-content">
                <h3 className="university-name">{edu.university}</h3>
                <h4 className="degree-name">{edu.degree}</h4>
                <p className="edu-date">{edu.date}</p>
                
                {edu.description && (
                  <p className="edu-description">{edu.description}</p>
                )}

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="edu-highlights">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider (except last item) */}
              {index < education.length - 1 && (
                <div className="edu-divider" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Education;

