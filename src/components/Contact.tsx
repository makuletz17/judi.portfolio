import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div ref={ref} className="section-reveal">
          <p
            className="text-sm font-medium mb-2"
            style={{
              color: "var(--accent)",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
            contact
          </p>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "var(--text-muted)" }}>
            Whether you have a project in mind, need IT consulting, or just want
            to chat about technology — my inbox is always open.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="card-hover p-5 rounded-xl flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-glow)" }}>
                <Mail size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--text-muted)" }}>
                  Email
                </p>
                <p
                  className="text-sm font-medium break-all"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                  }}>
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="card-hover p-5 rounded-xl flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-glow)" }}>
                <Phone size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--text-muted)" }}>
                  Phone
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            <div className="card-hover p-5 rounded-xl flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-glow)" }}>
                <MapPin size={20} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--text-muted)" }}>
                  Location
                </p>
                <p
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                  }}>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{
              background: "var(--accent)",
              color: "#070b1e",
              fontFamily: "'Syne', sans-serif",
            }}>
            <Send size={16} />
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
