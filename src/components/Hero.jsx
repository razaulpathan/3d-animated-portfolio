import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="hero-content">
      <motion.div
        className="hero-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Raza Ul Pathan
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Full Stack Developer & 3D Enthusiast
        </motion.p>
        <motion.p variants={itemVariants} className="hero-description">
          Building immersive web experiences with modern technologies
        </motion.p>
        <motion.button
          variants={itemVariants}
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
