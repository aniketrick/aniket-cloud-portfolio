import { technologies } from '../data'

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const repeated = [...technologies, ...technologies]
  return (
    <div className="marquee-track-wrap">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {repeated.map((technology, index) => (
          <div className="technology-pill" key={`${technology}-${index}`}>
            <span className="tech-dot" />
            {technology}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="marquee-section" aria-label="Technology stack">
      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  )
}
