import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { MAPS_PHOTOS_URL } from '../content'

const TILES = [
  {
    label: 'Classrooms',
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    label: 'Assembly',
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </>
    ),
  },
  {
    label: 'Achievements',
    icon: <path d="M8 21h8M12 17v4M17 3H7a2 2 0 0 0-2 2v6a7 7 0 0 0 14 0V5a2 2 0 0 0-2-2Z" />,
  },
  {
    label: 'Health & Wellness Camps',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
]

export default function SchoolLife() {
  return (
    <section id="life" className="relative bg-maroon-900 py-24 text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain" style={{ backgroundSize: '20px 20px' }} />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            School Life
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">Glimpses of everyday school life</h2>
          <p className="mt-4 text-cream/65">
            We're gathering official photographs for this page. In the meantime, here's a look at the spaces that make up daily life on campus.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }} className="gallery-tile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12 text-gold-300">
                  {tile.icon}
                </svg>
                <span className="mt-4 font-display text-lg font-semibold">{tile.label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={0.2}>
          <a
            href={MAPS_PHOTOS_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:text-maroon-900"
          >
            View Photos on Google Maps
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
