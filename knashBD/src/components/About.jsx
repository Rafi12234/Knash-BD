import { useEffect } from 'react'
import useReveal from './useReveal'

/**
 * Editorial About chapter. The background is a conceptual solar photograph,
 * while the heading and company description stay accessible HTML text.
 */
export default function About() {
  const sectionRef = useReveal()

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !window.matchMedia || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let animationFrame = 0
    const update = () => {
      animationFrame = 0
      const { top, height } = section.getBoundingClientRect()
      const viewport = window.innerHeight
      if (top > viewport || top + height < 0) return
      const progress = Math.max(0, Math.min(1, (viewport - top) / (height + viewport)))
      section.style.setProperty('--about-drift', `${(progress - .5) * 32}px`)
    }
    const onScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [sectionRef])

  return (
    <section className="about-cinematic" id="about" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="about-cinematic__scene" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet="/media/about-solar-landscape-mobile.webp" />
          <img
            src="/media/about-solar-landscape-wide.webp"
            width="2048"
            height="1152"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="about-cinematic__shade" aria-hidden="true" />

      <div className="about-cinematic__content">
        <div className="about-cinematic__top" data-reveal>
          <span className="about-cinematic__label">KNASHBD <span aria-hidden="true">/</span> ABOUT US</span>
          <span className="about-cinematic__barcode" aria-hidden="true" />
        </div>

        <div className="about-cinematic__body">
          <h2 className="about-cinematic__title" id="about-heading" aria-label="About us">
            <span className="about-cinematic__line"><span className="about-cinematic__word" data-reveal>about</span></span>
            <span className="about-cinematic__line"><span className="about-cinematic__word" data-reveal style={{ '--stagger': '130ms' }}>us<span className="about-cinematic__period">.</span></span></span>
          </h2>

          <div className="about-cinematic__story" data-reveal style={{ '--stagger': '240ms' }}>
            <span className="about-cinematic__section-number">04 — THE PEOPLE &amp; THE PURPOSE</span>
            <h3>nice to meet you!</h3>
            <p>
              At KnashBD, we see solar as a way to make better use of the energy already around us.
              Our focus is on thoughtful solar solutions for homes, businesses, and open spaces—
              with clarity in every conversation and care for the long view.
            </p>
            <span className="about-cinematic__story-rule" aria-hidden="true" />
          </div>
        </div>

        <div className="about-cinematic__footer" data-reveal style={{ '--stagger': '320ms' }}>
          <span>FRESH THINKING <span className="about-cinematic__footer-slash">/</span> CLEANER POSSIBILITIES</span>
          <a href="#solutions">EXPLORE OUR SOLUTIONS <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
