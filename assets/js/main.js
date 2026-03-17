/**
 * Main JavaScript
 * ================
 * Handles: navigation, scroll animations, project/cert rendering,
 * lightbox, mobile menu, and active link highlighting.
 */

document.addEventListener('DOMContentLoaded', () => {
    /* ------------------------------------------------------------------
       1. MOBILE MENU
       ------------------------------------------------------------------ */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    /* ------------------------------------------------------------------
       2. STICKY NAV — scrolled class & active link highlighting
       ------------------------------------------------------------------ */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navItems = navLinks.querySelectorAll('a[href^="#"]');

    function onScroll() {
        // Add scrolled class after 50px
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Determine which section is in view
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* ------------------------------------------------------------------
       3. SMOOTH SCROLL (progressive enhancement over CSS scroll-behavior)
       ------------------------------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ------------------------------------------------------------------
       4. SCROLL-TRIGGERED ANIMATIONS (IntersectionObserver)
       ------------------------------------------------------------------ */
    const animatedEls = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // animate once
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedEls.forEach(el => observer.observe(el));
    } else {
        // Fallback: just show everything
        animatedEls.forEach(el => el.classList.add('visible'));
    }

    /* ------------------------------------------------------------------
       5. RENDER PROJECTS from projects.js
       ------------------------------------------------------------------ */
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsGrid && typeof projects !== 'undefined') {
        projects.forEach((project, projectIndex) => {
            const card = document.createElement('div');
            card.className = 'project-card animate-on-scroll';

            // Build tags HTML
            const tagsHtml = project.tags.map(t => `<span>${t}</span>`).join('');

            // Build links HTML
            let linksHtml = '';
            // Only show GitHub link if it's a specific project repo (not the general profile)
            if (project.github && project.github !== 'https://github.com/R1G12/' && project.github !== 'https://github.com/R1G12') {
                linksHtml += `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            GitHub
          </a>`;
            }
            if (project.live) {
                linksHtml += `
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Live demo">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7H5z"/></svg>
            Live
          </a>`;
            }

            // Image switcher HTML
            const hasMultipleImages = project.images && project.images.length > 1;
            const carouselButtons = hasMultipleImages ? `
          <button class="project-carousel-btn prev" aria-label="Previous image">
            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button class="project-carousel-btn next" aria-label="Next image">
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </button>
          <div class="project-image-counter">1 / ${project.images.length}</div>
        ` : '';

            card.innerHTML = `
        <div class="project-card-image">
          <img src="${project.images[0]}" alt="${project.title} - image 1" loading="lazy" />
          ${carouselButtons}
        </div>
        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.description}</p>
          <div class="project-card-tags">${tagsHtml}</div>
          <div class="project-card-links">${linksHtml}</div>
        </div>
      `;

            // Functionality for switcher
            if (hasMultipleImages) {
                let currentIdx = 0;
                const img = card.querySelector('img');
                const counter = card.querySelector('.project-image-counter');
                
                card.querySelector('.prev').addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentIdx = (currentIdx - 1 + project.images.length) % project.images.length;
                    img.src = project.images[currentIdx];
                    img.alt = `${project.title} - image ${currentIdx + 1}`;
                    counter.textContent = `${currentIdx + 1} / ${project.images.length}`;
                });

                card.querySelector('.next').addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentIdx = (currentIdx + 1) % project.images.length;
                    img.src = project.images[currentIdx];
                    img.alt = `${project.title} - image ${currentIdx + 1}`;
                    counter.textContent = `${currentIdx + 1} / ${project.images.length}`;
                });
            }

            projectsGrid.appendChild(card);
        });

        // Observe newly created cards for scroll animation
        projectsGrid.querySelectorAll('.animate-on-scroll').forEach(el => {
            if ('IntersectionObserver' in window) {
                const obs = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
                obs.observe(el);
            } else {
                el.classList.add('visible');
            }
        });
    }

    /* ------------------------------------------------------------------
       6. RENDER CERTIFICATIONS from certifications.js
       ------------------------------------------------------------------ */
    const certsGrid = document.getElementById('certifications-grid');

    if (certsGrid && typeof certifications !== 'undefined') {
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card animate-on-scroll';

            card.innerHTML = `
        <div class="cert-card-image" role="button" tabindex="0" aria-label="View ${cert.name} certificate">
          <img src="${cert.image}" alt="${cert.name} certificate" loading="lazy" />
        </div>
        <div class="cert-card-body">
          <h3 class="cert-card-name">${cert.name}</h3>
          <p class="cert-card-issuer">${cert.issuer}</p>
          <p class="cert-card-date">${cert.date}</p>
          <p class="cert-card-desc">${cert.description}</p>
        </div>
      `;

            certsGrid.appendChild(card);
        });

        // Observe newly created cards
        certsGrid.querySelectorAll('.animate-on-scroll').forEach(el => {
            if ('IntersectionObserver' in window) {
                const obs = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
                obs.observe(el);
            } else {
                el.classList.add('visible');
            }
        });
    }

    /* ------------------------------------------------------------------
       7. LIGHTBOX for certification images
       ------------------------------------------------------------------ */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Open lightbox
    document.addEventListener('click', (e) => {
        const certImage = e.target.closest('.cert-card-image');
        if (certImage) {
            const img = certImage.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    // Also handle keyboard activation on cert images
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const certImage = e.target.closest('.cert-card-image');
            if (certImage) {
                e.preventDefault();
                const img = certImage.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    /* ------------------------------------------------------------------
       8. CURRENT YEAR in footer
       ------------------------------------------------------------------ */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
