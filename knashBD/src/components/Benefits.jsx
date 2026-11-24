import useReveal from './useReveal'

const ideas = [
  {
    number: '01',
    title: 'More control.',
    copy: 'Generating electricity where it is used can reduce dependence on power purchased from the grid.',
    note: 'ENERGY / CHOICE',
  },
  {
    number: '02',
    title: 'A longer view.',
    copy: 'A thoughtfully designed system can offset electricity use over time, subject to site conditions and system performance.',
    note: 'VALUE / TIME',
  },
  {
    number: '03',
    title: 'Less impact.',
    copy: 'Solar electricity generates power without fuel combustion at the point of generation.',
    note: 'ENERGY / ENVIRONMENT',
  },
]

function SunStudy() {
  return (
    <svg className="benefits-sun-study" viewBox="0 0 530 560" role="img" aria-label="Minimal line drawing of the sun and its light reaching a solar panel">
      <defs>
        <clipPath id="ben-clip"><rect width="530" height="560" /></clipPath>
      </defs>
      <g clipPath="url(#ben-clip)" fill="none" stroke="#789681">
        <circle className="benefits-orbit-one" cx="242" cy="267" r="205" strokeWidth=".7" opacity=".58" />
        <circle className="benefits-orbit-two" cx="242" cy="267" r="163" strokeWidth=".8" opacity=".43" strokeDasharray="4 10" />
        <circle cx="242" cy="267" r="119" strokeWidth="1" opacity=".52" />
        <circle cx="242" cy="267" r="77" strokeWidth="1.3" opacity=".68" />
        <circle cx="242" cy="267" r="40" fill="#f3f4d5" stroke="#aac1a8" strokeWidth="1" />
        <path d="M242 2v105M242 428v130M-20 267h140M370 267h182M62 87l90 90M329 353l132 132M61 472l101-102M337 171 451 57" strokeWidth=".9" opacity=".5" />
        <path d="M130 487 385 425 444 464 190 527Z" stroke="#425f52" strokeWidth="1.6" fill="#456c60" />
        <path d="M158 481 413 442M178 499 431 455M216 466l54 36M260 455l54 36M304 444l54 36M348 434l54 36" stroke="#d0ddd0" strokeWidth="1" opacity=".75" />
        <path d="M190 527v20M444 464v20M190 547l254-63" stroke="#667f6d" strokeWidth="1.3" />
        <path d="M242 308 270 455" stroke="#688d74" strokeDasharray="5 7" strokeWidth="1.2" />
      </g>
      <g fill="#536e5b" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2"><text x="37" y="22">01 / SOLAR PRINCIPLE</text><text x="330" y="552">LIGHT TO ELECTRICITY</text></g>
    </svg>
  )
}

export default function Benefits() {
  const sectionRef = useReveal()
  return (
    <section className="benefits-section" id="benefits" aria-labelledby="benefits-heading" ref={sectionRef}>
      <div className="section-overline section-overline--benefits" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> THE CASE FOR SOLAR</span>
        <span className="overline-right">06 / BEYOND THE PANELS</span>
      </div>
      <div className="benefits-intro" data-reveal>
        <h2 id="benefits-heading">A brighter<br /><em>equation.</em></h2>
        <p>Solar is not just a different way to make electricity. It is a different way to think about the energy around us.</p>
      </div>
      <div className="benefits-content">
        <figure className="benefits-artboard" data-reveal>
          <SunStudy />
          <figcaption><span>STUDY 02 / THE EVERYDAY RESOURCE</span><span>KNASHBD — SOLAR</span></figcaption>
        </figure>
        <div className="benefits-reasons" aria-label="Three benefits of solar energy">
          {ideas.map((idea, index) => (
            <article className="benefit-reason" key={idea.number} data-reveal style={{ '--stagger': `${index * 90}ms` }}>
              <span className="benefit-number">/{idea.number}</span>
              <div className="benefit-reason-copy"><h3>{idea.title}</h3><p>{idea.copy}</p><span className="benefit-note">{idea.note}</span></div>
              <span className="benefit-chevron" aria-hidden="true">↗</span>
            </article>
          ))}
          <p className="benefits-disclaimer" data-reveal>Actual savings, suitability, and output depend on usage, location, equipment, and system design.</p>
        </div>
      </div>
      <div className="benefits-endnote" data-reveal><span>DESIGNED FOR THE LONG VIEW.</span><span className="benefits-endnote-rule"/><a href="#home">BACK TO THE TOP <span aria-hidden="true">↑</span></a></div>
    </section>
  )
}
