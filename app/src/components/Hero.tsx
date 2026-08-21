import { lazy, Suspense, useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import gsap from 'gsap'
import Lottie from '../lottieShim'
import sparkles from '../lottie/hero-sparkles.json'
import { DIRECTIONS_URL, SCHOOL } from '../content'

// The 3D scene is hidden on mobile (lg:flex only) and pulls in Three.js /
// R3F, so it's lazy-loaded — phones never pay for that JS at all.
const Scene3D = lazy(() => import('./Scene3D'))

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([line1Ref.current, line2Ref.current], { yPercent: 110 })
      gsap.to([line1Ref.current, line2Ref.current], {
        yPercent: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power4.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 bg-gradient-to-br from-maroon-300/50 to-maroon-500/30 blob-shape blur-2xl" />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-96 w-96 bg-gradient-to-br from-gold-200/70 to-gold-400/40 blob-shape blur-2xl"
        style={{ animationDelay: '-3s' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" style={{ backgroundSize: '22px 22px' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <motion.span
            className="section-eyebrow"
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Higher Secondary School for Girls · Shibpur, Howrah
          </motion.span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.18] tracking-tight text-maroon-900 sm:text-[3.75rem] lg:text-[4rem]">
            <span className="block overflow-hidden">
              <span ref={line1Ref} className="gradient-text block">Shibpur Hindu</span>
            </span>
            <span className="block overflow-hidden">
              <span ref={line2Ref} className="block">Girls High School</span>
            </span>
          </h1>

          <motion.p
            className="font-bengali mt-3 text-xl text-maroon-700/80 sm:text-2xl"
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
          >
            {SCHOOL.nameBn}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
            initial="hidden"
            animate="show"
            custom={0.62}
            variants={fadeUp}
          >
            A neighbourhood institution in the heart of Shibtala, Naora — shaping confident, capable young women
            through education, discipline and community, right here in Shibpur.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial="hidden"
            animate="show"
            custom={0.74}
            variants={fadeUp}
          >
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener" className="btn-primary">
              Get Directions
            </a>
            <a href={`tel:${SCHOOL.phoneTel}`} className="btn-secondary">
              {SCHOOL.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60"
            initial="hidden"
            animate="show"
            custom={0.86}
            variants={fadeUp}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gold-600">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {SCHOOL.hours}
            </span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gold-600">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Shibpur Rd, Shibtala, Naora
            </span>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="absolute inset-6 rounded-[3rem] ring-1 ring-inset ring-gold-300/30" />
          <div className="absolute inset-16 rounded-[2.5rem] border border-gold-300/30" />
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>
          <div className="pointer-events-none absolute left-2 top-6 h-24 w-24">
            <Lottie animationData={sparkles} loop autoplay />
          </div>
          <div className="pointer-events-none absolute bottom-4 right-0 h-20 w-20">
            <Lottie animationData={sparkles} loop autoplay />
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-cream px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-maroon-700 shadow-lg">
            Est. in Shibpur
          </span>
        </motion.div>
      </div>
    </section>
  )
}
