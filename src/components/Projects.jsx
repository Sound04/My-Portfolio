import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onOpenDemo }) {
  const handleDemoTrigger = (e, projectTitle) => {
    e.preventDefault();
    
    let text = '';
    let codeUrl = 'https://github.com/Sound04';

    if (projectTitle.includes("Swap")) {
      text = `Spinning up the Skill Swap Hub client environment. Features included: credit calculations, user exchange dashboard, and secure mock profiles. Since this runs on static staging, please feel free to inspect full server codebase on GitHub!`;
    } else {
      text = `Loading live match updates simulator for Football Live Hub. Connecting mock API feeds and league table templates. Feel free to inspect frontend modules on GitHub!`;
    }

    onOpenDemo({
      title: `Launch Demo: ${projectTitle}`,
      text,
      codeUrl
    });
  };

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="section-title-wrapper">
          <span className="section-subtitle">My recent works</span>
          <h3 className="section-title">Featured Projects</h3>
          <div className="title-underline"></div>
        </ScrollReveal>
        
        <div className="projects-grid">
          {/* Project 1: Skill Swap Hub */}
          <ScrollReveal as="article" variant="fade-right" className="project-card glass-card">
            <div className="project-image-sim">
              <div className="project-ui-header">
                <span className="dot"></span><span className="dot"></span><span class="dot"></span>
                <div className="project-url-bar">skillswaphub.com</div>
              </div>
              <div className="project-ui-content">
                <div className="project-logo-large">
                  <i className="fa-solid fa-hands-holding-child"></i>
                  <span>Skill Swap Hub</span>
                </div>
                <div className="project-bubble credit-bubble">
                  <i className="fa-solid fa-coins"></i> 100 Credits
                </div>
                <div className="project-ui-cards-grid">
                  <div className="mini-ui-card">Learn React</div>
                  <div className="mini-ui-card">Teach Python</div>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <div className="tech-badges">
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Node.js</span>
              </div>
              <h4 className="project-title">Skill Swap Hub</h4>
              <p className="project-description">
                Developed a full-stack skill exchange platform where users can teach and learn skills through a credit-based system. Implemented robust authentication, profile management, dynamic credit tracking, and responsive user interfaces.
              </p>
              <div className="project-features">
                <h5>Key Features:</h5>
                <ul>
                  <li><i className="fa-solid fa-circle-check text-purple"></i> User Authentication</li>
                  <li><i className="fa-solid fa-circle-check text-purple"></i> Skill Marketplace</li>
                  <li><i className="fa-solid fa-circle-check text-purple"></i> Credit-Based Learning System</li>
                  <li><i className="fa-solid fa-circle-check text-purple"></i> Profile Management</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Sound04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-card-action primary-card-btn"
                >
                  <i className="fa-brands fa-github"></i> GitHub Code
                </a>
                <a
                  href="#"
                  className="btn btn-card-action secondary-card-btn demo-trigger"
                  onClick={(e) => handleDemoTrigger(e, "Skill Swap Hub")}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Project 2: Football Live Hub */}
          <ScrollReveal as="article" variant="fade-left" className="project-card glass-card">
            <div className="project-image-sim project-football-theme">
              <div className="project-ui-header">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <div className="project-url-bar">footballlivehub.org</div>
              </div>
              <div className="project-ui-content">
                <div className="project-logo-large">
                  <i className="fa-solid fa-soccer-ball"></i>
                  <span>Football Live Hub</span>
                </div>
                <div className="live-score-sim">
                  <span className="team-sim">RMA</span>
                  <span className="score-badge">2 - 1</span>
                  <span className="team-sim">BAR</span>
                  <span className="live-tag">LIVE 84'</span>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <div className="tech-badges">
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge font-secondary">Third-Party API</span>
              </div>
              <h4 className="project-title">Football Live Hub</h4>
              <p className="project-description">
                Built a football live score platform providing real-time match updates, upcoming fixtures, league standings, and detailed team statistics using external REST APIs.
              </p>
              <div className="project-features">
                <h5>Key Features:</h5>
                <ul>
                  <li><i className="fa-solid fa-circle-check text-blue"></i> Live Scores</li>
                  <li><i className="fa-solid fa-circle-check text-blue"></i> Fixtures</li>
                  <li><i className="fa-solid fa-circle-check text-blue"></i> League Standings</li>
                  <li><i className="fa-solid fa-circle-check text-blue"></i> Responsive Dashboard</li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/Sound04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-card-action primary-card-btn"
                >
                  <i className="fa-brands fa-github"></i> GitHub Code
                </a>
                <a
                  href="#"
                  className="btn btn-card-action secondary-card-btn demo-trigger"
                  onClick={(e) => handleDemoTrigger(e, "Football Live Hub")}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
