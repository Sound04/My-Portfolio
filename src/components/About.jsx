import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="section-title-wrapper">
          <span className="section-subtitle">Get to know me</span>
          <h3 className="section-title">About Me</h3>
          <div className="title-underline"></div>
        </ScrollReveal>
        
        <div className="about-grid">
          {/* Left: Glass Cards */}
          <ScrollReveal variant="fade-right" className="about-info-cards">
            <div className="glass-card stat-card">
              <div className="stat-icon-wrapper">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h4>Education</h4>
              <p>BE Computer Science & Engineering</p>
              <span className="stat-meta">KGiSL Institute of Technology</span>
            </div>
            
            <div className="glass-card stat-card">
              <div className="stat-icon-wrapper">
                <i className="fa-solid fa-code"></i>
              </div>
              <h4>Experience</h4>
              <p>Machine Learning Intern</p>
              <span className="stat-meta">Privacy Weave</span>
            </div>

            <div className="glass-card stat-card">
              <div className="stat-icon-wrapper">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h4>Projects Built</h4>
              <p>MERN Stack & Python</p>
              <span className="stat-meta">Full Stack Web Apps</span>
            </div>
          </ScrollReveal>
          
          {/* Right: Bio Details */}
          <ScrollReveal variant="fade-left" className="about-text-content">
            <p className="about-text-lead">
              I am a Computer Science and Engineering student at KGiSL Institute of Technology with a strong passion for Full Stack Development and Software Engineering.
            </p>
            <p className="about-text-body">
              I enjoy building responsive and scalable web applications using the MERN Stack. My interests include frontend development, backend systems, databases, and creating real-world software solutions. I thrive on translating design prototypes into interactive, highly performant code interfaces, keeping user experience and clean code architecture at the forefront of my process.
            </p>
            
            <div className="personal-details-grid">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Soundarya J</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">
                  <a href="mailto:soundaryajaga2005@gmail.com">soundaryajaga2005@gmail.com</a>
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Coimbatore, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Degree:</span>
                <span className="detail-value">BE Computer Science (2023 - 2027)</span>
              </div>
            </div>
            
            <div className="about-cta-wrapper">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="#skills" className="btn btn-outline">Explore My Skills</a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
