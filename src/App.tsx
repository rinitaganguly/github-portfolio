import { useState } from "react"
import { useForm } from "@formspree/react"
import { Menu, X } from "lucide-react"

function App() {
  const [state, handleSubmit] = useForm("xbgrqkrz")
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      number: "01",
      title: "SentinelAI",
      category: "AI / Security",
      description:
        "An AI-powered SAST platform that analyzes source code and generates structured security reports with vulnerability insights.",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "AI"],
      github: "https://github.com/rinitaganguly/SentinelAI",
      live: "https://sentinel-ai-ten-virid.vercel.app/",
    },
    {
      number: "02",
      title: "AI Object Tracker",
      category: "Computer Vision",
      description:
        "An AI-powered computer vision application for detecting and tracking objects in images and video.",
      technologies: ["Python", "OpenCV", "Computer Vision", "AI"],
      github: "https://github.com/rinitaganguly/ai-object-tracker",
      live: null,
    },
    {
      number: "03",
      title: "Savor Restaurant",
      category: "Web Development",
      description:
        "A responsive restaurant website featuring menu browsing, category filtering, reservations, events, and a mobile-friendly experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      github: "https://github.com/rinitaganguly/savor-restaurant",
      live: "https://rinitaganguly.github.io/savor-restaurant/",
    },
    {
      number: "04",
      title: "ShopEase E-commerce",
      category: "Full-Stack",
      description:
        "A full-stack e-commerce platform with product browsing, cart and wishlist functionality, checkout flow, REST APIs, and responsive UI.",
      technologies: ["React", "Express", "REST API", "JavaScript"],
      github: "https://github.com/rinitaganguly/shopease-ecommerce",
      live: "https://shopease-ecommerce-blush.vercel.app/",
    },
  ]

  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "FastAPI",
    "HTML",
    "CSS",
    "SQL",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "OpenCV",
    "REST APIs",
    "n8n",
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight"
          >
            RG
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/rinitaganguly"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3.5 py-2 text-xs transition hover:bg-white hover:text-black sm:px-4 sm:text-sm"
            >
              GitHub
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="rounded-full border border-white/20 p-2 transition hover:bg-white hover:text-black md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050505] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-20 sm:px-6">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="relative w-full max-w-4xl text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-gray-500 sm:text-sm sm:tracking-[0.35em]">
            Computer Science · AI · Development
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl">
            Rinita Ganguly
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
            I build AI-powered applications, automation tools, and modern
            full-stack experiences.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Explore my work
            </a>

            <a
              href="https://www.linkedin.com/in/rinita-ganguly-60555940a/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block text-xs text-gray-600 transition hover:text-gray-300 sm:text-sm"
          >
            Have a project in mind? ↓
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            About
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Building, learning,
            <br />
            and experimenting.
          </h2>

          <p className="mt-7 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
            I’m a Computer Science student interested in artificial
            intelligence, machine learning, full-stack development, and
            automation. I enjoy taking ideas from concept to working software
            and continuously learning through hands-on projects.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
          Projects
        </p>

        <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Selected work.
          </h2>

          <a
            href="https://github.com/rinitaganguly"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            View all on GitHub →
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-600">{project.number}</p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-gray-400 sm:px-3 sm:text-xs">
                  {project.category}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-gray-400 sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-5 pt-7 sm:pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium transition hover:text-gray-300"
                >
                  GitHub →
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-400 transition hover:text-white"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
          Skills
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Technologies I work with.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-12 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-4 py-2.5 text-xs text-gray-400 transition hover:border-white/30 hover:text-white sm:px-5 sm:py-3 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:rounded-3xl sm:p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
              Contact
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Let’s build something.
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Have a project idea, collaboration opportunity, internship
              opportunity, or just want to connect? Send me a message.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-500">
              <a
                href="https://github.com/rinitaganguly"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                GitHub →
              </a>

              <a
                href="https://www.linkedin.com/in/rinita-ganguly-60555940a/"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div>
            {state.succeeded ? (
              <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-8 text-center">
                <div>
                  <p className="text-xl font-medium">Message sent.</p>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    Thanks for reaching out. I’ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a little about it..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                  />
                </div>

                {state.errors && (
                  <p className="text-sm text-red-400">
                    Something went wrong while sending your message.
                    Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-center text-xs text-gray-600 sm:flex-row sm:text-left sm:text-sm">
          <span>© 2026 Rinita Ganguly</span>
          <span>Built with React + TypeScript</span>
        </div>
      </footer>
    </main>
  )
}

export default App