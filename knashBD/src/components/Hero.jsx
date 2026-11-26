import { useEffect, useRef, useState } from 'react'
import { ArrowIcon } from './Navbar'

// The included 10-second ambient loop is a placeholder. Replace it with your
// finished self-assembling solar film using VITE_HERO_VIDEO_URL in .env.
const filmUrl = import.meta.env.VITE_HERO_VIDEO_URL?.trim() || '/media/solar-field-loop.mp4'
const posterUrl = '/media/solar-field-poster.webp'

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(preference.matches)
    preference.addEventListener('change', onChange)
    return () => preference.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function Hero() {
  const filmRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const [userPaused, setUserPaused] = useState(false)
  const [filmFailed, setFilmFailed] = useState(false)
  const [filmReady, setFilmReady] = useState(false)
  const isPaused = userPaused || reducedMotion

  useEffect(() => {
    const film = filmRef.current
    if (!film) return

    if (isPaused) {
      film.pause()
    } else {
      // Some browsers need an explicit play after a motion-preference change.
      film.play().catch(() => {
        // The poster remains visible when a browser disallows autoplay.
      })
    }
  }, [isPaused])

  return (
    <section className="hero-track" id="home" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <img className="hero-poster" src={posterUrl} alt="" fetchPriority="high" />
        {!filmFailed && (
          <video
            ref={filmRef}
            className={`hero-film ${filmReady ? 'hero-film--ready' : ''}`}
            src={filmUrl}
            poster={posterUrl}
            autoPlay={!isPaused}
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => setFilmReady(true)}
            onError={() => setFilmFailed(true)}
          />
        )}
        <div className="hero-tone" />
        <div className="hero-vignette" />
      </div>

      <div className="hero-inner">
        <div className="hero-overline" aria-hidden="true">
          <span className="hero-overline-left"><span className="hero-crosshair">✳</span> KNASH ENGINEERS LIMITED / SOLAR PERSPECTIVES</span>
          <span className="hero-overline-right">ANOTHER WAY FORWARD — 001</span>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow"><span className="eyebrow-rule" /> THE FUTURE LOOKS BRIGHTER FROM HERE</div>
          <h1 className="hero-heading" id="hero-title">
            <span className="hero-line-mask"><span className="hero-line hero-line--first">Energy for</span></span>
            <span className="hero-line-mask"><span className="hero-line hero-line--second">what's <em>next.</em></span></span>
          </h1>
          <div className="hero-content-footer">
            <p>Solar isn't only about generating power. It's about seeing what the future could become.</p>
            <div className="hero-links">
              <a className="hero-action-primary" href="#approach">
                Discover our approach <span className="hero-action-arrow"><ArrowIcon diagonal /></span>
              </a>
              <a className="hero-action-secondary" href="#about">Meet Knash Engineers Limited <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>

        <div className="hero-edge-label" aria-hidden="true">THOUGHTFULLY / SOLAR</div>

        <div className="hero-bottom-rail">
          <span className="hero-rail-index">01 <span className="hero-rail-slash">/</span> ENERGY, REIMAGINED</span>
          <button
            type="button"
            className="hero-motion-button"
            onClick={() => {
              if (reducedMotion) return
              setUserPaused((paused) => !paused)
            }}
            disabled={reducedMotion || filmFailed}
            aria-label={isPaused ? 'Play background video' : 'Pause background video'}
          >
            <span className="hero-motion-icon" aria-hidden="true">{isPaused ? '▶' : 'Ⅱ'}</span>
            <span>{reducedMotion ? 'REDUCED MOTION' : filmFailed ? 'STILL FRAME' : isPaused ? 'PLAY FILM' : 'PAUSE FILM'}</span>
          </button>
          <a href="#approach" className="hero-scroll-link">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  )
}
