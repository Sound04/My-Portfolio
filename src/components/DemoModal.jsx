import React, { useEffect } from 'react';

export default function DemoModal({ activeDemo, onClose }) {
  // Lock body scrolling when the modal is opened
  useEffect(() => {
    if (activeDemo) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [activeDemo]);

  if (!activeDemo) return null;

  const handleOverlayClick = (e) => {
    // Close modal if clicked directly on overlay backdrop
    if (e.target.id === 'demo-modal') {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay open"
      id="demo-modal"
      onClick={handleOverlayClick}
    >
      <div className="glass-card modal-container">
        <button className="modal-close" id="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-icon">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <h4 id="modal-title">{activeDemo.title}</h4>
          <p id="modal-text">{activeDemo.text}</p>
          <div className="modal-actions">
            <a
              href={activeDemo.codeUrl}
              id="modal-code-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View GitHub Code
            </a>
            <button className="btn btn-secondary" id="modal-ok-btn" onClick={onClose}>
              Awesome!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
