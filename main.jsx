# VESPERA — Luxury Perfume Landing Page

Dark mode, glassmorphism, neon accents. Built with **Vite + React 18 + Tailwind CSS + Lucide React**.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `/dist`. Preview locally with:

```bash
npm run preview
```

## Deploy

The `dist/` folder is fully static — drop it on any host.

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# push /dist to gh-pages branch
```

### Cloudflare Pages / AWS S3 / any static host
Just upload the contents of `/dist`.

## Customize

Edit the constants at the top of `src/App.jsx`:
- `BRAND_NAME`
- `HERO_TITLE`
- `HERO_SUBTITLE`
- `CTA_LABEL`
- `PRODUCT_LIST` (array of `{ id, name, notes, imageURL, price, volume }`)

## Tech

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React (icons)
- Google Fonts: Cormorant Garamond + Inter
