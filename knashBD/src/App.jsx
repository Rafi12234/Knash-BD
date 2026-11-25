import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Solutions from './components/Solutions'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Projects from './components/Projects'
import SocialProof from './components/SocialProof'
import './App.css'
import './sections.css'
import './phase4.css'
import './photography.css'
import './about-cinematic.css'
import './solutions-overlay.css'
import './experience.css'
import './projects.css'
import './how-work-premium.css'
import './social-proof.css'

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
        <Process />
        <Projects />
        <SocialProof />
      </main>
    </>
  )
}

export default App
