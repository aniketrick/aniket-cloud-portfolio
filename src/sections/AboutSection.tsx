import { ArrowDownRight, CheckCircle2 } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { stats } from '../data'

const aboutText =
  'I combine cloud architecture with hands-on automation. From resilient AWS networks and event-driven serverless systems to GitOps Kubernetes platforms, I focus on infrastructure that is repeatable, secure and easy to operate.'

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="section-label"><span>01</span> About</div>
      <div className="about-layout">
        <FadeIn y={32} duration={0.7}>
          <div className="about-heading-wrap">
            <p className="eyebrow">Engineering with purpose</p>
            <h2 className="section-title">Cloud systems that work beyond the demo.</h2>
          </div>
        </FadeIn>

        <div className="about-copy">
          <AnimatedText text={aboutText} className="about-lead" />
          <FadeIn delay={0.15} y={24} duration={0.7}>
            <div className="about-principles">
              <div><CheckCircle2 /> Infrastructure as Code first</div>
              <div><CheckCircle2 /> Observability built in</div>
              <div><CheckCircle2 /> Least-privilege by default</div>
              <div><CheckCircle2 /> Cost-aware architecture</div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <FadeIn key={stat.value} delay={index * 0.08} y={24} duration={0.65}>
            <article className="stat-card">
              <ArrowDownRight className="stat-arrow" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
