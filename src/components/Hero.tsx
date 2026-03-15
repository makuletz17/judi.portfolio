import { personalInfo } from "../data/portfolioData";
import {
  MapPin,
  Mail,
  Download,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl "
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl "
          style={{ background: "#a78bfa", animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
            style={{
              background: "var(--accent-glow)",
              borderColor: "var(--accent)",
              color: "#ffffff",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Available for opportunities
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>
              {personalInfo.nickname}
            </span>
          </h1>

          <h2
            className="text-lg md:text-xl font-medium mb-6"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'Syne', sans-serif",
            }}>
            {personalInfo.title}
          </h2>

          <p
            className="leading-relaxed mb-4"
            style={{ color: "var(--text-muted)" }}>
            {personalInfo.tagline}
          </p>

          <p
            className="leading-relaxed mb-8 text-sm"
            style={{ color: "var(--text-muted)" }}>
            {personalInfo.summary}
          </p>

          {/* Location & Email */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}>
              <MapPin size={14} style={{ color: "var(--accent)" }} />
              {personalInfo.location}
            </div>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}>
              <Mail size={14} style={{ color: "var(--accent)" }} />
              {personalInfo.email}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="GitHub">
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border transition-all duration-200 hover:scale-110 hover:border-accent"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{
                background: "var(--accent)",
                color: "#070b1e",
                fontFamily: "'Syne', sans-serif",
              }}>
              Get in touch
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg font-semibold text-sm border transition-all duration-200 hover:opacity-90"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                fontFamily: "'Syne', sans-serif",
              }}>
              View Projects
            </button>

            <a
              href="/judi.portfolio/judi.arevalo.resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-all duration-200 hover:opacity-90"
              style={{
                borderColor: "#a78bfa",
                color: "#a78bfa",
                fontFamily: "'Syne', sans-serif",
              }}>
              <Download size={14} />
              Download CV
            </a>
          </div>
        </div>

        {/* Visual Card */}
        <div className="flex justify-center">
          <div
            className="relative w-72 h-72 rounded-2xl flex items-center justify-center"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}>
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                border: "1px solid var(--accent)",
                opacity: 0.3,
                scale: "1.05",
              }}
            />
            <div className="text-center">
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-bold mb-4 mx-auto"
                style={{
                  background: "linear-gradient(135deg, var(--accent), #a78bfa)",
                  color: "#070b1e",
                  fontFamily: "'Syne', sans-serif",
                }}>
                JA
              </div>
              <p
                className="font-bold text-base"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {personalInfo.name}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)" }}>
                8+ Years of Experience
              </p>
            </div>

            <div
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              99.9% uptime
            </div>
            <div
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg"
              style={{
                background: "var(--bg-card)",
                border: "1px solid #a78bfa",
                color: "#a78bfa",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
              Full-stack dev
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown size={20} style={{ color: "var(--text-muted)" }} />
      </div>
    </section>
  );
}
