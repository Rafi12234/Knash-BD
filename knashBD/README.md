# KnashBD — Editorial Solar Landing Page

React 19 + Vite, developed one part at a time. The current milestone covers the **navbar, cinematic hero, trust/approach strip, and About KnashBD**. Future services, projects, testimonials and contact sections are intentionally left for later phases.

## Getting started

```bash
cd knashBD
npm ci
npm run dev
```

To validate: `npm run lint` and `npm run build`.

## Optional hero video

The hero displays a bundled solar illustration until the video is provided:

1. Add a browser-compatible H.264 MP4 to `public/media/knash-solar-assembly.mp4`.
2. Copy `.env.example` to `.env` in the `knashBD` folder.
3. Set `VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4`.
4. Restart Vite.

**The hero film autoplays, is muted, and loops continuously; scrolling does not control video playback.** The capsule entrance reveal is independent of the video.

## Current sections

- `src/components/Navbar.jsx`: responsive navigation with links to each implemented section.
- `src/components/Hero.jsx`: opening typographic hero and looping-video slot.
- `src/components/TrustStrip.jsx`: three concise approach principles. No invented client counts, certifications, or awards.
- `src/components/About.jsx`: editorial company introduction and original solar array schematic (clearly labeled as conceptual).
- `src/components/useReveal.js` and `src/sections.css`: lightweight intersection reveals with reduced-motion support and responsive design.

The current About and trust copy is brand-positioning language, not a representation of completed installations or independently verified credentials. Replace it with approved company facts when available.
