/* ==========================================================================
   Soundarya J - Premium Portfolio JavaScript Core
   Features: Preloader, Typewriter, Mobile Nav, Scroll Reveal, Skill Anim, Forms
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize all custom components
    initPreloader();
    initHeaderScroll();
    initMobileNavigation();
    initTypewriter();
    initScrollReveal();
    initSkillBars();
    initContactForm();
    initScrollToTop();
    initDemoModal();
    initResumeButton();

});

/* --------------------------------------------------------------------------
   1. Preloader Dismissal
   -------------------------------------------------------------------------- */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    // Add small timeout to give a premium feel even if cached/loaded instantly
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            
            // Remove from DOM structure once transition completes
            preloader.addEventListener('transitionend', () => {
                preloader.style.display = 'none';
            }, { once: true });
        }, 800); // 800ms loading duration for user-visible effect
    });
}

/* --------------------------------------------------------------------------
   2. Header Scroll Backdrop Transition
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on init in case of refresh midway
}

/* --------------------------------------------------------------------------
   3. Mobile Hamburger Menu Toggle & Scroll spy active state
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (!mobileToggle || !mobileMenu) return;

    // Toggle menu visibility
    const toggleMenu = () => {
        mobileToggle.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Navigation Active Class on Scroll Spy
    const scrollSpy = () => {
        let currentSectionId = 'home';
        const scrollPosition = window.scrollY + 200; // Offset for menu height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Update active class on desktop navbar links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Update active class on mobile links
        mobileLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollSpy);
    scrollSpy();
}

/* --------------------------------------------------------------------------
   4. Typing Animation (Vanilla JS)
   -------------------------------------------------------------------------- */
function initTypewriter() {
    const element = document.getElementById('typing-element');
    if (!element) return;

    const roles = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Software Engineering Enthusiast",
        "BE Computer Science Student"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    const type = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Remove letter
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // Erasing goes faster
        } else {
            // Add letter
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80; // Standard typing speed
        }

        // Handle states
        if (!isDeleting && charIndex === currentRole.length) {
            // Finished typing, wait before erasing
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished erasing, move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400; // Pause before typing next word
        }

        setTimeout(type, typeSpeed);
    };

    // Start typing loop
    setTimeout(type, 1200); // Initial delay after preloader vanishes
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Animation (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null, // Viewport
        rootMargin: '0px',
        threshold: 0.12 // Reveal once 12% is visible
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger CSS transition
                entry.target.classList.add('revealed');
                // Stop observing after reveal is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    revealElements.forEach(el => {
        // Set inline custom delay attribute if needed
        const delay = el.getAttribute('data-delay');
        if (delay) {
            el.style.setProperty('--delay', delay);
        }
        observer.observe(el);
    });
}

/* --------------------------------------------------------------------------
   6. Animated Skill Bars (Fills & Percentage Counter)
   -------------------------------------------------------------------------- */
function initSkillBars() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.progress-line');
    const percentTexts = document.querySelectorAll('.skill-percentage');

    if (!skillsSection || skillBars.length === 0) return;

    let animated = false;

    const animateSkills = () => {
        skillBars.forEach((bar, index) => {
            const textElement = percentTexts[index];
            const targetPercent = parseInt(textElement.getAttribute('data-target'), 10);
            
            // Animate progress line width
            bar.style.width = `${targetPercent}%`;
            
            // Counter animation for text percentage
            let currentCount = 0;
            const duration = 1500; // Match CSS transition duration
            const steps = targetPercent;
            const stepTime = Math.floor(duration / steps);
            
            const timer = setInterval(() => {
                currentCount++;
                textElement.textContent = `${currentCount}%`;
                if (currentCount >= targetPercent) {
                    clearInterval(timer);
                }
            }, stepTime);
        });
    };

    const observerOptions = {
        root: null,
        threshold: 0.25 // Trigger when a quarter of skills section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateSkills();
                animated = true; // Run only once
            }
        });
    }, observerOptions);

    observer.observe(skillsSection);
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling with Feedback Toast
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('form-toast');

    if (!form || !toast) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        const submitSpan = submitBtn.querySelector('span');
        const submitIcon = submitBtn.querySelector('i');
        const originalText = submitSpan.textContent;

        // Visual loading state
        submitBtn.disabled = true;
        submitSpan.textContent = 'Sending...';
        submitIcon.className = 'fa-solid fa-circle-notch fa-spin';

        // Get values
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;

        // Simulate API call
        setTimeout(() => {
            // Restore button
            submitBtn.disabled = false;
            submitSpan.textContent = originalText;
            submitIcon.className = 'fa-solid fa-paper-plane';

            // Show Toast (Simulated Success)
            toast.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            toast.className = 'form-toast success';

            // Reset Form Fields
            form.reset();

            // Clear Toast after 4 seconds
            setTimeout(() => {
                toast.className = 'form-toast';
            }, 4000);

        }, 1500); // 1.5s simulated network delay
    });
}

/* --------------------------------------------------------------------------
   8. Scroll to Top Button Interactions
   -------------------------------------------------------------------------- */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* --------------------------------------------------------------------------
   9. Modal Launch / Mock Demo Showcase
   -------------------------------------------------------------------------- */
function initDemoModal() {
    const modal = document.getElementById('demo-modal');
    const triggers = document.querySelectorAll('.demo-trigger');
    const closeBtn = document.getElementById('modal-close-btn');
    const okBtn = document.getElementById('modal-ok-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalCodeLink = document.getElementById('modal-code-link');

    if (!modal || triggers.length === 0 || !closeBtn || !okBtn) return;

    const openModal = (e) => {
        e.preventDefault();
        
        // Find which project card triggered it to customize description
        const projectCard = e.currentTarget.closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-title').textContent;
        
        modalTitle.textContent = `Launch Demo: ${projectTitle}`;
        
        if (projectTitle.includes("Swap")) {
            modalText.textContent = `Spinning up the Skill Swap Hub client environment. Features included: credit calculations, user exchange dashboard, and secure mock profiles. Since this runs on static staging, please feel free to inspect full server codebase on GitHub!`;
            modalCodeLink.setAttribute('href', 'https://github.com');
        } else {
            modalText.textContent = `Loading live match updates simulator for Football Live Hub. Connecting mock API feeds and league table templates. Feel free to inspect frontend modules on GitHub!`;
            modalCodeLink.setAttribute('href', 'https://github.com');
        }

        modal.classList.add('open');
        document.body.classList.add('no-scroll');
    };

    const closeModal = () => {
        modal.classList.remove('open');
        document.body.classList.remove('no-scroll');
    };

    triggers.forEach(trigger => trigger.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
    okBtn.addEventListener('click', closeModal);

    // Close when clicking overlay backdrop
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

/* --------------------------------------------------------------------------
   10. Resume Download Action Handler
   -------------------------------------------------------------------------- */
function initResumeButton() {
    const resumeBtn = document.getElementById('resume-download-btn');
    if (!resumeBtn) return;

    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // In a real application, this points directly to a PDF in assets.
        // Here we trigger a beautiful custom notification showing download starting.
        const originalContent = resumeBtn.innerHTML;
        
        resumeBtn.style.pointerEvents = 'none';
        resumeBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Preparing...`;
        
        setTimeout(() => {
            // Restore state
            resumeBtn.style.pointerEvents = 'auto';
            resumeBtn.innerHTML = `<i class="fa-solid fa-circle-check text-green"></i> Resume Ready`;
            
            // Mock file creation download
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('Soundarya J - Resume (Placeholder content - Full Stack Developer)'));
            element.setAttribute('download', 'Soundarya_J_Resume.pdf');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            
            // Reset button text after 3 seconds
            setTimeout(() => {
                resumeBtn.innerHTML = originalContent;
            }, 3000);

        }, 1200);
    });
}
