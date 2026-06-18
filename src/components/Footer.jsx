import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Footer Left */}
        <div className="footer-left">
          <a href="#home" className="logo footer-logo">
            <span className="logo-accent">&lt;</span>Sou<span className="logo-accent">/&gt;</span>
          </a>
          <p>Aspiring Software Engineer specializing in creating responsive, clean-code web products using the MERN Stack.</p>
        </div>
        
        {/* Footer Middle */}
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Footer Right */}
        <div className="footer-right">
          <h4>Let's Connect</h4>
          <div className="footer-socials">
            <a
              href="https://github.com/Sound04"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/soundarya-j-a899702a5"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:soundaryajaga2005@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
          <p className="footer-contact-info">Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Soundarya J. All rights reserved.</p>
          <p>
            Designed & Developed with <i className="fa-solid fa-heart text-red"></i> by{' '}
            <span className="developer-name">Soundarya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
