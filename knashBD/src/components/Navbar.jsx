import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Our approach', href: '#approach' },
  { label: 'About us', href: '#about' },
]

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 15.5 15 5m0 0H6.5M15 5v8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export { ArrowIcon }

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="KnashBD — home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
        <span className="brand-name">knash<span className="brand-suffix">BD</span><span className="brand-period">.</span></span>
      </a>

      <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} id="site-navigation" aria-label="Main navigation">
        {links.map(({ label, href }, index) => (
          <a key={href} href={href} onClick={closeMenu}>
            <span className="nav-index">0{index + 1}</span>{label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <span className="header-location"><span className="live-dot" />Made for Bangladesh</span>
        <a className="header-cta" href="#about">Explore <ArrowIcon diagonal /></a>
        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
