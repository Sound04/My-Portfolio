import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  return (
    <div id="education" className="education-wrapper">
      <ScrollReveal variant="fade-up" className="section-title-wrapper">
        <span className="section-subtitle">Academic background</span>
        <h3 className="section-title">Education</h3>
        <div className="title-underline"></div>
      </ScrollReveal>
      
      <ScrollReveal variant="fade-left" className="education-card-container">
        <div className="glass-card education-card">
          <div className="edu-card-decor">
            <i className="fa-solid fa-university"></i>
          </div>
          <div className="edu-card-header">
            <span className="edu-year">
              <i className="fa-solid fa-calendar-days"></i> 2023 - 2027
            </span>
            <h4>Bachelor of Engineering</h4>
            <h5>Computer Science and Engineering</h5>
            <p className="edu-inst">KGiSL Institute of Technology</p>
          </div>
          <div className="edu-card-body">
            <div className="gpa-badge">
              <span className="gpa-num">8.12</span>
              <span className="gpa-label">CGPA</span>
            </div>
            <p className="edu-focus">
              Focusing on Data Structures, Database Systems, Web Engineering, Software Engineering, and AI/ML.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
