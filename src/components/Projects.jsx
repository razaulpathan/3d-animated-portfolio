import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = ({ scrollY }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with 3D product visualization',
      tags: ['React', 'Node.js', 'Three.js', 'MongoDB'],
      image: '🛍️',
    },
    {
      id: 2,
      title: 'Interactive Data Dashboard',
      description: 'Real-time analytics dashboard with 3D data visualization',
      tags: ['React', 'D3.js', 'WebGL', 'Express'],
      image: '📊',
    },
    {
      id: 3,
      title: 'VR Portfolio Experience',
      description: 'Immersive virtual reality portfolio using Three.js',
      tags: ['Three.js', 'Babylon.js', 'WebXR', 'React'],
      image: '🎮',
    },
    {
      id: 4,
      title: 'AI Chatbot Interface',
      description: 'Conversational AI with animated 3D avatars',
      tags: ['React', 'OpenAI', 'Three.js', 'WebSocket'],
      image: '🤖',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="projects-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)' }}
          >
            <div className="project-icon">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
