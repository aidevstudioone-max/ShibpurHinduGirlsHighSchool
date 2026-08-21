import { motion } from 'framer-motion'
import Reveal from './Reveal'

const TAGS = ['Girls Only', 'Higher Secondary', 'Wheelchair Accessible', 'Neighbourhood School']

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold-100 to-maroon-100 blob-shape" />
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-maroon-700 to-maroon-900 text-cream shadow-xl shadow-maroon-900/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-16 w-16 text-gold-300">
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
              </svg>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="flex h-32 items-center justify-center rounded-3xl bg-gold-50 shadow-lg shadow-maroon-900/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-maroon-700">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} className="flex h-32 items-center justify-center rounded-3xl bg-maroon-50 shadow-lg shadow-maroon-900/5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-10 w-10 text-maroon-700">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> About the School
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-maroon-900 sm:text-5xl">
            Rooted in Shibpur, focused on every girl's future
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Shibpur Hindu Girls High School is a higher secondary school serving girl students from Shibtala, Naora
            and the wider Shibpur neighbourhood of Howrah. As a dedicated girls' institution, the school provides a
            focused, supportive environment where students can learn, grow and build the confidence to pursue their
            goals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Being close to landmarks like Andul Road and AK Roychoudhury Lane, the school has long been an
            accessible, familiar part of daily life for families across the locality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <span key={tag} className="rounded-full bg-cream px-4 py-2 text-xs font-bold uppercase tracking-wide text-maroon-700 ring-1 ring-maroon-700/15">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
