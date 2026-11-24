# KnashBD — Editorial solar landing page

A white editorial design system for KnashBD with three implemented sections: cinematic hero, approach/credibility, and about. Built with React 19 and Vite, without an animation framework or UI kit.

## Run

```bash
cd knashBD
npm ci
npm run dev
```

For verification, use `npm run lint` and `npm run build`.

## Full-bleed looping hero video

The site ships with a lightweight 10-second **ambient placeholder loop** (`public/media/solar-field-loop.mp4`) made from an original solar reference still. It is **not** the fictional solar-panel self-assembly film. It plays automatically, muted, inline and loops independently of scrolling. A matching poster is used while it loads, on failure, or when motion reduction is requested. Visitors can pause/play from the discreet bottom rail.

To use your final Google Vids assembly video:

1. Save it as `public/media/knash-solar-assembly.mp4` (H.264 MP4 recommended).
2. Copy `.env.example` to `.env` and uncomment `VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4`.
3. Restart Vite. Video automatically fills the hero with `object-fit: cover`.

The first viewport has a large, staggered editorial headline, grounded supporting copy and links to existing page anchors. The fixed navbar uses a subtle liquid-glass treatment (backdrop blur, saturate, soft refraction/highlight, inset rim). The later white-themed sections remain intact.

Respect visitors' reduced-motion preference: the backdrop becomes a static poster and entrance animations stop. All interactive controls are keyboard accessible.

Credibility content is framed as values, not invented stats, partnerships, or testimonials. Solar visuals are conceptual, not delivered client projects.
