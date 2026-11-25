import { useState } from 'react'
import useReveal from './useReveal'

const reasons = [
  {
    id: 'control', number: '01', title: 'More control.',
    copy: 'Generating electricity where it is used can reduce dependence on power purchased from the grid.',
    note: 'ENERGY / CHOICE',
    image: '/media/solar-benefit-control.webp',
    imageDescription: 'Solar modules catching late-day light above a leafy residential neighborhood',
  },
  {
    id: 'value', number: '02', title: 'A longer view.',
    copy: 'A thoughtfully designed system can offset electricity use over time, depending on site conditions and actual performance.',
    note: 'VALUE / TIME',
    image: '/media/solar-benefit-value.webp',
    imageDescription: 'Expansive commercial rooftop solar installation seen from above',
  },
  {
    id: 'environment', number: '03', title: 'Less impact.',
    copy: 'Solar produces electricity without fuel combustion at the point of generation.',
    note: 'ENERGY / ENVIRONMENT',
    image: '/media/solar-benefit-environment.webp',
    imageDescription: 'Ground-mounted solar installation set within an open green landscape',
  },
]

export default function Benefits() {
  const ref = useReveal()
  const [active, setActive] = useState('control')
  const selected = reasons.find((item) => item.id === active) ?? reasons[0]

  return (
    <section id="benefits" className="benefits-section benefits-section--cinematic" aria-labelledby="benefits-heading" ref={ref}>
      <div className="section-overline section-overline--benefits" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> THE CASE FOR SOLAR</span>
        <span className="overline-right">06 / BEYOND THE PANELS</span>
      </div>

      <div className="benefits-intro benefits-intro--cinematic" data-reveal>
        <h2 id="benefits-heading">A brighter<br /><em>equation.</em></h2>
        <p>Solar is more than a different way to generate electricity. It's a different way to think about the energy around us.</p>
      </div>

      <div className="benefits-showcase">
        <figure className="benefits-showcase__scene" data-reveal aria-label={`Solar perspective: ${selected.title}`}>
          <div className="benefits-showcase__photos">
            {reasons.map((item) => (
              <img key={item.id} src={item.image} alt="" loading="lazy" decoding="async"
                className={`benefits-showcase__photo ${active === item.id ? 'benefits-showcase__photo--active' : ''}`}
                aria-hidden="true" width="1120" height="980" />
            ))}
          </div>
          <div className="benefits-showcase__glass" aria-hidden="true" />
          <span className="benefits-showcase__topline" aria-hidden="true">KNASH ENGINEERING LIMITED / SOLAR PERSPECTIVES</span>
          <div className="benefits-showcase__foot">
            <span>LIGHT, PUT TO WORK.</span>
            <span className="benefits-showcase__counter">{selected.number} <span>/</span> 03</span>
          </div>
          <figcaption className="visually-hidden" aria-live="polite" aria-atomic="true">
            {selected.imageDescription}. Generated conceptual illustration, not a photograph of a Knash Engineering Limited project.
          </figcaption>
        </figure>

        <div className="benefits-showcase__stories" data-reveal aria-label="Explore solar benefits">
          <div className="benefits-showcase__instruction"><span>THREE REASONS TO LOOK AHEAD</span><span>SELECT TO EXPLORE ↗</span></div>
          {reasons.map((item) => (
            <button type="button" key={item.id}
              className={`benefits-story ${active === item.id ? 'benefits-story--active' : ''}`}
              aria-pressed={active === item.id}
              onClick={() => setActive(item.id)}
            >
              <span className="benefits-story__number">/{item.number}</span>
              <span className="benefits-story__content">
                <span className="benefits-story__title">{item.title}</span>
                <span className="benefits-story__description">{item.copy}</span>
                <span className="benefits-story__tag">{item.note}</span>
              </span>
              <span className="benefits-story__arrow" aria-hidden="true">↗</span>
              <span className="benefits-story__progress" aria-hidden="true" />
            </button>
          ))}
          <p className="benefits-showcase__disclaimer">Actual savings and suitability depend on consumption, location, equipment and system design. Images are generated concepts.</p>
        </div>
      </div>

      <div className="benefits-endnote benefits-endnote--cinematic" data-reveal>
        <span>DESIGNED FOR THE LONG VIEW.</span>
        <span className="benefits-endnote-rule" aria-hidden="true" />
        <a href="#process">SEE HOW WE WORK <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
