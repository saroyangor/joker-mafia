import { useRef } from 'react'

import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Schedule } from './components/Schedule.jsx'
import { Quote } from './components/Quote.jsx'
import { Prices } from './components/Prices.jsx'
import { Gallery } from './components/Gallery.jsx'
import { Contacts } from './components/Contacts.jsx'
import { Footer } from './components/Footer.jsx'
import { Reviews } from './components/Reviews.jsx'

function App() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const scheduleRef = useRef(null)
  const pricesRef = useRef(null)
  const reviewsRef = useRef(null)
  const galleryRef = useRef(null)
  const contactsRef = useRef(null)

  const allRefs = {
    hero: heroRef,
    about: aboutRef,
    services: servicesRef,
    schedule: scheduleRef,
    prices: pricesRef,
    reviews: reviewsRef,
    gallery: galleryRef,
    contacts: contactsRef
  }

  return (
    <main className="container mx-auto">
      <Hero allRefs={allRefs} heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Schedule scheduleRef={scheduleRef} />
      <Quote />
      <Prices pricesRef={pricesRef} />
      <Reviews reviewsRef={reviewsRef} />
      <Gallery galleryRef={galleryRef} />
      <Contacts contactsRef={contactsRef} />
      <Footer />
    </main>
  )
}

export default App
