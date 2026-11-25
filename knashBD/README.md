# Knash Engineering Limited — Editorial Solar Landing Page

React 19 + Vite. A typography-led solar company prototype built section by section, with responsive design, cinematic visual storytelling, reduced-motion handling, and no paid component library.

## Run locally

```bash
cd knashBD
npm ci
npm run dev
```

Production checks: `npm run lint` and `npm run build`.

## Page sections

1. Cinematic, muted, looping solar hero and glass navigation
2. Trust & credibility / approach
3. About Knash Engineering Limited
4. Solar solutions (residential, commercial, ground-mounted)
5. Why Go Solar
6. How We Work — installation process
7. Featured Projects
8. Stories & perspectives and prototype brand showcase
9. Get a Solar Consultation — quotation enquiry draft
10. Footer with navigation and back-to-top link

## Contact form setup — important before production

The form in `src/components/Consultation.jsx` uses **no server, email API or customer database**. It validates required fields in the browser and composes a readable enquiry draft, including selected project type and location.

By default, no company address is known, so the button **Prepare my enquiry** displays a selectable and copyable draft. No personal details are automatically transmitted or stored.

To enable pre-addressed email composition:

1. Copy `.env.example` to `.env` in the `knashBD` folder.
2. Set `VITE_CONTACT_EMAIL` to a **verified Knash Engineering Limited company email**.
3. Restart Vite and check the form in the browser.
4. The form's button becomes **Compose enquiry email** and opens the visitor's mail application with the address, subject and body populated.

**Opening an email composer does not guarantee the email was sent.** For actual in-site submission, delivery confirmation, spam protection, logging and privacy controls, a backend or a supported form service must be implemented. Do not claim an enquiry was delivered without such a service.

Never put credentials or private API tokens in `VITE_*` variables; these values are exposed to client browsers.

## Hero video

The supplied ambient clip is a placeholder. For your final fictional solar-assembly film, place a browser-compatible muted MP4 at `public/media/knash-solar-assembly.mp4` and set `VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4` in `.env`. The background autoplays muted and loops; it is **not** scroll-scrubbed. A static poster remains for reduced motion and video errors.

## Imagery, brands, testimonials

Some images are generated concepts, not evidence of completed Knash Engineering Limited installations. The project portfolio and stories are intentionally labeled as conceptual studies. Prototype logo references, if present, do **not** establish customer relationships or endorsements.

Replace all promotional brand marks, project claims, company facts and testimonials with verified, approved materials before publishing. Verified client testimonials and marks can be configured in `src/data/socialProof.js`.
