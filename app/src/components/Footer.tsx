import { DIRECTIONS_URL, SCHOOL } from '../content'

export default function Footer() {
  return (
    <footer className="bg-maroon-950 py-14 text-cream/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-cream/10 pb-10 sm:flex-row sm:items-center">
          <a href="#hero" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-lg font-display font-bold text-maroon-900">
              SHG
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-cream">{SCHOOL.nameEn}</span>
              <span className="font-bengali block text-sm text-cream/50">{SCHOOL.nameBn}</span>
            </span>
          </a>
          <div className="flex gap-3">
            <a href={`tel:${SCHOOL.phoneTel}`} className="btn-secondary !border-cream/30 !text-cream hover:!border-gold-400 hover:!bg-gold-400 hover:!text-maroon-900">
              Call Now
            </a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener" className="btn-primary !bg-gold-400 !text-maroon-900 hover:!bg-gold-300">
              Directions
            </a>
          </div>
        </div>
        <div className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
          <p>
            45, Shibpur Rd, Shibtala, Naora,
            <br />
            Shibpur, Howrah, West Bengal 711102
          </p>
          <p>
            {SCHOOL.phoneDisplay}
            <br />
            {SCHOOL.hours}
          </p>
          <p className="sm:text-right">
            Higher Secondary School for Girls
            <br />
            Shibpur, Howrah, West Bengal
          </p>
        </div>
        <p className="mt-8 text-xs text-cream/40">
          Unofficial informational website built from public listing data. Not the school's official website. Details may change — please call ahead to confirm.
        </p>
      </div>
    </footer>
  )
}
