import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import './App.css'
import './sections.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
      </main>
    </>
  )
}

export default App
