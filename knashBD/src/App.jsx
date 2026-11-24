import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Solutions from './components/Solutions'
import Benefits from './components/Benefits'
import './App.css'
import './sections.css'
import './phase4.css'
import './photography.css'
import './about-cinematic.css'
import './solutions-overlay.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Solutions />
        <Benefits />
      </main>
    </>
  )
}

export default App
