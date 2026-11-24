import { useState } from 'react'
import useReveal from './useReveal'

// Photographic concept studies. These images are not photos of KnashBD client projects.
const applications = [
  {
    id: 'residential',
    index: '01',
    title: 'Residential',
    subtitle: 'Where everyday life meets solar.',
    details: 'Thoughtful rooftop solar concepts for homes and living spaces, planned around the shape of each building.',
    caption: 'ROOFTOP STUDY / PRIVATE SPACES',
    image: '/media/solar-residential.webp',
    imageAlt: 'Modern white home with black roof-mounted solar panels in a landscaped garden',
  },
  {
    id: 'commercial',
    index: '02',
    title: 'Commercial',
    subtitle: 'Put working spaces to work.',
    details: 'Solar applications for commercial and industrial rooftops, where available surfaces can serve a bigger purpose.',
    caption: 'ROOFTOP STUDY / WORKING SPACES',
    image: '/media/solar-commercial.webp',
    imageAlt: 'Contemporary commercial building with an extensive rooftop solar panel installation',
  },
  {
    id: 'ground',
    index: '03',
    title: 'Ground-mount',
    subtitle: 'A wider view of possibility.',
    details: 'Considered arrangements of ground-mounted panels for open sites with room to capture more daylight.',
    caption: 'FIELD STUDY / OPEN SPACES',
    image: '/media/solar-ground-mount.webp',
    imageAlt: 'Ground-mounted photovoltaic array stretching across a grassy green field',
  },
]

export default function Solutions() {
  const sectionRef = useReveal()
  const [active, setActive] = useState('residential')
  const selected = applications.find((item) => item.id === active) ?? applications[0]

  return (
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-heading" ref={sectionRef}>
      <div className="section-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> SOLAR APPLICATIONS</span>
        <span className="overline-right">05 / FORM MEETS FUNCTION</span>
      </div>

      <div className="solutions-intro" data-reveal>
        <h2 id="solutions-heading">A place for<br /><em>the sun.</em></h2>
        <p>Different spaces. Different opportunities. One simple idea: use the light that is already here.</p>
      </div>

      <div className="solutions-workspace">
        <div className="solutions-selector" data-reveal aria-label="Solar applications">
          <p className="solutions-selector-label">CHOOSE AN APPLICATION <span aria-hidden="true">↘</span></p>
          {applications.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`solution-option ${active === item.id ? 'solution-option--active' : ''}`}
              onClick={() => setActive(item.id)}
              aria-pressed={active === item.id}
              aria-controls="solution-description"
            >
              <span className="solution-option-number">/{item.index}</span>
              <span className="solution-option-title">{item.title}</span>
              <span className="solution-option-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="solutions-selector-foot">SELECTION / {selected.index} OF 03</div>
        </div>

        <figure className="solutions-figure solutions-figure--photographic" data-reveal>
          <div className="solutions-image-frame solutions-photo-stage">
            {applications.map((item) => (
              <img
                key={item.id}
                className={`solutions-photograph ${active === item.id ? 'solutions-photograph--active' : ''}`}
                src={item.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width="1254"
                height="1254"
              />
            ))}
            <span className="solutions-photo-shade" aria-hidden="true" />
            <span className="solutions-photo-topline" aria-hidden="true">KN / {selected.index} — SOLAR APPLICATIONS</span>
            <span className="solutions-photo-index" aria-hidden="true">{selected.index} / 03</span>
          </div>
          <figcaption className="solutions-caption solutions-caption--immersive" id="solution-description">
            {applications.map((item) => {
              const isActive = active === item.id
              return (
                <div
                  key={item.id}
                  className={`solutions-overlay-panel ${isActive ? 'solutions-overlay-panel--active' : ''}`}
                  aria-hidden={!isActive}
                >
                  <div className="solutions-overlay-meta">
                    <span>{item.caption}</span>
                    <span>FIG. {item.index} / 03</span>
                  </div>
                  <h3>{item.subtitle}</h3>
                  <p>{item.details}</p>
                  <span className="solutions-overlay-accent" aria-hidden="true" />
                </div>
              )
            })}
          </figcaption>
          <span className="visually-hidden" aria-live="polite" aria-atomic="true">
            {selected.title} solar: {selected.subtitle} {selected.details}
            This is a generated concept image, not a completed KnashBD project.
          </span>
        </figure>
      </div>
      <div className="solutions-endnote" data-reveal>
        <span>GENERATED CONCEPT IMAGERY — NOT COMPLETED KNASHBD PROJECTS</span>
        <a href="#benefits">WHY CONSIDER SOLAR? <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
