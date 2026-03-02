/**
 * animations.js - Intersection Observer based reveals
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. General Reveal Animations (.reveal, .reveal-up)
    const reveals = document.querySelectorAll('.reveal, .reveal-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active', 'is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // 2. Project Card Scroll Effects (.scroll-project)
    const projects = document.querySelectorAll('.scroll-project');
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Optional: remove if you want it to re-animate
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    projects.forEach(project => projectObserver.observe(project));
});
