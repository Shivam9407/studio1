/**
 * tailwind-config.js - Shared design system tokens
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ff2e2e",
                "background-dark": "#0A0A0A",
                "surface-dark": "#141414",
                "surface-darker": "#050505",
                "accent-gray": "#333333",
                "text-dim": "#888888",
                "border-subtle": "#1f1f1f",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["Space Mono", "monospace"],
            },
            backgroundImage: {
                'grain': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.1%22/%3E%3C/svg%3E')",
            },
            animation: {
                'noise': 'noise 0.2s infinite steps(2)',
            },
            keyframes: {
                noise: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -5%)' },
                    '20%': { transform: 'translate(-10%, 5%)' },
                    '30%': { transform: 'translate(5%, -10%)' },
                    '40%': { transform: 'translate(-5%, 15%)' },
                    '50%': { transform: 'translate(-10%, 5%)' },
                    '60%': { transform: 'translate(15%, 0)' },
                    '70%': { transform: 'translate(0, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                }
            }
        },
    },
};
