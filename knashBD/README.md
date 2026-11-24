# KnashBD — Editorial Solar Landing Page

React 19 + Vite, developed one part at a time. This version includes the **navbar, cinematic hero, trust/approach strip, and About KnashBD**. Future service, project, testimonial, and contact sections are not fabricated.

## Getting started

```bash
cd knashBD
npm ci
npm run dev
```

Build and lint checks:

```bash
npm run lint
npm run build
```

## Hero video (optional)

The hero works with its bundled vector poster until you supply your own 10-second film. To activate the film:

1. Add your browser-compatible H.264 MP4 to `public/media/knash-solar-assembly.mp4`.
2. Copy `.env.example` to `.env` in the `knashBD` folder.
3. Set `VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4`.
4. Restart the Vite server.

The film **autoplays muted and loops**; it is not scrubbed by scroll. The capsule entrance reveal is independent of film playback.

## Section design

- `src/components/TrustStrip.jsx`: a restrained three-part typographic approach statement, rather than unsupported customer counts or certification logos.
- `src/components/About.jsx`: brand introduction paired with an original architectural solar-panel study. The study is clearly labeled conceptual, not a delivered project.
- `src/components/useReveal.js` and `src/sections.css`: lightweight, one-time intersection reveals, reduced-motion handling, responsive editorial layout.
- Navigation and hero CTA use real anchors for the new sections.

**Content note:** Principle statements and About copy are positioning language, not claims of completed projects, warranties, years of experience, industry awards, or customer satisfaction. Replace with approved company facts when available.

## Phase 04: Applications + Why Solar

The Solutions section contains three **illustrative application studies** (residential rooftops, commercial rooftops, and open-field arrays). Select a study to change the technical drawing and its narrative; the drawings are custom SVGs, not completed project photographs. The benefits section uses broad, factual explanations without invented ROI, energy-savings figures, or warranties.

The navbar is a compact liquid-glass capsule with backdrop blur, light-edge refraction, and a scroll-aware state. It now links to all implemented sections and supports a keyboard-accessible mobile menu. The background video continues to autoplay and loop independently of page scrolling.

Specific service availability, track record and product promises should be confirmed with KnashBD before publishing commercial claims.
