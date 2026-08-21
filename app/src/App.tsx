import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './theatre'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import QuickInfo from './components/QuickInfo'
import About from './components/About'
import WhyUs from './components/WhyUs'
import SchoolLife from './components/SchoolLife'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}

      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-maroon-700 via-gold-500 to-maroon-700"
        style={{ scaleX: progress }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded-full focus:bg-maroon-700 focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <QuickInfo />
        <About />
        <WhyUs />
        <SchoolLife />
        <Location />
      </main>

      <Footer />
    </>
  )
}
