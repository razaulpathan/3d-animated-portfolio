import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = ['hero', 'projects', 'skills', 'contact'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-container"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo">Raza</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <motion.button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;
