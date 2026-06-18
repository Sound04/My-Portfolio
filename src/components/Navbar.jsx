import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // 1. Header scroll transition backdrop trigger
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // 2. Active section Scroll Spy tracker
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let currentSection = 'home';
      const scrollPosition = window.scrollY + 200; // Account for menu height offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
      // Clean up body scroll lock if unmounted
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMobileMenu}>
            <span className="logo-accent">&lt;</span>Sou<span className="logo-accent">/&gt;</span>
          </a>
          
          <nav className="navbar">
            <ul className="nav-links">
              {navItems.map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="nav-actions">
            <a href="#contact" className="btn btn-nav-cta" onClick={closeMobileMenu}>Let's Talk</a>
            <button
              className={`mobile-menu-toggle ${isMobileOpen ? 'open' : ''}`}
              id="mobile-toggle"
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileOpen ? 'open' : ''}`} id="mobile-menu">
        <ul className="mobile-nav-links">
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`mobile-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-link btn-mobile-cta" onClick={closeMobileMenu}>Let's Talk</a>
          </li>
        </ul>
      </div>
    </>
  );
}
