const ITEMS = ["Girls' Education", 'Higher Secondary', 'Shibpur · Howrah', 'Discipline & Care', 'Community Rooted']

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-maroon-900/10 bg-maroon-900 py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
