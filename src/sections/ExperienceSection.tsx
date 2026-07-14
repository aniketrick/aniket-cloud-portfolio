import { BriefcaseBusiness, MapPin } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { experiences } from '../data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-shell">
      <div className="section-label"><span>03</span> Experience</div>
      <div className="experience-header">
        <FadeIn y={30} duration={0.7}>
          <div>
            <p className="eyebrow">Selected experience</p>
            <h2 className="section-title">Automation, delivery and operational ownership.</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} y={20} duration={0.7}>
          <p className="section-intro">A background spanning cloud engineering, quality automation and team leadership.</p>
        </FadeIn>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <FadeIn key={`${experience.company}-${experience.role}`} delay={index * 0.08} y={24} duration={0.65}>
            <article className="timeline-item">
              <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
              <div className="timeline-date">{experience.date}</div>
              <div className="timeline-content">
                <div className="timeline-title-row">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                  </div>
                  <span className="timeline-location"><MapPin size={15} /> {experience.location}</span>
                </div>
                <p className="timeline-summary">{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
