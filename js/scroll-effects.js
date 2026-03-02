/**
 * scroll-effects.js - Cinematic Parallax and Animated Metrics
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cinematic Metrics (Animated Numbers)
    const setupMetrics = () => {
        const section = document.getElementById('results-section') || document.querySelector('.metrics-section');
        if (!section) return;

        const metricItems = document.querySelectorAll('.metric-item');
        const animatedNumbers = document.querySelectorAll('.animated-number');
        let hasAnimated = false;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animateNumber = (element, targetValue, duration, delay) => {
            setTimeout(() => {
                let startTime = null;
                const updateFrame = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const elapsed = currentTime - startTime;
                    let progress = easeOutCubic(Math.min(elapsed / duration, 1));
                    element.textContent = Math.floor(progress * targetValue);
                    if (elapsed < duration) requestAnimationFrame(updateFrame);
                    else element.textContent = targetValue;
                };
                requestAnimationFrame(updateFrame);
            }, delay);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    metricItems.forEach((item, i) => {
                        setTimeout(() => item.classList.add('is-visible'), i * 200);
                    });
                    animatedNumbers.forEach((el, i) => {
                        const target = parseInt(el.getAttribute('data-target'), 10);
                        animateNumber(el, target, 1400, i * 200);
                    });
                }
            });
        }, { threshold: 0.2 });

        observer.observe(section);
    };

    // 2. Cinematic Parallax (Image Reveal)
    const setupParallax = () => {
        const container = document.getElementById('cinematic-container');
        const imageWrapper = document.getElementById('solution-parallax-image');
        if (!container || !imageWrapper) return;

        let ticking = false;
        const updateParallax = () => {
            const rect = container.getBoundingClientRect();
            const containerTop = rect.top;
            const windowHeight = window.innerHeight;

            let progress = 0;
            if (containerTop > 0) progress = 0;
            else if (containerTop <= -windowHeight) progress = 1;
            else progress = -containerTop / windowHeight;

            const yOffset = (1.15 - 0.15 * progress) * windowHeight;
            const scale = 0.96 + (0.04 * progress);

            imageWrapper.style.transform = `translateY(${yOffset}px) scale(${scale})`;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
        updateParallax();
    };

    // 3. CTA Parallax (Index/Work Footer)
    const setupCTAParallax = () => {
        const ctaSection = document.getElementById('cta-section');
        if (!ctaSection) return;

        const ctaBg = ctaSection.querySelector('.js-cta-bg');
        const ctaContent = ctaSection.querySelector('.js-cta-content');

        window.addEventListener('scroll', () => {
            const rect = ctaSection.getBoundingClientRect();
            const scrollPercent = 1 - (rect.bottom / window.innerHeight);

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (ctaBg) ctaBg.style.transform = `scale(${1 + scrollPercent * 0.1})`;
                if (ctaContent) {
                    ctaContent.style.opacity = scrollPercent;
                    ctaContent.style.transform = `translateY(${(1 - scrollPercent) * 50}px)`;
                }
            }
        });
    };

    setupMetrics();
    setupParallax();
    setupCTAParallax();
});
