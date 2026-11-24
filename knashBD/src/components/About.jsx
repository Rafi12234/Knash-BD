import useReveal from './useReveal'

function ArrayStudy() {
  // An original schematic, not a photograph or a representation of a delivered project.
  const panels = Array.from({ length: 4 }, (_, row) =>
    Array.from({ length: 3 }, (_, col) => ({ row, col, x: 128 + col * 100 + row * 24, y: 110 + row * 63 - col * 12 }))
  ).flat()

  return (
    <svg className="about-study" viewBox="0 0 570 640" role="img" aria-label="Abstract architectural study of an ordered solar panel array">
      <defs>
        <linearGradient id="study-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#35695c" />
          <stop offset=".55" stopColor="#234e46" />
          <stop offset="1" stopColor="#112e2b" />
        </linearGradient>
        <linearGradient id="study-surface" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e3eadc" />
          <stop offset="1" stopColor="#c4d5b8" />
        </linearGradient>
      </defs>
      <path d="M0 490 570 390V640H0Z" fill="url(#study-surface)" opacity=".52" />
      <g className="study-contours" fill="none" stroke="#8fa68d" strokeWidth=".8" opacity=".42">
        {Array.from({ length: 11 }, (_, i) => <path key={i} d={`M ${-70 + i * 68} 640 Q ${80 + i * 65} 510 ${120 + i * 60} 445`} />)}
        <path d="M0 558q180-105 570-119M0 594q215-100 570-104M0 630q250-100 570-95" />
      </g>
      <g className="study-ground" stroke="#6b8075" strokeWidth="1.5" opacity=".9">
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <path d={`M${178 + i * 42} ${256 + i * 41}v92`} />
            <path d={`M${178 + i * 42} ${348 + i * 41}h-16m16 0h16`} />
          </g>
        ))}
      </g>
      <g className="study-panels" stroke="#d3e1d9" strokeWidth="1.5">
        {panels.map(({ row, col, x, y }) => (
          <g key={`${row}-${col}`} className="study-panel" style={{ '--panel-order': row + col }}>
            <path d={`M${x} ${y}l94 -19 38 33 -94 21Z`} fill="url(#study-panel)" />
            <path d={`M${x + 24} ${y - 5}l38 33M${x + 48} ${y - 10}l38 33M${x + 71} ${y - 15}l38 33`} stroke="#a2c1b6" strokeWidth=".55" opacity=".58" />
            <path d={`M${x + 13} ${y + 10}l94 -19M${x + 25} ${y + 21}l94 -19`} stroke="#a2c1b6" strokeWidth=".55" opacity=".58" />
          </g>
        ))}
      </g>
      <g stroke="#f8fcf0" fill="none" strokeWidth="1.1" opacity=".8">
        <path d="M72 92v-34h85M464 355h52v49M58 504v44h95" />
        <circle cx="157" cy="58" r="3" fill="#f8fcf0" />
        <circle cx="516" cy="404" r="3" fill="#f8fcf0" />
      </g>
      <g fill="#eff6e7" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2">
        <text x="72" y="47">FUTURE / STUDY 01</text>
        <text x="376" y="426">FORM + PURPOSE</text>
        <text x="58" y="567">SOLAR / REIMAGINED</text>
      </g>
      <circle className="study-orbit" cx="450" cy="112" r="66" fill="none" stroke="#dcebd3" strokeWidth=".8" opacity=".65" />
      <circle cx="450" cy="112" r="19" fill="#dcebd3" opacity=".9" />
      <path d="M397 112h-27m160 0h-27m-53-53V31m0 162v-27" stroke="#dcebd3" opacity=".75" strokeWidth="1.1" />
    </svg>
  )
}

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
        <figure className="about-figure" data-reveal>
          <div className="about-figure-stage">
            <ArrayStudy />
            <span className="figure-top-edge" aria-hidden="true">K / BD</span>
            <span className="figure-side-edge" aria-hidden="true">PERSPECTIVES IN SOLAR</span>
            <span className="figure-index" aria-hidden="true">001</span>
          </div>
          <figcaption><span>FIG. 01 — A STUDY IN POSSIBILITY</span><span>CONCEPTUAL VISUAL / NOT A PROJECT PHOTO</span></figcaption>
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
