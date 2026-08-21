import type React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { SCHOOL } from '../content'

const ICONS = {
  pin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
}

function Card({
  icon,
  title,
  lines,
  sub,
}: {
  icon: keyof typeof ICONS
  title: string
  lines: React.ReactNode
  sub: string
}) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 30px 60px -30px rgba(58,13,28,0.18)' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="glass-card flex items-start gap-4 p-6 shadow-lg shadow-maroon-900/5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-maroon-700 text-gold-300">
        {ICONS[icon]}
      </span>
      <div>
        <h3 className="font-display text-lg font-semibold text-maroon-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/65">{lines}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-maroon-700/60">{sub}</p>
      </div>
    </motion.div>
  )
}

export default function QuickInfo() {
  return (
    <section className="relative -mt-1 bg-cream">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <Reveal delay={0}>
          <Card icon="pin" title="Address" lines={SCHOOL.address} sub={`Plus code: ${SCHOOL.plusCode.split(' ')[0]}`} />
        </Reveal>
        <Reveal delay={0.08}>
          <Card icon="clock" title="School Hours" lines={SCHOOL.hours} sub="Call ahead to confirm daily timings" />
        </Reveal>
        <Reveal delay={0.16}>
          <Card
            icon="phone"
            title="Phone"
            lines={
              <a href={`tel:${SCHOOL.phoneTel}`} className="underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-maroon-700">
                {SCHOOL.phoneDisplay}
              </a>
            }
            sub="Tap to call directly"
          />
        </Reveal>
      </div>
    </section>
  )
}
