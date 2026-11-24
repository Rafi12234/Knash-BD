import useReveal from './useReveal'

export default function About() {
  const sectionRef = useReveal()

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading" ref={sectionRef}>
      <div className="section-overline section-overline--about" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> ABOUT KNASHBD</span>
        <span className="overline-right">04 / THE BIGGER PICTURE</span>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <div className="about-mini-intro" data-reveal><span className="about-mini-line" /> A DIFFERENT PERSPECTIVE ON POWER</div>
          <h2 id="about-heading" data-reveal>
            A better<br />way to<br /><em>begin.</em>
          </h2>
          <div className="about-narrative" data-reveal>
            <p className="about-lead">We believe the energy of tomorrow deserves more thought today.</p>
            <p>KnashBD brings a considered point of view to solar installation. Our aim is to make the move toward solar feel clear, purposeful, and connected to the people and places it serves.</p>
            <span className="about-signoff"><span className="signoff-mark" aria-hidden="true">✳</span> THE KNASHBD POINT OF VIEW</span>
          </div>
        </div>
        <figure className="about-figure about-figure--photographic" data-reveal>
          <div className="about-figure-stage">
            <img
              className="about-photograph"
              src="/media/about-solar-landscape.webp"
              alt="Conceptual solar installation with dark photovoltaic panels arranged across a lush green landscape"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
            <div className="about-photo-tint" aria-hidden="true" />
            <span className="figure-top-edge" aria-hidden="true">K / BD</span>
            <span className="figure-side-edge" aria-hidden="true">A NEW PERSPECTIVE ON POWER</span>
            <span className="figure-index" aria-hidden="true">001</span>
            <span className="about-photo-crosshair" aria-hidden="true">+</span>
          </div>
          <figcaption>
            <span>FIG. 01 — SOLAR IN ITS ELEMENT</span>
            <span>GENERATED CONCEPT IMAGE / NOT A CLIENT PROJECT</span>
          </figcaption>
        </figure>
      </div>
      <div className="about-endnote" data-reveal>
        <span>A FRESH PERSPECTIVE. AN ENDLESS RESOURCE.</span>
        <span className="endnote-line" aria-hidden="true" />
        <a href="#home">RETURN TO THE START <span aria-hidden="true">↑</span></a>
      </div>
    </section>
  )
}
