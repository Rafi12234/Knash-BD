import useReveal from './useReveal'

const principles = [
  {
    number: '01',
    word: 'Clarity',
    line: 'The right questions come first.',
    detail: 'A considered solar journey should begin with understanding, not assumptions.',
  },
  {
    number: '02',
    word: 'Intention',
    line: 'Every detail has a reason.',
    detail: 'Good design balances the bigger picture with the smallest connections.',
  },
  {
    number: '03',
    word: 'Continuity',
    line: 'Think beyond installation day.',
    detail: 'The long view matters just as much as the first impression.',
  },
]

function PrecisionMark({ index }) {
  return (
    <svg className="principle-glyph" viewBox="0 0 54 54" fill="none" aria-hidden="true">
      {index === 0 ? (
        <>
          <path d="M5 27h44M27 5v44" />
          <circle cx="27" cy="27" r="9" />
          <path d="M27 15v-6M27 45v-6M15 27H9M45 27h-6" strokeWidth="1.9" />
        </>
      ) : index === 1 ? (
        <>
          <path d="M8 46V8h38" />
          <path d="M8 46 46 8" />
          <path d="M18 46c0-15 12-28 28-28" />
          <circle cx="46" cy="8" r="3" fill="currentColor" stroke="none" />
        </>
      ) : (
        <>
          <circle cx="27" cy="27" r="15" />
          <circle cx="27" cy="27" r="5" />
          <path d="M27 3v7M27 44v7M3 27h7M44 27h7M10 10l5 5M39 39l5 5M44 10l-5 5M15 39l-5 5" />
        </>
      )}
    </svg>
  )
}

export default function TrustStrip() {
  const sectionRef = useReveal()
  return (
    <section className="trust-section" id="approach" aria-labelledby="trust-heading" ref={sectionRef}>
      <div className="section-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> THE KNASH ENGINEERING LIMITED STANDARD</span>
        <span className="overline-right">03 / WHAT MATTERS TO US</span>
      </div>
      <div className="trust-intro">
        <h2 id="trust-heading" className="trust-heading" data-reveal>
          Confidence<br />starts <em>here.</em>
        </h2>
        <div className="trust-intro-aside" data-reveal>
          <span className="tiny-rule" aria-hidden="true" />
          <p>Not a list of claims. A way of thinking about the work, from first conversation to the long view.</p>
        </div>
      </div>

      <div className="principle-grid" aria-label="Our principles">
        {principles.map((principle, index) => (
          <article className="principle" key={principle.number} data-reveal style={{ '--stagger': `${index * 100}ms` }}>
            <div className="principle-upper">
              <span className="principle-number">/{principle.number}</span>
              <PrecisionMark index={index} />
            </div>
            <h3>{principle.word}<span className="principle-stop">.</span></h3>
            <p className="principle-tagline">{principle.line}</p>
            <p className="principle-detail">{principle.detail}</p>
            <span className="principle-rule" aria-hidden="true" />
          </article>
        ))}
      </div>
      <div className="trust-footer" data-reveal>
        <span>SMALL DETAILS. LARGER PERSPECTIVE.</span>
        <span className="trust-footer-line" aria-hidden="true" />
        <span>KEL / 2026</span>
      </div>
    </section>
  )
}
