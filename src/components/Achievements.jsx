import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Achievements() {
  return (
    <section className="achievements-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="section-title-wrapper">
          <span className="section-subtitle">What I have achieved</span>
          <h3 className="section-title">Key Achievements</h3>
          <div className="title-underline"></div>
        </ScrollReveal>
        
        <div className="achievements-grid">
          {/* Card 1 */}
          <ScrollReveal variant="fade-up" className="achievement-card glass-card">
            <div className="ach-icon-wrapper ml-icon">
              <i className="fa-solid fa-brain"></i>
            </div>
            <h4>Machine Learning Internship Completed</h4>
            <p>Successfully completed research and implementation tasks at Privacy Weave with a focus on privacy-preserving model pipelines.</p>
          </ScrollReveal>
          
          {/* Card 2 */}
          <ScrollReveal variant="fade-up" className="achievement-card glass-card" delay="100ms">
            <div className="ach-icon-wrapper mern-icon">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <h4>Built Multiple MERN Stack Projects</h4>
            <p>Constructed and deployed functional complex full-stack web applications featuring secure token auth, responsive client-side routing, and MongoDB interactions.</p>
          </ScrollReveal>
          
          {/* Card 3 */}
          <ScrollReveal variant="fade-up" className="achievement-card glass-card" delay="200ms">
            <div className="ach-icon-wrapper foundation-icon">
              <i className="fa-solid fa-award"></i>
            </div>
            <h4>Strong Foundation in Full Stack</h4>
            <p>Acquired robust understanding of data modeling, backend architecture with Node.js/Express.js, and modern UI engineering with state hooks.</p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
