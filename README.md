# loriscuntreri.com — Portfolio

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwww.loriscuntreri.com&up_message=online&down_message=offline&label=Live%20Portfolio)](https://www.loriscuntreri.com)

Single-page application built with **SolidJS** + **Vite** + **Tailwind CSS v4**. No router — content switches between **tabs** (Home / Who am I / Projects) via reactive state; it/en switching via an in-memory language context.

## Commands

| Command               | Action                          |
| :-------------------- | :------------------------------ |
| `pnpm install`        | Installs dependencies           |
| `pnpm run dev`        | Starts local dev server         |
| `pnpm run build`      | Builds production site to `dist/` |
| `pnpm run preview`    | Previews the build locally      |

## Deploy

Build with `pnpm run build`, then copy `dist/` to `/var/www/loriscuntreri.com/html` (nginx serves it as an SPA via `try_files $uri $uri/ /index.html`).

## Structure

- `src/i18n.tsx` — it/en dictionary + reactive language context
- `src/tabs.tsx` — tab state (Home / Who am I / Projects), no URLs
- `src/sections/` — view content (Hero, WhyChooseMe, WhoAmI, Projects, ContactMe)
- `src/components/` — shared components (Navbar, Footer, LanguageToggle, Button, ContactCard, Star)
- `public/` — favicon + per-language CV PDFs