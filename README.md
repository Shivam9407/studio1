# Experimental Motion Studio

## Quick Start Guide

This project is a runnable local configuration of the original static `index.html`. It preserves all Tailwind CDN configurations, fonts, and inline JavaScript logic to ensure exact compatibility out of the box, while adding a real development server.

### 1. Minimal Project Structure
```text
/experimental-motion-studio
├── index.html     (original logic, fully preserved)
├── package.json   (server config)
├── style.css      (optional external stylesheet placeholder)
└── script.js      (optional external script placeholder)
```

### 2. Terminal Setup Commands

Open a terminal in `d:\dd` (or wherever your project folder is), and run the following:

```bash
# 1. Start by installing the lightweight dev server globally (if needed)
npm install -g serve

# OR install for this specific project (already configured in package.json)
npm install
```

### 3. Command to Start Localhost

```bash
# Start the local server
npx serve .
# OR
npm run start
```

### 4. Expected Localhost URL

- **URL:** `http://localhost:3000` (or the port indicated in your terminal)

---

## Fallback Fixes (If things break)

### If the Tailwind CDN fails to load:
1. Try downloading the Tailwind standalone CLI.
2. Link a compiled CSS file by adding `<link href="style.css" rel="stylesheet">` into the `index.html` head section instead of the CDN script tag.

### If fonts don’t load:
1. Google Fonts might be blocked on your network or failing.
2. Download the `.ttf` files for **Inter** and **Space Mono** directly from Google Fonts.
3. Place them in an `assets/fonts/` folder and add `@font-face` rules into `style.css`.

### If Custom Cursor JS breaks:
1. Check your browser console (`F12`).
2. If `e.clientX` or `e.clientY` is undefined or throwing errors (sometimes happens on purely touch devices), add a guard clause:
   ```javascript
   if (!e.clientX || !e.clientY) return;
   ```
3. Alternatively, move the script into `script.js` and structure it with a `DOMContentLoaded` event listener to ensure all DOM elements are loaded before selecting `.custom-cursor`.
