import Reveal from './Reveal'
import { DIRECTIONS_URL, MAP_EMBED_URL, SCHOOL } from '../content'

const ROWS = [
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    title: 'Address',
    content: <p className="mt-1 text-sm text-ink/65">{SCHOOL.address}</p>,
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    title: 'Phone',
    content: (
      <p className="mt-1 text-sm text-ink/65">
        <a href={`tel:${SCHOOL.phoneTel}`} className="hover:text-maroon-700">
          {SCHOOL.phoneDisplay}
        </a>
      </p>
    ),
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    title: 'Hours',
    content: <p className="mt-1 text-sm text-ink/65">{SCHOOL.hours}</p>,
  },
  {
    icon: (
      <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    title: 'Plus Code',
    content: <p className="mt-1 text-sm text-ink/65">{SCHOOL.plusCode}</p>,
  },
]

export default function Location() {
  return (
    <section id="location" className="relative bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> Visit Us
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold text-maroon-900 sm:text-5xl">Find us in Shibpur</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass-card flex flex-col justify-between gap-8 p-8 shadow-xl shadow-maroon-900/10">
            <div className="space-y-6">
              {ROWS.map((row) => (
                <div key={row.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon-700 text-gold-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                      {row.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-maroon-900">{row.title}</h3>
                    {row.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener" className="btn-primary flex-1 justify-center">
                Get Directions
              </a>
              <a href={`tel:${SCHOOL.phoneTel}`} className="btn-secondary flex-1 justify-center">
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="overflow-hidden rounded-3xl shadow-xl shadow-maroon-900/10 ring-1 ring-maroon-900/5">
            <iframe
              title="Map showing Shibpur Hindu Girls High School"
              src={MAP_EMBED_URL}
              className="h-full min-h-[420px] w-full grayscale-[10%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
