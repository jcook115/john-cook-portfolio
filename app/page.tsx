const projects = [
  {
    title: "AutoPoll Dashboard",
    description:
      "A KPI dashboard that collects and tracks business data with Python automation, Playwright scraping, GitHub Actions scheduling, CSV storage, and Render deployment.",
    tags: ["Python", "Playwright", "GitHub Actions", "CSV", "Render"],
  },
  {
    title: "Evening Sales Analysis",
    description:
      "A data analysis project built from Excel datasets using payment tendered totals, data cleaning, and clear graphs to understand sales patterns and performance.",
    tags: ["Excel", "Data Cleaning", "Graphs", "Sales Analysis"],
  },
  {
    title: "Spain Market Research Project",
    description:
      "A business research project exploring how a root beer product could be introduced into the Spanish soft drink market through market analysis and communication strategy.",
    tags: ["Market Research", "Business", "Spain", "Communication"],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-sand text-ink">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.18),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(31,58,95,0.16),_transparent_30%),linear-gradient(180deg,_#f8f5ef_0%,_#f4efe8_100%)]" />
        <div className="absolute inset-x-0 top-0 h-full bg-grid bg-[size:42px_42px] opacity-40" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between py-4">
            <p className="font-serif text-lg font-semibold tracking-wide text-slateblue">
              John Cook
            </p>
            <nav className="hidden gap-6 text-sm font-medium text-slateblue/80 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="flex flex-1 items-center py-16">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Business • Data • Communication
                </p>
                <h1 className="font-serif text-5xl leading-tight text-slateblue sm:text-6xl">
                  John Cook
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80 sm:text-xl">
                  Language &amp; World Business student building thoughtful
                  projects at the intersection of business, data, apps,
                  finance, Spanish, and international communication.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="rounded-full bg-slateblue px-6 py-3 text-sm font-semibold text-white transition hover:bg-slateblue/90"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-slateblue/20 bg-white/80 px-6 py-3 text-sm font-semibold text-slateblue transition hover:border-accent hover:text-accent"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-card backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Focus Areas
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "Business strategy and finance",
                    "Data analysis and dashboards",
                    "App-based problem solving",
                    "Spanish and global communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slateblue/10 bg-sand/70 p-4"
                    >
                      <p className="text-base font-medium text-slateblue">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              About
            </p>
            <h2 className="mt-4 font-serif text-3xl text-slateblue sm:text-4xl">
              Professional goals rooted in business and global perspective
            </h2>
          </div>
          <div className="rounded-[2rem] border border-slateblue/10 bg-white p-8 shadow-card">
            <p className="text-lg leading-8 text-ink/80">
              I am a Language &amp; World Business student at the University of
              Tennessee interested in business, data, apps, finance, Spanish,
              and international communication. I enjoy using analytical tools
              and clear communication to turn ideas into practical, useful
              work.
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Projects
            </p>
            <h2 className="mt-4 font-serif text-3xl text-slateblue sm:text-4xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/75">
            A few projects that reflect my interest in data-driven decisions,
            business insight, and practical tools.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[2rem] border border-slateblue/10 bg-white p-7 shadow-card transition hover:-translate-y-1"
            >
              <h3 className="font-serif text-2xl text-slateblue">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-ink/75">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slateblue"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8 sm:px-10 lg:px-12"
      >
        <div className="rounded-[2rem] bg-slateblue px-8 py-12 text-white shadow-card sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            I&apos;m always open to conversations about business, data, and new
            opportunities.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slateblue transition hover:bg-sand"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
