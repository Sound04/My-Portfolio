import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <div className="experience-wrapper">
      <ScrollReveal variant="fade-up" className="section-title-wrapper">
        <span className="section-subtitle">My career path</span>
        <h3 className="section-title">Experience</h3>
        <div className="title-underline"></div>
      </ScrollReveal>
      
      <ScrollReveal variant="fade-right" className="timeline">
        <div className="timeline-item glass-card">
          <div className="timeline-dot"></div>
          <div className="timeline-header">
            <span className="timeline-duration">
              <i className="fa-solid fa-calendar-days"></i> Internship
            </span>
            <h4 className="timeline-role">Machine Learning Intern</h4>
            <h5 className="timeline-company">Privacy Weave</h5>
          </div>
          <div className="timeline-body">
            <p>
              Worked on Artificial Intelligence and Machine Learning projects. 
              Gained hands-on experience involving data preprocessing, model training, evaluation, and deploying privacy-focused solutions.
            </p>
            <ul className="timeline-bullet-list">
              <li>Cleaned and prepared large datasets for modeling.</li>
              <li>Evaluated model metrics and optimized hyperparameters.</li>
              <li>Collaborated on integration with backend APIs.</li>
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
