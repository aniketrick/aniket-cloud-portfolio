import { Download, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { profile } from '../data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <FadeIn delay={0} y={-16} duration={0.7}>
        <nav className="navbar" aria-label="Primary navigation">
          <a href="#home" className="brand" aria-label="Aniket Chakraborty home">
            <span>AC</span>
          </a>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="nav-resume" href={profile.resume} download>
            <Download size={16} />
            CV
          </a>
        </nav>
      </FadeIn>

      <div className="hero-content">
        <div className="hero-copy">
          <FadeIn delay={0.1} y={24} duration={0.75}>
            <div className="availability-pill">
              <span className="availability-dot" />
              Open to Cloud, DevOps & Platform roles
            </div>
          </FadeIn>

          <FadeIn delay={0.18} y={34} duration={0.8}>
            <p className="hero-kicker">
              <Sparkles size={18} /> AWS Certified Solutions Architect
            </p>
            <h1>
              I build reliable
              <span> cloud platforms.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={30} duration={0.8}>
            <p className="hero-intro">
              Cloud Engineer specialising in AWS, Terraform, Kubernetes and CI/CD. I turn infrastructure into repeatable, observable and secure platforms.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={24} duration={0.75}>
            <div className="hero-actions">
              <ContactButton label="View projects" href="#projects" />
              <ContactButton label="Download CV" href={profile.resume} download secondary />
            </div>
          </FadeIn>

          <FadeIn delay={0.5} y={20} duration={0.7}>
            <div className="hero-meta">
              <div><MapPin size={17} /> {profile.location}</div>
              <div className="hero-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25} x={40} duration={0.9} className="hero-visual-wrap">
          <div className="hero-name-backdrop" aria-hidden="true">ANIKET</div>
          <div className="avatar-stage">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="avatar-card-label label-top">AWS · IAC · GITOPS</div>
            <div className="avatar-card-label label-bottom">BUILD · AUTOMATE · OBSERVE</div>
            <Magnet
              padding={100}
              strength={2.5}
              activeTransition="transform 0.25s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="avatar-magnet"
            >
              <img
                src="/assets/aniket-avatar.png"
                alt="3D portrait of Aniket Chakraborty"
                className="hero-avatar"
                loading="eager"
              />
            </Magnet>
          </div>
        </FadeIn>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span>Scroll</span>
        <span className="scroll-line" />
      </a>
    </section>
  )
}
