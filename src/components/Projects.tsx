import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">
          <div className="mb-14">
            <p
              className="text-sm font-medium mb-2"
              style={{
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              projects
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Featured <span className="gradient-text">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="card-hover p-6 rounded-xl group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                      {project.type}
                    </span>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      {project.title}
                    </h3>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-muted)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${project.color}20` }}>
                    {project.type === "Web App" ? "🌐" : "📱"}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs flex items-start gap-2"
                      style={{ color: "var(--text-muted)" }}>
                      <span style={{ color: project.color, marginTop: "2px" }}>
                        ▸
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div
                  className="flex flex-wrap gap-2 pt-4 border-t"
                  style={{ borderColor: "var(--border)" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-muted)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
