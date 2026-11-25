import { useEffect, useRef, useState } from 'react'
import useReveal from './useReveal'
import { approvedClients, approvedTestimonials } from '../data/socialProof'

// Until client-owned proof is approved, show explicitly labeled application studies.
// These scenes are NOT customer reviews or completed KnashBD case studies.
const concepts = [
  {
    id: 'living', number: '01', category: 'RESIDENTIAL / APPLICATION STUDY',
    title: 'A home with more in mind.',
    description: 'Imagine a rooftop becoming an active part of everyday living. The right solar approach begins with the people and space it serves.',
    image: '/media/portfolio-residential.webp',
    alt: 'Concept photograph of a contemporary solar-powered home among trees',
    footing: 'LIVING SPACES',
  },
  {
    id: 'enterprise', number: '02', category: 'COMMERCIAL / APPLICATION STUDY',
    title: 'New purpose for every roof.',
    description: 'Across commercial spaces, available rooftop area can offer an opportunity to generate electricity close to where it is used.',
    image: '/media/portfolio-commercial.webp',
    alt: 'Concept photograph of solar panels on a large commercial building',
    footing: 'WORKING SPACES',
  },
  {
    id: 'landscape', number: '03', category: 'GROUND-MOUNT / APPLICATION STUDY',
    title: 'A landscape of possibility.',
    description: 'Carefully planned ground-mounted arrays turn the conversation toward land, light, environmental conditions, and long-term needs.',
    image: '/media/portfolio-ground.webp',
    alt: 'Concept photograph of an organized ground-mounted solar array in a green landscape',
    footing: 'OPEN LANDSCAPES',
  },
  {
    id: 'community', number: '04', category: 'SHARED SPACES / APPLICATION STUDY',
    title: 'Better energy, shared places.',
    description: 'Solar can be considered wherever people learn, gather, or work together — with system choices tailored to each environment.',
    image: '/media/portfolio-community.webp',
    alt: 'Concept photograph of a solar-ready educational or community campus',
    footing: 'COMMUNITY SPACES',
  },
]

const sectors = [
  'RESIDENTIAL', 'WORKPLACES', 'EDUCATION', 'INDUSTRY', 'OPEN LAND', 'COMMUNITIES',
]

function Arrow({ direction }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={direction === 'previous' ? 'M19 12H5m0 0 6-6m-6 6 6 6' : 'M5 12h14m0 0-6-6m6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SocialProof() {
  const sectionRef = useReveal()
  const carouselRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [visible, setVisible] = useState(false)
  const hasTestimonials = approvedTestimonials.length > 0
  const stories = hasTestimonials ? approvedTestimonials : concepts
  const current = stories[active % stories.length]
  const hasClients = approvedClients.length > 0

  useEffect(() => {
    const el = carouselRef.current
    if (!el || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: .2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !visible || stories.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setActive((value) => (value + 1) % stories.length), 7200)
    return () => window.clearInterval(timer)
  }, [paused, visible, stories.length])

  const move = (direction) => {
    setActive((value) => (value + direction + stories.length) % stories.length)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
  }

  return (
    <section id="stories" className="proof-section" aria-labelledby="proof-heading" ref={sectionRef}>
      <div className="section-overline proof-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> BEYOND THE INSTALLATION</span>
        <span className="overline-right">09 / CLIENT STORIES & PERSPECTIVES</span>
      </div>

      <div className="proof-intro" data-reveal>
        <h2 id="proof-heading">Every space<br />has a <em>story.</em></h2>
        <div className="proof-intro-aside">
          <span className="proof-aside-rule" aria-hidden="true" />
          <span className="proof-eyebrow">THE PEOPLE / THE PLACES / THE POSSIBILITY</span>
          <p>Solar is more than a system of panels. It belongs to the places people live, build and work. Explore the kinds of stories worth telling.</p>
        </div>
      </div>

      <div className="proof-carousel" role="region" aria-roledescription="carousel" aria-label={hasTestimonials ? 'Verified client testimonials' : 'Conceptual solar application stories'} ref={carouselRef}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
        }} onKeyDown={onKeyDown}>
        <div className="proof-picture">
          {stories.map((story, index) => (
            <img key={story.id} src={story.image} alt={story.alt || ''} width="1600" height="1066" decoding="async" loading="lazy"
              className={`proof-picture-img ${active === index ? 'proof-picture-img--active' : ''}`} aria-hidden={active !== index}/>
          ))}
          <span className="proof-picture-shade" aria-hidden="true" />
          <div className="proof-picture-corners" aria-hidden="true" />
          <div className="proof-picture-top" aria-hidden="true"><span>KNASHBD / IN PERSPECTIVE</span><span>{current.number || String(active + 1).padStart(2, '0')} — {String(stories.length).padStart(2, '0')}</span></div>
          <div className="proof-picture-bottom" aria-hidden="true"><span>{current.footing || current.category}</span><span>↗</span></div>
        </div>

        <div className="proof-narrative">
          <div className="proof-narrative-upper"><span>{hasTestimonials ? 'VERIFIED CLIENT VOICE' : 'CONCEPTUAL STORY / NOT A TESTIMONIAL'}</span><span className="proof-star" aria-hidden="true">✳</span></div>
          <div className="proof-narrative-content" key={current.id} aria-live="polite" aria-atomic="true">
            <span className="proof-narrative-category">{current.category}</span>
            <h3>{current.heading || current.title}</h3>
            <p>{current.quote || current.description}</p>
            {hasTestimonials && <span className="proof-attribution">{current.person} — {current.role}</span>}
          </div>
          <div className="proof-narrative-bottom">
            <span className="proof-slide-number"><strong>{String(active + 1).padStart(2, '0')}</strong><span> / {String(stories.length).padStart(2, '0')}</span></span>
            <div className="proof-controls">
              <button type="button" onClick={() => move(-1)} aria-label="Previous story"><Arrow direction="previous" /></button>
              <button type="button" onClick={() => move(1)} aria-label="Next story"><Arrow direction="next" /></button>
            </div>
          </div>
          <div className="proof-slide-progress" aria-hidden="true">
            {stories.map((story, index) => (
              <button key={story.id} type="button" className={index === active ? 'proof-progress-segment proof-progress-segment--active' : 'proof-progress-segment'}
                onClick={() => setActive(index)} aria-label={`View story ${index + 1}: ${story.heading || story.title}`} aria-pressed={index === active}>
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="proof-client-rail" data-reveal>
        <div className="proof-rail-meta"><span className="proof-rail-dash" />{hasClients ? 'OUR VERIFIED CLIENTS' : 'PLACES SOLAR CAN SERVE'}</div>
        <div className="proof-logo-viewport" aria-label={hasClients ? 'Verified client logos' : 'Types of spaces, not client logos'}>
          <div className="proof-logo-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="proof-logo-set" aria-hidden={copy === 1}>
                {hasClients ? approvedClients.map((client) => (
                  <a key={client.name} href={client.url || '#stories'} target={client.url ? '_blank' : undefined} rel={client.url ? 'noopener noreferrer' : undefined}
                    className="proof-client-mark" tabIndex={copy === 1 ? -1 : undefined} aria-label={`Client: ${client.name}`}>
                    <img src={client.logo} alt={client.name} loading="lazy" decoding="async" />
                  </a>
                )) : sectors.map((sector, index) => (
                  <span key={sector} className="proof-sector-mark"><span className="proof-sector-symbol" aria-hidden="true">{['◌', '⌁', '◇', '✳', '⊙', '⊹'][index]}</span>{sector}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="proof-verification-note">{hasClients ? 'Client marks displayed with permission.' : 'Sector names are illustrative, not client identities. Verified logos and attributed testimonials can be added after approval.'}</p>
      </div>
      <div className="proof-endnote" data-reveal><span>PEOPLE FIRST. DETAILS MATTER.</span><a href="#projects">RETURN TO PROJECT STUDIES <span aria-hidden="true">↗</span></a></div>
    </section>
  )
}
