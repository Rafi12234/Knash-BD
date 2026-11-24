import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <section className="concept-section" id="concept" aria-labelledby="concept-title">
          <div className="concept-label"><span className="concept-dot" />01 / OUR POINT OF VIEW</div>
          <div className="concept-content">
            <h2 id="concept-title">Good energy.<br /><em>Better thinking.</em></h2>
            <p>We believe moving toward solar should feel clear, considered, and full of possibility. This is the beginning of the KnashBD story.</p>
          </div>
          <a href="#home" className="back-to-top">Back to the beginning <span aria-hidden="true">↑</span></a>
        </section>
      </main>
    </>
  )
}

export default App
