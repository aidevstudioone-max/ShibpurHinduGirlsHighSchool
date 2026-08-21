import { motion } from 'framer-motion'
import Reveal from './Reveal'

const FEATURES = [
  {
    title: 'Girls-Focused Learning',
    desc: 'A dedicated environment that lets girl students focus, participate and lead without hesitation.',
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
  },
  {
    title: 'Neighbourhood Access',
    desc: 'Located right on Shibpur Road — an easy, familiar commute for families across Shibtala and Naora.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
        <path d="M3 12h18" />
      </>
    ),
  },
  {
    title: 'Accessible Campus',
    desc: 'The school premises are wheelchair accessible, welcoming students of all abilities.',
    icon: <path d="M4.5 12.5 10 18l9.5-11" />,
  },
  {
    title: 'Community Rooted',
    desc: 'A well-known part of local life, with community health and awareness programmes held on campus.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-gradient-to-b from-cream to-maroon-50/60 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Why Families Choose Us
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-maroon-900 sm:text-5xl">A school built around girls</h2>
          <p className="mt-4 text-ink/65">Everything about the school is designed with one focus — helping girl students thrive academically and personally.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-3xl bg-white p-7 shadow-lg shadow-maroon-900/5 ring-1 ring-maroon-900/5"
              >
                <motion.span
                  whileHover={{ rotate: 8 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon-700 text-gold-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
                    {f.icon}
                  </svg>
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-semibold text-maroon-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
