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
  Cpu
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
      items: ["Laravel", "MySQL", "SQLite", "RDBMS"]
    },
    {
      title: "Cloud / DevOps",
      items: ["AWS", "S3", "CloudFront", "IAM", "CI/CD", "Git"]
    }
  ];

  const projects = [
    {
      title: "Cloud Native Portfolio",
      desc: "React + Tailwind SPA deployed using AWS S3 and CloudFront CDN."
    },
    {
      title: "Book Exchange Web App",
      desc: "Full stack Laravel + React app with OCR book detection."
    },
    {
      title: "Thermal Face Mask Detection",
      desc: "AI detection system using OpenCV and TensorFlow."
    },
    {
      title: "Research Literature Recommendation",
      desc: "Research analysis on GloVe + RoBERTa hybrid model."
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
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">AC.</h1>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* HERO */}
        <section id="about" className="mb-32">
          <motion.div {...fadeUp}>

            <img
              src="/profile.png"
              alt="Aniket Chakraborty"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-6 shadow-lg"
            />

            <h2 className="text-indigo-400 mb-4 font-mono">
              Hi, my name is
            </h2>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
              Aniket <br />
              <span className="text-slate-500">Chakraborty.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mb-6">
              Computer Science graduate specializing in
              <span className="text-indigo-400 font-semibold">
                {" "}Cloud Infrastructure, DevOps Automation and CI/CD pipelines
              </span>. Experienced in AWS, Python and scalable cloud applications.
            </p>

            <div className="flex gap-4">

              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400"
              >
                <Download size={18} />
                Resume
              </a>

              <a
                href="https://github.com/aniketrick"
                className="p-3 rounded-lg border border-white/10 hover:border-indigo-500"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/aniket-chakraborty07"
                className="p-3 rounded-lg border border-white/10 hover:border-indigo-500"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:aniket07chakraborty@gmail.com"
                className="p-3 rounded-lg border border-white/10 hover:border-indigo-500"
              >
                <Mail size={20} />
              </a>

            </div>

          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Code2 className="text-indigo-400" /> Skills
            </h3>

            <div className="grid md:grid-cols-4 gap-6">

              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10"
                >
                  <h4 className="text-indigo-400 font-semibold mb-4">
                    {skill.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/5 rounded text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>

          </motion.div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-indigo-400" /> Experience
            </h3>

            <div className="space-y-10">

              <div className="border-l border-indigo-500 pl-6">
                <h4 className="text-xl font-bold">
                  Quality Engineering & Assurance
                </h4>

                <p className="text-indigo-400">
                  Cognizant Technology Solutions
                </p>

                <p className="text-sm text-slate-500 mb-3">
                  Jan 2022 – Dec 2022
                </p>

                <ul className="text-slate-400 space-y-2">
                  <li>Led Agile team of 45 members.</li>
                  <li>Improved automation frameworks using Java, Selenium, SQL.</li>
                  <li>Delivered Flipkart & Zig Wheels automation systems.</li>
                </ul>
              </div>

              <div className="border-l border-indigo-500 pl-6">
                <h4 className="text-xl font-bold">
                  Casual Safety Host
                </h4>

                <p className="text-indigo-400">
                  Liverpool Football Club
                </p>

                <p className="text-sm text-slate-500">
                  Oct 2024 – Present
                </p>

                <p className="text-slate-400 mt-2">
                  Crowd safety and emergency response operations at Anfield stadium.
                </p>
              </div>

            </div>

          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Cpu className="text-indigo-400" /> Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              {projects.map((project, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur border border-white/10 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
                >
                  <h4 className="text-xl font-bold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-slate-400">
                    {project.desc}
                  </p>
                </div>
              ))}

            </div>

          </motion.div>
        </section>

        {/* EDUCATION */}
        <section className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <GraduationCap className="text-indigo-400" /> Education
            </h3>

            <div className="space-y-6">

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold">
                  MSc Computer Science
                </h4>
                <p className="text-slate-400">
                  University of Liverpool
                </p>
                <p className="text-indigo-400 text-sm">
                  2024 – 2025 | Grade: 2:1
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold">
                  B.Tech Electronics & Instrumentation
                </h4>
                <p className="text-slate-400">
                  Narula Institute of Technology
                </p>
                <p className="text-indigo-400 text-sm">
                  2018 – 2022 | 83%
                </p>
              </div>

            </div>

          </motion.div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Award className="text-indigo-400" /> Certifications
            </h3>

            <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
              <li>Advanced Programming in Python — Coursera</li>
              <li>Java for Automation Testing — Udemy</li>
              <li>Web Development Bootcamp — freeCodeCamp</li>
              <li>Career Essentials in Software Development — Microsoft</li>
            </ul>

          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-32">
          <motion.div {...fadeUp}>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Mail className="text-indigo-400" /> Contact Me
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10">
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p className="text-slate-400 mb-4">
                  Feel free to reach out anytime.
                </p>

                <a
                  href="mailto:aniket07chakraborty@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  aniket07chakraborty@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10">
                <h4 className="text-lg font-semibold mb-2">Phone</h4>

                <p className="text-slate-400 mb-4">
                  Available for opportunities.
                </p>

                <p className="text-indigo-400">
                  +44 07587678983
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10">
                <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>

                <p className="text-slate-400 mb-4">
                  Connect professionally.
                </p>

                <a
                  href="https://linkedin.com/in/aniket-chakraborty07"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  linkedin.com/in/aniket-chakraborty07
                </a>
              </div>

            </div>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="text-center pt-20 border-t border-white/10 space-y-4">

          <div className="flex justify-center gap-6 text-slate-400">
            <a href="https://github.com/aniketrick">Github</a>
            <a href="https://linkedin.com/in/aniket-chakraborty07">LinkedIn</a>
            <a href="mailto:aniket07chakraborty@gmail.com">Email</a>
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 Aniket Chakraborty • Built with React + Tailwind + AWS
          </p>

        </footer>

      </main>
    </div>
  );
}