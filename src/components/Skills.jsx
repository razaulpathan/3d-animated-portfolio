import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ scrollY }) => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    },
    {
      category: '3D & Graphics',
      skills: ['Three.js', 'Babylon.js', 'WebGL', 'GLSL', 'Blender'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Webpack'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="skills-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={categoryVariants}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-badge"
                  variants={skillVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
