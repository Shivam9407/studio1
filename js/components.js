// Global Custom Cursor Injection
(() => {
    // Only for desktop devices
    if (window.matchMedia('(min-width: 768px)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            body { cursor: none; }
            .custom-cursor {
                position: fixed;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                border: 2px solid #ff2e2e;
                border-radius: 50%;
                pointer-events: none;
                transform: translate(-50%, -50%);
                z-index: 9999;
                transition: width 0.2s, height 0.2s, background-color 0.2s, border 0.2s, opacity 0.2s;
                mix-blend-mode: difference;
            }
        `;
        document.head.appendChild(style);

        document.addEventListener('DOMContentLoaded', () => {
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            // Set initial position out of view or centered to avoid flash
            cursor.style.top = '-100px';
            cursor.style.left = '-100px';
            document.body.appendChild(cursor);
        });
    }
})();

class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference pointer-events-auto">
            <div class="flex items-center gap-2 group cursor-pointer" onclick="window.location.href='/index.html'">
                <span class="material-symbols-outlined text-3xl text-primary animate-pulse">emergency</span>
                <span class="font-bold text-xl tracking-tighter text-white">STUDIO</span>
            </div>
            <nav class="hidden md:flex items-center gap-12">
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="/work.html">Work</a>
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="index.html#studio">Studio</a>
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="/contact.html">Contact</a>
            </nav>
            <button id="mobile-menu-btn" class="md:hidden text-white cursor-pointer" aria-label="Toggle menu" aria-expanded="false">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </header>
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" class="fixed inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 translate-x-full transition-transform duration-500 ease-in-out md:hidden">
            <a class="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors" href="/index.html">Home</a>
            <a class="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors" href="/work.html">Work</a>
            <a class="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors" href="/contact.html">Contact</a>
        </div>
        `;

        // Hamburger toggle logic
        const btn = this.querySelector('#mobile-menu-btn');
        const overlay = this.querySelector('#mobile-menu-overlay');
        const icon = btn.querySelector('.material-symbols-outlined');

        btn.addEventListener('click', () => {
            const isOpen = overlay.classList.contains('translate-x-0');
            if (isOpen) {
                overlay.classList.remove('translate-x-0');
                overlay.classList.add('translate-x-full');
                icon.textContent = 'menu';
                btn.setAttribute('aria-expanded', 'false');
            } else {
                overlay.classList.remove('translate-x-full');
                overlay.classList.add('translate-x-0');
                icon.textContent = 'close';
                btn.setAttribute('aria-expanded', 'true');
            }
        });

        // Close menu when a nav link is clicked
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('translate-x-0');
                overlay.classList.add('translate-x-full');
                icon.textContent = 'menu';
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-primary text-white py-32 px-6 md:px-12 relative overflow-hidden mt-auto w-full">
            <!-- Decorative giant text -->
            <div class="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 text-[clamp(10rem,30vw,20rem)] font-black text-black/10 leading-none select-none pointer-events-none">
                TALK
            </div>
            <div class="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start">
                <div class="flex flex-col gap-8 mb-16 md:mb-0">
                    <h2 class="text-[clamp(3.5rem,10vw,6rem)] md:text-8xl font-black tracking-tighter leading-[0.9] cursor-pointer hover:text-black transition-colors" onclick="window.location.href='/contact.html'">
                        START A <br />
                        PROJECT
                    </h2>
                    <a class="inline-flex items-center gap-4 text-2xl font-mono border-b-2 border-white pb-2 hover:border-black hover:text-black transition-colors self-start cursor-pointer" href="mailto:hello@studio.com">
                        hello@studio.com
                        <span class="material-symbols-outlined">north_east</span>
                    </a>
                </div>
                <div class="flex flex-col gap-12 text-left md:text-right mt-12 md:mt-0">
                    <div class="flex flex-col gap-2">
                        <span class="font-mono text-sm uppercase opacity-70">Socials</span>
                        <div class="flex flex-col gap-1 text-lg font-bold">
                            <a class="hover:text-black transition-colors cursor-pointer" href="#">Instagram</a>
                            <a class="hover:text-black transition-colors cursor-pointer" href="#">Vimeo</a>
                            <a class="hover:text-black transition-colors cursor-pointer" href="#">LinkedIn</a>
                            <a class="hover:text-black transition-colors cursor-pointer" href="#">Behance</a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <span class="font-mono text-sm uppercase opacity-70">Locations</span>
                        <p class="font-bold">Tokyo / NYC / Remote</p>
                    </div>
                    <p class="font-mono text-xs opacity-60 mt-8">&copy; 2026 Studio Experimental Motion.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
