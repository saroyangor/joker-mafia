import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

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

import logo from './assets/logo.svg'

const links = [
  {
    'title': 'О нас',
    'link': '/about',
  },
  {
    'title': 'Услуги',
    'link': '/services',
  },
  {
    'title': 'Расписание',
    'link': '/schedule',
  },
  {
    'title': 'Цены',
    'link': '/prices',
  },
  {
    'title': 'Отзывы',
    'link': '/reviews',
  },
  {
    'title': 'Галерея',
    'link': '/gallery',
  },
  {
    'title': 'Контакты',
    'link': '/contacts',
  },
]

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
    contacts: contactsRef,
  }

  const handleClick = (link) => {
    if (link === 'hero') {
      heroRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
    } else {
      const block = link.split('/')[1]
      allRefs[block].current?.scrollIntoView({behavior: 'smooth', block: 'center'})
    }
  }

  return (
    <main className="container mx-auto relative">
      <nav className="sticky top-0 w-full py-8 z-50 bg-opacity-80 bg-black hidden lg:flex justify-between items-center">
        <NavLink onClick={() => handleClick('hero')} to="/">
          <img className="sm:w-48 sm:h-24 w-32 h-16" src={logo} alt="logo"/>
        </NavLink>
        <ul className="flex justify-end 2xl:pr-24 xl:pr-16 gap-8">
          {
            links.map(link => (
              <li key={link.title}>
                <NavLink onClick={() => handleClick(link.link)} to={link.link}
                         className="hover:text-red transition-all">
                  {link.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>

      <Hero allRefs={allRefs} heroRef={heroRef}/>
      <About aboutRef={aboutRef}/>
      <Services servicesRef={servicesRef}/>
      <Schedule scheduleRef={scheduleRef}/>
      <Quote/>
      <Prices pricesRef={pricesRef}/>
      <Reviews reviewsRef={reviewsRef}/>
      <Gallery galleryRef={galleryRef}/>
      <Contacts contactsRef={contactsRef}/>
      <Footer/>
    </main>
  )
}

export default App
