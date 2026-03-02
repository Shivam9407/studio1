/**
 * main.js - Core UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Logic
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, .cursor-pointer, [onclick]');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '60px';
                cursor.style.height = '60px';
                cursor.style.backgroundColor = '#ff2e2e';
                cursor.style.border = 'none';
                cursor.style.mixBlendMode = 'normal';
                cursor.style.opacity = '0.8';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'transparent';
                cursor.style.border = '2px solid #ff2e2e';
                cursor.style.mixBlendMode = 'difference';
                cursor.style.opacity = '1';
            });
        });
    }

    // 2. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.faq-content');
            const lineTop = item.querySelector('.line-top');
            const lineBottom = item.querySelector('.line-bottom');
            const isOpen = item.classList.contains('is-open');

            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('is-open')) {
                    otherItem.classList.remove('is-open');
                    const otherContent = otherItem.querySelector('.faq-content');
                    if (otherContent) {
                        otherContent.style.gridTemplateRows = '0fr';
                    }
                    const ot = otherItem.querySelector('.line-top');
                    const ob = otherItem.querySelector('.line-bottom');
                    if (ot) ot.style.transform = 'translateY(0) rotate(0deg)';
                    if (ob) ob.style.transform = 'translateY(0) rotate(0deg)';
                }
            });

            if (isOpen) {
                item.classList.remove('is-open');
                if (content) content.style.gridTemplateRows = '0fr';
                if (lineTop) lineTop.style.transform = 'translateY(0) rotate(0deg)';
                if (lineBottom) lineBottom.style.transform = 'translateY(0) rotate(0deg)';
            } else {
                item.classList.add('is-open');
                if (content) content.style.gridTemplateRows = '1fr';
                if (lineTop) lineTop.style.transform = 'translateY(-50%) rotate(45deg)';
                if (lineBottom) lineBottom.style.transform = 'translateY(50%) rotate(-45deg)';
            }
        });
    });

    // 3. Carousel Drag-to-Scroll Logic
    const slider = document.getElementById('works-carousel');
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        const disableSnap = () => slider.style.scrollSnapType = 'none';
        const enableSnap = () => slider.style.scrollSnapType = 'x mandatory';

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            disableSnap();
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
            enableSnap();
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
            enableSnap();
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2.5;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Carousel Indicators
        const indicators = document.querySelectorAll('#carousel-indicators > div');
        if (indicators.length > 0) {
            slider.addEventListener('scroll', () => {
                const scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
                let activeIndex = Math.round(scrollPercentage * (indicators.length - 1));
                activeIndex = Math.max(0, Math.min(activeIndex, indicators.length - 1));

                indicators.forEach((indicator, index) => {
                    if (index === activeIndex) {
                        indicator.classList.replace('bg-white/10', 'bg-primary');
                    } else {
                        indicator.classList.replace('bg-primary', 'bg-white/10');
                    }
                });
            });
        }
    }
});

/**
 * Handle Contact Form Submission
 */
function handleSubmit(e) {
    if (e) e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const feedback = document.getElementById('form-feedback');

    if (!nameInput || !emailInput || !feedback) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        feedback.textContent = '→ Please fill in at least your name and email.';
        feedback.classList.remove('hidden');
        return;
    }

    feedback.textContent = '✓ Message sent! We\'ll be in touch within 24 hours.';
    feedback.classList.remove('hidden');

    const form = document.getElementById('contact-form');
    if (form) form.reset();
}
