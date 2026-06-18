import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Replicates the custom vanilla JS IntersectionObserver reveal effect.
 * It dynamically renders the specified HTML element (using the 'as' prop)
 * to prevent breaking flex/grid layouts, adding the 'revealed' class
 * when the component intersects the viewport.
 */
export default function ScrollReveal({
  as: Component = 'div',
  children,
  className = '',
  variant = 'fade-up',
  delay,
  ...props
}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.12 // Reveal once 12% is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const inlineStyles = delay ? { '--delay': delay } : {};

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${variant} ${isRevealed ? 'revealed' : ''} ${className}`}
      style={{ ...inlineStyles, ...props.style }}
      {...props}
    >
      {children}
    </Component>
  );
}
