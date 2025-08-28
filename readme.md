
# Sies — Waitlist Landing (Static)

**Copyright © 2025 Sean Davey. All rights reserved.**

This is a single-file static site (`index.html`). You can deploy it *as-is* anywhere that serves static files.

## Project Ownership

This project is owned and developed by **Sean Davey**. All code, design, and intellectual property contained within this repository are proprietary and protected by copyright law.

## Easiest ways to deploy

### Option 1 — Netlify Drop (no account required)
1. Go to https://app.netlify.com/drop
2. Drag the folder or ZIP from this bundle. Netlify will host it instantly.
3. Click **Site settings → Domain** to set a custom domain (or connect your domain).

### Option 2 — Vercel (CLI)
```bash
npm i -g vercel
vercel deploy --prod
```
(Answer the prompts; it will choose `index.html` as the entry.)

### Option 3 — GitHub Pages
1. Create a new repo and upload `index.html`.
2. In repo settings → Pages → Deploy from Branch (main), root `/`.

### Hook up the waitlist form
- Replace `FORM_ENDPOINT` in `index.html` with a Formspree/Fillout/ConvertKit endpoint.
- For Google Sheets:
  - Create an Apps Script Web App that writes incoming POSTs to a sheet.
  - Paste the Web App URL into `FORM_ENDPOINT`.

### Swap in your app screenshot
Replace the `<img>` in the `.mock-inner` with your latest mockup image.

