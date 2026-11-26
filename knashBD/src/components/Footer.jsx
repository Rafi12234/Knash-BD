import useReveal from './useReveal'

const footerLinks = [
  { title: 'Explore', links: [
    ['Our approach', '#approach'],
    ['About Knash Engineers Limited', '#about'],
    ['Solar solutions', '#solutions'],
    ['Why solar', '#benefits'],
  ] },
  { title: 'Discover', links: [
    ['How we work', '#process'],
    ['Featured projects', '#projects'],
    ['Stories & perspectives', '#stories'],
    ['Get a consultation', '#contact'],
  ] },
]

export default function Footer() {
  const sectionRef = useReveal()
  const year = new Date().getFullYear()

  return (
    <footer className="knash-footer" id="footer" ref={sectionRef} aria-label="Knash Engineers Limited footer">
      <div className="footer-opening" data-reveal>
        <div className="footer-opening-label"><span className="footer-dot" /> ONE BRIGHTER PERSPECTIVE</div>
        <p>The best way to shape<br />tomorrow is to <em>start today.</em></p>
        <a href="#contact" className="footer-contact-arrow" aria-label="Get a solar consultation">
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-middle">
        <div className="footer-manifesto" data-reveal>
          <a href="#home" className="footer-small-brand" aria-label="Knash Engineers Limited, back to the top">
            <img src="/kel-logo-dark.svg" className="footer-kel-logo" alt="" width="1242" height="937" loading="lazy" />
            <span className="footer-brand-legal">KNASH ENGINEERS LIMITED</span>
          </a>
          <p>A considered approach to solar for the spaces we live in, work in, and share.</p>
          <span className="footer-location">BASED IN BANGLADESH <span aria-hidden="true">↗</span></span>
        </div>

        {footerLinks.map((group) => (
          <nav className="footer-link-group" key={group.title} aria-label={`${group.title} links`} data-reveal>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <a key={href} href={href}>{label}<span aria-hidden="true">↗</span></a>
            ))}
          </nav>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {year} KNASH ENGINEERS LIMITED. ALL RIGHTS RESERVED.</span>
        <span>CONCEPT IMAGERY & DEMONSTRATION CONTENT MAY APPEAR ON THIS SITE.</span>
        <a href="#home">BACK TO TOP <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
