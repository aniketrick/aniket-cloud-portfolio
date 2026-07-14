import { Award, CheckCircle2, Clock3, GraduationCap } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { certifications, education } from '../data'

export default function CredentialsSection() {
  return (
    <section id="credentials" className="credentials-section">
      <div className="section-shell">
        <div className="section-label dark-label"><span>05</span> Credentials</div>
        <div className="credentials-grid">
          <div>
            <FadeIn y={28} duration={0.7}>
              <p className="eyebrow dark-eyebrow">Education</p>
              <h2 className="section-title dark-title">Strong foundations, continuously expanding.</h2>
            </FadeIn>
            <div className="education-list">
              {education.map((item, index) => (
                <FadeIn key={item.degree} delay={index * 0.08} y={20} duration={0.65}>
                  <article className="education-card">
                    <div className="credential-icon"><GraduationCap /></div>
                    <div>
                      <span className="credential-date">{item.date}</span>
                      <h3>{item.degree}</h3>
                      <p className="credential-place">{item.institution}</p>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="certifications-panel">
            <FadeIn delay={0.1} y={26} duration={0.7}>
              <div className="certifications-heading">
                <Award />
                <div>
                  <p className="eyebrow dark-eyebrow">Certifications</p>
                  <h3>Validated cloud knowledge.</h3>
                </div>
              </div>
            </FadeIn>
            <div className="certification-list">
              {certifications.map((certification, index) => (
                <FadeIn key={certification.name} delay={0.16 + index * 0.08} y={18} duration={0.6}>
                  <article className="certification-item">
                    {certification.status === 'Certified' ? <CheckCircle2 /> : <Clock3 />}
                    <div>
                      <h4>{certification.name}</h4>
                      <span className={certification.status === 'Certified' ? 'certified' : ''}>{certification.status}</span>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
            <div className="credential-quote">“The best infrastructure is the infrastructure a team can understand, repeat and trust.”</div>
          </div>
        </div>
      </div>
    </section>
  )
}
