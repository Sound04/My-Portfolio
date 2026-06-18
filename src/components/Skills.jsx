import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

// Inner component for encapsulating individual skill bar animations
function SkillBar({ icon, name, iconColorClass, targetPercent, isIntersected }) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    if (!isIntersected) return;

    let current = 0;
    const duration = 1500; // Match the transition duration of style.css
    const steps = targetPercent;
    const stepTime = Math.max(Math.floor(duration / steps), 5); // Prevent 0ms intervals

    const timer = setInterval(() => {
      current += 1;
      if (current >= targetPercent) {
        setCurrentPercent(targetPercent);
        clearInterval(timer);
      } else {
        setCurrentPercent(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isIntersected, targetPercent]);

  return (
    <div className="skill-bar-wrapper">
      <div className="skill-info">
        <span className="skill-name">
          <i className={`${icon} ${iconColorClass}`}></i> {name}
        </span>
        <span className="skill-percentage">{currentPercent}%</span>
      </div>
      <div className="progress-line-container">
        <span
          className="progress-line"
          style={{ width: isIntersected ? `${targetPercent}%` : '0%' }}
        ></span>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.25 // Trigger when a quarter of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const technicalSkills = [
    { name: 'HTML5 & CSS3', icon: 'fa-brands fa-html5', iconColorClass: 'text-orange', targetPercent: 95 },
    { name: 'JavaScript', icon: 'fa-brands fa-js-square', iconColorClass: 'text-yellow', targetPercent: 90 },
    { name: 'React.js', icon: 'fa-brands fa-react', iconColorClass: 'text-cyan', targetPercent: 88 },
    { name: 'Node.js & Express.js', icon: 'fa-brands fa-node-js', iconColorClass: 'text-green', targetPercent: 82 },
    { name: 'Databases (MongoDB, MySQL)', icon: 'fa-solid fa-database', iconColorClass: 'text-teal', targetPercent: 80 },
    { name: 'Programming (Python, Java)', icon: 'fa-solid fa-terminal', iconColorClass: 'text-blue', targetPercent: 85 },
  ];

  return (
    <section id="skills" className="skills-section section-padding" ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="section-title-wrapper">
          <span className="section-subtitle">What I work with</span>
          <h3 className="section-title">My Skills</h3>
          <div className="title-underline"></div>
        </ScrollReveal>
        
        <div className="skills-container">
          {/* Left: Technical Skills (Visual Progress Bars) */}
          <ScrollReveal variant="fade-right" className="technical-skills">
            <h4 className="skills-category-title">
              <i className="fa-solid fa-gears text-purple"></i> Technical Expertise
            </h4>
            <p className="category-desc">Practical implementation experience in core technologies.</p>
            
            <div className="skills-list">
              {technicalSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  iconColorClass={skill.iconColorClass}
                  targetPercent={skill.targetPercent}
                  isIntersected={isIntersected}
                />
              ))}
            </div>
          </ScrollReveal>
          
          {/* Right: Tools, Libraries & Soft Skills */}
          <ScrollReveal variant="fade-left" className="complementary-skills">
            <div className="tools-grid-wrapper">
              <h4 className="skills-category-title">
                <i className="fa-solid fa-toolbox text-blue"></i> Tools & Environment
              </h4>
              <div className="badge-container">
                <div className="tool-badge glass-card">
                  <i className="fa-brands fa-git-alt text-orange"></i>
                  <span>Git</span>
                </div>
                <div className="tool-badge glass-card">
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </div>
                <div className="tool-badge glass-card">
                  <i className="fa-solid fa-code text-cyan"></i>
                  <span>VS Code</span>
                </div>
                <div className="tool-badge glass-card">
                  <i className="fa-solid fa-cubes text-purple"></i>
                  <span>REST APIs</span>
                </div>
                <div className="tool-badge glass-card">
                  <i className="fa-brands fa-npm text-red"></i>
                  <span>NPM</span>
                </div>
                <div className="tool-badge glass-card">
                  <i className="fa-solid fa-cloud-arrow-up text-teal"></i>
                  <span>MongoDB Atlas</span>
                </div>
              </div>
            </div>
            
            <div className="soft-skills-wrapper">
              <h4 className="skills-category-title">
                <i className="fa-solid fa-users text-pink"></i> Soft Skills
              </h4>
              <div className="soft-skills-grid">
                <div className="soft-skill-card glass-card">
                  <span className="soft-skill-icon"><i className="fa-solid fa-lightbulb"></i></span>
                  <h5>Problem Solving</h5>
                </div>
                <div className="soft-skill-card glass-card">
                  <span className="soft-skill-icon"><i className="fa-solid fa-brain"></i></span>
                  <h5>Analytical Thinking</h5>
                </div>
                <div className="soft-skill-card glass-card">
                  <span className="soft-skill-icon"><i className="fa-solid fa-comments"></i></span>
                  <h5>Communication</h5>
                </div>
                <div className="soft-skill-card glass-card">
                  <span className="soft-skill-icon"><i className="fa-solid fa-people-group"></i></span>
                  <h5>Team Collaboration</h5>
                </div>
                <div className="soft-skill-card glass-card">
                  <span className="soft-skill-icon"><i className="fa-solid fa-arrows-spin"></i></span>
                  <h5>Adaptability</h5>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
