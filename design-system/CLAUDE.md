# Design system: Monograph

All UI in this repo follows the Monograph design system in `design-system/`.

- Read `design-system/README.md` before writing or changing any UI. It is the source of truth for color, type, spacing, layout and voice.
- Load `design-system/tokens.css` first, then `design-system/components/bundle.css`. Use the CSS variables (`--paper`, `--ink`, `--accent`, `--space-5`, `--measure`, ...); never hardcode a hex value or font name.
- Component guidelines are in `design-system/components/<Name>.md`; props are in `components/index.d.ts`. Reuse the `mg-*` class names from `bundle.css` if not using React.
- `components/bundle.js` is a React 18 UMD-style bundle exposing `window.Monograph`. In a React/Next project, port the components to real `.tsx` files that keep the same props and class names rather than loading the bundle.
- Themes: light by default, dark via `prefers-color-scheme` or `data-theme="dark"` on `<html>`.
- Math: render equations with KaTeX and pass the output to `Equation`.
- Do not introduce new colors, shadows, gradients, rounded cards or icon sets. If something is missing, propose a token or component in `design-system/README.md` first.
