import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';
import { socialLinks } from '../../data/portfolio';
import './SocialMedia.css';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: FaEnvelope,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

function SocialMedia() {
  return (
    <div className="social-media">
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon] || FaGithub;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
}

export default SocialMedia;


