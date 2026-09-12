import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Scene from './components/Scene';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="hero" className="section hero-section">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene scrollY={scrollY} />
        </Canvas>
        <Hero />
      </section>

      <section id="projects" className="section projects-section">
        <Projects scrollY={scrollY} />
      </section>

      <section id="skills" className="section skills-section">
        <Skills scrollY={scrollY} />
      </section>

      <section id="contact" className="section contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
