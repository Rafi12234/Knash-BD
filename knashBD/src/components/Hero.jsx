import { useState } from 'react'
import { ArrowIcon } from './Navbar'

// Add your video to public/media and set its URL in your .env file:
// VITE_HERO_VIDEO_URL=/media/knash-solar-assembly.mp4
const filmUrl = import.meta.env.VITE_HERO_VIDEO_URL?.trim()

export default function Hero() {
  const [replayKey, setReplayKey] = useState(0)
  const [filmReady, setFilmReady] = useState(false)
  const [filmFailed, setFilmFailed] = useState(false)

  return (
    <section className="hero-track" id="home" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="contour-pattern" aria-hidden="true" />
        <div className="hero-topnote" aria-hidden="true">
          <span className="topnote-line" />
          K / 001 — A DIFFERENT KIND OF ENERGY
          <span className="topnote-line" />
        </div>

        <div className="hero-stage" id="solar-visual" key={replayKey}>
          <span className="stage-side-note stage-side-note--left" aria-hidden="true">
            DESIGNED TO MAKE A DIFFERENCE
          </span>

          <h1 className="hero-display" id="hero-title" aria-label="Solar. A new perspective on energy.">
            <span className="hero-letters" aria-hidden="true">SO</span>
            <span className="hero-aperture" aria-hidden="true">
              <img
                className="hero-poster"
                src="/media/solar-assembly-poster.svg"
                alt=""
                fetchPriority="high"
              />
              {filmUrl && !filmFailed && (
                <video
                  className={`hero-film ${filmReady ? 'hero-film--ready' : ''}`}
                  src={filmUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                  onLoadedData={() => setFilmReady(true)}
                  onError={() => setFilmFailed(true)}
                />
              )}
              <span className="aperture-wash" />
            </span>
            <span className="hero-letters" aria-hidden="true">LAR</span>
          </h1>

          <span className="stage-side-note stage-side-note--right" aria-hidden="true">
            FROM IDEA TO INSTALLATION
          </span>
        </div>

        <div className="hero-underword" aria-hidden="true">
          <span>THE POWER OF A NEW PERSPECTIVE</span>
          <span>SOLAR / REIMAGINED</span>
        </div>

        <div className="hero-bottom">
          <p className="hero-description">
            <span className="dropcap">S</span>unlight is ordinary. What we do with it should be anything but.
            Discover a considered approach to solar energy with KnashBD.
          </p>
          <span className="hero-rule" aria-hidden="true" />
          <a href="#concept" className="hero-primary-link">
            The thinking behind it <ArrowIcon />
          </a>
        </div>

        <div className="hero-utility">
          <button
            className="replay-button"
            type="button"
            onClick={() => {
              setFilmReady(false)
              setReplayKey((current) => current + 1)
            }}
            aria-label="Replay hero reveal animation"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M16 7.3A6.7 6.7 0 1 0 16.7 10M16 3.5v3.9h-3.9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Replay reveal</span>
          </button>
          <span className="scroll-cue">
            SCROLL TO EXPLORE <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  )
}
