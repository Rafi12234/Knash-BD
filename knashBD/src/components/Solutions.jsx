import { useState } from 'react'
import useReveal from './useReveal'

const applications = [
  {
    id: 'residential',
    index: '01',
    title: 'Residential',
    subtitle: 'Where everyday life meets solar.',
    details: 'Thoughtful rooftop solar concepts for homes and living spaces, planned around the shape of each building.',
    caption: 'ROOFTOP STUDY / PRIVATE SPACES',
  },
  {
    id: 'commercial',
    index: '02',
    title: 'Commercial',
    subtitle: 'Put working spaces to work.',
    details: 'Solar applications for commercial and industrial rooftops, where available surfaces can serve a bigger purpose.',
    caption: 'ROOFTOP STUDY / WORKING SPACES',
  },
  {
    id: 'ground',
    index: '03',
    title: 'Ground-mount',
    subtitle: 'A wider view of possibility.',
    details: 'Considered arrangements of ground-mounted panels for open sites with room to capture more daylight.',
    caption: 'FIELD STUDY / OPEN SPACES',
  },
]

function Panel({ x, y, width = 55, depth = 18 }) {
  return (
    <g>
      <path d={`M${x} ${y} l${width} -14 ${depth} 16 -${width} 14Z`} fill="#315e59" stroke="#bedbd4" strokeWidth="1.5" />
      <path d={`M${x + width / 2} ${y - 7} l${depth} 16 M${x + depth / 2} ${y + 8} l${width} -14`} stroke="#90b6b2" opacity=".7" strokeWidth=".9" />
    </g>
  )
}

function ResidentialDrawing() {
  return (
    <g>
      <path d="M94 422 346 555 566 445 314 315Z" fill="#9fb4a3" opacity=".23" />
      <path d="M135 305 306 398 306 518 135 423Z" fill="#d7dfd5" stroke="#80958a" strokeWidth="1.7" />
      <path d="M306 398 539 314 539 434 306 518Z" fill="#a8bbae" stroke="#708a7e" strokeWidth="1.7" />
      <path d="M112 305 345 223 559 316 306 401Z" fill="#edf2e8" stroke="#6a897b" strokeWidth="2.5" />
      <path d="M133 313 310 393 310 401 133 321Z" fill="#779787" />
      <path d="M324 393 543 316 543 325 324 402Z" fill="#4c7364" />
      <path d="M196 363 245 388 245 456 196 432Z" fill="#59766d" stroke="#e1e8db" strokeWidth="2" />
      <path d="M353 434 409 413 409 458 353 479Z" fill="#eaf0e7" stroke="#648071" strokeWidth="1.7" />
      <path d="M380 423v45" stroke="#648071" />
      <g transform="translate(-15 7)">
        {[0, 1, 2].map((row) => [0, 1, 2].map((col) => <Panel key={`${row}-${col}`} x={185 + col * 53 + row * 14} y={286 - col * 17 + row * 24} width={49} depth={16} />))}
      </g>
      <path d="M112 305 345 223 559 316" fill="none" stroke="#f8fff7" strokeWidth="2" />
      <path d="M68 524h546 M68 536h546" stroke="#8fa99a" strokeDasharray="3 11" opacity=".55" />
    </g>
  )
}

function CommercialDrawing() {
  return (
    <g>
      <path d="M75 406 392 552 623 450 301 304Z" fill="#809b8d" opacity=".24" />
      <path d="M87 311 391 403 391 511 87 419Z" fill="#c6d6cc" stroke="#749284" strokeWidth="1.5" />
      <path d="M391 403 598 325 598 434 391 511Z" fill="#97b1a4" stroke="#618274" strokeWidth="1.5" />
      <path d="M88 310 297 228 599 325 391 404Z" fill="#e2eae2" stroke="#779486" strokeWidth="2.5" />
      <path d="M109 417 109 351 366 430 366 496" fill="none" stroke="#809b8a" strokeWidth="1" />
      {[0,1,2,3,4,5].map((i) => <path key={i} d={`M${133 + i * 43} ${367 + i * 13}v70`} stroke="#809c8f" strokeWidth="1.1" />)}
      <g transform="translate(0 -6)">
        {[0,1,2,3].map((row) => [0,1,2,3].map((col) => <Panel key={`${row}-${col}`} x={154 + row * 57 + col * 37} y={286 + row * 18 - col * 13} width={48} depth={14} />))}
      </g>
      <path d="M90 311 297 228 599 325" stroke="#fafdf8" strokeWidth="2" fill="none" />
      <path d="M78 530h555" stroke="#92a99b" strokeDasharray="2 9" />
    </g>
  )
}

function GroundDrawing() {
  return (
    <g>
      <path d="M76 447 374 528 625 423 330 331Z" fill="#a0b7a0" opacity=".25" />
      {[0,1,2].map((row) => (
        <g key={row} transform={`translate(${row * 30} ${row * 43})`}>
          <path d="M145 388v88M260 356v88M376 322v88M493 289v88" stroke="#7d928b" strokeWidth="6" />
          <path d="M145 475h-12m12 0h12M260 444h-12m12 0h12M376 410h-12m12 0h12M493 377h-12m12 0h12" stroke="#8d9f96" strokeWidth="3" />
          <path d="M118 349 474 252 520 285 162 385Z" fill="#35615c" stroke="#d4e4dc" strokeWidth="3" />
          <path d="M118 349 474 252 520 285 162 385Z" fill="none" stroke="#7bb3a8" strokeWidth=".8" />
          {[1,2,3,4,5].map(i=><path key={`v${i}`} d={`M${118 + i * 59} ${349 - i * 16} l44 36`} stroke="#aecbc3" strokeWidth="1" opacity=".8" />)}
          <path d="M140 365 497 269M152 375 508 279" stroke="#aecbc3" strokeWidth="1" opacity=".8" />
        </g>
      ))}
      <path d="M77 548q260-34 548-10" stroke="#8ca698" strokeWidth="1.5" strokeDasharray="4 9" fill="none" />
    </g>
  )
}

function ApplicationStudy({ selected }) {
  return (
    <svg viewBox="0 0 700 640" className="solutions-drawing" role="img" aria-label={`Conceptual architectural drawing of ${selected.title.toLowerCase()} solar panels`}>
      <defs>
        <pattern id="sol-grid" width="35" height="35" patternUnits="userSpaceOnUse"><path d="M35 0H0V35" fill="none" stroke="#779486" strokeWidth=".7" opacity=".23" /></pattern>
        <radialGradient id="sol-glow" cx="68%" cy="30%"><stop stopColor="#dce8d6"/><stop offset="1" stopColor="#bdcfbe" /></radialGradient>
      </defs>
      <rect width="700" height="640" fill="url(#sol-glow)" />
      <rect width="700" height="640" fill="url(#sol-grid)" />
      <circle cx="560" cy="119" r="50" stroke="#e7f0e3" fill="none" strokeWidth="1.2" />
      <circle cx="560" cy="119" r="29" fill="#f0f4e3" opacity=".83" />
      <path d="M560 49V35M560 204v-14M491 119h-15M645 119h-15M510 69l-10-10M620 179l-10-10M610 69l10-10M510 169l-10 10" stroke="#edf5e8" strokeWidth="1.3" />
      <g key={selected.id} className="solutions-drawing-enter">
        {selected.id === 'residential' ? <ResidentialDrawing /> : selected.id === 'commercial' ? <CommercialDrawing /> : <GroundDrawing />}
      </g>
      <g fill="none" stroke="#f7fbf3" strokeWidth="1" opacity=".75"><path d="M32 92V32h60M608 32h60v60M32 552v56h60M608 608h60v-56" /></g>
      <g fill="#f9fcf5" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2.3"><text x="36" y="55">KN / STUDY {selected.index}</text><text x="482" y="583">NOT TO SCALE</text></g>
    </svg>
  )
}

export default function Solutions() {
  const sectionRef = useReveal()
  const [active, setActive] = useState('residential')
  const selected = applications.find((item) => item.id === active) ?? applications[0]

  return (
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-heading" ref={sectionRef}>
      <div className="section-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> SOLAR APPLICATIONS</span>
        <span className="overline-right">05 / FORM MEETS FUNCTION</span>
      </div>

      <div className="solutions-intro" data-reveal>
        <h2 id="solutions-heading">A place for<br /><em>the sun.</em></h2>
        <p>Different spaces. Different opportunities. One simple idea: use the light that is already here.</p>
      </div>

      <div className="solutions-workspace">
        <div className="solutions-selector" data-reveal aria-label="Solar applications">
          <p className="solutions-selector-label">CHOOSE AN APPLICATION <span>↘</span></p>
          {applications.map((item) => (
            <button key={item.id} type="button" className={`solution-option ${active === item.id ? 'solution-option--active' : ''}`} onClick={() => setActive(item.id)} aria-pressed={active === item.id}>
              <span className="solution-option-number">/{item.index}</span>
              <span className="solution-option-title">{item.title}</span>
              <span className="solution-option-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
          <div className="solutions-selector-foot">SELECTION / {selected.index} OF 03</div>
        </div>
        <figure className="solutions-figure" data-reveal>
          <div className="solutions-image-frame">
            <ApplicationStudy selected={selected} />
            <div className="solutions-figure-stamp">K / BD <span>—</span> FIELD NOTES</div>
          </div>
          <figcaption className="solutions-caption" aria-live="polite" aria-atomic="true">
            <div>
              <span className="solutions-caption-label">{selected.caption}</span>
              <h3>{selected.subtitle}</h3>
              <p>{selected.details}</p>
            </div>
            <span className="solutions-caption-issue">FIG. {selected.index}</span>
          </figcaption>
        </figure>
      </div>
      <div className="solutions-endnote" data-reveal><span>CONCEPTUAL APPLICATION STUDIES, NOT COMPLETED PROJECTS</span><a href="#benefits">WHY CONSIDER SOLAR? <span aria-hidden="true">↗</span></a></div>
    </section>
  )
}
