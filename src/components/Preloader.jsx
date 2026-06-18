import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [fade, setFade] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Add small timeout to give a premium feel even if loaded instantly
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 800);

    // Remove from DOM structure once transition completes (approx 800ms transition)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${fade ? 'fade-out' : ''}`} id="preloader">
      <div className="loader-content">
        <div className="loader-circle"></div>
        <div className="loader-text">
          <span className="letter">S</span>
          <span className="letter">O</span>
          <span className="letter">U</span>
        </div>
      </div>
    </div>
  );
}
