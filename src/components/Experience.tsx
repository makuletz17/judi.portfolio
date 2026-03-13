import { experience, education } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">
          <div className="mb-14">
            <p
              className="text-sm font-medium mb-2"
              style={{
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              experience
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Career <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Briefcase size={18} style={{ color: "var(--accent)" }} />
                <h3
                  className="font-semibold text-base"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Work Experience
                </h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-3 top-0 bottom-0 w-px"
                  style={{ background: "var(--border)" }}
                />

                <div className="space-y-8">
                  {experience.map((exp, i) => (
                    <div key={i} className="relative pl-10">
                      {/* Dot */}
                      <div
                        className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background: exp.current
                            ? "var(--accent)"
                            : "var(--bg-card)",
                          border: `2px solid ${exp.current ? "var(--accent)" : "var(--border)"}`,
                        }}>
                        {exp.current && (
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ background: "#070b1e" }}
                          />
                        )}
                      </div>

                      <div className="card-hover p-5 rounded-xl">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h4
                              className="font-bold text-base"
                              style={{ fontFamily: "'Syne', sans-serif" }}>
                              {exp.role}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span
                                className="text-sm font-medium"
                                style={{ color: "var(--accent)" }}>
                                {exp.company}
                              </span>
                              <span style={{ color: "var(--border)" }}>·</span>
                              <span
                                className="text-xs flex items-center gap-1"
                                style={{ color: "var(--text-muted)" }}>
                                <MapPin size={10} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className="text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: "var(--accent-glow)",
                                color: "var(--accent)",
                                fontFamily: "'JetBrains Mono', monospace",
                                border: "1px solid var(--accent)",
                                opacity: exp.current ? 1 : 0.6,
                              }}>
                              {exp.period}
                            </span>
                            {exp.current && (
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{
                                  background: "rgba(100,255,218,0.2)",
                                  color: "#64ffda",
                                }}>
                                Current
                              </span>
                            )}
                          </div>
                        </div>

                        <ul className="space-y-1.5">
                          {exp.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="text-xs flex items-start gap-2"
                              style={{ color: "var(--text-muted)" }}>
                              <span
                                style={{
                                  color: "var(--accent)",
                                  marginTop: "2px",
                                }}>
                                ▸
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap size={18} style={{ color: "var(--accent)" }} />
                <h3
                  className="font-semibold text-base"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="card-hover p-5 rounded-xl">
                    <div
                      className="text-xs mb-2"
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>
                      {edu.year}
                    </div>
                    <h4
                      className="font-bold text-sm mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      {edu.degree}
                    </h4>
                    {edu.field && (
                      <p
                        className="text-xs mb-2"
                        style={{ color: "var(--accent)" }}>
                        {edu.field}
                      </p>
                    )}
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}>
                      {edu.school}
                    </p>
                    <p
                      className="text-xs flex items-center gap-1 mt-1"
                      style={{ color: "var(--text-muted)" }}>
                      <MapPin size={10} />
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
