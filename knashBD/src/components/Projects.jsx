import { useRef, useState } from 'react'
import useReveal from './useReveal'

// Concept imagery only. Replace these studies with verified client projects.
const studies = [
  { number: '01', short: 'Residential', tab: 'Home', category: 'LIVING SPACES',
    headline: 'Where life meets light.',
    description: 'A considered rooftop solar concept for the spaces we call home.',
    image: '/media/portfolio-residential.webp',
    alt: 'Contemporary house with dark solar panels, surrounded by green landscaping' },
  { number: '02', short: 'Commercial', tab: 'Business', category: 'WORKING SPACES',
    headline: 'Room to make an impact.',
    description: 'Imagining larger roofs as an opportunity to generate useful energy.',
    image: '/media/portfolio-commercial.webp',
    alt: 'Commercial building with a photovoltaic rooftop' },
  { number: '03', short: 'Ground-mount', tab: 'Ground', category: 'OPEN LANDSCAPES',
    headline: 'Power, with perspective.',
    description: 'Open land, carefully arranged panels, and a view of what is possible.',
    image: '/media/portfolio-ground.webp',
    alt: 'Ground-mounted solar modules stretching across a green field' },
  { number: '04', short: 'Shared spaces', tab: 'Shared', category: 'COMMUNITY & CAMPUS',
    headline: 'A brighter place to gather.',
    description: 'Exploring how solar-ready architecture can serve the spaces we share.',
    image: '/media/portfolio-community.webp',
    alt: 'Solar-covered building surrounded by greenery' },
]

export default function Projects() {
  const sectionRef = useReveal()
  const buttonsRef = useRef([])
  const [active, setActive] = useState(0)
  const nextIndex = (active + 1) % studies.length
  const next = studies[nextIndex]

  const handleKeys = (event, index) => {
    let target
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') target = (index + 1) % studies.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') target = (index - 1 + studies.length) % studies.length
    else if (event.key === 'Home') target = 0
    else if (event.key === 'End') target = studies.length - 1
    else return
    event.preventDefault()
    setActive(target)
    buttonsRef.current[target]?.focus()
  }

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading" ref={sectionRef}>
      <div className="section-overline projects-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> A PORTFOLIO OF POSSIBILITY</span>
        <span className="overline-right">08 / SELECTED VISUAL STUDIES</span>
      </div>
      <div className="projects-intro" data-reveal>
        <h2 id="projects-heading">Places for<br /><em>possibility.</em></h2>
        <div className="projects-intro-aside">
          <span className="projects-intro-line" aria-hidden="true" />
          <p>One source of energy. Many ways to put it to work. Explore four possibilities for solar in the spaces around us.</p>
          <span className="projects-select-label">SELECT A SCENE <span aria-hidden="true">↘</span></span>
        </div>
      </div>
      <div className="projects-accordion" data-reveal aria-label="Select a solar project concept">
        {studies.map((study, index) => {
          const selected = index === active
          return (
            <article key={study.number} className={selected ? 'projects-pane projects-pane--active' : 'projects-pane'}
              onMouseEnter={() => {
                if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) setActive(index)
              }}>
              <button type="button" className="projects-pane-surface"
                ref={(element) => { buttonsRef.current[index] = element }}
                aria-pressed={selected}
                aria-label={study.number + ' ' + study.short + '. ' + study.headline + ' ' + study.description + ' Concept image, not a completed Knash Engineering Limited project.'}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKeys(event, index)}>
                <img className="projects-pane-image" src={study.image} alt="" width="1600" height="1066"
                  loading="lazy" decoding="async" />
                <span className="projects-pane-shade" aria-hidden="true" />
                <span className="projects-pane-top" aria-hidden="true">
                  <span>KNASH ENGINEERING LIMITED / VISION {study.number}</span><span>+</span>
                </span>
                <span className="projects-pane-headline" aria-hidden="true">{study.headline}</span>
                <span className="projects-pane-bottom" aria-hidden="true">
                  <span className="projects-pane-name">{selected ? study.short : study.tab}<span>↗</span></span>
                  <span className="projects-pane-description">{study.description}</span>
                  <span className="projects-pane-category">{study.category}</span>
                </span>
              </button>
              {selected && (
                <button type="button" className="projects-next" onClick={() => setActive(nextIndex)}
                  aria-label={'Next concept: ' + next.short}>
                  <img src={next.image} alt="" aria-hidden="true" loading="lazy" />
                  <span aria-hidden="true">↗</span>
                </button>
              )}
            </article>
          )
        })}
      </div>
      <div className="projects-endnote" data-reveal>
        <span>GENERATED CONCEPTS / NOT COMPLETED KNASH ENGINEERING LIMITED PROJECTS</span>
        <span className="projects-endnote-line" aria-hidden="true" />
        <a href="#process">EXPLORE OUR PROCESS <span aria-hidden="true">↗</span></a>
      </div>
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        Showing {studies[active].short}: {studies[active].alt}. {studies[active].description}
      </p>
    </section>
  )
}
