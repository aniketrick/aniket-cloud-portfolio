import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { profile } from '../data'

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-section section-shell">
      <div className="contact-orb" aria-hidden="true" />
      <FadeIn y={30} duration={0.75}>
        <div className="contact-main">
          <p className="eyebrow">Let’s build something reliable</p>
          <h2>Have a cloud challenge?</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight />
          </a>
        </div>
      </FadeIn>

      <div className="contact-details">
        <FadeIn delay={0.08} y={20} duration={0.65}>
          <a href={`mailto:${profile.email}`}><Mail /> Email</a>
        </FadeIn>
        <FadeIn delay={0.14} y={20} duration={0.65}>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone /> {profile.phone}</a>
        </FadeIn>
        <FadeIn delay={0.2} y={20} duration={0.65}>
          <span><MapPin /> {profile.location}</span>
        </FadeIn>
        <FadeIn delay={0.26} y={20} duration={0.65}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        </FadeIn>
        <FadeIn delay={0.32} y={20} duration={0.65}>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </FadeIn>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aniket Chakraborty</span>
        <span>Cloud Engineering · DevOps · Platform Engineering</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}
