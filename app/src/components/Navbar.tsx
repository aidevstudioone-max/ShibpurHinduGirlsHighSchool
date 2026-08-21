import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { SCHOOL } from '../content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#life', label: 'School Life' },
  { href: '#location', label: 'Location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 24))

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
        animate={{
          paddingTop: scrolled ? '0.65rem' : '1rem',
          paddingBottom: scrolled ? '0.65rem' : '1rem',
          backgroundColor: scrolled ? 'rgba(253,248,239,0.9)' : 'rgba(253,248,239,0)',
          boxShadow: scrolled ? '0 10px 30px -15px rgba(58,13,28,0.15)' : '0 0 0 rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon-700 text-lg font-display font-bold text-gold-300 shadow-md shadow-maroon-900/30 ring-2 ring-gold-400/40">
            SHG
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-tight text-maroon-900 sm:text-base">
              Shibpur Hindu Girls
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-maroon-700/70">
              High School
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href={`tel:${SCHOOL.phoneTel}`} className="btn-primary !px-5 !py-2.5 !text-xs">
            Call Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon-700/30 text-maroon-800 transition-colors duration-300 hover:bg-maroon-700 hover:text-cream lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden bg-cream/98 backdrop-blur lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <nav className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={close} className="mobile-link">
                  {link.label}
                </a>
              ))}
              <a href={`tel:${SCHOOL.phoneTel}`} className="btn-primary mt-3 justify-center">
                Call Now — {SCHOOL.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
