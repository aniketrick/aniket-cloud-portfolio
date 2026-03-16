import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  ExternalLink
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

export default function Portfolio() {
  const skills = [
    {
      title: "Languages",
      items: ["Python", "Java", "SQL", "JavaScript", "PHP", "C"]
    },
    {
      title: "Frontend",
      items: ["React", "TailwindCSS", "HTML5", "CSS3", "Bootstrap", "Vite"]
    },
    {
      title: "Backend",
      items: ["Node.js", "Laravel", "MySQL", "SQLite", "RDBMS"]
    },
    {
      title: "Cloud / DevOps",
      items: ["AWS", "Terraform", "Lambda", "DynamoDB", "CloudFront", "S3", "CI/CD", "Git"]
    }
  ];

  const projects = [
    {
      title: "Serverless Task Manager",
      desc: "A cloud-native task system featuring a React frontend and an AWS backend automated via Terraform, utilizing Lambda and DynamoDB for scalable, event-driven data handling.",
      link: "https://github.com/aniketrick/cloud-task-manager",
      isClickable: true
    },
    {
      title: "Cloud Native Portfolio",
      desc: "A high-performance SPA built with React and Tailwind, globally distributed through an AWS CloudFront CDN and hosted on S3 for maximum availability.",
      link: "https://github.com/aniketrick/portfolio-aws",
      isClickable: true
    },
    {
      title: "Book Exchange Web App",
      desc: "A full-stack Laravel platform featuring Tesseract OCR for automated book detection and a React-driven user interface.",
      link: "https://github.com/aniketrick/book-exchange",
      isClickable: true
    },
    {
      title: "TextUtils",
      desc: "A React-based utility for real-time text analysis and manipulation. Features include word/character counting, regex-based extra space removal, and advanced case transformations.",
      link: "https://aniketrick.github.io/textUtils/",
      isClickable: true
    },
    {
      title: "Thermal Face Mask Detection",
      desc: "An AI-powered safety monitoring system leveraging OpenCV and TensorFlow to detect mask compliance in thermal imaging streams.",
      isClickable: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg tracking-tighter">AC.</h1>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* HERO SECTION */}
        <section id="about" className="mb-32">
          <motion.div {...fadeUp}>
            <img
              src="/profile.png"
              alt="Aniket Chakraborty"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-6 shadow-lg object-cover"
            />
            <h2 className="text-indigo-400 mb-4 font-mono">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
              Aniket <br />
              <span className="text-slate-500">Chakraborty.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-6">
              Computer Science graduate specializing in
              <span className="text-indigo-400 font-semibold">
                {" "}Cloud Infrastructure, DevOps Automation and Serverless Architectures
              </span>. Experienced in AWS, Terraform, and building scalable CI/CD pipelines.
            </p>
            <div className="flex gap-4">
              <a href="/resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors">
                <Download size={18} /> Resume
              </a>
              <a href="https://github.com/aniketrick" className="p-3 rounded-lg border border-white/10 hover:border-indigo-500 transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/aniket-chakraborty07" className="p-3 rounded-lg border border-white/10 hover:border-indigo-500 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:aniket07chakraborty@gmail.com" className="p-3 rounded-lg border border-white/10 hover:border-indigo-500 transition-colors"><Mail size={20} /></a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Code2 className="text-indigo-400" /> Skills
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10">
                  <h4 className="text-indigo-400 font-semibold mb-4">{skill.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-white/5 rounded text-xs text-slate-300">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Cpu className="text-indigo-400" /> Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => {
                const CardWrapper = project.isClickable ? 'a' : 'div';
                const cardProps = project.isClickable 
                  ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } 
                  : {};

                return (
                  <CardWrapper
                    key={i}
                    {...cardProps}
                    className={`p-8 rounded-3xl bg-slate-900/60 backdrop-blur border border-white/10 transition-all group flex flex-col justify-between ${
                      project.isClickable 
                        ? "hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer" 
                        : "cursor-default"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h4>
                        {project.isClickable && (
                          <ExternalLink size={18} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
                        )}
                      </div>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.desc}
                      </p>
                    </div>
                    {project.isClickable && (
                      <div className="mt-6 text-xs font-mono text-indigo-400/60 group-hover:text-indigo-400 transition-colors">
                        View Project →
                      </div>
                    )}
                  </CardWrapper>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-indigo-400" /> Experience
            </h3>
            <div className="space-y-10">
              <div className="border-l-2 border-indigo-500 pl-6">
                <h4 className="text-xl font-bold">Quality Engineering & Assurance</h4>
                <p className="text-indigo-400">Cognizant Technology Solutions</p>
                <p className="text-sm text-slate-500 mb-3">Jan 2022 – Dec 2022</p>
                <ul className="text-slate-400 space-y-2 list-disc list-inside text-sm">
                  <li>Led Agile team of 45 members.</li>
                  <li>Developed automation frameworks using Java, Selenium, and SQL.</li>
                  <li>Delivered Flipkart & Zig Wheels enterprise automation systems.</li>
                </ul>
              </div>
              <div className="border-l-2 border-indigo-500 pl-6">
                <h4 className="text-xl font-bold">Casual Safety Host</h4>
                <p className="text-indigo-400">Liverpool Football Club</p>
                <p className="text-sm text-slate-500">Oct 2024 – Present</p>
                <p className="text-slate-400 mt-2 text-sm">Crowd safety and emergency response operations at Anfield stadium.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <GraduationCap className="text-indigo-400" /> Education
            </h3>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold">MSc Computer Science</h4>
                <p className="text-slate-400">University of Liverpool</p>
                <p className="text-indigo-400 text-sm">2024 – 2025 | Grade: 2:1</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold">B.Tech Electronics & Instrumentation</h4>
                <p className="text-slate-400">Narula Institute of Technology</p>
                <p className="text-indigo-400 text-sm">2018 – 2022 | 83%</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Award className="text-indigo-400" /> Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center">
                <span className="text-slate-300">AWS Certified Solutions Architect – Associate</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded border border-indigo-500/30 uppercase tracking-widest font-bold">In Progress</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-slate-400">
                <span>Advanced Programming in Python — Coursera</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-slate-400">
                <span>Java for Automation Testing — Udemy</span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-slate-400">
                <span>Career Essentials in Software Development — Microsoft</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-32">
          <motion.div {...fadeUp}>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Mail className="text-indigo-400" /> Contact Me
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10 text-center">
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <a href="mailto:aniket07chakraborty@gmail.com" className="text-indigo-400 hover:text-indigo-300 break-all text-sm">aniket07chakraborty@gmail.com</a>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10 text-center">
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <p className="text-indigo-400 text-sm">+44 07587678983</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10 text-center">
                <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>
                <a href="https://linkedin.com/in/aniket-chakraborty07" className="text-indigo-400 hover:text-indigo-300 text-sm">aniket-chakraborty07</a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pt-20 border-t border-white/10 space-y-4">
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="https://github.com/aniketrick" className="hover:text-white transition-colors">Github</a>
            <a href="https://linkedin.com/in/aniket-chakraborty07" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Aniket Chakraborty • Architected with Terraform & AWS
          </p>
        </footer>
      </main>
    </div>
  );
}