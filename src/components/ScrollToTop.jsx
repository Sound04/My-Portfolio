import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      id="scroll-top-btn"
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
