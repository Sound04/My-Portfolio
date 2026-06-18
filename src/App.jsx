import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DemoModal from './components/DemoModal';

export default function App() {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <>
      {/* 1. Professional Loading Animation */}
      <Preloader />

      {/* 2. Gradient Background Glow Elements */}
      <div className="bg-gradient-glow">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* 3. Navigation Header */}
      <Navbar />

      {/* 4. Page Main content sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Biography Section */}
        <About />

        {/* Technical & Soft Skills Section */}
        <Skills />

        {/* Works Showcase Section */}
        <Projects onOpenDemo={setActiveDemo} />

        {/* Combined Layout for Experience & Education */}
        <section id="experience" className="exp-edu-section section-padding">
          <div className="container">
            <div className="exp-edu-grid">
              <Experience />
              <Education />
            </div>
          </div>
        </section>

        {/* Key Achievements Grid Section */}
        <Achievements />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* 5. Quick links and details Footer */}
      <Footer />

      {/* 6. Page utility overlays */}
      <ScrollToTop />
      <DemoModal activeDemo={activeDemo} onClose={() => setActiveDemo(null)} />
    </>
  );
}
