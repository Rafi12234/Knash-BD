import { useEffect, useLayoutEffect, useRef } from 'react'

function ValueMark({ kind }) {
  if (kind === 'leaf') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M33 6C17 7 7 16 7 28c0 5 3 7 7 7 13 0 20-13 19-29Z" />
        <path d="M5 36c5-10 12-16 22-22" />
      </svg>
    )
  }
  if (kind === 'layers') {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m20 5 16 8-16 8L4 13l16-8ZM4 21l16 8 16-8M4 29l16 8 16-8" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="13" r="7" />
      <path d="M7 35v-3c0-7 6-12 13-12s13 5 13 12v3M7 19c-4 0-6 3-6 7v5m32-12c4 0 6 3 6 7v5" />
    </svg>
  )
}

const values = [
  { label: 'CLEAN', second: 'ENERGY', kind: 'leaf' },
  { label: 'RELIABLE', second: 'SOLUTIONS', kind: 'layers' },
  { label: 'LASTING', second: 'IMPACT', kind: 'people' },
]

/**
 * The entrance is controlled by the section's own viewport observer, rather
 * than by per-word mount-time geometry. It works on first scroll, deep links,
 * browser scroll restoration and subsequent re-entries without a refresh.
 */
export default function About() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || !window.matchMedia) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return undefined

    section.classList.add('about-cinematic--motion-ready')
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.16) {
        section.classList.add('about-cinematic--entered')
      } else if (!entry.isIntersecting) {
        section.classList.remove('about-cinematic--entered')
      }
    }, { threshold: [0, 0.16, 0.3] })

    observer.observe(section)
    return () => {
      observer.disconnect()
      section.classList.remove('about-cinematic--motion-ready', 'about-cinematic--entered')
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let frame = 0
    const update = () => {
      frame = 0
      const { top, height } = section.getBoundingClientRect()
      const viewport = window.innerHeight
      if (top >= viewport || top + height <= 0) return
      const progress = Math.max(0, Math.min(1, (viewport - top) / (viewport + height)))
      section.style.setProperty('--about-drift', `${((progress - 0.5) * 27).toFixed(2)}px`)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="about-cinematic" id="about" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="about-cinematic__scene" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet="/media/about-solar-landscape-mobile.webp" />
          <img
            src="/media/about-solar-landscape-wide.webp"
            alt=""
            width="2048"
            height="1152"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="about-cinematic__shade" aria-hidden="true" />

      <div className="about-cinematic__content">
        <div className="about-cinematic__top about-cinematic__enter" style={{ '--about-delay': '70ms' }}>
          <span className="about-cinematic__label">KNASH ENGINEERING LIMITED <span aria-hidden="true">/</span> ABOUT US</span>
          <span className="about-cinematic__top-right"><span className="about-cinematic__top-rule" aria-hidden="true" /> A DIFFERENT PERSPECTIVE ON POWER</span>
        </div>

        <div className="about-cinematic__body">
          <div className="about-cinematic__title-block">
            <h2 className="about-cinematic__title" id="about-heading" aria-label="About us">
              <span className="about-cinematic__line"><span className="about-cinematic__word" style={{ '--about-delay': '110ms' }}>about</span></span>
              <span className="about-cinematic__line"><span className="about-cinematic__word" style={{ '--about-delay': '240ms' }}>us<span className="about-cinematic__period">.</span></span></span>
            </h2>
          </div>

          <div className="about-cinematic__story" id="about-story">
            <span className="about-cinematic__eyebrow about-cinematic__enter" style={{ '--about-delay': '310ms' }}>ABOUT KNASH ENGINEERING LIMITED</span>
            <h3 className="about-cinematic__enter" style={{ '--about-delay': '370ms' }}>Nice to meet <em>you!</em></h3>
            <p className="about-cinematic__enter" style={{ '--about-delay': '465ms' }}>
              Knash Engineering Limited brings a thoughtful approach to solar energy for homes, businesses, and open spaces.
              We believe practical design and a long-term perspective can make the transition to
              cleaner energy clearer, more accessible, and more rewarding.
            </p>
            <div className="about-cinematic__values about-cinematic__enter" style={{ '--about-delay': '560ms' }} aria-label="Our focus">
              {values.map(({ label, second, kind }) => (
                <div className="about-cinematic__value" key={label}>
                  <ValueMark kind={kind} />
                  <span>{label}<br />{second}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-cinematic__footer about-cinematic__enter" style={{ '--about-delay': '690ms' }}>
          <a href="#about-story" className="about-cinematic__story-link" aria-label="Read our story">
            <span className="about-cinematic__story-arrow" aria-hidden="true">↗</span>
            <span>OUR STORY</span>
          </a>
          <div className="about-cinematic__progress" aria-label="Three areas of focus">
            <span>01 <span className="about-cinematic__progress-slash">/</span> 03</span>
            <span className="about-cinematic__progress-track" aria-hidden="true"><span /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
