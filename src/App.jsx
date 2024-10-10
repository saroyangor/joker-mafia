import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Schedule } from './components/Schedule.jsx'
import { Quote } from './components/Quote.jsx'
import { Prices } from './components/Prices.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Contacts } from './components/Contacts.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <main className="container mx-auto">
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Quote />
      <Prices />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  )
}

export default App
