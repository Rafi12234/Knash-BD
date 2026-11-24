# KnashBD — Navbar + Hero (Phase 01)

An editorial, white-theme React/Vite landing-page foundation for KnashBD. The first milestone intentionally covers **navigation, a cinematic hero reveal, and a minimal continuation**; solutions, projects, and contact sections are deliberately not invented.

## Run locally

```bash
cd knashBD
npm ci
npm run dev
```

To validate: `npm run lint` and `npm run build`.

## Replace the hero still with your 10-second solar assembly video

1. Export the finished clip as a browser-compatible, muted, 16:9 MP4 (H.264 is a safe default).
2. Place it at `public/media/knash-solar-assembly.mp4`.
3. Copy `.env.example` to `.env` and uncomment `VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4`.
4. Restart Vite.

The video is intentionally **scrubbed against page scroll** while the hero is sticky, rather than autoplaying independently. Until a video is supplied, the packaged solar artwork is displayed with subtle scroll parallax. The reveal, nav and section transition work without video.

## Design considerations

- A typography-first, split-word opening that expands a narrow vertical slice into a photographic capsule, referencing the *motion language* of the supplied inspiration without reusing its imagery or branding.
- Responsive navbar with real anchor targets, keyboard-friendly mobile menu, Escape close, visible focus rings.
- Reduced-motion support; no external UI framework, tracking scripts, or remote image requests.
- The pale editorial continuation is only a transition into future sections, not a fabricated project portfolio.

The solar visual is a KnashBD design concept, not a photograph of a completed client project.
