import { useEffect, useRef, useState } from 'react'
import useReveal from './useReveal'

const stages = [
  {
    number: '01', id: 'conversation', title: 'Start with a conversation.', short: 'Listen & understand',
    label: 'CONSULTATION / ASSESSMENT',
    description: 'We begin with the space, the energy needs, and the questions that matter. An initial conversation and site assessment help define the right direction.',
    image: '/media/solar-process-consult.webp',
    alt: 'Conceptual image of a solar consultation in a calm office setting',
  },
  {
    number: '02', id: 'design', title: 'Shape the right system.', short: 'Survey & design',
    label: 'PLANNING / SYSTEM DESIGN',
    description: 'The site, available sunlight, usable area, and practical requirements guide an appropriately sized system concept before installation begins.',
    image: '/media/solar-process-design.webp',
    alt: 'Conceptual visualization of rooftop solar system planning on a laptop',
  },
  {
    number: '03', id: 'installation', title: 'Bring the plan to life.', short: 'Careful installation',
    label: 'STRUCTURE / INSTALLATION',
    description: 'Mounting structures, photovoltaic modules, and electrical equipment come together with attention to safe working practices and the details of the site.',
    image: '/media/solar-process-install.webp',
    alt: 'Conceptual image of safety-equipped solar installers placing modules on a rooftop',
  },
  {
    number: '04', id: 'commission', title: 'Check every connection.', short: 'Test & activate',
    label: 'TESTING / COMMISSIONING',
    description: 'The system is checked and commissioned before operation, with equipment and performance expectations explained clearly at handover.',
    image: '/media/solar-process-activate.webp',
    alt: 'Conceptual view of solar inverter inspection and system activation',
  },
  {
    number: '05', id: 'support', title: 'Think past day one.', short: 'Support & care',
    label: 'AFTERCARE / PERFORMANCE',
    description: 'Monitoring, maintenance planning, and clear guidance all help keep a solar investment useful over the long term.',
    image: '/media/solar-process-support.webp',
    alt: 'Conceptual image of a solar-energy performance dashboard on a computer',
  },
]

export default function Process() {
  const sectionRef = useReveal()
  const processRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const section = processRef.current
    if (!section) return undefined
    const articles = Array.from(section.querySelectorAll('[data-process-step]'))
    let request = 0
    const update = () => {
      request = 0
      const guide = window.innerHeight * .43
      let best = 0
      let distance = Infinity
      articles.forEach((article, index) => {
        const rect = article.getBoundingClientRect()
        const center = rect.top + Math.min(rect.height * .35, 210)
        const delta = Math.abs(center - guide)
        if (delta < distance) { distance = delta; best = index }
      })
      setActive((previous) => previous === best ? previous : best)
    }
    const onMove = () => { if (!request) request = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onMove, { passive: true })
    window.addEventListener('resize', onMove)
    return () => {
      window.removeEventListener('scroll', onMove)
      window.removeEventListener('resize', onMove)
      if (request) window.cancelAnimationFrame(request)
    }
  }, [])

  const jumpTo = (index) => {
    const target = document.getElementById(`process-${stages[index].id}`)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
    setActive(index)
  }

  return (
    <section id="process" className="process-section" aria-labelledby="process-heading" ref={sectionRef}>
      <div className="section-overline process-section__overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> FROM FIRST HELLO TO FIRST WATT</span>
        <span className="overline-right">07 / THE INSTALLATION JOURNEY</span>
      </div>

      <div className="process-section__intro" data-reveal>
        <h2 id="process-heading">How we<br /><em>work.</em></h2>
        <div className="process-section__intro-aside">
          <span className="process-section__aside-rule" aria-hidden="true" />
          <p>A solar project is a sequence of considered decisions. Explore the five stages of a typical installation journey.</p>
        </div>
      </div>

      <div className="process-story" ref={processRef}>
        <div className="process-story__media" aria-label="Installation process imagery">
          <figure className="process-story__frame">
            {stages.map((stage, index) => (
              <img key={stage.id} src={stage.image} alt="" loading="lazy" decoding="async"
                className={`process-story__photo ${active === index ? 'process-story__photo--active' : ''}`}
                aria-hidden="true" width="1280" height="880" />
            ))}
            <span className="process-story__gradient" aria-hidden="true" />
            <div className="process-story__frame-top"><span>KNASHBD — THE PROCESS</span><span>0{active + 1} / 05</span></div>
            <figcaption className="process-story__frame-bottom" aria-live="polite" aria-atomic="true">
              <span key={stages[active].id} className="process-story__frame-label">{stages[active].label}</span>
              <span className="process-story__frame-note">CONCEPT IMAGERY</span>
            </figcaption>
          </figure>
          <nav className="process-story__timeline" aria-label="Installation stages">
            {stages.map((stage, index) => (
              <button key={stage.id} type="button" onClick={() => jumpTo(index)}
                aria-label={`Go to step ${stage.number}: ${stage.short}`}
                aria-current={active === index ? 'step' : undefined}
                className={`process-story__timeline-point ${active === index ? 'process-story__timeline-point--active' : ''}`}>
                <span>{stage.number}</span>
              </button>
            ))}
            <span className="process-story__timeline-track" aria-hidden="true" />
            <span className="process-story__timeline-progress" style={{ '--process-progress': `${active / (stages.length - 1)}` }} aria-hidden="true" />
          </nav>
        </div>

        <div className="process-story__chapters">
          {stages.map((stage, index) => (
            <article key={stage.id} id={`process-${stage.id}`} data-process-step
              className={`process-milestone ${active === index ? 'process-milestone--active' : ''}`}>
              <div className="process-milestone__eyebrow"><span>/{stage.number}</span><span>{stage.label}</span></div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <img className="process-milestone__mobile-photo" src={stage.image} alt={stage.alt} loading="lazy" decoding="async" width="900" height="600" />
              <span className="process-milestone__foot">{stage.short}<span aria-hidden="true">↗</span></span>
            </article>
          ))}
        </div>
      </div>
      <div className="process-section__endnote" data-reveal>
        <span>THE EXACT PROCESS DEPENDS ON EACH SITE AND PROJECT.</span>
        <a href="#home">BACK TO THE START <span aria-hidden="true">↑</span></a>
      </div>
    </section>
  )
}
