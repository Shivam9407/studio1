class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference pointer-events-auto">
            <div class="flex items-center gap-2 group cursor-pointer" onclick="window.location.href='index.html'">
                <span class="material-symbols-outlined text-3xl text-primary animate-pulse">emergency</span>
                <span class="font-bold text-xl tracking-tighter text-white">STUDIO</span>
            </div>
            <nav class="hidden md:flex items-center gap-12">
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="work.html">Work</a>
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="index.html#studio">Studio</a>
                <a class="text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors cursor-pointer" href="contact.html">Contact</a>
            </nav>
            <button class="md:hidden text-white cursor-pointer">
                <span class="material-symbols-outlined text-3xl">menu</span>
            </button>
        </header>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-primary text-white py-32 px-6 md:px-12 relative overflow-hidden mt-auto w-full">
            <!-- Decorative giant text -->
            <div class="absolute -bottom-20 -right-20 text-[20rem] font-black text-black/10 leading-none select-none pointer-events-none">
                TALK
            </div>
            <div class="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start">
                <div class="flex flex-col gap-8 mb-16 md:mb-0">
                    <h2 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] cursor-pointer hover:text-primary transition-colors" onclick="window.location.href='contact.html'">
                        START A <br />
                        PROJECT
                    </h2>
                    <a class="inline-flex items-center gap-4 text-2xl font-mono border-b-2 border-white pb-2 hover:border-black hover:text-black transition-colors self-start cursor-pointer" href="mailto:hello@studio.com">
                        hello@studio.com
                        <span class="material-symbols-outlined">north_east</span>
                    </a>
                </div>
                <div class="flex flex-col gap-12 text-right">
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
                    <p class="font-mono text-xs opacity-60 mt-8">© 2024 Studio Experimental Motion.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
