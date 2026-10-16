# Rashed Portfolio — ex00

## Run
Open `index.html` in a modern browser. No build step or external JavaScript libraries are required.

## Files
- `index.html` — semantic page structure and all required sections
- `style.css` — custom design, Flexbox, responsive media queries, light/dark theme variables
- `script.js` — theme switcher, language dictionary, mobile navigation, project dialogs, contact demo
- `assets/` — the three supplied portrait photos

## Required event lifecycle: theme switcher
1. **User action:** the visitor clicks the theme button.
2. **Event firing:** the browser dispatches a `click` event on `#themeToggle`.
3. **JavaScript callback:** the callback registered with `addEventListener("click", ...)` executes.
4. **DOM/CSS mutation:** `body.classList.toggle("light-theme")` adds or removes a class from the `<body>`. CSS custom properties under `body.light-theme` change the background, text, surface, and accent colors. The button also updates its icon and `aria-pressed` state.

## Notes before publishing
- Replace `rashed@example.com` in `script.js` with the real contact email.
- Skill indicators are illustrative learning-status visuals, not formal assessments.
- Projects 00–03 are clearly labelled practice concepts. Replace their descriptions and artwork with actual work when available.
- The form uses a `mailto:` link, so it opens the visitor's configured email application. It does not store or send form data to a server.
