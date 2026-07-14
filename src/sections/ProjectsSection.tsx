import { ArrowRight, Cloud, Database, Github, Server, ShieldCheck, Workflow } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { profile, projects } from '../data'

const nodeIcons = [Cloud, Workflow, Server, ShieldCheck, Database]

function ArchitectureVisual({ labels, accent }: { labels: string[]; accent: string }) {
  return (
    <div className={`architecture-visual accent-${accent}`}>
      <div className="architecture-grid" aria-hidden="true" />
      <div className="architecture-badge">Architecture flow</div>
      <div className="architecture-flow">
        {labels.map((label, index) => {
          const Icon = nodeIcons[index % nodeIcons.length]
          return (
            <div className="architecture-step" key={label}>
              <div className="architecture-node">
                <Icon size={23} />
                <span>{label}</span>
              </div>
              {index < labels.length - 1 && <ArrowRight className="flow-arrow" size={21} />}
            </div>
          )
        })}
      </div>
      <div className="terminal-window">
        <div className="terminal-dots"><span /><span /><span /></div>
        <code>
          <span>$ terraform apply</span>
          <span>✓ infrastructure ready</span>
          <span>✓ monitoring enabled</span>
        </code>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <div className="project-sticky" style={{ top: `${22 + index * 18}px` }}>
      <article className={`project-card accent-${project.accent}`}>
        <div className="project-copy">
          <div className="project-number-row">
            <span className="project-number">{project.number}</span>
            <span className="project-eyebrow">{project.eyebrow}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="project-outcomes">
            {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
          <div className="project-stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a className="project-link" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> Explore my GitHub <ArrowRight size={17} />
          </a>
        </div>
        <ArchitectureVisual labels={project.visual} accent={project.accent} />
      </article>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-shell">
        <div className="section-label"><span>04</span> Projects</div>
        <div className="projects-header">
          <FadeIn y={30} duration={0.7}>
            <div>
              <p className="eyebrow">Featured engineering work</p>
              <h2 className="section-title">Built to prove the whole delivery lifecycle.</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} y={20} duration={0.7}>
            <p className="section-intro">Architecture, automation, security, monitoring and recovery are treated as one system.</p>
          </FadeIn>
        </div>

        <div className="project-stack-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
