import { useState } from 'react'
import useReveal from './useReveal'

// Concept photography, not documentation of completed client installations.
const steps = [
  {
    number: '01', title: 'Consultation', label: 'DISCOVERY / FIRST CONVERSATION',
    description: 'We listen first: your energy needs, the space, and the goals that will shape a suitable solar solution.',
    image: '/media/how-work-consultation.webp', alt: 'Solar specialist discussing a possible installation with a client',
    icon: 'conversation',
  },
  {
    number: '02', title: 'Site Assessment', label: 'SURVEY / SITE CONDITIONS',
    description: 'We review roof or land conditions, available sunlight, access, and practical requirements before moving ahead.',
    image: '/media/how-work-assessment.webp', alt: 'Solar rooftop design and site assessment on a laptop',
    icon: 'survey',
  },
  {
    number: '03', title: 'Installation', label: 'EQUIPMENT / INSTALLATION',
    description: 'Mounting structures, photovoltaic panels, and electrical equipment come together with care for site details and safety.',
    image: '/media/how-work-installation.webp', alt: 'Solar panel installers securing modules on a rooftop',
    icon: 'tools',
  },
  {
    number: '04', title: 'Activation', label: 'TESTING / COMMISSIONING',
    description: 'The installed system is checked, tested, and commissioned, followed by practical guidance for operation.',
    image: '/media/how-work-activation.webp', alt: 'Solar technician inspecting an inverter',
    icon: 'power',
  },
]

function StageIcon({ type }) {
  if (type === 'conversation') return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 7h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H13l-7 4v-4H7a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3Z" />
      <circle cx="11" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="21" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
  if (type === 'survey') return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="20" height="23" rx="2" />
      <rect x="11" y="3" width="10" height="6" rx="1" />
      <path d="m10 16 2 2 3-4M18 16h4M10 23h12" />
    </svg>
  )
  if (type === 'tools') return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="m6 5 8 8m5 5 8 8M20 4a6 6 0 0 0-6 7l7 7a6 6 0 0 0 7-6l-4 3-5-5 3-4a6 6 0 0 0-2-2Z" />
      <path d="M8 27 5 24l10-10 3 3L8 27Z" />
    </svg>
  )
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3v14M8 8a12 12 0 1 0 16 0" />
    </svg>
  )
}

export default function Process() {
  const sectionRef = useReveal()
  const [active, setActive] = useState(0)
  const selected = steps[active]

  return (
    <section id="process" className="kn-work" ref={sectionRef} aria-labelledby="kn-work-heading">
      <div className="kn-work__hero">
        <img className="kn-work__hero-image" src="/media/how-work-hero.webp" alt=""
          width="1280" height="880" loading="lazy" decoding="async" />
        <span className="kn-work__hero-wash" aria-hidden="true" />
        <div className="kn-work__hero-content" data-reveal>
          <p className="kn-work__eyebrow"><span /> KNASH ENGINEERING LIMITED / THE INSTALLATION JOURNEY</p>
          <h2 id="kn-work-heading">How We Work <span className="kn-work__dash">—</span><em>Installation process</em></h2>
          <span className="kn-work__heading-mark" aria-hidden="true" />
          <p className="kn-work__hero-intro">From the first conversation to the final connection.</p>
        </div>
      </div>

      <div className="kn-work__lower">
        <div className="kn-work__flow" data-reveal>
          <div className="kn-work__timeline" role="group" aria-label="Select an installation stage">
            <span className="kn-work__timeline-track" aria-hidden="true" />
            <span className="kn-work__timeline-fill"
              style={{ '--kn-work-progress': active / (steps.length - 1) }} aria-hidden="true" />
            {steps.map((step, index) => (
              <button key={step.number} type="button"
                className={'kn-work__timeline-dot' + (active === index ? ' is-selected' : '')}
                onClick={() => setActive(index)}
                aria-label={'Select ' + step.title + ', step ' + step.number + ' of 04'}
                aria-pressed={active === index}>
                {step.number}
              </button>
            ))}
          </div>
          <div className="kn-work__cards">
            {steps.map((step, index) => (
              <button key={step.number} type="button"
                className={'kn-work__card' + (active === index ? ' is-selected' : '')}
                aria-label={'Step ' + step.number + ': ' + step.title + '. ' + step.description}
                aria-pressed={active === index}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}>
                <img src={step.image} alt={step.alt} width="900" height="600"
                  loading="lazy" decoding="async" />
                <span className="kn-work__card-shade" aria-hidden="true" />
                <span className="kn-work__card-bottom">
                  <span className="kn-work__card-icon"><StageIcon type={step.icon} /></span>
                  <span className="kn-work__card-divider" aria-hidden="true" />
                  <span className="kn-work__card-copy">
                    <strong>{step.title}</strong>
                    <span>{step.label}</span>
                  </span>
                  <span className="kn-work__card-arrow" aria-hidden="true">↗</span>
                </span>
              </button>
            ))}
          </div>
          <div className="kn-work__narrative" aria-live="polite" aria-atomic="true">
            <span className="kn-work__narrative-index">THE PROCESS / {selected.number} — 04</span>
            <p className="kn-work__narrative-copy" key={selected.number}>{selected.description}</p>
            <span className="kn-work__narrative-rule" aria-hidden="true" />
            <span className="kn-work__narrative-label">CONCEPT IMAGERY</span>
          </div>
        </div>
      </div>
    </section>
  )
}
