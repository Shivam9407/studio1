document.addEventListener('DOMContentLoaded', () => {

  // Custom Cursor Logic
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    let mouseX = 0;
    let mouseY = 0;
    const cursorWidth = 20;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .cursor-pointer, .hero-title-line');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }

  // Scroll Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide-up');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Magnetic Button Effect
  const magneticElements = document.querySelectorAll('.magnetic');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      // Calculate mouse position relative to center of element
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Apply slight transform based on mouse position
      // We use a multiplier (e.g., 0.3) to control the strength
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
      // Reset transform with a smooth transition
      el.style.transform = `translate(0px, 0px)`;
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      console.log("Menu toggled (can be expanded based on requirements)");
    });
  }
});
