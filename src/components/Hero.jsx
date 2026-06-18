import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  // 1. Typewriter Animation States & Configuration
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineering Enthusiast",
    "BE Computer Science Student"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    // Type / delete timer loop
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 40); // Faster delete
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 80); // Normal typing speed
    }

    // State thresholds
    if (!isDeleting && text === currentRole) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2s before erasing
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
      clearTimeout(timer);
      timer = setTimeout(() => {}, 400); // 400ms pause before next word
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  // 2. Stateful Resume Download Handler
  const [resumeStatus, setResumeStatus] = useState('idle'); // idle, preparing, ready

  const handleDownloadResume = (e) => {
    e.preventDefault();
    if (resumeStatus !== 'idle') return;

    setResumeStatus('preparing');

    setTimeout(() => {
      setResumeStatus('ready');

      // Create simulated PDF download
      const element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' +
          encodeURIComponent('Soundarya J - Resume (Full Stack Developer & MERN Specialist)')
      );
      element.setAttribute('download', 'Soundarya_J_Resume.pdf');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Reset button state back to idle after 3s
      setTimeout(() => {
        setResumeStatus('idle');
      }, 3000);
    }, 1200); // Simulated delay
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left: Text Contents with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="hero-content">
          <div className="badge-welcome">
            <span className="badge-dot"></span> Welcome to my portfolio
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Soundarya J</span>
          </h1>
          <h2 className="hero-subtitle">
            I am a <span className="typing-text">{text}</span>
          </h2>
          <p className="hero-description">
            Building scalable, user-friendly web applications with modern technologies. 
            Aspiring Software Engineer focused on crafting clean code and robust systems.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-laptop-code"></i> View Projects
            </a>
            <a
              href="#"
              className="btn btn-secondary"
              id="resume-download-btn"
              onClick={handleDownloadResume}
              style={resumeStatus !== 'idle' ? { pointerEvents: 'none' } : {}}
            >
              {resumeStatus === 'idle' && (
                <>
                  <i className="fa-solid fa-file-arrow-down"></i> Download Resume
                </>
              )}
              {resumeStatus === 'preparing' && (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i> Preparing...
                </>
              )}
              {resumeStatus === 'ready' && (
                <>
                  <i className="fa-solid fa-circle-check text-green"></i> Resume Ready
                </>
              )}
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fa-regular fa-envelope"></i> Contact Me
            </a>
          </div>
          
          <div className="hero-socials">
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
        </ScrollReveal>

        {/* Right: Glass Card Graphics with ScrollReveal */}
        <ScrollReveal variant="fade-in" className="hero-visual">
          <div className="visual-wrapper">
            <div className="glass-card visual-card main-card">
              <div className="card-header-dots">
                <span className="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <div className="code-editor-sim">
                <p className="code-line"><span className="code-keyword">const</span> developer = {"{"}</p>
                <p className="code-line indent-1"><span className="code-prop">name</span>: <span className="code-string">"Soundarya J"</span>,</p>
                <p className="code-line indent-1"><span className="code-prop">role</span>: <span className="code-string">"Full Stack & MERN Developer"</span>,</p>
                <p className="code-line indent-1"><span class="code-prop">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Node"</span>, <span className="code-string">"Express"</span>, <span className="code-string">"MongoDB"</span>],</p>
                <p className="code-line indent-1"><span class="code-prop">passion</span>: <span className="code-string">"Building scalable products"</span>,</p>
                <p className="code-line indent-1"><span className="code-prop">academic</span>: <span className="code-string">"BE Computer Science Student"</span></p>
                <p className="code-line">{"};"}</p>
              </div>
            </div>
            <div className="glass-card visual-card float-card-1">
              <i className="fa-brands fa-react react-spin"></i>
              <div>
                <h4>React.js</h4>
                <p>Frontend</p>
              </div>
            </div>
            <div className="glass-card visual-card float-card-2">
              <i className="fa-brands fa-node-js text-success"></i>
              <div>
                <h4>Node.js</h4>
                <p>Backend</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
      <a href="#about" className="scroll-down-indicator" aria-label="Scroll to About Me">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="arrow-down"></span>
      </a>
    </section>
  );
}
