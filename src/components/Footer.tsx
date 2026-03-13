import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center border-t"
      style={{ borderColor: "var(--border)" }}>
      <p
        className="text-sm"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono', monospace",
        }}>
        Built by{" "}
        <span style={{ color: "var(--accent)" }}>{personalInfo.nickname}</span>
        {" · "}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
