import { useRef, useState } from 'react'
import useReveal from './useReveal'

const configuredEmail = (import.meta.env.VITE_CONTACT_EMAIL || '').trim()
const contactEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(configuredEmail) ? configuredEmail : ''

const projectTypes = [
  { id: 'Residential', index: '01' },
  { id: 'Commercial', index: '02' },
  { id: 'Ground-mounted', index: '03' },
  { id: 'Not sure yet', index: '04' },
]

const initialDetails = {
  name: '',
  email: '',
  phone: '',
  location: '',
  project: 'Residential',
  message: '',
}

function enquiryText(details) {
  return [
    'SOLAR CONSULTATION REQUEST — KNASH ENGINEERING LIMITED',
    '',
    `Name: ${details.name.trim()}`,
    `Email: ${details.email.trim()}`,
    `Phone: ${details.phone.trim() || 'Not provided'}`,
    `Project type: ${details.project}`,
    `Project location: ${details.location.trim()}`,
    '',
    'Project notes:',
    details.message.trim() || 'Please contact me to discuss my solar project.',
    '',
    'Prepared using the Knash Engineering Limited website. This is an enquiry draft, not a submitted order.',
  ].join('\n')
}

function ArrowNorthEast() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Consultation() {
  const sectionRef = useReveal()
  const draftRef = useRef(null)
  const [details, setDetails] = useState(initialDetails)
  const [prepared, setPrepared] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const draft = enquiryText(details)

  const update = (field, value) => {
    setDetails((old) => ({ ...old, [field]: value }))
    setPrepared(false)
    setCopied(false)
    setCopyFailed(false)
  }

  const prepare = (event) => {
    event.preventDefault()
    setPrepared(true)
    setCopied(false)
    setCopyFailed(false)
    if (contactEmail) {
      const subject = encodeURIComponent(`Solar consultation — ${details.project}`)
      const body = encodeURIComponent(draft)
      // Opening a mail composer is not the same as successfully sending an email.
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    }
  }

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopyFailed(true)
      setCopied(false)
      draftRef.current?.focus()
      draftRef.current?.select()
    }
  }

  return (
    <section id="contact" className="consult-section" aria-labelledby="consult-title" ref={sectionRef}>
      <div className="section-overline consult-overline" data-reveal>
        <span className="index-mark"><span className="index-mark__cross">+</span> FROM POSSIBILITY TO PLAN</span>
        <span className="overline-right">10 / START A CONVERSATION</span>
      </div>

      <div className="consult-layout">
        <div className="consult-story" data-reveal>
          <p className="consult-eyebrow"><span className="consult-eyebrow-line" /> A CONSIDERED FIRST STEP</p>
          <h2 id="consult-title">Good things<br />begin with<br /><em>sunlight.</em></h2>
          <div className="consult-story-bottom">
            <p>Tell us about your space, and let's explore what solar could look like there.</p>
            <div className="consult-orbit" aria-hidden="true">
              <span className="consult-orbit-center" />
              <span className="consult-orbit-ring consult-orbit-ring--one" />
              <span className="consult-orbit-ring consult-orbit-ring--two" />
              <span className="consult-orbit-tick consult-orbit-tick--a" />
              <span className="consult-orbit-tick consult-orbit-tick--b" />
              <span className="consult-orbit-tick consult-orbit-tick--c" />
              <span className="consult-orbit-tick consult-orbit-tick--d" />
            </div>
          </div>
          <div className="consult-story-foot"><span>KNASH ENGINEERING LIMITED / BANGLADESH</span><span>FUTURE / IN PROGRESS</span></div>
        </div>

        <div className="consult-form-side" data-reveal>
          <div className="consult-form-heading">
            <span>01 — YOUR SOLAR IDEA</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h3>Let's talk about<br /><em>your project.</em></h3>
          <p className="consult-form-lead">A few details are enough to start. No technical knowledge required.</p>

          <form className="consult-form" onSubmit={prepare}>
            <fieldset className="consult-project-types">
              <legend>What kind of project do you have in mind?</legend>
              <div className="consult-type-list">
                {projectTypes.map((type) => (
                  <button type="button" key={type.id}
                    className={`consult-type ${details.project === type.id ? 'consult-type--active' : ''}`}
                    aria-pressed={details.project === type.id} onClick={() => update('project', type.id)}>
                    <span className="consult-type-index">{type.index}</span> {type.id}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="consult-fields">
              <label className="consult-field">
                <span>Your name <b aria-hidden="true">*</b></span>
                <input name="name" type="text" autoComplete="name" placeholder="Full name"
                  maxLength="100" required value={details.name} onChange={(e) => update('name', e.target.value)} />
              </label>
              <label className="consult-field">
                <span>Email address <b aria-hidden="true">*</b></span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com"
                  maxLength="160" required value={details.email} onChange={(e) => update('email', e.target.value)} />
              </label>
              <label className="consult-field">
                <span>Phone <small>(optional)</small></span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number"
                  maxLength="35" value={details.phone} onChange={(e) => update('phone', e.target.value)} />
              </label>
              <label className="consult-field">
                <span>Project location <b aria-hidden="true">*</b></span>
                <input name="location" type="text" autoComplete="address-level2" placeholder="City or district, Bangladesh"
                  maxLength="110" required value={details.location} onChange={(e) => update('location', e.target.value)} />
              </label>
              <label className="consult-field consult-field--wide">
                <span>Tell us a little more <small>(optional)</small></span>
                <textarea name="message" rows="3" maxLength="1200"
                  placeholder="Roof size, intended use, questions — anything that helps us understand your idea."
                  value={details.message} onChange={(e) => update('message', e.target.value)} />
              </label>
            </div>

            <div className="consult-submit-row">
              <button className="consult-submit" type="submit">
                <span>{contactEmail ? 'Compose enquiry email' : 'Prepare my enquiry'}</span>
                <span className="consult-submit-icon"><ArrowNorthEast /></span>
              </button>
              <p>{contactEmail
                ? 'Opens your email app with the enquiry drafted. Please send it there to reach us.'
                : 'Prototype mode: your details stay in this browser. No recipient is connected yet.'}</p>
            </div>
          </form>

          {prepared && (
            <div className="consult-draft" role="status" aria-live="polite">
              <strong>{contactEmail ? 'Your email draft is ready.' : 'Your enquiry draft is ready.'}</strong>
              <p>{contactEmail
                ? 'Check your email app and press Send. Nothing has been submitted through this website.'
                : 'An official Knash Engineering Limited email address is not configured yet, so this site cannot send your request. You can copy the draft below.'}</p>
              <label htmlFor="consult-draft-text">Enquiry details</label>
              <textarea id="consult-draft-text" ref={draftRef} readOnly value={draft} rows="7" />
              <button type="button" onClick={copyDraft}>{copied ? 'Copied to clipboard ✓' : 'Copy enquiry details'}</button>
              {copyFailed && <p>Automatic copying was unavailable. Select the text above and copy it manually.</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
