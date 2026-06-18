import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [toastText, setToastText] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map HTML id (e.g., 'form-name') to state keys
    const field = id.replace('form-', '');
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('sending');

    // Simulate API network call
    setTimeout(() => {
      setStatus('success');
      setToastText(`Thank you, ${formData.name}! Your message has been sent successfully.`);
      
      // Reset input fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear Toast notification after 4 seconds
      setTimeout(() => {
        setToastText('');
        setStatus('idle');
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="section-title-wrapper">
          <span className="section-subtitle">Get in touch</span>
          <h3 className="section-title">Contact Me</h3>
          <div className="title-underline"></div>
        </ScrollReveal>
        
        <div className="contact-grid">
          {/* Left: Contact Information */}
          <ScrollReveal variant="fade-right" className="contact-info">
            <div className="contact-heading">
              <h4>Let's discuss something great!</h4>
              <p>I am open to software engineering internships, developer roles, and projects. Drop me a line, and let's build together.</p>
            </div>
            
            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-item glass-card">
                <div className="contact-item-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="contact-item-text">
                  <h5>Email</h5>
                  <a href="mailto:soundaryajaga2005@gmail.com">soundaryajaga2005@gmail.com</a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="contact-info-item glass-card">
                <div className="contact-item-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="contact-item-text">
                  <h5>Phone</h5>
                  <a href="tel:+919790166175">+91 9790166175</a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="contact-info-item glass-card">
                <div className="contact-item-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="contact-item-text">
                  <h5>LinkedIn</h5>
                  <a
                    href="https://www.linkedin.com/in/soundarya-j-a899702a5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/soundarya-j
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="contact-info-item glass-card">
                <div className="contact-item-icon">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="contact-item-text">
                  <h5>GitHub</h5>
                  <a
                    href="https://github.com/Sound04"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/soundarya-j
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right: Glassmorphic Contact Form */}
          <ScrollReveal variant="fade-left" className="contact-form-wrapper">
            <form id="contact-form" className="glass-card contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h4>Send Message</h4>
                <p>Fill out the form below to reach out directly.</p>
              </div>
              
              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="form-name">Name</label>
                  <input
                    type="text"
                    id="form-name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form-email">Email</label>
                  <input
                    type="email"
                    id="form-email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="form-subject">Subject</label>
                <input
                  type="text"
                  id="form-subject"
                  placeholder="Collaboration / Job Opportunity"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="form-message">Message</label>
                <textarea
                  id="form-message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span>Sending...</span> <i className="fa-solid fa-circle-notch fa-spin"></i>
                  </>
                ) : (
                  <>
                    <span>Send Message</span> <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
              
              {/* Custom toast message container */}
              <div className={`form-toast ${status === 'success' ? 'success' : ''}`} id="form-toast">
                {toastText}
              </div>
            </form>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
