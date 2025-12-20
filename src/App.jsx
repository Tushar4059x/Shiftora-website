import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import Services from './components/Services'
import Process from './components/Process'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
