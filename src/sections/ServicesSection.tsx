import { Activity, Boxes, CloudCog, Code2, ShieldCheck } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { skillGroups } from '../data'

const icons = [CloudCog, Boxes, ShieldCheck, Code2]

export default function ServicesSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-shell">
        <div className="section-label dark-label"><span>02</span> Skills</div>
        <div className="skills-heading-row">
          <FadeIn y={30} duration={0.7}>
            <div>
              <p className="eyebrow dark-eyebrow">Core capabilities</p>
              <h2 className="section-title dark-title">A practical stack for modern cloud delivery.</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} y={20} duration={0.7}>
            <div className="skills-note"><Activity /> Built through production experience and end-to-end projects.</div>
          </FadeIn>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <FadeIn key={group.title} delay={index * 0.08} y={26} duration={0.65}>
                <article className="skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon"><Icon size={25} /></div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
